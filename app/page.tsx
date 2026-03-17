import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calystro – Cloud Technology for Australian Business",
  description: "Calystro helps Australian businesses deliver excellent customer outcomes through secure, reliable cloud-based technology.",
};

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
              Cloud technology built for{" "}
              <span className="text-accent">Australian business</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed">
              Calystro helps Australian businesses deliver excellent customer outcomes through secure, reliable cloud-based technology. Business calling, internet and Wi-Fi — delivered as a service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Get Started
              </Link>
              <Link href="/all-products" className="border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-bg-light py-10 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-gray-500 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-gray-500 text-sm mt-1">Australian Owned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Cisco</div>
              <div className="text-gray-500 text-sm mt-1">Authorized Partner</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">ABB</div>
              <div className="text-gray-500 text-sm mt-1">Network Partner</div>
            </div>
          </div>
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
              <p className="text-blue-200 mb-4 leading-relaxed">NBN with built-in Cisco Meraki security gateway. Intrusion prevention, malware protection, unlimited data. From $190/mo.</p>
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
              <p className="text-gray-500 mb-4 leading-relaxed">Enterprise Cisco Meraki Wi-Fi designed, built, and managed for your business. Design, Build, Manage & Fix.</p>
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
                    <div className="font-semibold text-primary">Cisco Authorized Partner</div>
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
    </>
  );
}
