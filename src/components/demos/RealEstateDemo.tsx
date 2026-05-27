"use client";

import { useState, useEffect } from "react";

const houseModels = [
  {
    id: "majestic",
    name: "THE MAJESTIC",
    tagline: "สัมผัสความโอ่อ่าเหนือระดับ",
    area: "450 Sq.m.",
    land: "120 Sq.wa.",
    beds: 4,
    baths: 5,
    parking: 3,
    price: "เริ่ม 35 ล้านบาท",
    img: "https://loremflickr.com/1200/800/modern,villa?lock=201"
  },
  {
    id: "prestige",
    name: "THE PRESTIGE",
    tagline: "สะท้อนความสำเร็จในทุกรายละเอียด",
    area: "380 Sq.m.",
    land: "100 Sq.wa.",
    beds: 4,
    baths: 4,
    parking: 3,
    price: "เริ่ม 28 ล้านบาท",
    img: "https://loremflickr.com/1200/800/contemporary,house?lock=202"
  },
  {
    id: "elegance",
    name: "THE ELEGANCE",
    tagline: "ความสมบูรณ์แบบที่ลงตัว",
    area: "320 Sq.m.",
    land: "85 Sq.wa.",
    beds: 3,
    baths: 4,
    parking: 2,
    price: "เริ่ม 22 ล้านบาท",
    img: "https://loremflickr.com/1200/800/architecture,modern?lock=203"
  }
];

const facilities = [
  { title: "The Grand Clubhouse", img: "https://loremflickr.com/800/600/clubhouse,luxury?lock=204" },
  { title: "Olympic-Size Pool", img: "https://loremflickr.com/800/600/pool,resort?lock=205" },
  { title: "Verdant Park & Lake", img: "https://loremflickr.com/800/600/park,landscape?lock=206" },
];

export default function RealEstateDemo() {
  const [activeModel, setActiveModel] = useState(houseModels[0]);
  const [scrolled, setScrolled] = useState(false);

  // Parallax effect listener
  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrolled(e.target.scrollTop > 50);
    };
    
    const container = document.getElementById('realestate-scroll');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative overflow-hidden shadow-2xl border border-gray-800 bg-[#0a0a0a] font-serif flex flex-col h-[850px] text-white animate-fade-in-up">
      
      {/* Navigation */}
      <nav className={`absolute w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-700 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="text-2xl tracking-[0.3em] text-[#c5a059] uppercase font-light">
          The <span className="font-bold">Grandeur</span>
        </div>
        
        <div className="hidden lg:flex gap-10 tracking-[0.2em] text-xs uppercase text-white/80 font-sans">
          <span className="cursor-pointer hover:text-[#c5a059] transition-colors">Concept</span>
          <span className="cursor-pointer text-[#c5a059] border-b border-[#c5a059] pb-1">Residences</span>
          <span className="cursor-pointer hover:text-[#c5a059] transition-colors">Facilities</span>
          <span className="cursor-pointer hover:text-[#c5a059] transition-colors">Location</span>
        </div>

        <button className="px-6 py-2 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0a0a0a] text-[10px] tracking-[0.2em] uppercase transition-all duration-500 font-sans">
           Register
        </button>
      </nav>

      <div id="realestate-scroll" className="flex-1 overflow-y-auto scroll-smooth">
        
        {/* Massive Hero Section */}
        <div className="relative h-[800px] w-full flex items-center justify-center overflow-hidden">
           {/* Image */}
           <img 
             src="https://loremflickr.com/1600/900/modern,home,exterior?lock=210" 
             alt="Luxury Estate" 
             className="absolute inset-0 w-full h-full object-cover scale-105 animate-ken-burns" 
           />
           {/* Gradient Overlays for readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]"></div>
           <div className="absolute inset-0 bg-black/20"></div>

           <div className="relative z-10 text-center px-4 mt-32">
              <p className="text-[#c5a059] tracking-[0.4em] text-xs uppercase mb-6 font-sans">A Symphony of Luxury</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide drop-shadow-2xl">
                 BEYOND <span className="italic font-serif text-[#c5a059]">EXPECTATIONS</span>
              </h1>
              <div className="w-[1px] h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto mb-8"></div>
              <p className="text-white/80 font-sans font-light tracking-widest text-sm max-w-lg mx-auto leading-relaxed">
                 คฤหาสน์หรูระดับ Ultimate Luxury สังคมส่วนตัวเพียง 35 ยูนิต เอกสิทธิ์เฉพาะผู้ครอบครอง
              </p>
           </div>

           {/* Scroll Indicator */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
              <span className="text-[9px] uppercase tracking-[0.3em] font-sans">Discover</span>
              <div className="w-[1px] h-8 bg-white/50"></div>
           </div>
        </div>

        {/* --- House Models (Residences) --- */}
        <div className="bg-[#0a0a0a] pt-32 pb-24 relative z-20">
           <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl text-[#c5a059] tracking-[0.2em] font-light uppercase mb-4">The Residences</h2>
                 <p className="text-white/60 font-sans font-light">สะท้อนวิสัยทัศน์แห่งความสำเร็จ ผ่านงานสถาปัตยกรรมร่วมสมัย</p>
              </div>

              {/* Model Selector / Tabs */}
              <div className="flex flex-wrap justify-center gap-8 mb-16 font-sans">
                 {houseModels.map(model => (
                    <button 
                       key={model.id}
                       onClick={() => setActiveModel(model)}
                       className={`text-xs tracking-[0.2em] uppercase pb-2 transition-all duration-500 ${activeModel.id === model.id ? 'text-[#c5a059] border-b border-[#c5a059]' : 'text-white/40 hover:text-white/80'}`}
                    >
                       {model.name}
                    </button>
                 ))}
              </div>

              {/* Active Model Showcase */}
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                 {/* Large House Image (Interactive Change) */}
                 <div className="w-full lg:w-2/3 relative h-[400px] lg:h-[600px] overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                       key={activeModel.id}
                       src={activeModel.img} 
                       alt={activeModel.name} 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-fade-in-up" 
                    />
                    <div className="absolute bottom-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md p-6 border-t border-r border-[#c5a059]/30">
                       <p className="text-[#c5a059] text-xl tracking-[0.2em] uppercase">{activeModel.name}</p>
                       <p className="text-white/60 text-xs font-sans mt-1">{activeModel.tagline}</p>
                    </div>
                 </div>

                 {/* House Specs */}
                 <div className="w-full lg:w-1/3">
                    <div className="border-l border-[#c5a059]/30 pl-8 py-4 space-y-8 font-sans">
                       
                       <div>
                          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-1">Usable Area</p>
                          <p className="text-2xl text-white font-light">{activeModel.area}</p>
                       </div>
                       
                       <div>
                          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-1">Land Size</p>
                          <p className="text-xl text-white font-light">{activeModel.land}</p>
                       </div>

                       <div className="flex gap-8 border-t border-white/10 pt-8">
                          <div>
                             <p className="text-[#c5a059] text-3xl font-light">{activeModel.beds}</p>
                             <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Bedrooms</p>
                          </div>
                          <div>
                             <p className="text-[#c5a059] text-3xl font-light">{activeModel.baths}</p>
                             <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Bathrooms</p>
                          </div>
                          <div>
                             <p className="text-[#c5a059] text-3xl font-light">{activeModel.parking}</p>
                             <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Parking</p>
                          </div>
                       </div>

                       <div className="pt-8">
                          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">Starting Price</p>
                          <p className="text-2xl text-[#c5a059]">{activeModel.price}</p>
                       </div>

                       <button className="w-full py-4 mt-4 bg-[#c5a059] text-[#0a0a0a] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500">
                          View Floorplan
                       </button>

                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* --- Facilities (Gallery Style) --- */}
        <div className="bg-[#111] py-24 border-t border-white/5 relative z-20">
           <div className="max-w-7xl mx-auto px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                 <div>
                    <h2 className="text-3xl text-[#c5a059] tracking-[0.2em] font-light uppercase mb-2">Premium Facilities</h2>
                    <p className="text-white/60 font-sans font-light">เอกสิทธิ์แห่งการใช้ชีวิตเหนือระดับ</p>
                 </div>
                 <button className="text-white/40 hover:text-[#c5a059] text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-1 transition-colors font-sans">
                    View Gallery &rarr;
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {facilities.map((fac, idx) => (
                    <div key={idx} className="group relative h-[400px] overflow-hidden cursor-pointer">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="w-8 h-[1px] bg-[#c5a059] mb-4 transition-all duration-500 group-hover:w-16"></div>
                          <h3 className="text-lg tracking-[0.1em] font-light text-white">{fac.title}</h3>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <footer className="bg-[#050505] py-16 text-center border-t border-[#c5a059]/20 font-sans">
           <div className="text-xl tracking-[0.3em] text-[#c5a059] uppercase font-serif font-light mb-6">
             The Grandeur
           </div>
           <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">© 2026 THE GRANDEUR RESIDENCE. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out forwards;
        }
      `}} />
    </div>
  );
}
