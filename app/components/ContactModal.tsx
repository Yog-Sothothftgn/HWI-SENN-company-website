"use client";
import { useState } from "react";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", contact: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors text-xl leading-none"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="text-5xl">✅</div>
            <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Message Sent!</h3>
            <p className="text-base font-medium text-zinc-600">We&apos;ll get back to you shortly.</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-1">Get in Touch</h3>
            <p className="text-sm font-medium text-zinc-500 mb-6">We&apos;ll respond as soon as possible.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company name"
                    className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email / Phone *</label>
                <input
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="your@email.com or +1 234 567 8900"
                  className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your inquiry..."
                  className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 w-full rounded-full bg-zinc-800 py-3 text-sm font-semibold text-white tracking-wide hover:bg-zinc-700 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
