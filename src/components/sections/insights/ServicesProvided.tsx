"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ServiceDetail {
  label: string;
  value: string;
}

interface ServicesProvidedProps {
  title?: string;
  description?: string;
  details?: ServiceDetail[];
  buttonText?: string;
  buttonLink?: string;
}

const ServicesProvided: React.FC<ServicesProvidedProps> = ({
  title = "Services Provided",
  description = "We takes pride in ensuring 24/7 customer support to all of our partners across the world. We research, analyze, create, innovate and work transparently to achieve the business and digital needs of customers.",
  details = [
    {
      label: "Language",
      value: "Magento PWA Studio / React / Android / iOS / Laravel / MySQL",
    },
    {
      label: "Timescale",
      value: "12 Weeks",
    },
    {
      label: "System",
      value: "Magento",
    },
  ],
  buttonText = "View Live Site",
  buttonLink = "#",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#services-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-section"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Title and Description */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Right Side - Details Table and Button */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Details Table */}
            <div className="space-y-4 mb-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4 pb-4 border-b border-gray-300 last:border-b-0 transform transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="text-sm sm:text-base text-gray-900 font-normal">
                    {detail.label}
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 font-normal">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>

            {/* View Live Site Button */}
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + details.length * 100}ms` }}
            >
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-gray-900 font-normal rounded-full border-2 border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 text-sm sm:text-base relative overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  {buttonText}
                </span>
                <svg
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div className="absolute inset-0 bg-gray-900/5 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;
