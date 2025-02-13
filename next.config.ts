import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: [
      "files.stripe.com",
    ]
  },

  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

export default nextConfig;
