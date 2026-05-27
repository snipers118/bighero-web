"use client";

import { useState } from "react";

const vehicles = [
  {
    id: "4wheel-pickup",
    name: "รถกระบะ 4 ล้อ (ตอนเดียว)",
    desc: "เหมาะสำหรับย้ายหอพัก, ขนส่งสินค้าทั่วไปขนาดเล็ก",
    baseRate: 300,
    ratePerKm: 12,
    capacity: "บรรทุกสูงสุด 1.5 ตัน",
    img: "https://loremflickr.com/600/400/pickup,truck?lock=110",
    color: "bg-blue-500"
  },
  {
    id: "4wheel-jumbo",
    name: "รถกระบะ 4 ล้อ จัมโบ้ (ตู้ทึบ)",
    desc: "เหมาะสำหรับสินค้าที่ต้องการการป้องกันสภาพอากาศ",
    baseRate: 500,
    ratePerKm: 15,
    capacity: "บรรทุกสูงสุด 2.5 ตัน",
    img: "https://loremflickr.com/600/400/truck,box?lock=111",
    color: "bg-indigo-500"
  },
  {
    id: "6wheel-truck",
    name: "รถบรรทุก 6 ล้อ",
    desc: "เหมาะสำหรับขนย้ายสำนักงาน, วัสดุก่อสร้าง, สินค้าโรงงาน",
    baseRate: 1500,
    ratePerKm: 25,
    capacity: "บรรทุกสูงสุด 5-7 ตัน",
    img: "https://loremflickr.com/600/400/truck,cargo?lock=112",
    color: "bg-orange-500"
  }
];

export default function TransportDemo() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [distance, setDistance] = useState(15); // km

  const calculateFare = () => {
    return selectedVehicle.baseRate + (selectedVehicle.ratePerKm * distance);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-white font-sans flex flex-col min-h-[850px] animate-fade-in-up">
      
      {/* Top Utility Bar */}
      <div className="bg-[#f0f3f7] text-slate-600 text-[11px] font-bold py-2 px-6 flex justify-between items-center uppercase tracking-widest hidden sm:flex">
        <div className="flex gap-6">
           <span className="flex items-center gap-1"><svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg> 02-999-8888 (24/7 Support)</span>
           <span className="flex items-center gap-1"><svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg> ให้บริการทั่วประเทศไทย</span>
        </div>
        <div className="flex gap-4">
           <span className="hover:text-orange-500 cursor-pointer transition-colors">ติดตามสถานะ (Track & Trace)</span>
           <span className="hover:text-orange-500 cursor-pointer transition-colors">เข้าสู่ระบบ / สมัครสมาชิก</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="text-3xl font-black tracking-tighter text-[#0b1d3a] flex items-center gap-2 italic">
          <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          FAST<span className="text-orange-500 font-black">MOVE</span>
        </div>
        <div className="hidden lg:flex gap-8 font-bold text-sm text-[#0b1d3a] uppercase tracking-wide">
           <span className="cursor-pointer text-orange-500">บริการของเรา</span>
           <span className="hover:text-orange-500 cursor-pointer transition-colors">ประเภทรถรับจ้าง</span>
           <span className="hover:text-orange-500 cursor-pointer transition-colors">พื้นที่ให้บริการ</span>
           <span className="hover:text-orange-500 cursor-pointer transition-colors">ติดต่อเรา</span>
        </div>
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-black rounded-lg shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wider flex items-center gap-2">
           จองรถทันที
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </nav>

      {/* Hero Section & Fare Estimator */}
      <div className="relative flex flex-col lg:flex-row bg-[#0b1d3a] overflow-hidden">
         {/* Background Map Graphic */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         {/* Left text */}
         <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 font-black text-xs uppercase tracking-widest mb-6 border border-orange-500 w-max rounded">
               🚚 รถรับจ้าง 4 ล้อ - 6 ล้อ ทั่วประเทศ
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
               ขนส่งรวดเร็ว ปลอดภัย<br/>
               <span className="text-orange-500">ถึงที่หมายตรงเวลา</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl font-medium leading-relaxed">
               บริการรถรับจ้าง ขนของ ย้ายบ้าน ขนส่งสินค้าโรงงาน พร้อมคนยกของมืออาชีพ ประเมินราคาชัดเจน ไม่มีบวกเพิ่มหน้างาน
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md">
               <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-sm">
                  <h4 className="text-3xl font-black text-white mb-1">5K+</h4>
                  <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">เที่ยววิ่งต่อเดือน</p>
               </div>
               <div className="bg-white/10 p-4 rounded-lg border border-white/20 backdrop-blur-sm">
                  <h4 className="text-3xl font-black text-white mb-1">100%</h4>
                  <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">รับประกันสินค้า</p>
               </div>
            </div>
         </div>

         {/* Right Interactive Estimator */}
         <div className="w-full lg:w-1/2 p-8 lg:p-16 relative z-10 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 lg:p-8 relative">
               <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-black text-xs uppercase px-4 py-2 rounded shadow-lg transform rotate-3">
                  ระบบประเมินราคา
               </div>
               
               <h3 className="text-xl font-black text-[#0b1d3a] mb-6 border-b border-slate-100 pb-4">คำนวณค่าขนส่งเบื้องต้น</h3>
               
               <div className="space-y-6">
                  {/* Vehicle Selection */}
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">1. เลือกประเภทรถ</label>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {vehicles.map(v => (
                           <div 
                              key={v.id} 
                              onClick={() => setSelectedVehicle(v)}
                              className={`cursor-pointer rounded-xl p-3 border-2 transition-all text-center flex flex-col items-center justify-center gap-2 ${selectedVehicle.id === v.id ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-slate-300'}`}
                           >
                              <div className={`w-10 h-10 rounded-full ${v.color} flex items-center justify-center text-white`}>
                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
                              </div>
                              <span className={`text-[10px] font-bold ${selectedVehicle.id === v.id ? 'text-orange-600' : 'text-slate-600'}`}>
                                 {v.name.split(' ')[1]} {v.name.split(' ')[2] || ''}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Distance Slider */}
                  <div>
                     <label className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                        <span>2. ระยะทางโดยประมาณ</span>
                        <span className="text-orange-500 text-base">{distance} กม.</span>
                     </label>
                     <input 
                        type="range" 
                        min="1" max="500" 
                        value={distance} 
                        onChange={(e) => setDistance(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500" 
                     />
                  </div>

                  {/* Result Panel */}
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-5 text-center shadow-inner">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">ราคาประเมิน (ไม่รวมคนยก)</p>
                     <div className="text-4xl font-black text-[#0b1d3a] mb-2 flex justify-center items-end gap-1">
                        <span className="text-lg text-slate-400 mb-1">฿</span>
                        {calculateFare().toLocaleString()}
                     </div>
                     <p className="text-[10px] text-orange-600 font-bold bg-orange-100 rounded-full inline-block px-3 py-1">
                        {selectedVehicle.name} • {selectedVehicle.capacity}
                     </p>
                  </div>
                  
                  <button className="w-full py-4 bg-[#0b1d3a] hover:bg-[#152e55] text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-lg transition-colors">
                     จองรถประเภทนี้
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Fleet Showcase */}
      <div className="flex-1 bg-[#f0f3f7] py-20 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-black text-[#0b1d3a] mb-4">ประเภทรถรับจ้างของเรา</h2>
               <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {vehicles.map((v) => (
                  <div key={v.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                     <div className="relative h-48 overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                        <div className={`absolute top-4 left-4 ${v.color} text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-md`}>
                           {v.capacity}
                        </div>
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-black text-[#0b1d3a] mb-2">{v.name}</h3>
                        <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{v.desc}</p>
                        <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                           <div>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">ราคาเริ่มต้น</p>
                              <p className="text-lg font-black text-orange-500">฿{v.baseRate}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">+ ต่อกม.</p>
                              <p className="text-lg font-black text-[#0b1d3a]">฿{v.ratePerKm}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      {/* --- NEW SECTION: How it Works --- */}
      <div className="py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#0b1d3a] mb-16">ขั้นตอนการใช้บริการที่ง่ายและรวดเร็ว</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "เช็คราคาฟรี", desc: "ประเมินราคาผ่านระบบออนไลน์ หรือโทรติดต่อฝ่ายขาย", icon: "📱" },
              { step: "02", title: "ยืนยันการจอง", desc: "ระบุวันเวลาและสถานที่ ต้นทาง-ปลายทาง", icon: "✅" },
              { step: "03", title: "รถเข้ารับสินค้า", desc: "พนักงานมืออาชีพเข้ารับของตรงเวลา พร้อมดูแลอย่างดี", icon: "🚚" },
              { step: "04", title: "จัดส่งถึงที่หมาย", desc: "ติดตามสถานะได้ตลอดเวลาจนกว่าของจะถึงมือผู้รับ", icon: "📍" }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="w-20 h-20 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="absolute top-10 left-[60%] w-full h-[2px] bg-slate-100 -z-10 hidden md:block"></div>
                <h3 className="text-xl font-black text-[#0b1d3a] mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-[#0b1d3a] text-slate-300 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-black tracking-tighter text-white mb-6 flex items-center gap-2 italic">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              FAST<span className="text-orange-500 font-black">MOVE</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">บริการรถรับจ้างขนของ ขนส่งสินค้า ย้ายบ้าน ย้ายสำนักงาน ทั่วประเทศไทย ด้วยทีมงานมืออาชีพและรถคุณภาพ</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">LINE</div>
            </div>
          </div>
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-wider">บริการของเรา</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">รถกระบะรับจ้าง</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">รถ 6 ล้อรับจ้าง</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">บริการขนย้ายบ้าน/สำนักงาน</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">บริการแพ็คสินค้า</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-wider">ติดต่อเรา</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-orange-500">📞</span> 02-999-8888 (24 ชม.)</li>
              <li className="flex gap-2"><span className="text-orange-500">📱</span> 089-123-4567</li>
              <li className="flex gap-2"><span className="text-orange-500">📧</span> booking@fastmove.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-wider">โหลดแอปพลิเคชัน</h4>
            <p className="text-sm text-slate-400 mb-4">จองรถและติดตามสถานะได้ง่ายขึ้นผ่านแอป FASTMOVE</p>
            <div className="flex flex-col gap-3">
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 py-2 px-4 rounded text-xs font-bold text-left flex items-center gap-3 transition-colors">
                <span className="text-2xl text-white"></span> App Store
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 py-2 px-4 rounded text-xs font-bold text-left flex items-center gap-3 transition-colors">
                <span className="text-2xl text-white">▶</span> Google Play
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 FASTMOVE TRANSPORT LOGISTICS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-white transition-colors">ข้อตกลงและเงื่อนไข</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
