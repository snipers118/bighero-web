"use client";

import { useState } from "react";

// --- Mock Content for Multi-Language ---
const content = {
  th: {
    nav: ["หน้าหลัก", "เกี่ยวกับเรา", "ธุรกิจของเรา", "นักลงทุนสัมพันธ์", "ข่าวสาร", "ติดต่อเรา"],
    ticker: "อัปเดตหุ้น: APEX +2.5% (145.50 THB) | SET Index +15.20 (1,450.00)",
    heroTitle: "ก้าวสู่ผู้นำนวัตกรรมแห่งอนาคต",
    heroSubtitle: "สร้างสรรค์เทคโนโลยีเพื่อยกระดับคุณภาพชีวิตและธุรกิจอย่างยั่งยืน",
    cta: "ค้นพบธุรกิจของเรา",
    newsTitle: "ข่าวสารองค์กร",
    galleryTitle: "แกลเลอรีกิจกรรม",
    news: [
      { id: 1, title: "ประกาศผลประกอบการไตรมาส 3 เติบโต 15%", date: "25 พ.ค. 2569" },
      { id: 2, title: "APEX จับมือพาร์ทเนอร์ระดับโลก ขยายฐานการผลิต", date: "20 พ.ค. 2569" },
      { id: 3, title: "รับรางวัลบริษัทธรรมาภิบาลดีเด่น 5 ปีซ้อน", date: "15 พ.ค. 2569" },
    ],
    gallery: ["งานประชุมผู้ถือหุ้น", "กิจกรรม CSR ปลูกป่า", "เปิดตัวสำนักงานใหม่", "งานสัมมนาเทคโนโลยี"],
    businessesTitle: "กลุ่มธุรกิจของเรา",
    businesses: [
      { title: "พลังงานสะอาด", desc: "พัฒนาพลังงานทางเลือกเพื่ออนาคตที่ยั่งยืน ลดการปล่อยคาร์บอน", icon: "🌱" },
      { title: "เทคโนโลยี AI", desc: "ผสานปัญญาประดิษฐ์ในอุตสาหกรรม เพิ่มประสิทธิภาพการผลิต", icon: "🤖" },
      { title: "โครงสร้างพื้นฐาน", desc: "พัฒนาระบบคมนาคมและโทรคมนาคมเพื่อเชื่อมต่อทุกภูมิภาค", icon: "🏗️" }
    ],
    financialTitle: "ผลประกอบการเด่น",
    financialStats: [
      { num: "45,000", suffix: " ล้านบาท", label: "รายได้รวมปี 2568" },
      { num: "12.5", suffix: "%", label: "อัตรากำไรสุทธิ" },
      { num: "AAA", suffix: "", label: "อันดับความน่าเชื่อถือ" }
    ],
    sustainabilityTitle: "มุ่งมั่นสู่ความยั่งยืน",
    sustainabilityDesc: "APEX ให้ความสำคัญกับการดำเนินธุรกิจตามหลัก ESG (Environment, Social, Governance) โดยตั้งเป้าหมายลดการปล่อยก๊าซเรือนกระจกเป็นศูนย์ภายในปี 2050",
    sustainabilityCta: "อ่านรายงานความยั่งยืน",
    footerDesc: "บริษัท เอเพ็กซ์ อินโนเวชั่น จำกัด (มหาชน) - ผู้นำนวัตกรรมแห่งอนาคต",
    footerLinks: {
      Company: ["โครงสร้างองค์กร", "คณะกรรมการ", "รางวัลและความสำเร็จ"],
      Investor: ["ข้อมูลหุ้น", "รายงานประจำปี", "ปฏิทินนักลงทุน"],
      Contact: ["ติดต่อเรา", "แผนที่สำนักงาน", "แจ้งเบาะแสการทุจริต"]
    }
  },
  en: {
    nav: ["Home", "About Us", "Our Business", "Investor Relations", "News", "Contact"],
    ticker: "Stock Update: APEX +2.5% (145.50 THB) | SET Index +15.20 (1,450.00)",
    heroTitle: "Leading the Future of Innovation",
    heroSubtitle: "Creating sustainable technology to elevate lives and businesses.",
    cta: "Discover Our Business",
    newsTitle: "Corporate News",
    galleryTitle: "Activity Gallery",
    news: [
      { id: 1, title: "Q3 Financial Results Announced: 15% Growth", date: "May 25, 2026" },
      { id: 2, title: "APEX Partners with Global Tech Giant for Expansion", date: "May 20, 2026" },
      { id: 3, title: "Awarded Excellence in Corporate Governance", date: "May 15, 2026" },
    ],
    gallery: ["Annual General Meeting", "CSR Tree Planting", "New HQ Opening", "Tech Symposium"],
    businessesTitle: "Our Core Businesses",
    businesses: [
      { title: "Clean Energy", desc: "Developing alternative energy for a sustainable future.", icon: "🌱" },
      { title: "AI Technology", desc: "Integrating AI into industries to enhance productivity.", icon: "🤖" },
      { title: "Infrastructure", desc: "Developing transport and telecom to connect regions.", icon: "🏗️" }
    ],
    financialTitle: "Financial Highlights",
    financialStats: [
      { num: "45,000", suffix: " THB(m)", label: "Total Revenue 2025" },
      { num: "12.5", suffix: "%", label: "Net Profit Margin" },
      { num: "AAA", suffix: "", label: "Credit Rating" }
    ],
    sustainabilityTitle: "Commitment to Sustainability",
    sustainabilityDesc: "APEX prioritizes business operations according to ESG principles, aiming for net-zero greenhouse gas emissions by 2050.",
    sustainabilityCta: "Read Sustainability Report",
    footerDesc: "APEX Innovation Public Company Limited - Leading the Future.",
    footerLinks: {
      Company: ["Organization Structure", "Board of Directors", "Awards"],
      Investor: ["Stock Info", "Annual Reports", "Investor Calendar"],
      Contact: ["Contact Us", "Office Map", "Whistleblowing"]
    }
  }
};

export default function CorpWeb2Demo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const t = content[lang];

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl border transition-colors duration-500 font-sans min-h-[750px] flex flex-col ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
      
      {/* Demo Controls Toolbar */}
      <div className={`p-3 flex justify-between items-center z-50 relative border-b ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'}`}>
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Interactive Features:</span>
            <div className="flex bg-slate-200/20 rounded-lg p-1">
              <button onClick={() => setLang("th")} className={`px-3 py-1 text-xs font-bold rounded-md transition ${lang === "th" ? 'bg-blue-600 text-white shadow' : 'opacity-70 hover:opacity-100'}`}>TH</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs font-bold rounded-md transition ${lang === "en" ? 'bg-blue-600 text-white shadow' : 'opacity-70 hover:opacity-100'}`}>EN</button>
            </div>
         </div>
         <div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
         </div>
      </div>

      {/* Actual Website View */}
      <div className="flex-1 overflow-y-auto relative scroll-smooth">
        
        {/* Stock Ticker */}
        <div className="w-full bg-blue-600 text-white text-[10px] font-mono py-1.5 overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee inline-block">
             {t.ticker} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t.ticker} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t.ticker}
          </div>
        </div>

        {/* Navigation */}
        <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-100'}`}>
           <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                 <span className={`font-bold text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>APEX</span>
              </div>
              {/* Desktop Nav */}
              <div className="hidden md:flex gap-6">
                 {t.nav.map((item, i) => (
                   <span key={i} className={`text-xs font-semibold cursor-pointer transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}>{item}</span>
                 ))}
              </div>
              <button className="md:hidden">
                 <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
           </div>
        </nav>

        {/* Hero Section */}
        <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-black/60 z-10"></div>
           {/* Abstract Corporate Background Video/Image Mockup */}
           <div className="absolute inset-0 w-full h-full bg-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(45deg, #2563eb 0%, #06b6d4 100%)' }}></div>
              <div className="w-[800px] h-[800px] border-[40px] border-white/5 rounded-full absolute -top-[400px] -left-[200px] animate-spin-slow"></div>
              <div className="w-[600px] h-[600px] border-[20px] border-white/5 rounded-full absolute -bottom-[300px] -right-[100px] animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
           </div>
           
           <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">{t.heroTitle}</h1>
              <p className="text-lg md:text-2xl text-blue-100 mb-10 font-light drop-shadow-md">{t.heroSubtitle}</p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 text-lg">
                {t.cta}
              </button>
           </div>
        </div>

        {/* Content Section: News & Gallery */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
           
           {/* News */}
           <div className="animate-fade-in-up">
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                 {t.newsTitle}
              </h2>
              <div className="space-y-4">
                 {t.news.map((n) => (
                    <div key={n.id} className={`p-5 rounded-xl border transition-all cursor-pointer group ${isDark ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-slate-100 hover:shadow-md'}`}>
                       <p className="text-xs text-blue-500 font-bold mb-2">{n.date}</p>
                       <h3 className={`text-base font-semibold group-hover:text-blue-500 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{n.title}</h3>
                    </div>
                 ))}
              </div>
              <button className={`mt-6 text-sm font-bold transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                 {lang === 'th' ? 'ดูข่าวทั้งหมด →' : 'View all news →'}
              </button>
           </div>

           {/* Gallery */}
           <div className="animate-fade-in-up animation-delay-200">
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                 {t.galleryTitle}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                 {t.gallery.map((g, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(i)}
                      className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer group bg-slate-200 shadow-sm`}
                    >
                       <div className={`absolute inset-0 bg-gradient-to-br flex items-center justify-center p-2 text-center transition-transform duration-500 group-hover:scale-110 ${
                          i % 4 === 0 ? 'from-blue-500 to-indigo-600' : 
                          i % 4 === 1 ? 'from-cyan-500 to-blue-500' : 
                          i % 4 === 2 ? 'from-indigo-400 to-purple-500' : 'from-blue-400 to-cyan-400'
                       }`}>
                          <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-3 py-1.5 rounded backdrop-blur-sm">
                            🔍 {lang === 'th' ? 'ดูรูปภาพ' : 'View'}
                          </span>
                       </div>
                       <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-xs text-white font-medium truncate">{g}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- NEW SECTION: Core Businesses --- */}
        <div className={`py-16 ${isDark ? 'bg-slate-800/30 border-y border-slate-800' : 'bg-slate-100 border-y border-slate-200'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.businessesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.businesses.map((biz, i) => (
                <div key={i} className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 border ${isDark ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-500'}`}>
                  <div className="text-5xl mb-6">{biz.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{biz.title}</h3>
                  <p className={`leading-relaxed text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{biz.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Financial Highlights --- */}
        <div className="py-20 relative overflow-hidden">
          {/* Background image effect */}
          <div className="absolute inset-0 bg-blue-900 z-0">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)' }}></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-16 text-white">{t.financialTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {t.financialStats.map((stat, i) => (
                <div key={i} className="py-6 md:py-0">
                  <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-4 drop-shadow-sm">
                    {stat.num}<span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-blue-100 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Sustainability / ESG --- */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className={`aspect-video rounded-2xl overflow-hidden relative shadow-lg ${isDark ? 'border border-slate-700' : 'border border-slate-200'}`}>
                {/* Mock image for ESG */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-400 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">🌍</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-2 block">ESG Strategy</span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.sustainabilityTitle}</h2>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.sustainabilityDesc}</p>
              <button className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-bold rounded-full transition-all">
                {t.sustainabilityCta}
              </button>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Footer --- */}
        <footer className={`pt-16 pb-8 border-t ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-br-xl rounded-tl-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                  <span className="font-bold text-xl tracking-tight text-white">APEX</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.footerDesc}</p>
              </div>

              {Object.entries(t.footerLinks).map(([category, links], idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm border-b border-slate-700 pb-2 inline-block">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>© 2026 APEX Innovation PCL. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Site Map</a>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Lightbox Modal (Gallery Interactive Feature) */}
      {selectedImage !== null && (
         <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up" onClick={() => setSelectedImage(null)}>
            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
               <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition backdrop-blur-md">✕</button>
               <div className={`w-full h-full bg-gradient-to-br flex items-center justify-center ${
                          selectedImage % 4 === 0 ? 'from-blue-500 to-indigo-600' : 
                          selectedImage % 4 === 1 ? 'from-cyan-500 to-blue-500' : 
                          selectedImage % 4 === 2 ? 'from-indigo-400 to-purple-500' : 'from-blue-400 to-cyan-400'
                       }`}>
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg text-center px-6">{t.gallery[selectedImage]}</h3>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md text-white flex justify-between items-center">
                  <span className="text-sm font-bold">{t.gallery[selectedImage]}</span>
                  <span className="text-xs text-white/60">Image {selectedImage + 1} of 4</span>
               </div>
            </div>
         </div>
      )}

      {/* Tailwind Animation Extensions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}} />
    </div>
  );
}
