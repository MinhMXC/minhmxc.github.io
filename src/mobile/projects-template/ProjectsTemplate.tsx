import { useState } from "react";
import { useAnimate } from "motion/react";

import { MpProject } from "../../types";
import NavGroup from "../NavGroup";
import Content from "../Content";
import Badge from "../../common/Badge";
import { OPACITY } from "../animations";

interface ProjectsTemplateProps {
  projects: MpProject[];
  title: string;
}

export default function ProjectsTemplate({ projects, title }: ProjectsTemplateProps) {
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(projects[index]!);
  const [contentScope, animate] = useAnimate();

  async function changeIndex(newIndex: number) {
    setIndex(newIndex);
    await animate(contentScope.current, { opacity: 0 }, OPACITY.transition);
    setProject(projects[newIndex]!);
    animate(contentScope.current, { opacity: 1 }, OPACITY.transition);
  }

  function next() {
    if (index == projects.length - 1) {
      return;
    }
    changeIndex(index + 1);
  }

  function back() {
    if (index == 0) {
      return;
    }
    changeIndex(index - 1);
  }

  return (
    <Content
      bgImage={projects[index]!.wideImg}
      title={title}
      footer={<NavGroup backOnClick={back} nextOnClick={next} />}
    >
      <div ref={contentScope} className="mb-projects">
        <h2 className="mb-projects__title accent-color">{project.title}</h2>
        <div className="mb-projects__badges">
          {project.badges.map(badge => <Badge badge={badge} />)}
        </div>
        <div className="mb-projects__content">
          {project.desc}
        </div>
      </div>
    </Content>
  );
}
