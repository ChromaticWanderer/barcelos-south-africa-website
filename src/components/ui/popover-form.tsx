"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, Check, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * PopoverForm Component
 *
 * An animated popover form component inspired by Origin UI.
 * Features smooth animations, loading states, and success feedback.
 */

interface PopoverFormProps {
  title: string
  open: boolean
  setOpen: (open: boolean) => void
  width?: string
  height?: string
  showCloseButton?: boolean
  showSuccess?: boolean
  openChild: React.ReactNode
  successChild?: React.ReactNode
  className?: string
}

export function PopoverForm({
  title,
  open,
  setOpen,
  width = "320px",
  height = "auto",
  showCloseButton = true,
  showSuccess = false,
  openChild,
  successChild,
  className,
}: PopoverFormProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Trigger Button */}
      <motion.button
        layoutId="popover-form-trigger"
        onClick={() => setOpen(true)}
        className={cn(
          "px-6 py-3 rounded-xl font-semibold text-white",
          "bg-barcelos-red hover:bg-barcelos-red-light",
          "shadow-lg shadow-barcelos-red/20",
          "transition-colors duration-200",
          open && "invisible"
        )}
        style={{ borderRadius: 12 }}
      >
        {title}
      </motion.button>

      {/* Popover */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />

            {/* Popover Content */}
            <motion.div
              layoutId="popover-form-trigger"
              className={cn(
                "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                "bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl",
                "overflow-hidden"
              )}
              style={{
                width,
                minHeight: height !== "auto" ? height : undefined,
                borderRadius: 16,
              }}
            >
              {/* Close Button */}
              {showCloseButton && (
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="size-4 text-neutral-500" />
                </button>
              )}

              {/* Content */}
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {successChild}
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {openChild}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * PopoverFormButton - Submit button with loading state
 */
interface PopoverFormButtonProps {
  loading?: boolean
  text: string
  className?: string
}

export function PopoverFormButton({
  loading = false,
  text,
  className,
}: PopoverFormButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={cn(
        "w-full py-2.5 px-4 rounded-lg font-semibold text-white",
        "bg-barcelos-red hover:bg-barcelos-red-light",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        "transition-colors duration-200",
        "flex items-center justify-center gap-2",
        className
      )}
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        text
      )}
    </button>
  )
}

/**
 * PopoverFormSuccess - Success state display
 */
interface PopoverFormSuccessProps {
  title: string
  description?: string
}

export function PopoverFormSuccess({
  title,
  description,
}: PopoverFormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <Check className="size-8 text-green-600" />
      </div>
      <h3 className="font-semibold text-lg text-charcoal mb-2">{title}</h3>
      {description && (
        <p className="text-charcoal-medium text-sm">{description}</p>
      )}
    </div>
  )
}

/**
 * PopoverFormSeparator - Horizontal separator with cutouts
 */
export function PopoverFormSeparator() {
  return <div className="absolute left-0 right-0 top-0 h-px bg-neutral-200 dark:bg-neutral-700" />
}

/**
 * PopoverFormCutOutLeftIcon - Decorative cutout
 */
export function PopoverFormCutOutLeftIcon() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      className="text-white dark:text-neutral-900"
    >
      <path
        d="M8 0H0C4.41828 0 8 2.68629 8 6C8 9.31371 4.41828 12 0 12H8V0Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * PopoverFormCutOutRightIcon - Decorative cutout
 */
export function PopoverFormCutOutRightIcon() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      className="text-white dark:text-neutral-900"
    >
      <path
        d="M8 0H0C4.41828 0 8 2.68629 8 6C8 9.31371 4.41828 12 0 12H8V0Z"
        fill="currentColor"
      />
    </svg>
  )
}
