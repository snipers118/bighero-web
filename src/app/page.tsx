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
                  href="/portfolio"
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

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 text-lg group transition-colors"
            >
              {locale === "th" ? "ดูรายละเอียดบริการทั้งหมด" : "View All Services Detail"}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                  {/* Image placeholder with premium gradient */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-xl">
                        <span className="text-4xl drop-shadow-md">
                          {project.category === "dashboard" ? "📊" : project.category === "api" ? "🔐" : "🌐"}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/90 text-primary-700 backdrop-blur-md shadow-sm">
                        {project.link_type === "demo" ? (locale === "th" ? "Demo" : "Demo") : (locale === "th" ? "Live" : "Live")}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-navy group-hover:text-primary-600 transition-colors">
                      {project.title[locale as "th" | "en"]}
                    </h3>
                    <p className="mt-3 text-slate-500 line-clamp-2 leading-relaxed">
                      {project.description[locale as "th" | "en"]}
                    </p>
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

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-navy to-navy-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {t("featured.view_all") as string}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
