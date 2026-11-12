"use client";

import { useState } from "react";

type ViewMode = "portal" | "submit" | "tracking" | "reviewer";

const PROTOCOLS = [
  {
    code: "REC-2569-1104",
    title: "การพัฒนารูปแบบการเรียนรู้ดิจิทัลเพื่อยกระดับสมรรถนะของผู้เรียนในศตวรรษที่ 21",
    researcher: "ผศ.ดร.กิตติพงศ์ วิชาการ",
    role: "คณาจารย์",
    faculty: "คณะครุศาสตร์",
    type: "Expedited Review (แบบเร่งด่วน)",
    submittedDate: "10 พ.ย. 2569",
    status: "approved",
    statusLabel: "ออกใบรับรองแล้ว (COA)",
    coaNo: "COA No. 089/2569",
    step: 5,
  },
  {
    code: "REC-2569-1108",
    title: "พฤติกรรมการดูแลสุขภาพตนเองของผู้สูงอายุในเขตชุมชนเมือง",
    researcher: "ดร.ศิริพร สุขภาพดี",
    role: "นักวิจัย",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
    type: "Full Board (คณะกรรมการเต็มชุด)",
    submittedDate: "11 พ.ย. 2569",
    status: "reviewing",
    statusLabel: "อยู่ระหว่างกรรมการพิจารณา",
    coaNo: "-",
    step: 3,
  },
  {
    code: "REC-2569-1112",
    title: "ปัจจัยที่ส่งผลต่อการตัดสินใจเลือกใช้แพลตฟอร์มการเรียนรู้ออนไลน์ของนักศึกษาปริญญาตรี",
    researcher: "นายธนภัทร ตั้งใจเรียน",
    role: "นักศึกษา",
    faculty: "คณะวิทยาการจัดการ",
    type: "Exemption Review (เข้าข่ายยกเว้น)",
    submittedDate: "12 พ.ย. 2569",
    status: "revision",
    statusLabel: "รอผู้วิจัยแก้ไขตามข้อเสนอแนะ",
    coaNo: "-",
    step: 4,
  },
];

export default function EthicsResearchDemo() {
  const [activeView, setActiveView] = useState<ViewMode>("portal");
  const [applicantRole, setApplicantRole] = useState("คณาจารย์");
  const [reviewType, setReviewType] = useState("Expedited Review");
  const [submittedAlert, setSubmittedAlert] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState(PROTOCOLS[0]);
  const [reviewDecisions, setReviewDecisions] = useState<Record<string, string>>({});

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedAlert(true);
    setTimeout(() => {
      setSubmittedAlert(false);
      setActiveView("tracking");
    }, 2000);
  };

  return (
    <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-2xl font-sans text-slate-800">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-600 text-white text-center py-2.5 text-xs font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        INTERACTIVE DEMO — ระบบยื่นขอรับการพิจารณาจริยธรรมการวิจัยในมนุษย์ (e-Submission)
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-teal-600/20">
            ⚖️
          </div>
          <div>
            <h2 className="font-bold text-navy text-base leading-tight">
              ระบบจริยธรรมการวิจัยในมนุษย์ (Human Research Ethics)
            </h2>
            <p className="text-xs text-slate-500">
              สำนักงานคณะกรรมการจริยธรรมการวิจัยในคน • สถาบันวิจัยและพัฒนา
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl">
          {[
            { id: "portal", label: "🏠 หน้าหลักระบบ" },
            { id: "submit", label: "📝 ยื่นโครงการใหม่" },
            { id: "tracking", label: "📊 ติดตามสถานะ / COA" },
            { id: "reviewer", label: "👨‍⚖️ สำหรับกรรมการ" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id as ViewMode)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeView === tab.id
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-teal-700 hover:bg-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 min-h-[600px]">
        {/* VIEW 1: PORTAL HOME */}
        {activeView === "portal" && (
          <div className="space-y-8 animate-fade-in-up">
            {/* Hero Banner */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-900 text-white p-8 md:p-12 overflow-hidden shadow-xl">
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl" />
              <div className="absolute right-10 bottom-6 opacity-10 text-9xl select-none">📜</div>

              <div className="relative z-10 max-w-2xl space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-teal-300 animate-ping" />
                  เปิดรับยื่นโครงการวิจัยออนไลน์ รอบเดือนพฤศจิกายน 2569
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  ยื่นขอรับการพิจารณา<br />
                  <span className="text-teal-300">จริยธรรมการวิจัยในมนุษย์</span>
                </h1>

                <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                  ระบบอิเล็กทรอนิกส์ที่ออกแบบมาเพื่อ <strong>นักวิจัย คณาจารย์ และนักศึกษา</strong> ลดขั้นตอนเอกสารกระดาษ ส่งโครงการ ประเมินผล และดาวน์โหลดใบรับรอง (COA) ได้ครบจบในที่เดียว
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setActiveView("submit")}
                    className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all"
                  >
                    + ยื่นขอรับการพิจารณาใหม่
                  </button>
                  <button
                    onClick={() => setActiveView("tracking")}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
                  >
                    ตรวจสอบสถานะโครงการ
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Target User Groups */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  role: "คณาจารย์ (Faculty Members)",
                  icon: "🎓",
                  desc: "รองรับการยื่นขอรับรองเพื่อประกอบการทำวิจัย ขอกำหนดตำแหน่งทางวิชาการ และการตีพิมพ์ระดับนานาชาติ",
                  badge: "เชื่อมโยงฐานข้อมูลบุคลากร",
                },
                {
                  role: "นักวิจัย (Researchers)",
                  icon: "🔬",
                  desc: "บริหารจัดการหลายโครงการพร้อมกัน ติดตามความก้าวหน้า ส่งรายงานความก้าวหน้าและต่ออายุใบรับรองออนไลน์",
                  badge: "แจ้งเตือนอัตโนมัติทุกขั้นตอน",
                },
                {
                  role: "นักศึกษา (Students)",
                  icon: "🧑‍🎓",
                  desc: "มีระบบอาจารย์ที่ปรึกษาร่วมตรวจสอบและลงนามรับรองอิเล็กทรอนิกส์ก่อนส่งเข้าสู่คณะกรรมการพิจารณา",
                  badge: "มีแบบฟอร์มมาตรฐานพร้อมใช้",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-teal-300 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold mb-2">
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-navy text-base mb-2">{item.role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3 Types of Review */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-navy text-base">ประเภทการพิจารณาจริยธรรมการวิจัย (Review Types)</h3>
                <span className="text-xs text-slate-400">มาตรฐานสากล ICH-GCP / Belmont Report</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-teal-700 mb-1">1. Exemption Review</div>
                  <div className="font-bold text-sm text-navy mb-1">พิจารณาแบบยกเว้น (7–14 วัน)</div>
                  <p className="text-xs text-slate-500">โครงการวิจัยที่มีความเสี่ยงไม่เกินความเสี่ยงน้อยที่สุด เช่น แบบสอบถามทั่วไป ข้อมูลทุติยภูมิ</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-blue-700 mb-1">2. Expedited Review</div>
                  <div className="font-bold text-sm text-navy mb-1">พิจารณาแบบเร่งด่วน (14–21 วัน)</div>
                  <p className="text-xs text-slate-500">โครงการวิจัยที่มีความเสี่ยงต่ำต่ออาสาสมัคร และไม่เกี่ยวข้องกับกลุ่มเปราะบางเชิงลึก</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold text-purple-700 mb-1">3. Full Board Review</div>
                  <div className="font-bold text-sm text-navy mb-1">คณะกรรมการเต็มชุด (ประชุมประจำเดือน)</div>
                  <p className="text-xs text-slate-500">โครงการวิจัยที่มีความเสี่ยงมากกว่าความเสี่ยงน้อย หรือศึกษาในกลุ่มเปราะบาง/คลินิก</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: SUBMIT NEW PROTOCOL */}
        {activeView === "submit" && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fade-in-up">
            <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-navy">แบบฟอร์มยื่นขอรับการพิจารณาโครงการวิจัยใหม่</h3>
                <p className="text-xs text-slate-500">กรอกข้อมูลโครงการและแนบไฟล์เอกสารเพื่อส่งเข้าสู่ระบบพิจารณาออนไลน์</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                ประจำเดือน พ.ย. 2569
              </span>
            </div>

            {submittedAlert ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-navy">ส่งคำร้องเข้าสู่ระบบสำเร็จ!</h4>
                <p className="text-sm text-slate-500">รหัสโครงการของคุณคือ <strong className="text-teal-700">REC-2569-1115</strong> กำลังนำทางไปยังหน้าติดตามสถานะ...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-2">สถานะหัวหน้าโครงการวิจัย *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["คณาจารย์", "นักวิจัย", "นักศึกษา"].map((role) => (
                        <button
                          type="button"
                          key={role}
                          onClick={() => setApplicantRole(role)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            applicantRole === role
                              ? "bg-teal-600 text-white border-teal-600"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:border-teal-300"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-2">ประเภทการพิจารณาที่ขอรับรอง *</label>
                    <select
                      value={reviewType}
                      onChange={(e) => setReviewType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none focus:border-teal-500"
                    >
                      <option value="Exemption Review">Exemption Review (เข้าข่ายยกเว้น)</option>
                      <option value="Expedited Review">Expedited Review (แบบเร่งด่วน)</option>
                      <option value="Full Board Review">Full Board Review (คณะกรรมการเต็มชุด)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">ชื่อโครงการวิจัย (ภาษาไทย) *</label>
                  <input
                    type="text"
                    defaultValue="การศึกษาผลของการใช้สื่อเทคโนโลยีดิจิทัลต่อทักษะการคิดวิเคราะห์ของเยาวชน"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">ชื่อโครงการวิจัย (ภาษาอังกฤษ) *</label>
                  <input
                    type="text"
                    defaultValue="Effects of Digital Media Utilization on Analytical Thinking Skills among Youth"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Document Checklist */}
                <div>
                  <label className="block text-xs font-bold text-navy mb-2">เอกสารประกอบการยื่นพิจารณา (อัปโหลดไฟล์ PDF)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "แบบเสนอโครงการวิจัย (Submission Form - AP-01)",
                      "โครงร่างการวิจัยฉบับสมบูรณ์ (Full Protocol)",
                      "เอกสารชี้แจงผู้เข้าร่วมการวิจัย (Participant Info Sheet)",
                      "หนังสือแสดงเจตนายินยอม (Informed Consent Form)",
                      "เครื่องมือที่ใช้ในการวิจัย (แบบสอบถาม/แบบสัมภาษณ์)",
                      "ประวัติผู้วิจัยและหลักฐานการอบรมจริยธรรม (HSP/GCP)",
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/70 text-xs">
                        <span className="text-slate-700 font-medium truncate pr-2">📄 {doc}</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                          แนบแล้ว ✓
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-slate-400">⚠️ คณะกรรมการฯ พิจารณาเฉพาะโครงการที่ยังไม่ได้เริ่มเก็บข้อมูลเท่านั้น</span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg shadow-teal-600/20 transition-all"
                  >
                    ยืนยันส่งโครงการเข้าพิจารณา ➔
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* VIEW 3: TRACKING & COA */}
        {activeView === "tracking" && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Step Progress Card for Selected Protocol */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-600">{selectedProtocol.code}</span>
                  <h3 className="text-base md:text-lg font-bold text-navy mt-0.5">{selectedProtocol.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    ผู้วิจัย: {selectedProtocol.researcher} ({selectedProtocol.role}) • ยื่นเมื่อ {selectedProtocol.submittedDate}
                  </p>
                </div>
                {selectedProtocol.status === "approved" && (
                  <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
                    <span>🏅 {selectedProtocol.coaNo}</span>
                  </div>
                )}
              </div>

              {/* 5-Step Pipeline */}
              <div className="grid grid-cols-5 gap-2">
                {[
                  "1. ยื่นคำร้องออนไลน์",
                  "2. ตรวจความครบถ้วนเอกสาร",
                  "3. กรรมการผู้ทรงคุณวุฒิพิจารณา",
                  "4. แจ้งผล / แก้ไขตามมติ",
                  "5. ออกใบรับรอง (COA)",
                ].map((label, index) => {
                  const stepNum = index + 1;
                  const done = stepNum <= selectedProtocol.step;
                  return (
                    <div key={label} className="text-center">
                      <div
                        className={`h-2.5 rounded-full mb-2 transition-all ${
                          done ? "bg-teal-600" : "bg-slate-200"
                        }`}
                      />
                      <span className={`text-[11px] font-bold block ${done ? "text-teal-700" : "text-slate-400"}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Protocols Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-navy text-sm">รายการโครงการวิจัยในระบบ (คลิกเพื่อดูสถานะ)</h3>
                <span className="text-xs text-slate-400">ข้อมูลอัปเดต: 12 พ.ย. 2569</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-500">
                      <th className="text-left px-5 py-3 font-semibold">รหัสโครงการ</th>
                      <th className="text-left px-5 py-3 font-semibold">ชื่อโครงการวิจัย</th>
                      <th className="text-left px-5 py-3 font-semibold">ผู้วิจัย / สถานะ</th>
                      <th className="text-left px-5 py-3 font-semibold">ประเภท</th>
                      <th className="text-left px-5 py-3 font-semibold">วันที่ยื่น</th>
                      <th className="text-left px-5 py-3 font-semibold">ผลการพิจารณา</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROTOCOLS.map((p) => (
                      <tr
                        key={p.code}
                        onClick={() => setSelectedProtocol(p)}
                        className={`border-b border-slate-50 cursor-pointer transition-colors ${
                          selectedProtocol.code === p.code ? "bg-teal-50/60" : "hover:bg-slate-50"
                        }`}
                      >
                        <td className="px-5 py-4 font-mono font-bold text-teal-700">{p.code}</td>
                        <td className="px-5 py-4 font-bold text-navy max-w-xs">{p.title}</td>
                        <td className="px-5 py-4">
                          <span className="font-semibold text-slate-700 block">{p.researcher}</span>
                          <span className="text-[10px] text-slate-400">{p.role} • {p.faculty}</span>
                        </td>
                        <td className="px-5 py-4 text-slate-600">{p.type}</td>
                        <td className="px-5 py-4 text-slate-500 whitespace-nowrap">{p.submittedDate}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              p.status === "approved"
                                ? "bg-emerald-100 text-emerald-700"
                                : p.status === "reviewing"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {p.statusLabel}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: REVIEWER CONSOLE */}
        {activeView === "reviewer" && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-navy text-base">ระบบประเมินโครงการสำหรับคณะกรรมการ (Reviewer Console)</h3>
                  <p className="text-xs text-slate-500">ประเมินความเสี่ยง ประโยชน์ และกระบวนการขอความยินยอมจากอาสาสมัครแบบออนไลน์</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  การประชุมครั้งที่ 11/2569
                </span>
              </div>

              <div className="space-y-4">
                {PROTOCOLS.map((p) => (
                  <div key={p.code} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-teal-700">{p.code}</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-600">
                          {p.role}
                        </span>
                      </div>
                      <h4 className="font-bold text-navy text-sm">{p.title}</h4>
                      <p className="text-xs text-slate-500">หัวหน้าโครงการ: {p.researcher} ({p.faculty})</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {reviewDecisions[p.code] ? (
                        <span className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white">
                          บันทึกมติแล้ว: {reviewDecisions[p.code]}
                        </span>
                      ) : (
                        <>
                          <button
                            onClick={() => setReviewDecisions((prev) => ({ ...prev, [p.code]: "รับรอง (Approve)" }))}
                            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                          >
                            ✓ รับรอง (Approve)
                          </button>
                          <button
                            onClick={() => setReviewDecisions((prev) => ({ ...prev, [p.code]: "แก้ไขเพื่อรับรอง (Minor Revision)" }))}
                            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white transition-colors"
                          >
                            ✎ แก้ไขเล็กน้อย
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div>© 2569 ระบบยื่นขอรับการพิจารณาจริยธรรมการวิจัยในมนุษย์ (Human Research Ethics e-Submission)</div>
        <div>อัปเดตข้อมูลล่าสุด: พฤศจิกายน 2569</div>
      </footer>
    </div>
  );
}

