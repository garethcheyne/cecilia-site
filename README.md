# Cecilia website and guide

The website for [Cecilia](https://github.com/garethcheyne/cecilia), the free
organ recorder and player for churches, and its user guide.

Published at **https://garethcheyne.github.io/cecilia-site/** whenever `main`
changes.

## Working on it

```sh
npm ci
npm run dev          # http://localhost:3000
npm run build        # static site in out/
```

- Pages are in `app/`; the guide is MDX in `app/docs/*/page.mdx`, and its
  contents list is `lib/docs.ts`.
- Screenshots are in `public/screens/`, taken from a running Cecilia.
- The Library page reads the shared library's catalogue when the site is
  built.

## Credits

Cecilia is inspired by OrganAssist by David Glover, and is an independent
project that contains none of its code. See the About page.

Content is CC BY 4.0; code is MIT.
