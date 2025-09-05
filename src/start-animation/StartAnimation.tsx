import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";

export default function StartAnimation() {
  const [scope, animate] = useAnimate();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const wOffset = -(vw * 0.10);
  const [mode, setMode] = useState<"cover" | "contain">("cover");

  async function animateCenter() {
    await animate(
      scope.current,
      { y: 0 },
      {
        duration: 2.5,
        delay: 0.5,
        ease: [0.85, 0, 0.15, 1]
      }
    );
    animate(
      scope.current,
      { width: vw, height: vh },
      {
        duration: 1,
        delay: 0,
        ease: [0.85, 0, 0.15, 1]
      }
    );
  }

  useEffect(() => {
    animateCenter();
  });

  return (
    <div>
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <motion.div
          ref={scope}
          className="start-img"
          style={{ zIndex: 999 }}
          initial={{ x: 0, y: vh * 1.15 }}
        >
          <img src="/assets/start/name.png" />
        </motion.div>
      </div>
      <motion.div
        className="start-animation"
        animate={{ scaleX: 5, scaleY: 10 / 3 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: [0.85, 0, 0.15, 1]
        }}
      //onUpdate={(latest) => {
      //  const scale = (latest.scaleY ?? 1) as number;
      //  const h = vh * 0.30 * scale;
      //  // setMode(h > 700 ? "contain" : "cover");
      //}}
      >
        <StartColumnLast />
        <StartColumnMiddle />
        <StartColumnCenter />
        <StartColumnMiddle />
        <StartColumnLast />
      </motion.div>
    </div>
  );
}
