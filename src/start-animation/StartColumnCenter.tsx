import { motion } from "motion/react";
import StartImage from "./StartImage";
import { SLIDE_DURATION, UP_FINAL_Y_MULT, UP_INITIAL_Y_MULT } from "./constants";

interface StartColumnCenterProps {
  image1: string;
  image2: string;
}

export default function StartColumnCenter({ image1, image2 }: StartColumnCenterProps) {
  const vh = window.innerHeight;

  return (
    <div className="sanim__column">
      <StartImage
        initialY={vh * UP_INITIAL_Y_MULT}
        finalY={vh * UP_FINAL_Y_MULT}
        duration={SLIDE_DURATION}
        delay={0}
        src={image1}
      />
      <motion.div className="sanim__center-image" />
      <StartImage
        initialY={vh * UP_INITIAL_Y_MULT}
        finalY={vh * UP_FINAL_Y_MULT}
        duration={SLIDE_DURATION - 1}
        delay={1}
        src={image2}
      />
    </div>
  );
}
