import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const WorksSkeleton = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      {/* Hero Skeleton - Matching HeroBanner height */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-gray-100 animate-pulse">
        <div
          className={`absolute inset-0 flex flex-col justify-center ${SECTION_PX}`}
        >
          <div className="h-10 w-48 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Portfolio Grid Skeleton */}
      <div className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
        <div className="max-w-[1750px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 animate-pulse">
            <div>
              <div className="h-8 w-40 bg-gray-100 rounded mb-2" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                {/* Image Card */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100" />

                {/* Content */}
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-16 bg-gray-100 rounded" />
                    <div className="h-3 w-3 bg-gray-100 rounded-full" />
                    <div className="h-3 w-20 bg-gray-100 rounded" />
                  </div>

                  {/* Title */}
                  <div className="h-6 w-3/4 bg-gray-100 rounded" />

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
