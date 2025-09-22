import { MpProject } from "../../types";
import ProjectsTemplate from "../projects-template/ProjectsTemplate";

import nesNarrow from "../../assets/narrow/nes.jpg";
import appNarrow from "../../assets/narrow/app.jpg";
import forumNarrow from "../../assets/narrow/forum.jpg";
import chip8Narrow from "../../assets/narrow/chip8.jpg";

import nesWide from "../../assets/wide/nes.jpg";
import appWide from "../../assets/wide/app.jpg";
import forumWide from "../../assets/wide/forum.jpg";
import chip8Wide from "../../assets/wide/chip8.jpg";

import nesVideo from "../../assets/videos/nes.mp4";
import chip8Video from "../../assets/videos/chip8.mp4";

import {
  ANDROID, CATCH2, CMAKE, CPP, DOCKER, GRADLE, JETPACK,
  KOTLIN, NODE, POSTGRES, RAIL, REACT, RUBY, SDL2, SQLITE, STEAM, TYPESCRIPT
} from "../projects-template/badges";

interface ProjectsProps {
  changeScreenBg: (project: MpProject) => void;
}

export default function Projects({ changeScreenBg }: ProjectsProps) {
  const projects: MpProject[] = [
    {
      title: "NES Emulator",
      narrowImg: nesNarrow,
      wideImg: nesWide,
      video: nesVideo,
      badges: [CPP, SDL2, CATCH2, CMAKE],
      desc: (
        <>
          <p>
            I've always been fascinated by how computers and video games work. So for a project,
            I decided to go all the way back to the start: a video game console emulator
            for the 1985 Nintendo Entertainment System with <b>C++</b> and <b>SDL2</b>.
          </p>
          <p>
            I learned a ton about computer hardware and the fundamentals of code execution.
            I had to deep-dive into the original 6502 CPU and its instruction set,
            figure out how to manage memory buses, and solve the puzzle of synchronising
            the CPU and GPU to get the visuals and audio to work perfectly.
          </p>
          <p>
            Utilising the <b>Catch2</b> library and Test Driven Development,
            I made sure my emulator accurately follow behaviours
            of the original console. At the end, I got a cycle-accurate emulator,
            capable of running <b>100s</b> of retro games at <b>400FPS++</b>.
          </p>
        </>
      )
    },
    {
      title: "Steam Achievement Manager",
      narrowImg: appNarrow,
      wideImg: appWide,
      badges: [ANDROID, KOTLIN, JETPACK, SQLITE, GRADLE, STEAM],
      desc: (
        <>
          <p>
            As an avid achievement hunter myself, I was frustrated by the lack of tools
            to easily track my progress on the go. As such, I developed an Android application
            using <b>Jetpack Compose</b> and <b>Kotlin</b> that helps gamers manage their
            Steam achievements directly from their phone.
          </p>
          <p>
            I built the app to intelligently parse data from the <b>Steam API</b> and various achievement websites,
            giving users access to over <b>10,000</b> games.
            To ensure a seamless experience, I designed it with a robust local caching system using <b>SQLite</b>,
            providing reliable offline access so that users can check their progress anywhere,
            even without a network connection.
          </p>
        </>
      )
    },
    {
      title: "Anarchy Forum",
      narrowImg: forumNarrow,
      wideImg: forumWide,
      badges: [REACT, TYPESCRIPT, RUBY, RAIL, POSTGRES, DOCKER, NODE],
      desc: (
        <>
          <p>
            Being a frequent social media user, I've always been interested in knowing how such large-scale
            systems are built and developed.
            This led me to create a full-stack discussion website,
            a complete forum where users can post, comment, and engage with a community.
          </p>
          <p>
            I chose <b>React</b> and <b>Typescipt</b> for the front end to create a dynamic and
            responsive user experience, and <b>Ruby on Rails</b> for the back end to handle
            data management and API interactions.
            The build process gave me the technical overview of a scalable web application,
            from implementing secure user authentication using <b>JSON Web Token</b> to containerizing the
            entire application with <b>Docker</b> for seamless deployment.
          </p>
        </>
      )
    },
    {
      title: "Chip8 Emulator",
      narrowImg: chip8Narrow,
      wideImg: chip8Wide,
      video: chip8Video,
      badges: [CPP, SDL2, CATCH2, CMAKE],
      desc: (
        <>
          <p>
            For this project, I decided to take a journey back in time by building a Chip-8 emulator.
            The Chip-8 was a simple virtual machine from 1977, a foundational piece of technology
            for making early video games.
          </p>
          <p>
            This project was a fun exercise in low-level programming.
            I had to reconstruct the entire virtual machine from scratch,
            implementing the CPU's instruction set, managing the memory,
            and figuring out how to render graphics on a modern screen.
            I even went a step further by adding support for SChip instructions to run more advanced games.
            The process taught me a ton about virtual machines and system architecture.
          </p>
        </>
      )
    },
  ];

  return (
    <ProjectsTemplate projects={projects} changeScreenBg={changeScreenBg} />
  );
}
