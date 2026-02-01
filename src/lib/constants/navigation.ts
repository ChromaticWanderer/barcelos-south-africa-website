/**
 * Navigation Constants - Barcelos South Africa
 *
 * Central configuration for site navigation
 * Multi-page architecture with dedicated pages for each section
 */

export interface NavItem {
  label: string
  href: string
  description?: string
  isExternal?: boolean
  isAnchor?: boolean
  children?: NavItem[]
}

/**
 * Primary navigation items
 * Links to dedicated pages for better SEO and analytics
 */
export const primaryNavItems: NavItem[] = [
  {
    label: "OUR STORY",
    href: "/our-story",
    description: "The flame-grilled journey from Portugal to South Africa",
  },
  {
    label: "FRANCHISE",
    href: "/franchise",
    description: "Partner with us",
  },
  {
    label: "CONTACT",
    href: "/contact",
    description: "Get in touch with us",
  },
]

/**
 * Secondary navigation items
 */
export const secondaryNavItems: NavItem[] = [
  {
    label: "CAREERS",
    href: "/careers",
    description: "Join the Barcelos family",
  },
  {
    label: "CATERING",
    href: "/catering",
    description: "Events and bulk orders",
  },
]

/**
 * Footer navigation sections
 */
export const footerNavSections = [
  {
    title: "EXPLORE",
    items: [
      { label: "OUR STORY", href: "/our-story" },
      { label: "ORDER ONLINE", href: "https://orders.barcelos.co.za", isExternal: true },
    ],
  },
  {
    title: "PARTNER",
    items: [
      { label: "FRANCHISE", href: "/franchise" },
      { label: "CATERING", href: "/catering" },
      { label: "CAREERS", href: "/careers" },
    ],
  },
  {
    title: "CONNECT",
    items: [
      { label: "CONTACT US", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { label: "PRIVACY POLICY", href: "/privacy-policy" },
      { label: "TERMS & CONDITIONS", href: "/terms-and-conditions" },
    ],
  },
]

/**
 * Social media links
 */
export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/barcelos_sa",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/BarcelosSA",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/barcelos_sa",
    icon: "twitter",
  },
]

/**
 * Order Now CTA configuration
 * Links to ServeUp ordering platform
 */
export const orderNowConfig = {
  label: "ORDER NOW",
  href: "https://orders.barcelos.co.za",
  isExternal: true,
  ariaLabel: "Order from Barcelos via ServeUp (opens in new tab)",
  /** ServeUp is live - set to false */
  comingSoon: false,
}
