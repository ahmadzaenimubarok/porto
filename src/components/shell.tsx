"use client"
import { useState, useEffect, type ReactNode } from "react"
import Link from "next/link"
import { site } from "@/lib/data"
import Cursor from "./cursor"
import Menu, { type MenuItem } from "./menu"
import "./layout.css"

const MENU: MenuItem[] = [
  { label: "Home", href: "/", num: "01" },
  { label: "Work", href: "/work", num: "02" },
  { label: "About", href: "/about", num: "03" },
  { label: "Services", href: "/services", num: "04" },
  { label: "Contact", href: "/contact", num: "05" },
]

export default function Shell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.js = "on"
    const saved = localStorage.getItem("motion")
    document.documentElement.dataset.motion = saved ?? "on"
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <>
      <header className="header">
        <Link href="/" className="header__logo">
          {site.shortName}
        </Link>
        <span className="header__meta">{site.location}</span>
        <button
          className="header__menu"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </header>

      <Menu
        items={MENU}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        email={site.email}
        location={site.location}
      />
      <main id="main" className="page-sections">
        {children}
      </main>

      <footer className="footer">
        <div>
          <span className="footer__label eyebrow">
            Got something in mind?
          </span>
          <Link className="footer__big" href="/contact" data-cursor="Let's talk">
            Let&rsquo;s talk
          </Link>
        </div>
        <div className="footer__meta">
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
          <span>
            {site.year} / {site.location}
          </span>
        </div>
      </footer>
      <Cursor />
    </>
  )
}
