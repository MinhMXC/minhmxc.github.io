import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { MpProject } from "../../types";
import ProjectSlider from "./ProjectSlider";
import ProjectDesc from "./ProjectDesc";

interface ProjectsTemplateProps {
  projects: MpProject[];
  changeProjectScreenBg: (src: string) => void;
}

export default function ProjectsTemplate({ projects, changeProjectScreenBg }: ProjectsTemplateProps) {
  const [mode, setMode] = useState(0);
  const [project, setProject] = useState<MpProject>({ title: "DEFAULT", narrowImg: "", wideImg: "", desc: "" });
  const percentage = useRef(0);
  const [scope, animate] = useAnimate();

  async function changeModeDescription(project: MpProject, newPercentage: number) {
    if (scope.current === null) {
      return;
    }

    changeProjectScreenBg(project.wideImg);
    await animate(scope.current, { opacity: 0 }, { duration: 0.25 });
    setMode(1);
    setProject(project);
    animate(scope.current, { opacity: 1 }, { duration: 0.25 });
    percentage.current = newPercentage;
  }

  async function changeModeSlider() {
    await animate(scope.current, { opacity: 0 }, { duration: 0.25 });
    setMode(0);
    animate(scope.current, { opacity: 1 }, { duration: 0.25 });
  }

  return (
    <motion.div ref={scope} className="main-content projects">
      {
        mode === 0
          ? <ProjectSlider projects={projects} initialPercentage={percentage.current} changeModeDescription={changeModeDescription} />
          : <ProjectDesc project={project} changeModeSlider={changeModeSlider} />
      }
    </motion.div>
  );
}
