"use client";

import { useEffect, useState } from "react";

export default function SAPDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Nav Scroll
    const handleScroll = () => {
      const nav = document.getElementById("sap-navbar");
      if (nav) {
        nav.style.background = window.scrollY > 60 ? "rgba(26,10,0,0.98)" : "rgba(26,10,0,0.92)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Particles
    const container = document.getElementById("sap-particles");
    if (container && container.children.length === 0) {
      const colors = ["#F5700A", "#E8151B", "#F5C518", "#fff"];
      for (let i = 0; i < 25; i++) {
        const p = document.createElement("div");
        p.className = "sap-particle";
        const size = Math.random() * 10 + 4;
        p.style.cssText = `
          width:${size}px; height:${size}px;
          left:${Math.random() * 100}%;
          background:${colors[Math.floor(Math.random() * colors.length)]};
          animation-duration:${Math.random() * 10 + 8}s;
          animation-delay:${Math.random() * 10}s;
          opacity:${Math.random() * 0.5 + 0.2};
        `;
        container.appendChild(p);
      }
    }

    // Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 80);
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".sap-reveal").forEach((el) => revealObserver.observe(el));

    // Counter
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const isFloat = target % 1 !== 0;
          const start = performance.now();
          const duration = 1800;
          function step(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const value = ease * target;
            el.textContent = isFloat ? value.toFixed(1) : Math.floor(value).toString();
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  const addCart = (name: string) => {
    setToastMsg(`✅ เพิ่ม "${name}" แล้ว! กด LINE เพื่อยืนยันออเดอร์`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="sap-wrapper bg-[#FFF8F0] text-[#1A0A00] font-sans w-full relative">
      <style dangerouslySetInnerHTML={{__html: `
        .sap-wrapper { scroll-behavior: smooth; font-family: 'Sarabun', sans-serif; overflow-x: hidden; }
        .sap-nav { position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(26,10,0,0.92); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 2rem; box-shadow: 0 2px 20px rgba(232,21,27,0.3); transition: all 0.3s; }
        .sap-nav-logo { font-family: 'Kanit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #F5C518; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; }
        .sap-nav-logo span { color: #F5700A; }
        .sap-nav-links { display: flex; gap: 1.5rem; list-style: none; }
        .sap-nav-links a { color: #fff; text-decoration: none; font-size: 0.95rem; transition: color .2s; }
        .sap-nav-links a:hover { color: #F5C518; }
        .sap-nav-cta { background: #E8151B; color: #fff !important; padding: 0.4rem 1.1rem; border-radius: 50px; font-weight: 700 !important; box-shadow: 0 2px 12px rgba(232,21,27,0.5); transition: transform .2s, box-shadow .2s !important; }
        .sap-nav-cta:hover { transform: scale(1.05); box-shadow: 0 4px 18px rgba(232,21,27,0.6) !important; }
        
        .sap-hero { min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .sap-hero-bg { position: absolute; inset: 0; background-image: url('/sap/images/Gemini_Generated_Image_kagroukagroukagr.png'); background-size: cover; background-position: center; animation: sapBgPulse 8s ease-in-out infinite alternate; }
        .sap-hero-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 50%, rgba(245,112,10,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(232,21,27,0.2) 0%, transparent 55%), linear-gradient(135deg, rgba(26,10,0,0.72) 0%, rgba(61,28,0,0.6) 40%, rgba(93,46,0,0.55) 70%, rgba(42,10,0,0.72) 100%); }
        @keyframes sapBgPulse { from { filter: brightness(1); } to { filter: brightness(1.15); } }
        
        .sap-particles { position: absolute; inset: 0; pointer-events: none; }
        .sap-particle { position: absolute; border-radius: 50%; animation: sapFloat linear infinite; opacity: 0.6; }
        @keyframes sapFloat { 0% { transform: translateY(100vh) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.4; } 100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; } }
        
        .sap-hero-content { position: relative; z-index: 2; text-align: center; padding: 2rem; max-width: 860px; }
        .sap-hero-badge { display: inline-block; background: linear-gradient(90deg, #F5700A, #F5C518); color: #1A0A00; font-weight: 800; font-size: 0.85rem; padding: 0.35rem 1.2rem; border-radius: 50px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1.2rem; animation: sapBadgePop 0.6s ease-out 0.3s both; }
        @keyframes sapBadgePop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .sap-hero-mortar { font-size: 5rem; line-height: 1; animation: mortarBounce 2s ease-in-out infinite; display: block; margin-bottom: 0.5rem; }
        @keyframes mortarBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .sap-hero-title { font-family: 'Kanit', sans-serif; font-size: clamp(2.2rem, 6vw, 4.5rem); font-weight: 900; line-height: 1.1; color: #fff; text-shadow: 0 0 40px rgba(245,112,10,0.8), 2px 4px 8px rgba(0,0,0,0.5); animation: sapTitleSlide 0.8s ease-out 0.5s both; }
        .sap-hero-title .accent { background: linear-gradient(90deg, #F5C518, #F5700A); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes sapTitleSlide { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        
        .sap-btn-primary { background: linear-gradient(135deg, #E8151B, #F5700A); color: #fff; font-family: 'Kanit', sans-serif; font-size: 1.1rem; font-weight: 700; padding: 0.9rem 2.2rem; border-radius: 50px; box-shadow: 0 6px 25px rgba(232,21,27,0.55); transition: transform .2s, box-shadow .2s; display:inline-flex; align-items:center; gap:0.5rem; }
        .sap-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(232,21,27,0.6); color:#fff; }
        .sap-btn-line { background: #06C755; color: #fff; font-family: 'Kanit', sans-serif; font-size: 1.1rem; font-weight: 700; padding: 0.9rem 2.2rem; border-radius: 50px; box-shadow: 0 6px 25px rgba(6,199,85,0.4); transition: transform .2s, box-shadow .2s; display:inline-flex; align-items:center; gap:0.5rem; }
        .sap-btn-line:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(6,199,85,0.5); color:#fff; }
        
        .sap-section { padding: 5rem 1.5rem; }
        .sap-section-title { font-family: 'Kanit', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; text-align: center; margin-bottom: 0.5rem; }
        .sap-divider { width: 70px; height: 5px; border-radius: 10px; background: linear-gradient(90deg, #E8151B, #F5700A, #F5C518); margin: 0.8rem auto 1rem; }
        
        .sap-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto; }
        .sap-why-card { background: #FFF8F0; border-radius: 20px; padding: 2.5rem 2rem; text-align: center; border: 2px solid transparent; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform .3s, border-color .3s; }
        .sap-why-card:hover { transform: translateY(-8px); box-shadow: 0 12px 35px rgba(232,21,27,0.15); border-color: #F5700A; }
        .sap-why-icon { font-size: 3.5rem; display: block; margin-bottom: 1.2rem; animation: iconWiggle 3s ease-in-out infinite; }
        .sap-why-card:nth-child(2) .sap-why-icon { animation-delay: 0.5s; }
        .sap-why-card:nth-child(3) .sap-why-icon { animation-delay: 1s; }
        @keyframes iconWiggle { 0%,100% { transform: rotate(-5deg) scale(1); } 50% { transform: rotate(5deg) scale(1.1); } }
        
        .sap-process { background: linear-gradient(135deg, #1A0A00 0%, #3D1C00 100%); padding: 3.5rem 1.5rem; }
        .sap-process .sap-section-title { color: #F5C518; }
        .sap-process-steps { display: flex; flex-wrap: wrap; gap: 0; max-width: 960px; margin: 0 auto; justify-content: center; }
        .sap-process-step { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; min-width: 160px; padding: 1.5rem 1rem; position: relative; }
        .sap-process-step:not(:last-child)::after { content: '→'; position: absolute; right: -10px; top: 50%; transform: translateY(-50%); color: #F5700A; font-size: 1.5rem; }
        .sap-step-num { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #F5700A, #E8151B); color: #fff; font-family: 'Kanit', sans-serif; font-weight: 900; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 0.7rem; box-shadow: 0 4px 15px rgba(245,112,10,0.4); }
        
        .sap-products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1050px; margin: 0 auto; }
        .sap-product-card { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform .3s; position: relative; }
        .sap-product-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(232,21,27,0.18); }
        .sap-product-img { width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
        .sap-product-img img { width: 100%; height: 100%; object-fit: cover; }
        .sap-btn-cart { background: linear-gradient(135deg, #F5700A, #E8151B); color: #fff; border: none; border-radius: 50px; padding: 0.55rem 1.3rem; font-family: 'Kanit', sans-serif; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: transform .2s, box-shadow .2s; }
        .sap-btn-cart:hover { transform: scale(1.07); box-shadow: 0 6px 18px rgba(232,21,27,0.5); }
        
        .sap-guarantee { background: linear-gradient(135deg, #E8151B 0%, #F5700A 100%); padding: 3rem 1.5rem; text-align: center; }
        .sap-guarantee-items { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; max-width: 900px; margin: 1.5rem auto 0; }
        .sap-guarantee-item { display: flex; flex-direction: column; align-items: center; color: #fff; flex: 1; min-width: 140px; }
        
        .sap-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; max-width: 1050px; margin: 0 auto; }
        .sap-review-card { background: #FFF8F0; border-radius: 16px; padding: 1.8rem; position: relative; border-left: 5px solid #F5700A; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform .3s; }
        .sap-review-card:hover { transform: translateY(-5px); }
        .sap-review-line-mock { background: #e8f5e9; border-radius: 14px; padding: 1.2rem 1.4rem; margin-top: 0.8rem; border: 1px solid #c8e6c9; position: relative; font-size: 0.9rem; color: #2e7d32; }
        .sap-review-line-mock::before { content: 'LINE Chat'; position: absolute; top: -0.6rem; left: 1rem; background: #06C755; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.1rem 0.6rem; border-radius: 50px; }
        
        .sap-footer { background: #1A0A00; padding: 4rem 1.5rem 2rem; }
        .sap-footer-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2.5rem; max-width: 1000px; margin: 0 auto 3rem; text-align: left; }
        .sap-footer-brand h2 { font-family: 'Kanit', sans-serif; font-size: 1.5rem; font-weight: 800; color: #F5C518; margin-bottom: 0.7rem; }
        .sap-footer-col h4 { color: #F5700A; font-weight: 700; margin-bottom: 1rem; font-family: 'Kanit', sans-serif; text-align: left; }
        .sap-footer-col a { display: block; color: rgba(255,255,255,0.6); text-decoration: none; margin-bottom: 0.5rem; font-size: 0.9rem; transition: color .2s; }
        .sap-footer-col a:hover { color: #F5C518; }
        .sap-contact-btns { display: flex; flex-direction: column; gap: 0.8rem; }
        .sap-btn-contact { display: flex; align-items: center; justify-content: center; gap: 0.7rem; padding: 0.8rem 1.2rem; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform .2s, box-shadow .2s; font-family: 'Kanit', sans-serif; color:white; }
        .sap-btn-contact:hover { transform: scale(1.04); color:white; }
        .sap-btn-contact.line { background: #06C755; box-shadow: 0 4px 15px rgba(6,199,85,0.35); }
        .sap-btn-contact.phone { background: #F5700A; box-shadow: 0 4px 15px rgba(245,112,10,0.35); }
        .sap-btn-contact.fb { background: #1877F2; box-shadow: 0 4px 15px rgba(24,119,242,0.35); }
        
        .sap-float-cta { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 999; display: flex; flex-direction: column; gap: 0.6rem; align-items: flex-end; }
        .sap-float-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.2rem; border-radius: 50px; color: #fff; font-family: 'Kanit', sans-serif; font-weight: 700; text-decoration: none; font-size: 0.9rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: transform .2s, box-shadow .2s; animation: floatIn 0.5s ease-out both; }
        .sap-float-btn:hover { transform: scale(1.06); color: #fff; }
        @keyframes floatIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .sap-float-pulse { width: 12px; height: 12px; border-radius: 50%; background: #F5C518; animation: sapPulse 1.5s ease-in-out infinite; }
        @keyframes sapPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
        
        .sap-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .sap-reveal.visible { opacity: 1; transform: translateY(0); }
        .sap-toast { position: fixed; bottom: 5rem; left: 50%; transform: translateX(-50%) translateY(20px); background: #2E7D32; color: #fff; padding: 0.8rem 2rem; border-radius: 50px; font-family: 'Kanit', sans-serif; font-weight: 700; opacity: 0; pointer-events: none; transition: opacity .3s, transform .3s; z-index: 9999; box-shadow: 0 4px 20px rgba(46,125,50,0.4); white-space:nowrap; }
        .sap-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
        @media (max-width: 768px) {
          .sap-nav-links { display: none; }
          .sap-nav-links.open { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(26,10,0,0.97); padding: 1.5rem 2rem; }
          .sap-process-step:not(:last-child)::after { display: none; }
        }
      `}} />

      {/* Navbar */}
      <nav id="sap-navbar" className="sap-nav">
        <a href="#sap-hero" onClick={(e)=>smoothScroll(e,'#sap-hero')} className="sap-nav-logo">🌶 <span>แกงตำมือ</span>&nbsp;หมู่19</a>
        <ul className={`sap-nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#sap-why" onClick={(e)=>smoothScroll(e,'#sap-why')}>ทำไมต้องเรา</a></li>
          <li><a href="#sap-products" onClick={(e)=>smoothScroll(e,'#sap-products')}>สินค้า</a></li>
          <li><a href="#sap-reviews" onClick={(e)=>smoothScroll(e,'#sap-reviews')}>รีวิว</a></li>
          <li><a href="#sap-products" className="sap-nav-cta" onClick={(e)=>smoothScroll(e,'#sap-products')}>📦 สั่งซื้อเลย</a></li>
        </ul>
        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-[26px] h-[3px] bg-white rounded-[2px] transition-all"></span>
          <span className="w-[26px] h-[3px] bg-white rounded-[2px] transition-all"></span>
          <span className="w-[26px] h-[3px] bg-white rounded-[2px] transition-all"></span>
        </div>
      </nav>

      {/* Hero */}
      <section id="sap-hero" className="sap-hero">
        <div className="sap-hero-bg"></div>
        <div id="sap-particles" className="sap-particles"></div>
        <div className="sap-hero-content">
          <span className="sap-hero-badge">🏆 ตำรับพื้นถิ่น นครศรีธรรมราช</span>
          <span className="sap-hero-mortar">🫙</span>
          <h1 className="sap-hero-title">หรอยจังฮู้!<br /><span className="accent">เครื่องแกงตำมือ</span><br />หมู่&nbsp;19</h1>
          <p className="text-white/90 text-lg md:text-xl my-6 leading-relaxed max-w-2xl mx-auto sap-reveal">
            ตำรับพื้นถิ่นแท้ๆ <span className="text-[#F5C518] font-bold">หอมเครื่องเทศ ถึงพริก ถึงขิง</span><br />
            ปลอดสารกันบูด 100% · ส่งทั่วประเทศ · สั่งง่าย ได้ของจริง
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8 sap-reveal">
            <a href="#sap-products" onClick={(e)=>smoothScroll(e,'#sap-products')} className="sap-btn-primary">🛒 สั่งซื้อเลย (ส่งทั่วประเทศ)</a>
            <a href="https://line.me" target="_blank" className="sap-btn-line">💬 สอบถามผ่าน LINE</a>
          </div>
          
          <div className="flex gap-8 justify-center flex-wrap mt-12 sap-reveal">
            {[{num: "500", lbl: "ลูกค้าทั่วประเทศ"}, {num: "100", lbl: "% ปลอดสารกันบูด"}, {num: "10", lbl: "ปีประสบการณ์"}, {num: "4.9", lbl: "⭐ คะแนนเฉลี่ย"}].map((s,i) => (
               <div key={i} className="text-center">
                 <span className="font-['Kanit'] text-3xl font-black text-[#F5C518] drop-shadow-md" data-count={s.num}>0</span>
                 <span className="block text-white/70 text-sm mt-1">{s.lbl}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="sap-why" className="sap-section bg-white">
        <p className="sap-section-title sap-reveal">ทำไมต้องเครื่องแกงเรา?</p>
        <div className="sap-divider"></div>
        <p className="text-center text-[#7a5c40] mb-12 sap-reveal">คัดสรรทุกชิ้นส่วน ตำทุกก้าว ด้วยมือและใจ</p>
        
        <div className="sap-why-grid">
          {[{i: "🌿", t: "วัตถุดิบสดใหม่", d:"คัดสรรสมุนไพรสดจากสวนในชุมชน หมู่ 19 ทุกวัน ได้ความหอมสดที่ซื้อที่อื่นไม่ได้"}, 
            {i: "💪", t: "ตำมือแท้ๆ", d:"ไม่ใช้เครื่องปั่น ไม่ใช้เครื่องจักร ตำในครกหินทุกชิ้น ได้เนื้อสัมผัสและกลิ่นหอมที่แตกต่าง"}, 
            {i: "🚫", t: "ไร้สารกันบูด 100%", d:"เก็บรักษาด้วยกรรมวิธีธรรมชาติ แช่แข็งพร้อมส่ง ปลอดภัย สามารถเก็บได้นานกว่า 3 เดือน"}, 
            {i: "🚚", t: "ส่งทั่วประเทศ", d:"บรรจุกล่องแช่เย็นพร้อมน้ำแข็งแห้ง ส่งถึงมือคุณทั่วประเทศ รับประกันของสด"}, 
            {i: "❤️", t: "สูตรสืบทอด", d:"สูตรดั้งเดิมที่สืบทอดกันมากกว่า 3 รุ่น ในชุมชนหมู่ 19 รสชาติต้นตำรับภาคใต้แท้"}, 
            {i: "💰", t: "ราคาเป็นมิตร", d:"ราคาชาวบ้าน ไม่แพงอย่างที่คิด แต่อร่อยเกินราคาแน่นอน สั่งครั้งแรกมีส่วนลดพิเศษ!"}].map((w,i) => (
            <div key={i} className="sap-why-card sap-reveal">
              <span className="sap-why-icon">{w.i}</span>
              <h3 className="font-['Kanit'] text-xl font-bold text-[#5D3A1A] mb-2">{w.t}</h3>
              <p className="text-[#6b4c2a] leading-relaxed text-sm">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="sap-process" className="sap-process">
        <p className="sap-section-title sap-reveal">กว่าจะถึงมือคุณ</p>
        <div className="sap-divider"></div>
        <p className="text-center text-white/50 mb-12 sap-reveal">กระบวนการที่ใส่ใจทุกขั้นตอน</p>
        <div className="sap-process-steps">
          {[{n:"1", i:"🌱", t:"คัดสมุนไพรสด", d:"เก็บเช้า ใช้เช้า"}, {n:"2", i:"🪨", t:"ล้าง & เตรียม", d:"สะอาด ปลอดภัย"}, {n:"3", i:"💪", t:"ตำด้วยมือ", d:"ครกหิน ตำช้าๆ"}, {n:"4", i:"📦", t:"บรรจุ & แช่แข็ง", d:"ปลอดเชื้อ 100%"}, {n:"5", i:"🚚", t:"ส่งถึงบ้าน", d:"ทั่วประเทศ 1-2 วัน"}].map((s,i) => (
            <div key={i} className="sap-process-step sap-reveal">
              <div className="sap-step-num">{s.n}</div>
              <span className="text-3xl mb-2 block">{s.i}</span>
              <h4 className="text-white font-['Kanit'] font-bold text-base mt-2">{s.t}</h4>
              <p className="text-white/60 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="sap-products" className="sap-section bg-[#FFF8F0]">
        <p className="sap-section-title sap-reveal">เมนูยอดฮิต 🔥</p>
        <div className="sap-divider"></div>
        <p className="text-center text-[#7a5c40] mb-12 sap-reveal">สินค้าขายดี ลูกค้าสั่งซ้ำทุกเดือน</p>

        <div className="sap-products-grid">
          {[
            { tag: "🔥 ขายดี 1", bg: "#FF8C42", img: "25q2g825q2g825q2.png", name: "เครื่องแกงส้ม (แกงเหลือง)", desc: "รสจัดจ้าน สไตล์คนคอน", price: "89", r: "4.9" },
            { tag: "⭐ ยอดนิยม", bg: "#F5700A", img: "dnuq9wdnuq9wdnuq.png", name: "เครื่องแกงคั่ว (แกงกะทิ)", desc: "หอมมัน กลมกล่อม", price: "95", r: "4.8" },
            { tag: "🌶 เผ็ดจัด", bg: "#7D3C98", img: "u6pek8u6pek8u6pe.png", name: "เครื่องแกงผัดเผ็ด", desc: "เผ็ดร้อน ถึงใจ", price: "85", r: "4.7" }
          ].map((p,i) => (
            <div key={i} className="sap-product-card sap-reveal">
              <span className="absolute top-4 left-4 text-white font-['Kanit'] font-bold text-xs px-3 py-1 rounded-full z-10" style={{background: p.bg}}>{p.tag}</span>
              <div className="sap-product-img" style={{background: p.bg}}>
                <img src={`/sap/images/Gemini_Generated_Image_${p.img}`} alt={p.name} />
              </div>
              <div className="p-6">
                <div className="text-[#F5C518] text-sm mb-1">★★★★★ ({p.r})</div>
                <h3 className="font-['Kanit'] text-lg font-bold text-[#5D3A1A] mb-1">{p.name}</h3>
                <p className="text-[#F5700A] font-semibold text-sm mb-3">"{p.desc}"</p>
                <div className="text-[#7a5c40] text-sm leading-relaxed mb-4">
                  {i===0 ? "เครื่องแกงส้มสูตรนครศรีธรรมราชแท้ๆ เผ็ดอมเปรี้ยว หอมขมิ้น" : i===1 ? "เครื่องแกงคั่วรสกลมกล่อม หอมมันกะทิ เหมาะกับไก่ เนื้อ กุ้ง" : "สำหรับสายเผ็ดตัวจริง เครื่องแกงผัดเผ็ดสูตรเข้มข้น"}
                </div>
                <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-['Kanit'] font-black text-2xl text-[#E8151B]">฿{p.price} <small className="text-gray-400 text-xs line-through font-normal">฿120</small></div>
                    <small className="text-gray-400 text-xs">/ 100 กรัม</small>
                  </div>
                  <button className="sap-btn-cart" onClick={() => addCart(p.name)}>🛒 สั่งเลย</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 sap-reveal">
          <a href="https://line.me" target="_blank" className="sap-btn-primary text-base">📋 ดูสินค้าทั้งหมดผ่าน LINE</a>
        </div>
      </section>

      {/* Guarantee */}
      <section id="sap-guarantee" className="sap-guarantee">
        <h2 className="sap-section-title sap-reveal">🛡️ รับประกันความพึงพอใจ</h2>
        <div className="sap-guarantee-items">
          {[{i:"✅",t:"ของสดถึงมือ<br/>100%"},{i:"🔄",t:"คืนเงินถ้า<br/>ไม่พอใจ"},{i:"❄️",t:"แพ็คแช่เย็น<br/>ปลอดภัย"},{i:"⚡",t:"จัดส่งภายใน<br/>24 ชม."},{i:"💬",t:"ตอบ LINE<br/>ตลอด 24 ชม."}].map((g,i)=>(
            <div key={i} className="sap-guarantee-item sap-reveal">
              <span className="text-[2.5rem] mb-2">{g.i}</span>
              <span className="font-bold text-sm text-center leading-relaxed" dangerouslySetInnerHTML={{__html: g.t}}></span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="sap-reviews" className="sap-section bg-white">
        <p className="sap-section-title sap-reveal">รีวิวจากลูกค้าจริง 💬</p>
        <div className="sap-divider"></div>
        <p className="text-center text-[#7a5c40] mb-12 sap-reveal">เสียงจากลูกค้าที่สั่งซ้ำทุกเดือน</p>
        
        <div className="sap-reviews-grid">
          {[
            { a: "น", n: "คุณนภา ส.", l: "กรุงเทพฯ · สั่งซ้ำ 6 ครั้ง", t: "หอมมากเลยค่า! สั่งครั้งแรกแล้วติดใจ แกงส้มออกมาอร่อยมากกว่าร้านดังๆ อีก 🔥 สั่งซ้ำแน่นอนค่ะ" },
            { a: "ก", n: "คุณกิตติ์ พ.", l: "เชียงใหม่ · สั่งซ้ำ 4 ครั้ง", t: "ส่งมาแพ็คดีมาก มีน้ำแข็งแห้งแถมมาด้วย ของถึงมือยังเย็นเลย รสชาติเหมือนกินที่ใต้จริงๆ พ่อแม่ชม 👍" },
            { a: "ป", n: "คุณปาร์ค อ.", l: "สั่งส่งให้ครอบครัว · 3 ครั้ง", t: "อยู่ต่างประเทศเลยสั่งให้แม่ที่บ้าน แม่บอกหอมมากค่ะ ตำมือจริงๆ รสต่างจากที่ซื้อห้างเยอะมาก จะสั่งเป็นของฝากแน่ๆ" },
            { a: "ว", n: "เจ้าของร้านวิษณุ", l: "หาดใหญ่ · ลูกค้าประจำ", t: "เปิดร้านอาหาร สั่งเป็น bulk ทุกอาทิตย์ ลูกค้าถามตลอดว่าใส่อะไรถึงหอมขนาดนี้ แนะนำสำหรับเจ้าของร้านด้วยเลยครับ" }
          ].map((r,i) => (
            <div key={i} className="sap-review-card sap-reveal">
              <span className="sap-review-quote">"</span>
              <div className="text-[#F5C518] mb-2">★★★★★</div>
              <div className="sap-review-line-mock">{r.t}</div>
              <div className="sap-reviewer mt-4">
                <div className="sap-reviewer-avatar">{r.a}</div>
                <div>
                  <div className="sap-reviewer-name">{r.n}</div>
                  <div className="sap-reviewer-loc">📍 {r.l}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="sap-footer">
        <div className="sap-footer-top">
          <div className="sap-footer-brand">
            <h2>🌶 เครื่องแกงตำมือ หมู่ 19</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">ตำรับพื้นถิ่นนครศรีธรรมราชแท้ๆ ตำด้วยมือในครกหิน ปลอดสารกันบูด ส่งทั่วประเทศ ด้วยความรักและใส่ใจทุกชิ้น</p>
            <p className="text-white/60 text-sm">🏠 หมู่ 19 ต.ชุมชนแห่งหนึ่ง อ.เมือง<br/>จ.นครศรีธรรมราช 80000</p>
          </div>
          <div className="sap-footer-col">
            <h4>สินค้าของเรา</h4>
            <a href="#">เครื่องแกงส้ม (แกงเหลือง)</a>
            <a href="#">เครื่องแกงคั่ว (แกงกะทิ)</a>
            <a href="#">เครื่องแกงผัดเผ็ด</a>
            <a href="#">เครื่องแกงมัสมั่น</a>
            <a href="#">แพ็คเกจเซ็ต (ราคาพิเศษ)</a>
          </div>
          <div className="sap-footer-col">
            <h4>ติดต่อสั่งซื้อ</h4>
            <div className="sap-contact-btns">
              <a href="https://line.me" target="_blank" className="sap-btn-contact line">💬 LINE @แกงตำมือ19</a>
              <a href="tel:0812345678" className="sap-btn-contact phone">📞 081-234-5678</a>
              <a href="https://facebook.com" target="_blank" className="sap-btn-contact fb">👍 Facebook Page</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs max-w-4xl mx-auto">
          <p>© 2567 เครื่องแกงตำมือ หมู่ 19 | สร้างด้วย ❤️ เพื่อคนรักอาหารใต้</p>
          <p className="mt-2">Demo 2: "จัดจ้าน สะอาด น่าสั่งไปติดครัว" | กลุ่มอาหารพื้นถิ่น</p>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="sap-float-cta">
        <a href="https://line.me" target="_blank" className="sap-float-btn line">
          <div className="sap-float-pulse"></div> 💬 LINE สั่งซื้อ
        </a>
        <a href="tel:0812345678" className="sap-float-btn phone">
          📞 โทรสั่งด่วน
        </a>
      </div>

      {/* Toast Notification */}
      <div className={`sap-toast ${showToast ? 'show' : ''}`}>
        {toastMsg}
      </div>
    </div>
  );
}
