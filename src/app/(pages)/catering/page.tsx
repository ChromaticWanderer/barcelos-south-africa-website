import type { Metadata } from "next"
import { ArrowRight, Users, Calendar, UtensilsCrossed, CheckCircle } from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Catering Services",
  description:
    "Barcelos catering for your events. Bring flame-grilled excellence to corporate events, parties, and gatherings. Bulk orders and customised menus available.",
}

/**
 * Catering Page - Barcelos South Africa
 *
 * Catering services page with:
 * - Service offerings
 * - Event types
 * - Inquiry form
 */
export default function CateringPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Catering Services"
          subtitle="Bring the flame-grilled experience to your next event"
        />

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Corporate Events",
                  description: "Team lunches, conferences, and office parties",
                },
                {
                  icon: Calendar,
                  title: "Private Functions",
                  description: "Birthdays, celebrations, and family gatherings",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Bulk Orders",
                  description: "Large quantity orders for any occasion",
                },
              ].map((item, index) => (
                <Card key={index} variant="interactive" className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="size-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-medium text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What We Offer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display font-bold text-2xl text-charcoal mb-6 uppercase">
                  WHAT WE OFFER
                </h2>
                <div className="space-y-4">
                  {[
                    "Customised menus for your event",
                    "Flexible serving options (buffet, boxed, platters)",
                    "Vegetarian and non-vegetarian selections",
                    "Professional setup and service available",
                    "Competitive pricing for bulk orders",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-success mt-0.5 shrink-0" />
                      <span className="text-charcoal-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-6">
                    Request a Quote
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Name *
                        </label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Phone *
                        </label>
                        <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Event Date
                        </label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Number of Guests
                        </label>
                        <Input type="number" placeholder="Approx. guests" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Event Details
                      </label>
                      <textarea
                        className="input-field min-h-[100px] resize-y"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <Button variant="cta" size="lg" className="w-full">
                      Submit Request
                      <ArrowRight className="size-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
