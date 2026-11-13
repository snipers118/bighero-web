import type { Metadata } from "next";
import NichePromoTemplate from "@/components/NichePromoTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID } from "@/lib/site";

const title = "รับทำเว็บไซต์บริษัทรับเหมาก่อสร้างและอสังหาริมทรัพย์";
const description =
  "บริการรับทำเว็บไซต์บริษัทรับเหมาก่อสร้าง รับสร้างบ้าน รีโนเวท อาคารสำเร็จรูป โปรไฟล์ออนไลน์น่าเชื่อถือ โชว์ผลงานชัดเจน ไม่ใช้ Template เริ่มต้น 2,990 บาท ส่งงานตรงเวลา";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["รับทำเว็บไซต์รับเหมาก่อสร้าง", "เว็บไซต์บริษัทก่อสร้าง", "รับทำเว็บรับสร้างบ้าน", "เว็บไซต์รีโนเวท", "BigHero Studio"],
  alternates: { canonical: "/construction" },
  openGraph: { title, description, url: "/construction" },
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
      offers: { "@type": "Offer", price: 2990, priceCurrency: "THB", url: `${SITE_URL}/construction` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "เว็บไซต์รับเหมาก่อสร้าง", item: `${SITE_URL}/construction` },
      ],
    },
  ],
};

export default function ConstructionLandingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <NichePromoTemplate
        nicheId="Construction"
        heroHeadline={
          <>
            เว็บไซต์บริษัทรับเหมาก่อสร้าง <br className="hidden md:block" />
            ที่ลูกค้าเห็นแล้ว<span className="text-primary-600">เชื่อมั่น</span>
          </>
        }
        heroSubheadline="โปรไฟล์ออนไลน์น่าเชื่อถือ · ไม่ใช้ Template · ส่งงานตรงเวลา"
        painPointsTitle="ลูกค้าไม่กล้าจ้าง... เพราะเว็บดูไม่โปร?"
        painPoints={[
          "ลูกค้าไม่กล้าจ้าง เพราะบริษัทไม่มีเว็บไซต์ที่ดูเป็นมืออาชีพ",
          "พลาดโปรเจกต์ใหญ่ เพราะโปรไฟล์ออนไลน์ไม่น่าเชื่อถือเมื่อเทียบกับคู่แข่ง",
          "ผลงานเยอะมาก แต่ลงในเพจ Facebook แล้วลูกค้าเลื่อนหาไม่เจอ กระจัดกระจาย"
        ]}
        portfolioItems={[
          { tag: "Prefab Building", title: "อาคารสำเร็จรูป", desc: "นำเสนอนวัตกรรม + ขอใบเสนอราคา", slug: "corporate-prefab" },
          { tag: "Residential", title: "รับสร้างบ้านหรู", desc: "ระบบโชว์ผลงานแบบพรีเมียม", slug: "construction-residential" },
          { tag: "Renovation", title: "บริการรีโนเวทภายใน", desc: "ดูภาพ Before/After ชัดเจน", slug: "construction-renovation" },
        ]}
      />
    </>
  );
}
