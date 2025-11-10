"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface InviteHeroProps {
  title?: {
    part1: string;
    part2: string;
    part3: string;
  };
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const InviteHero: React.FC<InviteHeroProps> = ({
  title = {
    part1: "Invite",
    part2: "Inform",
    part3: "Involve",
  },
  description = "To create build and deploy innovative engaging and integrated and to end marketing strategies that will reflect and propel the business.",
  buttonText = "Lets Talk",
  buttonLink = "/contact",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-10 mt-18 bg-white overflow-hidden">
      <div className="relative w-full rounded-xl xs:rounded-2xl overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[550px]">
        {/* Background Image */}
        <Image
          alt="HeroBanner Background"
          src={ImageConstants.WORK_BANNER}
          fill
          className="object-cover"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Gradient Overlay */}

        {/* Content */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 h-full flex items-center py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Side - Empty space for visual balance */}
            <div></div>

            {/* Right Side - Content */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Title with dots */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight">
                <span className="text-white">{title.part1}</span>
                <span className="text-white/60 mx-2">.</span>
                <span className="text-white">{title.part2}</span>
                <span className="text-white/60 mx-2">.</span>
                <span className="text-white">{title.part3}</span>
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed font-light max-w-xl">
                {description}
              </p>

              {/* CTA Button */}
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-normal rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white focus:outline-none focus:ring-4 focus:ring-white/20 text-sm sm:text-base relative overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  {buttonText}
                </span>
                <svg
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteHero;
