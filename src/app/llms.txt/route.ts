import projects from "@/data/projects.json";
import th from "@/locales/th.json";
import { SITE_URL, SITE_NAME, CONTACT, OFFERS } from "@/lib/site";

/**
 * /llms.txt — a plain-text summary of the site for LLM / AI answer engines (GEO).
 * Spec: https://llmstxt.org
 */
export const dynamic = "force-static";

export function GET() {
  const offers = OFFERS.map(
    (o) => `- **${o.name}** — ${o.price.toLocaleString("en-US")} บาท${o.name.includes("Web Application") ? " (เริ่มต้น)" : ""}: ${o.description}`
  ).join("\n");

  const portfolio = projects
    .map((p) => `- [${p.title.th}](${SITE_URL}/portfolio/${p.id}): ${p.description.th}`)
    .join("\n");

  const faq = th.faq.items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  const body = `# ${SITE_NAME}

> ${SITE_NAME} คือทีมรับทำเว็บไซต์และระบบในประเทศไทย เขียนโค้ดเองทั้งหมด (Custom Code ไม่ใช่ Template) ด้วย Next.js, Laravel และ CodeIgniter 4 ให้บริการเว็บไซต์ One-Page สำหรับ SME, เว็บไซต์องค์กรพร้อม CMS, ร้านค้าออนไลน์ E-Commerce, Web Application และ Dashboard รองรับ SEO, AEO และ GEO รับงานทั่วประเทศไทยและต่างประเทศ

## ข้อมูลสำคัญ (Key Facts)
- ราคาเริ่มต้น: 2,990 บาท (เว็บไซต์ One-Page รวม Domain + Hosting + SSL ฟรี 1 ปี)
- ระยะเวลาส่งมอบ: เว็บ One-Page 5–7 วันทำการ หลังได้รับข้อมูลครบ
- การรับประกัน: แก้ไขฟรี 2 รอบ และดูแล/แก้บั๊กฟรี 1 ปีเต็มหลังส่งมอบ
- เทคโนโลยี: Next.js, React, Laravel, CodeIgniter 4, Tailwind CSS
- กลุ่มลูกค้า: บริษัท, ผู้รับเหมาก่อสร้าง, ร้านอาหาร/คาเฟ่, โรงแรม/รีสอร์ท, หน่วยงานราชการ, SME, สถาบันการศึกษา
- พื้นที่ให้บริการ: ทั่วประเทศไทย และต่างประเทศ (ทำงานออนไลน์)
- เวลาทำการ: จันทร์–ศุกร์ 09:00–18:00 น.

## ติดต่อ (Contact)
- โทรศัพท์: ${CONTACT.phone}
- อีเมล: ${CONTACT.email}
- LINE: ${CONTACT.line} (${CONTACT.lineUrl})
- ฟอร์มติดต่อ: ${SITE_URL}/contact

## แพ็กเกจและราคา (Pricing)
${offers}

## ขั้นตอนการทำงาน (Process)
${th.workflow.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## หน้าหลัก (Main Pages)
- [หน้าแรก](${SITE_URL}/): ภาพรวมบริการ แพ็กเกจ และผลงานเด่น
- [บริการ](${SITE_URL}/services): รายละเอียดบริการรับทำเว็บไซต์และระบบ
- [ผลงาน](${SITE_URL}/portfolio): คลังผลงานพร้อม Interactive Demo
- [โปรโมชัน](${SITE_URL}/promo): แพ็กเกจโปรโมชันประจำเดือน
- [ติดต่อเรา](${SITE_URL}/contact): ขอใบเสนอราคา / ปรึกษาฟรี
- [เว็บไซต์บริษัทรับเหมาก่อสร้าง](${SITE_URL}/construction)
- [เว็บไซต์ร้านอาหารและคาเฟ่](${SITE_URL}/restaurant)
- [เว็บไซต์โรงเรียนและสถาบันการศึกษา](${SITE_URL}/school)

## ผลงาน (Portfolio)
${portfolio}

## คำถามที่พบบ่อย (FAQ)
${faq}

### ทำเว็บไซต์กับ BigHero Studio ราคาเท่าไหร่?
เริ่มต้น 2,990 บาทสำหรับเว็บไซต์ One-Page, 7,900 บาทสำหรับเว็บไซต์องค์กรพร้อม CMS, 14,900 บาทสำหรับ E-Commerce และเริ่มต้น 18,000 บาทสำหรับ Web Application / Dashboard

### ต่างจาก WordPress Template อย่างไร?
BigHero Studio เขียนโค้ดเองทั้งหมดด้วย Next.js ทำให้โหลดเร็วกว่า รองรับ SEO ดีกว่า และปรับแต่งดีไซน์ได้ยืดหยุ่นกว่าเทมเพลตทั่วไป
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

