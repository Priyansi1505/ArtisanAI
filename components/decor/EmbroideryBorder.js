export default function EmbroideryBorder({ tone = 'terracotta', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`embroidery-border embroidery-border--${tone} ${className}`}
    />
  );
}
