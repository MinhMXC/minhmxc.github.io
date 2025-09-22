import React, { useEffect, useState } from "react";
import Background from "./Background";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./about/About";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import { MpProject, MpScreen } from "../types";
import Projects from "./projects/Projects";
import FunProjects from "./fun-projects/FunProjects";
import { motion, useAnimate } from "motion/react";

import meImage from "../assets/wide/me.jpg";
import nusImage from "../assets/wide/nus.jpg";
import amazonImage from "../assets/wide/amazon.jpg";
import nesImage from "../assets/wide/nes.jpg";
import badAppleImage from "../assets/wide/bad-apple.jpg";

import { MAIN } from "../constants";

export default function Main() {
  function getChangeScreenBg(title: string) {
    return (project: MpProject) => {
      const bgUrl = `url("${project.wideImg}")`;
      const video = document.getElementById(`${title}-video`) as HTMLVideoElement;
      const background = document.getElementById(`${title}-bg`) as HTMLDivElement;

      // If background is different, change it
      if (background.style.backgroundImage !== bgUrl) {
        const dimPrevBackground = background.animate({ opacity: 0 }, MAIN.bgChangeAnimation.options);
        dimPrevBackground.onfinish = () => {
          background.style.backgroundImage = bgUrl;
          background.animate({ opacity: 1 }, MAIN.bgChangeAnimation.options);
        };
      }

      // If there was a video playing, dim it and stop it
      const dimPrevVideo = video.animate({ opacity: 0 }, MAIN.bgChangeAnimation.options);

      dimPrevVideo.onfinish = () => {
        video.src = "";

        if (project.video === undefined) {
          return;
        }

        video.src = project.video;
        const showNextVideo = video.animate({ opacity: 1 }, { delay: 1000, ...MAIN.bgVideoAnimation.options });
        showNextVideo.onfinish = () => {
          background.style.backgroundImage = "";
        };
        video.load();
        video.play();
        video.onended = () => {
          background.style.backgroundImage = bgUrl;
          video.animate({ opacity: 0 }, MAIN.bgVideoAnimation.options);
        };
      };
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
      content: <Projects changeScreenBg={getChangeScreenBg("Projects")} />,
    },
    {
      title: "Fun Projects",
      backgroundImg: badAppleImage,
      content: <FunProjects changeScreenBg={getChangeScreenBg("Fun Projects")} />,
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
    window.onkeyup = (event) => {
      if (event.code === "ArrowRight" || event.code === "KeyD") {
        changeScreenIndex(screenIndex + 1);
      } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
        changeScreenIndex(screenIndex - 1);
      }
    };

    changeMainContent();
  }, [screenIndex]);

  return (
    <React.Fragment>
      <div className="foreground">
        <Navigation variant="Back" screenIndex={screenIndex} changeScreenIndex={changeScreenIndex} />

        <div className="main">
          <motion.div ref={mainContentScope} className="main__content-container" {...MAIN.opacityInitialAnimation}>
            {mainContent}
          </motion.div>
        </div>

        <Navigation variant="Next" screenIndex={screenIndex} changeScreenIndex={changeScreenIndex} />
      </div>

      <div className="header-aligner">
        <Header screens={screens} screenIndex={screenIndex} />
        <div className="header-aligner__item">
          <Experiences />
        </div>
      </div>

      <Background screens={screens} screenIndex={screenIndex} />
    </React.Fragment>
  );
}
