import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card Component - Barcelos Design System
 *
 * Provides structured container for content with multiple variants:
 * - default: Standard card with subtle border
 * - interactive: Hover lift effect for clickable cards (menu items, stores)
 * - featured: Highlighted content with brand accent border (offers)
 * - ghost: Minimal, borderless (testimonials)
 */

interface CardProps extends React.ComponentProps<"div"> {
  variant?: "default" | "interactive" | "featured" | "ghost"
}

function Card({ className, variant = "default", ...props }: CardProps) {
  const variantClasses = {
    default: "border shadow-sm",
    interactive: [
      "border shadow-sm",
      "transition-all duration-200",
      "hover:shadow-lg hover:-translate-y-1",
      "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
    ],
    featured: [
      "border-2 border-primary/20 shadow-md",
      "transition-all duration-200",
      "hover:shadow-xl hover:border-primary/40",
    ],
    ghost: "border-0 shadow-none bg-transparent",
  }

  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-xl",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-charcoal",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "absolute top-4 right-4",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

/**
 * CardImage - Optimized image container for cards
 * Maintains aspect ratio and handles overflow
 */
function CardImage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-image"
      className={cn(
        "relative aspect-video overflow-hidden rounded-t-xl",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardImage,
}
