import NichePromoTemplate from "@/components/NichePromoTemplate";

export default function SchoolLandingPage() {
  return (
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
  );
}
