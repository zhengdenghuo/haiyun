"use client";

import { FormEvent, useState } from "react";

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
      setMessage("请完整填写姓名、联系方式与咨询内容。");
      return;
    }

    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setMessage("已收到您的留言（演示环境未真正发送）。客服将在工作时间内回电。");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="soft-panel space-y-4 rounded-2xl p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="姓名 / 称呼" name="name" placeholder="例如：陈先生" required />
        <Field label="手机或微信" name="phone" placeholder="便于回访的联系方式" required />
      </div>
      <Field label="目的地（可选）" name="dest" placeholder="台湾 / 香港 / 其他" />
      <label className="block">
        <span className="mb-1.5 block text-sm text-ink-muted">咨询内容</span>
        <textarea
          name="content"
          required
          rows={5}
          placeholder="请简述货物类型、大致重量体积，或想了解的线路"
          className="w-full rounded-lg border border-mist-200 bg-white px-3 py-2.5 text-sm outline-none ring-sea-400/40 transition focus:ring-2"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-ocean-800 px-5 py-2.5 text-sm font-medium text-foam transition hover:bg-ocean-700 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "提交中…" : "提交咨询"}
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
