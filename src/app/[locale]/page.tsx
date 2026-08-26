import { isLocale, type Locale } from "@/lib/i18n";
import { getHomeContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TrustBar from "@/components/TrustBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getHomeContent(locale);

  return (
    <div>
      <Nav locale={locale} content={content.nav} />
      <Hero locale={locale} content={content.hero} />
      <Services locale={locale} content={content.services} />
      <About locale={locale} content={content.about} />
      <TrustBar locale={locale} items={content.trustBar} />
      <Contact locale={locale} content={content.contact} />
      <Footer locale={locale} content={content.footer} />
    </div>
  );
}
