import Image from "next/image";
import type { Dictionary } from "../lib/dictionaries/fr";

const images = {
  main: {
    src: "/atelier-poste.webp",
    alt: "Caly Nails workspace",
  },
  secondary: [
    { src: "/hygiene.webp", alt: "Caly Nails hygiene & care" },
    { src: "/produits-vernis.webp", alt: "Caly Nails professional products" },
  ],
};

export default function OurWorld({ dict }: { dict: Dictionary }) {
  const t = dict.ourWorld;

  return (
    <section id="world" className="bg-[#f8f4ef] px-6 py-16 md:py-32">
      <div className="mx-auto max-w-7xl rounded-[34px] bg-[#566b59] p-5 text-white md:rounded-[56px] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Photos */}
          <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
            <div className="group relative h-[390px] overflow-hidden rounded-[30px] md:h-[660px] md:rounded-[42px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                loading="lazy"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {images.secondary.map((image) => (
                <div
                  key={image.src}
                  className="group relative h-[190px] overflow-hidden rounded-[28px] md:h-[322px] md:rounded-[34px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    loading="lazy"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Texte */}
          <div className="px-1 py-4 md:px-8 md:py-0">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-white/60 md:text-xs">
              {t.eyebrow}
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              {t.title}
            </h2>

            <p className="mt-6 text-base leading-7 text-white/75 md:text-lg md:leading-8">
              {t.paragraph}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {t.values.map((value) => (
                <div
                  key={value}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-center text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/15 md:text-sm"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
