import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hormones and Mental Health — Hormonal Health Education',
  description:
    'Anxiety, depression, brain fog, and mood instability are among the most common hormonal symptoms — and the most frequently attributed to the wrong cause. The mechanisms and what helps.',
}

const mechanismCards = [
  {
    id: 'estrogen-serotonin',
    title: 'Estrogen and serotonin',
    hormone: 'Estrogen',
    neurotransmitter: 'Serotonin',
    accentBg: 'bg-rose-50',
    accentBorder: 'border-rose-200',
    accentText: 'text-rose-700',
    dotColor: 'bg-rose-400',
    body: 'Estrogen upregulates serotonin synthesis, increases serotonin receptor density, and inhibits MAO — the enzyme that breaks down serotonin. When estrogen fluctuates or declines, serotonin signalling destabilises, producing mood instability, irritability, and low mood that closely resembles depression.',
    implication:
      'This is why SSRIs work for perimenopausal mood changes — but also why estrogen itself works.',
  },
  {
    id: 'progesterone-gaba',
    title: 'Progesterone and GABA',
    hormone: 'Progesterone',
    neurotransmitter: 'GABA',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    accentText: 'text-indigo-700',
    dotColor: 'bg-indigo-400',
    body: 'Progesterone converts to allopregnanolone in the brain — a potent positive modulator of GABA-A receptors, the same receptors targeted by benzodiazepines. When progesterone falls (as it does first in perimenopause, and in the luteal phase of each cycle), GABA-A stimulation is lost.',
    implication:
      'The result: anxiety, sleep disruption, and stress hypersensitivity that feels identical to generalised anxiety disorder — but has a different underlying cause.',
  },
  {
    id: 'testosterone-dopamine',
    title: 'Testosterone and dopamine',
    hormone: 'Testosterone',
    neurotransmitter: 'Dopamine',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentText: 'text-blue-700',
    dotColor: 'bg-blue-400',
    body: 'Testosterone has direct effects on dopaminergic pathways — the reward, motivation, and drive systems. Low testosterone presents as anhedonia, loss of motivation, emotional numbness, and flat affect rather than sadness. The PHQ-9 depression screen will often score positively.',
    implication:
      'In men, this is frequently misread as primary depression. Antidepressants alone do not address the underlying dopaminergic deficit.',
  },
  {
    id: 'cortisol-stress',
    title: 'Cortisol and the stress response',
    hormone: 'Cortisol',
    neurotransmitter: 'HPA axis',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-700',
    dotColor: 'bg-amber-400',
    body: "Chronic cortisol elevation — common when estrogen's HPA-moderating effect is lost — is neurotoxic to the hippocampus over time. It impairs memory consolidation, amplifies anxiety responses, and reduces the threshold for stress reactivity.",
    implication:
      'High cortisol looks like anxiety and cognitive decline. It is frequently the bridge between hormonal disruption and psychiatric symptoms.',
  },
]

const treatmentRows = [
  {
    condition: 'Perimenopausal depression',
    firstLine: 'HRT (estrogen)',
    alsoConsider: 'SSRIs / SNRIs',
    notes: 'HRT has antidepressant effect specific to perimenopause — not postmenopause',
    accentColor: 'text-rose-700',
    bgColor: 'bg-rose-50',
  },
  {
    condition: 'Perimenopausal anxiety',
    firstLine: 'Micronised progesterone + HRT',
    alsoConsider: 'CBT, SSRIs',
    notes: "Progesterone's GABA-A effect addresses anxiety at the source",
    accentColor: 'text-indigo-700',
    bgColor: 'bg-indigo-50',
  },
  {
    condition: 'PMDD',
    firstLine: 'SSRIs (luteal phase or continuous)',
    alsoConsider: 'OCP, CBT',
    notes: 'Lifestyle: exercise reduces severity; alcohol worsens',
    accentColor: 'text-purple-700',
    bgColor: 'bg-purple-50',
  },
  {
    condition: 'Brain fog (hormonal)',
    firstLine: 'Treat sleep first; address thyroid / nutrients',
    alsoConsider: 'HRT (timing hypothesis)',
    notes: 'Rule out thyroid and B12 / ferritin before attributing to hormones',
    accentColor: 'text-stone-700',
    bgColor: 'bg-stone-50',
  },
  {
    condition: 'Male depression (low testosterone)',
    firstLine: 'Test and treat testosterone deficiency',
    alsoConsider: 'Psychotherapy, SSRIs',
    notes: 'TRT alone insufficient for established depression',
    accentColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
  },
  {
    condition: 'Male anxiety (low testosterone)',
    firstLine: 'Testosterone optimisation + sleep',
    alsoConsider: 'CBT, HPA lifestyle interventions',
    notes: 'Cortisol management critical',
    accentColor: 'text-teal-700',
    bgColor: 'bg-teal-50',
  },
]

export default function MentalHealthPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <span>Mental Health</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1 text-xs text-indigo-700 font-medium mb-4">
          <span>🧠</span>
          <span>Hormonal mechanisms · Female &amp; male · Treatments</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Hormones and Mental Health
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Anxiety, depression, brain fog, and mood instability are among the most common hormonal
          symptoms — and the most frequently attributed to the wrong cause.
        </p>
      </div>

      {/* Opening framing — dark background */}
      <div className="bg-slate-800 rounded-2xl p-8 mb-14 text-slate-100">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Three things worth knowing
        </h2>
        <div className="space-y-8">

          <div className="flex gap-5">
            <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
              1
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1.5">
                It&rsquo;s not in your head — it&rsquo;s in your hormones.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Estrogen regulates serotonin, norepinephrine, and GABA. Testosterone regulates
                dopamine and serotonin. When these hormones shift, brain chemistry shifts with them —
                not because you are anxious or weak, but because the neurochemical substrate has
                changed. The feelings are real; the cause is biological.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
              2
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1.5">
                Hormonal mental health is different from primary psychiatric disorders.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                It has a pattern — tied to cycle phase, life stage, or a specific hormonal change.
                It often responds to hormonal treatment rather than antidepressants alone. And it
                resolves or significantly improves when the underlying hormonal shift stabilises. These
                features distinguish it and should guide how it is investigated and treated.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
              3
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1.5">
                It is routinely misdiagnosed.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Women in perimenopause are prescribed antidepressants without a hormone panel ever
                being run. Men with low testosterone are told they are depressed without testosterone
                being tested. The misdiagnosis has a direct cost: treatment that does not address the
                cause, and years without resolution.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 1: Mechanisms */}
      <section className="mb-14" id="mechanisms">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">
            How hormones shape mood: the mechanisms
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed max-w-2xl">
            These are not metaphors. Hormones directly regulate neurotransmitter production,
            receptor density, and enzyme activity — all of which determine how your brain generates
            and sustains emotional states.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {mechanismCards.map((card) => (
            <div
              key={card.id}
              className={`bg-white border-2 ${card.accentBorder} rounded-2xl overflow-hidden`}
            >
              <div className={`${card.accentBg} ${card.accentBorder} border-b px-5 py-4`}>
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${card.dotColor} shrink-0`} />
                  <h3 className="font-semibold text-stone-900 text-base">{card.title}</h3>
                </div>
                <div className="flex gap-2 mt-2 ml-5">
                  <span className={`text-xs font-medium border rounded-full px-2 py-0.5 ${card.accentBg} ${card.accentBorder} ${card.accentText}`}>
                    {card.hormone}
                  </span>
                  <span className="text-xs font-medium border border-stone-200 rounded-full px-2 py-0.5 text-stone-500 bg-white">
                    {card.neurotransmitter}
                  </span>
                </div>
              </div>
              <div className="px-5 py-4 space-y-3">
                <p className="text-sm text-stone-700 leading-relaxed">{card.body}</p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <span className="font-semibold text-stone-700">Why this matters: </span>
                    {card.implication}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Presentations */}
      <section className="mb-14" id="presentations">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">
            What hormonal mental health looks like
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed max-w-2xl">
            The pattern differs by sex, life stage, and which hormonal shift is occurring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Female column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" />
              <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">Female</h3>
            </div>

            {/* Perimenopausal depression and anxiety */}
            <div className="bg-white border-2 border-rose-200 rounded-2xl overflow-hidden">
              <div className="bg-rose-50 border-b border-rose-200 px-5 py-3">
                <h4 className="font-semibold text-stone-900 text-sm">
                  Perimenopausal depression and anxiety
                </h4>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2.5">
                  {[
                    'First onset of depression in women who had no prior history',
                    'SWAN data: risk of a first depressive episode is approximately 2–4× higher during the perimenopause transition',
                    'Often tied to fluctuating (erratic, not just low) estrogen',
                    'May present as anxiety first — racing thoughts, sense of dread, palpitations, chest tightness',
                    'Frequently misdiagnosed as primary anxiety disorder or GAD',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="text-rose-300 mt-1 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PMDD */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-200 px-5 py-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-stone-900 text-sm">
                    PMDD — Premenstrual Dysphoric Disorder
                  </h4>
                  <span className="shrink-0 text-xs bg-purple-100 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">
                    3–8% prevalence
                  </span>
                </div>
              </div>
              <div className="px-5 py-4 space-y-3">
                <ul className="space-y-2.5">
                  {[
                    'Severe mood disruption, depression, anxiety, or rage in the 1–2 weeks before menstruation (luteal phase)',
                    'Caused by abnormal brain sensitivity to normal progesterone fluctuations — specifically the allopregnanolone system',
                    'Distinct from PMS: PMDD is disabling, not uncomfortable',
                    'Not a character flaw, not poor coping — a neurological sensitivity with a biological basis',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="text-purple-300 mt-1 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-purple-800 mb-1">Treatments with evidence</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    SSRIs (symptom-phase or continuous) · oral contraceptives (some formulations) ·
                    micronised progesterone (in some women) · exercise · reduced alcohol · consistent sleep
                  </p>
                </div>
              </div>
            </div>

            {/* Postpartum */}
            <div className="bg-white border-2 border-pink-200 rounded-2xl overflow-hidden">
              <div className="bg-pink-50 border-b border-pink-200 px-5 py-3">
                <h4 className="font-semibold text-stone-900 text-sm">
                  Postpartum mood disorders
                </h4>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs text-stone-500 mb-3 leading-relaxed">
                  Progesterone and estrogen both drop dramatically after delivery — one of the sharpest
                  hormonal shifts the body undergoes.
                </p>
                <div className="space-y-2">
                  {[
                    { label: 'Baby blues', desc: 'First 1–2 weeks; nearly universal and self-limiting', severity: 'Low' },
                    { label: 'Postpartum depression', desc: 'Affects ~10–15% of mothers; requires treatment', severity: 'Moderate' },
                    { label: 'Postpartum anxiety', desc: 'As common as PPD; frequently missed', severity: 'Moderate' },
                    { label: 'Postpartum psychosis', desc: 'Rare (1–2 per 1,000); psychiatric emergency', severity: 'High' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 text-sm">
                      <span className={`text-[10px] font-semibold mt-0.5 px-1.5 py-0.5 rounded shrink-0 ${
                        item.severity === 'High'
                          ? 'bg-red-100 text-red-700'
                          : item.severity === 'Moderate'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-stone-100 text-stone-500'
                      }`}>
                        {item.severity}
                      </span>
                      <div>
                        <span className="font-medium text-stone-800">{item.label}: </span>
                        <span className="text-stone-600">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Male column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
              <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">Male</h3>
            </div>

            {/* Low T and depression */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-200 px-5 py-3">
                <h4 className="font-semibold text-stone-900 text-sm">
                  Low testosterone and depression
                </h4>
              </div>
              <div className="px-5 py-4 space-y-3">
                <ul className="space-y-2.5">
                  {[
                    'Low testosterone presents differently from primary depression: irritability, withdrawal, emotional flatness, loss of drive — not sadness',
                    'Bidirectional relationship: depression suppresses testosterone; low testosterone causes depression',
                    'Blood testing is essential before attributing mood symptoms to primary depression in men',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="text-blue-300 mt-1 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <span className="font-semibold text-blue-800">Important: </span>
                    Testosterone replacement alone does not treat established major depression — but treating
                    the hormonal deficiency alongside psychotherapy or medication is more effective than either alone.
                  </p>
                </div>
              </div>
            </div>

            {/* Andropause and anxiety */}
            <div className="bg-white border-2 border-teal-200 rounded-2xl overflow-hidden">
              <div className="bg-teal-50 border-b border-teal-200 px-5 py-3">
                <h4 className="font-semibold text-stone-900 text-sm">
                  Andropause and anxiety
                </h4>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2.5">
                  {[
                    'Less studied than the female equivalent, but the mechanism is established',
                    'Testosterone supports HPA axis modulation; declining testosterone reduces cortisol buffering — driving anxiety and stress hypersensitivity',
                    'Often presents alongside other andropause symptoms: fatigue, sleep disruption, low libido',
                    'Cortisol dysregulation is frequently the proximate cause of the anxiety symptoms',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="text-teal-300 mt-1 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Shared note */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Common to both
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                The PHQ-9 (standard depression screen) does not distinguish hormonal from primary
                depression. A positive screen is a reason to investigate further — including checking
                hormone levels — not a reason to start antidepressants without a workup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What helps */}
      <section className="mb-14" id="what-helps">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">What helps — by condition</h2>
          <p className="text-stone-500 text-sm leading-relaxed max-w-2xl">
            Treatment depends on identifying the pattern correctly. The table below is a starting
            point; individual circumstances always require discussion with a clinician.
          </p>
        </div>

        {/* Mobile: cards. Desktop: table */}
        <div className="hidden md:block">
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wide">
              <div>Condition</div>
              <div>First-line</div>
              <div>Also consider</div>
              <div>Notes</div>
            </div>
            {treatmentRows.map((row, i) => (
              <div
                key={row.condition}
                className={`grid grid-cols-4 px-5 py-4 gap-4 text-sm border-b border-stone-100 last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                }`}
              >
                <div className="font-medium text-stone-800">{row.condition}</div>
                <div>
                  <span className={`inline-block text-xs font-medium rounded-lg px-2.5 py-1 ${row.bgColor} ${row.accentColor} border border-current/20`}>
                    {row.firstLine}
                  </span>
                </div>
                <div className="text-stone-600 text-xs leading-relaxed">{row.alsoConsider}</div>
                <div className="text-stone-500 text-xs leading-relaxed">{row.notes}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {treatmentRows.map((row) => (
            <div key={row.condition} className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-stone-50 border-b border-stone-200 px-4 py-3">
                <span className="font-semibold text-stone-900 text-sm">{row.condition}</span>
              </div>
              <div className="px-4 py-3 space-y-2">
                <div>
                  <span className="text-xs text-stone-500 block mb-1">First-line</span>
                  <span className={`inline-block text-xs font-medium rounded-lg px-2.5 py-1 ${row.bgColor} ${row.accentColor}`}>
                    {row.firstLine}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block mb-0.5">Also consider</span>
                  <span className="text-sm text-stone-700">{row.alsoConsider}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block mb-0.5">Notes</span>
                  <span className="text-xs text-stone-600 leading-relaxed">{row.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Link
            href="/what-helps#mood"
            className="text-xs text-indigo-700 hover:underline font-medium"
          >
            See full treatment evidence for mood symptoms →
          </Link>
        </div>
      </section>

      {/* Section 4: When to seek help */}
      <section className="mb-14" id="seek-help">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl overflow-hidden">
          <div className="bg-amber-100 border-b border-amber-200 px-6 py-4">
            <h2 className="text-xl font-bold text-stone-900">
              When it&rsquo;s not just hormones — knowing when to seek help
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Hormonal mental health and primary psychiatric disorders can coexist. Identifying the
              hormonal component does not mean other care is unnecessary.
            </p>
          </div>
          <div className="px-6 py-6 space-y-5">

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
                <span className="text-red-600 text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Suicidal thoughts or self-harm — seek help now
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Hormonal treatment alone is not appropriate here. Speak to a doctor, mental health
                  professional, or crisis service. For country-specific crisis lines, search
                  &ldquo;mental health crisis line&rdquo; plus your country name — numbers change
                  and we do not list them here to avoid out-of-date information.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center">
                <span className="text-amber-700 text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  If mood symptoms don&rsquo;t improve with hormonal treatment within 3 months
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  A psychiatric evaluation is appropriate. Some people have both a hormonal
                  component and an independent depressive or anxiety disorder. Both can be addressed
                  simultaneously.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center">
                <span className="text-pink-600 text-sm">+</span>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Perinatal mood disorders (pregnancy or postpartum)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  If symptoms are severe, escalating, or affecting your ability to care for yourself
                  or your baby — seek help immediately. Postpartum psychosis is a medical emergency.
                  Postpartum depression and anxiety are treatable; you do not need to wait.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: A note on diagnosis */}
      <section className="mb-14" id="diagnosis">
        <div className="bg-white border-2 border-indigo-200 rounded-2xl overflow-hidden">
          <div className="bg-indigo-50 border-b border-indigo-200 px-6 py-4">
            <h2 className="text-xl font-bold text-stone-900">
              A note on diagnosis
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Before accepting a primary psychiatric diagnosis, ensure the following have been checked.
            </p>
          </div>
          <div className="px-6 py-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Hormone panel',
                  desc: 'FSH, estradiol, progesterone, testosterone (free and total), thyroid panel, cortisol (AM)',
                  icon: '🧪',
                },
                {
                  title: 'Thyroid function specifically',
                  desc: 'Hypothyroidism causes depression, anxiety, and brain fog — and is commonly missed on a basic TSH alone. Request TSH + Free T4, and Free T3 if symptomatic.',
                  icon: '🦋',
                },
                {
                  title: 'Nutrient deficiencies',
                  desc: 'B12, ferritin, folate, and vitamin D all cause mood symptoms and cognitive impairment. These are easily treated once identified.',
                  icon: '⚗️',
                },
                {
                  title: 'Cycle phase documentation',
                  desc: 'For cycle-related symptoms, track when they occur. Symptoms only in the luteal phase (week before period) point to a progesterone or allopregnanolone mechanism.',
                  icon: '📅',
                },
                {
                  title: 'Sleep quality',
                  desc: 'Poor or disrupted sleep is one of the most potent drivers of mood and cognitive symptoms. Treating sleep independently often resolves what looks like depression or brain fog.',
                  icon: '🌙',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3"
                >
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-stone-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3">
              <p className="text-xs text-indigo-800 leading-relaxed">
                <span className="font-semibold">If you have been diagnosed with depression or anxiety </span>
                and treatment has not worked well, or if symptoms align with hormonal patterns described
                on this page, it is reasonable to ask your doctor to run a hormonal workup before
                adjusting psychiatric medication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-10">
        <strong>For education only.</strong> Nothing here is medical advice. All treatment decisions
        should be made with a qualified healthcare provider who knows your full history.
      </div>

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/symptoms" className="text-indigo-700 hover:underline font-medium">
            ← Female symptoms
          </Link>
          <Link href="/male/andropause#symptoms" className="text-indigo-700 hover:underline font-medium">
            ← Male / andropause symptoms
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/what-helps" className="text-indigo-700 hover:underline font-medium">
            What helps →
          </Link>
          <Link href="/talk-to-your-doctor" className="text-indigo-700 hover:underline font-medium">
            Talk to your doctor →
          </Link>
        </div>
      </div>

    </div>
  )
}
