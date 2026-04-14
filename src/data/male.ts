// Male hormonal health data — andropause and male hormonal aging

export interface MaleSymptom {
  id: string
  name: string
  emoji: string
  color: string
  cause: string
  description: string
  tests: string[]
  notes: string
}

export const maleSymptoms: MaleSymptom[] = [
  {
    id: "fatigue",
    name: "Fatigue & Low Energy",
    emoji: "🔋",
    color: "amber",
    cause: "Testosterone, GH, thyroid",
    description:
      "A persistent flat, switched-off feeling — not explained by lack of sleep or overwork. Testosterone drives mitochondrial energy production, dopaminergic motivation, and red blood cell count. As it falls, energy follows. This is one of the most common and most dismissed symptoms of low testosterone in men.",
    tests: ["Total testosterone (morning)", "Free testosterone", "SHBG", "Thyroid panel (TSH, free T3/T4)", "FBC (haemoglobin)", "Ferritin", "Fasting glucose / HbA1c"],
    notes: "Fatigue with low testosterone is often attributed to stress, depression, or ageing. A morning testosterone test (before 10am when levels peak) is the starting point.",
  },
  {
    id: "libido",
    name: "Low Libido & Sexual Changes",
    emoji: "💔",
    color: "rose",
    cause: "Testosterone, estradiol, prolactin, psychological",
    description:
      "Testosterone is the primary driver of male libido — desire, initiation, and sexual interest. Falling testosterone directly reduces libido. Estradiol (converted from testosterone) also plays a role in sexual function and pleasure. Prolactin elevation (from a pituitary adenoma) can suppress both testosterone and libido.",
    tests: ["Total and free testosterone", "Estradiol (E2)", "Prolactin", "LH & FSH", "PSA (if >45)"],
    notes: "Low libido and erectile dysfunction are often vascular as well as hormonal by mid-life — both need addressing. Testosterone replacement alone may not resolve ED if vascular disease is present.",
  },
  {
    id: "mood",
    name: "Mood Changes & Depression",
    emoji: "🌧️",
    color: "indigo",
    cause: "Testosterone, cortisol, thyroid",
    description:
      "Testosterone has direct effects on mood, motivation, and sense of wellbeing via dopaminergic and serotonergic pathways. Men with low testosterone are 3–4x more likely to have depression. But the presentation often differs from typical depression — it presents as irritability, emotional numbness, withdrawal, anhedonia, or loss of competitive drive rather than sadness.",
    tests: ["Total and free testosterone", "Cortisol (morning)", "Thyroid panel", "PHQ-9 (depression screen)", "GAD-7 (anxiety screen)"],
    notes: "Male depression is significantly underdiagnosed. Men are less likely to describe emotional symptoms — instead they describe losing interest in things they used to enjoy, or feeling 'flat'. Testosterone deficiency and depression can be indistinguishable without a blood test.",
  },
  {
    id: "muscle-fat",
    name: "Muscle Loss & Body Fat Changes",
    emoji: "⚖️",
    color: "orange",
    cause: "Testosterone, GH, insulin, cortisol",
    description:
      "Testosterone directly stimulates muscle protein synthesis and inhibits fat storage. As testosterone falls and visceral fat accumulates, the situation compounds: fat tissue contains the enzyme aromatase, which converts testosterone to estrogen. More fat → more aromatase → more estrogen and less testosterone → more fat. Breaking this cycle is central to male hormonal health.",
    tests: ["Total and free testosterone", "Estradiol", "SHBG", "Fasting insulin + glucose (HOMA-IR)", "Lipid panel", "Waist circumference"],
    notes: "A waist circumference >94cm (37in) in men is independently associated with low testosterone and insulin resistance. This is one of the most modifiable risk factors — visceral fat reduction significantly raises testosterone.",
  },
  {
    id: "sleep",
    name: "Sleep Disruption",
    emoji: "😴",
    color: "violet",
    cause: "Testosterone (nocturnal), cortisol, sleep apnoea",
    description:
      "Testosterone is released primarily during sleep — especially during REM sleep. Poor sleep quality directly reduces testosterone. Conversely, low testosterone increases the risk of sleep apnoea (via effects on upper airway tone and respiratory drive). Sleep apnoea then further suppresses testosterone — creating a self-reinforcing cycle.",
    tests: ["Total testosterone (morning)", "Sleep apnoea screen (Epworth Sleepiness Scale)", "Cortisol (morning + evening)", "Thyroid panel"],
    notes: "Obstructive sleep apnoea is significantly more common in men than women and is a major suppressant of testosterone. Treating sleep apnoea alone can raise testosterone meaningfully without any hormonal intervention.",
  },
  {
    id: "cognition",
    name: "Brain Fog & Cognitive Changes",
    emoji: "🧠",
    color: "blue",
    cause: "Testosterone, estradiol, thyroid, cortisol",
    description:
      "Testosterone and its conversion to estradiol in the brain support spatial memory, processing speed, working memory, and verbal fluency. Men with low testosterone perform worse on cognitive tests. Cognitive symptoms are often written off as 'stress' or 'ageing' rather than investigated hormonally.",
    tests: ["Total and free testosterone", "Estradiol", "Thyroid panel", "HbA1c (glucose impacts cognition)", "Cortisol"],
    notes: "Estradiol (not just testosterone) is important for male cognition — testosterone aromatises to estradiol in the brain. Low testosterone → low estradiol → cognitive effects.",
  },
  {
    id: "bone",
    name: "Bone Density Loss",
    emoji: "🦴",
    color: "teal",
    cause: "Testosterone, estradiol",
    description:
      "Men lose bone density with age — but this is significantly underrecognised and underscreened. Both testosterone and estradiol are essential for bone maintenance in men. Testosterone stimulates osteoblasts (bone builders). Estradiol (converted from testosterone) suppresses osteoclasts (bone reapers). When both fall, bone loss accelerates.",
    tests: ["DXA bone density scan (recommended if testosterone is low or high-risk)", "Total and free testosterone", "Estradiol", "Calcium + vitamin D", "PTH"],
    notes: "Male osteoporosis is estimated to affect 2 million men in the US alone but is rarely screened. Men who sustain hip fractures have higher mortality than women with the same fracture. Screening guidelines recommend DXA for men over 70, but earlier if testosterone deficiency is confirmed.",
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular Risk",
    emoji: "❤️",
    color: "red",
    cause: "Testosterone, insulin, cortisol, lipids",
    description:
      "Low testosterone is an independent risk factor for cardiovascular disease in men. Testosterone maintains arterial flexibility, supports healthy lipid profiles (raises HDL, lowers LDL), reduces visceral fat, and improves insulin sensitivity. When testosterone falls, all of these protective effects diminish. Men with the lowest testosterone have the highest cardiovascular mortality.",
    tests: ["Lipid panel (LDL, HDL, triglycerides)", "Fasting glucose + HbA1c", "Blood pressure", "hsCRP (inflammatory marker)", "Total and free testosterone"],
    notes: "The relationship between testosterone replacement therapy and cardiovascular risk was long debated. A large 2023 RCT (TRAVERSE trial) found testosterone therapy did not increase cardiovascular events in men with low testosterone and high cardiovascular risk.",
  },
]

export interface MaleTreatment {
  name: string
  type: "hormonal" | "lifestyle" | "supplement" | "other"
  evidence: "A" | "B" | "C"
  forSymptoms: string[]
  description: string
  notes: string
}

export const maleTreatments: MaleTreatment[] = [
  {
    name: "Testosterone Replacement Therapy (TRT)",
    type: "hormonal",
    evidence: "A",
    forSymptoms: ["fatigue", "libido", "mood", "muscle-fat", "bone", "cognition"],
    description: "Restores testosterone to mid-normal range. Available as daily gels, injections (weekly to every 10–14 weeks), patches, or pellets. Indicated for confirmed hypogonadism (low testosterone + symptoms).",
    notes: "Requires monitoring of haematocrit, PSA, estradiol, and LH/FSH. Not suitable if fertility is desired (suppresses sperm production). TRAVERSE trial (2023) confirmed safety in high cardiovascular risk men.",
  },
  {
    name: "Clomiphene Citrate (Clomid)",
    type: "hormonal",
    evidence: "B",
    forSymptoms: ["fatigue", "libido", "mood", "muscle-fat"],
    description: "Stimulates the pituitary to produce more LH and FSH, which in turn raises endogenous testosterone. Preserves fertility. Used off-label for secondary hypogonadism (where the problem is in the HPG axis, not the testes).",
    notes: "Does not suppress sperm production — preferred when fertility is a concern. Less studied than TRT but growing evidence base.",
  },
  {
    name: "Resistance Exercise",
    type: "lifestyle",
    evidence: "A",
    forSymptoms: ["fatigue", "muscle-fat", "mood", "sleep", "cardiovascular", "bone"],
    description: "The single most effective non-pharmacological intervention for testosterone levels. Compound movements (squats, deadlifts, bench press) produce the strongest acute testosterone and GH response. Consistent training over months raises baseline testosterone and GH.",
    notes: "Even 2–3 sessions per week of moderate-intensity resistance training can raise free testosterone 15–20% in hypogonadal men. Also directly addresses sarcopenia, metabolic syndrome, and mood.",
  },
  {
    name: "Sleep optimisation",
    type: "lifestyle",
    evidence: "A",
    forSymptoms: ["fatigue", "libido", "mood", "muscle-fat", "cognition"],
    description: "Testosterone is released during sleep, especially REM sleep. Even one week of sleep restriction to 5 hours per night reduces testosterone by 10–15% in young men. Sleep apnoea treatment alone can raise testosterone substantially.",
    notes: "Sleep apnoea is the most common and most reversible cause of low testosterone in men. CPAP treatment in men with OSA raises testosterone by an average of 2–3 nmol/L.",
  },
  {
    name: "Weight / visceral fat reduction",
    type: "lifestyle",
    evidence: "A",
    forSymptoms: ["fatigue", "libido", "mood", "muscle-fat", "cardiovascular"],
    description: "Visceral fat is the primary source of aromatase in men — the enzyme that converts testosterone to estrogen. A 10% reduction in body weight in obese men raises testosterone by ~25%. Diet quality (adequate protein, lower processed carbohydrates) and caloric deficit are the primary tools.",
    notes: "This is the most underutilised intervention. A waist >94cm is independently predictive of low testosterone. Weight loss raises testosterone more in obese men than TRT alone in some studies.",
  },
  {
    name: "Zinc",
    type: "supplement",
    evidence: "B",
    forSymptoms: ["fatigue", "libido", "mood"],
    description: "Zinc is essential for testosterone synthesis and LH receptor function. Deficiency — common in men with poor diets, high alcohol intake, or GI conditions — directly reduces testosterone. Supplementation raises testosterone in deficient men.",
    notes: "Most effective if zinc status is actually low. Not a blanket testosterone booster — routine supplementation in zinc-replete men has modest effect. Food sources: oysters, red meat, pumpkin seeds.",
  },
  {
    name: "Vitamin D",
    type: "supplement",
    evidence: "B",
    forSymptoms: ["fatigue", "mood", "bone"],
    description: "Vitamin D receptors are present in Leydig cells (testosterone-producing cells in the testes). Deficiency is associated with lower testosterone. Studies show supplementation raises testosterone modestly in deficient men.",
    notes: "Highly prevalent deficiency in northern latitudes. Test 25-OH vitamin D before supplementing. Target level: >75 nmol/L (30 ng/mL).",
  },
  {
    name: "Ashwagandha (KSM-66)",
    type: "supplement",
    evidence: "B",
    forSymptoms: ["fatigue", "mood", "muscle-fat", "libido"],
    description: "An adaptogen that reduces cortisol and has been shown in multiple RCTs to raise testosterone modestly (8–15%) and improve strength, recovery, and sexual function. Mechanism: cortisol suppresses testosterone production; lowering cortisol via HPA modulation allows testosterone to rise.",
    notes: "The KSM-66 extract has the best evidence. Typical dose: 300–600mg daily. Effects appear after 8–12 weeks. Well-tolerated in most studies.",
  },
]

export const maleLabs = [
  {
    test: "Total Testosterone",
    timing: "Morning (7–10am) — levels peak on waking",
    normal: "300–1000 ng/dL (10.4–34.7 nmol/L)",
    low: "<300 ng/dL (<10.4 nmol/L) with symptoms = late-onset hypogonadism",
    notes: "Always test in the morning. A single low value should be confirmed with a repeat test. Total testosterone includes both bound and free hormone.",
  },
  {
    test: "Free Testosterone",
    timing: "Same sample as total testosterone",
    normal: "5–25 ng/dL (varies by lab and age)",
    low: "More clinically relevant than total — reflects biologically active hormone. Men with high SHBG may have low free T despite normal total T.",
    notes: "Often calculated from total testosterone + SHBG. Direct measurement is less accurate. Free T is the fraction that actually enters cells and has biological effects.",
  },
  {
    test: "SHBG (Sex Hormone Binding Globulin)",
    timing: "Any time",
    normal: "10–57 nmol/L (varies with age — rises with age)",
    low: "High SHBG binds testosterone, reducing free (active) testosterone even when total is normal.",
    notes: "SHBG rises with age, liver disease, thyroid disease, and low insulin. High SHBG is a major underappreciated cause of symptomatic testosterone deficiency with normal total T.",
  },
  {
    test: "LH & FSH",
    timing: "Any time",
    normal: "LH: 1.5–9.3 IU/L; FSH: 1.6–8.0 IU/L",
    low: "Low LH/FSH with low testosterone = secondary hypogonadism (problem is in the brain/pituitary). High LH/FSH with low testosterone = primary hypogonadism (problem is in the testes).",
    notes: "Essential for distinguishing the cause of low testosterone — treatment differs based on whether the problem is central (HPG axis) or testicular.",
  },
  {
    test: "Estradiol (E2)",
    timing: "Any time",
    normal: "20–55 pg/mL (73–202 pmol/L) in men",
    low: "Elevated estradiol in men (especially >60 pg/mL) → gynaecomastia, reduced libido, mood changes. Low estradiol → bone loss risk.",
    notes: "Estradiol is essential in men — not just a 'female hormone'. Too high or too low causes problems. Particularly important when evaluating TRT (testosterone aromatises to estradiol).",
  },
  {
    test: "PSA (Prostate Specific Antigen)",
    timing: "Morning (avoid ejaculation 48h prior)",
    normal: "Age-dependent: <2.5 ng/mL at 40–49; <3.5 at 50–59; <4.5 at 60–69",
    low: "Elevated PSA does not diagnose cancer but warrants urological referral. Required before and during TRT.",
    notes: "PSA monitoring is essential before starting TRT and annually during treatment. Testosterone replacement does not cause prostate cancer but may accelerate pre-existing disease.",
  },
  {
    test: "Haematocrit / Haemoglobin",
    timing: "Any time (FBC)",
    normal: "Haematocrit: 38–50%",
    low: "TRT raises haematocrit (testosterone stimulates red blood cell production). Values >54% increase clotting risk — dose reduction required.",
    notes: "Routinely monitored during TRT. Elevated haematocrit is the most common side effect of TRT requiring dose adjustment.",
  },
  {
    test: "Metabolic panel",
    timing: "Fasting",
    normal: "Fasting glucose <5.6 mmol/L; HbA1c <5.7%; fasting insulin <10 µIU/mL",
    low: "Insulin resistance and metabolic syndrome both drive and are driven by testosterone deficiency.",
    notes: "HOMA-IR (fasting insulin × fasting glucose / 405) is the most sensitive marker of early insulin resistance.",
  },
]
