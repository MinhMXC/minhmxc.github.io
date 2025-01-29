import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Education() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
      <div className="section_inner_container">
        <h1 className="large_heading" id="education_text">Education</h1>
        <p id="obtained">Obtained ASEAN Scholarship for all</p>

        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          <div>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">National University of Singapore</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">2023 – 2027</h2>
            </div>
            <ul className="education_list">
              <li>Bachelor of Computing (Computer Science).</li>
              <li>Cumulative Average Point (CAP): 4.92 / 5.0.</li>
              <li>Focus Area: Parallel Computing & Networking and Distributed Systems</li>
              <li>Dean List for AY24-25 Sem 1</li>
              <li>
                Relevant Computer Science course Taken (A = top 20%, A+ = top 5%):
                <ul>
                  <li>CS1101S Programming Methodology: A+</li>
                  <li>CS1231S Discrete Structures: A</li>
                  <li>CS2030S Programming Methodology 2: A+</li>
                  <li>CS2040S Data Structures and Algorithms: A</li>
                  <li>CS2100 Computer Organisation: A</li>
                  <li>CS2102 Database Systems: A+</li>
                  <li>CS2105 Introduction to Computer Networks: A</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Catholic Junior College</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">2021 – 2022</h2>
            </div>
            <ul className="education_list">
              <li>Member of Executive Committee of Guitar Ensemble.</li>
            </ul>
          </div>

          <div>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Anglo-Chinese School (Independent)</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">2019 – 2020</h2>
            </div>
            <ul className="education_list">
              <li>
                4th Individual Placing in Australian Mathematics Competition.
              </li>
              <li>
                Gold & Silver Awards for various Mathematics competitions (UKIMC, UKSMC, HXCMO and SASMO).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}