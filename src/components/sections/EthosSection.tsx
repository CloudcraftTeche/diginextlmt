"use client";
import { useState, useEffect } from "react";

interface EthosSectionProps {
  title?: string;
  description?: string;
  subtitle?: string;
}

const EthosSection: React.FC<EthosSectionProps> = ({
  title = "Our Ethos",
  description = "DigiNext's success can attribute to their ethos of being a customer centric organization. They believe that satisfied customers are the cornerstone to building a successful digital ago system. DigiNext envisions themselves as the extended arm of their customers and ensure that they deliver on their vision, mission and goals. DigiNext takes pride in ensuring 24/7 customer support to all of their partners across the world. They research, analyze, create, innovate and work transparently to achieve the business and digital needs of their customers.",
  subtitle = "Engineering creativity and innovation to stay abreast of emerging trends and technology is one of DigiNext's core values.",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders animated lines on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const ethosElement = document.querySelector("#ethos-section");
    if (ethosElement) observer.observe(ethosElement);

    return () => observer.disconnect();
  }, []);

  // Generate radiating lines - only called on client side
  const generateLines = () => {
    const lines = [];
    const totalLines = 120;
    const centerX = 50;
    const centerY = 50;

    for (let i = 0; i < totalLines; i++) {
      const angle = (i * 360) / totalLines;
      const length = 45 + Math.random() * 15; // Varying lengths
      const opacity = 0.3 + Math.random() * 0.4; // Varying opacity

      const x1 = centerX + Math.cos((angle * Math.PI) / 180) * 5;
      const y1 = centerY + Math.sin((angle * Math.PI) / 180) * 5;
      const x2 = centerX + Math.cos((angle * Math.PI) / 180) * length;
      const y2 = centerY + Math.sin((angle * Math.PI) / 180) * length;

      lines.push(
        <line
          key={i}
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke="white"
          strokeWidth="0.5"
          opacity={opacity}
          className="animate-pulse"
          style={{
            animationDelay: `${i * 0.02}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      );
    }
    return lines;
  };

  return (
    <section
      id="ethos-section"
      className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white"
      aria-labelledby="ethos-heading"
    >
      <div className="w-full bg-black rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Only render lines on client side to avoid hydration mismatch */}
              {isClient && generateLines()}
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Side - Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Title */}
            <h2
              id="ethos-heading"
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8 text-white leading-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {title}
            </h2>

            {/* Main Description */}
            <div
              className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="mb-4">
                {description.split(".")[0]}.{" "}
                <span className="font-medium">DigiNext</span>{" "}
                {description.split(".").slice(1, 3).join(". ")}.
              </p>
              <p>{description.split(".").slice(3).join(". ")}</p>
            </div>

            {/* Subtitle */}
            <p
              className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Side - Visual Element */}
          <div
            className={`flex justify-center lg:justify-start items-center order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* Radiating Lines Pattern */}
              <svg
                className="w-full h-full animate-slow-rotate"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Only render lines on client side to avoid hydration mismatch */}
                {isClient && generateLines()}

                {/* Center circle - always render as it's static */}
                <circle cx="50" cy="50" r="2" fill="white" opacity="0.8" />
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-slow-rotate {
          animation: slow-rotate 60s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EthosSection;
