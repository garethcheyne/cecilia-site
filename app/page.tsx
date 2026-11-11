import Image from "next/image"
import Link from "next/link"

import { asset, ORGANASSIST } from "@/lib/site"

/** The stops that light up in the hero, in the order an organist might draw them. */
const STOPS: { name: string[]; ring: string; kind?: "reed" | "coupler" }[] = [
  { name: ["Open", "Diapason", "8′"], ring: "var(--great)" },
  { name: ["Stopped", "Diapason", "8′"], ring: "var(--great)" },
  { name: ["Principal", "4′"], ring: "var(--great)" },
  { name: ["Gedackt", "8′"], ring: "var(--swell)" },
  { name: ["Gemshorn", "4′"], ring: "var(--swell)" },
  { name: ["Swell", "to Great"], ring: "var(--great)", kind: "coupler" },
  { name: ["Bourdon", "16′"], ring: "var(--pedal)" },
  { name: ["Trumpet", "8′"], ring: "var(--great)", kind: "reed" },
]

function Hero() {
  return (
    <section className="bg-console text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl font-semibold sm:text-6xl">
            Record the service. Play it again on any organ.
          </h1>
          <p className="max-w-xl text-lg text-white/75">
            Cecilia is a free organ recorder and player for churches. Press
            Record once and every piece is kept, stops and all. Play it back on
            your organ, or another one, from a phone or tablet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/download/"
              className="rounded-full bg-lamp px-6 py-3 font-medium text-ink hover:opacity-90"
            >
              Get Cecilia
            </Link>
            <Link
              href="/docs/"
              className="rounded-full px-6 py-3 font-medium text-white ring-1 ring-white/25 hover:bg-white/10"
            >
              Read the guide
            </Link>
          </div>
          <p className="text-sm text-white/55">
            Free and open source · Windows, Mac, Linux and Raspberry Pi
          </p>
        </div>
        <div
          aria-hidden
          className="grid grid-cols-4 justify-items-center gap-x-3 gap-y-5 sm:gap-x-5"
        >
          {STOPS.map((s, i) => (
            <span
              key={i}
              className={`stop flex flex-col items-center justify-center text-center font-display text-[0.7rem] leading-tight font-semibold [font-stretch:85%] sm:text-[0.8rem] ${
                s.kind === "coupler"
                  ? "h-14 w-20 rounded-lg sm:w-24"
                  : "size-18 rounded-full sm:size-22"
              }`}
              style={{ "--i": i, "--ring": s.ring } as React.CSSProperties}
            >
              {s.name.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Shot({
  src,
  alt,
  phone = false,
  priority = false,
}: {
  src: string
  alt: string
  phone?: boolean
  priority?: boolean
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_48px_-28px_rgb(15_18_30/0.45)] ${phone ? "mx-auto max-w-[300px]" : ""}`}
    >
      <Image
        src={asset(src)}
        alt={alt}
        width={phone ? 780 : 1440}
        height={phone ? 1688 : 1000}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  )
}

const STEPS = [
  {
    title: "Press Record before the service",
    body: "Cecilia waits for the first note, then records. When the organ falls silent it saves the piece and waits for the next, so a whole service becomes a tidy list of pieces, each starting with the stops that were drawn.",
  },
  {
    title: "Keep everything in the library",
    body: "Name it, note the hymn number, trim it, fix a wrong note. The library also comes with hymns to start from: Old Hundredth, Abide with Me, Crimond and more.",
  },
  {
    title: "Play it back, on any organ",
    body: "Cecilia plays back through the organ itself, drawing the stops as it goes. On a different organ it picks the nearest stops it has, and never a louder one.",
  },
]

const FEATURES = [
  {
    title: "A screen for whoever runs the music",
    body: "Plan the service as a playlist, then run it in large text with big buttons. Each hymn can wait for Play, start by itself after a pause, or sit ready at its first note. Choose the verses (“4” or “1, 2, 5”), stop at the end of a verse, or fade out gently.",
    src: "/screens/service-phone.png",
    alt: "The Service screen on a phone: the current hymn highlighted, with large play and next buttons",
    phone: true,
  },
  {
    title: "Your organ, live, on a tablet",
    body: "Stops light up as they’re drawn at the console, and keys as they’re played. Touch a stop to draw it on the organ itself. A built-in simulator with sound lets you try everything without an organ.",
    src: "/screens/console-desktop.png",
    alt: "The console: lit drawstops and keyboards for Swell, Great and Pedal",
  },
  {
    title: "See it as music, and change it",
    body: "Every piece can be shown as staff notation, following along as it plays. The editor changes notes, stop changes, the swell pedal and verse markers, with undo for everything.",
    src: "/screens/score-desktop.png",
    alt: "Holy, Holy, Holy shown as notation for manuals and pedal",
  },
  {
    title: "Teach it your organ in minutes",
    body: "Start from a template (there’s one for Makin organs), then Learn every stop: pull each one out and push it in when asked, and Cecilia records exactly what your organ sends. Share the result, and the next church with the same model won’t need to.",
    src: "/screens/playlist-phone.png",
    alt: "A playlist for Sunday on a phone, with notes and verse choices for each hymn",
    phone: true,
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Made for the organ loft, not the studio
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          No MIDI knowledge needed. Cecilia talks to the organ; you deal in
          hymns, verses and stops.
        </p>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-3 border-t-2 border-ink pt-5"
            >
              <span className="font-display text-sm font-semibold text-glass">
                Step {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <Shot
            src="/screens/library-desktop.png"
            alt="The library: hymns and recordings, with one playing in the bar at the bottom"
            priority
          />
        </div>
      </section>

      <section
        id="features"
        className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-24 px-4 py-12"
      >
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl font-semibold">{f.title}</h2>
              <p className="text-lg text-muted">{f.body}</p>
            </div>
            <Shot src={f.src} alt={f.alt} phone={f.phone} />
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 rounded-3xl bg-console px-6 py-12 text-white sm:px-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold">
              A small box beside the console
            </h2>
            <p className="text-white/75">
              Cecilia runs happily on a Raspberry Pi with a USB MIDI lead. It
              starts by itself when the organ is switched on, can record every
              Sunday without anyone touching it, and anyone on the church Wi‑Fi
              can run the music from their phone. Set a password and it’s yours
              alone.
            </p>
            <Link
              href="/docs/raspberry-pi/"
              className="self-start rounded-full bg-lamp px-5 py-2.5 font-medium text-ink hover:opacity-90"
            >
              Set up a Raspberry Pi
            </Link>
          </div>
          <ul className="flex flex-col gap-3 self-center text-white/85">
            {[
              "Records from the organ’s MIDI out, plays into its MIDI in",
              "Makin, Johannus, Hauptwerk and any organ you teach it",
              "Imports MIDI, MusicXML, and scans of printed music",
              "Backs up everything to one file",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span
                  className="mt-2 size-2 shrink-0 rounded-full bg-lamp shadow-[0_0_10px_var(--lamp)]"
                  aria-hidden
                />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl font-semibold">
            Shared between churches
          </h2>
          <p className="text-lg text-muted">
            Cecilia stores what the organist <em>did</em>, not raw MIDI, so
            music shared by one church plays on another’s organ. The community
            library collects public-domain hymns, original voluntaries and organ
            setups, checked before they’re added.
          </p>
          <Link
            href="/library/"
            className="self-start font-medium text-glass underline underline-offset-4"
          >
            Browse the library
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl font-semibold">
            With thanks to OrganAssist
          </h2>
          <p className="text-lg text-muted">
            For years organists have relied on{" "}
            <a
              href={ORGANASSIST}
              className="text-ink underline underline-offset-4"
            >
              OrganAssist
            </a>
            , David Glover’s free organ sequencer. Cecilia is a new, independent
            program built in its spirit, for today’s phones, tablets and small
            computers.
          </p>
          <Link
            href="/about/"
            className="self-start font-medium text-glass underline underline-offset-4"
          >
            Our story and credits
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="flex flex-col items-start gap-5 border-t border-line pt-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-semibold">
            Try it today, no organ needed.
          </h2>
          <Link
            href="/download/"
            className="rounded-full bg-glass px-6 py-3 font-medium text-glass-ink hover:opacity-90"
          >
            Get Cecilia
          </Link>
        </div>
      </section>
    </>
  )
}
