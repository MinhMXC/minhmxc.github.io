export default function Education() {
  return (
    <div className="main-content education">
      <span style={{ display: "flex", margin: 0, justifyContent: "space-between" }}>
        <h2>National University of Singapore</h2>
        <h2>2023 - 2027</h2>
      </span>
      <p style={{ margin: "0 0 24px 0" }}>
        <i>Bachelor of Computing in <b className="accent-color">Computer Science</b></i>
      </p>
      <h3>NUS Awards</h3>
      <ul>
        <li>ASEAN Undergraduate Merit Scholar</li>
        <li>Dean List for AY24/25 Semester 1</li>
        <li>GPA: 4.85 / 5.00</li>
      </ul>
      <h3>Relevant Coursework</h3>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <h4>Networking</h4>
          <ul>
            <li>CS2015 Intro to Computer Networks (A)</li>
            <li>CS3103 Computer Networks Practice</li>
          </ul>
        </div>
        <div>
          <h4>Database</h4>
          <ul>
            <li>CS2012 Database Systems (A+)</li>
            <li>CS3223 Database Systems Implementation</li>
          </ul>
        </div>
        <div>
          <h4>Parallel Computing</h4>
          <ul>
            <li>CS3210 Parallel Computing (A)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
