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
      duration: 2,
      delay: 1,
      src: image1,
    },
    {
      duration: 1.5,
      delay: 1.5,
      src: image2,
    },
    {
      duration: 1,
      delay: 2,
      src: image3,
    }
  ];

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <StartImage
            initialX={-(vw * 0.10)}
            initialY={vh}
            animateY={0}
            duration={transition.duration}
            delay={transition.delay}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
