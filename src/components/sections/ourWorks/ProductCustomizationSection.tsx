import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React from "react";

const ProductCustomizationSection = ({
  title = "Customise Products as Desired",
  description = "The app lets users easily add their preferred features of the product, and customise them according to their preferences. With a user-friendly interface, the app helps shoppers customise the products they wish to purchase with their preferred combinations.",
}) => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT – Mobile App Preview */}
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] flex justify-center">
          <Image
            src={ImageConstants.WORKS.TEST.MOBILE_1}
            alt="Product Customization App Preview"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT – Content */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            Major Features
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizationSection;
