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
  delay, // Delay is now managed by Framer Motion stagger, but kept for counter logic compatibility
}) => {
  // Keeping the complex counter logic but removing the Intersection Observer
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    // We only run the counter once the component is mounted (which is handled by whileInView in the parent)
    const targetNumber = parseInt(number);
    if (isNaN(targetNumber)) return;
    
    const duration = 1000;
    const steps = 50;
    const increment = targetNumber / steps;
    let current = 0;

    // Use a delay to ensure the counter starts slightly after the element fades in
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
    }, delay); // Using the delay prop here to stagger the counters

    return () => clearTimeout(startTimeout);
  }, [number, delay]);

  return (
    <motion.div
      ref={itemRef}
      variants={statItemVariants} // Apply item variant for staggered entry
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
  // Simplified state: Only need state for hover pause
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false); // Kept for cursor styling
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Removed Intersection Observer logic (now using motion.div whileInView)

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

  // Mouse drag handlers (Simplified, relying on mouse down/up/move/leave for control)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true); // Pause animation on interaction start
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume animation 1 second after mouse interaction ends
    setTimeout(() => setIsPaused(false), 1000); 
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    // Resume animation 1 second after touch interaction ends
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section 
      id="trust-section" 
      className={`${SECTION_PX} ${SECTION_PY} bg-white overflow-hidden`} // Use layout constants
    >
      <div className={CONTENT_WRAPPER_CLASSES}> {/* Use layout constant */}
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          
          {/* Left Side - Title and Description */}
          <motion.div
            variants={fadeInUpVariants} // Use entry animation
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
            variants={statsContainerVariants} // Use container variant for staggering
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
                    delay={index * 150} // Stagger delay for the counter effect
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Client Logos Section - Manual Scrolling with Faster Auto Scroll */}
      <motion.div
        variants={fadeInUpVariants} // Use entry animation
        initial="initial"
        whileInView="animate"
        viewport={onceInViewPort}
      >
        <div className="border-t border-gray-200 pt-8">
          <div className="relative overflow-hidden">
            
            {/* Consolidated CSS for Scrolling Logos */}
            <style jsx global>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-scroll {
                animation: scroll 8s linear infinite;
                will-change: transform;
              }

              .animate-scroll.paused {
                animation-play-state: paused;
              }

              @media (max-width: 768px) {
                .animate-scroll {
                  animation: scroll 6s linear infinite;
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .animate-scroll {
                  animation: none;
                }
              }

              .logo-scroll-wrapper {
                cursor: grab;
                user-select: none;
                overflow-x: auto;
                overflow-y: hidden;
              }

              .logo-scroll-wrapper:active {
                cursor: grabbing;
              }

              .logo-scroll-wrapper::-webkit-scrollbar {
                display: none;
              }

              .logo-scroll-wrapper {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }

              .logo-track {
                  min-width: 200%; /* Ensure duplication works */
              }
              
            `}</style>

            <div
              ref={scrollContainerRef}
              className="logo-scroll-wrapper"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                handleMouseUp();
                if (!isDragging) setIsPaused(false);
              }}
            >
              <div
                className={`flex logo-track ${
                  isPaused ? "animate-scroll paused" : "animate-scroll"
                }`}
              >
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 px-2 sm:px-2 md:px-4 lg:px-5"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={48}
                      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain opacity-100"
                      priority={index < 4}
                      draggable={false}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.name}-duplicate-${index}`}
                    className="flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={48}
                      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain opacity-100"
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