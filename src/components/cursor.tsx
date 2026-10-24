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
    // Reduced motion: the ring tracks the pointer exactly instead of trailing it.
    const ease = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.12

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
      rx += (x - rx) * ease
      ry += (y - ry) * ease
      dot.style.transform = `translate(${x}px, ${y}px)`
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      // Stop the loop once the ring has caught up with the pointer.
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) raf = requestAnimationFrame(tick)
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
