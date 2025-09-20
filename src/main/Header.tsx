import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import { MpScreen } from "../types";
import { MAIN } from "../constants";

interface HeaderProps {
  screens: MpScreen[];
  screenIndex: number
}

export default function Header({ screens, screenIndex }: HeaderProps) {
  const [headerText, setHeaderText] = useState(screens[screenIndex]?.title);
  const [header, animateHeader] = useAnimate();

  async function onChange() {
    if (screens[screenIndex]?.title == headerText) {
      return;
    }
    await animateHeader(header.current, { y: -MAIN.titleAnimation.distance }, MAIN.titleAnimation.transition);
    setHeaderText(screens[screenIndex]?.title);
    await animateHeader(header.current, { y: MAIN.titleAnimation.distance }, { duration: 0.00001 });
    animateHeader(header.current, { y: 0 }, MAIN.titleAnimation.transition);
  }

  useEffect(() => {
    onChange();
  }, [screenIndex]);

  return (
    <div className="header">
      <motion.span ref={header} className="header__text" {...MAIN.opacityInitialAnimation}>
        {headerText}
      </motion.span>
    </div>
  );
}
