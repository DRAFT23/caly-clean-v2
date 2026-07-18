import type { Metadata } from "next";
import { SITE_URL, SALON_NAME, ADDRESS, PHONE_E164, RATING } from "./constants";
import type { Dictionary } from "./dictionaries/fr";

export function buildMetadata(dict: Dictionary, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const { title, description, keywords } = dict.meta;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: {
        fr: "/",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SALON_NAME,
      locale: dict.locale === "fr" ? "fr_CH" : "en_US",
      type: "website",
      images: [
        {
          url: "/hero-portrait.webp",
          width: 1200,
          height: 1500,
          alt: dict.hero.a11yTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-portrait.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: SALON_NAME,
    image: `${SITE_URL}/hero-portrait.webp`,
    url: dict.locale === "fr" ? SITE_URL : `${SITE_URL}/en`,
    telephone: PHONE_E164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      reviewCount: RATING.count,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}
