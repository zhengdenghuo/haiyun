"use client";

import { useMemo, useState } from "react";
import { CM3_PER_CAI, VOLUME_DIVISOR, halfVolumeWeight } from "@/lib/site";

const lanes = [
  { id: "sea", label: "台灣海運 · 家具", perKg: 4.5, perCai: 25 },
  { id: "sea-fast", label: "台灣海快（不包稅）", perKg: 10, perCai: 0 },
  { id: "air", label: "台灣空運 · 普貨", perKg: 25, perCai: 0 },
] as const;

export function EstimateTool() {
  const [laneId, setLaneId] = useState<(typeof lanes)[number]["id"]>("sea");
  const [weight, setWeight] = useState("5");
  const [length, setLength] = useState("40");
  const [width, setWidth] = useState("30");
  const [height, setHeight] = useState("20");

  const result = useMemo(() => {
    const w = Number(weight) || 0;
    const l = Number(length) || 0;
    const wi = Number(width) || 0;
    const h = Number(height) || 0;
    const lane = lanes.find((x) => x.id === laneId)!;
    const cm3 = l * wi * h;
    if (lane.perCai) {
      const cai = cm3 / CM3_PER_CAI;
      const byWeight = w * lane.perKg;
      const byVolume = cai * lane.perCai;
      return {
        stats: [
          { label: "材數", value: `${cai.toFixed(2)} 材` },
          { label: "計費方式", value: byVolume > byWeight ? "按材積" : "按重量" },
        ],
        estimate: Math.ceil(Math.max(byWeight, byVolume)),
      };
    }
    const volWeight = cm3 / VOLUME_DIVISOR;
    const billable = halfVolumeWeight(w, volWeight);
    return {
      stats: [
        { label: "體積重", value: `${volWeight.toFixed(2)} kg` },
        { label: "計費重（半拋）", value: `${billable.toFixed(2)} kg` },
      ],
      estimate: Math.ceil(Math.max(billable, 1) * lane.perKg),
    };
  }, [height, laneId, length, weight, width]);

  return (
    <div className="soft-panel rounded-2xl p-6 md:p-8">
      <h2 className="font-display text-2xl text-ocean-900">運費估算</h2>
      <p className="mt-2 text-sm text-ink-muted">
        海運家具按重量與材積較高者計費；海快、空運按半拋計算。最終以倉庫測量為準。
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm text-ink-muted">線路</span>
          <select
            value={laneId}
            onChange={(e) => setLaneId(e.target.value as typeof laneId)}
            className="w-full rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm outline-none ring-sea-400/40 focus:ring-2"
          >
            {lanes.map((lane) => (
              <option key={lane.id} value={lane.id}>
                {lane.label}
              </option>
            ))}
          </select>
        </label>
        <NumberField label="重量 (kg)" value={weight} onChange={setWeight} />
        <NumberField label="長 (cm)" value={length} onChange={setLength} />
        <NumberField label="寬 (cm)" value={width} onChange={setWidth} />
        <NumberField label="高 (cm)" value={height} onChange={setHeight} />
      </div>

      <div className="mt-6 grid gap-3 rounded-xl bg-ocean-900 p-5 text-foam sm:grid-cols-3">
        {result.stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} />
        ))}
        <Stat label="估算運費" value={`約 ¥${result.estimate}`} highlight />
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ink-muted">{label}</span>
      <input
        type="number"
        min="0"
        step="0.1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm outline-none ring-sea-400/40 focus:ring-2"
      />
    </label>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-xs tracking-wide text-foam/55 uppercase">{label}</p>
      <p className={`mt-1 text-lg ${highlight ? "font-semibold text-sea-300" : ""}`}>{value}</p>
    </div>
  );
}
