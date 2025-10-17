"use client";

import React, { useState, useRef } from "react";
import {
  Rocket,
  Camera,
  Target,
  Users,
  Lightbulb,
  Heart,
  Award,
  TrendingUp,
} from "lucide-react";

interface JourneyItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function JourneyValuesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const journeyItems: JourneyItem[] = [
    {
      id: "01",
      number: "01",
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Story",
      description:
        "We at DigiNext believe that technology is more than just a tool; it's the foundation of a successful. What initially began as a small idea has turned into one of Dubai's top IT solution companies.",
    },
    {
      id: "02",
      number: "02",
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "Our mission is to empower businesses through innovative digital solutions that drive growth and transformation. We strive to be the trusted partner in your digital journey.",
    },
    {
      id: "03",
      number: "03",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that keep you ahead of the competition in the ever-evolving digital landscape.",
    },
    {
      id: "04",
      number: "04",
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships by deeply understanding your business needs and delivering tailored solutions that exceed expectations.",
    },
    {
      id: "05",
      number: "05",
      icon: <Heart className="w-8 h-8" />,
      title: "Quality & Excellence",
      description:
        "We are committed to delivering exceptional quality in every project. Our attention to detail and dedication to excellence sets us apart in the industry.",
    },
    {
      id: "06",
      number: "06",
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "With hundreds of successful projects delivered across various industries, we have established ourselves as a reliable technology partner you can trust.",
    },
    {
      id: "07",
      number: "07",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      description:
        "We don't just deliver projects; we deliver results that contribute to your business growth and help you achieve your strategic objectives.",
    },
    {
      id: "08",
      number: "08",
      icon: <Camera className="w-8 h-8" />,
      title: "Creative Solutions",
      description:
        "Our creative team brings fresh perspectives and innovative ideas to every challenge, ensuring your brand stands out in the digital world.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Section - Left Aligned with max-width container */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-12 lg:mb-16">
          <div className="flex items-start">
            <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 lg:mb-6">
            Our Journey & Values
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-3xl">
            Discover the story behind DigiNext and what drives us to deliver
            exceptional IT solutions and creative services.
          </p>
        </div>

        {/* Horizontal Scrolling Container - Full Width */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className={`flex gap-6 lg:gap-8 ${
              !isPaused ? "animate-scroll-journey" : ""
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* First set of items */}
            {journeyItems.map((item, index) => (
              <div
                key={`${item.id}-1`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4 text-orange-500 group-hover:text-orange-400 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl lg:text-2xl font-light mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 h-[2px] w-16 bg-white/20 group-hover:bg-orange-500 group-hover:w-24 transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="relative z-10 text-sm lg:text-base text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {journeyItems.map((item, index) => (
              <div
                key={`${item.id}-2`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4 text-orange-500 group-hover:text-orange-400 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl lg:text-2xl font-light mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="relative z-10 h-[2px] w-16 bg-white/20 group-hover:bg-orange-500 group-hover:w-24 transition-all duration-300 mb-4" />

                {/* Description */}
                <p className="relative z-10 text-sm lg:text-base text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-journey {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-journey {
          animation: scroll-journey 12s linear infinite;
        }
      `}</style>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
