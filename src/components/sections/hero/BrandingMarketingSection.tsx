"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ImageConstants } from "@/constants/ImageConstants";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PX,
  SECTION_PY,
} from "@/constants/layoutConstants";
import { DESCRIPTION_SIZE, TITLE_SIZE } from "@/constants/typographyConstants";
import {
  staggerContainerVariants,
  fadeInUpVariants,
  onceInViewPort,
} from "@/constants/animationVariants";

import { BrandingMarketingSkeleton } from "@/components/LoadingSkelton/home/BrandingMarketingSkeleton";

// Define the shape of the features data
export interface FeaturesData {
  text1: string;
  text1_description: string;
  text2: string;
  text2_description: string;
  text3: string;
  text3_description: string;
  text4: string;
  text4_description: string;
  main_feature: string; // Used for "bottomSectionText"
  text5: string;
  text5_description: string;
  text6: string;
  text6_description: string;
  image: string;
}

interface BrandingMarketingSectionProps {
  data?: FeaturesData | null;
  isLoading?: boolean;
}

const BrandingMarketingSection: React.FC<BrandingMarketingSectionProps> = ({
  data,
  isLoading = false,
}) => {
  if (isLoading) {
    return <BrandingMarketingSkeleton />;
  }

  // Fallback defaults if data is missing or empty
  const title = data?.text1 || "Creative & Supportive Services";
  const description =
    data?.text1_description ||
    "We create comprehensive solutions that blend creativity with technology to deliver exceptional results for your business needs.";

  const seoTitle = data?.text2 || "Branding & Graphic Design";
  const seoDescription =
    data?.text2_description ||
    "We create visual identities that are powerful and reflect the personality of your brand.";

  const socialMediaTitle = data?.text3 || "Photography, Videography & Print";
  const socialMediaDescription =
    data?.text3_description ||
    "Our creative services use strong visuals, signs and prints of excellent quality to bring your brand story to life.";

  const paidCampaignsTitle = data?.text4 || "Content Development";
  const paidCampaignsDescription =
    data?.text4_description ||
    "We deliver engaging and business related content that connects with your audience and makes your online presence stronger. We generate engaging, business-focused content that talks directly to your audience and helps you build a stronger online presence. We do not just write content, we also know your brand voice, target market, and industry goals so that we can create articles that can create wonders.";

  const bottomSectionText =
    data?.main_feature ||
    "At DigiNext, our primary focus is to develop strategies that really connect your brand with your audience. We work with you to create successful marketing efforts through our IT solution services. We want to provide you with experiences that are memorable, unique, and will connect with your target audience.";

  const itConsultancyTitle = data?.text5 || "IT Consultancy in Dubai";
  const itConsultancyDescription =
    data?.text5_description ||
    "As a leading IT solution company, we don't just offer services, we work with you to come up with plans that bring technology and business closer together. DigiNext makes sure that every solution is practical, scalable, and focused on getting results, whether you need cloud integration, infrastructure planning or enterprise IT consulting.";

  const partnerTitle = data?.text6 || "Partner with DigiNext";
  const partnerDescription =
    data?.text6_description ||
    "DigiNext is a trustworthy IT solution company in Dubai with an excellent reputation. We promise to provide solutions that are both innovative and efficient. Our broad range of IT solutions services are made to help you succeed, whether you are a startup looking to grow or an established business looking for ways to improve.";

  const imageSrc = data?.image || ImageConstants.PLANT;

  return (
    <section
      id="branding-marketing-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white`}
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        <motion.div
          className="w-full"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={onceInViewPort}
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xs:gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Image */}
            <motion.div
              variants={fadeInUpVariants}
              className="lg:col-span-2 relative"
            >
              <div className="relative w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[400px] lg:max-w-lg mx-auto lg:mx-0">
                <div className="relative z-10 ml-16">
                  <Image
                    src={getImageWithPlaceholder(imageSrc)}
                    alt="Creative plant illustration"
                    width={350}
                    height={350}
                    className="h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div variants={fadeInUpVariants} className="lg:col-span-3">
              {/* Title + Description */}
              <div className="mb-4 xs:mb-6 sm:mb-8">
                <h2
                  className={`${TITLE_SIZE} mb-3 xs:mb-4 sm:mb-6 leading-tight`}
                >
                  {title}
                </h2>
                <p className={`${DESCRIPTION_SIZE} mb-4 xs:mb-6 sm:mb-8`}>
                  {description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                {/* Branding & Graphic Design */}
                <div className="space-y-2 xs:space-y-3">
                  <h3 className={TITLE_SIZE}>{seoTitle}</h3>
                  <p className={DESCRIPTION_SIZE}>{seoDescription}</p>
                </div>

                {/* Photography, Videography & Print */}
                <div className="space-y-2 xs:space-y-3">
                  <h3 className={TITLE_SIZE}>{socialMediaTitle}</h3>
                  <p className={DESCRIPTION_SIZE}>{socialMediaDescription}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 xs:mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
            {/* Content Development */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className={`${TITLE_SIZE} mb-2 xs:mb-3 sm:mb-4`}>
                {paidCampaignsTitle}
              </h3>
              <p className={DESCRIPTION_SIZE}>{paidCampaignsDescription}</p>
            </motion.div>

            {/* DigiNext Focus Radial Block */}
            <motion.div variants={fadeInUpVariants}>
              <div className="bg-black rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 relative overflow-hidden min-h-[150px] xs:min-h-[180px] sm:min-h-[200px] flex items-center">
                {/* Radial Lines */}
                <div className="absolute left-4 xs:left-6 sm:left-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 relative">
                    {Array.from({ length: 32 }).map((_, index) => (
                      <div
                        key={index}
                        className="absolute w-0.5 h-6 xs:h-7 sm:h-8 bg-white origin-bottom"
                        style={{
                          left: "50%",
                          bottom: "50%",
                          transform: `translateX(-50%) rotate(${
                            index * 11.25
                          }deg)`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 ml-20 xs:ml-24 sm:ml-32 flex-1">
                  <p className="text-white text-justify text-xs xs:text-sm sm:text-base leading-relaxed">
                    {bottomSectionText}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional IT Services Section */}
          <div className="mt-8 xs:mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
            {/* IT Consultancy in Dubai */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className={`${TITLE_SIZE} mb-2 xs:mb-3 sm:mb-4`}>
                {itConsultancyTitle}
              </h3>
              <p className={DESCRIPTION_SIZE}>{itConsultancyDescription}</p>
            </motion.div>

            {/* Partner with DigiNext */}
            <motion.div variants={fadeInUpVariants}>
              <h3 className={`${TITLE_SIZE} mb-2 xs:mb-3 sm:mb-4`}>
                {partnerTitle}
              </h3>
              <p className={DESCRIPTION_SIZE}>{partnerDescription}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingMarketingSection;
