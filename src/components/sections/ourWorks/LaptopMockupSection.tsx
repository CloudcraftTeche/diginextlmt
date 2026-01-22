import React from "react";
import { LaptopMockupSection as LaptopMockupSectionData } from "@/lib/portfolioData";
import { getImageWithPlaceholder } from "@/lib/imageUtils";

interface BrandStatsSectionProps {
  data: LaptopMockupSectionData;
}

const LaptopMockupSection: React.FC<BrandStatsSectionProps> = ({ data }) => {
  const { backgroundImage, title, description } = data;

  return (
    <section className="w-full bg-gray-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
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
        <div className="mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaptopMockupSection;
