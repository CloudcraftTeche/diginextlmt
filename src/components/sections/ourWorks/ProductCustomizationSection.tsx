import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { ProductCustomizationSection as ProductCustomizationSectionData } from "@/lib/portfolioData";

import Image from "next/image";
import MediaDisplay from "@/components/ui/MediaDisplay";
import React from "react";

interface ProductCustomizationSectionProps {
  data: any; // Relaxed type
}

const ProductCustomizationSection: React.FC<
  ProductCustomizationSectionProps
> = ({ data }) => {
  const subtitle = data.subtitle || data.title; // Page maps label->title->subtitle
  const title = data.title || data.heading; // Page maps title->heading->title
  const description = data.description;

  // Extract images from features if not at root
  const image = data.image || data.features?.[0]?.image;
  const image_2 = data.image_2 || data.features?.[1]?.image;

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT – Phone Mockups */}
          <div className="w-full flex justify-center lg:justify-start gap-10">
            {/* Phone 1 */}
            <div className="relative w-[180px] sm:w-[240px] lg:w-[300px] aspect-[9/19]">
              <div className="absolute inset-0 border-[6px] sm:border-[8px] border-black rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden bg-white">
                <MediaDisplay
                  src={image}
                  alt={`${title} preview 1`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Phone 2 */}
            <div className="relative w-[180px] sm:w-[240px] lg:w-[300px] aspect-[9/19]">
              <div className="absolute inset-0 border-[6px] sm:border-[8px] border-black rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden bg-white">
                <MediaDisplay
                  src={image_2}
                  alt={`${title} preview 2`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT – Content */}
          <div className="w-full text-center lg:text-left">
            <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              {subtitle}
            </h3>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl lg:max-w-none">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizationSection;
