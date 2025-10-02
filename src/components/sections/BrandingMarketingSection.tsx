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
  title = "Creative & Supportive Services",
  description = "We create comprehensive solutions that blend creativity with technology to deliver exceptional results for your business needs.",
  seoTitle = "Branding & Graphic Design",
  seoDescription = "We create visual identities that are powerful and reflect the personality of your brand.",
  socialMediaTitle = "Photography, Videography & Print",
  socialMediaDescription = "Our creative services use strong visuals, signs and prints of excellent quality to bring your brand story to life.",
  paidCampaignsTitle = "Content Development",
  paidCampaignsDescription = "We deliver engaging and business related content that connects with your audience and makes your online presence stronger.",
  bottomSectionText = "At DigiNext, our primary focus is to develop strategies that really connect your brand with your audience. We work with you to create successful marketing efforts through our IT solution services. We want to provide you with experiences that are memorable, unique, and will connect with your target audience.",
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
      className="py-4 xs:py-6 sm:py-8 lg:py-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid - Unchanged for web */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xs:gap-8 sm:gap-12 lg:gap-16 items-start mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
          {/* Left Side - Creative Image Section - Takes 2 columns on lg */}
          <div
            className={`lg:col-span-2 relative transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[400px] lg:max-w-lg mx-auto lg:mx-0">
              {/* Main Plant Image */}
              <div className="relative z-10">
                <Image
                  src={ImageConstants.PLANT}
                  alt="Creative plant illustration"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content Section - Takes 3 columns on lg */}
          <div
            className={`lg:col-span-3 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Main Title and Description */}
            <div className="mb-4 xs:mb-6 sm:mb-8">
              <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-3 xs:mb-4 sm:mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-gray-700 text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed mb-4 xs:mb-6 sm:mb-8">
                {description}
              </p>
            </div>

            {/* Services Grid - Two columns on mobile and tablet */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              {/* Branding & Graphic Design Section */}
              <div className="space-y-2 xs:space-y-3">
                <h3 className="text-base xs:text-lg font-semibold text-black">
                  {seoTitle}
                </h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
                  {seoDescription}
                </p>
              </div>

              {/* Photography, Videography & Print Section */}
              <div className="space-y-2 xs:space-y-3">
                <h3 className="text-base xs:text-lg font-semibold text-black">
                  {socialMediaTitle}
                </h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
                  {socialMediaDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Two Columns on mobile and tablet */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Content Development */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-base xs:text-lg font-semibold text-black mb-2 xs:mb-3 sm:mb-4">
              {paidCampaignsTitle}
            </h3>
            <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
              {paidCampaignsDescription}
            </p>
          </div>

          {/* Right - DigiNext Focus Message with Radial Design */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-black rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 relative overflow-hidden min-h-[150px] xs:min-h-[180px] sm:min-h-[200px] flex items-center">
              {/* Radial Lines Background */}
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

              {/* Text Content */}
              <div className="relative z-10 ml-20 xs:ml-24 sm:ml-32 flex-1">
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed">
                  {bottomSectionText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional IT Services Section - Two Columns on mobile and tablet */}
        <div className="mt-8 xs:mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
          {/* IT Consultancy in Dubai */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="text-base xs:text-lg font-semibold text-black mb-2 xs:mb-3 sm:mb-4">
              IT Consultancy in Dubai
            </h3>
            <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
              As a leading IT solution company, we don&apos;t just offer
              services, we work with you to come up with plans that bring
              technology and business closer together. DigiNext makes sure that
              every solution is practical, scalable, and focused on getting
              results, whether you need cloud integration, infrastructure
              planning or enterprise IT consulting.
            </p>
          </div>

          {/* Partner with DigiNext */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h3 className="text-base xs:text-lg font-semibold text-black mb-2 xs:mb-3 sm:mb-4">
              Partner with DigiNext
            </h3>
            <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
              DigiNext is a trustworthy IT solution company in Dubai with an
              excellent reputation. We promise to provide solutions that are
              both innovative and efficient. Our broad range of IT solutions
              services are made to help you succeed, whether you are a startup
              looking to grow or an established business looking for ways to
              improve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingMarketingSection;
