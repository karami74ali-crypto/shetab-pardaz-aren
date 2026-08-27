import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/lib/content";

const socialIcons: Record<string, React.ReactElement> = {
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  اینستاگرام: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="5.5" cy="6.5" r="1.8" />
      <circle cx="18.5" cy="6.5" r="1.8" />
      <circle cx="5.5" cy="17.5" r="1.8" />
      <circle cx="18.5" cy="17.5" r="1.8" />
      <path d="M9.8 10.5L7 8.2M14.2 10.5L17 8.2M9.8 13.5L7 15.8M14.2 13.5L17 15.8" />
    </svg>
  ),
  لینکدین: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="5.5" cy="6.5" r="1.8" />
      <circle cx="18.5" cy="6.5" r="1.8" />
      <circle cx="5.5" cy="17.5" r="1.8" />
      <circle cx="18.5" cy="17.5" r="1.8" />
      <path d="M9.8 10.5L7 8.2M14.2 10.5L17 8.2M9.8 13.5L7 15.8M14.2 13.5L17 15.8" />
    </svg>
  ),
  WhatsApp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4.3-1.2L4 20z" />
      <path d="M9 10c0 3 2 5 5 5" strokeLinecap="round" />
    </svg>
  ),
  واتساپ: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4.3-1.2L4 20z" />
      <path d="M9 10c0 3 2 5 5 5" strokeLinecap="round" />
    </svg>
  ),
};

export default function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["footer"];
}) {
  const isFa = locale === "fa";

  return (
    <footer className="bg-navy px-6 sm:px-10 lg:px-20 pt-14 sm:pt-16 pb-7">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 pb-11 border-b border-white/10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <img
            src={isFa ? "/logos/logo-fa-silver.svg" : "/logos/logo-en-silver.svg"}
            alt="Shetab Pardaz Aren"
            className={isFa ? "h-12 w-auto mb-4" : "h-11 w-auto mb-4"}
          />
          <div className="text-[13px] text-silver max-w-[260px]" style={{ lineHeight: isFa ? 1.9 : 1.8 }}>
            {content.tagline}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#6f7480] mb-4">{content.quickLinksHeading}</div>
          <div className="flex flex-col gap-2.5">
            <a href="#services" className="footer-link text-[13.5px] text-[#d7d9dc]">
              {content.quickLinksHeading === "دسترسی سریع" ? "خدمات" : "Services"}
            </a>
            <a href="#about" className="footer-link text-[13.5px] text-[#d7d9dc]">
              {isFa ? "درباره ما" : "About"}
            </a>
            <a href="#contact" className="footer-link text-[13.5px] text-[#d7d9dc]">
              {isFa ? "تماس با ما" : "Contact"}
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#6f7480] mb-4">{content.contactHeading}</div>
          <div className="flex flex-col gap-3">
            <a href="mailto:info@sparen.ir" className="footer-link flex items-center gap-2 text-[13.5px] text-[#d7d9dc]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span dir="ltr">info@sparen.ir</span>
            </a>
            <div className="flex items-center gap-2 text-[13.5px] text-[#d7d9dc]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
              </svg>
              {content.phoneDisplay}
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#6f7480] mb-4">{content.socialHeading}</div>
          <div className="flex flex-col gap-3">
            {content.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener"
                className="footer-link flex items-center gap-2 text-[13.5px] text-[#d7d9dc]"
              >
                {socialIcons[item.label]}
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#6f7480] mb-4">{content.addressHeading}</div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2 text-[13px] text-[#d7d9dc]" style={{ lineHeight: isFa ? 1.8 : 1.7 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.2" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: content.addressLine }} />
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#d7d9dc]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0" aria-hidden="true">
                <path d="M11 3H4v7l9.5 9.5a2 2 0 002.8 0l4.2-4.2a2 2 0 000-2.8L11 3z" />
                <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              {content.postalLabel}
            </div>
          </div>
        </div>
      </div>

       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5">
        <div className="text-xs text-[#7d8290]">{content.bottomTagline}</div>
        <div
          className="shrink-0"
          style={{ width: 80 }}
          dangerouslySetInnerHTML={{
            __html:
              "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7501775&Code=X91BHm1ktmdLopsUhmBES7zOrwidvSR9'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7501775&Code=X91BHm1ktmdLopsUhmBES7zOrwidvSR9' alt='نماد اعتماد الکترونیکی شتاب‌پرداز آرن' style='cursor:pointer;width:100%;height:auto' code='X91BHm1ktmdLopsUhmBES7zOrwidvSR9'></a>",
          }}
        />
        <div className="text-xs text-[#7d8290]">{content.copyright}</div>
      </div>
    </footer>
  );
}
