import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const InsightsSkeleton = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative h-[250px] min-h-[200px] w-full bg-gray-100 animate-pulse">
        <div
          className={`absolute inset-0 flex flex-col justify-end pb-8 ${SECTION_PX}`}
        >
          <div className="h-10 w-48 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-96 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Case Studies Grid Skeleton */}
      <div className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
        <div className="max-w-[1750px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:gap-8 mb-12 animate-pulse">
            <div className="flex-shrink-0 mb-4 xl:mb-0">
              <div className="h-10 w-64 bg-gray-100 rounded" />
            </div>
            <div className="hidden xl:block w-px h-12 bg-gray-200 mx-8" />
            <div className="flex-1">
              <div className="h-4 w-full max-w-2xl bg-gray-100 rounded" />
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 mt-4 mb-8" />

          {/* Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                {/* Image Card */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100" />

                {/* Content */}
                <div className="space-y-3">
                  {/* Title */}
                  <div className="h-8 w-3/4 bg-gray-100 rounded" />

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                  </div>

                  {/* Button */}
                  <div className="h-6 w-32 bg-gray-100 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
