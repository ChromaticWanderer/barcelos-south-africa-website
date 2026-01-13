"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

/**
 * Breadcrumb Component - Barcelos India
 *
 * Accessible breadcrumb navigation with proper ARIA attributes.
 * Follows WAI-ARIA breadcrumb pattern.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Locations", href: "/locations" },
 *     { label: "Nagpur" }
 *   ]}
 * />
 * ```
 */

export interface BreadcrumbItem {
  /** Display text for the breadcrumb item */
  label: string
  /** URL for the breadcrumb item (omit for current page) */
  href?: string
}

interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[]
  /** Additional CSS classes */
  className?: string
  /** Show home icon instead of "Home" text */
  showHomeIcon?: boolean
  /** Separator style */
  separator?: "chevron" | "slash"
  /** Color scheme */
  variant?: "default" | "light" | "dark"
}

export function Breadcrumb({
  items,
  className,
  showHomeIcon = true,
  separator = "chevron",
  variant = "default",
}: BreadcrumbProps) {
  // Add Home as first item if not already present
  const breadcrumbItems: BreadcrumbItem[] =
    items[0]?.label.toLowerCase() === "home"
      ? items
      : [{ label: "Home", href: "/" }, ...items]

  // Variant-specific classes
  const variantClasses = {
    default: {
      text: "text-charcoal-medium",
      active: "text-charcoal",
      separator: "text-charcoal-light",
    },
    light: {
      text: "text-white/70",
      active: "text-white",
      separator: "text-white/50",
    },
    dark: {
      text: "text-charcoal-medium",
      active: "text-barcelos-red",
      separator: "text-charcoal-light",
    },
  }

  const colors = variantClasses[variant]

  // Render separator
  const renderSeparator = () => {
    if (separator === "slash") {
      return (
        <span
          className={cn("mx-2 select-none", colors.separator)}
          aria-hidden="true"
        >
          /
        </span>
      )
    }
    return (
      <ChevronRight
        className={cn("mx-2 h-4 w-4 flex-shrink-0", colors.separator)}
        aria-hidden="true"
      />
    )
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("py-3", className)}
    >
      <ol
        className="flex flex-wrap items-center text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === breadcrumbItems.length - 1
          const isHome = isFirst && item.label.toLowerCase() === "home"

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {/* Separator (not for first item) */}
              {!isFirst && renderSeparator()}

              {/* Breadcrumb link or text */}
              {isLast || !item.href ? (
                // Current page (no link)
                <span
                  className={cn(
                    "font-medium",
                    isLast ? colors.active : colors.text
                  )}
                  aria-current={isLast ? "page" : undefined}
                  itemProp="name"
                >
                  {isHome && showHomeIcon ? (
                    <span className="flex items-center gap-1">
                      <Home className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">Home</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </span>
              ) : (
                // Linked item
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-barcelos-red transition-colors duration-200",
                    colors.text
                  )}
                  itemProp="item"
                >
                  {isHome && showHomeIcon ? (
                    <span className="flex items-center gap-1">
                      <Home className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only" itemProp="name">
                        Home
                      </span>
                    </span>
                  ) : (
                    <span itemProp="name">{item.label}</span>
                  )}
                </Link>
              )}

              {/* Schema.org position */}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/**
 * Generate breadcrumb items from a URL path
 *
 * @example
 * ```ts
 * generateBreadcrumbsFromPath("/locations/nagpur")
 * // Returns: [
 * //   { label: "Home", href: "/" },
 * //   { label: "Locations", href: "/locations" },
 * //   { label: "Nagpur" }
 * // ]
 * ```
 */
export function generateBreadcrumbsFromPath(
  path: string,
  customLabels?: Record<string, string>
): BreadcrumbItem[] {
  // Remove leading/trailing slashes and split
  const segments = path.replace(/^\/|\/$/g, "").split("/").filter(Boolean)

  if (segments.length === 0) {
    return [{ label: "Home", href: "/" }]
  }

  const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

  let currentPath = ""
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1

    // Format label: replace hyphens with spaces and capitalize
    const defaultLabel = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const label = customLabels?.[segment] ?? defaultLabel

    items.push({
      label,
      href: isLast ? undefined : currentPath,
    })
  })

  return items
}

export default Breadcrumb
