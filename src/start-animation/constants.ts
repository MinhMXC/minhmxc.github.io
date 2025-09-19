import { Easing } from "motion";

export const SLIDE_EASE = [0.75, 0, 0.30, 0.70] as Easing;

export const SLIDE_DURATION = 3;
export const X_OFFSET_MULT = -0.10;

export const MIDDLE_LATENCY_OFFSET = 0.25;
export const MIDDLE_DURATION = 3 - MIDDLE_LATENCY_OFFSET;

export const LAST_LATENCY_OFFSET = 0.5;
export const LAST_COLUMN_DURATION = 3 - LAST_LATENCY_OFFSET;

export const UP_INITIAL_Y_MULT = 1;
export const UP_FINAL_Y_MULT = 0;

export const DOWN_INITIAL_Y_MULT = -1.36;
export const DOWN_FINAL_Y_MULT = 0;

export const ZOOM_DELAY = 2.5;
export const ZOOM_DURATION = 1;
