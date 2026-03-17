import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Call Centre Solution Australia",
  description:
    "Affordable, cloud-based call centre for small Australian businesses. Queue management, reporting, and Cisco-powered reliability. No big-business price tag.",
  alternates: {
    canonical: "https://calystro.com/solutions/small-call-centre",
  },
  openGraph: {
    title: "Small Call Centre Solution Australia | Calystro",
    description:
      "Affordable, cloud-based call centre for small Australian businesses. Queue management, reporting, and Cisco-powered reliability. No big-business price tag.",
    url: "https://calystro.com/solutions/small-call-centre",
  },
};

export default function SmallCallCentrePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-2xl p-12 mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Financial Services</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Manufacturing</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Hospitality</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎧</div>
            <h1 className="text-4xl font-bold">Small Call Centre</h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Deliver great customer service with intelligent call routing, call queues, and management tools — without the cost and complexity of a traditional call centre platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Your customers deserve better</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For many small and mid-size businesses, handling inbound customer calls is still a frustrating experience — for staff and customers alike. Calls are missed. Queues are unmanaged. There&apos;s no visibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Calystro&apos;s Small Call Centre solution uses Cisco Webex to give you professional call handling — queues, routing, hold music, real-time management — at a fraction of the cost of dedicated contact centre software.
            </p>
          </div>
          <div className="bg-bg-light rounded-2xl p-8">
            <h3 className="font-semibold text-primary mb-4">Typical results</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Fewer missed customer calls</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> More professional customer experience</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Better visibility of call volumes and wait times</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Staff can handle calls from any location</li>
              <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Easy to scale up as the team grows</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">What&apos;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📋", title: "Call Queues", desc: "Route inbound calls to the right team. Callers wait in queue with hold music rather than hitting voicemail." },
              { icon: "🔀", title: "Hunt Groups", desc: "Ring your available agents simultaneously or in sequence — ensuring calls are always answered." },
              { icon: "🤖", title: "Auto Attendant", desc: "A professional greeting and menu system routes callers to the right team without needing a receptionist." },
              { icon: "📊", title: "Real-Time Visibility", desc: "Supervisors can see queue status, wait times, and agent availability in real time." },
              { icon: "📲", title: "Any Device", desc: "Agents can take calls on a desk phone, desktop app, or mobile — wherever they&apos;re working." },
              { icon: "📈", title: "Reporting", desc: "Call history, volumes, and duration reporting to understand your customer calling patterns." },
            ].map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-bg-light rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-primary mb-6 text-center">Industry use cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-primary mb-2">Financial Services</h3>
              <p className="text-gray-500 text-sm">Mortgage brokers, accountants, and financial advisors use call queues to handle client calls professionally, with overflow rules during busy periods.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏭</div>
              <h3 className="font-semibold text-primary mb-2">Manufacturing</h3>
              <p className="text-gray-500 text-sm">Sales and customer service teams at manufacturers use hunt groups to ensure orders, queries, and complaints are handled quickly.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏨</div>
              <h3 className="font-semibold text-primary mb-2">Hospitality</h3>
              <p className="text-gray-500 text-sm">Hotels and venues use auto attendants and queues to manage reservations, room service, and front desk calls across multiple locations.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Give your customers a better experience</h2>
          <p className="text-blue-200 mb-6">Let us design a call centre solution that fits your team and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products/business-calling" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              See Calling Plans
            </Link>
            <Link href="/get-started" className="border border-white hover:border-accent hover:text-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
