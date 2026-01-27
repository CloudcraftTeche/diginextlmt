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

import { API_BASE_URL } from "@/config/apiConfig";

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dfaffsfs9/";

const MediaDisplay: React.FC<MediaDisplayProps> = ({ src, alt, className }) => {
  // Prepend CLOUDINARY_BASE_URL if src starts with 'image/' (Cloudinary path from API)
  const finalSrc = src?.startsWith("image/")
    ? `${CLOUDINARY_BASE_URL}${src.startsWith("/") ? src.slice(1) : src}`
    : src;

  // Check for other relative paths that might need resolving or are local assets
  const isExternal = finalSrc?.startsWith("http");
  // If it's not external and doesn't start with '/', it might be invalid or need handling.
  // But local assets usually start with '/'.

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getMediaType = (url: string): "video" | "youtube" | "image" => {
    if (!url) return "image";
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return "youtube";
    if (url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg"))
      return "video";
    return "image";
  };

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
                onLoadingComplete={handleLoad}
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
