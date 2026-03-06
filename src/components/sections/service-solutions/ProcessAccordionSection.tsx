"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

// Import modular constants
import { fadeInUpVariants } from "@/constants/animationVariants";

import { FONT_WEIGHT } from "@/constants/typographyConstants";

import {
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  PRIMARY_ORANGE_TEXT,
  WHITE_TEXT,
} from "@/constants/layoutConstants";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessAccordionSectionProps {
  title?: string;
  steps?: ProcessStep[];
  description?: string;
}

const ProcessAccordionSection: React.FC<ProcessAccordionSectionProps> = ({
  title = "How We Work",
  steps = [
    {
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business, goals, target audience, and challenges. Through in-depth consultations, we gather all the insights needed to build a solution that truly fits your needs.",
    },
    {
      title: "Strategy & Planning",
      description:
        "Our experts develop a clear, data-driven roadmap tailored to your objectives. We define the scope, timelines, and key milestones to ensure every step moves your project forward with purpose.",
    },
    {
      title: "Design & Development",
      description:
        "Our creative and technical teams collaborate to bring your vision to life. From compelling designs to robust development, we focus on quality, performance, and a seamless user experience at every stage.",
    },
    {
      title: "Review & Refinement",
      description:
        "Before delivery, we rigorously test and review every detail. Your feedback shapes the final result — we refine and optimize until the solution meets and exceeds your expectations.",
    },
    {
      title: "Launch & Delivery",
      description:
        "We deliver your project on time and with precision. Our team ensures a smooth launch, handling every technical detail so your solution goes live without disruption.",
    },
    {
      title: "Support & Growth",
      description:
        "Our relationship does not end at delivery. We provide ongoing support, monitoring, and optimization to ensure your solution continues to perform, evolve, and drive measurable results over time.",
    },
  ],
  description = "A transparent, results-driven approach that turns your vision into reality — from the first conversation to long-term success.",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollToNext,
    scrollToPrev,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    updateScrollState,
  } = useHorizontalScroll(320, 24);

  // Intersection Observer for visibility animations (only once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Update scroll state on mount and resize
  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  return (
    <section
      id="process-section"
      ref={sectionRef}
      className={`${SECTION_PY} bg-white`}
    >
      {/* Header */}
      <div className={`${CONTENT_WRAPPER_CLASSES} mb-8 sm:mb-12`}>
        <div className="flex items-center justify-between">
          <motion.h2
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className={`text-2xl sm:text-3xl md:text-4xl ml-4 text-black ${FONT_WEIGHT.semibold}`}
          >
            {title}
          </motion.h2>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollToPrev}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border-2 transition-all duration-200 ${
                canScrollLeft
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToNext}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border-2 transition-all duration-200 ${
                canScrollRight
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        {description && (
          <motion.p
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-500 mt-2 max-w-4xl ml-4"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <style jsx>{`
          .scroll-container {
            cursor: grab;
            user-select: none;
            overflow-x: auto;
            overflow-y: visible;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 20px;
            padding-top: 10px;
            touch-action: pan-x;
          }

          .scroll-container::-webkit-scrollbar {
            display: none;
          }

          .scroll-container:active {
            cursor: grabbing;
          }

          .scroll-content {
            max-width: 1750px;
            margin: 0 auto;
            padding-left: 24px;
            padding-right: 24px;
          }

          @media (min-width: 640px) {
            .scroll-content {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 1024px) {
            .scroll-content {
              padding-left: 48px;
              padding-right: 48px;
            }
          }

          @media (min-width: 1280px) {
            .scroll-content {
              padding-left: 64px;
              padding-right: 64px;
            }
          }
        `}</style>

        <div
          ref={scrollContainerRef}
          className="scroll-container"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={(e) => e.stopPropagation()}
          onScroll={updateScrollState}
        >
          <div className="scroll-content flex gap-5 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={`step-${index}`}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl shadow-none 
                  hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                  transition-[background,border,color,box-shadow] duration-500 ease-out group
                  focus:outline-none focus:ring-2"
                tabIndex={0}
              >
                {/* Step Number */}
                <div
                  className={`${PRIMARY_ORANGE_TEXT} text-sm ${FONT_WEIGHT.semibold} mb-3 group-hover:text-orange-400 transition-colors duration-500`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  className={`text-md sm:text-md ${FONT_WEIGHT.semibold} mb-3 text-black group-hover:${WHITE_TEXT} transition-colors duration-500`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-justify text-xs sm:text-xs md:text-sm lg:text-sm group-hover:text-gray-200 transition-colors duration-500 mb-4 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordionSection;
