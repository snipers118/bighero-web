"use client";

import { useEffect, useState } from "react";

export default function RakMakDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fbf9f4] font-sans flex flex-col min-h-screen text-[#2e4a2b] animate-fade-in-up">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-3">
               {/* Use the attached logo here, fallback to text if missing */}
               <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#2e4a2b]/20 bg-white flex items-center justify-center">
                  <img src="/projects/rakmak-logo.png" alt="Rak Mak Logo" className="w-full h-full object-cover" 
                       onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-[#2e4a2b]">RM</span>'; }} />
               </div>
               <div className={`font-bold tracking-tight transition-colors ${scrolled ? "text-[#2e4a2b]" : "text-[#2e4a2b] drop-shadow-md"}`}>
                  <h1 className="text-xl leading-none">รักษ์หมาก</h1>
                  <span className="text-[10px] uppercase tracking-widest text-[#5c8a55]">Rak Mak</span>
               </div>
            </div>
            
            <div className={`hidden md:flex gap-8 text-sm font-bold transition-colors ${scrolled ? "text-[#2e4a2b]" : "text-white drop-shadow-md"}`}>
               <span className="cursor-pointer hover:text-[#5c8a55] transition-colors">เรื่องราวของเรา</span>
               <span className="cursor-pointer hover:text-[#5c8a55] transition-colors">ทำไมต้องกาบหมาก?</span>
               <span className="cursor-pointer hover:text-[#5c8a55] transition-colors">สินค้าชุมชน</span>
            </div>

            <button className="bg-[#2e4a2b] hover:bg-[#1f331d] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-lg">
               สั่งซื้อเลย
            </button>
         </div>
      </nav>

      {/* Hero Banner Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
            {/* Background image: banner */}
            <img src="/projects/rakmak-banner.jpg" alt="Rak Mak Banner" className="w-full h-full object-cover" 
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            {/* Fallback background color if image is missing */}
            <div className="absolute inset-0 bg-[#3b5936] -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f331d]/80 via-[#1f331d]/20 to-black/30"></div>
         </div>
         
         {/* If the banner image has text, we just need a CTA button at the bottom */}
         <div className="relative z-10 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-end pb-24 items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg hidden">
               จานกาบหมากธรรมชาติ 100%<br/>จากเมืองคอน
            </h2>
            <div className="flex gap-4 mt-8">
               <button className="bg-white text-[#2e4a2b] hover:bg-[#fbf9f4] px-8 py-4 rounded-full font-bold transition-all shadow-2xl hover:shadow-[#2e4a2b]/50 hover:-translate-y-1">
                  สั่งซื้อวันนี้ (Order Now)
               </button>
            </div>
         </div>
      </div>

      {/* Section 1: เทียบให้เห็นชัดๆ! */}
      <div className="py-24 px-6 md:px-12 bg-white relative">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-[#5c8a55] font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us?</span>
               <h3 className="text-3xl md:text-5xl font-black text-[#2e4a2b] mb-6">เทียบให้เห็นชัดๆ! 🌿♻️</h3>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  ระหว่าง <span className="font-bold text-red-500">พลาสติกทั่วไป</span> ที่ย่อยสลายยาก เป็นภาระต่อสิ่งแวดล้อม กับ จานกาบหมาก <span className="font-bold text-[#2e4a2b]">'รักษ์หมาก'</span> สินค้าชุมชนดีๆ ที่ย่อยสลายได้ 100% ภายใน 45 วัน!
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
               <div className="bg-[#f5ebd9]/30 p-8 md:p-12 rounded-3xl border border-[#e6d8c3] relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#f5ebd9]">
                     <span className="text-3xl font-black text-[#2e4a2b]">45</span>
                     <span className="text-xs font-bold text-[#2e4a2b] ml-1">วัน</span>
                  </div>
                  <h4 className="text-2xl font-bold text-[#2e4a2b] mb-6 border-b border-[#2e4a2b]/10 pb-4">จุดเด่นของรักษ์หมาก</h4>
                  <ul className="space-y-6">
                     <li className="flex items-center gap-4 text-lg text-gray-700">
                        <div className="w-12 h-12 bg-[#2e4a2b] text-white rounded-full flex items-center justify-center shrink-0 text-xl">🌿</div>
                        <span><strong className="text-[#2e4a2b]">ปลอดภัย ไร้สารเคมี</strong> (No Chemicals)</span>
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700">
                        <div className="w-12 h-12 bg-[#2e4a2b] text-white rounded-full flex items-center justify-center shrink-0 text-xl">🔥</div>
                        <span><strong className="text-[#2e4a2b]">ทนความร้อน ไม่อ่อนตัว</strong> (Heat Resistant)</span>
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700">
                        <div className="w-12 h-12 bg-[#2e4a2b] text-white rounded-full flex items-center justify-center shrink-0 text-xl">🤝</div>
                        <span><strong className="text-[#2e4a2b]">สนับสนุนรายได้สู่ชุมชน</strong> (Community Support)</span>
                     </li>
                  </ul>
               </div>
               
               <div className="text-center md:text-left">
                  <h4 className="text-3xl font-bold text-[#2e4a2b] mb-4">เลือกเพื่ออนาคต เลือกเพื่อชุมชน</h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                     เริ่มต้นที่มื้ออาหารของคุณ สลับมาใช้วัสดุธรรมชาติที่ไม่ทิ้งภาระไว้ให้ลูกหลาน
                  </p>
                  <button className="bg-[#2e4a2b] hover:bg-[#1f331d] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-[#2e4a2b]/40 hover:-translate-y-1 inline-flex items-center gap-2">
                     สั่งซื้อได้เลยวันนี้! 👇
                  </button>
                  <div className="mt-6 text-sm font-bold text-gray-400 flex gap-4 justify-center md:justify-start">
                     <span>#รักษ์หมาก</span>
                     <span>#จานกาบหมาก</span>
                     <span>#สินค้ารักษ์โลก</span>
                     <span>#นครศรีธรรมราช</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Section 2: ให้ทุกมื้ออาหาร เป็นมื้อที่รักโลก */}
      <div className="py-24 px-6 md:px-12 bg-[#2e4a2b] text-[#fbf9f4] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
         <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            
            <div className="md:w-1/2">
               <div className="aspect-square rounded-3xl overflow-hidden border-4 border-[#fbf9f4]/20 shadow-2xl relative">
                  <img src="https://loremflickr.com/800/800/leaves,compost?lock=302" alt="Biodegradable" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                     <p className="text-white font-bold text-xl">ย่อยสลายเป็นปุ๋ย 100%</p>
                  </div>
               </div>
            </div>

            <div className="md:w-1/2">
               <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  ให้ทุกมื้ออาหาร<br/>เป็นมื้อที่รักโลก...<br/><span className="text-[#a4d65e]">และรักชุมชน 💚🏡</span>
               </h3>
               <p className="text-[#e2ebd9] text-lg leading-relaxed mb-6">
                  "เลือกเพื่ออนาคต เลือกเพื่อชุมชน" ไม่ใช่แค่คำขวัญ แต่เป็นทางเลือกที่เราทำได้จริงในทุกๆ วัน เพียงแค่สลับจากจานพลาสติกหรือโฟมที่ย่อยสลายยาก มาใช้ <strong className="text-white">จานกาบหมาก 'รักษ์หมาก'</strong> สินค้าทำมือจากภูมิปัญญาท้องถิ่นเมืองคอน
               </p>
               <p className="text-[#e2ebd9] text-lg leading-relaxed mb-10">
                  จานรักษ์หมากของเราเมื่อใช้เสร็จแล้ว สามารถคืนสู่ธรรมชาติได้ 100% ภายในเวลาเพียง 45 วัน กลายเป็นปุ๋ยให้ต้นไม้เติบโตต่อไป มาเป็นส่วนหนึ่งในการลดขยะและสร้างรอยยิ้มให้ชุมชนไปด้วยกันนะครับ
               </p>
               
               <button className="bg-[#fbf9f4] text-[#2e4a2b] hover:bg-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
                  <span>📩 สอบถามข้อมูลเพิ่มเติม ทักแชทได้เลย!</span>
               </button>
               <div className="mt-8 text-xs font-bold text-[#a4d65e]/80 flex gap-3 flex-wrap">
                  <span>#RakMak</span>
                  <span>#SustainableLiving</span>
                  <span>#EcoFriendlyPlates</span>
                  <span>#CommunitySupport</span>
               </div>
            </div>
         </div>
      </div>

      {/* Section 3: แค่เปลี่ยน... ก็ช่วยโลกได้! */}
      <div className="py-24 px-6 md:px-12 bg-white text-center">
         <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black text-[#2e4a2b] mb-8">
               แค่เปลี่ยน... ก็ช่วยโลกได้! 🌿✊
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
               สลับจานพลาสติกทั่วไปที่อยู่คู่โลกไปอีกนาน มาเป็น <strong className="text-[#2e4a2b]">จานกาบหมาก 'รักษ์หมาก'</strong> สินค้าธรรมชาติ 100% ที่ย่อยสลายไวภายใน 45 วัน!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
               <div className="bg-[#fbf9f4] border border-[#e6d8c3] px-6 py-4 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#5c8a55] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="font-bold text-[#2e4a2b] text-lg">เลือกเพื่ออนาคตที่ยั่งยืน</span>
               </div>
               <div className="bg-[#fbf9f4] border border-[#e6d8c3] px-6 py-4 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#5c8a55] rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="font-bold text-[#2e4a2b] text-lg">เลือกเพื่อสนับสนุนรายได้ชุมชน</span>
               </div>
            </div>

            <div className="bg-[#2e4a2b] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#5c8a55] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
               <h4 className="text-3xl font-bold mb-4 relative z-10">หรอยแรง แข็งแรง รักษ์โลก 🌟</h4>
               <p className="text-lg text-[#e2ebd9] mb-8 relative z-10">พร้อมส่งมอบความใส่ใจถึงมือคุณ สั่งเลย!</p>
               
               <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
                  <button className="bg-white text-[#2e4a2b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                     📞 โทร: 089-XXX-XXXX
                  </button>
                  <button className="bg-[#00B900] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                     💬 LINE ID: @rakmak
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f331d] text-[#e2ebd9] py-12 px-6 md:px-12 text-center md:text-left">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-white rounded-full overflow-hidden p-1">
                  <img src="/projects/rakmak-logo.png" alt="Rak Mak Logo" className="w-full h-full object-contain" 
                       onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-[#2e4a2b] flex h-full items-center justify-center">RM</span>'; }} />
               </div>
               <div>
                  <h4 className="text-2xl font-bold text-white">รักษ์หมาก</h4>
                  <p className="text-sm">จานกาบหมากธรรมชาติ 100% เมืองคอน</p>
               </div>
            </div>
            
            <div className="flex gap-6 text-sm font-bold">
               <a href="#" className="hover:text-white transition-colors">Facebook</a>
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
               <a href="#" className="hover:text-white transition-colors">Shopee</a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto border-t border-[#4a7c45]/30 mt-8 pt-8 text-sm text-center">
            © 2026 รักษ์หมาก (Rak Mak). All rights reserved. | #รักษ์หมาก #เมืองคอน #จานกาบหมากธรรมชาติ
         </div>
      </footer>
    </div>
  );
}
