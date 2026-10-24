"use client"
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

// Marks its children as revealed when scrolled into view.
// Works with [data-reveal] (fade+rise) and [data-wordreveal] (word slide).
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "li" | "article" | "p" | "span"
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = ""
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.revealed = ""
            el.querySelectorAll("[data-wordreveal]").forEach((w) => {
              ;(w as HTMLElement).dataset.revealed = ""
            })
            io.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`data-clipin ${className}`.trim()}
      data-reveal
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
