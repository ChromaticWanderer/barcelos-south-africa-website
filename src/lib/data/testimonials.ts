/**
 * Barcelos India - Testimonials Data
 *
 * Centralized testimonials/reviews data for customer feedback display.
 * This serves as the single source of truth for testimonial information
 * across the website.
 *
 * TODO: Connect to review aggregation API or CMS for dynamic updates
 * TODO: Add real testimonials when provided by stakeholder
 */

/**
 * Rating type - only 4 and 5 star ratings are displayed
 */
export type TestimonialRating = 4 | 5

/**
 * Source platforms for testimonials
 */
export type TestimonialSource = "google" | "zomato" | "swiggy" | "internal"

/**
 * Source platform display names and icons
 */
export const TESTIMONIAL_SOURCE_INFO: Record<
  TestimonialSource,
  { name: string; icon: string }
> = {
  google: { name: "Google Reviews", icon: "google" },
  zomato: { name: "Zomato", icon: "zomato" },
  swiggy: { name: "Swiggy", icon: "swiggy" },
  internal: { name: "Barcelos India", icon: "barcelos" },
}

/**
 * Location options for testimonials
 */
export type TestimonialLocation = "Nagpur" | "Bangalore" | "India"

/**
 * Testimonial interface defining the structure for customer reviews
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string
  /** Customer name - First name + last initial for privacy (e.g., "Rahul S.") */
  customerName: string
  /** Location of the review */
  location: TestimonialLocation
  /** Rating (4 or 5 stars only) */
  rating: TestimonialRating
  /** Review text */
  review: string
  /** Date of the review in ISO format */
  date: string
  /** Source platform */
  source: TestimonialSource
  /** Whether the review has been verified */
  verified: boolean
  /** Optional: Customer avatar/image URL */
  avatar?: string
  /** Optional: Highlighted/featured testimonial */
  isFeatured?: boolean
  /** Optional: Menu item or experience being reviewed */
  reviewedItem?: string
}

/**
 * Verification markers for testimonial data
 */
export const TESTIMONIAL_MARKERS = {
  PENDING: "[PENDING_REVIEW]",
  NEEDS_PERMISSION: "[NEEDS_PERMISSION]",
  PLACEHOLDER: "[PLACEHOLDER]",
} as const

/**
 * Placeholder testimonials
 *
 * NOTE: These are PLACEHOLDER entries and MUST be replaced with
 * real, verified customer reviews before launch.
 *
 * TODO: Obtain permission and real reviews from:
 * - Google Reviews for both locations
 * - Zomato reviews
 * - Swiggy reviews
 * - Direct customer feedback
 */
export const testimonials: Testimonial[] = [
  // PLACEHOLDER - Replace with real testimonials
  {
    id: "placeholder-1",
    customerName: "[PENDING_REVIEW]",
    location: "Nagpur",
    rating: 5,
    review:
      "[PLACEHOLDER] Real customer review to be added. This is placeholder text for layout testing purposes only.",
    date: "2024-01-01",
    source: "google",
    verified: false,
    isFeatured: true,
    reviewedItem: "Flame-Grilled Chicken",
  },
  {
    id: "placeholder-2",
    customerName: "[PENDING_REVIEW]",
    location: "Bangalore",
    rating: 5,
    review:
      "[PLACEHOLDER] Real customer review to be added. This is placeholder text for layout testing purposes only.",
    date: "2024-01-01",
    source: "zomato",
    verified: false,
    isFeatured: true,
  },
  {
    id: "placeholder-3",
    customerName: "[PENDING_REVIEW]",
    location: "Nagpur",
    rating: 4,
    review:
      "[PLACEHOLDER] Real customer review to be added. This is placeholder text for layout testing purposes only.",
    date: "2024-01-01",
    source: "swiggy",
    verified: false,
  },
]

/**
 * Get all testimonials
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials
}

/**
 * Get verified testimonials only
 */
export function getVerifiedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.verified === true)
}

/**
 * Get featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.isFeatured === true)
}

/**
 * Get testimonials by location
 */
export function getTestimonialsByLocation(
  location: TestimonialLocation
): Testimonial[] {
  return testimonials.filter((t) => t.location === location)
}

/**
 * Get testimonials by source platform
 */
export function getTestimonialsBySource(
  source: TestimonialSource
): Testimonial[] {
  return testimonials.filter((t) => t.source === source)
}

/**
 * Get testimonials by rating
 */
export function getTestimonialsByRating(
  rating: TestimonialRating
): Testimonial[] {
  return testimonials.filter((t) => t.rating === rating)
}

/**
 * Get recent testimonials (sorted by date, newest first)
 * @param limit Number of testimonials to return
 */
export function getRecentTestimonials(limit?: number): Testimonial[] {
  const sorted = [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}

/**
 * Get testimonials for homepage display
 * Returns featured, verified testimonials sorted by date
 */
export function getHomepageTestimonials(limit = 6): Testimonial[] {
  // In production, filter for verified only
  // For now, return featured testimonials
  const featured = getFeaturedTestimonials()
  const recent = getRecentTestimonials()

  // Prioritize featured, then fill with recent
  const combined = [
    ...featured,
    ...recent.filter((t) => !featured.some((f) => f.id === t.id)),
  ]

  return combined.slice(0, limit)
}

/**
 * Check if a testimonial is a placeholder
 */
export function isPlaceholderTestimonial(testimonial: Testimonial): boolean {
  return (
    testimonial.customerName.includes("[PENDING") ||
    testimonial.customerName.includes("[PLACEHOLDER]") ||
    testimonial.review.includes("[PLACEHOLDER]")
  )
}

/**
 * Format testimonial date for display
 */
export function formatTestimonialDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  })
}

/**
 * Get source display info
 */
export function getSourceInfo(source: TestimonialSource): {
  name: string
  icon: string
} {
  return TESTIMONIAL_SOURCE_INFO[source]
}

/**
 * Calculate average rating from testimonials
 */
export function getAverageRating(): number {
  if (testimonials.length === 0) return 0
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0)
  return Math.round((sum / testimonials.length) * 10) / 10
}

/**
 * Get testimonial count by source
 */
export function getTestimonialCountBySource(): Record<TestimonialSource, number> {
  return {
    google: testimonials.filter((t) => t.source === "google").length,
    zomato: testimonials.filter((t) => t.source === "zomato").length,
    swiggy: testimonials.filter((t) => t.source === "swiggy").length,
    internal: testimonials.filter((t) => t.source === "internal").length,
  }
}

export default testimonials
