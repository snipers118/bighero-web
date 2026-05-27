"use client";

import { useState, useRef } from "react";

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

export default function SSOProfileDemo() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [email, setEmail] = useState("demo_user@example.org");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const [linkedAccounts, setLinkedAccounts] = useState({
    ad: true,
    thaid: true,
    google: true,
  });

  const [profileSessions, setProfileSessions] = useState([
    { id: 1, browser: "Google Chrome", os: "Windows", ip: "192.168.x.x", active: "8 วันที่แล้ว", icon: "🟢", current: true },
    { id: 2, browser: "Microsoft Edge", os: "Windows", ip: "192.168.x.x", active: "1 วันที่แล้ว", icon: "🌐", current: false },
    { id: 3, browser: "Google Chrome", os: "Windows", ip: "192.168.x.x", active: "6 วันที่แล้ว", icon: "🟢", current: false },
  ]);

  const [profileRevokedApps, setProfileRevokedApps] = useState<number[]>([]);

  const profileAuthApps = [
    { id: 1, name: "test with ci3", date: "25 May 2026, 14:21", browser: "Microsoft Edge บน Windows", ip: "192.168.x.x", initial: "T", color: "bg-slate-400" },
    { id: 2, name: "Zoom Booking", date: "27 May 2026, 10:55", browser: "Google Chrome บน Windows", ip: "192.168.x.x", initial: "N", color: "bg-blue-500" },
    { id: 3, name: "Zoom Booking", date: "27 May 2026, 11:21", browser: "Google Chrome บน Windows", ip: "192.168.x.x", initial: "N", color: "bg-blue-500" },
  ];

  return (
    <div className="bg-white p-6 md:p-10 animate-fade-in-up rounded-3xl border-2 border-slate-200 shadow-2xl relative overflow-hidden mt-12">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>
      
      {/* Demo Badge for Profile */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-b-lg text-[10px] font-bold tracking-widest shadow-md z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        USER PROFILE PORTAL (DEMO)
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 mt-6 gap-4">
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-navy transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">My Profile</h2>
            <p className="text-sm text-slate-500">Manage your account and linked identities</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            คู่มือ
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Back to Dashboard</button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-red-50 text-red-500 hover:bg-red-100 transition-colors">Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="space-y-6">
          {/* Avatar + Basic Info */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
            <div className="relative inline-block mb-4 group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/jpeg, image/png, image/webp" onChange={handleAvatarUpload} />
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg shadow-indigo-500/20 group-hover:opacity-90 transition-opacity border-4 border-white" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-lg shadow-indigo-500/20 group-hover:opacity-90 transition-opacity border-4 border-white">
                  U
                </div>
              )}
              <button className="absolute top-0 right-0 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors group-hover:scale-110 text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-2 h-6">
              {isEditingEmail ? (
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  onBlur={() => setIsEditingEmail(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingEmail(false)}
                  autoFocus
                  className="px-2 py-0.5 text-sm text-center border-b border-indigo-400 focus:outline-none bg-indigo-50 text-navy rounded-t w-48"
                />
              ) : (
                <p className="text-sm text-slate-500 flex items-center gap-1 group/email cursor-pointer" onClick={() => setIsEditingEmail(true)}>
                  {email}
                  <button className="opacity-0 group-hover/email:opacity-100 transition-opacity p-1 hover:bg-slate-100 rounded text-slate-400" title="แก้ไข Email">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                </p>
              )}
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">Person</span>

            <div className="mt-6 text-left space-y-3 border-t border-slate-100 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Username</span>
                <span className="font-medium text-navy">demo_user</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Thai Name</span>
                <span className="font-medium text-navy">ทดสอบ ระบบ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Thai ID</span>
                <span className="font-medium text-navy font-mono">1-••••-•••••-••-6</span>
              </div>
            </div>
          </div>

          {/* Linked Accounts */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <h3 className="font-bold text-navy">Linked Accounts</h3>
              <div className="relative group">
                <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-[10px] flex items-center justify-center cursor-help font-bold">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-navy text-white text-[10px] rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">บัญชีที่เชื่อมโยงกับระบบ SSO</div>
              </div>
            </div>
            <div className="space-y-3">
              {/* AD */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm shadow-blue-500/30">AD</div>
                  <div>
                    <span className="text-sm font-medium text-navy block">Active Directory</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Connected</span>
                  </div>
                </div>
              </div>
              {/* ThaID */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm shadow-indigo-500/30">TH</div>
                  <div>
                    <span className="text-sm font-medium text-navy block">ThaID</span>
                    <span className={`text-[10px] font-semibold ${linkedAccounts.thaid ? "text-emerald-600" : "text-slate-400"}`}>{linkedAccounts.thaid ? "Connected" : "Disconnected"}</span>
                  </div>
                </div>
                <button onClick={() => setLinkedAccounts(p => ({ ...p, thaid: !p.thaid }))} className={`text-[11px] font-bold transition-colors ${linkedAccounts.thaid ? "text-red-500 hover:text-red-700" : "text-emerald-600 hover:text-emerald-700"}`}>
                  {linkedAccounts.thaid ? "Disconnect" : "Connect"}
                </button>
              </div>
              {/* Google */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm shadow-red-500/30">G</div>
                  <div>
                    <span className="text-sm font-medium text-navy block">Google</span>
                    <span className={`text-[10px] font-semibold ${linkedAccounts.google ? "text-emerald-600" : "text-slate-400"}`}>{linkedAccounts.google ? "Connected" : "Disconnected"}</span>
                  </div>
                </div>
                <button onClick={() => setLinkedAccounts(p => ({ ...p, google: !p.google }))} className={`text-[11px] font-bold transition-colors ${linkedAccounts.google ? "text-red-500 hover:text-red-700" : "text-emerald-600 hover:text-emerald-700"}`}>
                  {linkedAccounts.google ? "Disconnect" : "Connect"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Sessions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h3 className="font-bold text-navy">Active Sessions</h3>
              <div className="relative group">
                <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-[10px] flex items-center justify-center cursor-help font-bold">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-navy text-white text-xs rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">แสดงอุปกรณ์และเบราว์เซอร์ที่กำลังเข้าสู่ระบบอยู่ คุณสามารถกด Logout เพื่อออกจากระบบในอุปกรณ์ที่ต้องการได้ทันที</div>
              </div>
            </div>
            <div className="space-y-3">
              {profileSessions.map(s => (
                <div key={s.id} className={`flex items-center justify-between p-4 rounded-xl border ${s.current ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-100'} hover:shadow-sm transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-navy">{s.browser} <span className="font-normal text-slate-400">บน {s.os}</span></span>
                        {s.current && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">This Device</span>}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">IP: {s.ip} · Active: {s.active}</div>
                    </div>
                  </div>
                  <button onClick={() => setProfileSessions(prev => prev.filter(x => x.id !== s.id))} className="px-4 py-1.5 rounded-lg text-xs font-bold text-red-500 border border-red-100 hover:bg-red-50 transition-colors">Logout</button>
                </div>
              ))}
              {profileSessions.length === 0 && <div className="text-center py-6 text-slate-400 text-sm">ไม่มี Session ที่ใช้งานอยู่</div>}
            </div>
          </div>

          {/* Authorized Applications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <h3 className="font-bold text-navy">Authorized Applications</h3>
              <div className="relative group">
                <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-[10px] flex items-center justify-center cursor-help font-bold">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-navy text-white text-xs rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">แสดงแอปพลิเคชันที่คุณอนุญาตให้เข้าถึงข้อมูลบัญชีของคุณผ่านระบบ SSO กด Revoke เพื่อยกเลิกสิทธิ์การเข้าถึง</div>
              </div>
            </div>
            <div className="space-y-3">
              {profileAuthApps.map(a => (
                <div key={a.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:shadow-sm transition-all hover:border-indigo-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center text-white font-bold shadow-sm shadow-blue-500/20`}>{a.initial}</div>
                    <div>
                      <span className="text-sm font-bold text-navy block">{a.name}</span>
                      <span className="text-xs text-slate-400">{a.date} · {a.browser}</span><br />
                      <span className="text-xs text-slate-400">IP: {a.ip}</span>
                    </div>
                  </div>
                  {profileRevokedApps.includes(a.id) ? (
                    <span className="px-4 py-1.5 rounded-lg text-xs font-bold text-red-400 border border-red-100 bg-red-50">Revoked ✓</span>
                  ) : (
                    <button onClick={() => setProfileRevokedApps(prev => [...prev, a.id])} className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-500 border border-slate-200 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors">Revoke</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Login History */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="font-bold text-navy">Recent Login History</h3>
              <div className="relative group">
                <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 text-[10px] flex items-center justify-center cursor-help font-bold">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-navy text-white text-[10px] rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">ประวัติการเข้าสู่ระบบทั้งหมด</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left pb-3 font-semibold text-slate-400 text-xs uppercase tracking-wide">Time</th>
                    <th className="text-left pb-3 font-semibold text-slate-400 text-xs uppercase tracking-wide">Method</th>
                    <th className="text-left pb-3 font-semibold text-slate-400 text-xs uppercase tracking-wide">Status</th>
                    <th className="text-left pb-3 font-semibold text-slate-400 text-xs uppercase tracking-wide">IP Address</th>
                  </tr>
                </thead>
                <tbody>
                  {LOGIN_HISTORY.map((log, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-default">
                      <td className="py-3 text-xs text-slate-600 font-medium">{log.time}</td>
                      <td className="py-3"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${log.method === "AD" ? "bg-indigo-100 text-indigo-700" : "bg-purple-100 text-purple-700"}`}>{log.method}</span></td>
                      <td className="py-3"><span className="text-xs font-semibold text-emerald-600">{log.status}</span></td>
                      <td className="py-3 text-xs font-mono text-slate-400">{log.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-[10px] text-slate-400 font-medium">
        © 2026 Nakhon Si Thammarat Rajabhat University
      </div>
    </div>
  );
}
