"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { AboutLoadingSkelton } from "../../LoadingSkelton/home/AboutLoadingSkelton";

import { CONTENT_WRAPPER_CLASSES } from "@/constants/layoutConstants";

interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}

// Define the shape of the data object
interface AboutData {
  title: string;
  description: string;
}

interface TrustSectionProps {
  data: AboutData | null; // Changed to accept the data object
  stats?: Array<{
    number: string;
    suffix: string;
    label: string;
  }>;
  isLoading?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  number,
  suffix,
  label,
  delay,
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = parseInt(number);
    if (isNaN(targetNumber)) return;

    const duration = 1000;
    const steps = 50;
    const increment = targetNumber / steps;
    let current = 0;

    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setAnimatedNumber(targetNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [number, delay, isVisible]);

  return (
    <div
      ref={itemRef}
      className="text-center transform transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div className="mb-3">
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
          {animatedNumber}
        </span>
        <span className="text-md sm:text-lg lg:text-xl font-semibold text-gray-900">
          {suffix}
        </span>
      </div>
      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-700 font-normal">
        {label}
      </p>
    </div>
  );
};

const AboutSection: React.FC<TrustSectionProps> = ({
  data,
  stats = [
    { number: "300", suffix: "+", label: "Happy Clients" },
    { number: "1000", suffix: "+", label: "Projects Delivered" },
    { number: "65", suffix: "+", label: "Talented Professionals" },
    { number: "5", suffix: "+", label: "Countries Served" },
  ],
  isLoading = false,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const baseLogos = useMemo(
    () => [
      { name: "Tata Power", logo: ImageConstants.COMPANY_LOGO_1 },
      { name: "Gulf Logistics", logo: ImageConstants.COMPANY_LOGO_2 },
      { name: "Ramada", logo: ImageConstants.COMPANY_LOGO_3 },
      { name: "Award Badge", logo: ImageConstants.COMPANY_LOGO_4 },
      { name: "IMT Business School", logo: ImageConstants.COMPANY_LOGO_5 },
      { name: "Company 6", logo: ImageConstants.COMPANY_LOGO_6 },
      { name: "Company 7", logo: ImageConstants.COMPANY_LOGO_7 },
      { name: "Company 8", logo: ImageConstants.COMPANY_LOGO_8 },
      { name: "Company 9", logo: ImageConstants.COMPANY_LOGO_9 },
      { name: "Company 10", logo: ImageConstants.COMPANY_LOGO_10 },
      { name: "Company 11", logo: ImageConstants.COMPANY_LOGO_11 },
      { name: "Company 12", logo: ImageConstants.COMPANY_LOGO_12 },
      { name: "Company 13", logo: ImageConstants.COMPANY_LOGO_13 },
      { name: "Company 14", logo: ImageConstants.COMPANY_LOGO_14 },
      { name: "Company 15", logo: ImageConstants.COMPANY_LOGO_15 },
      { name: "Company 16", logo: ImageConstants.COMPANY_LOGO_16 },
    ],
    [],
  );

  const clientLogos = useMemo(() => {
    return [...baseLogos, ...baseLogos];
  }, [baseLogos]);

  // Extract data with fallbacks
  const finalTitle = data?.title || "";
  const finalDescription = data?.description || "";

  // Show loading skeleton
  if (isLoading) {
    return <AboutLoadingSkelton />;
  }

  return (
    <section
      id="trust-section"
      className="px-4 sm:px-6 lg:px-8 bg-white overflow-hidden pt-[clamp(1rem,5vw,4rem)] lg:pt-2"
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-6 ">
          {/* Left Side - Title and Description */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              {finalTitle}
            </h2>

            <div className="space-y-6">
              {/* Parse double newlines into paragraphs */}
              {finalDescription.split(/\r\n\r\n|\n\n/).map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed"
                >
                  {para.replace(/\r\n/g, " ").trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Statistics Grid */}
          <div className="grid grid-cols-2 gap-0 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2" />

            {stats.map((stat, index) => (
              <div key={`${stat.label}-${index}`} className="p-8 lg:p-8">
                <StatItem
                  number={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 150}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Section - Auto-Scroll Infinite Slider */}
      <div className="border-t mb:p3 lg:p-6">
        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes smoothScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .logo-scroll-track {
              display: flex;
              width: fit-content;
              animation: smoothScroll 30s linear infinite;
              will-change: transform;
            }

            .logo-scroll-track.paused {
              animation-play-state: paused;
            }

            .logo-scroll-wrapper {
              overflow: hidden;
              position: relative;
              width: 100%;
            }

            .logo-scroll-wrapper:hover .logo-scroll-track {
              animation-play-state: paused;
            }

            .logo-item {
              flex-shrink: 0;
              padding: 10px 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .logo-item img {
              height: 65px;
              width: auto;
              object-fit: contain;
              transition:
                opacity 0.3s ease,
                transform 0.3s ease;
            }

            .logo-item:hover img {
              opacity: 1;
              transform: scale(1.05);
            }

            @media (max-width: 768px) {
              .logo-scroll-track {
                animation: smoothScroll 25s linear infinite;
              }

              .logo-item {
                padding: 10px 20px;
              }

              .logo-item img {
                height: 40px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .logo-scroll-track {
                animation: none;
              }
            }
          `}</style>

          <div
            className="logo-scroll-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`logo-scroll-track ${isPaused ? "paused" : ""}`}>
              {clientLogos.map((client, index) => (
                <div
                  key={`logo-${index}`}
                  className="logo-item border border-gray-200 rounded-lg m-2"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
