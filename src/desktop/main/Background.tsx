import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import { MpScreen } from "../../types";

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
      { width: "0%" },
      { duration: 0.6, ease: "easeOut" }
    );
    animate[screenIndex]![1](
      animate[screenIndex]![0].current,
      { width: "100%" },
      { duration: 0.3, ease: "easeOut" }
    );
    setPrevScreenIndex(screenIndex);
  }, [screenIndex]);

  return (
    <div className="background">
      {
        screens.map((screen, index) =>
          <motion.div
            key={screen.title}
            id={`${screen.title}-bg`}
            ref={animate[index]![0]}
            className="background__image"
            style={{ backgroundImage: `url(${screen.backgroundImg})` }}
            initial={{ width: index === 0 ? "100%" : "0%" }}
          >
            <video id={`${screen.title}-video`} className="background__video" autoPlay />
          </motion.div>
        )
      }
    </div>
  );
}
