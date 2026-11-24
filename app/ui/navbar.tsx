'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BodyguardLogo } from '@/app/ui/logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
      <div className="section-container flex items-center justify-between h-20 gap-4">
        {/* Logo - protected against shrinking and text collision */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0 min-w-0">
          <BodyguardLogo className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
          <div className="whitespace-nowrap flex-shrink-0">
            <span className="text-base sm:text-xl font-extrabold text-white tracking-tight">MYSTRO</span>
            <span className="text-base sm:text-xl font-light text-cyan-400 ml-1 sm:ml-1.5">SECURITY</span>
          </div>
        </Link>

        {/* Desktop nav - visible on large screens (1024px+) to prevent mid-screen overlap */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link whitespace-nowrap">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
            Get a Quote
          </Link>
        </div>

        {/* Mobile / Tablet toggle button */}
        <button
          className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / Tablet dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-2xl border-t border-gray-800/70 px-6 py-4 space-y-1 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors font-medium text-base"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary w-full text-center py-3 block"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
