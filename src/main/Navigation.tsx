import { ReactNode } from "react";
import { motion, useAnimate } from "motion/react";

interface NavigationProps {
  path: ReactNode;
  onClick: () => void;
}

export default function Navigation({ path, onClick }: NavigationProps) {
  const [button, animateButton] = useAnimate();

  async function click() {
    onClick();
    await animateButton(button.current, { scale: 1.15 }, { duration: 0.15, ease: "easeOut" });
    animateButton(button.current, { scale: 1 }, { duration: 0.3, ease: "easeIn" });
  }

  return (
    <div
      className="main-navigate center"
      onClick={click}
    >
      <motion.svg
        ref={button}
        viewBox="0 0 32 32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {path}
      </motion.svg>
    </div>
  );
}
