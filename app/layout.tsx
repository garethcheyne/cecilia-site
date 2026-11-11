import type { Metadata } from "next"
import { Geist, Instrument_Sans } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const instrument = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: {
    default: "Cecilia: the organ recorder for churches",
    template: "%s · Cecilia",
  },
  description:
    "Cecilia records your organist, plays the music back on any organ over MIDI, and runs the service from a phone or tablet. Free and open source.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
