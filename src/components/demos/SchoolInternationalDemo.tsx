"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["เกี่ยวกับ GVIS", "หลักสูตร", "ชีวิตในโรงเรียน", "ค่าเทอม", "ติดต่อรับสมัคร"],
    heroTitle: "Empowering Global Citizens",
    heroSubtitle: "เตรียมความพร้อมสู่โลกอนาคตด้วยหลักสูตร IB ระดับโลก และสภาพแวดล้อมที่ส่งเสริมการเรียนรู้แบบไร้ขีดจำกัด ปลูกฝังความเป็นผู้นำ",
    cta: "สมัครเรียน",
    tour: "นัดหมายเยี่ยมชมโรงเรียน",
    welcomeTitle: "Message from the Headmaster",
    welcomeDesc: "ที่ Global Vision International School (GVIS) เราไม่เพียงแต่มุ่งเน้นความเป็นเลิศทางวิชาการ แต่เรายังปลูกฝังความฉลาดทางอารมณ์ ทักษะทางสังคม และความรับผิดชอบต่อโลก เพื่อสร้างพลเมืองคุณภาพที่พร้อมสร้างการเปลี่ยนแปลงเชิงบวกให้กับสังคม",
    academicsTitle: "หลักสูตรระดับโลก (IB Curriculum)",
    academics: [
      { name: "Early Years", desc: "อายุ 3-5 ปี: ปลูกฝังความรักในการเรียนรู้ผ่านการเล่น การสำรวจ และการพัฒนาการทางสังคม" },
      { name: "Primary School", desc: "อายุ 6-11 ปี: พัฒนาทักษะพื้นฐาน ความคิดสร้างสรรค์ และการแก้ปัญหาผ่านโปรเจกต์บูรณาการ" },
      { name: "Secondary School", desc: "อายุ 12-18 ปี: เจาะลึกวิชาการ เตรียมความพร้อมสู่มหาวิทยาลัยชั้นนำระดับโลกด้วย IB Diploma" }
    ],
    facilitiesTitle: "Campus Facilities",
    facilities: [
      "Olympic-size Swimming Pool",
      "Innovation & STEM Labs",
      "Performing Arts Center",
      "Indoor Sports Arena"
    ],
    feesTitle: "Tuition & Fees 2026/2027",
    fees: [
      { level: "Early Years", price: "฿450,000", term: "/ ปีการศึกษา" },
      { level: "Primary School", price: "฿650,000", term: "/ ปีการศึกษา" },
      { level: "Secondary School", price: "฿850,000", term: "/ ปีการศึกษา" }
    ],
    footerDesc: "Global Vision International School สถาบันการศึกษานานาชาติที่มุ่งสร้างผู้นำระดับโลก",
    footerLinks: {
      "Admissions": ["Application Process", "Scholarships", "Book a Tour"],
      "Contact": ["Tel: +66 2 888 9999", "Email: admissions@gvis.ac.th", "Bangna-Trad, Bangkok"]
    }
  },
  en: {
    nav: ["About GVIS", "Academics", "Campus Life", "Tuition", "Admissions"],
    heroTitle: "Empowering Global Citizens",
    heroSubtitle: "Preparing students for the future with the world-class IB curriculum and an environment that fosters limitless learning and leadership.",
    cta: "Apply Now",
    tour: "Book a School Tour",
    welcomeTitle: "Message from the Headmaster",
    welcomeDesc: "At Global Vision International School (GVIS), we do not only focus on academic excellence, but we also cultivate emotional intelligence, social skills, and global responsibility to create quality citizens ready to make a positive impact.",
    academicsTitle: "World-Class IB Curriculum",
    academics: [
      { name: "Early Years", desc: "Ages 3-5: Instilling a love for learning through play, exploration, and social development." },
      { name: "Primary School", desc: "Ages 6-11: Developing foundational skills, creativity, and problem-solving through integrated projects." },
      { name: "Secondary School", desc: "Ages 12-18: In-depth academics, preparing for top global universities with the IB Diploma." }
    ],
    facilitiesTitle: "Campus Facilities",
    facilities: [
      "Olympic-size Swimming Pool",
      "Innovation & STEM Labs",
      "Performing Arts Center",
      "Indoor Sports Arena"
    ],
    feesTitle: "Tuition & Fees 2026/2027",
    fees: [
      { level: "Early Years", price: "฿450,000", term: "/ Academic Year" },
      { level: "Primary School", price: "฿650,000", term: "/ Academic Year" },
      { level: "Secondary School", price: "฿850,000", term: "/ Academic Year" }
    ],
    footerDesc: "Global Vision International School. An international educational institution aiming to create global leaders.",
    footerLinks: {
      "Admissions": ["Application Process", "Scholarships", "Book a Tour"],
      "Contact": ["Tel: +66 2 888 9999", "Email: admissions@gvis.ac.th", "Bangna-Trad, Bangkok"]
    }
  }
};

export default function SchoolInternationalDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-sky-100 font-sans min-h-[850px] flex flex-col bg-slate-50 text-slate-800">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/90 backdrop-blur-md rounded-full p-1 border border-sky-100 shadow-sm">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-sky-800 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-sky-800 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-6 flex justify-between items-center bg-white sticky top-0 z-40 border-b border-sky-100 shadow-sm">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-800 text-white flex items-center justify-center font-serif text-2xl font-bold rounded-sm shadow-md">G</div>
              <div className="text-xl font-bold text-sky-900 leading-tight">Global Vision<br/><span className="text-xs font-normal text-slate-500 tracking-widest uppercase">International School</span></div>
           </div>
           <div className="hidden lg:flex gap-8 font-medium text-sm">
              {t.nav.map((item, i) => (
                <span key={i} className="text-slate-600 hover:text-sky-700 cursor-pointer transition-colors uppercase tracking-wider">{item}</span>
              ))}
           </div>
           <button className="hidden md:block px-6 py-2.5 bg-sky-800 text-white font-bold rounded-sm hover:bg-sky-900 transition-colors uppercase text-sm tracking-widest shadow-lg">
              Parent Portal
           </button>
        </nav>

        {/* Hero */}
        <div className="relative py-32 px-10 flex flex-col items-center justify-center text-center bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/40 to-white/90"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto mt-8">
            <span className="inline-block py-1 px-4 border border-sky-800 text-sky-900 text-xs font-bold rounded-full mb-8 tracking-widest uppercase bg-white/50 backdrop-blur-sm">IB World School</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sky-900 mb-8 leading-tight drop-shadow-sm">{t.heroTitle}</h1>
            <p className="text-lg md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-sky-800 text-white rounded-none font-bold hover:bg-sky-900 transition-colors tracking-widest uppercase text-sm shadow-xl">
                {t.cta}
              </button>
              <button className="px-10 py-5 bg-white text-sky-800 border-2 border-sky-800 rounded-none font-bold hover:bg-sky-50 transition-colors tracking-widest uppercase text-sm shadow-xl">
                {t.tour}
              </button>
            </div>
          </div>
        </div>

        {/* Welcome */}
        <div className="py-24 px-10 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1 relative">
                <div className="absolute inset-0 bg-sky-100 translate-x-4 translate-y-4"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" alt="Headmaster" className="relative z-10 w-full object-cover shadow-xl grayscale" />
             </div>
             <div className="flex-1">
                <div className="w-12 h-1 bg-sky-800 mb-8"></div>
                <h2 className="text-4xl font-serif text-sky-900 mb-8 leading-tight">{t.welcomeTitle}</h2>
                <p className="text-slate-600 leading-loose text-lg font-light italic border-l-2 border-sky-200 pl-6 mb-8">{t.welcomeDesc}</p>
                <div className="font-bold text-sky-900">Dr. Robert Stevenson</div>
                <div className="text-slate-500 text-sm">Head of School, GVIS</div>
             </div>
          </div>
        </div>

        {/* Academics */}
        <div className="py-32 px-10 bg-slate-50 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-sky-900 mb-20">{t.academicsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {t.academics.map((acad, i) => (
                <div key={i} className="bg-white p-12 border-t-4 border-sky-800 shadow-xl hover:-translate-y-2 transition-transform duration-500 relative">
                  <div className="absolute top-0 right-0 p-4 text-sky-100 text-6xl font-serif font-black opacity-50">0{i+1}</div>
                  <h3 className="text-3xl font-serif text-sky-900 mb-6 relative z-10">{acad.name}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10 text-lg">{acad.desc}</p>
                  <button className="mt-8 text-sky-700 font-bold uppercase tracking-widest text-sm hover:text-sky-900 flex items-center gap-2">
                    Learn More <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities & Fees combined area */}
        <div className="py-32 px-10 bg-sky-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
             
             {/* Facilities */}
             <div>
                <h2 className="text-4xl font-serif mb-12 text-sky-100 border-b border-sky-700 pb-6">{t.facilitiesTitle}</h2>
                <ul className="space-y-6">
                  {t.facilities.map((fac, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-light">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                      {fac}
                    </li>
                  ))}
                </ul>
                <button className="mt-12 px-8 py-4 border border-sky-400 text-sky-300 hover:bg-sky-800 hover:text-white transition-colors tracking-widest uppercase text-sm">
                  Explore Campus
                </button>
             </div>

             {/* Fees */}
             <div className="bg-white text-slate-800 p-12 shadow-2xl">
                <h2 className="text-3xl font-serif text-sky-900 mb-10">{t.feesTitle}</h2>
                <div className="space-y-6 divide-y divide-slate-100">
                  {t.fees.map((fee, i) => (
                    <div key={i} className="pt-6 first:pt-0 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div className="text-xl font-bold text-slate-700">{fee.level}</div>
                      <div className="text-right">
                         <div className="text-2xl font-black text-sky-800">{fee.price}</div>
                         <div className="text-xs text-slate-500">{fee.term}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-slate-100">
                   <p className="text-sm text-slate-500 italic">*Fees are subject to change. Scholarships are available for outstanding students.</p>
                </div>
             </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="py-20 bg-slate-900 text-white mt-auto px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
             <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-sky-800 text-white flex items-center justify-center font-serif text-xl font-bold rounded-sm">G</div>
                  <div className="text-xl font-bold text-sky-100 leading-tight">Global Vision<br/><span className="text-xs font-normal text-slate-400 tracking-widest uppercase">International School</span></div>
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">{t.footerDesc}</p>
             </div>
             {Object.entries(t.footerLinks).map(([title, links], idx) => (
               <div key={idx}>
                 <h4 className="font-bold text-sky-400 mb-6 text-sm uppercase tracking-widest">{title}</h4>
                 <ul className="space-y-4">
                   {links.map((link, i) => (
                     <li key={i} className="text-slate-400 font-light text-sm hover:text-white transition-colors cursor-pointer">{link}</li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-widest uppercase">
             <div>© 2026 GVIS. All rights reserved.</div>
             <div className="flex gap-4 mt-4 md:mt-0">
               <span>Privacy Policy</span>
               <span>Terms of Service</span>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
