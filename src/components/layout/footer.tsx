"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter, MapPin, Mail } from "lucide-react"

import { footerNavSections, socialLinks } from "@/lib/constants/navigation"
import { siteConfig, getDisplayValue } from "@/lib/constants/site"
import { Logo } from "@/components/shared/logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * Footer Component - Barcelos India
 *
 * Full-width footer with:
 * - Brand info and tagline
 * - Navigation sections (4-column grid on desktop, accordion on mobile)
 * - Enhanced social links with scale + glow effects
 * - Contact information with icons
 * - Copyright with legal links
 */
export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white" role="contentinfo">
      {/* Top gradient border - subtle Barcelos red accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-barcelos-red/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="container-wide px-6 py-16 md:section-padding">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Logo variant="full" size="lg" className="brightness-0 invert" />
            </Link>

            {/* Tagline - Italic styled */}
            <p className="text-neutral-400 text-sm italic mt-3 mb-2">
              Authentic Afro-Portuguese Flame-Grilled Chicken
            </p>

            {/* Description */}
            <p className="text-neutral-400 mb-8 max-w-xs text-sm leading-relaxed">
              {siteConfig.tagline}. Experience authentic Portuguese flame-grilled
              chicken, perfected for Indian taste.
            </p>

            {/* Enhanced Social Links - Larger with scale + glow */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-barcelos-red hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-barcelos-red/20"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <SocialIcon name={social.icon} className="size-5 text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns - Desktop (hidden on mobile) */}
          <div className="hidden md:col-span-4 md:grid md:grid-cols-4 gap-8">
            {footerNavSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-base font-semibold text-neutral-300 uppercase tracking-wide mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-neutral-400 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Navigation Accordion - Mobile (hidden on desktop) */}
          <div className="md:hidden col-span-1">
            <Accordion type="multiple" className="space-y-2">
              {footerNavSections.map((section) => (
                <AccordionItem
                  key={section.title}
                  value={section.title.toLowerCase()}
                  className="border-b border-neutral-800"
                >
                  <AccordionTrigger className="py-3 text-base font-semibold text-neutral-300 uppercase tracking-wide hover:text-white hover:no-underline">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="text-neutral-400 hover:text-white transition-colors text-sm"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Enhanced Contact Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Contact Info - Enhanced with icon effects */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="size-4 text-barcelos-red group-hover:scale-110 transition-transform" />
                <span className="text-sm">{siteConfig.contact.email}</span>
              </a>
              <Link
                href="/locations"
                className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <MapPin className="size-4 text-barcelos-red group-hover:scale-110 transition-transform" />
                <span className="text-sm">Find a Restaurant</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-wide px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-500">
            <p>
              {siteConfig.copyright.year} {siteConfig.copyright.holder}.{" "}
              {siteConfig.copyright.text}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-neutral-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-neutral-300 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/**
 * Social Icon Helper Component
 * Enhanced with className prop for styling
 */
function SocialIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "instagram":
      return <Instagram className={className} />
    case "facebook":
      return <Facebook className={className} />
    case "twitter":
      return <Twitter className={className} />
    default:
      return null
  }
}

export default Footer
