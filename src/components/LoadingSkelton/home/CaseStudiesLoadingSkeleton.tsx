import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  DIVIDER_STYLE,
} from "@/constants/layoutConstants";

export const CaseStudiesLoadingSkeleton = () => {
  return (
    <section className={`${SECTION_PY} ${SECTION_PX} bg-white overflow-hidden`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        {/* Header Section Skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="flex flex-col xl:flex-row xl:items-center xl:gap-8">
            {/* Title */}
            <div className="flex-shrink-0 mb-4 xl:mb-0">
              <div className="h-10 w-72 bg-gray-200 rounded" />
            </div>

            {/* Divider */}
            <div className={`hidden xl:block ${DIVIDER_STYLE}`} />

            {/* Subtitle */}
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="h-4 w-full max-w-lg bg-gray-100 rounded mb-2" />
              <div className="h-4 w-3/4 max-w-lg bg-gray-100 rounded" />
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <div className="h-12 w-32 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 mt-4" />
        </div>

        {/* Case Studies Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="relative w-full aspect-[4/3] bg-gray-200" />

              {/* Content Skeleton */}
              <div className="p-6">
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
                <div className="space-y-2 mb-6">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-5/6 bg-gray-100 rounded" />
                  <div className="h-4 w-4/6 bg-gray-100 rounded" />
                </div>
                <div className="h-5 w-24 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
