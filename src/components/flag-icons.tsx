export function UsFlagIcon({ className }: { className?: string }) {
  const stripeHeight = 32 / 7;
  const cantonHeight = stripeHeight * 4;
  const stars = [2.5, 5.5, 8.5, 11].flatMap((x) => [3.6, 7.2, 10.8, 14.4].map((y) => ({ x, y })));

  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="United States flag">
      <clipPath id="us-flag-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#us-flag-circle)">
        {Array.from({ length: 7 }).map((_, i) => (
          <rect
            key={i}
            x="0"
            y={i * stripeHeight}
            width="32"
            height={stripeHeight + 0.5}
            fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
          />
        ))}
        <rect x="0" y="0" width="13" height={cantonHeight} fill="#3C3B6E" />
        {stars.map(({ x, y }, i) => (
          <circle key={i} cx={x} cy={y} r="0.6" fill="#FFFFFF" />
        ))}
      </g>
    </svg>
  );
}

export function MexicoFlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="Mexico flag">
      <clipPath id="mx-flag-circle">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#mx-flag-circle)">
        <rect x="0" y="0" width="10.67" height="32" fill="#006847" />
        <rect x="10.67" y="0" width="10.67" height="32" fill="#FFFFFF" />
        <rect x="21.33" y="0" width="10.67" height="32" fill="#CE1126" />
        <circle cx="16" cy="16" r="3" fill="none" stroke="#8B6F3E" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
