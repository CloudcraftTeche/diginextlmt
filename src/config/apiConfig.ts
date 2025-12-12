export const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://diginextae.onrender.com/";
export const API_TIMEOUT: number = 10000;

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
} as const;
export const IS_MOCK_ENABLED=true