"use client"
import { useEffect, useRef } from "react"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.dataset.nocursor = ""

    let x = -200
    let y = -200
    let rx = -200
    let ry = -200
    let label = ""
    let labelTarget: HTMLElement | null = null
    let raf = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = (e.target as HTMLElement | null)?.closest?.<HTMLElement>("[data-cursor]") ?? null
      if (t !== labelTarget) {
        labelTarget = t
        label = t?.dataset.cursor ?? ""
        ring.textContent = label
        ring.toggleAttribute("data-label", Boolean(label))
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      raf = 0
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      dot.style.transform = `translate(${x}px, ${y}px)`
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
      delete document.body.dataset.nocursor
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
