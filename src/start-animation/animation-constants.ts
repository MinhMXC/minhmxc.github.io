import { Easing } from "motion";

export const START_EASE = [0.75, 0, 0.15, 1] as Easing;

export const SLIDE_ANIMATION_DURATION = 3;
export const X_OFFSET_MULTIPLIER = -0.10;

export const MIDDLE_COLUMN_LATENCY_OFFSET = 0.25;
export const MIDDLE_COLUMN_DURATION = 3 - MIDDLE_COLUMN_LATENCY_OFFSET;

export const LAST_COLUMN_LATENCY_OFFSET = 0.5;
export const LAST_COLUMN_DURATION = 3 - LAST_COLUMN_LATENCY_OFFSET;

export const UP_INITIAL_Y_OFFSET_MULTIPLIER = 1;
export const UP_FINAL_Y_OFFSET_MULTIPLIER = 0;

export const DOWN_INITIAL_Y_OFFSET_MULTIPLIER = -1.36;
export const DOWN_FINAL_Y_OFFSET_MULTIPLIER = 0;

export const ZOOM_DELAY = 2.5;
export const ZOOM_DURATION = 1;
