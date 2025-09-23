import React, { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";
import { A_START } from "../dt-animations";

import meImage from "../../assets/wide/me.jpg";
import amazonImage from "../../assets/wide/amazon.jpg";
import freshCarsImage from "../../assets/wide/fresh-cars.jpg";
import calculatorImage from "../../assets/wide/calculator.jpg";
import badAppleImage from "../../assets/wide/bad-apple.jpg";
import appImage from "../../assets/wide/app.jpg";
import zeldaImage from "../../assets/wide/zelda.jpg";
import gdscImage from "../../assets/wide/gdsc.jpg";
import nesImage from "../../assets/wide/nes.jpg";
import nusImage from "../../assets/wide/nus.jpg";
import forumImage from "../../assets/wide/forum.jpg";
import chip8Image from "../../assets/wide/chip8.jpg";
import kungfuImage from "../../assets/wide/kungfu.jpg";
import chikaImage from "../../assets/wide/chika.jpg";

interface StartAnimationProps {
  callback: () => void;
}

export default function StartAnimation({ callback }: StartAnimationProps) {
  const [centerImage, animateCenterImage] = useAnimate();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  async function animateCenter() {
    animateCenterImage(
      centerImage.current,
      { y: 0 },
      { duration: A_START.slideDuration - 0.5, delay: 0.5, ease: A_START.ease }
    );
    await animateCenterImage(
      centerImage.current,
      { width: vw, height: vh, opacity: 0.5 },
      A_START.zoom.transition
    );
    callback();
  }

  useEffect(() => {
    animateCenter();
  });

  return (
    <React.Fragment>
      <div className="center-image">
        <motion.img ref={centerImage} className="center-image__image" src={meImage} initial={{ x: 0, y: vh }} />
      </div>
      <motion.div className="sanim" {...A_START.zoom}>
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
