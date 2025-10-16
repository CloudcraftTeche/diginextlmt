"use client";
import { useState, useEffect, useRef } from "react";
import { Send, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#process-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;

          if (scrollLeft >= scrollWidth - clientWidth - 10) {
            // Reset to start
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            // Scroll by one card width
            scrollContainerRef.current.scrollTo({
              left: scrollLeft + 340,
              behavior: "smooth",
            });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  const scroll = (direction: "left" | "right") => {
    handleUserInteraction();
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="process-section"
      className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation Buttons */}
        <div className="mb-8 sm:mb-12">
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

            {/* Navigation Buttons - Right side */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
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
                onClick={() => scroll("right")}
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

          {/* Description under title */}
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
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl shadow-none 
                  hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                  transition-[background,border,color,box-shadow] duration-500 ease-out group
                  focus:outline-none focus:ring-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                tabIndex={0}
              >
                {/* Step Number */}
                <div className="text-orange-600 text-sm font-bold mb-3 group-hover:text-orange-400 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-md sm:text-md font-semibold mb-3 text-black group-hover:text-white transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-xs md:text-sm lg:text-sm group-hover:text-gray-200 transition-colors duration-500 mb-4 leading-relaxed flex-grow">
                  {step.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center font-semibold text-sm text-black group-hover:text-orange-400 transition-colors duration-300 group/link"
                >
                  <span>Connect to Us</span>
                  <Send className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover:rotate-45 transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          {canScrollLeft && (
            <div className="hidden md:block absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Mobile Navigation Hint */}
        <p className="text-center text-sm text-gray-500 mt-4 md:hidden">
          Swipe to see more
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessAccordionSection;
