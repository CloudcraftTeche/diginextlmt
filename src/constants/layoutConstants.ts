// /constants/layoutConstants.ts

/**
 * Standard padding constants for consistent section spacing across the application.
 */

// Standard responsive horizontal padding for sections
export const SECTION_PX = "px-3 xs:px-4 sm:px-6 lg:px-8";

// Standard responsive vertical padding for sections
export const SECTION_PY = "py-4 xs:py-6 sm:py-8 lg:py-10";

/**
 * Classes for the inner content container (Max-width and inner padding/margin).
 */
export const CONTENT_WRAPPER_CLASSES = "max-w-[1750px] mx-auto px-4 py-4 sm:py-0 sm:px-6 lg:px-8 xl:px-12";


// --- COLOR & STYLE CONSTANTS ---

export const HERO_BG_STYLE = "bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl";
export const PRIMARY_ORANGE_TEXT = "text-orange-500";
export const PRIMARY_GRADIENT = "bg-gradient-to-r from-orange-500 to-orange-600";
export const PRIMARY_RING_FOCUS = "focus:ring-4 focus:ring-orange-300";
export const PRIMARY_SHADOW_HOVER = "hover:shadow-xl hover:shadow-orange-500/25";
export const SECONDARY_BUTTON_BG = "bg-white/90 backdrop-blur-sm";
export const SECONDARY_BUTTON_TEXT = "text-black";
export const SECONDARY_RING_FOCUS = "focus:ring-4 focus:ring-white/50";
export const SECONDARY_SHADOW_HOVER = "hover:shadow-xl hover:shadow-white/10";
export const WHITE_TEXT = "text-white";
export const GRAY_TEXT_LIGHT = "text-gray-300";
export const GRAY_TEXT_DARK = "text-gray-600";


// --- GENERAL SIZING & SPACING CONSTANTS (NEW) ---

// Common Gaps (Used in grid containers and flex rows)
export const COMMON_GAP_MD = "gap-4 xs:gap-5 sm:gap-6 md:gap-6 lg:gap-8";
export const COMMON_GAP_SM = "gap-2 xs:gap-3 sm:gap-4";
export const COMMON_GAP_XLG = "gap-8 lg:gap-16"; // Used in the main header grid

// Common Margin Bottom (Used for sections/divs)
export const COMMON_MB_SM = "mb-4 sm:mb-5";
export const COMMON_MB_MD = "mb-8 sm:mb-10 lg:mb-16";

// Card Padding (Used inside CaseStudyCard)
export const CARD_PADDING = "p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8";

// Image Heights (Used in CaseStudyCard image container)
export const CARD_IMAGE_HEIGHT = "h-32 xs:h-36 sm:h-48 md:h-56 lg:h-64";

// Divider Style (Used in the header)
export const DIVIDER_STYLE = "bg-gray-300 w-px h-16 flex-shrink-0";