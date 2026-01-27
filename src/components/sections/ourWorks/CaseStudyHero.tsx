import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { HeroSection } from "@/lib/portfolioData";
import React from "react";

interface CaseStudyHeroProps {
  data: any; // Relaxed type
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data }) => {
  const { title, industry, description, heroImage } = data;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={getImageWithPlaceholder(heroImage)}
          alt={title ? `${title} Hero` : "Hero Image"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50" />
      </div>

      <div className="relative z-10 h-full flex items-end px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-4xl">
          {industry && (
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 uppercase tracking-wider mb-6">
              {industry}
            </span>
          )}

          {title && (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-4">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-4 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
