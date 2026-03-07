"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import modular constants
import {
  FONT_WEIGHT,
  SECTION_HEADING_SIZE,
  TITLE_SIZE,
  DESCRIPTION_SIZE,
} from "@/constants/typographyConstants";

import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  PRIMARY_GRADIENT,
  PRIMARY_RING_FOCUS,
  PRIMARY_SHADOW_HOVER,
  PRIMARY_ORANGE_TEXT,
  COMMON_GAP_MD,
  COMMON_MB_MD,
  CARD_PADDING,
  CARD_IMAGE_HEIGHT,
  DIVIDER_STYLE,
} from "@/constants/layoutConstants";
import { ImageConstants } from "@/constants/ImageConstants";

interface CaseStudyProps {
  image: string;
  title: string;
  percentage?: string;
  description: string;
  slug?: string;
  navigationText?: string;
  category?: string;
}

interface CaseStudiesSectionProps {
  mainTitle?: string;
  subtitle?: string;
  buttonText?: string;
  caseStudies?: Array<{
    image: string;
    title: string;
    percentage?: string;
    description: string;
    slug?: string;
    navigationText?: string;
    category?: string;
  }>;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  image,
  title,
  percentage,
  description,
  navigationText = "Read Case Study",
  slug,
  category,
}) => {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform">
      {/* Image Section */}
      <div className={`relative overflow-hidden ${CARD_IMAGE_HEIGHT}`}>
        <Image
          src={image}
          alt={title}
          width={2048}
          height={1536}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
        {category && (
          <div className="absolute top-4 left-4 bg-orange-500/90 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
            {category}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={CARD_PADDING}>
        <div className="mb-2 xs:mb-3 sm:mb-4">
          <h3
            className={`${TITLE_SIZE} text-black transition-colors duration-500`}
          >
            {title}
            {percentage && (
              <span className="text-gray-400 font-normal ml-1 xs:ml-2 text-xs xs:text-sm sm:text-base">
                {percentage}
              </span>
            )}
          </h3>
        </div>

        <p
          className={`${DESCRIPTION_SIZE} ${FONT_WEIGHT.light} text-gray-600 text-left leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6 line-clamp-3`}
        >
          {description}
        </p>
        <Link href={`/insights/${slug}`}>
          <button className="group/btn flex items-center gap-1 xs:gap-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">
            <span className={`text-xs xs:text-sm sm:text-base`}>
              {navigationText}
            </span>
            <ArrowUpRight
              className={`w-3 xs:w-4 sm:w-5 h-3 xs:h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 ${PRIMARY_ORANGE_TEXT}`}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  mainTitle = "Client Success Stories & Our Insights",
  subtitle = "No matter whether it is local development in Dubai or overseas, DigiNext can provide its services anywhere in the world.",
  buttonText = "Our Works",
  caseStudies = [
    {
      image: ImageConstants.CASE_STUDY_1,
      title: "Organic Growth",
      description:
        "By providing professional IT solutions consulting, we helped businesses to achieve excellent organic growth, giving them an advantage over their competitors and a chance to reach a larger audience.",
    },
    {
      image: ImageConstants.CASE_STUDY_2,
      title: "Branding Design",
      description:
        "Partner with us to build a strong brand identity that accurately reflects our whole range of IT solutions and services.",
    },
    {
      image: ImageConstants.CASE_STUDY_3,
      title: "Design Concepts",
      description:
        "As the best IT solution company in Dubai, we transform brands by creating powerful designs that communicate our innovative IT solution services with clarity and visual appeal.",
    },
  ],
}) => {
  return (
    <section
      id="case-studies-section"
      className={`${SECTION_PY} ${SECTION_PX} bg-white overflow-hidden`}
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className={COMMON_MB_MD}>
          <div className="flex flex-col xl:flex-row xl:items-center xl:gap-8">
            <div className="flex-shrink-0 mb-4 xl:mb-0">
              <h2
                className={`${SECTION_HEADING_SIZE} ${FONT_WEIGHT.medium} text-gray-900 leading-tight`}
              >
                {mainTitle}
              </h2>
            </div>

            <div className={`hidden xl:block ${DIVIDER_STYLE}`} />

            <div className="flex-1 mb-4 lg:mb-0">
              <p className="text-gray-600 text-sm text-justify sm:text-base leading-relaxed lg:text-lg">
                {subtitle}
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/work"
                className={`group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 ${PRIMARY_GRADIENT} text-white ${FONT_WEIGHT.semibold} rounded-full transition-all duration-300 focus:outline-none ${PRIMARY_RING_FOCUS} text-sm sm:text-base overflow-hidden relative ${PRIMARY_SHADOW_HOVER} hover:scale-105 whitespace-nowrap`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {buttonText}
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mt-4" />
        </div>

        {/* Case Studies Grid */}
        <div
          className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ${COMMON_GAP_MD}`}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={`${study.title}-${index}`}
              image={study.image}
              title={study.title}
              percentage={study.percentage}
              description={study.description}
              slug={study.slug}
              navigationText={study.navigationText}
              category={study.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
