"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/data/projects.json";

/* ===== Standards Data will be pulled from locales ===== */

/* ===== Service Icons ===== */
function OnePageIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function CorporateIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function WebAppIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
    </svg>
  );
}

const serviceIcons: Record<string, () => React.JSX.Element> = {
  "one-page": OnePageIcon,
  corporate: CorporateIcon,
  webapp: WebAppIcon,
};

export default function HomePage() {
  const { t, locale } = useLanguage();
  const featuredProjects = projects.filter((p) => p.featured);
  
  // Cast data
  const faqData = t("faq") as { title: string; subtitle: string; items: { q: string; a: string }[] };
  const standardsData = t("standards") as { title: string; items: { title: string; desc: string; icon: string }[] };
  const whyData = t("why_choose_us") as { title: string; subtitle: string; items: { title: string; desc: string; icon: string }[] };
  const pricingData = t("pricing") as {
    promo_banner: string;
    title: string;
    subtitle: string;
    packages: {
      id: string;
      name: string;
      description: string;
      original_price: string;
      price: string;
      save_badge: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }[];
    webapp: {
      name: string;
      description: string;
      starting_price_label: string;
      price: string;
      tags: string[];
      cta: string;
    };
    disclaimer: string;
  };
  const targetAudienceData = t("target_audience") as { title: string; items: string[] };
  const workflowData = t("workflow") as { title: string; subtitle: string; steps: string[] };
  const seoData = t("seo_section") as { title: string; subtitle: string; description: string };

  // Generate JSON-LD for FAQ Page (AEO/GEO Optimization)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData?.items?.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })) || [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic Background with Glowing Orbs */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/40 to-white" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-float" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse-glow" />
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, #1e3fec 1.5px, transparent 1.5px)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-primary-600 border border-primary-100 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  {locale === "th" ? "พร้อมรับงานใหม่" : "Available for Projects"}
                </span>
              </div>

              <h1 className="animate-fade-in-up animation-delay-200">
                <span className="block text-4xl md:text-5xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
                  {t("hero.title") as string}
                </span>
                <span className="block text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mt-2 leading-tight tracking-tight">
                  {t("hero.subtitle") as string}
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed animate-fade-in-up animation-delay-400">
                {t("hero.description") as string}
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {t("hero.cta_primary") as string}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-600 bg-white border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600 shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  {t("hero.cta_secondary") as string}
                </Link>
              </div>
            </div>

            {/* Right - Premium Floating Mockups */}
            <div className="hidden lg:block relative h-[600px] w-full animate-fade-in animation-delay-400 perspective-1000">
              
              {/* Main Dashboard Mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-20 animate-float" style={{ animationDuration: '4s' }}>
                {/* Header */}
                <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto w-1/2 h-6 bg-white rounded-md border border-slate-200 shadow-sm" />
                </div>
                {/* Content */}
                <div className="p-6 grid grid-cols-3 gap-6">
                  <div className="col-span-1 space-y-4">
                    <div className="h-20 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-3 border border-primary-100">
                       <div className="w-8 h-8 rounded-full bg-white mb-2" />
                       <div className="h-2 w-1/2 bg-primary-200 rounded" />
                    </div>
                    <div className="h-24 rounded-xl bg-slate-50 border border-slate-100" />
                  </div>
                  <div className="col-span-2 space-y-4">
                    <div className="h-8 w-1/3 bg-slate-100 rounded-lg" />
                    <div className="h-32 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 p-4 shadow-inner text-white">
                      <div className="h-4 w-1/4 bg-white/20 rounded mb-4" />
                      <div className="flex items-end gap-2 h-16">
                        <div className="w-1/6 bg-white/40 h-full rounded-t-sm" />
                        <div className="w-1/6 bg-white/60 h-3/4 rounded-t-sm" />
                        <div className="w-1/6 bg-white/80 h-full rounded-t-sm" />
                        <div className="w-1/6 bg-white h-1/2 rounded-t-sm" />
                        <div className="w-1/6 bg-white/50 h-5/6 rounded-t-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 - Notification */}
              <div className="absolute top-20 right-0 w-64 p-4 glass rounded-2xl shadow-xl z-30 animate-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">Deploy Successful</p>
                    <p className="text-xs text-slate-500">Production is now live</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 - Code snippet */}
              <div className="absolute bottom-12 left-0 w-72 p-5 bg-navy rounded-2xl shadow-2xl z-30 animate-float" style={{ animationDelay: '2s', animationDuration: '4.5s' }}>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-xs text-slate-400 font-mono">api/auth.ts</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-purple-400">export const <span className="text-blue-400">authOptions</span> = {'{'}</div>
                  <div className="pl-4 text-slate-300">session: <span className="text-green-400">"jwt"</span>,</div>
                  <div className="pl-4 text-slate-300">providers: [ ... ]</div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== STANDARDS SECTION ===== */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              {standardsData?.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardsData?.items?.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              {t("services.title") as string}
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
              {t("services.subtitle") as string}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t("services.packages") as unknown as Array<{ name: string; description: string; features: string[]; icon: string }>).map(
              (pkg, index) => {
                const IconComponent = serviceIcons[pkg.icon] || OnePageIcon;
                return (
                  <article
                    key={index}
                    className={`card-hover relative rounded-3xl bg-white border border-slate-100 p-10 ${
                      index === 2 ? "md:border-primary-200 md:shadow-2xl md:shadow-primary-500/10 bg-gradient-to-b from-white to-primary-50/30" : "shadow-sm"
                    }`}
                  >
                    {index === 2 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg">
                        {locale === "th" ? "ยอดนิยม" : "Popular"}
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${index === 2 ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-primary-50 text-primary-600"}`}>
                      <IconComponent />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight">{pkg.name}</h3>
                    <p className="text-base text-slate-500 mb-8 leading-relaxed min-h-[80px]">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              }
            )}
          </div>

          <div className="text-center mt-16 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {locale === "th" ? "ขอใบเสนอราคา" : "Get a Quote"}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-600 bg-white border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 hover:-translate-y-1 group"
            >
              {locale === "th" ? "ดูรายละเอียดบริการทั้งหมด" : "View All Services Detail"}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              {pricingData?.title}
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {pricingData?.subtitle}
            </p>
          </div>

          {/* Promo Banner */}
          {pricingData?.promo_banner && (
            <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border border-amber-200 rounded-2xl py-3 px-6 text-center text-amber-800 font-semibold shadow-sm flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {pricingData.promo_banner}
            </div>
          )}

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
            {pricingData?.packages?.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 relative flex flex-col h-full ${
                  pkg.popular ? "border-primary-500 shadow-2xl shadow-primary-500/10 transform md:-translate-y-4" : "border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-300"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-100 text-primary-700 text-sm font-bold rounded-full shadow-sm">
                    {locale === "th" ? "ยอดนิยม" : "Popular"}
                  </div>
                )}
                
                {/* Icon (Optional placeholder) */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {pkg.id === "one-page" && (
                    <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {pkg.id === "corporate" && (
                    <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {pkg.id === "ecommerce" && (
                    <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px] leading-relaxed">{pkg.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-slate-400 line-through font-medium">{pkg.original_price}</span>
                    <span className="text-4xl font-extrabold text-navy tracking-tight">{pkg.price}</span>
                  </div>
                  <div className="inline-block px-2.5 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-md">
                    {pkg.save_badge}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://line.me/R/ti/p/@bigherostudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 rounded-xl text-sm font-bold text-center border-2 transition-all duration-300 hover:-translate-y-0.5 border-slate-200 text-slate-700 hover:border-[#00B900] hover:text-[#00B900]"
                >
                  {pkg.cta} <span className="ml-1">↗</span>
                </a>
              </div>
            ))}
          </div>

          {/* Web App Row */}
          {pricingData?.webapp && (
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy">{pricingData.webapp.name}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {pricingData.webapp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pricingData.webapp.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-md border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:items-end w-full md:w-auto text-center md:text-right shrink-0">
                <span className="text-sm text-slate-500 font-medium mb-1">{pricingData.webapp.starting_price_label}</span>
                <span className="text-3xl font-extrabold text-navy tracking-tight mb-4">{pricingData.webapp.price}</span>
                <a
                  href="https://line.me/R/ti/p/@bigherostudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-8 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:text-[#00B900] hover:border-[#00B900] hover:bg-green-50 transition-colors shadow-sm"
                >
                  {pricingData.webapp.cta} <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          {pricingData?.disclaimer && (
            <div className="text-center text-xs text-slate-500 font-medium max-w-3xl mx-auto">
              {pricingData.disclaimer}
            </div>
          )}
        </div>
      </section>

      {/* ===== TARGET AUDIENCE ===== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 tracking-tight">
            {targetAudienceData?.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {targetAudienceData?.items?.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-navy font-semibold text-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              {workflowData?.title}
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              {workflowData?.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {workflowData?.steps?.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary-200 text-primary-600 flex items-center justify-center text-xl font-bold mb-4 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all shadow-sm z-10">
                  {index + 1}
                </div>
                {index < workflowData.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-primary-100" />
                )}
                <h3 className="text-sm font-bold text-navy">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Abstract Background for Why Us */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-400 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {whyData?.title}
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              {whyData?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyData?.items?.map((item, index) => (
              <div
                key={index}
                className="bg-navy-light/50 border border-slate-700/50 backdrop-blur-sm p-8 rounded-3xl hover:bg-navy-light hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              {t("featured.title") as string}
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
              {t("featured.subtitle") as string}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <Link href={`/portfolio/${project.id}`} key={project.id} className="block h-full outline-none focus:ring-2 focus:ring-primary-500 rounded-3xl">
                <article
                  className="card-hover group rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm h-full"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Image Area - Unified Mockup Style */}
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center pt-10 px-8 group-hover:px-6 group-hover:pt-8 transition-all duration-500">
                      <div className="w-full h-full relative rounded-t-2xl bg-white shadow-xl border border-slate-200 overflow-hidden flex flex-col group-hover:shadow-2xl transition-all duration-500">
                        {/* Browser Top Bar */}
                        <div className="h-7 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        {/* Image inside mockup */}
                        <div className="relative flex-1 bg-slate-50">
                          <img 
                            src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} 
                            alt={project.title.en} 
                            className="object-cover object-top w-full h-full"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/90 text-primary-700 backdrop-blur-md shadow-sm">
                        {project.link_type === "demo" ? (locale === "th" ? "Demo" : "Demo") : (locale === "th" ? "Live" : "Live")}
                      </span>
                    </div>
                  </div>

                    <div className="p-8">
                      {/* Niche Tag */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          {locale === "th" ? "เว็บเฉพาะทาง (Niche)" : "Niche Website"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-primary-600 transition-colors">
                        {project.title[locale as "th" | "en"]}
                      </h3>
                      <p className="mt-3 text-slate-500 line-clamp-2 leading-relaxed">
                        {project.description[locale as "th" | "en"]}
                      </p>
                      {/* Highlighted Results */}
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs font-bold text-primary-700 mb-2">
                          {locale === "th" ? "✅ ผลลัพธ์:" : "✅ Results:"}
                        </p>
                        <div className="flex gap-2 flex-wrap text-xs text-slate-600 font-medium">
                          <span>โหลดเร็ว</span>
                          <span>• รองรับมือถือ</span>
                          <span>• รองรับ SEO</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-50 text-primary-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 flex justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-navy to-navy-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {t("featured.view_all") as string}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {locale === "th" ? "ปรึกษาฟรี" : "Free Consultation"}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEO / AEO / GEO SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            AI Search Ready
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            {seoData?.title}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {seoData?.subtitle}
          </p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              {seoData?.description}
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION (AEO/GEO Optimization) ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              {faqData?.title}
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              {faqData?.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqData?.items?.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-slate-50 border border-slate-100 open:bg-white open:border-primary-200 open:shadow-lg open:shadow-primary-500/5 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-navy text-lg outline-none marker:content-none">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-open:bg-primary-50 group-open:border-primary-200 group-open:text-primary-600 transition-colors">
                    <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
