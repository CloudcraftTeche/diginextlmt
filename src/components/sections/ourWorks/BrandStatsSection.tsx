import React from "react";
import { BrandStatsSection as BrandStatsSectionData } from "@/lib/portfolioData";
import { getImageWithPlaceholder } from "@/lib/utils";

interface BrandStatsSectionProps {
  data: BrandStatsSectionData;
}

const BrandStatsSection: React.FC<BrandStatsSectionProps> = ({ data }) => {
  const { backgroundImage, title, description, stats } = data;

  return (
    <section className="w-full bg-gray-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-10">
          <img
            src={getImageWithPlaceholder(backgroundImage)}
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-tight mb-10 max-w-3xl">
          {title}
        </h2>

        {/* Description */}
        <div className="mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-blue-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStatsSection;
