import { ReactNode } from "react";

export interface MpBadge {
  name: string;
  color: string;
}

export interface MpExperience {
  company: string;
  position: string;
  duration: string;
  badges: MpBadge[];
  desc: string[];
}

export interface MpProject {
  title: string;
  narrowImg: string;
  wideImg: string;
  video?: string;
  badges: MpBadge[];
  desc: ReactNode;
}

export interface MpScreen {
  title: string;
  backgroundImg: string;
  content: ReactNode;
}
