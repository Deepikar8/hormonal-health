export interface Source {
  id: string
  title: string
  authors?: string
  journal?: string
  year: number
  description: string
  url: string
  type: 'guideline' | 'study' | 'rct' | 'review' | 'registry'
}

// All DOI links use doi.org which reliably redirects to the paper.
// PubMed links use PMID where confirmed.
// Organisation links go to the relevant page, not a generated URL.

export const sources: Source[] = [
  {
    id: "NAMS2022",
    title: "The 2022 Hormone Therapy Position Statement of The North American Menopause Society",
    journal: "Menopause",
    year: 2022,
    description: "The primary clinical guideline for hormone therapy in menopause. Updates the risk-benefit evidence and recommends individualised decision-making.",
    url: "https://doi.org/10.1097/GME.0000000000002028",
    type: "guideline",
  },
  {
    id: "NAMS2023nonhormone",
    title: "The 2023 Nonhormone Therapy Position Statement of The North American Menopause Society",
    journal: "Menopause",
    year: 2023,
    description: "Evidence review of non-hormonal treatments for vasomotor symptoms — including fezolinetant, SSRIs, gabapentin, CBT, and others.",
    url: "https://doi.org/10.1097/GME.0000000000002200",
    type: "guideline",
  },
  {
    id: "STRAW10",
    title: "Executive Summary of the Stages of Reproductive Aging Workshop + 10",
    authors: "Harlow SD et al.",
    journal: "Menopause",
    year: 2012,
    description: "Defines the international staging system for reproductive ageing (STRAW+10). The foundation for how perimenopause is clinically classified.",
    url: "https://doi.org/10.1097/gme.0b013e31824d8f40",
    type: "guideline",
  },
  {
    id: "SWAN",
    title: "Study of Women's Health Across the Nation (SWAN)",
    year: 2000,
    description: "26-year longitudinal study of 3,000+ multiethnic women through the menopause transition. The most comprehensive source of data on symptom timing, duration, and variation.",
    url: "https://www.swanstudy.org/",
    type: "study",
  },
  {
    id: "Avis2015",
    title: "Duration of Menopausal Vasomotor Symptoms over the Menopause Transition",
    authors: "Avis NE et al. (SWAN)",
    journal: "JAMA Internal Medicine",
    year: 2015,
    description: "Identified four distinct hot flash trajectory groups. Average duration 7.4 years; 1 in 4 women experience symptoms starting 11+ years before their final period.",
    url: "https://doi.org/10.1001/jamainternmed.2014.8063",
    type: "study",
  },
  {
    id: "Freeman2006",
    title: "Associations of Hormones and Menopausal Status with Depressed Mood in Women with No History of Depression",
    authors: "Freeman EW et al.",
    journal: "Archives of General Psychiatry",
    year: 2006,
    description: "Showed that the perimenopause transition — not postmenopause — is the highest-risk period for new onset depression. Risk is 2–4× higher than reproductive years.",
    url: "https://doi.org/10.1001/archpsyc.63.4.375",
    type: "study",
  },
  {
    id: "Bromberger2011",
    title: "Mood and Menopause: Findings from SWAN over Ten Years",
    authors: "Bromberger JT, Kravitz HM",
    journal: "Obstetrics and Gynecology Clinics of North America",
    year: 2011,
    description: "10-year SWAN mood findings. Late perimenopause confirmed as the critical window for mood vulnerability.",
    url: "https://doi.org/10.1016/j.ogc.2011.05.011",
    type: "study",
  },
  {
    id: "Maki2023",
    title: "Guidelines for the Evaluation and Treatment of Perimenopausal Cognitive Complaints",
    authors: "Maki PM et al.",
    journal: "Menopause",
    year: 2023,
    description: "NAMS expert panel guidelines on cognitive symptoms. Confirms cognitive complaints are common and real, recommends assessment pathway, and addresses the evidence on HRT and cognition.",
    url: "https://doi.org/10.1097/GME.0000000000002080",
    type: "guideline",
  },
  {
    id: "Greendale2009",
    title: "Effects of the Menopause Transition and Hormone Use on Cognitive Performance in Midlife Women",
    authors: "Greendale GA et al. (SWAN)",
    journal: "Neurology",
    year: 2009,
    description: "SWAN cognitive substudy. Demonstrated objective declines in memory and processing speed during the transition, with improvement post-menopause for most women.",
    url: "https://doi.org/10.1212/WNL.0b013e3181a71193",
    type: "study",
  },
  {
    id: "Portman2014",
    title: "Genitourinary Syndrome of Menopause: New Terminology from ISSWSH and NAMS",
    authors: "Portman DJ, Gass ML",
    journal: "Menopause",
    year: 2014,
    description: "Introduced the term GSM (Genitourinary Syndrome of Menopause) to replace 'vulvovaginal atrophy'. Emphasises that this condition is progressive and does not self-resolve.",
    url: "https://doi.org/10.1097/GME.0000000000000329",
    type: "guideline",
  },
  {
    id: "Eastell2019",
    title: "Pharmacological Management of Osteoporosis in Postmenopausal Women: Endocrine Society Clinical Practice Guideline",
    authors: "Eastell R et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: 2019,
    description: "Clinical practice guideline covering DEXA, bisphosphonates, denosumab, and other bone-protective strategies.",
    url: "https://doi.org/10.1210/jc.2019-00221",
    type: "guideline",
  },
  {
    id: "Hodis2022",
    title: "Menopausal Hormone Replacement Therapy and Reduction of All-Cause Mortality and Cardiovascular Disease: It's About Time and Timing",
    authors: "Hodis HN, Mack WJ",
    journal: "Cancer Journal",
    year: 2022,
    description: "Comprehensive review of the timing hypothesis. HRT started in perimenopause or within 10 years of menopause has different cardiovascular outcomes than HRT started late.",
    url: "https://doi.org/10.1097/PPO.0000000000000591",
    type: "review",
  },
  {
    id: "WHI2002",
    title: "Risks and Benefits of Estrogen Plus Progestin in Healthy Postmenopausal Women (Women's Health Initiative)",
    authors: "Rossouw JE et al.",
    journal: "JAMA",
    year: 2002,
    description: "The landmark (and frequently misapplied) WHI trial. Enrolled women averaging age 63 — mostly well past menopause. Results were incorrectly generalised to perimenopausal women.",
    url: "https://doi.org/10.1001/jama.288.3.321",
    type: "rct",
  },
  {
    id: "Davis2019",
    title: "Global Consensus Position Statement on the Use of Testosterone Therapy for Women",
    authors: "Davis SR et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: 2019,
    description: "International consensus on testosterone use in women — covers evidence for libido, sexual function, and notes gaps in evidence for other symptoms.",
    url: "https://doi.org/10.1210/jc.2019-01603",
    type: "guideline",
  },
  {
    id: "Baker2017",
    title: "Estrogen-Gut Microbiome Axis: Physiological and Clinical Implications",
    authors: "Baker JM et al.",
    journal: "Maturitas",
    year: 2017,
    description: "Describes the estrobolome — how gut bacteria regulate circulating estrogen via beta-glucuronidase activity. Dysbiosis can lower estrogen and amplify perimenopausal symptoms.",
    url: "https://doi.org/10.1016/j.maturitas.2017.06.025",
    type: "review",
  },
  {
    id: "Johnson2023",
    title: "Fezolinetant for Vasomotor Symptoms Associated with Menopause (SKYLIGHT 4)",
    authors: "Johnson KA et al.",
    journal: "New England Journal of Medicine",
    year: 2023,
    description: "Phase 3 RCT of fezolinetant (NK3 receptor antagonist). Non-hormonal treatment FDA-approved in 2023 with strong efficacy for hot flashes and night sweats.",
    url: "https://doi.org/10.1056/NEJMoa2301224",
    type: "rct",
  },
  {
    id: "AHRQ2015",
    title: "Menopausal Symptoms: Comparative Effectiveness of Therapies",
    authors: "Agency for Healthcare Research and Quality",
    year: 2015,
    description: "Systematic review of 283 trials covering vasomotor symptoms, sleep, mood, sexual function, and urogenital atrophy. The most comprehensive evidence synthesis available.",
    url: "https://effectivehealthcare.ahrq.gov/products/menopause/research",
    type: "review",
  },
  {
    id: "Rance2010",
    title: "Neurokinin B Signalling and the Menopausal Syndrome",
    authors: "Rance NE et al.",
    journal: "Maturitas",
    year: 2010,
    description: "Explains the KNDy neuron hypothesis — how neurokinin B signalling in the hypothalamus drives hot flashes after estrogen withdrawal.",
    url: "https://doi.org/10.1016/j.maturitas.2010.03.024",
    type: "review",
  },
]

export const sourcesByType = {
  guideline: sources.filter(s => s.type === "guideline"),
  study: sources.filter(s => s.type === "study"),
  rct: sources.filter(s => s.type === "rct"),
  review: sources.filter(s => s.type === "review"),
}

export const typeLabels: Record<string, string> = {
  guideline: "Clinical Guideline",
  study: "Longitudinal Study",
  rct: "Randomised Trial",
  review: "Systematic Review",
  registry: "Registry",
}
