"use client"

export function MotionToggle() {
  const onClick = () => {
    const root = document.documentElement
    const current = root.dataset.motion === "off"
    root.dataset.motion = current ? "on" : "off"
    localStorage.setItem("motion", current ? "on" : "off")
    const label = current ? "(Pause motion)" : "(Play motion)"
    const btn = document.querySelector(".selected-work__pause")
    if (btn) btn.textContent = label
  }
  return (
    <button type="button" className="selected-work__pause" onClick={onClick}>
      (Pause motion)
    </button>
  )
}
