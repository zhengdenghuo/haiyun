import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Noto_Serif_SC({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodySans = Plus_Jakarta_Sans({
  variable: "--font-body-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodySc = Noto_Sans_SC({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜跨境集运与海运专线`,
    template: `%s｜${site.name}`,
  },
  description:
    "壹家海运提供大陆至台湾、港澳及东南亚的集运合箱、海运空运专线与仓配服务。流程透明、计费清晰、客服跟进。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${display.variable} ${bodySans.variable} ${bodySc.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
