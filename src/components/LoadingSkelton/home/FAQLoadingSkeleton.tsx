import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const FAQLoadingSkeleton = () => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="bg-blue-50 rounded-xl xs:rounded-2xl">
          <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side - Title and Description */}
              <div className="lg:pr-4">
                <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-6" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>

              {/* Right Side - FAQ Items */}
              <div className="space-y-3 lg:space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-4 sm:p-5"
                  >
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
