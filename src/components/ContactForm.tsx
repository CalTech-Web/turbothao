"use client";

import { useState, FormEvent } from "react";

const FORMS_URL = "https://forms.caltechweb.com/api/submit";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "turbothao.com",
          name: form.name,
          email: form.email,
          message: form.message,
          source: "contact-page",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-primary-soft p-10 text-center">
        <svg className="mx-auto h-12 w-12 text-accent-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 className="mt-4 font-heading text-xl font-bold text-text-primary">Message Sent!</h3>
        <p className="mt-2 text-sm italic text-text-secondary">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-accent-pink px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-pink-light"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-primary-soft p-8 space-y-5">
      <h3 className="font-heading text-xl font-bold text-text-primary">Send Us a Message</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent-pink"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent-pink"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent-pink resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-500">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent-pink py-3.5 text-base font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
