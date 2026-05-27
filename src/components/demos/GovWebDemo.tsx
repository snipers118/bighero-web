"use client";

import { useState, useEffect } from "react";

type ThemeVariant = "modern" | "heritage" | "citizen";
type FontSize = "normal" | "large" | "xl";
type Contrast = "normal" | "high" | "yellow";

export default function GovWebDemo() {
  const [theme, setTheme] = useState<ThemeVariant>("modern");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [contrast, setContrast] = useState<Contrast>("normal");
  const [showAlert, setShowAlert] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // Auto-suggest mock data
  const suggestions = [
    { text: "ต่อภาษีรถยนต์ออนไลน์", icon: "🚗", dept: "กรมการขนส่งทางบก" },
    { text: "ยื่นภาษีเงินได้บุคคลธรรมดา", icon: "💰", dept: "กรมสรรพากร" },
    { text: "คัดสำเนาทะเบียนบ้าน", icon: "🏠", dept: "กรมการปกครอง" },
    { text: "ตรวจสอบสิทธิประกันสังคม", icon: "🏥", dept: "สำนักงานประกันสังคม" },
  ].filter(s => s.text.includes(searchQuery) || searchQuery === "");

  // Accessibility classes mapping
  const textSizeClass = {
    normal: "text-base",
    large: "text-lg",
    xl: "text-xl",
  };

  const themeColors = {
    modern: {
      bg: "bg-slate-50",
      primary: "bg-blue-600",
      primaryHover: "hover:bg-blue-700",
      textPrimary: "text-blue-600",
      header: "bg-white",
      text: "text-slate-800",
      border: "border-slate-200",
      card: "bg-white",
    },
    heritage: {
      bg: "bg-[#f8f9fa]",
      primary: "bg-[#1a365d]",
      primaryHover: "hover:bg-[#2a4365]",
      textPrimary: "text-[#1a365d]",
      header: "bg-[#1a365d] text-white",
      text: "text-gray-900",
      border: "border-[#e2e8f0]",
      card: "bg-white border-t-4 border-t-[#d69e2e]",
    },
    citizen: {
      bg: "bg-[#f0fdfa]",
      primary: "bg-[#0d9488]",
      primaryHover: "hover:bg-[#0f766e]",
      textPrimary: "text-[#0d9488]",
      header: "bg-white border-b-4 border-[#0d9488]",
      text: "text-slate-800",
      border: "border-teal-100",
      card: "bg-white rounded-3xl shadow-lg shadow-teal-100/50",
    }
  };

  const currentTheme = themeColors[theme];

  // Contrast overrides
  const isHighContrast = contrast === "high";
  const isYellowContrast = contrast === "yellow";

  const containerClass = `relative overflow-hidden transition-all duration-300 font-sans min-h-[800px] flex flex-col
    ${isHighContrast ? "bg-black text-white" : isYellowContrast ? "bg-black text-yellow-400" : currentTheme.bg}
    ${textSizeClass[fontSize]}
  `;

  return (
    <div className="animate-fade-in-up border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
      {/* --- Demo Controller (Not part of the actual website) --- */}
      <div className="bg-slate-800 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-700 z-50 relative">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-slate-300">DEMO THEME:</span>
          <select 
            className="bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value as ThemeVariant);
              setContrast("normal");
              setFontSize("normal");
            }}
          >
            <option value="modern">1. Modern & Clean (สไตล์ทันสมัย มินิมอล)</option>
            <option value="heritage">2. Trust & Heritage (สไตล์ทางการ คลาสสิก)</option>
            <option value="citizen">3. Citizen-First (สไตล์บริการประชาชน สดใส)</option>
          </select>
        </div>
        <div className="flex gap-2">
           <button onClick={() => setShowAlert(true)} className="px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded text-xs font-bold transition">Trigger Alert</button>
        </div>
      </div>

      {/* --- Actual Government Website Container --- */}
      <div className={containerClass}>
        
        {/* Floating Accessibility Widget */}
        <div className="absolute right-0 top-1/3 z-50 flex flex-col shadow-2xl rounded-l-xl overflow-hidden border border-r-0 border-slate-200/20">
          <div className={`${isHighContrast || isYellowContrast ? 'bg-gray-800' : 'bg-white'} p-2 text-center text-[10px] font-bold border-b border-slate-200/20`}>การเข้าถึง</div>
          {/* Text Size */}
          <div className="flex">
            <button onClick={() => setFontSize("normal")} className={`p-2 w-10 h-10 flex items-center justify-center font-bold border-r border-b border-slate-200/20 ${fontSize === 'normal' ? 'bg-blue-50 text-blue-600' : isHighContrast || isYellowContrast ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-slate-50'}`}>A</button>
            <button onClick={() => setFontSize("large")} className={`p-2 w-10 h-10 flex items-center justify-center font-bold text-lg border-b border-slate-200/20 ${fontSize === 'large' ? 'bg-blue-50 text-blue-600' : isHighContrast || isYellowContrast ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-slate-50'}`}>A+</button>
            <button onClick={() => setFontSize("xl")} className={`p-2 w-10 h-10 flex items-center justify-center font-bold text-xl border-l border-b border-slate-200/20 ${fontSize === 'xl' ? 'bg-blue-50 text-blue-600' : isHighContrast || isYellowContrast ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-slate-50'}`}>A++</button>
          </div>
          {/* Contrast */}
          <div className="flex">
             <button onClick={() => setContrast("normal")} className={`p-2 w-10 h-10 flex items-center justify-center border-r border-slate-200/20 ${contrast === 'normal' ? 'bg-blue-50' : 'bg-white hover:bg-slate-50'}`}>
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-green-400"></div>
             </button>
             <button onClick={() => setContrast("high")} className={`p-2 w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-900 text-white border-r border-slate-700`}>
                <span className="font-bold">C</span>
             </button>
             <button onClick={() => setContrast("yellow")} className={`p-2 w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-900 text-yellow-400`}>
                <span className="font-bold">C</span>
             </button>
          </div>
        </div>

        {/* Emergency Alert Banner */}
        {showAlert && (
          <div className={`w-full ${isHighContrast ? 'bg-white text-black' : isYellowContrast ? 'bg-yellow-400 text-black' : 'bg-red-600 text-white'} p-3 flex justify-between items-center animate-fade-in-up`}>
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isHighContrast || isYellowContrast ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isHighContrast || isYellowContrast ? 'bg-black' : 'bg-white'}`}></span>
              </span>
              <p className="font-bold text-sm">ประกาศด่วน: <span className="font-normal">แจ้งเตือนสถานการณ์ค่าฝุ่นละออง PM 2.5 เกินมาตรฐานในพื้นที่ กรุณาสวมหน้ากากอนามัย</span></p>
            </div>
            <button onClick={() => setShowAlert(false)} className={`px-3 py-1 text-xs font-bold rounded ${isHighContrast || isYellowContrast ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/20 hover:bg-white/30 transition'}`}>รับทราบ</button>
          </div>
        )}

        {/* Header & Mega Menu */}
        <header className={`${isHighContrast || isYellowContrast ? 'border-b border-gray-800' : currentTheme.header} transition-colors z-40 relative shadow-sm`}>
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                {/* Mock Logo */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${isHighContrast ? 'border-white' : isYellowContrast ? 'border-yellow-400' : theme === 'heritage' ? 'border-white' : 'border-blue-600'}`}>
                   <svg className={`w-8 h-8 ${isHighContrast ? 'text-white' : isYellowContrast ? 'text-yellow-400' : theme === 'heritage' ? 'text-white' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h1 className="font-bold text-xl leading-tight">กระทรวงนวัตกรรมดิจิทัล</h1>
                  <p className={`text-xs ${isHighContrast || isYellowContrast ? '' : theme === 'heritage' ? 'text-blue-200' : 'text-slate-500'}`}>Ministry of Digital Innovation</p>
                </div>
              </div>

              {/* Mega Menu Trigger */}
              <div className="hidden md:flex gap-6 h-full items-center">
                <div 
                  className="h-full flex items-center relative group cursor-pointer px-2"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <span className={`font-semibold flex items-center gap-1 ${isHighContrast || isYellowContrast ? '' : theme === 'heritage' ? 'text-white hover:text-blue-200' : 'text-slate-700 hover:text-blue-600'}`}>
                    บริการประชาชน
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  
                  {/* Mega Menu Dropdown */}
                  {showMegaMenu && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] shadow-2xl rounded-xl overflow-hidden animate-fade-in-up ${isHighContrast ? 'bg-black border border-white' : isYellowContrast ? 'bg-black border border-yellow-400' : 'bg-white border border-slate-100'}`}>
                      <div className="p-6 grid grid-cols-2 gap-6">
                        <div>
                          <h3 className={`font-bold mb-4 flex items-center gap-2 ${isHighContrast ? 'text-white' : isYellowContrast ? 'text-yellow-400' : 'text-blue-600'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                            ทะเบียนราษฎร
                          </h3>
                          <ul className="space-y-3">
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-blue-600'}`}>ขอสำเนาทะเบียนบ้าน</li>
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-blue-600'}`}>ทำบัตรประชาชน</li>
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-blue-600'}`}>แจ้งเกิด/แจ้งตาย</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className={`font-bold mb-4 flex items-center gap-2 ${isHighContrast ? 'text-white' : isYellowContrast ? 'text-yellow-400' : 'text-teal-600'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            ภาษีและรายได้
                          </h3>
                          <ul className="space-y-3">
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-teal-600'}`}>ยื่นภาษีออนไลน์</li>
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-teal-600'}`}>ต่อภาษีรถยนต์</li>
                            <li className={`text-sm hover:underline cursor-pointer ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-600 hover:text-teal-600'}`}>จ่ายค่าปรับ</li>
                          </ul>
                        </div>
                      </div>
                      <div className={`p-4 text-center ${isHighContrast ? 'bg-gray-900 border-t border-white' : isYellowContrast ? 'bg-gray-900 border-t border-yellow-400' : 'bg-slate-50 border-t border-slate-100'}`}>
                        <button className={`font-bold text-sm ${isHighContrast ? 'text-white underline' : isYellowContrast ? 'text-yellow-400 underline' : 'text-blue-600 hover:text-blue-800'}`}>ดูบริการทั้งหมด &rarr;</button>
                      </div>
                    </div>
                  )}
                </div>
                <span className={`font-semibold cursor-pointer ${isHighContrast || isYellowContrast ? '' : theme === 'heritage' ? 'text-white hover:text-blue-200' : 'text-slate-700 hover:text-blue-600'}`}>ข่าวประชาสัมพันธ์</span>
                <span className={`font-semibold cursor-pointer ${isHighContrast || isYellowContrast ? '' : theme === 'heritage' ? 'text-white hover:text-blue-200' : 'text-slate-700 hover:text-blue-600'}`}>ติดต่อหน่วยงาน</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section & Smart Search */}
        <div className={`relative py-16 lg:py-24 ${isHighContrast || isYellowContrast ? '' : theme === 'modern' ? 'bg-gradient-to-b from-blue-50 to-white' : theme === 'citizen' ? 'bg-teal-50' : 'bg-[#e2e8f0]'}`}>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">ศูนย์รวมบริการประชาชน<br/>ครบ จบ ในที่เดียว</h2>
            <p className={`mb-10 text-lg ${isHighContrast || isYellowContrast ? '' : 'text-slate-600'}`}>พิมพ์ค้นหาบริการที่คุณต้องการ หรือเลือกจากหมวดหมู่ด้านล่าง</p>
            
            {/* Smart Search E-Service */}
            <div className="relative max-w-2xl mx-auto text-left">
              <div className={`flex items-center p-2 rounded-2xl shadow-xl transition-all ${isHighContrast ? 'bg-black border-2 border-white' : isYellowContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white border border-slate-200 focus-within:ring-4 focus-within:ring-blue-100'}`}>
                <svg className={`w-6 h-6 ml-3 ${isHighContrast || isYellowContrast ? '' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                  type="text" 
                  placeholder="เช่น ต่อภาษีรถยนต์, ทำบัตรประชาชน..."
                  className={`flex-1 p-3 outline-none bg-transparent ${isHighContrast || isYellowContrast ? 'placeholder-gray-500' : 'text-slate-800'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearching(true)}
                  onBlur={() => setTimeout(() => setIsSearching(false), 200)}
                />
                <button className={`px-6 py-3 rounded-xl font-bold transition-colors ${isHighContrast ? 'bg-white text-black hover:bg-gray-200' : isYellowContrast ? 'bg-yellow-400 text-black hover:bg-yellow-500' : currentTheme.primary + ' text-white ' + currentTheme.primaryHover}`}>
                  ค้นหา
                </button>
              </div>

              {/* Auto-suggest Dropdown */}
              {isSearching && (
                <div className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-2xl overflow-hidden z-50 ${isHighContrast ? 'bg-black border border-white' : isYellowContrast ? 'bg-black border border-yellow-400' : 'bg-white border border-slate-100'}`}>
                  {suggestions.length > 0 ? (
                    <ul>
                      {suggestions.map((s, i) => (
                        <li key={i} className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${isHighContrast ? 'hover:bg-gray-900' : isYellowContrast ? 'hover:bg-gray-900' : 'hover:bg-slate-50 border-b border-slate-50 last:border-0'}`}>
                          <span className="text-2xl">{s.icon}</span>
                          <div>
                            <p className="font-bold">{s.text}</p>
                            <p className={`text-xs ${isHighContrast ? 'text-gray-400' : isYellowContrast ? 'text-yellow-600' : 'text-slate-500'}`}>{s.dept}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center text-slate-500">ไม่พบบริการที่ค้นหา</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Links Services */}
        <div className="flex-1 max-w-6xl mx-auto px-4 lg:px-8 py-12 w-full">
          <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${isHighContrast || isYellowContrast ? '' : 'text-slate-800'}`}>
            <svg className={`w-6 h-6 ${isHighContrast ? 'text-white' : isYellowContrast ? 'text-yellow-400' : currentTheme.textPrimary}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            บริการยอดนิยม
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "จองคิวออนไลน์", desc: "นัดหมายล่วงหน้า ลดเวลารอ", icon: "📅" },
              { title: "ชำระภาษี/ค่าปรับ", desc: "สะดวก รวดเร็ว ปลอดภัย", icon: "💳" },
              { title: "ร้องทุกข์/แจ้งเหตุ", desc: "ระบบติดตามเรื่องราว 24 ชม.", icon: "📢" },
              { title: "ดาวน์โหลดแบบฟอร์ม", desc: "เอกสารราชการทุกหมวดหมู่", icon: "📄" },
            ].map((item, i) => (
              <div key={i} className={`p-6 cursor-pointer group transition-all duration-300 hover:-translate-y-2
                ${isHighContrast ? 'bg-black border border-white hover:bg-gray-900' : 
                  isYellowContrast ? 'bg-black border border-yellow-400 hover:bg-gray-900' : 
                  currentTheme.card + ' hover:shadow-xl'}`}
              >
                <div className={`text-4xl mb-4 ${theme === 'citizen' ? 'p-3 bg-teal-50 rounded-2xl inline-block' : ''}`}>{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 group-hover:underline">{item.title}</h4>
                <p className={`text-sm ${isHighContrast ? 'text-gray-300' : isYellowContrast ? 'text-yellow-200' : 'text-slate-500'}`}>{item.desc}</p>
                <div className={`mt-4 w-8 h-1 rounded ${isHighContrast ? 'bg-white' : isYellowContrast ? 'bg-yellow-400' : currentTheme.primary} transition-all duration-300 group-hover:w-16`}></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
