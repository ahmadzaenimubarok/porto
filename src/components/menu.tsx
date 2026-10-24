import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export type MenuItem = {
  label: string
  href: string
  num: string
}

export default function Menu({
  items,
  open,
  onClose,
  email,
  location,
}: {
  items: MenuItem[]
  open: boolean
  onClose: () => void
  email: string
  location: string
}) {
  const pathname = usePathname()
  const [active, setActive] = useState<string>(pathname)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <nav
      id="site-menu"
      className="menu"
      aria-hidden={!open}
      role="dialog"
      aria-label="Menu"
    >
      <div className="menu__items">
        {items.map((m, i) => (
          <Link
            key={m.href}
            href={m.href}
            className={
              "menu__item" +
              (active === m.href ? " menu__item--active" : "")
            }
            style={{ transitionDelay: `${i * 0.04}s` }}
            onClick={onClose}
            aria-current={active === m.href ? "page" : undefined}
          >
            <span className="menu__label">{m.label}</span>
            <span className="menu__number" aria-hidden="true">
              {m.num}
            </span>
          </Link>
        ))}
      </div>
      <div className="menu__footer">
        <a href={`mailto:${email}`} className="menu__email">
          {email}
        </a>
        <span className="eyebrow">
          {location}
        </span>
      </div>
    </nav>
  )
}
