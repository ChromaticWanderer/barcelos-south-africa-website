"use client"

import * as React from "react"
import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

/**
 * Cloudflare Turnstile Component
 *
 * Bot protection with:
 * - Privacy-friendly (no data collection)
 * - Invisible or managed challenge mode
 * - Seamless integration with forms
 *
 * Environment variable: NEXT_PUBLIC_TURNSTILE_SITE_KEY
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: TurnstileOptions
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
      getResponse: (widgetId: string) => string | undefined
    }
    onTurnstileLoad?: () => void
  }
}

interface TurnstileOptions {
  sitekey: string
  callback?: (token: string) => void
  "error-callback"?: (error: Error) => void
  "expired-callback"?: () => void
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "compact" | "invisible"
  appearance?: "always" | "execute" | "interaction-only"
  language?: string
  retry?: "auto" | "never"
  "retry-interval"?: number
  "refresh-expired"?: "auto" | "manual" | "never"
}

interface TurnstileProps {
  siteKey?: string
  onVerify: (token: string) => void
  onError?: (error: Error) => void
  onExpire?: () => void
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "compact" | "invisible"
  className?: string
}

export function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = "auto",
  size = "normal",
  className,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)

  const effectiveSiteKey = siteKey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || !effectiveSiteKey) return
    if (widgetIdRef.current) return // Already rendered

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: effectiveSiteKey,
      callback: onVerify,
      "error-callback": onError,
      "expired-callback": onExpire,
      theme,
      size,
      appearance: size === "invisible" ? "execute" : "always",
    })
  }, [effectiveSiteKey, onVerify, onError, onExpire, theme, size])

  useEffect(() => {
    // Load Turnstile script if not already loaded
    if (!scriptLoadedRef.current && !window.turnstile) {
      scriptLoadedRef.current = true

      window.onTurnstileLoad = () => {
        renderWidget()
      }

      const script = document.createElement("script")
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    } else if (window.turnstile) {
      renderWidget()
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [renderWidget])

  if (!effectiveSiteKey) {
    console.warn("Turnstile: No site key provided. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY environment variable.")
    return null
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-center",
        size === "invisible" && "hidden",
        className
      )}
      aria-label="Bot verification"
    />
  )
}

/**
 * Hook to get Turnstile token for invisible mode
 */
export function useTurnstileToken() {
  const [token, setToken] = React.useState<string | null>(null)
  const [error, setError] = React.useState<Error | null>(null)
  const [isVerifying, setIsVerifying] = React.useState(false)

  const handleVerify = useCallback((newToken: string) => {
    setToken(newToken)
    setIsVerifying(false)
    setError(null)
  }, [])

  const handleError = useCallback((err: Error) => {
    setError(err)
    setIsVerifying(false)
    setToken(null)
  }, [])

  const handleExpire = useCallback(() => {
    setToken(null)
    setIsVerifying(false)
  }, [])

  const reset = useCallback(() => {
    setToken(null)
    setError(null)
    setIsVerifying(false)
  }, [])

  return {
    token,
    error,
    isVerifying,
    isVerified: !!token,
    handleVerify,
    handleError,
    handleExpire,
    reset,
  }
}

export default Turnstile
