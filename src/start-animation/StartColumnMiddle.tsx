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
      duration: 1,
      delay: 2,
      src: image1,
    },
    {
      duration: 1.5,
      delay: 1.5,
      src: image2,
    },
    {
      duration: 2,
      delay: 1,
      src: image3,
    },
    {
      duration: 2.5,
      delay: 0.5,
      src: image4,
    },
  ];

  return (
    <div className="start-column">
      {
        transitions.map(transition =>
          <StartImage
            initialX={-(vw * 0.10)}
            initialY={-(vh * 1.36)}
            animateY={-(vh * 0.20)}
            duration={transition.duration}
            delay={transition.delay}
            src={transition.src}
          />
        )
      }
    </div>
  );
}
