'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-amber-400 border-b border-amber-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo Link */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-10 w-auto flex items-center">
            <Image
              src="/logos/nimrod-logo.png"
              alt="Nimrod Africa Logo"
              width={160}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-900">
          <Link href="/" className="hover:text-red-700 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-700 transition-colors">
            Products
          </Link>
          <Link href="/services" className="hover:text-red-700 transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-red-700 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-red-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Section: Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-md transition-colors shadow-sm"
          >
            Get Quote
          </Link>

          {/* Hamburger Icon — Visible on Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 hover:text-red-700 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-amber-400 border-b border-amber-500/30 px-4 pt-2 pb-4 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-red-700 transition-colors py-1"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-red-700 transition-colors py-1"
          >
            Products
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-red-700 transition-colors py-1"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-red-700 transition-colors py-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-red-700 transition-colors py-1"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}