
  export const ICON_NAMES = [
  "chewron-down",
  "chewron-left",
  "chewron-right",
  "chewron-up",
  "cicrle-check",
  "circle-x",
  "external-link",
  "github",
  "linkedin",
  "loader",
  "mail",
  "phone",
  "send"
] as const;
  export type IconName = (typeof ICON_NAMES)[number];
