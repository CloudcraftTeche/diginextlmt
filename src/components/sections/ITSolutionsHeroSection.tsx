"use client";
import Link from "next/link";
import { useState } from "react";
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
  primaryButtonLink = "/about",
  secondaryButtonText = "Why Digi Next?",
  secondaryButtonLink = "/about",
}) => {
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
      className="px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-10 bg-white"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
    >
      {/* Full-width black background */}
      <div className="w-full bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        {/* Constrained content wrapper */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-20 xl:gap-24 items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] relative z-10">
            {/* Left Side - Circular Logo */}
            <div
              className={`flex justify-center lg:justify-end order-1 lg:order-1 transition-all duration-1000 ease-out opacity-100 translate-y-0 scale-100`}
              style={{
                transitionDelay: "200ms",
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px) scale(1)`,
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
              {/* Animated Title - Single Row on Mobile/Tablet */}
              <h1
                id="hero-heading"
                className="text-base xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl font-thin mb-3 xs:mb-4 sm:mb-5 leading-normal sm:leading-tight"
              >
                <span
                  className="text-orange-500 font-light inline transition-all duration-700 ease-out opacity-100 translate-y-0"
                  style={{ transitionDelay: "400ms" }}
                >
                  {title.part1}
                </span>
                <span
                  className="text-white font-light inline transition-all duration-700 ease-out opacity-100 translate-y-0"
                  style={{ transitionDelay: "600ms" }}
                >
                  {" "}
                  . {title.part2}
                </span>
                <span
                  className="text-white font-normal inline transition-all duration-700 ease-out opacity-100 translate-y-0"
                  style={{ transitionDelay: "800ms" }}
                >
                  {" "}
                  . {title.part3}
                </span>
              </h1>

              {/* Animated Description */}
              <p
                className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-base mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed font-normal max-w-full xs:max-w-md sm:max-w-lg mx-auto lg:mx-0 transition-all duration-700 ease-out opacity-100 translate-y-0"
                style={{ transitionDelay: "1000ms" }}
              >
                {description}
              </p>

              {/* Animated Buttons */}
              <div
                className="flex flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 ease-out opacity-100 translate-y-0"
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

export default ITSolutionsHero;
