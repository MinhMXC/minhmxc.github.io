import { LAST_COLUMN_DURATION, LAST_LATENCY_OFFSET, UP_FINAL_Y_MULT, UP_INITIAL_Y_MULT } from "./constants";
import StartImage from "./StartImage";

interface StartColumnLastProps {
  image1: string;
  image2: string;
  image3: string;
}

export default function StartColumnLast({ image1, image2, image3 }: StartColumnLastProps) {
  const vh = window.innerHeight;

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
    <div className="sanim__column">
      {
        transitions.map(transition =>
          <StartImage
            key={transition.src}
            initialY={vh * UP_INITIAL_Y_MULT}
            finalY={vh * (UP_FINAL_Y_MULT + -0.15)}
            duration={LAST_COLUMN_DURATION - transition.delay}
            delay={transition.delay + LAST_LATENCY_OFFSET}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
