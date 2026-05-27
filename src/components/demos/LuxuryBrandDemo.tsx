"use client";

import { useEffect, useState, useRef } from "react";

export default function LuxuryBrandDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [preloaderHidden, setPreloaderHidden] = useState(false);

  useEffect(() => {
    // Preloader
    const timer = setTimeout(() => {
      setPreloaderHidden(true);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);

      if (window.scrollY > 600) setShowBackToTop(true);
      else setShowBackToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for fade-up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".lb-fade-up").forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <div className="bg-[#FFFEF9] text-[#1A1008] font-sans relative w-full overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .lb-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .lb-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes lb-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .lb-gold-shimmer {
          background: linear-gradient(90deg, #B8860B, #FFD700, #D4A843, #FFD700, #B8860B);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: lb-shimmer 4s linear infinite;
        }
        .lb-hero-overlay {
          background: linear-gradient(to bottom, rgba(26, 16, 8, 0.6) 0%, rgba(26, 16, 8, 0.4) 40%, rgba(26, 16, 8, 0.7) 100%);
        }
        .lb-product-card img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .lb-product-card:hover img {
          transform: scale(1.08);
        }
        .lb-gold-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #D4A843, transparent);
        }
        .lb-btn-gold {
          background: linear-gradient(135deg, #B8860B, #D4A843);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(184, 134, 11, 0.3);
        }
        .lb-btn-gold:hover {
          background: linear-gradient(135deg, #D4A843, #FFD700);
          box-shadow: 0 6px 25px rgba(184, 134, 11, 0.5);
          transform: translateY(-2px);
        }
        .lb-corner-border::before,
        .lb-corner-border::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          border-color: #D4A843;
          border-style: solid;
        }
        .lb-corner-border::before {
          top: -1px; left: -1px; border-width: 2px 0 0 2px;
        }
        .lb-corner-border::after {
          bottom: -1px; right: -1px; border-width: 0 2px 2px 0;
        }
        @keyframes lb-bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .lb-scroll-indicator {
          animation: lb-bounce-slow 2s ease-in-out infinite;
        }
        .lb-nav-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
          position: relative;
        }
        .lb-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #D4A843;
          transition: width 0.3s ease;
        }
        .lb-nav-link:hover { color: #D4A843; }
        .lb-nav-link:hover::after { width: 100%; }
        .lb-testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(212, 168, 67, 0.15);
          transition: all 0.4s ease;
        }
        .lb-testimonial-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(212, 168, 67, 0.3);
          transform: translateY(-4px);
        }
      `}} />

      {/* Preloader */}
      {!preloaderHidden && (
        <div className="fixed inset-0 z-[9999] bg-[#1A1008] flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="text-3xl font-serif text-[#D4A843] tracking-[0.2em] mb-8">ย่านลิเภา</div>
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-6">Nakhon Si Thammarat</p>
          <div className="w-[120px] h-[2px] bg-[#D4A843]/20 rounded overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#B8860B] to-[#FFD700] animate-[preload-fill_1.8s_ease-in-out_forwards]"></div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${scrolled ? 'bg-[#1A1008]/95 backdrop-blur-md py-3 shadow-2xl' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl text-[#D4A843] tracking-wider">ย่านลิเภา</a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="lb-nav-link">หน้าแรก</a>
            <a href="#craftsmanship" className="lb-nav-link">ความประณีต</a>
            <a href="#products" className="lb-nav-link">คอลเลกชัน</a>
            <a href="#testimonials" className="lb-nav-link">เสียงจากลูกค้า</a>
            <a href="#contact" className="lb-btn-gold text-white text-sm px-6 py-2 rounded-full">ติดต่อเรา</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[999] bg-[#1A1008]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-400 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <a href="#hero" className="text-xl text-white/80 tracking-widest hover:text-[#D4A843]" onClick={closeMobileMenu}>หน้าแรก</a>
        <a href="#craftsmanship" className="text-xl text-white/80 tracking-widest hover:text-[#D4A843]" onClick={closeMobileMenu}>ความประณีต</a>
        <a href="#products" className="text-xl text-white/80 tracking-widest hover:text-[#D4A843]" onClick={closeMobileMenu}>คอลเลกชัน</a>
        <a href="#testimonials" className="text-xl text-white/80 tracking-widest hover:text-[#D4A843]" onClick={closeMobileMenu}>เสียงจากลูกค้า</a>
        <a href="#contact" className="lb-btn-gold text-white px-8 py-3 rounded-full mt-4" onClick={closeMobileMenu}>ติดต่อเรา</a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1008]">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/LuxuryBrand/images/hero-bg.png')" }}></div>
        <div className="absolute inset-0 lb-hero-overlay"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8"><div className="lb-gold-divider"></div></div>
          <p className="text-[#D4A843] tracking-[0.4em] uppercase text-sm mb-6 opacity-90">Yan Lipao — Nakhon Si Thammarat</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            อัตลักษณ์แห่งนครฯ<br />
            <span className="lb-gold-shimmer">ศิลปะแห่งความประณีต</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            เครื่องจักสานย่านลิเภา งานฝีมือชั้นสูงที่สืบทอดจากรุ่นสู่รุ่น<br className="hidden md:block" />
            ทรงคุณค่าเหนือกาลเวลา
          </p>
          <a href="#products" className="lb-btn-gold inline-block text-white font-semibold px-10 py-4 rounded-full text-lg tracking-wide">
            ชมคอลเลกชันของเรา
          </a>
          <div className="flex justify-center mt-12"><div className="lb-gold-divider"></div></div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lb-scroll-indicator">
          <svg className="w-6 h-6 text-[#D4A843] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Craftsmanship */}
      <section id="craftsmanship" className="bg-[#2C1A0E]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative overflow-hidden h-[50vh] lg:h-auto">
            <img src="/LuxuryBrand/images/Gemini_Generated_Image_yvniezyvniezyvni.png" alt="Craftsmanship" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1A0E]/50 hidden lg:block"></div>
          </div>
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-0">
            <div className="lb-fade-up max-w-lg">
              <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs mb-6">The Craftsmanship</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-8">
                กว่าจะมาเป็น<br /><span className="text-[#D4A843]">กระเป๋า 1 ใบ...</span>
              </h2>
              <div className="lb-gold-divider mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                ต้องใช้ความอดทนและเส้นย่านลิเภาที่คัดสรรเฉพาะ นำมาสานด้วยความประณีตนานนับเดือน ทุกเส้นสาย ทุกลวดลาย ล้วนบอกเล่าเรื่องราวของช่างฝีมือ ที่ทุ่มเทหัวใจในทุกชิ้นงาน
              </p>
              <p className="text-[#D4A843]/80 text-base italic">"งานฝีมือที่ไม่มีเครื่องจักรใดทดแทนได้"</p>
              
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#D4A843]/20">
                <div className="text-center">
                  <p className="font-serif text-3xl text-[#D4A843] font-bold">300+</p>
                  <p className="text-gray-400 text-sm mt-1">ปีแห่งการสืบทอด</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-[#D4A843] font-bold">30</p>
                  <p className="text-gray-400 text-sm mt-1">วันต่อชิ้นงาน</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-[#D4A843] font-bold">100%</p>
                  <p className="text-gray-400 text-sm mt-1">Handmade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#FFFEF9] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 lb-fade-up">
            <p className="text-[#B8860B] tracking-[0.3em] uppercase text-xs mb-4">Our Collection</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1A1008] mb-6">คอลเลกชันคัดสรร</h2>
            <div className="flex justify-center mb-6"><div className="lb-gold-divider"></div></div>
            <p className="text-gray-600 text-lg max-w-xl mx-auto font-light">ผลงานชิ้นเอกจากช่างฝีมือชั้นครู แต่ละชิ้นล้วนมีเอกลักษณ์เฉพาะตัว</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { img: "om450om450om450o.png", name: "กระเป๋าทรงรี", en: "Yan Lipao Oval Bag", price: "เริ่มต้น 8,500 บาท" },
              { img: "u4urdwu4urdwu4ur.png", name: "กล่องเครื่องประดับ", en: "Yan Lipao Jewelry Box", price: "เริ่มต้น 5,200 บาท", delay: "0.15s" },
              { img: "77tly577tly577tl.png", name: "กำไลสานประณีต", en: "Yan Lipao Bangle", price: "เริ่มต้น 3,800 บาท", delay: "0.3s" }
            ].map((p, i) => (
              <div key={i} className="lb-fade-up group" style={{ transitionDelay: p.delay || '0s' }}>
                <div className="lb-product-card relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 lb-corner-border">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={`/LuxuryBrand/images/Gemini_Generated_Image_${p.img}`} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 text-center relative z-10 bg-white">
                    <h3 className="font-serif text-xl font-bold text-[#1A1008] mb-1">{p.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{p.en}</p>
                    <p className="text-[#B8860B] font-semibold text-lg mb-4">{p.price}</p>
                    <a href="#contact" className="inline-block border-2 border-[#B8860B] text-[#B8860B] font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-[#B8860B] hover:text-white transition-all duration-300">
                      สอบถามเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[#2C1A0E] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 lb-fade-up">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs mb-4">Testimonials & Awards</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">เสียงจากผู้ที่ได้สัมผัส</h2>
            <div className="flex justify-center mb-6"><div className="lb-gold-divider"></div></div>
          </div>

          <div className="lb-fade-up flex flex-wrap justify-center gap-6 md:gap-12 mb-16 py-8 border-y border-[#D4A843]/20">
            {[{title:"GI", sub:"สิ่งบ่งชี้ทางภูมิศาสตร์"}, {title:"OTOP", sub:"ระดับ 5 ดาว"}, {title:"UNESCO", sub:"มรดกภูมิปัญญา"}, {title:"300+", sub:"ลูกค้าทั่วโลก"}].map((a,i) => (
              <div key={i} className="text-center px-4">
                <p className="font-serif text-2xl text-[#D4A843] font-bold">{a.title}</p>
                <p className="text-gray-400 text-xs mt-1">{a.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { txt: '"ซื้อกระเป๋าย่านลิเภาไปฝากแม่ แม่บอกว่าสวยกว่าแบรนด์เนมที่มีอีก ลวดลายละเอียดมาก ถือไปไหนก็ได้คำชมเสมอ"', name: 'คุณสุภาพร ว.', loc: 'ลูกค้ากรุงเทพฯ' },
              { txt: '"สั่งทำกล่องเครื่องประดับเป็นของขวัญแต่งงาน แขกต่างชาติประทับใจมาก ถามว่าซื้อได้ที่ไหน เป็นของฝากที่ทรงคุณค่าจริงๆ"', name: 'คุณธนวัฒน์ พ.', loc: 'ลูกค้านครศรีธรรมราช', delay: '0.15s' },
              { txt: '"ใส่กำไลย่านลิเภาไปออกงานที่ต่างประเทศ ทุกคนถามว่ามาจากไหน ภูมิใจมากที่ได้บอกว่าเป็นงานฝีมือจากภาคใต้ของไทย"', name: 'คุณมนัสนันท์ ก.', loc: 'ลูกค้าภูเก็ต', delay: '0.3s' }
            ].map((t, i) => (
              <div key={i} className="lb-fade-up lb-testimonial-card rounded-2xl p-8" style={{ transitionDelay: t.delay || '0s' }}>
                <div className="flex gap-1 mb-4 text-[#D4A843]">★★★★★</div>
                <p className="text-gray-300 leading-relaxed mb-6 font-light italic">{t.txt}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="contact" className="relative bg-[#1A1008] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center lb-fade-up">
          <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs mb-6">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">สนใจสั่งทำ<br /><span className="text-[#D4A843]">หรือเลือกชมสินค้าจริง?</span></h2>
          <div className="flex justify-center mb-8"><div className="lb-gold-divider"></div></div>
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">ทุกชิ้นงานสามารถสั่งทำพิเศษตามความต้องการ<br className="hidden md:block" />พูดคุยกับช่างผู้เชี่ยวชาญโดยตรง</p>
          <a href="#" className="lb-btn-gold inline-flex items-center gap-3 text-white font-semibold px-12 py-5 rounded-full text-xl tracking-wide">
             พูดคุยกับช่างผู้เชี่ยวชาญ
          </a>
        </div>
        <div className="relative z-10 mt-20 pt-8 border-t border-white/10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 ย่านลิเภา นครศรีธรรมราช</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#D4A843] text-sm">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-[#D4A843] text-sm">Instagram</a>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-[900] w-12 h-12 rounded-full bg-gradient-to-br from-[#B8860B] to-[#D4A843] text-white flex items-center justify-center shadow-lg transition-all duration-400 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      </button>
    </div>
  );
}
