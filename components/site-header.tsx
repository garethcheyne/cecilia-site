import Link from "next/link"

import { Mark } from "@/components/mark"
import { APP_REPO } from "@/lib/site"

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/docs/", label: "Guide" },
  { href: "/library/", label: "Library" },
  { href: "/about/", label: "About" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-glass text-glass-ink">
            <Mark className="size-6" />
          </span>
          Cecilia
        </Link>
        <nav
          aria-label="Main"
          className="ml-auto flex items-center gap-1 text-sm sm:gap-4"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hidden rounded-md px-2 py-1 text-muted hover:text-ink sm:inline"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/docs/"
            className="rounded-md px-2 py-1 text-muted hover:text-ink sm:hidden"
          >
            Guide
          </Link>
          <a
            href={APP_REPO}
            className="rounded-md px-2 py-1 text-muted hover:text-ink"
          >
            GitHub
          </a>
          <Link
            href="/download/"
            className="rounded-full bg-glass px-4 py-1.5 font-medium text-glass-ink hover:opacity-90"
          >
            Get Cecilia
          </Link>
        </nav>
      </div>
    </header>
  )
}
