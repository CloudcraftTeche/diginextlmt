"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

import { ImageConstants } from "@/constants/ImageConstants";
import MediaDisplay from "@/components/ui/MediaDisplay";

import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PY,
} from "@/constants/layoutConstants";
import {
  DESCRIPTION_SIZE,
  TITLE_SIZE,
  FONT_WEIGHT,
  SECTION_HEADING_SIZE,
} from "@/constants/typographyConstants";
import EmptyState from "@/components/ui/EmptyState";
import { ShowcaseSkeleton } from "@/components/LoadingSkelton/services/ShowcaseSkeleton";

// --- Type Definitions ---
interface ServiceSubItem {
  name: string;
  slug?: string;
}

interface ServiceMainItem {
  name: string;
  slug?: string;
  subItems?: ServiceSubItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  slug?: string;
  image: string;
  imageAlt: string;
  services: ServiceMainItem[];
}

// --- Services Data (Default) ---
const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Design",
    description:
      "We offer a full range of visual design services that improve your brand image and user experience.  We want to create designs that look good, serve a purpose, and help you reach your business goals.",
    slug: "design",
    image: ImageConstants.SERVICE_DESIGN,
    imageAlt: "Design Services",
    services: [
      { name: "Branding", slug: "branding-graphics-design" },
      { name: "Product Design", slug: "product-packaging-design" },
      { name: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  {
    title: "Development",
    description:
      "We develop custom software and mobile apps that are designed to help you reach your business goals. Our team makes sure that your digital products work well, have modern interfaces, and can grow with what you require.",
    slug: "development",
    image: ImageConstants.SERVICE_DEVELOPMENT,
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
          // {
          //   name: "React Native Development",
          //   slug: "react-native-development",
          // },
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
      "Our digital marketing services are designed to make you more visible, get people engaged in what you have to say, and bring in consistent, measurable growth on all of your online platforms.",
    slug: "digital-marketing",
    image: ImageConstants.SERVICE_DM,
    imageAlt: "Digital Marketing Services",
    services: [
      {
        name: "Social Media Marketing",
        // slug: "social-media-marketing",
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
    description:
      "We offer web hosting services that are safe, reliable, and scalable. This means that your website will run smoothly with little downtime and the best performance.",
    slug: "web-hosting",
    image: ImageConstants.SERVICE_WEB_HOSTING,
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
    description:
      "Our production services include professional photography and videography that clearly, creatively and effectively portrays your brand, products, and events.",
    slug: "production",
    image: ImageConstants.SERVICE_PRODUCTION,
    imageAlt: "Production Services",
    services: [
      { name: "Photography", slug: "photography" },
      { name: "Videography", slug: "videography" },
    ],
  },
  {
    title: "Entertainment & Events",
    description:
      "We make your events come to life by planning them professionally, carrying them out smoothly, and full media coverage. This makes sure that every event, from corporate functions to concerts and parties, is one to remember.",
    slug: "entertainment-events",
    image:
      "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170?w=800&h=600&fit=crop",
    imageAlt: "Entertainment and Events Services",
    services: [
      { name: "Event Management", slug: "event-management" },
      { name: "Concerts & Shows", slug: "concerts-and-shows" },
      { name: "Corporate Events", slug: "corporate-events" },
      { name: "Media Coverage", slug: "media-coverage" },
    ],
  },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const mediaVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const mediaVariantsReversed: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

const contentVariantsReversed: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

// --- Main Card Component ---
const ServiceCard: React.FC<{
  service: ServiceItem;
  index: number;
  isReversed: boolean;
  basePath: string;
}> = ({ service, index, isReversed, basePath }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSubItems = (idx: number) => {
    const next = new Set(expandedItems);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setExpandedItems(next);
  };

  const animationProps = isMounted
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
        variants: cardVariants,
      }
    : { initial: { opacity: 1 } };

  const innerMotionProps = isMounted
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
      }
    : {};

  return (
    <motion.div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start mb-24 lg:mb-32 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
      {...animationProps}
    >
      {/* Media Section */}
      <motion.div
        className="w-full lg:w-[480px] xl:w-[580px] lg:flex-shrink-0"
        variants={isReversed ? mediaVariantsReversed : mediaVariants}
        {...innerMotionProps}
      >
        <div className="sticky top-8">
          <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
            <MediaDisplay src={service.image} alt={service.imageAlt} />
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full flex-1 pt-6"
        variants={isReversed ? contentVariantsReversed : contentVariants}
        {...innerMotionProps}
      >
        {/* Title */}
        <h3
          className={`${SECTION_HEADING_SIZE} ${FONT_WEIGHT.semibold} mb-4 sm:mb-5 lg:mb-6`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className={`${DESCRIPTION_SIZE} mb-8 lg:mb-10 max-w-2xl`}>
          {service.description}
        </p>

        {/* Service List */}
        <ul className="space-y-6">
          {service.services.map((item, idx) => {
            const hasSlug = Boolean(item.slug);

            return (
              <li key={idx}>
                <div>
                  <div className="flex items-center gap-3 relative group flex-1">
                    {/* Title */}
                    {hasSlug ? (
                      <a
                        href={`${basePath}/${item.slug}`}
                        className={`${TITLE_SIZE} text-gray-800 hover:text-orange-600 transition-colors duration-200`}
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    ) : (
                      <span
                        className={`${TITLE_SIZE} text-gray-800 cursor-default`}
                      >
                        {item.name}
                      </span>
                    )}

                    {/* Expand / Collapse Button */}
                    {item.subItems && item.subItems?.length > 0 && (
                      <button
                        onClick={() => toggleSubItems(idx)}
                        className="text-gray-400 hover:text-orange-600 transition-colors ml-2 p-1 focus:outline-none"
                        aria-label={
                          expandedItems.has(idx) ? "Collapse" : "Expand"
                        }
                      >
                        <svg
                          className={`w-6 h-6 transform transition-transform duration-300 ${
                            expandedItems.has(idx) ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Sub-items */}
                  {item.subItems && item.subItems?.length > 0 && (
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        expandedItems.has(idx)
                          ? "grid-rows-[1fr] opacity-100 mt-4 mb-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden pl-6 border-l-2 border-orange-100 space-y-3">
                        {item.subItems.map((subItem, subIdx) => {
                          const hasSubSlug = Boolean(subItem.slug);

                          return (
                            <li key={subIdx}>
                              {hasSubSlug ? (
                                <a
                                  href={`${basePath}/${subItem.slug}`}
                                  className={`${DESCRIPTION_SIZE} block py-1 group/sub`}
                                >
                                  <span className="relative">
                                    {subItem.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover/sub:w-full transition-all duration-300" />
                                  </span>
                                </a>
                              ) : (
                                <span
                                  className={`${DESCRIPTION_SIZE} block py-1 text-gray-700`}
                                >
                                  {subItem.name}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

interface ServicesShowcaseSectionProps {
  services?: ServiceItem[];
  basePath: string;
  isLoading?: boolean;
}

const ShowcaseSection: React.FC<ServicesShowcaseSectionProps> = ({
  services = SERVICES_DATA,
  basePath,
  isLoading = false,
}) => {
  if (isLoading) {
    return <ShowcaseSkeleton />;
  }

  return (
    <section className={`${SECTION_PY} bg-white overflow-hidden`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        {!services || services.length === 0 ? (
          <EmptyState
            title="Coming Soon"
            description="We are currently working on adding more information here. Please check back later."
            minHeight="min-h-[40vh]"
          />
        ) : (
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isReversed={index % 2 === 1}
                basePath={basePath}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;
