"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ExternalLink, ArrowLeft, Loader2, Clock } from "lucide-react"

import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { orderNowConfig } from "@/lib/constants/navigation"

/**
 * Menu Page - Barcelos India
 *
 * This page serves as a bridge to the external PetPooja ordering platform.
 * When PetPooja is ready:
 * - Auto-redirect to PetPooja after a brief delay
 * - Manual link if auto-redirect fails
 * - Back navigation to homepage
 *
 * When PetPooja is not ready (comingSoon = true):
 * - Shows a "Coming Soon" message
 * - No redirect occurs
 *
 * Note: When the actual PetPooja URL is available, update it in:
 * src/lib/constants/navigation.ts -> orderNowConfig.href
 * and set comingSoon to false
 */
export default function MenuPage() {
  useEffect(() => {
    // Only auto-redirect if ordering is available
    if (!orderNowConfig.comingSoon) {
      const timer = setTimeout(() => {
        window.location.href = orderNowConfig.href
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Coming Soon state
  if (orderNowConfig.comingSoon) {
    return (
      <>
        <Header />

        <main id="main-content" className="flex-1">
          <section className="min-h-[60vh] flex items-center justify-center bg-stone-cream">
            <div className="container-wide py-20">
              <div className="max-w-xl mx-auto text-center">
                {/* Coming Soon indicator */}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full bg-barcelos-red/10 flex items-center justify-center mx-auto">
                    <Clock className="size-10 text-barcelos-red" />
                  </div>
                </div>

                <h1 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                  ONLINE ORDERING COMING SOON
                </h1>

                <p className="text-lg text-charcoal-medium mb-8">
                  We&apos;re putting the finishing touches on our online ordering system.
                  Soon you&apos;ll be able to order your favourite flame-grilled chicken
                  for pickup or delivery right from your device.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button variant="default" size="lg" asChild>
                    <Link href="/locations">
                      Find a Restaurant
                    </Link>
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="size-4" />
                      Back to Homepage
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-charcoal-light">
                  In the meantime, visit one of our restaurants to enjoy the full Barcelos experience!
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    )
  }

  // Regular redirect state (when ordering is live)
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <section className="min-h-[60vh] flex items-center justify-center bg-stone-cream">
          <div className="container-wide py-20">
            <div className="max-w-xl mx-auto text-center">
              {/* Loading indicator */}
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-barcelos-red/10 flex items-center justify-center mx-auto">
                  <Loader2 className="size-10 text-barcelos-red animate-spin" />
                </div>
              </div>

              <h1 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-4 uppercase">
                TAKING YOU TO OUR MENU
              </h1>

              <p className="text-lg text-charcoal-medium mb-8">
                You&apos;re being redirected to our online ordering platform where you can
                browse our full menu and place an order.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <MovingBorderButton
                  as="a"
                  href={orderNowConfig.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  borderRadius="1.75rem"
                  className="bg-barcelos-red text-white font-semibold px-8 py-3"
                  containerClassName="h-12"
                >
                  Go to Menu Now
                  <ExternalLink className="size-4 ml-2" />
                </MovingBorderButton>

                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="size-4" />
                    Back to Homepage
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-charcoal-light">
                Not redirecting?{" "}
                <a
                  href={orderNowConfig.href}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to go directly
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
