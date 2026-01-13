import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, Heart, TrendingUp, Users } from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Barcelos India team. Explore career opportunities and be part of our flame-grilled journey. We are always looking for passionate people.",
}

/**
 * Careers Page - Barcelos India
 *
 * Careers landing page with:
 * - Why work with us
 * - Current openings (placeholder)
 * - Application CTA
 */
export default function CareersPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Careers at Barcelos"
          subtitle="Join our team and be part of the flame-grilled family"
        />

        {/* Why Join Us */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl uppercase">
                WHY JOIN BARCELOS?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Passion for Food",
                  description: "Work with a team that loves great food",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Opportunities",
                  description: "Clear paths for career advancement",
                },
                {
                  icon: Users,
                  title: "Great Culture",
                  description: "Supportive and inclusive workplace",
                },
                {
                  icon: Briefcase,
                  title: "Benefits",
                  description: "Competitive pay and perks",
                },
              ].map((item, index) => (
                <Card key={index} variant="default" className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-medium text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Placeholder */}
        <section className="section-padding bg-neutral-50">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl uppercase">
                CURRENT OPENINGS
              </h2>
              <p className="mt-4 text-charcoal-medium">
                Explore opportunities across our locations
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="p-12 rounded-2xl bg-white border border-dashed border-neutral-300 text-center">
                <Briefcase className="size-12 text-neutral-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-charcoal mb-2">
                  Job Listings Coming Soon
                </h3>
                <p className="text-charcoal-medium mb-6">
                  We are updating our careers page. Check back soon for exciting
                  opportunities at Barcelos India.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Send Your Resume
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
