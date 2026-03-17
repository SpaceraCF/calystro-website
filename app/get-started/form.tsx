"use client";
import { useState, FormEvent } from "react";

export default function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = data.get("first-name") || "";
    const lastName = data.get("last-name") || "";
    const company = data.get("company") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const interest = data.get("interest") || "";
    const teamSize = data.get("team-size") || "";
    const message = data.get("message") || "";

    const subject = `Enquiry from ${firstName} ${lastName} – ${company}`;
    const body = `Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Interested in: ${interest}
Team size: ${teamSize}

Message:
${message}`;

    window.location.href = `mailto:sales@calystro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success after short delay
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="bg-bg-light rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-bold text-primary mb-3">Your email client should have opened</h2>
        <p className="text-gray-500 mb-4">
          Your enquiry has been pre-filled and ready to send to <strong>sales@calystro.com</strong>. 
          If it didn&apos;t open automatically, email us directly at{" "}
          <a href="mailto:sales@calystro.com" className="text-accent underline">sales@calystro.com</a> 
          {" "}or call{" "}
          <a href="tel:0272293600" className="text-accent underline">02 7229 3600</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-bg-light rounded-2xl p-8">
      <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="first-name">First name</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="last-name">Last name</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">Company name</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email address</label>
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
          disabled={submitting}
          className="w-full bg-accent hover:bg-cyan-400 disabled:opacity-60 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
        >
          {submitting ? "Preparing…" : "Send Enquiry"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form you agree to be contacted by Calystro about your enquiry. We don&apos;t spam.
        </p>
      </form>
    </div>
  );
}
