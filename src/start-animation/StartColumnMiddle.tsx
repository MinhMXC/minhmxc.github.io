import { DOWN_FINAL_Y_OFFSET_MULTIPLIER, DOWN_INITIAL_Y_OFFSET_MULTIPLIER, MIDDLE_COLUMN_DURATION, MIDDLE_COLUMN_LATENCY_OFFSET, X_OFFSET_MULTIPLIER } from "./animation-constants";
import StartImage from "./StartImage";

interface StartColumnMiddleProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export default function StartColumnMiddle({ image1, image2, image3, image4 }: StartColumnMiddleProps) {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const transitions = [
    {
      delay: 1.5,
      src: image1,
    },
    {
      delay: 1,
      src: image2,
    },
    {
      delay: 0.5,
      src: image3,
    },
    {
      delay: 0,
      src: image4,
    },
  ];

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <StartImage
            initialX={vw * X_OFFSET_MULTIPLIER}
            initialY={vh * DOWN_INITIAL_Y_OFFSET_MULTIPLIER}
            animateY={vh * DOWN_FINAL_Y_OFFSET_MULTIPLIER}
            duration={MIDDLE_COLUMN_DURATION - transition.delay}
            delay={transition.delay + MIDDLE_COLUMN_LATENCY_OFFSET}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
