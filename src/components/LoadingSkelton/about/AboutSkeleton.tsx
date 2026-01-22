import React from "react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

export const AboutSkeleton = () => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="space-y-4 animate-pulse">
          <div className="h-10 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </section>
  );
};
