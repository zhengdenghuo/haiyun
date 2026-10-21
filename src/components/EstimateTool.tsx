"use client";

import { useMemo, useState } from "react";

type Item = { id: number; name: string; l: string; w: string; h: string; qty: string };

const CM3_PER_CAI = 28317;
const FCL_HINT_M3 = 15;

let nextId = 3;

export function EstimateTool() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "三人座沙發", l: "200", w: "90", h: "85", qty: "1" },
    { id: 2, name: "床架", l: "210", w: "40", h: "30", qty: "2" },
  ]);

  const rows = useMemo(
    () =>
      items.map((item) => {
        const cm3 = (Number(item.l) || 0) * (Number(item.w) || 0) * (Number(item.h) || 0) * (Number(item.qty) || 0);
        return { ...item, cai: cm3 / CM3_PER_CAI, m3: cm3 / 1_000_000 };
      }),
    [items],
  );
  const totalCai = rows.reduce((sum, row) => sum + row.cai, 0);
  const totalM3 = rows.reduce((sum, row) => sum + row.m3, 0);

  function update(id: number, key: keyof Item, value: string) {
    setItems((list) => list.map((item) => (item.id === id ? { ...item, [key]: value } : item)));
  }

  return (
    <div className="card rounded-3xl p-5 md:p-8">
      <div className="hidden grid-cols-[1.4fr_repeat(4,0.7fr)_0.8fr_auto] gap-2 px-1 text-xs font-semibold text-ink-soft md:grid">
        <span>品項</span>
        <span>長 cm</span>
        <span>寬 cm</span>
        <span>高 cm</span>
        <span>件數</span>
        <span className="text-right">才數</span>
        <span className="w-8" />
      </div>

      <ul className="mt-2 space-y-3">
        {rows.map((row) => (
          <li
            key={row.id}
            className="grid grid-cols-4 gap-2 rounded-2xl bg-sand-50 p-3 md:grid-cols-[1.4fr_repeat(4,0.7fr)_0.8fr_auto] md:items-center md:bg-transparent md:p-1"
          >
            <input
              aria-label="品項"
              value={row.name}
              onChange={(e) => update(row.id, "name", e.target.value)}
              placeholder="品項名稱"
              className="col-span-4 w-full min-w-0 rounded-lg border border-sand-300 bg-white px-3 py-2 text-sm outline-none focus:border-ember-500 md:col-span-1"
            />
            {(["l", "w", "h", "qty"] as const).map((key) => (
              <input
                key={key}
                aria-label={{ l: "長", w: "寬", h: "高", qty: "件數" }[key]}
                type="number"
                min="0"
                value={row[key]}
                onChange={(e) => update(row.id, key, e.target.value)}
                placeholder={{ l: "長", w: "寬", h: "高", qty: "件數" }[key]}
                className="w-full min-w-0 rounded-lg border border-sand-300 bg-white px-2.5 py-2 text-sm outline-none focus:border-ember-500"
              />
            ))}
            <p className="col-span-3 self-center whitespace-nowrap text-sm font-semibold text-char-950 md:col-span-1 md:text-right">
              {row.cai.toFixed(1)} 才
            </p>
            <button
              type="button"
              onClick={() => setItems((list) => list.filter((item) => item.id !== row.id))}
              className="justify-self-end rounded-full px-2 text-lg text-ink-soft hover:text-ember-600"
              aria-label={`刪除${row.name || "此品項"}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setItems((list) => [...list, { id: nextId++, name: "", l: "", w: "", h: "", qty: "1" }])}
        className="mt-4 rounded-full border-2 border-dashed border-sand-300 px-4 py-2 text-sm font-semibold text-ink hover:border-ember-400 hover:text-ember-600"
      >
        ＋ 新增品項
      </button>

      <div className="mt-6 grid gap-4 rounded-2xl bg-char-900 p-5 text-sand-100 sm:grid-cols-2">
        <div>
          <p className="text-xs text-sand-300">合計才數</p>
          <p className="heading mt-1 text-3xl text-ember-400">{totalCai.toFixed(1)} 才</p>
        </div>
        <div>
          <p className="text-xs text-sand-300">合計體積</p>
          <p className="heading mt-1 text-3xl text-white">{totalM3.toFixed(2)} m³</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        {totalM3 >= FCL_HINT_M3
          ? `總體積已超過約 ${FCL_HINT_M3} 立方米，整櫃有機會比併櫃划算，可請客服幫你比較。`
          : "試算僅估體積，實際費用依倉庫量測、線路與送貨條件報價。"}
      </p>
    </div>
  );
}
