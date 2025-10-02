import { MpExperience } from "../../../types";

interface ExperienceProps {
  experience: MpExperience;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="experience">
      <div className="experience__title">
        <h3><span className="accent-color">{experience.company}</span>, <i>{experience.position}</i></h3>
        <h3>{experience.duration}</h3>
      </div>
      <ul>
        {experience.desc}
      </ul>
    </div>
  );
}
