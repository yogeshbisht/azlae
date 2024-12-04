import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
        protocol: "https",
        port: "",
        pathname: "/photos/**"
      }
    ]
  }
};

export default nextConfig;
