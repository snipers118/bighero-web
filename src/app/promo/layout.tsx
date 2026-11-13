import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const title = "โปรโมชันรับทำเว็บไซต์ เริ่มต้น 2,990 บาท (พฤศจิกายน 2569)";
const description =
  "โปรโมชันเดือนพฤศจิกายน 2569: เว็บไซต์ One-Page สำหรับ SME เพียง 2,990 บาท (ปกติ 5,500) รวม Domain + Hosting + SSL ฟรี 1 ปี เขียนโค้ดเอง ไม่ใช่ Template ส่งมอบใน 7 วัน แก้ไขฟรี 2 รอบ ดูแล 1 ปีเต็ม";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/promo" },
  openGraph: { title, description, url: "/promo" },
  twitter: { title, description },
};

const faqs = [
  { q: "ทำเว็บไซต์เสร็จนานแค่ไหน?", a: "เว็บไซต์ One-Page ใช้เวลา 5–7 วันทำการ หลังจากได้รับข้อมูลและ content ครบถ้วน" },
  { q: "ราคาโปรโมชัน 2,990 บาท มีเงื่อนไขอะไรไหม?", a: "ไม่มีค่าใช้จ่ายแอบแฝง ราคาเดียวเบ็ดเสร็จ รวม domain + hosting + SSL ให้ในปีแรก" },
  { q: "ถ้าไม่ถูกใจสามารถแก้ไขได้ไหม?", a: "สามารถแก้ไขได้ฟรี 2 รอบ (ในขอบเขตงาน) และดูแลระบบให้ฟรี 1 ปีเต็มหลังส่งมอบ" },
  { q: "ต่างจาก WordPress template อย่างไร?", a: "BigHero Studio เขียน code เองทั้งหมดด้วยเฟรมเวิร์กสมัยใหม่ (Next.js) ทำให้โหลดเร็วกว่า SEO ติดง่ายกว่า และดีไซน์ปรับแต่งได้ยืดหยุ่นกว่าเทมเพลตทั่วไป" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/promo#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Offer",
      name: "เว็บไซต์ One-Page สำหรับ SME (โปรโมชัน)",
      price: 2990,
      priceCurrency: "THB",
      priceValidUntil: "2026-11-30",
      availability: "https://schema.org/LimitedAvailability",
      url: `${SITE_URL}/promo`,
    },
  ],
};

export default function PromoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}

