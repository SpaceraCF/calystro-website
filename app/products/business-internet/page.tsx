import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business NBN Plans with Security Included | Calystro",
  description: "Managed business internet from $190/month. Cisco Meraki firewall, VPN & malware protection included. nbn eSLA. Aussie Broadband network. Get a quote.",
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
  { icon: "🛡️", name: "Meraki MX Firewall", desc: "Enterprise-grade stateful firewall managed in the cloud. Protect your network from the moment you're connected." },
  { icon: "🦠", name: "Advanced Malware Protection", desc: "Cisco AMP-powered malware scanning across all traffic entering your network — catches threats before they reach your devices." },
  { icon: "🔍", name: "Content Filtering", desc: "Block inappropriate or unsafe web content across your entire network with Meraki's always-updated category database." },
  { icon: "🌍", name: "GeoIP Blocking", desc: "Automatically block traffic from high-risk countries and regions — reducing your attack surface with zero configuration." },
  { icon: "🔥", name: "Layer 7 Application Firewall", desc: "Application-aware firewall rules — control access by app, not just port. Block streaming, social media, or anything else during business hours." },
  { icon: "🔐", name: "Cisco AnyConnect VPN", desc: "Secure remote access for your team — work from home or anywhere with enterprise-grade encrypted VPN, managed for you." },
  { icon: "🔗", name: "Site-to-Site VPN", desc: "Connect multiple offices or branches securely over the internet. Automatic mesh VPN between all your Meraki sites." },
  { icon: "🔧", name: "Proactive Managed Service", desc: "We monitor and maintain your Meraki gateway around the clock. Security updates, alerts, and troubleshooting — handled." },
];

export default function BusinessInternetPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header — security-led */}
        <div className="text-center mb-14">
          <div className="flex justify-center gap-2 mb-4">
            <span className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full">Aussie Broadband Network</span>
            <span className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full">Cisco Meraki Security Included</span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Business Internet</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            This isn&apos;t just a broadband plan — it&apos;s a fully managed connection with enterprise Cisco Meraki security built in. Every plan includes the full security stack, nbn eSLA, and 24/7 Australian support. One monthly price, no surprises.
          </p>
          <div className="mt-6 inline-block bg-primary/5 border border-primary/10 rounded-xl px-6 py-3 text-primary font-semibold">
            Same nbn network as Aussie Broadband — with Cisco Meraki security built in. One managed service. One bill.
          </div>
        </div>

        {/* Security features — above pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-3 text-center">Cisco Meraki Secure Gateway — included in every plan</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Most business internet providers send you a modem and leave security up to you. Every Calystro plan comes with a fully managed Cisco Meraki gateway — enterprise-grade protection baked in from day one, at no extra cost.
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

        {/* Pricing cards */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">Choose your plan</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">No setup fees. No surprises. Every plan includes the full Cisco Meraki security stack, unlimited data, static IPv4, and nbn eSLA.</p>
        </div>
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

        {/* 4G Backup callout */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-12 flex gap-6 items-start">
          <div className="text-4xl flex-shrink-0">📶</div>
          <div>
            <h2 className="text-xl font-bold text-primary mb-2">4G Backup — add resilience for $25/mo</h2>
            <p className="text-gray-600 leading-relaxed">
              If your nbn connection drops, 4G backup automatically keeps your business online — no manual intervention required. For businesses where every minute of downtime costs money, it&apos;s the cheapest insurance you can buy. Available as an add-on on any Calystro internet plan.
            </p>
          </div>
        </div>

        {/* eSLA explainer */}
        <div className="bg-bg-light rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-primary mb-4">Understanding nbn eSLA</h2>
          <p className="text-gray-500 text-sm mb-6">eSLA (Enhanced Service Level Agreement) sets faster fault restoration targets than standard residential or basic business plans. If something goes wrong, a technician is dispatched faster and your fix is prioritised.</p>
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
          <p className="text-blue-200 mb-2">Check availability at your address and get a quote.</p>
          <p className="text-blue-300 text-sm mb-6">No setup fees. No surprises.</p>
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
