import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Education() {
    return (
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
            <div className="section_inner_container">
                <h1 className="large_heading" id="education_text">Education</h1>
                <p id="obtained">Obtained ASEAN Scholarship for all</p>

                <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                    <div>
                        <div style={{display: "flex"}}>
                            <h2 className="school_name_year">National University of Singapore</h2>
                            <div style={{flexGrow: 1}}/>
                            <h2 className="school_name_year">2023 – 2027</h2>
                        </div>
                        <ul className="education_list">
                            <li>Bachelor of Computing (Computer Science).</li>
                            <li>Cumulative Average Point (CAP): 4.8 / 5.0.</li>
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
                            <li>Participated in Singapore Youth Festival and obtained Distinction (highest award).</li>
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
                                Gold and Silver Awards for various Mathematics competitions (UKIMC, UKSMC, HXCMO and SASMO).
                            </li>
                            <li>
                                Participated in Singapore Youth Festival and obtained Distinction (highest award).
                            </li>
                            <li>
                                Vice-Chairperson of class Value-In-Action (VIA) project, supervising and organised
                                activities
                                for a class of 25 students.
                            </li>
                            <li>
                                First place in school's Innovation, Design, Engineering eXchange (IDEX) Challenge.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    );
}