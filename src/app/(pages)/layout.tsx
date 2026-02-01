import { FloatingNavbar } from "@/components/ui/floating-navbar"

/**
 * Pages Layout - Barcelos South Africa
 *
 * Shared layout for all pages in the (pages) route group.
 * Includes the FloatingNavbar for consistent navigation across all pages.
 */
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNavbar />
      {children}
    </>
  )
}
