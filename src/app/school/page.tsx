import type { Metadata } from "next";
import NichePromoTemplate from "@/components/NichePromoTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID } from "@/lib/site";

const title = "รับทำเว็บไซต์โรงเรียน สถาบันกวดวิชา และโรงเรียนนานาชาติ";
const description =
  "บริการรับทำเว็บไซต์โรงเรียน สถาบันการศึกษา โรงเรียนนานาชาติ สถาบันกวดวิชา และโรงเรียนสอนศิลปะ/ดนตรี ภาพลักษณ์ทันสมัย ข้อมูลหลักสูตรครบถ้วน พร้อมระบบสมัครเรียนออนไลน์ เริ่มต้น 2,990 บาท";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["รับทำเว็บไซต์โรงเรียน", "เว็บไซต์สถาบันกวดวิชา", "เว็บไซต์โรงเรียนนานาชาติ", "ระบบรับสมัครเรียนออนไลน์", "BigHero Studio"],
  alternates: { canonical: "/school" },
  openGraph: { title, description, url: "/school" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: title,
      description,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Thailand" },
      offers: { "@type": "Offer", price: 2990, priceCurrency: "THB", url: `${SITE_URL}/school` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "เว็บไซต์โรงเรียนและสถาบันการศึกษา", item: `${SITE_URL}/school` },
      ],
    },
  ],
};

export default function SchoolLandingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <NichePromoTemplate
        nicheId="School"
        heroHeadline={
          <>
            เว็บไซต์โรงเรียนและสถาบัน <br className="hidden md:block" />
            ที่ผู้ปกครอง<span className="text-primary-600">มั่นใจ</span>
          </>
        }
        heroSubheadline="ภาพลักษณ์ทันสมัย · ข้อมูลครบถ้วน · สมัครเรียนง่าย"
        painPointsTitle="สถาบันดี... แต่ผู้ปกครองหาข้อมูลไม่เจอ?"
        painPoints={[
          "ผู้ปกครองหาข้อมูลหลักสูตรและค่าเทอมไม่เจอ ต้องโทรมาถามซ้ำๆ ตลอดเวลา",
          "ระบบสมัครเรียนยุ่งยาก ต้องให้ผู้ปกครองมากรอกเอกสารเป็นกระดาษที่สถาบัน",
          "ภาพลักษณ์ของสถาบันดูไม่ทันสมัย ทำให้แข่งขันกับสถาบันเปิดใหม่ได้ยาก"
        ]}
        portfolioItems={[
          { tag: "International", title: "โรงเรียนนานาชาติ", desc: "สองภาษา + ข้อมูลหลักสูตรครบ", slug: "school-international" },
          { tag: "Tutor", title: "สถาบันกวดวิชา", desc: "ตารางเรียนชัดเจน + สมัครออนไลน์", slug: "school-tutor" },
          { tag: "Art & Music", title: "โรงเรียนสอนศิลปะ/ดนตรี", desc: "โชว์ผลงานนักเรียนแบบ Gallery", slug: "school-music" },
        ]}
      />
    </>
  );
}
