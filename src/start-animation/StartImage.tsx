import { motion } from "motion/react";
import { SLIDE_EASE, X_OFFSET_MULT } from "./constants";

interface StartImageProps {
  initialY: number;
  finalY: number;
  duration: number;
  delay: number;
  src?: string;
}

export default function StartImage({
  initialY,
  finalY,
  duration,
  delay,
  src
}: StartImageProps) {
  const vw = window.innerWidth;

  return (
    <motion.img
      className="sanim__image"
      src={src}
      initial={{ x: vw * X_OFFSET_MULT, y: initialY }}
      animate={{ y: finalY }}
      transition={{
        duration: duration,
        delay: delay,
        ease: SLIDE_EASE
      }}
    />
  );
}
