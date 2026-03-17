import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work from Anywhere Phone & Internet",
  description:
    "Give your team the tools to work from anywhere. Cloud calling, secure VPN, and managed internet that keeps remote and hybrid teams connected and protected.",
  alternates: {
    canonical: "https://calystro.com/solutions/work-from-anywhere",
  },
  openGraph: {
    title: "Work from Anywhere Phone & Internet | Calystro Australia",
    description:
      "Give your team the tools to work from anywhere. Cloud calling, secure VPN, and managed internet that keeps remote and hybrid teams connected and protected.",
    url: "https://calystro.com/solutions/work-from-anywhere",
  },
};

export default function WorkFromAnywherePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="bg-primary text-white rounded-2xl p-12 mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Professional Services</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Financial Services</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🏠</div>
            <h1 className="text-4xl font-bold">Work from Anywhere</h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Give your team the freedom to work from any location — office, home, or on the road — without compromising on security, reliability, or the customer experience.
          </p>
        </div>

        {/* The challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">The challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Modern professional and financial services firms need to support flexible work arrangements — but they can&apos;t sacrifice security, compliance, or client experience to do it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Legacy phone systems don&apos;t travel well. VPNs are clunky. Consumer internet at home isn&apos;t good enough. And when your team is spread across locations, visibility and control become harder.
            </p>
          </div>
          <div className="bg-bg-light rounded-2xl p-8">
            <h3 className="font-semibold text-primary mb-4">Common pain points</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Desk phones that don&apos;t work from home</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> No visibility of remote workers&apos; calls</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Insecure home internet connections</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Poor video call quality from home</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Difficulty onboarding remote staff quickly</li>
            </ul>
          </div>
        </div>

        {/* The solution */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">How Calystro solves it</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold text-primary mb-2">Cloud Calling</h3>
              <p className="text-gray-500 text-sm mb-4">Cisco Webex gives every team member a business phone number on their laptop, mobile, or desk phone — wherever they are.</p>
              <Link href="/products/business-calling" className="text-accent text-sm font-semibold hover:underline">Business Calling →</Link>
            </div>
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-bold text-primary mb-2">Secure Internet</h3>
              <p className="text-gray-500 text-sm mb-4">Business-grade NBN with Cisco Meraki security at the office, plus Remote VPN for secure access from home.</p>
              <Link href="/products/business-internet" className="text-accent text-sm font-semibold hover:underline">Business Internet →</Link>
            </div>
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-primary mb-2">Seamless Collaboration</h3>
              <p className="text-gray-500 text-sm mb-4">Webex messaging, meetings, and file sharing keeps remote teams connected — with AI summaries and transcripts on Plus plans.</p>
              <Link href="/products/business-calling" className="text-accent text-sm font-semibold hover:underline">See Plus User →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to enable flexible work?</h2>
          <p className="text-blue-200 mb-6">Talk to our team about a Work from Anywhere package for your business.</p>
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
