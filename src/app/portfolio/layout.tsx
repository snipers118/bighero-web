import type { Metadata } from "next";
import projects from "@/data/projects.json";

const title = "ผลงานรับทำเว็บไซต์และระบบ (Portfolio)";
const description = `รวม ${projects.length}+ ผลงานรับทำเว็บไซต์ของ BigHero Studio ทั้งเว็บไซต์องค์กร ร้านค้าออนไลน์ E-Commerce, Landing Page, Web Application, Dashboard, ระบบ SSO และระบบ FinTech พร้อม Interactive Demo ให้ทดลองใช้งานจริง`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: "/portfolio" },
  twitter: { title, description },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
