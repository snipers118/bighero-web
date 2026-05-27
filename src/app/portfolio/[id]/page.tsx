"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/data/projects.json";
import ZoomBookingDemo from "@/components/demos/ZoomBookingDemo";
import SSODemo from "@/components/demos/SSODemo";
import SSOProfileDemo from "@/components/demos/SSOProfileDemo";
import SROIDemo from "@/components/demos/SROIDemo";
import GovWebDemo from "@/components/demos/GovWebDemo";
import CorpWebCMSDemo from "@/components/demos/CorpWebCMSDemo";
import CorpWeb2Demo from "@/components/demos/CorpWeb2Demo";
import SMELandingDemo from "@/components/demos/SMELandingDemo";
import SwimwearDemo from "@/components/demos/SwimwearDemo";
import TacticalDemo from "@/components/demos/TacticalDemo";
import PrefabDemo from "@/components/demos/PrefabDemo";
import CultureDemo from "@/components/demos/CultureDemo";
import TransportDemo from "@/components/demos/TransportDemo";
import FashionDemo from "@/components/demos/FashionDemo";
import RealEstateDemo from "@/components/demos/RealEstateDemo";
import JewelryDemo from "@/components/demos/JewelryDemo";
import GadgetDemo from "@/components/demos/GadgetDemo";
import TourDemo from "@/components/demos/TourDemo";
import HotelDemo from "@/components/demos/HotelDemo";
import SpaDemo from "@/components/demos/SpaDemo";
import HealthDemo from "@/components/demos/HealthDemo";
import WickerworkDemo from "@/components/demos/WickerworkDemo";
import MushroomDemo from "@/components/demos/MushroomDemo";
import RakMakDemo from "@/components/demos/RakMakDemo";
import SAPDemo from "@/components/demos/SAPDemo";
import LuxuryBrandDemo from "@/components/demos/LuxuryBrandDemo";

const DEMO_PROJECTS = ["zoom-booking", "sso-system", "sroi-platform", "gov-website", "corporate-web-1", "corporate-web-2", "landing-sme", "ecommerce-swimwear", "ecommerce-tactical", "corporate-prefab", "ecommerce-culture", "corporate-transport", "ecommerce-fashion", "landing-realestate", "ecommerce-jewelry", "ecommerce-gadget", "corporate-tour", "corporate-hotel", "corporate-spa", "ecommerce-health", "landing-wickerwork", "landing-mushroom", "landing-rakmak", "landing-sap", "ecommerce-luxury"];

export default function ProjectDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { locale } = useLanguage();

  const project: any = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary-600 hover:underline font-semibold">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 animate-fade-in-up">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary-600 mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {locale === "th" ? "กลับไปหน้าผลงาน" : "Back to Portfolio"}
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
          {project.title[locale as "th" | "en"]}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Interactive Demo or Static Mockup */}
      <section className={`mx-auto mb-20 animate-fade-in-up animation-delay-200 ${DEMO_PROJECTS.includes(project.id) ? "w-full max-w-none px-0" : "max-w-5xl px-6"}`}>
        {project.id === "zoom-booking" ? (
          <ZoomBookingDemo />
        ) : project.id === "sso-system" ? (
          <>
            <SSODemo />
            <SSOProfileDemo />
          </>
        ) : project.id === "sroi-platform" ? (
          <SROIDemo />
        ) : project.id === "gov-website" ? (
          <GovWebDemo />
        ) : project.id === "corporate-web-1" ? (
          <CorpWebCMSDemo />
        ) : project.id === "corporate-web-2" ? (
          <CorpWeb2Demo />
        ) : project.id === "landing-sme" ? (
          <SMELandingDemo />
        ) : project.id === "ecommerce-swimwear" ? (
          <SwimwearDemo />
        ) : project.id === "ecommerce-tactical" ? (
          <TacticalDemo />
        ) : project.id === "corporate-prefab" ? (
          <PrefabDemo />
        ) : project.id === "ecommerce-culture" ? (
          <CultureDemo />
        ) : project.id === "corporate-transport" ? (
          <TransportDemo />
        ) : project.id === "ecommerce-fashion" ? (
          <FashionDemo />
        ) : project.id === "landing-realestate" ? (
          <RealEstateDemo />
        ) : project.id === "ecommerce-jewelry" ? (
          <JewelryDemo />
        ) : project.id === "ecommerce-gadget" ? (
          <GadgetDemo />
        ) : project.id === "corporate-tour" ? (
          <TourDemo />
        ) : project.id === "corporate-hotel" ? (
          <HotelDemo />
        ) : project.id === "corporate-spa" ? (
          <SpaDemo />
        ) : project.id === "ecommerce-health" ? (
          <HealthDemo />
        ) : project.id === "landing-wickerwork" ? (
          <WickerworkDemo />
        ) : project.id === "landing-mushroom" ? (
          <MushroomDemo />
        ) : project.id === "landing-rakmak" ? (
          <RakMakDemo />
        ) : project.id === "landing-sap" ? (
          <SAPDemo />
        ) : project.id === "ecommerce-luxury" ? (
          <LuxuryBrandDemo />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1e3fec 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>
            <span className="text-8xl drop-shadow-xl relative z-10">
              {project.category === "dashboard" ? "📊" : project.category === "api" ? "🔐" : project.category === "landing" ? "📄" : "🏢"}
            </span>
          </div>
        )}
      </section>

      {/* Content Area */}
      <section className={`mx-auto px-6 animate-fade-in-up animation-delay-400 ${DEMO_PROJECTS.includes(project.id) ? "max-w-5xl" : "max-w-3xl"}`}>
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-navy mb-6 pb-4 border-b border-slate-100">
             {locale === "th" ? "เกี่ยวกับโปรเจกต์นี้" : "About this Project"}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            {project.description[locale as "th" | "en"]}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-navy mb-6">
                {locale === "th" ? "ฟีเจอร์เด่นของระบบ" : "Key Features"}
              </h3>
              <ul className="space-y-4">
                {project.features[locale as "th" | "en"].map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-navy mb-6">
                {locale === "th" ? "ภาพตัวอย่างระบบ" : "System Screenshots"}
              </h3>
              <div className="space-y-8">
                {project.screenshots.map((src: string, i: number) => (
                  <div key={i} className="rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl relative bg-slate-50 group cursor-default">
                    {/* Placeholder loading state */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 text-slate-300">
                       <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${project.title.en} screenshot ${i + 1}`} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-10 rounded-3xl mt-16 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">
               {locale === "th" ? "สนใจทำระบบแบบนี้ใช่ไหม?" : "Interested in a system like this?"}
            </h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
               {locale === "th" ? "ปรึกษาทีมงานของเราฟรี ไม่มีค่าใช้จ่าย เรายินดีประเมินราคาและแนะนำสถาปัตยกรรมระบบที่เหมาะสมให้กับคุณ" : "Consult with our team for free to estimate price and architecture."}
            </p>
            <Link href="/contact" className="inline-flex px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:-translate-y-1">
               {locale === "th" ? "ปรึกษาฟรี ทักเลย" : "Free Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
