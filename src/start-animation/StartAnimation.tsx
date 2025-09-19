import React, { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";
import { SLIDE_DURATION, SLIDE_EASE, ZOOM_DELAY, ZOOM_DURATION } from "./constants";

import meImage from "../assets/wide/me.jpg";
import amazonImage from "../assets/wide/amazon.png";
import freshCarsImage from "../assets/wide/fresh-cars.png";
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
        duration: SLIDE_DURATION - 0.5,
        delay: 0.5,
        ease: SLIDE_EASE
      }
    );
    await animate(
      scope.current,
      { width: vw, height: vh, opacity: 0.5 },
      {
        duration: ZOOM_DURATION,
        delay: ZOOM_DELAY,
        ease: SLIDE_EASE
      }
    );
    callback();
  }

  useEffect(() => {
    animateCenter();
  });

  return (
    <React.Fragment>
      <div className="center-image">
        <motion.img
          ref={scope}
          className="center-image__image"
          src={meImage}
          initial={{ x: 0, y: vh }}
        />
      </div>
      <motion.div
        className="sanim"
        animate={{ scaleX: 5, scaleY: 10 / 3 }}
        transition={{
          duration: ZOOM_DURATION,
          delay: ZOOM_DELAY,
          ease: SLIDE_EASE
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
        <StartColumnCenter
          image1={amazonImage}
          image2={freshCarsImage}
        />
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
    </React.Fragment>
  );
}
