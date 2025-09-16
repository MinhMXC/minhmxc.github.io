import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MpProject } from "../../types";

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

  // Set up mouse tracking event listeners
  useEffect(() => {
    if (container.current === null || container.current.parentElement === null) {
      return;
    }

    container.current.parentElement.onmousedown = (event) => {
      mouseDownAt.current = event.clientX;
    };
    container.current.parentElement.onmousemove = (event) => {
      if (container.current === null || mouseDownAt.current === 0) {
        return;
      }
      disabled.current = true;
      const mouseDelta = mouseDownAt.current - event.clientX;
      mouseDownAt.current = event.clientX;
      percentage.current += (mouseDelta / (container.current.clientWidth)) * -100;
      percentage.current = Math.min(Math.max(percentage.current, -100), 0);
      container.current.animate({ transform: `translate(${percentage.current}%, 0%)` }, { duration: 1200, fill: "forwards" });
      for (const image of container.current.getElementsByTagName("img")) {
        image.animate({ objectPosition: `${percentage.current + 100}% 50%` }, { duration: 1200, fill: "forwards" });
      }
    };
    container.current.parentElement.onmouseup = () => {
      mouseDownAt.current = 0;
      setTimeout(() => disabled.current = false, 50);
    };
    container.current.parentElement.onmouseleave = () => {
      mouseDownAt.current = 0;
    };
    container.current.addEventListener("wheel", (event) => {
      if (container.current === null) {
        return;
      }

      const increment = event.deltaX !== 0 ? -event.deltaX / Math.abs(event.deltaX) : -event.deltaY / Math.abs(event.deltaY);
      percentage.current = Math.min(Math.max(percentage.current + increment * 2, -100), 0);
      container.current.animate({ transform: `translate(${percentage.current}%, 0%)` }, { duration: 1200, fill: "forwards" });
      for (const image of container.current.getElementsByTagName("img")) {
        image.animate({ objectPosition: `${percentage.current + 100}% 50%` }, { duration: 1200, fill: "forwards" });
      }
    });
  }, [container.current]);

  // Move images to its initial position.
  useEffect(() => {
    if (container.current !== null) {
      container.current.style.transform = `translate(${percentage.current}%, 0%)`;
      for (const image of container.current.getElementsByTagName("img")) {
        image.style.objectPosition = `${percentage.current + 100}% 50%`;
      }
    }
  }, [initialPercentage]);

  return (
    <motion.div key={0} ref={container} className="projects-slider">
      <div className="unselectable" style={{ width: "50%", flexShrink: 0 }}>&nbsp;</div>
      {
        projects.map((project, index) =>
          <motion.img
            key={project.title}
            src={project.narrowImg}
            draggable={false}
            onClick={() => { if (disabled.current) return; changeModeDescription(project, percentage.current); }}
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.10, ease: [0.25, 0.5, 0.4, 1] }}
          />
        )
      }
      <div className="unselectable" style={{ width: "60%", flexShrink: 0 }}>&nbsp;</div>
    </motion.div>
  );
}
