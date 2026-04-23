
  export const ICON_NAMES = [
  "chewron-down",
  "chewron-left",
  "chewron-right",
  "chewron-up"
] as const;
  export type IconName = (typeof ICON_NAMES)[number];
