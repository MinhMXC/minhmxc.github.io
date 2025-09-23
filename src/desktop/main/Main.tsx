import React, { useEffect, useState } from "react";
import { MpProject, MpScreen } from "../../types";
import { motion, useAnimate } from "motion/react";

import Background from "./Background";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./about/About";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import ProjectsTemplate from "./projects-template/ProjectsTemplate";

import meImage from "../../assets/wide/me.jpg";
import nusImage from "../../assets/wide/nus.jpg";
import amazonImage from "../../assets/wide/amazon.jpg";
import nesImage from "../../assets/wide/nes.jpg";
import badAppleImage from "../../assets/wide/bad-apple.jpg";

import { A_MAIN } from "../dt-animations";
import { FUN_PROJECTS, PROJECTS } from "../../contents";

export default function Main() {
  function getChangeScreenBg(title: string) {
    return (project: MpProject) => {
      const bgUrl = `url("${project.wideImg}")`;
      const video = document.getElementById(`${title}-video`) as HTMLVideoElement;
      const background = document.getElementById(`${title}-bg`) as HTMLDivElement;

      // If background is different, change it
      if (background.style.backgroundImage !== bgUrl) {
        const dimPrevBackground = background.animate({ opacity: 0 }, A_MAIN.bgImage.options);
        dimPrevBackground.onfinish = () => {
          background.style.backgroundImage = bgUrl;
          background.animate({ opacity: 1 }, A_MAIN.bgImage.options);
        };
      }

      // If there was a video playing, dim it
      const dimPrevVideo = video.animate({ opacity: 0 }, A_MAIN.bgImage.options);

      dimPrevVideo.onfinish = () => {
        video.src = "";

        if (project.video === undefined) {
          return;
        }

        video.src = project.video;
        const showNextVideo = video.animate({ opacity: 1 }, { delay: 1000, ...A_MAIN.bgVideo.options });
        showNextVideo.onfinish = () => {
          background.style.backgroundImage = "";
        };
        video.load();
        video.play();
        video.onended = () => {
          background.style.backgroundImage = bgUrl;
          video.animate({ opacity: 0 }, A_MAIN.bgVideo.options);
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
      content: <ProjectsTemplate key="Projects" projects={PROJECTS} changeScreenBg={getChangeScreenBg("Projects")} />,
    },
    {
      title: "Fun Projects",
      backgroundImg: badAppleImage,
      content: <ProjectsTemplate key="Fun" projects={FUN_PROJECTS} changeScreenBg={getChangeScreenBg("Fun Projects")} />,
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
    await animateMainContent(mainContentScope.current, { opacity: 0 }, A_MAIN.mainContent.transition);
    setMainContent(screens[screenIndex]!.content);
    animateMainContent(mainContentScope.current, { opacity: 1 }, A_MAIN.mainContent.transition);
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
          <motion.div ref={mainContentScope} className="main__content-container" {...A_MAIN.opacityInitial}>
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
