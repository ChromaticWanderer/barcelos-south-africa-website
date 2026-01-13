"use client"

/**
 * Barcelos India - useLocations Hook
 *
 * Custom React hook for accessing and managing location data.
 * Provides a consistent interface for location data across components.
 *
 * TODO: Add real-time location availability checking
 * TODO: Integrate with geolocation for nearest location
 */

import { useState, useMemo, useCallback } from "react"
import {
  locations,
  Location,
  getActiveLocations,
  getFeaturedLocations,
  getLocationsByCity,
  getLocationsByState,
  getLocationById,
  isPhonePendingVerification,
  formatLocationCityState,
} from "@/lib/data/locations"

/**
 * Sorting options for locations
 */
export type LocationSortOption = "name" | "city" | "state"

/**
 * Filter options for locations
 */
export interface LocationFilters {
  city?: string
  state?: string
  features?: string[]
  isActive?: boolean
}

/**
 * Hook return type
 */
export interface UseLocationsReturn {
  /** All locations */
  locations: Location[]
  /** Active locations only */
  activeLocations: Location[]
  /** Featured locations for homepage */
  featuredLocations: Location[]
  /** Loading state (for future API integration) */
  loading: boolean
  /** Error state */
  error: string | null
  /** Get locations by city */
  getByCity: (city: string) => Location[]
  /** Get locations by state */
  getByState: (state: string) => Location[]
  /** Get a single location by ID */
  getById: (id: string) => Location | undefined
  /** Find nearest location (requires coordinates) */
  findNearest: (lat: number, lng: number) => Location | null
  /** Filter locations */
  filterLocations: (filters: LocationFilters) => Location[]
  /** Sort locations */
  sortLocations: (locations: Location[], by: LocationSortOption) => Location[]
  /** Get unique cities */
  cities: string[]
  /** Get unique states */
  states: string[]
  /** Get all available features across locations */
  allFeatures: string[]
  /** Check if a location's phone is verified */
  isPhoneVerified: (location: Location) => boolean
  /** Format location for display */
  formatCityState: (location: Location) => string
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param lat1 Latitude of point 1
 * @param lng1 Longitude of point 1
 * @param lat2 Latitude of point 2
 * @param lng2 Longitude of point 2
 * @returns Distance in kilometers
 */
function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * useLocations Hook
 *
 * Provides access to location data with filtering, sorting, and utility functions.
 *
 * @example
 * ```tsx
 * const { featuredLocations, getByCity, findNearest } = useLocations()
 *
 * // Get featured locations for homepage
 * featuredLocations.map(loc => <LocationCard key={loc.id} location={loc} />)
 *
 * // Filter by city
 * const nagpurLocations = getByCity('Nagpur')
 *
 * // Find nearest location
 * const nearest = findNearest(userLat, userLng)
 * ```
 */
export function useLocations(): UseLocationsReturn {
  // These would be used for future API integration
  const [loading] = useState(false)
  const [error] = useState<string | null>(null)

  // Memoize the base location data
  const allLocations = useMemo(() => locations, [])
  const activeLocations = useMemo(() => getActiveLocations(), [])
  const featuredLocations = useMemo(() => getFeaturedLocations(), [])

  // Extract unique cities
  const cities = useMemo(() => {
    const uniqueCities = new Set(allLocations.map((loc) => loc.city))
    return Array.from(uniqueCities).sort()
  }, [allLocations])

  // Extract unique states
  const states = useMemo(() => {
    const uniqueStates = new Set(allLocations.map((loc) => loc.state))
    return Array.from(uniqueStates).sort()
  }, [allLocations])

  // Extract all unique features
  const allFeatures = useMemo(() => {
    const uniqueFeatures = new Set(allLocations.flatMap((loc) => loc.features))
    return Array.from(uniqueFeatures).sort()
  }, [allLocations])

  // Find nearest location based on coordinates
  const findNearest = useCallback(
    (lat: number, lng: number): Location | null => {
      const locationsWithCoords = activeLocations.filter(
        (loc) => loc.coordinates
      )

      if (locationsWithCoords.length === 0) return null

      let nearest: Location | null = null
      let minDistance = Infinity

      for (const location of locationsWithCoords) {
        if (location.coordinates) {
          const distance = calculateDistance(
            lat,
            lng,
            location.coordinates.lat,
            location.coordinates.lng
          )
          if (distance < minDistance) {
            minDistance = distance
            nearest = location
          }
        }
      }

      return nearest
    },
    [activeLocations]
  )

  // Filter locations based on criteria
  const filterLocations = useCallback(
    (filters: LocationFilters): Location[] => {
      let filtered = [...allLocations]

      if (filters.city) {
        filtered = filtered.filter(
          (loc) => loc.city.toLowerCase() === filters.city!.toLowerCase()
        )
      }

      if (filters.state) {
        filtered = filtered.filter(
          (loc) => loc.state.toLowerCase() === filters.state!.toLowerCase()
        )
      }

      if (filters.features && filters.features.length > 0) {
        filtered = filtered.filter((loc) =>
          filters.features!.every((feature) => loc.features.includes(feature))
        )
      }

      if (filters.isActive !== undefined) {
        filtered = filtered.filter(
          (loc) => (loc.isActive ?? true) === filters.isActive
        )
      }

      return filtered
    },
    [allLocations]
  )

  // Sort locations
  const sortLocations = useCallback(
    (locs: Location[], by: LocationSortOption): Location[] => {
      return [...locs].sort((a, b) => {
        switch (by) {
          case "name":
            return a.name.localeCompare(b.name)
          case "city":
            return a.city.localeCompare(b.city)
          case "state":
            return a.state.localeCompare(b.state)
          default:
            return 0
        }
      })
    },
    []
  )

  // Check if phone is verified
  const isPhoneVerified = useCallback((location: Location): boolean => {
    return !isPhonePendingVerification(location.phone)
  }, [])

  return {
    locations: allLocations,
    activeLocations,
    featuredLocations,
    loading,
    error,
    getByCity: getLocationsByCity,
    getByState: getLocationsByState,
    getById: getLocationById,
    findNearest,
    filterLocations,
    sortLocations,
    cities,
    states,
    allFeatures,
    isPhoneVerified,
    formatCityState: formatLocationCityState,
  }
}

export default useLocations
