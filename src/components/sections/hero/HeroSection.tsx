"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Import modular constants
import {
  staggerContainerVariants,
  fadeInUpVariants,
  logoInVariants,
  onceInViewPort,
} from "@/constants/animationVariants";

import {
  HERO_HEADING_SIZE,
  HERO_BUTTON_SIZE,
  FONT_WEIGHT,
  LIGHT_HERO_DESCRIPTION_SIZE,
} from "@/constants/typographyConstants";

import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  PRIMARY_ORANGE_TEXT,
} from "@/constants/layoutConstants";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { HeroLoadingSkelton } from "../../LoadingSkelton/home/HeroLoadingSkelton";

interface Slide {
  title: string;
  content: string;
  image: string;
}

interface HeroSectionProps {
  slides?: Slide[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  autoPlayInterval?: number;
  isLoading?: boolean;
}

// --- Framer Motion Variants for this component ---
const slideTitleVariants: Variants = {
  active: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  inactive: {
    opacity: 0.5,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideContentVariants: Variants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const slideImageVariants: Variants = {
  enter: { opacity: 0, scale: 0.95, y: -10 },
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
};
// -------------------------------------------------

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [],
  primaryButtonText = "Get Your Quote",
  secondaryButtonText = "Why Digi Next?",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/about",
  autoPlayInterval = 5000,
  isLoading = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slides
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const slideData = slides && slides.length > 0 ? slides[currentSlide] : null;
 
  if (isLoading || !slideData) {
    return <HeroLoadingSkelton />;
  }

  return (
    <section
      id="hero-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      {/* Full-width black background */}
      <div className="w-full bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        {/* Constrained content wrapper */}
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12 items-start lg:items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] relative z-10"
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
          >
            {/* Left Side - Dynamic Image (5/12 width) */}
            <motion.div
              className="w-full lg:w-5/12 flex justify-center lg:justify-start items-center order-1 lg:order-1"
              variants={logoInVariants}
            >
              <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square">
                {/* AnimatePresence ensures old slide animates out as new slide animates in */}
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideImageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={getImageWithPlaceholder(slideData.image)}
                      alt={`${slideData.title} illustration`}
                      fill
                      className="object-contain"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Content (7/12 width) */}
            <div className="w-full lg:w-7/12 order-2 lg:order-2">
              {/* Title Navigation */}
              <motion.div
                className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6"
                variants={fadeInUpVariants}
              >
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    variants={slideTitleVariants}
                    animate={currentSlide === index ? "active" : "inactive"}
                    className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.light} transition-all duration-500 ease-out hover:scale-105 ${
                      currentSlide === index
                        ? PRIMARY_ORANGE_TEXT
                        : "text-white/50 hover:text-white/70"
                    }`}
                  >
                    {slide.title}
                    {index < slides.length - 1 && (
                      <span className="text-white/30 mx-1">.</span>
                    )}
                  </motion.button>
                ))}
              </motion.div>

              {/* Animated Content */}
              <motion.div
                className="relative min-h-[100px] xs:min-h-[100px] sm:min-h-[100px] mb-4 xs:mb-5 sm:mb-6"
                variants={fadeInUpVariants}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlide}
                    variants={slideContentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`${LIGHT_HERO_DESCRIPTION_SIZE} ${FONT_WEIGHT.light} leading-relaxed text-justify text-gray-300 w-full absolute`}
                  >
                    {slideData.content}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Progress Dots */}
              <motion.div
                className="flex justify-center lg:justify-start gap-1 xs:gap-2 sm:gap-2 mb-4 xs:mb-5 sm:mb-6"
                variants={fadeInUpVariants}
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-1 xs:h-2 sm:h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-6 xs:w-8 sm:w-8 bg-orange-500"
                        : "w-1 xs:w-2 sm:w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>

              {/* Animated Buttons */}
              <motion.div
                className="flex flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start"
                variants={fadeInUpVariants}
              >
                <Link
                  href={primaryButtonLink}
                  className={`group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white ${FONT_WEIGHT.normal} rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 ${HERO_BUTTON_SIZE} overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {primaryButtonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                </Link>

                <Link
                  href={secondaryButtonLink}
                  className={`group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm text-black ${FONT_WEIGHT.normal} rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 ${HERO_BUTTON_SIZE} overflow-hidden relative hover:bg-white hover:shadow-xl hover:shadow-white/10`}
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

export default HeroSection;
