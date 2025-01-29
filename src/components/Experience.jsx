import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Experience() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
      <div className="section_inner_container">
        <h1 className="large_heading" id="experience_text">Experience</h1>

        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          <div>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Teaching Assistant @ National University of Singapore</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">Aug 2024 onwards</h2>
            </div>
            <ul className="education_list">
              <li>
                AY24-25: <br/> Sem 1 CS1101S Programming Methodology <br/> Sem 2 CS2030S Programming Methodology 2
              </li>
              <li>
                Conducted weekly tutorial sessions for a group of 10-20 students
              </li>
              <li>
                Grade assignments and provide constructive feedback to enhance student performance.
              </li>
              <li>
                Received excellent teaching feedback from students.
              </li>
            </ul>
            <div style={{display: "flex"}}>
              <h2 className="school_name_year">Software Engineer Intern @ Fresh Cars Pte Ltd</h2>
              <div style={{flexGrow: 1}}/>
              <h2 className="school_name_year">May - Aug 2024</h2>
            </div>
            <ul className="education_list">
              <li>
                Developed and enhanced the user interface for the company's mobile application,
                upgrading it from Flutter 3.3.10 to 3.19.6, resulting in a more seamless and
                user-friendly experience.
              </li>
              <li>
                Successfully integrated a payment system within the app using HitPay and Shell API,
                enabling customers to conveniently top up their Shell Card directly from the app,
                increasing user engagement.
              </li>
              <li>
                Designed and implemented the workshop module for the company's internal management website,
                leveraging Firebase and Google Cloud Platform,
                which streamlined internal processes and improved operational efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}