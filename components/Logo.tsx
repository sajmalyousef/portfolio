export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sajmal and Hiba monogram"
    >
      <rect width="64" height="64" rx="16" fill="var(--accent)" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), Arial, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-2"
        fill="#0a0a0b"
      >
        SH
      </text>
    </svg>
  );
}
