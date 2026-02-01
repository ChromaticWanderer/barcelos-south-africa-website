"use client"

import * as React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { brandMessages } from "@/lib/constants/site"
import { orderNowConfig } from "@/lib/constants/navigation"
import { Highlight } from "@/components/ui/hero-highlight"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"

/**
 * HeroSection Component
 *
 * Food-first hero design for Barcelos South Africa.
 * Features:
 * - Bento grid of vibrant food images at the top
 * - Text content below showcasing the brand
 * - Strong CTAs for ordering
 */

interface HeroSectionProps {
  className?: string
  subheadline?: string
}

// Food images for the Bento grid
const foodImages = [
  {
    src: "/images/food/quarter-chicken-chips.jpg",
    alt: "Quarter chicken with chips - flame-grilled perfection",
  },
  {
    src: "/images/food/chicken-burger-chips.jpg",
    alt: "Chicken burger with crispy chips",
  },
  {
    src: "/images/food/half-pack.jpg",
    alt: "Half chicken pack - generous portions",
  },
  {
    src: "/images/food/family-pack.jpg",
    alt: "Family pack - perfect for sharing",
  },
  {
    src: "/images/food/two-chickens-chips.jpg",
    alt: "Two flame-grilled chickens with chips",
  },
]

// Shared image card component for consistency
function BentoImageCard({
  src,
  alt,
  className,
  priority = false,
  sizes,
  delay = 0,
  objectPosition = "center",
  href,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes: string
  delay?: number
  objectPosition?: string
  href?: string
}) {
  const content = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition }}
      />
      {/* Hover overlay with order prompt */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-1.5 bg-primary/90 px-3 py-1.5 rounded-full">
          Order Now
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden rounded-xl md:rounded-2xl group",
        className
      )}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer"
          aria-label={`Order ${alt}`}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  )
}

export function HeroSection({
  className,
  subheadline = brandMessages.hero.subheadline,
}: HeroSectionProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Food Bento Grid - Hero Focus */}
      <section className="relative bg-charcoal pt-4 pb-0">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-wide relative z-10">
          {/* Bento Grid Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/*
              Desktop Layout (md+): 4 columns, 2 rows
              - Image 1: 2x2 (large featured)
              - Image 2: 1x1 (top right area)
              - Image 3: 1x1 (top right area)
              - Image 4: 1x2 (tall right side)
              - Image 5: 1x1 (bottom middle)

              Mobile Layout: 2 columns
              - Image 1: spans full width
              - Images 2,3: side by side
              - Image 5: spans full width
              - Image 4: hidden on mobile
            */}

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-3 lg:gap-4" style={{ height: "420px" }}>
              {/* Two Chickens - Large 2x2 (biggest meal in biggest block) */}
              <BentoImageCard
                src={foodImages[4].src}
                alt={foodImages[4].alt}
                className="col-span-2 row-span-2"
                priority
                sizes="50vw"
                delay={0}
                href={orderNowConfig.href}
              />

              {/* Quarter Chicken - 1x1 */}
              <BentoImageCard
                src={foodImages[0].src}
                alt={foodImages[0].alt}
                className="col-span-1 row-span-1"
                priority
                sizes="25vw"
                delay={0.1}
                href={orderNowConfig.href}
              />

              {/* Family Pack - Tall 1x2 (large meal in tall block) */}
              <BentoImageCard
                src={foodImages[3].src}
                alt={foodImages[3].alt}
                className="col-span-1 row-span-2"
                sizes="25vw"
                delay={0.2}
                objectPosition="left center"
                href={orderNowConfig.href}
              />

              {/* Chicken Burger - 1x1 */}
              <BentoImageCard
                src={foodImages[1].src}
                alt={foodImages[1].alt}
                className="col-span-1 row-span-1"
                sizes="25vw"
                delay={0.15}
                href={orderNowConfig.href}
              />
            </div>

            {/* Mobile Grid */}
            <div className="grid md:hidden grid-cols-2 gap-2 sm:gap-3">
              {/* Image 1: Quarter Chicken - Full width, taller */}
              <BentoImageCard
                src={foodImages[0].src}
                alt={foodImages[0].alt}
                className="col-span-2 aspect-[16/10]"
                priority
                sizes="100vw"
                delay={0}
                href={orderNowConfig.href}
              />

              {/* Image 2: Chicken Burger - Half width */}
              <BentoImageCard
                src={foodImages[1].src}
                alt={foodImages[1].alt}
                className="col-span-1 aspect-square"
                priority
                sizes="50vw"
                delay={0.1}
                href={orderNowConfig.href}
              />

              {/* Image 3: Half Pack - Half width */}
              <BentoImageCard
                src={foodImages[2].src}
                alt={foodImages[2].alt}
                className="col-span-1 aspect-square"
                sizes="50vw"
                delay={0.15}
                href={orderNowConfig.href}
              />

              {/* Image 5: Two Chickens - Full width */}
              <BentoImageCard
                src={foodImages[4].src}
                alt={foodImages[4].alt}
                className="col-span-2 aspect-[16/9]"
                sizes="100vw"
                delay={0.2}
                objectPosition="center top"
                href={orderNowConfig.href}
              />
            </div>
          </motion.div>
        </div>

        {/* Gradient fade to content section */}
        <div className="h-10 md:h-14 bg-gradient-to-b from-charcoal to-charcoal" />
      </section>

      {/* Text Content Section */}
      <section className="relative bg-charcoal pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            {/* Share Delicious Lockup */}
            <Image
              src="/images/lockups/share-delicious.png"
              alt="Share Delicious"
              width={400}
              height={100}
              className="mb-6 object-contain w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] h-auto"
            />

            {/* Headline */}
            <h1 className="max-w-4xl text-center text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-tight font-display">
              <span className="bg-gradient-to-b from-neutral-200 via-white to-white bg-clip-text text-transparent">
                AUTHENTIC AFRO-PORTUGUESE
              </span>{" "}
              <Highlight>FLAME GRILLED CHICKEN</Highlight>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 max-w-2xl text-center text-neutral-300 md:mt-6 text-base md:text-lg lg:text-xl text-pretty">
              {subheadline}
            </p>

            {/* USP Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["FLAME-GRILLED", "24-HOUR MARINADE", "PERI-PERI PERFECTION"].map(
                (usp) => (
                  <span
                    key={usp}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-flame-yellow bg-flame-yellow/10 rounded-full border border-flame-yellow/30"
                  >
                    {usp}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MovingBorderButton
                as="a"
                href={orderNowConfig.href}
                target="_blank"
                rel="noopener noreferrer"
                borderRadius="1.75rem"
                className="bg-primary text-white font-semibold px-8 py-3"
                containerClassName="min-w-[180px] h-12"
              >
                ORDER NOW
                <ExternalLink className="size-4 ml-2" />
              </MovingBorderButton>
              <HeroButton as={Link} href="/franchise" variant="secondary">
                FRANCHISE WITH US
              </HeroButton>
            </div>

            {/* Trust indicator */}
            <p className="mt-8 text-sm text-neutral-500">
              Born in Pretoria, 1993 · 120+ restaurants · 17+ countries
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/**
 * Hero Button Component
 * Styled buttons for the hero section
 */
const HeroButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
} & React.ComponentPropsWithoutRef<"a">) => {
  const baseStyles =
    "no-underline flex items-center justify-center cursor-pointer transition duration-200 rounded-full px-6 py-3 text-sm font-semibold leading-6 min-w-[180px] h-12"

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:-translate-y-0.5",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default HeroSection
