"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

// Import modular constants
import { 
  fadeInUpVariants, 
  onceInViewPort,
} from "@/constants/animationVariants"; 

import {
  HERO_DESCRIPTION_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants"; 

import {
  SECTION_PX, 
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants"; 


interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}

interface TrustSectionProps {
  title?: string;
  description?: string;
  stats?: Array<{
    number: string;
    suffix: string;
    label: string;
  }>;
}

// --- Framer Motion Variants for Staggering Stats ---
const statsContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statItemVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};
// ---------------------------------------------------


const StatItem: React.FC<StatItemProps> = ({
  number,
  suffix,
  label,
  delay,
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const targetNumber = parseInt(number);
    if (isNaN(targetNumber)) return;
    
    const duration = 1000;
    const steps = 50;
    const increment = targetNumber / steps;
    let current = 0;

    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setAnimatedNumber(targetNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [number, delay]);

  return (
    <motion.div
      ref={itemRef}
      variants={statItemVariants}
      className="text-center"
    >
      <div className="mb-3">
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
          {animatedNumber}
        </span>
        <span className="text-md sm:text-lg lg:text-xl font-semibold text-gray-900">
          {suffix}
        </span>
      </div>
      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-700 font-normal">
        {label}
      </p>
    </motion.div>
  );
};


const TrustSection: React.FC<TrustSectionProps> = ({
  title = "Companies That Trust Us",
  stats = [
    { number: "300", suffix: "+", label: "Happy Clients" },
    { number: "1000", suffix: "+", label: "Projects Delivered" },
    { number: "65", suffix: "+", label: "Talented Professionals" },
    { number: "5", suffix: "+", label: "Countries Served" },
  ],
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const clientLogos = [
    { name: "Tata Power", logo: ImageConstants.COMPANY_LOGO_1 },
    { name: "Gulf Logistics", logo: ImageConstants.COMPANY_LOGO_2 },
    { name: "Ramada", logo: ImageConstants.COMPANY_LOGO_3 },
    { name: "Award Badge", logo: ImageConstants.COMPANY_LOGO_4 },
    { name: "IMT Business School", logo: ImageConstants.COMPANY_LOGO_5 },
    { name: "Company 6", logo: ImageConstants.COMPANY_LOGO_6 },
    { name: "Company 7", logo: ImageConstants.COMPANY_LOGO_7 },
    { name: "Company 8", logo: ImageConstants.COMPANY_LOGO_8 },
    { name: "Company 9", logo: ImageConstants.COMPANY_LOGO_9 },
    { name: "Company 10", logo: ImageConstants.COMPANY_LOGO_10 },
    { name: "Company 11", logo: ImageConstants.COMPANY_LOGO_11 },
    { name: "Company 12", logo: ImageConstants.COMPANY_LOGO_12 },
    { name: "Company 13", logo: ImageConstants.COMPANY_LOGO_13 },
    { name: "Company 14", logo: ImageConstants.COMPANY_LOGO_14 },
    { name: "Company 15", logo: ImageConstants.COMPANY_LOGO_15 },
    { name: "Company 16", logo: ImageConstants.COMPANY_LOGO_16 },
  ];

  return (
    <section 
      id="trust-section" 
      className={`${SECTION_PX} ${SECTION_PY} bg-white overflow-hidden`}
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Side - Title and Description */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <div className="space-y-6" itemProp="description">
              <p className={`${HERO_DESCRIPTION_SIZE} ${FONT_WEIGHT.light} text-justify text-gray-600 leading-relaxed`}>
                We at <span itemProp="legalName">DigiNext</span> are proud to
                play a significant role in our client&apos;s success stories. We
                think that building trust is the most important and basic part
                of any great partnership we begin.
              </p>

              <p className={`${HERO_DESCRIPTION_SIZE} ${FONT_WEIGHT.light} text-justify text-gray-600 leading-relaxed`}>
                Our dedicated team does not just do marketing duties, we also
                learn all about the specific needs of your business. We help you
                research, plan and come up with new ideas for your approach in a
                completely transparent way, making sure that every solution we
                give you perfectly fits your specific digital and business
                goals. We are totally committed to delivering results that are
                valuable and can be measured, turning your problems into
                successes.
              </p>

              <p className={`${HERO_DESCRIPTION_SIZE} ${FONT_WEIGHT.light} text-justify text-gray-600 leading-relaxed`}>
                We have built a strong reputation in the market by working
                closely with our partners for their success. We look forward to
                building one with you.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Statistics Grid */}
          <motion.div
            variants={statsContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
          >
            <div className="grid grid-cols-2 gap-0 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2"></div>

              {stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="p-8 lg:p-12">
                  <StatItem
                    number={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={index * 150}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Client Logos Section - Smooth Infinite Scroll */}
      <motion.div
        variants={fadeInUpVariants}
        initial="initial"
        whileInView="animate"
        viewport={onceInViewPort}
      >
        <div className="border-t border-gray-200 pt-8">
          <div className="relative overflow-hidden">
            
            {/* Improved CSS for Smooth Scrolling Logos */}
            <style jsx global>{`
              @keyframes smoothScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .logo-scroll-track {
                display: flex;
                width: fit-content;
                animation: smoothScroll 10s linear infinite;
                will-change: transform;
              }

              .logo-scroll-track.paused {
                animation-play-state: paused;
              }

              .logo-scroll-wrapper {
                overflow: hidden;
                position: relative;
                width: 100%;
              }

              .logo-scroll-wrapper:hover .logo-scroll-track {
                animation-play-state: paused;
              }

              @media (max-width: 768px) {
                .logo-scroll-track {
                  animation: smoothScroll 20s linear infinite;
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .logo-scroll-track {
                  animation: none;
                }
              }
            `}</style>

            <div
              className="logo-scroll-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`logo-scroll-track ${isPaused ? 'paused' : ''}`}>
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex-shrink-0 px-6 md:px-8 lg:px-10 flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={140}
                      height={56}
                      className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      priority={index < 4}
                      draggable={false}
                    />
                  </div>
                ))}
                {/* Second set - seamless duplication */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex-shrink-0 px-6 md:px-8 lg:px-10 flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={140}
                      height={56}
                      className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustSection;