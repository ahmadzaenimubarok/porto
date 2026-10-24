export type Motion = "on" | "off"

const KEY = "motion"

export function readSavedMotion(): Motion | null {
  try {
    const saved = localStorage.getItem(KEY)
    return saved === "on" || saved === "off" ? saved : null
  } catch {
    return null
  }
}

export function saveMotion(value: Motion) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // storage blocked: the choice still applies for this page view
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// A saved choice wins; otherwise follow the OS preference.
export function initialMotion(): Motion {
  return readSavedMotion() ?? (prefersReducedMotion() ? "off" : "on")
}
