import { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการของเรา (Services) | BigHero Studio",
  description: "บริการรับทำเว็บไซต์, Web Application, One-Page Website และ Dashboard ระบบหลังบ้านแบบครบวงจร โดยทีมงาน BigHero Studio",
  openGraph: {
    title: "บริการของเรา (Services) | BigHero Studio",
    description: "บริการรับทำเว็บไซต์, Web Application, One-Page Website และ Dashboard ระบบหลังบ้านแบบครบวงจร โดยทีมงาน BigHero Studio",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
