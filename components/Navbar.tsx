"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-accent">Cal</span>
            <span>ystro</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="hover:text-accent transition-colors font-medium py-2">Solutions ▾</button>
              <div className="absolute top-full left-0 bg-white text-primary shadow-xl rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/solutions/work-from-anywhere" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Work from Anywhere</Link>
                <Link href="/solutions/secure-workspace" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Secure Workspace</Link>
                <Link href="/solutions/workplace-calling" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Workplace Calling</Link>
                <Link href="/solutions/small-call-centre" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Small Call Centre</Link>
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link href="/all-solutions" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm font-medium">View All Solutions →</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-accent transition-colors font-medium py-2">Products ▾</button>
              <div className="absolute top-full left-0 bg-white text-primary shadow-xl rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/products/business-calling" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Business Calling</Link>
                <Link href="/products/business-internet" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Business Internet</Link>
                <Link href="/products/business-wifi" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm">Business Wi-Fi</Link>
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link href="/all-products" className="block px-4 py-2 hover:bg-bg-light hover:text-accent text-sm font-medium">View All Products →</Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="hover:text-accent transition-colors font-medium">About</Link>
            <Link href="/get-started" className="bg-accent hover:bg-cyan-400 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-blue-900 px-4 py-4 space-y-3">
          <div className="font-semibold text-accent mb-1">Solutions</div>
          <Link href="/solutions/work-from-anywhere" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Work from Anywhere</Link>
          <Link href="/solutions/secure-workspace" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Secure Workspace</Link>
          <Link href="/solutions/workplace-calling" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Workplace Calling</Link>
          <Link href="/solutions/small-call-centre" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Small Call Centre</Link>
          <div className="font-semibold text-accent mt-3 mb-1">Products</div>
          <Link href="/products/business-calling" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Business Calling</Link>
          <Link href="/products/business-internet" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Business Internet</Link>
          <Link href="/products/business-wifi" className="block pl-3 py-1 hover:text-accent" onClick={() => setMenuOpen(false)}>Business Wi-Fi</Link>
          <Link href="/about" className="block py-1 hover:text-accent font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/get-started" className="block bg-accent text-white text-center py-2 rounded-lg font-semibold mt-2" onClick={() => setMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
