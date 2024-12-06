import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
        port: "",
        pathname: "/**"
      },
      {
        hostname: "avatar.iran.liara.run",
        protocol: "https",
        port: "",
        pathname: "/public/**"
      }
    ]
  }
};

export default nextConfig;
