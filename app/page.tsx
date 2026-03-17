import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Internet, Calling & Wi-Fi | Calystro Australia",
  description: "Managed internet with Cisco Meraki security, cloud calling and Wi-Fi for Australian SMBs. No setup fees. 24/7 AU support. Get a quote today.",
};

const faqs = [
  {
    q: "What's the difference between a business NBN plan and a residential one?",
    a: "Business NBN plans include features residential plans don't — like nbn eSLA (Enhanced Service Level Agreement), which means faster fault restoration targets if something goes wrong. Business plans also typically come with dedicated support lines, static IP addresses, and higher priority on the network during peak hours. If your business depends on the internet to operate, a proper business plan protects you. Calystro includes eSLA as standard on all internet plans.",
  },
  {
    q: "What is an nbn eSLA and why does my business need it?",
    a: "eSLA stands for Enhanced Service Level Agreement. It's an agreement between nbn and your provider that sets faster timeframes for fixing faults — typically within 4–12 hours, compared to standard residential restoration targets that can stretch to several days. If your internet goes down, the eSLA means a technician is dispatched faster and the fix is prioritised. For any business where downtime costs money, it's essential. Calystro includes eSLA on every business internet plan.",
  },
  {
    q: "Is the security really included, or is it an add-on?",
    a: "It's genuinely included — not a trial, not a footnote. Every Calystro business internet plan comes with the full Cisco Meraki security stack: enterprise firewall, VPN, and malware protection, managed by us. Most business internet providers send you a modem and leave security up to you. We don't. Your connection is protected from day one, without extra cost or extra complexity.",
  },
  {
    q: "Can we keep our existing phone numbers when switching?",
    a: "Yes. Calystro manages the number porting process as part of your setup. Your existing landline and direct dial numbers transfer across to Webex cloud calling, so there's no disruption to clients or operations. We handle the coordination with your current provider, so you don't have to.",
  },
  {
    q: "What happens if something goes wrong? Who do I call?",
    a: "You call Calystro — one number, any time, 24/7. Our Australian-based support team handles everything, including liaising with nbn, Aussie Broadband, and Cisco on your behalf. You never need to navigate carrier hold queues yourself. If it's a network fault, we're chasing it. If it's a phone system issue, we're on it. One point of contact, end to end.",
  },
  {
    q: "Are there lock-in contracts or setup fees?",
    a: "No setup fees on any Calystro plan. Contract terms vary by product — we'll be upfront about that before you commit. Our business internet plans come with nbn service terms consistent with the industry standard, and we'll explain everything clearly at the quote stage. No hidden fees, no bill shock.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-6">
              <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">🇦🇺 100% Australian Owned</span>
              <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Cisco Authorized Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Business internet that comes with its own{" "}
              <span className="text-accent">security team.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed">
              Full Cisco Meraki firewall, VPN and malware protection — included in every plan. No extras, no IT headaches. Just fast, secure, managed connectivity for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Get a Quote
              </Link>
              <Link href="/all-products" className="border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signal strip */}
      <section className="bg-bg-light py-10 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">🏆 Cisco Certified Partner</div>
              <div className="text-gray-500 text-sm">Enterprise technology, without the enterprise price tag.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">🇦🇺 100% Australian-Owned</div>
              <div className="text-gray-500 text-sm">Built in Australia, run by Australians, supporting Australian businesses.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">📅 30+ Years Telco Experience</div>
              <div className="text-gray-500 text-sm">We&apos;ve seen every network problem. We know how to fix them fast.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">🎧 24/7 Australian Support</div>
              <div className="text-gray-500 text-sm">Real people, based in Australia, available any time you need us.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive positioning */}
      <section className="bg-primary text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold text-blue-100 max-w-3xl mx-auto">
            Same nbn network as Aussie Broadband — with Cisco Meraki security built in. One managed service. One bill.
          </p>
        </div>
      </section>

      {/* Products overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Enterprise-grade technology, priced for Australian SMBs. No setup fees, transparent monthly pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Calling */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Business Calling</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">Cisco Webex-powered calling with call queues, hunt groups, AI meetings, and webinars. From $15/space/mo.</p>
              <div className="text-sm text-gray-400 mb-5">Powered by Cisco Webex</div>
              <Link href="/products/business-calling" className="text-accent font-semibold hover:underline">
                See plans →
              </Link>
            </div>

            {/* Business Internet */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group bg-primary text-white">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Internet</h3>
              <p className="text-blue-200 mb-4 leading-relaxed">NBN with built-in Cisco Meraki security gateway. Intrusion prevention, malware protection, VPN, and more. From $190/mo.</p>
              <div className="text-sm text-blue-300 mb-5">Aussie Broadband + Cisco Meraki</div>
              <Link href="/products/business-internet" className="text-accent font-semibold hover:underline">
                See plans →
              </Link>
            </div>

            {/* Business Wi-Fi */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Business Wi-Fi</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">Enterprise Cisco Meraki Wi-Fi designed, built, and managed for your business. Design, Build, Manage &amp; Fix.</p>
              <div className="text-sm text-gray-400 mb-5">Powered by Cisco Meraki</div>
              <Link href="/products/business-wifi" className="text-accent font-semibold hover:underline">
                Get a quote →
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/all-products" className="text-primary border border-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions overview */}
      <section className="bg-bg-light py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Solutions by Industry</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We understand the unique challenges facing Australian businesses. Our solutions are built around real-world outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/solutions/work-from-anywhere" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 flex gap-5">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">🏠</div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-1">Work from Anywhere</h3>
                <p className="text-gray-500 text-sm">Professional Services · Financial Services</p>
                <p className="text-gray-600 mt-2 text-sm">Enable your team to collaborate and serve clients from any location, with enterprise-grade security and reliability.</p>
              </div>
            </Link>
            <Link href="/solutions/secure-workspace" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 flex gap-5">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">🔒</div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-1">Secure Workspace</h3>
                <p className="text-gray-500 text-sm">Professional Services · Manufacturing · Retail</p>
                <p className="text-gray-600 mt-2 text-sm">Protect your business with layered security — from the internet edge to every device on your network.</p>
              </div>
            </Link>
            <Link href="/solutions/workplace-calling" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 flex gap-5">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">📱</div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-1">Workplace Calling</h3>
                <p className="text-gray-500 text-sm">Healthcare · Financial Services · Hospitality</p>
                <p className="text-gray-600 mt-2 text-sm">Replace your old phone system with a modern cloud-based solution that works wherever your team is.</p>
              </div>
            </Link>
            <Link href="/solutions/small-call-centre" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 flex gap-5">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">🎧</div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-1">Small Call Centre</h3>
                <p className="text-gray-500 text-sm">Financial Services · Manufacturing · Hospitality</p>
                <p className="text-gray-600 mt-2 text-sm">Deliver great customer service with call queues, routing, and real-time management — without the enterprise price tag.</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/all-solutions" className="text-primary border border-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Calystro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Australian businesses choose Calystro</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-primary">Local expertise, global technology</div>
                    <div className="text-gray-500 text-sm mt-1">30+ years of experience deploying enterprise technology for Australian businesses.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-primary">Cisco Select Provider + Select Integrator</div>
                    <div className="text-gray-500 text-sm mt-1">Direct access to Cisco&apos;s latest products, licensing, and support — with Calystro&apos;s expertise on top.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-primary">No setup fees. No surprises.</div>
                    <div className="text-gray-500 text-sm mt-1">Simple, transparent monthly pricing across all products. You know exactly what you&apos;ll pay.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-primary">Aussie Broadband network partner</div>
                    <div className="text-gray-500 text-sm mt-1">Delivering business-grade internet on Australia&apos;s most reliable NBN network, with enhanced eSLA.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-blue-200 mb-8">Talk to our team about the right solution for your business. No obligation, no hard sell.</p>
              <div className="space-y-4">
                <a href="tel:0272293600" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-5 py-3 transition-colors">
                  <span className="text-xl">📞</span>
                  <span className="font-semibold">02 7229 3600</span>
                </a>
                <a href="mailto:sales@calystro.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-5 py-3 transition-colors">
                  <span className="text-xl">✉️</span>
                  <span className="font-semibold">sales@calystro.com</span>
                </a>
                <Link href="/get-started" className="flex items-center justify-center gap-3 bg-accent hover:bg-cyan-400 rounded-xl px-5 py-3 transition-colors font-semibold">
                  Get a Quote Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What our customers say</h2>
            <p className="text-blue-200 text-lg">Australian businesses that made the switch to Calystro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <p className="text-blue-100 leading-relaxed mb-6">&ldquo;We had a terrible experience with our previous provider — our phones only sometimes worked. Since moving to Calystro our phones are always working and we operate as a high-performing inbound sales team, not one responding to voice messages.&rdquo;</p>
              <div>
                <div className="font-bold text-white">Alevo</div>
                <div className="text-blue-300 text-sm">Inbound Sales Team</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <p className="text-blue-100 leading-relaxed mb-6">&ldquo;We were getting ripped off by our previous provider. Now my system works so much better and is more cost effective.&rdquo;</p>
              <div>
                <div className="font-bold text-white">Two Wheel Obsession</div>
                <div className="text-blue-300 text-sm">Retail</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <p className="text-blue-100 leading-relaxed mb-6">&ldquo;We run a complicated network for a large hotel. The Calystro team always answer the phone to give us assistance at any time of day. Excellent service!&rdquo;</p>
              <div>
                <div className="font-bold text-white">The GEM Hotel</div>
                <div className="text-blue-300 text-sm">Hospitality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-light py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Common questions</h2>
            <p className="text-gray-500 text-lg">Everything Australian businesses ask before switching to Calystro.</p>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-bold text-primary mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0272293600" className="bg-primary hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                Call 02 7229 3600
              </a>
              <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
