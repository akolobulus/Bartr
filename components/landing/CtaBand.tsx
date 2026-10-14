import Image from 'next/image';
import { LaunchButton } from './LaunchButton';

export function CtaBand() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta reveal">
          <div>
            <h2 className="h2" id="cta-title">
              Your next helping hand is closer than you think.
            </h2>
            <p className="lead">Launch the web app today. Android and iOS apps are coming soon.</p>
            <div className="cta-actions">
              <LaunchButton variant="light">Launch web app</LaunchButton>
              <a className="btn btn-ghost-light" href="/team">
                Meet the team
              </a>
            </div>
          </div>

          <div className="cta-stage" aria-hidden="true">
            <span className="cta-ring cta-ring--2" />
            <span className="cta-ring cta-ring--1" />
            <div className="cta-phone cta-phone--back">
              <Image src="/product-screenshots/screenshot_9.png" alt="" width={1080} height={2400} sizes="200px" />
            </div>
            <div className="cta-phone cta-phone--front">
              <Image src="/product-screenshots/screenshot_12.png" alt="" width={1080} height={2400} sizes="220px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
