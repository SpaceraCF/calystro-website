import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-bold text-2xl mb-3">
              <span className="text-accent">Cal</span>ystro
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Helping Australian businesses deliver excellent customer outcomes through secure, reliable cloud-based technology.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="bg-blue-800 text-xs px-2 py-1 rounded">🇦🇺 Australian Owned</span>
              <span className="bg-blue-800 text-xs px-2 py-1 rounded">Cisco Partner</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-accent mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/solutions/work-from-anywhere" className="hover:text-white transition-colors">Work from Anywhere</Link></li>
              <li><Link href="/solutions/secure-workspace" className="hover:text-white transition-colors">Secure Workspace</Link></li>
              <li><Link href="/solutions/workplace-calling" className="hover:text-white transition-colors">Workplace Calling</Link></li>
              <li><Link href="/solutions/small-call-centre" className="hover:text-white transition-colors">Small Call Centre</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-accent mb-3">Products</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/products/business-calling" className="hover:text-white transition-colors">Business Calling</Link></li>
              <li><Link href="/products/business-internet" className="hover:text-white transition-colors">Business Internet</Link></li>
              <li><Link href="/products/business-wifi" className="hover:text-white transition-colors">Business Wi-Fi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-accent mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="tel:0272293600" className="hover:text-white transition-colors">02 7229 3600</a>
              </li>
              <li>
                <a href="mailto:sales@calystro.com" className="hover:text-white transition-colors">sales@calystro.com</a>
              </li>
              <li>
                <a href="mailto:support@calystro.com" className="hover:text-white transition-colors">support@calystro.com</a>
              </li>
              <li className="pt-1">
                <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-block">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300 gap-2">
          <p>© {new Date().getFullYear()} Calystro Pty Ltd. All rights reserved. ABN 62 630 531 136</p>
          <p>calystro.com</p>
        </div>
      </div>
    </footer>
  );
}
