import type { Metadata } from "next";
import NichePromoTemplate from "@/components/NichePromoTemplate";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID } from "@/lib/site";

const title = "รับทำเว็บไซต์ร้านอาหาร คาเฟ่ และบุฟเฟ่ต์ พร้อมระบบจองโต๊ะ";
const description =
  "บริการรับทำเว็บไซต์ร้านอาหาร คาเฟ่ เบเกอรี่ และบุฟเฟ่ต์ แสดงเมนูสวยงาม รองรับระบบจองโต๊ะออนไลน์และสั่งอาหารโดยตรง ไม่โดนหัก GP เริ่มต้น 2,990 บาท";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["รับทำเว็บไซต์ร้านอาหาร", "เว็บไซต์คาเฟ่", "ระบบจองโต๊ะออนไลน์", "เว็บไซต์บุฟเฟ่ต์", "BigHero Studio"],
  alternates: { canonical: "/restaurant" },
  openGraph: { title, description, url: "/restaurant" },
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
      offers: { "@type": "Offer", price: 2990, priceCurrency: "THB", url: `${SITE_URL}/restaurant` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "เว็บไซต์ร้านอาหารและคาเฟ่", item: `${SITE_URL}/restaurant` },
      ],
    },
  ],
};

export default function RestaurantLandingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <NichePromoTemplate
        nicheId="Restaurant"
        heroHeadline={
          <>
            เว็บไซต์ร้านอาหารและคาเฟ่ <br className="hidden md:block" />
            ดึงดูดลูกค้าตั้งแต่<span className="text-primary-600">วินาทีแรก</span>
          </>
        }
        heroSubheadline="แสดงเมนูสวยงาม · รับจองโต๊ะออนไลน์ · ไม่โดนหัก GP"
        painPointsTitle="ร้านสวย อาหารอร่อย... แต่ภาพออนไลน์ดูไม่พรีเมียม?"
        painPoints={[
          "ลูกค้าทักมาขอเมนูตลอดเวลา แอดมินตอบไม่ทันหรือตอบตกหล่น",
          "อยากรับจองโต๊ะ/สั่งอาหารออนไลน์ แต่ไม่อยากโดนหักเปอร์เซ็นต์ (GP) จากแอป",
          "ร้านตกแต่งสวย อาหารอร่อย แต่รูปบนออนไลน์ดูไม่น่าทาน แข่งกับร้านดังไม่ได้"
        ]}
        portfolioItems={[
          { tag: "Fine Dining", title: "ร้านอาหาร Fine Dining", desc: "หรูหรา + ระบบจองโต๊ะ VIP", slug: "restaurant-finedining" },
          { tag: "Cafe & Bakery", title: "คาเฟ่ & เบเกอรี่", desc: "เมนูขนมหวานน่าทาน + สั่งล่วงหน้า", slug: "restaurant-cafe" },
          { tag: "Buffet", title: "ร้านอาหารบุฟเฟ่ต์", desc: "แสดงราคาชัดเจน + โปรโมชันอัปเดต", slug: "restaurant-buffet" },
        ]}
      />
    </>
  );
}
