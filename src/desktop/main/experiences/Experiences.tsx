import { EXPERIENCES } from "../../../contents";
import Experience from "./Experience";

export default function Experiences() {
  return (
    <div className="main-content experiences">
      {EXPERIENCES.map(exp => <Experience key={exp.company} experience={exp} />)}
    </div>
  );
}
