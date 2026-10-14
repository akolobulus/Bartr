export function FeatureBento() {
  return (
    <section className="section" aria-labelledby="bento-title">
      <div className="container">
        <h2 className="h2 reveal" id="bento-title">
          The whole job, from first message to rating.
        </h2>

        <div className="bento reveal">
          <article className="tile tile--a">
            <p className="tile-quote">“My phone screen cracked, need am fix today.”</p>
            <div>
              <h3 className="h3">Say it the way you’d say it.</h3>
              <p className="body-copy">
                Typed or spoken, in English or Pidgin. Bartr turns it into a request with the category, urgency, and a
                suggested price range for you to confirm.
              </p>
            </div>
          </article>

          <article className="tile tile--b">
            <h3 className="h3">A fair price, not a guess.</h3>
            <p className="body-copy">
              Suggested ranges by category, so the same repair doesn’t cost ₦1,000 at one shop and ₦5,000 at the next.
            </p>
          </article>

          <article className="tile tile--c">
            <h3 className="h3">Ranked, not just nearest.</h3>
            <p className="body-copy">
              Vendors are ordered by rating, response speed, and price fit. Distance is one factor, not the whole
              answer.
            </p>
          </article>

          <article className="tile tile--d">
            <h3 className="h3">Trust from real jobs.</h3>
            <p className="body-copy">Ratings come from completed jobs, and both sides rate each other when it’s done.</p>
          </article>

          <article className="tile tile--e">
            <h3 className="h3">Track it live.</h3>
            <p className="body-copy">
              Follow your vendor on the map, from heading there to complete, and chat without leaving the app.
            </p>
          </article>

          <article className="tile tile--f">
            <h3 className="h3">Cash on completion.</h3>
            <p className="body-copy">Pay in cash when the job is done. Escrow for larger jobs is on the roadmap.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
