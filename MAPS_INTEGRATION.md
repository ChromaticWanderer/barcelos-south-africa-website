# Google Maps Integration Guide

## Overview

This document describes the Google Maps integration for the Barcelos India website, including store location display, directions, and interactive maps.

## Files Created

### 1. Store Data
**Location**: `src/data/stores.json`

Contains all Barcelos store information with geocoded coordinates:
- Store IDs and names
- Complete addresses with structured fields
- Precise lat/lng coordinates
- Contact information (phone, email)
- Operating hours
- Online ordering URLs
- Store features (Dine-in, Takeaway, Delivery)

### 2. Maps Utility Library
**Location**: `src/lib/maps.ts`

Provides comprehensive Google Maps utilities:
- Dynamic Google Maps script loading
- Embed URL generation (by coordinates or address)
- Directions URL generation
- Search URL generation
- Distance calculation (Haversine formula)
- Nearest store finder
- User geolocation support
- Address formatting helpers

### 3. Type Definitions
**Location**: `src/types/store.ts`

TypeScript interfaces for type safety:
- `Store`: Complete store data structure
- `StoreAddress`: Structured address fields
- `StoreCoordinates`: Lat/lng coordinates
- `StoreHours`: Operating hours
- `StoresData`: Root data structure

## Setup Instructions

### 1. Google Cloud Console Setup

1. **Create/Select Project**
   - Go to https://console.cloud.google.com
   - Create a new project or select existing

2. **Enable Required APIs**
   - Maps JavaScript API
   - Places API
   - Geocoding API

3. **Create API Key**
   - Navigate to "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

4. **Secure Your API Key** (Recommended)
   - Click on your API key to edit
   - Add application restrictions (HTTP referrers)
   - Add API restrictions (limit to Maps APIs)
   - Example referrer: `https://barcelos.co.in/*`

### 2. Environment Configuration

1. **Copy Environment Template**
   ```bash
   cp .env.example .env.local
   ```

2. **Add Your API Key**
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Configure Other Services** (as needed)
   - Order provider URL
   - Analytics ID
   - Email service keys

### 3. Verify Setup

Check that all files are in place:
```
barcelos-website/
├── src/
│   ├── data/
│   │   └── stores.json
│   ├── lib/
│   │   └── maps.ts
│   └── types/
│       └── store.ts
├── .env.local (create from .env.example)
└── .env.example
```

## Usage Examples

### Import Store Data
```typescript
import storesData from '@/data/stores.json';
import type { Store } from '@/types/store';

const stores: Store[] = storesData.stores;
```

### Load Google Maps Script
```typescript
import { loadGoogleMapsScript } from '@/lib/maps';

// In a component
useEffect(() => {
  loadGoogleMapsScript()
    .then(() => {
      console.log('Google Maps loaded successfully');
      // Initialize map here
    })
    .catch((error) => {
      console.error('Failed to load Google Maps:', error);
    });
}, []);
```

### Generate Map Embed
```typescript
import { generateEmbedUrl } from '@/lib/maps';
import type { Store } from '@/types/store';

function StoreMap({ store }: { store: Store }) {
  const embedUrl = generateEmbedUrl(store.coordinates, 15);

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
```

### Generate Directions Link
```typescript
import { generateDirectionsUrl, formatAddress } from '@/lib/maps';
import type { Store } from '@/types/store';

function DirectionsButton({ store }: { store: Store }) {
  const directionsUrl = generateDirectionsUrl(
    store.coordinates,
    store.name
  );

  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Get Directions
    </a>
  );
}
```

### Find Nearest Store
```typescript
import { getUserLocation, findNearestStore } from '@/lib/maps';
import storesData from '@/data/stores.json';

async function findMyNearestStore() {
  const userLocation = await getUserLocation();

  if (!userLocation) {
    console.log('Location access denied');
    return null;
  }

  const result = findNearestStore(userLocation, storesData.stores);

  if (result) {
    console.log(`Nearest store: ${result.store.name}`);
    console.log(`Distance: ${result.distance.toFixed(2)} km`);
  }

  return result;
}
```

### Calculate Distance
```typescript
import { calculateDistance } from '@/lib/maps';

const distance = calculateDistance(
  { lat: 12.9716, lng: 77.5946 }, // Bangalore
  { lat: 21.1458, lng: 79.0882 }  // Nagpur
);

console.log(`Distance: ${distance.toFixed(2)} km`);
```

## Store Data Structure

Each store in `stores.json` follows this structure:

```json
{
  "id": "unique-store-slug",
  "name": "Store Display Name",
  "address": {
    "line1": "Building/Street",
    "line2": "Area/Landmark",
    "city": "City Name",
    "state": "State Name",
    "pincode": "XXXXXX"
  },
  "coordinates": {
    "lat": 12.345678,
    "lng": 77.123456
  },
  "phone": "+91 XXXXXXXXXX",
  "email": "store@barcelos.co.in",
  "hours": {
    "weekday": "11:00 AM - 11:00 PM",
    "weekend": "11:00 AM - 11:00 PM"
  },
  "orderUrl": "https://ordering-platform.com/barcelos-location",
  "features": ["Dine-in", "Takeaway", "Delivery"],
  "image": "/images/stores/store-slug.jpg"
}
```

## Current Stores

### 1. Nagpur Store
- **Address**: 244 Hill Road, Narayani House, Shivaji Nagar (Ram Nagar), Nagpur 440010
- **Phone**: +91 8087656787
- **Coordinates**: 21.136370, 79.056900

### 2. Bengaluru Store
- **Address**: Block E, Unit 2, Parcel 5, Embassy Tech Village, Devarabeesanahalli, Outer Ring Road, Bangalore 560103
- **Phone**: (To be confirmed)
- **Coordinates**: 12.930000, 77.690000

## Adding New Stores

To add a new store location:

1. **Get Accurate Coordinates**
   - Use Google Maps to find exact location
   - Right-click on the location → "What's here?"
   - Copy the lat/lng coordinates

2. **Add Store Entry**
   - Edit `src/data/stores.json`
   - Add new store object with all required fields
   - Use kebab-case for the `id` field

3. **Add Store Image** (when available)
   - Place store photo in `/public/images/stores/`
   - Name it matching the store ID
   - Update the `image` field in JSON

## API Key Security

### For Development
- Use `.env.local` (not committed to git)
- Unrestricted key is acceptable locally

### For Production
1. **Add HTTP Referrer Restrictions**
   - Limit to your domain(s)
   - Example: `https://barcelos.co.in/*`, `https://www.barcelos.co.in/*`

2. **Add API Restrictions**
   - Limit to: Maps JavaScript API, Places API, Geocoding API

3. **Monitor Usage**
   - Set up billing alerts
   - Monitor quota usage in Google Cloud Console

4. **Use Environment Variables**
   - Never commit API keys to version control
   - Use secure environment variable management in production

## Troubleshooting

### Map Not Loading
1. Check browser console for errors
2. Verify API key is in `.env.local`
3. Confirm required APIs are enabled in Google Cloud Console
4. Check for CORS or referrer restriction issues

### Incorrect Store Location
1. Verify coordinates in `stores.json`
2. Use Google Maps to get accurate lat/lng
3. Ensure coordinates are not swapped (lat first, lng second)

### Geolocation Not Working
1. Check browser permissions
2. Ensure HTTPS (geolocation requires secure context)
3. Handle user denial gracefully

## Next Steps

1. **Create Locations Page Component**
   - Display all stores with maps
   - Add filtering/search functionality
   - Show nearest store based on user location

2. **Add Interactive Map**
   - Display all stores on single map
   - Add custom markers with Barcelos branding
   - Implement click-to-expand store details

3. **Integration Testing**
   - Test all map functions
   - Verify coordinates are accurate
   - Test on mobile devices

4. **Performance Optimization**
   - Lazy load maps
   - Implement map caching
   - Optimize for slow connections

## Support & Questions

If you need additional information:
- Missing store details (phone, hours, etc.)
- Clarification on ordering URLs
- Additional store locations
- Store images

Please provide:
1. Complete store address
2. Contact information
3. Operating hours
4. Any specific features or notes
