import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";
import { START_EASE } from "../constants";

export default function StartAnimation() {
  const [scope, animate] = useAnimate();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  async function animateCenter() {
    await animate(
      scope.current,
      { y: 0 },
      {
        duration: 2.5,
        delay: 0.5,
        ease: START_EASE
      }
    );
    animate(
      scope.current,
      { width: vw, height: vh },
      {
        duration: 1,
        delay: 0,
        ease: START_EASE
      }
    );
  }

  useEffect(() => {
    animateCenter();
  });

  return (
    <div>
      <div className="center" style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}>
        <motion.div
          ref={scope}
          className="center start-img"
          style={{ backgroundColor: "transparent", zIndex: 999 }}
          initial={{ x: 0, y: vh }}
        >
          <img style={{ objectFit: "cover" }} src="/assets/start/me.jpg" />
        </motion.div>
      </div>
      <motion.div
        className="start-animation"
        animate={{ scaleX: 5, scaleY: 10 / 3 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: START_EASE
        }}
      >
        <StartColumnLast
          image1="/assets/start/bad-apple.png"
          image2="/assets/start/zelda.png"
          image3="/assets/start/calculator.png"
        />
        <StartColumnMiddle
          image1="/assets/start/chip8.png"
          image2="/assets/start/nes.png"
          image3="/assets/start/forum.png"
          image4="/assets/start/app.png"
        />
        <StartColumnCenter />
        <StartColumnMiddle
          image1="/assets/start/app.png"
          image2="/assets/start/nus.png"
          image3="/assets/start/gdsc.png"
          image4="/assets/start/chip8.png"
        />
        <StartColumnLast
          image1="/assets/start/calculator.png"
          image2="/assets/start/kungfu.png"
          image3="/assets/start/bad-apple.png"
        />
      </motion.div>
    </div>
  );
}
