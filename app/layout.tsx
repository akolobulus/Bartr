import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Bartr: There's always someone nearby who can.",
  description: 'Find trusted people nearby who can get the job done.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}