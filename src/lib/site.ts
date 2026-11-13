/**
 * Central SEO / AEO / GEO configuration for BigHero Studio.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel (Settings → Environment Variables)
 * to your production domain, e.g. https://bighero.dev
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bighero-web.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "BigHero Studio";

export const SITE_DESCRIPTION =
  "BigHero Studio รับทำเว็บไซต์ครบวงจร เขียนโค้ดเองทั้งหมด (Custom Code) ด้วย Next.js และ Laravel — เว็บไซต์ One-Page สำหรับ SME เริ่มต้น 2,990 บาท, เว็บไซต์องค์กรพร้อม CMS, ร้านค้าออนไลน์ E-Commerce, Web Application และ Dashboard รองรับ SEO, AEO และ GEO พร้อมโดเมน โฮสติ้ง SSL และดูแลฟรี 1 ปี";

export const CONTACT = {
  phone: "064-778-8954",
  phoneIntl: "+66-64-778-8954",
  email: "bighero.thailand@gmail.com",
  line: "@bigherostudio",
  lineUrl: "https://line.me/R/ti/p/@bigherostudio",
};

export const KEYWORDS = [
  "รับทำเว็บไซต์",
  "รับทำเว็บไซต์ราคาถูก",
  "รับทำเว็บไซต์บริษัท",
  "รับทำเว็บไซต์ SME",
  "รับทำเว็บ One-Page",
  "รับทำเว็บไซต์องค์กร",
  "รับทำเว็บขายของออนไลน์",
  "รับทำ E-Commerce",
  "รับทำ Web Application",
  "รับทำระบบหลังบ้าน",
  "รับทำ Dashboard",
  "รับเขียนโปรแกรม",
  "บริษัทรับทำเว็บไซต์",
  "ทำเว็บไซต์ Next.js",
  "ทำเว็บไซต์ Laravel",
  "SEO AEO GEO",
  "Web Development Thailand",
  "BigHero Studio",
];

/** Pricing data used for structured data (keep in sync with locales/th.json → pricing) */
export const OFFERS = [
  { name: "เว็บไซต์ One-Page สำหรับ SME", price: 2990, description: "เว็บไซต์หน้าเดียวเน้นปิดการขาย ดีไซน์ตามแบรนด์ Responsive SEO พื้นฐาน พร้อม Domain + Hosting + SSL ฟรี 1 ปี แก้ไขฟรี 2 รอบ" },
  { name: "เว็บไซต์องค์กร (Corporate Website)", price: 7900, description: "เว็บไซต์หลายหน้าพร้อมระบบ CMS จัดการเนื้อหาเอง ระบบข่าวสาร รองรับ 2 ภาษา SSL + Google Analytics อบรมทีมงาน" },
  { name: "เว็บไซต์ E-Commerce ร้านค้าออนไลน์", price: 14900, description: "ร้านค้าออนไลน์ครบระบบ สินค้า หมวดหมู่ ชำระเงิน QR/โอน/บัตร จัดการออเดอร์ ระบบสต็อก" },
  { name: "Web Application & Dashboard", price: 18000, description: "ระบบ Full-stack ตามโจทย์ธุรกิจ เช่น ระบบจองคิว Dashboard รายงาน ระบบอนุมัติ API Integration (ราคาเริ่มต้น)" },
];

/** Serialize JSON-LD safely (per Next.js JSON-LD guide: escape `<`). */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

