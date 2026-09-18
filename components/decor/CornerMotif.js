export default function CornerMotif({ className = '', color = '#C95732' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M4 6 C 40 10, 70 24, 84 56 C 96 84, 90 112, 66 132" opacity="0.55" />
      <path d="M18 6 C 46 14, 66 30, 74 54" opacity="0.4" />
      <path d="M30 20 c8 -6 18 -4 20 4 c2 8 -6 14 -14 12 c6 6 4 16 -4 18 c-8 2 -14 -6 -12 -14" opacity="0.7" />
      <circle cx="10" cy="10" r="2.4" fill={color} stroke="none" opacity="0.6" />
      <circle cx="58" cy="34" r="1.8" fill={color} stroke="none" opacity="0.5" />
      <circle cx="82" cy="70" r="1.8" fill={color} stroke="none" opacity="0.5" />
    </svg>
  );
}
