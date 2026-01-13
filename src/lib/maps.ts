/**
 * Google Maps Integration Utility
 *
 * Required Environment Variables:
 * - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: Your Google Maps JavaScript API key
 *
 * Required APIs (enabled in Google Cloud Console):
 * - Maps JavaScript API
 * - Places API
 * - Geocoding API
 */

export interface StoreCoordinates {
  lat: number;
  lng: number;
}

export interface StoreAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Store {
  id: string;
  name: string;
  address: StoreAddress;
  coordinates: StoreCoordinates;
  phone: string;
  email: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  orderUrl: string;
  features: string[];
  image: string;
}

// Google Maps Script Loading
let isGoogleMapsLoaded = false;
let googleMapsLoadPromise: Promise<void> | null = null;

/**
 * Dynamically loads the Google Maps JavaScript API
 * Only loads once even if called multiple times
 */
export function loadGoogleMapsScript(): Promise<void> {
  if (isGoogleMapsLoaded) {
    return Promise.resolve();
  }

  if (googleMapsLoadPromise) {
    return googleMapsLoadPromise;
  }

  googleMapsLoadPromise = new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Google Maps can only be loaded in browser environment'));
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined'));
      return;
    }

    // Check if already loaded
    if (window.google?.maps) {
      isGoogleMapsLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      isGoogleMapsLoaded = true;
      resolve();
    };

    script.onerror = () => {
      reject(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(script);
  });

  return googleMapsLoadPromise;
}

/**
 * Generates a Google Maps embed URL for a given location
 * @param coordinates - The lat/lng coordinates
 * @param zoom - Map zoom level (default: 15)
 * @returns Google Maps embed URL
 */
export function generateEmbedUrl(
  coordinates: StoreCoordinates,
  zoom: number = 15
): string {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined');
    return '';
  }

  const { lat, lng } = coordinates;
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`;
}

/**
 * Generates a Google Maps embed URL using place/address
 * @param address - Full address string
 * @param zoom - Map zoom level (default: 15)
 * @returns Google Maps embed URL
 */
export function generateEmbedUrlFromAddress(
  address: string,
  zoom: number = 15
): string {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined');
    return '';
  }

  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=${zoom}`;
}

/**
 * Generates a Google Maps directions URL
 * @param coordinates - Destination coordinates
 * @param storeName - Name of the store (for display)
 * @returns Google Maps directions URL
 */
export function generateDirectionsUrl(
  coordinates: StoreCoordinates,
  storeName?: string
): string {
  const { lat, lng } = coordinates;
  const query = storeName
    ? encodeURIComponent(`${storeName} ${lat},${lng}`)
    : `${lat},${lng}`;

  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

/**
 * Generates a Google Maps directions URL using address
 * @param address - Full destination address
 * @returns Google Maps directions URL
 */
export function generateDirectionsUrlFromAddress(address: string): string {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
}

/**
 * Generates a Google Maps search URL
 * @param query - Search query (address, place name, etc.)
 * @returns Google Maps search URL
 */
export function generateSearchUrl(query: string): string {
  const encodedQuery = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
}

/**
 * Formats a store address into a single string
 * @param address - Store address object
 * @returns Formatted address string
 */
export function formatAddress(address: StoreAddress): string {
  return `${address.line1}, ${address.line2}, ${address.city}, ${address.state} ${address.pincode}`;
}

/**
 * Calculates distance between two coordinates (Haversine formula)
 * @param coords1 - First coordinate
 * @param coords2 - Second coordinate
 * @returns Distance in kilometers
 */
export function calculateDistance(
  coords1: StoreCoordinates,
  coords2: StoreCoordinates
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Finds the nearest store to given coordinates
 * @param userCoords - User's current coordinates
 * @param stores - Array of stores
 * @returns Nearest store and distance
 */
export function findNearestStore(
  userCoords: StoreCoordinates,
  stores: Store[]
): { store: Store; distance: number } | null {
  if (stores.length === 0) return null;

  let nearest = stores[0];
  let minDistance = calculateDistance(userCoords, stores[0].coordinates);

  for (let i = 1; i < stores.length; i++) {
    const distance = calculateDistance(userCoords, stores[i].coordinates);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = stores[i];
    }
  }

  return { store: nearest, distance: minDistance };
}

/**
 * Gets user's current location using browser Geolocation API
 * @returns Promise resolving to user coordinates or null if denied/unavailable
 */
export function getUserLocation(): Promise<StoreCoordinates | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser');
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.warn('Error getting user location:', error.message);
        resolve(null);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 300000, // 5 minutes cache
      }
    );
  });
}

// Type declarations for Google Maps (basic)
declare global {
  interface Window {
    google?: {
      maps?: any;
    };
  }
}
