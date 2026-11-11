import Link from "next/link"

import { APP_REPO, LIBRARY_REPO, ORGANASSIST, SITE_REPO } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm sm:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <p className="font-display text-lg font-semibold">Cecilia</p>
          <p className="max-w-sm text-muted">
            A free, open-source organ recorder and player, named after the
            patron saint of music. Inspired by{" "}
            <a
              href={ORGANASSIST}
              className="underline underline-offset-2 hover:text-ink"
            >
              OrganAssist
            </a>{" "}
            by David Glover. An independent project; see{" "}
            <Link
              href="/about/"
              className="underline underline-offset-2 hover:text-ink"
            >
              About
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Use it</p>
          <Link href="/download/" className="text-muted hover:text-ink">
            Download
          </Link>
          <Link
            href="/docs/getting-started/"
            className="text-muted hover:text-ink"
          >
            Getting started
          </Link>
          <Link
            href="/docs/raspberry-pi/"
            className="text-muted hover:text-ink"
          >
            Raspberry Pi
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Share</p>
          <Link href="/library/" className="text-muted hover:text-ink">
            Library
          </Link>
          <Link href="/docs/sharing/" className="text-muted hover:text-ink">
            Sharing music and organs
          </Link>
          <a href={LIBRARY_REPO} className="text-muted hover:text-ink">
            Library on GitHub
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Build it</p>
          <a href={APP_REPO} className="text-muted hover:text-ink">
            Source code
          </a>
          <Link href="/docs/developers/" className="text-muted hover:text-ink">
            For developers
          </Link>
          <a href={SITE_REPO} className="text-muted hover:text-ink">
            This website
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-10 text-xs text-muted">
        Cecilia is free software under the MIT licence. OrganAssist is © David
        Glover; Cecilia contains none of its code and is not affiliated with or
        endorsed by him.
      </p>
    </footer>
  )
}
