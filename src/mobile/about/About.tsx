import { ABOUT } from "../../contents";
import Content from "../Content";

export default function About() {
  return (
    <Content>
      <div className="mb-about">
        <div>
          <h2>{ABOUT.title}</h2>
          <div style={{ textAlign: "justify" }}>
            {ABOUT.desc}
          </div>
        </div>
      </div>
    </Content>
  );
}
