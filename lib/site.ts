export const site = {
  name: 'Akulue Memorial Hospital',
  tagline: 'Your Health is Our Utmost Priority',
  motto: 'Dedicated to Quality Patient Care',
  url: 'https://akuluehospital.org.ng',
  address: ['16/18 Akulue Road,', 'P.O. Box 1000, Nsukka, Enugu State'],
  email: 'akuluehospital@gmail.com',
  phone: '+234 813 797 0942',
  phoneHref: 'tel:+2348137970942',
};

export type NavLink = { label: string; href: string; cta?: boolean };

// Same slugs as the WordPress site, so existing links and SEO keep working.
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Make a Donation', href: '/make-a-donation', cta: true },
];
