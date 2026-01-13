import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowRight,
  CheckCircle2,
  Utensils,
  Car,
  Bike,
} from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants/site"
import {
  getActiveLocations,
  formatLocationCityState,
  type Location,
} from "@/lib/data/locations"

export const metadata: Metadata = {
  title: "Restaurant Locations | Find a Barcelos Near You",
  description:
    "Find a Barcelos restaurant near you. Discover our locations across India for dine-in, takeaway, or delivery of authentic flame-grilled Portuguese chicken.",
  keywords: [
    "Barcelos locations",
    "Barcelos India restaurants",
    "Barcelos Nagpur",
    "Barcelos Bangalore",
    "flame-grilled chicken near me",
    "peri-peri chicken India",
  ],
  openGraph: {
    title: "Restaurant Locations | Barcelos India",
    description:
      "Find your nearest Barcelos for authentic Portuguese flame-grilled chicken. Locations in Nagpur, Bangalore, and more coming soon.",
    type: "website",
  },
}

/**
 * Map feature names to appropriate icons
 */
const featureIconMap: Record<string, React.ElementType> = {
  "Dine-in": Utensils,
  "Takeaway": Car,
  "Delivery": Bike,
}

/**
 * Generate Google Maps directions URL for a location
 */
function getDirectionsUrl(location: Location): string {
  const query = encodeURIComponent(
    `${location.address}, ${location.city}, ${location.state}`
  )
  return `${siteConfig.links.googleMapsBase}${query}`
}

/**
 * LocationCard Component - Full card for location listing
 */
function LocationCard({ restaurant }: { restaurant: Location }) {
  return (
    <article
      className="group relative"
      aria-labelledby={`location-${restaurant.id}-title`}
    >
      {/* Decorative rotated backgrounds - Heritage pattern */}
      <div className="absolute inset-0 bg-barcelos-red/5 rounded-2xl rotate-2 transition-transform duration-300 group-hover:rotate-3" />
      <div className="absolute inset-0 bg-flame-yellow/5 rounded-2xl -rotate-2 transition-transform duration-300 group-hover:-rotate-3" />

      {/* Main card container */}
      <div className="relative bg-gradient-to-br from-white to-stone-cream rounded-2xl border-t-2 border-barcelos-red shadow-lg overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

        {/* Image Area - 16:9 aspect ratio */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Portuguese pattern fallback background */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-medium">
            {/* Decorative pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 40%),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 40%),
                  linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%),
                  linear-gradient(-45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%)
                `,
                backgroundSize: '60px 60px, 80px 80px, 40px 40px, 40px 40px',
              }}
            />
            {/* Central icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <MapPin className="size-10 text-white/60" />
              </div>
            </div>
          </div>

          {/* Image zoom container - if image exists */}
          {restaurant.image && (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={restaurant.image}
                alt={`${restaurant.name} restaurant`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* City badge overlay */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-full shadow-md uppercase tracking-wide">
              <MapPin className="size-3 text-barcelos-red" />
              {restaurant.city}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Restaurant Header */}
          <div className="mb-4">
            <h2
              id={`location-${restaurant.id}-title`}
              className="font-display font-bold text-2xl text-charcoal mb-1"
            >
              {restaurant.name}
            </h2>
            <p className="text-sm font-medium text-charcoal-medium uppercase tracking-wide">
              {formatLocationCityState(restaurant)}
            </p>
          </div>

          {/* Location Details */}
          <div className="space-y-3 mb-5">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-barcelos-red/10 flex items-center justify-center mt-0.5">
                <Navigation className="size-4 text-barcelos-red" />
              </div>
              <p className="text-base text-charcoal-medium leading-relaxed pt-1">
                {restaurant.address}
              </p>
            </div>

            {/* Phone - only show if available */}
            {restaurant.phone && (
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-barcelos-red/10 flex items-center justify-center">
                  <Phone className="size-4 text-barcelos-red" />
                </div>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-sm font-medium text-primary hover:underline hover:text-barcelos-red-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-barcelos-red focus-visible:ring-offset-2 rounded"
                  aria-label={`Call ${restaurant.name} at ${restaurant.phone}`}
                >
                  {restaurant.phone}
                </a>
              </div>
            )}

            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-barcelos-red/10 flex items-center justify-center">
                <Clock className="size-4 text-barcelos-red" />
              </div>
              <p className="text-sm text-charcoal-light">
                {restaurant.hours}
              </p>
            </div>
          </div>

          {/* Feature Badges - Heritage-style */}
          <div className="flex flex-wrap gap-2 mb-6">
            {restaurant.features.map((feature) => {
              const IconComponent = featureIconMap[feature] || CheckCircle2
              return (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-barcelos-red/10 text-barcelos-red text-xs font-semibold rounded-full border border-barcelos-red/20 transition-colors duration-200 hover:bg-barcelos-red/15"
                >
                  <IconComponent className="size-3" />
                  {feature}
                </span>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="default"
              asChild
              className="flex-1 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link
                href={`/locations/${restaurant.id}`}
                aria-label={`View details for ${restaurant.name}`}
              >
                View Details
              </Link>
            </Button>
            <Button
              variant="cta"
              size="default"
              asChild
              className="flex-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <a
                href={getDirectionsUrl(restaurant)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to ${restaurant.name}`}
              >
                <Navigation className="size-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * Locations Page - Barcelos India
 *
 * Dedicated page listing all restaurant locations with:
 * - Full location cards with details
 * - Links to individual location pages
 * - Directions integration
 * - Coming soon banner for expansion
 */
export default function LocationsPage() {
  const locations = getActiveLocations()

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Our Locations"
          subtitle="Find your nearest Barcelos restaurant for authentic flame-grilled Portuguese chicken"
          badge="Find Us"
          backgroundImage="/images/brand/barcelos-village.png"
          size="hero"
          overlayOpacity={70}
        />

        {/* Stats Section */}
        <section className="py-12 bg-charcoal">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-barcelos-red mb-1">
                  {locations.length}
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Locations in India</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-flame-yellow mb-1">
                  120+
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Global Restaurants</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-heritage-teal mb-1">
                  17+
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Countries</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                  30+
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-padding bg-stone-cream">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                BARCELOS RESTAURANTS IN INDIA
              </h2>
              <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
                Visit us at any of our locations for an authentic flame-grilled experience.
                Each restaurant offers dine-in, takeaway, and delivery options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {locations.map((location) => (
                <LocationCard key={location.id} restaurant={location} />
              ))}
            </div>

            {/* Coming Soon Banner */}
            <div className="mt-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-barcelos-red/3 rounded-2xl rotate-1" />
              <div className="absolute inset-0 bg-flame-yellow/3 rounded-2xl -rotate-1" />

              <div className="relative p-8 md:p-10 bg-gradient-to-r from-primary/5 via-flame-yellow/5 to-primary/5 rounded-2xl border border-barcelos-red/10 text-center">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-barcelos-red/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="size-6 text-barcelos-red" />
                  </div>
                  <p className="text-charcoal-medium text-lg">
                    <span className="font-display font-bold text-charcoal text-xl">More locations coming soon!</span>
                  </p>
                  <p className="text-charcoal-medium mt-2 max-w-md mx-auto">
                    We are expanding across India. Follow us on social media for updates on new restaurant openings.
                  </p>
                  <div className="mt-6">
                    <Button variant="cta" asChild>
                      <Link href="/franchise">
                        Franchise Opportunities
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
