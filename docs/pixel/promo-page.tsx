"use client";

import { useState } from "react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import { trackLead } from "@/lib/fpixel"; // ✅ เพิ่มบรรทัดนี้

export default function PromoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("phone") + "@promo.lead",
      budget: formData.get("budget"),
      message: `[PROMO LEAD] สนใจแพ็กเกจ: ${formData.get("budget")}`,
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // ✅ ยิง Lead event ตอนส่งฟอร์มสำเร็จ
        trackLead({
          content_name: `form_submit_${data.budget || "unknown"}`,
          value: 0,
          currency: "THB",
        });

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        formElement.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  const handleScrollToForm = (pkg: string = "") => {
    if (pkg) setSelectedPackage(pkg);
    const element = document.getElementById("lead-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ handler สำหรับปุ่ม LINE — ยิง Lead แล้วค่อยเปิด URL
  const handleLineClick = () => {
    trackLead({
      content_name: "line_button_click",
      value: 0,
      currency: "THB",
    });
    window.open("https://line.me/R/ti/p/@bigherostudio", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary-100 selection:text-primary-900 pb-20">
      
      {/* SECTION 1 - HERO */}
      <section className="relative pt-12 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary-50 to-white -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Scarcity Bar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-sm font-bold mb-8 animate-fade-in-up">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            เหลือเพียง 7 สิทธิ์ — โปรโมชันเดือนนี้เท่านั้น
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-4 tracking-tight animate-fade-in-up animation-delay-100">
            เว็บไซต์ธุรกิจ <br className="hidden md:block" />
            ที่ลูกค้าเห็นแล้ว<span className="text-primary-600">ไว้ใจ</span>
          </h1>
          
          <p className="text-lg text-slate-500 font-medium mb-10 animate-fade-in-up animation-delay-200">
            Custom code จริง · ไม่ใช่ template · ส่งมอบใน 7 วัน
          </p>

          {/* Pricing Block */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-500/10 border border-slate-100 max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl text-slate-400 line-through font-semibold">฿5,500</span>
                <span className="text-5xl font-black text-navy tracking-tighter">฿2,990</span>
              </div>
              <span className="px-3 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-lg border border-red-100">
                ประหยัด ฿2,510
              </span>
            </div>
            <p className="text-sm text-slate-500 font-medium pb-6 mb-6 border-b border-slate-100">
              One-Page สำหรับ SME · รวม Domain + Hosting + SSL ฟรี 1 ปี
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleScrollToForm("เว็บไซต์ One-Page (฿2,990)")}
                className="flex-1 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all text-lg"
              >
                จองสิทธิ์เลย
              </button>
              <a 
                href="/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 text-center bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-lg"
              >
                ดูผลงานก่อน
              </a>
            </div>
          </div>

          {/* Trust Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            {[
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", label: "แก้ไขฟรี 2 รอบ" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "ส่งมอบ 7 วัน" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "ดูแล 1 ปีเต็ม" },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", label: "Custom code" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-600 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - PAIN POINT */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">
            ลูกค้าค้นหาคุณเจอ... แต่ไม่โทรหา?
          </h2>
          <div className="space-y-4">
            {[
              "เว็บเก่า ดูไม่น่าเชื่อถือ ลูกค้าเปิดแล้วปิดทิ้ง",
              "ไม่มีเว็บ ลูกค้าหาข้อมูลไม่ได้ ตัดสินใจไม่ได้",
              "เว็บ template ดูเหมือนร้านอื่นร้อยร้าน ไม่มีเอกลักษณ์"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - PORTFOLIO */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-12">
            ผลงานจริงจากทีมงาน
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tag: "E-Commerce", title: "ร้านชุดว่ายน้ำ", desc: "ระบบตะกร้า + ชำระเงิน", slug: "ecommerce-swimwear" },
              { tag: "Landing Page", title: "ฟาร์มเห็ดครบวงจร", desc: "B2B + ปิดการขาย", slug: "landing-mushroom" },
              { tag: "Dashboard", title: "ระบบ SROI", desc: "Import Excel + อนุมัติ", slug: "sroi-platform" },
              { tag: "Corporate", title: "โลจิสติกส์", desc: "คำนวณค่าขนส่ง", slug: "corporate-transport" },
            ].map((item, idx) => (
              <a key={idx} href={`/portfolio/${item.slug}`} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg mb-4">
                  {item.tag}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700">
              ดูผลงานทั้งหมด
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PACKAGES */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>
          <div className="space-y-4">
            
            <div 
              onClick={() => handleScrollToForm("เว็บไซต์ One-Page (฿2,990)")}
              className="p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-primary-400 cursor-pointer transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary-600 transition-colors">One-Page</h3>
                <p className="text-sm text-slate-500">ปิดการขาย · Domain+Host ฟรี</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 line-through">฿5,500</div>
                <div className="text-xl font-extrabold text-navy">฿2,990</div>
              </div>
            </div>

            <div 
              onClick={() => handleScrollToForm("เว็บไซต์องค์กร (฿7,900)")}
              className="p-6 bg-white rounded-2xl border-2 border-primary-500 cursor-pointer transition-all flex items-center justify-between relative shadow-lg shadow-primary-500/10 group transform md:-translate-y-1"
            >
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-primary-100 text-primary-700 text-xs font-bold rounded-full">
                ยอดนิยม
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary-600 transition-colors">เว็บองค์กร</h3>
                <p className="text-sm text-slate-500">หลายหน้า · CMS · 2 ภาษา</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 line-through">฿12,900</div>
                <div className="text-xl font-extrabold text-navy">฿7,900</div>
              </div>
            </div>

            <div 
              onClick={() => handleScrollToForm("Web App / Dashboard (฿18,000+)")}
              className="p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-primary-400 cursor-pointer transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary-600 transition-colors">Web App / Dashboard</h3>
                <p className="text-sm text-slate-500">ระบบเต็มรูปแบบ · ปรึกษาก่อน</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-extrabold text-navy">฿18,000+</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - FORM + CTA */}
      <section id="lead-form" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">จองสิทธิ์โปรโมชัน — ฟรี ไม่มีข้อผูกมัด</h2>
            <p className="text-slate-500 font-medium">ทีมงานจะติดต่อกลับภายใน 1-3 ชั่วโมง (จ-ศ)</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            
            {/* ✅ LINE CTA — เปลี่ยนจาก <a> เป็น <button> เพื่อ trackLead ก่อนเปิด */}
            <button
              type="button"
              onClick={handleLineClick}
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#00B900] hover:bg-[#009900] text-white text-lg font-bold rounded-2xl shadow-lg shadow-[#00B900]/20 transition-all hover:-translate-y-1 mb-8"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.5 10.5c0-4.632-4.521-8.39-10.083-8.39C6.852 2.11 2.33 5.868 2.33 10.5c0 4.148 3.633 7.643 8.441 8.289.328.07.753.214.86.505.1.272.064.697.03 1.001-.004.032-.423 2.545-.52 3.101-.128.74.33 1.037.892.744 4.542-2.37 9.123-6.666 10.134-9.351C22.428 11.455 22.5 10.985 22.5 10.5"/>
              </svg>
              คุยผ่าน LINE ได้เลย (@bigherostudio)
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-sm text-slate-400 font-medium">หรือกรอกข้อมูลให้เราติดต่อกลับ</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">ได้รับข้อมูลแล้ว!</h3>
                <p className="text-slate-500">ทีมงานจะรีบติดต่อกลับโดยเร็วที่สุดครับ</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl">{error}</div>}
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">ชื่อ-นามสกุล <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="คุณสมชาย ใจดี"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">เบอร์โทรศัพท์ <span className="text-red-400">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="08X-XXX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">ต้องการทำอะไร?</label>
                  <select 
                    name="budget"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 transition-all appearance-none"
                  >
                    <option value="">-- กรุณาเลือก --</option>
                    <option value="เว็บไซต์ One-Page (฿2,990)">เว็บไซต์ One-Page (฿2,990)</option>
                    <option value="เว็บไซต์องค์กร (฿7,900)">เว็บไซต์องค์กร (฿7,900)</option>
                    <option value="Web App / Dashboard (฿18,000+)">Web App / Dashboard (฿18,000+)</option>
                  </select>
                </div>

                <div className="flex justify-center my-4">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                    options={{ theme: "light" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !turnstileToken}
                  className="w-full py-4 bg-navy text-white font-bold text-lg rounded-xl hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? "กำลังส่งข้อมูล..." : "จองสิทธิ์โปรโมชันนี้ ➔"}
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  ข้อมูลของคุณจะถูกเก็บเป็นความลับ
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8">คำถามที่พบบ่อย</h2>
          <div className="space-y-0 divide-y divide-slate-200">
            {[
              { q: "ทำเสร็จนานแค่ไหน?", a: "One-Page 5-7 วันทำการ หลังจากได้รับข้อมูลและ content ครบถ้วน" },
              { q: "ราคาโปรโมชันมีเงื่อนไขอะไรไหม?", a: "ไม่มีครับ ราคาเดียวเบ็ดเสร็จ รวม domain + hosting + SSL ให้ในปีแรก" },
              { q: "ถ้าไม่ถูกใจสามารถแก้ได้ไหม?", a: "สามารถแก้ไขได้ฟรี 2 รอบ (ในขอบเขตงาน) และเราดูแลระบบให้ฟรี 1 ปีเต็มหลังส่งมอบ" },
              { q: "ต่างจาก WordPress template อย่างไร?", a: "เราเขียน code เองทั้งหมดด้วยเฟรมเวิร์กสมัยใหม่ (Next.js) ทำให้โหลดเร็วกว่า SEO ติดง่ายกว่า และดีไซน์ปรับแต่งได้ยืดหยุ่นกว่าเทมเพลตทั่วไป" },
            ].map((faq, idx) => (
              <div key={idx} className="py-5">
                <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
