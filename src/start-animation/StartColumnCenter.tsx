import { motion, useAnimate, useAnimationFrame } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface StartColumnCenterProps {
  image1: string;
  image2: string;
  image3: string;
  centerMode: "cover" | "contain";
}

export default function StartColumnCenter({ image1, image2, image3, centerMode }: StartColumnCenterProps) {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const wOffset = -(vw * 0.10);
  const hOffset = 0;

  async function animateCenter() {
    await animate(
      scope.current,
      { y: hOffset },
      {
        duration: 2,
        delay: 1,
        ease: [0.85, 0, 0.15, 1]
      }
    );
    //animate(
    //  scope.current,
    //  { width: vw, height: vh },
    //  {
    //    duration: 2,
    //    delay: 1,
    //    ease: [0.85, 0, 0.15, 1]
    //  }
    //);
  }

  useEffect(() => {
    animateCenter();
  });

  const [mode, setMode] = useState("cover");

  console.log(centerMode);

  return (
    <div className="start-column">
      <motion.div
        className="start-img"
        initial={{ x: wOffset, y: vh }}
        animate={{ y: hOffset }}
        transition={{
          duration: 3,
          delay: 0,
          ease: [0.85, 0, 0.15, 1]
        }}
      >
        <img src="/assets/start/amazon.png" />
      </motion.div>
      <motion.div
        ref={scope}
        className="start-img"
        initial={{ x: wOffset, y: vh }}
      >
        <img
          src="/assets/start/name.png"
          style={{
          }}
        />
      </motion.div>
      <motion.div
        className="start-img"
        initial={{ x: wOffset, y: vh }}
        animate={{ y: hOffset }}
        transition={{
          duration: 1.5,
          delay: 1.5,
          ease: [0.85, 0, 0.15, 1]
        }}
      >
        <img src="/assets/start/amazon.png" />
      </motion.div>
    </div >
  );
}
