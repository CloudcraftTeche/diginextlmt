import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const CTASkeleton = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      <div className={`relative z-10 max-w-[1750px] mx-auto ${SECTION_PX} sm:px-8 lg:px-12 xl:px-16`}>
        <div className="max-w-4xl animate-pulse space-y-8">
          {/* Title Skeleton */}
          <div className="space-y-4">
            <div className="h-12 w-3/4 bg-white/10 rounded-lg" />
            <div className="h-12 w-1/2 bg-white/10 rounded-lg" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-3 mt-6 max-w-3xl">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-2/3 bg-white/10 rounded" />
          </div>

          {/* Button Skeleton */}
          <div className="h-14 w-48 bg-white/10 rounded mt-8" />
        </div>
      </div>
    </section>
  );
};
