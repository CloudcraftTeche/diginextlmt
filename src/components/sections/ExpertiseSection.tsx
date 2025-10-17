"use client";
import React, { useState, useEffect } from "react";

interface ExpertiseField {
  name: string;
  description: string;
}

interface ExpertiseSectionProps {
  heading?: string;
  subheading?: string;
  expertiseFields?: ExpertiseField[];
  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
  showDividers?: boolean;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  heading = "As an established Advertising Company in Dubai, DigiNext understands the importance of Online presence through Website Desiging, Social Media Marketing and SEO.",
  subheading = "The company also specializes in the following areas.",
  expertiseFields = [
    {
      name: "Brand Identity",
      description:
        "Logo Design, Brand Image, Brand Positioning and Corporate Identity guidelines.",
    },
    {
      name: "Below-the-line Advertising",
      description:
        "Brand Presentations, Videos, Brochures, Stationery and Collateral, Printed Newsletters, Magazines & Content, Print Management.",
    },
    {
      name: "Above-the-line Advertising",
      description:
        "Website Development & Landing page, Print Media Management, Ad devlopment, Visual Sinages (both Indoor & Outdoor), Television and RadioFM Media management.",
    },
    {
      name: "Online Communication Strategy",
      description:
        "Digital Ads, Digital Newsletters, Social Media Strategy, SEO",
    },
    {
      name: "Visual Media",
      description:
        "Concept and Storyboard production, graphic design, videography & photography, Image re-touching & 3D Animation.",
    },
  ],
  backgroundColor = "bg-black",
  textColor = "text-white",
  descriptionColor = "text-gray-300",
  showDividers = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#expertise-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="expertise-section"
      className="py-3 xs:py-4 sm:py-6 lg:py-8 bg-white"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <div
          className={`${backgroundColor} rounded-xl p-4 xs:p-5 sm:p-8 lg:p-12`}
        >
          <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mx-auto">
            {/* Header Text */}
            <div
              className={`text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2
                className={`text-base xs:text-lg sm:text-xl lg:text-xl ${textColor} font-light leading-relaxed mb-3 xs:mb-4 sm:mb-6 max-w-5xl mx-auto`}
                itemProp="description"
              >
                {heading}
              </h2>
              <p
                className={`text-base xs:text-lg sm:text-xl lg:text-xl ${textColor} font-light leading-relaxed`}
              >
                {subheading}
              </p>
            </div>

            {/* Expertise Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 xs:gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 xs:gap-y-10 sm:gap-y-12 lg:gap-y-16 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {expertiseFields.map((field, index) => (
                <article
                  key={index}
                  className="relative pb-8 xs:pb-10 lg:pb-12"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  {/* Content with fixed minimum height */}
                  <div className="flex flex-col">
                    <h3
                      className={`text-xl xs:text-xl sm:text-xl lg:text-xl font-medium ${textColor} mb-3 xs:mb-4`}
                      itemProp="name"
                    >
                      {field.name}
                    </h3>
                    <p
                      className={`${descriptionColor} text-xs xs:text-sm sm:text-base lg:text-base font-light leading-relaxed`}
                      itemProp="description"
                    >
                      {field.description}
                    </p>
                  </div>

                  {/* Divider line - show for all items */}
                  {showDividers && (
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="h-px bg-white"></div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
