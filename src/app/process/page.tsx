import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBand } from "@/components/QuoteBand";
import { pageMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/process",
  title: "運送流程｜大件家具寄台灣五步驟",
  description:
    "大件家具家電寄台灣五步驟：傳照片估價、寄到大件倉、驗貨與木架包裝、海運清關、送貨到府。每一步要準備什麼、要注意什麼一次說明。",
});

const prepare: Record<string, string> = {
  "01": "準備：商品連結、包裝尺寸、送貨地址與樓層",
  "02": "準備：收件人填「海兔集運＋專屬編號」",
  "03": "確認：到倉照片、是否加購木架加固",
  "04": "確認：品名、數量與貨值如實申報",
  "05": "確認：送貨時間、電梯與搬運動線",
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        label="運送流程"
        title="從估價到送進家門，一共五步"
        lead="大件最怕到倉才發現太大、送到才發現搬不上樓。所以每一步都先確認，再往下走。"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <ol className="relative border-l-2 border-sand-300 pl-8">
          {processSteps.map((step) => (
            <li key={step.step} className="relative pb-12 last:pb-0">
              <span className="heading absolute -left-[3.32rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-ember-500 text-sm text-white">
                {step.step}
              </span>
              <h2 className="heading text-xl text-char-950 md:text-2xl">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{step.desc}</p>
              <p className="mt-3 inline-block rounded-lg bg-sand-100 px-3 py-2 text-sm text-ink">{prepare[step.step]}</p>
            </li>
          ))}
        </ol>

        <div className="card mt-14 rounded-2xl p-6">
          <h2 className="heading text-lg text-char-950">寄之前建議先看</h2>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link href="/guide#measure" className="font-semibold text-ember-600 hover:underline">
              尺寸怎麼量
            </Link>
            <Link href="/warehouse" className="font-semibold text-ember-600 hover:underline">
              包裝方式
            </Link>
            <Link href="/guide#delivery" className="font-semibold text-ember-600 hover:underline">
              送貨到府前的確認
            </Link>
          </div>
        </div>
      </section>

      <QuoteBand title="準備好第一步了嗎？" text="先把商品連結與尺寸傳給客服，估價不收費。" />
    </>
  );
}
