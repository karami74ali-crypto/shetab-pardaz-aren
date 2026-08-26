import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const BUILD_DATE = "2026-08-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/`]));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    ...locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages },
    })),
  ];
}
