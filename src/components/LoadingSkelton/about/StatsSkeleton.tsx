import React from "react";
import { SECTION_PX } from "@/constants/layoutConstants";

export const StatsSkeleton = () => {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className={`relative z-10 max-w-[1750px] mx-auto ${SECTION_PX} py-0 sm:px-8 lg:px-12 xl:px-16`}>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center h-screen">
          {/* Left column - Content Skeleton */}
          <div className="space-y-6 order-1 mt-25 lg:mt-0 lg:order-1 animate-pulse">
            <div className="h-16 w-3/4 bg-white/10 rounded-lg" />
            <div className="h-16 w-1/2 bg-white/10 rounded-lg" />
            <div className="space-y-3 mt-6">
              <div className="h-4 w-full bg-white/10 rounded" />
              <div className="h-4 w-5/6 bg-white/10 rounded" />
            </div>
          </div>

          {/* Right column - Stats Skeleton */}
          <div className="relative h-[60vh] flex items-center justify-center order-2 lg:order-2 animate-pulse">
            <div className="w-[300px] h-[300px] rounded-full bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
};
