import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Internet, Calling & Wi-Fi Products | Calystro",
  description:
    "Calystro's full range of managed cloud technology products for Australian businesses — business internet with security, cloud calling, and enterprise Wi-Fi.",
  alternates: {
    canonical: "https://calystro.com/all-products",
  },
  openGraph: {
    title: "Business Internet, Calling & Wi-Fi Products | Calystro",
    description:
      "Calystro's full range of managed cloud technology products for Australian businesses — business internet with security, cloud calling, and enterprise Wi-Fi.",
    url: "https://calystro.com/all-products",
  },
};

export default function AllProductsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enterprise cloud technology delivered as a service — with transparent pricing, no setup fees, and Australian support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Calling */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-primary text-white p-8">
              <span className="text-4xl">📞</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Business Calling</h2>
              <p className="text-blue-200">Cisco Webex cloud calling with AI features.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 text-sm mb-6">
                <li className="flex gap-2"><span className="text-accent">✓</span> Webex app on any device</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Call queues, hunt groups, menus</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> AI meetings up to 200 people</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> AI summaries &amp; transcripts</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Webinars to 10,000 attendees</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> No setup fees</li>
              </ul>
              <div className="text-sm text-gray-400 mb-4">From <span className="text-2xl font-bold text-primary">$15</span>/space/mo</div>
              <Link href="/products/business-calling" className="block bg-primary hover:bg-blue-900 text-white text-center py-2.5 rounded-lg font-semibold transition-colors">
                See Pricing
              </Link>
            </div>
          </div>

          {/* Internet */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-accent text-white p-8">
              <span className="text-4xl">🌐</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Business Internet</h2>
              <p className="text-cyan-100">Secure NBN with Cisco Meraki gateway built-in.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 text-sm mb-6">
                <li className="flex gap-2"><span className="text-accent">✓</span> Unlimited data, static IPv4</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Intrusion prevention &amp; malware protection</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Content filtering &amp; GeoIP blocking</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Remote &amp; site-to-site VPN</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> nbn eSLA included</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Optional 4G backup</li>
              </ul>
              <div className="text-sm text-gray-400 mb-4">From <span className="text-2xl font-bold text-primary">$190</span>/mo</div>
              <Link href="/products/business-internet" className="block bg-accent hover:bg-cyan-600 text-white text-center py-2.5 rounded-lg font-semibold transition-colors">
                See Pricing
              </Link>
            </div>
          </div>

          {/* Wi-Fi */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-blue-700 text-white p-8">
              <span className="text-4xl">📡</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Business Wi-Fi</h2>
              <p className="text-blue-200">Cisco Meraki Wi-Fi designed and managed for you.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 text-sm mb-6">
                <li className="flex gap-2"><span className="text-accent">✓</span> Professional site survey &amp; design</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Expert installation &amp; configuration</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Ongoing cloud management</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Rapid fault resolution</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Enterprise Cisco Meraki hardware</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Project-based pricing</li>
              </ul>
              <div className="text-sm text-gray-400 mb-4"><span className="text-lg font-bold text-primary">Get a quote</span> — project-based</div>
              <Link href="/products/business-wifi" className="block bg-blue-700 hover:bg-blue-800 text-white text-center py-2.5 rounded-lg font-semibold transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-bg-light rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Not sure which product is right for you?</h2>
          <p className="text-gray-500 mb-6">Our team will help you find the right fit for your business, budget, and goals.</p>
          <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}
