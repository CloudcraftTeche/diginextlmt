import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React from "react";

const LoyaltyProgramSection = ({
  title = "Loyalty we serve to our customers",
  description = "Caribou coffee app lets customers redeem points for rewards like complimentary brewed coffee, upgrades in size, and more. The 'My Rewards' section in the app enables users to build up balance points and redeem them for exciting rewards like size upgrades, free bakery products, growlers, or beans.",
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Loyalty Cards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Stacked Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Card 3 - Back */}
            <div className="absolute w-80 h-48 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl shadow-lg transform rotate-6 opacity-60" />

            {/* Card 2 - Middle */}
            <div className="absolute w-80 h-48 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg transform rotate-3 opacity-80">
              <div className="p-6 text-white">
                <p className="text-sm font-semibold mb-1">Reward Points</p>
                <p className="text-3xl font-bold mb-4">350 Points</p>
              </div>
            </div>

            {/* Card 1 - Front */}
            <div className="relative w-80 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl transform -rotate-1">
              <div className="p-6 text-white h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold mb-1">Reward Points</p>
                  <p className="text-4xl font-bold">350 Points</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold">
                      Sapphire Member
                    </span>
                  </div>

                  <button className="text-sm font-semibold hover:underline flex items-center gap-1">
                    See Benefits
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Preview */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] flex justify-center">
            <Image
              src={ImageConstants.WORKS.TEST.MOBILE_3}
              alt="Product Customization App Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgramSection;
