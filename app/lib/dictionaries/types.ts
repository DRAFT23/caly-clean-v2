export interface Service {
  title: string;
  description: string;
  price: string;
  time?: string;
  note?: string;
  oldPrice?: string;
}

export interface ImageItem {
  src: string;
  title: string;
}

export interface DesktopImageItem {
  src: string;
  title: string;
  className: string;
}

export interface ReviewItem {
  initial: string;
  name: string;
  text: string;
}

export interface Tab {
  id: "manucure" | "pieds" | "nailart" | "offres";
  label: string;
}

export interface Dictionary {
  locale: "fr" | "en";

  meta: {
    title: string;
    description: string;
    keywords: string[];
  };

  nav: {
    gallery: string;
    services: string;
    world: string;
    reviews: string;
    book: string;
    whatsapp: string;
    instagram: string;
    findUs: string;
    servicesMenu: {
      manucure: string;
      pieds: string;
      nailart: string;
      offres: string;
    };
  };

  hero: {
    badge: string;
    tagline: [string, string, string];
    ratingMobile: string;
    ratingDesktop: string;
    book: string;
    whatsapp: string;
    instagram: string;
    a11yTitle: string;
  };

  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    sideText: string;
    mobileImages: ImageItem[];
    desktopImages: DesktopImageItem[];
    ctaTitle: string;
    ctaLink: string;
  };

  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    oldPriceLabel: string;
    tabs: Tab[];
    data: {
      manucure: Service[];
      pieds: Service[];
      nailart: Service[];
      offres: Service[];
    };
  };

  ourWorld: {
    eyebrow: string;
    title: string;
    paragraph: string;
    values: string[];
  };

  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    verifiedLabel: string;
    verifiedTag: string;
    items: ReviewItem[];
    ctaTitle: string;
    ctaLink: string;
  };

  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    book: string;
    whatsapp: string;
    instagram: string;
  };

  footer: {
    eyebrow: string;
    title: [string, string];
    paragraph: string;
    country: string;
    mapsLabel: string;
    bookLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    thanksTitle: string;
    thanksSubtitle: string;
    copyright: string;
    tagline: string;
  };
}
