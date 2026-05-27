"use client";

import { useState } from "react";

const promotions = [
  {
    id: 1,
    title: "Dream Package",
    desc: "Foot Reflexology (45 mins) + Back & Shoulder Massage (45 mins)",
    price: "฿ 1,150",
    oldPrice: "฿ 1,500",
    img: "https://loremflickr.com/600/400/spa,foot?lock=811"
  },
  {
    id: 2,
    title: "Heavenly Relax",
    desc: "Thai Traditional Massage (120 mins) with Herbal Compress",
    price: "฿ 1,850",
    oldPrice: "฿ 2,200",
    img: "https://loremflickr.com/600/400/massage,thai?lock=812"
  },
  {
    id: 3,
    title: "Aromatherapy Gold",
    desc: "Aromatherapy Oil Massage (90 mins) + Body Scrub (30 mins)",
    price: "฿ 2,500",
    oldPrice: "฿ 3,200",
    img: "https://loremflickr.com/600/400/spa,oil?lock=813"
  }
];

const branches = [
  { name: "Sukhumvit 39 (Phrom Phong)", type: "Stand Alone", status: "Open until 23:00" },
  { name: "Siam Square One", type: "Shopping Mall", status: "Open until 22:00" },
  { name: "Phuket (Patong Beach)", type: "Resort Spa", status: "Open until 24:00" },
  { name: "Chiang Mai (Nimman)", type: "Stand Alone", status: "Open until 22:00" }
];

export default function SpaDemo() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <div className="relative overflow-hidden bg-[#faf8f5] font-sans flex flex-col min-h-[850px] animate-fade-in-up text-[#4a3f35]">
      
      {/* Top Utility Bar */}
      <div className="bg-[#453227] text-[#e8dbce] text-[11px] py-2 px-8 flex justify-between items-center">
         <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white transition-colors">Call Center: 02-123-4567</span>
         </div>
         <div className="flex gap-4 items-center">
            <span className="font-bold text-[#d4af37] cursor-pointer">Member Login</span>
            <span>|</span>
            <span className="cursor-pointer font-bold text-white">TH</span>
            <span className="cursor-pointer hover:text-white transition-colors">EN</span>
         </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md px-8 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-[#e8dbce] shadow-sm">
         <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#453227] rounded-full flex items-center justify-center text-[#d4af37]">
               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </div>
            <div>
               <h1 className="text-xl font-serif font-bold text-[#453227] tracking-wider leading-none">LUMINA</h1>
               <p className="text-[#a68a61] text-[9px] uppercase tracking-[0.2em] font-bold mt-1">Thai Massage & Spa</p>
            </div>
         </div>

         <div className="hidden lg:flex gap-8 text-[13px] font-bold text-[#4a3f35] uppercase tracking-wide">
            <span className="cursor-pointer text-[#d4af37] border-b-2 border-[#d4af37] pb-1">หน้าหลัก</span>
            <span className="cursor-pointer hover:text-[#d4af37] transition-colors">โปรโมชั่น</span>
            <span className="cursor-pointer hover:text-[#d4af37] transition-colors">เมนูสปา</span>
            <span className="cursor-pointer hover:text-[#d4af37] transition-colors">ผลิตภัณฑ์</span>
            <span className="cursor-pointer hover:text-[#d4af37] transition-colors">สาขาของเรา</span>
         </div>

         <button className="bg-[#d4af37] hover:bg-[#c29b2f] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
            จองคิวออนไลน์ (Book)
         </button>
      </nav>

      {/* Hero Banner (Commercial Promotion Style) */}
      <div className="relative w-full bg-[#30231c]">
         <div className="absolute inset-0 z-0">
            <img src="https://loremflickr.com/1920/800/spa,relax?lock=820" alt="Spa Banner" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#30231c] via-[#30231c]/80 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 lg:py-32 flex flex-col items-start">
            <div className="bg-[#d4af37] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
               Special Offer
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4 leading-tight">
               Relax & Rejuvenate <br/>
               <span className="text-[#d4af37]">Buy 1 Get 1 Free</span>
            </h2>
            <p className="text-[#e8dbce] text-sm lg:text-base max-w-lg mb-8 leading-relaxed">
               โปรโมชั่นพิเศษต้อนรับซัมเมอร์! เมื่อซื้อแพ็กเกจสปานวดน้ำมันอโรม่า 90 นาที รับฟรีทันที บริการนวดกดจุดฝ่าเท้า 45 นาที (ตั้งแต่วันนี้ - 30 มิ.ย.)
            </p>
            <div className="flex gap-4">
               <button className="bg-[#d4af37] hover:bg-white hover:text-[#453227] text-white px-8 py-3 font-bold uppercase text-sm tracking-wider transition-colors">
                  ซื้อ E-Voucher
               </button>
               <button className="border border-white text-white hover:bg-white hover:text-[#453227] px-8 py-3 font-bold uppercase text-sm tracking-wider transition-colors">
                  ดูรายละเอียด
               </button>
            </div>
         </div>
      </div>

      {/* Tabs (Packages vs A la carte) */}
      <div className="max-w-7xl mx-auto px-8 w-full -mt-8 relative z-20">
         <div className="bg-white rounded-xl shadow-xl flex overflow-hidden border border-[#e8dbce]">
            <button 
               onClick={() => setActiveTab('packages')}
               className={`flex-1 py-4 text-center font-bold uppercase text-sm tracking-widest transition-colors ${activeTab === 'packages' ? 'bg-[#453227] text-white' : 'bg-white text-[#8a7f76] hover:bg-[#faf8f5]'}`}
            >
               Spa Packages
            </button>
            <button 
               onClick={() => setActiveTab('alacarte')}
               className={`flex-1 py-4 text-center font-bold uppercase text-sm tracking-widest transition-colors ${activeTab === 'alacarte' ? 'bg-[#453227] text-white' : 'bg-white text-[#8a7f76] hover:bg-[#faf8f5]'}`}
            >
               Single Treatments
            </button>
         </div>
      </div>

      {/* Spa Packages Section */}
      <div className="py-20 px-8">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-serif text-[#453227] mb-2">Popular Packages</h3>
               <p className="text-[#8a7f76]">แพ็กเกจสปายอดฮิตที่ลูกค้าเลือกใช้บริการมากที่สุด</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {promotions.map(promo => (
                  <div key={promo.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-[#e8dbce] hover:shadow-xl transition-shadow group">
                     <div className="relative aspect-[3/2] overflow-hidden">
                        <img src={promo.img} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="p-6">
                        <h4 className="text-xl font-serif text-[#453227] mb-2 font-bold">{promo.title}</h4>
                        <p className="text-sm text-[#8a7f76] mb-6 h-10">{promo.desc}</p>
                        
                        <div className="flex items-end justify-between pt-4 border-t border-[#f0eee5]">
                           <div>
                              <p className="text-[11px] text-gray-400 line-through">{promo.oldPrice}</p>
                              <p className="text-2xl font-bold text-[#c29b2f]">{promo.price}</p>
                           </div>
                           <button className="text-[#453227] border border-[#453227] hover:bg-[#453227] hover:text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                              ซื้อเลย
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <button className="text-[#a68a61] font-bold uppercase tracking-widest hover:text-[#453227] transition-colors border-b border-[#a68a61] hover:border-[#453227] pb-1">
                  ดูแพ็กเกจทั้งหมด (View All)
               </button>
            </div>
         </div>
      </div>

      {/* Branches Section */}
      <div className="bg-[#453227] py-20 px-8 text-white relative">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h3 className="text-3xl font-serif text-[#d4af37] mb-2">Our Branches</h3>
                  <p className="text-[#e8dbce]">สาขาใกล้บ้านคุณ ให้บริการครอบคลุมทั้งกรุงเทพฯ และต่างจังหวัด</p>
               </div>
               <button className="bg-white/10 hover:bg-white text-white hover:text-[#453227] px-6 py-2 border border-white/30 transition-colors mt-4 md:mt-0 font-bold text-sm">
                  ค้นหาสาขาทั้งหมด
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {branches.map((branch, idx) => (
                  <div key={idx} className="bg-[#594235] p-5 border border-[#6b5243] hover:border-[#d4af37] transition-colors cursor-pointer group">
                     <p className="text-[#d4af37] text-[10px] uppercase tracking-widest font-bold mb-1">{branch.type}</p>
                     <h4 className="font-bold text-lg mb-4">{branch.name}</h4>
                     <div className="flex items-center gap-2 text-[#e8dbce] text-sm">
                        <svg className="w-4 h-4 text-[#a68a61]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {branch.status}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- NEW SECTION: Spa Gallery / Vibe --- */}
      <div className="py-24 bg-[#faf8f5]">
         <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-serif text-[#453227] mb-2">Serene Atmosphere</h3>
               <p className="text-[#8a7f76]">บรรยากาศผ่อนคลาย เงียบสงบ เป็นส่วนตัว ทุกสาขาของเรา</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                  "https://loremflickr.com/600/600/spa,interior?lock=831",
                  "https://loremflickr.com/600/600/spa,candles?lock=832",
                  "https://loremflickr.com/600/600/spa,flowers?lock=833",
                  "https://loremflickr.com/600/600/spa,tea?lock=834"
               ].map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={img} alt="Spa Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-[#453227]/0 group-hover:bg-[#453227]/30 transition-colors duration-300"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-[#30231c] text-[#e8dbce] pt-20 pb-10 border-t border-[#453227]">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-[#30231c]">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  </div>
                  <h1 className="text-xl font-serif font-bold text-white tracking-widest">LUMINA</h1>
               </div>
               <p className="text-sm text-[#8a7f76] mb-6 leading-relaxed">ค้นพบความสงบและผ่อนคลายอย่างแท้จริง ผ่านสัมผัสแห่งการนวดแผนไทยและการปรนนิบัติผิวชั้นเลิศ</p>
               <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-[#453227] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#30231c] hover:border-[#d4af37] transition-all">FB</button>
                  <button className="w-10 h-10 rounded-full border border-[#453227] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#30231c] hover:border-[#d4af37] transition-all">IG</button>
                  <button className="w-10 h-10 rounded-full border border-[#453227] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#30231c] hover:border-[#d4af37] transition-all">LINE</button>
               </div>
            </div>
            
            <div>
               <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Menu</h4>
               <ul className="space-y-3 text-sm text-[#a68a61]">
                  <li><a href="#" className="hover:text-white transition-colors">Thai Traditional Massage</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Aromatherapy Oil Massage</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Foot Reflexology</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Body Scrub & Wrap</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Customer Service</h4>
               <ul className="space-y-3 text-sm text-[#a68a61]">
                  <li><a href="#" className="hover:text-white transition-colors">Booking Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Spa Etiquette</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Gift Vouchers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Membership Benefits</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Stay Connected</h4>
               <p className="text-sm text-[#8a7f76] mb-4">รับโปรโมชั่นพิเศษเฉพาะสมาชิกและข่าวสารอัปเดต</p>
               <div className="flex border-b border-[#453227] pb-2">
                  <input type="email" placeholder="Your email..." className="bg-transparent border-none px-2 py-1 w-full text-white outline-none focus:ring-0 text-sm placeholder-[#8a7f76]" />
                  <button className="text-[#d4af37] font-bold px-4 hover:text-white transition-colors text-xs uppercase tracking-widest">Join</button>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-8 border-t border-[#453227] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8a7f76]">
            <p>© 2026 LUMINA THAI MASSAGE & SPA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-[#a68a61] transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-[#a68a61] transition-colors">Terms of Service</a>
            </div>
         </div>
      </footer>

    </div>
  );
}
