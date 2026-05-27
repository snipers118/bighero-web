import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลงานของเรา (Portfolio) | BigHero Studio",
  description: "รวมผลงานการพัฒนาเว็บไซต์, Web Application และ Dashboard ที่เราภูมิใจนำเสนอ โดย BigHero Studio",
  openGraph: {
    title: "ผลงานของเรา (Portfolio) | BigHero Studio",
    description: "รวมผลงานการพัฒนาเว็บไซต์, Web Application และ Dashboard ที่เราภูมิใจนำเสนอ โดย BigHero Studio",
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
