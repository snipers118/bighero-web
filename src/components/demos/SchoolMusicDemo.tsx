"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["หลักสูตร", "อาจารย์ผู้สอน", "ผลงานนักเรียน", "ค่าเรียน", "ติดต่อเรา"],
    heroTitle: "ปลดปล่อยจินตนาการผ่านเสียงดนตรี",
    heroSubtitle: "Symphony Music Academy พัฒนาศักยภาพด้วยความรักในเสียงเพลง สอนโดยศิลปินและผู้เชี่ยวชาญตัวจริง",
    cta: "ทดลองเรียนฟรี",
    philosophyTitle: "Music is Art, Art is Life",
    philosophyDesc: "เราเชื่อว่าดนตรีไม่ใช่แค่การเล่นเครื่องดนตรีให้ถูกโน้ต แต่คือการสื่อสารอารมณ์และสร้างสรรค์ศิลปะ ที่ Symphony เราเน้นปูพื้นฐานที่ถูกต้อง ควบคู่ไปกับการสร้างความมั่นใจให้ผู้เรียนกล้าแสดงออก",
    classesTitle: "วิชาที่เปิดสอน",
    classes: [
      { name: "Piano", img: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=400&q=80", desc: "คลาสเปียโนคลาสสิกและป๊อป สำหรับทุกช่วงวัย" },
      { name: "Violin", img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=400&q=80", desc: "เรียนรู้เทคนิคการสีไวโอลินจากผู้เล่นระดับวงออร์เคสตรา" },
      { name: "Vocal", img: "https://images.unsplash.com/photo-1516280440504-45ea07817478?auto=format&fit=crop&w=400&q=80", desc: "เทคนิคการใช้เสียง ร้องเพลงสากลและละครเวที" },
      { name: "Guitar", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80", desc: "กีตาร์โปร่ง กีตาร์คลาสสิก และอูคูเลเล่เบื้องต้น" }
    ],
    pricingTitle: "แพ็กเกจเรียนดนตรี",
    pricing: [
      { name: "Group Class", price: "฿2,500", desc: "เรียนกลุ่มเล็ก 3-4 คน เน้นความสนุกสนานและทักษะพื้นฐาน", period: "/เดือน (4 ครั้ง)" },
      { name: "Private Class", price: "฿4,500", desc: "เรียนตัวต่อตัว โฟกัสเป้าหมายเฉพาะบุคคล (เช่น ติวสอบเกรด)", period: "/เดือน (4 ครั้ง)", popular: true }
    ],
    footerDesc: "Symphony Music Academy สถาบันสอนดนตรีระดับมาตรฐาน",
    footerLinks: {
      "เวลาทำการ": ["อังคาร - ศุกร์: 13:00 - 20:00", "เสาร์ - อาทิตย์: 09:00 - 18:00", "หยุดทุกวันจันทร์"],
      "ช่องทางการติดต่อ": ["Tel: 02-999-8888", "Line: @symphonymusic", "Facebook: SymphonyMusic"]
    }
  },
  en: {
    nav: ["Programs", "Instructors", "Showcase", "Tuition", "Contact"],
    heroTitle: "Unleash Imagination Through Music",
    heroSubtitle: "Symphony Music Academy. Developing potential through a love for music, taught by real artists.",
    cta: "Free Trial Class",
    philosophyTitle: "Music is Art, Art is Life",
    philosophyDesc: "We believe music isn't just about playing the right notes, but communicating emotion and creating art. At Symphony, we focus on proper fundamentals paired with building confidence.",
    classesTitle: "Our Programs",
    classes: [
      { name: "Piano", img: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=400&q=80", desc: "Classical and Pop piano classes for all ages." },
      { name: "Violin", img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=400&q=80", desc: "Learn violin techniques from orchestra-level players." },
      { name: "Vocal", img: "https://images.unsplash.com/photo-1516280440504-45ea07817478?auto=format&fit=crop&w=400&q=80", desc: "Vocal techniques, international songs, and musical theater." },
      { name: "Guitar", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80", desc: "Acoustic, classical guitar, and basic ukulele." }
    ],
    pricingTitle: "Music Tuition",
    pricing: [
      { name: "Group Class", price: "฿2,500", desc: "Small group 3-4 people. Focus on fun and basics.", period: "/month (4 sessions)" },
      { name: "Private Class", price: "฿4,500", desc: "1-on-1 personalized goals (e.g., Grade exams).", period: "/month (4 sessions)", popular: true }
    ],
    footerDesc: "Symphony Music Academy. Standardized Music Institution.",
    footerLinks: {
      "Operating Hours": ["Tue - Fri: 13:00 - 20:00", "Sat - Sun: 09:00 - 18:00", "Closed Mondays"],
      "Contact Channels": ["Tel: 02-999-8888", "Line: @symphonymusic", "Facebook: SymphonyMusic"]
    }
  }
};

export default function SchoolMusicDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-fuchsia-100 font-sans min-h-[850px] flex flex-col bg-white text-slate-800">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/70 backdrop-blur-md rounded-full p-1 border border-fuchsia-100 shadow-sm">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-fuchsia-600 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-fuchsia-600 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-6 flex justify-between items-center bg-white/50 backdrop-blur-xl absolute top-0 w-full z-40 border-b border-fuchsia-500/10">
           <div className="text-3xl font-light tracking-[0.2em] text-slate-900 font-serif">SYMPHONY.</div>
           <div className="hidden md:flex gap-10 font-medium text-sm">
              {t.nav.map((item, i) => (
                <span key={i} className="text-slate-700 hover:text-fuchsia-600 cursor-pointer transition-colors uppercase tracking-widest">{item}</span>
              ))}
           </div>
        </nav>

        {/* Hero */}
        <div className="relative pt-40 pb-32 px-10 text-center bg-gradient-to-br from-fuchsia-50 via-rose-50 to-white overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-fuchsia-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-serif text-slate-800 mb-8 leading-[1.1]">{t.heroTitle}</h1>
            <p className="text-slate-600 mb-12 text-xl font-light leading-relaxed max-w-2xl mx-auto">{t.heroSubtitle}</p>
            <div className="flex gap-6 justify-center">
              <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-medium hover:bg-fuchsia-600 transition-all shadow-xl shadow-fuchsia-500/20 text-lg hover:-translate-y-1">
                {t.cta}
              </button>
              <button className="w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center hover:border-fuchsia-600 hover:text-fuchsia-600 transition-colors">
                 <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="py-24 px-10 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-fuchsia-800 mb-8 italic">{t.philosophyTitle}</h2>
            <p className="text-xl text-slate-500 leading-loose font-light">{t.philosophyDesc}</p>
          </div>
        </div>

        {/* Classes */}
        <div className="py-32 px-10 bg-slate-50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-serif text-center text-slate-800 mb-20">{t.classesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.classes.map((cls, i) => (
                <div key={i} className="group relative rounded-[2rem] overflow-hidden h-[400px] cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                    style={{ backgroundImage: `url('${cls.img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-serif text-white mb-3">{cls.name}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cls.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-32 px-10 bg-white">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-5xl font-serif text-center text-slate-800 mb-20">{t.pricingTitle}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {t.pricing.map((plan, i) => (
                 <div key={i} className={`p-12 rounded-[3rem] border ${plan.popular ? 'bg-fuchsia-50 border-fuchsia-200 shadow-xl relative' : 'bg-white border-slate-100 shadow-sm hover:shadow-lg transition-shadow'}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 right-12 bg-fuchsia-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
                        Best Choice
                      </div>
                    )}
                    <h3 className="text-2xl font-serif text-slate-800 mb-4">{plan.name}</h3>
                    <div className="text-5xl font-bold text-slate-900 mb-4">{plan.price}<span className="text-lg text-slate-500 font-normal">{plan.period}</span></div>
                    <p className="text-slate-600 mb-10 leading-relaxed min-h-[60px]">{plan.desc}</p>
                    <button className={`w-full py-4 rounded-full font-bold transition-colors ${plan.popular ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                      Select Plan
                    </button>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-20 bg-slate-900 text-white border-t border-slate-800 mt-auto px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-16">
             <div>
                <div className="text-4xl font-light tracking-[0.2em] text-white font-serif mb-6">SYMPHONY.</div>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">{t.footerDesc}</p>
             </div>
             {Object.entries(t.footerLinks).map(([title, links], idx) => (
               <div key={idx}>
                 <h4 className="font-bold text-fuchsia-400 mb-8 text-sm uppercase tracking-widest">{title}</h4>
                 <ul className="space-y-4">
                   {links.map((link, i) => (
                     <li key={i} className="text-slate-400 font-light hover:text-white transition-colors">{link}</li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="text-center text-slate-600 font-light text-sm">
             © 2026 Symphony Music Academy. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
