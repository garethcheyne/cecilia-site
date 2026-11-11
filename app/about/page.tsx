import type { Metadata } from "next"

import { APP_REPO, ORGANASSIST } from "@/lib/site"

export const metadata: Metadata = { title: "About and credits" }

export default function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        About Cecilia
      </h1>
      <div className="prose prose-lg mt-10 max-w-none text-ink dark:prose-invert prose-headings:font-display prose-headings:text-ink prose-a:text-glass prose-strong:text-ink">
        <p>
          Cecilia began with one church and one organ: a Makin, played every
          Sunday by a father whose son wanted to make the music easier to
          record, replay and share. It is free, open source, and made to be
          useful to any church with an organ that speaks MIDI.
        </p>

        <h2>Standing on the shoulders of OrganAssist</h2>
        <p>
          <a href={ORGANASSIST}>OrganAssist</a>, written by{" "}
          <strong>David Glover</strong>, has helped organists record and play
          back their instruments for many years. It showed what an organ
          sequencer should be: one press to record a whole service, recordings
          that play on any organ, playlists with verse control, and a careful,
          respectful approach to the instrument and the people who play it.
          Cecilia owes its whole idea to that work, and we are grateful for it.
        </p>
        <p>
          Cecilia is an <strong>independent, new program</strong>. It was
          written from scratch, using only OrganAssist’s published user guide
          and website to understand what organists need. It contains{" "}
          <strong>none</strong> of OrganAssist’s code and doesn’t read its
          files, and it is not affiliated with or endorsed by David Glover. If
          you use OrganAssist today, it keeps working; its “Backup Entire
          Library as MIDI” file imports into Cecilia when you’d like to try
          both.
        </p>
        <p>
          If OrganAssist suits your church, please keep using it, and consider{" "}
          <a href={ORGANASSIST}>thanking its author</a>.
        </p>

        <h2>Why “Cecilia”</h2>
        <p>
          Saint Cecilia is the patron saint of music, and above all of
          organists. The legend says that at her wedding, while the instruments
          played, she sang in her heart to God alone, and painters ever since
          have shown her with a small organ in her hands. Her feast day is 22
          November.
        </p>
        <p>
          The name also suits the assistant built into Cecilia. One day you’ll
          be able to say “Cecilia, play Abide with Me”, and the organ will.
        </p>

        <h2>Made openly</h2>
        <p>
          Cecilia is MIT-licensed. The source code, the shared music and organ
          library, and this website are all on GitHub, and contributions of
          every kind are welcome: organ setups, hymn arrangements, translations,
          testing on real instruments, or code. Start with{" "}
          <a href={APP_REPO}>the main repository</a>.
        </p>
      </div>
    </article>
  )
}
