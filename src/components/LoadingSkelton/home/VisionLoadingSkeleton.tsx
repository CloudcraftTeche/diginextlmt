import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const VisionLoadingSkeleton = () => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      {/* Black Background Container */}
      <div className="w-full bg-black rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-8 lg:p-12 relative overflow-hidden h-[800px] lg:h-[700px]">
        {/* Content Wrapper */}
        <div className={`${CONTENT_WRAPPER_CLASSES} h-full`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative z-10">
            {/* Left Side - Text Skeleton */}
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
              {/* Title */}
              <div className="h-10 w-48 bg-gray-800 rounded-lg animate-pulse mb-4" />

              {/* Main Description Lines */}
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse" />
              </div>

              {/* Secondary Description Lines */}
              <div className="space-y-3 pt-4">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>

            {/* Right Side - 3D Sphere Placeholder */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center h-full">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                {/* Circle indicating the sphere */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-800 opacity-20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-gray-800 opacity-20 animate-pulse" />

                {/* Floating Orbitals */}
                <div className="absolute top-1/2 left-1/2 w-[120%] h-[40%] -translate-x-1/2 -translate-y-1/2 border border-gray-700 rounded-[100%] opacity-20 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-[120%] h-[40%] -translate-x-1/2 -translate-y-1/2 border border-gray-700 rounded-[100%] opacity-20 -rotate-45" />

                {/* Loading Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-700 font-light text-sm tracking-widest animate-pulse">
                    LOADING VISION...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
