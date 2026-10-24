import type { CSSProperties } from "react"

export function splitWords(text: string, prefix = "data-word") {
  const out: string[] = []
  text.split(" ").forEach((w, i) => {
    out.push(`${prefix}-${i}`)
  })
  return out
}

// Split a string into kinetic letter spans.
export function Kinetic({
  text,
  accentEnd = false,
  className = "",
}: {
  text: string
  accentEnd?: boolean
  className?: string
}) {
  const lines = text.split(" ")
  return (
    <span className={className}>
      {lines.map((word, wi) => (
        <span key={wi} className="kinetic__word">
          {word.split("").map((ch, ci) => {
            const isLast =
              accentEnd && wi === lines.length - 1 && ci === word.length - 1
            return (
              <span
                key={ci}
                className={
                  "kinetic__letter" + (isLast ? " kinetic__letter--accent" : "")
                }
                data-char={ch === " " ? "\u00A0" : ch}
              >
                {ch}
              </span>
            )
          })}
          {wi < lines.length - 1 ? <span className="kinetic__letter" data-char=" " /> : null}
        </span>
      ))}
    </span>
  )
}

// A word-by-word reveal block. Words slide up as the element enters the viewport.
export function WordReveal({
  text,
  as: Tag = "p",
  className = "",
  step = 0.035,
}: {
  text: string
  as?: "p" | "h1" | "h2" | "h3" | "div" | "span" | "li"
  className?: string
  step?: number
}) {
  const words = text.split(" ")
  return (
    <Tag className={`data-words ${className}`.trim()} data-wordreveal>
      {words.map((w, i) => (
        <span
          key={i}
          className="data-word"
          style={{ "--word-delay": `${i * step}s` } as CSSProperties}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  )
}
