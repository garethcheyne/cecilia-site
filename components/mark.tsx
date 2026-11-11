/** Cecilia's mark: a flat of five organ pipes. */
export function Mark({ className = "size-6" }: { className?: string }) {
  const pipes: [number, number][] = [
    [4.5, 13],
    [10.25, 8],
    [16, 3],
    [21.75, 8],
    [27.5, 13],
  ]
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      {pipes.map(([x, top]) => (
        <g key={x} fill="currentColor">
          <rect x={x - 2.5} y={top} width={5} height={21 - top} rx={0.8} />
          <path d={`M${x - 2.5} 21 h5 l-1.7 6 h-1.6 z`} opacity={0.85} />
        </g>
      ))}
      <rect x={2} y={27} width={28} height={2} rx={0.5} fill="currentColor" opacity={0.6} />
    </svg>
  )
}
