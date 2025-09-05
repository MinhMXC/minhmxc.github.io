import { motion, useAnimate, useAnimationFrame } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface StartColumnCenterProps {
  image1?: string;
  image2?: string;
  image3?: string;
  centerMode?: "cover" | "contain";
}

export default function StartColumnCenter({ image1, image2, image3, centerMode }: StartColumnCenterProps) {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const wOffset = -(vw * 0.10);
  const hOffset = 0;
  const transitions = [
    {
      duration: 3,
      delay: 0,
    },
    {
      duration: 2.5,
      delay: 0.5,
    },
    {
      duration: 2,
      delay: 1,
    }
  ];

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
    animate(
      scope.current,
      { width: vw, height: vh, x: -(vw * 0.50), y: -(vh * 0.35) },
      {
        duration: 2,
        delay: 0,
        ease: [0.85, 0, 0.15, 1]
      }
    );
  }

  useEffect(() => {
    // animateCenter();
  });

  const [mode, setMode] = useState("cover");

  console.log(centerMode);

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <motion.div
            className="start-img"
            initial={{ x: wOffset, y: vh * 1.15 }}
            animate={{ y: hOffset }}
            transition={{
              duration: transition.duration,
              delay: transition.delay,
              ease: [0.85, 0, 0.15, 1]
            }}
          />
        )
      }
    </div>
  );
}
