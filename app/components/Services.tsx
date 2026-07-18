"use client";

import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries/fr";

type Category = "manucure" | "pieds" | "nailart" | "offres";

type Service = {
  title: string;
  description: string;
  price: string;
  time?: string;
  note?: string;
  oldPrice?: string;
};

function ServiceCard({
  service,
  oldPriceLabel,
}: {
  service: Service;
  oldPriceLabel: string;
}) {
  return (
    <div className="group border-b border-[#dcc8b5]/70 py-7 transition hover:border-[#6f836f]">
      <div className="grid gap-4 md:grid-cols-[1fr_160px] md:items-start">
        <div>
          <h3 className="font-serif text-2xl leading-tight text-[#2a2320] transition group-hover:text-[#6f836f] md:text-3xl">
            {service.title}
          </h3>

          <p className="mt-2 max-w-2xl text-base leading-7 text-[#2a2320]/60">
            {service.description}
          </p>

          {(service.time || service.note || service.oldPrice) && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#2a2320]/55">
              {service.time && (
                <span className="rounded-full bg-[#6f836f]/10 px-3 py-1 text-[#6f836f]">
                  {service.time}
                </span>
              )}
              {service.note && <span>{service.note}</span>}
              {service.oldPrice && (
                <span className="line-through opacity-60">
                  {oldPriceLabel} {service.oldPrice}
                </span>
              )}
            </div>
          )}
        </div>

        <strong className="text-left font-serif text-2xl text-[#6f836f] md:text-right md:text-3xl">
          {service.price}
        </strong>
      </div>
    </div>
  );
}

export default function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services;
  const [activeTab, setActiveTab] = useState<Category>("manucure");
  const [openMobileTab, setOpenMobileTab] = useState<Category | null>(null);

  return (
    <section id="services" className="relative overflow-hidden bg-[#f8f4ef] px-6 py-24 md:py-32">
      <div className="absolute right-[-160px] top-20 h-[360px] w-[360px] rounded-full bg-[#6f836f]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#6f836f]">
            {t.eyebrow}
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#2a2320] md:text-7xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#2a2320]/70">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4 md:hidden">
          {t.tabs.map((tab) => {
            const isOpen = openMobileTab === tab.id;

            return (
              <div
                id={tab.id}
                key={tab.id}
                className="rounded-[34px] border border-[#dcc8b5]/70 bg-white/75 p-4 shadow-[0_16px_40px_rgba(60,35,20,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenMobileTab(isOpen ? null : tab.id)}
                  className="flex w-full items-center justify-between px-2 py-3 text-left"
                >
                  <span className="font-serif text-3xl text-[#2a2320]">
                    {tab.label}
                  </span>

                  <span
                    className={`text-2xl text-[#6f836f] transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4">
                    {t.data[tab.id as Category].map((service, i) => (
                      <ServiceCard
                        key={`${tab.id}-${i}`}
                        service={service}
                        oldPriceLabel={t.oldPriceLabel}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 hidden justify-center gap-3 md:flex">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as Category)}
              className={`rounded-full border px-6 py-3 text-sm transition ${
                activeTab === tab.id
                  ? "border-[#6f836f] bg-[#6f836f] text-[#2a2320]"
                  : "border-[#dcc8b5] bg-white/80 text-[#2a2320] hover:border-[#6f836f] hover:text-[#6f836f]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 hidden max-w-5xl md:block">
          {t.data[activeTab].map((service, index) => (
            <ServiceCard
              key={`${activeTab}-${index}`}
              service={service}
              oldPriceLabel={t.oldPriceLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
