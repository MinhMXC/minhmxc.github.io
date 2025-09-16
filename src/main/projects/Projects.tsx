import { MpProject } from "../../types";
import ProjectsTemplate from "../projects-template/ProjectsTemplate";

import nesNarrow from "../../assets/narrow/nes.png";
import appNarrow from "../../assets/narrow/app.png";
import forumNarrow from "../../assets/narrow/forum.png";
import chip8Narrow from "../../assets/narrow/chip8.png";

import nesWide from "../../assets/wide/nes.png";
import appWide from "../../assets/wide/app.png";
import forumWide from "../../assets/wide/forum.png";
import chip8Wide from "../../assets/wide/chip8.png";

interface ProjectsProps {
  changeProjectScreenBg: (src: string) => void;
}

export default function Projects({ changeProjectScreenBg }: ProjectsProps) {
  const projects: MpProject[] = [
    {
      title: "NES Emulator",
      narrowImg: nesNarrow,
      wideImg: nesWide,
      desc: (
        <>
          <p>
            A desktop application that emulates the 1986 Nintendo Entertainment System, letting you play 100+ classic games on modern computers.
            Built with C++17, it runs smoothly at 400+ FPS and replicates the original console’s behavior with high accuracy using test-driven development.
          </p>
          <p>The video shows the original Super Mario Bros (1985) being played on the emulator.</p>
        </>
      )
    },
    {
      title: "Steam Achievement Manager",
      narrowImg: appNarrow,
      wideImg: appWide,
      desc: (
        <>
          <p>
            An Android app that helps gamers track and manage their Steam achievements right from their phone.
            It supports over 10,000 games using the Steam API and achievement websites, with offline access powered by local caching.
          </p>
          <p>The image shows the main screen of the application, loaded with games from my Steam account.</p>
        </>
      )
    },
    {
      title: "Anarchy Forum",
      narrowImg: forumNarrow,
      wideImg: forumWide,
      desc: (
        <>
          <p>
            A full-featured forum platform where users can post, comment, and discuss a wide range of topics.
            Built with React and Ruby on Rails, it includes secure authentication and is fully containerized for easy deployment across systems.
          </p>
          <p>The image shows the main page of the website, with posts from various users</p>
        </>
      )
    },
    {
      title: "Chip8 Emulator",
      narrowImg: chip8Narrow,
      wideImg: chip8Wide,
      desc: (
        <>
          <p>
            A software emulator for the original 1977 Chip-8 virtual machine, with support for newer SChip instructions.
            Chip-8 was mainly used for making video games and the image above shows a pseudo-3D game being run on the emulator.
          </p>
          <p>The video shows Space Invaders being played on the emulator.</p>
        </>
      )
    },
  ];

  return (
    <ProjectsTemplate projects={projects} changeProjectScreenBg={changeProjectScreenBg} />
  );
}
