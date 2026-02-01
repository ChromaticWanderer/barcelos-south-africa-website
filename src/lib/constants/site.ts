/**
 * Site Constants - Barcelos South Africa
 *
 * Central configuration for site-wide constants.
 * This file serves as the single source of truth for:
 * - Site metadata
 * - Contact information
 * - External links and integrations
 * - Brand assets
 * - Social media handles
 */

/**
 * Placeholder markers for data requiring verification
 */
export const PLACEHOLDER_MARKERS = {
  PENDING: "[PLACEHOLDER]",
  VERIFICATION_NEEDED: "[PENDING_VERIFICATION]",
} as const

export const siteConfig = {
  name: "Barcelos South Africa",
  tagline: "Where Flame Meets Flavour",
  description:
    "Experience authentic Portuguese flame-grilled chicken at Barcelos. Since 1993, we've been South Africa's home of Afro-Portuguese peri-peri perfection.",
  url: "https://www.barcelos.co.za",
  ogImage: "/images/og-image.jpg",

  /**
   * Contact Information
   */
  contact: {
    // Primary customer service email
    email: "info@barcelos.co.za",
    // Support email for customer issues
    supportEmail: "support@barcelos.co.za",
    // Franchise inquiry email
    franchiseEmail: "franchise@barcelos.co.za",
    // Response time commitment
    emailResponseTime: "24 hours",
  },

  /**
   * External Links and Integrations
   *
   * URLs for third-party services and ordering platforms
   */
  links: {
    /**
     * ServeUp Online Ordering URL
     * Primary ordering platform for South Africa
     */
    serveUpUrl: "https://orders.barcelos.co.za",

    /**
     * Google Maps base URL for location links
     */
    googleMapsBase: "https://www.google.com/maps/search/",

    /**
     * Privacy and legal pages
     */
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
  },

  /**
   * Social Media Handles
   */
  social: {
    instagram: "@barcelos_sa",
    instagramUrl: "https://instagram.com/barcelos_sa",
    facebook: "BarcelosSA",
    facebookUrl: "https://facebook.com/BarcelosSA",
    twitter: "@barcelos_sa",
    twitterUrl: "https://twitter.com/barcelos_sa",
    youtube: "BarcelosSA",
    youtubeUrl: "https://youtube.com/@BarcelosSA",
    linkedin: "barcelos-sa",
    linkedinUrl: "https://linkedin.com/company/barcelos-sa",
  },

  /**
   * Brand Assets
   *
   * Paths to brand imagery and logos
   */
  brand: {
    logoLight: "/images/brand/barcelos-logo.svg",
    logoDark: "/images/brand/barcelos-logo-white.svg",
    logoIcon: "/images/brand/barcelos-icon.svg",
    favicon: "/favicon.ico",
    // Apple touch icon for iOS
    appleTouchIcon: "/apple-touch-icon.png",
  },

  /**
   * Copyright Information
   */
  copyright: {
    year: new Date().getFullYear(),
    holder: "Barcelos South Africa",
    text: "All rights reserved.",
  },

  /**
   * SEO and Meta Configuration
   */
  seo: {
    titleTemplate: "%s | Barcelos South Africa",
    defaultTitle: "Barcelos South Africa - Authentic Portuguese Flame-Grilled Chicken",
    defaultDescription:
      "Experience authentic Portuguese flame-grilled chicken at Barcelos. Since 1993, South Africa's home of Afro-Portuguese peri-peri perfection.",
    keywords: [
      "Barcelos",
      "Portuguese chicken",
      "flame-grilled chicken",
      "peri-peri",
      "Barcelos South Africa",
      "grilled chicken restaurant",
      "fast casual dining",
      "South African franchise",
    ],
  },
}

/**
 * Brand messaging constants
 */
export const brandMessages = {
  hero: {
    headline: "AUTHENTIC AFRO-PORTUGUESE FLAME GRILLED CHICKEN",
    subheadline:
      "30+ years of heritage. 17+ countries. Born in South Africa. Fast-casual dining with soul.",
  },
  whyBarcel: [
    {
      title: "FLAME-GRILLED CRAFT",
      description:
        "Every piece is flame-grilled to perfection, locking in juices and creating that signature char.",
      icon: "flame",
    },
    {
      title: "PORTUGUESE HERITAGE",
      description:
        "A legacy of flavour born in South Africa, rooted in Portuguese grilling traditions since 1993.",
      icon: "globe",
    },
    {
      title: "PREMIUM QUALITY",
      description:
        "We source only the finest ingredients because great taste starts with great quality.",
      icon: "award",
    },
  ],
  cta: {
    orderNow: "ORDER NOW",
    orderOnline: "ORDER ONLINE",
    learnMore: "LEARN MORE",
    franchiseInquiry: "ENQUIRE NOW",
  },
}

/**
 * Animation timing constants
 */
export const animationConfig = {
  fast: 150,
  base: 200,
  slow: 300,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
}

/**
 * Helper function to check if a value is a placeholder
 */
export function isPlaceholder(value: string): boolean {
  return (
    value.includes("[PLACEHOLDER]") ||
    value.includes("[PENDING_VERIFICATION]") ||
    value.includes("[AWAITING")
  )
}

/**
 * Helper to get clean contact value (strips placeholder markers for display)
 * Note: Only use this for display - always verify placeholders are replaced before launch
 */
export function getDisplayValue(value: string): string {
  return value
    .replace(/\s*\[PLACEHOLDER.*?\]/g, "")
    .replace(/\s*\[PENDING_VERIFICATION\]/g, "")
    .replace(/\s*\[AWAITING.*?\]/g, "")
    .trim()
}
