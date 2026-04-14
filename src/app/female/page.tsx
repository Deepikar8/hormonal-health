import Link from 'next/link'
import { femaleStages } from '@/data/life-stages'

const deepDiveLinks = [
  { href: '/symptoms', emoji: '🩺', label: 'Symptoms', desc: 'All 10 perimenopause symptom clusters explained' },
  { href: '/timeline', emoji: '📅', label: 'Timeline', desc: 'When different symptoms typically appear' },
  { href: '/what-helps', emoji: '💊', label: 'What Helps', desc: 'Evidence-rated hormonal and non-hormonal treatments' },
  { href: '/labs', emoji: '🧪', label: 'Tests & Labs', desc: 'What to ask your doctor to test, and when' },
  { href: '/hormones', emoji: '🔬', label: 'Hormones', desc: 'What each hormone does and how it shifts' },
  { href: '/hormones/map', emoji: '🗺️', label: 'Hormone Map', desc: 'How the HPO, HPA, and metabolic axes connect' },
]

const stageColors: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  'female-childhood':     { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-900',  badge: 'bg-green-100 text-green-800',  dot: 'bg-green-400' },
  'female-puberty':       { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-900',   badge: 'bg-pink-100 text-pink-800',    dot: 'bg-pink-400' },
  'female-reproductive':  { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-900',   badge: 'bg-rose-100 text-rose-800',    dot: 'bg-rose-400' },
  'female-perimenopause': { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-900',  badge: 'bg-amber-100 text-amber-800',  dot: 'bg-amber-500' },
  'female-postmenopause': { bg: 'bg-stone-50',  border: 'border-stone-200',  text: 'text-stone-800',  badge: 'bg-stone-100 text-stone-700',  dot: 'bg-stone-400' },
}

export default function FemalePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Female</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🌸</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">Female Hormonal Health</h1>
        </div>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
          From puberty to post-menopause, female hormonal health involves dramatic cyclical changes
          every month, a decade-long transition in midlife, and a complete hormonal reorganisation
          afterwards. Each stage has distinct biology, distinct risks, and distinct opportunities to act.
        </p>
      </div>

      {/* Life stages timeline */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-6">The five stages of female hormonal health</h2>

        {/* Visual timeline bar */}
        <div className="flex items-center gap-0 mb-8 overflow-x-auto pb-2">
          {femaleStages.map((stage, i) => {
            const c = stageColors[stage.id]
            return (
              <div key={stage.id} className="flex items-center shrink-0">
                <div className={`rounded-xl px-3 py-2 text-center min-w-[90px] border ${c.bg} ${c.border}`}>
                  <div className="text-lg">{stage.emoji}</div>
                  <div className={`text-[11px] font-bold ${c.text}`}>{stage.name}</div>
                  <div className="text-[10px] text-stone-400">{stage.ageRange}</div>
                </div>
                {i < femaleStages.length - 1 && (
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
          {femaleStages.map((stage) => {
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

      {/* Perimenopause deep-dive callout */}
      <section className="mb-14">
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-7">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🍂</span>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Deep-dive available</div>
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Perimenopause — the most in-depth section</h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                Perimenopause is the most complex and most under-recognised female hormonal transition.
                The average woman sees multiple doctors over 3+ years before receiving an accurate explanation.
                This section covers all 10 symptom clusters, the staging timeline, all evidence-rated treatments,
                and a complete lab guide — in plain language.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {deepDiveLinks.map(link => (
                  <Link key={link.href} href={link.href} className="bg-white border border-amber-200 rounded-xl p-3 hover:border-amber-300 hover:shadow-sm transition-all">
                    <div className="text-lg mb-1">{link.emoji}</div>
                    <div className="text-xs font-semibold text-stone-800">{link.label}</div>
                    <div className="text-[11px] text-stone-400 mt-0.5 leading-tight">{link.desc}</div>
                  </Link>
                ))}
              </div>
              <Link href="/female/perimenopause" className="bg-amber-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-800 transition-colors inline-block">
                Go to perimenopause guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common conditions across life */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Hormonal conditions across female life stages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { stage: 'Puberty–30s', name: 'PCOS', emoji: '🔄', color: 'bg-pink-50 border-pink-200', desc: 'Androgen excess and insulin resistance causing irregular cycles, acne, and fertility challenges. Affects ~10% of women.' },
            { stage: 'Reproductive years', name: 'Endometriosis', emoji: '🩸', color: 'bg-rose-50 border-rose-200', desc: 'Estrogen-driven tissue growth outside the uterus. Often takes 7–10 years to diagnose. Affects ~10% of women.' },
            { stage: 'Reproductive years', name: 'PMDD', emoji: '🌊', color: 'bg-violet-50 border-violet-200', desc: 'Severe luteal-phase mood disruption driven by sensitivity to progesterone changes. Distinct from PMS.' },
            { stage: 'Perimenopause', name: 'Late-onset depression', emoji: '🌧️', color: 'bg-amber-50 border-amber-200', desc: 'New-onset depression in the 40s is frequently hormonal in origin — estrogen regulates serotonin and norepinephrine.' },
            { stage: 'Post-menopause', name: 'Osteoporosis', emoji: '🦴', color: 'bg-stone-50 border-stone-200', desc: 'Bone density falls sharply in the first 5–7 years post-menopause without estrogen protection. DXA scan is essential.' },
            { stage: 'Post-menopause', name: 'Cardiovascular disease', emoji: '❤️', color: 'bg-red-50 border-red-200', desc: 'Estrogen protects arteries. Post-menopause, CVD becomes the leading cause of death in women — exceeding breast cancer.' },
          ].map(item => (
            <div key={item.name} className={`border rounded-xl p-4 ${item.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="text-[11px] text-stone-400 font-medium mb-0.5">{item.stage}</div>
                  <div className="font-semibold text-stone-900 text-sm mb-1">{item.name}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link href="/female/perimenopause" className="bg-amber-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-800 transition-colors">
          Perimenopause deep dive →
        </Link>
        <Link href="/life-stages" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Compare with male stages
        </Link>
        <Link href="/male" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Male guide →
        </Link>
      </div>
    </div>
  )
}
