'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, HeartPulse, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-lg">
      <div className="container-width flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/AMH-logo.png"
            alt="Akulue Memorial Hospital Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div>
            <p className="text-lg font-extrabold leading-tight text-primary">
              AKULUE
            </p>
            <p className="text-[10px] font-semibold tracking-[2px] text-slate-500">
              MEMORIAL HOSPITAL
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-secondary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Donation Button */}
        <Link
          href="/make-a-donation"
          className="hidden items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 md:flex"
        >
          Make a Donation
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-primary md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-6 md:hidden">
          <nav className="container-width flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-primary"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/make-a-donation"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-secondary px-5 py-3 text-center font-bold text-white"
            >
              Make a Donation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
