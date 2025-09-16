import { motion, useAnimate } from "motion/react";
import { SCREENS } from "./main-constants";
import { useEffect, useState } from "react";
import { MpScreen } from "../types";

interface HeaderProps {
  screens: MpScreen[];
  screenIndex: number
}

export default function Header({ screens, screenIndex }: HeaderProps) {
  const [headerText, setHeaderText] = useState(screens[screenIndex]?.title);
  const [header, animateHeader] = useAnimate();

  async function onChange() {
    if (SCREENS[screenIndex]?.header == headerText) {
      return;
    }
    await animateHeader(header.current, { y: -64 }, { duration: 0.3, ease: [0.50, 0, 0.50, 1] });
    setHeaderText(SCREENS[screenIndex]?.header);
    await animateHeader(header.current, { y: 64 }, { duration: 0.00001 });
    animateHeader(header.current, { y: 0 }, { duration: 0.3, ease: [0.50, 0, 0.50, 1] });
  }

  useEffect(() => {
    onChange();
  }, [screenIndex]);

  return (
    <div className="main-content-header-cont">
      <motion.span
        ref={header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {headerText}
      </motion.span>
    </div>
  );
}
