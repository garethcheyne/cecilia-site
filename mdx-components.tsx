import Link from "next/link"
import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {
  // Links within the site go through Link, which adds the base path when
  // the site is published under /cecilia-site.
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} {...props} />
    ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
