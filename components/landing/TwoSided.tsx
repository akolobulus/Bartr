import { Check } from 'lucide-react';

const customerPoints = [
  'Describe the job. No forms, just conversation.',
  'See who’s trusted before you choose.',
  'Pay in cash when the job is done.',
];

const vendorPoints = [
  'Receive requests that fit what you do.',
  'Build a rating from every completed job.',
  'Get paid once a job is complete.',
];

export function TwoSided() {
  return (
    <section className="section" aria-labelledby="sides-title">
      <div className="container">
        <h2 className="h2 reveal" id="sides-title">
          Built for both sides of the table.
        </h2>
        <p className="lead reveal">
          A marketplace only works if it’s worth opening for both sides, so Bartr is built for customers and vendors
          alike.
        </p>

        <div className="sides reveal">
          <article className="side side--customer">
            <h3 className="h3">Need something done?</h3>
            <p className="body-copy">Stop hoping for the best. See who’s reliable before you pick up the phone.</p>
            <ul className="checklist">
              {customerPoints.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="side side--vendor">
            <h3 className="h3">Got a skill worth sharing?</h3>
            <p className="body-copy">
              Stop paying for ads that lead nowhere. Let the right customers come looking for you.
            </p>
            <ul className="checklist">
              {vendorPoints.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
