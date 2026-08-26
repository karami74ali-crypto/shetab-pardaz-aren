import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";

export default function TrustBar({
  locale,
  items,
}: {
  locale: Locale;
  items: HomeContent["trustBar"];
}) {
  const isFa = locale === "fa";
  return (
    <div className="bg-navy">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 px-6 sm:px-10 lg:px-20 py-10">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`text-center px-4 sm:px-6 ${i % 2 === 0 ? "border-s border-white/[0.22]" : "border-s border-white/[0.22] lg:border-s"}`}
          >
            <div
              className={
                isFa
                  ? "font-[family-name:var(--font-vazirmatn)] text-white text-[17px] sm:text-[18px] font-extrabold mb-1.5"
                  : "font-[family-name:var(--font-outfit)] text-white text-[18px] sm:text-[20px] font-bold mb-1.5"
              }
            >
              {item.title}
            </div>
            <div className="text-silver text-[12.5px]">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
