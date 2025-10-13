"use client";
import {
  Box,
  FileSearch,
  Monitor,
  MousePointer,
  Palette,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Service {
  title: string;
  description: string;
}

interface ServicesOfferedSectionProps {
  title: string;
  description: string;
  services: Service[];
}

const iconMap: Record<number, React.ReactNode> = {
  0: <Users className="w-8 h-8" />,
  1: <Palette className="w-8 h-8" />,
  2: <Monitor className="w-8 h-8" />,
  3: <MousePointer className="w-8 h-8" />,
  4: <FileSearch className="w-8 h-8" />,
  5: <Box className="w-8 h-8" />,
};

const ServicesOfferedSection: React.FC<ServicesOfferedSectionProps> = ({
  title,
  description,
  services,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#services-offered-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Split description into paragraphs
  const descriptionParagraphs = description
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <section
      id="services-offered-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>
          <div
            className={`text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed space-y-3 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-16">
          {services.map((service, index) => {
            const serviceParagraphs = service.description
              .split("\n\n")
              .filter((p) => p.trim());

            return (
              <div
                key={index}
                className={`relative pb-8 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center text-orange-600">
                    {iconMap[index % 6]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description with Paragraphs */}
                <div className="text-gray-600 leading-relaxed text-base mb-6 space-y-2">
                  {serviceParagraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                {/* Underline */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;
