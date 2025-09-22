import { DOWN_FINAL_Y_MULT, DOWN_INITIAL_Y_MULT, MIDDLE_DURATION, MIDDLE_LATENCY_OFFSET } from "./constants";
import StartImage from "./StartImage";

interface StartColumnMiddleProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export default function StartColumnMiddle({ image1, image2, image3, image4 }: StartColumnMiddleProps) {
  const vh = window.innerHeight;

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
    <div className="sanim__column">
      {
        transitions.map(transition =>
          <StartImage
            key={transition.src}
            initialY={vh * DOWN_INITIAL_Y_MULT}
            finalY={vh * DOWN_FINAL_Y_MULT}
            duration={MIDDLE_DURATION - transition.delay}
            delay={transition.delay + MIDDLE_LATENCY_OFFSET}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
