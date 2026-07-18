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
      <g
        fill="none"
        stroke="#0a0a0b"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 25 C30 19 15 19 15 26 C15 32 30 31 30 38 C30 45 15 45 15 39" />
        <path d="M39 20 V44" />
        <path d="M51 20 V44" />
        <path d="M39 32 H51" />
      </g>
    </svg>
  );
}
