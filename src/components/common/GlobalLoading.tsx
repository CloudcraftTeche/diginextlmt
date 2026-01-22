"use client";
import React from "react";
import { useLoading } from "@/contexts/LoadingContext";
import Image from "next/image";

export const GlobalLoading: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Single spinning ring with gradient */}
        <div className="absolute inset-0 w-24 h-24">
          <svg
            className="animate-spin"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="spinnerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#spinnerGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="70"
              strokeDashoffset="0"
            />
          </svg>
        </div>

        {/* Static logo in center */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Image
            src="/assets/logos/Group.svg"
            alt="Loading"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
