import Link from "next/link"
import { site, marqueeItems, work, services, statement } from "@/lib/data"
import { Kinetic } from "@/components/kinetic"
import Reveal from "@/components/reveal"
import { MediaBlock } from "@/components/media-block"
import { MotionToggle } from "@/components/motion-toggle"

export default function Home() {
  const featured = work.slice(0, 3)
  const nameLines = site.name.split(" ")

  return (
    <>
      <div className="page-section">
        <section className="hero">
          <div className="hero__top eyebrow" data-reveal>
            <span>(Portfolio / {site.year})</span>
            <span className="hero__meta-centre">{site.role}</span>
            <span>{site.location}</span>
          </div>

          <h1 className="hero__name">
            <span className="kinetic__line hero__line">
              <Kinetic
                text={nameLines[0]}
                accentEnd
              />
            </span>
            <span className="kinetic__line hero__line hero__line--second">
              <Kinetic
                text={nameLines.slice(1).join(" ")}
                accentEnd
              />
            </span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__intro" data-reveal>
              {site.tagline}
            </p>
            <span className="hero__scroll eyebrow" data-reveal>
              {site.scrollHint}
            </span>
            <Link
              href="/work"
              className="hero__button"
              data-cursor="Look"
            >
              {site.cta} →
            </Link>
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
          <div className="selected-work__head" data-reveal>
            <h2 className="selected-work__label">
              Selected work <span>({String(featured.length).padStart(2, "0")})</span>
            </h2>
            <div className="selected-work__head-end">
              <span className="selected-work__pause">
                <MotionToggle />
              </span>
              <span className="selected-work__years">
                2025 — 2026
              </span>
            </div>
          </div>

          <div className="selected-work__grid">
            <div className="selected-work__media">
              <WorkMedia items={featured} />
            </div>
            <div className="selected-work__list">
              {featured.map((w, i) => (
                <Reveal key={w.slug} as="div" delay={i * 0.08}>
                  <Link
                    href={`/work/${w.slug}`}
                    className="selected-work__row"
                    data-cursor="View"
                  >
                    <span className="selected-work__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="selected-work__name">{w.title}</span>
                    <span className="selected-work__year">{w.year}</span>
                    <span className="selected-work__details">
                      {w.summary}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
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

function WorkMedia({ items }: { items: (typeof work)[number][] }) {
  return (
    <div className="selected-work__frame">
      {items.map((w, i) => (
        <div
          key={w.slug}
          className="selected-work__slide"
          data-active={i === 0 ? "" : undefined}
        >
          <MediaBlock slug={w.slug} label={w.media[0]?.label ?? w.title} />
          <div className="selected-work__caption">
            <span>{w.title}</span>
            <span>{w.year}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
