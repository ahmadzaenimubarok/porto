import Link from "next/link"
import { site, marqueeItems, work, services, statement } from "@/lib/data"
import { Kinetic } from "@/components/kinetic"
import Reveal from "@/components/reveal"
import { FeaturedWork } from "@/components/featured-work"

export default function Home() {
  const featured = work.slice(0, 3)
  const nameLines = site.name.split(" ")

  return (
    <>
      <div className="page-section">
        <section className="hero">
          <Reveal className="hero__top eyebrow">
            <span>(Portfolio / {site.year})</span>
            <span className="hero__meta-centre">{site.role}</span>
            <span>{site.location}</span>
          </Reveal>

          <h1 className="hero__name" aria-label={site.name}>
            <span className="kinetic__line hero__line" aria-hidden="true">
              <Kinetic text={nameLines[0]} />
            </span>
            <span className="kinetic__line hero__line hero__line--second">
              <Kinetic
                text={nameLines.slice(1).join(" ")}
                accentEnd
              />
            </span>
          </h1>

          <div className="hero__bottom">
            <Reveal as="p" className="hero__intro" delay={0.1}>
              {site.tagline}
            </Reveal>
            <Reveal as="span" className="hero__scroll eyebrow" delay={0.2}>
              {site.scrollHint}
            </Reveal>
            <div className="hero__actions">
              <Link
                href="/work"
                className="hero__button"
                data-cursor="Look"
              >
                {site.cta} →
              </Link>
              <Link href="/contact" className="hero__link" data-cursor="Hello">
                Start a project
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="page-section page-section--tight">
        <div className="marquee">
          <div className="marquee__track" data-marquee>
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="marquee__copy"
                aria-hidden={copy === 1}
              >
                {marqueeItems.map((item, i) => (
                  <span key={i} className="marquee__item" style={{ display: "contents" }}>
                    <span>{item}</span>
                    <span className="marquee__diamond" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-section">
        <section className="selected-work">
          <Reveal className="selected-work__head">
            <h2 className="selected-work__label">
              Selected work <span>({String(featured.length).padStart(2, "0")})</span>
            </h2>
            <div className="selected-work__head-end">
              <span className="selected-work__years">
                2025 — 2026
              </span>
            </div>
          </Reveal>

          <FeaturedWork items={featured} />
        </section>
      </div>

      <div className="page-section">
        <section>
          <Reveal>
            <p className="statement">
              {statement}
            </p>
          </Reveal>
        </section>
      </div>

      <div className="page-section page-section--tight">
        <section className="service-tiles">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="service-tiles__tile"
                data-cursor="Open"
                data-cursor-tone="dark"
              >
                <div className="service-tiles__fill" />
                <div className="service-tiles__content">
                  <div className="service-tiles__header">
                    <span>{s.num}</span>
                    <span className="service-tiles__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <div className="service-tiles__title" data-text={s.title}>
                    <span className="service-tiles__text">{s.title}</span>
                  </div>
                  <p className="service-tiles__description">
                    {s.blurb}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>
      </div>
    </>
  )
}
