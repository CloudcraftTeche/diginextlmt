"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

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
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = [
    {
      title: "Discover",
      content:
        "Discover the true potential of your business by transforming complicated IT into a simple, clear strategy for business optimization.",
      image: ImageConstants.HOME_DISCOVERT_1,
    },
    {
      title: "Connect",
      content:
        "Connect with trusted, proactive, 24/7 IT support that ensures company continuity and manages your systems with ease.",
      image: ImageConstants.HOME_CONNECT_1,
    },
    {
      title: "Grow",
      content:
        "Grow your business confidently on a secure infrastructure that is optimized while we take care of all technical management and strategic growth.",
      image: ImageConstants.HOME_GROWTH_1,
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
      {/* Full-width black background */}
      <div className="w-full bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        {/* Constrained content wrapper - matching TrustSection structure */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px]">
            {/* Left Side - Dynamic Image */}
            <div
              className={`flex justify-center lg:justify-start items-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: "200ms",
              }}
            >
              <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-full blur-xl animate-pulse" />
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: `translate(${mousePosition.x * 0.5}px, ${
                      mousePosition.y * 0.5
                    }px)`,
                  }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        currentSlide === index
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-90 z-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={`${slide.title} illustration`}
                        fill
                        className={`object-contain ${
                          currentSlide === index ? "animate-slow-bounce" : ""
                        }`}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Title Navigation */}
              <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
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
              <div className="relative min-h-[100px] xs:min-h-[100px] sm:min-h-[100px] mb-4 xs:mb-5 sm:mb-6">
                <p
                  className={`text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-base leading-relaxed font-normal transition-all duration-300 ease-out ${
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
              <div className="flex flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
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
        </div>
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
