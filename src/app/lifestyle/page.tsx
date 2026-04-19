import Link from 'next/link'

// Evidence badge colours aligned with interventions.ts
const evidenceBadge = {
  strong:   { label: '★★★ Strong evidence',   color: 'bg-green-100 text-green-800' },
  moderate: { label: '★★ Moderate evidence',  color: 'bg-yellow-100 text-yellow-800' },
  harm:     { label: '★★★ Strong evidence (harm)', color: 'bg-red-100 text-red-800' },
}

// Supplement table rows
const supplements = [
  {
    name: 'Vitamin D3 + K2',
    evidence: 'Strong for deficiency',
    evidenceLevel: 'strong' as const,
    who: 'Very common deficiency across both sexes',
    notes: 'Test first — target 75–100 nmol/L. K2 improves calcium routing to bone.',
  },
  {
    name: 'Magnesium glycinate',
    evidence: 'Moderate',
    evidenceLevel: 'moderate' as const,
    who: 'Sleep disruption, anxiety, insulin resistance',
    notes: 'Most people are deficient. RBC magnesium more accurate than serum. 300–400 mg before bed.',
  },
  {
    name: 'Zinc',
    evidence: 'Moderate',
    evidenceLevel: 'moderate' as const,
    who: 'Men with deficiency or high alcohol intake',
    notes: 'Only effective if deficient — excess zinc is harmful. Food sources (oysters, pumpkin seeds) preferred.',
  },
  {
    name: 'Omega-3 (EPA/DHA)',
    evidence: 'Moderate',
    evidenceLevel: 'moderate' as const,
    who: 'Cardiovascular risk, chronic inflammation',
    notes: '2 g EPA+DHA daily. Oily fish 3×/week is equally effective and preferable to supplements.',
  },
  {
    name: 'Ashwagandha KSM-66',
    evidence: 'Moderate (industry-funded caveat)',
    evidenceLevel: 'moderate' as const,
    who: 'Elevated cortisol/stress; modest testosterone support in men',
    notes: '300–600 mg daily. 8–12 weeks to see effect. Most trials are industry-funded — interpret with caution.',
  },
  {
    name: 'Creatine monohydrate',
    evidence: 'Strong for muscle',
    evidenceLevel: 'strong' as const,
    who: 'Both sexes over 40; anyone doing resistance training',
    notes: '3–5 g/day. One of the most evidence-backed supplements overall. Emerging data on cognitive benefit.',
  },
]

export default function LifestylePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-stone-700">Lifestyle</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 text-xs text-teal-700 font-medium mb-4">
          <span>🌿</span>
          <span>Both sexes · All life stages · Evidence-based</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Lifestyle &amp; Hormonal Health
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
          Lifestyle isn&apos;t the consolation prize when medication isn&apos;t appropriate — for many people it&apos;s
          the most effective intervention available. Here&apos;s what the evidence actually says.
        </p>
      </div>

      {/* Evidence key */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-stone-700 mb-3">Evidence rating key</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-800">★★★ Strong</span>
            <span className="text-xs text-stone-500">Multiple randomised controlled trials</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800">★★ Moderate</span>
            <span className="text-xs text-stone-500">Good trials but more limited in scope</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-800">★★★ Harm</span>
            <span className="text-xs text-stone-500">Strong evidence of hormonal harm</span>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-stone-200">
        {[
          { href: '#resistance-training', label: 'Resistance training' },
          { href: '#sleep', label: 'Sleep' },
          { href: '#diet', label: 'Diet' },
          { href: '#stress', label: 'Stress & cortisol' },
          { href: '#alcohol', label: 'Alcohol' },
          { href: '#supplements', label: 'Supplements' },
        ].map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full font-medium hover:bg-teal-50 hover:border-teal-300 hover:text-teal-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Important framing callout */}
      <div className="bg-teal-900 text-white rounded-2xl p-7 mb-14">
        <h2 className="text-xl font-bold mb-3">Important framing</h2>
        <div className="grid md:grid-cols-2 gap-5 text-sm text-teal-100 leading-relaxed">
          <div>
            <p className="mb-3">
              <strong className="text-white">Lifestyle interventions work.</strong> But &ldquo;eat better and
              exercise more&rdquo; is not useful advice — and most people have already heard it. This page
              gives specific, evidence-graded recommendations with the mechanism behind why each works
              hormonally, not just generally.
            </p>
            <p>
              <strong className="text-white">Mechanism matters.</strong> Sleep is a hormonal intervention
              because testosterone is produced during REM sleep. Resistance training matters hormonally
              because it is the only non-pharmacological approach with strong evidence for bone density.
              The why changes what you prioritise.
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong className="text-white">Both sexes benefit from the same fundamentals.</strong> The
              hormonal pathways that sleep, resistance training, and stress management affect are shared
              across sexes — testosterone, cortisol, insulin, growth hormone. These are not
              &ldquo;wellness tips&rdquo;; they are mechanistically significant interventions.
            </p>
            <p>
              <strong className="text-white">Lifestyle and clinical treatment are not alternatives.</strong> For
              many people, lifestyle interventions are sufficient. For others, they are the essential
              foundation that makes clinical treatment more effective — or necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-16">

        {/* ── Section 1: Resistance Training ─────────────────────────── */}
        <section id="resistance-training" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">1. Resistance Training</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${evidenceBadge.strong.color}`}>
              {evidenceBadge.strong.label}
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">Applies to: both sexes, all life stages from puberty onward</p>

          {/* Why box */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-5">
            <h3 className="font-semibold text-teal-900 mb-3">Why this works hormonally</h3>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Bone density:</strong> The only non-pharmacological intervention with strong evidence for
                  building bone (not just slowing loss). Mechanical load stimulates osteoblast activity.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Testosterone:</strong> Raises testosterone 10–15% in hypogonadal and overweight individuals.
                  Acute hormonal response to heavy compound lifts is well-established.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Insulin sensitivity:</strong> Reduces visceral fat more effectively than cardio alone.
                  Muscle tissue is the body&apos;s primary glucose sink — more muscle means better blood sugar regulation.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Growth hormone:</strong> GH is released in pulses during and after resistance exercise.
                  This response declines with age and is one mechanism through which training partially compensates
                  for hormonal decline.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Mood:</strong> Reduces depression and anxiety via dopaminergic and serotonergic pathways —
                  with effect sizes comparable to antidepressants in mild-to-moderate depression.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Sarcopenia:</strong> Muscle loss is accelerated when estrogen and testosterone decline.
                  Resistance training is the primary countermeasure — and the window to establish the habit matters.
                </span>
              </li>
            </ul>
          </div>

          {/* Practical box */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-800 mb-3">Practical starting point</h3>
            <ul className="space-y-2 text-sm text-stone-600 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Frequency:</strong> 2–3 sessions per week is the minimum effective dose. 3–4 is optimal for most people.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Movements:</strong> Compound exercises (squats, deadlifts, rows, press) produce the strongest hormonal response because they recruit the most muscle mass.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Progressive overload:</strong> The body adapts to a fixed stimulus. Intensity must increase over time — this is not optional; it is the mechanism of benefit.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Timeline:</strong> Functional benefits (strength, mood) appear within 8–12 weeks. Bone density changes take 6–12 months — but that window has already started.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Section 2: Sleep ─────────────────────────────────────────── */}
        <section id="sleep" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">2. Sleep Optimisation</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${evidenceBadge.strong.color}`}>
              {evidenceBadge.strong.label}
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">Applies to: both sexes — especially high impact from the 40s onward</p>

          {/* Why box */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-5">
            <h3 className="font-semibold text-teal-900 mb-3">Why sleep is a hormonal intervention</h3>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Testosterone:</strong> Produced primarily during sleep, especially REM. One week of
                  5-hour nights reduces testosterone by 10–15% in young men — equivalent to 10–15 years of ageing.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Growth hormone:</strong> Released in pulses during deep (slow-wave) sleep. Disrupted
                  sleep = disrupted GH = faster muscle loss and reduced recovery capacity.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Cortisol rhythm:</strong> Resets during sleep. Poor sleep → elevated cortisol → visceral
                  fat accumulation → insulin resistance → downstream hormonal disruption.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span>
                  <strong>Melatonin:</strong> Suppressed by light and disrupted by night sweats. Treating the
                  hormonal cause of night sweats (perimenopause) works better than supplementing melatonin.
                </span>
              </li>
            </ul>
          </div>

          {/* Practical box */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-800 mb-3">Practical starting point</h3>
            <ul className="space-y-2 text-sm text-stone-600 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Duration:</strong> 7–9 hours is the evidence-based target. Below 7 hours, hormonal effects are measurable and significant.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Consistency:</strong> Consistent wake time matters more than consistent bedtime — it anchors the circadian rhythm that governs hormone release.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Temperature:</strong> Cool bedroom (16–19°C / 60–67°F). Core body temperature must fall to initiate and maintain deep sleep.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Screens:</strong> Blue-spectrum light suppresses melatonin. Dim screens 90 minutes before bed or use amber/night mode.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span><strong className="text-stone-800">Alcohol:</strong> Disrupts REM sleep even at moderate doses (1–2 drinks). The sedating effect masks the sleep architecture disruption.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-400 shrink-0 mt-0.5">•</span>
                <span>
                  <strong className="text-stone-800">Sleep apnoea:</strong> Screen for it — particularly important for men and perimenopausal women (prevalence increases significantly). Untreated sleep apnoea is one of the most common reversible causes of low testosterone.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Section 3: Diet ──────────────────────────────────────────── */}
        <section id="diet" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">3. Diet — What the Evidence Actually Supports</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${evidenceBadge.moderate.color}`}>
              ★★ Moderate overall (specific elements stronger)
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">
            Rather than a &ldquo;diet approach&rdquo;, specific dietary factors with hormonal mechanisms.
          </p>

          <div className="space-y-5">

            {/* Protein */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-6 py-4 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-teal-900">Protein</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-800 shrink-0">
                  ★★★ Strong (muscle preservation)
                </span>
              </div>
              <div className="px-6 py-5">
                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Why it works hormonally</div>
                    <ul className="space-y-1.5 text-stone-600 leading-relaxed">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Protein synthesis requires leucine threshold — distribution across meals matters as much as total intake</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Post-40, anabolic resistance means you need more protein for the same muscle-building effect</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Preserves the muscle mass that hormonal decline accelerates losing</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Practical target</div>
                    <div className="bg-teal-50 rounded-xl px-4 py-3 text-stone-700 leading-relaxed">
                      <strong>1.6–2.2 g per kg bodyweight per day.</strong> Distribute across meals rather than concentrating at one sitting. Sources: meat, fish, eggs, dairy, legumes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fibre and estrobolome */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-6 py-4 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-teal-900">Dietary Fibre &amp; the Estrobolome</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 shrink-0">
                  ★★ Moderate
                </span>
              </div>
              <div className="px-6 py-5">
                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Why it works hormonally</div>
                    <ul className="space-y-1.5 text-stone-600 leading-relaxed">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>The gut microbiome contains bacteria (the estrobolome) that metabolise estrogen and determine how much is reabsorbed vs excreted</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>High-fibre diets support estrobolome diversity → better estrogen metabolism</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Ultra-processed foods and antibiotics disrupt the estrobolome — relevant to both estrogen-dominant conditions and estrogen-deficient ones</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Practical target</div>
                    <div className="bg-teal-50 rounded-xl px-4 py-3 text-stone-700 leading-relaxed">
                      <strong>30 g+ fibre per day</strong> from diverse plant sources. Variety of plants matters more than any single source — aim for 30+ different plant foods per week.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mediterranean pattern */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-6 py-4 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-teal-900">Mediterranean Pattern</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 shrink-0">
                  ★★ Moderate (cardiovascular strong)
                </span>
              </div>
              <div className="px-6 py-5">
                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Why it works hormonally</div>
                    <ul className="space-y-1.5 text-stone-600 leading-relaxed">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Best-evidenced dietary pattern for cardiovascular and metabolic health</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Reduces LDL and systemic inflammation, improves insulin sensitivity</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Not a low-fat diet — olive oil, nuts, and fish are central. Dietary fat is required for steroid hormone synthesis</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">What to reduce</div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-stone-700 leading-relaxed text-xs">
                      Processed meat, refined carbohydrates, seed oils in large quantities. These are the dietary components with the most consistent evidence of hormonal and metabolic harm.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blood sugar */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-100 px-6 py-4 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-teal-900">Blood Sugar Stability</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 shrink-0">
                  ★★ Moderate
                </span>
              </div>
              <div className="px-6 py-5">
                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Why it matters hormonally</div>
                    <ul className="space-y-1.5 text-stone-600 leading-relaxed">
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Insulin resistance worsens during perimenopause and andropause — both estrogen and testosterone improve insulin sensitivity</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Refined carbohydrates → glucose spikes → compensatory insulin → progressive insulin resistance</li>
                      <li className="flex gap-2"><span className="text-teal-400 shrink-0">→</span>Insulin resistance drives visceral fat → aromatase → worsened hormonal imbalance in both sexes</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Simple levers</div>
                    <div className="bg-teal-50 rounded-xl px-4 py-3 text-stone-700 leading-relaxed space-y-1.5 text-xs">
                      <p><strong>Eat protein and fibre first</strong> at meals — it blunts the glucose response from carbohydrates eaten after.</p>
                      <p><strong>10-minute walk after meals</strong> significantly improves glucose disposal into muscle — no equipment required.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What doesn't help */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-900 mb-3 text-sm">What doesn&apos;t help hormonally — and why</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
                <div className="flex gap-2.5">
                  <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                  <div><strong className="text-red-900">Severe caloric restriction</strong> — raises cortisol significantly, suppresses testosterone production, and accelerates muscle loss (the opposite of what is needed during hormonal decline).</div>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                  <div><strong className="text-red-900">Very low fat diets</strong> — cholesterol is the direct precursor to all steroid hormones (testosterone, estrogen, cortisol). Dietary fat restriction below approximately 20% of calories measurably reduces testosterone.</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 4: Stress & Cortisol ─────────────────────────────── */}
        <section id="stress" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">4. Stress Management &amp; Cortisol</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${evidenceBadge.moderate.color}`}>
              {evidenceBadge.moderate.label}
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">The hormonal case for stress management — not just wellness advice</p>

          {/* Why box */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-5">
            <h3 className="font-semibold text-teal-900 mb-3">Why this works hormonally</h3>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span><strong>Testosterone suppression:</strong> Chronic cortisol elevation directly inhibits Leydig cell function — the testosterone-producing cells in men. This is not a small effect.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span><strong>HPA axis disruption:</strong> Estrogen normally modulates the HPA (stress) axis. As estrogen declines in perimenopause, stress response becomes dysregulated — chronic stress worsens the hormonal decline.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span><strong>Visceral fat cycle:</strong> Cortisol promotes visceral fat storage → elevated aromatase activity → in men, more testosterone converts to estrogen; in women during postmenopause, peripheral estrogen production rises relative to ovarian.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-500 shrink-0 mt-0.5">→</span>
                <span><strong>Metabolic cascade:</strong> High cortisol → elevated blood glucose → compensatory insulin → insulin resistance → metabolic syndrome. Stress management is metabolic medicine.</span>
              </li>
            </ul>
          </div>

          {/* What works */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-800 mb-4">What works — with the mechanism</h3>
            <div className="space-y-4">
              {[
                {
                  label: 'Zone 2 aerobic exercise',
                  desc: 'Conversational pace, 30–45 min, 3–5×/week. Reduces cortisol and improves HRV (heart rate variability — a proxy for autonomic nervous system health and stress resilience). Distinct from high-intensity training, which transiently raises cortisol.',
                },
                {
                  label: 'Breath work',
                  desc: 'Slow breathing (4-7-8, box breathing, or simply extending the exhale) activates the parasympathetic nervous system and acutely lowers cortisol. One of the few interventions with immediate measurable effect on the stress response.',
                },
                {
                  label: 'Social connection and physical touch',
                  desc: 'Oxytocin release from physical touch and positive social interaction directly buffers the cortisol response. This is not anecdotal — it is a well-characterised neuroendocrine mechanism.',
                },
                {
                  label: 'Nature exposure',
                  desc: 'Multiple studies show measurable cortisol reduction with even short outdoor time (20–30 min in a natural environment). Effect is dose-dependent and independent of exercise.',
                },
              ].map(item => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <span className="text-teal-500 shrink-0 mt-1">✓</span>
                  <div>
                    <strong className="text-stone-800">{item.label} — </strong>
                    <span className="text-stone-600 leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800">
              <strong>What doesn&apos;t work:</strong> &ldquo;De-stress&rdquo; advice without addressing either the sources of stress or the underlying hormonal dysregulation. Cortisol management matters more, not less, when hormones are declining — because the buffer capacity is reduced.
            </div>
          </div>
        </section>

        {/* ── Section 5: Alcohol ───────────────────────────────────────── */}
        <section id="alcohol" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">5. Alcohol</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${evidenceBadge.harm.color}`}>
              {evidenceBadge.harm.label}
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">Often underestimated in the hormonal context</p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-5">
            <h3 className="font-semibold text-red-900 mb-3">Why this works hormonally — harm direction</h3>
            <ul className="space-y-2 text-sm text-stone-700 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-red-400 shrink-0 mt-0.5">→</span>
                <span><strong>Testosterone:</strong> Alcohol is directly toxic to Leydig cells (testosterone-producing). Even moderate intake measurably suppresses testosterone production.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-red-400 shrink-0 mt-0.5">→</span>
                <span><strong>Aromatase:</strong> Alcohol raises aromatase activity — more testosterone is converted to estrogen. In men this compounds the Leydig cell toxicity. In women it contributes to estrogen-dominant patterns.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-red-400 shrink-0 mt-0.5">→</span>
                <span><strong>Sleep architecture:</strong> Disrupts REM sleep even at 1–2 drinks. The sedating effect is genuine but short-lived; the REM suppression persists through the second half of the night.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-red-400 shrink-0 mt-0.5">→</span>
                <span><strong>Cortisol:</strong> Raises cortisol, both acutely and chronically in regular drinkers — compounding the testosterone suppression effect.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-red-400 shrink-0 mt-0.5">→</span>
                <span><strong>Vasomotor symptoms:</strong> Exacerbates hot flashes in perimenopausal women via vasodilation and hormonal disruption.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl px-6 py-4 text-sm text-stone-600 leading-relaxed">
            <strong className="text-stone-800">No safe threshold for hormonal health.</strong> The evidence does not support a &ldquo;safe&rdquo; level of alcohol for hormonal optimisation. Any reduction improves hormonal status. This is not a moral judgement — it is a mechanistic statement about how alcohol interacts with steroid hormone production.
          </div>
        </section>

        {/* ── Section 6: Supplements ───────────────────────────────────── */}
        <section id="supplements" className="scroll-mt-20">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-stone-900">6. Key Supplements with Evidence</h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
              Adjuncts — not replacements for food or medication
            </span>
          </div>
          <p className="text-sm text-stone-500 mb-6">
            These are not magic pills. They are compounds where the evidence is strong enough to warrant consideration,
            particularly where dietary intake is insufficient or absorption is impaired with age.
          </p>

          {/* Table — desktop */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-50 border-b border-teal-100 text-left">
                  <th className="px-5 py-3 font-semibold text-teal-900 text-xs uppercase tracking-wide">Supplement</th>
                  <th className="px-5 py-3 font-semibold text-teal-900 text-xs uppercase tracking-wide">Evidence</th>
                  <th className="px-5 py-3 font-semibold text-teal-900 text-xs uppercase tracking-wide">Who benefits most</th>
                  <th className="px-5 py-3 font-semibold text-teal-900 text-xs uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {supplements.map((s) => (
                  <tr key={s.name} className="bg-white hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-900 align-top">{s.name}</td>
                    <td className="px-5 py-4 align-top">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        s.evidenceLevel === 'strong' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {s.evidence}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-stone-600 align-top text-xs leading-relaxed">{s.who}</td>
                    <td className="px-5 py-4 text-stone-500 align-top text-xs leading-relaxed">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="md:hidden space-y-3">
            {supplements.map((s) => (
              <div key={s.name} className="bg-white border border-stone-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-semibold text-stone-900 text-sm">{s.name}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                    s.evidenceLevel === 'strong' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {s.evidence}
                  </span>
                </div>
                <p className="text-xs text-stone-600 mb-1.5"><strong className="text-stone-700">Who: </strong>{s.who}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{s.notes}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-stone-50 border border-stone-200 rounded-xl px-5 py-3 text-xs text-stone-500 leading-relaxed">
            Supplements should be considered after establishing the lifestyle foundations above. Many deficiencies that supplements correct are better addressed through diet — testing before supplementing avoids unnecessary intake.
          </div>
        </section>

      </div>{/* end main content */}

      {/* Disclaimer */}
      <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
        <strong>This is educational information, not clinical advice.</strong> Evidence ratings reflect
        population-level trial data. The right combination of lifestyle interventions depends on your individual
        health history, current hormonal status, and other medications. Discuss any significant changes with a
        qualified clinician.
      </div>

      {/* Bottom nav */}
      <div className="mt-8 pt-8 border-t border-stone-200">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <Link href="/" className="text-teal-700 hover:underline text-sm font-medium">
            ← Home
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/what-helps"
              className="bg-white border border-stone-300 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              All treatments →
            </Link>
            <Link
              href="/symptoms"
              className="bg-white border border-stone-300 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              Symptom guide →
            </Link>
            <Link
              href="/male/andropause#treatments"
              className="bg-white border border-stone-300 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              Andropause treatments →
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
