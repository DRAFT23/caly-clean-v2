import Image from "next/image";
import { SALONKEE_URL, WHATSAPP_URL, INSTAGRAM_URL } from "../lib/constants";
import type { Dictionary } from "../lib/dictionaries/fr";

const buttonClass =
  "rounded-full border border-white/15 bg-[#3a302c] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#4a3d38]";

export default function CTA({ dict }: { dict: Dictionary }) {
  const t = dict.cta;

  return (
    <section className="hidden bg-[#f8f4ef] px-6 py-32 md:block">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[56px] bg-[#2a2320] text-white shadow-[0_30px_100px_rgba(60,35,20,0.18)]">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#b9975b]">
              {t.eyebrow}
            </p>

            <h2 className="font-serif text-7xl leading-tight">{t.title}</h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              {t.subtitle}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <a href={SALONKEE_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                {t.book}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                {t.whatsapp}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                {t.instagram}
              </a>
            </div>
          </div>

          <div className="relative h-[520px] w-full">
            <Image
              src="/gallery-nude.webp"
              alt="Caly Nails"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
