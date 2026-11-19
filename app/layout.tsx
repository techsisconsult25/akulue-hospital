import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Akulue Memorial Hospital | Your Health Is Our Top Priority',
    template: '%s | Akulue Memorial Hospital',
  },
  description:
    'Akulue Memorial Hospital provides compassionate healthcare through skilled professionals, modern facilities, and quality medical services.',
  icons: {
    icon: '/images/logo/AMH-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
