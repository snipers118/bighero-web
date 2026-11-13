import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID, OFFERS } from "@/lib/site";

const title = "บริการรับทำเว็บไซต์ Web Application และ Dashboard";
const description =
  "บริการรับทำเว็บไซต์ครบวงจร: เว็บไซต์ One-Page สำหรับ SME เริ่มต้น 2,990 บาท, เว็บไซต์องค์กรพร้อม CMS 7,900 บาท, E-Commerce 14,900 บาท และ Web Application / Dashboard เริ่มต้น 18,000 บาท พร้อมโดเมน โฮสติ้ง SSL และดูแลฟรี 1 ปี";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...OFFERS.map((o, i) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services#service-${i + 1}`,
      name: o.name,
      serviceType: "Web Development",
      description: o.description,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Thailand" },
      offers: {
        "@type": "Offer",
        price: o.price,
        priceCurrency: "THB",
        url: `${SITE_URL}/contact`,
      },
    })),
    {
      "@type": "HowTo",
      name: "ขั้นตอนการจ้างทำเว็บไซต์กับ BigHero Studio",
      step: [
        { "@type": "HowToStep", position: 1, name: "รับฟังโจทย์", text: "พูดคุยทำความเข้าใจความต้องการและเป้าหมายธุรกิจของคุณ" },
        { "@type": "HowToStep", position: 2, name: "ออกแบบ & วางแผน", text: "ออกแบบ UI/UX และวางโครงสร้างระบบที่เหมาะสมที่สุด" },
        { "@type": "HowToStep", position: 3, name: "พัฒนา & ทดสอบ", text: "เขียนโค้ด พัฒนาระบบ พร้อมทดสอบทุกขั้นตอน" },
        { "@type": "HowToStep", position: 4, name: "ส่งมอบ & ดูแล", text: "ส่งมอบงาน ฝึกอบรม และดูแลหลังการขาย 1 ปี" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "บริการ", item: `${SITE_URL}/services` },
      ],
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
