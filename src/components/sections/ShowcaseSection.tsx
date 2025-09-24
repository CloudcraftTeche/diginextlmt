"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/lib/services-data";

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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24"
    >
      {/* Content Section */}
      <div
        className={`${
          isReversed ? "lg:order-2" : "lg:order-1"
        } transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isReversed ? "translate-x-8" : "-translate-x-8"}`
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div
          className={`max-w-lg ${isReversed ? "lg:ml-auto lg:text-right" : ""}`}
        >
          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-1">
            {service.title}
          </h3>

          {/* Subtitle */}
          <h4 className="text-xl lg:text-2xl font-medium text-gray-900 mb-8">
            {service.subtitle}
          </h4>

          {/* Service Items - Now clickable */}
          <div className="space-y-3">
            {service.items.slice(0, 5).map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 200 + itemIndex * 100 + 300}ms`,
                }}
              >
                <Link
                  href={`/services/${service.slug}/${item.slug}`}
                  className="block p-2 -m-2 rounded-lg  transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-black text-base font-light lg:text-sm leading-relaxed group-hover:text-orange-600 transition-colors duration-200">
                      {item.name}
                    </p>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
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
                  </div>
                </Link>
              </div>
            ))}

            {/* Show remaining items count if there are more than 5 */}
            {service.items.length > 5 && (
              <div
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 200 + 5 * 100 + 300}ms`,
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <p className="text-gray-500 text-sm italic group-hover:text-orange-600 transition-colors duration-200">
                    + {service.items.length - 5} more services...
                  </p>
                </Link>
              </div>
            )}
          </div>

          {/* View All Services Link */}
          <div className="mt-8">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
            >
              View All {service.title} Services
              <svg
                className="ml-2 w-4 h-4"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`${
          isReversed ? "lg:order-1" : "lg:order-2"
        } transform transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : `opacity-0 ${
                isReversed ? "-translate-x-8" : "translate-x-8"
              } scale-95`
        }`}
        style={{ transitionDelay: `${index * 200 + 200}ms` }}
      >
        <Link href={`/services/${service.slug}`}>
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Overlay content */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-gray-900">
                    {service.items.length} Services Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const ShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  services = SERVICES_DATA,
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
      </div>
    </section>
  );
};

export default ShowcaseSection;
