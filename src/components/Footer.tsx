"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "th"
              ? "พร้อมเริ่มโปรเจกต์ของคุณ?"
              : "Ready to Start Your Project?"}
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            {locale === "th"
              ? "ปรึกษาเราฟรี ไม่มีค่าใช้จ่าย เราพร้อมรับฟังและแนะนำโซลูชันที่ดีที่สุดสำหรับธุรกิจของคุณ"
              : "Free consultation with no obligation. We're ready to listen and recommend the best solution for your business"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold bg-white text-primary-700 hover:bg-primary-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
          >
            {locale === "th" ? "ปรึกษาฟรี" : "Free Consultation"}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image 
                  src="/logo-photoroom.png" 
                  alt="BigHero Logo" 
                  fill 
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="text-xl font-bold">
                BigHero <span className="text-primary-400">Studio</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t("footer.tagline") as string}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("footer.quick_links") as string}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: t("nav.home") as string },
                { href: "/services", label: t("nav.services") as string },
                { href: "/portfolio", label: t("nav.portfolio") as string },
                { href: "/contact", label: t("nav.contact") as string },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("footer.services") as string}
            </h3>
            <ul className="space-y-3">
              {(locale === "th"
                ? ["เว็บไซต์ One-Page", "เว็บไซต์องค์กร", "Web Application", "Dashboard & API"]
                : ["One-Page Website", "Corporate Website", "Web Application", "Dashboard & API"]
              ).map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("footer.contact_info") as string}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-sm text-slate-400 leading-tight block pt-0.5">{t("footer.phone") as string}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm text-slate-400 leading-tight block break-all pt-0.5">{t("footer.email") as string}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00B900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 10.5c0-4.632-4.521-8.39-10.083-8.39C6.852 2.11 2.33 5.868 2.33 10.5c0 4.148 3.633 7.643 8.441 8.289.328.07.753.214.86.505.1.272.064.697.03 1.001-.004.032-.423 2.545-.52 3.101-.128.74.33 1.037.892.744 4.542-2.37 9.123-6.666 10.134-9.351C22.428 11.455 22.5 10.985 22.5 10.5"/>
                </svg>
                <span className="text-sm text-slate-400 leading-tight block pt-0.5">{t("footer.line") as string}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} BigHero Studio. {locale === "th" ? "สงวนลิขสิทธิ์." : "All rights reserved."}
            </p>
          </div>
          <div className="flex gap-6">
            <span className="text-sm text-slate-500">
              {locale === "th" ? "สร้างด้วย" : "Built with"}{" "}
              <span className="text-primary-400">Next.js</span> +{" "}
              <span className="text-primary-400">Tailwind CSS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
