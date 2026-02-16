import React from "react";

export const PortfolioGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="animate-pulse">
          {/* Image Card */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-200" />

          {/* Content */}
          <div className="space-y-3">
            {/* Meta */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>

            {/* Title */}
            <div className="h-6 w-3/4 bg-gray-200 rounded" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
