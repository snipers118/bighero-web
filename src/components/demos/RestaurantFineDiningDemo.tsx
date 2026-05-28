"use client";

import { useState } from "react";

const content = {
  th: {
    nav: ["หน้าแรก", "ปรัชญา", "เมนู & ไวน์", "แพ็กเกจคอร์ส", "จองโต๊ะ"],
    heroTitle: "L'ÉLÉGANCE",
    heroSubtitle: "สัมผัสประสบการณ์อาหารฝรั่งเศสชั้นสูง ใจกลางกรุงเทพฯ",
    cta: "สำรองที่นั่ง",
    philosophyTitle: "ศิลปะแห่งรสชาติ",
    philosophyDesc: "ที่ L'ÉLÉGANCE เราเชื่อว่าอาหารคือศิลปะที่สัมผัสได้ วัตถุดิบทุกชิ้นถูกคัดสรรอย่างพิถีพิถันจากแหล่งที่ดีที่สุดทั่วโลก รังสรรค์โดยเชฟระดับมิชลินสตาร์ 3 ดาว เพื่อมอบประสบการณ์ที่ไม่มีวันลืม",
    menuTitle: "Signature Menu",
    menu: [
      { name: "Foie Gras Terrine", desc: "ตับห่านเทอร์รีนเสิร์ฟพร้อมขนมปังบริยอช และแยมลูกฟิก", price: "฿950" },
      { name: "Lobster Bisque", desc: "ซุปข้นล็อบสเตอร์ หอมกรุ่นกลิ่นบรั่นดีและพาร์สลีย์", price: "฿650" },
      { name: "Wagyu Beef Rossini", desc: "สเต็กเนื้อวากิว เสิร์ฟพร้อมตับห่านและซอสทรัฟเฟิล", price: "฿2,800" },
      { name: "Duck Confit", desc: "น่องเป็ดกงฟีต์หนังกรอบ เนื้อนุ่ม เสิร์ฟกับมันบดทรัฟเฟิล", price: "฿1,200" }
    ],
    packagesTitle: "Tasting Menu & Wine Pairing",
    packages: [
      { name: "Découverte (5 Courses)", price: "฿3,500++", desc: "การเดินทางแห่งรสชาติสำหรับผู้เริ่มต้นสัมผัส Fine Dining", features: ["Amuse-Bouche", "Appetizer 1 อย่าง", "Main Course 1 อย่าง", "Pre-Dessert", "Dessert"] },
      { name: "Prestige (7 Courses)", price: "฿5,500++", desc: "ประสบการณ์เต็มรูปแบบ รังสรรค์จากวัตถุดิบที่ดีที่สุดตามฤดูกาล", features: ["Amuse-Bouche", "Appetizer 2 อย่าง", "Fish Course", "Meat Course", "Pre-Dessert", "Signature Dessert"] }
    ],
    galleryTitle: "บรรยากาศร้าน",
    testimonialsTitle: "ความประทับใจจากแขกของเรา",
    testimonials: [
      { text: "เป็นการฉลองครบรอบแต่งงานที่สมบูรณ์แบบที่สุด อาหารอร่อย บริการไร้ที่ติ", author: "คุณวิชญ์" },
      { text: "Wagyu Rossini คือที่สุดของความนุ่มละมุน ไวน์ที่ Sommelier แนะนำเข้ากันได้ดีมาก", author: "คุณพิมรตา" }
    ],
    footerDesc: "L'ÉLÉGANCE Fine Dining ร้านอาหารฝรั่งเศสระดับไฮเอนด์ที่มอบประสบการณ์เหนือระดับ",
    footerLinks: {
      "เวลาเปิดให้บริการ": ["อังคาร - อาทิตย์", "Dinner: 17:30 - 23:00", "ปิดทุกวันจันทร์"],
      "ติดต่อเรา": ["โทร: +66 2 123 4567", "อีเมล: rsvn@lelegance.com", "สุขุมวิท 55, กรุงเทพฯ"]
    }
  },
  en: {
    nav: ["Home", "Philosophy", "Menu & Wine", "Course Packages", "Reservation"],
    heroTitle: "L'ÉLÉGANCE",
    heroSubtitle: "Experience Haute French Cuisine in the Heart of Bangkok",
    cta: "Book a Table",
    philosophyTitle: "The Art of Taste",
    philosophyDesc: "At L'ÉLÉGANCE, we believe food is tangible art. Every ingredient is meticulously sourced globally and crafted by our 3-Michelin-starred chef for an unforgettable experience.",
    menuTitle: "Signature Menu",
    menu: [
      { name: "Foie Gras Terrine", desc: "Foie gras terrine served with brioche and fig jam", price: "฿950" },
      { name: "Lobster Bisque", desc: "Creamy lobster bisque infused with brandy", price: "฿650" },
      { name: "Wagyu Beef Rossini", desc: "Wagyu steak topped with foie gras and truffle sauce", price: "฿2,800" },
      { name: "Duck Confit", desc: "Crispy duck confit with truffle mashed potatoes", price: "฿1,200" }
    ],
    packagesTitle: "Tasting Menu & Wine Pairing",
    packages: [
      { name: "Découverte (5 Courses)", price: "฿3,500++", desc: "A journey of flavors for Fine Dining beginners", features: ["Amuse-Bouche", "1 Appetizer", "1 Main Course", "Pre-Dessert", "Dessert"] },
      { name: "Prestige (7 Courses)", price: "฿5,500++", desc: "The full experience, crafted from the finest seasonal ingredients", features: ["Amuse-Bouche", "2 Appetizers", "Fish Course", "Meat Course", "Pre-Dessert", "Signature Dessert"] }
    ],
    galleryTitle: "Atmosphere",
    testimonialsTitle: "Guest Impressions",
    testimonials: [
      { text: "The most perfect anniversary celebration. Exquisite food, flawless service.", author: "Mr. Wich" },
      { text: "The Wagyu Rossini melts in your mouth. The Sommelier's wine pairing was spot on.", author: "Ms. Pimrata" }
    ],
    footerDesc: "L'ÉLÉGANCE Fine Dining, a high-end French restaurant offering an unparalleled experience.",
    footerLinks: {
      "Opening Hours": ["Tue - Sun", "Dinner: 17:30 - 23:00", "Closed on Mondays"],
      "Contact": ["Tel: +66 2 123 4567", "Email: rsvn@lelegance.com", "Sukhumvit 55, Bangkok"]
    }
  }
};

export default function RestaurantFineDiningDemo() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const t = content[lang];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#D4AF37]/30 font-serif min-h-[850px] flex flex-col bg-[#0a0a0a] text-white">
      {/* Demo Controls Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 font-sans">
        <button onClick={() => setLang("th")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "th" ? 'bg-[#D4AF37] text-black' : 'text-white hover:bg-white/20'}`}>TH</button>
        <button onClick={() => setLang("en")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === "en" ? 'bg-[#D4AF37] text-black' : 'text-white hover:bg-white/20'}`}>EN</button>
      </div>

      <div className="relative z-10 flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        {/* Navbar */}
        <nav className="px-10 py-6 flex justify-between items-center bg-black/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#D4AF37]/20">
           <div className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#D4AF37]">L'ÉLÉGANCE</div>
           <div className="hidden md:flex gap-8">
              {t.nav.map((item, i) => (
                <span key={i} className="text-sm tracking-widest text-gray-400 hover:text-[#D4AF37] cursor-pointer transition-colors uppercase">{item}</span>
              ))}
           </div>
        </nav>

        {/* Hero */}
        <div className="relative h-[800px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 hover:scale-100 transition-transform duration-[10s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent"></div>
          <div className="relative z-10 max-w-4xl px-6">
            <h1 className="text-7xl md:text-9xl font-bold tracking-[0.3em] text-[#D4AF37] mb-8 drop-shadow-2xl">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-widest font-light uppercase">{t.heroSubtitle}</p>
            <button className="px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 uppercase tracking-[0.3em] text-sm">
              {t.cta}
            </button>
          </div>
        </div>

        {/* Philosophy */}
        <div className="py-32 px-6 bg-[#0f0f0f] relative">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="w-px h-24 bg-[#D4AF37] mx-auto mb-10"></div>
            <h2 className="text-4xl md:text-5xl text-[#D4AF37] mb-8 tracking-widest uppercase">{t.philosophyTitle}</h2>
            <p className="text-lg text-gray-400 font-light leading-loose tracking-wide">{t.philosophyDesc}</p>
          </div>
        </div>

        {/* Course Packages */}
        <div className="py-24 px-6 bg-black relative border-y border-[#D4AF37]/10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl text-[#D4AF37] tracking-widest uppercase">{t.packagesTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t.packages.map((pkg, i) => (
                <div key={i} className="border border-[#D4AF37]/30 p-12 text-center bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-[#D4AF37] transition-colors duration-500">
                  <h3 className="text-3xl text-gray-200 mb-4">{pkg.name}</h3>
                  <div className="text-2xl text-[#D4AF37] mb-6">{pkg.price}</div>
                  <p className="text-gray-500 mb-8 font-light italic">{pkg.desc}</p>
                  <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto mb-8"></div>
                  <ul className="space-y-4 font-sans font-light text-sm text-gray-400 uppercase tracking-widest">
                    {pkg.features.map((feat, j) => (
                      <li key={j}>{feat}</li>
                    ))}
                  </ul>
                  <button className="mt-12 px-8 py-3 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37] transition-all tracking-widest text-xs uppercase">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Menu */}
        <div className="py-32 px-6 bg-[#0f0f0f]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl text-[#D4AF37] mb-4 tracking-widest uppercase">{t.menuTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
              {t.menu.map((item, i) => (
                <div key={i} className="flex flex-col group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl text-gray-200 group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-gray-700/50 mx-4 relative top-[-6px]"></div>
                    <div className="text-xl text-[#D4AF37]">{item.price}</div>
                  </div>
                  <p className="text-gray-500 font-sans font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-24 px-6 bg-black text-center">
          <h2 className="text-3xl text-[#D4AF37] tracking-widest mb-16 uppercase">{t.testimonialsTitle}</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
             {t.testimonials.map((test, i) => (
               <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                 <div className="text-[#D4AF37] text-4xl mb-4 font-serif">"</div>
                 <p className="text-gray-400 italic font-light leading-relaxed mb-6">"{test.text}"</p>
                 <div className="text-[#D4AF37] tracking-wider">— {test.author}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Full Footer */}
        <footer className="bg-[#050505] pt-20 pb-10 px-10 border-t border-[#D4AF37]/20 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
            <div>
              <div className="text-3xl font-bold tracking-[0.2em] text-[#D4AF37] mb-6">L'ÉLÉGANCE</div>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">{t.footerDesc}</p>
            </div>
            {Object.entries(t.footerLinks).map(([title, links], idx) => (
              <div key={idx} className="font-sans">
                <h4 className="text-white mb-6 uppercase tracking-widest text-sm">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link, i) => (
                    <li key={i} className="text-gray-500 text-sm font-light">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-600 text-xs font-sans tracking-widest uppercase">
            © 2026 L'ÉLÉGANCE. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
