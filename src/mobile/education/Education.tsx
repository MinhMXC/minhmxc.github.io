import { EDUCATION } from "../../contents";

import nusImage from "../../assets/wide/nus.jpg";
import Content from "../Content";

export default function Education() {
  return (
    <Content bgImage={nusImage} title="Education">
      <div className="mb-education">
        <h2>{EDUCATION.name}</h2>
        <span>{EDUCATION.major}</span>
        <h3 className="mb-education__section-title">NUS Awards</h3>
        <ul>
          {EDUCATION.awards.map(a => <li key={a}>{a}</li>)}
        </ul>
        <h3 className="mb-education__section-title">Relevant Coursework</h3>
        {
          EDUCATION.coursework.map(section =>
            <div key={section.title}>
              <h4 className="mb-coursework__title">{section.title}</h4>
              <ul>
                {section.courses.map(course => <li key={course}>{course}</li>)}
              </ul>
            </div>
          )
        }
      </div>
    </Content>
  );
}
