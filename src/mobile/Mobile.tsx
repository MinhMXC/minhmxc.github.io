import { motion } from "motion/react";

import { EXPERIENCES, FUN_PROJECTS, PROJECTS } from "../contents";
import About from "./about/About";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import ProjectsTemplate from "./projects-template/ProjectsTemplate";
import { useEffect } from "react";

export default function Mobile() {
  const images = [
    ...EXPERIENCES.map(e => e.wideImg),
    ...PROJECTS.map(e => e.wideImg),
    ...FUN_PROJECTS.map(e => e.wideImg)
  ];

  useEffect(() => {
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          resolve(image);
        };
        img.onerror = (err) => reject(err);
      });
    };

    Promise
      .all(images.map(image => loadImage(image)))
      .catch(err => console.log(err));
  }, []);

  return (
    <motion.div
      className="mb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <About />
      <Education />
      <Experiences />
      <ProjectsTemplate projects={PROJECTS} title="Projects" />
      <ProjectsTemplate projects={FUN_PROJECTS} title="Fun Projects" />
    </motion.div>
  );
}
