import Image from 'next/image';
import { LaunchButton } from './LaunchButton';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-nav">
        <a href="/" className="brand" aria-label="Bartr home">
          <Image src="/logo.png" alt="Bartr" width={500} height={500} className="brand-logo" priority />
        </a>
        <nav className="site-links" aria-label="Primary">
          <a href="/#how">How it works</a>
          <a href="/#story">Our story</a>
          <a href="/#faq">FAQ</a>
          <a href="/team">Team</a>
        </nav>
        <LaunchButton size="sm">Launch web app</LaunchButton>
      </div>
    </header>
  );
}
