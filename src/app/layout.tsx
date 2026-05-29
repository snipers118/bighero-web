import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2040468492860402');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2040468492860402&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FZEN8HKSF4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FZEN8HKSF4');
            `,
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
