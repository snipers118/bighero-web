"use client";

import { useState } from "react";

export default function CorpWebCMSDemo() {
  const [siteData, setSiteData] = useState({
    siteName: "กรมส่งเสริมการปกครองส่วนท้องถิ่น",
    headline: "มุ่งมั่นพัฒนาท้องถิ่น ยกระดับคุณภาพชีวิตประชาชน",
    announcement: "ประกาศรับสมัครสอบแข่งขันเพื่อบรรจุบุคคลเข้ารับราชการ ปี 2569",
    themeColor: "blue",
    layout: "modern",
  });

  const [activeTab, setActiveTab] = useState<"general" | "content" | "settings">("general");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSiteData((prev) => ({ ...prev, [name]: value }));
  };

  const themeClasses = {
    blue: "bg-blue-800 text-white",
    green: "bg-emerald-700 text-white",
    gold: "bg-yellow-600 text-white",
  };

  const borderClasses = {
    blue: "border-blue-800",
    green: "border-emerald-700",
    gold: "border-yellow-600",
  };

  const textClasses = {
    blue: "text-blue-800",
    green: "text-emerald-700",
    gold: "text-yellow-600",
  };

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row h-[750px] animate-fade-in-up font-sans">
      
      {/* CMS Sidebar (Admin Panel) */}
      <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col h-[400px] md:h-full overflow-hidden">
        {/* CMS Header */}
        <div className="p-4 bg-slate-800 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xs shadow-inner">CMS</div>
          <div>
            <h2 className="font-bold text-sm">GovCMS Admin Panel</h2>
            <p className="text-[10px] text-slate-400">Live Editor Mode</p>
          </div>
        </div>

        {/* CMS Tabs */}
        <div className="flex text-xs font-bold border-b border-slate-200">
          <button 
            onClick={() => setActiveTab("general")}
            className={`flex-1 py-3 border-b-2 transition-colors ${activeTab === "general" ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:bg-slate-100"}`}
          >
            ตั้งค่าทั่วไป
          </button>
          <button 
            onClick={() => setActiveTab("content")}
            className={`flex-1 py-3 border-b-2 transition-colors ${activeTab === "content" ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-slate-500 hover:bg-slate-100"}`}
          >
            จัดการเนื้อหา
          </button>
        </div>

        {/* CMS Editor Body */}
        <div className="flex-1 overflow-y-auto p-5 bg-white">
          {activeTab === "general" && (
            <div className="space-y-5 animate-fade-in-up">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ชื่อหน่วยงาน (Site Name)</label>
                <input 
                  type="text" 
                  name="siteName"
                  value={siteData.siteName} 
                  onChange={handleInputChange}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">สีธีมหลัก (Theme Color)</label>
                <div className="flex gap-2">
                  <button onClick={() => setSiteData(p => ({...p, themeColor: 'blue'}))} className={`w-8 h-8 rounded-full bg-blue-800 border-2 ${siteData.themeColor === 'blue' ? 'border-indigo-500 ring-2 ring-indigo-200 scale-110' : 'border-transparent'} transition`}></button>
                  <button onClick={() => setSiteData(p => ({...p, themeColor: 'green'}))} className={`w-8 h-8 rounded-full bg-emerald-700 border-2 ${siteData.themeColor === 'green' ? 'border-indigo-500 ring-2 ring-indigo-200 scale-110' : 'border-transparent'} transition`}></button>
                  <button onClick={() => setSiteData(p => ({...p, themeColor: 'gold'}))} className={`w-8 h-8 rounded-full bg-yellow-600 border-2 ${siteData.themeColor === 'gold' ? 'border-indigo-500 ring-2 ring-indigo-200 scale-110' : 'border-transparent'} transition`}></button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">รูปแบบเค้าโครง (Layout Style)</label>
                <select 
                  name="layout" 
                  value={siteData.layout} 
                  onChange={handleInputChange}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                >
                  <option value="modern">ทันสมัย (Modern)</option>
                  <option value="classic">ทางการ (Classic)</option>
                </select>
              </div>

              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                 <p className="text-xs text-indigo-700 flex items-start gap-2">
                   <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   เปลี่ยนข้อมูลด้านซ้ายแล้วดูผลลัพธ์แบบ Real-time ที่หน้าจอด้านขวาได้เลย
                 </p>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-5 animate-fade-in-up">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">พาดหัวแบนเนอร์ (Hero Headline)</label>
                <input 
                  type="text" 
                  name="headline"
                  value={siteData.headline} 
                  onChange={handleInputChange}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ประกาศด่วน (Announcement)</label>
                <input 
                  type="text" 
                  name="announcement"
                  value={siteData.announcement} 
                  onChange={handleInputChange}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

               <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ข่าวสารล่าสุด (Mock Data)</label>
                <div className="border border-slate-200 rounded-lg p-3 space-y-2 bg-slate-50">
                   <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                     <span className="truncate">ประชุมแผนยุทธศาสตร์ 2569...</span>
                     <span className="text-green-600 font-bold">Published</span>
                   </div>
                   <div className="flex items-center justify-between text-xs">
                     <span className="truncate">โครงการจิตอาสาพัฒนาชุมชน...</span>
                     <span className="text-green-600 font-bold">Published</span>
                   </div>
                </div>
                <button className="mt-2 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition">+ เพิ่มข่าวใหม่</button>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
           <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-md transition">บันทึก (Save)</button>
        </div>
      </div>

      {/* Live Preview (Frontend) */}
      <div className="flex-1 bg-slate-800 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden h-full">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Browser Mockup */}
        <div className="w-full max-w-2xl bg-white rounded-t-xl overflow-hidden shadow-2xl relative z-10 flex flex-col h-[600px] border border-slate-700">
          
          {/* Browser Header */}
          <div className="h-8 bg-slate-200 flex items-center px-3 gap-2 border-b border-slate-300 flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto bg-white px-24 py-0.5 rounded text-[10px] text-slate-500 shadow-sm">www.demo-agency.go.th</div>
          </div>

          {/* Website Body (Dynamically updated via State) */}
          <div className="flex-1 overflow-y-auto bg-slate-50 relative">
            
            {/* Top Bar / Announcement */}
            {siteData.announcement && (
              <div className="bg-red-600 text-white text-[10px] py-1.5 px-4 flex justify-between items-center">
                <span className="font-bold flex items-center gap-1">
                  <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                  ประกาศ: {siteData.announcement}
                </span>
              </div>
            )}

            {/* Header */}
            <header className={`${themeClasses[siteData.themeColor as keyof typeof themeClasses]} px-6 py-4 flex justify-between items-center transition-colors duration-500`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/20`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h1 className="font-bold text-sm lg:text-base leading-tight">
                  {siteData.siteName}
                </h1>
              </div>
              <div className="hidden sm:flex gap-4 text-xs font-medium">
                <span className="hover:underline cursor-pointer">หน้าหลัก</span>
                <span className="hover:underline cursor-pointer">เกี่ยวกับหน่วยงาน</span>
                <span className="hover:underline cursor-pointer">บริการประชาชน</span>
                <span className="hover:underline cursor-pointer">ติดต่อเรา</span>
              </div>
            </header>

            {/* Hero Banner */}
            <div className={`relative h-48 flex items-center justify-center overflow-hidden ${siteData.layout === 'classic' ? 'bg-slate-200' : 'bg-gradient-to-br from-slate-800 to-slate-900'}`}>
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              {siteData.layout === 'classic' ? (
                // Classic layout uses a placeholder image
                <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
              ) : (
                // Modern layout uses abstract shapes
                <>
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-overlay opacity-20 blur-2xl ${themeClasses[siteData.themeColor as keyof typeof themeClasses]}`}></div>
                  <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full mix-blend-overlay opacity-20 blur-2xl ${themeClasses[siteData.themeColor as keyof typeof themeClasses]}`}></div>
                </>
              )}
              
              <div className="relative z-20 text-center px-4">
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{siteData.headline}</h2>
                <button className={`px-4 py-2 rounded text-xs font-bold mt-2 transition-colors ${themeClasses[siteData.themeColor as keyof typeof themeClasses]} hover:opacity-90`}>ดูรายละเอียดเพิ่มเติม</button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 max-w-4xl mx-auto">
               <div className="flex justify-between items-end mb-4 border-b-2 border-slate-200 pb-2">
                 <h3 className={`text-lg font-bold ${textClasses[siteData.themeColor as keyof typeof textClasses]}`}>ข่าวประชาสัมพันธ์</h3>
                 <span className="text-xs text-slate-500 cursor-pointer hover:underline">ดูทั้งหมด &rarr;</span>
               </div>
               
               <div className={`grid ${siteData.layout === 'modern' ? 'grid-cols-2 gap-4' : 'grid-cols-1 gap-3'}`}>
                 {[1, 2].map((item) => (
                   <div key={item} className={`flex gap-3 bg-white p-3 shadow-sm border border-slate-100 ${siteData.layout === 'modern' ? 'flex-col rounded-xl' : 'flex-row items-center border-l-4 ' + borderClasses[siteData.themeColor as keyof typeof borderClasses]}`}>
                     <div className={`${siteData.layout === 'modern' ? 'w-full h-24 rounded-lg' : 'w-20 h-16 rounded'} bg-slate-200 flex-shrink-0 object-cover`}></div>
                     <div>
                       <span className="text-[9px] text-slate-400 bg-slate-100 px-1 rounded">ข่าวทั่วไป</span>
                       <h4 className="text-xs font-bold text-slate-800 mt-1 line-clamp-2">การประชุมขับเคลื่อนแผนยุทธศาสตร์กระทรวง ประจำปีงบประมาณ 2569</h4>
                       <p className="text-[10px] text-slate-500 mt-1">27 พ.ค. 2569</p>
                     </div>
                   </div>
                 ))}
               </div>

               {/* E-Services Mock */}
               <div className="mt-8">
                 <h3 className={`text-lg font-bold mb-4 text-center ${textClasses[siteData.themeColor as keyof typeof textClasses]}`}>บริการอิเล็กทรอนิกส์ (E-Services)</h3>
                 <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition cursor-pointer">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-opacity-10 ${themeClasses[siteData.themeColor as keyof typeof themeClasses].split(' ')[0]} ${textClasses[siteData.themeColor as keyof typeof textClasses]}`}>
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 text-center">บริการที่ {i}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Footer */}
            <footer className={`${themeClasses[siteData.themeColor as keyof typeof themeClasses]} p-6 mt-8 opacity-90`}>
              <div className="text-center text-[10px] text-white/70">
                <p>สงวนลิขสิทธิ์ © 2569 {siteData.siteName}</p>
              </div>
            </footer>
          </div>
        </div>
        
        {/* Floating Tooltip */}
        <div className="absolute bottom-4 right-4 bg-indigo-600 text-white text-xs px-4 py-2 rounded-full shadow-xl animate-bounce shadow-indigo-500/30">
          ✨ Live Preview Auto-updates!
        </div>
      </div>
    </div>
  );
}
