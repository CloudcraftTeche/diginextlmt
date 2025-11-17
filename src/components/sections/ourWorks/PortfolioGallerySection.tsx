"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  category?: string;
}

interface PortfolioGallerySectionProps {
  images: GalleryImage[];
}

const PortfolioGallerySection: React.FC<PortfolioGallerySectionProps> = ({
  images,
}) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [images.length]);

  return (
    <>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the visual journey of this project through our curated
              collection of images
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`group relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay - Only Category */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* Category Badge */}
                  {image.category && (
                    <div className="transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-xl">
                        {image.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGallerySection;
