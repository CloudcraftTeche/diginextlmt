/**
 * Responsive font size, weight, and color classes (Tailwind CSS).
 * The color and weight are now fixed inside these size constants for consistency.
 */

import { GRAY_TEXT_DARK, GRAY_TEXT_LIGHT } from "./layoutConstants";

// --- Color and Weight Defaults ---

// Primary Text Color (used for headings and titles)
export const TEXT_COLOR_PRIMARY = "text-black";
// Secondary Text Color (used for body and description text)
export const TEXT_COLOR_SECONDARY = "text-gray-700";

// Font Weights
export const FONT_WEIGHT = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium", // <-- Used for Titles/Subheadings
  semibold: "font-semibold", // <-- Used for Major Headings
};

// --- Combined Typography Constants (Size + Color + Weight) ---

// Heading size: Scales significantly larger on all screen sizes for prominence.
export const HERO_HEADING_SIZE =
  `${TEXT_COLOR_PRIMARY} ${FONT_WEIGHT.normal} ` +
  "text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl";

// Standard section heading size, used for secondary titles (e.g., Case Studies)
export const SECTION_HEADING_SIZE =
  `${TEXT_COLOR_PRIMARY} ${FONT_WEIGHT.medium} ` +
  "text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl";

// Description size: Resetting base size to normal body text size.
// Includes default justification and secondary color.
export const LIGHT_HERO_DESCRIPTION_SIZE =
  `${GRAY_TEXT_LIGHT} ${FONT_WEIGHT.normal} text-justify ` +
  "text-xs xs:text-sm sm:text-sm lg:text-base xl:text-lg 2xl:text-xl";
export const HERO_DESCRIPTION_SIZE =
  `${GRAY_TEXT_DARK} ${FONT_WEIGHT.normal} text-justify ` +
  "text-xs xs:text-sm sm:text-sm lg:text-base xl:text-lg 2xl:text-xl";

export const DESCRIPTION_SIZE =
  `${GRAY_TEXT_DARK} ${FONT_WEIGHT.normal} text-justify ` +
  "text-xs xs:text-sm sm:text-sm lg:text-base xl:text-md 2xl:text-lg";

export const CENTER_DESCRIPTION_SIZE =
  `${GRAY_TEXT_DARK} ${FONT_WEIGHT.normal} text-center ` +
  "text-xs xs:text-sm sm:text-sm lg:text-base xl:text-lg 2xl:text-xl";

// Title size (used for smaller titles/features)
export const TITLE_SIZE =
  `${TEXT_COLOR_PRIMARY} ${FONT_WEIGHT.medium} ` +
  "text-sm xs:text-base sm:text-lg lg:text-xl";

// Button size: Resetting base size to small, standard button size.
export const HERO_BUTTON_SIZE =
  `${FONT_WEIGHT.medium} ` +
  "text-xs xs:text-sm sm:text-base lg:text-lg";