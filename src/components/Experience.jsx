import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Experience() {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <div>
                <h1 className="large_heading" id="experience_text">Experience</h1>
                <p>I'm cooking</p>
            </div>
        </AnimationOnScroll>
    );
}