import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

/**
 * Skeleton Component
 *
 * Base skeleton loading placeholder with pulse animation.
 * Use for creating loading states that match your UI structure.
 *
 * @example
 * <Skeleton className="h-6 w-3/4" />
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800",
        className
      )}
      aria-hidden="true"
    />
  )
}

/**
 * CardSkeleton Component
 *
 * Pre-built skeleton for menu/product cards.
 * Matches the structure of MenuCard component.
 */
export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg space-y-4" aria-hidden="true">
      <Skeleton className="h-48 w-full rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  )
}

/**
 * LocationCardSkeleton Component
 *
 * Pre-built skeleton for location cards.
 * Matches the structure of LocationCard component.
 */
export function LocationCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white overflow-hidden shadow-lg" aria-hidden="true">
      <Skeleton className="h-40 w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full mt-4 rounded-lg" />
      </div>
    </div>
  )
}

/**
 * TestimonialCardSkeleton Component
 *
 * Pre-built skeleton for testimonial cards.
 */
export function TestimonialCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm" aria-hidden="true">
      <Skeleton className="h-8 w-8 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-4" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  )
}

/**
 * StatSkeleton Component
 *
 * Pre-built skeleton for stats/numbers.
 */
export function StatSkeleton() {
  return (
    <div className="text-center" aria-hidden="true">
      <Skeleton className="h-10 w-20 mx-auto mb-2" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
  )
}

export default Skeleton
