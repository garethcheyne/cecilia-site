/** The guide's table of contents, in reading order. */
export const DOCS: { section: string; pages: { href: string; title: string }[] }[] = [
  {
    section: "Start here",
    pages: [
      { href: "/docs/", title: "Welcome" },
      { href: "/docs/getting-started/", title: "Getting started" },
      { href: "/docs/connecting-your-organ/", title: "Connecting your organ" },
    ],
  },
  {
    section: "Every Sunday",
    pages: [
      { href: "/docs/recording/", title: "Recording" },
      { href: "/docs/playing-back/", title: "Playing back" },
      { href: "/docs/services/", title: "Playlists and services" },
    ],
  },
  {
    section: "Your music",
    pages: [
      { href: "/docs/editing/", title: "Editing and notation" },
      { href: "/docs/importing/", title: "Importing music" },
      { href: "/docs/sharing/", title: "Sharing music and organs" },
    ],
  },
  {
    section: "Your organ",
    pages: [
      { href: "/docs/your-organ/", title: "Setting up your organ" },
      { href: "/docs/raspberry-pi/", title: "Raspberry Pi" },
      { href: "/docs/settings/", title: "Settings, password and backup" },
    ],
  },
  {
    section: "More",
    pages: [
      { href: "/docs/faq/", title: "Questions and answers" },
      { href: "/docs/developers/", title: "For developers" },
    ],
  },
]
