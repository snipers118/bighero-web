"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Natura C-Complex 1000mg",
    desc: "วิตามินซีสกัดจากธรรมชาติ 100% ดูดซึมเร็ว ไม่ระคายเคืองกระเพาะ",
    price: "฿ 890",
    img: "https://loremflickr.com/600/600/vitamin,bottle,medicine?lock=901",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 1240
  },
  {
    id: 2,
    name: "Deep Ocean Fish Oil",
    desc: "น้ำมันปลาทะเลน้ำลึกสกัดเย็น EPA/DHA สูง บำรุงสมองและหัวใจ",
    price: "฿ 1,250",
    img: "https://loremflickr.com/600/600/supplements,pills?lock=902",
    badge: null,
    rating: 4.8,
    reviews: 856
  },
  {
    id: 3,
    name: "Pro-Biotix Advance 50B",
    desc: "โพรไบโอติก 50 พันล้านตัว 10 สายพันธุ์ ปรับสมดุลลำไส้ เสริมภูมิคุ้มกัน",
    price: "฿ 1,450",
    img: "https://loremflickr.com/600/600/medicine,packaging?lock=903",
    badge: "New Formula",
    rating: 5.0,
    reviews: 312
  },
  {
    id: 4,
    name: "Whey Isolate Plant-Based",
    desc: "โปรตีนพืชสกัดเข้มข้น รสช็อกโกแลต ปราศจากแลคโตสและน้ำตาล",
    price: "฿ 1,890",
    img: "https://loremflickr.com/600/600/whey,protein?lock=904",
    badge: "Vegan",
    rating: 4.7,
    reviews: 540
  }
];

const categories = [
  { icon: "🛡️", name: "Immunity" },
  { icon: "🧠", name: "Brain Health" },
  { icon: "🦴", name: "Bone & Joint" },
  { icon: "⚡", name: "Energy" },
  { icon: "👁️", name: "Vision Care" },
  { icon: "💤", name: "Sleep & Calm" }
];

export default function HealthDemo() {
  return (
    <div className="relative overflow-hidden bg-[#f8fafc] font-sans flex flex-col min-h-[850px] animate-fade-in-up text-slate-800">
      
      {/* Top Utility Bar (Clinical Style) */}
      <div className="bg-[#0f766e] text-teal-50 text-[11px] py-2 px-8 flex justify-between items-center">
         <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> ปลอดภัย มั่นใจได้ ได้รับมาตรฐาน อย. และ GMP</span>
         </div>
         <div className="flex gap-4 items-center font-bold">
            <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-1">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
               ปรึกษาเภสัชกรฟรี
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">ติดตามสถานะการจัดส่ง</span>
         </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 border-b border-slate-200 shadow-sm">
         <div className="flex items-center gap-3">
            {/* Health Cross Logo */}
            <div className="w-10 h-10 bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-xl flex items-center justify-center text-white shadow-md">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/></svg>
            </div>
            <div>
               <h1 className="text-2xl font-black text-[#0f766e] tracking-tight leading-none">NATURA<span className="text-slate-800">MEDIC</span></h1>
               <p className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mt-1">Premium Health Care</p>
            </div>
         </div>

         {/* Search Bar (Prominent in E-commerce) */}
         <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input 
               type="text" 
               placeholder="ค้นหาวิตามิน, อาหารเสริม หรือ อาการ..." 
               className="w-full bg-slate-100 border-transparent focus:bg-white focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 rounded-full py-2.5 pl-5 pr-12 text-sm transition-all outline-none text-slate-700"
            />
            <button className="absolute right-2 top-1.5 w-8 h-8 bg-[#0d9488] rounded-full text-white flex items-center justify-center hover:bg-[#0f766e] transition-colors">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
         </div>

         <div className="flex items-center gap-6 text-slate-600 font-bold text-sm">
            <span className="hidden lg:block cursor-pointer hover:text-[#0d9488] transition-colors">เข้าสู่ระบบ</span>
            <button className="relative flex items-center gap-2 bg-teal-50 text-[#0f766e] px-4 py-2 rounded-full hover:bg-teal-100 transition-colors">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               ตะกร้า
               <span className="bg-[#ef4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -right-1 border border-white">2</span>
            </button>
         </div>
      </nav>

      <div className="hidden lg:flex bg-white border-b border-slate-100 px-8 py-3 justify-center gap-10 text-[13px] font-bold text-slate-600">
         <span className="text-[#0f766e] border-b-2 border-[#0f766e] pb-1 cursor-pointer">หมวดหมู่ทั้งหมด</span>
         <span className="hover:text-[#0d9488] cursor-pointer transition-colors">วิตามินและแร่ธาตุ</span>
         <span className="hover:text-[#0d9488] cursor-pointer transition-colors">โพรไบโอติก</span>
         <span className="hover:text-[#0d9488] cursor-pointer transition-colors">โปรตีนและฟิตเนส</span>
         <span className="hover:text-[#0d9488] cursor-pointer transition-colors">อุปกรณ์การแพทย์</span>
         <span className="text-red-500 hover:text-red-600 cursor-pointer transition-colors">🔥 โปรโมชั่นพิเศษ</span>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-teal-900 overflow-hidden">
         <div className="absolute inset-0">
            {/* Background Medical/Science Image */}
            <img src="https://loremflickr.com/1920/800/science,laboratory,health?lock=900" alt="Science Lab" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e] to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 lg:py-28 flex flex-col items-start">
            <span className="bg-teal-100 text-[#0f766e] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-6 shadow-sm">
               Scientifically Proven Formula
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1] max-w-2xl">
               ยกระดับสุขภาพของคุณ <br/>ด้วยสารสกัดบริสุทธิ์จากธรรมชาติ
            </h2>
            <p className="text-teal-50 text-lg mb-10 max-w-xl leading-relaxed">
               ผลิตภัณฑ์อาหารเสริมเกรดพรีเมียม พัฒนาโดยผู้เชี่ยวชาญด้านสุขภาพ ผ่านการทดสอบทางคลินิก ปลอดภัย 100%
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="bg-white text-[#0f766e] hover:bg-teal-50 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors shadow-lg flex items-center gap-2">
                  เลือกซื้อสินค้า
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </button>
               <button className="bg-transparent border border-teal-200 text-teal-100 hover:bg-teal-800 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors">
                  อ่านงานวิจัยอ้างอิง
               </button>
            </div>
         </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-6 border-b border-slate-100 shadow-sm relative z-20">
         <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between md:justify-center md:gap-20 items-center text-slate-400 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">GMP</div> GMP Certified</div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">FDA</div> FDA Approved</div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">🌿</div> 100% Organic</div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">🔬</div> Clinically Tested</div>
         </div>
      </div>

      {/* Categories Grid */}
      <div className="py-16 px-8 max-w-7xl mx-auto w-full">
         <h3 className="text-2xl font-black text-slate-800 mb-8 text-center">เลือกช้อปตามเป้าหมายสุขภาพ (Shop by Health Goals)</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:border-[#0d9488] transition-all cursor-pointer group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <p className="font-bold text-slate-700 text-sm group-hover:text-[#0f766e]">{cat.name}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 px-8 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-10">
               <div>
                  <h3 className="text-3xl font-black text-slate-800 mb-2">สินค้ายอดนิยม (Best Sellers)</h3>
                  <p className="text-slate-500 font-medium">อาหารเสริมและวิตามินที่ได้รับความไว้วางใจสูงสุดจากลูกค้า</p>
               </div>
               <button className="text-[#0f766e] font-bold hover:underline">ดูสินค้าทั้งหมด</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {products.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative group">
                     {product.badge && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-sm z-10">
                           {product.badge}
                        </span>
                     )}
                     
                     <div className="aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center p-4">
                        <img src={product.img} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                        
                        {/* Quick View overlay */}
                        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                           <button className="bg-white text-slate-800 shadow-lg font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                              Quick View
                           </button>
                        </div>
                     </div>

                     <div>
                        {/* Rating */}
                        <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                           {"★".repeat(Math.floor(product.rating))}
                           <span className="text-slate-400 font-medium ml-1">({product.reviews})</span>
                        </div>

                        <h4 className="font-bold text-slate-800 text-lg mb-1 leading-tight">{product.name}</h4>
                        <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">{product.desc}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                           <span className="text-xl font-black text-[#0f766e]">{product.price}</span>
                           <button className="w-10 h-10 rounded-full bg-teal-50 text-[#0f766e] flex items-center justify-center hover:bg-[#0f766e] hover:text-white transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
}
