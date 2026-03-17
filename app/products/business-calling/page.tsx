import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Calling – Cisco Webex",
  description: "Cloud-based business calling powered by Cisco Webex. Plans from $15/space/month. AI meetings, call queues, hunt groups, and more.",
};

const plans = [
  {
    name: "Basic Space",
    price: "$15",
    unit: "space/mo",
    billing: "billed annually",
    highlight: false,
    description: "Voice-only calling for shared spaces and co-working environments.",
    features: [
      "Voice calling only",
      "Co-working / shared spaces",
      "Desk phone required",
      "No setup fees",
      "12 month minimum term",
    ],
    note: "Per space (shared device)",
    cta: "Get Started",
  },
  {
    name: "Plus Space",
    price: "$25",
    unit: "space/mo",
    billing: "billed annually",
    highlight: false,
    description: "Video and voice calling for meeting rooms and shared spaces.",
    features: [
      "Video + voice calling",
      "Meeting room setups",
      "No setup fees",
      "12 month minimum term",
    ],
    note: "Per space (shared device)",
    cta: "Get Started",
  },
  {
    name: "Basic User",
    price: "$25",
    unit: "user/mo",
    billing: "billed annually",
    highlight: true,
    description: "Full-featured calling for individual users — the most popular choice.",
    features: [
      "Webex app (desktop + mobile)",
      "Call queues & hunt groups",
      "Auto-attendant menus",
      "Instant messaging",
      "Meetings up to 45 minutes",
      "No setup fees",
      "12 month minimum term",
    ],
    note: "Per named user",
    cta: "Get Started",
  },
  {
    name: "Plus User",
    price: "$45",
    unit: "user/mo",
    billing: "billed annually",
    highlight: false,
    description: "AI-powered meetings, transcripts, and large-scale webinars.",
    features: [
      "Everything in Basic User",
      "AI meetings up to 200 people",
      "AI summaries & transcripts",
      "Webinars to 10,000 attendees",
      "Advanced analytics",
      "No setup fees",
      "12 month minimum term",
    ],
    note: "Per named user",
    cta: "Get Started",
  },
];

export default function BusinessCallingPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full mb-4">Powered by Cisco Webex</div>
          <h1 className="text-4xl font-bold text-primary mb-4">Business Calling</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Replace your old phone system with enterprise-grade cloud calling. Works on any device, from anywhere, with AI-powered features to help your team do their best work.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 border flex flex-col ${
                plan.highlight
                  ? "bg-primary text-white border-primary shadow-2xl scale-105"
                  : "bg-white text-gray-900 border-gray-100 hover:shadow-lg"
              } transition-shadow`}
            >
              {plan.highlight && (
                <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">Most Popular</div>
              )}
              <h2 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-primary"}`}>{plan.name}</h2>
              <div className="mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>/{plan.unit}</span>
              </div>
              <div className={`text-xs mb-3 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>{plan.billing}</div>
              <p className={`text-sm mb-5 ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>{plan.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span className={plan.highlight ? "text-blue-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-xs mb-4 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>{plan.note}</div>
              <Link
                href="/get-started"
                className={`block text-center py-2.5 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent hover:bg-cyan-400 text-white"
                    : "bg-primary hover:bg-blue-900 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="bg-bg-light rounded-2xl p-10 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">What&apos;s included with every plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-primary mb-2">No Setup Fees</h3>
              <p className="text-gray-500 text-sm">Every Calystro plan includes zero setup fees. Just a simple monthly fee from day one.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-primary mb-2">Works Everywhere</h3>
              <p className="text-gray-500 text-sm">Desktop app, mobile app, or desk phone — your team can take calls from anywhere.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🇦🇺</div>
              <h3 className="font-semibold text-primary mb-2">Australian Support</h3>
              <p className="text-gray-500 text-sm">Local expert support for setup, onboarding, and ongoing management of your phone system.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to upgrade your phone system?</h2>
          <p className="text-blue-200 mb-6">Talk to us about the right plan for your business. No obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </Link>
            <a href="tel:0272293600" className="border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              02 7229 3600
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
