import Link from "next/link"
import { work } from "@/lib/data"
import Reveal from "@/components/reveal"

export default function WorkIndex() {
  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">(02) Work</span>
        <h1 className="page-title__title" style={{ fontSize: "clamp(48px, 10vw, 150px)" }}>
          Selected work
        </h1>
        <div className="selected-work__head-end" style={{ marginTop: 16 }}>
          <span className="selected-work__years">
            2024 — 2026
          </span>
        </div>
      </div>

      <div className="page-section">
        <div className="work-index">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.05}>
              <Link
                href={`/work/${w.slug}`}
                className="work-index__row"
                data-cursor="View"
              >
                <span className="work-index__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="work-index__title">{w.title}</span>
                <span className="work-index__platform">{w.platform}</span>
                <span className="work-index__year">{w.year}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
