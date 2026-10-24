---
target: / (src/app/page.tsx)
total_score: 23
p0_count: 2
p1_count: 2
timestamp: 2026-10-24T08-30-00Z
slug: src-app-page-tsx
---
# Critique: home page (/)
Method: dual-agent. Score 23/40 (Acceptable).

Priority issues
- [P0] Four data-reveal elements (hero top strip, hero intro, scroll hint, selected-work head) are never revealed: only <Reveal> sets data-revealed. They stay opacity:0 once JS runs. Fix: wrap in Reveal or make visible by default. (harden)
- [P0] MotionToggle: querySelector(".selected-work__pause") hits the wrapper span first, so one click deletes the button; label never syncs with storage; no aria-pressed; hidden inside the invisible head; marquee has no nearby pause (WCAG 2.2.2). (harden)
- [P1] Path to contact is hidden: only "Menu" in header, hero CTA goes to /work, first contact action is the footer. Placeholder email/LinkedIn. (layout, clarify)
- [P1] Work section shows SVG placeholders; row hover/focus never switches the media slide. (delight, layout)
- [P2] Hero clamp max 190px, full second name line in blue (breaks One Signal Rule), 10-11px micro labels in faint tone; overflow:hidden may clip at 390px. (typeset, colorize)
- [P3] Numbering and eyebrow scaffolding (01-03, 01-04, "(03)", "Scroll, gently"). (distill)

Detector: 9 findings in globals.css (overused-font x6 Geist Mono, layout-transition x2 at lines 562/1089, design-system-radius x1 at 167). Contrast: all text tokens pass AA; faint #86817a on #1a1918 = 4.54.
