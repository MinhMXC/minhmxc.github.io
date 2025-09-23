import { motion } from "motion/react";
import { A_START } from "../dt-animations";

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
      initial={{ x: vw * A_START.xOffsetMult, y: initialY }}
      animate={{ y: finalY }}
      transition={{
        duration: duration,
        delay: delay,
        ease: A_START.ease
      }}
    />
  );
}
