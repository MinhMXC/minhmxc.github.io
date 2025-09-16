import { ReactNode } from "react";

export interface MpProject {
  title: string;
  narrowImg: string;
  wideImg: string;
  desc: ReactNode;
}

export interface MpScreen {
  title: string;
  backgroundImg: string;
  foreground: ReactNode;
}
