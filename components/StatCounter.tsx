/**
 * Renders a stat value as static text. (Count-up animation removed so
 * numbers do not flicker on scroll-in.)
 */
export function StatCounter({ value }: { value: string }) {
  return <span>{value}</span>;
}
