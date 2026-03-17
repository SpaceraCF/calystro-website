import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Technology Solutions by Industry | Calystro",
  description:
    "Industry-focused cloud technology solutions for Australian businesses — work from anywhere, secure workspace, workplace calling, and small call centre.",
  alternates: {
    canonical: "https://calystro.com/all-solutions",
  },
  openGraph: {
    title: "Business Technology Solutions by Industry | Calystro",
    description:
      "Industry-focused cloud technology solutions for Australian businesses — work from anywhere, secure workspace, workplace calling, and small call centre.",
    url: "https://calystro.com/all-solutions",
  },
};

const solutions = [
  {
    slug: "work-from-anywhere",
    icon: "🏠",
    name: "Work from Anywhere",
    industries: ["Professional Services", "Financial Services"],
    desc: "Enable your team to collaborate and serve clients from any location — office, home, or on the road — with enterprise-grade security and reliability.",
    products: ["Business Calling", "Business Internet", "Business Wi-Fi"],
  },
  {
    slug: "secure-workspace",
    icon: "🔒",
    name: "Secure Workspace",
    industries: ["Professional Services", "Manufacturing", "Retail"],
    desc: "Protect your business with layered security — from the internet edge to every device and user on your network. Meet compliance, reduce risk.",
    products: ["Business Internet", "Business Wi-Fi"],
  },
  {
    slug: "workplace-calling",
    icon: "📱",
    name: "Workplace Calling",
    industries: ["Healthcare", "Financial Services", "Hospitality"],
    desc: "Replace your legacy phone system with a modern cloud calling platform that grows with your team and works from any location.",
    products: ["Business Calling"],
  },
  {
    slug: "small-call-centre",
    icon: "🎧",
    name: "Small Call Centre",
    industries: ["Financial Services", "Manufacturing", "Hospitality"],
    desc: "Handle customer calls professionally with call queues, routing rules, hold music, and real-time queue management — without a big enterprise budget.",
    products: ["Business Calling"],
  },
];

export default function AllSolutionsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">Solutions</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We understand the specific challenges facing Australian businesses. Our solutions are built around real-world outcomes — not just technology features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s) => (
            <div key={s.slug} className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary mb-1">{s.name}</h2>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {s.industries.map((ind) => (
                      <span key={ind} className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">{ind}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.products.map((p) => (
                      <span key={p} className="bg-bg-light text-gray-600 text-xs px-2 py-1 rounded-lg border border-gray-100">{p}</span>
                    ))}
                  </div>
                  <Link href={`/solutions/${s.slug}`} className="text-accent font-semibold text-sm hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-primary rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
          <p className="text-blue-200 mb-6">Tell us about your business and we&apos;ll recommend the right solution.</p>
          <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}
