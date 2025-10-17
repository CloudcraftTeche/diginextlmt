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
const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Design",
    description: "Comprehensive visual design services for branding and UX",
    slug: "design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    imageAlt: "Design Services",
    services: [
      {
        name: "Branding and Graphics Design",
        slug: "branding-graphics-design",
      },
      { name: "Product & Packaging Design", slug: "product-packaging-design" },
      { name: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  {
    title: "Development",
    description: "Custom software and mobile app development solutions",
    slug: "development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    imageAlt: "Development Services",
    services: [
      { name: "Web Design", slug: "website-design" },
      { name: "E-Commerce Web Development", slug: "ecommerce-development" },
      {
        name: "Mobile App Development",
        slug: "app-development",
        subItems: [
          {
            name: "Native Hybrid Development",
            slug: "native-hybrid-development",
          },
          {
            name: "React Native Development",
            slug: "react-native-development",
          },
          { name: "Android App Development", slug: "android-development" },
          { name: "iOS App Development", slug: "ios-development" },
        ],
      },
      { name: "Custom Web Application", slug: "custom-web-application" },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Marketing services to boost your online presence and engagement",
    slug: "digital-marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imageAlt: "Digital Marketing Services",
    services: [
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
        subItems: [
          { name: "LinkedIn Marketing", slug: "linkedin-marketing" },
          { name: "Instagram Marketing", slug: "instagram-marketing" },
          { name: "Facebook Marketing", slug: "facebook-marketing" },
          { name: "Twitter Marketing", slug: "twitter-marketing" },
          {
            name: "Social Media Optimization",
            slug: "social-media-optimization",
          },
        ],
      },
      {
        name: "Search Engine Optimization",
        slug: "search-engine-optimization",
      },
      { name: "Email Marketing", slug: "email-marketing" },
      { name: "PPC Advertising", slug: "ppc-advertising" },
    ],
  },
  {
    title: "Web Hosting",
    description: "Reliable and scalable web hosting solutions",
    slug: "web-hosting",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    imageAlt: "Web Hosting Services",
    services: [
      { name: "Shared Web Hosting", slug: "shared-hosting" },
      { name: "Dedicated Hosting", slug: "dedicated-hosting" },
      { name: "Cloud Hosting", slug: "cloud-hosting" },
      { name: "Email Hosting", slug: "email-hosting" },
      { name: "G Suite", slug: "g-suite" },
    ],
  },
  {
    title: "Production",
    description: "Creative production services for photography and videography",
    slug: "production",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    imageAlt: "Production Services",
    services: [
      { name: "Photography", slug: "photography-videography" },
      { name: "Videography", slug: "photography-videography" },
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
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`/services/${item.slug}`}
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
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
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
