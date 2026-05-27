import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/20 to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="text-9xl font-black text-navy/10 tracking-tighter mb-4">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            ไม่พบหน้าที่คุณต้องการ
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
            ขออภัย หน้าที่คุณพยายามเข้าถึงอาจถูกลบไปแล้ว หรือไม่มีอยู่จริง (Page Not Found)
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            กลับสู่หน้าหลัก
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
