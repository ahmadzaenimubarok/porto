import Link from "next/link"
import { notFound } from "next/navigation"
import { services, work } from "@/lib/data"
import Reveal from "@/components/reveal"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <Inner params={params} />
}

async function Inner({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()

  const related = work.filter((w) => s.related.includes(w.slug))

  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">
          ({s.num}) {s.title}
        </span>
        <h1
          className="page-title__title"
          style={{
            fontSize: "clamp(48px, 8vw, 120px)",
            fontVariationSettings: "'wdth' 70, 'wght' 800",
          }}
        >
          {s.title}
        </h1>
      </div>

      <div className="page-section">
        <div className="service-detail__grid">
          <Reveal>
            <p style={{ fontSize: "clamp(19px, 2vw, 24px)", lineHeight: 1.45, margin: 0, maxWidth: "40ch", color: "var(--color-text)" }}>
              {s.blurb}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 8 }}>
                Includes
              </span>
              <ul className="includes">
                {s.includes.map((inc, i) => (
                  <li key={i}>
                    <span className="includes__marker" aria-hidden="true">
                      →
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {related.length > 0 ? (
          <div style={{ marginTop: "clamp(64px, 10vh, 120px)" }}>
            <Reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
                Related work
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
                {related.map((w) => (
                  <Link key={w.slug} href={`/work/${w.slug}`} style={{ color: "var(--color-muted)", fontSize: 15 }}>
                    {w.title} <span style={{ color: "var(--color-faint)" }}>({w.year})</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        ) : null}

        <div style={{ marginTop: "clamp(80px, 12vh, 140px)" }}>
          <div className="case-next">
            <span>Start a project</span>
            <Link href="/contact" data-cursor="Let's talk">
              Enquire →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
