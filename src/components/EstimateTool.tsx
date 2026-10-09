"use client";

import { useMemo, useState } from "react";

const lanes = [
  { id: "sea", label: "台湾海运普货", perKg: 18, perCbmFactor: 168 },
  { id: "sea-fast", label: "台湾海快包税", perKg: 28, perCbmFactor: 210 },
  { id: "air", label: "台湾空运普货", perKg: 46, perCbmFactor: 0 },
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
    const volWeight = (l * wi * h) / 6000;
    const billable = lane.id === "air" ? Math.max(w, volWeight) : Math.max(w, volWeight);
    const estimate = Math.max(billable, 1) * lane.perKg;
    return {
      volWeight: volWeight.toFixed(2),
      billable: billable.toFixed(2),
      estimate: Math.ceil(estimate),
      lane,
    };
  }, [height, laneId, length, weight, width]);

  return (
    <div className="soft-panel rounded-2xl p-6 md:p-8">
      <h2 className="font-display text-2xl text-ocean-900">运费估算</h2>
      <p className="mt-2 text-sm text-ink-muted">
        演示计算器，按「实重与体积重取大」粗算，最终以仓库测量为准。
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm text-ink-muted">线路</span>
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
        <NumberField label="长 (cm)" value={length} onChange={setLength} />
        <NumberField label="宽 (cm)" value={width} onChange={setWidth} />
        <NumberField label="高 (cm)" value={height} onChange={setHeight} />
      </div>

      <div className="mt-6 grid gap-3 rounded-xl bg-ocean-900 p-5 text-foam sm:grid-cols-3">
        <Stat label="体积重" value={`${result.volWeight} kg`} />
        <Stat label="计费重" value={`${result.billable} kg`} />
        <Stat label="估算运费" value={`¥ ${result.estimate} 起`} highlight />
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
