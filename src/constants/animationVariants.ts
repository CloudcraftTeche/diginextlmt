import { Variants, Transition } from "framer-motion";

/**
 * Standard transition settings for Framer Motion.
 * Uses a custom cubic-bezier curve for a smooth feel.
 */
export const standardTransition: Transition = {
  duration: 0.7,
  ease: [0.6, -0.05, 0.01, 0.9],
};

/**
 * Variants for a container element to stagger the appearance of its children.
 */
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // Time delay between starting each child's animation
      delayChildren: 0.1, // Initial delay before the first child animation starts
    },
  },
};

/**
 * Variants for a simple Fade-In-Up effect.
 */
export const fadeInUpVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: standardTransition },
};

/**
 * Variants for a Logo/Image Scale-In and Fade-In effect.
 */
export const logoInVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ...standardTransition,
      duration: 1, // Slightly longer duration for the logo for impact
    },
  },
};

/**
 * Viewport configuration to ensure animations run only once when 50% of the element is visible.
 */
export const onceInViewPort = {
  once: true,
  amount: 0.2,
};
