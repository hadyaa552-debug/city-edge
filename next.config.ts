import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cityedgedevelopments.com",
      },
    ],
  },
};

export default nextConfig;
