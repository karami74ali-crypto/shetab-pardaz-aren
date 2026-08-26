import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";

export default function About({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["about"];
}) {
  const isFa = locale === "fa";
  const headingClass = isFa
    ? "font-[family-name:var(--font-vazirmatn)] text-[24px] sm:text-[26px] leading-[1.7] font-extrabold mb-5"
    : "font-[family-name:var(--font-outfit)] text-[26px] sm:text-[30px] leading-[1.5] font-bold mb-5";
  const panelHeadingClass = isFa
    ? "font-[family-name:var(--font-vazirmatn)] text-[19px] sm:text-[20px] font-extrabold mb-4 text-navy"
    : "font-[family-name:var(--font-outfit)] text-[20px] sm:text-[22px] font-bold mb-4 text-navy";

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-navy text-white px-6 sm:px-14 py-14 sm:py-[72px]">
        <div className={`font-bold mb-5 text-silver ${isFa ? "text-[13px] tracking-wide" : "text-[13px] tracking-[0.14em]"}`}>
          {content.eyebrow}
        </div>
        <h2 className={headingClass}>{content.heading}</h2>
        <p className={`text-[#c9cdd6] ${isFa ? "text-[15px] leading-[2]" : "text-[15px] leading-[1.9]"}`}>
          {content.paragraph}
        </p>
      </div>
      <div className="bg-white border border-[#ececee] lg:border-s-0 px-6 sm:px-14 py-14 sm:py-[72px]">
        <h3 className={panelHeadingClass}>{content.panelHeading}</h3>
        <p className={`text-[#6b6f76] mb-7 ${isFa ? "text-[15px] leading-[2]" : "text-[15px] leading-[1.9]"}`}>
          {content.panelParagraph}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 gap-x-6">
          {content.points.map((point) => (
            <div key={point} className={`flex items-center gap-2.5 font-semibold text-[#3f4a5e] ${isFa ? "text-[14px]" : "text-[13.5px]"}`}>
              <span className="w-[7px] h-[7px] rounded-full bg-silver shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
