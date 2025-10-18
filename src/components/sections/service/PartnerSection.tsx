"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface PartnerSectionProps {
  title: string;
  description: string;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({
  title,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#partner-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partner-section" className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Title */}
        <h2
          className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`text-sm leading-loose text-gray-800 mb-8 max-w-4xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ textAlign: "justify" }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="inline-flex items-center px-6 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm">
            Lets Talk
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
