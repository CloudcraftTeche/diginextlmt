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

export function JourneyValuesSection() {
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

  const journeyItems: JourneyItem[] = [
    {
      id: "01",
      number: "01",
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Story",
      description:
        "We at DigiNext believe that technology is more than just a tool; it's the foundation of a successful. What initially began as a small idea has turned into one of Dubai's top IT solution companies.",
    },
    {
      id: "02",
      number: "02",
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "Our mission is to empower businesses through innovative digital solutions that drive growth and transformation. We strive to be the trusted partner in your digital journey.",
    },
    {
      id: "03",
      number: "03",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that keep you ahead of the competition in the ever-evolving digital landscape.",
    },
    {
      id: "04",
      number: "04",
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships by deeply understanding your business needs and delivering tailored solutions that exceed expectations.",
    },
    {
      id: "05",
      number: "05",
      icon: <Heart className="w-8 h-8" />,
      title: "Quality & Excellence",
      description:
        "We are committed to delivering exceptional quality in every project. Our attention to detail and dedication to excellence sets us apart in the industry.",
    },
    {
      id: "06",
      number: "06",
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "With hundreds of successful projects delivered across various industries, we have established ourselves as a reliable technology partner you can trust.",
    },
    {
      id: "07",
      number: "07",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      description:
        "We don't just deliver projects; we deliver results that contribute to your business growth and help you achieve your strategic objectives.",
    },
    {
      id: "08",
      number: "08",
      icon: <Camera className="w-8 h-8" />,
      title: "Creative Solutions",
      description:
        "Our creative team brings fresh perspectives and innovative ideas to every challenge, ensuring your brand stands out in the digital world.",
    },
  ];

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
            Our Journey & Values
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
              Discover the story behind DigiNext and what drives us to deliver
              exceptional IT solutions and creative services.
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