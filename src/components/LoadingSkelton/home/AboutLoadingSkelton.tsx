export const AboutLoadingSkelton: React.FC = () => {
  return (
    <section
      id="trust-section"
      className="px-4 sm:px-6 lg:px-8 bg-white overflow-hidden pt-[clamp(1rem,5vw,4rem)] lg:pt-2"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-6">
          {/* Left Side - Title and Description Skeleton */}
          <div className="space-y-6">
            {/* Title Skeleton */}
            <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse" />

            {/* Description Skeleton */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side - Statistics Grid Skeleton */}
          <div className="grid grid-cols-2 gap-0 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2" />

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-8 lg:p-8">
                <div className="text-center space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-20 mx-auto animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Section Skeleton */}
      <div className="border-t mb:p3 lg:p-6">
        <div className="relative overflow-hidden py-4">
          <div className="flex gap-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-32 h-16 bg-gray-200 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
