import { motion, useAnimate } from "motion/react";

interface NavigationProps {
  iconSrc: string;
  direction: "Back" | "Next";
  onClick: () => void;
}

export default function Navigation({ iconSrc, direction, onClick }: NavigationProps) {
  const [button, animateButton] = useAnimate();
  const offset = direction === "Back" ? 1 : direction === "Next" ? -1 : 0;

  async function click() {
    onClick();
    await animateButton(button.current, { x: -24 * offset }, { duration: 0.25, ease: "easeOut" });
    await animateButton(button.current, { x: 24 * offset }, { duration: 0.001, ease: "easeOut" });
    animateButton(button.current, { x: 0 }, { duration: 0.25, ease: "easeIn" });
  }

  return (
    <div
      className="main-navigate center"
      onClick={click}
    >
      <div style={{ overflow: "hidden" }}>
        <motion.img
          ref={button}
          className="unselectable"
          src={iconSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
