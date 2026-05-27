"use client";

import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "เบญจรงค์ลายคราม (Royal Benjarong)", price: 8500, img: "https://loremflickr.com/600/800/pottery,craft?lock=71", type: "product" },
  { id: 2, name: "ผ้าไหมทอมือ (Handwoven Thai Silk)", price: 12900, img: "https://loremflickr.com/600/800/silk,fabric?lock=72", type: "product" },
  { id: 3, name: "งานแกะสลักไม้สัก (Teak Wood Carving)", price: 15000, img: "https://loremflickr.com/600/800/woodcarving,art?lock=73", type: "product" },
];

const services = [
  { id: 4, name: "คอร์สเรียนรำไทย (Traditional Dance Class)", price: 2500, img: "https://loremflickr.com/600/800/dance,culture?lock=74", type: "service", duration: "2 Hours" },
  { id: 5, name: "เวิร์กชอปทำเครื่องปั้นดินเผา (Pottery Workshop)", price: 1800, img: "https://loremflickr.com/600/800/clay,pottery?lock=75", type: "service", duration: "3 Hours" },
  { id: 6, name: "บริการจัดแสดงศิลปวัฒนธรรม (Cultural Show Booking)", price: 35000, img: "https://loremflickr.com/600/800/performance,traditional?lock=76", type: "service", duration: "Event" },
];

export default function CultureDemo() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect listener
  useEffect(() => {
    const handleScroll = (e: any) => {
      // In a real app we'd use window.scrollY, but this demo is contained in a div
      setScrollY(e.target.scrollTop);
    };
    
    const container = document.getElementById('culture-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#d4af37]/20 bg-[#faf8f5] font-serif flex flex-col h-[850px] animate-fade-in-up">
      
      {/* Navigation - Elegant & Transparent */}
      <nav className={`absolute top-0 w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${scrollY > 50 ? 'bg-[#faf8f5]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-white'}`}>
        <div className={`text-2xl tracking-widest ${scrollY > 50 ? 'text-[#3e2723]' : 'text-white'}`}>
          HERITAGE<span className="font-light">CRAFT</span>
        </div>
        <div className={`hidden md:flex gap-10 tracking-widest text-xs uppercase ${scrollY > 50 ? 'text-[#5d4037]' : 'text-white/90'}`}>
          <span className="cursor-pointer hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1">วิถีไทย (Heritage)</span>
          <span className="cursor-pointer hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1">หัตถศิลป์ (Products)</span>
          <span className="cursor-pointer hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1">ประสบการณ์ (Services)</span>
        </div>
        <div className="flex gap-4">
          <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrollY > 50 ? 'bg-[#3e2723] text-[#d4af37] hover:bg-[#d4af37] hover:text-white' : 'bg-white/20 hover:bg-white text-[#d4af37] backdrop-blur'}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </button>
        </div>
      </nav>

      {/* Scrollable Container */}
      <div id="culture-scroll-container" className="flex-1 overflow-y-auto scroll-smooth">
        
        {/* BIG BEAUTIFUL BANNER (Hero Section with Parallax) */}
        <div className="relative h-[700px] overflow-hidden flex items-center justify-center">
           {/* Parallax Background */}
           <div 
             className="absolute inset-0 z-0"
             style={{ transform: `translateY(${scrollY * 0.5}px)` }}
           >
              <img src="https://loremflickr.com/1600/900/temple,gold,culture?lock=100" alt="Cultural Heritage" className="w-full h-full object-cover" />
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#faf8f5]"></div>
           </div>
           
           <div className="relative z-10 text-center px-4 max-w-4xl mt-20">
              <p className="text-[#d4af37] tracking-[0.3em] text-sm uppercase mb-6 font-sans">เสน่ห์แห่งความประณีต</p>
              <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                 สืบสานมรดกทางวัฒนธรรม<br/>ผ่านงานศิลป์และประสบการณ์
              </h1>
              <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-8"></div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                 คัดสรรผลิตภัณฑ์หัตถกรรมระดับพรีเมียมจากช่างฝีมือชั้นครู พร้อมบริการที่ให้คุณได้สัมผัสวิถีชีวิตและวัฒนธรรมอย่างลึกซึ้ง
              </p>
              <button className="px-10 py-4 bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white uppercase tracking-widest text-xs transition-all duration-500 backdrop-blur-sm">
                 สำรวจคอลเลกชัน (Explore)
              </button>
           </div>
        </div>

        {/* --- PRODUCTS SECTION --- */}
        <div className="bg-[#faf8f5] py-24 px-8 lg:px-16 relative z-20">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl text-[#3e2723] mb-4">หัตถศิลป์ล้ำค่า (Artisan Products)</h2>
                 <p className="text-[#8d6e63] font-sans font-light max-w-xl mx-auto">ผลงานที่รังสรรค์ด้วยความรักและความพิถีพิถันจากช่างฝีมือผู้สืบทอดภูมิปัญญา</p>
                 <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                       <div className="relative overflow-hidden aspect-[3/4] mb-6">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                          
                          {/* Elegant Hover Overlay */}
                          <div className="absolute inset-0 bg-[#3e2723]/0 group-hover:bg-[#3e2723]/40 transition-colors duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                             <button className="w-full py-3 bg-white/90 hover:bg-[#d4af37] hover:text-white text-[#3e2723] text-xs tracking-widest uppercase transition-colors font-sans">
                                เพิ่มลงตะกร้า
                             </button>
                          </div>
                       </div>
                       <div className="text-center">
                          <h3 className="text-lg text-[#4e342e] mb-2 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                          <p className="text-[#d4af37] font-sans tracking-widest">฿{product.price.toLocaleString()}</p>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="text-center mt-12">
                 <button className="text-[#3e2723] hover:text-[#d4af37] font-sans uppercase tracking-widest text-xs border-b border-[#3e2723] hover:border-[#d4af37] pb-1 transition-colors">
                    ดูสินค้าทั้งหมด &rarr;
                 </button>
              </div>
           </div>
        </div>

        {/* --- SERVICES / EXPERIENCES SECTION (Full width banner style) --- */}
        <div className="bg-[#3e2723] py-24 relative z-20">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-flourishes.png")' }}></div>
           
           <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                 <div className="max-w-xl">
                    <h2 className="text-4xl text-[#d4af37] mb-4">สัมผัสวัฒนธรรม (Cultural Experiences)</h2>
                    <p className="text-white/70 font-sans font-light leading-relaxed">จองบริการและเวิร์กชอปที่เปิดโอกาสให้คุณได้ลงมือทำและเรียนรู้มรดกทางวัฒนธรรมอย่างใกล้ชิด นำสอนโดยผู้เชี่ยวชาญเฉพาะทาง</p>
                 </div>
                 <button className="px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#3e2723] uppercase tracking-widest text-xs transition-colors font-sans">
                    ดูแพ็กเกจทั้งหมด
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {services.map((service) => (
                    <div key={service.id} className="bg-[#4e342e] border border-[#5d4037] group hover:-translate-y-2 transition-transform duration-500">
                       <div className="relative h-64 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={service.img} alt={service.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-4 left-4 bg-[#d4af37] text-[#3e2723] text-[10px] font-sans font-bold px-3 py-1 uppercase tracking-widest">
                             {service.duration}
                          </div>
                       </div>
                       <div className="p-8">
                          <h3 className="text-xl text-white mb-4 leading-snug">{service.name}</h3>
                          <div className="flex justify-between items-center mt-6">
                             <p className="text-[#d4af37] font-sans tracking-widest">฿{service.price.toLocaleString()}</p>
                             <button className="text-white/60 group-hover:text-[#d4af37] font-sans text-xs tracking-widest uppercase transition-colors">
                                จองบริการ &rarr;
                             </button>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

         {/* --- NEW SECTION: Testimonials / Legacy --- */}
         <div className="py-24 bg-[#faf8f5] relative z-20">
            <div className="max-w-4xl mx-auto px-8 text-center">
               <h2 className="text-3xl text-[#3e2723] mb-12">เรื่องราวจากผู้หลงใหลในศิลปะไทย</h2>
               <div className="bg-white p-12 shadow-sm border border-[#d4af37]/20 relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-[#d4af37]">❝</div>
                  <p className="text-lg text-[#5d4037] leading-relaxed italic mb-8">"งานผ้าไหมทอมือที่ได้รับมีความประณีตและงดงามมาก สัมผัสได้ถึงจิตวิญญาณและเรื่องราวที่ช่างทอตั้งใจถ่ายทอดลงในทุกเส้นด้าย เป็นความภาคภูมิใจที่ได้ครอบครองชิ้นงานศิลปะนี้"</p>
                  <div className="text-sm text-[#3e2723] font-bold font-sans">คุณ มาริสา ธนทรัพย์</div>
                  <div className="text-xs text-[#8d6e63] font-sans">นักสะสมศิลปะ (Art Collector)</div>
               </div>
            </div>
         </div>

         {/* --- NEW SECTION: Full Footer --- */}
         <footer className="bg-[#2d1b15] pt-20 pb-10 relative z-20 border-t-4 border-[#d4af37]">
            <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
               <div className="col-span-1 text-center md:text-left">
                  <div className="text-2xl tracking-widest text-[#d4af37] mb-6">HERITAGE<span className="font-light text-white/50">CRAFT</span></div>
                  <p className="text-white/60 font-sans font-light leading-relaxed mb-6 text-sm">เรามุ่งมั่นสืบสานและต่อยอดมรดกทางวัฒนธรรมไทย ผ่านงานหัตถศิลป์ชั้นสูงและประสบการณ์ทางวัฒนธรรมอันทรงคุณค่า เพื่อส่งต่อความภาคภูมิใจสู่คนรุ่นหลัง</p>
               </div>
               <div className="text-center md:text-left">
                  <h4 className="text-[#d4af37] font-sans tracking-widest mb-6">บริการลูกค้า (SUPPORT)</h4>
                  <ul className="space-y-4 text-white/70 font-sans text-sm">
                     <li><a href="#" className="hover:text-[#d4af37] transition-colors">วิธีการสั่งซื้อสินค้า</a></li>
                     <li><a href="#" className="hover:text-[#d4af37] transition-colors">การจัดส่งและรับประกัน</a></li>
                     <li><a href="#" className="hover:text-[#d4af37] transition-colors">เงื่อนไขการจองบริการ</a></li>
                     <li><a href="#" className="hover:text-[#d4af37] transition-colors">ติดต่อเรา</a></li>
                  </ul>
               </div>
               <div className="text-center md:text-left">
                  <h4 className="text-[#d4af37] font-sans tracking-widest mb-6">ติดตามเรา (CONNECT)</h4>
                  <div className="flex justify-center md:justify-start gap-6 mb-8">
                     <a href="#" className="text-white/70 hover:text-[#d4af37] transition-colors font-sans text-sm tracking-widest uppercase">Instagram</a>
                     <a href="#" className="text-white/70 hover:text-[#d4af37] transition-colors font-sans text-sm tracking-widest uppercase">Facebook</a>
                  </div>
                  <h4 className="text-[#d4af37] font-sans tracking-widest mb-4">รับข่าวสาร (NEWSLETTER)</h4>
                  <div className="flex border-b border-white/20 pb-2">
                     <input type="email" placeholder="อีเมลของคุณ..." className="bg-transparent text-white w-full outline-none font-sans text-sm placeholder:text-white/30" />
                     <button className="text-[#d4af37] font-sans text-sm hover:text-white transition-colors">สมัคร</button>
                  </div>
               </div>
            </div>
            <div className="text-center border-t border-white/10 pt-8 mt-8">
               <p className="text-white/30 text-xs font-sans tracking-widest">© 2026 HERITAGE CRAFT. ALL RIGHTS RESERVED.</p>
            </div>
         </footer>

      </div>
    </div>
  );
}
