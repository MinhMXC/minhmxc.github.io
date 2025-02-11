import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Experience() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
      <div className="section_inner_container">
        <h1 className="large_heading" id="experience_text">Experience</h1>

        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          <div>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Software Engineer Intern @ Fresh Cars Pte Ltd</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">May - Aug 2024</h2>
            </div>
            <ul className="education_list">
              <li>
                Significantly modernised company's mobile application UI/UX by cooperating
                with designers and updating the codebase from Flutter 3.3.10 to 3.19.6,
                improving customers satisfaction and experience.
              </li>
              <li>
                Successfully integrated a new payment system on the app with HitPay and
                Shell API using Express, Firebase and Google Cloud Platform,
                allowing customers to easily pay their gas and rental fee by PayNow.
              </li>
              <li>
                Created a new workshop module on the company’s internal management tool,
                leveraging React, Express, and Firebase, connecting car repair team with
                salesperson and 100+ customers and removing time-consuming processes.
              </li>
              <li>
                Thoroughly conducted tests and wrote Python scripts to extract and
                migrate 10000+ of records between databases and systems, in preparation
                for company's switch to new management system.
              </li>
            </ul>

            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Teaching Assistant @ National University of Singapore</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">Aug 2024 onwards</h2>
            </div>
            <ul className="education_list">
              <li>
                AY24-25:
                <br/> Sem 1 CS1101S Programming Methodology (Javascript)
                <br/> Sem 2 CS2030S Programming Methodology 2 (Java)
              </li>
              <li>
                Lead weekly 2-hour tutorial sessions for a group of 8 students for Programming Methodology course,
                which use a variant of Javascript as the main language.
              </li>
              <li>
                Proactively reviewed, graded and gave weekly constructive feedback for student's assignments
                to help improve their performance, all of whom received A- or higher.
              </li>
              <li>
                Received stellar teaching feedback of 4.8/5.0 and excellent comments from students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}