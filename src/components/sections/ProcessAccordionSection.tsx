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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInitializedRef = useRef(false);

  // Duplicate steps for infinite scroll (3 copies)
  const infiniteSteps = [...steps, ...steps, ...steps];

  // Calculate proper scroll offset based on actual padding
  const getInitialScrollOffset = () => {
    if (!scrollContainerRef.current) return 0;

    // Get the computed padding-left value
    const computedStyle = window.getComputedStyle(scrollContainerRef.current);
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;

    // Calculate card width + gap
    const cardWidth = window.innerWidth <= 640 ? 280 : 320; // Match your responsive card width
    const gap = window.innerWidth >= 1024 ? 24 : 20; // Match your gap
    const cardWithGap = cardWidth + gap;

    // Calculate offset: (steps.length * cardWithGap) - paddingLeft
    // This ensures the first card of the middle set aligns with the container's padding
    return steps.length * cardWithGap;
  };

  // Initialize scroll position immediately on mount with proper offset
  useEffect(() => {
    const initializeScroll = () => {
      if (scrollContainerRef.current && !isInitializedRef.current) {
        // Small delay to ensure layout is rendered
        setTimeout(() => {
          if (scrollContainerRef.current) {
            const offset = getInitialScrollOffset();
            scrollContainerRef.current.scrollLeft = offset;
            isInitializedRef.current = true;
          }
        }, 50);
      }
    };

    initializeScroll();

    // Re-initialize on window resize to handle orientation changes
    const handleResize = () => {
      if (scrollContainerRef.current && isInitializedRef.current) {
        const offset = getInitialScrollOffset();
        scrollContainerRef.current.scrollLeft = offset;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [steps.length]);

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

  // Intersection Observer for auto-scroll trigger
  useEffect(() => {
    const autoScrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          // Wait 1 second before starting auto-scroll
          setTimeout(() => {
            if (entry.isIntersecting) {
              setIsAutoScrolling(true);
            }
          }, 1000);
        } else {
          setIsInViewport(false);
          setIsAutoScrolling(false);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      autoScrollObserver.observe(sectionRef.current);
    }

    return () => {
      autoScrollObserver.disconnect();
    };
  }, []);

  // Check and reset scroll position for infinite effect
  const checkInfiniteScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = window.innerWidth <= 640 ? 280 : 320;
    const gap = window.innerWidth >= 1024 ? 24 : 20;
    const singleSetWidth = steps.length * (cardWidth + gap);
    const scrollLeft = container.scrollLeft;

    // If scrolled past the end of second set, jump back to start of second set
    if (scrollLeft >= singleSetWidth * 2 - 100) {
      container.scrollLeft = singleSetWidth;
    }
    // If scrolled before the start of second set, jump to end of second set
    else if (scrollLeft <= 100) {
      container.scrollLeft = singleSetWidth;
    }
  };

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

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    if (isAutoScrolling && isInViewport && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 1;
          checkInfiniteScroll();
        }
      }, 20);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, isInViewport]);

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => {
      if (isInViewport) {
        setIsAutoScrolling(true);
      }
    }, 5000);
  };

  const scroll = (direction: "left" | "right") => {
    handleUserInteraction();
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth <= 640 ? 280 : 340;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Check infinite scroll after animation
      setTimeout(() => {
        checkInfiniteScroll();
      }, 500);
    }
  };

  // Monitor scroll for infinite loop
  const handleScroll = () => {
    checkInfiniteScroll();
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
              onClick={() => scroll("left")}
              className="p-2 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
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
        {/* Scroll Container - Starts aligned with header, scrolls full width */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            paddingLeft: "max(1.5rem, calc((100vw - 1750px) / 2 + 1.5rem))",
            paddingRight: "1.5rem",
          }}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onScroll={handleScroll}
        >
          {infiniteSteps.map((step, index) => (
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

        {/* Gradient Overlays */}
        {canScrollLeft && (
          <div className="hidden md:block absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        )}
        {canScrollRight && (
          <div className="hidden md:block absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
        )}
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
