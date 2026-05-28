import NichePromoTemplate from "@/components/NichePromoTemplate";

export default function ConstructionLandingPage() {
  return (
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
  );
}
