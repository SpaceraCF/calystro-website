import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Internet – Secure NBN",
  description: "Business-grade NBN internet with Cisco Meraki security gateway built in. Intrusion prevention, malware protection, VPN, and more. From $190/mo.",
};

const plans = [
  {
    name: "Secure 100",
    price: "$190",
    speed: "98/34 Mbps",
    users: "up to ~10 users",
    sla: "Enhanced-12 eSLA",
    highlight: false,
  },
  {
    name: "Secure 250",
    price: "$200",
    speed: "248/87 Mbps",
    users: "up to ~25 users",
    sla: "Enhanced-12 eSLA",
    highlight: false,
  },
  {
    name: "Secure 500",
    price: "$280",
    speed: "497/174 Mbps",
    users: "up to ~50 users",
    sla: "Enhanced-4 eSLA",
    highlight: true,
  },
  {
    name: "Secure 1000",
    price: "$300",
    speed: "875/339 Mbps",
    users: "up to ~100 users",
    sla: "Enhanced-4 eSLA",
    highlight: false,
  },
];

const securityFeatures = [
  { icon: "🛡️", name: "Intrusion Prevention", desc: "Real-time detection and blocking of network intrusion attempts." },
  { icon: "🦠", name: "Malware Protection", desc: "Advanced malware scanning across all traffic entering your network." },
  { icon: "🔍", name: "Content Filtering", desc: "Block inappropriate or unsafe web content for your entire network." },
  { icon: "🌍", name: "GeoIP Blocking", desc: "Block traffic from high-risk countries and regions automatically." },
  { icon: "🔥", name: "Layer 7 Firewall", desc: "Application-aware firewall rules — control access by app, not just port." },
  { icon: "🔐", name: "Remote VPN", desc: "Secure remote access for your team — work from anywhere safely." },
  { icon: "🔗", name: "Site-to-Site VPN", desc: "Connect multiple offices or branches securely over the internet." },
  { icon: "🔧", name: "Proactive Maintenance", desc: "We monitor and maintain your gateway — you focus on your business." },
];

export default function BusinessInternetPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center gap-2 mb-4">
            <span className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full">Aussie Broadband Network</span>
            <span className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full">Cisco Meraki Security</span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Business Internet</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            NBN business internet with a Cisco Meraki Secure Gateway built in. You get fast, reliable internet AND enterprise-grade security — in one monthly price.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
              <h2 className={`text-xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-primary"}`}>{plan.name}</h2>
              <div className="mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>/mo</span>
              </div>
              <div className={`text-xs mb-5 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>+ GST, 12 month term</div>

              <div className="space-y-3 flex-1">
                <div className={`rounded-lg p-3 ${plan.highlight ? "bg-white/10" : "bg-bg-light"}`}>
                  <div className={`text-xs font-medium mb-0.5 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>Speed</div>
                  <div className="font-semibold text-sm">{plan.speed}</div>
                </div>
                <div className={`rounded-lg p-3 ${plan.highlight ? "bg-white/10" : "bg-bg-light"}`}>
                  <div className={`text-xs font-medium mb-0.5 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>Capacity</div>
                  <div className="font-semibold text-sm">{plan.users}</div>
                </div>
                <div className={`rounded-lg p-3 ${plan.highlight ? "bg-white/10" : "bg-bg-light"}`}>
                  <div className={`text-xs font-medium mb-0.5 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>SLA</div>
                  <div className="font-semibold text-sm">{plan.sla}</div>
                </div>
              </div>

              <div className={`text-xs my-4 ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>
                + Optional 4G backup <span className="font-semibold">$25/mo</span>
              </div>

              <Link
                href="/get-started"
                className={`block text-center py-2.5 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent hover:bg-cyan-400 text-white"
                    : "bg-primary hover:bg-blue-900 text-white"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mb-16">All plans include unlimited data, static IPv4, and Cisco Meraki Secure Gateway. No setup fees.</p>

        {/* Security features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-3 text-center">Cisco Meraki Secure Gateway — included in every plan</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Every Business Internet plan comes with a fully managed Cisco Meraki gateway. That means enterprise-grade network security is baked in — not an optional extra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((f) => (
              <div key={f.name} className="bg-bg-light rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-primary mb-2">{f.name}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* eSLA explainer */}
        <div className="bg-bg-light rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-primary mb-4">Understanding nbn eSLA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Enhanced-12 eSLA</h3>
              <p className="text-gray-500 text-sm">Fault resolution within 12 business hours. Included with Secure 100 and Secure 250 plans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Enhanced-4 eSLA</h3>
              <p className="text-gray-500 text-sm">Fault resolution within 4 business hours — our fastest response. Included with Secure 500 and Secure 1000.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready for secure, business-grade internet?</h2>
          <p className="text-blue-200 mb-6">Check availability at your address and get a quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Check Availability
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
