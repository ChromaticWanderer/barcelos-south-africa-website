"use client"

import { ExternalLink, Tag, Calendar, Copy } from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { Card, CardContent } from "@/components/ui/card"
import { orderNowConfig } from "@/lib/constants/navigation"

/**
 * Offers Page - Barcelos South Africa
 *
 * Current promotions and deals page with:
 * - Active offers
 * - Promo codes
 * - Terms and conditions
 */
export default function OffersPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Offers & Deals"
          subtitle="Exclusive deals on your favourite flame-grilled meals"
        />

        {/* Active Offers */}
        <section className="section-padding">
          <div className="container-wide">
            {/* Featured Offer Placeholder */}
            <div className="mb-12">
              <Card variant="featured" className="overflow-hidden">
                <div className="gradient-flame p-8 md:p-12">
                  <div className="max-w-2xl">
                    <div className="inline-block px-3 py-1 bg-white text-primary text-sm font-semibold rounded mb-4">
                      Featured Offer
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 uppercase">
                      FLAME-GRILLED SPECIALS
                    </h2>
                    <p className="text-white/90 mb-6">
                      Discover our latest deals on flame-grilled favourites.
                      Order online for exclusive offers!
                    </p>
                    <MovingBorderButton
                      as="a"
                      href={orderNowConfig.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      borderRadius="1.75rem"
                      className="bg-white text-primary font-semibold px-8 py-3"
                      containerClassName="h-12 inline-block"
                    >
                      Order Now
                      <ExternalLink className="size-5 ml-2" />
                    </MovingBorderButton>
                  </div>
                </div>
              </Card>
            </div>

            {/* Offer Cards */}
            <h2 className="font-display font-semibold text-xl text-charcoal mb-6">
              Current Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} variant="interactive" className="relative overflow-hidden">
                  <div className="absolute inset-0 gradient-flame-subtle opacity-50" />
                  <CardContent className="relative p-6 space-y-4">
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                      <Tag className="size-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        Special Offer
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-charcoal">
                      Exclusive Offer {i}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal-medium text-sm">
                      Details about this amazing offer will be available soon.
                      Check back for exciting deals!
                    </p>

                    {/* Validity Placeholder */}
                    <div className="flex items-center gap-2 text-sm text-charcoal-light">
                      <Calendar className="size-4" />
                      <span>Validity: See in-store</span>
                    </div>

                    {/* Code Placeholder */}
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-mono font-semibold text-charcoal">
                        BARCELOS{i}
                      </span>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        <Copy className="size-4" />
                      </button>
                    </div>

                    {/* CTA */}
                    <MovingBorderButton
                      as="a"
                      href={orderNowConfig.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      borderRadius="1.5rem"
                      className="bg-white text-charcoal font-semibold px-4 py-2 text-sm"
                      containerClassName="h-10 w-full"
                    >
                      Order Now
                      <ExternalLink className="size-4 ml-2" />
                    </MovingBorderButton>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Terms Note */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-charcoal mb-2">
                Terms & Conditions
              </h3>
              <ul className="text-sm text-charcoal-medium space-y-1">
                <li>* Offers valid at participating outlets only</li>
                <li>* Cannot be combined with other promotions</li>
                <li>* Terms and conditions apply to all offers</li>
                <li>* Barcelos South Africa reserves the right to modify or cancel offers</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
