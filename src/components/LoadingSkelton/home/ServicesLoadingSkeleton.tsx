import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const ServicesLoadingSkeleton = () => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="flex flex-col items-center animate-pulse">
          {/* Section Title Skeleton */}
          <div className="h-10 w-64 bg-gray-200 rounded mb-3" />

          {/* Subtitle Skeleton */}
          <div className="h-4 w-full max-w-2xl bg-gray-100 rounded mb-2" />
          <div className="h-4 w-3/4 max-w-2xl bg-gray-100 rounded mb-10" />

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative flex flex-col p-7 lg:p-8 bg-white border border-gray-100 rounded-2xl h-[300px]"
              >
                {/* Title Skeleton */}
                <div className="h-8 w-3/4 bg-gray-200 rounded mb-4" />

                {/* Description Skeleton */}
                <div className="space-y-2 flex-grow">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-5/6 bg-gray-100 rounded" />
                </div>

                {/* Arrow/Link Skeleton */}
                <div className="mt-auto h-6 w-32 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
