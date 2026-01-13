"use client"

import * as React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardImage } from "@/components/ui/card"

/**
 * MenuCard Component
 *
 * Displays a featured menu item with:
 * - Image with hover zoom effect
 * - Product name and description
 * - Tags (bestseller, new, etc.)
 * - Price note
 */

interface MenuCardProps {
  name: string
  description: string
  image: string
  tags?: string[]
  priceNote?: string
  className?: string
}

const tagStyles: Record<string, string> = {
  bestseller: "bg-flame-yellow text-charcoal",
  signature: "bg-primary text-white",
  new: "bg-success text-white",
  quick: "bg-info text-white",
  family: "bg-charcoal text-white",
  value: "bg-neutral-700 text-white",
  veg: "bg-veg-green text-white",
}

export function MenuCard({
  name,
  description,
  image,
  tags = [],
  priceNote,
  className,
}: MenuCardProps) {
  return (
    <Card
      variant="interactive"
      className={cn("overflow-hidden group", className)}
    >
      {/* Image Container */}
      <CardImage className="relative">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tags overlay */}
        {tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-2.5 py-1 text-xs font-semibold rounded-full capitalize",
                  tagStyles[tag] || "bg-neutral-800 text-white"
                )}
              >
                {tag === "bestseller" && (
                  <Star className="inline size-3 mr-1 -mt-0.5" />
                )}
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardImage>

      {/* Content */}
      <CardContent className="p-5">
        <h3 className="font-display font-semibold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-charcoal-medium line-clamp-2 mb-3">
          {description}
        </p>
        {priceNote && (
          <p className="text-xs text-charcoal-light italic">{priceNote}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default MenuCard
