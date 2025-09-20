import { MpProject } from "../../types";

interface ProjectDescProps {
  project: MpProject;
  changeModeSlider: () => void;
}

export default function ProjectDesc({ project, changeModeSlider }: ProjectDescProps) {
  return (
    <div className="proj__desc">
      <svg
        className="proj__desc__back"
        focusable="false"
        onClick={changeModeSlider}
      >
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
      </svg>
      <h3 className="proj__desc__title">{project.title}</h3>
      <div className="proj__desc__content">
        {project.desc}
      </div>
    </div>
  );
}
