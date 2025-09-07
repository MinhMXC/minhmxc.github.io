import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";
import { SLIDE_ANIMATION_DURATION, START_EASE, ZOOM_DELAY, ZOOM_DURATION } from "./animation-constants";

interface StartAnimationProps {
  callback: () => void;
}

export default function StartAnimation({ callback }: StartAnimationProps) {
  const [scope, animate] = useAnimate();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  async function animateCenter() {
    animate(
      scope.current,
      { y: 0 },
      {
        duration: SLIDE_ANIMATION_DURATION - 0.5,
        delay: 0.5,
        ease: START_EASE
      }
    );
    await animate(
      scope.current,
      { width: vw, height: vh, opacity: 0.5 },
      {
        duration: ZOOM_DURATION,
        delay: ZOOM_DELAY,
        ease: START_EASE
      }
    );
    callback();
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
          duration: ZOOM_DURATION,
          delay: ZOOM_DELAY,
          ease: START_EASE
        }}
      >
        <StartColumnLast
          image1="/assets/start/calculator.png"
          image2="/assets/start/bad-apple.png"
          image3="/assets/start/app.png"
        />
        <StartColumnMiddle
          image1="/assets/start/zelda.png"
          image2="/assets/start/nes.png"
          image3="/assets/start/forum.png"
          image4="/assets/start/app.png"
        />
        <StartColumnCenter />
        <StartColumnMiddle
          image1="/assets/start/bad-apple.png"
          image2="/assets/start/nus.png"
          image3="/assets/start/gdsc.png"
          image4="/assets/start/chip8.png"
        />
        <StartColumnLast
          image1="/assets/start/kungfu.png"
          image2="/assets/start/calculator.png"
          image3="/assets/start/app.png"
        />
      </motion.div>
    </div>
  );
}
