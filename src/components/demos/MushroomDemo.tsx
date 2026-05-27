"use client";

import { useState } from "react";

const sporeProducts = [
  { id: 1, name: "ก้อนเชื้อเห็ดนางฟ้าภูฐาน", desc: "ออกดอกง่าย ทนสภาพอากาศ", price: "฿ 12 / ก้อน", img: "https://loremflickr.com/600/600/mushroom,spores?lock=201" },
  { id: 2, name: "ก้อนเชื้อเห็ดโคนน้อย", desc: "โตไว รสชาติอร่อย หวานกรอบ", price: "฿ 15 / ก้อน", img: "https://loremflickr.com/600/600/mushroom,farm?lock=202" },
  { id: 3, name: "ก้อนเชื้อเห็ดหูหนู", desc: "น้ำหนักดี เป็นที่ต้องการของตลาด", price: "฿ 14 / ก้อน", img: "https://loremflickr.com/600/600/fungi?lock=203" },
  { id: 4, name: "ก้อนเชื้อเห็ดหลินจือแดง", desc: "เห็ดสมุนไพร มูลค่าสูง", price: "฿ 25 / ก้อน", img: "https://loremflickr.com/600/600/lingzhi,mushroom?lock=204" }
];

const processedProducts = [
  { id: 1, name: "เห็ดนางฟ้าทอดกรอบ (รสดั้งเดิม)", price: "฿ 45", img: "https://loremflickr.com/600/600/snack,fried?lock=205" },
  { id: 2, name: "เห็ดนางฟ้าทอดกรอบ (รสสไปซี่)", price: "฿ 45", img: "https://loremflickr.com/600/600/snack,spicy?lock=206" },
  { id: 3, name: "ผงปรุงรสเห็ดหอม 100% (เจ)", price: "฿ 89", img: "https://loremflickr.com/600/600/powder,seasoning?lock=207" },
  { id: 4, name: "น้ำพริกเห็ดกรอบ", price: "฿ 69", img: "https://loremflickr.com/600/600/chili,paste?lock=208" }
];

const reviews = [
  { id: 1, name: "คุณสมชาย, เชียงใหม่", text: "สั่งก้อนเชื้อเห็ดนางฟ้าไป 1,000 ก้อน เชื้อเดินดีมาก ออกดอกสม่ำเสมอ ทางฟาร์มให้คำปรึกษาดีเยี่ยมครับ", rating: 5 },
  { id: 2, name: "คุณนฤมล, ร้านอาหารเจ", text: "ผงปรุงรสเห็ดหอมใช้ทำน้ำซุปอร่อยมากค่ะ ลูกค้าชมว่ารสชาติกลมกล่อม สั่งประจำเลยค่ะ", rating: 5 },
  { id: 3, name: "คุณวิชัย, ผู้เริ่มต้นธุรกิจ", text: "ลงเรียนคอร์สเพาะเห็ดกับทางฟาร์ม ได้ความรู้กลับไปทำโรงเรือนเอง ตอนนี้มีรายได้เสริมเดือนละหมื่นกว่าบาทแล้วครับ", rating: 5 }
];

const gallery = [
  "https://loremflickr.com/800/600/agriculture,learning?lock=210",
  "https://loremflickr.com/800/600/farming,workshop?lock=211",
  "https://loremflickr.com/800/600/greenhouse,mushroom?lock=212",
  "https://loremflickr.com/800/600/harvest,farmer?lock=213",
  "https://loremflickr.com/800/600/packing,product?lock=214",
  "https://loremflickr.com/800/600/teaching,farm?lock=215"
];

export default function MushroomDemo() {
  return (
    <div className="relative overflow-hidden bg-[#fdfbf7] font-sans flex flex-col animate-fade-in-up text-[#4a3a2a]">
      
      {/* Top Bar */}
      <div className="bg-[#4a3a2a] text-[#fdfbf7] text-[12px] py-2 px-8 flex justify-between items-center">
         <div>เปิดทำการ: จันทร์ - เสาร์ (08:00 - 17:00 น.)</div>
         <div className="flex gap-4">
            <span>โทร: 089-123-4567</span>
            <span>Line: @farmkinhed</span>
         </div>
      </div>

      {/* Navigation */}
      <nav className="px-8 py-5 flex justify-between items-center sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8c6239] rounded-full flex items-center justify-center text-white font-serif italic font-bold text-xl">
               F
            </div>
            <div>
               <h1 className="text-xl font-bold text-[#4a3a2a] tracking-tight">ฟาร์มกินเห็ด</h1>
               <p className="text-[#8c6239] text-[10px] uppercase tracking-widest font-bold">Mushroom Farm</p>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-8 text-sm font-bold text-[#4a3a2a]">
            <span className="cursor-pointer hover:text-[#8c6239] transition-colors">หน้าแรก</span>
            <span className="cursor-pointer hover:text-[#8c6239] transition-colors">เรื่องราวของเรา</span>
            <span className="cursor-pointer hover:text-[#8c6239] transition-colors">ก้อนเชื้อเห็ด</span>
            <span className="cursor-pointer hover:text-[#8c6239] transition-colors">ผลิตภัณฑ์แปรรูป</span>
            <span className="cursor-pointer text-[#d2691e] border-b-2 border-[#d2691e] pb-1">ปรึกษาการทำธุรกิจ</span>
         </div>

         <button className="bg-[#8c6239] hover:bg-[#6b4a2a] text-white px-6 py-2 rounded text-sm font-bold transition-colors shadow-md">
            สั่งซื้อสินค้า
         </button>
      </nav>

      {/* Hero Banner */}
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-black">
         <div className="absolute inset-0 z-0">
            <img src="/projects/mushroom_banner.png" alt="Fresh Mushrooms" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2015] via-[#2a2015]/60 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
               <span className="bg-[#d2691e] text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-lg">Premium Quality</span>
               <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                  จากโรงเรือน<br/>สู่ผลิตภัณฑ์คุณภาพ
               </h2>
               <p className="text-[#e8dcc4] text-lg mb-8 leading-relaxed">
                  ศูนย์รวมก้อนเชื้อเห็ดคุณภาพสูง ผลิตภัณฑ์แปรรูปจากเห็ด และบริการให้คำปรึกษาการทำฟาร์มเห็ดแบบครบวงจร สำหรับผู้ที่ต้องการเริ่มต้นธุรกิจ
               </p>
               <div className="flex flex-wrap gap-4">
                  <button className="bg-[#8c6239] hover:bg-[#a67b4d] text-white px-8 py-3 rounded font-bold transition-colors shadow-lg">
                     ซื้อก้อนเชื้อเห็ด
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2a2015] px-8 py-3 rounded font-bold transition-colors">
                     ปรึกษาการลงทุน
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-8 bg-white">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-[#8c6239]/10 rounded-3xl transform rotate-3"></div>
               <img src="https://loremflickr.com/800/800/farmer,portrait?lock=220" alt="Our Farm" className="relative z-10 w-full h-auto rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2">
               <p className="text-[#d2691e] font-bold tracking-widest uppercase text-sm mb-2">Our Story</p>
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-6">เติบโตด้วยความใส่ใจ กว่า 10 ปีในวงการเห็ด</h3>
               <p className="text-gray-600 leading-relaxed mb-4">
                  จุดเริ่มต้นจากฟาร์มเล็กๆ ในครอบครัว สู่การเป็นศูนย์กลางการเรียนรู้และผลิตก้อนเชื้อเห็ดคุณภาพ เราใส่ใจทุกขั้นตอนตั้งแต่การคัดเลือกสายพันธุ์ การผสมขี้เลื่อย ไปจนถึงการบ่มเชื้อ เพื่อให้ได้ก้อนเชื้อที่แข็งแรง ออกดอกดก
               </p>
               <p className="text-gray-600 leading-relaxed mb-6">
                  ปัจจุบันเราไม่เพียงแค่ขายก้อนเชื้อ แต่เรายังนำผลผลิตมาแปรรูปเป็นผลิตภัณฑ์เพื่อสุขภาพ และพร้อมส่งต่อความรู้ให้กับเกษตรกรหน้าใหม่ที่สนใจอยากมีรายได้จากการเพาะเห็ด
               </p>
               <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-[#fdfbf7] p-4 rounded-xl border border-[#e8dcc4]">
                     <div className="text-3xl font-black text-[#8c6239] mb-1">500k+</div>
                     <div className="text-xs font-bold text-gray-500 uppercase">ก้อนเชื้อ/เดือน</div>
                  </div>
                  <div className="bg-[#fdfbf7] p-4 rounded-xl border border-[#e8dcc4]">
                     <div className="text-3xl font-black text-[#8c6239] mb-1">1,200+</div>
                     <div className="text-xs font-bold text-gray-500 uppercase">ฟาร์มเครือข่าย</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Product Category 1: Spore Bags */}
      <div className="py-20 px-8 bg-[#fdfbf7] border-y border-[#e8dcc4]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-3">ก้อนเชื้อเห็ดคุณภาพ</h3>
               <p className="text-gray-600">ก้อนเชื้อเดินเต็ม แข็งแรง พร้อมเปิดดอก ให้ผลผลิตสูง (รับประกันคุณภาพทุกก้อน)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {sporeProducts.map(item => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e8dcc4] group">
                     <div className="aspect-square overflow-hidden relative">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="p-5 text-center">
                        <h4 className="font-bold text-lg text-[#4a3a2a] mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                        <div className="text-xl font-black text-[#8c6239] mb-4">{item.price}</div>
                        <button className="w-full border border-[#8c6239] text-[#8c6239] hover:bg-[#8c6239] hover:text-white py-2 rounded font-bold transition-colors">
                           หยิบใส่ตะกร้า
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Product Category 2: Processed Goods */}
      <div className="py-20 px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-3">ผลิตภัณฑ์แปรรูปจากฟาร์ม</h3>
               <p className="text-gray-600">อร่อย มีประโยชน์ คัดสรรเห็ดสดๆ จากฟาร์มมาแปรรูปด้วยมาตรฐาน อย.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {processedProducts.map(item => (
                  <div key={item.id} className="bg-[#fdfbf7] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e8dcc4] group">
                     <div className="aspect-square overflow-hidden p-6 relative">
                        <div className="absolute inset-0 bg-[#8c6239]/5 mix-blend-multiply rounded-full scale-75 group-hover:scale-100 transition-transform duration-500"></div>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500" />
                     </div>
                     <div className="p-5 text-center bg-white border-t border-[#e8dcc4]">
                        <h4 className="font-bold text-[#4a3a2a] mb-3 line-clamp-1">{item.name}</h4>
                        <div className="flex items-center justify-between">
                           <span className="text-lg font-black text-[#d2691e]">{item.price}</span>
                           <button className="bg-[#8c6239] text-white px-4 py-1.5 rounded text-sm font-bold hover:bg-[#6b4a2a] transition-colors">ซื้อเลย</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* B2B / Franchise Section */}
      <div className="py-20 px-8 bg-[#2a2015] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-5xl mx-auto relative z-10 text-center">
            <span className="bg-white/10 text-[#e8dcc4] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">B2B Partnership</span>
            <h3 className="text-4xl font-black mb-6">มองหาธุรกิจส่วนตัว? มาร่วมเป็นพาร์ทเนอร์กับเรา</h3>
            <p className="text-[#e8dcc4] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
               เรารับให้คำปรึกษาสำหรับผู้ที่ต้องการเปิดฟาร์มเห็ดแบบครบวงจร ตั้งแต่การออกแบบโรงเรือน การจัดการฟาร์ม ไปจนถึงการหาตลาดรับซื้อ พร้อมแพ็กเกจเริ่มต้นธุรกิจในราคาพิเศษ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h4 className="font-bold text-lg mb-2">ออกแบบโรงเรือน</h4>
                  <p className="text-sm text-gray-400">ประเมินพื้นที่และงบประมาณ พร้อมแปลนโรงเรือนมาตรฐาน</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="font-bold text-lg mb-2">อบรมเทคนิคการเพาะ</h4>
                  <p className="text-sm text-gray-400">สอนหมดเปลือกจากผู้เชี่ยวชาญ ดูแลจนกว่าจะออกดอก</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-bold text-lg mb-2">รับซื้อผลผลิตคืน</h4>
                  <p className="text-sm text-gray-400">หมดกังวลเรื่องตลาด เรามีช่องทางรับซื้อผลผลิตในเครือข่าย</p>
               </div>
            </div>
            <button className="bg-[#d2691e] hover:bg-[#b55815] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-xl">
               ติดต่อรับคำปรึกษาฟรี
            </button>
         </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-3">ภาพกิจกรรม (Our Activities)</h3>
               <p className="text-gray-600">บรรยากาศการจัดอบรม การทำงานในฟาร์ม และการส่งมอบสินค้า</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
               {gallery.map((img, idx) => (
                  <div key={idx} className={`rounded-xl overflow-hidden ${idx === 0 || idx === 3 ? 'col-span-2 row-span-2' : 'col-span-2 md:col-span-1'} aspect-square md:aspect-auto h-full min-h-[150px]`}>
                     <img src={img} alt={`Activity ${idx+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-8 bg-[#fdfbf7] border-t border-[#e8dcc4]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-3">เสียงตอบรับจากลูกค้า</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {reviews.map(review => (
                  <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-[#e8dcc4] relative">
                     <div className="text-[#d2691e] text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
                     <div className="flex text-amber-400 mb-4 text-sm relative z-10">
                        {"★".repeat(review.rating)}
                     </div>
                     <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed text-sm">"{review.text}"</p>
                     <div className="font-bold text-[#4a3a2a] text-sm">- {review.name}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-8 bg-white border-t border-[#e8dcc4]">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
               <h3 className="text-3xl font-black text-[#4a3a2a] mb-6">ติดต่อเรา (Contact Us)</h3>
               <p className="text-gray-600 mb-8">สอบถามข้อมูลเพิ่มเติม สั่งซื้อสินค้า หรือนัดหมายเข้าชมฟาร์ม</p>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#fdfbf7] border border-[#e8dcc4] rounded-full flex items-center justify-center shrink-0 text-[#8c6239]">📍</div>
                     <div>
                        <h5 className="font-bold text-[#4a3a2a] mb-1">ที่อยู่ฟาร์ม</h5>
                        <p className="text-gray-500 text-sm leading-relaxed">99/9 หมู่ 1 ตำบลบางเห็ด อำเภอเมือง จังหวัดนครราชสีมา 30000</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#fdfbf7] border border-[#e8dcc4] rounded-full flex items-center justify-center shrink-0 text-[#8c6239]">📞</div>
                     <div>
                        <h5 className="font-bold text-[#4a3a2a] mb-1">เบอร์โทรศัพท์</h5>
                        <p className="text-gray-500 text-sm">089-123-4567, 044-987-654</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#2ba338] rounded-full flex items-center justify-center shrink-0 text-white font-bold text-xl">L</div>
                     <div>
                        <h5 className="font-bold text-[#4a3a2a] mb-1">LINE Official</h5>
                        <p className="text-gray-500 text-sm">@farmkinhed</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="md:w-1/2">
               <div className="bg-[#fdfbf7] p-8 rounded-2xl border border-[#e8dcc4]">
                  <h4 className="font-bold text-[#4a3a2a] mb-6 text-lg">ส่งข้อความถึงเรา</h4>
                  <form className="space-y-4">
                     <input type="text" placeholder="ชื่อ-นามสกุล" className="w-full px-4 py-3 rounded-lg border border-[#e8dcc4] focus:outline-none focus:border-[#8c6239]" />
                     <input type="text" placeholder="เบอร์โทรศัพท์" className="w-full px-4 py-3 rounded-lg border border-[#e8dcc4] focus:outline-none focus:border-[#8c6239]" />
                     <textarea placeholder="ข้อความที่ต้องการสอบถาม" rows={4} className="w-full px-4 py-3 rounded-lg border border-[#e8dcc4] focus:outline-none focus:border-[#8c6239] resize-none"></textarea>
                     <button type="button" className="w-full bg-[#8c6239] hover:bg-[#6b4a2a] text-white py-3 rounded-lg font-bold transition-colors">
                        ส่งข้อความ
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a140d] text-gray-400 py-12 px-8 text-sm">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
            <div className="md:col-span-2">
               <div className="text-2xl font-bold text-white mb-4">ฟาร์มกินเห็ด</div>
               <p className="max-w-sm leading-relaxed mb-4">มุ่งมั่นผลิตก้อนเชื้อเห็ดคุณภาพ และผลิตภัณฑ์แปรรูปที่สะอาด ปลอดภัย พร้อมสนับสนุนเกษตรกรไทยให้มีรายได้ที่ยั่งยืน</p>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c6239] hover:text-white cursor-pointer transition-colors">f</div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c6239] hover:text-white cursor-pointer transition-colors">ig</div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c6239] hover:text-white cursor-pointer transition-colors">yt</div>
               </div>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">ลิงก์ด่วน</h4>
               <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">ก้อนเชื้อเห็ด</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ผลิตภัณฑ์แปรรูป</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">วิธีการเพาะเห็ด</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ปรึกษาการลงทุน</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">นโยบาย</h4>
               <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">เงื่อนไขการจัดส่ง</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">รับประกันสินค้า</a></li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>© 2026 ฟาร์มกินเห็ด (Mushroom Farm). All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for SME Thailand.</p>
         </div>
      </footer>

    </div>
  );
}
