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