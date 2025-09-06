import { motion } from "motion/react";
import StartImage from "./StartImage";

export default function StartColumnCenter() {
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  return (
    <div className="start-column">
      <StartImage
        initialX={-(vw * 0.10)}
        initialY={vh}
        animateY={0}
        duration={3}
        delay={0}
        src="/assets/start/amazon.png"
      />
      <motion.div
        className="start-img"
        style={{ visibility: "hidden" }}
      />
      <StartImage
        initialX={-(vw * 0.10)}
        initialY={vh}
        animateY={0}
        duration={2}
        delay={1}
        src="/assets/start/fresh-cars.png"
      />
    </div>
  );
}
