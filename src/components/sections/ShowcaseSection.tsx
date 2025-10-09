"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

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
}

// Services Data
const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Branding & Graphic Design",
    description:
      "We at DigiNext believe that a brand is more than just a logo. It is the story that your customers remember. As a branding agency in Dubai, we bring creativity and strategy together to build designs that truly represent your business. We help you build a brand identity that connects, inspires and lasts, from the first sketch to the final print.",
    slug: "branding-graphic-design",
    image: ImageConstants.CASE_STUDY_1,
    imageAlt: "Branding and Graphic Design Services",
  },
  {
    title: "Building Identities That Speak",
    description:
      "A strong character is what makes a story great, and for businesses, that character is your brand identity. Our team is an expert in logo design, corporate identity, and brand guidelines. We make sure that your brand voice is always professional, consistent, and easy to remember. DigiNext is one of the best branding agencies in Dubai. We can help you create an identity that makes a lasting first impression, no matter if you are a new business or an established one.",
    slug: "building-brand-identity",
    image: ImageConstants.CASE_STUDY_2,
    imageAlt: "Branding and Graphic Design Services",
  },
  {
    title: "Designs That Build Connections",
    description:
      "A logo is just the beginning of your brand's journey, it is how your audience engages with it every day. We create visuals for everything from marketing collateral design to social media and digital graphics that communicate your message clearly and powerfully. As one of the top branding agencies in Dubai, DigiNext makes sure that your designs not only look good, but they also connect with the people who matter most, your customers.",
    slug: "design-marketing-collateral",
    image: ImageConstants.CASE_STUDY_3,
    imageAlt: "Branding and Graphic Design Services",
  },
  {
    title: "Telling stories With Visuals Beyond Screens",
    description:
      "In today's competitive market, your brand's presence can depend on its packaging and advertising. We are experts in packaging design, web and UI/UX design, and advertising and campaign design that make your products and services stand out. We are one of the best branding agencies in Dubai. We combine strategy with style to make every design a story that people will want to share.",
    slug: "visual-storytelling",
    image: ImageConstants.CASE_STUDY_1,
    imageAlt: "Branding and Graphic Design Services",
  },
  {
    title: "Making Ideas Become Reality",
    description:
      "A strong brand is not just online, it also is present in the real world. That is why we offer custom illustrations and infographics along with print production support, making sure that your brand is consistent at all points of contact. As the best branding agencies in Dubai, DigiNext makes sure that your brand always feels genuine, creative and reliable no matter where your customers see it.",
    slug: "making-ideas-reality",
    image: ImageConstants.CASE_STUDY_2,
    imageAlt: "Branding and Graphic Design Services",
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
          <h3 className="text-xl lg:text-2xl font-normal text-gray-900 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Action Buttons */}
          <div
            className={`mt-8 flex flex-wrap gap-3 ${
              isReversed ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Details
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[250px] lg:h-[350px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Overlay content */}
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
