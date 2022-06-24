import type { VechaiToast, VechaiSpecifiedTheme } from "~/types";

/**
 * Config Style
 * Used for themes and components
 */

export type ConfigStyle = {
  theme: VechaiSpecifiedTheme;
  toast: VechaiToast;
  notification: VechaiToast;
  navigationBar: "simple" | "complex";
  footer: "simple" | "complex";
};

export const configStyle: ConfigStyle = {
  theme: {
    colorScheme: "day",
    density: "comfortable",
    radius: "0.375rem",
    cursorPointer: true,
  },
  toast: {
    position: "bottom-right",
  },
  notification: {
    position: "bottom-right",
  },
  navigationBar: "complex",
  footer: "complex",
};
