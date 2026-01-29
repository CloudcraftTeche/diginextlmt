// src/lib/imageUtils.ts

import { IMAGE_BASE_URL } from "@/config/apiConfig";

/**
 * Constructs full image URL from API response
 * @param imagePath - Image path from API (e.g., "/media/banners/image.jpg")
 * @returns Full image URL or original path if already absolute
 */
export const getFullImageUrl = (imagePath: string): string => {
  if (!imagePath) return "";

  // If already a full URL, return as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // If it's a local asset (starts with /assets/), return as is
  if (imagePath.startsWith("/assets/")) {
    return imagePath;
  }

  // Remove trailing slash from base URL if present
  const baseUrl = IMAGE_BASE_URL.endsWith("/")
    ? IMAGE_BASE_URL.slice(0, -1)
    : IMAGE_BASE_URL;

  // Ensure path starts with /
  const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;

  return `${baseUrl}${path}`;
};

/**
 * Gets image with placeholder for Next.js Image component
 * @param imagePath - Image path from API
 * @returns Image URL with placeholder fallback
 */
export const getImageWithPlaceholder = (imagePath: string): string => {
  if (!imagePath) {
    return "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000";
  }

  return getFullImageUrl(imagePath);
};

/**
 * Extracts hostname from URL for Next.js image configuration
 * @param url - Full URL or base URL
 * @returns Hostname without protocol
 */
export const extractHostname = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return "";
  }
};

export const getMediaType = (url: string): "video" | "youtube" | "image" => {
  if (!url) return "image";
  if (url.includes("youtube.com") || url.includes("youtu.be"))
    return "youtube";
  if (url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg"))
    return "video";
  return "image";
};