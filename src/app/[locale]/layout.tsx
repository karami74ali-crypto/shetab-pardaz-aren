import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "../globals.css";
import "@fontsource/outfit/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import { locales, isLocale, dirFor, defaultLocale, type Locale } from "@/lib/i18n";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "optional",
  variable: "--font-vazirmatn",
});
import { getSiteSettings, SITE_URL } from "@/lib/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const settings = getSiteSettings(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: settings.metaTitle,
    description: settings.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/`,
      languages: {
        en: `${SITE_URL}/en/`,
        fa: `${SITE_URL}/fa/`,
        "x-default": `${SITE_URL}/`,
      },
    },
    openGraph: {
      title: settings.metaTitle,
      description: settings.metaDescription,
      url: `${SITE_URL}/${locale}/`,
      siteName: settings.siteName,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/og-cover.png",
          width: 1200,
          height: 630,
          alt: settings.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings.metaTitle,
      description: settings.metaDescription,
      images: ["/images/og-cover.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dir = dirFor(locale);
  const settings = getSiteSettings(locale);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.siteName,
    url: `${SITE_URL}/${locale}/`,
  };
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
       alternateName: [
      "Aren",
      "شتاب‌پرداز آرن",
      "شرکت شتاب پرداز آرن",
      "شرکت شتاب‌پرداز آرن",
      "Shetab Pardaz Aren",
      "Shetab Pardaz Aren Company",
      "Aren Company",
    ],
    url: `${SITE_URL}/${locale}/`,
    logo: `${SITE_URL}/logos/logo-en-color.svg`,
    image: `${SITE_URL}/images/og-cover.png`,
    telephone: "+98-21-7789-8332",
    email: "info@sparen.ir",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 86, 4th Floor, Milad Tower, East Hemmat Highway",
      addressLocality: "Tehran",
      addressCountry: "IR",
      postalCode: "1449613251",
    },
    sameAs: [
      "https://www.instagram.com/sparen.ir",
      "https://www.linkedin.com/company/sparen.ir",
    ],
    description: settings.metaDescription,
  };

  return (
    <html lang={locale === "fa" ? "fa" : "en"} dir={dir} className={vazirmatn.variable}>
      <body
        style={{
          fontFamily:
            locale === "fa"
              ? "var(--font-vazirmatn), Tahoma, sans-serif"
              : "'Manrope', system-ui, sans-serif",
        }}
      >
               <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
