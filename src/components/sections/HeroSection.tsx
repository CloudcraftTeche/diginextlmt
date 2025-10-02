"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

interface Slide {
  title: string;
  content: string;
}

interface HeroSectionProps {
  slides?: Slide[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  autoPlayInterval?: number;
  storyText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [
    {
      title: "Discover",
      content:
        "Discover the true potential of your business by transforming complicated IT into a simple, clear strategy for business optimization.",
    },
    {
      title: "Connect",
      content:
        "Connect with trusted, proactive, 24/7 IT support that ensures company continuity and manages your systems with ease.",
    },
    {
      title: "Grow",
      content:
        "Grow your business confidently on a secure infrastructure that is optimized while we take care of all technical management and strategic growth.",
    },
  ],
  primaryButtonText = "Get Your Quote",
  secondaryButtonText = "Why Digi Next?",
  primaryButtonLink = "/quote",
  secondaryButtonLink = "/about",
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector("#hero-section");
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  // Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse movement tracking for parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section
      id="hero-section"
      className="px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-10 bg-white overflow-hidden"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      <div className="w-full bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-20 xl:gap-24 items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] relative z-10 mb-6 xs:mb-8 sm:mb-8">
          {/* Left Side - Circular Logo */}
          <div
            className={`flex justify-center lg:justify-end order-1 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{
              transitionDelay: "200ms",
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px) scale(${isVisible ? 1 : 0.95})`,
            }}
          >
            <div className="p-3 xs:p-4 sm:p-6 lg:p-10 relative max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-full blur-xl animate-pulse" />
              <Image
                src={ImageConstants.LOGO_SHAPE}
                alt="DigiNext Logo Shape"
                width={400}
                height={400}
                className="w-auto h-auto max-w-full relative z-10 hover:scale-110 transition-transform duration-500 ease-out animate-slow-bounce"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-2 px-2 xs:px-3 sm:px-0">
            {/* Title Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`text-base xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl font-light transition-all duration-500 ease-out hover:scale-105 ${
                    currentSlide === index
                      ? "text-orange-500"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  {slide.title}
                  {index < slides.length - 1 && (
                    <span className="text-white/30 mx-1">.</span>
                  )}
                </button>
              ))}
            </div>

            {/* Animated Content */}
            <div className="relative min-h-[100px] xs:min-h-[100px] sm:min-h-[100px]">
              <p
                className={`text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-base mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed font-normal max-w-full xs:max-w-md sm:max-w-lg mx-auto lg:mx-0 transition-all duration-300 ease-out ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slides[currentSlide].content}
              </p>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center lg:justify-start gap-1 xs:gap-2 sm:gap-2 mb-4 xs:mb-5 sm:mb-6">
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
            </div>

            {/* Animated Buttons */}
            <div
              className={`flex flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <Link
                href={primaryButtonLink}
                className="group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-normal rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-xs xs:text-sm sm:text-base overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {primaryButtonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </Link>

              <Link
                href={secondaryButtonLink}
                className="group inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm text-black font-normal rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 text-xs xs:text-sm sm:text-base overflow-hidden relative hover:bg-white hover:shadow-xl hover:shadow-white/10"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {secondaryButtonText}
                </span>
                <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Story Text - Full Width Bottom Section */}
        {/* <div className="relative z-10 border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-gray-400 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed font-normal text-center">
            {storyText}
          </p>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes slow-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slow-bounce {
          animation: slow-bounce 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
