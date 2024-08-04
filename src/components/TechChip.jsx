export default function TechChip(prop) {
  return (
    <div className="tech_container" style={{backgroundColor: prop.color}}>
      <p className="tech_name">{prop.name}</p>
    </div>
  );
}