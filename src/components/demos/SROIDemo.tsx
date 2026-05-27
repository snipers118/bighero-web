"use client";

import { useState } from "react";

// --- Custom Simple Chart Components using SVG/CSS ---

const DonutChart = ({ value, total, color, label }: { value: number; total: number; color: string; label: string }) => {
  const percentage = (value / total) * 100;
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="64" cy="64" r="50" fill="none" stroke="#f1f5f9" strokeWidth="16" />
        <circle 
          cx="64" cy="64" r="50" fill="none" stroke={color} strokeWidth="16" 
          strokeDasharray="314" strokeDashoffset={314 - (percentage * 314) / 100}
          strokeLinecap="round" className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-gray-900 leading-none">{value}</span>
        <span className="text-xs text-gray-500 font-medium">{label}</span>
      </div>
    </div>
  );
};

// --- Executive Dashboard View ---
function ExecutiveDashboard() {
  const [approvals, setApprovals] = useState([
    { id: 1, title: "โครงการยกระดับสินค้าชุมชน OTOP", faculty: "คณะวิทยาศาสตร์", budget: "150,000", status: "pending", abbr: "OT", color: "bg-orange-100 text-orange-600" },
    { id: 2, title: "อบรมภาษาอังกฤษเพื่อชุมชน", faculty: "คณะครุศาสตร์", budget: "50,000", status: "pending", abbr: "EN", color: "bg-blue-100 text-blue-600" }
  ]);

  const handleApprove = (id: number) => {
    setApprovals(approvals.filter(a => a.id !== id));
  };

  return (
    <div className="bg-gray-50 font-sans text-sm animate-fade-in-up rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
      {/* Top Nav */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">S</div>
          <div>
            <h1 className="font-bold text-lg text-gray-900 leading-tight">Super Executive Dashboard</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Strategic & Operational View</p>
          </div>
        </div>
      </nav>

      <main className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* KPIs */}
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-600 rounded"></span>
            Key Performance Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 relative overflow-hidden flex items-center justify-between group hover:-translate-y-1 transition-transform">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Target Achievement</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">82%</h3>
                <p className="text-xs text-green-600 font-bold">↑ On Track</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-green-500 border-r-gray-100 flex items-center justify-center rotate-45">
                 <div className="-rotate-45 font-bold text-green-600 text-xs">82</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 relative overflow-hidden flex items-center justify-between group hover:-translate-y-1 transition-transform">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Data Quality</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">High</h3>
                <p className="text-xs text-blue-600 font-bold">Verified</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-b-gray-100 flex items-center justify-center -rotate-45">
                 <div className="rotate-45 font-bold text-blue-600 text-xs">HQ</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-800 to-blue-900 rounded-xl shadow-md p-4 text-white col-span-2 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                  <p className="text-[10px] text-indigo-200 font-bold uppercase">Total Social Value (YTD)</p>
                  <h3 className="text-4xl font-bold mt-1">฿12.8M</h3>
                  <p className="text-xs text-indigo-300 mt-1">Net Present Value generated this fiscal year</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] text-indigo-200 font-bold uppercase">Average SROI</p>
                  <div className="flex items-baseline gap-1 sm:justify-end">
                    <h3 className="text-3xl font-bold text-white">4.52</h3>
                    <span className="text-sm text-indigo-300">: 1</span>
                  </div>
                  <div className="w-32 bg-white/20 rounded-full h-1.5 mt-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-green-400 h-1.5 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pending Approvals */}
          <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden lg:col-span-1">
            <div className="px-5 py-4 border-b border-red-50 bg-red-50/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <h3 className="font-bold text-gray-900">รอการอนุมัติ (Pending)</h3>
              </div>
              <span className="px-2 py-0.5 bg-white border border-red-200 text-red-700 text-xs font-bold rounded shadow-sm">{approvals.length} Items</span>
            </div>
            <div className="divide-y divide-gray-100 min-h-[150px]">
              {approvals.length > 0 ? approvals.map(app => (
                <div key={app.id} className="p-4 hover:bg-gray-50 flex flex-col xl:flex-row xl:items-center justify-between gap-3 transition">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center font-bold ${app.color}`}>{app.abbr}</div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 truncate max-w-[180px]">{app.title}</h4>
                      <p className="text-[10px] text-gray-500">โดย: {app.faculty} • ฿{app.budget}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleApprove(app.id)} className="px-3 py-1.5 text-xs font-bold text-white bg-green-600 hover:bg-green-700 rounded transition">อนุมัติ</button>
                    <button onClick={() => handleApprove(app.id)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-white border border-gray-200 hover:bg-red-50 rounded transition">ปฏิเสธ</button>
                  </div>
                </div>
              )) : (
                <div className="p-8 text-center text-gray-400 font-medium">ไม่มีรายการรออนุมัติ 🎉</div>
              )}
            </div>
          </div>

          {/* Unit Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden lg:col-span-2 flex flex-col">
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-bold text-gray-900">Unit Summary Report</h3>
              <button className="text-xs text-indigo-600 font-bold hover:underline">Download Excel</button>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-[11px] text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-bold">Faculty</th>
                    <th className="px-4 py-3 font-bold text-center">Projects</th>
                    <th className="px-4 py-3 font-bold text-right">Budget</th>
                    <th className="px-4 py-3 font-bold text-right">Impact</th>
                    <th className="px-4 py-3 font-bold text-center">SROI Ratio</th>
                    <th className="px-4 py-3 font-bold text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-900">คณะวิทยาศาสตร์</td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-right">฿500,000</td>
                    <td className="px-4 py-3 text-right text-green-700 font-medium">฿2,425,000</td>
                    <td className="px-4 py-3 text-center text-green-600 font-bold">4.85</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">A+</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-900">คณะครุศาสตร์</td>
                    <td className="px-4 py-3 text-center">5</td>
                    <td className="px-4 py-3 text-right">฿850,000</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-medium">฿2,100,000</td>
                    <td className="px-4 py-3 text-center text-indigo-600 font-bold">2.47</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">B</span></td>
                  </tr>
                   <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-900">คณะมนุษยศาสตร์ฯ</td>
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3 text-right">฿240,000</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-medium">฿432,000</td>
                    <td className="px-4 py-3 text-center text-indigo-600 font-bold">1.80</td>
                    <td className="px-4 py-3 text-center"><span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">C+</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Impact Indicators */}
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-600 rounded"></span>
            Top Impact Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:border-green-400 transition group cursor-default">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900">อัตราการจ้างงานเพิ่มขึ้น</h4>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">฿4.2M</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Score 554</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1 mt-2"><div className="bg-green-500 h-1 rounded-full w-full"></div></div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:border-blue-400 transition group cursor-default">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900">ลดค่าใช้จ่ายสุขภาพผู้สูงอายุ</h4>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">฿1.8M</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Score 359</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1 mt-2"><div className="bg-blue-500 h-1 rounded-full w-[70%]"></div></div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:border-orange-400 transition group cursor-default">
               <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900">รายได้วิสาหกิจชุมชนเพิ่ม</h4>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">฿980k</span>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Score 334</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1 mt-2"><div className="bg-orange-500 h-1 rounded-full w-1/2"></div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Researcher Dashboard View ---
function ResearcherDashboard() {
  return (
    <div className="bg-slate-50 font-sans text-sm animate-fade-in-up rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
      {/* Top Nav */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-500/30">N</div>
            <span className="font-bold text-lg text-gray-800 tracking-tight hidden sm:block">NSTRU SROI</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-700">อ.ธนพล มีระกา</p>
                <p className="text-xs text-gray-500">คณะวิทยาศาสตร์</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-100 to-sky-50 border-2 border-white shadow-sm flex items-center justify-center text-sky-700 font-bold">T</div>
          </div>
        </div>
      </nav>

      <main className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-gray-500 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              ระบบพร้อมใช้งาน • อัปเดตล่าสุดเมื่อสักครู่
            </p>
          </div>
          <div className="flex gap-3">
             <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition">
                ปีงบประมาณ 2569
             </button>
             <button className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg shadow-md transition active:scale-95">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                สร้างโครงการ
             </button>
          </div>
        </div>

        {/* 4 Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <p className="text-sm font-medium text-gray-500">โครงการทั้งหมด</p>
             <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-bold text-gray-900">12</h3>
                <span className="inline-flex items-center text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+2</span>
             </div>
             <svg className="w-16 h-16 text-sky-600 absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path></svg>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <p className="text-sm font-medium text-gray-500">อนุมัติแล้ว</p>
             <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-bold text-green-600">8</h3>
                <span className="text-xs text-gray-400">โครงการ</span>
             </div>
             <div className="w-full bg-gray-100 rounded-full h-1 mt-4"><div className="bg-green-500 h-1 rounded-full w-2/3"></div></div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <p className="text-sm font-medium text-gray-500">มูลค่าทางสังคม (บาท)</p>
             <h3 className="text-3xl font-bold text-gray-900 mt-1">฿4.5M</h3>
             <span className="inline-flex items-center text-[10px] font-bold text-green-600 mt-1">+12.5% vs ปีที่แล้ว</span>
          </div>
          <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
             <p className="text-sm font-medium text-sky-100">SROI Ratio (เฉลี่ย)</p>
             <h3 className="text-4xl font-bold mt-1">3.2 : 1</h3>
             <p className="text-xs text-sky-200 mt-1">ทุก 1 บาท คืนทุน 3.2 บาท</p>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Left Col */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">โครงการล่าสุด</h3>
                    <div className="relative">
                       <input type="text" placeholder="ค้นหา..." className="pl-8 pr-4 py-1.5 text-xs border border-gray-200 rounded-full w-40 focus:outline-none focus:border-sky-500 bg-gray-50" />
                       <svg className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                       <thead className="bg-gray-50/50 text-[11px] uppercase font-bold text-gray-500 border-b border-gray-100">
                          <tr>
                             <th className="px-4 py-3">ชื่อโครงการ</th>
                             <th className="px-4 py-3">SROI</th>
                             <th className="px-4 py-3">สถานะ</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-50">
                          <tr className="hover:bg-gray-50 transition cursor-pointer">
                             <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                   <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">OS</div>
                                   <div>
                                      <div className="font-bold text-gray-900">วิศวกรสังคม รุ่น 2</div>
                                      <div className="text-[10px] text-gray-400">แก้ไขล่าสุด 2 ชม. ที่แล้ว</div>
                                   </div>
                                </div>
                             </td>
                             <td className="px-4 py-3 font-bold text-green-600">4.2 : 1</td>
                             <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">อนุมัติแล้ว</span></td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition cursor-pointer">
                             <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                   <div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs">OT</div>
                                   <div>
                                      <div className="font-bold text-gray-900">OTOP ยั่งยืน</div>
                                      <div className="text-[10px] text-gray-400">แก้ไขล่าสุด 1 วันที่แล้ว</div>
                                   </div>
                                </div>
                             </td>
                             <td className="px-4 py-3 font-bold text-gray-400">-</td>
                             <td className="px-4 py-3 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-yellow-600">กำลังร่าง</span>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>

           {/* Right Col */}
           <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
                 <h3 className="text-lg font-bold text-gray-900 w-full mb-4">สถานะโครงการ</h3>
                 <DonutChart value={8} total={12} color="#22c55e" label="อนุมัติแล้ว" />
                 <div className="w-full mt-6 space-y-2">
                     <div className="flex justify-between text-xs border-b border-dashed border-gray-100 pb-1">
                         <span className="flex items-center text-gray-600"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> อนุมัติแล้ว</span><span className="font-bold">8 โครงการ</span>
                     </div>
                     <div className="flex justify-between text-xs border-b border-dashed border-gray-100 pb-1">
                         <span className="flex items-center text-gray-600"><span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span> กำลังร่าง</span><span className="font-bold">4 โครงการ</span>
                     </div>
                 </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                 <div className="relative z-10">
                    <h4 className="font-bold text-base mb-1">🎉 ใช้งานได้ดีเยี่ยม!</h4>
                    <p className="text-xs text-purple-100 opacity-90 leading-relaxed">คุณบันทึกข้อมูลครบถ้วนแล้ว 80% พยายามอีกนิดเดียว</p>
                    <button className="mt-4 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-xs font-bold transition">ดูคำแนะนำ</button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

// --- Main Container ---
export default function SROIDemo() {
  const [activeTab, setActiveTab] = useState<"admin" | "user">("admin");

  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab("admin")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "admin" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Super Executive View (Admin)
          </button>
          <button 
            onClick={() => setActiveTab("user")}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "user" ? "bg-white text-sky-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Researcher View (User)
          </button>
        </div>
      </div>

      <div className="transition-opacity duration-300">
        {activeTab === "admin" ? <ExecutiveDashboard /> : <ResearcherDashboard />}
      </div>
    </div>
  );
}
