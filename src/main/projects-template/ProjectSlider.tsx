import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MpProject } from "../../types";
import { PROJECT } from "../../constants";

interface SliderProps {
  projects: MpProject[];
  initialPercentage: number;
  changeModeDescription: (project: MpProject, newPercentage: number) => void;
}

export default function ProjectSlider({ projects, initialPercentage, changeModeDescription }: SliderProps) {
  const mouseDownAt = useRef(0);
  const percentage = useRef(initialPercentage);
  const disabled = useRef(false);
  const container = useRef<HTMLDivElement>(null);

  function changePercentage(increment: number) {
    if (container.current === null) {
      return;
    }
    percentage.current = Math.min(Math.max(percentage.current + increment, -100), 0);
    container.current.animate(
      { transform: `translate(${percentage.current}%, 0%)` },
      PROJECT.imageSlidingAnimation.transition
    );
    for (const image of container.current.getElementsByTagName("img")) {
      image.animate(
        { objectPosition: `${percentage.current + 100}% 50%` },
        PROJECT.imageSlidingAnimation.transition
      );
    }
  }

  // Set up mouse tracking event listeners
  useEffect(() => {
    if (container.current === null || container.current.parentElement === null) {
      return;
    }

    // Start tracking down mouse movement
    container.current.parentElement.onmousedown = (event) => {
      mouseDownAt.current = event.clientX;
    };

    // Calculate scroll progress from mouse movement
    container.current.parentElement.onmousemove = (event) => {
      if (container.current === null || mouseDownAt.current === 0) {
        return;
      }
      disabled.current = true;
      const mouseDelta = mouseDownAt.current - event.clientX;
      mouseDownAt.current = event.clientX;
      changePercentage((mouseDelta / (container.current.clientWidth)) * -100);
    };

    // Stop tracking
    container.current.parentElement.onmouseup = () => {
      mouseDownAt.current = 0;
      // NOTE: Important, so that users don't accidentally
      // click on the image when they try to scroll
      setTimeout(() => disabled.current = false, PROJECT.disableClickDuration);
    };

    // Stop tracking
    container.current.parentElement.onmouseleave = () => {
      mouseDownAt.current = 0;
    };

    // Same thing but for mouse scroll wheel
    window.addEventListener("wheel", (event) => {
      changePercentage(-3.5 * Math.sign(event.deltaX !== 0 ? event.deltaX : event.deltaY));
    });
  }, [container.current]);


  // Move images to its initial position when switched back
  useEffect(() => {
    if (container.current !== null) {
      container.current.style.transform = `translate(${percentage.current}%, 0%)`;
      for (const image of container.current.getElementsByTagName("img")) {
        image.style.objectPosition = `${percentage.current + 100}% 50%`;
      }
    }
  }, [initialPercentage]);

  function getImageOnClick(project: MpProject) {
    return () => {
      if (disabled.current) {
        return;
      }
      changeModeDescription(project, percentage.current);
    };
  }


  return (
    <motion.div key={0} ref={container} className="proj__slider">
      {
        projects.map((project, index) =>
          <motion.img
            key={project.title}
            className="proj__slider__image"
            src={project.narrowImg}
            draggable={false}
            onClick={getImageOnClick(project)}
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.10, ease: [0.25, 0.5, 0.4, 1] }}
          />
        )
      }
    </motion.div>
  );
}
