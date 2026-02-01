import { Header, Footer } from "@/components/layout"
import {
  HeroSection,
  WhyBarcelosSection,
  FranchiseCTA,
  ContactSection,
} from "@/components/sections"
import { FloatingNavbar } from "@/components/ui/floating-navbar"

/**
 * Homepage - Barcelos South Africa
 *
 * Main landing page with key sections.
 *
 * Sections:
 * - Hero: Brand introduction with Aurora effect
 * - Why Barcelos: Value propositions
 * - Franchise (#franchise): Partnership opportunity
 * - Contact (#contact): Get in touch
 *
 * Our Story has a dedicated page
 * Menu/Locations handled by ServeUp (orders.barcelos.co.za)
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

        {/* Franchise - Partnership opportunity (#franchise) */}
        <FranchiseCTA />

        {/* Contact - Get in touch (#contact) */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
