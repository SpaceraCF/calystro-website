import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Business Internet & Network | Cisco Meraki",
  description:
    "Protect your business with enterprise-grade Cisco Meraki firewall, VPN, and malware protection — included in every Calystro internet plan. No extras needed.",
  alternates: {
    canonical: "https://calystro.com/solutions/secure-workspace",
  },
  openGraph: {
    title: "Secure Business Internet & Network | Cisco Meraki | Calystro",
    description:
      "Protect your business with enterprise-grade Cisco Meraki firewall, VPN, and malware protection — included in every Calystro internet plan. No extras needed.",
    url: "https://calystro.com/solutions/secure-workspace",
  },
};

export default function SecureWorkspacePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-2xl p-12 mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Professional Services</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Manufacturing</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Retail</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🔒</div>
            <h1 className="text-4xl font-bold">Secure Workspace</h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Protect your business with layered security — from the internet edge to every device and user on your network. Reduce risk, meet compliance requirements, and give your team a safe place to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">The cyber threat is real</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Australian businesses are increasingly targeted by ransomware, phishing, and malware attacks. The consequences — data breach, downtime, reputational damage — can be severe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Many businesses believe their standard internet connection or basic router offers sufficient protection. It doesn&apos;t. Without active threat detection and prevention, your network is exposed.
            </p>
          </div>
          <div className="bg-bg-light rounded-2xl p-8">
            <h3 className="font-semibold text-primary mb-4">What Calystro protects against</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">🛡️</span> Network intrusion attempts</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">🦠</span> Malware and ransomware</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">🌍</span> Traffic from high-risk countries</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">🔍</span> Inappropriate or dangerous web content</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">📡</span> Rogue Wi-Fi access points</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">The Secure Workspace stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-bold text-primary mb-2">Secure Internet Gateway</h3>
              <p className="text-gray-500 text-sm mb-4">Cisco Meraki gateway with intrusion prevention, malware protection, content filtering, GeoIP blocking, and layer 7 firewall — all included with Business Internet.</p>
              <Link href="/products/business-internet" className="text-accent text-sm font-semibold hover:underline">Business Internet →</Link>
            </div>
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📡</div>
              <h3 className="font-bold text-primary mb-2">Secure Wireless</h3>
              <p className="text-gray-500 text-sm mb-4">Cisco Meraki Wi-Fi with built-in security policies, client isolation, rogue AP detection, and WPA3 — keeping your wireless network clean.</p>
              <Link href="/products/business-wifi" className="text-accent text-sm font-semibold hover:underline">Business Wi-Fi →</Link>
            </div>
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="font-bold text-primary mb-2">Remote Access VPN</h3>
              <p className="text-gray-500 text-sm mb-4">Secure remote access via Cisco Meraki Client VPN — your remote staff connect through an encrypted tunnel, not the open internet.</p>
              <Link href="/products/business-internet" className="text-accent text-sm font-semibold hover:underline">See features →</Link>
            </div>
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-bold text-primary mb-2">Site-to-Site Connectivity</h3>
              <p className="text-gray-500 text-sm mb-4">Securely connect multiple offices or branches over the internet with Meraki Auto VPN — fast, reliable, and managed from a single dashboard.</p>
              <Link href="/products/business-internet" className="text-accent text-sm font-semibold hover:underline">See features →</Link>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Secure your business today</h2>
          <p className="text-blue-200 mb-6">Let&apos;s talk about your security posture and how Calystro can help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
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
