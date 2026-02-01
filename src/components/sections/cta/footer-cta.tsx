"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { orderNowConfig } from "@/lib/constants/navigation"

/**
 * FooterCTA Component - Barcelos South Africa
 *
 * Final call-to-action before the footer.
 * Provides clear next steps for visitors:
 * - Order online via ServeUp
 * - Franchise inquiry
 */

interface FooterCTAProps {
  className?: string
}

export function FooterCTA({ className }: FooterCTAProps) {
  return (
    <section className={cn("section-padding bg-charcoal", className)}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          {/* Headline */}
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4 uppercase">
            Ready to Experience the Flame?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Uplifted, rejuvenated, and ready for anything - that is the Barcelos
            feeling. Order now or explore franchise opportunities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MovingBorderButton
              as="a"
              href={orderNowConfig.href}
              target="_blank"
              rel="noopener noreferrer"
              borderRadius="1.75rem"
              className="bg-primary/90 text-white font-semibold px-8 py-3"
              containerClassName="h-12"
            >
              Order Now
              <ExternalLink className="size-5 ml-2" />
            </MovingBorderButton>

            <MovingBorderButton
              as={Link}
              href="/franchise"
              borderRadius="1.75rem"
              className="bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3 border-white/20"
              containerClassName="h-12"
            >
              Franchise Inquiry
              <ArrowRight className="size-5 ml-2" />
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA
