
  export const ICON_NAMES = [
  "chewron-down",
  "chewron-left",
  "chewron-right",
  "chewron-up",
  "external-link",
  "github",
  "linkedin",
  "mail",
  "phone",
  "send"
] as const;
  export type IconName = (typeof ICON_NAMES)[number];
