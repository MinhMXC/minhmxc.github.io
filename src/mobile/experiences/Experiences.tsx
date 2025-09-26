import { useState } from "react";
import { useAnimate } from "motion/react";

import Content from "../Content";
import { EXPERIENCES } from "../../contents";
import NavGroup from "../NavGroup";
import { OPACITY } from "../animations";

export default function Experiences() {
  const [index, setIndex] = useState(0);
  const [experience, setExperience] = useState(EXPERIENCES[index]!);
  const [contentScope, animate] = useAnimate();

  async function changeIndex(newIndex: number) {
    setIndex(newIndex);
    await animate(contentScope.current, { opacity: 0 }, OPACITY.transition);
    setExperience(EXPERIENCES[newIndex]!);
    animate(contentScope.current, { opacity: 1 }, OPACITY.transition);
  }

  function next() {
    if (index == EXPERIENCES.length - 1) {
      return;
    }
    changeIndex(index + 1);
  }

  function back() {
    if (index == 0) {
      return;
    }
    changeIndex(index - 1);
  }

  return (
    <Content bgImage={EXPERIENCES[index]!.wideImg} title="Experiences">
      <NavGroup backOnClick={back} nextOnClick={next} />
      <div ref={contentScope} className="mb-experience">
        <h3 className="mb-experience__company accent-color">{experience.company}</h3>
        <h3 className="mb-experience__position"><i>{experience.position}</i></h3>
        <span className="mb-experience__period">{experience.duration}</span>
        <div className="mb-experience__languages">
          {experience.badges.map(badge => badge.name).reduce((prev, cur) => prev + ", " + cur)}
        </div>
        <ul>
          {experience.desc.map(desc => <li key={desc}>{desc}</li>)}
        </ul>
      </div>
    </Content>
  );
}
