export default function TornEdge({ fill = '#F8F1E5', flip = false, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={`torn-edge ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <path
        d="M0 0 C 10 18, 22 2, 32 12 C 42 22, 54 4, 64 14 C 74 24, 86 2, 96 10 C 106 18, 118 4, 128 12
           C 138 20, 150 2, 160 10 C 170 18, 182 6, 192 14 C 202 22, 214 2, 224 10
           C 234 18, 246 4, 256 12 C 266 20, 278 2, 288 10 C 298 18, 310 4, 320 12
           C 330 20, 342 2, 352 10 C 362 18, 374 4, 384 12 C 392 18, 398 8, 400 12 L 400 0 L 0 0 Z"
        fill={fill}
      />
    </svg>
  );
}
