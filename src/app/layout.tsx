import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BigHero | รับจบ ครบวงจร เรื่องเว็บไซต์และระบบหลังบ้าน",
  description:
    "ทีมงานยอดมนุษย์พร้อมพัฒนาเว็บไซต์ รับทำเว็บไซต์ ระบบ Web Application และ Dashboard ที่ตอบโจทย์ธุรกิจของคุณ — One-Stop Service จบงานได้ทันที",
  keywords: ["รับทำเว็บไซต์", "Web Development", "Next.js", "Laravel", "WordPress", "Dashboard", "System Development", "BigHero Studio", "Thailand"],
  authors: [{ name: "BigHero Studio Team" }],
  creator: "BigHero Studio",
  openGraph: {
    title: "BigHero Studio | รับจบ ครบวงจร เรื่องเว็บไซต์และระบบหลังบ้าน",
    description: "ทีมงานยอดมนุษย์พร้อมพัฒนาเว็บไซต์และระบบที่ตอบโจทย์ธุรกิจของคุณ",
    url: "https://bighero.dev",
    siteName: "BigHero Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigHero Studio | รับจบ ครบวงจร เรื่องเว็บไซต์และระบบหลังบ้าน",
    description: "ทีมงานยอดมนุษย์พร้อมพัฒนาเว็บไซต์และระบบที่ตอบโจทย์ธุรกิจของคุณ",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bighero.dev/#organization",
      "name": "BigHero Studio",
      "url": "https://bighero.dev",
      "logo": "https://bighero.dev/logo.png",
      "description": "ทีมงานยอดมนุษย์พร้อมพัฒนาเว็บไซต์ รับทำเว็บไซต์ ระบบ Web Application และ Dashboard ที่ตอบโจทย์ธุรกิจของคุณ",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "064-778-8954",
        "contactType": "customer service",
        "email": "bighero.thailand@gmail.com",
        "availableLanguage": ["Thai", "English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://bighero.dev/#website",
      "url": "https://bighero.dev",
      "name": "BigHero Studio",
      "publisher": {
        "@id": "https://bighero.dev/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
