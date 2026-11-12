"use client";

import { useState } from "react";

const BRANDS = [
  { id: "bangchak", name: "Bangchak GreenMiles", category: "พลังงาน & ค้าปลีก", rate: 1.0, icon: "⛽", color: "bg-emerald-600", members: "6.2M" },
  { id: "maai", name: "MAAI by KTC", category: "การเงิน & บัตรเครดิต", rate: 1.25, icon: "💳", color: "bg-blue-600", members: "8.5M" },
  { id: "airasia", name: "AirAsia Rewards", category: "สายการบิน & ท่องเที่ยว", rate: 0.8, icon: "✈️", color: "bg-rose-600", members: "9.1M" },
  { id: "robinhood", name: "Robinhood Coin", category: "เดลิเวอรี & ไลฟ์สไตล์", rate: 1.1, icon: "🛵", color: "bg-purple-600", members: "4.8M" },
  { id: "princ", name: "Princ Health Point", category: "สุขภาพ & โรงพยาบาล", rate: 1.5, icon: "🏥", color: "bg-teal-600", members: "3.2M" },
  { id: "retail", name: "Max Card Plus", category: "พลังงาน & ค้าปลีก", rate: 0.95, icon: "🛒", color: "bg-amber-600", members: "3.0M" },
];

const RECENT_TXS = [
  { id: "TX-90841", from: "Bangchak GreenMiles", to: "AirAsia Rewards", pointsIn: "1,000", pointsOut: "1,250", time: "12 พ.ย. 2569 • 14:42 น.", status: "Verified" },
  { id: "TX-90840", from: "MAAI by KTC", to: "Princ Health Point", pointsIn: "2,400", pointsOut: "2,000", time: "12 พ.ย. 2569 • 14:39 น.", status: "Verified" },
  { id: "TX-90839", from: "Robinhood Coin", to: "Bangchak GreenMiles", pointsIn: "500", pointsOut: "550", time: "12 พ.ย. 2569 • 14:35 น.", status: "Verified" },
  { id: "TX-90838", from: "AirAsia Rewards", to: "MAAI by KTC", pointsIn: "5,000", pointsOut: "3,200", time: "12 พ.ย. 2569 • 14:30 น.", status: "Verified" },
];

export default function TPDPaypointDemo() {
  const [fromBrand, setFromBrand] = useState(BRANDS[0]);
  const [toBrand, setToBrand] = useState(BRANDS[1]);
  const [amount, setAmount] = useState<number>(1000);
  const [activeCategory, setActiveCategory] = useState<string>("ทั้งหมด");
  const [exchanged, setExchanged] = useState(false);

  const categories = ["ทั้งหมด", "พลังงาน & ค้าปลีก", "การเงิน & บัตรเครดิต", "สายการบิน & ท่องเที่ยว", "สุขภาพ & โรงพยาบาล"];

  const calculatedOutput = Math.round((amount * fromBrand.rate) / toBrand.rate);
  const fairRateRatio = (fromBrand.rate / toBrand.rate).toFixed(4);

  const handleSwap = () => {
    const temp = fromBrand;
    setFromBrand(toBrand);
    setToBrand(temp);
    setExchanged(false);
  };

  const handleSimulateExchange = () => {
    setExchanged(true);
    setTimeout(() => setExchanged(false), 3500);
  };

  const filteredBrands = activeCategory === "ทั้งหมด"
    ? BRANDS
    : BRANDS.filter((b) => b.category === activeCategory);

  return (
    <div className="bg-slate-950 text-white rounded-3xl border-2 border-slate-800 overflow-hidden shadow-2xl font-sans">
      {/* Demo Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-center py-2.5 text-xs font-bold tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        INTERACTIVE DEMO — ระบบศูนย์กลางแลกเปลี่ยนคะแนนสะสม (Point Clearing House)
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="px-6 md:px-10 py-5 border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-cyan-500/20">
            P
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white">PAYPOINT</span>
            <span className="block text-[10px] text-cyan-400 font-semibold uppercase tracking-widest">
              Point Depository (Thailand)
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <span className="text-cyan-400 cursor-pointer">หน้าหลัก</span>
          <span className="hover:text-white cursor-pointer transition-colors">Quantum Fair Rate</span>
          <span className="hover:text-white cursor-pointer transition-colors">พาร์ทเนอร์ (36+ แบรนด์)</span>
          <span className="hover:text-white cursor-pointer transition-colors">มาตรฐานความปลอดภัย</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Clearing House: Online (พ.ย. 2569)
          </span>
        </div>
      </nav>

      {/* Hero + Interactive Calculator */}
      <div className="relative px-6 md:px-10 py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-xs font-bold">
              <span>⚡</span> Thailand&apos;s First Point Clearing House
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              ศูนย์กลางแลกเปลี่ยน<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                คะแนนสะสมข้ามแบรนด์
              </span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              ปลดล็อกพอยต์ทุกกระเป๋าให้เป็นเรื่องเดียว เชื่อมต่อพาร์ทเนอร์ชั้นนำระดับประเทศด้วยระบบคำนวณอัตราแลกเปลี่ยนอัจฉริยะ{" "}
              <strong className="text-white">Quantum Fair Rate Algorithm</strong> ที่เป็นธรรมแบบ Real-time และป้องกันการทำ Arbitrage ได้ 100%
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-2xl md:text-3xl font-black text-cyan-400">36+</div>
                <div className="text-xs text-slate-400 mt-1">แบรนด์พาร์ทเนอร์ชั้นนำ</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-2xl md:text-3xl font-black text-blue-400">34.8M</div>
                <div className="text-xs text-slate-400 mt-1">สมาชิกในเครือข่าย</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-2xl md:text-3xl font-black text-emerald-400">0%</div>
                <div className="text-xs text-slate-400 mt-1">ความเสี่ยง Arbitrage</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quantum Fair Rate Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-lg text-white">จำลองการแลกเปลี่ยนคะแนน</h3>
                  <p className="text-xs text-slate-400">Quantum Fair Rate Engine • อัปเดตเรียลไทม์ พ.ย. 2569</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono font-bold">
                  1 : {fairRateRatio}
                </span>
              </div>

              {/* From Brand */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-3">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>โอนคะแนนจาก (ต้นทาง)</span>
                  <span>จำนวนคะแนนที่ใช้</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <select
                    value={fromBrand.id}
                    onChange={(e) => {
                      const found = BRANDS.find((b) => b.id === e.target.value);
                      if (found) setFromBrand(found);
                    }}
                    className="bg-slate-900 text-white text-sm font-bold px-3 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-400"
                  >
                    {BRANDS.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.icon} {b.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min={100}
                    step={100}
                    value={amount}
                    onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                    className="w-32 text-right text-2xl font-black bg-transparent text-white focus:outline-none border-b border-slate-700 focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 relative z-10">
                <button
                  onClick={handleSwap}
                  title="สลับต้นทาง-ปลายทาง"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  ⇅
                </button>
              </div>

              {/* To Brand */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mt-1 mb-5">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>รับคะแนนเข้า (ปลายทาง)</span>
                  <span>คะแนนที่ได้รับสุทธิ</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <select
                    value={toBrand.id}
                    onChange={(e) => {
                      const found = BRANDS.find((b) => b.id === e.target.value);
                      if (found) setToBrand(found);
                    }}
                    className="bg-slate-900 text-white text-sm font-bold px-3 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-400"
                  >
                    {BRANDS.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.icon} {b.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-2xl font-black text-cyan-400">
                    +{calculatedOutput.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Algorithm Check */}
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 flex items-center justify-between mb-5">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> ตรวจสอบ Anti-Arbitrage Guard
                </span>
                <span className="font-mono text-emerald-400 font-bold">PASSED (0.02s)</span>
              </div>

              {exchanged ? (
                <div className="w-full py-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm text-center">
                  ✅ แลกเปลี่ยนสำเร็จ! {amount.toLocaleString()} {fromBrand.name} → {calculatedOutput.toLocaleString()} {toBrand.name}
                </div>
              ) : (
                <button
                  onClick={handleSimulateExchange}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                >
                  ทดลองแลกเปลี่ยนคะแนนทันที
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Ecosystem & Clearing Ledger */}
      <div className="px-6 md:px-10 py-12 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">เครือข่ายพันธมิตร (Partner Ecosystem)</h2>
                <p className="text-xs text-slate-400">เชื่อมต่อระบบสมาชิกชั้นนำครอบคลุมทุกไลฟ์สไตล์</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      activeCategory === cat
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl ${brand.color} flex items-center justify-center text-xl shadow-md`}>
                      {brand.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{brand.name}</div>
                      <div className="text-[11px] text-slate-400">{brand.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-cyan-400">{brand.members}</div>
                    <div className="text-[10px] text-slate-500">สมาชิก</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Clearing Transactions */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white">รายการแลกเปลี่ยนล่าสุดบนระบบ Clearing House</h3>
              </div>
              <span className="text-[11px] text-slate-400">พฤศจิกายน 2569</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-800/80 text-slate-400 bg-slate-900/40">
                    <th className="text-left px-5 py-3 font-semibold">รหัสรายการ</th>
                    <th className="text-left px-5 py-3 font-semibold">ต้นทาง</th>
                    <th className="text-left px-5 py-3 font-semibold">ปลายทาง</th>
                    <th className="text-right px-5 py-3 font-semibold">คะแนนที่ใช้ → ได้รับ</th>
                    <th className="text-left px-5 py-3 font-semibold">เวลา</th>
                    <th className="text-left px-5 py-3 font-semibold">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_TXS.map((tx) => (
                    <tr key={tx.id} className="border-b border-slate-900 hover:bg-slate-900/40">
                      <td className="px-5 py-3 font-mono text-cyan-400">{tx.id}</td>
                      <td className="px-5 py-3 text-slate-200 font-medium">{tx.from}</td>
                      <td className="px-5 py-3 text-slate-200 font-medium">{tx.to}</td>
                      <td className="px-5 py-3 text-right font-mono text-white">
                        {tx.pointsIn} → <span className="text-emerald-400 font-bold">{tx.pointsOut}</span>
                      </td>
                      <td className="px-5 py-3 text-slate-400">{tx.time}</td>
                      <td className="px-5 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ✓ {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-6 bg-slate-950 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 บริษัท ศูนย์รับฝากคะแนน (ประเทศไทย) จำกัด (Point Depository Thailand). All rights reserved.</div>
        <div className="flex gap-4">
          <span>PDPA Compliant</span>
          <span>•</span>
          <span>ISO/IEC 27001 Standard</span>
        </div>
      </footer>
    </div>
  );
}

