import {TypeAnimation} from "react-type-animation";
import {useState} from "react";

export default function Home() {
  const [textColor, setTextColor] = useState("");

  return (
    <div style={{marginRight: "30%", marginBottom: "5%"}}>
      <h1 id="hi_text">Hey, I'm Minh.</h1>

      <h2 id="I">I </h2>
      <div style={{color: textColor, display: "inline"}}>
        <TypeAnimation
          sequence={[
            'code.',
            () => setTextColor("#55CBCD"),
            2000,
            "develop software.",
            () => setTextColor("#BAFFC9"),
            2000,
            "solve problems.",
            () => setTextColor("#FFB4BB"),
            2000,
          ]}
          wrapper="span"
          speed="50"
          style={{fontSize: "3.5rem", fontWeight: "500"}}
          repeat={Infinity}
        />
      </div>

      <h3 id="home_intro">
        I'm a Software Engineer and a computer enthusiast,
        <br/>
        having experience in both Mobile and Web Development.
      </h3>
    </div>
  );
}