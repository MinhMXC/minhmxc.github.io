import { motion } from "motion/react";
import StartImage from "./StartImage";
import { SLIDE_ANIMATION_DURATION, UP_FINAL_Y_OFFSET_MULTIPLIER, UP_INITIAL_Y_OFFSET_MULTIPLIER, X_OFFSET_MULTIPLIER } from "./animation-constants";

import amazonImage from "../assets/wide/amazon.png";
import freshCarsImage from "../assets/wide/fresh-cars.png";

export default function StartColumnCenter() {
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  return (
    <div className="start-column">
      <StartImage
        initialX={vw * X_OFFSET_MULTIPLIER}
        initialY={vh * UP_INITIAL_Y_OFFSET_MULTIPLIER}
        animateY={vh * UP_FINAL_Y_OFFSET_MULTIPLIER}
        duration={SLIDE_ANIMATION_DURATION}
        delay={0}
        src={amazonImage}
      />
      <motion.div
        className="start-img"
        style={{ visibility: "hidden" }}
      />
      <StartImage
        initialX={vw * X_OFFSET_MULTIPLIER}
        initialY={vh * UP_INITIAL_Y_OFFSET_MULTIPLIER}
        animateY={vh * UP_FINAL_Y_OFFSET_MULTIPLIER}
        duration={SLIDE_ANIMATION_DURATION - 1}
        delay={1}
        src={freshCarsImage}
      />
    </div>
  );
}
