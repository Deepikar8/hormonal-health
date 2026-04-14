export interface LifeStage {
  id: string
  name: string
  ageRange: string
  emoji: string
  color: string
  borderColor: string
  textColor: string
  tagColor: string
  headline: string
  description: string
  keyHormones: string[]
  keyChanges: string[]
  watchFor: string[]
  href?: string
}

export const femaleStages: LifeStage[] = [
  {
    id: "female-childhood",
    name: "Childhood",
    ageRange: "0–9",
    emoji: "🌱",
    color: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-900",
    tagColor: "bg-green-100 text-green-800",
    headline: "Low, stable hormones",
    description:
      "Sex hormones remain very low throughout childhood. The hypothalamic-pituitary axis is suppressed — the reproductive system is present but not yet active. Growth hormone and thyroid hormones drive development.",
    keyHormones: ["Growth hormone (GH)", "IGF-1", "Thyroid hormones", "Cortisol"],
    keyChanges: [
      "Rapid physical growth driven by GH and IGF-1",
      "Brain development heavily dependent on thyroid hormones",
      "Adrenal glands begin producing small amounts of androgens from around age 6–8 (adrenarche)",
    ],
    watchFor: [
      "Early or delayed puberty (precocious puberty before age 8)",
      "Growth hormone deficiency affecting height and body composition",
      "Congenital hypothyroidism — if missed, impacts neurological development",
    ],
  },
  {
    id: "female-puberty",
    name: "Puberty",
    ageRange: "9–16",
    emoji: "🌸",
    color: "bg-pink-50",
    borderColor: "border-pink-200",
    textColor: "text-pink-900",
    tagColor: "bg-pink-100 text-pink-800",
    headline: "Estrogen and progesterone switch on",
    description:
      "The hypothalamus awakens from its childhood suppression and begins pulsing GnRH, triggering the pituitary to release FSH and LH. The ovaries respond with estrogen, then progesterone once cycles are established. This activates the full reproductive system.",
    keyHormones: ["GnRH (hypothalamus)", "FSH & LH (pituitary)", "Estradiol", "Progesterone", "Testosterone (rising)"],
    keyChanges: [
      "Breast development, pubic hair, growth spurt (driven by estrogen and GH)",
      "First period (menarche) — average age 12, range 9–15",
      "Cycles often irregular for 2–3 years as the HPO axis matures",
      "Acne, oiliness — driven by rising androgens (testosterone, DHEA)",
      "Brain changes: emotional sensitivity, reward-seeking — dopamine and serotonin remodelled by estrogen",
    ],
    watchFor: [
      "Irregular periods persisting beyond 3 years post-menarche (may signal PCOS or hypothyroidism)",
      "Absence of periods by age 15 (primary amenorrhoea)",
      "Severe mood disruption — PMDD can emerge at first ovulatory cycles",
      "Acne unresponsive to topical treatment (consider androgen excess)",
    ],
  },
  {
    id: "female-reproductive",
    name: "Reproductive Years",
    ageRange: "17–39",
    emoji: "🌺",
    color: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-900",
    tagColor: "bg-rose-100 text-rose-800",
    headline: "Cyclical fluctuation — estrogen peaks and troughs monthly",
    description:
      "The HPO axis runs a monthly cycle: estrogen rises in the follicular phase, peaks at ovulation (triggering the LH surge), then progesterone rises in the luteal phase. This cycle affects mood, energy, cognition, appetite, and sleep in ways that are often unrecognised.",
    keyHormones: ["Estradiol (cyclical)", "Progesterone (luteal phase)", "Testosterone (stable, low)", "FSH & LH (cyclical)", "AMH (slowly declining from ~30)"],
    keyChanges: [
      "Monthly cycle: follicular (estrogen ↑) → ovulation → luteal (progesterone ↑) → menstruation",
      "Premenstrual symptoms (PMS/PMDD) driven by progesterone withdrawal and estrogen fluctuation",
      "Fertility peaks in mid-20s; egg quality and quantity begin declining from ~32",
      "AMH begins falling — the first measurable sign of ovarian ageing",
      "Pregnancy: dramatic hormonal surges, then postpartum crash (hCG, progesterone, prolactin)",
    ],
    watchFor: [
      "PCOS — androgen excess, insulin resistance, irregular cycles affecting ~10% of women",
      "Endometriosis — estrogen-driven tissue growth outside the uterus",
      "PMDD — severe luteal-phase mood disruption, distinct from normal PMS",
      "Postpartum depression — progesterone and estrogen crash after delivery",
      "Thyroid disorders — peak incidence during and after pregnancy",
    ],
  },
  {
    id: "female-perimenopause",
    name: "Perimenopause",
    ageRange: "40–55",
    emoji: "🍂",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-900",
    tagColor: "bg-amber-100 text-amber-800",
    headline: "Erratic fluctuation, then decline — all axes destabilised",
    description:
      "The ovarian follicle pool depletes. Estrogen and progesterone no longer follow a predictable cycle — they surge and crash unpredictably. The HPO, HPA, and metabolic axes all destabilise simultaneously. This is the most complex and most under-recognised hormonal transition.",
    keyHormones: ["Estradiol (erratic, then declining)", "Progesterone (first to fall)", "FSH (rising)", "LH (rising)", "AMH (very low → undetectable)", "Cortisol (dysregulated)", "Insulin (resistance rising)"],
    keyChanges: [
      "Hot flashes, night sweats — hypothalamic thermoregulation disrupted by LH surges",
      "Sleep disruption — progesterone loss, night sweats, cortisol dysregulation",
      "Mood changes, anxiety — loss of progesterone's GABA-A calming effect",
      "Cognitive changes — estrogen's role in serotonin and memory pathways",
      "Cycle changes — shorter cycles, then longer, then skipped",
      "Metabolic shift — insulin resistance, visceral fat, cholesterol changes",
    ],
    watchFor: [
      "Bone density baseline (DXA scan)",
      "Cardiovascular risk markers (lipids, blood pressure, fasting glucose)",
      "Thyroid — autoimmune thyroid disease peaks at this stage",
      "Early dismissal by clinicians — average delay to diagnosis is 3+ years",
    ],
    href: "/female/perimenopause",
  },
  {
    id: "female-postmenopause",
    name: "Post-menopause",
    ageRange: "55+",
    emoji: "🌾",
    color: "bg-stone-50",
    borderColor: "border-stone-200",
    textColor: "text-stone-800",
    tagColor: "bg-stone-100 text-stone-700",
    headline: "New hormonal baseline — adrenal and metabolic health central",
    description:
      "12 months after the last period, menopause is confirmed. Estrogen and progesterone are now consistently low. The adrenal glands and fat tissue become the primary source of sex hormones (via DHEA → estrone conversion). Metabolic, cardiovascular, and skeletal health become the central priorities.",
    keyHormones: ["Estrone (adrenal/fat-derived)", "DHEA (adrenal)", "Testosterone (low, stable)", "FSH & LH (elevated, stable)", "Cortisol", "Insulin", "Thyroid"],
    keyChanges: [
      "Vasomotor symptoms (hot flashes) may persist for 7–10+ years in many women",
      "Bone loss accelerates for 5–7 years post-menopause",
      "Cardiovascular risk rises sharply — LDL rises, HDL falls, arteries stiffen",
      "Genitourinary syndrome: vaginal atrophy, urinary urgency, recurrent UTIs",
      "Cognitive changes — brain adapts to new lower estrogen baseline",
      "Metabolic syndrome risk peaks — insulin resistance, visceral fat, lipid changes",
    ],
    watchFor: [
      "Osteoporosis — bone density monitoring essential",
      "Cardiovascular disease — now the leading cause of death in post-menopausal women",
      "Metabolic syndrome and type 2 diabetes",
      "Urogenital atrophy — often untreated and underreported",
      "Depression — distinct from pre-existing mood disorders",
    ],
  },
]

export const maleStages: LifeStage[] = [
  {
    id: "male-childhood",
    name: "Childhood",
    ageRange: "0–10",
    emoji: "🌱",
    color: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-900",
    tagColor: "bg-green-100 text-green-800",
    headline: "Low, stable hormones — growth and brain development",
    description:
      "Like females, male sex hormones remain very low through childhood. Testosterone briefly spikes in the first months of life (the 'mini-puberty'), then suppresses until true puberty. Growth hormone and thyroid hormones are the main drivers of development.",
    keyHormones: ["Growth hormone (GH)", "IGF-1", "Thyroid hormones", "Cortisol"],
    keyChanges: [
      "Brief testosterone spike in early infancy (mini-puberty) — organises the male reproductive system",
      "Rapid growth driven by GH and IGF-1",
      "Adrenarche — adrenal androgens (DHEA) rise from around age 7–8",
      "Brain organisation continues — testosterone's prenatal effects already shape neural architecture",
    ],
    watchFor: [
      "Undescended testes (cryptorchidism) — affects future fertility and testosterone production",
      "Precocious puberty before age 9",
      "Growth hormone deficiency",
      "Congenital hypogonadism",
    ],
  },
  {
    id: "male-puberty",
    name: "Puberty",
    ageRange: "10–18",
    emoji: "⚡",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-900",
    tagColor: "bg-amber-100 text-amber-800",
    headline: "Testosterone surges — the most dramatic male hormonal shift",
    description:
      "The HPG axis activates: hypothalamus pulses GnRH → pituitary releases FSH and LH → testes produce testosterone. Testosterone rises 20–30-fold from childhood levels. This drives the full masculinisation of the body and brain.",
    keyHormones: ["GnRH (hypothalamus)", "FSH & LH (pituitary)", "Testosterone (rising dramatically)", "Estradiol (converted from testosterone — essential for bone growth)", "DHT (dihydrotestosterone — drives external development)", "GH (peaks at puberty)"],
    keyChanges: [
      "Testicular growth, penile growth — driven by LH → testosterone",
      "Muscle mass, bone density surge — testosterone + GH combination",
      "Voice deepening — larynx enlargement driven by testosterone",
      "Facial and body hair — DHT-driven",
      "Sperm production begins",
      "Acne — sebaceous gland stimulation by androgens",
      "Brain changes: increased risk tolerance, reward-seeking, libido onset",
    ],
    watchFor: [
      "Delayed puberty (no testicular growth by age 14) — may indicate hypogonadism",
      "Gynaecomastia (breast tissue) — common due to estradiol spike during testosterone rise, usually resolves",
      "Varicocele — can impair testicular function and fertility",
      "Mental health — highest onset of anxiety and depression in adolescence",
    ],
  },
  {
    id: "male-prime",
    name: "Peak & Prime Years",
    ageRange: "18–40",
    emoji: "🏔️",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-900",
    tagColor: "bg-blue-100 text-blue-800",
    headline: "Testosterone peaks in early 20s, then slowly begins to decline",
    description:
      "Total testosterone peaks at around 19–20 years and stays high through the 20s. From the late 20s to mid-30s, free testosterone begins a slow decline of ~1–2% per year. Lifestyle factors — stress, sleep, metabolic health, body fat — have an increasingly large impact on hormonal status.",
    keyHormones: ["Testosterone (peak then slowly declining)", "Estradiol (balanced)", "FSH & LH (stable)", "Cortisol", "Insulin", "GH & IGF-1 (gradually declining)"],
    keyChanges: [
      "Testosterone peaks ~19–20, free testosterone begins declining from late 20s",
      "Fertility typically high but sperm quality sensitive to heat, toxins, stress, obesity",
      "GH secretion begins its lifelong decline from the mid-20s",
      "Metabolic health increasingly shaped by lifestyle — sleep, stress, diet, exercise",
      "Visceral fat accumulation (even modest) reduces testosterone via aromatase conversion to estrogen",
    ],
    watchFor: [
      "Lifestyle-driven testosterone suppression — obesity, chronic stress, sleep deprivation all lower testosterone significantly",
      "Metabolic syndrome emerging — insulin resistance, visceral fat, rising blood pressure",
      "Testicular cancer — peak incidence 25–35, most treatable when caught early",
      "Fertility decline begins — sperm DNA fragmentation increases with age and lifestyle factors",
      "Mental health — depression and suicide risk peak in young adult men, often unrecognised",
    ],
  },
  {
    id: "male-periandropause",
    name: "Andropause",
    ageRange: "40–60",
    emoji: "🍂",
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-900",
    tagColor: "bg-orange-100 text-orange-800",
    headline: "Gradual testosterone decline — subtle but cumulative",
    description:
      "Unlike female menopause, male hormonal decline is gradual — 1–2% per year in free testosterone from the mid-30s. By the mid-50s, many men have testosterone levels significantly below their peak. Late-onset hypogonadism (clinically low testosterone) affects an estimated 10–40% of men over 45. Because the decline is slow, symptoms accumulate quietly and are often attributed to ageing or stress.",
    keyHormones: ["Total testosterone (slowly declining)", "Free testosterone (declining faster — SHBG rises with age)", "Estradiol (may rise as aromatase activity increases with visceral fat)", "DHEA (declining — adrenopause)", "Cortisol (dysregulated)", "Insulin (resistance rising)", "GH & IGF-1 (continuing decline)"],
    keyChanges: [
      "Free testosterone falls faster than total — SHBG rises, binding more testosterone",
      "Energy, motivation, drive decline — testosterone's dopaminergic effects waning",
      "Muscle loss (sarcopenia) accelerates — testosterone supports protein synthesis",
      "Visceral fat increases — creates a vicious cycle (fat → more aromatase → more estrogen → less testosterone)",
      "Sleep disruption — testosterone is released in pulses during sleep; poor sleep → lower testosterone",
      "Sexual function changes — reduced libido, erectile changes (often vascular and hormonal)",
      "Mood changes — depression, irritability, reduced sense of wellbeing",
      "Cognitive changes — testosterone supports spatial memory and processing speed",
    ],
    watchFor: [
      "Late-onset hypogonadism — total testosterone <300 ng/dL (10.4 nmol/L) with symptoms",
      "Cardiovascular risk — testosterone decline correlates with increased CVD risk",
      "Bone density — osteoporosis underdiagnosed in men; testosterone supports bone",
      "Metabolic syndrome — testosterone deficiency and insulin resistance amplify each other",
      "Depression presenting as irritability, withdrawal, or anhedonia rather than sadness",
      "PSA and prostate health monitoring begins at this stage",
    ],
    href: "/male/andropause",
  },
  {
    id: "male-older",
    name: "Older Age",
    ageRange: "60+",
    emoji: "🌾",
    color: "bg-stone-50",
    borderColor: "border-stone-200",
    textColor: "text-stone-800",
    tagColor: "bg-stone-100 text-stone-700",
    headline: "Low testosterone baseline — metabolic and cardiovascular health central",
    description:
      "Testosterone levels in men over 70 average 30–50% lower than in young men. DHEA is typically 20% of peak levels. The metabolic, cardiovascular, musculoskeletal, and cognitive consequences of decades of gradual hormone decline become more apparent. Quality of life interventions — exercise, sleep, nutrition, and where appropriate testosterone therapy — become increasingly important.",
    keyHormones: ["Testosterone (low, variable)", "Estradiol (may be relatively high due to aromatase)", "DHEA (very low)", "Cortisol", "Insulin", "GH & IGF-1 (very low)", "Thyroid"],
    keyChanges: [
      "Sarcopenia — muscle loss accelerates; testosterone and GH both very low",
      "Osteoporosis — men lose bone density significantly but are rarely screened",
      "Cognitive decline — testosterone and estradiol both neuroprotective",
      "Sexual dysfunction — libido, erectile function affected by both hormonal and vascular changes",
      "Frailty risk — low testosterone, low GH, low DHEA all contribute",
      "Increased aromatase in visceral fat can cause relative estrogen excess with feminising effects",
    ],
    watchFor: [
      "Frailty syndrome — combination of muscle loss, fatigue, low activity, slow gait, weight loss",
      "Osteoporosis — often missed in men; fracture risk high",
      "Benign prostatic hyperplasia (BPH) and prostate cancer monitoring",
      "Cardiovascular disease — leading cause of death in older men",
      "Depression — underdiagnosed and undertreated in older men",
      "Thyroid dysfunction — increasingly common with age in both sexes",
    ],
  },
]

export interface HormoneComparison {
  hormone: string
  emoji: string
  female: string
  male: string
  shared: string
}

export const hormoneComparisons: HormoneComparison[] = [
  {
    hormone: "Estrogen",
    emoji: "🏛️",
    female: "Primary sex hormone. Peaks and falls cyclically. Dramatic erratic decline in perimenopause.",
    male: "Present at ~10% of female levels. Essential for bone density, libido, sperm maturation, cardiovascular health. Rises relative to testosterone in andropause (via aromatase in fat tissue).",
    shared: "Bone protection, cardiovascular health, brain function, mood regulation — in both sexes.",
  },
  {
    hormone: "Testosterone",
    emoji: "⚡",
    female: "Present at ~1/10 of male levels. Drives libido, energy, muscle, mood. Declines gradually from mid-30s. Undertested and undertreated in women.",
    male: "Primary sex hormone. Peaks at ~20, declines ~1–2%/year from late 20s. Drives muscle, bone, libido, cognition, mood, and red blood cell production.",
    shared: "Libido, energy, muscle mass, bone density, mood and sense of wellbeing — in both sexes.",
  },
  {
    hormone: "Progesterone",
    emoji: "🌙",
    female: "Cyclical — only produced after ovulation. First hormone to decline in perimenopause. Critical for sleep, anxiety, and uterine health.",
    male: "Present in small amounts. Produced by the adrenal glands and testes. Precursor to testosterone and cortisol. Less well studied in males.",
    shared: "Neuroprotective effects, modulation of GABA-A receptors, sleep quality.",
  },
  {
    hormone: "Cortisol",
    emoji: "⚠️",
    female: "Normally moderated by estrogen. Estrogen decline → cortisol dysregulation → amplified stress, visceral fat, sleep disruption.",
    male: "Normally moderated by testosterone. Testosterone decline → HPA dysregulation. Chronic stress directly suppresses testosterone production (cortisol inhibits Leydig cell function).",
    shared: "Stress response, metabolism, sleep, immune function, mood — in both sexes. Chronically elevated cortisol is damaging regardless of sex.",
  },
  {
    hormone: "Insulin",
    emoji: "🔑",
    female: "Estrogen improves insulin sensitivity. Perimenopause → insulin resistance even without dietary change. T2D risk rises sharply post-menopause.",
    male: "Testosterone improves insulin sensitivity. Testosterone decline → insulin resistance. T2D and metabolic syndrome risk rises as testosterone falls.",
    shared: "Both estrogen (female) and testosterone (male) protect insulin sensitivity. Loss of either → metabolic vulnerability.",
  },
  {
    hormone: "Growth Hormone",
    emoji: "🔧",
    female: "Declines with age; suppressed by sleep disruption in perimenopause. Accelerates sarcopenia and poor recovery.",
    male: "Declines more sharply than in women. Sleep disruption (common with testosterone decline) further suppresses GH pulses.",
    shared: "Muscle maintenance, bone density, tissue repair, cognitive function — critical in both sexes with age.",
  },
  {
    hormone: "Thyroid (T3/T4)",
    emoji: "🦋",
    female: "Autoimmune thyroid disease peaks in perimenopause. Estrogen raises TBG, altering free hormone availability.",
    male: "Thyroid dysfunction less common but increases with age. Hypothyroidism shares almost every symptom of testosterone deficiency.",
    shared: "Metabolic rate, energy, mood, cognition, weight, heart rate — in both sexes. Frequently missed in hormonal workups.",
  },
]
