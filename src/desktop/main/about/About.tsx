import { ABOUT } from "../../../contents";

export default function About() {
  return (
    <div className="content about">
      <h2 className="about__title">
        {ABOUT.title}
      </h2>
      {ABOUT.desc}
    </div>
  );
}
