"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactPage() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const form = t("contact.form") as Record<string, unknown>;
  const budgetOptions = form.budget_options as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        formElement.reset();
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          setError(errorData.error || (locale === "th" ? "เกิดข้อผิดพลาดในการส่งข้อความ" : "Failed to send message"));
        } else {
          const textError = await response.text();
          console.error("Server returned non-JSON error:", textError);
          setError(locale === "th" ? `เซิร์ฟเวอร์ตอบกลับผิดปกติ (Status: ${response.status}) โปรดดูคอนโซล` : `Server error (Status: ${response.status}). Check console.`);
        }
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(locale === "th" ? "เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง" : "Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/20 to-white" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy animate-fade-in-up">
            {t("contact.title") as string}
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t("contact.subtitle") as string}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white border border-slate-100 p-8 md:p-10 shadow-sm">
                
                {/* Quick Contact Channels */}
                <div className="mb-8 p-6 bg-slate-50 border border-slate-100 rounded-2xl animate-fade-in-up">
                  <div className="text-center mb-5">
                    <h3 className="text-lg font-bold text-navy">
                      {locale === "th" ? "ช่องทางติดต่อด่วน" : "Quick Contact Channels"}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {locale === "th" ? "ทีมงานจะติดต่อกลับภายใน 1-3 ชั่วโมง (จันทร์ - ศุกร์)" : "Our team will reply within 1-3 hours (Mon-Fri)"}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="https://line.me/R/ti/p/@bigherostudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-[#00B900] hover:bg-[#009900] text-white font-bold rounded-xl shadow-lg shadow-[#00B900]/20 transition-all hover:-translate-y-0.5"
                    >
                      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.5 10.5c0-4.632-4.521-8.39-10.083-8.39C6.852 2.11 2.33 5.868 2.33 10.5c0 4.148 3.633 7.643 8.441 8.289.328.07.753.214.86.505.1.272.064.697.03 1.001-.004.032-.423 2.545-.52 3.101-.128.74.33 1.037.892.744 4.542-2.37 9.123-6.666 10.134-9.351C22.428 11.455 22.5 10.985 22.5 10.5"/>
                      </svg>
                      {locale === "th" ? "คุยผ่าน LINE" : "Chat on LINE"}
                    </a>
                    <a
                      href="https://m.me/bigherostudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-[#0084FF] hover:bg-[#0073e6] text-white font-bold rounded-xl shadow-lg shadow-[#0084FF]/20 transition-all hover:-translate-y-0.5"
                    >
                      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.926 1.487 5.534 3.82 7.234v3.292l3.52-1.944a10.9 10.9 0 002.66.33c5.523 0 10-4.14 10-9.25S17.523 2 12 2zm1.18 12.12l-2.61-2.79-5.11 2.79 5.6-5.96 2.62 2.79 5.1-2.79-5.6 5.96z"/>
                      </svg>
                      {locale === "th" ? "คุยผ่าน Messenger" : "Chat on Messenger"}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                  <div className="flex-1 h-px bg-slate-100" />
                  <span className="text-sm text-slate-400 font-medium">{locale === "th" ? "หรือ ส่งข้อความให้เราติดต่อกลับ" : "Or leave a message for us"}</span>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>

                {submitted ? (
                  <div className="text-center py-16 animate-fade-in-up">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {locale === "th" ? "ส่งข้อความสำเร็จ!" : "Message Sent!"}
                    </h3>
                    <p className="text-slate-500">
                      {locale === "th"
                        ? "เราจะติดต่อกลับโดยเร็วที่สุดครับ"
                        : "We'll get back to you as soon as possible"}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm animate-fade-in">
                        {error}
                      </div>
                    )}
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {form.name as string} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all disabled:opacity-50"
                        placeholder={locale === "th" ? "ชื่อของคุณ" : "Your name"}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {form.email as string} <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all disabled:opacity-50"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {form.phone as string}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          disabled={loading}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all disabled:opacity-50"
                          placeholder="064-778-8954"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {form.budget as string}
                      </label>
                      <select 
                        name="budget"
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all appearance-none disabled:opacity-50"
                      >
                        <option value="">{locale === "th" ? "-- เลือกงบประมาณ --" : "-- Select budget --"}</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {form.message as string} <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        disabled={loading}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all resize-none disabled:opacity-50"
                        placeholder={locale === "th" ? "บอกเล่าเกี่ยวกับโปรเจกต์ของคุณ..." : "Tell us about your project..."}
                      />
                    </div>

                    {/* Turnstile CAPTCHA */}
                    <div className="flex justify-center">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken("")}
                        onError={() => setTurnstileToken("")}
                        options={{
                          theme: "light",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading || !turnstileToken}
                      className="w-full py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading && (
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {loading ? (locale === "th" ? "กำลังส่ง..." : "Sending...") : form.submit as string}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-white">
                <h3 className="text-lg font-bold mb-6">
                  {(t("contact.info") as Record<string, string>).title}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">Email</p>
                      <p className="text-white">bighero.thailand@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">{locale === "th" ? "โทรศัพท์" : "Phone"}</p>
                      <p className="text-white">064-778-8954</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00B900]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#00B900]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.5 10.5c0-4.632-4.521-8.39-10.083-8.39C6.852 2.11 2.33 5.868 2.33 10.5c0 4.148 3.633 7.643 8.441 8.289.328.07.753.214.86.505.1.272.064.697.03 1.001-.004.032-.423 2.545-.52 3.101-.128.74.33 1.037.892.744 4.542-2.37 9.123-6.666 10.134-9.351C22.428 11.455 22.5 10.985 22.5 10.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">LINE</p>
                      <p className="text-white">@bigherostudio</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">{locale === "th" ? "เวลาทำการ" : "Working Hours"}</p>
                      <p className="text-white">{locale === "th" ? "จ-ศ 09:00 - 18:00" : "Mon-Fri 09:00 - 18:00"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-3xl bg-white border border-slate-100 p-8">
                <h3 className="text-lg font-bold text-navy mb-4">
                  {locale === "th" ? "ทำไมต้องเลือกเรา?" : "Why Choose Us?"}
                </h3>
                <ul className="space-y-4">
                  {(locale === "th"
                    ? [
                        "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
                        "ส่งงานตรงเวลา มีรายงานความคืบหน้า",
                        "ดูแลหลังการขาย 1 ปีเต็ม",
                        "โดเมน + โฮสติ้งพร้อมจัดให้",
                      ]
                    : [
                        "Free consultation, no obligation",
                        "On-time delivery with progress reports",
                        "1-year full after-sales support",
                        "Domain + Hosting included",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
