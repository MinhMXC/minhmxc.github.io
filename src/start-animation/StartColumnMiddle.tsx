import { motion } from "motion/react";

export default function StartColumnMiddle() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const wOffset = -(vw * 0.10);
  const hOffset = -(vh * 0.15);
  const transitions = [
    {
      duration: 1,
      delay: 2,
    },
    {
      duration: 1.5,
      delay: 1.5,
    },
    {
      duration: 2,
      delay: 1,
    },
    {
      duration: 2.5,
      delay: 0.5,
    },
  ];

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <motion.div
            className="start-img"
            initial={{ x: wOffset, y: -(vh * 1.50) }}
            animate={{ y: hOffset }}
            transition={{
              duration: transition.duration,
              delay: transition.delay,
              ease: [0.85, 0, 0.15, 1]
            }}
          />
        )
      }
    </div>
  );
}


