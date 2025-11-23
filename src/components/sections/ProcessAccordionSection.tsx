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
  const [isInViewport, setIsInViewport] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const autoScrollSpeed = 0.5;

  // Duplicate steps for seamless infinite scroll
  const duplicatedSteps = [...steps, ...steps, ...steps];

  // Intersection Observer for visibility animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer to detect when section is in view for auto-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll functionality with seamless loop
  useEffect(() => {
    const autoScroll = () => {
      if (!scrollContainerRef.current || isPaused || !isInViewport) return;

      const container = scrollContainerRef.current;
      const cardWidth = window.innerWidth <= 640 ? 280 : 320;
      const gap = window.innerWidth >= 1024 ? 24 : 20;
      const singleSetWidth = steps.length * (cardWidth + gap);

      // Reset to middle set when reaching boundaries
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      } else {
        container.scrollLeft += autoScrollSpeed;
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    if (!isPaused && isInViewport) {
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, isInViewport, steps.length]);

  // Initialize scroll position to middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth <= 640 ? 280 : 320;
      const gap = window.innerWidth >= 1024 ? 24 : 20;
      const singleSetWidth = steps.length * (cardWidth + gap);
      scrollContainerRef.current.scrollLeft = singleSetWidth;
    }
  }, [steps.length]);

  // Manual scroll function
  const handleManualScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    setIsPaused(true);

    const scrollAmount = 340;
    const targetScroll =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section
      id="process-section"
      ref={sectionRef}
      className="py-6 sm:py-8 lg:py-10 bg-white"
    >
      {/* Header - Contained with max-width */}
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
              onClick={() => handleManualScroll("left")}
              className="p-2 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-2 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
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

      {/* Horizontal Scrolling Container - Full Width */}
      <div className="relative w-full">
        <style jsx>{`
          .scroll-container {
            cursor: grab;
            user-select: none;
            overflow-x: auto;
            overflow-y: visible;
            scroll-behavior: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 20px;
            padding-top: 10px;
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

          .scroll-container.dragging {
            scroll-behavior: auto;
          }
        `}</style>

        <div
          ref={scrollContainerRef}
          className={`scroll-container flex gap-5 lg:gap-6 ${
            isDragging ? "dragging" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseOut={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedSteps.map((step, index) => (
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
                transitionDelay: `${(index % steps.length) * 100}ms`,
              }}
              tabIndex={0}
            >
              {/* Step Number */}
              <div className="text-orange-600 text-sm font-bold mb-3 group-hover:text-orange-400 transition-colors duration-500">
                {String((index % steps.length) + 1).padStart(2, "0")}
              </div>

              <h3 className="text-md sm:text-md font-semibold mb-3 text-black group-hover:text-white transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-gray-600 text-justify text-xs sm:text-xs md:text-sm lg:text-sm group-hover:text-gray-200 transition-colors duration-500 mb-4 leading-relaxed flex-grow">
                {step.description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center font-semibold text-sm text-black group-hover:text-orange-400 transition-colors duration-300 group/link"
              >
                <span>Connect to Us</span>
                <Send className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover:rotate-45 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordionSection;
