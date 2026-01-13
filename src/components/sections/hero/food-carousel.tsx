"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * FoodCarousel Component
 *
 * Auto-rotating carousel of food images for the hero section.
 * Features smooth crossfade transitions between images.
 */

const foodImages = [
  {
    src: "/images/food/quarter-chicken-chips.jpg",
    alt: "Quarter Chicken with Chips",
  },
  {
    src: "/images/food/chicken-burger-chips.jpg",
    alt: "Chicken Burger with Chips",
  },
  {
    src: "/images/food/family-pack.jpg",
    alt: "Family Pack",
  },
  {
    src: "/images/food/half-pack.jpg",
    alt: "Half Chicken Pack",
  },
  {
    src: "/images/food/chicken-livers.jpg",
    alt: "Chicken Livers",
  },
]

interface FoodCarouselProps {
  className?: string
}

export function FoodCarousel({ className }: FoodCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodImages.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main carousel container */}
      <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {foodImages.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {foodImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-charcoal/20 hover:bg-charcoal/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodCarousel
