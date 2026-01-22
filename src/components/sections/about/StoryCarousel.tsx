"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Rocket,
  Camera,
  Target,
  Users,
  Lightbulb,
  Heart,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface JourneyItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

import { JourneySkeleton } from "@/components/LoadingSkelton/about/JourneySkeleton";

interface MissionData {
  id: number;
  title: string;
  mission_text: string;
  icon: string | null;
}

interface TextData {
  id: number;
  heading: string;
  content: string;
}

interface JourneyValuesSectionProps {
  missions?: MissionData[];
  text?: TextData | null;
  isLoading?: boolean;
}

// Internal component to handle scroll hooks when data is loaded
function JourneyValuesContent({ missions = [], text }: { missions?: MissionData[]; text?: TextData | null }) {
  const [isInView, setIsInView] = useState(false);
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
  } = useHorizontalScroll(420, 32);

  // Map dynamic missions to JourneyItems or use default if empty/loading
  const getIcon = (index: number) => {
    const icons = [
      <Rocket key="rocket" className="w-8 h-8" />,
      <Target key="target" className="w-8 h-8" />,
      <Lightbulb key="lightbulb" className="w-8 h-8" />,
      <Users key="users" className="w-8 h-8" />,
      <Heart key="heart" className="w-8 h-8" />,
      <Award key="award" className="w-8 h-8" />,
      <TrendingUp key="trending" className="w-8 h-8" />,
      <Camera key="camera" className="w-8 h-8" />,
    ];
    return icons[index % icons.length];
  };

  const journeyItems: JourneyItem[] = missions.length > 0 
    ? missions.map((m, index) => ({
        id: m.id.toString(),
        number: (index + 1).toString().padStart(2, '0'),
        icon: getIcon(index),
        title: m.title,
        description: m.mission_text
      }))
    : [];

  const heading = text?.heading || "Our Journey & Values";
  const content = text?.content || "Discover the story behind DigiNext and what drives us to deliver exceptional IT solutions and creative services.";

  // Intersection Observer to detect when section is in view (only once)
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  // Update scroll state on mount and resize
  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black text-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-12 lg:mb-16">
          <div className="flex items-start">
            <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 lg:mb-6 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {heading}
          </h2>
          
          {/* Description with Navigation Buttons */}
          <div className="flex items-start justify-between gap-8">
            <p 
              className={`text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-3xl transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {content}
            </p>

            {/* Navigation Buttons aligned with description */}
            <div className="hidden lg:flex gap-3 flex-shrink-0">
              <button
                onClick={scrollToPrev}
                disabled={!canScrollLeft}
                className={`group border rounded-full p-3 transition-all duration-300 ${
                  canScrollLeft
                    ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-orange-500"
                    : "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft 
                  className={`w-5 h-5 transition-colors ${
                    canScrollLeft
                      ? "text-gray-400 group-hover:text-orange-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
              <button
                onClick={scrollToNext}
                disabled={!canScrollRight}
                className={`group border rounded-full p-3 transition-all duration-300 ${
                  canScrollRight
                    ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-orange-500"
                    : "bg-white/5 border-white/10 opacity-50 cursor-not-allowed"
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight 
                  className={`w-5 h-5 transition-colors ${
                    canScrollRight
                      ? "text-gray-400 group-hover:text-orange-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>
          </div>
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
            className="scroll-container flex gap-6 lg:gap-8"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={(e) => e.stopPropagation()}
            onScroll={updateScrollState}
          >
            {/* Cards */}
            {journeyItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4 text-orange-500 group-hover:text-orange-400 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl lg:text-2xl font-light mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 h-[2px] w-16 bg-white/20 group-hover:bg-orange-500 group-hover:w-24 transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="relative z-10 text-justify text-sm lg:text-base text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneyValuesSection({ missions = [], text, isLoading = false }: JourneyValuesSectionProps) {
  if (isLoading) {
    return <JourneySkeleton />;
  }
  return <JourneyValuesContent missions={missions} text={text} />;
}