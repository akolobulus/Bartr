import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LaunchProvider } from '@/components/landing/LaunchProvider';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { SiteFooter } from '@/components/landing/SiteFooter';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bartr: There’s always someone nearby who can.',
  description: 'Describe the job, get matched with trusted people nearby, and get it done.',
};

export const viewport: Viewport = {
  themeColor: '#0a2e65',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <LaunchProvider>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LaunchProvider>
      </body>
    </html>
  );
}
