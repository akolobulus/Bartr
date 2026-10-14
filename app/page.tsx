import { CtaBand } from '@/components/landing/CtaBand';
import { Faq } from '@/components/landing/Faq';
import { FeatureBento } from '@/components/landing/FeatureBento';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Problem } from '@/components/landing/Problem';
import { Ticker } from '@/components/landing/Ticker';
import { TwoSided } from '@/components/landing/TwoSided';

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Ticker />
      <Problem />
      <HowItWorks />
      <TwoSided />
      <FeatureBento />
      <Faq />
      <CtaBand />
    </main>
  );
}
