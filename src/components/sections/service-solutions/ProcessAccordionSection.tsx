"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessAccordionSectionProps {
  title: string;
  steps: ProcessStep[];
  description?: string;
}

const ProcessAccordionSection: React.FC<ProcessAccordionSectionProps> = ({
  title,
  steps,
  description,
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
      { threshold: 0.1 }
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
      className="py-6 sm:py-8 lg:py-10 bg-white"
    >
      {/* Header */}
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-8 sm:mb-12">
        <div className="flex items-center justify-between">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl text-black font-semibold transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>

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
          <p
            className={`text-sm sm:text-base text-gray-500 mt-2 max-w-4xl transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative w-full">
        <style jsx>{`
          .scroll-container {
            cursor: grab;
            user-select: none;
            overflow-x: auto;
            overflow-y: visible;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 20px;
            padding-top: 10px;
            touch-action: pan-x;
          }

          @media (min-width: 640px) {
            .scroll-container {
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (min-width: 1024px) {
            .scroll-container {
              padding-left: 48px;
              padding-right: 48px;
            }
          }

          @media (min-width: 1280px) {
            .scroll-container {
              padding-left: 64px;
              padding-right: 64px;
            }
          }

          .scroll-container::-webkit-scrollbar {
            display: none;
          }

          .scroll-container:active {
            cursor: grabbing;
          }
        `}</style>

        <div
          ref={scrollContainerRef}
          className="scroll-container flex gap-5 lg:gap-6"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={(e) => e.stopPropagation()}
          onScroll={updateScrollState}
        >
          {steps.map((step, index) => (
            <div
              key={`step-${index}`}
              className={`flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl shadow-none 
                hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                transition-[background,border,color,box-shadow] duration-500 ease-out group
                focus:outline-none focus:ring-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              tabIndex={0}
            >
              {/* Step Number */}
              <div className="text-orange-600 text-sm font-bold mb-3 group-hover:text-orange-400 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-md sm:text-md font-semibold mb-3 text-black group-hover:text-white transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-gray-600 text-justify text-xs sm:text-xs md:text-sm lg:text-sm group-hover:text-gray-200 transition-colors duration-500 mb-4 leading-relaxed flex-grow">
                {step.description}
              </p>
              {/* <a
                href="/contact"
                className="inline-flex items-center font-semibold text-sm text-black group-hover:text-orange-400 transition-colors duration-300 group/link"
              >
                <span>Connect to Us</span>
                <Send className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover:rotate-45 transition-all duration-300" />
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordionSection;