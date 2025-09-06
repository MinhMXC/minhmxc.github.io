import { motion } from "motion/react";
import { START_EASE } from "../constants";

interface StartImageProps {
  initialX: number;
  initialY: number;
  animateY: number;
  duration: number;
  delay: number;
  src?: string;
}

export default function StartImage({
  initialX,
  initialY,
  animateY,
  duration,
  delay,
  src
}: StartImageProps) {
  return (
    <motion.div
      className="start-img"
      initial={{ x: initialX, y: initialY }}
      animate={{ y: animateY }}
      transition={{
        duration: duration,
        delay: delay,
        ease: START_EASE
      }}
    >
      <img src={src} />
    </motion.div>
  );
}
