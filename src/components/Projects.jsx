import SteamAchievementAppImage from "../resources/steam_achievement.png"
import AnarchyForumImage from "../resources/anarchy_forum.png"
import Chip8Image from "../resources/chip8_emulator.png"
import TechChip from "./TechChip";
import {useState} from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
export default function Projects() {
    const [num, setNum] = useState(0);
    const style = {
        backgroundColor: "#333335",
        borderLeft: "solid 2px white"
    }
    return (
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
            <div className="section_inner_container">
                <h1 className="large_heading" id="project_text">Featured Projects</h1>

                <div style={{display: "flex", gap: "20px"}}>
                    <div id="projects_buttons_container">
                        <button
                            className="projects_button"
                            onClick={() => setNum(0)}
                            style={num === 0 ? style : null}
                        >Steam Achievement App
                        </button>
                        <button
                            className="projects_button"
                            onClick={() => setNum(1)}
                            style={num === 1 ? style : null}
                        >Anarchy Forum
                        </button>
                        <button
                            className="projects_button"
                            onClick={() => setNum(2)}
                            style={num === 2 ? style : null}
                        >Chip-8 Emulator
                        </button>
                    </div>
                    {
                        num === 0
                            ? <SteamAppShowcase/>
                            : num === 1
                                ? <AnarchyForumShowcase/>
                                : num === 2
                                    ? <Chip8EmulatorShowcase/>
                                    : <></>
                    }
                </div>
            </div>
        </AnimationOnScroll>
    );
}

function SteamAppShowcase() {
    return (
        <div className="proj_container">
            <img className="proj_img" src={SteamAchievementAppImage} alt="screenshot of Steam Achievement App"/>

            <div className="proj_techstack">
                <TechChip name="Android" color="#32DE84"/>
                <TechChip name="Kotlin" color="#8051FF"/>
                <TechChip name="Jetpack Compose" color="#4285F4"/>
                <TechChip name="SQLite" color="#004562"/>
            </div>

            <div>
                <a
                    className="proj_title"
                    href="https://github.com/MinhMXC/SteamAchievementApp"
                    target="_blank"
                    rel="noreferrer"
                >Steam Achievement Manager</a>
                <p className="proj_desc">
                    An Android app to track Steam game achievements for game achievement hunters,
                    including guide integration with websites such as TrueAchievement and PlaystationTrophies.
                </p>
            </div>
        </div>
    );
}

function AnarchyForumShowcase() {
    return (
        <div className="proj_container">
            <img className="proj_img" src={AnarchyForumImage} alt="screenshot of Anarchy Forum"/>

            <div className="proj_techstack">
                <TechChip name="React" color="#5ED3F3" />
                <TechChip name="Typescript" color="#2F74C0" />
                <TechChip name="Ruby on Rails" color="#C60000" />
                <TechChip name="PostgreSQL" color="#386B93" />
                <TechChip name="Docker" color="#1D63ED" />
            </div>

            <div>
                <a
                    className="proj_title"
                    href="https://github.com/MinhMXC/Forum_FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                >Anarchy Forum</a>
                <p className="proj_desc">
                    A Forum where users can posts and discuss topics, with comment system like
                    Reddit and Json Weh Token (JWT) authentication, built using Material UI
                    library and has support for Docker.
                </p>
            </div>
        </div>
    );
}

function Chip8EmulatorShowcase() {
    return (
        <div className="proj_container">
            <img className="proj_img" src={Chip8Image} alt="screenshot of Chip8 Emulator"/>

            <div className="proj_techstack">
                <TechChip name="C++" color="#6295cc" />
                <TechChip name="SDL" color="#163353" />
                <TechChip name="Multithreading" color="#fc6b03" />
                <TechChip name="Test-Driven Development" color="#4dab3f" />
            </div>

            <div>
                <a
                    className="proj_title"
                    href="https://github.com/MinhMXC/Chip8-Emulator"
                    target="_blank"
                    rel="noreferrer"
                >Chip-8 Emulator</a>
                <p className="proj_desc">
                    A software emulator for the original 1977 Chip-8 virtual machine, with support
                    for newer SChip instructions. Chip-8 was mainly used for making video games and
                    the image above shows a pseudo-3D game being run on the emulator.
                </p>
            </div>
        </div>
    );
}