"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["โปรโมชั่น", "เมนูบุฟเฟ่ต์", "สาขา", "จองคิว"],
    badge: "🔥 โปรโมชั่นมาแรง เดือนนี้เท่านั้น!",
    heroTitle: "อร่อยไม่อั้น จัดเต็มทุกเมนู",
    heroSubtitle: "บุฟเฟ่ต์ชาบู-ปิ้งย่าง พรีเมียม เนื้อวากิว ซีฟู้ดจัดเต็ม ทานได้ไม่อั้น 2 ชั่วโมงเต็ม",
    cta: "ดูราคาและโปรโมชั่น",
    whyTitle: "ทำไมต้อง FIRE GRILL?",
    why: [
      { title: "เนื้อวากิวแท้ 100%", desc: "คัดสรรเนื้อคุณภาพพรีเมียม ลายหินอ่อนละลายในปาก", icon: "🥩" },
      { title: "ซีฟู้ดสดใหม่", desc: "กุ้งแม่น้ำตัวโต ปลาหมึก หอยเชลล์ ส่งตรงจากทะเล", icon: "🦐" },
      { title: "น้ำจิ้มสูตรเด็ด", desc: "น้ำจิ้มสุกี้รสจัดจ้าน และซีฟู้ดสุดแซ่บ สูตรลับเฉพาะ", icon: "🌶️" }
    ],
    pricingTitle: "ราคาแพ็กเกจ",
    pricing: [
      { name: "Standard", price: "฿399", desc: "หมูสไลซ์, ไก่, ลูกชิ้น, ผักสด, น้ำรีฟิล", popular: false },
      { name: "Premium", price: "฿599", desc: "เพิ่มเนื้อออสเตรเลีย, กุ้งแม่น้ำ, แซลมอน, ชีสไม่อั้น", popular: true },
      { name: "Gold", price: "฿899", desc: "เพิ่มเนื้อวากิว A4, หอยเชลล์โฮตาเตะ, ไอศกรีมพรีเมียม", popular: false }
    ],
    promoTitle: "HOT PROMOTION",
    promos: [
      { title: "มา 4 จ่าย 3", desc: "เฉพาะแพ็กเกจ Premium และ Gold ทุกวันจันทร์-ศุกร์" },
      { title: "Member ลด 10%", desc: "สมัครสมาชิกฟรีวันนี้ รับส่วนลดทันที 10% ทุกรอบบิล" }
    ],
    footerDesc: "สุดยอดประสบการณ์บุฟเฟ่ต์ปิ้งย่าง-ชาบู ที่สายกินต้องไม่พลาด",
    footerLinks: {
      "สาขาของเรา": ["สาขาลาดพร้าว", "สาขาบางนา", "สาขาปิ่นเกล้า", "สาขาสยามสแควร์"],
      "นโยบาย": ["เงื่อนไขโปรโมชั่น", "นโยบายความเป็นส่วนตัว", "ติดต่อเรา"]
    }
  },
  en: {
    nav: ["Promotions", "Buffet Menu", "Branches", "Book a Queue"],
    badge: "🔥 Hot Promotion This Month Only!",
    heroTitle: "All You Can Eat, Premium Quality",
    heroSubtitle: "Premium Shabu & Grill Buffet. Wagyu beef, fresh seafood. 2 Full Hours.",
    cta: "View Pricing & Promos",
    whyTitle: "Why FIRE GRILL?",
    why: [
      { title: "100% Authentic Wagyu", desc: "Premium marble beef that melts in your mouth.", icon: "🥩" },
      { title: "Fresh Seafood", desc: "River prawns, squid, scallops straight from the sea.", icon: "🦐" },
      { title: "Signature Sauces", desc: "Spicy suki sauce and zesty seafood sauce.", icon: "🌶️" }
    ],
    pricingTitle: "Buffet Packages",
    pricing: [
      { name: "Standard", price: "฿399", desc: "Sliced pork, chicken, meatballs, veggies, free-flow drinks", popular: false },
      { name: "Premium", price: "฿599", desc: "Adds Aussie Beef, River Prawns, Salmon, Unlimited Cheese", popular: true },
      { name: "Gold", price: "฿899", desc: "Adds Wagyu A4, Hotate Scallops, Premium Ice Cream", popular: false }
    ],
    promoTitle: "HOT PROMOTION",
    promos: [
      { title: "Come 4 Pay 3", desc: "For Premium and Gold packages. Mon-Fri only." },
      { title: "10% Member Discount", desc: "Sign up for free today and get 10% off instantly." }
    ],
    footerDesc: "The ultimate BBQ & Shabu buffet experience.",
    footerLinks: {
      "Our Branches": ["Ladprao Branch", "Bangna Branch", "Pinklao Branch", "Siam Square"],
      "Policies": ["Promotion Terms", "Privacy Policy", "Contact Us"]
    }
  }
};

export default function RestaurantBuffetDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-red-900 font-sans min-h-[850px] flex flex-col bg-[#0a0503] text-white">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-red-500/30">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-5 flex justify-between items-center bg-[#0a0503]/95 backdrop-blur-md sticky top-0 z-40 border-b border-red-900/50">
           <div className="text-3xl font-black text-red-600 italic tracking-tight">FIRE<span className="text-orange-500">GRILL</span></div>
           <div className="hidden md:flex gap-8 font-bold text-sm">
              {t.nav.map((item, i) => (
                <span key={i} className="text-gray-300 hover:text-red-500 cursor-pointer transition-colors uppercase">{item}</span>
              ))}
           </div>
           <button className="hidden md:block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
              Reservation
           </button>
        </nav>

        {/* Hero */}
        <div className="relative py-32 px-6 text-center overflow-hidden border-b border-red-900/50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-[#0a0503]/60 to-transparent"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto mt-10">
            <span className="inline-block py-2 px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold rounded-full mb-8 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              {t.badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 mb-8 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] uppercase">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-12 font-semibold max-w-3xl mx-auto">{t.heroSubtitle}</p>
            <div className="flex gap-4 justify-center">
               <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl font-black text-lg uppercase hover:scale-105 transition-transform shadow-[0_0_40px_rgba(239,68,68,0.5)]">
                 {t.cta}
               </button>
            </div>
          </div>
        </div>

        {/* Features / Why Us */}
        <div className="py-24 px-10 bg-[#0f0705]">
           <div className="max-w-6xl mx-auto">
             <h2 className="text-4xl font-black text-center text-white mb-16 uppercase tracking-wider">{t.whyTitle}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {t.why.map((item, i) => (
                  <div key={i} className="text-center p-8 bg-[#1a0f0a] rounded-3xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>

        {/* Pricing */}
        <div className="py-24 px-10 relative z-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] bg-black">
          <h2 className="text-5xl font-black text-center text-white mb-20 uppercase tracking-widest">{t.pricingTitle}</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.map((plan, i) => (
              <div key={i} className={`relative p-10 rounded-3xl border ${plan.popular ? 'bg-gradient-to-b from-red-900/40 to-[#0a0503] border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] scale-105 z-10' : 'bg-[#120905] border-red-900/30'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-lg">
                    Best Value
                  </div>
                )}
                <h3 className={`text-3xl font-black mb-4 ${plan.popular ? 'text-red-500' : 'text-white'}`}>{plan.name}</h3>
                <div className="text-5xl font-bold text-white mb-8">{plan.price}<span className="text-lg text-gray-500 font-normal">/net</span></div>
                <div className="h-px w-full bg-red-900/50 mb-8"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 min-h-[80px]">{plan.desc}</p>
                <button className={`w-full py-4 rounded-xl font-bold text-lg uppercase transition-all ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[#1a0f0a] hover:bg-red-900/50 text-red-500 border border-red-900'}`}>
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions Banner */}
        <div className="py-24 px-10 bg-gradient-to-r from-red-900 to-orange-900">
           <div className="max-w-5xl mx-auto text-center">
             <h2 className="text-4xl font-black text-white mb-12 uppercase">{t.promoTitle}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {t.promos.map((promo, i) => (
                 <div key={i} className="bg-black/30 p-10 rounded-3xl border border-white/20 backdrop-blur-sm">
                   <h3 className="text-3xl font-bold text-yellow-400 mb-4">{promo.title}</h3>
                   <p className="text-white text-lg">{promo.desc}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#050201] pt-20 pb-10 px-10 border-t border-red-900 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
             <div>
                <div className="text-4xl font-black text-red-600 italic tracking-tight mb-6">FIRE<span className="text-orange-500">GRILL</span></div>
                <p className="text-gray-500 leading-relaxed mb-8">{t.footerDesc}</p>
             </div>
             {Object.entries(t.footerLinks).map(([title, links], idx) => (
               <div key={idx}>
                 <h4 className="font-bold text-white mb-6 text-lg uppercase">{title}</h4>
                 <ul className="space-y-4">
                   {links.map((link, i) => (
                     <li key={i} className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors">{link}</li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="text-center text-gray-600 font-bold">
             © 2026 FIRE GRILL BUFFET.
          </div>
        </footer>
      </div>
    </div>
  );
}
