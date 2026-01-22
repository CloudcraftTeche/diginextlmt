import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const HeroLoadingSkelton: React.FC = () => {
  return (
    <section
      id="hero-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className="w-full bg-black via-black to-gray-800 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-10 relative overflow-hidden">
        <div className={CONTENT_WRAPPER_CLASSES}>
          <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 lg:gap-8 xl:gap-10 2xl:gap-12 items-start lg:items-center min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[420px]">
            {/* Loading skeleton for image */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start items-center">
              <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square bg-gray-800 rounded-lg animate-pulse" />
            </div>

            {/* Loading skeleton for content */}
            <div className="w-full lg:w-7/12 space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-32 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-8 bg-gray-800 rounded-full animate-pulse" />
                <div className="h-2 w-2 bg-gray-800 rounded-full animate-pulse" />
                <div className="h-2 w-2 bg-gray-800 rounded-full animate-pulse" />
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-40 bg-gray-800 rounded-full animate-pulse" />
                <div className="h-10 w-40 bg-gray-800 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
