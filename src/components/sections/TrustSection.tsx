"use client";
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
          const duration = 2000; // 2 seconds
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
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          {animatedNumber}
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          {suffix}
        </span>
      </div>
      <p className="text-base sm:text-lg text-gray-700 font-normal">{label}</p>
    </div>
  );
};

const TrustSection: React.FC<TrustSectionProps> = ({
  title = "Who Trust us",
  description = "We takes pride in ensuring 24/7 customer support to all of our partners across the world. We research, analyze, create, innovate and work transparently to achieve the business and digital needs of customers.",
  stats = [
    { number: "300", suffix: "+", label: "Happy Clients" },
    { number: "1000", suffix: "+", label: "Projects Done" },
    { number: "65", suffix: "+", label: "Awesome People" },
    { number: "5", suffix: "+", label: "Global Presence" },
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

  // Updated client logos with proper SVG structure and dimensions
  const clientLogos = [
    {
      name: "Tata Power",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23f8f9fa'/%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23d73502'%3ETATA POWER%3C/text%3E%3C/svg%3E",
      width: 200,
      height: 60,
    },
    {
      name: "Gulf Logistics",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23f8f9fa'/%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23004c8c'%3EGulf Logistics%3C/text%3E%3C/svg%3E",
      width: 200,
      height: 60,
    },
    {
      name: "Ramada",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23f8f9fa'/%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23d4237a'%3ERAMADA%3C/text%3E%3C/svg%3E",
      width: 200,
      height: 60,
    },
    {
      name: "Award Badge",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='35' fill='%23d4af37' stroke='%23b8941f' stroke-width='3'/%3E%3Cpath d='M40,20 L45,30 L56,30 L48,38 L51,48 L40,43 L29,48 L32,38 L24,30 L35,30 Z' fill='white'/%3E%3Ctext x='40' y='62' text-anchor='middle' font-family='Arial, sans-serif' font-size='8' font-weight='bold' fill='%23b8941f'%3EAWARD%3C/text%3E%3C/svg%3E",
      width: 80,
      height: 80,
    },
    {
      name: "IMT Business School",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23f8f9fa'/%3E%3Ctext x='100' y='25' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23333'%3EIMT%3C/text%3E%3Ctext x='100' y='45' text-anchor='middle' font-family='Arial, sans-serif' font-size='10' fill='%23666'%3EBusiness School%3C/text%3E%3C/svg%3E",
      width: 200,
      height: 60,
    },
  ];

  return (
    <section
      id="trust-section"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
              {description}
            </p>
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

        {/* Client Logos Section */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="border-t border-gray-200 pt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {clientLogos.map((client, index) => (
                <div
                  key={client.name}
                  className={`flex items-center justify-center group transform transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-orange-200 hover:bg-white/80 group-hover:scale-105">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={client.width}
                      height={client.height}
                      className={`max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${
                        client.name === "Award Badge"
                          ? "h-16 w-16"
                          : "h-12 w-auto"
                      }`}
                      priority={index < 2} // Prioritize loading first 2 images
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/5 group-hover:to-orange-600/5 transition-all duration-300 rounded-lg" />
                  </div>
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
