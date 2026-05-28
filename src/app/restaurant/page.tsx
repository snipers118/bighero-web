import NichePromoTemplate from "@/components/NichePromoTemplate";

export default function RestaurantLandingPage() {
  return (
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
  );
}
