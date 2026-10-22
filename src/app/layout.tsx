import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ogImage } from "@/lib/seo";
import { site, warehouseInfo } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜台灣集運・大陸寄台灣海運專線`,
    template: `%s｜${site.name}`,
  },
  description:
    "鯨魚海運提供大陸寄台灣集運服務：淘寶、拼多多、1688 包裹合箱海運、海快與空運專線，東莞虎門倉收貨，計費透明、客服一對一跟進。",
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

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  alternateName: site.englishName,
  url: `${site.url}/`,
  inLanguage: "zh-TW",
  publisher: { "@id": `${site.url}/#organization` },
};

const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.englishName,
  url: `${site.url}/`,
  logo: `${site.url}/icon.png`,
  email: site.email,
  telephone: `+86-${site.phone}`,
  sameAs: [site.line],
};

const businessJsonLd = {
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.englishName,
  url: `${site.url}/`,
  logo: `${site.url}/icon.png`,
  image: `${site.url}${ogImage.url}`,
  description: "大陸寄台灣、港澳及東南亞的跨境集運與海運專線服務。",
  telephone: `+86-${site.phone}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${warehouseInfo.district}${warehouseInfo.detail}`,
    addressLocality: warehouseInfo.city,
    addressRegion: warehouseInfo.province,
    postalCode: warehouseInfo.postcode,
    addressCountry: "CN",
  },
  areaServed: ["TW", "HK", "MO", "SG", "MY"],
  openingHours: "Mo-Fr 09:00-21:00",
  sameAs: [site.line],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [websiteJsonLd, organizationJsonLd, businessJsonLd],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-TW"
      className="h-full antialiased"
    >
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
        <Analytics />
      </body>
    </html>
  );
}
