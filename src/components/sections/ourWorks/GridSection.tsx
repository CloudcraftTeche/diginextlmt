// GridSection.tsx
import React from "react";
import { GridSection as GridSectionData } from "@/lib/portfolioData";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import Image from "next/image";

interface GridSectionProps {
  data: GridSectionData;
}

const GridSection: React.FC<GridSectionProps> = ({ data }) => {
  const { title, description, images } = data;

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT – Text Content */}
          <div className="w-full text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl lg:max-w-none">
              {description}
            </p>
          </div>

          {/* RIGHT – Grid of Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`
                  ${index === 0 ? "col-span-2" : "col-span-1"}
                  ${index === 0 ? "aspect-[2/1]" : "aspect-square"}
                  bg-gray-100 rounded-2xl overflow-hidden
                  hover:shadow-lg transition-all duration-300
                  relative
                `}
              >
                <Image
                  src={getImageWithPlaceholder(image.image)}
                  alt={image.alt || `Grid image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
