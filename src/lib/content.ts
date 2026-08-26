import type { Locale } from "./i18n";

import enHome from "../../content/home/en.json";
import faHome from "../../content/home/fa.json";
import enSettings from "../../content/settings/en.json";
import faSettings from "../../content/settings/fa.json";

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type HomeContent = {
  nav: {
    links: { label: string; href: string }[];
    phoneDisplay: string;
    phoneHref: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    headlineSuffix?: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tagline: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    panelHeading: string;
    panelParagraph: string;
    points: string[];
  };
  trustBar: { title: string; description: string }[];
  contact: {
    heading: string;
    paragraph: string;
    ctaLabel: string;
    email: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccessTitle: string;
    formSuccessBody: string;
  };
  footer: {
    tagline: string;
    quickLinksHeading: string;
    contactHeading: string;
    socialHeading: string;
    addressHeading: string;
    phoneDisplay: string;
    addressLine: string;
    postalLabel: string;
    social: { label: string; href: string }[];
    bottomTagline: string;
    copyright: string;
  };
};

export type SiteSettings = {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  ogImageAlt: string;
};

const homeByLocale: Record<Locale, HomeContent> = {
  en: enHome as HomeContent,
  fa: faHome as HomeContent,
};

const settingsByLocale: Record<Locale, SiteSettings> = {
  en: enSettings as SiteSettings,
  fa: faSettings as SiteSettings,
};

export function getHomeContent(locale: Locale): HomeContent {
  return homeByLocale[locale];
}

export function getSiteSettings(locale: Locale): SiteSettings {
  return settingsByLocale[locale];
}

export const SITE_URL = "https://sparen.ir";
export const PHONE_E164 = "+982177898332";
export const EMAIL = "info@sparen.ir";
