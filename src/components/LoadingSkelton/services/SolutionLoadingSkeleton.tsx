import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const SolutionLoadingSkeleton = () => {
  return (
    <div className="animate-pulse bg-white">
      {/* Banner Skeleton */}
      <div className="w-full h-[40vh] md:h-[50vh] bg-gray-200 relative mb-12">
        <div className={`absolute inset-0 flex items-center ${SECTION_PX}`}>
          <div className="h-12 w-2/3 max-w-2xl bg-gray-300 rounded" />
        </div>
      </div>

      <div className={`${SECTION_PX} ${SECTION_PY}`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          {/* Main Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
