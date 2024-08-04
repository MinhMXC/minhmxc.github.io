import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import {useRef} from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import More from "./components/More";
import Others from "./components/Others";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null)
  const projectsRef = useRef(null);
  const moreRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        moreRef={moreRef}
      />

      <div className="App">
        <div className="section_container" ref={homeRef}>
          <Home/>
        </div>

        <div className="section_container" ref={aboutRef}>
          <About/>
        </div>

        <div className="section_container" ref={educationRef}>
          <Education/>
        </div>

        <div className="section_container" ref={experienceRef}>
          <Experience/>
        </div>

        <div className="section_container" ref={projectsRef}>
          <Projects/>
        </div>

        <div className="section_container" ref={moreRef}>
          <More/>
        </div>

        <div className="section_container">
          <Others/>
        </div>
      </div>
    </>
  );
}

export default App;
