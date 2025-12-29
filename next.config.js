/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Prioritize AVIF (smallest) then WebP, fallback to original
    formats: ["image/avif", "image/webp"],
    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Smaller image sizes for thumbnails and icons
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Long cache for optimized images
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable optimization (Next.js will convert to AVIF/WebP)
    unoptimized: false,
    // Image optimization settings
    loader: 'default',
    // Maximum image width (prevents oversized images)
    domains: [],
  },
  // Enable strict mode for better development
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Compress output
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Performance optimizations
  poweredByHeader: false,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
