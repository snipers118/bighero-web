import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา (Contact Us) | BigHero Studio",
  description: "สนใจทำเว็บไซต์หรือระบบหลังบ้าน ติดต่อ BigHero Studio ได้เลย ปรึกษาฟรีไม่มีค่าใช้จ่าย",
  openGraph: {
    title: "ติดต่อเรา (Contact Us) | BigHero Studio",
    description: "สนใจทำเว็บไซต์หรือระบบหลังบ้าน ติดต่อ BigHero Studio ได้เลย ปรึกษาฟรีไม่มีค่าใช้จ่าย",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
