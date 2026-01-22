import React from "react";
import { UXDesignSection as UXDesignSectionData } from "@/lib/portfolioData";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import Image from "next/image";

interface UXDesignSectionProps {
  data: UXDesignSectionData;
}

const UXDesignSection: React.FC<UXDesignSectionProps> = ({ data }) => {
  const { subtitle, title, description, features, backgroundImage } = data;

  return (
    <>
      {/* Image Section */}
      <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src={getImageWithPlaceholder(backgroundImage)}
          alt="UX Design Background"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              {subtitle}
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-8">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-62 overflow-hidden">
                  <img
                    src={getImageWithPlaceholder(feature.image)}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {feature.subtitle && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-md">
                      <p className="text-xs font-bold text-gray-900">
                        {feature.subtitle}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UXDesignSection;
