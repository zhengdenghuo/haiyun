import type { Metadata } from "next";
import Link from "next/link";
import { EstimateTool } from "@/components/EstimateTool";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/estimate",
  title: "才數試算｜家具家電運費與才數計算",
  description:
    "輸入家具、家電的長寬高、件數與重量，自動計算才數、立方米，並估算海運家具、海快、空運三條線路的運費，寄大件到台灣前先算清楚。",
});

export default function EstimatePage() {
  return (
    <>
      <PageIntro
        label="才數試算"
        title="先算才數，再談運費"
        lead="輸入每件貨物包裝後的長寬高、件數與總重量，自動加總才數，並同時估算三條線路的運費。"
      />
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        <EstimateTool />
        <p className="mt-6 text-sm text-ink-soft">
          算好之後，把結果和商品連結一起傳給客服就能報價。{" "}
          <Link href="/contact" className="font-semibold text-ember-600 hover:underline">
            前往估價 →
          </Link>
        </p>
      </section>
    </>
  );
}
