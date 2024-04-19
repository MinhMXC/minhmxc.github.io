import GmailLogo from "../resources/gmail.png";
import GithubLogo from "../resources/github.png";
import LinkedinLogo from "../resources/linkedin.png";

function generateOnClick(ref) {
    return () => ref.current.scrollIntoView();
}

export default function Header({homeRef, aboutRef, educationRef, experienceRef, projectsRef, moreRef}) {
    return (
        <header id="nav_bar">
            <div>
                <button className="nav_button" onClick={generateOnClick(homeRef)}>Home</button>
                <button className="nav_button" onClick={generateOnClick(aboutRef)}>About</button>
                <button className="nav_button" onClick={generateOnClick(educationRef)}>Education</button>
                <button className="nav_button" onClick={generateOnClick(experienceRef)}>Experience</button>
                <button className="nav_button" onClick={generateOnClick(projectsRef)}>Projects</button>
                <button className="nav_button" onClick={generateOnClick(moreRef)}>More</button>
            </div>

            <div style={{flexGrow: 1}}/>

            <div>
                <a href="https://github.com/MinhMXC" target="_blank" rel="noopener noreferrer">
                    <button className="nav_button">
                        <img className="nav_logo" src={GithubLogo} alt="github"/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/minhmxc/" target="_blank" rel="noopener noreferrer">
                    <button className="nav_button">
                        <img className="nav_logo" src={LinkedinLogo} alt="linkedin"/>
                    </button>
                </a>
                <a href="mailto:minhmxc.imp@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="nav_button">
                        <img className="nav_logo" src={GmailLogo} alt="gmail"/>
                    </button>
                </a>
            </div>
        </header>
    );
}