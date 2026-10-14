const insights = [
  {
    tone: 'lead',
    quote:
      'Skilled hands undercut their own worth just to be chosen first, because there’s no shared sense of what a job is truly worth.',
    source: 'Heard from a repair technician',
  },
  {
    tone: 'mint',
    quote:
      'Vendors spent far more than they could afford on ads that promised customers and delivered silence, month after month.',
    source: 'Heard from a market seller',
  },
  {
    tone: 'blush',
    quote:
      'Almost everyone wanted one thing before anything else: a way to know, for certain, that the person on the other side is real.',
    source: 'Heard from vendors, again and again',
  },
];

export function Problem() {
  return (
    <section className="section" id="story" aria-labelledby="story-title">
      <div className="container">
        <h2 className="h2 reveal" id="story-title">
          This didn’t start in a boardroom. It started with listening.
        </h2>

        <div className="problem-top reveal">
          <p className="problem-stat">9 in 10</p>
          <div className="problem-copy">
            <p className="lead">
              Nigerians who earn a living outside the formal economy, repairing, building, styling, and fixing the
              things that keep everyday life running.
            </p>
            <p className="source">Source: Nigerian Economic Summit Group, From Hustle to Decent Work (2025)</p>
          </div>
        </div>

        <p className="body-wide reveal">
          They are the backbone of how this country runs, and finding trustworthy work, or a trustworthy customer,
          still comes down to luck. We spoke with vendors and service workers directly, and three things came up
          again and again.
        </p>

        <div className="spread reveal">
          <div>
            <h3 className="h3">Same repair, two prices.</h3>
            <p className="body-copy">
              One technician charged ₦1,000. Another charged ₦5,000 for the same job. When nobody agrees what skilled
              work is worth, quality gets undercut.
            </p>
          </div>
          <div className="spread-scale" aria-hidden="true">
            <span className="spread-track" />
            <span className="spread-marker" style={{ left: '20%' }}>
              <span className="spread-label">₦1,000</span>
            </span>
            <span className="spread-marker spread-marker--muted" style={{ left: '100%' }}>
              <span className="spread-label">₦5,000</span>
            </span>
          </div>
        </div>

        <div className="insights reveal">
          {insights.map((item) => (
            <article key={item.source} className={`insight insight--${item.tone}`}>
              <p className="insight-quote">{item.quote}</p>
              <p className="insight-source">{item.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
