import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const exploreLinks: FooterLink[] = [
  { label: 'How it works', href: '/#how' },
  { label: 'Our story', href: '/#story' },
  { label: 'FAQ', href: '/#faq' },
];

const companyLinks: FooterLink[] = [
  { label: 'Team', href: '/team' },
  { label: 'Customer web app', href: 'https://bartr-web-seven.vercel.app/', external: true },
  { label: 'Vendor portal prototype', href: 'https://github.com/akolobulus/Bartr-Vendors-App', external: true },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="footer-col">
      <p className="footer-head">{title}</p>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {link.label}
          {link.external ? <ArrowUpRight size={14} aria-hidden="true" /> : null}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-intro">
        <Image src="/logo.png" alt="Bartr" width={500} height={500} className="brand-logo" />
        <p className="footer-tagline">...Let’s help you find them.</p>
      </div>

      <nav className="container footer-grid" aria-label="Footer">
        <FooterColumn title="Explore" links={exploreLinks} />
        <FooterColumn title="Company" links={companyLinks} />
      </nav>

      <div className="container">
        <p className="footer-bottom">© 2026 Bartr. All rights reserved.</p>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        Bartr
      </div>
    </footer>
  );
}
