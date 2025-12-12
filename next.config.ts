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
        hostname: "diginextae.onrender.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
