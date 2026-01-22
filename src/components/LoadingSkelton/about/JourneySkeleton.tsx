import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const JourneySkeleton = () => {
  return (
    <section className={`relative bg-black text-white ${SECTION_PY}`}>
      <div className={`relative z-10 max-w-[1750px] mx-auto ${SECTION_PX} sm:px-8 lg:px-12 xl:px-16 mb-12 lg:mb-16`}>
        <div className="animate-pulse space-y-8">
          {/* Icon placeholder */}
          <div className="h-8 w-8 bg-white/10 rounded-full" />
          
          {/* Title placeholder */}
          <div className="h-12 w-1/3 bg-white/10 rounded-lg" />
          
          {/* Description placeholder */}
          <div className="space-y-3 max-w-2xl">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-3/4 bg-white/10 rounded" />
          </div>
        </div>

        {/* Cards Skeleton Row */}
        <div className="flex gap-6 lg:gap-8 overflow-hidden mt-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] h-[300px] animate-pulse"
            >
              <div className="h-8 w-8 bg-white/10 rounded-full mb-4" />
              <div className="h-8 w-1/2 bg-white/10 rounded mb-6" />
              <div className="space-y-3">
                <div className="h-24 w-full bg-white/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
