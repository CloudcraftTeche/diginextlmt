import React from "react";

const FooterSkeleton = () => {
  return (
    <footer className="py-3 xs:py-4 sm:py-6 lg:py-8 bg-white relative z-[100]">
      <div className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-xl p-4 xs:p-5 sm:p-8 lg:p-12 animate-pulse">
          <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            {/* Newsletter Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center lg:text-left space-y-4">
                <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto lg:mx-0"></div>
                <div className="h-4 bg-gray-800 rounded w-full mx-auto lg:mx-0"></div>
                <div className="h-4 bg-gray-800 rounded w-2/3 mx-auto lg:mx-0"></div>
              </div>
              <div className="w-full">
                <div className="flex flex-row gap-0 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto h-12 bg-gray-800 rounded"></div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-800 mb-8 xs:mb-10 sm:mb-12 lg:mb-16"></div>

            {/* Main Content Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
              <div className="sm:col-span-2 lg:col-span-2 space-y-4">
                <div className="h-8 bg-gray-800 rounded w-1/3"></div>
                <div className="h-4 bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                <div className="h-4 bg-gray-800 rounded w-4/5"></div>
              </div>

              {/* Links Sections Skeletons */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="sm:col-span-2 lg:col-span-1 space-y-4">
                  <div className="h-6 bg-gray-800 rounded w-1/2 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-800 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-800 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-800 rounded w-3/5"></div>
                    <div className="h-3 bg-gray-800 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Skeleton */}
            <div className="mt-6 xs:mt-8 sm:mt-12 lg:mt-16 space-y-8">
              <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                <div className="h-4 bg-gray-800 rounded w-20"></div>
                <div className="h-4 bg-gray-800 rounded w-20"></div>
                <div className="h-4 bg-gray-800 rounded w-32"></div>
                <div className="h-4 bg-gray-800 rounded w-20"></div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex-1 h-px bg-gray-800 mr-8"></div>
                <div className="flex space-x-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gray-800 rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="flex-1 h-px bg-gray-800 ml-8"></div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="h-4 bg-gray-800 rounded w-64"></div>
                <div className="h-4 bg-gray-800 rounded w-96"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
