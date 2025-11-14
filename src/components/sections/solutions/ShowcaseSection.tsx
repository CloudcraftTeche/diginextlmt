"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Type Definitions
interface ServiceSubItem {
  name: string;
  slug: string;
}

interface ServiceMainItem {
  name: string;
  slug: string;
  subItems?: ServiceSubItem[];
}

interface ServiceItem {
  title: string;
  description: string;
  slug: string;
  image: string;
  imageAlt: string;
  services: ServiceMainItem[];
}

// Services Data
const SOLUTIONS_DATA: ServiceItem[] = [
  {
    title: "Print & Signages",
    description:
      "Professional printing and signage solutions for your business branding needs",
    slug: "print-signages",
    image:
      "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=800&h=600&fit=crop",
    imageAlt: "Print and Signages Services",
    services: [
      { name: "Digital Printing", slug: "digital-printing" },
      { name: "Signages", slug: "signages" },
      { name: "Exhibition Stand Builders", slug: "exhibition-stand-builders" },
      { name: "Corporate Gift", slug: "corporate-gift" },
    ],
  },
  {
    title: "Marketing",
    description:
      "Strategic marketing solutions to accelerate your business growth and enhance brand visibility",
    slug: "marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imageAlt: "Marketing Services",
    services: [
      { name: "Performance Marketing", slug: "performance-marketing" },
      { name: "Marketing Consultant", slug: "marketing-consultant" },
      { name: "Growth Marketing", slug: "growth-marketing" },
      { name: "Content Marketing", slug: "content-marketing" },
      { name: "Influencer Marketing", slug: "influencer-marketing" },
    ],
  },
  {
    title: "IT Infrastructure",
    description:
      "Comprehensive IT infrastructure services ensuring robust and secure technology operations",
    slug: "it-infrastructure",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    imageAlt: "IT Infrastructure Services",
    services: [
      { name: "IT Services", slug: "it-services" },
      { name: "Enterprise Solutions", slug: "enterprise-solutions" },
      { name: "GIS Planning", slug: "gis-planning" },
      { name: "On Site Support", slug: "on-site-support" },
      { name: "Cyber Security", slug: "cyber-security" },
    ],
  },
  {
    title: "Custom Softwares",
    description:
      "Tailored software development solutions designed to meet your unique business requirements",
    slug: "custom-softwares",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    imageAlt: "Custom Software Services",
    services: [
      { name: "HR Software Development", slug: "hr-software-development" },
      { name: "Enterprise CRM Software", slug: "enterprise-crm-software" },
      {
        name: "ERP Development Consultation",
        slug: "erp-development-consultation",
      },
      { name: "Custom Dashboard Design", slug: "custom-dashboard-design" },
      { name: "ERP Data Migration", slug: "erp-data-migration" },
      { name: "ERP App Development", slug: "erp-app-development" },
      {
        name: "Learning Management System",
        slug: "learning-management-system",
      },
      {
        name: "DevOps",
        slug: "devops-and-cloud-solutions",
      },
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
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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

  const toggleSubItems = (idx: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div
      id={`service-card-${index}`}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
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
        <div className="w-full">
          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Service List */}
          <ul className="space-y-3">
            {service.services.map((item, idx) => (
              <li key={idx}>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`/solutions/${item.slug}`}
                      className="text-base lg:text-lg text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-200 relative group flex-1"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                    {item.subItems && item.subItems.length > 0 && (
                      <button
                        onClick={() => toggleSubItems(idx)}
                        className="text-gray-500 hover:text-orange-600 transition-colors p-1"
                        aria-label={
                          expandedItems.has(idx) ? "Collapse" : "Expand"
                        }
                      >
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            expandedItems.has(idx) ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Sub-items */}
                  {item.subItems && item.subItems.length > 0 && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedItems.has(idx)
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-6 space-y-2 border-l-2 border-gray-200 mt-2">
                        {item.subItems.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a
                              href={`/services/${subItem.slug}`}
                              className="text-sm lg:text-base text-gray-600 hover:text-orange-600 transition-colors duration-200 block group/sub"
                            >
                              <span className="relative">
                                {subItem.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover/sub:w-full transition-all duration-300"></span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[350px] lg:h-[450px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore our {service.title.toLowerCase()} services
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const ShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  services = SOLUTIONS_DATA,
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
      className="py-12 lg:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
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
