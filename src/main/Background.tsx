import { motion, useAnimate } from "motion/react";
import { SCREENS } from "./main-constants";
import { useEffect, useState } from "react";

interface BackgroundProps {
  screenIndex: number;
}

export default function Background({ screenIndex }: BackgroundProps) {
  const [prevScreenIndex, setPrevScreenIndex] = useState(screenIndex);
  const [animate, _] = useState(Array.from({ length: SCREENS.length }, () => useAnimate()));

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
        SCREENS.map((screen, index) =>
          <motion.div
            key={index}
            ref={animate[index]![0]}
            className="main-background"
            style={{ backgroundImage: `url(${screen.src})` }}
            initial={{ flexGrow: index === 0 ? 1 : 0 }}
          />
        )
      }
    </div >
  );
}
