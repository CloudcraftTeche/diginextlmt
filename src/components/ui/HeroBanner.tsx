"use client";
import React from "react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const HeroBanner = ({
  title = "Our Services",
  subtitle,
  className = "",
}: HeroBannerProps) => {
  return (
    <section
      className={`relative min-h-[300px] flex items-center justify-start overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-800">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-bl from-pink-500 via-purple-500 to-blue-600 transform rotate-12 origin-top-right scale-150" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full h-1/3">
          <div className="w-full h-full bg-gradient-to-t from-purple-900/60 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-300/10 rounded-full blur-lg animate-pulse delay-1000" />
    </section>
  );
};

export default HeroBanner;
