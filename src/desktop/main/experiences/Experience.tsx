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
      <div className="experience__languages">
        {experience.badges.map(badge => badge.name).reduce((prev, cur) => prev + ", " + cur)}
      </div>
      <ul>
        {experience.desc.map(desc => <li key={desc}>{desc}</li>)}
      </ul>
    </div>
  );
}
