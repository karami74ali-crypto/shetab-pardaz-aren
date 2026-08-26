import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function Contact({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["contact"];
}) {
  const isFa = locale === "fa";

  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-8 sm:p-11 border border-[#e3e5e8] bg-[#f7f8f9] mb-8">
        <div>
          <h2
            className={
              isFa
                ? "font-[family-name:var(--font-vazirmatn)] text-[21px] sm:text-[23px] font-extrabold mb-2 text-navy"
                : "font-[family-name:var(--font-outfit)] text-[22px] sm:text-[26px] font-bold mb-2 text-navy"
            }
          >
            {content.heading}
          </h2>
          <p className="text-[14.5px] text-[#6b6f76]">{content.paragraph}</p>
        </div>
        <a
          href={`mailto:${content.email}`}
          className="btn-primary flex items-center gap-2.5 bg-navy text-white text-sm font-bold px-6.5 py-4 rounded-sm whitespace-nowrap"
        >
          {content.ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 5h16v14H4zM4 7l8 6 8-6" />
          </svg>
        </a>
      </div>

      <div className="max-w-2xl">
        <ContactForm locale={locale} content={content} />
      </div>
    </section>
  );
}
