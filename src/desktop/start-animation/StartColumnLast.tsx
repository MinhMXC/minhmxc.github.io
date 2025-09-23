import { A_START } from "../dt-animations";
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
            initialY={vh * A_START.upInitialYMult}
            finalY={vh * A_START.upFinalYMult}
            duration={A_START.lastDuration - transition.delay}
            delay={transition.delay + A_START.lastLatencyOffset}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
