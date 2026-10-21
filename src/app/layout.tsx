import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ogImage } from "@/lib/seo";
import { site, warehouseInfo } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜家具・家電・建材大件寄台灣海運`,
    template: `%s｜${site.name}`,
  },
  description:
    "海兔集運專做大件寄台灣：沙發、床架、冰箱、洗衣機與裝修建材，依才數計價，木架加固、送貨上樓、到府組裝一次安排。",
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    locale: "zh_TW",
    type: "website",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const streetAddress = `${warehouseInfo.district}${warehouseInfo.detail}`;

const businessJsonLd = {
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.englishName,
  url: `${site.url}/`,
  logo: `${site.url}/icon.png`,
  image: `${site.url}${ogImage.url}`,
  description: "家具、家電與建材等大件貨物寄台灣的海運集運服務。",
  areaServed: "TW",
  openingHours: "Mo-Sa 09:00-20:00",
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.email ? { email: site.email } : {}),
  ...(site.line ? { sameAs: [site.line] } : {}),
  ...(streetAddress
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality: warehouseInfo.city,
          addressRegion: warehouseInfo.province,
          postalCode: warehouseInfo.postcode,
          addressCountry: "CN",
        },
      }
    : {}),
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      alternateName: site.englishName,
      url: `${site.url}/`,
      inLanguage: "zh-TW",
      publisher: { "@id": `${site.url}/#business` },
    },
    businessJsonLd,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
