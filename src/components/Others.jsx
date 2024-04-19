import SteamLogo from "../resources/steam_logo.png";

export default function Others() {
    return (
        <div id="others_container">
            <h1 className="large_heading" id="others_text">Others</h1>

            <p className="proj_desc" style={{width: "900px"}}>
                One of my other life-long hobby is gaming. I am an achievement hunter,
                which means that I try to get every achievement possible in every game.
                Because of this, I also occasionally write video game guide to help out other gamers.
                <br/>
                <br/>
                If you scrolled this far, thank you for reading! &nbsp; ⸜(｡˃ ᵕ ˂ )⸝♡
            </p>
            <a
                href="https://steamcommunity.com/id/minhmxc/"
                target="_blank"
                rel="noreferrer"
            >
                <button id="steam_button">
                    <img src={SteamLogo} alt="steam_logo" width="80px"/>
                </button>
            </a>
        </div>
    );
}