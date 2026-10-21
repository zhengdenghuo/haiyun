"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const content = String(data.get("content") || "").trim();

    if (!name || !phone || !content) {
      setStatus("error");
      setMessage("請填寫稱呼、聯絡方式與品項尺寸。");
      return;
    }

    try {
      const res = await fetch(`${site.basePath}/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          content,
          dest: String(data.get("dest") || "").trim(),
          website: String(data.get("website") || ""),
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(result.error || "送出失敗，請稍後再試。");
        return;
      }
    } catch {
      setStatus("error");
      setMessage("網路連線異常，請稍後再試。");
      return;
    }

    setStatus("success");
    setMessage("已收到估價需求，客服會在服務時間內與您聯絡。");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 rounded-3xl p-6 md:p-8">
      <div>
        <h2 className="heading text-xl text-char-950">線上估價</h2>
        <p className="mt-1 text-sm text-ink-soft">尺寸越完整，報價越準確。</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="稱呼" name="name" placeholder="例如：林小姐" required />
        <Field label="聯絡方式" name="phone" placeholder="手機、LINE 或微信" required />
      </div>
      <Field label="送貨地區與樓層" name="dest" placeholder="例如：新北市板橋區，5 樓有電梯" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-char-900">品項與尺寸</span>
        <textarea
          name="content"
          required
          rows={5}
          placeholder={"例如：三人座沙發 1 張，約 200×90×85 公分\n或直接貼上商品連結"}
          className="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-3 text-sm outline-none transition focus:border-ember-500 focus:bg-white"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-ember-500 py-3 text-sm font-semibold text-white transition hover:bg-ember-600 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "送出中…" : "送出估價需求"}
      </button>

      {status === "success" ? (
        <p className="rounded-xl bg-emerald-50 px-3.5 py-2.5 text-sm text-emerald-700" role="status">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl bg-ember-100 px-3.5 py-2.5 text-sm text-ember-600" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-char-900">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-sand-300 bg-sand-50 px-3.5 py-3 text-sm outline-none transition focus:border-ember-500 focus:bg-white"
      />
    </label>
  );
}
