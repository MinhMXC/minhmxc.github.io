import { useEffect, useState } from "react";
import Background from "./Background";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./about/About";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import { MpScreen } from "../types";
import Projects from "./projects/Projects";
import FunProjects from "./fun-projects/FunProjects";
import { motion, useAnimate } from "motion/react";

import meImage from "../assets/wide/me.jpg";
import nusImage from "../assets/wide/nus.png";
import amazonImage from "../assets/wide/amazon.png";
import nesImage from "../assets/wide/nes.png";
import badAppleImage from "../assets/wide/bad-apple.png";

import { MAIN } from "../constants";

export default function Main() {
  function getChangeScreenBg(id: string) {
    return (newSrc: string) => {
      const url = `url("${newSrc}")`;
      const projectsBg = document.getElementById(id);
      if (projectsBg === null || projectsBg.style.backgroundImage === url) {
        return;
      }

      const duration = MAIN.bgChangeAnimation.options.duration as number;
      projectsBg.animate({ opacity: 0 }, { ...MAIN.bgChangeAnimation.options });
      projectsBg.animate({ backgroundImage: url }, { duration: 1, delay: duration, fill: "forwards" });
      projectsBg.animate({ opacity: 1 }, { delay: duration, ...MAIN.bgChangeAnimation.options });
      setTimeout(() => projectsBg.style.backgroundImage = url, duration * 2);
    };
  }

  const screens: MpScreen[] = [
    {
      title: "About",
      backgroundImg: meImage,
      content: <About />,
    },
    {
      title: "Education",
      backgroundImg: nusImage,
      content: <Education />,
    },
    {
      title: "Work Experience",
      backgroundImg: amazonImage,
      content: <Experiences />,
    },
    {
      title: "Projects",
      backgroundImg: nesImage,
      content: <Projects changeProjectScreenBg={getChangeScreenBg("Projects-bg")} />,
    },
    {
      title: "Fun Projects",
      backgroundImg: badAppleImage,
      content: <FunProjects changeProjectScreenBg={getChangeScreenBg("Fun Projects-bg")} />,
    },
  ];

  const [screenIndex, setScreenIndex] = useState(0);
  const [mainContent, setMainContent] = useState(screens[screenIndex]!.content);
  const [mainContentScope, animateMainContent] = useAnimate();

  function changeScreenIndex(destScreenIndex: number): boolean {
    if (destScreenIndex < 0 || destScreenIndex >= screens.length) {
      return false;
    }
    setScreenIndex(destScreenIndex);
    return true;
  }

  async function changeMainContent() {
    await animateMainContent(mainContentScope.current, { opacity: 0 }, MAIN.mainContentAnimation.transition);
    setMainContent(screens[screenIndex]!.content);
    animateMainContent(mainContentScope.current, { opacity: 1 }, MAIN.mainContentAnimation.transition);
  }

  useEffect(() => {
    changeMainContent();
  }, [screenIndex]);

  return (
    <div>
      <div className="main-cont">
        <Navigation variant="Back" screenIndex={screenIndex} changeScreenIndex={changeScreenIndex} />

        <div className="main-content-cont">
          <Header screens={screens} screenIndex={screenIndex} />
          <motion.div ref={mainContentScope} {...MAIN.opacityInitialAnimation}>
            {mainContent}
          </motion.div>
        </div>

        <Navigation variant="Next" screenIndex={screenIndex} changeScreenIndex={changeScreenIndex} />
      </div>

      <Background screens={screens} screenIndex={screenIndex} />
    </div >
  );
}
