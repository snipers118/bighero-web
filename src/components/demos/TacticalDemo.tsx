"use client";

import { useState, useEffect } from "react";

// Mock Product Data with Tactical Images
const products = [
  { id: 1, name: "Spec-Ops Combat Vest", category: "Apparel", price: 3490, img: "https://loremflickr.com/400/600/tactical,vest?lock=101", stock: "IN STOCK", rating: 4.9 },
  { id: 2, name: "Recon Camouflage Jacket", category: "Uniform", price: 2890, img: "https://loremflickr.com/400/600/camouflage,jacket?lock=102", stock: "LOW STOCK", rating: 4.7 },
  { id: 3, name: "Titanium Assault Boots", category: "Footwear", price: 4290, img: "https://loremflickr.com/400/600/military,boots?lock=103", stock: "IN STOCK", rating: 5.0 },
  { id: 4, name: "Ghost Tactical Backpack", category: "Gear", price: 2590, img: "https://loremflickr.com/400/600/tactical,backpack?lock=104", stock: "IN STOCK", rating: 4.8 },
  { id: 5, name: "Night Vision Goggles Gen III", category: "Optics", price: 12900, img: "https://loremflickr.com/400/600/military,goggles?lock=105", stock: "PRE-ORDER", rating: 4.9 },
  { id: 6, name: "Kevlar Tactical Gloves", category: "Accessories", price: 1190, img: "https://loremflickr.com/400/600/tactical,gloves?lock=106", stock: "IN STOCK", rating: 4.6 },
];

export default function TacticalDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-700 bg-[#0a0a0c] font-sans flex flex-col min-h-[850px] text-slate-300"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated HUD Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Radar Sweep Effect */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full border border-emerald-500/20 opacity-30 z-0 flex items-center justify-center">
         <div className="w-full h-full rounded-full border border-emerald-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
         <div className="absolute w-[250px] h-[250px] bg-gradient-to-tr from-transparent via-emerald-500/20 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Interactive Crosshair (follows mouse) */}
      <div 
        className="absolute z-50 pointer-events-none transition-transform duration-75 ease-out opacity-40 mix-blend-screen"
        style={{ transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px)` }}
      >
        <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="40" strokeDasharray="5 5" />
          <path d="M50 0 V30 M50 70 V100 M0 50 H30 M70 50 H100" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Top Warning/Status Bar */}
      <div className="bg-[#1a1a1c] border-b border-slate-800 text-[10px] font-mono flex justify-between px-4 py-1.5 z-40 relative text-emerald-500/70">
        <span className="flex items-center gap-2">
           <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
           SYS_STATUS: OPERATIONAL
        </span>
        <span className="tracking-widest">SECURE CONNECTION ESTABLISHED</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex gap-8 hidden md:flex font-mono text-xs font-bold tracking-widest">
          <span className="text-white border-b-2 border-emerald-500 pb-1 cursor-pointer">ARMORY</span>
          <span className="text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors">APPAREL</span>
          <span className="text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors">TACTICAL GEAR</span>
        </div>
        
        <div className="text-2xl font-black tracking-tighter text-white mx-auto md:mx-0 flex items-center gap-2">
          <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          GHOST<span className="text-slate-500">GEAR</span>
        </div>

        <div className="flex items-center gap-6 font-mono">
          <button className="text-slate-400 hover:text-white transition-colors relative group">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="text-slate-400 hover:text-white transition-colors relative group flex items-center gap-2 border border-slate-700 px-3 py-1.5 rounded bg-slate-800/50 hover:border-emerald-500">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="text-xs font-bold text-white group-hover:text-emerald-400">0 ITEMS</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[450px] flex flex-col justify-center px-8 lg:px-20 z-10 border-b border-slate-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://loremflickr.com/1200/600/military,tactical?lock=99" alt="Tactical Background" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-[10px] tracking-widest mb-4">
             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
             NEW DEPLOYMENT 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase leading-none tracking-tight">
            Built for the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Unforgiving</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 mb-8 max-w-md leading-relaxed border-l-2 border-slate-700 pl-4">
            Professional grade tactical gear and military equipment engineered for extreme conditions and peak performance.
          </p>
          <div className="flex gap-4 font-mono">
             <button className="relative group px-8 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden">
                <div className="absolute inset-0 w-0 bg-emerald-500 transition-all duration-300 ease-out group-hover:w-full -z-10"></div>
                <span className="group-hover:text-white transition-colors relative z-10">Explore Arsenal</span>
             </button>
             <button className="px-8 py-3 border border-slate-600 text-slate-300 hover:text-white hover:border-white font-bold text-sm uppercase tracking-widest transition-colors backdrop-blur-sm">
                View Specs
             </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#0a0a0c] py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                 <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 Tactical Loadout
              </h2>
            </div>
            <div className="flex gap-4 font-mono text-xs">
               <span className="text-emerald-500 border-b border-emerald-500 pb-1 cursor-pointer">ALL GEAR</span>
               <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">APPAREL</span>
               <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">ACCESSORIES</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-[#121214] border border-slate-800 hover:border-emerald-500/50 transition-colors duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Target Brackets (Hover Effect) */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-all duration-300 z-20 ${hoveredProduct === product.id ? 'border-emerald-500 scale-100' : 'border-transparent scale-150'}`}></div>
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-all duration-300 z-20 ${hoveredProduct === product.id ? 'border-emerald-500 scale-100' : 'border-transparent scale-150'}`}></div>
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-all duration-300 z-20 ${hoveredProduct === product.id ? 'border-emerald-500 scale-100' : 'border-transparent scale-150'}`}></div>
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-all duration-300 z-20 ${hoveredProduct === product.id ? 'border-emerald-500 scale-100' : 'border-transparent scale-150'}`}></div>

                {/* Product Image */}
                <div className={`aspect-[4/5] bg-slate-900 relative flex items-center justify-center overflow-hidden`}>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={product.img} alt={product.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-110" loading="lazy" />
                   
                   {/* Overlay scan line */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-[10%] opacity-0 group-hover:opacity-100 animate-scan"></div>

                   {/* Badges */}
                   <div className="absolute top-3 left-3 bg-[#0a0a0c]/80 backdrop-blur border border-slate-700 text-white text-[9px] font-mono font-bold px-2 py-1 uppercase tracking-widest flex items-center gap-1">
                     <span className={`w-1.5 h-1.5 rounded-full ${product.stock === 'IN STOCK' ? 'bg-emerald-500' : product.stock === 'LOW STOCK' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
                     {product.stock}
                   </div>

                   {/* Hover Action (Glitch Button) */}
                   <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <button className="w-full bg-emerald-500/90 hover:bg-emerald-400 backdrop-blur text-black font-black text-xs py-3 uppercase tracking-widest flex justify-center items-center gap-2 group/btn relative overflow-hidden">
                       <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:animate-shine"></span>
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                       ENGAGE PURCHASE
                     </button>
                   </div>
                </div>

                {/* Product Info */}
                <div className="p-4 border-t border-slate-800">
                  <div className="flex justify-between items-start mb-1">
                     <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">{product.category}</p>
                     <div className="flex items-center gap-1 text-emerald-500 text-[10px]">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        {product.rating}
                     </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3 tracking-wide truncate group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-2 font-mono">
                     <span className="text-emerald-500 font-bold">฿{product.price.toLocaleString()}</span>
                     <span className="text-slate-600 line-through text-[10px]">฿{(product.price * 1.2).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Technical Specs --- */}
      <div className="py-20 bg-[#121214] border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Mil-Spec Engineering</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Every piece of GhostGear is rigorously tested to meet or exceed military specifications for durability, utility, and stealth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
            {[
              { title: "CORDURA® FABRIC", desc: "Abrasion-resistant 1000D nylon for extreme durability.", icon: "🛡️" },
              { title: "YKK® ZIPPERS", desc: "Self-repairing, weather-sealed closures.", icon: "⚡" },
              { title: "NIR COMPLIANT", desc: "Reduces near-infrared signature for stealth ops.", icon: "🕶️" }
            ].map((spec, i) => (
              <div key={i} className="p-8 border border-slate-800 bg-[#0a0a0c] relative group hover:border-emerald-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500"></div>
                <div className="text-4xl mb-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{spec.icon}</div>
                <h3 className="text-emerald-500 font-bold mb-2 tracking-widest">{spec.title}</h3>
                <p className="text-xs text-slate-500">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Field Reports (Reviews) --- */}
      <div className="py-20 bg-[#0a0a0c] border-t border-slate-800 relative z-10 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-black text-white uppercase tracking-wider flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Declassified Field Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "REP-492", author: "OPERATOR ALPHA", text: "The Spec-Ops vest held up during a 48-hour continuous exercise in sub-zero temps. Load distribution is flawless." },
              { id: "REP-811", author: "SGT. BAKER", text: "Titanium boots are surprisingly light. Trekking through mud and rocky terrain was no issue. Completely waterproof." }
            ].map((review, i) => (
              <div key={i} className="p-6 bg-[#121214]/80 backdrop-blur border border-slate-700 font-mono text-sm relative">
                <div className="text-xs text-emerald-500 mb-4 border-b border-slate-800 pb-2">FILE ID: {review.id} // SEC: CLEAR</div>
                <p className="text-slate-400 mb-4 leading-relaxed">"{review.text}"</p>
                <div className="text-xs font-bold text-white tracking-widest">- {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Footer --- */}
      <footer className="bg-[#050505] border-t border-slate-800 pt-16 pb-8 relative z-20 font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-black tracking-tighter text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              GHOST<span className="text-slate-600">GEAR</span>
            </div>
            <p className="mb-6">Advanced tactical equipment for military, law enforcement, and private security professionals.</p>
            <div className="flex gap-4">
              <span className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 cursor-pointer transition-colors">FB</span>
              <span className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 cursor-pointer transition-colors">IG</span>
              <span className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 cursor-pointer transition-colors">YT</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-widest">COMMAND CENTER</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mission Brief (About)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Arsenal (Shop All)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Intel (Blog)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Comms (Contact)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 tracking-widest">SUPPORT HQ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Track Deployment</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ / Briefing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 tracking-widest">ENCRYPTED COMMS</h4>
            <p className="mb-4">Subscribe for classified intel drops and early access to new gear.</p>
            <div className="flex">
              <input type="email" placeholder="ENTER COMM-LINK (EMAIL)" className="bg-[#0a0a0c] border border-slate-700 px-3 py-2 w-full text-white outline-none focus:border-emerald-500" />
              <button className="bg-emerald-500 text-black font-bold px-4 hover:bg-emerald-400">INIT</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 GHOSTGEAR TACTICAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}} />
    </div>
  );
}
