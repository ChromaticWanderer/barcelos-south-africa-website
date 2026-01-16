# Integration To-Do List - Missing Information

## Site Status

**LIVE:** https://barcelos.co.in (deployed January 16, 2026)

| Item | Status |
|------|--------|
| Website | LIVE |
| Domain + SSL | CONFIGURED |
| GitHub Repo | https://github.com/ChromaticWanderer/barcelos-india-website |
| Vercel | Auto-deploys on push to main |
| Online Ordering | COMING SOON (PetPooja not ready) |

---

## PetPooja Online Ordering

**Status:** WAITING - Buttons show "COMING SOON : ORDER NOW"

**When ready to enable:**
1. Get the PetPooja ordering URL
2. Edit `src/lib/constants/navigation.ts`:
   ```typescript
   export const orderNowConfig = {
     href: "https://actual-petpooja-url.com",  // Update this
     comingSoon: false,  // Change to false
   }
   ```
3. Commit and push - Vercel auto-deploys

---

## Google Maps Setup (Package 1.2)

### COMPLETED
- [x] Created `src/data/stores.json` with store information
- [x] Created `src/lib/maps.ts` utility library
- [x] Created `src/types/store.ts` type definitions
- [x] Created `.env.example` template
- [x] Created `MAPS_INTEGRATION.md` documentation
- [x] Geocoded both store locations

### REQUIRED FROM USER - CRITICAL

#### 1. Google Maps API Key
**Status**: PENDING USER INPUT
**Action Required**: Add to `.env.local`

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key
```

**Instructions**:
- User confirmed API key is available
- User needs to create `.env.local` file from `.env.example`
- User needs to paste their Google Maps API key

#### 2. Bangalore Store Phone Number
**Status**: MISSING
**Current Value**: Empty string in stores.json
**Action Required**: Provide actual phone number for Bengaluru store

#### 3. Store Email Addresses
**Status**: ASSUMED
**Current Values**:
- Nagpur: nagpur@barcelos.co.in
- Bangalore: bangalore@barcelos.co.in

**Action Required**: Confirm these email addresses are correct or provide actual ones

#### 4. Online Ordering URLs
**Status**: ASSUMED
**Current Values**:
- Nagpur: https://petpooja.com/barcelos-nagpur
- Bangalore: https://petpooja.com/barcelos-bangalore

**Action Required**:
- Confirm ordering provider (Petpooja, Swiggy, Zomato, custom)
- Provide actual ordering URLs for each store

#### 5. Store Operating Hours
**Status**: ASSUMED
**Current Value**: 11:00 AM - 11:00 PM (all days)

**Action Required**:
- Confirm operating hours for each store
- Specify if different hours for weekdays/weekends
- Specify if different hours for holidays

#### 6. Store Features
**Status**: ASSUMED
**Current Value**: All stores have "Dine-in", "Takeaway", "Delivery"

**Action Required**: Confirm which features each store actually offers

#### 7. Store Images
**Status**: NOT PROVIDED
**Current Paths**:
- `/images/stores/nagpur-shivaji-nagar.jpg`
- `/images/stores/bangalore-embassy-tech-village.jpg`

**Action Required**:
- Provide store photos/exterior images
- Or let us know if we should use placeholder images

### NICE TO HAVE - NON-CRITICAL

#### 8. Additional Store Details
- Store manager names
- Seating capacity
- Parking availability
- Accessibility features
- Special amenities (WiFi, AC, etc.)

#### 9. Future Stores
- Are there plans to open more locations?
- Should we design for scalability to many stores?

#### 10. Store-Specific Promotions
- Do stores have location-specific offers?
- Should we support different menus per location?

## Other Service Integrations (Upcoming)

### Required for Contact Forms
- Email service provider (SendGrid, Mailgun, AWS SES, etc.)
- API credentials
- Sender and recipient email addresses

### Required for Analytics
- Google Analytics Measurement ID
- Any other analytics platforms (Meta Pixel, etc.)

### Required for Franchise Enquiry
- Destination email address for franchise leads
- Any CRM integration requirements

## Geocoding Notes

### Coordinates Accuracy
The following coordinates were researched and estimated based on the addresses provided:

**Nagpur Store**
- Address: 244 Hill Road, Shivaji Nagar, Nagpur 440010
- Coordinates: 21.136370, 79.056900
- Source: Based on Shivaji Nagar, Nagpur area
- Accuracy: Medium (area-level, not exact building)

**Bengaluru Store**
- Address: Embassy Tech Village, Devarabeesanahalli, Outer Ring Road
- Coordinates: 12.930000, 77.690000
- Source: Embassy Tech Village is a known landmark
- Accuracy: High (well-known business complex)

### Recommendation
For production deployment, please:
1. Verify these coordinates show the correct location on Google Maps
2. If incorrect, provide the exact Google Maps link for each store
3. We can then extract precise coordinates

## Priority Order

### MUST HAVE BEFORE DEPLOYMENT
1. Google Maps API key in `.env.local`
2. Bangalore store phone number
3. Correct online ordering URLs
4. Verify/correct store operating hours

### SHOULD HAVE SOON
5. Correct email addresses
6. Store photos
7. Verify store features

### CAN WAIT
8. Additional store details
9. Future expansion plans
10. Store-specific promotions

## How to Provide Missing Information

Please respond with:

```
BANGALORE PHONE: +91 XXXXXXXXXX
ORDERING URLS:
  - Nagpur: https://actual-url.com
  - Bangalore: https://actual-url.com
HOURS:
  - Nagpur: Mon-Fri 11am-11pm, Sat-Sun 10am-12am
  - Bangalore: Same as above / Different hours
EMAILS: Correct / nagpur@domain.com, bangalore@domain.com
FEATURES: Correct / Specify per store
IMAGES: Will provide / Use placeholders
```

Once provided, I can update the stores.json file with accurate information.
