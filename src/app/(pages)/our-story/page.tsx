import type { Metadata } from "next"

import { Header, Footer } from "@/components/layout"
import { HeritageSection } from "@/components/sections/heritage/heritage-section"

export const metadata: Metadata = {
  title: "Our Story | The Barcelos Heritage",
  description:
    "Discover the Barcelos journey - from the legendary Portuguese rooster to flame-grilled excellence across 17 countries. A story of passion, heritage, and authentic flavours since 1993.",
  keywords: [
    "Barcelos story",
    "Barcelos history",
    "Costa Mazzis",
    "Jared Mazzis",
    "Portuguese chicken history",
    "Barcelos rooster legend",
    "flame-grilled chicken heritage",
    "peri-peri origins",
  ],
  openGraph: {
    title: "Our Story | The Barcelos Heritage",
    description:
      "From a small restaurant in Pretoria to a global family spanning 17 countries - discover the flame-grilled legacy of Barcelos.",
    type: "website",
  },
}

/**
 * Our Story Page - Barcelos India
 *
 * Full heritage/story page featuring:
 * - The Legend of the Barcelos Rooster
 * - Costa Mazzis and the founding story
 * - Family heritage and values
 * - Global expansion journey
 * - Timeline of milestones
 *
 * Uses the existing HeritageSection component for content consistency.
 */
export default function OurStoryPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <HeritageSection />
      </main>

      <Footer />
    </>
  )
}
