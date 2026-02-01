# Barcelos South Africa Website

Barcelos South Africa corporate website - Authentic Afro-Portuguese Flame-Grilled Chicken.

## Status: Development

**Target Production URL:** https://barcelos.co.za

## Tech Stack

- **Framework:** Next.js 15 (Turbopack)
- **React:** 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Aceternity UI patterns
- **Animations:** Framer Motion (motion/react)
- **Deployment:** Vercel
- **Version Control:** GitHub

## Repository

- **GitHub:** https://github.com/ChromaticWanderer/barcelos-south-africa-website

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
│   ├── (pages)/           # Content pages (our-story, franchise, etc.)
│   ├── globals.css        # Global styles + design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (hero, heritage, infrastructure, etc.)
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives (shadcn/ui + custom)
├── lib/
│   ├── constants/         # Site config, navigation
│   └── hooks/             # Custom React hooks
└── types/                 # TypeScript definitions
```

## Key Features

- **ServeUp Integration:** Online ordering via orders.barcelos.co.za
- **Franchise Inquiry:** Form with SA provinces + International option
- **Infrastructure Showcase:** Training Academy, Central Kitchen, Shopfitting, Head Office
- **Cloudflare Turnstile:** Bot protection on forms
- **Vimeo Ready:** Video embed component for corporate videos

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_key
NEXT_PUBLIC_MAKE_CONTACT_WEBHOOK=your_webhook_url
NEXT_PUBLIC_MAKE_FRANCHISE_WEBHOOK=your_webhook_url
```

## Deployment

The site auto-deploys to Vercel when pushing to the `main` branch on GitHub.

```bash
git add .
git commit -m "Your commit message"
git push
```
