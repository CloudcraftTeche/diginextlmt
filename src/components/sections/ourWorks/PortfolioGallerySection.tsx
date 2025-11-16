"use client";
import React from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  title?: string;
}

interface PortfolioGallerySectionProps {
  images: GalleryImage[];
}

const PortfolioGallerySection: React.FC<PortfolioGallerySectionProps> = ({
  images,
}) => {
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
                className="relative w-full aspect-[4/3] bg-white"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGallerySection;
