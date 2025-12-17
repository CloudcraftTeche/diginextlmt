"use client";
import { IS_MOCK_ENABLED } from "@/config/apiConfig";
import { ImageConstants } from "@/constants/ImageConstants";
import { apiService } from "@/services/apiService";
import React, { useState, useEffect, useRef, useMemo } from "react";

interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}

interface TrustSectionProps {
  title?: string;
  stats?: Array<{
    number: string;
    suffix: string;
    label: string;
  }>;
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
      { threshold: 0.3 }
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

const TrustSection: React.FC<TrustSectionProps> = ({
  title: defaultTitle = "Companies That Trust Us",
  stats = [
    { number: "300", suffix: "+", label: "Happy Clients" },
    { number: "1000", suffix: "+", label: "Projects Delivered" },
    { number: "65", suffix: "+", label: "Talented Professionals" },
    { number: "5", suffix: "+", label: "Countries Served" },
  ],
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [apiTitle, setApiTitle] = useState<string | undefined>(undefined);
  const [apiContent, setApiContent] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

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
    []
  );

  const clientLogos = useMemo(() => {
    return [...baseLogos, ...baseLogos];
  }, [baseLogos]);

  useEffect(() => {
    // When mocks are disabled, use real API
    if (IS_MOCK_ENABLED) return;

    const fetchTrustSection = async () => {
      try {
        setIsLoading(true);

        const res = await apiService.getTrustSection();
        console.warn(res,'resop')
        const item = res?.data?.data?.[0];
        if (item) {
          setApiTitle(item.title);
          const cleaned = item.content
            .replace(/\/\/\s*$/, "")
            .replace(/\r\n/g, "\n");
          setApiContent(cleaned);
        }
      } catch (error) {
        console.error("Failed to fetch trust section", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrustSection();
  }, []);

  const finalTitle = apiTitle ?? defaultTitle;
  const finalContent = apiContent;

  return (
    <section
      id="trust-section"
      className="px-4 sm:px-6 lg:px-8 bg-white overflow-hidden pt-[clamp(1rem,5vw,4rem)] lg:pt-9"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-6 ">
          {/* Left Side - Title and Description */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              {finalTitle}
            </h2>

            {IS_MOCK_ENABLED ? (
              // MOCK MODE → always use local copy
              <div className="space-y-6">
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  We at <span>DigiNext</span> are proud to play a significant
                  role in our client&apos;s success stories. We think that
                  building trust is the most important and basic part of any
                  great partnership we begin.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  Our dedicated team does not just do marketing duties, we also
                  learn all about the specific needs of your business. We help
                  you research, plan and come up with new ideas for your
                  approach in a completely transparent way, making sure that
                  every solution we give you perfectly fits your specific
                  digital and business goals.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  We have built a strong reputation in the market by working
                  closely with our partners for their success. We look forward
                  to building one with you.
                </p>
              </div>
            ) : isLoading ? (
              <div className="space-y-6">
                <div className="shimmer-wrapper">
                  <div className="shimmer-line h-4 w-full"></div>
                  <div className="shimmer-line h-4 w-full"></div>
                  <div className="shimmer-line h-4 w-3/4"></div>
                </div>
                <div className="shimmer-wrapper">
                  <div className="shimmer-line h-4 w-full"></div>
                  <div className="shimmer-line h-4 w-full"></div>
                  <div className="shimmer-line h-4 w-5/6"></div>
                </div>
                <div className="shimmer-wrapper">
                  <div className="shimmer-line h-4 w-full"></div>
                  <div className="shimmer-line h-4 w-2/3"></div>
                </div>
              </div>
            ) : finalContent ? (
              <div className="space-y-6">
                {finalContent.split(/\n\s*\n/).map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              // Fallback if API fails / empty
              <div className="space-y-6">
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  We at <span>DigiNext</span> are proud to play a significant
                  role in our client&apos;s success stories. We think that
                  building trust is the most important and basic part of any
                  great partnership we begin.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  Our dedicated team does not just do marketing duties, we also
                  learn all about the specific needs of your business. We help
                  you research, plan and come up with new ideas for your
                  approach in a completely transparent way, making sure that
                  every solution we give you perfectly fits your specific
                  digital and business goals.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600 leading-relaxed">
                  We have built a strong reputation in the market by working
                  closely with our partners for their success. We look forward
                  to building one with you.
                </p>
              </div>
            )}
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

            @keyframes shimmer {
              0% {
                background-position: -1000px 0;
              }
              100% {
                background-position: 1000px 0;
              }
            }

            .shimmer-wrapper {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .shimmer-line {
              background: linear-gradient(
                90deg,
                #f0f0f0 0%,
                #e0e0e0 20%,
                #f0f0f0 40%,
                #f0f0f0 100%
              );
              background-size: 1000px 100%;
              animation: shimmer 2s linear infinite;
              border-radius: 4px;
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
              // opacity: 0.7;
              transition: opacity 0.3s ease, transform 0.3s ease;
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

export default TrustSection;