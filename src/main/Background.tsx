import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import { MpScreen } from "../types";

interface BackgroundProps {
  screens: MpScreen[];
  screenIndex: number;
}

export default function Background({ screens, screenIndex }: BackgroundProps) {
  const [prevScreenIndex, setPrevScreenIndex] = useState(screenIndex);
  const [animate, _] = useState(Array.from({ length: screens.length }, () => useAnimate()));

  useEffect(() => {
    animate[prevScreenIndex]![1](
      animate[prevScreenIndex]![0].current,
      { flexGrow: 0 },
      { duration: 0.6, ease: "easeOut" }
    );
    animate[screenIndex]![1](
      animate[screenIndex]![0].current,
      { flexGrow: 1 },
      { duration: 0.3, ease: "easeOut" }
    );
    setPrevScreenIndex(screenIndex);
  }, [screenIndex]);

  return (
    <div className="main-background-cont">
      {
        screens.map((screen, index) =>
          <motion.div
            key={screen.title}
            id={`${screen.title}-bg`}
            ref={animate[index]![0]}
            className="main-background"
            style={{ backgroundImage: `url(${screen.backgroundImg})` }}
            initial={{ flexGrow: index === 0 ? 1 : 0 }}
          />
        )
      }
    </div >
  );
}
