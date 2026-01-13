/**
 * UI Components Index
 *
 * Central export point for all UI components.
 * Organized by category for easier discovery.
 */

// ============================================
// Core Design System Components
// ============================================
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card'
export { Input } from './input'

// ============================================
// Animation & Motion Components
// ============================================
export { ScrollReveal } from './scroll-reveal'
export { StaggerChildren, StaggerItem } from './stagger-children'
export { ScrollProgress } from './scroll-progress'
export { CountUp } from './count-up'

// ============================================
// Loading States
// ============================================
export {
  Skeleton,
  CardSkeleton,
  LocationCardSkeleton,
  TestimonialCardSkeleton,
  StatSkeleton
} from './skeleton'

// ============================================
// Overlay & Dialog Components
// ============================================
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from './sheet'

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from './accordion'

export {
  PopoverForm,
  PopoverFormButton,
  PopoverFormSuccess,
  PopoverFormSeparator,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon
} from './popover-form'

// ============================================
// Aceternity-Inspired Components
// ============================================
export { HeroHighlight, Highlight } from './hero-highlight'
export { LampContainer } from './lamp'
export { LayoutGrid } from './layout-grid'
export { Button as MovingBorderButton } from './moving-border'
export { FloatingNavbar } from './floating-navbar'
export { TextGenerateEffect } from './text-generate-effect'
