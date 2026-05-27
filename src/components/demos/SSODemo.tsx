"use client";

import { useState } from "react";

/* ================================================================
   Single Sign-On (SSO) System — Interactive Demo
   ================================================================ */

// ─── Mock Data ───────────────────────────────────────────────────

const APP_CLIENTS = [
  { id: 1, name: "Zoom Booking System", clientId: "zoom_bk_****a3f2", redirect: "https://zoom.example.org/callback", status: "active", created: "15 ม.ค. 2569" },
  { id: 2, name: "E-Document System", clientId: "edoc_****7b19", redirect: "https://edoc.example.org/auth", status: "active", created: "20 ก.พ. 2569" },
  { id: 3, name: "HR Management", clientId: "hr_****c4e8", redirect: "https://hr.example.org/sso", status: "active", created: "1 มี.ค. 2569" },
  { id: 4, name: "E-Learning Portal", clientId: "learn_****d912", redirect: "https://learn.example.org/oauth", status: "revoked", created: "10 เม.ย. 2569" },
];

const SESSIONS = [
  { id: 1, browser: "Microsoft Edge", os: "Windows", ip: "192.168.x.x", active: "1 วันที่แล้ว", icon: "🌐" },
  { id: 2, browser: "Google Chrome", os: "Windows", ip: "192.168.x.x", active: "6 วันที่แล้ว", icon: "🟢" },
  { id: 3, browser: "Safari", os: "macOS", ip: "10.0.x.x", active: "12 วันที่แล้ว", icon: "🔵" },
];

const AUTH_APPS = [
  { id: 1, name: "Zoom Booking System", date: "27 May 2026, 10:55", browser: "Google Chrome บน Windows", ip: "192.168.x.x", initial: "Z", color: "bg-blue-500" },
  { id: 2, name: "E-Document System", date: "27 May 2026, 11:21", browser: "Google Chrome บน Windows", ip: "192.168.x.x", initial: "E", color: "bg-green-500" },
  { id: 3, name: "HR Management", date: "26 May 2026, 09:14", browser: "Microsoft Edge บน Windows", ip: "192.168.x.x", initial: "H", color: "bg-purple-500" },
];

const LOGS = [
  { time: "11:21:05", user: "admin", action: "Login", app: "SSO Portal", status: "success", ip: "192.168.x.x" },
  { time: "11:20:58", user: "user_a", action: "OAuth Authorize", app: "Zoom Booking", status: "success", ip: "192.168.x.x" },
  { time: "11:15:30", user: "admin", action: "Revoke App", app: "E-Learning Portal", status: "success", ip: "192.168.x.x" },
  { time: "10:55:12", user: "user_b", action: "Login", app: "SSO Portal", status: "success", ip: "10.0.x.x" },
  { time: "10:50:00", user: "admin", action: "2FA Verified", app: "SSO Admin", status: "success", ip: "192.168.x.x" },
  { time: "10:45:22", user: "user_c", action: "Login Failed", app: "SSO Portal", status: "failed", ip: "172.16.x.x" },
  { time: "09:30:18", user: "admin", action: "Add App Client", app: "HR Management", status: "success", ip: "192.168.x.x" },
  { time: "09:14:05", user: "user_a", action: "Session Start", app: "HR Management", status: "success", ip: "192.168.x.x" },
];

const ADMINS = [
  { id: 1, name: "Super Admin", email: "admin@example.org", role: "Super Admin", twoFA: true, lastLogin: "27 พ.ค. 2569 11:21" },
  { id: 2, name: "IT Manager", email: "it_mgr@example.org", role: "Admin", twoFA: true, lastLogin: "26 พ.ค. 2569 15:30" },
  { id: 3, name: "Help Desk", email: "helpdesk@example.org", role: "Viewer", twoFA: false, lastLogin: "25 พ.ค. 2569 09:00" },
];

const LOGIN_HISTORY = [
  { time: "27 May 2026, 10:55", method: "AD", status: "Success", ip: "192.168.x.x" },
  { time: "25 May 2026, 14:21", method: "AD", status: "Success", ip: "192.168.x.x" },
  { time: "20 May 2026, 09:34", method: "AD", status: "Success", ip: "192.168.x.x" },
  { time: "18 May 2026, 10:57", method: "AD", status: "Success", ip: "10.0.x.x" },
  { time: "18 May 2026, 10:40", method: "AD", status: "Success", ip: "10.0.x.x" },
  { time: "15 May 2026, 14:50", method: "EMAIL", status: "Success", ip: "10.0.x.x" },
  { time: "14 May 2026, 09:46", method: "AD", status: "Success", ip: "192.168.x.x" },
  { time: "12 May 2026, 14:54", method: "AD", status: "Success", ip: "118.x.x.x" },
  { time: "11 May 2026, 08:20", method: "AD", status: "Success", ip: "125.x.x.x" },
  { time: "08 May 2026, 11:18", method: "AD", status: "Success", ip: "10.0.x.x" },
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

function SidebarItem({ icon, label, active, onClick, badge }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void; badge?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30"
          : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
      }`}
    >
      {icon}
      <span className="hidden md:inline flex-1 text-left">{label}</span>
      {badge && <span className={`hidden md:inline px-2 py-0.5 rounded-full text-[10px] font-bold ${active ? "bg-white/20 text-white" : "bg-red-100 text-red-600"}`}>{badge}</span>}
    </button>
  );
}

// ─── Tab Views ────────────────────────────────────────────────────

function DashboardView() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Active Users" value="1,284" sub="↑ 8% จากเดือนก่อน" color="border-slate-200 hover:border-emerald-300"
          icon={<svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
        <StatCard label="App Clients" value="4" sub="3 Active / 1 Revoked" color="border-blue-200 hover:border-blue-300"
          icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
        />
        <StatCard label="Active Sessions" value="3" sub="2 Windows / 1 macOS" color="border-amber-200 hover:border-amber-300"
          icon={<svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        />
        <StatCard label="AD Connected" value="✓" sub="Synced 5 นาทีที่แล้ว" color="border-emerald-200 hover:border-emerald-300"
          icon={<svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
        />
      </div>

      {/* Provider Cards */}
      <div>
        <h3 className="font-bold text-navy mb-4">Identity Providers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Active Directory", status: "Connected", color: "border-emerald-200 bg-emerald-50/50", badge: "bg-emerald-100 text-emerald-700", icon: "🏢" },
            { name: "Google OAuth", status: "Connected", color: "border-emerald-200 bg-emerald-50/50", badge: "bg-emerald-100 text-emerald-700", icon: "🔵" },
            { name: "ThaID", status: "Connected", color: "border-emerald-200 bg-emerald-50/50", badge: "bg-emerald-100 text-emerald-700", icon: "🇹🇭" },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl border-2 p-5 ${p.color} hover:shadow-md transition-all cursor-default`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="font-bold text-navy text-sm">{p.name}</span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${p.badge}`}>● {p.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Login Chart Mockup */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="font-bold text-navy mb-4">Login Activity (7 Days)</h3>
        <div className="flex items-end gap-2 h-32">
          {[45, 62, 38, 71, 55, 80, 65].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group cursor-default">
              <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">{h}</span>
              <div
                className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg transition-all duration-500 hover:from-emerald-600 hover:to-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] text-slate-400">{["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppClientsView() {
  const [apps, setApps] = useState(APP_CLIENTS);
  const [showAdd, setShowAdd] = useState(false);

  const toggleRevoke = (id: number) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status: a.status === "active" ? "revoked" : "active" } : a));
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-navy text-lg">App Clients ({apps.length})</h3>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          เพิ่ม App Client
        </button>
      </div>

      {/* Add Form */}
      {showAdd && (
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 animate-fade-in-up">
          <h4 className="font-bold text-navy mb-4">Register New App Client</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">Application Name</label>
              <input type="text" placeholder="เช่น My App" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">Redirect URI</label>
              <input type="text" placeholder="https://myapp.example.org/callback" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">สร้าง Client</button>
            <button onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">ยกเลิก</button>
          </div>
        </div>
      )}

      {/* App List */}
      <div className="space-y-3">
        {apps.map((app) => (
          <div key={app.id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg ${app.status === "active" ? "bg-gradient-to-br from-emerald-400 to-emerald-600" : "bg-slate-300"}`}>
                  {app.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{app.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-400 font-mono">Client: {app.clientId}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${app.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                      {app.status === "active" ? "● Active" : "● Revoked"}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Redirect: {app.redirect}</span>
                </div>
              </div>
              <button
                onClick={() => toggleRevoke(app.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                  app.status === "active"
                    ? "border-2 border-red-200 text-red-600 hover:bg-red-50"
                    : "border-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {app.status === "active" ? "Revoke" : "Re-activate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SessionsView() {
  const [sessions, setSessions] = useState(SESSIONS);
  const [revokedApps, setRevokedApps] = useState<number[]>([]);

  const logoutSession = (id: number) => {
    setSessions(prev => prev.filter(s => s.id !== id));
  };

  const revokeApp = (id: number) => {
    setRevokedApps(prev => [...prev, id]);
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Active Sessions */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <h3 className="font-bold text-navy text-lg">Active Sessions</h3>
          <div className="relative group">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs flex items-center justify-center cursor-help font-bold">?</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-navy text-white text-xs rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              แสดงอุปกรณ์และเบราว์เซอร์ที่กำลังเข้าสู่ระบบอยู่ในขณะนี้ คุณสามารถกด Logout เพื่อออกจากระบบในอุปกรณ์ที่ต้องการได้ทันที
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {sessions.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h4 className="font-bold text-navy text-sm">{s.browser} <span className="font-normal text-slate-400">บน {s.os}</span></h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                    <span>IP: {s.ip}</span>
                    <span>Active: {s.active}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => logoutSession(s.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold border-2 border-red-200 text-red-500 hover:bg-red-50 transition-all active:scale-95"
              >
                Logout
              </button>
            </div>
          ))}
          {sessions.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">ไม่มี Session ที่ใช้งานอยู่</div>
          )}
        </div>
      </div>

      {/* Authorized Applications */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <h3 className="font-bold text-navy text-lg">Authorized Applications</h3>
          <div className="relative group">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs flex items-center justify-center cursor-help font-bold">?</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-navy text-white text-xs rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              แสดงแอปพลิเคชันที่คุณอนุญาตให้เข้าถึงข้อมูลบัญชีของคุณผ่านระบบ SSO กด Revoke เพื่อยกเลิกสิทธิ์การเข้าถึง
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {AUTH_APPS.map((a) => (
            <div key={a.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center text-white font-bold`}>
                  {a.initial}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{a.name}</h4>
                  <div className="text-xs text-slate-400 mt-1">
                    <span>{a.date} · {a.browser}</span><br />
                    <span>IP: {a.ip}</span>
                  </div>
                </div>
              </div>
              {revokedApps.includes(a.id) ? (
                <span className="px-4 py-2 rounded-xl text-xs font-bold text-red-400 border-2 border-red-100 bg-red-50">Revoked ✓</span>
              ) : (
                <button
                  onClick={() => revokeApp(a.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border-2 border-slate-200 text-slate-500 hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all active:scale-95"
                >
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminsView() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-navy text-lg">Admin Management</h3>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          เพิ่ม Admin
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Name</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Role</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">2FA</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Last Login</th>
            </tr>
          </thead>
          <tbody>
            {ADMINS.map((a) => (
              <tr key={a.id} className="border-b border-slate-50 hover:bg-emerald-50/30 transition-colors cursor-default">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                      {a.name[0]}
                    </div>
                    <div>
                      <span className="font-medium text-navy text-sm">{a.name}</span>
                      <span className="block text-[11px] text-slate-400">{a.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    a.role === "Super Admin" ? "bg-purple-100 text-purple-700" :
                    a.role === "Admin" ? "bg-blue-100 text-blue-700" :
                    "bg-slate-100 text-slate-600"
                  }`}>{a.role}</span>
                </td>
                <td className="px-5 py-4">
                  {a.twoFA ? (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-bold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Enabled
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">Disabled</span>
                  )}
                </td>
                <td className="px-5 py-4 text-xs text-slate-500">{a.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2FA Setup Card */}
      <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
            <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <div>
            <h4 className="font-bold text-navy">Two-Factor Authentication (2FA)</h4>
            <p className="text-xs text-slate-500">เพิ่มความปลอดภัยให้บัญชี Admin ด้วยการยืนยันตัวตน 2 ชั้น</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Google Authenticator", "Microsoft Authenticator", "Email OTP"].map((method) => (
            <div key={method} className="bg-white rounded-xl border border-slate-200 p-3 text-center hover:border-emerald-300 transition-colors cursor-default">
              <span className="text-2xl block mb-1">🔐</span>
              <span className="text-[11px] font-medium text-navy">{method}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogsView() {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-navy text-lg">Activity Logs</h3>
        <div className="flex gap-2">
          <input type="text" placeholder="ค้นหา..." className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none w-40" />
          <select className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none appearance-none cursor-pointer">
            <option>ทั้งหมด</option>
            <option>Login</option>
            <option>Revoke</option>
            <option>OAuth</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Time</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">User</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Action</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Application</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">Status</th>
              <th className="text-left px-5 py-3 font-semibold text-slate-400 text-xs uppercase">IP</th>
            </tr>
          </thead>
          <tbody>
            {LOGS.map((log, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-emerald-50/30 transition-colors cursor-default">
                <td className="px-5 py-3.5 text-xs font-mono text-slate-500">{log.time}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-medium ${log.user === "admin" ? "text-purple-600" : "text-navy"}`}>{log.user}</span>
                </td>
                <td className="px-5 py-3.5 text-xs text-slate-600 font-medium">{log.action}</td>
                <td className="px-5 py-3.5 text-xs text-slate-500">{log.app}</td>
                <td className="px-5 py-3.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    log.status === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                  }`}>
                    {log.status === "success" ? "✓ Success" : "✗ Failed"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs font-mono text-slate-400">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type TabKey = "dashboard" | "apps" | "sessions" | "admins" | "logs";

export default function SSODemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

  const sidebarItems: { key: TabKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    },
    {
      key: "apps",
      label: "App Clients",
      badge: "4",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    },
    {
      key: "sessions",
      label: "Sessions & Auth",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      key: "admins",
      label: "Admins & 2FA",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    },
    {
      key: "logs",
      label: "Activity Logs",
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    },
  ];

  return (
    <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-2xl">
      {/* Demo Badge */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center py-2.5 text-xs font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        INTERACTIVE DEMO — ลองกดดูได้เลย!
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>
      <div className="flex min-h-[600px]">
        {/* Sidebar */}
        <aside className="w-16 md:w-56 bg-white border-r border-slate-200 p-3 space-y-1 flex-shrink-0">
            {/* Logo */}
            <div className="hidden md:flex items-center gap-2 px-3 py-4 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-bold text-navy text-sm">SSO Admin</span>
            </div>

            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.key}
                icon={item.icon}
                label={item.label}
                active={activeTab === item.key}
                onClick={() => setActiveTab(item.key)}
                badge={item.badge}
              />
            ))}
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {activeTab === "dashboard" && <DashboardView />}
            {activeTab === "apps" && <AppClientsView />}
            {activeTab === "sessions" && <SessionsView />}
            {activeTab === "admins" && <AdminsView />}
            {activeTab === "logs" && <LogsView />}
        </main>
      </div>
    </div>
  );
}
