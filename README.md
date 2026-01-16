# Barcelos India Website

Barcelos India corporate website - Authentic Portuguese Flame-Grilled Chicken.

## Status: LIVE

**Production URL:** https://barcelos.co.in

**Last Updated:** January 16, 2026

## Current State

| Feature | Status |
|---------|--------|
| Website | Live on Vercel |
| Domain | barcelos.co.in configured |
| SSL | Active |
| Online Ordering (PetPooja) | Coming Soon (button disabled) |
| Contact Forms | Functional |
| Franchise Enquiry | Functional |

## Tech Stack

- **Framework:** Next.js 15 (Turbopack)
- **React:** 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Aceternity UI patterns
- **Animations:** Framer Motion (motion/react)
- **Deployment:** Vercel
- **Version Control:** GitHub (private repo)

## Repository

- **GitHub:** https://github.com/ChromaticWanderer/barcelos-india-website (private)
- **Vercel Project:** barcelos-website

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # Content pages (our-story, locations, etc.)
│   ├── globals.css        # Global styles + design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (hero, heritage, etc.)
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives (shadcn/ui + custom)
├── lib/
│   ├── constants/         # Site config, navigation
│   ├── data/              # Static data (locations, menu, testimonials)
│   └── hooks/             # Custom React hooks
└── types/                 # TypeScript definitions
```

## Deployment

The site auto-deploys to Vercel when pushing to the `main` branch on GitHub.

```bash
# Make changes, then:
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically build and deploy.

## Pending Items

See [INTEGRATION_TODO.md](./INTEGRATION_TODO.md) for detailed list of items awaiting stakeholder input:

- PetPooja ordering integration (when ready, set `comingSoon: false` in `src/lib/constants/navigation.ts`)
- Google Maps API key for location pages
- Store phone numbers verification
- Store images

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_MAKE_CONTACT_WEBHOOK=your_webhook_url
NEXT_PUBLIC_MAKE_FRANCHISE_WEBHOOK=your_webhook_url
```

## Enabling Online Ordering

When PetPooja is ready, update `src/lib/constants/navigation.ts`:

```typescript
export const orderNowConfig = {
  // ...
  href: "https://actual-petpooja-url.com",  // Update with real URL
  comingSoon: false,  // Change to false to enable ordering
}
```

Push the change and the site will auto-deploy with working Order buttons.
