import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
  CONTACT,
  OFFERS,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/site";

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

const DEFAULT_TITLE = "รับทำเว็บไซต์ครบวงจร เริ่มต้น 2,990 บาท | BigHero Studio";

export const viewport: Viewport = {
  themeColor: "#1e3fec",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | BigHero Studio",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "BigHero Studio Team", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "BigHero Studio — รับทำเว็บไซต์ครบวงจร",
      },
    ],
    locale: "th_TH",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: ["BigHero", "บิ๊กฮีโร่ สตูดิโอ"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      image: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      slogan: "เว็บไซต์ที่ช่วยให้ธุรกิจคุณดูน่าเชื่อถือ และพร้อมรับลูกค้าใหม่ตลอด 24 ชั่วโมง",
      telephone: CONTACT.phoneIntl,
      email: CONTACT.email,
      priceRange: "฿2,990 - ฿100,000+",
      currenciesAccepted: "THB",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TH",
      },
      areaServed: [
        { "@type": "Country", name: "Thailand" },
        { "@type": "Place", name: "Worldwide (Remote)" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phoneIntl,
          email: CONTACT.email,
          contactType: "customer service",
          areaServed: "TH",
          availableLanguage: ["Thai", "English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          url: CONTACT.lineUrl,
          availableLanguage: ["Thai"],
        },
      ],
      sameAs: [CONTACT.lineUrl],
      knowsAbout: [
        "Web Development",
        "Website Design",
        "Next.js",
        "React",
        "Laravel",
        "CodeIgniter 4",
        "E-Commerce Development",
        "Web Application Development",
        "Dashboard Development",
        "API Integration",
        "Single Sign-On (SSO)",
        "Search Engine Optimization (SEO)",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "บริการรับทำเว็บไซต์และระบบ",
        itemListElement: OFFERS.map((o) => ({
          "@type": "Offer",
          price: o.price,
          priceCurrency: "THB",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: o.name,
            description: o.description,
            provider: { "@id": ORG_ID },
            areaServed: "TH",
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["th-TH", "en-US"],
      publisher: { "@id": ORG_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body className="font-sans antialiased">
        <FacebookPixel />
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
