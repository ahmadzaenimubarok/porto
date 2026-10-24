import Link from "next/link"

export default function NotFound() {
  return (
    <div className="page-title">
      <span className="page-title__kicker eyebrow">404</span>
      <h1
        className="page-title__title"
        style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
      >
        Not found
      </h1>
      <p style={{ color: "var(--color-muted)", marginTop: 20 }}>
        That page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="hero__button"
        style={{ marginTop: 32 }}
      >
        Back home →
      </Link>
    </div>
  )
}
