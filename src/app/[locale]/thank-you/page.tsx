import Link from "next/link";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  robots: { index: false, follow: true },
};

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFa = locale === "fa";

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <img
          src={isFa ? "/logos/logo-fa-color.svg" : "/logos/logo-en-color.svg"}
          alt="Shetab Pardaz Aren"
          className="h-14 w-auto mx-auto mb-8"
        />
        <h1 className="text-navy text-2xl font-bold mb-3">
          {isFa ? "سپاسگزاریم." : "Thank you."}
        </h1>
        <p className="text-[#6b6f76] text-[15px] mb-8">
          {isFa
            ? "پیام شما دریافت شد؛ به‌زودی با شما تماس خواهیم گرفت."
            : "Your message has been received — we'll be in touch soon."}
        </p>
        <Link href={`/${locale}/`} className="btn-primary inline-block bg-navy text-white text-sm font-bold px-6 py-3.5 rounded-sm">
          {isFa ? "بازگشت به سایت" : "Back to the site"}
        </Link>
      </div>
    </div>
  );
}
