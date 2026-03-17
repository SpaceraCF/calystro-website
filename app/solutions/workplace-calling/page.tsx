import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Phone System for Australian Business",
  description:
    "Replace your ageing office phone system with Cisco Webex cloud calling. Crystal-clear calls, auto-attendant, and flexible features from $15/user/month.",
  alternates: {
    canonical: "https://calystro.com/solutions/workplace-calling",
  },
  openGraph: {
    title: "Office Phone System for Australian Business | Calystro",
    description:
      "Replace your ageing office phone system with Cisco Webex cloud calling. Crystal-clear calls, auto-attendant, and flexible features from $15/user/month.",
    url: "https://calystro.com/solutions/workplace-calling",
  },
};

export default function WorkplaceCallingPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-2xl p-12 mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Healthcare</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Financial Services</span>
            <span className="bg-accent/20 text-accent border border-accent/30 text-sm px-3 py-1 rounded-full">Hospitality</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">📱</div>
            <h1 className="text-4xl font-bold">Workplace Calling</h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Replace your legacy PBX or on-premise phone system with a modern cloud calling platform. Lower cost, more features, and it works wherever your team is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Time to replace your phone system?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Old PBX systems are expensive to maintain, hard to scale, and increasingly unreliable. They tie you to physical handsets and don&apos;t support the flexible, mobile workplaces that businesses need today.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cloud calling via Cisco Webex gives you all the features of an enterprise phone system — call queues, auto-attendants, hunt groups — without the hardware headache.
            </p>
          </div>
          <div className="bg-bg-light rounded-2xl p-8">
            <h3 className="font-semibold text-primary mb-4">Common pain points</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Expensive hardware maintenance</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Can&apos;t add lines easily or quickly</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> ISDN/PSTN switch-off looming</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> No mobile app for staff on the move</li>
              <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span> Poor call handling for customer calls</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "📲", title: "Works on Any Device", desc: "Desktop app, mobile app, or desk phone. Your number goes with your team — not the desk." },
              { icon: "🗃️", title: "Call Queues", desc: "Incoming calls queue and route to available staff. Callers hear hold music, not a busy tone." },
              { icon: "🔀", title: "Hunt Groups", desc: "Ring multiple phones simultaneously or in sequence until someone answers." },
              { icon: "🤖", title: "Auto Attendant", desc: "Professional greetings and call menus route customers to the right team without a receptionist." },
              { icon: "💬", title: "Instant Messaging", desc: "Webex messaging for team chat, file sharing, and quick updates — all in one app." },
              { icon: "🎥", title: "Video Meetings", desc: "Built-in video meetings, screen sharing, and AI-powered features on Plus plans." },
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
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-primary mb-2">Healthcare</h3>
              <p className="text-gray-500 text-sm">Clinics use call queues to manage patient bookings. Staff use the Webex app on their mobile while on the floor or working from home.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-primary mb-2">Financial Services</h3>
              <p className="text-gray-500 text-sm">Accounting and financial advisory firms use hunt groups and call recording to ensure no client call is ever missed.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏨</div>
              <h3 className="font-semibold text-primary mb-2">Hospitality</h3>
              <p className="text-gray-500 text-sm">Hotels and restaurants use auto attendants to route calls to front desk, reservations, or management — professionally, every time.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to modernise your phone system?</h2>
          <p className="text-blue-200 mb-6">We&apos;ll assess your current setup and design a calling solution that fits your team and budget.</p>
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
