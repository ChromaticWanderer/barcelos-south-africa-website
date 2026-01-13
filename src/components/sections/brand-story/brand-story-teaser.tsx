"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * BrandStoryTeaser Component
 *
 * A visually engaging section that teases the Barcelos origin story.
 * Features:
 * - Split layout with image and content
 * - Brief story highlight
 * - CTA to full Our Story page
 */

interface BrandStoryTeaserProps {
  className?: string
}

export function BrandStoryTeaser({ className }: BrandStoryTeaserProps) {
  return (
    <section className={cn("section-padding bg-white overflow-hidden", className)}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
              {/* Barcelos Cockerel at Night */}
              <Image
                src="/images/brand/barcelos-cockerel-night.jpg"
                alt="The Barcelos Rooster - Iconic signage illuminated at night"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-[200px]">
              <p className="text-sm font-medium text-charcoal-medium mb-1">
                Established
              </p>
              <p className="font-display font-bold text-2xl text-primary">1993</p>
              <p className="text-xs text-charcoal-light mt-1">
                South Africa
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide">
              OUR HERITAGE
            </span>

            <h2 className="font-display font-bold text-charcoal text-3xl md:text-4xl mb-6">
              THE LEGEND OF BARCELOS
            </h2>

            <div className="space-y-4 text-charcoal-medium">
              <p className="text-lg leading-relaxed">
                The legend tells of a pilgrim wrongfully accused of a crime.
                Before the judge who was about to enjoy a roasted rooster, the
                pilgrim proclaimed: &ldquo;As surely as I am innocent, so surely
                will this rooster crow when I am hanged.&rdquo;
              </p>
              <p className="leading-relaxed">
                The rooster crowed. The pilgrim was freed. And from this
                miraculous tale, Barcelos was born - a symbol of faith, justice,
                and authentic Portuguese spirit that now spans 12 countries
                worldwide.
              </p>
            </div>

            {/* Key Facts */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-charcoal">12+</p>
                <p className="text-sm text-charcoal-light">Countries</p>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-bold text-charcoal">1993</p>
                <p className="text-sm text-charcoal-light">Founded</p>
              </div>
              <div className="w-px bg-neutral-200" />
              <div>
                <p className="text-2xl font-bold text-charcoal">30+</p>
                <p className="text-sm text-charcoal-light">Years of Flavour</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/our-story">
                  DISCOVER OUR FULL STORY
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStoryTeaser
