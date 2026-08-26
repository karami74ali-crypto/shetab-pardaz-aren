import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";
import HeroGraphic from "./HeroGraphic";

export default function Hero({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["hero"];
}) {
  const isFa = locale === "fa";

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 px-6 sm:px-10 lg:px-20 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="flex-1 max-w-[580px]">
          <div
            className={`font-bold mb-5 text-[#9a9ea5] ${isFa ? "text-[13px] tracking-wide" : "text-[13px] tracking-[0.16em]"}`}
          >
            {content.eyebrow}
          </div>
          <h1
            className={
              isFa
                ? "font-[family-name:var(--font-vazirmatn)] text-[32px] sm:text-[42px] leading-[1.55] font-extrabold mb-6 text-navy text-pretty"
                : "font-[family-name:var(--font-outfit)] text-[38px] sm:text-[54px] leading-[1.18] font-bold mb-6 text-navy text-pretty"
            }
          >
            {content.headline} <span className="text-navy">{content.headlineAccent}</span>
            {content.headlineSuffix ? ` ${content.headlineSuffix}` : ""}
          </h1>
          <p
            className={`text-[#565a62] mb-9 max-w-[500px] ${isFa ? "text-[16px] leading-[2]" : "text-[16.5px] leading-[1.8]"}`}
          >
            {content.paragraph}
          </p>
          <div className="flex gap-3.5">
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2.5 bg-navy text-white text-sm font-bold px-6 py-4 rounded-sm"
            >
              {content.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {isFa ? (
                  <>
                    <path d="M19 12H5" />
                    <path d="M11 6l-6 6 6 6" />
                  </>
                ) : (
                  <>
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </>
                )}
              </svg>
            </a>
            <a
              href="#services"
              className="btn-outline flex items-center bg-transparent text-navy text-sm font-bold px-6 py-4 rounded-sm border-[1.5px] border-[#d7d9dc]"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="flex-[1.15] relative flex justify-center items-center w-full">
          <HeroGraphic />
        </div>
      </div>
      <div
        className={`hidden lg:flex items-center gap-2.5 absolute bottom-2 ${isFa ? "right-20" : "left-20"}`}
      >
        <span className="w-6 h-px bg-silver inline-block" />
        <span className="text-[12.5px] font-bold text-navy">{content.tagline}</span>
      </div>
    </section>
  );
}
