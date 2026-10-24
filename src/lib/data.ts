// ============================================================
// SATU-SATU TEMPAT UBAH KONTEN. Ganti isi di sini, layout ikut.
// Konten di bawah masih PLACEHOLDER memakai data proyék nyatamu.
// ============================================================

export const site = {
  name: "Ahmad Zaeni Mubarok",
  shortName: "Ahmad Zaeni",
  role: "Full-stack developer",
  location: "Indonesia",
  year: "©2026",
  tagline:
    "I build web and live-scoring products with a lot of motion in them. Tournaments, small teams and fellow builders, mostly.",
  scrollHint: "↓ Scroll, gently",
  cta: "See the work",
  email: "halo@ahmadzaeni.id", // placeholder
  linkedin: "https://www.linkedin.com/", // placeholder
  github: "https://github.com/ahmadzaenimubarok",
}

export const marqueeItems = [
  "Design",
  "Build",
  "Motion",
  "Laravel",
  "Next.js",
  "AI Agents",
  "Live Scoring",
]

export type WorkItem = {
  slug: string
  title: string
  year: string
  role: string
  platform: string
  summary: string
  details: string[]
  numbers: { value: string; label: string }[]
  // To use a real screenshot or clip, drop the file in public/work/ and set
  // `src` (e.g. "/work/skor-cast.png"). Without `src` the SVG placeholder shows.
  // The home frame is 4:5 and crops with object-fit: cover, anchored to the top.
  media: {
    kind: "poster" | "video"
    label: string
    src?: string
    poster?: string
    alt?: string
  }[]
}

export const work: WorkItem[] = [
  {
    slug: "skor-cast",
    title: "Skor Cast",
    year: "2026",
    role: "Designer / Developer",
    platform: "Laravel + Livewire",
    summary:
      "A public badminton scoring app built around one idea: the score is the hero. Big, readable from far, minimal chrome.",
    details: [
      "Mobile-first live scoreboard for badminton tournaments.",
      "BWF rules engine: 3x15 and 21-point formats, cap switching mid-game.",
      "Public tournament pages with live status — no login to watch.",
    ],
    numbers: [
      { value: "2", label: "Point formats (15 & 21)" },
      { value: "Live", label: "Scoreboard, public-facing" },
      { value: "0", label: "Clicks to start a match" },
    ],
    media: [{ kind: "poster", label: "Skor Cast live scoreboard" }],
  },
  {
    slug: "badminton-fun-match",
    title: "Badminton Fun Match",
    year: "2026",
    role: "Developer",
    platform: "Laravel + Livewire",
    summary:
      "A friendly match-day scoreboard: check-in, random draw, and a big board the whole hall can read.",
    details: [
      "Draw management and player check-in for casual tournaments.",
      "Large-format scoreboard tuned for projectors.",
      "Works on a single server with zero JS build steps.",
    ],
    numbers: [
      { value: "1", label: "Server, full stack" },
      { value: "Fast", label: "Live draw to first match" },
    ],
    media: [{ kind: "poster", label: "Fun Match hall board" }],
  },
  {
    slug: "kos-kas",
    title: "Kas Dapur Kos",
    year: "2025",
    role: "Developer",
    platform: "Google Sheets + Agents",
    summary:
      "A shared-kitchen ledger for a boarding house: dues, shopping categories, and auto-transcribed recipes.",
    details: [
      "Monthly dues tracking across residents.",
      "Grocery categorisation: Beras, Bumbu, Lauk, Darurat.",
      "Cookpad links scraped and filed into a structured recipe tab.",
    ],
    numbers: [
      { value: "4", label: "Spending categories" },
      { value: "Auto", label: "Recipe ingestion" },
    ],
    media: [{ kind: "poster", label: "Kitchen ledger sheet" }],
  },
  {
    slug: "docs-skorcast",
    title: "Skor Cast Docs",
    year: "2026",
    role: "Developer",
    platform: "MkDocs + AI agents",
    summary:
      "Agentic documentation: every code change writes its own doc, synced and committed automatically.",
    details: [
      "Docs as a mirror of the codebase, kept honest by the agent.",
      "Change-why annotations on every scored feature.",
      "MkDocs Material, versioned alongside the app.",
    ],
    numbers: [
      { value: "1:1", label: "Docs-to-code sync" },
      { value: "0", label: "Manual doc edits" },
    ],
    media: [{ kind: "poster", label: "Docs pipeline" }],
  },
  {
    slug: "this-site",
    title: "This Site",
    year: "2026",
    role: "Designer / Developer",
    platform: "Next.js",
    summary:
      "My own portfolio, built around one idea: a single variable font that reacts to the cursor, the scroll and every change of page.",
    details: [
      "Kinetic type driven by font-variation-settings.",
      "One self-hosted variable font family.",
      "Static data, zero external tracking.",
    ],
    numbers: [
      { value: "1", label: "Variable font family" },
      { value: "0", label: "Third-party scripts" },
      { value: "∞", label: "Width axis, 62–125%" },
    ],
    media: [{ kind: "poster", label: "This site" }],
  },
]

export type Service = {
  slug: string
  num: string
  title: string
  blurb: string
  includes: string[]
  related: string[]
}

export const services: Service[] = [
  {
    slug: "websites",
    num: "01",
    title: "Websites",
    blurb: "Marketing sites and portfolios, designed and built with motion baked in.",
    includes: ["UI & UX design", "Next.js build", "CMS setup", "Launch"],
    related: ["this-site"],
  },
  {
    slug: "live-scoreboards",
    num: "02",
    title: "Live Scoring",
    blurb: "Real-time sports scoring apps, from rules engine to the big screen.",
    includes: ["Rules engine", "Live UI", "Public pages", "Tournament ops"],
    related: ["skor-cast", "badminton-fun-match"],
  },
  {
    slug: "web-apps",
    num: "03",
    title: "Web Apps",
    blurb: "Practical internal tools and products: ledgers, trackers, dashboards.",
    includes: ["Laravel / Livewire", "Data modelling", "Automation", "Ops"],
    related: ["kos-kas"],
  },
  {
    slug: "ai-agents",
    num: "04",
    title: "AI Agents",
    blurb: "Agents that do real work: docs, scoring, data — wired into your stack.",
    includes: ["Agent design", "Tool wiring", "Doc automation", "Maintenance"],
    related: ["docs-skorcast"],
  },
]

export const statement =
  "I don't chase the last framework. I build the thing that lasts — readable from a distance, fast on a phone, and mine to run."

export const about = {
  intro:
    "Ahmad is a full-stack developer building live-scoring products, web apps, and the agents that keep them honest.",
  facts: [
    { k: "Toolkit", v: "Laravel, Next.js, Livewire, AI agents" },
    { k: "How it goes", v: "Chat, Plan, Build & ship" },
    { k: "Focus", v: "Live sports scoring, internal tools" },
    { k: "Based in", v: "Indonesia, working anywhere" },
  ],
  bio: [
    "I started by making scoreboards for badminton halls — the kind you read from the back row. That became Skor Cast, a public scoring app with tournament pages anyone can watch.",
    "Now I build around it: the docs that write themselves, the kitchen ledger that runs a boarding house, and the agent that keeps all of it in check.",
  ],
}

export const contact = {
  heading: "Got something in mind?",
  intro:
    "Tell me about the score, the site or the system — and the budget you're working with.",
  budget: ["Under $2k", "$2k–5k", "$5k–15k", "$15k+", "Not sure yet"],
  types: ["A website", "A live scoreboard", "A web app", "An agent", "Something else"],
}
