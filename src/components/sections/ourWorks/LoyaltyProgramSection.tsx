import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React from "react";

interface LoyaltyProgramSectionProps {
  title: string;
  description: string;
}

const LoyaltyProgramSection: React.FC<LoyaltyProgramSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-6">
              Customer Rewards
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
              {description}
            </p>

            {/* Reward Cards Stack */}
            <div className="relative mt-12 h-64 flex items-center justify-center lg:justify-start">
              {/* Card 3 - Back */}
              <div className="absolute w-80 h-48 bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl shadow-xl transform rotate-6 opacity-60" />

              {/* Card 2 - Middle */}
              <div className="absolute w-80 h-48 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl shadow-xl transform rotate-3 opacity-80">
                <div className="p-6 text-white">
                  <p className="text-sm font-semibold mb-1">Reward Points</p>
                  <p className="text-3xl font-bold">350 Points</p>
                </div>
              </div>

              {/* Card 1 - Front */}
              <div className="relative w-80 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl transform -rotate-1">
                <div className="p-6 text-white h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold mb-1">Reward Points</p>
                    <p className="text-4xl font-bold">350 Points</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
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
                    <button className="text-sm font-semibold hover:underline">
                      See Benefits →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="relative w-full h-[600px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src={ImageConstants.WORKS.TEST.PHONE_MOCKUP_1}
                alt="Loyalty Program"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgramSection;
