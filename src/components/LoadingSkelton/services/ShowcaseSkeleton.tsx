import React from "react";
import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PY,
} from "@/constants/layoutConstants";

export const ShowcaseSkeleton = () => {
  return (
    <section className={`${SECTION_PY} bg-white overflow-hidden`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="flex flex-col">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start mb-24 lg:mb-32 animate-pulse ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image skeleton */}
              <div className="w-full lg:w-[480px] xl:w-[580px] lg:flex-shrink-0">
                <div className="w-full aspect-square rounded-2xl bg-gray-200" />
              </div>

              {/* Content skeleton */}
              <div className="w-full flex-1 pt-6 space-y-6">
                {/* Title */}
                <div className="h-9 w-48 bg-gray-200 rounded-lg" />
                {/* Description lines */}
                <div className="space-y-3 max-w-2xl">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                </div>
                {/* Service list items */}
                <div className="space-y-6 pt-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-5 w-56 bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
