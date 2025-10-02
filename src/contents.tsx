import { MpAbout, MpExperience, MpProject, MpUniversity } from "./types";
import * as Badge from "./badges";

import badAppleNarrow from "./assets/narrow/bad-apple.jpg";
import calculatorNarrow from "./assets/narrow/calculator.jpg";
import chikaNarrow from "./assets/narrow/chika.jpg";
import nesNarrow from "./assets/narrow/nes.jpg";
import appNarrow from "./assets/narrow/app.jpg";
import forumNarrow from "./assets/narrow/forum.jpg";
import chip8Narrow from "./assets/narrow/chip8.jpg";

import meWide from "./assets/wide/me.jpg";
import amazonWide from "./assets/wide/amazon.jpg";
import freshCarsWide from "./assets/wide/fresh-cars.jpg";
import calculatorWide from "./assets/wide/calculator.jpg";
import badAppleWide from "./assets/wide/bad-apple.jpg";
import appWide from "./assets/wide/app.jpg";
import zeldaWide from "./assets/wide/zelda.jpg";
import gdscWide from "./assets/wide/gdsc.jpg";
import nesWide from "./assets/wide/nes.jpg";
import nusWide from "./assets/wide/nus.jpg";
import forumWide from "./assets/wide/forum.jpg";
import chip8Wide from "./assets/wide/chip8.jpg";
import kungfuWide from "./assets/wide/kungfu.jpg";
import chikaWide from "./assets/wide/chika.jpg";

import backSvg from "./assets/back.svg";
import nextSvg from "./assets/next.svg";

import badAppleVideo from "./assets/videos/bad-apple.mp4";
import minecraftVideo from "./assets/videos/minecraft.mp4";
import chikaVideo from "./assets/videos/chika-dance.mp4";

import nesVideo from "./assets/videos/nes.mp4";
import chip8Video from "./assets/videos/chip8.mp4";


export const ABOUT: MpAbout = {
  title: <>
    <span className="accent-color"> Technology </span> Enthusiast;
    Problem<span className="accent-color"> Solver</span>
  </>,
  desc: <>
    <h3>Hey, I'm Quang Minh.</h3>
    <p>
      I'm a <b>efficiency-oriented</b> and <b>result-driven</b> Computer Science undergraduate,
      always eager to learn and gain new experiences in the ever-expanding world of technology.
      So far, I have development experience in various areas, including Android <u>mobile</u> application,
      full-stack <u>web</u> applications, and even video game console <u>emulators</u>.
    </p>
    <p>
      Most recently, I completed an internship at Amazon Lab126,
      where I had the rare opportunity to work on exciting upcoming Amazon products.
    </p>
    <p>Looking forward to any challenges!</p>
  </>
};

export const EDUCATION: MpUniversity = {
  name: "National University of Singapore",
  period: "2023 - 2027",
  major: <i>
    Bachelor of Computing in <b className="accent-color">Computer Science</b>
  </i>,
  awards: [
    "ASEAN Undergraduate Merit Scholar",
    "Dean List for AY24/25 Semester 1",
    "GPA: 4.85 / 5.00"
  ],
  coursework: [
    {
      title: "General",
      courses: [
        "CS2030S OOP and Functional Programming (A+)",
        "CS2040S Data Structure and Algorithms (A)",
        "CS2100 Computer Organisation (A)",
        "CS2106 Operating Systems (A-)"
      ]
    },
    {
      title: "Networking",
      courses: [
        "CS2015 Intro to Computer Networks (A)",
        "CS3103 Computer Networks Practice"
      ]
    },
    {
      title: "Database",
      courses: [
        "CS2012 Database Systems (A+)",
        "CS3223 Database Systems Implementation"
      ]
    },
    {
      title: "Parallel Computing",
      courses: [
        "CS3210 Parallel Computing (A)",
      ]
    },
  ]
};

export const EXPERIENCES: MpExperience[] = [
  {
    company: "Amazon Lab126",
    position: "Manufacturing Test Engineer Intern",
    duration: "May - Aug 2025",
    wideImg: amazonWide,
    badges: [Badge.REACT, Badge.TYPESCRIPT, Badge.PYTHON],
    desc: <>
      <li>
        Oversaw development of a new module to visualise text-based testing logs with <u>React</u> and <u>Typescript</u>,
        erasing tedious debugging processes and improving test development and failure analysis efficiency.
      </li>
      <li>
        Optimised algorithm and rendering performance, allowing for large 50 MB+ log files to be displayed
        in less than 300ms and guaranteeing responsive user interface and delivering superb user experience.
      </li>
      <li>
        Deep-dived testing related issues for new upcoming devices by analysing data and identifying trends
        using <u>Python</u>, helping to ensure 99% of defective devices are correctly identified.
      </li>

    </>
  },
  {
    company: "Fresh Cars",
    position: "Software Engineer Intern",
    duration: "May - Aug 2024",
    wideImg: freshCarsWide,
    badges: [Badge.REACT, Badge.JAVASCRIPT, Badge.FLUTTER, Badge.FIREBASE, Badge.GOOGLE_CLOUD],
    desc: <>
      <li>
        Led the development of the company new workshop module to connect repairmen with salespeople
        and 100+ customers, leveraging <u>Javascript</u>, <u>React</u>, and <u>Firebase</u>, removing
        time-consuming processes.
      </li>
      <li>
        Modernised company's mobile application UI/UX by cooperating with designers and updating the codebase
        from <u>Flutter</u> 3.3.10 to 3.19.6, improving customers satisfaction and experience.
      </li>
      <li>
        Integrated a payment system on company’s app with HitPay and Shell API using <u>Flutter</u>,&nbsp;
        <u>Javascript</u>, <u>Firebase</u> and <u>Google Cloud Platform</u>,
        allowing customers to easily pay gas and rental fee on the app.
      </li>
    </>
  },
  {
    company: "National University of Singapore",
    position: "Teaching Assistant",
    duration: "Aug 2024 - Present",
    wideImg: nusWide,
    badges: [Badge.JAVASCRIPT, Badge.JAVA],
    desc: <>
      <li>
        Taught foundational <u>Java</u> and <u>Javascript</u> programming courses for undergraduate students,
        heavily focusing on problem-solving methodology and Object-Oriented & Functional programming paradigms.
      </li>
      <li>
        Led weekly tutorial sessions for a group of 8-12 students as well as reviewed, graded and gave constructive
        comments to student’s work; received teaching evaluation of 4.6/5.0 and excellent feedback from students.
      </li>
    </>
  },
];


export const FUN_PROJECTS: MpProject[] = [
  {
    title: "Bad Apple on Source Academy",
    narrowImg: badAppleNarrow,
    wideImg: badAppleWide,
    video: badAppleVideo,
    badges: [Badge.PYTHON, Badge.SOURCE],
    desc: (
      <>
        <p>
          During my introductory programming course at Source Academy, I was inspired to go beyond the
          platform's intended uses. The platform, built for simple exercises like drawing graphs and
          manipulating sounds, became the canvas for a much larger project of recreating the "Bad Apple" music video.
        </p>
        <p>
          For the <u>audio</u>, I deep - dived into MIDI files and developed a Python script
          to deconstruct the MIDI file format, converting its musical data into Source Academy's audio instructions.
        </p>
        <p>
          For the <u>graph</u>, I re-purposed my past C# ImageToGraph project to transform video frames into a
          series of commands for the platform's graphing library.
        </p>
      </>
    )
  },
  {
    title: "Minecraft Calculator",
    narrowImg: calculatorNarrow,
    wideImg: calculatorWide,
    video: minecraftVideo,
    badges: [Badge.MINECRAFT, Badge.REDSTONE],
    desc: (
      <>
        <p>
          Combining my love for gaming and fascination for computer architecture, I created a calculator in Minecraft.
          Using Minecraft's "redstone" as my medium, I constructed complex logic gates from scratch and wired them to
          create circuits for addition, subtraction, multiplication and division.
        </p>
        <p>
          The result is a working 32-bit calculator with 2 d.p. accuracy for division operation.
        </p>
      </>
    )
  },
  {
    title: "Chika Dance on Desmos",
    narrowImg: chikaNarrow,
    wideImg: chikaWide,
    video: chikaVideo,
    badges: [Badge.CSHARP, Badge.WINDOWS_FORMS, Badge.DESMOS],
    desc: (
      <>
        <p>
          My highschool had a simple contest: to see who can draw the best picture on a TI-84 graphing calculator.
          My goal, obviously, was to win. But I wanted to win with a program.
        </p>
        <p>
          I developed a C# Windows application, <b>ImageToGraph</b>, that converts any image
          into a series of equations for a graphing calculator.
          Thinking bigger, I used the program to converted the
          "Chika Dance" clip from the anime, <i>Love is War </i> into
          a dynamic graphing animation on Desmos.
        </p>
      </>
    )
  },
];

export const PROJECTS: MpProject[] = [
  {
    title: "NES Emulator",
    narrowImg: nesNarrow,
    wideImg: nesWide,
    video: nesVideo,
    badges: [Badge.CPP, Badge.SDL2, Badge.CATCH2, Badge.CMAKE],
    desc: (
      <>
        <p>
          I've always been fascinated by how computers and video games work. So for a project,
          I decided to go all the way back to the start: a video game console emulator
          for the 1985 Nintendo Entertainment System with <b>C++</b> and <b>SDL2</b>.
        </p>
        <p>
          I learned a ton about computer hardware and the fundamentals of code execution.
          I had to deep - dive into the original 6502 CPU and its instruction set,
          figure out how to manage memory buses, and solve the puzzle of synchronising
          the CPU and GPU to get the visuals and audio to work perfectly.
        </p>
        <p>
          Utilising the <b>Catch2</b> library and Test Driven Development,
          I made sure my emulator accurately follow behaviours
          of the original console.At the end, I got a cycle - accurate emulator,
          capable of running <b>100s</b> of retro games at <b>400FPS++</b>.
        </p>
      </>
    )
  },
  {
    title: "Steam Achievement Manager",
    narrowImg: appNarrow,
    wideImg: appWide,
    badges: [Badge.ANDROID, Badge.KOTLIN, Badge.JETPACK, Badge.SQLITE, Badge.GRADLE, Badge.STEAM],
    desc: (
      <>
        <p>
          As an avid achievement hunter myself, I was frustrated by the lack of tools
          to easily track my progress on the go.As such, I developed an Android application
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
    badges: [Badge.REACT, Badge.TYPESCRIPT, Badge.RUBY, Badge.RAIL, Badge.POSTGRES, Badge.DOCKER, Badge.NODE],
    desc: (
      <>
        <p>
          Being a frequent social media user, I've always been interested in knowing how such large-scale
          systems are built and developed.
          This led me to create a full - stack discussion website,
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
    badges: [Badge.CPP, Badge.SDL2, Badge.CATCH2, Badge.CMAKE],
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

