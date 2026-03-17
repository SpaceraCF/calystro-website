import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Contact Calystro to get started with business calling, internet, or Wi-Fi. No obligation, no hard sell.",
};

export default function GetStartedPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">Get Started with Calystro</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tell us about your business and what you&apos;re looking for. Our team will get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-bg-light rounded-2xl p-8">
              <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>
              <form className="space-y-5" action="mailto:sales@calystro.com" method="GET">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="first-name">First name</label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="last-name">Last name</label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">Company name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                    placeholder="Acme Pty Ltd"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="jane@example.com.au"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="02 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="interest">I&apos;m interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    <option value="">Select a product or solution…</option>
                    <option value="calling">Business Calling</option>
                    <option value="internet">Business Internet</option>
                    <option value="wifi">Business Wi-Fi</option>
                    <option value="work-from-anywhere">Work from Anywhere</option>
                    <option value="secure-workspace">Secure Workspace</option>
                    <option value="workplace-calling">Workplace Calling</option>
                    <option value="small-call-centre">Small Call Centre</option>
                    <option value="multiple">Multiple products</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="team-size">Team size</label>
                  <select
                    id="team-size"
                    name="team-size"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    <option value="">Select team size…</option>
                    <option value="1-10">1–10 people</option>
                    <option value="11-25">11–25 people</option>
                    <option value="26-50">26–50 people</option>
                    <option value="51-100">51–100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Tell us more (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white resize-none"
                    placeholder="Current setup, challenges, timeline, location…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form you agree to be contacted by Calystro about your enquiry. We don&apos;t spam.
                </p>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-primary text-white rounded-2xl p-7">
              <h2 className="font-bold text-lg mb-5">Contact us directly</h2>
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
                <div className="flex gap-2">
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">🇦🇺 Australian Owned</span>
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">Cisco Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
