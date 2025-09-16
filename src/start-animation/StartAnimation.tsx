import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";
import { SLIDE_ANIMATION_DURATION, START_EASE, ZOOM_DELAY, ZOOM_DURATION } from "./animation-constants";

import meImage from "../assets/wide/me.jpg";
import calculatorImage from "../assets/wide/calculator.png";
import badAppleImage from "../assets/wide/bad-apple.png";
import appImage from "../assets/wide/app.png";
import zeldaImage from "../assets/wide/zelda.png";
import gdscImage from "../assets/wide/gdsc.png";
import nesImage from "../assets/wide/nes.png";
import nusImage from "../assets/wide/nus.png";
import forumImage from "../assets/wide/forum.png";
import chip8Image from "../assets/wide/chip8.png";
import kungfuImage from "../assets/wide/kungfu.png";
import chikaImage from "../assets/wide/chika.png";

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
          <img style={{ objectFit: "cover" }} src={meImage} />
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
          image1={calculatorImage}
          image2={badAppleImage}
          image3={appImage}
        />
        <StartColumnMiddle
          image1={zeldaImage}
          image2={gdscImage}
          image3={nesImage}
          image4={appImage}
        />
        <StartColumnCenter />
        <StartColumnMiddle
          image1={badAppleImage}
          image2={nusImage}
          image3={forumImage}
          image4={chip8Image}
        />
        <StartColumnLast
          image1={kungfuImage}
          image2={calculatorImage}
          image3={chikaImage}
        />
      </motion.div>
    </div>
  );
}
