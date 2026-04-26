import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | عروض حصرية لفترة محدودة`,
  description: siteConfig.description,
  keywords:
    "سيتي إيدج, City Edge, مزارين, العلمين الجديدة, جاردن سيتي هايتس, المقصد, العاصمة الإدارية, شقق للبيع, عقارات مصر",
  openGraph: {
    title: `${siteConfig.name} | عروض حصرية لفترة محدودة`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
