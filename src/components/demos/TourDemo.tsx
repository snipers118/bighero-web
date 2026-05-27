"use client";

import { useState } from "react";

const tours = [
  { 
    id: 1, 
    title: "มหัศจรรย์สวิตเซอร์แลนด์ - อิตาลี", 
    duration: "8 วัน 5 คืน",
    price: "฿ 79,900", 
    img: "https://loremflickr.com/600/400/switzerland,mountain?lock=601", 
    airlines: "Emirates (EK)",
    features: ["ขึ้นยอดเขาจุงเฟรา", "ล่องเรือทะเลสาบโคโม่", "ช้อปปิ้งมิลาน"],
    badge: "การันตีออกเดินทาง"
  },
  { 
    id: 2, 
    title: "โตเกียว - ฟูจิ - โอซาก้า (ซากุระบาน)", 
    duration: "6 วัน 4 คืน",
    price: "฿ 35,900", 
    img: "https://loremflickr.com/600/400/japan,sakura?lock=602", 
    airlines: "Thai Airways (TG)",
    features: ["พักออนเซ็น", "สวนสนุก USJ", "บุฟเฟ่ต์ขาปูยักษ์"],
    badge: "ขายดี"
  },
  { 
    id: 3, 
    title: "อัญมณีแห่งยุโรปตะวันออก (เช็ก-ออสเตรีย)", 
    duration: "9 วัน 6 คืน",
    price: "฿ 65,900", 
    img: "https://loremflickr.com/600/400/prague,city?lock=603", 
    airlines: "Qatar Airways (QR)",
    features: ["ปราสาทปราก", "หมู่บ้านฮัลล์ชตัท", "ล่องเรือแม่น้ำดานูบ"],
    badge: null
  },
  { 
    id: 4, 
    title: "เสน่ห์เวียดนามกลาง ดานัง-ฮอยอัน", 
    duration: "4 วัน 3 คืน",
    price: "฿ 12,900", 
    img: "https://loremflickr.com/600/400/vietnam,lantern?lock=604", 
    airlines: "Air Asia (FD)",
    features: ["บานาฮิลล์", "ล่องเรือกระด้ง", "เมืองมรดกโลกฮอยอัน"],
    badge: "โปรโมชั่น"
  }
];

export default function TourDemo() {
  const [searchDest, setSearchDest] = useState("ยุโรป");

  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-200 bg-white font-sans flex flex-col min-h-[850px] animate-fade-in-up">
      
      {/* Trust Bar (TAT License & Contacts) */}
      <div className="bg-[#0f172a] text-white text-[11px] py-2 px-6 flex flex-col sm:flex-row justify-between items-center z-50 relative">
         <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"/></svg>
               ใบอนุญาตประกอบธุรกิจนำเที่ยว เลขที่ 11/12345 (TAT License)
            </span>
            <span className="hidden md:block text-slate-300">บริษัท วันเดอร์ลัสต์ ฮอลิเดย์ จำกัด (จดทะเบียนถูกต้องตามกฎหมาย)</span>
         </div>
         <div className="flex gap-4 mt-2 sm:mt-0 font-medium">
            <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> 02-999-8888</span>
            <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 001.755 6.285L0 24l5.962-1.545A11.956 11.956 0 0011.944 24c6.626 0 12-5.373 12-12s-5.374-12-12-12zM20 16.5c-.322 1.054-1.854 1.836-2.585 1.884-.572.038-1.285.222-3.83-1.054-2.835-1.424-4.664-4.595-4.802-4.78-.14-.184-1.15-1.536-1.15-2.927s.71-2.072.96-2.338c.25-.265.54-.33.72-.33.18 0 .36.002.523.01.173.008.406-.065.635.495.23.562.753 1.838.82 1.97.068.134.113.29.023.473-.09.183-.136.297-.27.45-.136.153-.284.33-.404.448-.13.13-.267.273-.11.54.157.266.696 1.148 1.498 1.868.966.868 1.815 1.144 2.083 1.278.27.135.428.113.59-.074.162-.187.697-.81.884-1.087.186-.278.373-.23.618-.138.246.09 1.554.735 1.817.868.263.133.438.198.503.31.066.113.066.653-.255 1.706z"/></svg> @wanderlust</span>
         </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-8 py-4 flex justify-between items-center shadow-sm relative z-40">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0284c7] rounded-lg flex items-center justify-center text-white shadow-lg">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
               <h1 className="text-xl font-black text-[#0f172a] leading-tight">Wanderlust<span className="text-[#0284c7]">Holidays</span></h1>
               <p className="text-[#64748b] text-[10px] font-bold">Trusted Travel Partner</p>
            </div>
         </div>

         <div className="hidden md:flex gap-8 text-[14px] font-bold text-slate-700">
            <span className="text-[#0284c7] border-b-2 border-[#0284c7] pb-1 cursor-pointer">หน้าแรก</span>
            <span className="hover:text-[#0284c7] cursor-pointer transition-colors">ทัวร์ต่างประเทศ</span>
            <span className="hover:text-[#0284c7] cursor-pointer transition-colors">ทัวร์ในประเทศ</span>
            <span className="hover:text-[#0284c7] cursor-pointer transition-colors">ตั๋วเครื่องบิน</span>
            <span className="hover:text-[#0284c7] cursor-pointer transition-colors">เกี่ยวกับเรา (ใบอนุญาต)</span>
         </div>
      </nav>

      {/* Hero with Search Widget */}
      <div className="relative bg-[#0f172a] h-[500px] flex items-center justify-center z-10">
         <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://loremflickr.com/1600/900/travel,scenery,europe?lock=605" alt="Travel" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/90"></div>
         </div>
         
         <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center text-center mt-[-50px]">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
               เปิดประสบการณ์โลกกว้าง <br/> ไปกับบริษัททัวร์ที่คุณวางใจ
            </h2>
            <p className="text-lg text-slate-200 mb-10 max-w-2xl drop-shadow-md">
               มีใบอนุญาตถูกต้อง โปรแกรมทัวร์ชัดเจน ไม่มีแอบแฝง พร้อมดูแลคุณตลอดการเดินทาง
            </p>

            {/* Tour Search Widget */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl w-full flex flex-col md:flex-row gap-2 border-4 border-white/20 backdrop-blur-md">
               <div className="flex-1 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 text-left">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">จุดหมายปลายทาง</p>
                  <select className="w-full bg-transparent font-bold text-slate-800 outline-none cursor-pointer" value={searchDest} onChange={(e) => setSearchDest(e.target.value)}>
                     <option>ยุโรป</option>
                     <option>ญี่ปุ่น</option>
                     <option>เกาหลี</option>
                     <option>เวียดนาม</option>
                  </select>
               </div>
               <div className="flex-1 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 text-left hidden sm:block">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">เดือนที่เดินทาง</p>
                  <select className="w-full bg-transparent font-bold text-slate-800 outline-none cursor-pointer">
                     <option>ทุกเดือน</option>
                     <option>ตุลาคม</option>
                     <option>พฤศจิกายน</option>
                     <option>ธันวาคม</option>
                  </select>
               </div>
               <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl px-8 py-3 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  ค้นหาทัวร์
               </button>
            </div>
         </div>
      </div>

      {/* Tour Programs Section */}
      <div className="bg-slate-50 py-20 px-6 lg:px-12 flex-1">
         <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-4">
               <div>
                  <h3 className="text-3xl font-black text-[#0f172a] flex items-center gap-3">
                     <span className="bg-[#0284c7] text-white w-10 h-10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </span>
                     โปรแกรมทัวร์ยอดนิยม
                  </h3>
                  <p className="text-slate-500 mt-2 font-medium">เดินทางมั่นใจ ด้วยโปรแกรมที่คัดสรรมาอย่างดี</p>
               </div>
               <button className="text-[#0284c7] font-bold hover:underline mt-4 md:mt-0 flex items-center gap-1">
                  ดูโปรแกรมทั้งหมด <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {tours.map(tour => (
                  <div key={tour.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden group transition-all">
                     {/* Image */}
                     <div className="relative aspect-[4/3] overflow-hidden">
                        {tour.badge && (
                           <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded shadow-md z-10 uppercase">
                              {tour.badge}
                           </div>
                        )}
                        <img 
                           src={tour.img} 
                           alt={tour.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                           <div className="flex items-center gap-2 text-white/90 text-xs font-bold">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              {tour.duration}
                           </div>
                        </div>
                     </div>
                     
                     {/* Content */}
                     <div className="p-5">
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase mb-2">
                           <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           {tour.airlines}
                        </div>
                        <h4 className="text-[15px] font-bold text-[#0f172a] mb-3 line-clamp-2 leading-snug group-hover:text-[#0284c7] transition-colors">
                           {tour.title}
                        </h4>
                        
                        <ul className="mb-4 space-y-1">
                           {tour.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                                 <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                                 <span className="truncate">{feature}</span>
                              </li>
                           ))}
                        </ul>

                        <div className="flex justify-between items-end mt-4 pt-4 border-t border-slate-100">
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold">ราคาเริ่มต้น</p>
                              <p className="text-[#e21d48] font-black text-lg">{tour.price}</p>
                           </div>
                           <button className="bg-[#0f172a] hover:bg-[#0284c7] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                              ดูรายละเอียด
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>

      {/* Footer / Trust Section */}
      <div className="bg-[#0f172a] text-slate-400 py-12 px-6">
         <div className="max-w-5xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
               {/* Placeholder for TAT Logo */}
               <span className="text-[#0f172a] font-black text-xl">TAT</span>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">มั่นใจทุกการเดินทางกับ Wanderlust Holidays</h4>
            <p className="mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
               เราคือบริษัทจัดนำเที่ยวที่ได้รับการรับรองจาก ททท. อย่างถูกต้อง 
               มีประสบการณ์จัดทัวร์มากกว่า 10 ปี พร้อมดูแลคุณด้วยทีมงานมืออาชีพ ไกด์ผู้เชี่ยวชาญ 
               และโปรแกรมที่ชัดเจน ตรงปก ไม่มีค่าใช้จ่ายแอบแฝง
            </p>
            <div className="inline-block bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white font-bold">
               ใบอนุญาตประกอบธุรกิจนำเที่ยว เลขที่ 11/12345
            </div>
         </div>
      </div>

    </div>
  );
}
