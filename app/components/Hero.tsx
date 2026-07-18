import Image from "next/image";
import HeroVideo from "./HeroVideo";
import { SALONKEE_URL, WHATSAPP_URL, INSTAGRAM_URL } from "../lib/constants";
import type { Dictionary } from "../lib/dictionaries/fr";

const buttonClass =
  "rounded-full bg-[#6f836f] px-8 py-4 text-center text-sm font-semibold text-[#2a2320] transition hover:bg-[#637763]";

const mobileButtonClass =
  "rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15";

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="relative overflow-hidden bg-[#f8f4ef]">
      {/*
        Un seul <h1> pour toute la page, commun aux deux mises en page
        (mobile et desktop) et cible d'accessibilité/SEO. Visuellement
        invisible (sr-only) : le rendu "Caly Nails" en grand que l'on voit
        dans chaque bloc ci-dessous n'est plus qu'une reprise décorative
        (aria-hidden), plus un second <h1>.
      */}
      <h1 className="sr-only">{t.a11yTitle}</h1>

      {/* MOBILE */}
      <div className="relative min-h-screen bg-[#2a2320] md:hidden">
        <HeroVideo />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />

        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-10 pt-28 text-white">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-white/70">
            {t.badge}
          </p>

          <p
            aria-hidden="true"
            className="font-serif text-[72px] leading-[0.82] tracking-tight"
          >
            Caly
            <br />
            Nails
          </p>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.tagline[0]}
            <br />
            {t.tagline[1]}
            <br />
            {t.tagline[2]}
          </p>

          <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/15 px-5 py-3 backdrop-blur-md">
            <span className="text-[#b9975b]" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-sm font-medium text-white">
              {t.ratingMobile}
            </span>
          </div>

          <div className="mt-8 grid gap-3">
            <a
              href={SALONKEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={mobileButtonClass}
            >
              {t.book}
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={mobileButtonClass}
              >
                {t.whatsapp}
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={mobileButtonClass}
              >
                {t.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden min-h-screen px-6 pt-28 md:block">
        <div className="absolute left-[-140px] top-20 h-[420px] w-[420px] rounded-full bg-[#6f836f]/12 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#6f836f]">
              {t.badge}
            </p>

            <p
              aria-hidden="true"
              className="font-serif text-9xl leading-[0.82] tracking-tight text-[#2a2320]"
            >
              Caly
              <br />
              Nails
            </p>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#2a2320]/70">
              {t.tagline[0]}
              <br />
              {t.tagline[1]}
              <br />
              {t.tagline[2]}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#dcc8b5] bg-white/80 px-5 py-3 shadow-sm">
              <span className="text-[#b9975b]" aria-hidden="true">
                ★★★★★
              </span>
              <span className="text-sm font-medium text-[#2a2320]">
                {t.ratingDesktop}
              </span>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <a
                href={SALONKEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {t.book}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {t.whatsapp}
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {t.instagram}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[52px] border border-[#dcc8b5]/50" />
            <div className="absolute -bottom-10 left-10 h-44 w-44 rounded-full bg-[#6f836f]/18 blur-3xl" />

            <div className="relative h-[760px] overflow-hidden rounded-[46px] shadow-[0_40px_120px_rgba(40,30,20,0.18)]">
              <Image
                src="/hero-portrait.webp"
                alt="Caly Nails"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
