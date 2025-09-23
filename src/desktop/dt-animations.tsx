import { Easing } from "motion";

const START_EASE = [0.65, 0.00, 0.30, 0.70] as Easing;

export const A_START = {
  ease: START_EASE,
  slideDuration: 3,
  xOffsetMult: -0.10,
  // The following two should add up to 3
  middleLatencyOffset: 0.25,
  middleDuration: 2.75,
  // The following two should add up to 3
  lastLatencyOffset: 0.5,
  lastDuration: 2.5,
  upInitialYMult: 1,
  upFinalYMult: 0,
  downInitialYMult: -1.36,
  downFinalYMult: 0,
  zoom: {
    animate: {
      scaleX: 5,
      scaleY: 10 / 3
    },
    transition: {
      duration: 1,
      delay: 2.5,
      ease: START_EASE
    }
  }
};

export const A_MAIN = {
  opacityInitial: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.5,
      easing: "linear" as Easing,
    }
  },
  navigation: {
    distance: 32,
    transition: {
      duration: 0.25,
      easing: "easeOut" as Easing,
    }
  },
  mainContent: {
    transition: {
      duration: 0.25,
      easing: "linear" as Easing,
    }
  },
  header: {
    distance: 112,
    transition: {
      duration: 0.25,
      easing: "easeOut" as Easing,
    }
  },
  bgImage: {
    options: {
      duration: 250,
      easing: "linear",
      fill: "forwards"
    } as KeyframeAnimationOptions
  },
  bgVideo: {
    options: {
      duration: 500,
      fill: "forwards"
    } as KeyframeAnimationOptions
  }
};

export const A_PROJECT = {
  disableClickDuration: 50,
  switchModeOpacity: {
    transition: {
      duration: 0.25,
      easing: "linear" as Easing
    }
  },
  imageSliding: {
    transition: {
      duration: 1200,
      fill: "forwards"
    } as KeyframeAnimationOptions
  }
};
