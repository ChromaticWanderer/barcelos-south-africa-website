"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import {
  primaryNavItems,
  secondaryNavItems,
  orderNowConfig,
} from "@/lib/constants/navigation"
import { siteConfig } from "@/lib/constants/site"
import { Logo } from "@/components/shared/logo"

/**
 * Header Component - Barcelos India
 *
 * Responsive navigation header with:
 * - Logo
 * - Desktop navigation
 * - Mobile drawer navigation
 * - Order Now CTA (links to PetPooja)
 * - Sticky behaviour with backdrop blur
 */
export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Handle scroll for sticky header styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Spacer to push content below the fixed header */}
      <div className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44" aria-hidden="true" />

      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-200",
          isScrolled
            ? "shadow-lg"
            : ""
        )}
      >
        {/* Red background pattern */}
      <div
        className="absolute inset-0 bg-barcelos-red"
        style={{
          backgroundImage: 'url(/images/patterns/red-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="flex h-24 items-center justify-between sm:h-28 md:h-32 lg:h-36 xl:h-44">
          {/* Logo - White on Red */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label={`${siteConfig.name} - Home`}
          >
            <Image
              src="/images/logos/barcelos-logo-white-on-red.svg"
              alt="Barcelos - Flame Grilled Chicken"
              width={280}
              height={90}
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 w-auto"
              priority
            />
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Order Now CTA - White button with white moving border on red */}
            {orderNowConfig.comingSoon ? (
              <div
                className="bg-white/80 text-barcelos-red/70 font-semibold px-3 py-1.5 sm:px-6 sm:py-2.5 text-sm sm:text-base rounded-full cursor-not-allowed"
                aria-label="Online ordering coming soon"
              >
                <span className="hidden sm:inline">{orderNowConfig.comingSoonLabel}</span>
                <span className="sm:hidden">Soon</span>
              </div>
            ) : (
              <MovingBorderButton
                as="a"
                href={orderNowConfig.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={orderNowConfig.ariaLabel}
                borderRadius="1.75rem"
                className="bg-white text-barcelos-red font-semibold px-3 py-1.5 sm:px-6 sm:py-2.5 text-sm sm:text-base border-0"
                containerClassName="h-9 sm:h-11"
                borderClassName="bg-[radial-gradient(white_40%,transparent_60%)]"
              >
                <span className="hidden sm:inline">{orderNowConfig.label}</span>
                <span className="sm:hidden">Order</span>
                <ExternalLink className="size-3 sm:size-4 ml-1 sm:ml-2" />
              </MovingBorderButton>
            )}

            {/* Mobile Menu Trigger - only visible below md (mobile only) */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <MobileNav
                  pathname={pathname}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      </header>
    </>
  )
}

/**
 * Mobile Navigation Component
 */
interface MobileNavProps {
  pathname: string
  onClose: () => void
}

function MobileNav({ pathname, onClose }: MobileNavProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Accessible title for screen readers */}
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Logo variant="full" size="sm" />
        <SheetClose asChild>
          <Button variant="ghost" size="icon" aria-label="Close menu">
            <X className="size-5" />
          </Button>
        </SheetClose>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-auto p-4" aria-label="Mobile navigation">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Menu
          </p>
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-charcoal-medium hover:bg-muted hover:text-charcoal"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            More
          </p>
          {secondaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-charcoal-medium hover:bg-muted hover:text-charcoal"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Order Now CTA */}
      <div className="p-4 border-t">
        {orderNowConfig.comingSoon ? (
          <div
            className="w-full h-12 flex items-center justify-center bg-primary/50 text-white/70 font-semibold px-6 py-3 rounded-full cursor-not-allowed"
            aria-label="Online ordering coming soon"
          >
            {orderNowConfig.comingSoonLabel}
          </div>
        ) : (
          <MovingBorderButton
            as="a"
            href={orderNowConfig.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={orderNowConfig.ariaLabel}
            borderRadius="1.75rem"
            className="bg-primary text-white font-semibold px-6 py-3"
            containerClassName="w-full h-12"
          >
            {orderNowConfig.label}
            <ExternalLink className="size-4 ml-2" />
          </MovingBorderButton>
        )}
      </div>
    </div>
  )
}

export default Header
