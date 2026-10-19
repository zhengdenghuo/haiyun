import type { Metadata } from "next";
import { EstimateTool } from "@/components/EstimateTool";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/estimate",
  title: "台灣集運運費試算｜海運、空運運費計算",
  description:
    "輸入包裹重量與長寬高，即時估算大陸寄台灣海運、海快包稅與空運集運運費，依實重與體積重取大值計費。",
});

export default function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Estimate"
        title="運費估算"
        description="輸入重量與三邊尺寸，按參考單價粗算。正式賬單以倉庫複核的計費重為準。"
      />
      <section className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <EstimateTool />
      </section>
    </>
  );
}
