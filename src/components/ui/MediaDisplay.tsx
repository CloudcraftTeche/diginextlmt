"use client";

import { Loader2, ImageOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// --- Reusable Media Component ---
interface MediaDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

import { IMAGE_BASE_URL } from "@/config/apiConfig";
import { getMediaType } from "@/lib/imageUtils";

const MediaDisplay: React.FC<MediaDisplayProps> = ({ src, alt, className }) => {
  const finalSrc = src?.startsWith("image/")
    ? `${IMAGE_BASE_URL}${src.startsWith("/") ? src.slice(1) : src}`
    : src;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const mediaType = getMediaType(finalSrc);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div
      className={`relative w-full h-full bg-gray-100 overflow-hidden ${className}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}

      {/* Fallback for Errors */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400 z-20">
          <ImageOff className="w-10 h-10 mb-2" />
          <span className="text-sm">Media not available</span>
        </div>
      )}

      {!hasError && (
        <>
          {mediaType === "image" ? (
            <div className="relative w-full h-full group">
              <Image
                src={finalSrc}
                alt={alt}
                fill
                className={`object-cover transition-transform duration-700  ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 800px"
                onLoad={handleLoad}
                onError={handleError}
              />
            </div>
          ) : mediaType === "youtube" ? (
            <iframe
              src={`${finalSrc}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              allow="autoplay; encrypted-media"
              style={{ border: "none", pointerEvents: "none" }}
              title={alt}
              onLoad={handleLoad}
              onError={handleError}
            />
          ) : (
            <video
              src={finalSrc}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoadedData={handleLoad}
              onError={handleError}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MediaDisplay;
