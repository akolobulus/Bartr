import { readFileSync } from 'node:fs';
import path from 'node:path';
import LandingInteractions from './landing-interactions';

const source = readFileSync(path.join(process.cwd(), 'bartr-landing.html'), 'utf8');
const styles = source.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? '';
const markup = (source.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? '').replace(
  /<script[\s\S]*?<\/script>/gi,
  '',
);

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main dangerouslySetInnerHTML={{ __html: markup }} />
      <LandingInteractions />
    </>
  );
}