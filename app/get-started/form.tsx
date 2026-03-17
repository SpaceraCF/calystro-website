"use client";
import { useState, FormEvent } from "react";

export default function GetStartedForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdawpbav", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-bg-light rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-primary mb-3">Enquiry received!</h2>
        <p className="text-gray-500 text-lg">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
          <br />
          Prefer to talk now? Call us on{" "}
          <a href="tel:0272293600" className="text-accent font-semibold">02 7229 3600</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-bg-light rounded-2xl p-8">
      <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>

      {status === "error" && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
          Something went wrong. Please try again or call us on{" "}
          <a href="tel:0272293600" className="underline">02 7229 3600</a>.
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="first-name">First name *</label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="last-name">Last name *</label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">Company name *</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
            placeholder="Acme Pty Ltd"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Work email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
              placeholder="jane@example.com.au"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
              placeholder="02 XXXX XXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="interest">I&apos;m interested in</label>
          <select
            id="interest"
            name="interest"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
          >
            <option value="">Select a product or solution…</option>
            <option value="Business Calling">Business Calling</option>
            <option value="Business Internet">Business Internet</option>
            <option value="Business Wi-Fi">Business Wi-Fi</option>
            <option value="Work from Anywhere">Work from Anywhere</option>
            <option value="Secure Workspace">Secure Workspace</option>
            <option value="Workplace Calling">Workplace Calling</option>
            <option value="Small Call Centre">Small Call Centre</option>
            <option value="Multiple products">Multiple products</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="team-size">Team size</label>
          <select
            id="team-size"
            name="team-size"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
          >
            <option value="">Select team size…</option>
            <option value="1–10 people">1–10 people</option>
            <option value="11–25 people">11–25 people</option>
            <option value="26–50 people">26–50 people</option>
            <option value="51–100 people">51–100 people</option>
            <option value="100+ people">100+ people</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Tell us more (optional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white resize-none"
            placeholder="Current setup, challenges, timeline, location…"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-accent hover:bg-cyan-400 disabled:opacity-60 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form you agree to be contacted by Calystro about your enquiry. We don&apos;t spam.
        </p>
      </form>
    </div>
  );
}
