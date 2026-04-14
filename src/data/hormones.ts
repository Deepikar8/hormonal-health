export interface Hormone {
  id: string
  name: string
  nickname: string
  emoji: string
  madeBy: string
  plainDescription: string
  whatItDoes: string[]
  whatHappensWhenItChanges: string[]
  perimeno: string
  color: string
  headerColor: string
  group: HormoneGroup
}

export type HormoneGroup =
  | "sex-hormones"
  | "brain-signals"
  | "adrenal"
  | "metabolic"
  | "sleep-stress"
  | "other"

export const groupLabels: Record<HormoneGroup, { label: string; description: string; emoji: string }> = {
  "sex-hormones":  { label: "Sex Hormones",         emoji: "🌸", description: "Made mainly by the ovaries. Decline and fluctuate most dramatically in perimenopause." },
  "brain-signals": { label: "Brain Signalling Hormones", emoji: "🧠", description: "Made by the pituitary and hypothalamus. Regulate the ovaries — rise as ovarian function declines." },
  "adrenal":       { label: "Adrenal Hormones",      emoji: "⚡", description: "Made by the adrenal glands. Provide a backup source of sex hormones and regulate stress." },
  "metabolic":     { label: "Metabolic Hormones",    emoji: "⚖️", description: "Regulate energy, blood sugar, appetite, and body composition — all disrupted in perimenopause." },
  "sleep-stress":  { label: "Sleep & Stress Hormones", emoji: "🌙", description: "Govern the daily rhythm, stress response, and sleep quality — all destabilised by hormonal change." },
  "other":         { label: "Growth & Repair Hormones", emoji: "🔧", description: "Maintain tissue, bone, muscle and brain health — decline quietly but significantly with age." },
}

export const hormones: Hormone[] = [

  // ── SEX HORMONES ──────────────────────────────────────────────
  {
    id: "estrogen",
    name: "Estrogen (Estradiol)",
    nickname: "The architect",
    emoji: "🏛️",
    madeBy: "Mainly the ovaries; also fat tissue and adrenal glands",
    plainDescription:
      "Estrogen is a family of three hormones — estradiol, estrone, estriol. Estradiol is the most potent and the one that matters most in reproductive years. It is the most wide-reaching hormone in the female body, with receptors in virtually every tissue: bone, brain, heart, bladder, skin, joints, gut, and eyes.",
    whatItDoes: [
      "Builds and maintains the uterine lining each cycle",
      "Keeps bones dense by slowing bone-resorbing cells",
      "Protects blood vessels — keeps arteries flexible and LDL cholesterol lower",
      "Regulates serotonin and norepinephrine — the brain's mood stabilisers",
      "Supports memory and learning via hippocampal neuroplasticity",
      "Keeps vaginal and bladder tissue thick, lubricated and healthy",
      "Maintains skin thickness and collagen production",
      "Directs fat storage toward hips and thighs (rather than abdomen)",
      "Regulates body temperature via the hypothalamus",
      "Supports insulin sensitivity and glucose metabolism",
      "Has anti-inflammatory effects — suppresses IL-6, TNF-α, NF-κB",
    ],
    whatHappensWhenItChanges: [
      "Hot flashes and night sweats (thermostat dysregulation)",
      "Accelerated bone loss",
      "Rising LDL, falling HDL, arterial stiffness",
      "Mood instability, anxiety, depression risk rises",
      "Brain fog, memory lapses",
      "Vaginal dryness, painful sex, urinary urgency",
      "Skin thinning, hair changes, dry eyes",
      "Visceral fat accumulates even without dietary change",
      "Joint pain and inflammation",
    ],
    perimeno:
      "In perimenopause, estradiol does not simply decline — it fluctuates wildly. It can spike higher than normal in early perimenopause (causing breast tenderness, heavy periods, anxiety) and crash the next month. This erratic pattern — not just low levels — is why symptoms feel so disorienting and unpredictable.",
    color: "rose",
    headerColor: "bg-rose-50 border-rose-200",
    group: "sex-hormones",
  },
  {
    id: "progesterone",
    name: "Progesterone",
    nickname: "The calmer",
    emoji: "🌙",
    madeBy: "Corpus luteum (after ovulation); adrenal glands in small amounts",
    plainDescription:
      "Progesterone is only produced after ovulation. It prepares the uterus for potential pregnancy and, if pregnancy doesn't occur, winds down and allows the period to begin. Beyond reproduction, it is a powerful neurosteroid that directly calms the nervous system — its brain metabolite allopregnanolone acts on the same receptors as benzodiazepines, but is made naturally.",
    whatItDoes: [
      "Stabilises the uterine lining after estrogen builds it",
      "Converts to allopregnanolone in the brain — a potent GABA-A receptor modulator",
      "Promotes deep, slow-wave sleep",
      "Reduces anxiety and promotes calm",
      "Has anti-depressant and neuroprotective effects",
      "Counterbalances estrogen's stimulating effects on uterine tissue",
      "Supports thyroid hormone function",
      "Has anti-inflammatory properties",
    ],
    whatHappensWhenItChanges: [
      "Anxiety and irritability (loss of GABA-A stimulation)",
      "Sleep disruption — difficulty staying asleep, unrestorative sleep",
      "Heavy or irregular periods (unopposed estrogen builds up lining)",
      "Increased sensitivity to stress",
      "Low mood",
    ],
    perimeno:
      "Progesterone is the first hormone to decline in perimenopause — before estrogen drops significantly. As ovulation becomes less frequent, progesterone output disappears in anovulatory cycles. This is why mood, sleep, and anxiety symptoms often arrive first — the calming buffer is gone before the more famous 'menopause symptoms' begin.",
    color: "violet",
    headerColor: "bg-violet-50 border-violet-200",
    group: "sex-hormones",
  },
  {
    id: "testosterone",
    name: "Testosterone",
    nickname: "The activator",
    emoji: "⚡",
    madeBy: "Ovaries (~50%) and adrenal glands; also converted from DHEA in tissues",
    plainDescription:
      "Women produce about one-tenth of the testosterone men do, but it plays a significant role in energy, libido, muscle strength, bone density, mood, and cognitive sharpness. Unlike estrogen, testosterone declines gradually from the mid-30s — not sharply at menopause. It is the most undertested and undertreated hormone in perimenopausal women.",
    whatItDoes: [
      "Drives libido and sexual desire",
      "Supports energy levels and motivation",
      "Maintains muscle mass and strength",
      "Contributes to bone density alongside estrogen",
      "Supports mood and sense of wellbeing",
      "Plays a role in cognitive sharpness and verbal memory",
      "Maintains clitoral and vaginal tissue sensitivity",
    ],
    whatHappensWhenItChanges: [
      "Low libido or complete loss of sexual interest",
      "Low energy and motivation — a flat, switched-off feeling",
      "Muscle weakness and difficulty building strength",
      "Reduced sense of wellbeing",
      "Cognitive dulling",
    ],
    perimeno:
      "In early perimenopause, estrogen can drop faster than testosterone — creating a period of relative androgen excess that drives acne, hair changes, and irritability in some women. Later, when both are low, the effects reverse: fatigue, low libido, and loss of vitality. An international consensus statement (Davis et al., 2019) supports testosterone therapy for low libido in women.",
    color: "amber",
    headerColor: "bg-amber-50 border-amber-200",
    group: "sex-hormones",
  },
  {
    id: "dhea",
    name: "DHEA & DHEA-S",
    nickname: "The precursor",
    emoji: "🧪",
    madeBy: "Adrenal glands (primarily); also the ovaries and brain",
    plainDescription:
      "DHEA (dehydroepiandrosterone) and its more stable blood form DHEA-S are the most abundant steroid hormones in the body. They are not active themselves — they are precursors that the body converts into estrogen and testosterone in peripheral tissues (skin, brain, bone, vaginal tissue). This local conversion is especially important after menopause when ovarian hormone production has stopped.",
    whatItDoes: [
      "Acts as a reservoir hormone — converted to estrogen and testosterone as needed in local tissues",
      "Supports energy, mood, and a general sense of wellbeing",
      "Has neuroprotective effects — supports brain function and memory",
      "Supports immune function",
      "Helps maintain bone density",
      "Maintains vaginal tissue health (vaginal DHEA/prasterone is FDA-approved for GSM)",
      "Counteracts some of cortisol's damaging effects",
    ],
    whatHappensWhenItChanges: [
      "Low energy and reduced sense of vitality",
      "Low mood, reduced stress resilience",
      "Decreased libido",
      "Vaginal dryness (local estrogen and testosterone production declines)",
      "Accelerated skin ageing",
      "Reduced immune function",
    ],
    perimeno:
      "DHEA declines steadily from the mid-20s onward — by age 70 it is about 20% of peak levels. This decline is called 'adrenopause' and is separate from ovarian menopause. In perimenopause, declining DHEA reduces the adrenal backup supply of sex hormones. DHEA-S is the test typically ordered (more stable than DHEA). Intravaginal DHEA (prasterone) is FDA-approved for vaginal symptoms of menopause.",
    color: "lime",
    headerColor: "bg-lime-50 border-lime-200",
    group: "adrenal",
  },

  // ── BRAIN SIGNALLING ──────────────────────────────────────────
  {
    id: "fsh",
    name: "FSH (Follicle Stimulating Hormone)",
    nickname: "The messenger",
    emoji: "📣",
    madeBy: "Pituitary gland (base of the brain)",
    plainDescription:
      "FSH is produced by the brain — not the ovaries — and signals the ovaries to develop follicles each month. It doesn't cause symptoms directly, but its rising level is the primary lab marker used to track perimenopause. Think of it as the brain turning up the volume because the speaker (the ovaries) is becoming less responsive.",
    whatItDoes: [
      "Signals ovaries to develop and mature follicles",
      "Drives estrogen production from developing follicles",
      "Works with LH to coordinate the menstrual cycle",
    ],
    whatHappensWhenItChanges: [
      "FSH rises (not drops) in perimenopause — the brain compensates for declining ovarian responsiveness",
      "Elevated FSH (>10 IU/L on day 2–5; >30 post-menopause) is the main lab confirmation",
      "FSH itself fluctuates in early perimenopause — a single normal reading doesn't rule out perimenopause",
    ],
    perimeno:
      "As ovaries become less responsive, the brain increases FSH to compensate. This is why FSH levels are used to stage perimenopause — but crucially, FSH fluctuates alongside estrogen. A test taken when estrogen happened to be high will show a normal FSH and lead to incorrect dismissal. Pattern and cycle timing matter more than a single value.",
    color: "blue",
    headerColor: "bg-blue-50 border-blue-200",
    group: "brain-signals",
  },
  {
    id: "lh",
    name: "LH (Luteinising Hormone)",
    nickname: "The trigger",
    emoji: "🎯",
    madeBy: "Pituitary gland",
    plainDescription:
      "LH works alongside FSH. Its midcycle surge is what triggers ovulation — the release of an egg. In perimenopause, LH patterns become erratic, and pulsatile LH surges are directly linked to the triggering of hot flashes.",
    whatItDoes: [
      "Triggers ovulation when it surges at midcycle",
      "Stimulates the corpus luteum to produce progesterone after ovulation",
      "Works with FSH to regulate the hormonal cycle",
    ],
    whatHappensWhenItChanges: [
      "LH rises alongside FSH as ovarian function declines",
      "Pulsatile LH surges are temporally linked to hot flash episodes",
      "Irregular LH patterns contribute to anovulatory cycles",
    ],
    perimeno:
      "Research has shown a direct temporal link between LH pulses and hot flash onset — the LH surge appears to activate the hypothalamic thermoregulation pathway that triggers the heat response. This is part of why fezolinetant (which targets the upstream KNDy neuron pathway) is so effective.",
    color: "sky",
    headerColor: "bg-sky-50 border-sky-200",
    group: "brain-signals",
  },
  {
    id: "amh",
    name: "AMH (Anti-Müllerian Hormone)",
    nickname: "The reserve gauge",
    emoji: "🪫",
    madeBy: "Small antral follicles in the ovaries",
    plainDescription:
      "AMH reflects how many follicles (egg-containing sacs) remain in the ovaries — the ovarian reserve. Unlike FSH and estradiol, AMH is stable across the menstrual cycle and can be tested any day. It is the earliest-declining hormone in reproductive ageing, falling steadily from the mid-30s.",
    whatItDoes: [
      "Indicates remaining ovarian follicle pool — the egg reserve",
      "Predicts likely timing of perimenopause and menopause",
      "Used clinically to assess fertility and anticipate the transition",
    ],
    whatHappensWhenItChanges: [
      "AMH itself causes no symptoms — it is a biomarker, not a driver",
      "Very low AMH signals declining reserve and approaching transition",
      "Low AMH in the early 40s can indicate earlier-than-average perimenopause onset",
    ],
    perimeno:
      "AMH is the earliest measurable sign of reproductive ageing — it starts falling years before FSH rises or periods change. A low AMH in someone in their early 40s with no symptoms yet can serve as an early warning to begin monitoring and considering bone, cardiovascular, and metabolic baselines.",
    color: "emerald",
    headerColor: "bg-emerald-50 border-emerald-200",
    group: "brain-signals",
  },

  // ── ADRENAL ───────────────────────────────────────────────────
  {
    id: "cortisol",
    name: "Cortisol",
    nickname: "The stress hormone",
    emoji: "⚠️",
    madeBy: "Adrenal cortex (outer layer of adrenal glands)",
    plainDescription:
      "Cortisol is the body's primary stress hormone. It's also what wakes you up in the morning — cortisol spikes naturally within 30–45 minutes of waking. In perimenopause, the relationship between estrogen and cortisol becomes dysregulated, amplifying stress responses and disrupting both sleep and metabolism.",
    whatItDoes: [
      "Mobilises energy during stress — raises blood sugar, increases heart rate",
      "Drives the morning wake-up response (cortisol awakening response)",
      "Regulates inflammation",
      "Influences immune function",
      "Affects memory consolidation during sleep",
      "Normally kept in check by estrogen's moderating effect on the HPA axis",
    ],
    whatHappensWhenItChanges: [
      "Elevated / dysregulated cortisol (the more common pattern in perimenopause):",
      "Promotes visceral fat storage around the abdomen",
      "Disrupts sleep — especially early-morning waking",
      "Amplifies anxiety and stress reactivity",
      "Impairs memory and concentration",
      "Contributes to insulin resistance",
      "Blunts immune function over time",
    ],
    perimeno:
      "Estrogen normally moderates the HPA axis (the brain-adrenal stress system). As estrogen declines, the stress system becomes overreactive — cortisol stays elevated longer after stress events, the diurnal rhythm flattens, and the body struggles to return to baseline. This is why previously manageable stress can feel overwhelming in perimenopause. It is biological, not psychological.",
    color: "orange",
    headerColor: "bg-orange-50 border-orange-200",
    group: "adrenal",
  },

  // ── METABOLIC ─────────────────────────────────────────────────
  {
    id: "insulin",
    name: "Insulin",
    nickname: "The glucose gatekeeper",
    emoji: "🔑",
    madeBy: "Pancreas (beta cells)",
    plainDescription:
      "Insulin is the hormone that moves glucose from the bloodstream into cells for energy. When cells stop responding efficiently to insulin, blood sugar stays elevated — this is insulin resistance. Perimenopause directly causes insulin resistance even in women who previously had none, making metabolic changes one of the most predictable consequences of the transition.",
    whatItDoes: [
      "Moves glucose from blood into cells for energy",
      "Signals the liver to store excess glucose as glycogen",
      "Promotes fat storage (especially when chronically elevated)",
      "Interacts with estrogen — estrogen directly improves insulin sensitivity",
    ],
    whatHappensWhenItChanges: [
      "Insulin resistance develops: cells become less responsive, requiring more insulin",
      "Blood sugar becomes harder to regulate — energy crashes, cravings, higher fasting glucose",
      "Visceral fat accumulates — fat cells themselves become insulin-resistant",
      "Risk of type 2 diabetes increases",
      "Triglycerides rise",
      "Can develop in previously metabolically healthy women",
    ],
    perimeno:
      "Estrogen directly enhances insulin sensitivity via PPARG and glucose transporter signalling. As estrogen declines, insulin resistance can emerge even without changes in diet or activity. This explains why perimenopausal women often gain visceral fat and see glucose or HbA1c creeping up despite 'doing nothing differently.' Fasting insulin + glucose (HOMA-IR) is the most sensitive early test.",
    color: "yellow",
    headerColor: "bg-yellow-50 border-yellow-200",
    group: "metabolic",
  },
  {
    id: "leptin-ghrelin",
    name: "Leptin & Ghrelin",
    nickname: "The appetite signals",
    emoji: "🍽️",
    madeBy: "Leptin: fat cells. Ghrelin: stomach lining.",
    plainDescription:
      "Leptin signals to the brain that you have enough stored energy and should feel full. Ghrelin signals hunger. In a healthy state they balance each other. In perimenopause, this system becomes dysregulated — leptin resistance develops and ghrelin patterns shift — making appetite harder to read and weight easier to gain.",
    whatItDoes: [
      "Leptin: tells the hypothalamus 'enough fat stored, reduce appetite and increase energy use'",
      "Ghrelin: rises before meals to signal hunger; falls after eating",
      "Together they regulate long-term body weight setpoint",
      "Estrogen directly modulates leptin sensitivity in the hypothalamus",
    ],
    whatHappensWhenItChanges: [
      "Leptin resistance: high leptin but brain doesn't hear the 'full' signal",
      "Increased appetite and reduced satiety despite eating",
      "Higher ghrelin levels reported in perimenopausal and postmenopausal women",
      "Greater difficulty regulating energy intake",
      "Contributes to weight gain independent of calorie intake",
    ],
    perimeno:
      "Estrogen normally sensitises the hypothalamus to leptin's 'stop eating' signal. As estrogen declines, leptin resistance increases — the signal is sent but the brain doesn't respond. This is one reason why perimenopausal weight gain is not simply about 'eating more': the appetite-regulation system itself becomes less accurate.",
    color: "green",
    headerColor: "bg-green-50 border-green-200",
    group: "metabolic",
  },
  {
    id: "thyroid",
    name: "Thyroid Hormones (T3 & T4)",
    nickname: "The metabolic regulator",
    emoji: "🦋",
    madeBy: "Thyroid gland (butterfly-shaped gland in the neck)",
    plainDescription:
      "The thyroid produces T4 (thyroxine), which the body converts to the more active T3 (triiodothyronine) in tissues. Thyroid hormones set the metabolic rate of virtually every cell. Thyroid dysfunction shares almost every symptom with perimenopause and is more common in perimenopausal women — so it must always be tested alongside sex hormones.",
    whatItDoes: [
      "Sets the metabolic rate — how fast cells burn energy",
      "Regulates body temperature",
      "Controls heart rate",
      "Affects mood, energy, and cognitive speed",
      "Influences hair growth, skin texture, nail strength",
      "Regulates cholesterol metabolism",
      "Estrogen raises thyroid binding globulin (TBG), altering how much free hormone is available",
    ],
    whatHappensWhenItChanges: [
      "Hypothyroidism (underactive): fatigue, weight gain, cold intolerance, brain fog, depression, constipation, dry skin, hair loss, slow heart rate, elevated cholesterol",
      "These symptoms are nearly identical to perimenopausal estrogen deficiency",
      "Both conditions frequently coexist and amplify each other",
    ],
    perimeno:
      "Autoimmune thyroid disease (Hashimoto's) is more prevalent in perimenopausal women than at any other life stage. Estrogen changes also directly alter thyroid hormone availability via TBG. This is why thyroid function should always be tested in perimenopausal women — not as an alternative diagnosis, but because the two frequently coexist.",
    color: "teal",
    headerColor: "bg-teal-50 border-teal-200",
    group: "metabolic",
  },

  // ── SLEEP & STRESS ────────────────────────────────────────────
  {
    id: "melatonin",
    name: "Melatonin",
    nickname: "The darkness signal",
    emoji: "🌑",
    madeBy: "Pineal gland (deep in the brain); also gut and retina in small amounts",
    plainDescription:
      "Melatonin is the hormone of darkness — it rises in the evening as light fades, signals to the body that it's time to sleep, and falls in the morning when light returns. It does not cause sleep directly; it sets the timing of the sleep window. Both age and the hormonal changes of perimenopause reduce melatonin output and shift its timing.",
    whatItDoes: [
      "Signals the brain and body that night has arrived",
      "Shifts core body temperature down to prepare for sleep",
      "Regulates the circadian rhythm — the 24-hour internal clock",
      "Has antioxidant effects",
      "Modulates immune function",
      "Estrogen and progesterone both influence melatonin synthesis and receptor sensitivity",
    ],
    whatHappensWhenItChanges: [
      "Difficulty falling asleep (onset insomnia)",
      "Lighter, less restorative sleep",
      "Earlier morning waking",
      "Circadian misalignment — feeling tired at the wrong times",
      "Reduced total sleep duration",
    ],
    perimeno:
      "Melatonin output declines with age, but this is accelerated in perimenopause — estrogen and progesterone directly modulate pineal gland activity. Night sweats that fragment sleep further disrupt melatonin rhythm. This is why perimenopausal sleep problems often respond better to addressing the underlying hormonal cause (progesterone, HRT) than to melatonin supplements alone.",
    color: "indigo",
    headerColor: "bg-indigo-50 border-indigo-200",
    group: "sleep-stress",
  },

  // ── GROWTH & REPAIR ───────────────────────────────────────────
  {
    id: "growth-hormone",
    name: "Growth Hormone (GH) & IGF-1",
    nickname: "The repair crew",
    emoji: "🔧",
    madeBy: "Growth hormone: pituitary gland. IGF-1: liver (stimulated by GH).",
    plainDescription:
      "Growth hormone (GH) is released in pulses during deep sleep and drives the liver to produce IGF-1 (insulin-like growth factor 1) — the actual tissue-level messenger. Together they maintain muscle mass, bone density, skin thickness, immune function, and fat metabolism. GH declines significantly with age and is further suppressed by the sleep disruption of perimenopause.",
    whatItDoes: [
      "Stimulates IGF-1 production in the liver",
      "Maintains muscle mass and promotes fat burning",
      "Supports bone density alongside estrogen",
      "Promotes tissue repair and recovery",
      "Strengthens immune function",
      "Supports cognitive function and mood",
      "Maintains skin thickness and collagen",
      "Released primarily during slow-wave deep sleep",
    ],
    whatHappensWhenItChanges: [
      "Muscle loss accelerates (sarcopenia)",
      "Fat redistribution — more visceral, less lean",
      "Slower recovery from exercise and injury",
      "Thinner, less resilient skin",
      "Reduced energy and stamina",
      "Cognitive slowing",
      "Impaired immune function",
    ],
    perimeno:
      "GH is released predominantly during deep slow-wave sleep — which is the sleep stage most disrupted by perimenopause (hot flashes, progesterone decline, cortisol dysregulation all reduce slow-wave sleep). This creates a compounding cycle: hormonal disruption reduces GH release, which accelerates muscle loss, fat gain, and poor recovery — which are then attributed to 'just ageing.' Resistance exercise is the most potent non-pharmacological stimulus for GH release.",
    color: "cyan",
    headerColor: "bg-cyan-50 border-cyan-200",
    group: "other",
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    nickname: "The connection hormone",
    emoji: "🤝",
    madeBy: "Hypothalamus (stored and released by the pituitary gland)",
    plainDescription:
      "Oxytocin is best known as the bonding and trust hormone — released during physical touch, sex, childbirth, and breastfeeding. But it also acts as a stress buffer, reducing cortisol and lowering anxiety. Estrogen amplifies oxytocin receptor sensitivity, so as estrogen declines, the calming social-bonding effects of oxytocin become muted.",
    whatItDoes: [
      "Promotes social bonding, trust, and attachment",
      "Released during touch, sex, hugging, and eye contact",
      "Reduces cortisol and buffers the stress response",
      "Promotes feelings of calm and safety",
      "Involved in orgasm and sexual pleasure",
      "Has anti-inflammatory effects",
    ],
    whatHappensWhenItChanges: [
      "Reduced emotional buffering — stress and social friction feel harder",
      "Reduced pleasure from physical affection",
      "Increased social anxiety or withdrawal in some women",
      "Reduced sexual satisfaction",
    ],
    perimeno:
      "Estrogen upregulates oxytocin receptors — meaning declining estrogen reduces the brain's sensitivity to oxytocin's calming effects. This is a less-discussed but real contributor to the irritability, emotional reactivity, and reduced tolerance for closeness that some women notice in perimenopause. Physical touch, social connection, and intimacy are not just emotionally helpful — they are biologically restorative.",
    color: "pink",
    headerColor: "bg-pink-50 border-pink-200",
    group: "sleep-stress",
  },
]

export const colorMap: Record<string, { badge: string; border: string; dot: string }> = {
  rose:    { badge: "bg-rose-100 text-rose-800 border-rose-200",       border: "border-rose-200",    dot: "bg-rose-400" },
  violet:  { badge: "bg-violet-100 text-violet-800 border-violet-200", border: "border-violet-200",  dot: "bg-violet-400" },
  amber:   { badge: "bg-amber-100 text-amber-800 border-amber-200",    border: "border-amber-200",   dot: "bg-amber-400" },
  lime:    { badge: "bg-lime-100 text-lime-800 border-lime-200",       border: "border-lime-200",    dot: "bg-lime-500" },
  blue:    { badge: "bg-blue-100 text-blue-800 border-blue-200",       border: "border-blue-200",    dot: "bg-blue-400" },
  sky:     { badge: "bg-sky-100 text-sky-800 border-sky-200",          border: "border-sky-200",     dot: "bg-sky-400" },
  emerald: { badge: "bg-emerald-100 text-emerald-800 border-emerald-200", border: "border-emerald-200", dot: "bg-emerald-400" },
  orange:  { badge: "bg-orange-100 text-orange-800 border-orange-200", border: "border-orange-200",  dot: "bg-orange-400" },
  yellow:  { badge: "bg-yellow-100 text-yellow-800 border-yellow-200", border: "border-yellow-200",  dot: "bg-yellow-500" },
  green:   { badge: "bg-green-100 text-green-800 border-green-200",    border: "border-green-200",   dot: "bg-green-500" },
  teal:    { badge: "bg-teal-100 text-teal-800 border-teal-200",       border: "border-teal-200",    dot: "bg-teal-400" },
  indigo:  { badge: "bg-indigo-100 text-indigo-800 border-indigo-200", border: "border-indigo-200",  dot: "bg-indigo-400" },
  cyan:    { badge: "bg-cyan-100 text-cyan-800 border-cyan-200",       border: "border-cyan-200",    dot: "bg-cyan-500" },
  pink:    { badge: "bg-pink-100 text-pink-800 border-pink-200",       border: "border-pink-200",    dot: "bg-pink-400" },
}
