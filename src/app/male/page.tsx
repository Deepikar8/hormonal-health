import Link from 'next/link'
import { maleStages } from '@/data/life-stages'

const stageColors: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  'male-childhood':      { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-900',  badge: 'bg-green-100 text-green-800',  dot: 'bg-green-400' },
  'male-puberty':        { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-900',  badge: 'bg-amber-100 text-amber-800',  dot: 'bg-amber-400' },
  'male-prime':          { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-900',   badge: 'bg-blue-100 text-blue-800',    dot: 'bg-blue-400' },
  'male-periandropause': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500' },
  'male-older':          { bg: 'bg-stone-50',  border: 'border-stone-200',  text: 'text-stone-800',  badge: 'bg-stone-100 text-stone-700',  dot: 'bg-stone-400' },
}

const keyFacts = [
  { stat: '~20', label: 'Age testosterone peaks', sub: 'Then declines from late 20s' },
  { stat: '1–2%', label: 'Decline per year in free testosterone', sub: 'From late 20s onward' },
  { stat: '10–40%', label: 'Men over 45 with low testosterone', sub: 'Late-onset hypogonadism' },
  { stat: '3–4×', label: 'Higher depression risk with low T', sub: 'Compared to normal testosterone' },
  { stat: '<10 min', label: 'Average doctor consultation time', sub: 'Where hormones are rarely discussed' },
  { stat: '2M+', label: 'Men with osteoporosis in the US', sub: 'Almost never screened' },
]

export default function MalePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Male</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⚡</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">Male Hormonal Health</h1>
        </div>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
          Male hormonal health is dominated by one story — the slow, gradual decline of testosterone
          from its peak in the early 20s. But it is not just testosterone: cortisol, insulin, thyroid,
          growth hormone, and estradiol all play important roles, and all shift with age.
          Unlike female perimenopause, the male transition is so gradual it is rarely recognised at all.
        </p>
      </div>

      {/* Key stats */}
      <section className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {keyFacts.map(f => (
            <div key={f.label} className="bg-white border border-stone-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{f.stat}</div>
              <div className="text-xs font-medium text-stone-700 leading-tight mb-1">{f.label}</div>
              <div className="text-[11px] text-stone-400">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Life stages timeline */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-6">The five stages of male hormonal health</h2>

        {/* Visual timeline bar */}
        <div className="flex items-center gap-0 mb-8 overflow-x-auto pb-2">
          {maleStages.map((stage, i) => {
            const c = stageColors[stage.id]
            return (
              <div key={stage.id} className="flex items-center shrink-0">
                <div className={`rounded-xl px-3 py-2 text-center min-w-[90px] border ${c.bg} ${c.border}`}>
                  <div className="text-lg">{stage.emoji}</div>
                  <div className={`text-[11px] font-bold ${c.text}`}>{stage.name}</div>
                  <div className="text-[10px] text-stone-400">{stage.ageRange}</div>
                </div>
                {i < maleStages.length - 1 && (
                  <div className="flex items-center px-1">
                    <div className="w-6 h-px bg-stone-300" />
                    <svg className="w-2.5 h-2.5 text-stone-300" fill="currentColor" viewBox="0 0 8 8"><path d="M0 0l8 4-8 4V0z" /></svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Stage cards */}
        <div className="space-y-5">
          {maleStages.map((stage) => {
            const c = stageColors[stage.id]
            return (
              <div key={stage.id} className={`border rounded-2xl overflow-hidden ${c.border}`}>
                <div className={`px-6 py-4 flex items-center justify-between ${c.bg}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stage.emoji}</span>
                    <div>
                      <div className={`font-bold text-lg ${c.text}`}>{stage.name}</div>
                      <div className="text-sm text-stone-500">{stage.headline}</div>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${c.badge}`}>{stage.ageRange} yrs</span>
                </div>
                <div className="bg-white px-6 py-5">
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">{stage.description}</p>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Key hormones</div>
                      <div className="space-y-1">
                        {stage.keyHormones.map(h => (
                          <div key={h} className="flex items-center gap-1.5 text-xs text-stone-600">
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">What changes</div>
                      <ul className="space-y-1">
                        {stage.keyChanges.map((change, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-stone-600">
                            <span className="text-stone-300 mt-0.5 shrink-0">→</span>
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Watch for</div>
                      <ul className="space-y-1">
                        {stage.watchFor.map((w, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-stone-600">
                            <span className="text-amber-500 mt-0.5 shrink-0">⚠</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                      {stage.href && (
                        <Link href={stage.href} className={`mt-3 inline-block text-xs font-semibold ${c.text} hover:underline`}>
                          Full guide →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Andropause deep-dive callout */}
      <section className="mb-14">
        <div className="bg-blue-50 border border-blue-300 rounded-2xl p-7">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📉</span>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Deep-dive available</div>
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Andropause — the silent transition</h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                Late-onset hypogonadism (clinically low testosterone) affects an estimated 10–40% of men over 45
                but is rarely discussed, rarely tested, and almost never treated. Because the decline is so
                gradual — 1–2% per year — men adapt and attribute the changes to stress, getting older, or
                working too hard. The deep-dive guide covers symptoms, labs, treatments, and what the evidence says.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {[
                  { emoji: '🔋', label: 'Fatigue & energy', desc: 'The most common symptom' },
                  { emoji: '💔', label: 'Libido changes', desc: 'Gradual, often unnoticed' },
                  { emoji: '🌧️', label: 'Mood & depression', desc: '3–4× higher risk' },
                  { emoji: '⚖️', label: 'Muscle & fat changes', desc: 'The aromatase cycle' },
                  { emoji: '🧪', label: 'Labs & testing', desc: 'Morning testosterone + panel' },
                  { emoji: '💊', label: 'What helps', desc: 'TRT, lifestyle, supplements' },
                ].map(item => (
                  <div key={item.label} className="bg-white border border-blue-200 rounded-xl p-3">
                    <div className="text-lg mb-1">{item.emoji}</div>
                    <div className="text-xs font-semibold text-stone-800">{item.label}</div>
                    <div className="text-[11px] text-stone-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/male/andropause" className="bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors inline-block">
                Go to andropause guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle drivers — the vicious cycle */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-3">The testosterone-fat-cortisol cycle</h2>
        <p className="text-sm text-stone-500 mb-6 max-w-2xl">
          Male hormonal decline is not purely biological — lifestyle factors have an outsized effect on testosterone. And they compound.
        </p>
        <div className="bg-white border border-stone-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
            {[
              { emoji: '🍔', label: 'Visceral fat accumulates', sub: 'Poor diet, stress, age' },
              { emoji: '→', label: '', sub: '' },
              { emoji: '🧪', label: 'Aromatase activity ↑', sub: 'Fat tissue converts T → estrogen' },
              { emoji: '→', label: '', sub: '' },
              { emoji: '📉', label: 'Testosterone ↓', sub: 'Estrogen feedback suppresses LH' },
              { emoji: '→', label: '', sub: '' },
              { emoji: '💪', label: 'Muscle loss', sub: 'Less T = less protein synthesis' },
              { emoji: '→', label: '', sub: '' },
              { emoji: '🔄', label: 'More fat storage', sub: 'Cycle repeats and amplifies' },
            ].map((step, i) => (
              step.emoji === '→'
                ? <span key={i} className="text-stone-300 text-xl hidden sm:block">→</span>
                : (
                  <div key={i} className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-center min-w-[100px]">
                    <div className="text-xl mb-1">{step.emoji}</div>
                    <div className="text-xs font-semibold text-stone-800">{step.label}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{step.sub}</div>
                  </div>
                )
            ))}
          </div>
          <p className="mt-4 text-xs text-stone-500">
            Breaking this cycle — primarily through resistance exercise and visceral fat reduction — raises testosterone more effectively than most people expect. <strong className="text-stone-700">A 10% reduction in body weight in obese men raises testosterone by ~25%.</strong>
          </p>
        </div>
      </section>

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link href="/male/andropause" className="bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors">
          Andropause deep dive →
        </Link>
        <Link href="/life-stages" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Compare with female stages
        </Link>
        <Link href="/female" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Female guide →
        </Link>
      </div>
    </div>
  )
}
