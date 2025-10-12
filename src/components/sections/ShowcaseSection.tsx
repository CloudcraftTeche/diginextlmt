"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Type Definitions
interface ServiceSubItem {
  name: string;
  slug: string;
}

interface ServiceItem {
  title: string;
  description: string;
  slug: string;
  image: string;
  imageAlt: string;
  services: ServiceSubItem[];
}

// Services Data
const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Branding & Graphic Design",
    description: "",
    slug: "branding-graphic-design",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop",
    imageAlt: "Branding and Graphic Design Services",
    services: [
      { name: "Logo Design", slug: "logo-design" },
      {
        name: "Corporate Identity & Brand Guidelines",
        slug: "corporate-identity",
      },
      { name: "Marketing Collateral Design", slug: "marketing-collateral" },
      {
        name: "Social Media & Digital Graphics",
        slug: "social-media-graphics",
      },
      { name: "Packaging Design", slug: "packaging-design" },
      { name: "Web & UI/UX Design", slug: "web-uiux-design" },
      { name: "Advertising & Campaign Design", slug: "advertising-design" },
      { name: "Custom Illustrations & Infographics", slug: "illustrations" },
      { name: "Print Production Support", slug: "print-production" },
    ],
  },
  {
    title: "Experience Design",
    description: "",
    slug: "experience-design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    imageAlt: "Experience Design Services",
    services: [
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "Website Design", slug: "website-design" },
      { name: "Mobile Experience", slug: "mobile-experience" },
      { name: "Commerce Experience", slug: "commerce-experience" },
      { name: "Human Machine Interface (HMI)", slug: "hmi" },
      { name: "Applications and Dashboards", slug: "applications-dashboards" },
      { name: "Wearable App Design", slug: "wearable-app-design" },
      { name: "Cross-Platform Experience Design", slug: "cross-platform" },
      { name: "Design Support and Maintenance", slug: "design-support" },
    ],
  },
  {
    title: "Branding & Graphic Design",
    description: "",
    slug: "branding-graphic-design-2",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    imageAlt: "Branding and Graphic Design Services",
    services: [
      { name: "Logo Design", slug: "logo-design" },
      {
        name: "Corporate Identity & Brand Guidelines",
        slug: "corporate-identity",
      },
      { name: "Marketing Collateral Design", slug: "marketing-collateral" },
      {
        name: "Social Media & Digital Graphics",
        slug: "social-media-graphics",
      },
      { name: "Packaging Design", slug: "packaging-design" },
      { name: "Web & UI/UX Design", slug: "web-uiux-design" },
      { name: "Advertising & Campaign Design", slug: "advertising-design" },
      { name: "Custom Illustrations & Infographics", slug: "illustrations" },
      { name: "Print Production Support", slug: "print-production" },
    ],
  },
  {
    title: "Experience Design",
    description: "",
    slug: "experience-design-2",
    image:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&h=600&fit=crop",
    imageAlt: "Experience Design Services",
    services: [
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "Website Design", slug: "website-design" },
      { name: "Mobile Experience", slug: "mobile-experience" },
      { name: "Commerce Experience", slug: "commerce-experience" },
      { name: "Human Machine Interface (HMI)", slug: "hmi" },
      { name: "Applications and Dashboards", slug: "applications-dashboards" },
      { name: "Wearable App Design", slug: "wearable-app-design" },
      { name: "Cross-Platform Experience Design", slug: "cross-platform" },
      { name: "Design Support and Maintenance", slug: "design-support" },
    ],
  },
];

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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24"
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
        <div className={`max-w-lg ${isReversed ? "lg:ml-auto" : ""}`}>
          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            {service.title}
          </h3>

          {/* Service List */}
          <ul className="space-y-3 mb-6">
            {service.services.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`/services/${item.slug}`}
                  className="text-base lg:text-lg text-gray-700 hover:text-orange-600 hover:translate-x-2 inline-block transition-all duration-200 relative group"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
        <a href={`/services/${service.slug}`}>
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[300px] lg:h-[400px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const ShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  services = SERVICES_DATA,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        // Section visibility tracked but not required for functionality
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
        {/* Optional Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive design and development solutions tailored to your
            business needs
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
