"use client";
import React, { useState, useEffect } from "react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText = "Our Works",
  buttonLink = "#works",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Title */}
          <div
            className={`flex-shrink-0 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-2xl">
              {title}
            </h2>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-32 bg-gray-300"></div>

          {/* Right Side - Description and Button */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Description */}
            <p
              className={`text-sm sm:text-base text-gray-600 leading-relaxed max-w-md text-center lg:text-left transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {description}
            </p>

            {/* Button */}
            <a
              href={buttonLink}
              className={`flex-shrink-0 px-10 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div
          className={`mt-12 lg:mt-16 h-px bg-gray-300 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        ></div>
      </div>
    </section>
  );
};

export default CTASection;
