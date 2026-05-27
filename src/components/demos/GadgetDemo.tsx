"use client";

import { useState } from "react";

const heroProduct = {
  name: "NEXUS PRO WIRELESS",
  tagline: "Absolute Silence. Pure Sound.",
  price: "฿ 12,990",
  desc: "สัมผัสประสบการณ์เสียงเหนือระดับด้วยระบบ Active Noise Cancellation (ANC) ตัดเสียงรบกวนรอบข้างได้ถึง 99% พร้อมแบตเตอรี่ใช้งานต่อเนื่อง 40 ชั่วโมง ดีไซน์มินิมอลน้ำหนักเบา สวมใส่สบายตลอดวัน",
  img: "https://loremflickr.com/800/800/headphones,wireless?lock=555",
  colors: [
    { id: "carbon", name: "Carbon Black", hex: "#1a1a1a", filter: "grayscale(100%) brightness(50%)" },
    { id: "glacier", name: "Glacier White", hex: "#f1f5f9", filter: "grayscale(100%) brightness(150%) sepia(10%) hue-rotate(180deg)" },
    { id: "neon", name: "Cyber Blue", hex: "#0ea5e9", filter: "sepia(100%) hue-rotate(190deg) saturate(500%) brightness(90%)" }
  ]
};

const products = [
  { 
    id: 1, 
    name: "NEXUS SOUNDBAR X.1", 
    category: "Speaker",
    price: "฿ 18,500", 
    img: "https://loremflickr.com/600/600/soundbar,speaker?lock=501", 
    specs: ["Dolby Atmos 7.1.2", "Wireless Subwoofer", "HDMI eARC"],
    badge: "New"
  },
  { 
    id: 2, 
    name: "AERO MECH KEYBOARD", 
    category: "Peripherals",
    price: "฿ 4,990", 
    img: "https://loremflickr.com/600/600/keyboard,mechanical?lock=502", 
    specs: ["Hot-Swappable", "PBT Keycaps", "RGB Sync Matrix"],
    badge: "Trending"
  },
  { 
    id: 3, 
    name: "ERGO-DESK PRO", 
    category: "Workspace",
    price: "฿ 14,900", 
    img: "https://loremflickr.com/600/600/desk,workspace?lock=503", 
    specs: ["Dual Motor Lift", "Memory Presets", "Carbon Fiber Top"],
    badge: null
  },
  { 
    id: 4, 
    name: "ORBIT GAMING MOUSE", 
    category: "Peripherals",
    price: "฿ 3,290", 
    img: "https://loremflickr.com/600/600/mouse,gaming?lock=504", 
    specs: ["26,000 DPI Sensor", "Ultra-light 55g", "Optical Switches"],
    badge: null
  }
];

export default function GadgetDemo() {
  const [activeColor, setActiveColor] = useState(heroProduct.colors[0]);

  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-100 bg-[#f8fafc] font-sans flex flex-col min-h-[850px] text-gray-800 animate-fade-in-up">
      
      {/* Top Notification Bar */}
      <div className="bg-[#0ea5e9] text-white text-[10px] uppercase tracking-widest py-2 text-center font-bold">
        Free Next-Day Delivery on orders over ฿3,000
      </div>

      {/* Modern Tech Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-1">
          <svg className="w-6 h-6 text-[#0ea5e9]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          NEXUS<span className="font-light text-gray-400">GEAR</span>
        </div>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold text-gray-500">
           <span className="text-gray-900 cursor-pointer">Audio</span>
           <span className="hover:text-[#0ea5e9] cursor-pointer transition-colors">Workspace</span>
           <span className="hover:text-[#0ea5e9] cursor-pointer transition-colors">Peripherals</span>
           <span className="hover:text-[#0ea5e9] cursor-pointer transition-colors">Support</span>
        </div>

        <div className="flex items-center gap-5 text-gray-700">
           <button className="hover:text-[#0ea5e9] transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </button>
           <button className="hover:text-[#0ea5e9] transition-colors relative">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">1</span>
           </button>
        </div>
      </nav>

      {/* Interactive Hero Section (Clean & Minimal) */}
      <div className="relative bg-white pt-12 pb-24 lg:py-20 px-8 border-b border-gray-100 overflow-hidden">
         {/* Subtle background tech pattern */}
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-12">
            
            {/* Left: Text & Interactive Color Switcher */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
               <div className="inline-block px-3 py-1 bg-blue-50 text-[#0ea5e9] text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                  Flagship Audio 2026
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tighter leading-none">
                  {heroProduct.name}
               </h1>
               <p className="text-2xl font-light text-gray-400 mb-6">{heroProduct.tagline}</p>
               <p className="text-gray-500 mb-10 max-w-lg text-sm leading-relaxed">
                  {heroProduct.desc}
               </p>

               {/* COLOR SWITCHER GIMMICK */}
               <div className="mb-10 w-full">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Select Color: <span className="text-gray-900">{activeColor.name}</span></p>
                  <div className="flex gap-4">
                     {heroProduct.colors.map(color => (
                        <button 
                           key={color.id}
                           onClick={() => setActiveColor(color)}
                           className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${activeColor.id === color.id ? 'border-[#0ea5e9] scale-110 shadow-lg shadow-[#0ea5e9]/30' : 'border-transparent hover:border-gray-300'}`}
                        >
                           <span className="w-8 h-8 rounded-full shadow-inner border border-gray-200" style={{ backgroundColor: color.hex }}></span>
                        </button>
                     ))}
                  </div>
               </div>

               <div className="flex items-center gap-6">
                  <span className="text-3xl font-black text-gray-900">{heroProduct.price}</span>
                  <button className="bg-gray-900 hover:bg-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 text-sm flex items-center gap-2">
                     Buy Now
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
               </div>
            </div>

            {/* Right: Floating Product Image with CSS Filter */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
               {/* Ambient Glow behind image */}
               <div 
                  className="absolute w-64 h-64 rounded-full blur-[100px] opacity-30 transition-all duration-700" 
                  style={{ backgroundColor: activeColor.hex === '#1a1a1a' ? '#64748b' : activeColor.hex }}
               ></div>
               
               {/* Product Image with Hover Float & Dynamic CSS Filter */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                  src={heroProduct.img} 
                  alt="Nexus Pro" 
                  className="w-full h-full object-contain relative z-10 animate-float drop-shadow-2xl transition-all duration-700 ease-in-out"
                  style={{ filter: activeColor.filter }} 
               />
               
               {/* Tech Spec Callouts (Decorative) */}
               <div className="absolute top-1/4 -right-4 bg-white/90 backdrop-blur shadow-lg border border-gray-100 rounded-lg p-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest animate-fade-in-up delay-300 hidden md:block">
                  <span className="text-[#0ea5e9] mr-2">●</span> ANC 99%
               </div>
               <div className="absolute bottom-1/4 -left-4 bg-white/90 backdrop-blur shadow-lg border border-gray-100 rounded-lg p-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest animate-fade-in-up delay-500 hidden md:block">
                  <span className="text-[#0ea5e9] mr-2">●</span> 40h Battery
               </div>
            </div>

         </div>
      </div>

      {/* Featured Products (Spec Reveal Hover Gimmick) */}
      <div className="py-24 px-8">
         <div className="max-w-7xl mx-auto">
            
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Complete Your Setup</h2>
                  <p className="text-gray-500 mt-2">อุปกรณ์เสริมที่ออกแบบมาเพื่อการทำงานและเล่นเกม</p>
               </div>
               <button className="text-sm font-bold text-[#0ea5e9] hover:text-gray-900 transition-colors flex items-center gap-1">
                  View All Gear <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {products.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 group relative">
                     
                     {/* Image & Badge */}
                     <div className="relative aspect-square bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                        {product.badge && (
                           <div className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                              {product.badge}
                           </div>
                        )}
                        <img 
                           src={product.img} 
                           alt={product.name} 
                           className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                        />
                        
                        {/* SPEC REVEAL GIMMICK (Slides up on hover) */}
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                           <p className="text-[10px] text-[#0ea5e9] uppercase tracking-widest font-bold mb-3">Tech Specs</p>
                           <ul className="space-y-2 mb-6">
                              {product.specs.map((spec, idx) => (
                                 <li key={idx} className="text-sm text-gray-700 font-medium flex items-center gap-2">
                                    <svg className="w-3 h-3 text-[#0ea5e9]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                                    {spec}
                                 </li>
                              ))}
                           </ul>
                           <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-[#0ea5e9] transition-colors text-xs uppercase tracking-widest">
                              Add to Cart
                           </button>
                        </div>
                     </div>
                     
                     {/* Info Area (Hidden when spec panel covers it visually, but keeps layout) */}
                     <div className="p-6">
                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">{product.category}</p>
                        <h3 className="text-lg font-black text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-[#0ea5e9] font-bold">{product.price}</p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
