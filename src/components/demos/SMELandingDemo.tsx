"use client";

import { useState, useEffect } from "react";

// --- Mock Content for Bilingual ---
const content = {
  th: {
    nav: ["ฟีเจอร์", "ราคา", "คำถามที่พบบ่อย"],
    badge: "🚀 เปิดตัวระบบ AI ผู้ช่วยอัจฉริยะ 2026",
    title1: "ยกระดับธุรกิจ SME ของคุณ",
    title2: "ด้วยพลังแห่งอนาคต",
    subtitle: "แพลตฟอร์มการจัดการธุรกิจที่ผสาน AI ช่วยเพิ่มยอดขาย ลดต้นทุน และจัดการงานเอกสารอัตโนมัติ ให้คุณโฟกัสกับการเติบโตได้เต็มที่",
    cta1: "เริ่มต้นใช้งานฟรี",
    cta2: "ดูวิดีโอสาธิต",
    stats: [
      { num: "10k+", label: "ธุรกิจที่ไว้วางใจ" },
      { num: "99.9%", label: "Uptime การันตี" },
      { num: "3x", label: "ยอดขายเติบโตเฉลี่ย" }
    ],
    features: [
      { icon: "⚡", title: "ทำงานเร็วขึ้น 10 เท่า", desc: "ระบบ Automation จัดการงานซ้ำซ้อนแทนคุณ" },
      { icon: "🧠", title: "AI วิเคราะห์ยอดขาย", desc: "คาดการณ์เทรนด์และแนะนำกลยุทธ์แบบเรียลไทม์" },
      { icon: "🔒", title: "ปลอดภัยสูงสุด", desc: "เข้ารหัสข้อมูลระดับเดียวกับสถาบันการเงิน" }
    ],
    howItWorksTitle: "เริ่มต้นง่ายๆ ใน 3 ขั้นตอน",
    howItWorks: [
      { step: "01", title: "เชื่อมต่อข้อมูล", desc: "ผสานระบบเดิมของคุณเข้ากับ NEXUS ได้ในคลิกเดียว" },
      { step: "02", title: "AI เรียนรู้ธุรกิจ", desc: "ระบบจะวิเคราะห์ข้อมูลย้อนหลังเพื่อสร้างโมเดลเฉพาะสำหรับคุณ" },
      { step: "03", title: "เติบโตทันที", desc: "รับคำแนะนำและให้ AI ช่วยจัดการงานซ้ำซ้อนแบบอัตโนมัติ" }
    ],
    pricingTitle: "เลือกแพ็กเกจที่เหมาะกับคุณ",
    pricing: [
      { name: "Starter", price: "฿990", period: "/เดือน", desc: "สำหรับธุรกิจขนาดเล็กที่เพิ่งเริ่มต้น", features: ["ผู้ใช้งาน 3 คน", "AI วิเคราะห์ยอดขายพื้นฐาน", "ระบบบัญชีเบื้องต้น", "ซัพพอร์ตผ่านอีเมล"] },
      { name: "Pro", price: "฿2,490", period: "/เดือน", desc: "สำหรับธุรกิจที่ต้องการเติบโตอย่างรวดเร็ว", popular: true, features: ["ผู้ใช้งานไม่จำกัด", "AI วิเคราะห์เชิงลึก & คาดการณ์", "ระบบ Automation เต็มรูปแบบ", "เชื่อมต่อ API ได้ไม่อั้น", "ซัพพอร์ต 24/7"] }
    ],
    testimonialsTitle: "ความสำเร็จของลูกค้าเรา",
    testimonials: [
      { text: "NEXUS ช่วยลดเวลาทำบัญชีและเช็คสต็อกไปได้กว่า 80% ตอนนี้เรามีเวลาโฟกัสกับการขยายสาขาและดูแลลูกค้าอย่างเต็มที่", author: "คุณสมชาย", role: "เจ้าของร้านกาแฟ 10 สาขา" },
      { text: "ยอดขายออนไลน์เราเพิ่มขึ้น 3 เท่าเพราะ AI ช่วยวิเคราะห์เทรนด์ล่วงหน้าและแนะนำโปรโมชั่นที่ตรงใจลูกค้าสุดๆ", author: "คุณวิภา", role: "CEO แบรนด์เสื้อผ้าแฟชั่น" }
    ],
    ctaBottom: "พร้อมก้าวสู่อนาคตแล้วหรือยัง?",
    footerDesc: "NEXUS แพลตฟอร์ม AI อัจฉริยะที่ออกแบบมาเพื่อธุรกิจ SME ยุคใหม่ ปลดล็อกศักยภาพธุรกิจคุณด้วยเทคโนโลยี",
    footerLinks: {
      Product: ["ฟีเจอร์", "ราคา", "กรณีศึกษา", "การอัปเดต"],
      Company: ["เกี่ยวกับเรา", "ร่วมงานกับเรา", "ข่าวสาร", "ติดต่อเรา"],
      Legal: ["นโยบายความเป็นส่วนตัว", "เงื่อนไขการใช้งาน", "ความปลอดภัย"]
    }
  },
  en: {
    nav: ["Features", "Pricing", "FAQ"],
    badge: "🚀 Introducing Smart AI Assistant 2026",
    title1: "Supercharge Your SME",
    title2: "With the Power of the Future",
    subtitle: "An AI-powered business management platform that boosts sales, cuts costs, and automates paperwork so you can focus on growth.",
    cta1: "Start for Free",
    cta2: "Watch Demo",
    stats: [
      { num: "10k+", label: "Trusted Businesses" },
      { num: "99.9%", label: "Uptime Guaranteed" },
      { num: "3x", label: "Average Sales Growth" }
    ],
    features: [
      { icon: "⚡", title: "10x Faster Workflow", desc: "Automation handles repetitive tasks for you." },
      { icon: "🧠", title: "AI Sales Analytics", desc: "Predict trends and suggest strategies in real-time." },
      { icon: "🔒", title: "Enterprise Security", desc: "Bank-level data encryption." }
    ],
    howItWorksTitle: "Get Started in 3 Simple Steps",
    howItWorks: [
      { step: "01", title: "Connect Data", desc: "Integrate your existing systems with NEXUS in one click." },
      { step: "02", title: "AI Learning", desc: "The system analyzes historical data to build a custom model for you." },
      { step: "03", title: "Instant Growth", desc: "Receive insights and let AI handle repetitive tasks automatically." }
    ],
    pricingTitle: "Choose Your Plan",
    pricing: [
      { name: "Starter", price: "$29", period: "/mo", desc: "For small businesses just starting out.", features: ["3 Users", "Basic AI Analytics", "Basic Accounting", "Email Support"] },
      { name: "Pro", price: "$79", period: "/mo", desc: "For businesses ready to scale rapidly.", popular: true, features: ["Unlimited Users", "Deep AI Analytics & Predictions", "Full Automation", "Unlimited API Integrations", "24/7 Support"] }
    ],
    testimonialsTitle: "Customer Success Stories",
    testimonials: [
      { text: "NEXUS cut our accounting and inventory time by 80%. Now we can focus entirely on expanding branches and customer care.", author: "Mr. Somchai", role: "Owner of 10 Coffee Shops" },
      { text: "Our online sales tripled because the AI analyzed future trends and suggested perfectly targeted promotions.", author: "Ms. Wipa", role: "CEO, Fashion Brand" }
    ],
    ctaBottom: "Ready to step into the future?",
    footerDesc: "NEXUS is an intelligent AI platform designed for modern SMEs. Unlock your business potential with technology.",
    footerLinks: {
      Product: ["Features", "Pricing", "Case Studies", "Updates"],
      Company: ["About Us", "Careers", "News", "Contact"],
      Legal: ["Privacy Policy", "Terms of Service", "Security"]
    }
  }
};

export default function SMELandingDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const t = content[lang];

  // For Interactive Background
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-800 font-sans min-h-[850px] flex flex-col bg-[#030712] text-white"
      onMouseMove={handleMouseMove}
    >
      
      {/* Demo Controls Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'text-white hover:bg-white/20'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'text-white hover:bg-white/20'}`}>EN</button>
      </div>

      {/* --- Animated Futuristic Background --- */}
      <div 
        className="absolute w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out z-0 fixed"
        style={{ transform: `translate(calc(-50% + ${mousePosition.x * 100}px), calc(-50% + ${mousePosition.y * 100}px))`, left: '50%', top: '50%' }}
      ></div>
      
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] animate-blob z-0 fixed"></div>
      <div className="absolute top-[40%] right-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 z-0 fixed"></div>
      <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-indigo-500/20 rounded-full blur-[90px] animate-blob animation-delay-4000 z-0 fixed"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50 z-0 fixed"></div>

      {/* --- Actual Landing Page View --- */}
      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden">
        
        {/* Navigation */}
        <nav className="px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 sticky top-0 z-40 bg-[#030712]/50">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(232,121,249,0.5)]">X</div>
              <span className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">NEXUS</span>
           </div>
           <div className="hidden md:flex gap-8">
              {t.nav.map((item, i) => (
                <span key={i} className="text-sm font-medium text-gray-400 hover:text-white cursor-pointer transition-colors">{item}</span>
              ))}
           </div>
           <button className="hidden md:block px-5 py-2 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Log in
           </button>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center animate-fade-in-up mt-8">
           <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:bg-fuchsia-500/20 transition cursor-pointer">
              {t.badge}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
           </div>
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 perspective-1000">
              <span className="block text-white" style={{ transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)` }}>
                {t.title1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400" style={{ transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)` }}>
                {t.title2}
              </span>
           </h1>
           <p className="text-lg text-gray-400 max-w-2xl mb-12 font-light">
              {t.subtitle}
           </p>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
              <button className="relative group overflow-hidden px-8 py-4 rounded-full font-bold text-white bg-indigo-600 transition-all hover:scale-105">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                 <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.cta1}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </span>
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                 <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                 {t.cta2}
              </button>
           </div>
        </div>

        {/* Dashboard Mockup Graphic */}
        <div className="px-4 max-w-5xl mx-auto w-full mb-24 relative z-20">
           <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine z-30 pointer-events-none"></div>
              <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 flex flex-col h-64 md:h-96">
                 <div className="h-8 bg-[#1e293b] flex items-center px-3 gap-2 border-b border-white/5">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                   </div>
                 </div>
                 <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-4">
                       <div className="h-8 w-1/3 bg-white/5 rounded"></div>
                       <div className="h-40 w-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-xl border border-white/5 relative overflow-hidden">
                         <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                           <path d="M0,100 L0,50 Q25,30 50,60 T100,20 L100,100 Z" fill="rgba(6, 182, 212, 0.2)" />
                           <path d="M0,100 L0,70 Q25,60 50,80 T100,40 L100,100 Z" fill="rgba(217, 70, 239, 0.2)" />
                           <path d="M0,50 Q25,30 50,60 T100,20" fill="none" stroke="#06b6d4" strokeWidth="2" />
                           <path d="M0,70 Q25,60 50,80 T100,40" fill="none" stroke="#d946ef" strokeWidth="2" />
                         </svg>
                       </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                       <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5"></div>
                       <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Stats Section */}
        <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
           <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {t.stats.map((stat, i) => (
                <div key={i} className={`pt-6 md:pt-0 ${i !== 0 ? 'md:pl-8' : ''}`}>
                   <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">{stat.num}</h3>
                   <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Features Cards */}
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
           {t.features.map((feat, i) => (
             <div key={i} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
               <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="relative z-10">
                  <div className="text-4xl mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feat.desc}</p>
               </div>
             </div>
           ))}
        </div>

        {/* --- NEW SECTION: How It Works --- */}
        <div className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.howItWorksTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/20 -z-10"></div>
              
              {t.howItWorks.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-fuchsia-400 mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Pricing --- */}
        <div className="py-24 border-t border-white/5 relative z-10">
          <div className="absolute inset-0 bg-fuchsia-500/5 blur-[150px] rounded-full"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">{t.pricingTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.pricing.map((plan, i) => (
                <div key={i} className={`relative p-8 rounded-3xl border backdrop-blur-md transition-transform hover:-translate-y-2 ${plan.popular ? 'bg-gradient-to-b from-white/10 to-white/5 border-fuchsia-500/50 shadow-[0_0_30px_rgba(217,70,239,0.15)]' : 'bg-white/5 border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{plan.price}</span>
                    <span className="text-gray-500 font-medium">{plan.period}</span>
                  </div>
                  <button className={`w-full py-3 rounded-full font-bold transition-all mb-8 ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    {lang === 'th' ? 'เลือกแพ็กเกจ' : 'Get Started'}
                  </button>
                  <ul className="space-y-4">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Testimonials --- */}
        <div className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.testimonialsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.testimonials.map((test, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative">
                  <svg className="absolute top-6 right-6 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <div className="flex gap-1 mb-6 text-fuchsia-400">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">"{test.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-lg">{test.author.charAt(0)}</div>
                    <div>
                      <div className="font-bold text-white">{test.author}</div>
                      <div className="text-sm text-gray-500">{test.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Bottom CTA --- */}
        <div className="py-24 relative overflow-hidden z-10 border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/80 -z-10"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">{t.ctaBottom}</h2>
            <button className="px-10 py-5 rounded-full font-bold text-lg text-black bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
               {t.cta1}
            </button>
          </div>
        </div>

        {/* --- NEW SECTION: Footer --- */}
        <footer className="bg-[#010309] border-t border-white/10 pt-20 pb-10 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-500 flex items-center justify-center font-bold text-white">X</div>
                  <span className="font-bold text-xl tracking-wider text-white">NEXUS</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {t.footerDesc}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-gray-400 hover:text-white">FB</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-gray-400 hover:text-white">IG</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition text-gray-400 hover:text-white">X</a>
                </div>
              </div>
              
              {Object.entries(t.footerLinks).map(([category, links], idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <p>© 2026 NEXUS AI. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-300">Privacy</a>
                <a href="#" className="hover:text-gray-300">Terms</a>
                <a href="#" className="hover:text-gray-300">Cookies</a>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Tailwind Animation Extensions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}
