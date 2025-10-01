"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}

interface TrustSectionProps {
  title?: string;
  description?: string;
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
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the number
          const targetNumber = parseInt(number);
          const duration = 1000; // 2 seconds
          const steps = 50;
          const increment = targetNumber / steps;
          let current = 0;

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
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(
      `#stat-${label.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [number, label]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className={`text-center transform transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-3">
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black">
          {animatedNumber}
        </span>
        <span className="text-md sm:text-lg lg:text-xl font-semibold text-black">
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
  title = "Companies That Trust Us",
  stats = [
    { number: "300", suffix: "+", label: "Happy Clients" },
    { number: "1000", suffix: "+", label: "Projects Delivered" },
    { number: "65", suffix: "+", label: "Talented Professionals" },
    { number: "5", suffix: "+", label: "Countries Served" },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#trust-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Client logos using actual images
  const clientLogos = [
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
  ];

  return (
    <section
      id="trust-section"
      className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* Left Side - Title and Description */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <div className="space-y-6" itemProp="description">
              <p className="text-sm sm:text-base lg:text-md font-light text-gray-600 leading-relaxed">
                We at <span itemProp="legalName">DigiNext</span> are proud to
                play a significant role in our client&apos;s success stories. We
                think that building trust is the most important and basic part
                of any great partnership we begin.
              </p>

              <p className="text-sm sm:text-base lg:text-md font-light text-gray-600 leading-relaxed">
                Our dedicated team does not just do marketing duties, we also
                learn all about the specific needs of your business. We help you
                research, plan and come up with new ideas for your approach in a
                completely transparent way, making sure that every solution we
                give you perfectly fits your specific digital and business
                goals. We are totally committed to delivering results that are
                valuable and can be measured, turning your problems into
                successes.
              </p>

              <p className="text-sm sm:text-base lg:text-md font-light text-gray-600 leading-relaxed">
                We have built a strong reputation in the market by working
                closely with our partners for their success. We look forward to
                building one with you.
              </p>
            </div>
          </div>

          {/* Right Side - Statistics Grid */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-2 gap-0 relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2"></div>

              {stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="p-8 lg:p-12">
                  <StatItem
                    number={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={400 + index * 100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Section - Auto Scrolling */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="border-t border-gray-200 pt-16">
            <div className="relative overflow-hidden">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 10s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <div className="flex animate-scroll">
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 mx-8 lg:mx-12"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={160}
                      height={60}
                      className="h-16 w-auto object-contain opacity-100 "
                      priority={index < 4}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.name}-duplicate-${index}`}
                    className="flex-shrink-0 mx-8 lg:mx-12"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={160}
                      height={60}
                      className="h-16 w-auto object-contain opacity-100  duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
