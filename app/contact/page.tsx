"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // mailto fallback — replace with your preferred email service later
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:Shaypadeh196@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <div className="px-16 py-20">
      <div className="max-w-lg mx-auto">
        <div className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-700 mb-2">
              Name <span className="text-neutral-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Name..."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-neutral-200 px-4 py-3 text-[12px] tracking-[0.08em] font-light placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-700 mb-2">
              Email Address <span className="text-neutral-400">*</span>
            </label>
            <input
              type="email"
              placeholder="Your Email Address..."
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full border border-neutral-200 px-4 py-3 text-[12px] tracking-[0.08em] font-light placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-700 mb-2">
              Message <span className="text-neutral-400">*</span>
            </label>
            <textarea
              placeholder="Your Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={7}
              className="w-full border border-neutral-200 px-4 py-3 text-[12px] tracking-[0.08em] font-light placeholder:text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors bg-white resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="w-auto border border-neutral-900 px-10 py-3 text-[10px] tracking-[0.3em] uppercase font-light hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Submit"}
          </button>

          {status === "sent" && (
            <p className="text-[11px] tracking-[0.1em] text-neutral-500">
              Your email client will open to send the message.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
