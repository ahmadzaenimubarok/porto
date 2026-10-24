import Link from "next/link"
import { services, work } from "@/lib/data"
import Reveal from "@/components/reveal"

export default function ServicesIndex() {
  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">(04) Services</span>
        <h1 className="page-title__title" style={{ fontSize: "clamp(48px, 10vw, 150px)" }}>
          What I do
        </h1>
      </div>

      <div className="page-section">
        <div className="service-list">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="service-list__row"
                data-cursor="Open"
              >
                <span className="service-list__num" aria-hidden="true">
                  {s.num}
                </span>
                <span className="service-list__title">{s.title}</span>
                <span className="service-list__arrow" aria-hidden="true" style={{ fontSize: 20, color: "var(--color-faint)" }}>
                  →
                </span>
                <span className="service-list__blurb">{s.blurb}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: "clamp(64px, 10vh, 120px)" }}>
          <Reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
              Related work
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
              {work.map((w) => (
                <Link key={w.slug} href={`/work/${w.slug}`} style={{ color: "var(--color-muted)", fontSize: 15 }}>
                  {w.title} <span style={{ color: "var(--color-faint)" }}>({w.year})</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
