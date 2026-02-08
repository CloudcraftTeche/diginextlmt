import React from "react";
import { SECTION_PX, SECTION_PY } from "@/constants/layoutConstants";

export const BlogListingSkeleton = () => {
  return (
    <div className={`bg-gray-50 ${SECTION_PY} ${SECTION_PX}`}>
      <div className="max-w-[1750px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-3 w-16 bg-gray-200 rounded" />
                </div>
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogDetailSkeleton = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full bg-gray-100 animate-pulse">
        <div
          className={`absolute inset-0 flex flex-col justify-center ${SECTION_PX}`}
        >
          <div className="h-10 w-1/3 bg-gray-200 rounded mb-4" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className={`${SECTION_PY}`}>
        <div className={`max-w-[1750px] mx-auto ${SECTION_PX}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="h-96 w-full bg-gray-100 rounded-xl animate-pulse" />
              <div className="flex gap-4">
                <div className="h-4 w-20 bg-gray-100 rounded" />
                <div className="h-4 w-20 bg-gray-100 rounded" />
                <div className="h-4 w-20 bg-gray-100 rounded" />
              </div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-3/4 bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
