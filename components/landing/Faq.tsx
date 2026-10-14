const questions = [
  {
    q: 'Do I have to pay to use Bartr?',
    a: 'No. Asking for help and posting a request is free. Vendors pay only once a job is genuinely complete, never just to be seen.',
  },
  {
    q: 'How do I know a vendor is trustworthy?',
    a: 'Every vendor builds a reputation from real, completed jobs, not from claims, and not from reviews that can be bought.',
  },
  {
    q: 'What if typing isn’t easy for me?',
    a: 'Then don’t type. Speak naturally, and Bartr turns your words into a clear request for you to confirm.',
  },
  {
    q: 'Do I need to use escrow?',
    a: 'No. Paying in cash on completion is how payments work today. Escrow for larger jobs is on the roadmap.',
  },
];

// Each question gets its own tint, so the conversation has rhythm instead of one repeated card.
const tones = ['sky', 'mint', 'blush', 'sand'] as const;

export function Faq() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 className="h2 reveal" id="faq-title">
          Questions you might have.
        </h2>
        <p className="lead reveal">Ask it the way you would ask a neighbor.</p>

        <ol className="faq-chat reveal">
          {questions.map((item, index) => (
            <li key={item.q}>
              <details>
                <summary className={`faq-ask faq-ask--${tones[index % tones.length]}`}>{item.q}</summary>
                <div className="faq-body">
                  <p className="faq-reply">{item.a}</p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
