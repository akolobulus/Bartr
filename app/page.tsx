import { readFileSync } from 'node:fs';
import path from 'node:path';
import LandingInteractions from './landing-interactions';
import PhoneMockupBasic from '@/components/ui/phone-mockups-1';

const source = readFileSync(path.join(process.cwd(), 'bartr-landing.html'), 'utf8');
const styles = source.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? '';
const markup = (source.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? '').replace(
  /<script[\s\S]*?<\/script>/gi,
  '',
);
const pageMarkup = markup.replace(
  /<div class="phone-stage">[\s\S]*?<\/div>\s*<\/div>\s*<div class="wrap">\s*<div class="phone-dots" id="phoneDots"><\/div>\s*<\/div>/i,
  '<div id="phoneCarouselMount"></div>',
);

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main dangerouslySetInnerHTML={{ __html: pageMarkup }} />
      <PhoneMockupBasic />
      <LandingInteractions />
    </>
  );
}