import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import { MpScreen } from "../../types";
import { A_MAIN } from "../dt-animations";

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
    await animateHeader(header.current, { y: -A_MAIN.header.distance }, A_MAIN.header.transition);
    setHeaderText(screens[screenIndex]?.title);
    await animateHeader(header.current, { y: A_MAIN.header.distance }, { duration: 0.00001 });
    animateHeader(header.current, { y: 0 }, A_MAIN.header.transition);
  }

  useEffect(() => {
    onChange();
  }, [screenIndex]);

  return (
    <div className="header">
      <motion.span ref={header} className="header__text" {...A_MAIN.opacityInitial}>
        {headerText}
      </motion.span>
    </div>
  );
}
