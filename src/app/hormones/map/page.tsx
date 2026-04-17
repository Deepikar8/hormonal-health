import Link from "next/link"

// Hormone relationship data
const connections = [
  // HPO axis
  { from: "hypothalamus", to: "pituitary", label: "GnRH", type: "stimulates" },
  { from: "pituitary", to: "fsh", label: "", type: "produces" },
  { from: "pituitary", to: "lh", label: "", type: "produces" },
  { from: "fsh", to: "ovaries", label: "stimulates", type: "stimulates" },
  { from: "lh", to: "ovaries", label: "triggers ovulation", type: "stimulates" },
  { from: "ovaries", to: "estrogen", label: "", type: "produces" },
  { from: "ovaries", to: "progesterone", label: "", type: "produces" },
  { from: "ovaries", to: "testosterone", label: "", type: "produces" },
  { from: "ovaries", to: "amh", label: "", type: "produces" },
  // Feedback loops
  { from: "estrogen", to: "pituitary", label: "negative feedback", type: "inhibits" },
  { from: "estrogen", to: "hypothalamus", label: "negative feedback", type: "inhibits" },
  // HPA axis
  { from: "hypothalamus", to: "hpa", label: "CRH", type: "stimulates" },
  { from: "hpa", to: "cortisol", label: "", type: "produces" },
  { from: "adrenal", to: "dhea", label: "", type: "produces" },
  { from: "adrenal", to: "testosterone", label: "~50%", type: "produces" },
  { from: "dhea", to: "estrogen", label: "converts to", type: "converts" },
  { from: "dhea", to: "testosterone", label: "converts to", type: "converts" },
  // Cross-axis
  { from: "cortisol", to: "insulin", label: "raises glucose", type: "disrupts" },
  { from: "estrogen", to: "insulin", label: "improves sensitivity", type: "supports" },
  { from: "estrogen", to: "leptin", label: "sensitises", type: "supports" },
  { from: "estrogen", to: "melatonin", label: "supports production", type: "supports" },
  { from: "progesterone", to: "melatonin", label: "supports", type: "supports" },
  { from: "estrogen", to: "cortisol", label: "moderates HPA", type: "inhibits" },
  { from: "estrogen", to: "oxytocin", label: "sensitises receptors", type: "supports" },
  { from: "estrogen", to: "gh", label: "supports release", type: "supports" },
  { from: "melatonin", to: "gh", label: "GH released in sleep", type: "supports" },
  { from: "thyroid", to: "metabolism", label: "sets rate", type: "stimulates" },
  { from: "insulin", to: "leptin", label: "stimulates release", type: "stimulates" },
]

interface HormoneNode {
  id: string
  label: string
  sublabel?: string
  emoji: string
  color: string
  textColor: string
  borderColor: string
  group: string
  description: string
}

const nodes: HormoneNode[] = [
  // Brain
  { id: "hypothalamus", label: "Hypothalamus", sublabel: "GnRH + CRH", emoji: "🧠", color: "bg-slate-100", textColor: "text-slate-800", borderColor: "border-slate-300", group: "brain", description: "Master regulator — sends signals to the pituitary to control both the reproductive axis (HPO) and the stress axis (HPA)" },
  { id: "pituitary", label: "Pituitary", sublabel: "FSH + LH", emoji: "📡", color: "bg-slate-100", textColor: "text-slate-800", borderColor: "border-slate-300", group: "brain", description: "Translates hypothalamus signals into hormones (FSH, LH) that act on the ovaries" },
  { id: "hpa", label: "HPA Axis", sublabel: "(Pituitary → Adrenal)", emoji: "⚡", color: "bg-slate-100", textColor: "text-slate-800", borderColor: "border-slate-300", group: "brain", description: "The stress axis — hypothalamus → pituitary → adrenal glands. Estrogen normally moderates this. When estrogen declines, stress responses amplify." },

  // Brain signalling hormones
  { id: "fsh", label: "FSH", sublabel: "Follicle Stimulating", emoji: "📣", color: "bg-blue-50", textColor: "text-blue-900", borderColor: "border-blue-300", group: "brain-hormones", description: "Signals ovaries to develop follicles. Rises as ovaries become less responsive — the primary lab marker of perimenopause." },
  { id: "lh", label: "LH", sublabel: "Luteinising Hormone", emoji: "🎯", color: "bg-sky-50", textColor: "text-sky-900", borderColor: "border-sky-300", group: "brain-hormones", description: "Triggers ovulation. Pulsatile LH surges are directly linked to hot flash episodes." },
  { id: "amh", label: "AMH", sublabel: "Ovarian reserve gauge", emoji: "🪫", color: "bg-emerald-50", textColor: "text-emerald-900", borderColor: "border-emerald-300", group: "brain-hormones", description: "Reflects remaining follicle pool. The first hormone to decline — falls from the mid-30s, years before periods change." },

  // Ovaries
  { id: "ovaries", label: "Ovaries", sublabel: "E2 + P4 + T", emoji: "🥚", color: "bg-rose-100", textColor: "text-rose-900", borderColor: "border-rose-400", group: "ovary", description: "Primary source of estrogen, progesterone, and ~50% of testosterone. As follicle pool depletes, output becomes erratic then declines." },

  // Sex hormones
  { id: "estrogen", label: "Estrogen", sublabel: "The architect", emoji: "🏛️", color: "bg-rose-50", textColor: "text-rose-900", borderColor: "border-rose-300", group: "sex-hormones", description: "The most wide-reaching hormone — affects bone, brain, heart, bladder, skin, joints, metabolism, mood. Fluctuates wildly before declining." },
  { id: "progesterone", label: "Progesterone", sublabel: "The calmer", emoji: "🌙", color: "bg-violet-50", textColor: "text-violet-900", borderColor: "border-violet-300", group: "sex-hormones", description: "Declines first in perimenopause (anovulatory cycles). Loss causes anxiety, sleep disruption, and mood changes — before hot flashes begin." },
  { id: "testosterone", label: "Testosterone", sublabel: "The activator", emoji: "⚡", color: "bg-amber-50", textColor: "text-amber-900", borderColor: "border-amber-300", group: "sex-hormones", description: "Made by ovaries (~50%) and adrenal glands. Drives libido, energy, muscle, mood. Declines gradually from mid-30s." },

  // Adrenal
  { id: "adrenal", label: "Adrenal Glands", sublabel: "DHEA + Cortisol + T", emoji: "🏭", color: "bg-orange-100", textColor: "text-orange-900", borderColor: "border-orange-400", group: "adrenal", description: "Backup source of sex hormones (via DHEA) and the stress axis output (cortisol). Critical after ovaries decline." },
  { id: "dhea", label: "DHEA", sublabel: "The precursor", emoji: "🧪", color: "bg-lime-50", textColor: "text-lime-900", borderColor: "border-lime-300", group: "adrenal", description: "Converts to estrogen and testosterone in peripheral tissues. Declines steadily from mid-20s. The adrenal backup supply for sex hormones." },
  { id: "cortisol", label: "Cortisol", sublabel: "The stress hormone", emoji: "⚠️", color: "bg-orange-50", textColor: "text-orange-900", borderColor: "border-orange-300", group: "adrenal", description: "Normally moderated by estrogen. When estrogen declines, cortisol stays elevated longer, promoting visceral fat, anxiety, and sleep disruption." },

  // Metabolic
  { id: "insulin", label: "Insulin", sublabel: "Glucose gatekeeper", emoji: "🔑", color: "bg-yellow-50", textColor: "text-yellow-900", borderColor: "border-yellow-300", group: "metabolic", description: "Estrogen directly enhances insulin sensitivity. When estrogen declines, insulin resistance can emerge even without dietary change." },
  { id: "leptin", label: "Leptin & Ghrelin", sublabel: "Appetite signals", emoji: "🍽️", color: "bg-green-50", textColor: "text-green-900", borderColor: "border-green-300", group: "metabolic", description: "Estrogen sensitises the brain to leptin's fullness signal. When estrogen falls, leptin resistance develops — appetite regulation breaks down." },
  { id: "thyroid", label: "Thyroid (T3/T4)", sublabel: "Metabolic regulator", emoji: "🦋", color: "bg-teal-50", textColor: "text-teal-900", borderColor: "border-teal-300", group: "metabolic", description: "Sets metabolic rate. Shares almost every symptom with perimenopause. Autoimmune thyroid disease peaks in perimenopausal women — always test both." },
  { id: "metabolism", label: "Metabolism", sublabel: "Energy + body comp", emoji: "⚖️", color: "bg-teal-100", textColor: "text-teal-900", borderColor: "border-teal-400", group: "metabolic", description: "Influenced by thyroid, insulin, cortisol, leptin, and estrogen simultaneously. In perimenopause, all five shift — compounding metabolic changes." },

  // Sleep & repair
  { id: "melatonin", label: "Melatonin", sublabel: "Darkness signal", emoji: "🌑", color: "bg-indigo-50", textColor: "text-indigo-900", borderColor: "border-indigo-300", group: "sleep", description: "Sleep timing hormone. Reduced by age and by perimenopause. Night sweats further disrupt its rhythm — treating hormones often works better than melatonin alone." },
  { id: "gh", label: "Growth Hormone", sublabel: "Repair crew", emoji: "🔧", color: "bg-cyan-50", textColor: "text-cyan-900", borderColor: "border-cyan-300", group: "sleep", description: "Released during deep sleep. Sleep disruption in perimenopause suppresses GH, accelerating muscle loss, fat gain, and slow recovery." },
  { id: "oxytocin", label: "Oxytocin", sublabel: "Connection hormone", emoji: "🤝", color: "bg-pink-50", textColor: "text-pink-900", borderColor: "border-pink-300", group: "sleep", description: "Estrogen amplifies oxytocin receptor sensitivity. Declining estrogen mutes the calming, bonding effects — contributing to irritability and emotional reactivity." },
]

const groupConfig: Record<string, { label: string; color: string; borderColor: string }> = {
  brain:         { label: "Brain Control Centres",     color: "bg-slate-50",   borderColor: "border-slate-300" },
  "brain-hormones": { label: "Brain Signalling Hormones", color: "bg-blue-50/50", borderColor: "border-blue-200" },
  ovary:         { label: "Ovaries",                   color: "bg-rose-50/70", borderColor: "border-rose-300" },
  "sex-hormones": { label: "Sex Hormones",             color: "bg-rose-50/40", borderColor: "border-rose-200" },
  adrenal:       { label: "Adrenal Glands & Output",   color: "bg-orange-50/50", borderColor: "border-orange-200" },
  metabolic:     { label: "Metabolic Hormones",        color: "bg-yellow-50/50", borderColor: "border-yellow-200" },
  sleep:         { label: "Sleep, Repair & Connection", color: "bg-indigo-50/50", borderColor: "border-indigo-200" },
}

const axisDescriptions = [
  {
    name: "HPO Axis",
    fullName: "Hypothalamic-Pituitary-Ovarian Axis",
    color: "bg-rose-100 border-rose-300",
    textColor: "text-rose-900",
    description: "The brain (hypothalamus → pituitary) communicates with the ovaries via FSH and LH. The ovaries respond with estrogen and progesterone, which feed back to the brain to modulate output. In perimenopause, as the ovaries become less responsive, FSH and LH rise to compensate — but the feedback loop becomes erratic.",
    hormones: ["GnRH (hypothalamus)", "FSH & LH (pituitary)", "Estrogen, Progesterone, Testosterone (ovaries)", "AMH (follicle indicator)"],
  },
  {
    name: "HPA Axis",
    fullName: "Hypothalamic-Pituitary-Adrenal Axis",
    color: "bg-orange-100 border-orange-300",
    textColor: "text-orange-900",
    description: "The stress response axis. Estrogen normally moderates the HPA axis — keeping cortisol in check. As estrogen declines, this moderation is lost: cortisol stays elevated longer after stressors, the diurnal rhythm flattens, and stress feels harder to recover from. The adrenal glands also produce DHEA — the body's backup source of sex hormones.",
    hormones: ["CRH (hypothalamus)", "ACTH (pituitary)", "Cortisol, DHEA (adrenal glands)"],
  },
  {
    name: "Metabolic Web",
    fullName: "Insulin · Thyroid · Leptin · GH",
    color: "bg-teal-100 border-teal-300",
    textColor: "text-teal-900",
    description: "Estrogen has direct effects on insulin sensitivity, leptin signalling, and thyroid hormone availability. When estrogen shifts, so does metabolic function — even without changes in diet or lifestyle. Growth hormone (released during deep sleep) also declines as perimenopause disrupts slow-wave sleep, compounding body composition changes.",
    hormones: ["Insulin (pancreas)", "Leptin & Ghrelin (fat cells, stomach)", "Thyroid T3/T4 (thyroid gland)", "Growth Hormone + IGF-1 (pituitary, liver)"],
  },
]

const severityColor: Record<string, string> = {
  "High":     "bg-red-100 text-red-800",
  "Moderate": "bg-amber-100 text-amber-800",
  "Emerging": "bg-blue-100 text-blue-800",
}

interface DiseaseRisk {
  hormone: string
  emoji: string
  shift: string
  headerColor: string
  borderColor: string
  textColor: string
  risks: { condition: string; mechanism: string; severity: "High" | "Moderate" | "Emerging" }[]
}

const diseaseRisks: DiseaseRisk[] = [
  {
    hormone: "Estrogen (Estradiol)",
    emoji: "🏛️",
    shift: "Fluctuates erratically, then declines",
    headerColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-900",
    risks: [
      { condition: "Osteoporosis", mechanism: "Estrogen suppresses osteoclasts (bone-resorbing cells). Without it, bone is lost faster than it's rebuilt.", severity: "High" },
      { condition: "Cardiovascular disease", mechanism: "Estrogen keeps arteries flexible, raises HDL, lowers LDL. Decline → arterial stiffness, lipid changes, atherosclerosis.", severity: "High" },
      { condition: "Type 2 diabetes", mechanism: "Estrogen enhances insulin sensitivity directly via PPARG signalling. Decline → insulin resistance can emerge without any dietary change.", severity: "Moderate" },
      { condition: "Depression", mechanism: "Estrogen regulates serotonin and norepinephrine. Erratic fluctuation destabilises mood circuitry — even in women with no prior history.", severity: "Moderate" },
      { condition: "Dementia / Alzheimer's", mechanism: "Estrogen supports hippocampal neuroplasticity and synaptic density. Amyloid clearance effects are primarily from preclinical research. The 'timing hypothesis' suggests early hormonal decline may increase long-term risk — evidence is observational.", severity: "Emerging" },
      { condition: "Genitourinary syndrome", mechanism: "Vaginal, urethral, and bladder tissue is estrogen-dependent. Atrophy → recurrent UTIs, incontinence, painful sex.", severity: "High" },
    ],
  },
  {
    hormone: "Progesterone",
    emoji: "🌙",
    shift: "Declines first — drops before estrogen falls",
    headerColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-900",
    risks: [
      { condition: "Sleep disorders", mechanism: "Progesterone metabolite allopregnanolone activates GABA-A receptors, promoting slow-wave sleep. Loss → insomnia, light sleep, early waking.", severity: "High" },
      { condition: "Anxiety disorders", mechanism: "Without GABA-A stimulation from allopregnanolone, stress reactivity increases — identical presentation to GAD but with hormonal cause.", severity: "Moderate" },
      { condition: "Endometrial hyperplasia", mechanism: "Unopposed estrogen (no progesterone to counterbalance) overstimulates the uterine lining — a precursor to endometrial cancer. This applies to women with an intact uterus; progesterone is always prescribed alongside estrogen in HRT for this reason.", severity: "Moderate" },
    ],
  },
  {
    hormone: "Cortisol",
    emoji: "⚠️",
    shift: "Dysregulates as estrogen's HPA moderation is lost",
    headerColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-900",
    risks: [
      { condition: "Hypertension", mechanism: "Chronic cortisol elevation raises blood pressure via sodium retention and vascular tone — compounds existing cardiovascular risk.", severity: "Moderate" },
      { condition: "Visceral obesity", mechanism: "Cortisol directs fat storage to the abdomen. Visceral fat is metabolically active, producing inflammatory cytokines that worsen insulin resistance.", severity: "High" },
      { condition: "Immune dysfunction", mechanism: "Prolonged cortisol elevation suppresses lymphocyte activity, raising susceptibility to infections and impairing cancer immune surveillance.", severity: "Moderate" },
      { condition: "Memory impairment", mechanism: "Chronically high cortisol is neurotoxic to the hippocampus — shrinking it over time and impairing memory consolidation.", severity: "Emerging" },
    ],
  },
  {
    hormone: "Insulin",
    emoji: "🔑",
    shift: "Resistance develops as estrogen declines",
    headerColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-900",
    risks: [
      { condition: "Type 2 diabetes", mechanism: "Insulin resistance → compensatory hyperinsulinemia → beta cell exhaustion → T2D. Can develop in previously metabolically healthy women.", severity: "High" },
      { condition: "Non-alcoholic fatty liver disease", mechanism: "Insulin resistance drives hepatic lipid accumulation — NAFLD prevalence rises sharply post-menopause.", severity: "Moderate" },
      { condition: "Hyperandrogenic symptoms", mechanism: "Hyperinsulinemia stimulates ovarian androgen production — can drive acne, irregular cycles, and other androgen-excess features in perimenopause distinct from PCOS.", severity: "Emerging" },
    ],
  },
  {
    hormone: "Thyroid (T3/T4)",
    emoji: "🦋",
    shift: "Autoimmune thyroid disease peaks in perimenopause",
    headerColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-900",
    risks: [
      { condition: "Hypothyroidism", mechanism: "Hashimoto's autoimmune thyroiditis peaks in perimenopausal women. Estrogen changes alter immune tolerance and thyroid-binding globulin levels.", severity: "High" },
      { condition: "Dyslipidaemia", mechanism: "Underactive thyroid raises LDL cholesterol and triglycerides — compounds the cardiovascular risk from estrogen decline.", severity: "Moderate" },
      { condition: "Misdiagnosis cascade", mechanism: "Thyroid symptoms (fatigue, brain fog, weight gain, low mood) are almost identical to estrogen deficiency — one is often missed when testing only for the other.", severity: "Moderate" },
    ],
  },
  {
    hormone: "Growth Hormone / IGF-1",
    emoji: "🔧",
    shift: "Suppressed by sleep disruption; declines with age",
    headerColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-900",
    risks: [
      { condition: "Sarcopenia", mechanism: "GH and IGF-1 maintain muscle protein synthesis. As GH falls (worsened by disrupted deep sleep), muscle mass declines faster — impairing metabolic health.", severity: "Moderate" },
      { condition: "Osteoporosis (compounding)", mechanism: "GH supports bone formation alongside estrogen. Dual decline accelerates bone loss beyond what either alone would cause.", severity: "Moderate" },
      { condition: "Reduced recovery and resilience", mechanism: "Lower GH → slower tissue repair, longer recovery from illness or injury, reduced immune regeneration.", severity: "Emerging" },
    ],
  },
]

export default function HormoneMapPage() {
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/hormones" className="hover:text-stone-700">Hormones</Link>
          <span className="mx-2">›</span>
          <span>How They Connect</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          How All the Hormones Connect
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
          Hormones don&apos;t work in isolation. They form three interconnected axes — the
          reproductive axis (HPO), the stress axis (HPA), and the metabolic web — all of
          which are directly disrupted by perimenopause.
        </p>
      </div>

      {/* Three axes overview */}
      <div className="grid md:grid-cols-3 gap-5 mb-14">
        {axisDescriptions.map((axis) => (
          <div key={axis.name} className={`border rounded-2xl p-6 ${axis.color}`}>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{axis.name}</div>
            <h2 className={`text-base font-bold mb-3 ${axis.textColor}`}>{axis.fullName}</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">{axis.description}</p>
            <div className="space-y-1">
              {axis.hormones.map((h) => (
                <div key={h} className="text-xs text-stone-600 flex items-start gap-1.5">
                  <span className="text-stone-400 mt-0.5">→</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visual diagram */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-2">The hormone network at a glance</h2>
        <p className="text-sm text-stone-500 mb-6">Click any hormone card for detail. Arrows show what drives what.</p>

        {/* Hypothalamus — Master Controller */}
        <div className="border-2 border-slate-300 rounded-2xl bg-slate-50 p-4 sm:p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">The Master Controller — Start Here</div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Left: What it is + where it is */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center text-3xl">🧠</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1">Hypothalamus</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    A small region deep inside the brain — roughly the size of an almond — sitting just below the thalamus and above the brainstem. Despite its size, it is the command centre for most of your hormonal system.
                  </div>
                </div>
              </div>
              {/* Brain location diagram */}
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600">
                <div className="font-semibold text-slate-700 mb-2 text-[11px] uppercase tracking-wide">Location in the brain</div>
                <div className="space-y-1.5">
                  {[
                    { part: "Cerebral cortex", role: "Thinking, language, conscious control", highlight: false },
                    { part: "Thalamus", role: "Sensory relay station", highlight: false },
                    { part: "Hypothalamus ◀", role: "Hormonal master controller", highlight: true },
                    { part: "Pituitary gland", role: "Executes hypothalamus instructions", highlight: false },
                    { part: "Brainstem", role: "Heart rate, breathing, reflexes", highlight: false },
                  ].map((item) => (
                    <div key={item.part} className={`flex items-start gap-2 rounded px-2 py-1 ${item.highlight ? "bg-slate-200 font-semibold text-slate-900" : ""}`}>
                      <span className="shrink-0 w-3 h-3 mt-0.5 rounded-sm border border-slate-300 bg-slate-100" />
                      <div>
                        <span className={item.highlight ? "text-slate-900" : "text-slate-700"}>{item.part}</span>
                        <span className="text-slate-400 ml-1 text-[10px]">— {item.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: What it controls */}
            <div>
              <div className="font-semibold text-slate-800 text-sm mb-3">What the hypothalamus controls</div>
              {/* Three hormonal axes */}
              <div className="space-y-2 mb-4">
                {[
                  {
                    signal: "GnRH",
                    axis: "Reproductive axis (HPO)",
                    chain: "→ Pituitary → FSH + LH → Ovaries → Estrogen, Progesterone, Testosterone",
                    color: "bg-rose-50 border-rose-200 text-rose-800",
                    dot: "bg-rose-400",
                  },
                  {
                    signal: "CRH",
                    axis: "Stress axis (HPA)",
                    chain: "→ Pituitary → ACTH → Adrenal glands → Cortisol, DHEA",
                    color: "bg-orange-50 border-orange-200 text-orange-800",
                    dot: "bg-orange-400",
                  },
                  {
                    signal: "TRH",
                    axis: "Thyroid axis (HPT)",
                    chain: "→ Pituitary → TSH → Thyroid gland → T3 + T4",
                    color: "bg-teal-50 border-teal-200 text-teal-800",
                    dot: "bg-teal-400",
                  },
                ].map((item) => (
                  <div key={item.signal} className={`border rounded-lg p-2.5 ${item.color}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                      <span className="text-xs font-bold">{item.signal} pulse</span>
                      <span className="text-[10px] opacity-70">— {item.axis}</span>
                    </div>
                    <div className="text-[10px] opacity-80 leading-relaxed pl-4">{item.chain}</div>
                  </div>
                ))}
              </div>
              {/* Also controls */}
              <div className="bg-white border border-slate-200 rounded-xl p-3">
                <div className="font-semibold text-slate-700 text-[11px] uppercase tracking-wide mb-2">Also directly controls</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { emoji: "🌡️", label: "Body temperature", note: "The thermostat disrupted by hot flashes" },
                    { emoji: "😴", label: "Sleep–wake cycle", note: "Circadian rhythm coordination" },
                    { emoji: "🍽️", label: "Hunger & appetite", note: "Via leptin and ghrelin signalling" },
                    { emoji: "💧", label: "Thirst & fluid balance", note: "Via ADH / vasopressin" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-1.5">
                      <span className="text-sm shrink-0">{item.emoji}</span>
                      <div>
                        <div className="text-[11px] font-medium text-slate-700">{item.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <span>🔑</span>
            <span><strong>Why this matters in perimenopause:</strong> The hypothalamus doesn&apos;t just regulate hormones — it also contains the KNDy neurons that control body temperature. As estrogen declines, these neurons destabilise the thermostat, triggering hot flashes. Everything on this map flows from signals that start here.</span>
          </div>
        </div>

        {/* HPO Axis */}
        <div className="border border-rose-200 rounded-2xl bg-rose-50/30 p-4 sm:p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-4">HPO Axis — Reproductive</div>
          {/* Mobile: vertical steps */}
          <div className="flex flex-col gap-2 sm:hidden">
            <MobileStep node={nodeMap["hypothalamus"]} arrow="GnRH ↓" />
            <MobileStep node={nodeMap["pituitary"]} arrow="FSH + LH ↓" />
            <div className="grid grid-cols-2 gap-2">
              <NodeCard node={nodeMap["fsh"]} />
              <NodeCard node={nodeMap["lh"]} />
            </div>
            <MobileArrow label="stimulate" />
            <MobileStep node={nodeMap["ovaries"]} arrow="produces ↓" />
            <div className="grid grid-cols-2 gap-2">
              <NodeCard node={nodeMap["estrogen"]} />
              <NodeCard node={nodeMap["progesterone"]} />
              <NodeCard node={nodeMap["testosterone"]} />
              <NodeCard node={nodeMap["amh"]} />
            </div>
          </div>
          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-start sm:items-center gap-3 flex-wrap">
            <NodeCard node={nodeMap["hypothalamus"]} />
            <Arrow label="GnRH" />
            <NodeCard node={nodeMap["pituitary"]} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Arrow label="FSH" /><NodeCard node={nodeMap["fsh"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="LH" /><NodeCard node={nodeMap["lh"]} /></div>
            </div>
            <Arrow label="" />
            <NodeCard node={nodeMap["ovaries"]} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Arrow label="produces" /><NodeCard node={nodeMap["estrogen"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="produces" /><NodeCard node={nodeMap["progesterone"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="produces" /><NodeCard node={nodeMap["testosterone"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="indicates" /><NodeCard node={nodeMap["amh"]} /></div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
            <span>↺</span>
            <span><strong>Negative feedback loop:</strong> Estrogen signals back to the hypothalamus and pituitary to reduce FSH/LH. In perimenopause, declining estrogen breaks this loop — FSH rises as the brain tries harder to stimulate the ovaries.</span>
          </div>
        </div>

        {/* HPA Axis */}
        <div className="border border-orange-200 rounded-2xl bg-orange-50/30 p-4 sm:p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-4">HPA Axis — Stress Response</div>
          {/* Mobile */}
          <div className="flex flex-col gap-2 sm:hidden">
            <MobileStep node={nodeMap["hypothalamus"]} arrow="CRH ↓" />
            <MobileStep node={nodeMap["hpa"]} arrow="signals ↓" />
            <MobileStep node={nodeMap["adrenal"]} arrow="produces ↓" />
            <div className="grid grid-cols-2 gap-2">
              <NodeCard node={nodeMap["cortisol"]} />
              <NodeCard node={nodeMap["dhea"]} />
            </div>
            <MobileArrow label="DHEA converts to" />
            <div className="grid grid-cols-2 gap-2">
              <NodeCard node={nodeMap["estrogen"]} mini />
              <NodeCard node={nodeMap["testosterone"]} mini />
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden sm:flex items-start sm:items-center gap-3 flex-wrap">
            <NodeCard node={nodeMap["hypothalamus"]} />
            <Arrow label="CRH" />
            <NodeCard node={nodeMap["hpa"]} />
            <Arrow label="" />
            <NodeCard node={nodeMap["adrenal"]} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Arrow label="produces" /><NodeCard node={nodeMap["cortisol"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="produces" /><NodeCard node={nodeMap["dhea"]} /></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Arrow label="converts →" /><NodeCard node={nodeMap["estrogen"]} mini /></div>
              <div className="flex items-center gap-2"><Arrow label="converts →" /><NodeCard node={nodeMap["testosterone"]} mini /></div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-orange-700 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
            <span>⚡</span>
            <span><strong>Estrogen moderates cortisol.</strong> When estrogen falls, the HPA axis becomes overreactive — cortisol stays high longer, sleep and metabolism are disrupted, and stress resilience falls.</span>
          </div>
        </div>

        {/* Metabolic web */}
        <div className="border border-teal-200 rounded-2xl bg-teal-50/30 p-4 sm:p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">Metabolic Web</div>
          {/* Mobile */}
          <div className="flex flex-col gap-2 sm:hidden">
            <NodeCard node={nodeMap["estrogen"]} mini />
            <MobileArrow label="directly affects" />
            <div className="grid grid-cols-3 gap-2">
              <NodeCard node={nodeMap["insulin"]} />
              <NodeCard node={nodeMap["leptin"]} />
              <NodeCard node={nodeMap["thyroid"]} />
            </div>
            <MobileArrow label="shapes" />
            <NodeCard node={nodeMap["metabolism"]} />
          </div>
          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-4 flex-wrap">
            <NodeCard node={nodeMap["estrogen"]} mini />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Arrow label="improves sensitivity" /><NodeCard node={nodeMap["insulin"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="sensitises" /><NodeCard node={nodeMap["leptin"]} /></div>
              <div className="flex items-center gap-2"><Arrow label="modulates" /><NodeCard node={nodeMap["thyroid"]} /></div>
            </div>
            <Arrow label="" />
            <NodeCard node={nodeMap["metabolism"]} />
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
            <span>⚖️</span>
            <span><strong>Estrogen is metabolically active.</strong> It improves insulin sensitivity, leptin signalling, and thyroid hormone availability simultaneously. When it falls, metabolic changes follow even without changes in diet or exercise.</span>
          </div>
        </div>

        {/* Sleep & repair */}
        <div className="border border-indigo-200 rounded-2xl bg-indigo-50/30 p-4 sm:p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4">Sleep & Repair Network</div>
          {/* Mobile */}
          <div className="flex flex-col gap-2 sm:hidden">
            <div className="grid grid-cols-2 gap-2">
              <NodeCard node={nodeMap["estrogen"]} mini />
              <NodeCard node={nodeMap["progesterone"]} mini />
            </div>
            <MobileArrow label="support" />
            <NodeCard node={nodeMap["melatonin"]} />
            <MobileArrow label="sleep enables" />
            <NodeCard node={nodeMap["gh"]} />
            <MobileArrow label="drives" />
            <div className="text-center text-xs text-stone-600 bg-white border border-stone-200 rounded-xl p-3">
              <div className="text-lg mb-1">💪</div>
              <div className="font-medium">Muscle + Bone repair</div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <NodeCard node={nodeMap["estrogen"]} mini />
              <span className="text-xs text-stone-400">→ sensitises</span>
              <NodeCard node={nodeMap["oxytocin"]} mini />
              <span className="text-xs text-stone-400">→ buffers cortisol</span>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <NodeCard node={nodeMap["estrogen"]} mini />
              <NodeCard node={nodeMap["progesterone"]} mini />
            </div>
            <Arrow label="support" />
            <NodeCard node={nodeMap["melatonin"]} />
            <Arrow label="sleep enables" />
            <NodeCard node={nodeMap["gh"]} />
            <Arrow label="drives" />
            <div className="text-center text-xs text-stone-600 bg-white border border-stone-200 rounded-xl p-3 w-24">
              <div className="text-lg mb-1">💪</div>
              <div className="font-medium">Muscle + Bone repair</div>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2">
            <span>🌑</span>
            <span><strong>The sleep-repair cascade.</strong> Progesterone promotes deep sleep. Estrogen and progesterone support melatonin. Deep (slow-wave) sleep triggers growth hormone release. Hot flashes and hormonal disruption break this chain — suppressing GH and accelerating muscle and bone loss.</span>
          </div>
          <div className="mt-3 hidden sm:flex items-center gap-3">
            <NodeCard node={nodeMap["estrogen"]} mini />
            <Arrow label="sensitises receptors" />
            <NodeCard node={nodeMap["oxytocin"]} />
            <span className="text-xs text-stone-500 ml-2">→ buffers cortisol, reduces anxiety</span>
          </div>
        </div>
      </div>

      {/* Full hormone reference */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-6">All 14 hormones at a glance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes
            .filter(n => !["hypothalamus", "pituitary", "hpa", "ovaries", "adrenal", "metabolism"].includes(n.id))
            .map((node) => (
            <Link
              key={node.id}
              href={`/hormones#${node.id}`}
              className={`border rounded-xl p-4 hover:shadow-sm transition-all ${node.color} ${node.borderColor}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{node.emoji}</span>
                <div>
                  <div className={`font-semibold text-sm ${node.textColor}`}>{node.label}</div>
                  <div className="text-xs text-stone-500 mb-2">{node.sublabel}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{node.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hormone → Disease risk section */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-2">How hormone shifts become disease risk</h2>
        <p className="text-sm text-stone-500 mb-8 max-w-2xl">
          Hormones don&apos;t cause disease directly — they regulate the conditions that either protect against or
          predispose you to it. When they shift, diseases that were held at bay can emerge.
        </p>

        {/* Mechanism explainer */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: "🛡️",
              title: "Hormones as gatekeepers",
              color: "bg-blue-50 border-blue-200",
              textColor: "text-blue-900",
              body: "Some hormones actively protect organs. Estrogen keeps arteries flexible, slows bone breakdown, and maintains insulin sensitivity. The disease wasn't caused by low estrogen — it was held back by normal estrogen. When the protection falls away, vulnerability emerges.",
              example: "Example: estrogen → cardiovascular protection. Estrogen ↓ → arterial stiffness → cardiovascular disease risk ↑",
            },
            {
              icon: "📢",
              title: "Hormones as amplifiers",
              color: "bg-orange-50 border-orange-200",
              textColor: "text-orange-900",
              body: "Dysregulated hormones worsen existing disease states. Chronically elevated cortisol raises blood pressure, promotes visceral fat, impairs immune function, and feeds insulin resistance — each of which compounds the others.",
              example: "Example: cortisol ↑ → insulin resistance → metabolic syndrome → type 2 diabetes risk ↑",
            },
            {
              icon: "🎯",
              title: "Hormones as disease drivers",
              color: "bg-rose-50 border-rose-200",
              textColor: "text-rose-900",
              body: "Some diseases are directly fuelled by hormones because the abnormal cells carry hormone receptors. The hormone signals the disease tissue to grow. Blocking the hormone or its receptor is then a treatment.",
              example: "Example: ER+ breast cancer is driven by estrogen binding to estrogen receptors on tumour cells — hence tamoxifen blocks those receptors.",
            },
          ].map((item) => (
            <div key={item.title} className={`border rounded-2xl p-5 ${item.color}`}>
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className={`font-bold text-sm mb-2 ${item.textColor}`}>{item.title}</div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">{item.body}</p>
              <div className="text-[11px] text-stone-500 italic border-t border-stone-200 pt-2">{item.example}</div>
            </div>
          ))}
        </div>

        {/* Disease risk table */}
        <h3 className="font-bold text-stone-800 mb-4">Perimenopause hormone shifts → long-term disease risk</h3>
        <div className="space-y-3">
          {diseaseRisks.map((row) => (
            <div key={row.hormone} className={`border rounded-xl overflow-hidden ${row.borderColor}`}>
              <div className={`px-5 py-3 flex items-center gap-3 ${row.headerColor}`}>
                <span className="text-xl">{row.emoji}</span>
                <div>
                  <div className={`font-bold text-sm ${row.textColor}`}>{row.hormone}</div>
                  <div className="text-xs text-stone-500">{row.shift}</div>
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {row.risks.map((risk) => (
                    <div key={risk.condition} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 text-xs font-bold px-1.5 py-0.5 rounded shrink-0 ${severityColor[risk.severity]}`}>
                        {risk.severity}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-stone-800">{risk.condition}</div>
                        <div className="text-xs text-stone-500 leading-relaxed">{risk.mechanism}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Severity key */}
        <div className="flex flex-wrap gap-3 mt-5 text-xs">
          <span className="text-stone-500 font-medium self-center">Risk level:</span>
          {Object.entries(severityColor).map(([k, v]) => (
            <span key={k} className={`px-2 py-1 rounded font-semibold ${v}`}>{k}</span>
          ))}
          <span className="text-stone-400 self-center ml-2">Based on population-level longitudinal data (SWAN, WHI, Nurses&apos; Health Study)</span>
        </div>

        {/* Compounding note */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <div className="font-bold text-stone-900 mb-1">The compounding problem</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                These risks don&apos;t operate in isolation. Insulin resistance raises cortisol. Cortisol disrupts sleep.
                Poor sleep suppresses growth hormone. Low GH accelerates muscle loss. Less muscle worsens insulin resistance.
                Visceral fat produces inflammatory cytokines that further dysregulate estrogen metabolism.
                Each shift amplifies the others — which is why <strong>the window of early perimenopause is the most important
                time to establish baselines, monitor, and intervene</strong> before the loops compound.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold mb-4">Why perimenopause feels so complex</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-stone-300 leading-relaxed">
          <div>
            <div className="text-white font-semibold mb-2">It&apos;s not one hormone</div>
            <p>Estrogen, progesterone, testosterone, DHEA, cortisol, insulin, thyroid, leptin, melatonin, growth hormone and oxytocin all shift simultaneously — and they all interact with each other.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">It&apos;s not a linear decline</div>
            <p>In early perimenopause, estrogen fluctuates erratically — sometimes surging higher than normal. This volatility, not just the eventual decline, is what drives the unpredictable nature of symptoms.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">The axes amplify each other</div>
            <p>Declining estrogen dysregulates the stress axis (more cortisol), which disrupts sleep (less melatonin and GH), which worsens insulin resistance (more visceral fat), which further disrupts cortisol. Each loop compounds the others.</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link href="/hormones" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          ← Full hormone guide
        </Link>
        <Link href="/symptoms" className="bg-amber-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-800 transition-colors">
          See symptoms by cluster →
        </Link>
      </div>
    </div>
  )
}

function MobileArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-4 bg-stone-300" />
      <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 8 8">
        <path d="M4 8L0 0h8L4 8z" />
      </svg>
      {label && <span className="text-[10px] text-stone-400 mt-0.5">{label}</span>}
    </div>
  )
}

function MobileStep({ node, arrow }: { node: HormoneNode; arrow?: string }) {
  return (
    <div className="flex flex-col items-center">
      <NodeCard node={node} />
      {arrow && (
        <div className="flex flex-col items-center py-1">
          <div className="w-px h-3 bg-stone-300" />
          <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 8 8">
            <path d="M4 8L0 0h8L4 8z" />
          </svg>
          <span className="text-[10px] text-stone-400">{arrow}</span>
        </div>
      )}
    </div>
  )
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="flex items-center gap-1 text-stone-400">
        <div className="w-6 h-px bg-stone-300" />
        <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 8 8">
          <path d="M0 0l8 4-8 4V0z" />
        </svg>
      </div>
      {label && <span className="text-[10px] text-stone-400 mt-0.5 max-w-16 text-center leading-tight">{label}</span>}
    </div>
  )
}

function NodeCard({ node, mini }: { node: HormoneNode; mini?: boolean }) {
  if (mini) {
    return (
      <div className={`border rounded-lg px-2.5 py-1.5 shrink-0 ${node.color} ${node.borderColor}`}>
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{node.emoji}</span>
          <span className={`text-xs font-semibold ${node.textColor}`}>{node.label.split(" ")[0]}</span>
        </div>
      </div>
    )
  }
  return (
    <div className={`border rounded-xl p-3 shrink-0 min-w-[100px] max-w-[140px] ${node.color} ${node.borderColor}`}>
      <div className="text-xl mb-1">{node.emoji}</div>
      <div className={`text-xs font-bold leading-tight ${node.textColor}`}>{node.label}</div>
      {node.sublabel && <div className="text-[10px] text-stone-400 mt-0.5">{node.sublabel}</div>}
    </div>
  )
}
