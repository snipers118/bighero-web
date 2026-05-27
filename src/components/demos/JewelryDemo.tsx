"use client";

import { useState } from "react";

const products = [
  { 
    id: 1, 
    name: "สร้อยคอทองคำแท้ ลายสี่เสา", 
    weight: "น้ำหนัก 1 บาท",
    price: "฿ 41,500", 
    img: "https://loremflickr.com/600/600/gold,necklace,jewelry?lock=401", 
    badge: "Best Seller"
  },
  { 
    id: 2, 
    name: "แหวนทองคำแท้ ลายมังกร", 
    weight: "น้ำหนัก 1 สลึง",
    price: "฿ 10,800", 
    img: "https://loremflickr.com/600/600/gold,ring?lock=402", 
    badge: "New Arrival"
  },
  { 
    id: 3, 
    name: "กำไลข้อมือทองคำ ลายฉลุ", 
    weight: "น้ำหนัก 2 บาท",
    price: "฿ 82,500", 
    img: "https://loremflickr.com/600/600/gold,bracelet?lock=403", 
    badge: null
  },
  { 
    id: 4, 
    name: "จี้ทองคำแท้ ลายหัวใจเพชรCZ", 
    weight: "น้ำหนัก ครึ่งสลึง",
    price: "฿ 5,600", 
    img: "https://loremflickr.com/600/600/gold,pendant?lock=404", 
    badge: "Recommend"
  },
  { 
    id: 5, 
    name: "สร้อยข้อมือทอง ลายเบนซ์", 
    weight: "น้ำหนัก 2 สลึง",
    price: "฿ 21,200", 
    img: "https://loremflickr.com/600/600/bracelet,jewelry,gold?lock=405", 
    badge: null
  },
  { 
    id: 6, 
    name: "แหวนเพชรซีก ทองคำแท้", 
    weight: "น้ำหนัก 1 สลึง",
    price: "฿ 12,500", 
    img: "https://loremflickr.com/600/600/diamond,ring,gold?lock=406", 
    badge: "Limited"
  }
];

export default function JewelryDemo() {
  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-100 bg-white font-sans flex flex-col min-h-[850px] animate-fade-in-up">
      
      {/* Top Banner (Minimalist) */}
      <div className="bg-[#fcfaf8] text-[#8b0000] text-[11px] font-medium py-2 px-6 flex justify-between items-center hidden sm:flex border-b border-gray-100">
         <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> 02-123-4567</span>
            <span className="text-gray-500">Mon - Sat (09:00 - 18:00)</span>
         </div>
         <div className="flex gap-3">
            <span className="hover:text-[#d4af37] cursor-pointer transition-colors">Line Official: @sirimongkol</span>
         </div>
      </div>

      {/* Main Navigation (Sleek) */}
      <nav className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
         <div className="flex items-center gap-4">
            {/* Modern Logo */}
            <div className="w-10 h-10 bg-[#8b0000] rounded-xl flex items-center justify-center text-[#d4af37] font-serif text-xl shadow-lg shadow-red-900/20">
               S
            </div>
            <div>
               <h1 className="text-xl font-bold text-gray-900 tracking-tight">SIRIMONGKOL</h1>
               <p className="text-[#8b0000] text-[9px] uppercase tracking-widest font-bold">Fine Gold & Jewelry</p>
            </div>
         </div>

         <div className="hidden md:flex gap-8 text-[13px] font-medium text-gray-600">
            <span className="cursor-pointer text-[#8b0000] border-b border-[#8b0000] pb-1">หน้าหลัก</span>
            <span className="cursor-pointer hover:text-[#8b0000] transition-colors">คอลเลกชัน</span>
            <span className="cursor-pointer hover:text-[#8b0000] transition-colors">ออมทอง</span>
            <span className="cursor-pointer hover:text-[#8b0000] transition-colors">สาขาของเรา</span>
         </div>

         <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-700 transition-colors">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-[#8b0000] transition-colors shadow-lg">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
               <span className="absolute -top-1 -right-1 bg-[#d4af37] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
         </div>
      </nav>

      {/* Hero Section (Modern Image Focus with Glassmorphism) */}
      <div className="relative bg-gray-50 overflow-hidden min-h-[500px] flex items-center">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <img src="https://loremflickr.com/1600/900/jewelry,model,elegant?lock=450" alt="Hero" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
         </div>
         
         <div className="max-w-7xl w-full mx-auto px-8 flex flex-col lg:flex-row items-center relative z-10">
            {/* Hero Text */}
            <div className="lg:w-1/2 text-left pt-12 lg:pt-0">
               <div className="inline-block px-3 py-1 bg-red-50 text-[#8b0000] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-red-100">
                  New Collection 2026
               </div>
               <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-[1.1]">
                  Elegance in <br/>
                  <span className="font-serif italic text-[#d4af37]">Every Detail.</span>
               </h2>
               <p className="text-gray-500 mb-10 max-w-md text-sm leading-relaxed">
                  สัมผัสความงดงามของทองคำแท้ 96.5% ลายทันสมัย ออกแบบอย่างประณีตสำหรับทุกโอกาสสำคัญของคุณ
               </p>
               <button className="bg-gray-900 text-white font-medium px-8 py-3.5 rounded-full shadow-xl hover:bg-[#8b0000] transition-colors text-xs uppercase tracking-widest flex items-center gap-3 w-fit">
                  Shop Collection
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>

            {/* Gold Price Board Widget (Modern Glassmorphism) */}
            <div className="lg:w-1/2 flex justify-end mt-12 lg:mt-0">
               <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 p-6 w-full max-w-[340px]">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-200/50 pb-4">
                     <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                     </div>
                     <div>
                        <h3 className="text-gray-900 font-bold text-sm">ราคาทองคำวันนี้</h3>
                        <p className="text-gray-400 text-[10px]">อัปเดต: 27 พ.ค. 2569 (09:25 น.)</p>
                     </div>
                  </div>
                  
                  <div className="space-y-4">
                     <div>
                        <div className="flex justify-between items-end mb-1">
                           <span className="text-xs font-bold text-gray-700">ทองคำแท่ง (96.5%)</span>
                           <span className="text-[10px] text-green-500 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V3a1 1 0 012 0v9.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" style={{transform: "rotate(180deg)", transformOrigin: "center"}}/></svg>
                              +50
                           </span>
                        </div>
                        <div className="flex justify-between text-sm bg-white/50 rounded-lg p-2 border border-gray-100">
                           <div className="text-gray-500"><span className="text-[10px]">รับซื้อ:</span> <span className="text-gray-900 font-medium">40,000</span></div>
                           <div className="text-gray-500"><span className="text-[10px]">ขายออก:</span> <span className="text-gray-900 font-medium">40,100</span></div>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between items-end mb-1">
                           <span className="text-xs font-bold text-gray-700">ทองรูปพรรณ (96.5%)</span>
                        </div>
                        <div className="flex justify-between text-sm bg-white/50 rounded-lg p-2 border border-gray-100">
                           <div className="text-gray-500"><span className="text-[10px]">รับซื้อ:</span> <span className="text-gray-900 font-medium">39,279</span></div>
                           <div className="text-gray-500"><span className="text-[10px]">ขายออก:</span> <span className="text-gray-900 font-medium">40,600</span></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Product Grid (Modern Minimalist Cards) */}
      <div className="flex-1 bg-white py-20 px-8">
         <div className="max-w-6xl mx-auto">
            
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">Featured Pieces</h3>
                  <p className="text-gray-400 text-xs">สินค้าแนะนำยอดนิยม</p>
               </div>
               <button className="text-gray-900 text-xs font-medium uppercase tracking-widest border-b border-gray-900 pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                  View All
               </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
               {products.map(product => (
                  <div key={product.id} className="group relative flex flex-col">
                     {/* Image Container */}
                     <div className="relative aspect-[4/5] bg-[#f9f9f9] rounded-2xl overflow-hidden mb-4 border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                        {product.badge && (
                           <div className="absolute top-3 left-3 bg-white text-gray-900 text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm z-10">
                              {product.badge}
                           </div>
                        )}
                        <img 
                           src={product.img} 
                           alt={product.name} 
                           className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        {/* Hover Action Overlay */}
                        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                           <button className="bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                           </button>
                        </div>
                     </div>
                     
                     {/* Info */}
                     <div className="text-center px-2">
                        <p className="text-[#d4af37] text-[10px] font-medium tracking-widest mb-1.5 uppercase">{product.weight}</p>
                        <h4 className="text-[13px] text-gray-900 mb-2 truncate font-medium">{product.name}</h4>
                        <p className="text-gray-500 text-sm">{product.price}</p>
                     </div>
                  </div>
               ))}
            </div>

          </div>
       </div>

      {/* --- NEW SECTION: Why Choose Us --- */}
      <div className="py-20 bg-[#fcfaf8] border-t border-gray-100">
         <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-light text-gray-900 mb-4 font-serif italic text-[#d4af37]">The Sirimongkol Difference</h3>
               <p className="text-gray-500 max-w-2xl mx-auto text-sm">ทำไมลูกค้ากว่า 100,000 รายถึงไว้วางใจเลือกซื้อทองคำและเครื่องประดับกับเรามายาวนานกว่า 30 ปี</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {[
                  { title: "ทองคำแท้ 96.5% มาตรฐาน สคบ.", desc: "รับประกันน้ำหนักและเปอร์เซ็นต์ทองเต็มทุกชิ้น พร้อมใบรับประกันสินค้า", icon: "💎" },
                  { title: "ดีไซน์ทันสมัย อัปเดตทุกสัปดาห์", desc: "มีลายให้เลือกมากกว่า 5,000 ลาย ทั้งงานทองรูปพรรณ งานลงยา และงานฝังเพชร", icon: "✨" },
                  { title: "รับซื้อคืนราคาสูง", desc: "ให้ราคารับซื้อคืนสูงสุดตามประกาศสมาคมค้าทองคำแห่งประเทศไทย", icon: "⚖️" }
               ].map((feat, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl mb-6 shadow-sm border border-gray-100">
                        {feat.icon}
                     </div>
                     <h4 className="text-gray-900 font-bold mb-3">{feat.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 border-t-4 border-[#8b0000]">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#8b0000] rounded-xl flex items-center justify-center text-[#d4af37] font-serif text-xl">S</div>
                  <div>
                     <h1 className="text-xl font-bold text-white tracking-tight">SIRIMONGKOL</h1>
                     <p className="text-[#8b0000] text-[9px] uppercase tracking-widest font-bold">Fine Gold & Jewelry</p>
                  </div>
               </div>
               <p className="text-sm text-gray-500 mb-6 leading-relaxed">ร้านทองศิริมงคล ศูนย์รวมทองคำแท้ เครื่องประดับเพชร และอัญมณีคุณภาพ บริการด้วยความซื่อสัตย์ จริงใจ</p>
               <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#8b0000] hover:text-white hover:border-[#8b0000] transition-all">FB</button>
                  <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#8b0000] hover:text-white hover:border-[#8b0000] transition-all">IG</button>
                  <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#8b0000] hover:text-white hover:border-[#8b0000] transition-all">LINE</button>
               </div>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Products</h4>
               <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">ทองคำแท่ง</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">ทองรูปพรรณ</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">เครื่องประดับเพชร</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">งานสั่งทำพิเศษ (Custom)</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Services</h4>
               <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">ระบบออมทองออนไลน์</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">ขายฝากทองคำ</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">รับซ่อม/ล้างเครื่องประดับ</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition-colors">ตรวจสอบเปอร์เซ็นต์ทอง</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Contact</h4>
               <ul className="space-y-3 text-sm mb-6">
                  <li className="flex gap-2 text-gray-400"><span className="text-[#d4af37]">📍</span> 123 ถนนเยาวราช กรุงเทพฯ</li>
                  <li className="flex gap-2 text-gray-400"><span className="text-[#d4af37]">📞</span> 02-123-4567</li>
               </ul>
               <p className="text-xs text-gray-500 mb-2">รับข่าวสารราคาทองและโปรโมชั่น</p>
               <div className="flex">
                  <input type="text" placeholder="Line ID หรือ เบอร์โทร" className="bg-gray-800 border-none px-4 py-2 w-full text-white outline-none focus:ring-1 focus:ring-[#d4af37] text-sm" />
                  <button className="bg-[#8b0000] text-white font-bold px-4 hover:bg-red-800 transition-colors text-xs uppercase tracking-widest">OK</button>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>© 2026 SIRIMONGKOL FINE GOLD & JEWELRY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <a href="#" className="hover:text-gray-300">Privacy Policy</a>
               <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
            </div>
         </div>
      </footer>

    </div>
  );
}
