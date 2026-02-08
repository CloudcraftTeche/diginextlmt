// components/sections/location/LocationSection.tsx
import MediaDisplay from "@/components/ui/MediaDisplay";

import { Location } from "@/types/location";

interface LocationSectionProps {
  data: Location;
}

export default function LocationSection({ data }: LocationSectionProps) {
  // Use video_url if available, otherwise image
  const mediaSrc = data.video_url || data.image;

  // Split description by newlines to create paragraphs
  // Handle \r\n, \n, and filter out empty strings
  const paragraphs = data.description
    ? data.description.split(/\r?\n/).filter((p) => p.trim().length > 0)
    : [];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Media */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="sticky top-8">
              <div className="w-full lg:w-130 aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <MediaDisplay src={mediaSrc} alt={data.heading} />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              {data.heading}
            </h1>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
