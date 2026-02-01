"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * VimeoEmbed Component
 *
 * Responsive Vimeo video embed with:
 * - Privacy-enhanced mode (dnt=1)
 * - No Vimeo branding
 * - Configurable aspect ratio
 * - Lazy loading for performance
 */

interface VimeoEmbedProps {
  videoId: string
  title?: string
  className?: string
  aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16"
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "9:16": "aspect-[9/16]",
}

export function VimeoEmbed({
  videoId,
  title = "Barcelos Video",
  className,
  aspectRatio = "16:9",
  autoplay = false,
  muted = false,
  loop = false,
}: VimeoEmbedProps) {
  // Build Vimeo embed URL with privacy and branding options
  const params = new URLSearchParams({
    dnt: "1", // Do Not Track - privacy enhanced
    title: "0", // Hide video title
    byline: "0", // Hide author
    portrait: "0", // Hide author portrait
    color: "E31C23", // Barcelos red for controls
    ...(autoplay && { autoplay: "1" }),
    ...(muted && { muted: "1" }),
    ...(loop && { loop: "1" }),
  })

  const embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-charcoal",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}

export default VimeoEmbed
