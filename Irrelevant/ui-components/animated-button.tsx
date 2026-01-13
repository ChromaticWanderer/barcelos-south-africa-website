"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * AnimatedButton Component - Enhanced Button with Micro-Interactions
 *
 * Extends the base button with:
 * - Scale press effect (scale down on click, spring back)
 * - Optional ripple effect on primary/cta variants
 * - Better focus states with animations
 * - Respects prefers-reduced-motion
 *
 * For simpler use cases, use the base Button component.
 */

const animatedButtonVariants = cva(
  // Base styles - all buttons
  [
    "relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-lg text-sm font-semibold",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "overflow-hidden", // For ripple effect
  ],
  {
    variants: {
      variant: {
        // Primary - Barcelos Red with ripple
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-barcelos-red-light hover:shadow-primary",
        ],

        // Secondary - Flame Yellow
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/90",
        ],

        // Outline - Red border
        outline: [
          "border-2 border-primary bg-transparent text-primary",
          "hover:bg-primary hover:text-primary-foreground",
        ],

        // Ghost - Transparent
        ghost: [
          "hover:bg-accent hover:text-accent-foreground",
        ],

        // CTA - Enhanced primary with ripple
        cta: [
          "bg-primary text-primary-foreground",
          "hover:bg-barcelos-red-light hover:shadow-primary-lg",
        ],

        // Order - Success green
        order: [
          "bg-success text-white",
          "hover:bg-success/90",
        ],
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        lg: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
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

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
  enableRipple?: boolean
}

/**
 * Ripple effect component
 */
function Ripple({
  x,
  y,
  size,
  onComplete
}: {
  x: number
  y: number
  size: number
  onComplete: () => void
}) {
  return (
    <motion.span
      className="absolute bg-white/30 rounded-full pointer-events-none"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={onComplete}
    />
  )
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, enableRipple = true, children, onClick, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion()
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number; size: number }>>([])
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    // Merge refs
    React.useImperativeHandle(ref, () => buttonRef.current!)

    // Determine if ripple should be shown (only for filled variants)
    const showRipple = enableRipple && !prefersReducedMotion && (variant === 'default' || variant === 'cta' || variant === 'order')

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Create ripple effect
      if (showRipple && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const size = Math.max(rect.width, rect.height)

        setRipples((prev) => [...prev, { id: Date.now(), x, y, size }])
      }

      // Call original onClick
      onClick?.(e)
    }

    const removeRipple = (id: number) => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }

    // If reduced motion, render as simple button
    if (prefersReducedMotion) {
      const Comp = asChild ? Slot : "button"
      return (
        <Comp
          data-slot="animated-button"
          className={cn(animatedButtonVariants({ variant, size, className }), "transition-colors duration-150")}
          ref={ref}
          onClick={onClick}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    // Use Slot for asChild pattern
    if (asChild) {
      return (
        <Slot
          data-slot="animated-button"
          className={cn(animatedButtonVariants({ variant, size, className }), "transition-all duration-150")}
          ref={ref}
          onClick={onClick}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    // Filter out React DOM event handlers that conflict with Motion
    const {
      onAnimationStart,
      onAnimationEnd,
      onDrag,
      onDragStart,
      onDragEnd,
      ...motionSafeProps
    } = props

    return (
      <motion.button
        data-slot="animated-button"
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={buttonRef}
        onClick={handleClick}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -2 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        {...motionSafeProps}
      >
        {/* Ripple effects */}
        {showRipple && ripples.map((ripple) => (
          <Ripple
            key={ripple.id}
            x={ripple.x}
            y={ripple.y}
            size={ripple.size}
            onComplete={() => removeRipple(ripple.id)}
          />
        ))}

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, animatedButtonVariants }
