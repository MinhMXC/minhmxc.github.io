import { motion, useAnimate } from "motion/react";
import { A_MAIN } from "../dt-animations";

import backSvg from "../../assets/back.svg";
import nextSvg from "../../assets/next.svg";

interface NavigationProps {
  variant: "Back" | "Next";
  screenIndex: number;
  changeScreenIndex: (destScreenIndex: number) => boolean;
}

export default function Navigation({ screenIndex, variant, changeScreenIndex }: NavigationProps) {
  const [button, animateButton] = useAnimate();
  const svg = variant === "Back" ? backSvg : nextSvg;
  const direction = variant === "Back" ? -1 : 1;

  async function animate() {
    await animateButton(
      button.current,
      { x: A_MAIN.navigation.distance * direction },
      A_MAIN.navigation.transition
    );
    await animateButton(
      button.current,
      { x: -A_MAIN.navigation.distance * direction },
      { duration: 0.0001 }
    );
    animateButton(button.current, { x: 0 }, A_MAIN.navigation.transition);
  }

  async function onClick() {
    const isSuccessful = changeScreenIndex(screenIndex + direction);
    if (isSuccessful) {
      animate();
    }
  }

  return (
    <div className="nav" onClick={onClick}>
      <div className="nav__anim-container">
        <motion.img
          ref={button}
          className="nav__icon"
          src={svg}
          {...A_MAIN.opacityInitial}
        />
      </div>
    </div>
  );
}
