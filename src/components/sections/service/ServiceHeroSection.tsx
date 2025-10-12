"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  title,
  subtitle,
  description,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Experience Design", href: "/services/experience-design" },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className={`flex items-center space-x-2 text-sm mb-8 transition-all duration-700 ${
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
          className={`text-2xl lg:text-3xl font-normal  text-gray-900 mb-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-lg lg:text-xl text-gray-700 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </h2>

        {/* Description */}
        <p
          className={`text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            Let&apos;s talk
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
