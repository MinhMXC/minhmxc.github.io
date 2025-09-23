import { motion } from "motion/react";
import StartImage from "./StartImage";
import { A_START } from "../dt-animations";

interface StartColumnCenterProps {
  image1: string;
  image2: string;
}

export default function StartColumnCenter({ image1, image2 }: StartColumnCenterProps) {
  const vh = window.innerHeight;

  return (
    <div className="sanim__column">
      <StartImage
        initialY={vh * A_START.upInitialYMult}
        finalY={vh * A_START.upFinalYMult}
        duration={A_START.slideDuration}
        delay={0}
        src={image1}
      />
      <motion.div className="sanim__center-image" />
      <StartImage
        initialY={vh * A_START.upInitialYMult}
        finalY={vh * A_START.upFinalYMult}
        duration={A_START.slideDuration - 1}
        delay={1}
        src={image2}
      />
    </div>
  );
}
