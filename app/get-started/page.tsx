import type { Metadata } from "next";
import GetStartedForm from "./form";

export const metadata: Metadata = {
  title: "Get a Quote | Business Internet & Calling | Calystro",
  description: "Ready to upgrade your business connectivity? Get a fast quote for internet, calling or Wi-Fi from Calystro. No setup fees. Australian-owned. No obligation.",
};

export default function GetStartedPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">Get Started with Calystro</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tell us about your business and what you&apos;re looking for. We typically respond within 1 business day — no hard sell, no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <GetStartedForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-primary text-white rounded-2xl p-7">
              <h2 className="font-bold text-lg mb-5">Prefer to talk?</h2>
              <p className="text-blue-200 text-sm mb-5">Our Australian team is ready to help — no hold queues, no overseas call centres.</p>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-300 text-xs font-medium mb-1">PHONE</div>
                  <a href="tel:0272293600" className="font-semibold hover:text-accent transition-colors text-lg">02 7229 3600</a>
                </div>
                <div>
                  <div className="text-blue-300 text-xs font-medium mb-1">SALES</div>
                  <a href="mailto:sales@calystro.com" className="font-semibold hover:text-accent transition-colors">sales@calystro.com</a>
                </div>
                <div>
                  <div className="text-blue-300 text-xs font-medium mb-1">SUPPORT</div>
                  <a href="mailto:support@calystro.com" className="font-semibold hover:text-accent transition-colors">support@calystro.com</a>
                </div>
              </div>
            </div>

            <div className="bg-bg-light rounded-2xl p-7">
              <h2 className="font-bold text-primary text-lg mb-4">What to expect</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-accent font-bold flex-shrink-0">1.</span>
                  We&apos;ll review your enquiry and get back to you within one business day.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold flex-shrink-0">2.</span>
                  A short call to understand your business, requirements, and current setup.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold flex-shrink-0">3.</span>
                  We&apos;ll put together a tailored proposal with clear pricing.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold flex-shrink-0">4.</span>
                  No obligation, no hard sell. You decide if it&apos;s right for you.
                </li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-2xl p-7">
              <h3 className="font-bold text-primary mb-3">ABN</h3>
              <p className="text-gray-500 text-sm">62 630 531 136</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">🇦🇺 Australian Owned</span>
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">Cisco Select Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
