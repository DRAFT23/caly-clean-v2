import {
  SALONKEE_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  ADDRESS,
} from "../lib/constants";
import type { Dictionary } from "../lib/dictionaries/fr";

export default function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer;

  return (
    <footer className="relative overflow-hidden bg-[#2a2320] text-white">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-[#6f836f]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#B9975B]">
              {t.eyebrow}
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              {t.title[0]}
              <br />
              {t.title[1]}
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
              {t.paragraph}
            </p>

            <div className="mt-10 space-y-2 text-white/70">
              <p>📍 {ADDRESS.street}</p>

              <p>
                {ADDRESS.postalCode} {ADDRESS.city} · {t.country}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition hover:text-[#B9975B]"
              >
                ☎ {PHONE_DISPLAY}
              </a>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-[#B9975B] hover:text-[#B9975B]"
            >
              {t.mapsLabel}
            </a>
          </div>

          <div className="flex flex-col justify-center gap-5 text-lg">
            <a
              href={SALONKEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#B9975B]"
            >
              {t.bookLabel}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#B9975B]"
            >
              {t.whatsappLabel}
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#B9975B]"
            >
              {t.instagramLabel}
            </a>

            <div className="mt-8 rounded-[26px] border border-white/10 bg-white/5 p-6">
              <p className="font-serif text-2xl">{t.thanksTitle}</p>
              <p className="mt-3 text-white/55">{t.thanksSubtitle}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
            <p>{t.copyright}</p>
            <p>{t.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
