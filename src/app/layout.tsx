import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressWrapper } from "@/components/layout/scroll-progress-wrapper";

/**
 * Inter - Body/UI Font
 * Loaded from Google Fonts via next/font for optimal performance
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Site Metadata - Barcelos India
 * SEO optimized for Indian market
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://barcelos.co.in"),
  title: {
    default: "Barcelos India | Flame-Grilled Chicken - Portuguese Heritage",
    template: "%s | Barcelos India",
  },
  description:
    "Experience authentic Portuguese flame-grilled chicken at Barcelos India. Premium quality, bold flavours, and the signature Peri-Peri taste perfected for Indian palates. Find a restaurant near you or order online.",
  keywords: [
    "Barcelos",
    "Barcelos India",
    "flame-grilled chicken",
    "Portuguese chicken",
    "Peri-Peri chicken",
    "grilled chicken restaurant",
    "fast casual dining",
    "QSR India",
    "chicken restaurant India",
    "premium chicken",
  ],
  authors: [{ name: "Barcelos India" }],
  creator: "Barcelos India",
  publisher: "Barcelos India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://barcelos.co.in",
    siteName: "Barcelos India",
    title: "Barcelos India | Flame-Grilled Chicken - Portuguese Heritage",
    description:
      "Experience authentic Portuguese flame-grilled chicken at Barcelos India. Premium quality, bold flavours, and the signature Peri-Peri taste.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barcelos India - Flame-Grilled Chicken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcelos India | Flame-Grilled Chicken",
    description:
      "Experience authentic Portuguese flame-grilled chicken at Barcelos India.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

/**
 * Viewport Configuration
 * Optimized for mobile-first experience
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Congenial Font - Adobe Typekit */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qdf3rqo.css"
        />

        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
        style={{
          // Set Congenial as display font via inline style
          // This ensures Typekit font is applied correctly
          ["--font-congenial" as string]: "congenial, system-ui, sans-serif",
        }}
      >
        {/* Skip to main content - Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Scroll Progress Indicator */}
        <ScrollProgressWrapper />

        {/* Main content wrapper */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
