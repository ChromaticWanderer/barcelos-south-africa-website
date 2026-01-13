/**
 * Barcelos India - Location Data
 *
 * Centralized location data for all restaurant locations.
 * This serves as the single source of truth for location information
 * across the website.
 *
 * TODO: Connect to CMS or API for dynamic location management
 */

/**
 * Location interface defining the structure for restaurant locations
 */
export interface Location {
  /** Unique identifier for the location (used in URLs) */
  id: string
  /** Display name of the restaurant */
  name: string
  /** Full street address */
  address: string
  /** City name */
  city: string
  /** State/Province */
  state: string
  /** Contact phone number */
  phone: string
  /** Operating hours - use PENDING_VERIFICATION marker if unconfirmed */
  hours: string
  /** Available services/amenities */
  features: string[]
  /** Geographic coordinates for map integration */
  coordinates?: {
    lat: number
    lng: number
  }
  /** Location image URL */
  image?: string
  /** Location-specific email address */
  email?: string
  /** Whether this location is currently active */
  isActive?: boolean
  /** Whether this location is featured on homepage */
  isFeatured?: boolean
}

/**
 * Verification status markers for data that needs confirmation
 */
export const VERIFICATION_MARKERS = {
  PENDING: "[PENDING_VERIFICATION]",
  CONFIRMED: "[CONFIRMED]",
  PLACEHOLDER: "[PLACEHOLDER]",
} as const

/**
 * All Barcelos India restaurant locations
 *
 * NOTE: Hours marked with PENDING_VERIFICATION
 * require confirmation from stakeholders before launch.
 */
export const locations: Location[] = [
  {
    id: "nagpur-shivaji-nagar",
    name: "Barcelos Nagpur",
    address: "244 Hill Road, Narayani House, Shivaji Nagar",
    city: "Nagpur",
    state: "Maharashtra",
    phone: "+91 8087656787",
    // TODO: Verify operating hours
    hours: "11:00 AM - 11:00 PM",
    features: ["Dine-in", "Takeaway", "Delivery"],
    coordinates: {
      // TODO: Verify exact coordinates
      lat: 21.1458,
      lng: 79.0882,
    },
    isActive: true,
    isFeatured: true,
  },
  {
    id: "bangalore-embassy-tech-village",
    name: "Barcelos Bengaluru",
    address: "Block E, Embassy Tech Village, Outer Ring Road",
    city: "Bangalore",
    state: "Karnataka",
    phone: "",
    // TODO: Verify operating hours
    hours: "11:00 AM - 11:00 PM",
    features: ["Dine-in", "Takeaway", "Delivery"],
    coordinates: {
      // TODO: Verify exact coordinates
      lat: 12.9352,
      lng: 77.6245,
    },
    isActive: true,
    isFeatured: true,
  },
]

/**
 * Get all active locations
 */
export function getActiveLocations(): Location[] {
  return locations.filter((loc) => loc.isActive !== false)
}

/**
 * Get featured locations for homepage display
 */
export function getFeaturedLocations(): Location[] {
  return locations.filter((loc) => loc.isFeatured === true && loc.isActive !== false)
}

/**
 * Get a single location by ID
 */
export function getLocationById(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id)
}

/**
 * Get locations by city
 */
export function getLocationsByCity(city: string): Location[] {
  return locations.filter(
    (loc) => loc.city.toLowerCase() === city.toLowerCase() && loc.isActive !== false
  )
}

/**
 * Get locations by state
 */
export function getLocationsByState(state: string): Location[] {
  return locations.filter(
    (loc) => loc.state.toLowerCase() === state.toLowerCase() && loc.isActive !== false
  )
}

/**
 * Check if a phone number is pending verification
 */
export function isPhonePendingVerification(phone: string): boolean {
  return phone.includes("[PENDING_VERIFICATION]") || phone.includes("[PLACEHOLDER]")
}

/**
 * Format location for display (city, state)
 */
export function formatLocationCityState(location: Location): string {
  return `${location.city}, ${location.state}`
}

export default locations
