// Geometric SVG placeholder media (no external images yet — swap to real
// screenshots/videos in data.ts when available). One linework motif per slug.
export function MediaBlock({
  slug,
  label,
}: {
  slug: string
  label: string
}) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={label}
      style={{ width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1918" />
          <stop offset="1" stopColor="#111010" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#g-${slug})`} />
      <g
        stroke="#edeae4"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        fill="none"
      >
        {motif(slug)}
      </g>
      <text
        x="24"
        y="470"
        fill="#edeae4"
        fillOpacity="0.5"
        fontFamily="'Geist Mono', monospace"
        fontSize="11"
        letterSpacing="2"
      >
        {label.toUpperCase()}
      </text>
    </svg>
  )
}

function motif(slug: string) {
  switch (slug) {
    case "skor-cast":
      return (
        <>
          <rect x="60" y="80" width="280" height="180" rx="12" />
          <line x1="200" y1="80" x2="200" y2="260" />
          <text x="105" y="190" fill="#7fa8ff" stroke="none" fontSize="72" fontFamily="Archivo, sans-serif" fontWeight="800">
            15
          </text>
          <text x="232" y="190" fill="#edeae4" stroke="none" fontSize="72" fontFamily="Archivo, sans-serif" fontWeight="800">
            11
          </text>
          <line x1="60" y1="310" x2="340" y2="310" strokeOpacity="0.2" />
          <circle cx="80" cy="330" r="6" />
          <line x1="100" y1="330" x2="340" y2="330" strokeOpacity="0.25" />
          <circle cx="80" cy="356" r="6" />
          <line x1="100" y1="356" x2="260" y2="356" strokeOpacity="0.25" />
        </>
      )
    case "badminton-fun-match":
      return (
        <>
          <circle cx="200" cy="210" r="120" />
          <circle cx="200" cy="210" r="80" strokeOpacity="0.4" />
          <line x1="80" y1="210" x2="320" y2="210" strokeOpacity="0.4" />
          <line x1="200" y1="90" x2="200" y2="330" strokeOpacity="0.4" />
          <path d="M240 170 q30 -20 60 0" stroke="#7fa8ff" />
        </>
      )
    case "kos-kas":
      return (
        <>
          <rect x="70" y="90" width="260" height="320" rx="8" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="70"
              y1={140 + i * 52}
              x2="330"
              y2={140 + i * 52}
              strokeOpacity="0.25"
            />
          ))}
          {[110, 162, 214, 266].map((y, i) => (
            <circle key={y} cx="110" cy={y + 24} r="5" fill={i === 0 ? "#7fa8ff" : "none"} stroke={i === 0 ? "none" : "currentColor"} />
          ))}
          <line x1="220" y1="115" x2="330" y2="115" stroke="#7fa8ff" />
        </>
      )
    case "docs-skorcast":
      return (
        <>
          <rect x="80" y="80" width="240" height="340" rx="8" />
          <line x1="110" y1="130" x2="290" y2="130" stroke="#7fa8ff" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={i}
              x1="110"
              y1={170 + i * 32}
              x2={i % 2 ? 250 : 290}
              y2={170 + i * 32}
              strokeOpacity="0.3"
            />
          ))}
          <path d="M280 380 l24 0 12 24" stroke="#7fa8ff" />
        </>
      )
    case "this-site":
      return (
        <>
          <path d="M80 300 h240" />
          <path d="M80 220 q60 -140 120 0 t120 0" stroke="#7fa8ff" />
          <circle cx="200" cy="160" r="6" fill="#7fa8ff" stroke="none" />
          {[120, 160, 200, 240, 280].map((x) => (
            <line key={x} x1={x} y1="330" x2={x} y2={360 - (x - 200) ** 2 / 400} strokeOpacity="0.5" />
          ))}
        </>
      )
    default:
      return (
        <>
          <circle cx="200" cy="230" r="100" />
          <line x1="100" y1="230" x2="300" y2="230" strokeOpacity="0.4" />
        </>
      )
  }
}
