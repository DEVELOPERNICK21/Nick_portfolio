/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better development
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
};

module.exports = nextConfig;
