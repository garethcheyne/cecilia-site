import createMDX from "@next/mdx"
import type { NextConfig } from "next"

// Published as static files (GitHub Pages). On a project page the site lives
// under /cecilia-site; with a custom domain, build with BASE_PATH="".
const basePath = process.env.BASE_PATH ?? ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Tailwind runs as a Turbopack loader (from the project template).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default createMDX({})(nextConfig)
