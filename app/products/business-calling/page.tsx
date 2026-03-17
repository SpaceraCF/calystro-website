import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Phone System Australia | Cisco Webex | Calystro",
  description: "Cloud business calling from $15/user/month. Powered by Cisco Webex. Call from desk, laptop or mobile. No hardware, no lock-in. Australian support.",
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
      "Number porting included",
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
      "AI-powered meetings up to 200 people",
      "AI meeting summaries & transcripts",
      "Webinars to 10,000 attendees",
      "Advanced analytics & reporting",
      "Number porting included",
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
        {/* PSTN urgency banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 mb-10 flex gap-4 items-start">
          <div className="text-2xl flex-shrink-0">⚠️</div>
          <div>
            <p className="font-semibold text-amber-900 mb-1">The PSTN copper network is being switched off across Australia.</p>
            <p className="text-amber-800 text-sm">If your business still relies on a traditional landline, you need to migrate to cloud calling before your existing service is disconnected. Calystro manages the transition end to end — including porting your existing numbers.</p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full mb-4">Powered by Cisco Webex</div>
          <h1 className="text-4xl font-bold text-primary mb-4">Business Calling</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Replace your old phone system with enterprise-grade cloud calling. Works on any device, from anywhere. Your team can take calls from a desk phone, laptop, or mobile — and your existing numbers come with you.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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

        {/* Number porting callout */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-12 flex gap-6 items-start">
          <div className="text-4xl flex-shrink-0">🔢</div>
          <div>
            <h2 className="text-xl font-bold text-primary mb-2">Keep your existing numbers — we handle the porting</h2>
            <p className="text-gray-600 leading-relaxed">
              Switching to Calystro doesn&apos;t mean losing your business phone numbers. We manage the number porting process as part of your setup — your existing landline and direct dial numbers transfer to Webex cloud calling with zero disruption to clients or operations. We coordinate with your current provider so you don&apos;t have to.
            </p>
          </div>
        </div>

        {/* AI features callout for Plus User */}
        <div className="bg-primary rounded-2xl p-8 mb-12 text-white">
          <div className="flex gap-6 items-start">
            <div className="text-4xl flex-shrink-0">🤖</div>
            <div>
              <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Plus User — $45/user/mo</div>
              <h2 className="text-xl font-bold mb-2">AI-powered meetings that save your team hours every week</h2>
              <p className="text-blue-200 leading-relaxed mb-4">
                Plus User unlocks Cisco Webex AI — automatic meeting summaries, real-time transcripts, and intelligent action items so your team spends less time in meetings and more time acting on them. Host meetings up to 200 people, run webinars for up to 10,000 attendees, and get the analytics to back up every business decision.
              </p>
              <Link href="/get-started" className="inline-block bg-accent hover:bg-cyan-400 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                Upgrade to Plus User
              </Link>
            </div>
          </div>
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
          <p className="text-blue-200 mb-2">Talk to us about the right plan for your business. No obligation.</p>
          <p className="text-blue-300 text-sm mb-6">We typically respond within 1 business day.</p>
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
