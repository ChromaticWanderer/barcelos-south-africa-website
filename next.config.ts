import type { NextConfig } from "next"

/**
 * Barcelos India - Next.js Configuration
 *
 * Optimized configuration for performance, image handling, and build output.
 */
const nextConfig: NextConfig = {
  /**
   * Image Optimization Configuration
   *
   * - Enables modern image formats (AVIF, WebP) for smaller file sizes
   * - Defines device and image sizes for responsive images
   * - Sets cache TTL for optimized images
   */
  images: {
    // Enable modern image formats for better compression
    formats: ["image/avif", "image/webp"],

    // Device sizes for srcset generation (viewport widths)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Image sizes for srcset generation (fixed image widths)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL in seconds (1 hour)
    minimumCacheTTL: 3600,

    // Remote image patterns (add external domains as needed)
    remotePatterns: [
      // TODO: Add CDN domain when configured
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.barcelos.co.in',
      //   pathname: '/images/**',
      // },
    ],
  },

  /**
   * React Strict Mode
   *
   * Enables additional development-time checks and warnings.
   * Helps identify potential problems in the application.
   */
  reactStrictMode: true,

  /**
   * Powered By Header
   *
   * Disable X-Powered-By header for security
   */
  poweredByHeader: false,

  /**
   * Compression
   *
   * Enable gzip compression for responses
   */
  compress: true,

  /**
   * Experimental Features
   *
   * Enable experimental features as needed
   */
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
    ],
  },

  /**
   * TypeScript Configuration
   *
   * Build will fail on type errors in production
   */
  typescript: {
    // Type checking during build (recommended for production)
    ignoreBuildErrors: false,
  },

  /**
   * Headers Configuration
   *
   * Security and caching headers
   */
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

export default nextConfig
