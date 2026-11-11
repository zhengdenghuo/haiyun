import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteBand } from "@/components/QuoteBand";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { faqs, processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: `${site.name}｜家具・家電・建材大件寄台灣海運`,
  description:
    "海兔集運專做大件寄台灣：沙發、床架、冰箱、洗衣機與裝修建材，依才數計價，木架加固、送貨上樓、到府組裝一次安排。",
  absoluteTitle: true,
});

const quoteNeeds = [
  { title: "商品連結或照片", desc: "淘寶、天貓、京東等連結都可以" },
  { title: "包裝後的長寬高與重量", desc: "不確定可先給商品尺寸與重量" },
  { title: "送貨地址與樓層", desc: "有無電梯、是否需要組裝" },
];

const cargoPhotos = [
  { file: "freezer-crate", name: "冷櫃", pack: "整件木架，裝櫃出貨", span: "col-span-2 row-span-2" },
  { file: "sofa", name: "沙發", pack: "纏膜加木架" },
  { file: "toilet", name: "智能馬桶", pack: "易碎品木架防撞" },
  { file: "slate-table", name: "岩板桌面", pack: "立式木架固定" },
  { file: "aquarium-batch", name: "魚缸", pack: "整批木箱" },
  { file: "bar-counter", name: "吧台", pack: "長件整體木架", span: "col-span-2" },
  { file: "cabinets", name: "櫃體", pack: "成批打木架" },
  { file: "coffee-table-box", name: "茶几", pack: "封閉木箱" },
  { file: "bathroom-vanity", name: "浴室櫃", pack: "木架加纏膜", mobileHidden: true },
  { file: "aquarium", name: "水族箱", pack: "木架斜撐加固", mobileHidden: true },
  { file: "office-furniture", name: "辦公家具", pack: "整板木架", mobileHidden: true },
  { file: "display-freezer", name: "展示冷櫃", pack: "立式木架", mobileHidden: true },
];

const productPhotos = [
  { file: "sofa-set", name: "沙發組" },
  { file: "bed-frame", name: "床架" },
  { file: "wardrobe", name: "組裝衣櫃" },
  { file: "slate-dining", name: "岩板餐桌椅" },
  { file: "tv-cabinet", name: "電視櫃、茶几" },
  { file: "solid-wood", name: "實木家具" },
  { file: "office", name: "辦公家具" },
  { file: "mahjong-table", name: "麻將桌" },
  { file: "freezer", name: "冷櫃" },
  { file: "display-cooler", name: "冷藏展示櫃" },
  { file: "fitness", name: "健身器材" },
  { file: "bathroom-vanity", name: "浴室櫃組" },
  { file: "aquarium", name: "大型魚缸", mobileHidden: true },
  { file: "shampoo-bed", name: "洗頭床", mobileHidden: true },
  { file: "cat-villa", name: "貓別墅", mobileHidden: true },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-sand-200 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-ember-100 px-3 py-1 text-xs font-semibold text-ember-600">
              大件專線・寄台灣
            </p>
            <h1 className="heading mt-5 text-4xl leading-tight text-char-950 md:text-6xl">
              {site.name}
              <span className="mt-3 block text-2xl text-ember-600 md:text-3xl">
                家具、家電、建材大件寄台灣
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              沙發、床架、電器或大型機械設備，從大陸倉驗貨包裝、海運清關，一路送到台灣家門口。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-600"
              >
                免費估價
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-char-900 px-6 py-3 text-sm font-semibold text-char-900 transition hover:bg-char-900 hover:text-white"
              >
                先算才數
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-char-900 p-7 text-sand-100 md:p-8">
            <p className="text-sm font-semibold text-ember-400">估價只要準備三件事</p>
            <ol className="mt-5 space-y-5">
              {quoteNeeds.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-sand-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/contact"
              className="mt-7 block rounded-xl bg-paper py-3 text-center text-sm font-semibold text-char-950 transition hover:bg-sand-100"
            >
              聯繫客服預估 →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-char-950 text-sand-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-ember-400">倉庫實拍</p>
              <h2 className="heading mt-2 text-2xl text-white md:text-3xl">大件寄台灣，都這樣打包出貨</h2>
              <p className="mt-3 text-sand-300">
                以下都是倉庫實際打包、裝車的照片。易碎、怕撞的大件會先加木架或木箱，再上櫃海運到台灣。
              </p>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-ember-400 hover:underline">
              傳尺寸，免費估價 →
            </Link>
          </div>

          <ul className="mt-10 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 md:auto-rows-[210px] md:gap-4">
            {cargoPhotos.map((photo, index) => (
              <li
                key={photo.file}
                className={`group relative overflow-hidden rounded-2xl bg-char-900 ${photo.span ?? ""} ${
                  photo.mobileHidden ? "hidden md:block" : ""
                }`}
              >
                <Image
                  src={`${site.basePath}/cargo/${photo.file}.jpg`}
                  alt={`${photo.name}寄台灣實拍：${photo.pack}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-3 pt-10 pb-3 md:px-4">
                  <p className={`heading text-white ${index === 0 ? "text-xl md:text-2xl" : "text-sm md:text-base"}`}>
                    {photo.name}
                  </p>
                  <p className={`text-sand-200 ${index === 0 ? "mt-1 text-sm" : "text-xs"}`}>{photo.pack}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-sand-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">專門處理這些大件</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">專業海運大件貨物，每一類都有對應的包裝與送貨方式。</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="card group flex flex-col rounded-2xl p-5 transition hover:border-ember-400"
              >
                <h3 className="heading text-lg text-char-950 group-hover:text-ember-600">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {service.examples.map((example) => (
                    <li key={example} className="rounded-md bg-sand-100 px-2 py-0.5 text-xs text-ink">
                      {example}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="heading text-xl text-char-950">常寄品項</h3>
              <p className="mt-1 text-sm text-ink-soft">淘寶買的這些大件，都能寄台灣。沒看到的品項也可以先問客服。</p>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-ember-600 hover:underline">
              問我的商品能不能寄 →
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {productPhotos.map((product) => (
              <li
                key={product.file}
                className={`card group overflow-hidden rounded-2xl ${product.mobileHidden ? "hidden sm:block" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={`${site.basePath}/products/${product.file}.jpg`}
                    alt={`${product.name}寄台灣`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="px-3 py-2.5 text-center text-sm font-semibold text-char-950">{product.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">五步送到家</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
          {processSteps.map((step) => (
            <li key={step.step} className="relative md:pt-10">
              <span className="absolute left-0 top-0 hidden h-0.5 w-full bg-sand-300 md:block" aria-hidden />
              <span className="heading relative text-sm text-ember-600 md:absolute md:-top-3 md:bg-sand-50 md:pr-2">
                STEP {step.step}
              </span>
              <h3 className="heading mt-1 text-lg text-char-950 md:mt-0">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-8 inline-block text-sm font-semibold text-ember-600 hover:underline">
          看完整運送流程 →
        </Link>
      </section>

      <section className="border-y border-sand-200 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">常見問題</h2>
            <p className="mt-3 text-ink-soft">第一次寄大件，多半會問這幾題。</p>
          </div>
          <div className="divide-y divide-sand-200 border-y border-sand-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-char-950">
                  {faq.q}
                  <span className="text-xl text-ember-500 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="heading ember-bar text-2xl text-char-950 md:text-3xl">大件知識</h2>
          <Link href="/articles" className="text-sm font-semibold text-ember-600 hover:underline">
            全部文章 →
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-sand-200 border-y border-sand-200">
          {articles.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="group flex flex-col gap-1 py-5 md:flex-row md:items-center md:justify-between md:gap-8"
              >
                <span className="heading text-lg text-char-950 group-hover:text-ember-600">{article.title}</span>
                <span className="text-sm text-ink-soft md:max-w-sm md:text-right">{article.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteBand
        title="有大件要寄回台灣？"
        text="傳商品連結或尺寸給客服，先拿報價再決定，不用先寄貨。"
      />
    </>
  );
}
