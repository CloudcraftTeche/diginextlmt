"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// ============================================
// SERVICE HERO SECTION
// ============================================
interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href: string }[];
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  imageAlt = "Service illustration",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Split description into paragraphs
  const paragraphs = description.split("\n\n").filter((p) => p.trim());

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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Title */}
            <h1
              className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {/* <h2
              className={`text-lg lg:text-xl text-gray-700 mb-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {subtitle}
            </h2> */}

            {/* Description with Paragraphs */}
            <div
              className={`text-sm lg:text-base text-gray-600 leading-relaxed mb-8 space-y-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
