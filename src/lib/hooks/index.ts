/**
 * Barcelos India - Custom Hooks
 *
 * Central export point for all custom React hooks.
 * Import from '@/lib/hooks' for consistent access.
 *
 * @example
 * ```tsx
 * import { useLocations } from '@/lib/hooks'
 *
 * function LocationsList() {
 *   const { featuredLocations, getByCity } = useLocations()
 *   // ...
 * }
 * ```
 */

// Location management hook
export { useLocations } from "./use-locations"
export type {
  UseLocationsReturn,
  LocationFilters,
  LocationSortOption,
} from "./use-locations"
