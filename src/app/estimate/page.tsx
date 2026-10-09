import type { Metadata } from "next";
import { EstimateTool } from "@/components/EstimateTool";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "运费估算",
};

export default function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Estimate"
        title="运费估算"
        description="输入重量与三边尺寸，按示例单价粗算。正式账单以仓库复核的计费重为准。"
      />
      <section className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <EstimateTool />
      </section>
    </>
  );
}
