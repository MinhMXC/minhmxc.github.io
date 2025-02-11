import {useState} from "react";
import TechChip from "./TechChip";
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function More() {
  const [num, setNum] = useState(0);
  const style = {
    backgroundColor: "#333335",
    borderLeft: "solid 2px white"
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
      <div className="section_inner_container">
        <div>
          <h1 className="large_heading" id="fun_project_text">Fun Projects</h1>

          <div style={{display: "flex", gap: "20px"}}>
            <div class="projects_buttons_container">
              <button
                className="projects_button"
                onClick={() => setNum(0)}
                style={num === 0 ? style : null}
              >Bad Apple
              </button>
              <button
                className="projects_button"
                onClick={() => setNum(1)}
                style={num === 1 ? style : null}
              >Minecraft Calculator
              </button>
            </div>
            {
              num === 0
                ? <BadAppleShowcase/>
                : num === 1
                  ? <MinecraftShowcase/>
                  : <></>
            }
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

function BadAppleShowcase() {
  return (
    <div className="proj_container">
      <iframe width="600" height="338" src="https://www.youtube.com/embed/PulU7kVTtDY?si=UIPMboCNExcXSmA0"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <div className="proj_techstack">
        <TechChip name="Python" color="#3573a6"/>
      </div>

      <div>
        <p className="proj_title" style={{margin: 0}}>CS1101S in Source Academy</p>
        <p className="proj_desc">
          Source Academy is where I had my first programming module. This project includes
          a modified version (to output Source Academy codes instead of Desmos) of my past C#
          project <a
          href="https://github.com/MinhMXC/ImageToGraph"
          target="_blank"
          rel="noreferrer"
        >ImageToGraph</a> and a simple Python <a
          href="https://github.com/MinhMXC/MIDIToSourceAcademy"
          target="_blank"
          rel="noreferrer"
        >MIDIToSourceAcademy</a> codes parser.
        </p>
      </div>
    </div>
  );
}

function MinecraftShowcase() {
  return (
    <div className="proj_container">
      <iframe width="600" height="338" src="https://www.youtube.com/embed/A7Pq-aBa_NU?si=RoslQ5lOLw65IeRG"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <div className="proj_techstack">
        <TechChip name="Minecraft" color="#52a435"/>
        <TechChip name="Redstone" color="#df260e"/>
      </div>

      <div>
        <p className="proj_title" style={{margin: 0}}>Minecraft 32-bit Calculator</p>
        <p className="proj_desc">
          As I mentioned before, I am interested in anything computer-related, which also includes
          lower-level stuffs. This is my take on the design of a simple 32-bit processor that only support
          arithmetic operations in an unorthodox development environment :).
        </p>
      </div>
    </div>
  );
}