import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Calystro",
  description: "100% Australian owned, Cisco Authorized Partner with 30+ years experience. Learn about Calystro and what makes us different.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Calystro</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Calystro is a 100% Australian-owned technology company helping businesses deliver excellent customer outcomes through secure, reliable cloud technology.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-primary text-white rounded-2xl p-10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">30+</div>
              <div className="text-blue-200 mt-1">Years experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-blue-200 mt-1">Australian owned</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">Cisco</div>
              <div className="text-blue-200 mt-1">Authorized Partner</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">ABB</div>
              <div className="text-blue-200 mt-1">Network Partner</div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-5">Our story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With over 30 years of experience delivering technology solutions to Australian businesses, Calystro was founded on a simple belief: businesses shouldn&apos;t have to choose between great technology and great value.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We&apos;ve seen the market change dramatically — from on-premise PBX systems and dedicated internet circuits to the cloud-first, software-defined world we live in today. We&apos;ve moved with it, and we&apos;ve brought our clients with us.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Calystro delivers business calling, internet, and Wi-Fi as managed services — combining the best of Cisco&apos;s technology with our local expertise and support.
            </p>
          </div>
          <div className="space-y-5">
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-2">🇦🇺 Australian owned &amp; operated</h3>
              <p className="text-gray-500 text-sm">Calystro is proudly 100% Australian owned. Our team is here, our support is here, and we understand the unique needs of Australian businesses.</p>
            </div>
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-2">🤝 Cisco Authorized Partner</h3>
              <p className="text-gray-500 text-sm">As a Cisco Authorized Partner, we have direct access to Cisco&apos;s full product range, certified training, and technical support — ensuring you get the real thing, backed properly.</p>
            </div>
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-2">🌐 Aussie Broadband Network Partner</h3>
              <p className="text-gray-500 text-sm">We deliver business internet on Aussie Broadband&apos;s network — known for its performance, reliability, and Australian-based support team.</p>
            </div>
          </div>
        </div>

        {/* Calystro Labs */}
        <div className="bg-bg-light rounded-2xl p-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-4xl mb-4">🧪</div>
              <h2 className="text-2xl font-bold text-primary mb-4">Calystro Labs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Calystro Labs is our internal innovation team — exploring how emerging technologies like AI can help small and mid-size businesses operate more effectively.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From AI-powered call centre tools to workflow automation, Calystro Labs tests, validates, and productises the innovations that will define how Australian businesses work in the next decade.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-primary mb-1">AI-enhanced calling</h3>
                <p className="text-gray-500 text-sm">Exploring Webex AI features — meeting summaries, transcription, and intelligent call routing.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-primary mb-1">Workflow automation</h3>
                <p className="text-gray-500 text-sm">Connecting communications platforms with business tools to automate repetitive tasks.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-primary mb-1">Security intelligence</h3>
                <p className="text-gray-500 text-sm">Using network data and AI to proactively identify and respond to security threats before they become incidents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cisco Partnership */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our technology partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-bold text-primary mb-2">Cisco Systems</h3>
              <p className="text-gray-500 text-sm">Authorized Partner for Webex, Meraki, and Cisco networking. Certified engineers, direct licensing, and access to Cisco&apos;s full support resources.</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-bold text-primary mb-2">Aussie Broadband</h3>
              <p className="text-gray-500 text-sm">Network partner delivering business-grade NBN services with enhanced eSLA — on a network built for performance and reliability.</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-primary mb-2">Cisco Meraki</h3>
              <p className="text-gray-500 text-sm">Cloud-managed security, networking, and Wi-Fi. Certified in Meraki deployment and management for Australian businesses.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to work with us?</h2>
          <p className="text-blue-200 mb-6">Let&apos;s talk about how Calystro can help your business.</p>
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
