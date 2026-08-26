import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";
import { serviceIconMap } from "./icons/ServiceIcons";

export default function Services({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["services"];
}) {
  const isFa = locale === "fa";

  return (
    <section id="services" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 bg-[#f7f8f9]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10">
        <div>
          <div
            className={`font-bold mb-3.5 text-[#9a9ea5] ${isFa ? "text-[13px] tracking-wide" : "text-[13px] tracking-[0.16em]"}`}
          >
            {content.eyebrow}
          </div>
          <h2
            className={
              isFa
                ? "font-[family-name:var(--font-vazirmatn)] text-[26px] sm:text-[28px] font-extrabold text-navy"
                : "font-[family-name:var(--font-outfit)] text-[26px] sm:text-[32px] font-bold text-navy"
            }
          >
            {content.heading}
          </h2>
        </div>
        <p className={`max-w-[400px] text-[#6b6f76] ${isFa ? "text-[15px] leading-[1.9]" : "text-[15px] leading-[1.75]"}`}>
          {content.intro}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {content.items.map((item) => {
          const Icon = serviceIconMap[item.icon];
          return (
            <div
              key={item.title}
              className="card flex-[0_0_100%] sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(25%-12px)] bg-white border border-[#e3e5e8] rounded [border-radius:4px] p-6 flex flex-row items-center gap-4.5 min-h-[118px]"
              dir="ltr"
            >
              <div className="shrink-0 flex items-center justify-center w-[66px] h-[66px]">
                {Icon ? <Icon /> : null}
              </div>
              <div dir={isFa ? "rtl" : "ltr"} className={isFa ? "text-right" : "text-left"}>
                <div className="text-[15px] font-bold text-navy mb-1.5">{item.title}</div>
                <div className={`text-[12.5px] text-[#6b6f76] ${isFa ? "leading-[1.8]" : "leading-[1.6]"}`}>
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
