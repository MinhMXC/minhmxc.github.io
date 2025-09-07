import React, { useState } from "react";
import { motion } from "motion/react";
import StartAnimation from "./start-animation/StartAnimation";
import Main from "./main/Main";

export default function App() {
  const [programState, setProgramState] = useState(0);

  return (
    <>
      {
        programState === 0
          ? <StartAnimation callback={() => setProgramState(1)} />
          : <Main />
      }
    </>
  );
}
