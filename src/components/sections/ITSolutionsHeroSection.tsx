"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

interface ITSolutionsHeroProps {
  title?: {
    part1: string;
    part2: string;
    part3: string;
  };
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const ITSolutionsHero: React.FC<ITSolutionsHeroProps> = ({
  title = {
    part1: "Click",
    part2: "Connect",
    part3: "Convert",
  },
  description = "We help companies to achieve success in the digital world. As your number 1 choice for IT solutions, we do more than just increase traffic, we build deep relationships with your audience with our specialized IT services and solutions. Every click has a purpose, thanks to our data-focused plans and reliable IT support solutions, which will convert your visitors into loyal customers.",
  primaryButtonText = "Know More",
  secondaryButtonText = "Our Services",
  primaryButtonLink = "/about",
  secondaryButtonLink = "/services",
}) => {
  const [isVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement tracking for parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <section
      id="hero-section"
      className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-white"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full bg-black via-black to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[420px] relative z-10">
          {/* Left Side - Circular Logo */}
          <div
            className={`flex justify-center lg:justify-end order-1 lg:order-1 transition-all duration-1000 ease-out ${"opacity-100 translate-y-0 scale-100"}`}
            style={{
              transitionDelay: "200ms",
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px) scale(${1})`,
            }}
          >
            <div className="p-4 sm:p-6 lg:p-10 relative">
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
          <div className="text-center lg:text-left order-2 lg:order-2 px-2 sm:px-0">
            {/* Animated Title */}
            <h1
              id="hero-heading"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin mb-3 sm:mb-4 md:mb-5 leading-tight"
            >
              <span
                className={`text-orange-500 font-light block sm:inline transition-all duration-700 ease-out ${"opacity-100 translate-y-0"}`}
                style={{ transitionDelay: "400ms" }}
              >
                {title.part1}
              </span>
              <span
                className={`text-white font-light block sm:inline transition-all duration-700 ease-out ${"opacity-100 translate-y-0"}`}
                style={{ transitionDelay: "600ms" }}
              >
                {" "}
                . {title.part2}
              </span>
              <span
                className={`text-white font-normal block sm:inline transition-all duration-700 ease-out ${"opacity-100 translate-y-0"}`}
                style={{ transitionDelay: "800ms" }}
              >
                {" "}
                . {title.part3}
              </span>
            </h1>

            {/* Animated Description */}
            <p
              className={`text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base mb-6 sm:mb-7 md:mb-8 leading-relaxed font-normal max-w-full sm:max-w-md md:max-w-lg mx-auto lg:mx-0 transition-all duration-700 ease-out ${"opacity-100 translate-y-0"}`}
              style={{ transitionDelay: "1000ms" }}
            >
              {description}
            </p>

            {/* Animated Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 ease-out ${"opacity-100 translate-y-0"}`}
              style={{ transitionDelay: "1200ms" }}
            >
              <Link
                href={primaryButtonLink}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-normal rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm sm:text-base overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {primaryButtonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </Link>

              <Link
                href={secondaryButtonLink}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-white/90 backdrop-blur-sm text-black font-normal rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base overflow-hidden relative hover:bg-white hover:shadow-xl hover:shadow-white/10"
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
    </section>
  );
};

export default ITSolutionsHero;
