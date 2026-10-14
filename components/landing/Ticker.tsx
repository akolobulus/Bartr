const services = [
  'Phone repair',
  'Nail tech',
  'Electricians',
  'Mechanics',
  'Tailoring',
  'Hair styling',
  'Building work',
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="ticker-group" aria-hidden={hidden ? 'true' : undefined}>
      {services.map((service) => (
        <span className="ticker-item" key={service}>
          {service}
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
