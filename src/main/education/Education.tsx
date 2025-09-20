export default function Education() {
  return (
    <div className="education">
      <span className="education__title-container">
        <h2>National University of Singapore</h2>
        <h2>2023 - 2027</h2>
      </span>
      <span>
        <i>Bachelor of Computing in <b className="accent-color">Computer Science</b></i>
      </span>
      <h3 className="education__section-title">NUS Awards</h3>
      <ul>
        <li>ASEAN Undergraduate Merit Scholar</li>
        <li>Dean List for AY24/25 Semester 1</li>
        <li>GPA: 4.85 / 5.00</li>
      </ul>
      <h3 className="education__section-title">Relevant Coursework</h3>
      <div className="coursework">
        <div>
          <h4 className="coursework__title">General</h4>
          <ul>
            <li>CS2030S OOP and Functional Programming (A+)</li>
            <li>CS2040S Data Structure and Algorithms (A)</li>
            <li>CS2100 Computer Organisation (A)</li>
            <li>CS2106 Operating Systems (A-)</li>
          </ul>
        </div>
        <div>
          <h4 className="coursework__title">Networking</h4>
          <ul>
            <li>CS2015 Intro to Computer Networks (A)</li>
            <li>CS3103 Computer Networks Practice</li>
          </ul>
        </div>
        <div>
          <h4 className="coursework__title">Database</h4>
          <ul>
            <li>CS2012 Database Systems (A+)</li>
            <li>CS3223 Database Systems Implementation</li>
          </ul>
        </div>
        <div>
          <h4 className="coursework__title">Parallel Computing</h4>
          <ul>
            <li>CS3210 Parallel Computing (A)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
