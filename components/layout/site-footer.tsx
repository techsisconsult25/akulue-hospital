'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Make a Donation', href: '/make-a-donation' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#082D0C] text-white">
      <div className="container-width grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Hospital Information */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl">
              <Image
                src="/logo/AMH-logo.png"
                alt="Akulue Memorial Hospital Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-lg font-extrabold">AKULUE</h2>
              <p className="text-[10px] tracking-[2px] text-slate-300">
                MEMORIAL HOSPITAL
              </p>
            </div>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Your health is our top priority. We are committed to providing
            compassionate healthcare and quality medical services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                >
                  {link.name}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="mb-5 text-lg font-bold">Your Health Matters</h3>

          <p className="mb-6 text-sm leading-7 text-slate-300">
            Discover our healthcare services and learn how our team can support
            your wellbeing.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
          >
            Get in Touch
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width py-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Akulue Memorial Hospital. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
