"use client"

import * as React from "react"
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

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { StaggerChildren, StaggerItem } from "@/components/ui/stagger-children"
import { CountUp } from "@/components/ui/count-up"
import { siteConfig } from "@/lib/constants/site"
import {
  getFeaturedLocations,
  formatLocationCityState,
  type Location,
} from "@/lib/data/locations"

/**
 * LocationFinderSection Component
 *
 * Displays a teaser of available restaurant locations with:
 * - Premium location cards with heritage-inspired visual depth
 * - Restaurant imagery with Portuguese pattern fallback
 * - Feature badges with icons
 * - Hover lift animations
 * - Quick CTA to view all locations
 *
 * Data is sourced from the centralized location data layer.
 */

interface LocationFinderSectionProps {
  className?: string
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
 * LocationCard Component
 *
 * Premium card design following heritage section patterns:
 * - Decorative rotated backgrounds
 * - Image area with zoom effect
 * - Typography hierarchy
 * - Feature badges with icons
 * - Enhanced CTA buttons
 */
function LocationCard({ restaurant }: { restaurant: Location }) {
  /**
   * Generate Google Maps directions URL for a location
   */
  const getDirectionsUrl = (location: Location): string => {
    const query = encodeURIComponent(
      `${location.address}, ${location.city}, ${location.state}`
    )
    return `${siteConfig.links.googleMapsBase}${query}`
  }

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
            <h3
              id={`location-${restaurant.id}-title`}
              className="font-display font-bold text-2xl text-charcoal mb-1"
            >
              {restaurant.name}
            </h3>
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

export function LocationFinderSection({
  className,
}: LocationFinderSectionProps) {
  // Get featured locations from centralized data
  const featuredRestaurants = getFeaturedLocations()

  return (
    <section
      id="locations"
      className={cn("section-padding bg-stone-cream scroll-mt-20", className)}
      aria-labelledby="locations-section-title"
    >
      <div className="container-wide">
        {/* Section Header - Heritage pattern with scroll reveal */}
        <ScrollReveal direction="up" duration={0.6}>
        <div className="relative overflow-hidden rounded-3xl bg-charcoal p-8 md:p-12 lg:p-16 mb-12">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)
                `,
              }}
            />
            {/* Subtle pattern grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                <MapPin className="size-4" />
                OUR LOCATIONS
              </span>

              {/* Title with accent */}
              <h2
                id="locations-section-title"
                className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 uppercase"
              >
                Find Your Nearest
                <span className="text-barcelos-red"> Barcelos</span>
              </h2>

              {/* Subtitle */}
              <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                Experience the flame-grilled difference at one of our
                restaurants. We are expanding across India - stay tuned for new
                locations!
              </p>
            </div>

            <Button
              variant="cta"
              size="lg"
              asChild
              className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <Link href="/locations">
                VIEW ALL LOCATIONS
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>

          {/* Stats row - Heritage pattern with CountUp animations */}
          <StaggerChildren className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/10" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-barcelos-red mb-1">
                  <CountUp end={2} duration={1.5} />
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Locations in India</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-flame-yellow mb-1">
                  <CountUp end={120} duration={2} suffix="+" />
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Global Restaurants</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-heritage-teal mb-1">
                  <CountUp end={17} duration={1.8} suffix="+" />
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Countries</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                  <CountUp end={30} duration={2} suffix="+" />
                </p>
                <p className="text-xs md:text-sm text-neutral-400">Years of Excellence</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
        </ScrollReveal>

        {/* Restaurant Cards Grid with Stagger Animation */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          staggerDelay={0.15}
        >
          {featuredRestaurants.map((restaurant) => (
            <StaggerItem key={restaurant.id}>
              <div role="listitem" aria-label={`${restaurant.name} restaurant location`}>
                <LocationCard restaurant={restaurant} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Coming Soon Banner - Enhanced */}
        <div className="mt-12 relative overflow-hidden">
          {/* Decorative backgrounds */}
          <div className="absolute inset-0 bg-barcelos-red/3 rounded-2xl rotate-1" />
          <div className="absolute inset-0 bg-flame-yellow/3 rounded-2xl -rotate-1" />

          <div className="relative p-8 md:p-10 bg-gradient-to-r from-primary/5 via-flame-yellow/5 to-primary/5 rounded-2xl border border-barcelos-red/10 text-center">
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.02] rounded-2xl"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 50%, var(--barcelos-red) 0%, transparent 50%),
                  radial-gradient(circle at 70% 50%, var(--flame-yellow) 0%, transparent 50%)
                `,
              }}
            />

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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationFinderSection
