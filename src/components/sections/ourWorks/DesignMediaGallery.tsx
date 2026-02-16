"use client";

import React from "react";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import MediaDisplay from "@/components/ui/MediaDisplay";

interface MediaItem {
  id: number;
  image: string;
  video?: string;
}

interface DesignMediaGalleryProps {
  images: MediaItem[];
}

const DesignMediaGallery: React.FC<DesignMediaGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Alternating pattern: wide, square, square (repeats every 3 items)
  const getMediaLayout = (index: number): string => {
    const pattern = index % 3;
    switch (pattern) {
      case 0:
        return "col-span-2 aspect-[2/1]"; // Wide
      case 1:
      case 2:
        return "col-span-1 aspect-square"; // Square
      default:
        return "col-span-1 aspect-square";
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((media, index) => {
            const layoutClass = getMediaLayout(index);
            const mediaUrl = media.video || media.image;

            return (
              <div
                key={media.id}
                className={`${layoutClass} group overflow-hidden rounded-lg bg-gray-100 relative`}
              >
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <MediaDisplay
                    src={getImageWithPlaceholder(mediaUrl)}
                    alt={`Design media ${index + 1}`}
                    className="w-full h-full"
                  />
                </div>

                {/* Optional overlay effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignMediaGallery;
