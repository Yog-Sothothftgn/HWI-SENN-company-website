import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.omega3resource.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
