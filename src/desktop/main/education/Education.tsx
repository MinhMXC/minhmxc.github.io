import { EDUCATION } from "../../../contents";

export default function Education() {
  return (
    <div className="education">
      <span className="education__title-container">
        <h2>{EDUCATION.name}</h2>
        <h2>{EDUCATION.period}</h2>
      </span>
      <span>{EDUCATION.major}</span>
      <h3 className="education__section-title">NUS Awards</h3>
      <ul>
        {EDUCATION.awards.map(a => <li key={a}>{a}</li>)}
      </ul>
      <h3 className="education__section-title">Relevant Coursework</h3>
      <div className="coursework">
        {
          EDUCATION.coursework.map(section =>
            <div key={section.title}>
              <h4 className="coursework__title">{section.title}</h4>
              <ul>
                {section.courses.map(course => <li key={course}>{course}</li>)}
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
}
