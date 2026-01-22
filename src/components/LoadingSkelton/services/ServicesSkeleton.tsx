import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const ServicesSkeleton = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full bg-white/5 animate-pulse">
        <div
          className={`absolute inset-0 flex flex-col justify-center ${SECTION_PX}`}
        >
          <div className="h-10 w-1/3 bg-white/10 rounded mb-4" />
          <div className="h-4 w-1/4 bg-white/10 rounded" />
        </div>
      </div>

      {/* Services List Skeleton */}
      <div className={`${SECTION_PY} relative z-10`}>
        <div
          className={`max-w-[1750px] mx-auto ${SECTION_PX} sm:px-8 lg:px-12 xl:px-16`}
        >
          {/* Header */}
          <div className="mb-16 md:mb-24 animate-pulse">
            <div className="h-4 w-32 bg-white/10 rounded mb-6" />
            <div className="h-12 w-1/2 bg-white/10 rounded mb-6" />
            <div className="h-4 w-3/4 bg-white/10 rounded" />
          </div>

          {/* List Items */}
          <div className="space-y-32">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-pulse"
              >
                <div
                  className={`h-[400px] bg-white/5 rounded-2xl ${i % 2 === 0 ? "lg:order-2" : ""}`}
                />
                <div className={`space-y-6 ${i % 2 === 0 ? "lg:order-1" : ""}`}>
                  <div className="h-8 w-1/3 bg-white/10 rounded" />
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/10 rounded" />
                    <div className="h-4 w-full bg-white/10 rounded" />
                    <div className="h-4 w-3/4 bg-white/10 rounded" />
                  </div>
                  <div className="h-12 w-40 bg-white/10 rounded mt-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
