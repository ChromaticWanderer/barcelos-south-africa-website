/**
 * Site Constants - Barcelos India
 *
 * Central configuration for site-wide constants.
 * This file serves as the single source of truth for:
 * - Site metadata
 * - Contact information
 * - External links and integrations
 * - Brand assets
 * - Social media handles
 *
 * IMPORTANT: Items marked with [PLACEHOLDER] or [PENDING_VERIFICATION]
 * require stakeholder input before production launch.
 */

/**
 * Placeholder markers for data requiring verification
 */
export const PLACEHOLDER_MARKERS = {
  PENDING: "[PLACEHOLDER]",
  VERIFICATION_NEEDED: "[PENDING_VERIFICATION]",
} as const

export const siteConfig = {
  name: "Barcelos India",
  tagline: "Where Flame Meets Flavour",
  description:
    "Experience authentic Portuguese flame-grilled chicken at Barcelos India. Premium quality, bold flavours, and the signature Peri-Peri taste perfected for Indian palates.",
  url: "https://www.barcelos.co.in",
  ogImage: "/images/og-image.jpg",

  /**
   * Contact Information
   *
   * TODO: Verify all contact details with stakeholders before launch
   * Items marked [PLACEHOLDER] need real values from business team
   */
  contact: {
    // Primary customer service email
    email: "barcelos.india@barcelos.com",
    // Support email for customer issues
    supportEmail: "barcelos.india@barcelos.com",
    // Franchise inquiry email
    franchiseEmail: "barcelos.india@barcelos.com",
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
     * PetPooja Online Ordering URL
     *
     * TODO: Replace with actual PetPooja ordering URL when provided
     * This URL will be used for all "Order Online" CTAs across the site
     *
     * Expected format: https://app.petpooja.com/barcelos-india or similar
     */
    petpoojaUrl: "https://order.barcelosindia.com [PLACEHOLDER - AWAITING_PETPOOJA_URL]",

    /**
     * Alternative ordering platforms (if applicable)
     */
    swiggyUrl: "[PLACEHOLDER - AWAITING_SWIGGY_PARTNER_URL]",
    zomatoUrl: "[PLACEHOLDER - AWAITING_ZOMATO_PARTNER_URL]",

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
   *
   * TODO: Verify all social handles are correct and active
   */
  social: {
    instagram: "@barcelosindia",
    instagramUrl: "https://instagram.com/barcelosindia",
    facebook: "barcelosindia",
    facebookUrl: "https://facebook.com/barcelosindia",
    twitter: "@barcelosindia",
    twitterUrl: "https://twitter.com/barcelosindia",
    // TODO: Add YouTube, LinkedIn if applicable
    youtube: "[PLACEHOLDER]",
    linkedin: "[PLACEHOLDER]",
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
    holder: "Barcelos India",
    text: "All rights reserved.",
  },

  /**
   * SEO and Meta Configuration
   */
  seo: {
    titleTemplate: "%s | Barcelos India",
    defaultTitle: "Barcelos India - Authentic Portuguese Flame-Grilled Chicken",
    defaultDescription:
      "Experience authentic Portuguese flame-grilled chicken at Barcelos India. Premium quality, bold flavours, and the signature Peri-Peri taste.",
    keywords: [
      "Barcelos",
      "Portuguese chicken",
      "flame-grilled chicken",
      "peri-peri",
      "Barcelos India",
      "grilled chicken restaurant",
      "fast casual dining",
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
      "30+ years of heritage. 17+ countries. One fantastic product. Fast-casual dining with soul.",
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
        "A legacy of flavour that began in South Africa, rooted in Portuguese grilling traditions.",
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
    viewMenu: "VIEW MENU",
    findStore: "FIND A RESTAURANT",
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
