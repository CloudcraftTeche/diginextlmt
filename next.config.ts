import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "diginextae-1.onrender.com",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
