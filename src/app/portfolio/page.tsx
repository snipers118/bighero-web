"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/data/projects.json";

type FilterType = "all" | "corporate" | "dashboard" | "api" | "landing" | "ecommerce";

export default function PortfolioPage() {
  const { t, locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters = t("portfolio.filters") as Record<string, string>;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/20 to-white" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy animate-fade-in-up">
            {t("portfolio.title") as string}
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t("portfolio.subtitle") as string}
          </p>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as FilterType)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any) => (
              <div
                key={project.id}
                className="card-hover group rounded-3xl bg-white border border-slate-100 overflow-hidden"
              >
                {/* Image Area - Unified Mockup Style */}
                <div className="relative h-56 bg-slate-100 overflow-hidden group-hover:bg-slate-200/50 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center pt-8 px-6 group-hover:px-4 group-hover:pt-6 transition-all duration-500">
                    <div className="w-full h-full relative rounded-t-xl bg-white shadow-lg border border-slate-200 overflow-hidden flex flex-col group-hover:shadow-2xl transition-all duration-500">
                      {/* Browser Top Bar */}
                      <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-rose-400" />
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
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
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm ${project.link_type === "demo" ? "bg-amber-100/90 text-amber-800" : "bg-green-100/90 text-green-800"}`}>
                      {project.link_type === "demo" ? "🎮 Demo" : "🌐 Live"}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/90 text-white backdrop-blur-md shadow-sm">
                        ⭐ {locale === "th" ? "แนะนำ" : "Featured"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy group-hover:text-primary-600 transition-colors">
                    {project.title[locale as "th" | "en"]}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {project.description[locale as "th" | "en"]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-6">
                    <Link href={`/portfolio/${project.id}`} className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors text-center block">
                      {t("portfolio.view_project") as string}
                    </Link>
                    <Link 
                      href={project.link || `/portfolio/${project.id}`} 
                      target={project.link ? "_blank" : "_self"}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-500 hover:border-primary-300 hover:text-primary-600 transition-colors flex items-center justify-center"
                    >
                      {project.link_type === "demo"
                        ? (t("portfolio.demo") as string)
                        : (t("portfolio.live_site") as string)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <span className="text-4xl mb-4 block">🔍</span>
              <p className="text-slate-400">
                {locale === "th" ? "ยังไม่มีผลงานในหมวดหมู่นี้" : "No projects in this category yet"}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
