import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { otherLocale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";

export default function Nav({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["nav"];
}) {
  const other = otherLocale(locale);
  const isFa = locale === "fa";

  return (
    <header className="flex items-center justify-between border-b border-[#ececee] px-6 sm:px-10 lg:px-20 h-24 lg:h-32">
      <div className="flex items-center gap-6 lg:gap-11">
        <Link href={`/${locale}/`} aria-label="Shetab Pardaz Aren">
          <img
            src={isFa ? "/logos/logo-fa-color.svg" : "/logos/logo-en-color.svg"}
            alt="Shetab Pardaz Aren"
            className={isFa ? "h-16 lg:h-[92px] w-auto" : "h-14 lg:h-20 w-auto"}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-semibold text-[#565a62] ${isFa ? "text-[14.5px] font-bold" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 lg:gap-7">
        <a
          href={content.phoneHref}
          className="hidden sm:flex items-center gap-2 text-[13.5px] font-bold text-navy"
          dir="ltr"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a7a9ac" strokeWidth="1.8" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
          </svg>
          {content.phoneDisplay}
        </a>
        <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#9a9ea5]">
          <Link href={`/${locale}/`} className="text-navy">
            {locale.toUpperCase()}
          </Link>
          <span>/</span>
          <Link href={`/${other}/`} className="hover:text-navy transition-colors">
            {other.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
