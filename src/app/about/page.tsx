import { about } from "@/lib/data"
import { WordReveal } from "@/components/kinetic"
import Reveal from "@/components/reveal"

export default function About() {
  return (
    <>
      <div className="page-title">
        <span className="page-title__kicker eyebrow">(03) About</span>
        <h1 className="page-title__title">
          <WordReveal text="The builder behind it" as="span" />
        </h1>
      </div>

      <div className="page-section">
        <section className="columns">
          <div>
            <Reveal>
              <p className="columns__intro">
                {about.intro}
              </p>
            </Reveal>
            <div className="columns__bio">
              {about.bio.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="facts">
              {about.facts.map((f) => (
                <div className="facts__row" key={f.k}>
                  <span className="facts__k">{f.k}</span>
                  <span className="facts__v">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </>
  )
}
