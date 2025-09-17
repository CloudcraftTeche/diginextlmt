"use client";

import { useEffect } from "react";

// Define a more specific type for structured data
type StructuredDataValue =
  | string
  | number
  | boolean
  | null
  | StructuredDataValue[]
  | { [key: string]: StructuredDataValue };

interface StructuredDataProps {
  data: Record<string, StructuredDataValue>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  useEffect(() => {
    // Remove any existing structured data script
    const existingScript = document.querySelector(
      'script[type="application/ld+json"][data-structured-data]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Create new structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-structured-data", "true");
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(
        'script[type="application/ld+json"][data-structured-data]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};
