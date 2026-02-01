import { cn } from "@/lib/utils"
import Image from "next/image"

/**
 * PageHeader Component - Barcelos South Africa
 *
 * Consistent page header with title and optional subtitle, badge, and background image.
 * Used across all pages for visual consistency.
 *
 * Variants:
 * - Default: Simple header with solid background
 * - Hero: Full-width header with background image overlay (similar to Heritage section)
 */

interface PageHeaderProps {
  /** Page title */
  title: string
  /** Optional subtitle/description */
  subtitle?: string
  /** Optional badge text (appears above title) */
  badge?: string
  /** Optional background image URL for hero variant */
  backgroundImage?: string
  /** Additional CSS classes */
  className?: string
  /** Text alignment */
  align?: "left" | "center"
  /** Header size variant */
  size?: "default" | "large" | "hero"
  /** Overlay darkness for background images (0-100) */
  overlayOpacity?: number
  /** Optional children for additional content below subtitle */
  children?: React.ReactNode
}

export function PageHeader({
  title,
  subtitle,
  badge,
  backgroundImage,
  className,
  align = "center",
  size = "default",
  overlayOpacity = 60,
  children,
}: PageHeaderProps) {
  // Determine if we're using hero mode (background image present)
  const isHero = Boolean(backgroundImage)

  // Size-specific classes
  const sizeClasses = {
    default: "py-12 md:py-16",
    large: "py-16 md:py-24",
    hero: "py-24 md:py-32 lg:py-40 min-h-[300px] md:min-h-[400px]",
  }

  // Title size classes
  const titleSizeClasses = {
    default: "text-3xl md:text-4xl",
    large: "text-4xl md:text-5xl",
    hero: "text-4xl md:text-5xl lg:text-6xl",
  }

  return (
    <header
      className={cn(
        "relative w-full overflow-hidden",
        isHero ? sizeClasses.hero : sizeClasses[size],
        !isHero && "bg-neutral-50",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 z-10 bg-charcoal"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      )}

      {/* Content */}
      <div
        className={cn(
          "container-wide relative z-20",
          align === "center" && "flex flex-col items-center"
        )}
      >
        {/* Badge */}
        {badge && (
          <span
            className={cn(
              "inline-block mb-4 px-4 py-1.5 text-sm font-medium uppercase tracking-wider rounded-full",
              isHero
                ? "bg-barcelos-red text-white"
                : "bg-barcelos-red/10 text-barcelos-red"
            )}
          >
            {badge}
          </span>
        )}

        {/* Title */}
        <h1
          className={cn(
            "font-display font-bold",
            titleSizeClasses[isHero ? "hero" : size],
            isHero ? "text-white" : "text-charcoal"
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-lg md:text-xl max-w-2xl",
              isHero ? "text-white/90" : "text-charcoal-medium",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Additional content */}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  )
}

export default PageHeader
