"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

interface BrandingMarketingSectionProps {
  title?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  socialMediaTitle?: string;
  socialMediaDescription?: string;
  paidCampaignsTitle?: string;
  paidCampaignsDescription?: string;
  bottomSectionText?: string;
}

const BrandingMarketingSection: React.FC<BrandingMarketingSectionProps> = ({
  title = "Branding & Marketing Agency, Dubai",
  description = "Digital Marketing plays a strategic and significant role in propelling your business to the next level, in today's world. It is imperative to have the online presence to leverage the reach and the messaging to the diverse demographic panning across different geographies.",
  seoTitle = "SEO Search Engine Optimisation",
  seoDescription = "SEO is vital aspect in Digital Marketing to ensuring your website receives the visibility it needs. Catering to a range of enhancements to your website, optimising content, identifying key words are imperative to increase the Company's ranking in a Google Search.",
  socialMediaTitle = "Social Media Marketing",
  socialMediaDescription = "Facebook, Instagram, LinkedIn, Twitter and Youtube are an extremely important tools for building and sustaining Corporate Identity and customer outreach. Optimising your social media channels to enhance your brand and grow your customer base is at the forefront of any Social Media Strategy.",
  paidCampaignsTitle = "Paid Campaigns",
  paidCampaignsDescription = "Google Ads help you achieve greater exposure to your target market and a competitive edge in online search with relevant, targeted, and cost-effective revised marketing strategies. From display ads on popular websites, to text ads in Google Search, one needs to create aggressive campaigns that can ensure the optimized reach to potential customers.",
  bottomSectionText = "We focus on designing to connect your brand with your customer. We adopt a collaborative approach to projects together with you. Our aim is to make your designs and collaterals memorable and striking with your target market.",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#branding-marketing-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="branding-marketing-section"
      className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid - Updated proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Side - Creative Image Section - Takes 2 columns */}
          <div
            className={`lg:col-span-2 relative transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main Donut Image */}
              <div className="relative z-10">
                <Image
                  src={ImageConstants.PLANT}
                  alt="Creative donut with sprinkles"
                  width={400}
                  height={400}
                  className="w-90 h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content Section - Takes 3 columns */}
          <div
            className={`lg:col-span-3 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Main Title and Description */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SEO Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-black">{seoTitle}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {seoDescription}
                </p>
              </div>

              {/* Social Media Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-black">
                  {socialMediaTitle}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {socialMediaDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Paid Campaigns */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-xl font-medium text-black mb-4">
              {paidCampaignsTitle}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {paidCampaignsDescription}
            </p>
          </div>

          {/* Right - Bottom Message with Radial Design */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-black rounded-2xl p-8 relative overflow-hidden min-h-[200px] flex items-center">
              {/* Radial Lines Background */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-24 h-24 relative">
                  {/* Create radial lines */}
                  {Array.from({ length: 32 }).map((_, index) => (
                    <div
                      key={index}
                      className="absolute w-0.5 h-8 bg-white origin-bottom"
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

              {/* Text Content */}
              <div className="relative z-10 ml-32 flex-1">
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  {bottomSectionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingMarketingSection;
