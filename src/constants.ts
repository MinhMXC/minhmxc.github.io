import { Easing } from "motion";

export const MAIN = {
  opacityInitialAnimation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.5,
      easing: "linear" as Easing,
    }
  },
  navigationAnimation: {
    distance: 24,
    transition: {
      duration: 0.25,
      easing: "easeOut" as Easing,
    }
  },
  mainContentAnimation: {
    transition: {
      duration: 0.25,
      easing: "linear" as Easing,
    }
  },
  titleAnimation: {
    distance: 64,
    transition: {
      duration: 0.25,
      easing: "easeOut" as Easing,
    }
  },
  bgChangeAnimation: {
    options: {
      duration: 250,
      easing: "linear",
      fill: "forwards"
    } as KeyframeAnimationOptions
  }
};
