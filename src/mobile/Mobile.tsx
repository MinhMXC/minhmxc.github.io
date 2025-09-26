import { motion } from "motion/react";

import { FUN_PROJECTS, PROJECTS } from "../contents";
import About from "./about/About";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import ProjectsTemplate from "./projects-template/ProjectsTemplate";

export default function Mobile() {
  return (
    <motion.div
      className="mb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <About />
      <Education />
      <Experiences />
      <ProjectsTemplate projects={PROJECTS} title="Projects" />
      <ProjectsTemplate projects={FUN_PROJECTS} title="Fun Projects" />
    </motion.div>
  );
}
