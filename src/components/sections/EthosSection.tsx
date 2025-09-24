"use client";
import { ImageConstants } from "@/constants/ImageConstants";
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

  // ImageConstants equivalent - using your three assets
  const ROUND_LINE_1 = "/assets/icons/Asset 1.svg";
  const ROUND_LINE_2 = "/assets/icons/Asset 2.svg";
  const ROUND_LINE_3 = "/assets/icons/Asset 3.svg";

  return (
    <section
      id="ethos-section"
      className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white"
      aria-labelledby="ethos-heading"
    >
      <div className="w-full bg-black rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div className="text-left order-2 lg:order-1">
            <h2
              id="ethos-heading"
              className={`text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-8 text-white leading-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {title}
            </h2>

            <div
              className={`text-gray-300 font-light text-base sm:text-md md:text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="mb-6">
                {description.split(".")[0]}.{" "}
                <span className="font-light text-white">DigiNext</span>{" "}
                {description.split(".").slice(1, 3).join(". ")}.
              </p>
              <p>{description.split(".").slice(3).join(". ")}</p>
            </div>

            {/* Subtitle */}
            <p
              className={`text-gray-300 text-base font-light sm:text-md md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Side - Radiating Lines Visual */}
          <div
            className={`flex justify-center lg:justify-end items-center order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* Radiating Lines Pattern - Layer 1 */}
              <img
                src={ImageConstants.ROUND_LINE}
                alt="Radiating lines pattern 1"
                className="absolute inset-0 w-full h-full animate-slow-rotate object-contain"
              />
              <img
                src={ImageConstants.ROUND_LINE}
                alt="Radiating lines pattern 2"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ animation: "spin 40s linear infinite reverse" }}
              />

              {/* Radiating Lines Pattern - Layer 2 */}
              {/* <img
                src={ImageConstants.ROUND_LINE_2}
                alt="Radiating lines pattern 2"
                className="absolute inset-0 w-full h-full  object-contain "
              />

              <img
                src={ImageConstants.ROUND_LINE_3}
                alt="Radiating lines pattern 3"
                className="absolute inset-0 w-full h-full animate-fast-rotate object-contain "
              /> */}

              {/* Central glow effect */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
              </div> */}

              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl" />
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
            opacity: 0.8;
          }
        }

        .animate-slow-rotate {
          animation: slow-rotate 120s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default EthosSection;
