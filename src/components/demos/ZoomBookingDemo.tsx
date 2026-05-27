"use client";

import { useState } from "react";

/* ================================================================
   Zoom Meeting Booking System — Interactive Demo
   ================================================================ */

// ─── Mock Data ───────────────────────────────────────────────────
const BOOKINGS = [
  { id: 7, requester: "user_a", topic: "ทดสอบการอนุมัติผ่าน Telegram Bot", date: "18 พ.ค. 2569", time: "08:00 - 09:00", status: "approved" },
  { id: 6, requester: "user_b", topic: "โครงการยกระดับการศึกษาด้านวิทยาศาสตร์และเทคโนโลยี", date: "4 มิ.ย. 2569", time: "12:00 - 17:00", status: "approved" },
  { id: 5, requester: "user_a", topic: "ทดสอบการแจ้งเตือนอีเมล", date: "4 พ.ค. 2569", time: "12:00 - 13:00", status: "approved" },
  { id: 4, requester: "user_c", topic: "ทดสอบการใช้งานระบบจองดี Zoom", date: "24 เม.ย. 2569", time: "12:00 - 12:00", status: "approved" },
  { id: 3, requester: "user_a", topic: "ทดสอบ Telegram", date: "2 พ.ค. 2569", time: "12:00 - 13:00", status: "approved" },
  { id: 2, requester: "user_a", topic: "ทดสอบการแจ้งเตือนอีเมล", date: "30 เม.ย. 2569", time: "15:00 - 16:00", status: "approved" },
  { id: 1, requester: "user_a", topic: "ทดสอบ", date: "30 เม.ย. 2569", time: "12:00 - 13:00", status: "approved" },
];

const CALENDAR_EVENTS: Record<number, string[]> = {
  1: ["12 ทดสอบ (user_a)"],
  2: ["12 ทดสอบ Telegram"],
  4: ["12 ทดสอบการแจ้ง..."],
  18: ["08 ทดสอบการอนุมัติ..."],
  27: [],
};

const DEPARTMENTS = [
  "สำนักงานอธิการบดี",
  "คณะวิทยาศาสตร์",
  "คณะวิศวกรรมศาสตร์",
  "คณะบริหารธุรกิจ",
  "สำนักวิทยบริการ",
];

// ─── Sub-Components ──────────────────────────────────────────────

function StatCard({ label, value, sub, color, icon }: { label: string; value: string; sub: string; color: string; icon: React.ReactNode }) {
  return (
    <div className={`bg-white rounded-2xl border-2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default ${color}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
        <span className="opacity-60">{icon}</span>
      </div>
      <div className="text-3xl font-black text-navy leading-none mb-1">{value}</div>
      <span className="text-xs text-slate-400">{sub}</span>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-primary-600 text-white shadow-md shadow-primary-500/30"
          : "text-slate-600 hover:bg-primary-50 hover:text-primary-600"
      }`}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

// ─── Tab Views ────────────────────────────────────────────────────

function DashboardView() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Bookings"
          value="7"
          sub="↑ 12% from last month"
          color="border-slate-200 hover:border-primary-300"
          icon={<svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>}
        />
        <StatCard
          label="Pending Approval"
          value="0"
          sub="Action Required"
          color="border-amber-200 hover:border-amber-300"
          icon={<svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
        />
        <StatCard
          label="Active Rooms"
          value="0/1"
          sub="Zoom Accounts"
          color="border-green-200 hover:border-green-300"
          icon={<svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
        />
        <StatCard
          label="Auto-Approve"
          value="ON"
          sub="อนุมัติอัตโนมัติ"
          color="border-primary-200 hover:border-primary-300"
          icon={<svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
        />
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <h3 className="font-bold text-navy">Recent Booking Requests</h3>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-600 border border-primary-100 cursor-pointer hover:bg-primary-100 transition-colors">View All</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Requester</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Topic</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Date & Time</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {BOOKINGS.map((b) => (
                <tr key={b.id} className="border-b border-slate-50 hover:bg-primary-50/30 transition-colors cursor-default group">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-[10px] font-bold">
                        {b.requester[0].toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-navy text-xs">{b.requester}</span>
                        <span className="block text-[10px] text-slate-400">Booking ID: #{b.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 max-w-[200px] truncate text-xs">{b.topic}</td>
                  <td className="px-5 py-3.5 text-slate-500 text-xs whitespace-nowrap">
                    <span className="block font-medium">{b.date}</span>
                    <span className="text-slate-400">{b.time}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-600 border border-green-100">
                      Approved
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BookingFormView() {
  const [dept, setDept] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">จองห้องประชุม Zoom ใหม่</h3>
            <p className="text-primary-100 text-sm">กรุณากรอกข้อมูลให้ครบถ้วนเพื่อดำเนินการขอใช้ห้องประชุม</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-bold text-navy mb-2">หัวข้อการประชุม (Meeting Topic) <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="เช่น ประชุมคณะกรรมการบริหารประจำเดือน..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all bg-slate-50/50 placeholder:text-slate-300"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-navy mb-2">วัตถุประสงค์/รายละเอียด (Objective)</label>
            <textarea
              rows={3}
              placeholder="โปรดระบุเหตุผลความจำเป็น วัตถุประสงค์ หรือรายละเอียดอื่นๆ..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all bg-slate-50/50 resize-none placeholder:text-slate-300"
              readOnly
            />
          </div>

          {/* Guidelines */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-500">⚠️</span>
              <span className="font-bold text-sm text-amber-700">ข้อแนะนำการจอง (Guidelines)</span>
            </div>
            <ul className="text-xs text-amber-600 space-y-1 pl-6 list-disc">
              <li>ควรจองเผื่อเวลา เพื่อการประชุมยืดเยื้อ</li>
              <li>หากมีการขออุปกรณ์หรือขอทีมงานควบคุม <strong>ให้ขอผ่านระบบ e-doc เท่านั้น</strong></li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-bold text-navy mb-2">หน่วยงานที่ขอใช้ <span className="text-red-500">*</span></label>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-left flex items-center justify-between bg-slate-50/50 hover:border-primary-300 transition-colors"
              >
                <span className={dept ? "text-navy" : "text-slate-300"}>{dept || "เลือกหน่วยงาน..."}</span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-2 animate-fade-in-up">
                  {DEPARTMENTS.map((d) => (
                    <button key={d} onClick={() => { setDept(d); setShowDropdown(false); }} className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-navy mb-2">จำนวนผู้เข้าร่วม <span className="text-red-500">*</span></label>
              <input type="number" defaultValue={0} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-slate-50/50" readOnly />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-navy mb-2">เวลาเริ่ม (Start Time) <span className="text-red-500">*</span></label>
              <div className="flex items-center px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 gap-2">
                <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                <span className="text-sm text-slate-400">เลือกวันและเวลา</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-navy mb-2">เวลาสิ้นสุด (End Time) <span className="text-red-500">*</span></label>
              <div className="flex items-center px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 gap-2">
                <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                <span className="text-sm text-slate-400">เลือกวันและเวลา</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-red-500 mt-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            ต้องจองล่วงหน้าอย่างน้อย 2 วัน
          </div>

          <hr className="border-slate-100" />

          <div className="flex items-center justify-between">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              ย้อนกลับ
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              ยืนยันการจอง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarView() {
  const daysInMonth = 31;
  const startDay = 4; // May 2026 starts on Friday (0=Sun)
  const today = 27;
  const days = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"];

  const cells = [];
  // Previous month filler
  for (let i = 0; i < startDay; i++) {
    cells.push(<div key={`prev-${i}`} className="h-20 bg-slate-50/30 rounded-lg border border-slate-50" />);
  }
  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today;
    const events = CALENDAR_EVENTS[d];
    cells.push(
      <div
        key={d}
        className={`h-20 rounded-lg border p-1.5 transition-all hover:shadow-md hover:border-primary-200 cursor-default ${
          isToday ? "bg-amber-50/60 border-amber-200" : "bg-white border-slate-100"
        }`}
      >
        <span className={`text-xs font-semibold ${isToday ? "text-amber-600" : d % 7 === 0 || (d + startDay - 1) % 7 === 0 ? "text-red-400" : "text-primary-600"}`}>
          {d}
        </span>
        {events?.map((e, i) => (
          <div key={i} className="mt-0.5 text-[9px] text-primary-600 bg-primary-50 px-1 py-0.5 rounded truncate">
            ● {e}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-navy text-lg">รายการจองของฉัน</h3>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-500 cursor-pointer hover:bg-slate-200 transition-colors">รายการ (List)</span>
              <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-primary-600 text-white cursor-pointer shadow-sm">📅 ปฏิทิน (Calendar)</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="p-1.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 cursor-pointer">วันนี้</span>
            </div>
            <span className="text-xl font-bold text-navy">พฤษภาคม 2569</span>
            <div className="flex border border-slate-200 rounded-lg overflow-hidden">
              <span className="px-3 py-1.5 text-xs font-medium bg-navy text-white cursor-pointer">เดือน</span>
              <span className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 cursor-pointer border-x border-slate-200">สัปดาห์</span>
              <span className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 cursor-pointer">วัน</span>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-1">
            {days.map((d) => (
              <div key={d} className="text-center text-xs font-bold text-primary-600 py-2 bg-primary-50/50 rounded-lg">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells}
          </div>
        </div>
      </div>
    </div>
  );
}

function TelegramView() {
  const [approved, setApproved] = useState<Record<number, string>>({});

  const requests = [
    { id: 1, user: "user_a", topic: "ประชุมคณะกรรมการบริหาร", date: "28 พ.ค. 2569", time: "09:00 - 11:00" },
    { id: 2, user: "user_b", topic: "อบรมเชิงปฏิบัติการ AI", date: "29 พ.ค. 2569", time: "13:00 - 16:00" },
  ];

  return (
    <div className="max-w-lg mx-auto animate-fade-in-up">
      <div className="bg-[#1B2836] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
        {/* Telegram Header */}
        <div className="bg-[#17212B] px-5 py-4 flex items-center gap-3 border-b border-slate-700/50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-sm">Zoom Booking Bot</span>
            <span className="block text-blue-400 text-xs">🤖 bot • online</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4 min-h-[350px]">
          {requests.map((req) => (
            <div key={req.id} className="bg-[#212D3B] rounded-2xl p-4 max-w-[95%] border border-slate-600/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400 text-xs font-bold">📩 คำขอจองใหม่</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="text-slate-300"><span className="text-slate-500">ผู้จอง:</span> {req.user}</div>
                <div className="text-slate-300"><span className="text-slate-500">หัวข้อ:</span> {req.topic}</div>
                <div className="text-slate-300"><span className="text-slate-500">วันที่:</span> {req.date}</div>
                <div className="text-slate-300"><span className="text-slate-500">เวลา:</span> {req.time}</div>
              </div>

              {approved[req.id] ? (
                <div className={`mt-4 px-4 py-2.5 rounded-xl text-center text-sm font-bold ${
                  approved[req.id] === "approved"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {approved[req.id] === "approved" ? "✅ อนุมัติแล้ว" : "❌ ยกเลิกแล้ว"}
                </div>
              ) : (
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setApproved((prev) => ({ ...prev, [req.id]: "approved" }))}
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-green-500 text-white hover:bg-green-600 active:scale-95 transition-all shadow-lg shadow-green-500/20"
                  >
                    ✅ อนุมัติ
                  </button>
                  <button
                    onClick={() => setApproved((prev) => ({ ...prev, [req.id]: "rejected" }))}
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-500/20"
                  >
                    ❌ ยกเลิก
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Bot response when approved */}
          {Object.keys(approved).length > 0 && (
            <div className="bg-[#212D3B] rounded-2xl p-3 max-w-[80%] border border-slate-600/30 animate-fade-in-up">
              <span className="text-green-400 text-xs">🤖 ดำเนินการเรียบร้อย! ระบบส่ง Email แจ้งผู้จองเรียบร้อยแล้ว</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Demo Component ─────────────────────────────────────────

type TabKey = "dashboard" | "booking" | "calendar" | "telegram";

export default function ZoomBookingDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

  const sidebarItems: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    },
    {
      key: "booking",
      label: "New Booking",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
    },
    {
      key: "calendar",
      label: "Calendar",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
    },
    {
      key: "telegram",
      label: "Telegram Bot",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    },
  ];

  return (
    <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-2xl">
      {/* Demo Badge */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white text-center py-2.5 text-xs font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        INTERACTIVE DEMO — ลองกดดูได้เลย!
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      <div className="flex min-h-[600px]">
        {/* Sidebar */}
        <aside className="w-16 md:w-56 bg-white border-r border-slate-200 p-3 space-y-1 flex-shrink-0">
          {/* Logo area */}
          <div className="hidden md:flex items-center gap-2 px-3 py-4 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-bold text-navy text-sm">Zoom Booking</span>
          </div>

          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.key}
              onClick={() => setActiveTab(item.key)}
            />
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "booking" && <BookingFormView />}
          {activeTab === "calendar" && <CalendarView />}
          {activeTab === "telegram" && <TelegramView />}
        </main>
      </div>
    </div>
  );
}
