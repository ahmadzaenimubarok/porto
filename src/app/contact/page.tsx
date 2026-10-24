import type { Metadata } from "next"
import { contact, site } from "@/lib/data"
import { WordReveal } from "@/components/kinetic"
import Reveal from "@/components/reveal"

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
}

export default function ContactPage() {
  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">(05) Contact</span>
        <h1 className="page-title__title">
          <WordReveal text={contact.heading} as="span" />
        </h1>
        <p
          style={{
            color: "var(--color-muted)",
            maxWidth: "44ch",
            fontSize: 16,
            lineHeight: 1.6,
            marginTop: 16,
          }}
        >
          {contact.intro}
        </p>
      </div>

      <div className="page-section">
        <Reveal>
          <form
            className="contact-form"
            action="https://formspree.io/f/halo"
            method="POST"
          >
            <div className="contact-form__field">
              <span className="contact-form__label">Name</span>
              <input
                type="text"
                name="name"
                required
                style={{
                  background: "transparent",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: 4,
                  padding: "14px 16px",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                }}
                placeholder="Your name"
              />
            </div>

            <div className="contact-form__field">
              <span className="contact-form__label">Email</span>
              <input
                type="email"
                name="email"
                required
                style={{
                  background: "transparent",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: 4,
                  padding: "14px 16px",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                }}
                placeholder="you@example.com"
              />
            </div>

            <div className="contact-form__field">
              <span className="contact-form__label">Budget</span>
              <div className="chips">
                {contact.budget.map((b) => (
                  <label key={b}>
                    <input type="radio" name="budget" value={b} />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="contact-form__field">
              <span className="contact-form__label">Type</span>
              <div className="chips">
                {contact.types.map((t) => (
                  <label key={t}>
                    <input type="radio" name="type" value={t} />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="contact-form__field">
              <span className="contact-form__label">Tell me about it</span>
              <textarea
                name="message"
                required
                className="contact-form__textarea"
                placeholder="The score, the site, the system — and what success looks like."
              />
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              data-cursor="Send"
            >
              Send enquiry
            </button>
            <span className="contact-form__note">
              Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
          </form>
        </Reveal>
      </div>
    </>
  )
}
