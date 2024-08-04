import MePhoto from "../resources/me_photo.jpg"
import {AnimationOnScroll} from 'react-animation-on-scroll';

export default function About() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} duration={1.5}>
      <div className="section_inner_container" id="about">
        <h1 className="large_heading">About me</h1>

        <div style={{display: "flex"}}>
          <div style={{paddingRight: "50px"}}>
            <p className="about_p">
              I'm currently studying Computer Science at the University of Singapore (NUS), having received
              the ASEAN Scholarship.
            </p>
            <p className="about_p">
              Computer has always been a hobby of mine since I was young. I tinkered with computers since
              I
              was 12
              and started to learn programming when I was 14. Now, I enjoy dealing with anything
              computer-related,
              be it solving some crazy difficult algorithm questions or designing and developing software
              and
              products.
            </p>
            <p className="about_p">
              Outside of computers, I'm also interested in Japanese tradition and culture. I am currently
              pursuing
              a minor in Japanese Language at NUS and can speak basic Japanese fluently.
            </p>
          </div>

          <div id="photo_container">
            <img src={MePhoto} style={{borderRadius: "50%", width: "110%"}} alt="Minh"/>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}