import type { Metadata } from "next"
import Link from "next/link"

import { CATALOGUE, LIBRARY_REPO } from "@/lib/site"

export const metadata: Metadata = { title: "Library" }

interface Catalogue {
  music: {
    id: string
    title: string
    composer: string
    melody: string
    licence: string
    tags: string[]
    verses: number
    duration_ms: number
  }[]
  organs: {
    id: string
    name: string
    meta: { maker: string; model: string; confidence: string }
    stops: number
  }[]
}

const CONFIDENCE: Record<string, string> = {
  template: "Template: stop numbers not yet checked on an organ",
  learned: "Learned on a real organ",
  verified: "Learned and tested with playback",
}

/** Read the catalogue when the site is built. */
async function load(): Promise<Catalogue | null> {
  try {
    const res = await fetch(CATALOGUE, { cache: "force-cache" })
    return res.ok ? ((await res.json()) as Catalogue) : null
  } catch {
    return null
  }
}

const clock = (ms: number) =>
  `${Math.floor(ms / 60000)}:${String(Math.floor(ms / 1000) % 60).padStart(2, "0")}`

export default async function Library() {
  const cat = await load()
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        The shared library
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Music and organ setups shared by Cecilia users. Add any of them from
        inside Cecilia, or{" "}
        <Link
          href="/docs/sharing/"
          className="text-glass underline underline-offset-4"
        >
          share your own
        </Link>
        .
      </p>
      {!cat ? (
        <p className="mt-10 text-muted">
          The catalogue couldn’t be loaded just now. Browse it on{" "}
          <a href={LIBRARY_REPO} className="underline">
            GitHub
          </a>
          .
        </p>
      ) : (
        <>
          <h2 className="mt-14 font-display text-2xl font-semibold">Music</h2>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-card">
            {cat.music.map((m) => (
              <li
                key={m.id}
                className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-4"
              >
                <span className="font-display text-lg font-semibold">
                  {m.title}
                </span>
                <span className="text-sm text-muted">
                  {[m.melody, m.composer].filter(Boolean).join(" · ")}
                </span>
                <span className="ml-auto text-sm text-muted tabular-nums">
                  {m.verses > 1 ? `${m.verses} verses · ` : ""}
                  {clock(m.duration_ms)}
                </span>
                <span className="w-full text-xs text-muted">
                  {m.tags.join(", ")} ·{" "}
                  {m.licence === "public-domain" ? "Public domain" : m.licence}
                </span>
              </li>
            ))}
          </ul>
          <h2 className="mt-14 font-display text-2xl font-semibold">Organs</h2>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-card">
            {cat.organs.map((o) => (
              <li key={o.id} className="flex flex-col gap-1 px-5 py-4">
                <span className="font-display text-lg font-semibold">
                  {o.meta.maker} {o.meta.model}
                </span>
                <span className="text-sm text-muted">
                  {o.stops} stops ·{" "}
                  {CONFIDENCE[o.meta.confidence] ?? o.meta.confidence}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
