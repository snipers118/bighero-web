"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["หน้าแรก", "เมนูของเรา", "โปรโมชั่น", "เกี่ยวกับเรา"],
    heroTitle: "หอมกรุ่น อบใหม่ทุกวัน",
    heroSubtitle: "เพราะทุกๆ เช้าควรเริ่มต้นด้วยกาแฟดีๆ และขนมอบแสนอร่อย",
    cta: "สั่งเดลิเวอรี่เลย",
    storyTitle: "อบด้วยรัก ชงด้วยใจ",
    storyDesc: "The Daily Bake Cafe เริ่มต้นจากความหลงใหลในศิลปะการอบขนมปังฝรั่งเศส เราใช้วัตถุดิบนำเข้าชั้นดี ผสมผสานกับกาแฟ Specialty ที่คั่วอย่างพิถีพิถัน เพื่อให้ทุกคำของคุณมีความหมาย",
    categories: ["ครัวซองต์", "เค้ก", "เครื่องดื่ม", "อาหารเช้า"],
    bestsellerTitle: "เมนูยอดฮิต",
    bestseller: [
      { name: "Butter Croissant", desc: "ครัวซองต์เนยสดแท้ฝรั่งเศส กรอบนอกนุ่มใน", price: "฿85" },
      { name: "Matcha Latte", desc: "มัทฉะเกรดพรีเมียมจากอูจิ เข้มข้น หอมละมุน", price: "฿120" },
      { name: "Strawberry Shortcake", desc: "เค้กสตรอว์เบอร์รีเนื้อนุ่ม หวานน้อย ครีมสดแท้", price: "฿150" }
    ],
    promoTitle: "โปรโมชั่นสุดคุ้ม",
    promo: [
      { name: "Morning Set", desc: "กาแฟร้อน 1 แก้ว + ครัวซองต์", price: "฿150" },
      { name: "Afternoon Tea", desc: "เค้ก 2 ชิ้น + ชาร้อน 1 กา", price: "฿350" }
    ],
    footerDesc: "ร้านกาแฟและเบเกอรี่โฮมเมด สไตล์อบอุ่น",
    footerLinks: {
      "เวลาเปิดให้บริการ": ["จันทร์ - ศุกร์: 07:00 - 18:00", "เสาร์ - อาทิตย์: 08:00 - 19:00"],
      "ติดต่อสอบถาม": ["Line: @dailybake", "โทร: 081-xxx-xxxx", "อารีย์ ซอย 1, กรุงเทพฯ"]
    }
  },
  en: {
    nav: ["Home", "Our Menu", "Promotions", "About Us"],
    heroTitle: "Freshly Baked Daily",
    heroSubtitle: "Because every morning deserves good coffee and delicious pastries.",
    cta: "Order Delivery Now",
    storyTitle: "Baked with Love",
    storyDesc: "The Daily Bake Cafe started from a passion for French baking. We use premium imported ingredients and carefully roasted specialty coffee to make every bite count.",
    categories: ["Croissants", "Cakes", "Beverages", "Breakfast"],
    bestsellerTitle: "Our Bestsellers",
    bestseller: [
      { name: "Butter Croissant", desc: "Authentic French butter croissant, crispy and soft", price: "฿85" },
      { name: "Matcha Latte", desc: "Premium Uji matcha latte, rich and smooth", price: "฿120" },
      { name: "Strawberry Shortcake", desc: "Soft and fluffy strawberry shortcake, fresh cream", price: "฿150" }
    ],
    promoTitle: "Value Sets",
    promo: [
      { name: "Morning Set", desc: "1 Hot Coffee + Croissant", price: "฿150" },
      { name: "Afternoon Tea", desc: "2 Cakes + 1 Pot of Hot Tea", price: "฿350" }
    ],
    footerDesc: "Cozy homemade bakery and specialty coffee shop.",
    footerLinks: {
      "Opening Hours": ["Mon - Fri: 07:00 - 18:00", "Sat - Sun: 08:00 - 19:00"],
      "Contact": ["Line: @dailybake", "Tel: 081-xxx-xxxx", "Ari Soi 1, Bangkok"]
    }
  }
};

export default function RestaurantCafeDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#e8d5c4] font-sans min-h-[850px] flex flex-col bg-[#faf6f0] text-gray-800">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/70 backdrop-blur-md rounded-full p-1 border border-white">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-[#c19a6b] text-white' : 'text-gray-500 hover:bg-white'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-[#c19a6b] text-white' : 'text-gray-500 hover:bg-white'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-6 flex justify-between items-center bg-white/90 backdrop-blur-lg sticky top-0 z-40 border-b border-[#e8d5c4]/50 shadow-sm">
           <div className="text-3xl font-black tracking-tighter text-[#8b5a2b]">DailyBake.</div>
           <div className="hidden md:flex gap-8 font-medium">
              {t.nav.map((item, i) => (
                <span key={i} className="text-gray-600 hover:text-[#c19a6b] cursor-pointer transition-colors">{item}</span>
              ))}
           </div>
           <button className="hidden md:block px-6 py-2 border-2 border-[#c19a6b] text-[#c19a6b] rounded-full font-bold hover:bg-[#c19a6b] hover:text-white transition-colors">
              Login
           </button>
        </nav>

        {/* Hero */}
        <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto gap-16">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#f3e5d8] text-[#c19a6b] font-bold text-sm mb-6">☕ Specialty Coffee & Bakery</span>
            <h1 className="text-6xl md:text-7xl font-bold text-[#8b5a2b] mb-6 leading-tight">{t.heroTitle}</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-10 py-4 bg-[#c19a6b] text-white rounded-full font-bold hover:bg-[#a67c52] transition-all shadow-xl shadow-[#c19a6b]/30 hover:-translate-y-1">
                {t.cta}
              </button>
              <button className="px-10 py-4 bg-white text-[#8b5a2b] rounded-full font-bold hover:bg-gray-50 transition-all border border-[#e8d5c4]">
                {lang === 'th' ? 'ดูเมนู' : 'View Menu'}
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[500px]">
             <div className="absolute inset-0 bg-[#e8d5c4] rounded-full blur-3xl opacity-50 scale-125 -z-10"></div>
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" alt="Cafe" className="w-full h-full object-cover rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" />
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="text-4xl">🥐</div>
                <div>
                  <div className="font-bold text-[#8b5a2b]">Fresh Baked</div>
                  <div className="text-sm text-gray-500">Every morning</div>
                </div>
             </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-24 px-10 bg-[#f4ebd9]">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-4xl font-bold text-[#8b5a2b] mb-6">{t.storyTitle}</h2>
             <p className="text-lg text-gray-700 leading-loose">{t.storyDesc}</p>
           </div>
        </div>

        {/* Bestsellers */}
        <div className="py-24 px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-[#8b5a2b] mb-4">{t.bestsellerTitle}</h2>
                <div className="flex gap-4">
                  {t.categories.map((cat, i) => (
                    <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'bg-[#c19a6b] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {t.bestseller.map((item, i) => (
                <div key={i} className="bg-[#faf6f0] p-10 rounded-[32px] text-center group hover:-translate-y-3 transition-transform duration-500 border border-[#e8d5c4]/50">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 shadow-md flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {i === 0 ? "🥐" : i === 1 ? "🍵" : "🍰"}
                  </div>
                  <h3 className="text-2xl font-bold text-[#8b5a2b] mb-3">{item.name}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">{item.desc}</p>
                  <div className="text-2xl font-black text-[#c19a6b]">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promotions */}
        <div className="py-24 px-10 bg-[#8b5a2b] text-[#faf6f0]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">{t.promoTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {t.promo.map((promo, i) => (
                 <div key={i} className="bg-white/10 p-10 rounded-[32px] border border-white/20 hover:bg-white/20 transition-colors">
                   <h3 className="text-3xl font-bold mb-4">{promo.name}</h3>
                   <p className="text-white/80 mb-8 text-lg">{promo.desc}</p>
                   <div className="text-4xl font-black">{promo.price}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white pt-20 pb-10 px-10 border-t border-[#e8d5c4] mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
             <div className="md:col-span-2">
                <div className="text-4xl font-black tracking-tighter text-[#8b5a2b] mb-6">DailyBake.</div>
                <p className="text-gray-600 mb-8 max-w-sm">{t.footerDesc}</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#c19a6b]">FB</div>
                  <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#c19a6b]">IG</div>
                </div>
             </div>
             {Object.entries(t.footerLinks).map(([title, links], idx) => (
               <div key={idx}>
                 <h4 className="font-bold text-[#8b5a2b] mb-6 text-lg">{title}</h4>
                 <ul className="space-y-4">
                   {links.map((link, i) => (
                     <li key={i} className="text-gray-600">{link}</li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
          <div className="border-t border-[#e8d5c4]/50 pt-8 text-center text-gray-400 text-sm">
             © 2026 The Daily Bake Cafe.
          </div>
        </footer>
      </div>
    </div>
  );
}
