import { useEffect, useState } from "react";
import StartAnimation from "./start-animation/StartAnimation";
import Main from "./main/Main";
import Loading from "./loading/Loading";

import badAppleNarrow from "./assets/narrow/bad-apple.jpg";
import calculatorNarrow from "./assets/narrow/calculator.jpg";
import chikaNarrow from "./assets/narrow/chika.jpg";
import nesNarrow from "./assets/narrow/nes.jpg";
import appNarrow from "./assets/narrow/app.jpg";
import forumNarrow from "./assets/narrow/forum.jpg";
import chip8Narrow from "./assets/narrow/chip8.jpg";

import meWide from "./assets/wide/me.jpg";
import amazonWide from "./assets/wide/amazon.jpg";
import freshCarsWide from "./assets/wide/fresh-cars.jpg";
import calculatorWide from "./assets/wide/calculator.jpg";
import badAppleWide from "./assets/wide/bad-apple.jpg";
import appWide from "./assets/wide/app.jpg";
import zeldaWide from "./assets/wide/zelda.jpg";
import gdscWide from "./assets/wide/gdsc.jpg";
import nesWide from "./assets/wide/nes.jpg";
import nusWide from "./assets/wide/nus.jpg";
import forumWide from "./assets/wide/forum.jpg";
import chip8Wide from "./assets/wide/chip8.jpg";
import kungfuWide from "./assets/wide/kungfu.jpg";
import chikaWide from "./assets/wide/chika.jpg";

import backSvg from "./assets/back.svg";
import nextSvg from "./assets/next.svg";


export default function App() {
  const images = [
    badAppleNarrow, calculatorNarrow, chikaNarrow, nesNarrow, appNarrow, forumNarrow, chip8Narrow,
    meWide, amazonWide, freshCarsWide, calculatorWide, badAppleWide, appWide, zeldaWide, gdscWide,
    nesWide, nusWide, forumWide, chip8Wide, kungfuWide, chikaWide, backSvg, nextSvg
  ];

  const [loadPercentage, setLoadPercentage] = useState(0);
  const [programState, setProgramState] = useState(0);

  useEffect(() => {
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setLoadPercentage(prev => prev + 100 / images.length);
          resolve(image);
        };
        img.onerror = (err) => reject(err);
      });
    };

    Promise
      .all(images.map(image => loadImage(image)))
      .then(() => setProgramState(1))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {
        programState === 0
          ? <Loading percentage={loadPercentage} />
          : programState === 1
            ? <StartAnimation callback={() => setProgramState(2)} />
            : programState === 2
              ? <Main />
              : undefined
      }
    </>
  );
}
