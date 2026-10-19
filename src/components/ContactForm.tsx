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
      setMessage("請完整填寫姓名、聯繫方式與諮詢內容。");
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
        setMessage(result.error || "提交失敗，請稍後再試或直接電話聯繫。");
        return;
      }
    } catch {
      setStatus("error");
      setMessage("網絡異常，請稍後再試或直接電話聯繫。");
      return;
    }

    setStatus("success");
    setMessage("已收到您的留言，客服將在工作時間內與您聯繫。");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="soft-panel space-y-4 rounded-2xl p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="姓名 / 稱呼" name="name" placeholder="例如：陳先生" required />
        <Field label="手機或微信" name="phone" placeholder="便於回訪的聯繫方式" required />
      </div>
      <Field label="目的地（可選）" name="dest" placeholder="台灣 / 香港 / 其他" />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="block">
        <span className="mb-1.5 block text-sm text-ink-muted">諮詢內容</span>
        <textarea
          name="content"
          required
          rows={5}
          placeholder="請簡述貨物類型、大致重量體積，或想了解的線路"
          className="w-full rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm outline-none ring-sea-400/40 transition focus:ring-2"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-ocean-800 px-5 py-2.5 text-sm font-medium text-foam transition hover:bg-ocean-700 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "提交中…" : "提交諮詢"}
      </button>

      {status === "success" ? (
        <p className="rounded-lg bg-sea-500/10 px-3 py-2 text-sm text-sea-500" role="status">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-lg bg-accent/10 px-3 py-2 text-sm text-accent" role="alert">
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
      <span className="mb-1.5 block text-sm text-ink-muted">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm outline-none ring-sea-400/40 transition focus:ring-2"
      />
    </label>
  );
}
