import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["@remotion/renderer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.lumacdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "**",
      },
    ],
  },
   webpack: (config) => {
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader',
    })
    return config
  },
};

export default nextConfig;
