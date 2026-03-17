import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Wi-Fi – Cisco Meraki",
  description: "Enterprise-grade Cisco Meraki Wi-Fi designed, built, managed, and maintained by Calystro for Australian businesses.",
};

const services = [
  {
    icon: "📐",
    name: "Design",
    desc: "We start with a professional site survey and wireless design — mapping your space, identifying coverage requirements, and planning for performance, capacity, and security.",
    steps: ["Site survey & floor plan review", "Coverage & capacity planning", "Hardware specification", "Network architecture design"],
  },
  {
    icon: "🔨",
    name: "Build",
    desc: "Our certified engineers install and configure your Cisco Meraki Wi-Fi network to spec — cleanly, professionally, and with minimal disruption to your business.",
    steps: ["Professional hardware installation", "Cisco Meraki configuration", "SSID & security setup", "Testing & sign-off"],
  },
  {
    icon: "⚙️",
    name: "Manage",
    desc: "Ongoing cloud-based management keeps your network performing at its best. We monitor, update, and optimise your Wi-Fi so you don't have to think about it.",
    steps: ["Proactive monitoring & alerts", "Firmware & security updates", "Performance optimisation", "Usage reporting"],
  },
  {
    icon: "🔧",
    name: "Fix",
    desc: "When issues arise, our team responds fast. Whether it's a hardware fault, connectivity issue, or configuration problem — we get you back online.",
    steps: ["Remote diagnosis & resolution", "On-site support when needed", "Hardware replacement", "Root cause analysis"],
  },
];

export default function BusinessWifiPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-accent/10 text-accent border border-accent/20 text-sm px-3 py-1 rounded-full mb-4">Powered by Cisco Meraki</div>
          <h1 className="text-4xl font-bold text-primary mb-4">Business Wi-Fi</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enterprise-grade wireless networking, designed and delivered by Calystro. From initial design to ongoing management, we handle your Wi-Fi end-to-end.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((s) => (
            <div key={s.name} className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary">{s.name}</h2>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.steps.map((step) => (
                  <li key={step} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-accent font-bold flex-shrink-0">→</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Cisco Meraki */}
        <div className="bg-bg-light rounded-2xl p-10 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Why Cisco Meraki?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-semibold text-primary mb-2">Cloud-Managed</h3>
              <p className="text-gray-500 text-sm">Every Meraki access point is managed through a single cloud dashboard. Remote visibility, remote control, minimal on-site maintenance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-primary mb-2">Intelligent Performance</h3>
              <p className="text-gray-500 text-sm">Meraki uses AI-driven radio management to automatically optimise channels and power for the best coverage and performance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold text-primary mb-2">Built-in Security</h3>
              <p className="text-gray-500 text-sm">Rogue AP detection, client isolation, WPA3, and integrated security policies — keeping your wireless network safe by default.</p>
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Who uses Calystro Wi-Fi?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏥", name: "Healthcare", desc: "Clinics, hospitals, and allied health" },
              { icon: "🏢", name: "Offices", desc: "Professional services, co-working" },
              { icon: "🏭", name: "Manufacturing", desc: "Warehouses and factory floors" },
              { icon: "🏨", name: "Hospitality", desc: "Hotels, restaurants, venues" },
            ].map((i) => (
              <div key={i.name} className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{i.icon}</div>
                <div className="font-semibold text-primary text-sm">{i.name}</div>
                <div className="text-gray-400 text-xs mt-1">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">Get a Wi-Fi quote</h2>
              <p className="text-blue-200 mb-4">
                Every Wi-Fi project is different. Tell us about your space and requirements, and we&apos;ll put together a tailored proposal.
              </p>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>✓ No obligation</li>
                <li>✓ Fast turnaround</li>
                <li>✓ Detailed scope of work</li>
              </ul>
            </div>
            <div className="space-y-3">
              <Link href="/get-started" className="flex items-center justify-center gap-2 bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request a Quote
              </Link>
              <a href="tel:0272293600" className="flex items-center justify-center gap-2 border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Call 02 7229 3600
              </a>
              <a href="mailto:sales@calystro.com" className="flex items-center justify-center gap-2 border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                sales@calystro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
