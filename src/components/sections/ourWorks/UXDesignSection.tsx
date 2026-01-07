import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React from "react";

const UXDesignSection = ({
  title = "Superior UX Design",
  description = "The app offers users real-time order status, information about the new products, pop-ups, and the option to choose rewards. With an intuitive interface and superior UX that facilitates ease of purchase and payment, users have a highly engaging experience.",
  features = [
    {
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop",
      title: "ORDER PREPARING",
      subtitle: "Expected at 03:00 PM",
      description: "Real-time order tracking with estimated preparation time",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=400&fit=crop",
      title: "Select the emoji that matches with your mood",
      description: "Personalized experience based on customer mood",
    },
    {
      image:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&h=400&fit=crop",
      title: "REAL CHOCOLATE CHIPS!",
      description: "Featured product promotions and seasonal items",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
      title: "CHOOSE YOUR PERFECT CUP OF JOY",
      description: "Easy category navigation for quick ordering",
    },
  ],
}) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src={ImageConstants.WORKS.TEST.SOCIAL_BANNER_1}
        alt="UX Design Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl overflow-hidden
                shadow-md
                transition-all duration-300
                hover:shadow-2xl hover:-translate-y-2
              "
            >
              {/* Feature Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {feature.subtitle && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg">
                    <p className="text-xs font-semibold text-gray-900">
                      {feature.subtitle}
                    </p>
                  </div>
                )}
              </div>

              {/* Feature Content */}
              <div className="p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
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
  );
};

export default UXDesignSection;
