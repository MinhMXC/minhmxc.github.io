import { useRef, useState } from "react";
import Background from "./Background";
import { SCREENS } from "./main-constants";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Experiences from "./Experiences";
import { MpScreen } from "../types";
import Projects from "./projects/Projects";
import FunProjects from "./fun-projects/FunProjects";
import { motion, useAnimate } from "motion/react";

import meImage from "../assets/wide/me.jpg";
import nusImage from "../assets/wide/nus.png";
import amazonImage from "../assets/wide/amazon.png";
import nesImage from "../assets/wide/nes.png";
import badAppleImage from "../assets/wide/bad-apple.png";

import backSvg from "../assets/back.svg";
import nextSvg from "../assets/next.svg";

export default function Main() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [scope, animate] = useAnimate();

  function changeProjectScreenBg(src: string) {
    const url = `url("${src}")`;
    const projectsBg = document.getElementById("Projects-bg");
    if (projectsBg === null || previousProjectsBg.current === url) {
      return;
    }

    previousProjectsBg.current = url;
    projectsBg.animate({ opacity: 0 }, { duration: 250, fill: "forwards" });
    projectsBg.animate({ backgroundImage: `url("${src}")` }, { duration: 1, delay: 250, fill: "forwards" });
    projectsBg.animate({ opacity: 1 }, { duration: 250, delay: 250, fill: "forwards" });
  }

  function changeFunProjectScreenBg(src: string) {
    const url = `url("${src}")`;
    const projectsBg = document.getElementById("Fun Projects-bg");
    if (projectsBg === null || previousProjectsBg.current === url) {
      return;
    }

    previousProjectsBg.current = url;
    projectsBg.animate({ opacity: 0 }, { duration: 250, fill: "forwards" });
    projectsBg.animate({ backgroundImage: `url("${src}")` }, { duration: 1, delay: 250, fill: "forwards" });
    projectsBg.animate({ opacity: 1 }, { duration: 250, delay: 250, fill: "forwards" });
  }

  const screens: MpScreen[] = [
    {
      title: "About",
      backgroundImg: meImage,
      foreground: <About />,
    },
    {
      title: "Education",
      backgroundImg: nusImage,
      foreground: <Education />,
    },
    {
      title: "Work Experience",
      backgroundImg: amazonImage,
      foreground: <Experiences />,
    },
    {
      title: "Projects",
      backgroundImg: nesImage,
      foreground: <Projects changeProjectScreenBg={changeProjectScreenBg} />,
    },
    {
      title: "Fun Projects",
      backgroundImg: badAppleImage,
      foreground: <FunProjects changeProjectScreenBg={changeFunProjectScreenBg} />,
    },
  ];

  const previousProjectsBg = useRef(`url("${screens.find(screen => screen.title === "Projects")!.backgroundImg}")`);

  async function changeScreen(toIndex: number) {
    if (!(0 <= toIndex && toIndex < SCREENS.length)) {
      return;
    }
    await animate(scope.current, { opacity: 0 }, { duration: 0.1 });
    setScreenIndex(toIndex);
    animate(scope.current, { opacity: 1 }, { duration: 0.25, delay: 0.1 });
  }

  return (
    <div>
      <div className="main-cont">
        <Navigation
          iconSrc={backSvg}
          direction="Back"
          onClick={() => changeScreen(screenIndex - 1)}
        />

        <div className="main-content-cont">
          <Header screens={screens} screenIndex={screenIndex} />
          <motion.div ref={scope}>
            {screens[screenIndex]?.foreground}
          </motion.div>
        </div>

        <Navigation
          iconSrc={nextSvg}
          direction="Next"
          onClick={() => changeScreen(screenIndex + 1)}
        />
      </div>

      <Background screens={screens} screenIndex={screenIndex} />
    </div >
  );
}

