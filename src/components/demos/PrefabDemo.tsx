"use client";

import { useState } from "react";

const buildingTypes = [
  {
    id: "warehouse",
    name: "คลังสินค้า / โรงงาน (Warehouse & Factory)",
    basePrice: 5000000,
    time: "45-60 Days",
    specs: "โครงสร้างเหล็ก High-Tensile, หลังคา Metal Sheet PE, รับน้ำหนัก 2-5 ตัน/ตร.ม.",
    img: "https://loremflickr.com/800/500/warehouse,architecture?lock=1"
  },
  {
    id: "office",
    name: "สำนักงาน / ออฟฟิศ (Smart Office Space)",
    basePrice: 3500000,
    time: "30-45 Days",
    specs: "ผนัง Sandwich Panel กันความร้อน, กระจกเทมเปอร์รอบด้าน, พื้นไวนิล/กระเบื้องยาง",
    img: "https://loremflickr.com/800/500/office,building?lock=2"
  },
  {
    id: "retail",
    name: "ร้านค้า / คาเฟ่ (Retail & Cafe Stall)",
    basePrice: 850000,
    time: "15-20 Days",
    specs: "ดีไซน์กระจกใส, โครงสร้าง Modular เคลื่อนย้ายได้, ระบบไฟฟ้าพร้อมใช้งาน",
    img: "https://loremflickr.com/800/500/cafe,container?lock=3"
  }
];

export default function PrefabDemo() {
  const [selectedType, setSelectedType] = useState(buildingTypes[0]);
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  const calculatedPrice = selectedType.basePrice * sizeMultiplier;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-white font-sans flex flex-col min-h-[850px] text-slate-800 animate-fade-in-up">
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 flex justify-between items-center hidden sm:flex">
        <div className="flex gap-4">
           <span>📧 sales@steelframe-prefab.com</span>
           <span>📞 02-123-4567</span>
        </div>
        <div className="flex gap-4 font-bold text-amber-500">
           <span>ISO 9001:2015 CERTIFIED</span>
           <span>|</span>
           <span>รับประกันโครงสร้าง 10 ปี</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded transform -skew-x-12 flex items-center justify-center">
             <svg className="w-5 h-5 text-slate-900 transform skew-x-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
          STEEL<span className="text-slate-500 font-light">FRAME</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm text-slate-700">
           <span className="hover:text-amber-600 cursor-pointer transition-colors border-b-2 border-amber-500">หน้าหลัก</span>
           <span className="hover:text-amber-600 cursor-pointer transition-colors">ผลงานของเรา</span>
           <span className="hover:text-amber-600 cursor-pointer transition-colors">โซลูชันธุรกิจ</span>
           <span className="hover:text-amber-600 cursor-pointer transition-colors">เกี่ยวกับเรา</span>
        </div>
        <button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded flex items-center gap-2 shadow-lg shadow-slate-900/20 transition-all">
           ประเมินราคาฟรี
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center bg-slate-100 overflow-hidden">
         {/* Industrial Background Elements */}
         <div className="absolute inset-0 z-0">
            <img src="https://loremflickr.com/1200/600/construction,steel?lock=99" className="w-full h-full object-cover opacity-30 mix-blend-multiply" alt="Construction Background" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
         </div>
         
         <div className="relative z-10 px-8 lg:px-16 max-w-3xl animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-widest mb-6 border-l-4 border-amber-500">
               นวัตกรรมอาคารสำเร็จรูป B2B
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
               สร้างอาคารธุรกิจ<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                 เร็วกว่าเดิม 3 เท่า
               </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed">
               หมดยุคการก่อสร้างที่ล่าช้าและงบบานปลาย ด้วยระบบ Prefabricated Building ที่ควบคุมคุณภาพจากโรงงาน 100% พร้อมติดตั้งหน้างานทันที
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-base rounded shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  ประเมินราคาทันที
               </button>
               <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-base rounded shadow-sm transition-all flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  ดูวิดีโอผลงาน
               </button>
            </div>
         </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b border-slate-100 bg-white relative z-20">
         <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-xl text-slate-400 tracking-tighter">MEGA<span className="font-light">CORP</span></span>
            <span className="font-black text-xl text-slate-400 tracking-tighter">GLOBAL<span className="font-light">LOGISTICS</span></span>
            <span className="font-black text-xl text-slate-400 tracking-tighter">TECH<span className="font-light">PARK</span></span>
            <span className="font-black text-xl text-slate-400 tracking-tighter">SME<span className="font-light">HUB</span></span>
            <span className="font-black text-xl text-slate-400 tracking-tighter">THAI<span className="font-light">INDUSTRY</span></span>
         </div>
      </div>

      {/* --- Interactive Building Configurator --- */}
      <div className="py-20 bg-slate-50 relative z-10 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">จำลองแบบอาคารและประเมินราคา</h2>
               <p className="text-slate-500">Interactive Configurator: เลือกประเภทอาคารและขนาดเพื่อดูราคาเบื้องต้น</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
               
               {/* Left Controls */}
               <div className="w-full lg:w-1/3 bg-slate-900 text-white p-8 flex flex-col">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                     <span className="w-2 h-6 bg-amber-500 rounded"></span>
                     ประเภทธุรกิจ
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                     {buildingTypes.map((type) => (
                        <div 
                           key={type.id}
                           onClick={() => setSelectedType(type)}
                           className={`p-4 rounded-xl cursor-pointer border-2 transition-all duration-300 ${selectedType.id === type.id ? 'border-amber-500 bg-slate-800' : 'border-slate-800 hover:border-slate-700 bg-slate-900'}`}
                        >
                           <h4 className={`font-bold ${selectedType.id === type.id ? 'text-amber-500' : 'text-slate-300'}`}>{type.name}</h4>
                        </div>
                     ))}
                  </div>

                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 mt-auto">
                     <span className="w-2 h-6 bg-amber-500 rounded"></span>
                     ขนาดพื้นที่ (ตร.ม.)
                  </h3>

                  <div className="space-y-4">
                     <input 
                        type="range" 
                        min="1" 
                        max="5" 
                        step="0.5" 
                        value={sizeMultiplier}
                        onChange={(e) => setSizeMultiplier(parseFloat(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                     />
                     <div className="flex justify-between text-xs text-slate-400 font-bold">
                        <span>เล็ก (เริ่มต้น)</span>
                        <span>ขนาดใหญ่</span>
                     </div>
                  </div>
               </div>

               {/* Right Output */}
               <div className="w-full lg:w-2/3 p-8 bg-slate-50 relative">
                  {/* Decorative Blueprint Lines */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     {/* Dynamic Image with Loading effect simulation */}
                     <div className="w-full h-64 bg-slate-200 rounded-xl mb-6 overflow-hidden relative group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                           key={selectedType.id} 
                           src={selectedType.img} 
                           className="w-full h-full object-cover animate-fade-in-up" 
                           alt={selectedType.name} 
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900 shadow">
                           3D PREVIEW MODE
                        </div>
                     </div>

                     <h2 className="text-2xl font-black text-slate-900 mb-2">{selectedType.name}</h2>
                     <p className="text-sm text-slate-600 mb-6 bg-slate-100 p-4 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">วัสดุและโครงสร้าง (Specs):</span>
                        {selectedType.specs}
                     </p>

                     <div className="mt-auto grid grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">ระยะเวลาติดตั้งโดยประมาณ</p>
                           <p className="text-2xl font-black text-slate-900 flex items-center gap-2">
                              <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              {selectedType.time}
                           </p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-5 shadow-md text-white">
                           <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">ราคาประเมินเบื้องต้น</p>
                           <p className="text-3xl font-black">
                              <span className="text-lg font-medium mr-1">฿</span>
                              {calculatedPrice.toLocaleString()}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- NEW SECTION: Why Choose Us --- */}
      <div className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16">ทำไมต้องสร้างอาคารกับ STEEL<span className="font-light">FRAME</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "รวดเร็ว (Speed)", desc: "ประหยัดเวลาการก่อสร้างหน้างานได้ถึง 70%", icon: "⏱️" },
              { title: "แม่นยำ (Precision)", desc: "ผลิตด้วยเครื่องจักร CNC ควบคุมด้วยคอมพิวเตอร์", icon: "📐" },
              { title: "คงทน (Durability)", desc: "เหล็ก High-Tensile เคลือบกันสนิมมาตรฐานสากล", icon: "🛡️" },
              { title: "คุ้มค่า (Cost-effective)", desc: "งบไม่บานปลาย ลดค่าแรงและเศษวัสดุหน้างาน", icon: "💰" }
            ].map((feat, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl hover:-translate-y-2 transition-transform shadow-sm">
                <div className="text-5xl mb-4">{feat.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black tracking-tighter text-white mb-6 flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded transform -skew-x-12"></div>
              STEEL<span className="text-slate-400 font-light">FRAME</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">ผู้นำด้านนวัตกรรมอาคารเหล็กสำเร็จรูปครบวงจร บริการออกแบบ ผลิต และติดตั้งทั่วประเทศ</p>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-6">บริการของเรา</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">รับสร้างโรงงานสำเร็จรูป</a></li>
              <li><a href="#" className="hover:text-white transition-colors">รับสร้างโกดังเก็บสินค้า</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ออฟฟิศน็อคดาวน์</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ร้านค้าสำเร็จรูป</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-6">ข้อมูลติดต่อ</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>123 นิคมอุตสาหกรรม, ระยอง 21150</li>
              <li>โทร: 02-123-4567</li>
              <li>อีเมล: sales@steelframe-prefab.com</li>
              <li>LINE: @steelframe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-500 mb-6">รับข่าวสาร</h4>
            <p className="text-sm text-slate-400 mb-4">สมัครรับข้อมูลอัปเดตและโปรโมชั่นพิเศษ</p>
            <div className="flex">
              <input type="email" placeholder="อีเมลของคุณ" className="bg-slate-800 text-white px-4 py-2 w-full outline-none" />
              <button className="bg-amber-500 text-slate-900 font-bold px-4">ส่ง</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 STEEL FRAME PREFAB. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
