"use client";
import Link from "next/link";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import { motion } from "framer-motion";

// Import animation configurations
import { 
  staggerContainerVariants, 
  fadeInUpVariants, 
  logoInVariants, 
  onceInViewPort 
} from "@/constants/animationVariants"; 

// Import typography configurations
import {
  HERO_HEADING_SIZE,
  LIGHT_HERO_DESCRIPTION_SIZE,
  HERO_BUTTON_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants"; 

// Import layout and color configurations
import {
  SECTION_PX, 
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  HERO_BG_STYLE, 
  PRIMARY_ORANGE_TEXT, 
  PRIMARY_GRADIENT, 
  PRIMARY_RING_FOCUS, 
  PRIMARY_SHADOW_HOVER, 
  SECONDARY_BUTTON_BG, 
  SECONDARY_BUTTON_TEXT, 
  SECONDARY_RING_FOCUS, 
  SECONDARY_SHADOW_HOVER, 
  WHITE_TEXT, 
  GRAY_TEXT_LIGHT, 
} from "@/constants/layoutConstants"; 

interface ITSolutionsHeroProps {
  title?: {
    part1: string;
    part2: string;
    part3: string;
  };
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const ITSolutionsHero: React.FC<ITSolutionsHeroProps> = ({
  title = {
    part1: "Click",
    part2: "Connect",
    part3: "Convert",
  },
  description = "We help companies to achieve success in the digital world. As your number 1 choice for IT solutions, we do more than just increase traffic, we build deep relationships with your audience with our specialized IT services and solutions. Every click has a purpose, thanks to our data-focused plans and reliable IT support solutions, which will convert your visitors into loyal customers.",
  primaryButtonText = "Know More",
  primaryButtonLink = "/about",
  secondaryButtonText = "Why Digi Next?",
  secondaryButtonLink = "/about",
}) => {

  return (
    <section
      id="hero-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white`} 
      aria-labelledby="hero-heading"
    >
      {/* Full-width black background - using HERO_BG_STYLE */}
      <div className={`w-full ${HERO_BG_STYLE} p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden`}>
        <div className={CONTENT_WRAPPER_CLASSES}> 
          <motion.div
            className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12 items-start lg:items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] relative z-10" 
            variants={staggerContainerVariants} 
            initial="initial"           
            whileInView="animate"       
            viewport={onceInViewPort} 
          >
            {/* Left Side - Circular Logo (Order 1) */}
            <motion.div
              className="w-full lg:w-5/12 flex justify-center lg:justify-start order-1 lg:order-1" 
              variants={logoInVariants} 
            >
              <div className="p-3 xs:p-4 sm:p-6 lg:p-10 relative w-full max-w-[400px]">
                {/* Logo Glow uses fixed colors */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-full blur-xl animate-pulse" />
                <Image
                  src={ImageConstants.LOGO_SHAPE}
                  alt="DigiNext Logo Shape"
                  width={400}
                  height={400}
                  className="w-full h-auto max-w-full relative z-10 animate-slow-bounce" 
                />
              </div>
            </motion.div>

            {/* Right Side - Content (Order 2) */}
            <div className="w-full order-2 lg:order-2"> 
              
              {/* Animated Title */}
              <motion.h1
                id="hero-heading"
                className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.thin} mb-3 xs:mb-4 sm:mb-5 leading-normal sm:leading-tight text-left w-full`} 
              >
                <motion.span
                  className={`${PRIMARY_ORANGE_TEXT} ${FONT_WEIGHT.light} inline`} 
                  variants={fadeInUpVariants} 
                >
                  {title.part1}
                </motion.span>
                <motion.span
                  className={`${WHITE_TEXT} ${FONT_WEIGHT.light} inline`} 
                  variants={fadeInUpVariants} 
                >
                  {" "}
                  . {title.part2}
                </motion.span>
                <motion.span
                  className={`${WHITE_TEXT} ${FONT_WEIGHT.normal} inline`} 
                  variants={fadeInUpVariants} 
                >
                  {" "}
                  . {title.part3}
                </motion.span>
              </motion.h1>

              {/* Animated Description - FONT_WEIGHT.thin changed to FONT_WEIGHT.light */}
              <motion.p
                className={`${GRAY_TEXT_LIGHT} ${LIGHT_HERO_DESCRIPTION_SIZE} ${FONT_WEIGHT.light} mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed w-full`} 
                variants={fadeInUpVariants} 
              >
                {description}
              </motion.p>

              {/* Animated Buttons */}
              <motion.div
                className="flex flex-row flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-start items-start w-full"
                variants={fadeInUpVariants} 
              >
                {/* Primary Button */}
                <Link
                  href={primaryButtonLink}
                  className={`group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 ${PRIMARY_GRADIENT} ${WHITE_TEXT} ${FONT_WEIGHT.normal} rounded-full transition-all duration-300 focus:outline-none ${PRIMARY_RING_FOCUS} ${HERO_BUTTON_SIZE} overflow-hidden relative ${PRIMARY_SHADOW_HOVER}`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {primaryButtonText}
                  </span>
                  {/* Hover effect gradient uses PRIMARY_GRADIENT_HOVER (different from background) */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                </Link>

                {/* Secondary Button */}
                <Link
                  href={secondaryButtonLink}
                  className={`group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 ${SECONDARY_BUTTON_BG} ${SECONDARY_BUTTON_TEXT} ${FONT_WEIGHT.normal} rounded-full transition-all duration-300 focus:outline-none ${SECONDARY_RING_FOCUS} ${HERO_BUTTON_SIZE} overflow-hidden relative hover:bg-white ${SECONDARY_SHADOW_HOVER}`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {secondaryButtonText}
                  </span>
                  <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ITSolutionsHero;