/**
 * Navigation Constants - Barcelos India
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
    description: "The flame-grilled journey from Portugal to India",
  },
  {
    label: "LOCATIONS",
    href: "/locations",
    description: "Find a Barcelos near you",
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
      { label: "LOCATIONS", href: "/locations" },
      { label: "MENU", href: "/menu" },
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
      { label: "FIND A STORE", href: "/locations" },
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
    href: "https://instagram.com/barcelosindia",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/barcelosindia",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/barcelosindia",
    icon: "twitter",
  },
]

/**
 * Order Now CTA configuration
 * Links to PetPooja ordering platform
 * TODO: Replace placeholder URL with actual PetPooja URL when provided
 * Set comingSoon to false when PetPooja integration is ready
 */
export const orderNowConfig = {
  label: "ORDER NOW",
  comingSoonLabel: "COMING SOON : ORDER NOW",
  href: "https://petpooja.com/barcelos-india", // Placeholder - to be updated
  isExternal: true,
  ariaLabel: "Order from Barcelos via PetPooja (opens in new tab)",
  /** Set to false when PetPooja ordering is ready to go live */
  comingSoon: true,
}
