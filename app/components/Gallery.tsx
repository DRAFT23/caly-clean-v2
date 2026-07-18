import Image from "next/image";
import { INSTAGRAM_URL } from "../lib/constants";
import type { Dictionary } from "../lib/dictionaries/fr";

export default function Gallery({ dict }: { dict: Dictionary }) {
  const t = dict.gallery;

  return (
    <section id="gallery" className="bg-[#f8f4ef] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-16 md:max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#6f836f]">
            {t.eyebrow}
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#2a2320] md:text-7xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#2a2320]/65">
            {t.subtitle}
          </p>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4">
            {t.mobileImages.map((image) => (
              <div
                key={image.src}
                className="relative h-[360px] min-w-[82%] overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(60,35,20,0.10)]"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="82vw"
                  loading="lazy"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <p className="absolute bottom-5 left-5 font-serif text-3xl text-white">
                  {image.title}
                </p>
              </div>
            ))}
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-[28px] border border-[#dcc8b5]/70 bg-white/85 px-6 py-5 text-center shadow-[0_16px_40px_rgba(60,35,20,0.06)]"
          >
            <span className="block font-serif text-2xl text-[#2a2320]">
              {t.ctaTitle}
            </span>
            <span className="mt-1 block text-sm font-semibold text-[#6f836f]">
              {t.ctaLink}
            </span>
          </a>
        </div>

        {/* DESKTOP */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-lg leading-8 text-[#2a2320]/65">
              {t.sideText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.desktopImages.map((image) => (
              <div
                key={image.title}
                className={`group relative h-[360px] overflow-hidden rounded-[34px] shadow-[0_22px_70px_rgba(60,35,20,0.10)] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <p className="absolute bottom-6 left-6 font-serif text-4xl text-white">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
