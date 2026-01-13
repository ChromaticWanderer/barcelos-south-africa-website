import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button Component - Barcelos Design System
 *
 * Variants:
 * - default: Barcelos Red primary CTAs
 * - secondary: Flame Yellow secondary actions
 * - outline: Red outlined, for subtle actions
 * - ghost: Transparent, for navigation/close
 * - link: Text link style
 * - destructive: Error/danger actions
 * - cta: Primary with enhanced hover effects (hero sections)
 * - order: Success green for order actions
 *
 * Sizes:
 * - sm: 32px height, compact
 * - default: 40px height, standard
 * - lg: 48px height, hero CTAs
 * - icon: Square icon buttons
 */
const buttonVariants = cva(
  // Base styles - all buttons
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-lg text-sm font-semibold",
    "transition-all duration-150",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  ],
  {
    variants: {
      variant: {
        // Primary - Barcelos Red
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-barcelos-red-light hover:shadow-primary hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-sm",
        ],

        // Secondary - Flame Yellow
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/90 hover:-translate-y-0.5",
          "active:translate-y-0",
        ],

        // Outline - Red border
        outline: [
          "border-2 border-primary bg-transparent text-primary",
          "hover:bg-primary hover:text-primary-foreground",
          "active:bg-barcelos-red-dark",
        ],

        // Ghost - Transparent
        ghost: [
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
        ],

        // Link - Text only
        link: [
          "text-primary underline-offset-4",
          "hover:underline",
        ],

        // Destructive - Error red
        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/90",
          "focus-visible:ring-destructive/20",
        ],

        // CTA - Enhanced primary for hero sections
        cta: [
          "bg-primary text-primary-foreground",
          "hover:bg-barcelos-red-light hover:shadow-primary-lg hover:-translate-y-1",
          "active:translate-y-0 active:shadow-sm",
        ],

        // Order - Success green for ordering actions
        order: [
          "bg-success text-white",
          "hover:bg-success/90 hover:-translate-y-0.5",
          "active:translate-y-0",
        ],
      },
      size: {
        // Small - 32px height
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",

        // Default - 40px height (touch-friendly)
        default: "h-10 px-5 py-2 has-[>svg]:px-4",

        // Large - 48px height (hero CTAs)
        lg: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",

        // Icon buttons
        icon: "size-10",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
