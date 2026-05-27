"use client";

import { useState } from "react";

const content = {
  en: {
    location: "Koh Kood, Trat, Thailand",
    subtitle: "Beachfront Resort",
    nav: ["Home", "Villas & Suites", "Dining", "Wellness", "Experiences"],
    bookBtn: "Book Now",
    heroPre: "Welcome to Paradise",
    heroTitle1: "A Sanctuary of",
    heroTitle2: "Serenity & Sand",
    checkin: "Check-in",
    checkout: "Check-out",
    guests: "Guests",
    checkAvail: "Check Availability",
    introTitle: "Discover the Azure Sands",
    introDesc: "Escape the chaos and relax on the fine white sands and crystal-clear waters at Azure Sands Resort. Experience ultimate tranquility and privacy, with meticulous attention to detail to make your holiday truly unforgettable.",
    accPre: "Our Accommodations",
    accTitle: "Luxurious Stays",
    viewDetails: "View Details",
    startsFrom: "Starts from",
    perNight: "/ night",
    rooms: [
      { 
        id: 1, title: "Oceanfront Pool Villa", size: "120 sqm", guests: "2 Adults", price: "฿ 12,500", 
        img: "https://loremflickr.com/800/600/resort,pool,ocean?lock=701", 
        features: ["Private Infinity Pool", "Ocean View", "Butler Service"]
      },
      { 
        id: 2, title: "Beachfront Suite", size: "85 sqm", guests: "2 Adults, 1 Child", price: "฿ 8,900", 
        img: "https://loremflickr.com/800/600/hotel,room,beach?lock=702", 
        features: ["Direct Beach Access", "Outdoor Bathtub", "Premium Minibar"]
      },
      { 
        id: 3, title: "Tropical Garden Pavilion", size: "65 sqm", guests: "2 Adults", price: "฿ 5,500", 
        img: "https://loremflickr.com/800/600/resort,garden?lock=703", 
        features: ["Lush Garden View", "Rain Shower", "Private Balcony"]
      }
    ]
  },
  th: {
    location: "เกาะกูด, ตราด, ประเทศไทย",
    subtitle: "รีสอร์ทริมชายหาด",
    nav: ["หน้าแรก", "วิลล่าและห้องพัก", "ห้องอาหาร", "สปาพักผ่อน", "กิจกรรม"],
    bookBtn: "จองห้องพัก",
    heroPre: "ยินดีต้อนรับสู่สรวงสวรรค์",
    heroTitle1: "สถานที่หลบภัยแห่ง",
    heroTitle2: "ความสงบและผืนทราย",
    checkin: "เช็คอิน",
    checkout: "เช็คเอาท์",
    guests: "ผู้เข้าพัก",
    checkAvail: "ตรวจสอบห้องว่าง",
    introTitle: "ค้นพบความงามที่ อซัวร์ แซนด์",
    introDesc: "หลบหนีความวุ่นวายมาพักผ่อนริมหาดทรายขาวละเอียดและน้ำทะเลสีฟ้าใสที่ อซัวร์ แซนด์ รีสอร์ท สัมผัสความสงบและความเป็นส่วนตัวเหนือระดับ พร้อมบริการที่ใส่ใจในทุกรายละเอียด เพื่อให้วันหยุดของคุณเป็นที่น่าจดจำที่สุด",
    accPre: "ห้องพักของเรา",
    accTitle: "การพักผ่อนเหนือระดับ",
    viewDetails: "ดูรายละเอียด",
    startsFrom: "เริ่มต้น",
    perNight: "/ คืน",
    rooms: [
      { 
        id: 1, title: "โอเชียนฟร้อนท์ พูลวิลล่า", size: "120 ตร.ม.", guests: "ผู้ใหญ่ 2", price: "฿ 12,500", 
        img: "https://loremflickr.com/800/600/resort,pool,ocean?lock=701", 
        features: ["สระว่ายน้ำไร้ขอบส่วนตัว", "วิวทะเลแบบพาโนรามา", "บริการบัตเลอร์"]
      },
      { 
        id: 2, title: "บีชฟร้อนท์ สวีท", size: "85 ตร.ม.", guests: "ผู้ใหญ่ 2, เด็ก 1", price: "฿ 8,900", 
        img: "https://loremflickr.com/800/600/hotel,room,beach?lock=702", 
        features: ["ทางลงหาดส่วนตัว", "อ่างอาบน้ำกลางแจ้ง", "มินิบาร์พรีเมียม"]
      },
      { 
        id: 3, title: "ทรอปิคอล การ์เด้น พาวิลเลียน", size: "65 ตร.ม.", guests: "ผู้ใหญ่ 2", price: "฿ 5,500", 
        img: "https://loremflickr.com/800/600/resort,garden?lock=703", 
        features: ["วิวสวนร่มรื่น", "เรนชาวเวอร์", "ระเบียงส่วนตัว"]
      }
    ]
  }
};

export default function HotelDemo() {
  const [lang, setLang] = useState<"en" | "th">("en");
  const t = content[lang];
  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-200 bg-[#faf9f6] flex flex-col min-h-[850px] animate-fade-in-up font-sans text-gray-800 transition-colors duration-500">
      
      {/* Top Bar */}
      <div className="bg-[#112233] text-[#d4af37] text-[10px] uppercase tracking-[0.2em] py-2 px-8 flex justify-between items-center hidden md:flex">
         <div className="flex gap-6">
            <span>{t.location}</span>
            <span>+66 39 123 456</span>
         </div>
         <div className="flex gap-4 font-bold">
            <span 
              onClick={() => setLang("en")} 
              className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-white' : 'hover:text-white'}`}
            >
              EN
            </span>
            <span className="text-gray-600">|</span>
            <span 
              onClick={() => setLang("th")} 
              className={`cursor-pointer transition-colors ${lang === 'th' ? 'text-white' : 'hover:text-white'}`}
            >
              TH
            </span>
         </div>
      </div>

      {/* Navigation (Transparent over Hero) */}
      <nav className="absolute top-0 w-full px-8 lg:px-16 py-6 flex justify-between items-center z-50">
         <div className="text-white text-center">
            <h1 className="text-2xl md:text-3xl font-serif italic tracking-wider">Azure Sands</h1>
            <p className="text-[9px] uppercase tracking-[0.3em] font-light mt-1">{t.subtitle}</p>
         </div>

         <div className="hidden lg:flex gap-10 text-[12px] uppercase tracking-widest font-medium text-white/90">
            {t.nav.map((item, idx) => (
               <span key={idx} className={`cursor-pointer transition-colors ${idx === 0 ? 'border-b border-white text-white' : 'hover:text-white'}`}>
                  {item}
               </span>
            ))}
         </div>

         <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#112233] text-white px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all duration-300">
            {t.bookBtn}
         </button>
      </nav>

      {/* Hero Section (Full Beach View) */}
      <div className="relative h-[700px] w-full flex items-center justify-center flex-col">
         {/* Background Image: Peaceful White Sand Beach */}
         <div className="absolute inset-0 z-0">
            <img src="https://loremflickr.com/1920/1080/beach,whitesand,peaceful?lock=700" alt="Peaceful White Sand Beach" className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]" />
            {/* Elegant dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
         </div>
         
         <div className="relative z-10 text-center px-4 mt-20">
            <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium animate-fade-in-up">{t.heroPre}</p>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg leading-tight animate-fade-in-up" style={{animationDelay: '150ms'}}>
               {t.heroTitle1}<br/>
               <span className="italic font-light">{t.heroTitle2}</span>
            </h2>
         </div>

         {/* Booking Widget (Floating) */}
         <div className="absolute -bottom-10 lg:-bottom-12 w-[90%] max-w-5xl bg-white shadow-2xl z-20 flex flex-col md:flex-row border border-gray-100 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
               <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{t.checkin}</p>
               <p className="text-lg font-serif text-[#112233]">28 May 2026</p>
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
               <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{t.checkout}</p>
               <p className="text-lg font-serif text-[#112233]">30 May 2026</p>
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
               <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{t.guests}</p>
               <p className="text-lg font-serif text-[#112233]">{lang === 'th' ? 'ผู้ใหญ่ 2, เด็ก 0' : '2 Adults, 0 Children'}</p>
            </div>
            <button className="bg-[#112233] hover:bg-[#d4af37] text-white flex-1 p-6 md:p-0 flex items-center justify-center text-sm uppercase tracking-widest font-bold transition-colors duration-300 min-h-[80px]">
               {t.checkAvail}
            </button>
         </div>
      </div>

      {/* Intro Section */}
      <div className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
         <h3 className="text-3xl font-serif text-[#112233] mb-6">{t.introTitle}</h3>
         <div className="w-12 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
         <p className="text-gray-500 leading-relaxed font-light">
            {t.introDesc}
         </p>
      </div>

      {/* Accommodations Grid */}
      <div className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
         <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
               <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{t.accPre}</p>
               <h3 className="text-4xl font-serif text-[#112233]">{t.accTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {t.rooms.map(room => (
                  <div key={room.id} className="group cursor-pointer">
                     {/* Image Container with Zoom effect */}
                     <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                        <img 
                           src={room.img} 
                           alt={room.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                           <span className="text-white border border-white px-6 py-2 text-[10px] uppercase tracking-widest backdrop-blur-sm">{t.viewDetails}</span>
                        </div>
                     </div>
                     
                     {/* Content */}
                     <div className="text-center px-4">
                        <h4 className="text-xl font-serif text-[#112233] mb-3">{room.title}</h4>
                        <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                           <span>{room.size}</span>
                           <span>|</span>
                           <span>{room.guests}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-light mb-4">{room.features.join(" • ")}</p>
                        <p className="text-[#d4af37] font-serif italic text-lg">{t.startsFrom} {room.price} <span className="text-gray-400 font-sans not-italic text-[10px] uppercase tracking-normal">{t.perNight}</span></p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
}
