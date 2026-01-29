import React from "react";
import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PX,
  SECTION_PY,
} from "@/constants/layoutConstants";

export const BrandingMarketingSkeleton = () => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="w-full animate-pulse">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xs:gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Image Skeleton */}
            <div className="lg:col-span-2 relative">
              <div className="relative w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[400px] lg:max-w-lg mx-auto lg:mx-0">
                <div className="w-full h-[350px] bg-gray-200 rounded-2xl ml-16" />
              </div>
            </div>

            {/* Right Content Skeleton */}
            <div className="lg:col-span-3">
              {/* Title + Description */}
              <div className="mb-4 xs:mb-6 sm:mb-8">
                <div className="h-10 w-3/4 bg-gray-200 rounded mb-6" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-5/6 bg-gray-100 rounded" />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                {/* Branding & Graphic Design */}
                <div className="space-y-3">
                  <div className="h-6 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-3/4 bg-gray-100 rounded" />
                </div>

                {/* Photography, Videography & Print */}
                <div className="space-y-3">
                  <div className="h-6 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-3/4 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 xs:mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
            {/* Content Development */}
            <div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
              </div>
            </div>

            {/* DigiNext Focus Radial Block */}
            <div className="bg-gray-800 rounded-xl xs:rounded-2xl h-[200px]" />
          </div>

          {/* Additional IT Services Section */}
          <div className="mt-8 xs:mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
            {/* IT Consultancy in Dubai */}
            <div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
              </div>
            </div>

            {/* Partner with DigiNext */}
            <div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
