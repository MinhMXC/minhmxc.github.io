interface ExperienceProps {
  companyName: string;
  positionName: string;
  duration: string;
  descs: string[];
}

export default function Experience({ companyName, positionName, duration, descs }: ExperienceProps) {
  return (
    <div>
      <div className="experience-header-cont">
        <h3><span className="accent-color">{companyName}</span>, <i>{positionName}</i></h3>
        <h3>{duration}</h3>
      </div>
      <ul>
        {descs.map(desc => <li key={desc}>{desc}</li>)}
      </ul>
    </div>
  );
}
