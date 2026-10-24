"use client"
import Link from "next/link"
import { useState } from "react"
import type { WorkItem } from "@/lib/data"
import Reveal from "./reveal"
import { WorkMedia } from "./work-media"

// Selected-work list plus a sticky media frame. Hovering or focusing a row
// swaps the frame to that project. Below 900px the frame is hidden and each
// row carries its own media instead, so nothing depends on hover.
export function FeaturedWork({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0)
  const [engaged, setEngaged] = useState(false)

  return (
    <div className="selected-work__grid">
      <div className="selected-work__media">
        <div className="selected-work__frame">
          {items.map((w, i) => (
            <div
              key={w.slug}
              className="selected-work__slide"
              data-active={i === active ? "" : undefined}
              aria-hidden={i === active ? undefined : true}
            >
              <WorkMedia item={w} active={i === active} eager={i === 0} />
              <div className="selected-work__caption">
                <span>{w.title}</span>
                <span>{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="selected-work__list"
        data-engaged={engaged ? "" : undefined}
        onMouseEnter={() => setEngaged(true)}
        onMouseLeave={() => setEngaged(false)}
        onFocus={() => setEngaged(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false)
        }}
      >
        {items.map((w, i) => (
          <Reveal key={w.slug} as="div" delay={i * 0.08}>
            <Link
              href={`/work/${w.slug}`}
              className="selected-work__row"
              data-cursor="View"
              data-active={i === active ? "" : undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="selected-work__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="selected-work__name">{w.title}</span>
              <span className="selected-work__year">{w.year}</span>
              <span className="selected-work__details">{w.summary}</span>
              <span className="selected-work__thumb" aria-hidden="true">
                <WorkMedia item={w} active={false} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
