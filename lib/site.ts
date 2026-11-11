export const GITHUB = "https://github.com/garethcheyne"
export const APP_REPO = `${GITHUB}/cecilia`
export const LIBRARY_REPO = `${GITHUB}/cecilia-library`
export const SITE_REPO = `${GITHUB}/cecilia-site`
export const RELEASES = `${APP_REPO}/releases`
export const CATALOGUE =
  "https://garethcheyne.github.io/cecilia-library/index.json"
export const ORGANASSIST = "https://www.organassist.com"

/** A file in /public, with the site's base path. */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
}
