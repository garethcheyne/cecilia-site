"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { DOCS } from "@/lib/docs"

/** The guide's contents: a sidebar on wide screens, a menu on phones. */
export function DocsNav() {
  const path = usePathname()
  const here = (href: string) =>
    path === href || path === href.replace(/\/$/, "")
  const all = DOCS.flatMap((s) => s.pages)
  const i = all.findIndex((p) => here(p.href))

  return (
    <>
      <details className="mb-6 rounded-xl border border-line bg-card lg:hidden">
        <summary className="cursor-pointer px-4 py-3 font-medium">
          Guide contents{i >= 0 ? `: ${all[i].title}` : ""}
        </summary>
        <List here={here} />
      </details>
      <aside
        className="sticky top-20 hidden max-h-[calc(100svh-6rem)] overflow-y-auto lg:block"
        aria-label="Guide contents"
      >
        <List here={here} />
      </aside>
    </>
  )
}

function List({ here }: { here: (href: string) => boolean }) {
  return (
    <nav className="flex flex-col gap-6 p-4 lg:p-0">
      {DOCS.map((s) => (
        <div key={s.section} className="flex flex-col gap-1">
          <p className="mb-1 text-sm font-semibold">{s.section}</p>
          {s.pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={here(p.href) ? "page" : undefined}
              className="rounded-md px-2 py-1 text-sm text-muted hover:text-ink aria-[current=page]:bg-glass/10 aria-[current=page]:font-medium aria-[current=page]:text-glass"
            >
              {p.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

/** Previous and next links at the foot of each page. */
export function DocsPager() {
  const path = usePathname()
  const all = DOCS.flatMap((s) => s.pages)
  const i = all.findIndex(
    (p) => path === p.href || path === p.href.replace(/\/$/, "")
  )
  const prev = i > 0 ? all[i - 1] : null
  const next = i >= 0 && i < all.length - 1 ? all[i + 1] : null
  return (
    <nav
      className="mt-16 flex justify-between gap-4 border-t border-line pt-6 text-sm"
      aria-label="Previous and next"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex flex-col text-muted hover:text-ink"
        >
          <span>Previous</span>
          <span className="font-medium text-ink">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="flex flex-col text-right text-muted hover:text-ink"
        >
          <span>Next</span>
          <span className="font-medium text-ink">{next.title}</span>
        </Link>
      )}
    </nav>
  )
}
