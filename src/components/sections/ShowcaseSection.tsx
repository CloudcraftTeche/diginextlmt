"use client";
import React, { useState, useEffect } from "react";

interface ServiceItem {
  title: string;
  subtitle: string;
  items: string[];
  image: string;
  imageAlt: string;
}

interface ServicesShowcaseSectionProps {
  services?: ServiceItem[];
}

const ServiceCard: React.FC<{
  service: ServiceItem;
  index: number;
  isReversed: boolean;
}> = ({ service, index, isReversed }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(`#service-card-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`service-card-${index}`}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12 mb-16 lg:mb-24`}
    >
      {/* Content Section */}
      <div
        className={`flex-1 transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isReversed ? "translate-x-8" : "-translate-x-8"}`
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="max-w-lg">
          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>

          {/* Subtitle */}
          <h4 className="text-lg lg:text-xl font-medium text-gray-700 mb-6">
            {service.subtitle}
          </h4>

          {/* Service Items */}
          <div className="space-y-3">
            {service.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex items-start gap-3 transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 200 + itemIndex * 100 + 300}ms`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`flex-1 transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : `opacity-0 ${
                isReversed ? "-translate-x-8" : "translate-x-8"
              } scale-95`
        }`}
        style={{ transitionDelay: `${index * 200 + 200}ms` }}
      >
        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Decorative element */}
          <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-orange-200 rounded-2xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>
    </div>
  );
};

const ShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  services = [
    {
      title: "Branding",
      subtitle: "& Graphic Design",
      items: [
        "Logo Design",
        "Corporate Identity & Brand Guidelines",
        "Marketing Collateral Design",
        "Social Media & Digital Graphics",
        "Packaging Design",
        "Web & UI/UX Design",
        "Advertising & Campaign Design",
        "Custom Illustrations & Infographics",
        "Print Production Support",
      ],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Branding and graphic design materials",
    },
    {
      title: "Experience",
      subtitle: "Design",
      items: [
        "UI/UX Design",
        "Website Design",
        "Mobile Experience",
        "Commerce Experience",
        "Human Machine Interface (HMI)",
        "Applications and Dashboards",
        "Wearable App Design",
        "Cross-Platform Experience Design",
        "Design Support and Maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Al-Manara shipping container design",
    },
    {
      title: "Interior",
      subtitle: "Design Solutions",
      items: [
        "Residential Interior Design",
        "Commercial Space Planning",
        "Luxury Furniture Selection",
        "Color Scheme Consultation",
        "Lighting Design",
        "Custom Furniture Design",
        "Space Optimization",
        "Material Selection",
        "Project Management",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Luxury interior design with modern furniture",
    },
  ],
}) => {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#services-showcase-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-showcase-section"
      className="py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design solutions tailored to elevate your brand and
            create exceptional user experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-16 lg:mt-20 transform transition-all duration-1000 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with our
              comprehensive design services
            </p>
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105">
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Get Started Today
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
