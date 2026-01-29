export const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://diginextae-1.onrender.com/";
export const API_TIMEOUT: number = 10000;
export const IMAGE_BASE_URL: string =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://res.cloudinary.com/dfaffsfs9/";

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
} as const;
export const IS_MOCK_ENABLED = false;
export const API = "/api";
