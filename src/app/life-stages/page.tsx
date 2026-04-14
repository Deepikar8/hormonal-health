import Link from 'next/link'
import { femaleStages, maleStages, hormoneComparisons, type LifeStage } from '@/data/life-stages'

const stageColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  'female-childhood':    { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-900',  badge: 'bg-green-100 text-green-800' },
  'female-puberty':      { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-900',   badge: 'bg-pink-100 text-pink-800' },
  'female-reproductive': { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-900',   badge: 'bg-rose-100 text-rose-800' },
  'female-perimenopause':{ bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-900',  badge: 'bg-amber-100 text-amber-800' },
  'female-postmenopause':{ bg: 'bg-stone-50',  border: 'border-stone-200',  text: 'text-stone-800',  badge: 'bg-stone-100 text-stone-700' },
  'male-childhood':      { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-900',  badge: 'bg-green-100 text-green-800' },
  'male-puberty':        { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-900',  badge: 'bg-amber-100 text-amber-800' },
  'male-prime':          { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-900',   badge: 'bg-blue-100 text-blue-800' },
  'male-periandropause': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', badge: 'bg-orange-100 text-orange-800' },
  'male-older':          { bg: 'bg-stone-50',  border: 'border-stone-200',  text: 'text-stone-800',  badge: 'bg-stone-100 text-stone-700' },
}

function StageCard({ stage, expanded = false }: { stage: LifeStage; expanded?: boolean }) {
  const c = stageColors[stage.id] ?? { bg: 'bg-white', border: 'border-stone-200', text: 'text-stone-900', badge: 'bg-stone-100 text-stone-700' }
  return (
    <div className={`border rounded-2xl overflow-hidden ${c.border}`}>
      <div className={`px-5 py-4 ${c.bg}`}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{stage.emoji}</span>
            <div>
              <div className={`font-bold ${c.text}`}>{stage.name}</div>
              <div className="text-xs text-stone-400">{stage.ageRange} years</div>
            </div>
          </div>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>{stage.ageRange}</span>
        </div>
        <div className={`text-xs font-medium mt-2 ${c.text}`}>{stage.headline}</div>
      </div>
      <div className="bg-white px-5 py-4">
        <p className="text-xs text-stone-600 leading-relaxed mb-4">{stage.description}</p>

        {expanded && (
          <>
            <div className="mb-4">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Key hormones</div>
              <div className="flex flex-wrap gap-1.5">
                {stage.keyHormones.map(h => (
                  <span key={h} className="text-[11px] bg-stone-50 border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">{h}</span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">What changes</div>
              <ul className="space-y-1">
                {stage.keyChanges.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-stone-600">
                    <span className="text-stone-300 mt-0.5 shrink-0">→</span>
                    <span>{c}</span>
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
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {stage.href && (
              <div className="mt-4 pt-4 border-t border-stone-100">
                <Link href={stage.href} className="text-xs font-semibold text-amber-700 hover:underline">
                  Full deep-dive guide →
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function LifeStagesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Life Stages</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Hormonal Health Across a Lifetime
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
          Hormones don&apos;t just affect reproduction. They regulate every system in the body — and they
          change dramatically from birth to old age, in both men and women. Here is what is happening
          at each stage, and what to watch for.
        </p>
      </div>

      {/* Side-by-side overview strips */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-6">The two tracks, side by side</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Female strip */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌸</span>
              <h3 className="font-bold text-rose-900 text-lg">Female</h3>
            </div>
            <div className="space-y-3">
              {femaleStages.map(stage => (
                <div key={stage.id} className={`border rounded-xl p-4 flex items-start gap-3 ${stageColors[stage.id].border} ${stageColors[stage.id].bg}`}>
                  <span className="text-xl shrink-0">{stage.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-semibold text-sm ${stageColors[stage.id].text}`}>{stage.name}</span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${stageColors[stage.id].badge}`}>{stage.ageRange}</span>
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">{stage.headline}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {stage.keyHormones.slice(0, 3).map(h => (
                        <span key={h} className="text-[10px] bg-white border border-stone-200 rounded-full px-1.5 py-0.5 text-stone-500">{h.split(' ')[0]}</span>
                      ))}
                      {stage.keyHormones.length > 3 && <span className="text-[10px] text-stone-400">+{stage.keyHormones.length - 3} more</span>}
                    </div>
                    {stage.href && (
                      <Link href={stage.href} className="text-[11px] text-amber-700 hover:underline font-medium mt-1.5 block">
                        Deep-dive guide →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/female" className="inline-flex items-center gap-1 text-sm text-rose-700 hover:underline font-medium">
                Full female guide →
              </Link>
            </div>
          </div>

          {/* Male strip */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <h3 className="font-bold text-blue-900 text-lg">Male</h3>
            </div>
            <div className="space-y-3">
              {maleStages.map(stage => (
                <div key={stage.id} className={`border rounded-xl p-4 flex items-start gap-3 ${stageColors[stage.id].border} ${stageColors[stage.id].bg}`}>
                  <span className="text-xl shrink-0">{stage.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-semibold text-sm ${stageColors[stage.id].text}`}>{stage.name}</span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${stageColors[stage.id].badge}`}>{stage.ageRange}</span>
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">{stage.headline}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {stage.keyHormones.slice(0, 3).map(h => (
                        <span key={h} className="text-[10px] bg-white border border-stone-200 rounded-full px-1.5 py-0.5 text-stone-500">{h.split(' ')[0]}</span>
                      ))}
                      {stage.keyHormones.length > 3 && <span className="text-[10px] text-stone-400">+{stage.keyHormones.length - 3} more</span>}
                    </div>
                    {stage.href && (
                      <Link href={stage.href} className="text-[11px] text-amber-700 hover:underline font-medium mt-1.5 block">
                        Deep-dive guide →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/male" className="inline-flex items-center gap-1 text-sm text-blue-700 hover:underline font-medium">
                Full male guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed stage cards — female */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🌸</span>
          <h2 className="text-xl font-bold text-stone-900">Female — Detailed Stages</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {femaleStages.map(stage => (
            <StageCard key={stage.id} stage={stage} expanded />
          ))}
        </div>
      </section>

      {/* Detailed stage cards — male */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">⚡</span>
          <h2 className="text-xl font-bold text-stone-900">Male — Detailed Stages</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {maleStages.map(stage => (
            <StageCard key={stage.id} stage={stage} expanded />
          ))}
        </div>
      </section>

      {/* Hormone comparison table */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-2">How key hormones differ between sexes</h2>
        <p className="text-sm text-stone-500 mb-6">Same hormones, different roles and levels — but more overlap than most people realise.</p>
        <div className="space-y-4">
          {hormoneComparisons.map((row) => (
            <div key={row.hormone} className="border border-stone-200 rounded-xl overflow-hidden">
              <div className="bg-stone-50 px-5 py-3 flex items-center gap-3 border-b border-stone-200">
                <span className="text-xl">{row.emoji}</span>
                <span className="font-bold text-stone-900">{row.hormone}</span>
              </div>
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                <div className="px-5 py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-500 mb-2">Female</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{row.female}</p>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-500 mb-2">Male</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{row.male}</p>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">Shared role</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{row.shared}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key parallel: transition stages */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Perimenopause vs Andropause — the parallels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-amber-200 rounded-2xl bg-amber-50/40 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍂</span>
              <div>
                <div className="font-bold text-amber-900">Perimenopause</div>
                <div className="text-xs text-stone-500">Female · 40–55 · Estrogen + progesterone</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span> Rapid, erratic hormonal fluctuation before decline</li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span> Average onset: mid-40s. Duration: 4–10 years</li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span> Symptoms: hot flashes, sleep, mood, cognition, metabolism</li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span> Average delay to diagnosis: 3+ years</li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">→</span> Well-characterised in research but poorly managed clinically</li>
            </ul>
            <Link href="/female/perimenopause" className="mt-4 inline-block text-xs font-semibold text-amber-700 hover:underline">Full perimenopause guide →</Link>
          </div>
          <div className="border border-orange-200 rounded-2xl bg-orange-50/40 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📉</span>
              <div>
                <div className="font-bold text-orange-900">Andropause</div>
                <div className="text-xs text-stone-500">Male · 40–60 · Testosterone + DHEA</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">→</span> Slow, gradual decline — ~1–2% per year from late 20s</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">→</span> Symptoms accumulate quietly over years or decades</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">→</span> Symptoms: fatigue, mood, muscle loss, sleep, libido, cognition</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">→</span> Often attributed entirely to stress or &ldquo;normal ageing&rdquo;</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">→</span> Affects an estimated 10–40% of men over 45</li>
            </ul>
            <Link href="/male/andropause" className="mt-4 inline-block text-xs font-semibold text-orange-700 hover:underline">Full andropause guide →</Link>
          </div>
        </div>
        <div className="mt-4 bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-stone-600">
          <strong className="text-stone-800">The key difference:</strong> Perimenopause is a compressed, dramatic, often symptomatic transition.
          Andropause is a slow, quiet accumulation that can go unnoticed for a decade. Both are real. Both are treatable.
          Neither is inevitable or something to simply endure.
        </div>
      </section>

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link href="/female" className="bg-rose-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-rose-800 transition-colors">
          Female guide →
        </Link>
        <Link href="/male" className="bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors">
          Male guide →
        </Link>
        <Link href="/hormones" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
          Hormone reference
        </Link>
      </div>
    </div>
  )
}
