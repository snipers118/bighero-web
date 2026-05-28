"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["คอร์สเรียน", "ผลงานนักเรียน", "ทีมผู้สอน", "ราคา", "ติดต่อเรา"],
    heroTitle: "สอบติดคณะในฝัน ไม่ใช่เรื่องยากอีกต่อไป",
    heroSubtitle: "สถาบันกวดวิชา ACED. ทีมติวเตอร์เกียรตินิยม สอนสนุก เข้าใจง่าย พร้อมตะลุยโจทย์จริง อัปเดตล่าสุดปี 2026",
    cta: "สมัครเรียนเลย",
    stats: [
      { num: "98%", label: "สอบติดมหาวิทยาลัยรัฐ" },
      { num: "5,000+", label: "นักเรียนที่ไว้วางใจ" },
      { num: "10+", label: "ติวเตอร์เกียรตินิยม" }
    ],
    whyTitle: "ทำไมต้องเรียนกับ ACED?",
    why: [
      { title: "ติวเตอร์คุณภาพ", desc: "จบจากมหาลัยชั้นนำ พร้อมเทคนิคเฉพาะตัวที่ไม่มีในห้องเรียน", icon: "👨‍🏫" },
      { title: "เนื้อหาอัปเดต", desc: "เก็งข้อสอบตรงจุด อิงตามแนวข้อสอบ TCAS ล่าสุด", icon: "📈" },
      { title: "เรียนทบทวนฟรี", desc: "ระบบออนไลน์ดูย้อนหลังได้ตลอด 24 ชม. ไม่จำกัดจำนวนครั้ง", icon: "💻" }
    ],
    pricingTitle: "แพ็กเกจคอร์สเรียน",
    pricing: [
      { name: "TCAS Starter", price: "฿3,900", desc: "คอร์สสรุปเนื้อหาพื้นฐาน ม.ปลาย 1 วิชา (เลือกได้)", features: ["เรียนสดในคลาส 20 ชม.", "หนังสือเรียน 1 เล่ม", "ดูย้อนหลัง 6 เดือน"] },
      { name: "TCAS Master", price: "฿9,900", desc: "เหมา 3 วิชาหลัก วิทย์-คณิต-อังกฤษ พร้อมตะลุยโจทย์", popular: true, features: ["เรียนสดในคลาส 60 ชม.", "ข้อสอบ Mock Test 3 ชุด", "ปรึกษาการทำ Portfolio", "ดูย้อนหลัง 1 ปีเต็ม"] },
      { name: "Private Coaching", price: "฿15,000", desc: "เรียนตัวต่อตัว เจาะลึกจุดอ่อน รายบุคคล", features: ["เรียนตัวต่อตัว 30 ชม.", "จัดตารางเรียนเองได้", "โค้ชชิ่งวางแผนการอ่านหนังสือ", "การันตีผลสอบ"] }
    ],
    footerDesc: "ACED Tutor Center สถาบันกวดวิชาที่เข้าใจวัยรุ่นที่สุด",
    footerLinks: {
      "คอร์สเรียน": ["คอร์ส ม.ต้น", "คอร์ส ม.ปลาย", "คอร์สตะลุยโจทย์", "คอร์สตัวต่อตัว"],
      "สถาบัน": ["เกี่ยวกับเรา", "ผลงานนักเรียน", "สมัครงานติวเตอร์", "ติดต่อเรา"]
    }
  },
  en: {
    nav: ["Courses", "Success Stories", "Tutors", "Pricing", "Contact"],
    heroTitle: "Getting into your dream university is no longer just a dream.",
    heroSubtitle: "ACED Tutoring Center. Learn from top honors tutors. Fun, easy to understand, and exam-focused. Updated for 2026.",
    cta: "Enroll Now",
    stats: [
      { num: "98%", label: "Public University Admission Rate" },
      { num: "5,000+", label: "Trusted by Students" },
      { num: "10+", label: "Honors Tutors" }
    ],
    whyTitle: "Why choose ACED?",
    why: [
      { title: "Quality Tutors", desc: "Graduates from top universities with exclusive techniques.", icon: "👨‍🏫" },
      { title: "Updated Content", desc: "Accurate exam predictions based on the latest TCAS trends.", icon: "📈" },
      { title: "Free Review", desc: "24/7 online system for unlimited lesson replay.", icon: "💻" }
    ],
    pricingTitle: "Course Packages",
    pricing: [
      { name: "TCAS Starter", price: "฿3,900", desc: "Summary course for 1 High School subject (Choose one)", features: ["20 hrs live class", "1 Textbook", "6 months video replay"] },
      { name: "TCAS Master", price: "฿9,900", desc: "Bundle 3 core subjects (Sci/Math/Eng) + Exam prep", popular: true, features: ["60 hrs live class", "3 Mock Tests", "Portfolio consulting", "1 year video replay"] },
      { name: "Private Coaching", price: "฿15,000", desc: "1-on-1 personalized tutoring focusing on weaknesses", features: ["30 hrs 1-on-1 class", "Flexible schedule", "Study plan coaching", "Result guaranteed"] }
    ],
    footerDesc: "ACED Tutor Center, the tutoring institute that understands teens best.",
    footerLinks: {
      "Courses": ["Junior High", "Senior High", "Exam Prep", "Private 1-on-1"],
      "Institute": ["About Us", "Success Stories", "Careers", "Contact"]
    }
  }
};

export default function SchoolTutorDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-indigo-100 font-sans min-h-[850px] flex flex-col bg-slate-50 text-slate-800">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/90 backdrop-blur-md rounded-full p-1 border border-indigo-100 shadow-sm">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-6 flex justify-between items-center bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 shadow-sm">
           <div className="text-4xl font-black text-indigo-700 tracking-tighter">ACED<span className="text-amber-500">.</span></div>
           <div className="hidden md:flex gap-8 font-bold text-sm">
              {t.nav.map((item, i) => (
                <span key={i} className="text-slate-600 hover:text-indigo-600 cursor-pointer transition-colors">{item}</span>
              ))}
           </div>
           <button className="hidden md:block px-6 py-2.5 bg-indigo-50 text-indigo-700 font-bold rounded-full hover:bg-indigo-100 transition-colors">
              Student Login
           </button>
        </nav>

        {/* Hero */}
        <div className="relative py-24 px-10 text-center md:text-left bg-indigo-700 overflow-hidden flex flex-col md:flex-row items-center gap-16">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
          
          <div className="flex-1 relative z-10 md:pl-10">
            <div className="inline-block px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-black rounded-full mb-8 shadow-lg shadow-amber-400/20 uppercase tracking-widest">
              #1 TCAS TUTORING CENTER
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">{t.heroTitle}</h1>
            <p className="text-indigo-200 mb-10 text-xl font-medium leading-relaxed max-w-xl">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-amber-400 text-amber-900 rounded-2xl font-black text-lg shadow-[0_6px_0_rgb(180,83,9)] hover:translate-y-1 hover:shadow-[0_2px_0_rgb(180,83,9)] transition-all">
                {t.cta}
              </button>
              <button className="px-10 py-5 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                ทดลองเรียนฟรี
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative z-10 w-full h-[500px]">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" alt="Students studying" className="w-full h-full object-cover rounded-3xl border-8 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="text-4xl">💯</div>
                <div>
                  <div className="font-bold text-indigo-700 text-xl">Top Score</div>
                  <div className="text-sm text-slate-500">ปีล่าสุด!</div>
                </div>
             </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-indigo-900 py-12 px-10 relative z-20 -mt-8 mx-10 rounded-3xl shadow-2xl border border-indigo-500/30">
           <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-indigo-700/50">
             {t.stats.map((stat, i) => (
               <div key={i} className="pt-6 md:pt-0 w-full">
                 <div className="text-5xl font-black text-amber-400 mb-2">{stat.num}</div>
                 <div className="text-indigo-200 font-bold tracking-wide">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Why ACED */}
        <div className="py-32 px-10 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-20">{t.whyTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {t.why.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[32px] border-2 border-slate-100 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-32 px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">{t.pricingTitle}</h2>
              <p className="text-xl text-slate-500">เลือกแพ็กเกจที่เหมาะกับเป้าหมายของคุณ</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {t.pricing.map((plan, i) => (
                <div key={i} className={`p-10 rounded-[40px] border-2 transition-transform duration-500 relative ${plan.popular ? 'bg-indigo-700 border-indigo-700 text-white scale-105 shadow-2xl shadow-indigo-700/30 z-10' : 'bg-white border-slate-100 text-slate-800 hover:border-indigo-300'}`}>
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 font-black px-6 py-2 rounded-full uppercase tracking-wider text-sm shadow-lg">
                      Recommended
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-indigo-200' : 'text-slate-500'}`}>{plan.name}</h3>
                  <div className="text-5xl font-black mb-6">{plan.price}</div>
                  <p className={`mb-10 min-h-[60px] leading-relaxed ${plan.popular ? 'text-indigo-100' : 'text-slate-600'}`}>{plan.desc}</p>
                  
                  <div className="space-y-4 mb-12">
                    {plan.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-indigo-500/50 text-white' : 'bg-indigo-100 text-indigo-600'}`}>✓</div>
                        <span className={plan.popular ? 'text-indigo-50' : 'text-slate-600'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${plan.popular ? 'bg-amber-400 text-amber-900 hover:bg-amber-300' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                    สมัครเลย
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 pt-24 pb-12 px-10 border-t border-slate-800 mt-auto text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
             <div className="md:col-span-2">
                <div className="text-5xl font-black text-white tracking-tighter mb-6">ACED<span className="text-amber-500">.</span></div>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-lg">{t.footerDesc}</p>
             </div>
             {Object.entries(t.footerLinks).map(([title, links], idx) => (
               <div key={idx}>
                 <h4 className="font-bold text-white mb-8 text-lg">{title}</h4>
                 <ul className="space-y-5">
                   {links.map((link, i) => (
                     <li key={i} className="text-slate-400 hover:text-amber-400 font-medium cursor-pointer transition-colors">{link}</li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="text-center text-slate-500 font-semibold">
             © 2026 ACED TUTOR CENTER. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
