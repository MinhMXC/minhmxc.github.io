import { LAST_COLUMN_DURATION, LAST_COLUMN_LATENCY_OFFSET, UP_FINAL_Y_OFFSET_MULTIPLIER, UP_INITIAL_Y_OFFSET_MULTIPLIER, X_OFFSET_MULTIPLIER } from "./animation-constants";
import StartImage from "./StartImage";

interface StartColumnLastProps {
  image1: string;
  image2: string;
  image3: string;
}

export default function StartColumnLast({ image1, image2, image3 }: StartColumnLastProps) {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const transitions = [
    {
      delay: 0,
      src: image1,
    },
    {
      delay: 0.5,
      src: image2,
    },
    {
      delay: 1,
      src: image3,
    }
  ];

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <StartImage
            initialX={vw * X_OFFSET_MULTIPLIER}
            initialY={vh * UP_INITIAL_Y_OFFSET_MULTIPLIER}
            animateY={vh * (UP_FINAL_Y_OFFSET_MULTIPLIER + -0.15)}
            duration={LAST_COLUMN_DURATION - transition.delay}
            delay={transition.delay + LAST_COLUMN_LATENCY_OFFSET}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
