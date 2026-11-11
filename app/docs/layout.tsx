import { DocsNav, DocsPager } from "@/components/docs-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[14rem_1fr]">
      <DocsNav />
      <article className="min-w-0">
        <div className="prose prose-lg max-w-3xl text-ink dark:prose-invert prose-headings:font-display prose-headings:text-ink prose-a:text-glass prose-strong:text-ink prose-code:text-ink prose-li:marker:text-muted prose-th:text-ink">
          {children}
        </div>
        <DocsPager />
      </article>
    </div>
  )
}
