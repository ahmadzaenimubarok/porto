import Link from "next/link"
import { notFound } from "next/navigation"
import { work } from "@/lib/data"
import Reveal from "@/components/reveal"
import { MediaBlock } from "@/components/media-block"

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }))
}

export default function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // async read of dynamic params
  return <CaseInner params={params} />
}

async function CaseInner({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = work.find((w) => w.slug === slug)
  if (!item) notFound()

  const idx = work.findIndex((w) => w.slug === slug)
  const next = work[(idx + 1) % work.length]

  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">
          ({String(idx + 1).padStart(2, "0")}) Case study
        </span>
        <h1
          className="page-title__title"
          style={{
            fontSize: "clamp(52px, 9vw, 150px)",
            fontVariationSettings: "'wdth' 70, 'wght' 800",
          }}
        >
          {item.title}
        </h1>
        <div className="case-meta">
          <MetaItem k="Role" v={item.role} />
          <MetaItem k="Platform" v={item.platform} />
          <MetaItem k="Year" v={item.year} />
        </div>
      </div>

      <div className="page-section">
        <Reveal>
          <div className="case-media">
            <MediaBlock slug={item.slug} label={item.media[0]?.label ?? item.title} />
          </div>
        </Reveal>

        <div className="case-body" style={{ marginTop: "clamp(40px, 6vw, 80px)" }}>
          <Reveal>
            <p className="case-summary">{item.summary}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="case-details">
              {item.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div style={{ marginTop: "clamp(56px, 8vh, 100px)" }}>
          <Reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: 20 }}>
              By the numbers
            </span>
            <div className="numbers">
              {item.numbers.map((n, i) => (
                <div className="numbers__item" key={i}>
                  <span className="numbers__value">{n.value}</span>
                  <span className="numbers__label">{n.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div style={{ marginTop: "clamp(80px, 12vh, 140px)" }}>
          <div className="case-next">
            <span>Next case</span>
            <Link href={`/work/${next.slug}`} data-cursor="Next">
              {next.title} →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function MetaItem({ k, v }: { k: string; v: string }) {
  return (
    <div className="case-meta__item">
      <span className="case-meta__k">{k}</span>
      <span className="case-meta__v">{v}</span>
    </div>
  )
}
