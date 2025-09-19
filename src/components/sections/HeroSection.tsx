"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

interface HeroSectionProps {
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

const   HeroSection: React.FC<HeroSectionProps> = ({
  title = {
    part1: "Invite",
    part2: "Inform",
    part3: "Involve",
  },
  description = "To create, build and deploy innovative, engaging and integrated end to end marketing strategies that will reflect and propel the business.",
  primaryButtonText = "Request a Quote",
  secondaryButtonText = "Why Digi Next?",
  primaryButtonLink = "/quote",
  secondaryButtonLink = "/about",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section
      id="hero-section"
      className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-white overflow-hidden"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      <div className="w-full bg-black via-black to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[420px] relative z-10">
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin mb-3 sm:mb-4 md:mb-5 leading-tight"
            >
              <span
                className={`text-orange-500 font-normal block sm:inline transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {title.part1}
              </span>
              <span
                className={`text-white font-normal block sm:inline transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {" "}
                . {title.part2}
              </span>
              <span
                className={`text-white font-normal block sm:inline transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {" "}
                . {title.part3}
              </span>
            </h1>

            {/* Animated Description */}
            <p
              className={`text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 leading-relaxed font-normal max-w-full sm:max-w-md md:max-w-lg mx-auto lg:mx-0 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              {description}
            </p>

            {/* Animated Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
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

      {/* Enhanced WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-12 sm:right-12 z-50">
        <div className="relative group">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30 group-hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        @keyframes slow-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slow-bounce {
          animation: slow-bounce 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
