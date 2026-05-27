"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const servicesData = {
  th: [
    {
      icon: "📄",
      name: "เว็บไซต์ One-Page",
      description: "เว็บไซต์หน้าเดียวสำหรับธุรกิจ SME ที่ต้องการดีไซน์เน้นปิดการขาย ตอบโจทย์ลูกค้าได้ภายในหน้าเดียว",
      features: [
        "ดีไซน์ตามแบรนด์ของคุณ",
        "Responsive 100% ทุกอุปกรณ์",
        "SEO พื้นฐานพร้อมใช้งาน",
        "โดเมน + โฮสติ้ง + SSL ฟรี",
        "ฟอร์มติดต่อ + Google Map",
        "เชื่อมต่อ Social Media",
      ],
      highlight: false,
    },
    {
      icon: "🏢",
      name: "เว็บไซต์หน่วยงาน/องค์กร",
      description: "เว็บไซต์ที่มีโครงสร้างใหญ่ รองรับเนื้อหาจำนวนมาก พร้อมระบบจัดการเนื้อหา (CMS) ที่ใช้งานง่าย",
      features: [
        "ระบบ CMS จัดการเนื้อหาง่าย",
        "หลายหน้า หลายเมนู",
        "ระบบข่าวสาร/ประกาศ",
        "รองรับหลายภาษา",
        "SSL + Google Analytics",
        "ฝึกอบรมทีมงาน",
      ],
      highlight: false,
    },
    {
      icon: "⚡",
      name: "Web Application & Dashboard",
      description: "ระบบ Full-stack ที่ซับซ้อน เช่น Dashboard, ระบบอนุมัติ, ระบบจัดการข้อมูล, API Integration",
      features: [
        "ระบบ Login/Authentication",
        "Dashboard & รายงานแบบ Real-time",
        "API Integration ระดับองค์กร",
        "ระบบแจ้งเตือน Email/Telegram",
        "Import/Export Excel",
        "Automated Workflow",
      ],
      highlight: true,
    },
  ],
  en: [
    {
      icon: "📄",
      name: "One-Page Website",
      description: "Single-page website for SME businesses focused on conversion-driven design, capturing customers in one page",
      features: [
        "Brand-aligned custom design",
        "100% Responsive on all devices",
        "Basic SEO ready to go",
        "Domain + Hosting + Free SSL",
        "Contact form + Google Map",
        "Social Media integration",
      ],
      highlight: false,
    },
    {
      icon: "🏢",
      name: "Corporate Website",
      description: "Large-scale website supporting extensive content with an easy-to-use Content Management System (CMS)",
      features: [
        "Easy content management CMS",
        "Multi-page navigation",
        "News & announcement system",
        "Multi-language support",
        "SSL + Google Analytics",
        "Team training included",
      ],
      highlight: false,
    },
    {
      icon: "⚡",
      name: "Web Application & Dashboard",
      description: "Complex full-stack systems including dashboards, approval workflows, data management, and API integration",
      features: [
        "Login & Authentication system",
        "Real-time Dashboard & Reports",
        "Enterprise-grade API Integration",
        "Email/Telegram notifications",
        "Excel Import/Export",
        "Automated Workflow",
      ],
      highlight: true,
    },
  ],
};

const processSteps = {
  th: [
    { step: "01", title: "รับฟังโจทย์", desc: "พูดคุยทำความเข้าใจความต้องการและเป้าหมายธุรกิจของคุณ" },
    { step: "02", title: "ออกแบบ & วางแผน", desc: "ออกแบบ UI/UX และวางโครงสร้างระบบที่เหมาะสมที่สุด" },
    { step: "03", title: "พัฒนา & ทดสอบ", desc: "เขียนโค้ด พัฒนาระบบ พร้อมทดสอบทุกขั้นตอน" },
    { step: "04", title: "ส่งมอบ & ดูแล", desc: "ส่งมอบงาน ฝึกอบรม และดูแลหลังการขาย" },
  ],
  en: [
    { step: "01", title: "Listen & Understand", desc: "We discuss and understand your requirements and business goals" },
    { step: "02", title: "Design & Plan", desc: "UI/UX design and optimal system architecture planning" },
    { step: "03", title: "Develop & Test", desc: "Coding, system development, and thorough testing at every step" },
    { step: "04", title: "Deliver & Support", desc: "Project delivery, training, and after-sales support" },
  ],
};

export default function ServicesPage() {
  const { locale } = useLanguage();
  const services = servicesData[locale as "th" | "en"];
  const steps = processSteps[locale as "th" | "en"];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/20 to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy animate-fade-in-up">
            {locale === "th" ? "บริการของเรา" : "Our Services"}
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {locale === "th"
              ? "One-Stop Service มีโดเมนและโฮสติ้งพร้อม จบงานได้ทันที"
              : "One-Stop Service with domain and hosting included — ready to deliver"}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card-hover relative rounded-3xl p-8 ${
                  service.highlight
                    ? "bg-gradient-to-br from-navy to-navy-light text-white border-0 shadow-2xl"
                    : "bg-white border border-slate-100"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-primary-500 text-white">
                    {locale === "th" ? "⭐ ยอดนิยม" : "⭐ Most Popular"}
                  </div>
                )}
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h3 className={`text-xl font-bold mb-3 ${service.highlight ? "text-white" : "text-navy"}`}>
                  {service.name}
                </h3>
                <p className={`text-sm mb-6 leading-relaxed ${service.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.highlight ? "text-primary-300" : "text-primary-500"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={service.highlight ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    service.highlight
                      ? "bg-white text-navy hover:bg-primary-50"
                      : "bg-primary-50 text-primary-600 hover:bg-primary-100"
                  }`}
                >
                  {locale === "th" ? "เริ่มต้นใช้งาน" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {locale === "th" ? "ขั้นตอนการทำงาน" : "Our Process"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/25">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
