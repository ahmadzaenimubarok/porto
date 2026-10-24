---
name: Ahmad Zaeni Mubarok — Portfolio
description: A dark, kinetic portfolio that reads like a live scoreboard: heavy condensed numerals, one electric blue signal.
colors:
  signal-blue: "#7fa8ff"
  on-signal: "#111010"
  court-black: "#111010"
  scoreboard-panel: "#1a1918"
  chalk: "#edeae4"
  chalk-muted: "#b9b4ac"
  chalk-subtle: "#a8a39b"
  chalk-faint: "#928d85"
  chalk-label: "#8f8a82"
  fault-red: "#ff6b6b"
  point-green: "#6fdc8c"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(64px, 13vw, 190px)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 70, 'wght' 800"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(40px, 8vw, 88px)"
    fontWeight: 700
    lineHeight: 1.05
    fontVariation: "'wdth' 88, 'wght' 700"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(24px, 3vw, 40px)"
    fontWeight: 700
    lineHeight: 1.05
    fontVariation: "'wdth' 88, 'wght' 700"
  statement:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(28px, 4.6vw, 72px)"
    fontWeight: 350
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80, 'wght' 350"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(17px, 2vw, 20px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  image: "8px"
  tile: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 72px)"
  section: "clamp(56px, 10vh, 120px)"
  row: "28px"
components:
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-pill-hover:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.court-black}"
  service-tile:
    backgroundColor: "{colors.scoreboard-panel}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.tile}"
    padding: "28px"
  work-row:
    textColor: "{colors.chalk}"
    typography: "{typography.title}"
    padding: "28px 0"
  work-row-hover:
    textColor: "{colors.signal-blue}"
---

# Design System: Ahmad Zaeni Mubarok — Portfolio

## 1. Overview

**Creative North Star: "The Live Scoreboard"**

A dark hall, one board lit up. The system borrows the logic of a tournament scoreboard: heavy, condensed numerals readable from across the room, a near-black field, and a single electric signal color. Type is the main character. Archivo's width and weight axes are animated so letters behave like a board updating, not like decoration. This echoes the work itself (Skor Cast, Badminton Fun Match): the score is the hero, chrome is minimal.

Density is low and pacing is deliberate. Each fold carries one dominant idea (the name, the work list, the statement, the services). Small mono labels carry metadata; everything else is big type or imagery. Motion is part of the identity but always has a calm path: a visible motion toggle and a reduced-motion fallback.

The system explicitly rejects a **generic SaaS template** (gradient hero, identical icon-heading-text cards) and the **template dev portfolio** (terminal-green hacker styling, "Hi, I'm…" with avatar and skill bars).

**Key Characteristics:**
- Near-black field with one blue signal, used rarely.
- Variable-width Archivo at extreme settings for display; Geist Mono for small metadata.
- Flat: depth from tonal surfaces and 1px hairlines, never shadows.
- Pill-shaped controls, 4px tiles, 8px media.
- Kinetic type, custom cursor with labels ("Look", "View", "Open"), and a marquee.

## 2. Colors

A restrained palette: a tinted near-black, a warm chalk ink, and one accent.

### Primary
- **Signal Blue** (#7fa8ff): The only chromatic accent. The second line of the hero name, hover color on work and service titles, italic emphasis in the statement, focus rings. On-accent text is Court Black (#111010).

### Neutral
- **Court Black** (#111010): Page background and text on inverted (chalk) buttons.
- **Scoreboard Panel** (#1a1918): Raised surfaces: service tiles, the fullscreen menu.
- **Chalk** (#edeae4): Primary text and inverted-hover fills.
- **Chalk Muted** (#b9b4ac): Intro and descriptive body copy.
- **Chalk Subtle** (#a8a39b): Header meta.
- **Chalk Label** (#8f8a82): Mono eyebrow labels.
- **Chalk Faint** (#928d85): Index numbers and years. 5.8:1 on Court Black and 5.3:1 on Scoreboard Panel.
- **Hairline** (chalk at 12% opacity) and **Outline** (chalk at 25%): dividers and control borders.

### Status
- **Fault Red** (#ff6b6b), **Point Green** (#6fdc8c): Reserved for state feedback (errors, success); never decorative.

### Named Rules
**The One Signal Rule.** Signal Blue covers well under 10% of any screen. Its rarity is what makes it read as a live signal.
**The Chalk Not Cream Rule.** Neutrals stay near-black and chalk. Never shift the field toward beige, paper, or sand.

## 3. Typography

**Display / Body Font:** Archivo (variable: wdth 62–125, wght 100–900), sans-serif fallback
**Label / Mono Font:** Geist Mono

**Character:** A single variable sans stretched to extremes (condensed black for display, wide light for italics) paired with a small, quiet mono. The contrast comes from the width axis and scale, not from a second display face.

### Hierarchy
- **Display** (800, wdth 70, clamp 64–190px, line-height 0.86, -0.02em): The hero name, set letter-by-letter as kinetic type.
- **Headline** (700, wdth 88, clamp 40–88px, 1.05): Fullscreen menu items.
- **Title** (700, wdth 88, clamp 24–40px, 1.05): Work row names, service titles.
- **Statement** (350, wdth 80, clamp 28–72px, 1.08, -0.02em, max 24ch): The manifesto line; `em` switches to wide light italic in Signal Blue.
- **Body** (400, 17–20px, 1.55, max 34ch in hero): Intro and descriptions. Cap prose at 65–75ch elsewhere.
- **Label** (Geist Mono 500, 12px, 0.08em, uppercase): Header, metadata, buttons, years.

### Named Rules
**The Axis Is The Style Rule.** Hierarchy comes from width and weight variation of Archivo, not from adding fonts.
**The Label Budget Rule.** Uppercase tracked mono is for short metadata and controls. It is not a section-heading scaffold.

## 4. Elevation

Flat by default. There are no box-shadows in the system. Depth comes from tonal steps (Court Black to Scoreboard Panel), 1px hairlines, and overlays (the fullscreen menu covers the page). The header uses `mix-blend-mode: difference` so it stays legible over any content instead of getting a backing plate.

### Named Rules
**The No-Shadow Rule.** If a surface needs separating, use a hairline or a tonal step. Shadows and glass blur are prohibited.

## 5. Components

### Buttons
- **Shape:** Full pill (999px), 1px Outline border, transparent fill.
- **Default:** Mono 12px uppercase, 0.06em tracking, padding 16px 24px, trailing arrow (→). Paired with a quiet underlined text link ("Start a project") for the contact path.
- **Hover:** Fill inverts to Chalk with Court Black text over 0.35s ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Focus:** 2px Signal Blue outline, 3px offset.

### Work rows
- **Style:** Grid of index, name, year with a 1px hairline above; last row also closes below. Title type, 28px vertical padding.
- **Hover:** Name turns Signal Blue and the row nudges 12px right. A paired media frame shows the project poster and caption.

### Service tiles
- **Shape:** 4px corners, 1px hairline border, Scoreboard Panel fill, 28px padding, min-height 240px, two columns from 760px.
- **Hover:** Title turns Signal Blue; a fill layer and arrow animate in. Cursor label "Open".

### Navigation
- **Header:** Fixed, blend-difference, mono 12px uppercase logo, meta (from 700px), a Motion toggle, and a 44px-tall pill Menu button that inverts on hover and reads "Close" while the menu is open. It sits above the menu overlay.
- **Menu:** Fullscreen Scoreboard Panel overlay, items in Headline type, fade in 0.5s.

### Marquee
- **Style:** Hairline top and bottom, a 36s linear loop of keywords separated by small diamonds. Stops when motion is off.

### Cursor and motion controls
- **Custom cursor:** Labeled by `data-cursor` ("Look", "View", "Open"); has a dark tone for light-on-dark swaps.
- **Motion toggle:** A small pill that pauses motion; `data-motion="off"` and `prefers-reduced-motion` disable reveals and marquee.

## 6. Do's and Don'ts

### Do:
- **Do** keep the field Court Black (#111010) and let Signal Blue (#7fa8ff) appear on one or two elements per screen.
- **Do** build hierarchy with Archivo's width and weight axes before reaching for size or a new font.
- **Do** separate content with 1px hairlines and tonal panels.
- **Do** ease with exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) and give every animation a reduced-motion path.
- **Do** keep body copy at 4.5:1 or better against Court Black; use Chalk Muted or lighter for reading text.
- **Do** keep the path to contact short on every page.

### Don't:
- **Don't** make a generic SaaS template: no gradient hero, no identical icon-heading-text card grids.
- **Don't** make a template dev portfolio: no terminal-green hacker styling, no "Hi, I'm…" with avatar, no skill bars.
- **Don't** use shadows, glassmorphism, or gradient text.
- **Don't** use `border-left` or `border-right` over 1px as a colored accent stripe.
- **Don't** put a tiny uppercase tracked eyebrow above every section heading, or number every section by reflex.
- **Don't** let display type exceed its container; test the hero name at every breakpoint.
- **Don't** tint the field toward cream, sand, or paper.
- **Don't** gate content visibility on a reveal transition; content must be visible by default.
