"use client";
import React from "react";
import Image from "next/image";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  className?: string;
  backgorundImage?: string;
}

const HeroBanner = ({
  title = "Our Services",
  subtitle,
  className = "",
  backgorundImage,
}: HeroBannerProps) => {
  return (
    <section
      className={`relative min-h-[100px] sm:min-h-[100px] md:min-h-[200px] lg:min-h-[250px] flex items-end overflow-hidden ${className}`}
    >
      {/* Background Image */}
      {backgorundImage && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgorundImage}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Fallback gradient if no image */}
      {!backgorundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-900" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-600/40 to-pink-500/30" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-800/50 rounded-full blur-3xl" />
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-950/60 rounded-full blur-2xl" />
            <div
              className="absolute -top-32 right-0 w-full h-96 bg-gradient-to-br from-pink-500 to-pink-600 origin-top-right"
              style={{ transform: "rotate(-25deg) translateX(20%)" }}
            />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-white ">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-300/10 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default HeroBanner;
