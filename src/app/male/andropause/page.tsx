import Link from 'next/link'
import { maleSymptoms, maleTreatments, maleLabs } from '@/data/male'

const evidenceLabels = {
  A: { label: 'Strong evidence', color: 'bg-emerald-100 text-emerald-800', desc: 'Multiple RCTs or meta-analyses' },
  B: { label: 'Good evidence', color: 'bg-blue-100 text-blue-800', desc: 'RCTs or strong observational data' },
  C: { label: 'Emerging', color: 'bg-amber-100 text-amber-800', desc: 'Limited trials, mixed results' },
}

const typeLabels = {
  hormonal:    { label: 'Hormonal', color: 'bg-rose-100 text-rose-800' },
  lifestyle:   { label: 'Lifestyle', color: 'bg-green-100 text-green-800' },
  supplement:  { label: 'Supplement', color: 'bg-amber-100 text-amber-800' },
  other:       { label: 'Other', color: 'bg-stone-100 text-stone-700' },
}

const symptomColors: Record<string, { bg: string; border: string; text: string }> = {
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-900' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-900' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-900' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-900' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-900' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-900' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-900' },
}

export default function AndropausePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/male" className="hover:text-stone-700">Male</Link>
        <span className="mx-2">›</span>
        <span>Andropause</span>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-stone-50 to-orange-50/30 border border-blue-200 rounded-2xl p-8 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-3 py-1 text-xs text-blue-700 font-medium mb-4">
            <span>📉</span>
            <span>Male · Ages 40–60 · Late-onset hypogonadism</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Andropause
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-4">
            The gradual decline of testosterone — and other hormones — in middle-aged and older men.
            Unlike female perimenopause, it is slow, quiet, and almost universally attributed to stress,
            ageing, or poor lifestyle rather than investigated as a hormonal condition.
          </p>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            Late-onset hypogonadism (clinically defined as low testosterone with symptoms) affects an
            estimated 10–40% of men over 45. Symptoms are real, they compound, and many are highly treatable.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#symptoms" className="bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors">
              Explore symptoms →
            </a>
            <a href="#labs" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
              Lab guide
            </a>
          </div>
        </div>
      </div>

      {/* What is andropause */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What is actually happening</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                <strong className="text-stone-800">Testosterone peaks at around 19–20.</strong> From the late 20s, free testosterone begins a decline of ~1–2% per year. By the mid-50s, many men have free testosterone 30–50% lower than their peak. Total testosterone often looks normal because SHBG (a binding protein) rises with age, hiding the true decline.
              </p>
              <p>
                <strong className="text-stone-800">Free testosterone is what matters.</strong> SHBG binds testosterone and renders it biologically inactive. A man with &ldquo;normal&rdquo; total testosterone but high SHBG may have very low free testosterone — and all the symptoms that come with it.
              </p>
              <p>
                <strong className="text-stone-800">Visceral fat accelerates the decline.</strong> Fat tissue contains the enzyme aromatase, which converts testosterone to estrogen. As men age and fat accumulates, aromatase activity rises, estrogen rises, and testosterone falls further. This creates a self-reinforcing cycle.
              </p>
              <p>
                <strong className="text-stone-800">Sleep is a major driver.</strong> Testosterone is released in pulses during sleep — especially REM sleep. Sleep disruption directly reduces testosterone. Sleep apnoea, common in middle-aged men, is one of the most frequently missed and reversible causes of low testosterone.
              </p>
              <p>
                <strong className="text-stone-800">The stress axis compounds it.</strong> Cortisol directly inhibits Leydig cell testosterone production. Chronic stress → chronically elevated cortisol → lower testosterone. Treating stress and sleep is not optional — it is mechanistically necessary.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="font-semibold text-blue-900 mb-2 text-sm">Why it is so often missed</div>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Decline is so gradual that men adapt without realising they have lost function.</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Symptoms (fatigue, low mood, reduced drive) are attributed to work stress or getting older.</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Men are less likely to report symptoms or seek evaluation for them.</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> Testosterone is rarely tested unless a man specifically requests it.</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span> &ldquo;Normal&rdquo; total testosterone can mask low <em>free</em> testosterone — most labs only test total.</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="font-semibold text-orange-900 mb-2 text-sm">The testosterone-fat-cortisol loop</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Visceral fat → aromatase converts T to estrogen → testosterone falls → muscle loss → more fat accumulation → more aromatase.
                Chronic stress → cortisol → directly suppresses testosterone production.
                Sleep apnoea → disrupted REM → testosterone release suppressed.
                <br /><br />
                Each driver compounds the others. Treatment requires addressing all three.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <div className="font-semibold text-stone-800 mb-2 text-sm">Key distinction: primary vs secondary hypogonadism</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Primary:</strong> testes fail to produce testosterone despite normal LH/FSH (high LH + low T = testicular problem).<br />
                <strong>Secondary:</strong> pituitary or hypothalamus fails to signal the testes (low LH + low T = central problem — often reversible with clomiphene).<br /><br />
                LH + FSH testing is essential to identify which — because treatment differs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="mb-14 scroll-mt-20">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Symptoms of andropause</h2>
        <p className="text-sm text-stone-500 mb-6">
          These symptoms are real, have specific hormonal causes, and are not simply &ldquo;normal ageing.&rdquo;
        </p>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-stone-200">
          {maleSymptoms.map(s => (
            <a key={s.id} href={`#symptom-${s.id}`} className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-3 py-1.5 text-xs text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors">
              <span>{s.emoji}</span>
              <span>{s.name}</span>
            </a>
          ))}
        </div>

        <div className="space-y-6">
          {maleSymptoms.map(symptom => {
            const c = symptomColors[symptom.color] ?? symptomColors.amber
            return (
              <div key={symptom.id} id={`symptom-${symptom.id}`} className={`border rounded-2xl overflow-hidden scroll-mt-20 ${c.border}`}>
                <div className={`px-6 py-4 flex items-center gap-3 ${c.bg}`}>
                  <span className="text-2xl">{symptom.emoji}</span>
                  <div>
                    <div className={`font-bold ${c.text}`}>{symptom.name}</div>
                    <div className="text-xs text-stone-500">Caused by: {symptom.cause}</div>
                  </div>
                </div>
                <div className="bg-white px-6 py-5">
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">{symptom.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Tests to ask for</div>
                      <div className="flex flex-wrap gap-1.5">
                        {symptom.tests.map(t => (
                          <span key={t} className="text-[11px] bg-stone-50 border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-stone-50 border border-stone-100 rounded-lg px-4 py-3 text-xs text-stone-600 leading-relaxed">
                      {symptom.notes}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* What helps */}
      <section id="treatments" className="mb-14 scroll-mt-20">
        <h2 className="text-xl font-bold text-stone-900 mb-2">What actually helps</h2>
        <p className="text-sm text-stone-500 mb-6">Evidence-rated interventions — hormonal, lifestyle, and supplements.</p>

        {/* Evidence key */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white border border-stone-200 rounded-xl">
          <span className="text-xs text-stone-500 font-medium self-center">Evidence:</span>
          {Object.entries(evidenceLabels).map(([k, v]) => (
            <div key={k} className="flex items-center gap-1.5">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${v.color}`}>{v.label}</span>
              <span className="text-xs text-stone-400">{v.desc}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {maleTreatments.map(t => (
            <div key={t.name} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
              <div className="px-6 py-4 flex items-center justify-between gap-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeLabels[t.type].color}`}>{typeLabels[t.type].label}</span>
                  <span className="font-bold text-stone-900">{t.name}</span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${evidenceLabels[t.evidence].color}`}>{evidenceLabels[t.evidence].label}</span>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{t.description}</p>
                <div className="flex items-start gap-2 bg-stone-50 border border-stone-100 rounded-lg px-4 py-2.5 text-xs text-stone-600">
                  <span className="text-stone-400 shrink-0">Note:</span>
                  <span>{t.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Labs */}
      <section id="labs" className="mb-14 scroll-mt-20">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Lab guide — what to test and why</h2>
        <p className="text-sm text-stone-500 mb-6">
          The most important rule: <strong className="text-stone-700">always test total testosterone in the morning (before 10am)</strong> — levels peak on waking and fall by 30–40% through the day. A single afternoon test is unreliable.
        </p>
        <div className="space-y-3">
          {maleLabs.map(lab => (
            <div key={lab.test} className="border border-stone-200 rounded-xl overflow-hidden">
              <div className="bg-stone-50 px-5 py-3 border-b border-stone-200 flex items-center justify-between">
                <span className="font-semibold text-stone-900">{lab.test}</span>
                <span className="text-xs text-stone-500 bg-white border border-stone-200 rounded-full px-2.5 py-0.5">{lab.timing}</span>
              </div>
              <div className="bg-white px-5 py-4 grid sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-semibold text-stone-500 uppercase tracking-wider text-[10px] mb-1">Reference range</div>
                  <div className="text-stone-700">{lab.normal}</div>
                </div>
                <div>
                  <div className="font-semibold text-stone-500 uppercase tracking-wider text-[10px] mb-1">Clinical threshold</div>
                  <div className="text-stone-700">{lab.low}</div>
                </div>
                <div>
                  <div className="font-semibold text-stone-500 uppercase tracking-wider text-[10px] mb-1">Notes</div>
                  <div className="text-stone-600 leading-relaxed">{lab.notes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perimenopause parallel */}
      <section className="mb-12">
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-3">How andropause compares to perimenopause</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-600">
            <div>
              <div className="font-semibold text-orange-800 mb-2">Andropause (male)</div>
              <ul className="space-y-1.5">
                <li className="flex gap-2"><span className="text-orange-400 shrink-0">→</span> Gradual — 1–2% per year from late 20s</li>
                <li className="flex gap-2"><span className="text-orange-400 shrink-0">→</span> Often unnoticed for a decade</li>
                <li className="flex gap-2"><span className="text-orange-400 shrink-0">→</span> No clear end-point (not like last period)</li>
                <li className="flex gap-2"><span className="text-orange-400 shrink-0">→</span> Highly modifiable by lifestyle</li>
                <li className="flex gap-2"><span className="text-orange-400 shrink-0">→</span> Undertested, undertreated</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-amber-800 mb-2">Perimenopause (female)</div>
              <ul className="space-y-1.5">
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Rapid and erratic — volatile before declining</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Often dramatically symptomatic</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Clear staging (STRAW+10) and endpoint</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Multiple axes destabilise simultaneously</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">→</span> Average 3+ year delay to diagnosis</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-stone-500">
            Both are real. Both are treatable. Neither is something to simply endure as &ldquo;part of ageing.&rdquo;
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        <strong>For education only.</strong> Nothing here is medical advice. TRT and other hormonal interventions should only be started with a qualified clinician who has reviewed your full history and labs.
      </div>

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link href="/male" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          ← Male overview
        </Link>
        <Link href="/female/perimenopause" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Female perimenopause guide
        </Link>
        <Link href="/hormones" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Hormone reference
        </Link>
      </div>
    </div>
  )
}
