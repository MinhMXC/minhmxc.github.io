interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  descs: string[];
}

export default function Experience({ company, position, duration, descs }: ExperienceProps) {
  return (
    <div className="experience">
      <div className="experience__title">
        <h3><span className="accent-color">{company}</span>, <i>{position}</i></h3>
        <h3>{duration}</h3>
      </div>
      <ul>
        {descs.map(desc => <li key={desc}>{desc}</li>)}
      </ul>
    </div>
  );
}
