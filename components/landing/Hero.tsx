import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowRight, Car, Scissors, Smartphone, Zap } from 'lucide-react';
import { LaunchButton } from './LaunchButton';

// Service words take turns in the headline, so the sentence reads as a promise: there is always someone nearby.
const serviceWords = ['a nail tech', 'a mechanic', 'a tailor', 'a phone tech'];

// The radar sweep turns once every six seconds. Vendors light up as it passes them.
const SWEEP_SECONDS = 6;
// The stage is one unit wide and this many units tall, so circles need the height corrected.
const STAGE_RATIO = 1.08;

// Vendor blips sit on the rings, on the open sides of the stage, clear of the phone.
// Angles run clockwise from 12 o'clock, the same way the sweep turns. Radius is a percentage of the width.
const vendorBlips = [
  { angle: 75, radius: 49 },
  { angle: 100, radius: 36 },
  { angle: 145, radius: 49 },
  { angle: 215, radius: 49 },
  { angle: 265, radius: 45 },
];

const categoryNodes = [
  { Icon: Smartphone, left: 9, top: 26, bob: '0s' },
  { Icon: Scissors, left: 91, top: 30, bob: '-2s' },
  { Icon: Car, left: 10, top: 76, bob: '-4s' },
  { Icon: Zap, left: 90, top: 72, bob: '-1s' },
];

function normalize(angle: number) {
  return ((angle % 360) + 360) % 360;
}

function pointOn(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    left: 50 + radius * Math.sin(radians),
    top: 50 - (radius / STAGE_RATIO) * Math.cos(radians),
  };
}

// The sweep reaches an angle this many seconds after it starts, so a delay of this length lights that angle.
function sweepDelay(angle: number) {
  return `${(normalize(angle) / 360) * SWEEP_SECONDS}s`;
}

function angleOf(left: number, top: number) {
  const dx = left - 50;
  const dy = (top - 50) * STAGE_RATIO;
  return normalize((Math.atan2(dx, -dy) * 180) / Math.PI);
}

function HeroStage() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="stage-field">
        <span className="stage-ring stage-ring--3" />
        <span className="stage-ring stage-ring--2" />
        <span className="stage-ring stage-ring--1" />
        <span className="stage-sweep" />
        {vendorBlips.map(({ angle, radius }) => {
          const point = pointOn(angle, radius);
          return (
            <span
              key={angle}
              className="stage-blip"
              style={{ left: `${point.left}%`, top: `${point.top}%`, animationDelay: sweepDelay(angle) }}
            />
          );
        })}
      </div>

      {categoryNodes.map(({ Icon, left, top, bob }) => (
        <span
          key={`${left}-${top}`}
          className="stage-node"
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: bob,
              '--sweep-delay': sweepDelay(angleOf(left, top)),
            } as CSSProperties
          }
        >
          <Icon size={22} strokeWidth={2} />
        </span>
      ))}

      <div className="stage-phone">
        <Image
          src="/product-screenshots/screenshot_1.png"
          alt=""
          width={1080}
          height={2400}
          sizes="(max-width: 640px) 58vw, 250px"
          priority
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display" id="hero-title">
            There’s always{' '}
            <span className="roll-word">
              {serviceWords.map((word, index) => (
                <span key={word} aria-hidden={index === 0 ? undefined : 'true'} style={{ animationDelay: `${3 * index}s` }}>
                  {word}
                </span>
              ))}
            </span>{' '}
            <span className="accent">nearby</span> who can.
          </h1>
          <p className="lead">
            Describe the job in your own words or voice. Bartr finds trusted people close by and gets you talking
            fast.
          </p>
          <div className="hero-actions">
            <LaunchButton>
              Launch web app{' '}
              <span className="btn-badge">
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </LaunchButton>
            <a className="btn btn-ghost" href="/#how">
              See how it works
            </a>
          </div>
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
