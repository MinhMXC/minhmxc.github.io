import { useState } from "react";
import Background from "./Background";
import { SCREENS } from "./main-constants";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";

export default function Main() {
  const [screenIndex, setScreenIndex] = useState(0);

  function changeScreen(toIndex: number) {
    if (!(0 <= toIndex && toIndex < SCREENS.length)) {
      return;
    }
    setScreenIndex(toIndex);
  }


  return (
    <div>
      <div className="main-cont">
        <Navigation
          path={<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />}
          onClick={() => changeScreen(screenIndex - 1)}
        />

        <div className="main-content-cont">
          <Header screenIndex={screenIndex} />
          <div className="main-content">
            <About />
          </div>
        </div>

        <Navigation
          path={<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />}
          onClick={() => changeScreen(screenIndex + 1)}
        />
      </div>

      <Background screenIndex={screenIndex} />
    </div >
  );
}

