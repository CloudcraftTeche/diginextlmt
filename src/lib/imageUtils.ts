// src/lib/imageUtils.ts

import { API_BASE_URL } from "@/config/apiConfig";

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
  const baseUrl = API_BASE_URL.endsWith("/")
    ? API_BASE_URL.slice(0, -1)
    : API_BASE_URL;

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
