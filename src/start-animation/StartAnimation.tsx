import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import StartColumnLast from "./StartColumnLast";
import StartColumnMiddle from "./StartColumnMiddle";
import StartColumnCenter from "./StartColumnCenter";

export default function StartAnimation() {
  const vh = window.innerHeight;
  const [mode, setMode] = useState<"cover" | "contain">("cover");
  return (
    <motion.div
      className="start-animation"
      animate={{ scaleX: 5, scaleY: 10 / 3 }}
      transition={{
        duration: 1,
        delay: 3,
        ease: [0.85, 0, 0.15, 1]
      }}
      onUpdate={(latest) => {
        const scale = (latest.scaleY ?? 1) as number;
        const h = vh * 0.30 * scale;
        // setMode(h > 700 ? "contain" : "cover");
      }}
    >
      <StartColumnLast />
      <StartColumnMiddle />
      <StartColumnCenter
        image1="assets/start/amazon.png"
        image2="assets/start/name.png"
        image3="assets/start/fresh-cars.png"
        centerMode={mode}
      />
      <StartColumnMiddle />
      <StartColumnLast />
    </motion.div>
  );
}
