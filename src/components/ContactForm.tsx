"use client";

import { useState, type FormEvent } from "react";
import type { HomeContent } from "@/lib/content";

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function ContactForm({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["contact"];
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const isFa = locale === "fa";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "contact" };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(payload),
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-[#e3e5e8] bg-white px-8 py-10 text-center" dir={isFa ? "rtl" : "ltr"}>
        <div className={`text-navy font-bold mb-2 ${isFa ? "text-[19px]" : "text-[18px]"}`}>
          {content.formSuccessTitle}
        </div>
        <p className="text-[#6b6f76] text-[14.5px]">{content.formSuccessBody}</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      action={`/${locale}/thank-you/`}
      onSubmit={handleSubmit}
      className="border border-[#e3e5e8] bg-white p-6 sm:p-8"
      dir={isFa ? "rtl" : "ltr"}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-[12.5px] font-bold text-navy mb-1.5">
            {content.formName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-[#d7d9dc] px-3.5 py-2.5 text-[14px] text-navy focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[12.5px] font-bold text-navy mb-1.5">
            {content.formEmail}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            dir="ltr"
            className="w-full border border-[#d7d9dc] px-3.5 py-2.5 text-[14px] text-navy focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block text-[12.5px] font-bold text-navy mb-1.5">
          {content.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full border border-[#d7d9dc] px-3.5 py-2.5 text-[14px] text-navy focus:outline-none focus:border-navy transition-colors resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary bg-navy text-white text-sm font-bold px-6 py-3.5 rounded-sm disabled:opacity-60"
      >
        {status === "sending" ? "…" : content.formSubmit}
      </button>
      {status === "error" && (
        <p className="mt-3 text-[13px] text-red-600">
          {isFa
            ? "ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید."
            : "Something went wrong. Please try again or email us directly."}
        </p>
      )}
    </form>
  );
}
