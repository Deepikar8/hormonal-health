# 🧬 Hormonal Health

**Evidence-based, plain-language guides to hormonal health across all life stages — for both men and women.**

Live site: [web-alpha-lac-58.vercel.app](https://web-alpha-lac-58.vercel.app)

---

## What this is

This is a personal learning project built with AI (Claude) as a research and coding partner. It started as an attempt to understand perimenopause — and grew into a full reference covering hormonal health across the human lifespan, for both sexes.

The goal: make the research accessible. Medical literature exists, but it's scattered, jargon-heavy, and rarely connected across systems. This site synthesises it into plain language, with every claim sourced to peer-reviewed research or clinical guidelines.

---

## What's covered

### Female track
- **Puberty** — how the HPO axis activates and what changes
- **Reproductive years** — the monthly hormone cycle, PCOS, endometriosis, PMDD
- **Perimenopause** (deep dive) — all 10 symptom clusters, staging timeline, evidence-rated treatments, lab guide
- **Post-menopause** — new hormonal baseline, long-term cardiovascular, bone, and metabolic risks

### Male track
- **Puberty** — testosterone surge and masculinisation
- **Peak years** — testosterone peaks at ~20, lifestyle factors from late 20s
- **Andropause** — gradual testosterone decline, late-onset hypogonadism, symptoms, labs, treatments
- **Older age** — sarcopenia, bone health, cardiovascular risk

### Reference sections
- **14 hormones explained** — estrogen, progesterone, testosterone, cortisol, insulin, thyroid, GH, and more
- **Hormone map** — visual diagram of the HPO axis, HPA stress axis, and metabolic web
- **Disease risk connections** — how hormonal shifts become long-term health risks
- **Hormone comparison** — same hormones, different roles in each sex

---

## Why I built this

I wanted to understand what was happening in my own body — and I couldn't find a single resource that explained it clearly, completely, and honestly. So I used AI as a learning partner to research, synthesise, and build this.

The process was as valuable as the output. Using Claude to interrogate the research, pressure-test explanations, and build the site forced a depth of engagement that reading articles alone never would have.

This is what I think GenAI is genuinely good at: **accelerating personal learning in domains where the knowledge exists but isn't accessible.**

---

## Data sources

All content is based on publicly available research and clinical guidelines:

- [NAMS 2022 Hormone Therapy Position Statement](https://www.menopause.org/docs/default-source/professional/nams-2022-hormone-therapy-position-statement.pdf)
- [STRAW+10 Staging System](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3270049/)
- [SWAN Study](https://swanstudy.org/) — Study of Women's Health Across the Nation
- [Endocrine Society Clinical Guidelines](https://www.endocrine.org/clinical-practice-guidelines)
- Primary research papers (Freeman 2006, Greendale 2009, Avis 2015, Hodis & Mack 2022, and others — full list at `/sources`)

---

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (hosting)
- Built with [Claude](https://claude.ai/) (research synthesis + code)

---

## Running locally

```bash
git clone https://github.com/Deepikar8/hormonal-health.git
cd hormonal-health
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── life-stages/              # Side-by-side timeline (both sexes)
│   ├── female/
│   │   ├── page.tsx              # Female hub
│   │   └── perimenopause/        # Perimenopause hub (links to deep dives)
│   ├── male/
│   │   ├── page.tsx              # Male hub
│   │   └── andropause/           # Andropause deep dive
│   ├── hormones/
│   │   ├── page.tsx              # 14 hormones reference
│   │   └── map/                  # Hormone connection map
│   ├── symptoms/                 # 10 perimenopause symptom clusters
│   ├── timeline/                 # Perimenopause staging timeline
│   ├── what-helps/               # Evidence-rated treatments
│   ├── labs/                     # Lab guide
│   └── sources/                  # All citations
├── components/
│   ├── Nav.tsx
│   └── Footer.tsx
└── data/
    ├── symptoms.ts
    ├── hormones.ts
    ├── interventions.ts
    ├── timeline.ts
    ├── life-stages.ts            # Both-sex life stage data
    ├── male.ts                   # Male hormonal health data
    └── sources.ts
```

---

## Disclaimer

This site is for educational purposes only. Nothing here is medical advice. All treatment decisions should be made with a qualified healthcare provider who knows your personal history.

---

Built by [Deepika Rudra Murthy](https://www.linkedin.com/in/deepika-rudra-murthy/)
