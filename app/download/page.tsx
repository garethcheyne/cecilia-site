import type { Metadata } from "next"
import Link from "next/link"

import { APP_REPO, RELEASES } from "@/lib/site"

export const metadata: Metadata = { title: "Download" }

const OPTIONS = [
  {
    title: "Raspberry Pi",
    body: "The best home for Cecilia: a small box at the console that starts with the organ. Install the package for Raspberry Pi OS (64-bit or 32-bit).",
    link: { href: "/docs/raspberry-pi/", label: "Raspberry Pi setup guide" },
  },
  {
    title: "Windows",
    body: "Unzip anywhere and run cecilia.exe, then open http://127.0.0.1:7070 in your browser. Good for trying it out with the built-in simulator.",
    link: { href: "/docs/getting-started/", label: "Getting started" },
  },
  {
    title: "Mac and Linux",
    body: "Build from source with Rust and Node.js; it takes a few minutes. Ready-made packages are on the way.",
    link: { href: "/docs/developers/", label: "Building from source" },
  },
]

export default function Download() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Get Cecilia</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Free, with no account or subscription. Every release is on GitHub; choose the one for the computer that will sit
        beside the organ.
      </p>
      <a href={RELEASES} className="mt-8 inline-block rounded-full bg-glass px-6 py-3 font-medium text-glass-ink hover:opacity-90">
        Latest release on GitHub
      </a>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {OPTIONS.map((o) => (
          <section key={o.title} className="flex flex-col gap-3 rounded-2xl border border-line bg-card p-6">
            <h2 className="font-display text-xl font-semibold">{o.title}</h2>
            <p className="flex-1 text-muted">{o.body}</p>
            <Link href={o.link.href} className="font-medium text-glass underline underline-offset-4">
              {o.link.label}
            </Link>
          </section>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">
        Cecilia is early software: try it with the simulator first, and keep a backup. Problems and ideas are welcome on{" "}
        <a href={`${APP_REPO}/issues`} className="underline underline-offset-2">
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
