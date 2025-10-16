"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceHeroSectionProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  title,
  description,
  breadcrumbs = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const paragraphs = description.split("\n\n").filter((p) => p.trim());

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className={`flex items-center space-x-2 text-sm mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <a
                href={crumb.href}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                {crumb.label}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title */}
        <h1
          className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h1>

        {/* Description */}
        <div
          className={`text-sm leading-loose text-gray-800 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ textAlign: "justify" }}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

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

export default ServiceHeroSection;
