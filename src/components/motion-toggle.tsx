"use client"
import { useSyncExternalStore } from "react"
import { saveMotion, type Motion } from "@/lib/motion"

const EVENT = "motionchange"
const REDUCED = "(prefers-reduced-motion: reduce)"

function subscribeMotion(cb: () => void) {
  window.addEventListener(EVENT, cb)
  return () => window.removeEventListener(EVENT, cb)
}
const getMotion = (): Motion =>
  document.documentElement.dataset.motion === "off" ? "off" : "on"

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED)
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}
const getReduced = () => window.matchMedia(REDUCED).matches

export function MotionToggle() {
  const motion = useSyncExternalStore(subscribeMotion, getMotion, () => "on" as Motion)
  // The OS reduced-motion setting is a hard floor in CSS, so there is nothing to toggle.
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false)

  if (reduced) return null

  const onClick = () => {
    const next: Motion = motion === "on" ? "off" : "on"
    document.documentElement.dataset.motion = next
    saveMotion(next)
    window.dispatchEvent(new Event(EVENT))
  }

  return (
    <button
      type="button"
      className="header__motion"
      aria-pressed={motion === "on"}
      onClick={onClick}
    >
      Motion <span aria-hidden="true">{motion === "on" ? "On" : "Off"}</span>
    </button>
  )
}
