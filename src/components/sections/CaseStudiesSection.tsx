"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

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
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
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
      className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-32 xs:h-36 sm:h-48 md:h-56 lg:h-64">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          priority={delay < 600}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="mb-2 xs:mb-3 sm:mb-4">
          <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors duration-300">
            {title}
            {percentage && (
              <span className="text-gray-400 font-normal ml-1 xs:ml-2 text-xs xs:text-sm sm:text-base">
                {percentage}
              </span>
            )}
          </h3>
        </div>

        <p className="text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6 line-clamp-3">
          {description}
        </p>

        <button className="group/btn flex items-center gap-1 xs:gap-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">
          <span className="text-xs xs:text-sm sm:text-base">Connect to Us</span>
          <ArrowUpRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  mainTitle = "Client Success Stories & Our Insights",
  subtitle = "No matter whether it is local development in Dubai or overseas, DigiNext can provide its services anywhere in the world.",
  buttonText = "Our Works",
  caseStudies = [
    {
      image: ImageConstants.CASE_STUDY_1,
      title: "Organic Growth",
      percentage: "100X",
      description:
        "By providing professional IT solutions consulting, we helped businesses to achieve excellent organic growth, giving them an advantage over their competitors and a chance to reach a larger audience.",
    },
    {
      image: ImageConstants.CASE_STUDY_2,
      title: "Branding Design",
      description:
        "Partner with us to build a strong brand identity that accurately reflects our whole range of IT solutions and services.",
    },
    {
      image: ImageConstants.CASE_STUDY_3,
      title: "Design Concepts",
      description:
        "As the best IT solution company in Dubai, we transform brands by creating powerful designs that communicate our innovative IT solution services with clarity and visual appeal.",
    },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.querySelector("#case-studies-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="case-studies-section"
      className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 lg:mb-16">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-4 sm:space-y-5">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                {mainTitle}
              </h2>
            </div>
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm sm:text-base overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {buttonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            <div
              className={`w-full h-px bg-gray-200 transform transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            />
          </div>

          {/* Desktop Layout - Single Row */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-8 mb-8">
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-tight whitespace-nowrap">
                  {mainTitle}
                </h2>
              </div>
              <div className="bg-gray-300 w-px h-16 flex-shrink-0" />
              <div
                className={`flex-1 transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {subtitle}
                </p>
              </div>
              <div
                className={`transform transition-all duration-1000 ease-out flex-shrink-0 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <button className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-base overflow-hidden relative hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 whitespace-nowrap">
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {buttonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
            <div
              className={`w-full h-px bg-gray-200 transform transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-6 lg:gap-8">
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
