"use client"
import { useEffect, useRef } from "react"
import type { WorkItem } from "@/lib/data"
import { MediaBlock } from "./media-block"

// Renders a project's first media entry: a real image or video when `src`
// is set in data.ts, the SVG placeholder otherwise.
export function WorkMedia({
  item,
  active = true,
  eager = false,
}: {
  item: WorkItem
  active?: boolean
  eager?: boolean
}) {
  const media = item.media[0]
  const label = media?.label ?? item.title
  const alt = media?.alt ?? label
  const videoRef = useRef<HTMLVideoElement>(null)

  // Video plays only while its slide is showing and motion is on.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const sync = () => {
      const motionOn = document.documentElement.dataset.motion !== "off"
      if (active && motionOn) v.play().catch(() => {})
      else v.pause()
    }
    sync()
    window.addEventListener("motionchange", sync)
    return () => window.removeEventListener("motionchange", sync)
  }, [active])

  if (!media?.src) return <MediaBlock slug={item.slug} label={label} />

  if (media.kind === "video") {
    return (
      <video
        ref={videoRef}
        src={media.src}
        poster={media.poster}
        aria-label={alt}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
      />
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  )
}
