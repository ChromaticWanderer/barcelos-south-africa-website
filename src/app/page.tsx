import { Header, Footer } from "@/components/layout"
import {
  HeroSection,
  WhyBarcelosSection,
  FeaturedMenuSection,
  FranchiseCTA,
  ContactSection,
} from "@/components/sections"
import { FloatingNavbar } from "@/components/ui/floating-navbar"

/**
 * Homepage - Barcelos India
 *
 * Main landing page with key sections.
 *
 * Sections:
 * - Hero: Brand introduction with Aurora effect
 * - Why Barcelos: Value propositions
 * - Featured Menu: Signature items
 * - Franchise (#franchise): Partnership opportunity
 * - Contact (#contact): Get in touch
 *
 * Our Story and Locations have dedicated pages
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <FloatingNavbar />

      <main id="main-content" className="flex-1">
        {/* Hero - Full viewport with Aurora effect */}
        <HeroSection />

        {/* Why Barcelos - Value propositions */}
        <WhyBarcelosSection />

        {/* Featured Menu - Signature items showcase */}
        <FeaturedMenuSection />

        {/* Franchise - Partnership opportunity (#franchise) */}
        <FranchiseCTA />

        {/* Contact - Get in touch (#contact) */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
