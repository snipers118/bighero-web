"use client";

import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "กระเป๋าสานหวายแท้", price: "฿ 1,290", img: "https://loremflickr.com/600/800/rattan,bag?lock=101" },
  { id: 2, name: "โคมไฟไม้ไผ่สาน (L)", price: "฿ 2,450", img: "https://loremflickr.com/600/800/bamboo,lamp?lock=102" },
  { id: 3, name: "ตะกร้าปิกนิกบุผ้า", price: "฿ 890", img: "https://loremflickr.com/600/800/wicker,basket?lock=103" },
  { id: 4, name: "เก้าอี้หวายวินเทจ", price: "฿ 4,500", img: "https://loremflickr.com/600/800/rattan,chair?lock=104" }
];

export default function WickerworkDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position for parallax (-1 to 1)
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#faf7f2] font-sans flex flex-col min-h-[850px] animate-fade-in-up text-[#4a3018]">
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-50 mix-blend-difference text-[#faf7f2]">
         <div className="text-2xl font-black tracking-tighter uppercase">
            BAAN<span className="font-light italic">SARN.</span>
         </div>
         
         <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-widest font-bold">
            <span className="cursor-pointer border-b border-current pb-1">Our Story</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Collections</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Workshops</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Contact</span>
         </div>

         <div className="flex gap-4">
            <button className="hidden md:block text-[11px] uppercase tracking-widest font-bold border border-current px-6 py-2 hover:bg-white hover:text-black transition-colors">
               Shop Now
            </button>
            <div className="w-10 h-10 flex items-center justify-center border border-current rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
         </div>
      </nav>

      {/* Interactive Hero Banner */}
      <div className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#cbb89d]">
         {/* Background Texture/Image */}
         <div 
            className="absolute inset-0 z-0 scale-110 transition-transform duration-1000 ease-out"
            style={{ 
               backgroundImage: 'url("https://loremflickr.com/1920/1080/wicker,texture?lock=100")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`,
               filter: 'brightness(0.7) sepia(0.3)'
            }}
         />

         {/* Floating Elements (Parallax) */}
         <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
            <div 
               className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#e08e36]/20 rounded-full blur-3xl mix-blend-overlay"
               style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
            />
            <div 
               className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#4a3018]/40 rounded-full blur-3xl mix-blend-overlay"
               style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
            />
         </div>

         {/* Center Content with 3D Tilt Effect */}
         <div 
            className="relative z-20 flex flex-col items-center text-center max-w-4xl px-8 transition-transform duration-300 ease-out"
            style={{ 
               transform: `perspective(1000px) rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)` 
            }}
         >
            <p className="text-[#faf7f2]/80 text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">100% Handcrafted in Thailand</p>
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black text-[#faf7f2] leading-[0.85] tracking-tighter mix-blend-overlay mb-6 drop-shadow-2xl">
               CRAFT<br/>
               <span className="text-transparent stroke-text italic font-serif" style={{ WebkitTextStroke: '2px #faf7f2' }}>WOVEN</span>
            </h1>
            <p className="text-[#faf7f2] text-lg md:text-xl font-light max-w-lg mt-4 leading-relaxed">
               ยกระดับงานจักสานไทย สู่ของแต่งบ้านดีไซน์ร่วมสมัย ถักทอด้วยความใส่ใจจากช่างฝีมือท้องถิ่น
            </p>

            {/* Interactive Button */}
            <button className="mt-12 group relative overflow-hidden bg-[#faf7f2] text-[#4a3018] px-10 py-4 font-bold uppercase tracking-widest text-xs">
               <span className="relative z-10 flex items-center gap-2">
                  Discover Collection
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </span>
               <div className="absolute inset-0 bg-[#e08e36] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>
            </button>
         </div>

         {/* Animated Marquee Bottom */}
         <div className="absolute bottom-0 w-full bg-[#4a3018] text-[#faf7f2] py-3 overflow-hidden z-20 border-t border-[#faf7f2]/20">
            <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-[10px] uppercase tracking-widest font-bold flex gap-8">
               {[...Array(10)].map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                     <span>Sustainable Materials</span> <span>✦</span>
                     <span>Local Artisans</span> <span>✦</span>
                     <span>Modern Design</span> <span>✦</span>
                  </span>
               ))}
            </div>
         </div>
      </div>

      {/* Intro / Story Section (Expanded) */}
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
         <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-[#e08e36]/10 rounded-full absolute -inset-4 blur-2xl"></div>
            <img src="https://loremflickr.com/800/800/craftsman,weaving?lock=105" alt="Craftsman Weaving" className="relative z-10 w-full h-auto object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl filter sepia-[0.2]" />
            <div className="absolute -bottom-8 -right-8 bg-[#4a3018] text-[#faf7f2] p-8 rounded-tl-[40px] z-20 hidden md:block">
               <p className="text-4xl font-serif mb-1">20+</p>
               <p className="text-[10px] uppercase tracking-widest">Years of Expertise</p>
            </div>
         </div>
         <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-[#e08e36] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Our Heritage</p>
            <h3 className="text-3xl md:text-5xl font-serif text-[#4a3018] mb-8 leading-tight">
               "ทุกเส้นหวายบอกเล่าเรื่องราว<br/>ทุกการถักทอคือจิตวิญญาณ"
            </h3>
            <div className="w-16 h-px bg-[#e08e36] mx-auto lg:mx-0 mb-8"></div>
            <p className="text-[#6d5542] leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg mb-6">
               บ้านสาน (BAAN SARN) เป็นธุรกิจ SME เล็กๆ ที่เกิดจากความหลงใหลในงานหัตถกรรมไทย เราทำงานร่วมกับชุมชนจักสานในจังหวัดอยุธยาและอ่างทอง เพื่อนำภูมิปัญญาดั้งเดิมมาผสานกับดีไซน์มินิมอลร่วมสมัย 
            </p>
            <p className="text-[#6d5542] leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg mb-10">
               สร้างสรรค์เป็นของใช้และของตกแต่งบ้านที่ทั้งสวยงามและยั่งยืน (Sustainable) สินค้าทุกชิ้นของเราทำด้วยมือ 100% จึงมีเอกลักษณ์และเสน่ห์ที่ไม่ซ้ำใคร
            </p>
            <button className="text-[#4a3018] font-bold uppercase tracking-widest text-xs border-b-2 border-[#4a3018] pb-1 hover:text-[#e08e36] hover:border-[#e08e36] transition-colors">
               Read Full Story
            </button>
         </div>
      </div>

      {/* Featured Products (Interactive Cards) */}
      <div className="py-24 bg-white border-y border-[#f0eadc]">
         <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
               <div>
                  <p className="text-[#e08e36] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">New Arrivals</p>
                  <h2 className="text-4xl font-black text-[#4a3018]">Signature Pieces</h2>
               </div>
               <button className="hidden md:block text-[11px] uppercase tracking-widest font-bold border-b border-[#4a3018] pb-1 hover:text-[#e08e36] hover:border-[#e08e36] transition-colors">
                  View All Products
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {products.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                     <div className="aspect-[3/4] bg-[#faf7f2] relative overflow-hidden mb-6 rounded-sm">
                        <img 
                           src={product.img} 
                           alt={product.name} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                        />
                        {/* Hover Add to cart layer */}
                        <div className="absolute inset-0 bg-[#4a3018]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <button className="bg-white text-[#4a3018] px-6 py-3 text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              Quick Add
                           </button>
                        </div>
                     </div>
                     <div className="text-center">
                        <h4 className="font-bold text-lg text-[#4a3018] mb-1">{product.name}</h4>
                        <p className="text-[#6d5542] text-sm">{product.price}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Exhibitions & Events (รูปออกงาน) */}
      <div className="py-24 px-8 bg-[#4a3018] text-[#faf7f2] relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <p className="text-[#e08e36] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Gallery & Events</p>
               <h2 className="text-4xl font-serif mb-6">Baan Sarn at Exhibitions</h2>
               <p className="text-[#cbb89d] max-w-2xl mx-auto">ภาพบรรยากาศการออกบูธและจัดแสดงสินค้าในงานแฟร์ต่างๆ ทั้งในประเทศและระดับนานาชาติ</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               <div className="col-span-2 row-span-2 overflow-hidden aspect-square">
                  <img src="https://loremflickr.com/800/800/exhibition,booth?lock=110" alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter sepia-[0.2]" />
               </div>
               <div className="overflow-hidden aspect-square">
                  <img src="https://loremflickr.com/400/400/craft,fair?lock=111" alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter sepia-[0.2]" />
               </div>
               <div className="overflow-hidden aspect-square">
                  <img src="https://loremflickr.com/400/400/market,booth?lock=112" alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter sepia-[0.2]" />
               </div>
               <div className="overflow-hidden aspect-square md:col-span-2">
                  <img src="https://loremflickr.com/800/400/event,people?lock=113" alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter sepia-[0.2]" />
               </div>
            </div>
         </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-8 bg-[#faf7f2]">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <p className="text-[#e08e36] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Get in Touch</p>
               <h2 className="text-4xl font-black text-[#4a3018] mb-8">Contact Us</h2>
               <p className="text-[#6d5542] mb-10 leading-relaxed">
                  สนใจสั่งผลิตสินค้าจักสานรูปแบบพิเศษสำหรับองค์กร ของชำร่วย หรือต้องการเยี่ยมชมสตูดิโอของเรา ติดต่อเราได้ตามช่องทางด้านล่างนี้
               </p>
               
               <div className="space-y-6 text-[#4a3018]">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#e08e36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                     <div>
                        <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Studio Address</h5>
                        <p className="text-[#6d5542] text-sm">123 หมู่บ้านหัตถกรรมจักสาน ตำบลบางไทร<br/>อำเภอบางไทร จังหวัดพระนครศรีอยุธยา 13190</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#e08e36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     </div>
                     <div>
                        <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Email & Phone</h5>
                        <p className="text-[#6d5542] text-sm">hello@baansarncraft.com<br/>+66 (0) 89 123 4567</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0">
                        <strong className="text-[#e08e36] font-serif text-xl">L</strong>
                     </div>
                     <div>
                        <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Line Official</h5>
                        <p className="text-[#6d5542] text-sm">@baansarn (มี @)</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 md:p-12 shadow-xl border border-[#f0eadc]">
               <h3 className="text-2xl font-bold text-[#4a3018] mb-6">Send a Message</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#6d5542] font-bold mb-2">Name</label>
                        <input type="text" className="w-full border-b border-[#d1c4b4] py-2 bg-transparent focus:outline-none focus:border-[#4a3018] transition-colors" placeholder="Your name" />
                     </div>
                     <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#6d5542] font-bold mb-2">Email</label>
                        <input type="email" className="w-full border-b border-[#d1c4b4] py-2 bg-transparent focus:outline-none focus:border-[#4a3018] transition-colors" placeholder="Your email" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-[10px] uppercase tracking-widest text-[#6d5542] font-bold mb-2">Subject</label>
                     <input type="text" className="w-full border-b border-[#d1c4b4] py-2 bg-transparent focus:outline-none focus:border-[#4a3018] transition-colors" placeholder="How can we help?" />
                  </div>
                  <div>
                     <label className="block text-[10px] uppercase tracking-widest text-[#6d5542] font-bold mb-2">Message</label>
                     <textarea rows={4} className="w-full border-b border-[#d1c4b4] py-2 bg-transparent focus:outline-none focus:border-[#4a3018] transition-colors resize-none" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="button" className="bg-[#4a3018] hover:bg-[#2c1c0f] text-white w-full py-4 font-bold uppercase tracking-widest text-xs transition-colors">
                     Submit Message
                  </button>
               </form>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2c1c0f] text-[#faf7f2] py-12 px-8 border-t border-[#4a3018]">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
               <div className="text-2xl font-black tracking-tighter uppercase mb-2">
                  BAAN<span className="font-light italic">SARN.</span>
               </div>
               <p className="text-[#8c7462] text-sm">© 2026 Baan Sarn Wickerwork. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-[#8c7462]">
               <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
               <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
               <span className="cursor-pointer hover:text-white transition-colors">Pinterest</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
