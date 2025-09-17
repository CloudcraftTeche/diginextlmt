"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyProps {
  image: string;
  title: string;
  percentage?: string;
  description: string;
  delay: number;
}

interface CaseStudiesSectionProps {
  mainTitle?: string;
  subtitle?: string;
  buttonText?: string;
  caseStudies?: Array<{
    image: string;
    title: string;
    percentage?: string;
    description: string;
  }>;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  image,
  title,
  percentage,
  description,
  delay,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(
      `#case-study-${title.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      id={`case-study-${title.replace(/\s+/g, "-").toLowerCase()}`}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 lg:p-8">
        {/* Title with Percentage */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-lg lg:text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
            {title}
            {percentage && (
              <span className="text-gray-400 font-normal ml-2">
                {percentage}
              </span>
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Connect to Us Button */}
        <button className="group/btn flex items-center gap-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">
          <span className="text-sm sm:text-base">Connect to Us</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  mainTitle = "Case Studies & Insights",
  subtitle = "Be it offshore development or local in Dubai DigiNext is capable of offering its services globally.",
  buttonText = "Our Works",
  caseStudies = [
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f4f4f4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e0e0e0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%23d4a574'/%3E%3Crect x='120' y='180' width='160' height='60' rx='30' fill='%23d4a574'/%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='Arial' font-size='16' font-weight='bold' fill='%23333'%3ELuxury Interior%3C/text%3E%3C/svg%3E",
      title: "Organic Growth",
      percentage: "100X",
      description:
        "Achieve greater exposure to your target market and a competitive edge in online search with relevant, targeted, and cost-effective revised marketing strategies.",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Crect x='50' y='80' width='300' height='140' fill='%23008000' stroke='%23333' stroke-width='2'/%3E%3Ctext x='200' y='160' text-anchor='middle' font-family='Arial' font-size='24' font-weight='bold' fill='white'%3EAL-MANARA%3C/text%3E%3Cpath d='M180 120 L220 120 L210 140 L190 140 Z' fill='white'/%3E%3C/svg%3E",
      title: "Branding Design",
      description:
        "Achieve greater exposure to your target market and a competitive edge in online search with relevant, targeted, and cost-effective revised marketing strategies.",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f8f8f8;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e8e8e8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad2)'/%3E%3Ccircle cx='320' cy='80' r='60' fill='%2364a364'/%3E%3Crect x='280' y='130' width='80' height='120' rx='8' fill='%2364a364'/%3E%3Ctext x='320' y='200' text-anchor='middle' font-family='Arial' font-size='10' font-weight='bold' fill='white'%3EDO NOT%3C/text%3E%3Ctext x='320' y='220' text-anchor='middle' font-family='Arial' font-size='10' font-weight='bold' fill='white'%3EDISTURB%3C/text%3E%3C/svg%3E",
      title: "Design Concepts",
      description:
        "Achieve greater exposure to your target market and a competitive edge in online search with relevant, targeted, and cost-effective revised marketing strategies.",
    },
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

    const element = document.querySelector("#case-studies-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="case-studies-section"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          {/* Single Row Layout - Title, Description, and Button */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mb-8">
            {/* Title */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight whitespace-nowrap">
                {mainTitle}
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block bg-gray-300 w-px h-16"></div>

            {/* Description */}
            <div
              className={`flex-1 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Button */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <button className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm sm:text-base overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 whitespace-nowrap">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {buttonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div
            className={`w-full h-px bg-gray-200 transform transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          ></div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={`${study.title}-${index}`}
              image={study.image}
              title={study.title}
              percentage={study.percentage}
              description={study.description}
              delay={400 + index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
