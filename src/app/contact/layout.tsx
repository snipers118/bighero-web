import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID } from "@/lib/site";

const title = "ติดต่อเรา ขอใบเสนอราคาทำเว็บไซต์ ปรึกษาฟรี";
const description =
  "สนใจทำเว็บไซต์หรือระบบหลังบ้าน ติดต่อ BigHero Studio ได้ทันที โทร 064-778-8954, LINE @bigherostudio หรืออีเมล bighero.thailand@gmail.com ปรึกษาฟรี ไม่มีค่าใช้จ่าย ตอบกลับภายใน 1–3 ชั่วโมง (จ–ศ)";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#page`,
      url: `${SITE_URL}/contact`,
      name: title,
      description,
      inLanguage: "th-TH",
      about: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: `${SITE_URL}/contact` },
      ],
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
