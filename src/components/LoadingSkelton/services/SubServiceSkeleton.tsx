import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const SubServiceSkeleton = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Skeleton (Banner) */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full bg-white/5 animate-pulse">
        <div
          className={`absolute inset-0 flex flex-col justify-center ${SECTION_PX}`}
        >
          <div className="h-10 w-1/3 bg-white/10 rounded mb-4" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className={`${SECTION_PY}`}>
        <div className={`max-w-[1750px] mx-auto ${SECTION_PX}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Image */}
            <div className="h-[400px] w-full bg-white/5 rounded-2xl animate-pulse" />

            {/* Right: Text */}
            <div className="space-y-6">
              <div className="h-8 w-2/3 bg-white/10 rounded animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
