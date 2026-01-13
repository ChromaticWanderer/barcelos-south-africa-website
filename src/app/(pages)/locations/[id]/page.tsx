import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Utensils,
  Car,
  Bike,
} from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { siteConfig } from "@/lib/constants/site"
import { orderNowConfig } from "@/lib/constants/navigation"
import {
  getLocationById,
  getActiveLocations,
  formatLocationCityState,
  type Location,
} from "@/lib/data/locations"

/**
 * Generate static paths for all locations
 */
export async function generateStaticParams() {
  const locations = getActiveLocations()
  return locations.map((location) => ({
    id: location.id,
  }))
}

/**
 * Generate metadata for each location page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const location = getLocationById(id)

  if (!location) {
    return {
      title: "Location Not Found | Barcelos India",
    }
  }

  return {
    title: `${location.name} | ${location.city} Restaurant`,
    description: `Visit Barcelos ${location.city} at ${location.address}. Enjoy authentic Portuguese flame-grilled chicken with dine-in, takeaway, and delivery options.`,
    keywords: [
      `Barcelos ${location.city}`,
      `flame-grilled chicken ${location.city}`,
      `peri-peri chicken ${location.city}`,
      `Portuguese restaurant ${location.city}`,
      location.name,
    ],
    openGraph: {
      title: `${location.name} | Barcelos India`,
      description: `Authentic Portuguese flame-grilled chicken at ${location.address}, ${location.city}. Open ${location.hours}.`,
      type: "website",
    },
  }
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
 * Generate Google Maps embed URL for a location
 */
function getMapEmbedUrl(location: Location): string {
  const query = encodeURIComponent(
    `${location.address}, ${location.city}, ${location.state}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}`
}

/**
 * Individual Location Detail Page
 */
export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const location = getLocationById(id)

  if (!location) {
    notFound()
  }

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-charcoal overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/brand/barcelos-village.png"
              alt=""
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
          </div>

          <div className="container-wide relative z-10 py-16 md:py-24">
            {/* Back Link */}
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              <span>Back to All Locations</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-flame-yellow bg-flame-yellow/10 rounded-full uppercase tracking-wide">
                  <MapPin className="size-4" />
                  {location.city}, {location.state}
                </span>

                <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
                  {location.name}
                </h1>

                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Experience authentic Portuguese flame-grilled chicken at our {location.city} location.
                  Fresh ingredients, bold flavours, and the signature Barcelos taste.
                </p>

                {/* Quick Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-barcelos-red/20 flex items-center justify-center shrink-0">
                      <Navigation className="size-5 text-barcelos-red" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{location.address}</p>
                      <p className="text-white/60 text-sm">{formatLocationCityState(location)}</p>
                    </div>
                  </div>

                  {location.phone && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-barcelos-red/20 flex items-center justify-center shrink-0">
                        <Phone className="size-5 text-barcelos-red" />
                      </div>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-white font-medium hover:text-flame-yellow transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-barcelos-red/20 flex items-center justify-center shrink-0">
                      <Clock className="size-5 text-barcelos-red" />
                    </div>
                    <p className="text-white font-medium">{location.hours}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  {orderNowConfig.comingSoon ? (
                    <div
                      className="h-12 flex items-center justify-center bg-white/60 text-barcelos-red/60 font-semibold px-6 py-3 rounded-full cursor-not-allowed"
                      aria-label="Online ordering coming soon"
                    >
                      {orderNowConfig.comingSoonLabel}
                    </div>
                  ) : (
                    <MovingBorderButton
                      as="a"
                      href={orderNowConfig.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      borderRadius="1.75rem"
                      className="bg-white text-barcelos-red font-semibold px-6 py-3"
                      containerClassName="h-12"
                    >
                      Order Online
                      <ExternalLink className="size-4 ml-2" />
                    </MovingBorderButton>
                  )}

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-charcoal"
                  >
                    <a
                      href={getDirectionsUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="size-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-barcelos-red/5 rounded-2xl rotate-2" />
                <div className="absolute inset-0 bg-flame-yellow/5 rounded-2xl -rotate-2" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  {location.coordinates ? (
                    <iframe
                      src={getMapEmbedUrl(location)}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-charcoal-medium flex items-center justify-center">
                      <MapPin className="size-16 text-white/20" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Services */}
        <section className="section-padding bg-stone-cream">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                SERVICES AVAILABLE
              </h2>
              <p className="text-lg text-charcoal-medium max-w-2xl mx-auto">
                Choose how you&apos;d like to enjoy your Barcelos experience at our {location.city} restaurant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {location.features.map((feature) => {
                const IconComponent = featureIconMap[feature] || CheckCircle2
                const descriptions: Record<string, string> = {
                  "Dine-in": "Enjoy your meal in our welcoming restaurant with full service",
                  "Takeaway": "Order ahead and pick up your flame-grilled favourites",
                  "Delivery": "Get Barcelos delivered straight to your door",
                }
                return (
                  <div
                    key={feature}
                    className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-barcelos-red/10 group-hover:bg-barcelos-red flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <IconComponent className="size-8 text-barcelos-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-charcoal text-xl mb-2">
                      {feature}
                    </h3>
                    <p className="text-charcoal-medium">
                      {descriptions[feature] || "Available at this location"}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Order CTA */}
        <section className="py-16 bg-gradient-to-br from-barcelos-red to-barcelos-red-dark text-white">
          <div className="container-wide text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 uppercase">
              READY TO ORDER?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the flame-grilled difference. Order online for pickup or delivery from our {location.city} restaurant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {orderNowConfig.comingSoon ? (
                <div
                  className="h-12 flex items-center justify-center bg-white/60 text-barcelos-red/60 font-semibold px-8 py-3 rounded-full cursor-not-allowed"
                  aria-label="Online ordering coming soon"
                >
                  {orderNowConfig.comingSoonLabel}
                </div>
              ) : (
                <MovingBorderButton
                  as="a"
                  href={orderNowConfig.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  borderRadius="1.75rem"
                  className="bg-white text-barcelos-red font-semibold px-8 py-3"
                  containerClassName="h-12"
                >
                  Order Now
                  <ExternalLink className="size-4 ml-2" />
                </MovingBorderButton>
              )}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-barcelos-red"
              >
                <Link href="/locations">
                  View All Locations
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
