import { MpProject } from "../../types";
import ProjectsTemplate from "../projects-template/ProjectsTemplate";

import badAppleNarrow from "../../assets/narrow/bad-apple.png";
import calculatorNarrow from "../../assets/narrow/calculator.png";
import chikaNarrow from "../../assets/narrow/chika.png";

import badAppleWide from "../../assets/wide/bad-apple.png";
import calculatorWide from "../../assets/wide/calculator.png";
import chikaWide from "../../assets/wide/chika.png";

interface FunProjectsProps {
  changeProjectScreenBg: (src: string) => void;
}

export default function FunProjects({ changeProjectScreenBg }: FunProjectsProps) {
  const projects: MpProject[] = [
    {
      title: "Bad Apple on Source Academy",
      narrowImg: badAppleNarrow,
      wideImg: badAppleWide,
      desc: (
        <>
          <p>
            During my introductory programming course at Source Academy, I was inspired to go beyond the
            platform's intended uses. The platform, built for simple exercises like drawing graphs and
            manipulating sounds, became the canvas for a much larger project of recreating the "Bad Apple" music video.
          </p>
          <p>
            For the <u>audio</u>, I deep-dived into MIDI files and developed a Python script
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
            "Chika Dance" clip from the anime, <i>Love is War</i> into
            a dynamic graphing animation on Desmos.
          </p>
        </>
      )
    },
  ];

  return (
    <ProjectsTemplate projects={projects} changeProjectScreenBg={changeProjectScreenBg} />
  );
}
