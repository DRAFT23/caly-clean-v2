"use client";

import Link from "next/link";
import { SALONKEE_URL, INSTAGRAM_URL, WHATSAPP_URL, MAPS_URL } from "../lib/constants";
import type { Dictionary } from "../lib/dictionaries/fr";

function closeMobileMenu() {
  document.getElementById("mobile-menu")?.removeAttribute("open");
}

const itemClass =
  "flex items-center justify-between rounded-full bg-[#6f836f] px-5 py-3 text-base font-semibold text-[#2a2320]";

export default function Navbar({ dict }: { dict: Dictionary }) {
  const t = dict.nav;
  const otherLocaleHref = dict.locale === "fr" ? "/en" : "/";
  const otherLocaleLabel = dict.locale === "fr" ? "EN" : "FR";

  return (
    <nav className="fixed left-0 top-0 z-[9999] w-full border-b border-[#dcc8b5]/50 bg-[#f8f4ef]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <details id="mobile-menu" className="relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-[#6f836f] text-xl font-semibold text-[#2a2320]">
            ☰
          </summary>

          <div className="fixed left-0 right-0 top-[73px] z-[9999] border-b border-[#dcc8b5]/60 bg-[#f8f4ef] px-6 py-6 shadow-[0_20px_60px_rgba(60,35,20,0.12)]">
            <div className="space-y-3">
              <a href="#gallery" onClick={closeMobileMenu} className={itemClass}>
                {t.gallery} <span>→</span>
              </a>

              <details className="rounded-[28px] bg-[#6f836f] px-5 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#2a2320]">
                  {t.services} <span>+</span>
                </summary>

                <div className="mt-4 grid gap-3 border-t border-[#2a2320]/15 pt-4">
                  <a href="#services" onClick={closeMobileMenu}>{t.servicesMenu.manucure}</a>
                  <a href="#services" onClick={closeMobileMenu}>{t.servicesMenu.pieds}</a>
                  <a href="#services" onClick={closeMobileMenu}>{t.servicesMenu.nailart}</a>
                  <a href="#services" onClick={closeMobileMenu}>{t.servicesMenu.offres}</a>
                </div>
              </details>

              <a href="#world" onClick={closeMobileMenu} className={itemClass}>
                {t.world} <span>→</span>
              </a>

              <a href="#reviews" onClick={closeMobileMenu} className={itemClass}>
                {t.reviews} <span>→</span>
              </a>

              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
                {t.findUs} <span>→</span>
              </a>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
                {t.whatsapp} <span>→</span>
              </a>

              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={itemClass}>
                {t.instagram} <span>→</span>
              </a>

              <Link href={otherLocaleHref} onClick={closeMobileMenu} className={itemClass}>
                {otherLocaleLabel} <span>→</span>
              </Link>
            </div>
          </div>
        </details>

        <Link href={dict.locale === "fr" ? "/" : "/en"} className="font-serif text-2xl tracking-[0.12em]">
          Caly Nails
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#2a2320]/70 md:flex">
          <a href="#gallery">{t.gallery}</a>
          <a href="#services">{t.services}</a>
          <a href="#world">{t.world}</a>
          <a href="#reviews">{t.reviews}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            {t.instagram}
          </a>
          <Link
            href={otherLocaleHref}
            className="rounded-full border border-[#dcc8b5] px-3 py-1 text-xs font-semibold text-[#2a2320] transition hover:border-[#6f836f] hover:text-[#6f836f]"
          >
            {otherLocaleLabel}
          </Link>
        </div>

        <a
          href={SALONKEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#6f836f] px-5 py-3 text-sm font-semibold text-[#2a2320] md:px-6"
        >
          {t.book}
        </a>
      </div>
    </nav>
  );
}
