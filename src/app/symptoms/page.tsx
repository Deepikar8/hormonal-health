import { symptoms } from '@/data/symptoms'
import { sources } from '@/data/sources'
import Link from 'next/link'

// Map symptom IDs to relevant source IDs for inline citations
const symptomSources: Record<string, string[]> = {
  mood: ["Freeman2006", "Bromberger2011"],
  cognitive: ["Greendale2009", "Maki2023"],
  vasomotor: ["Avis2015", "Rance2010", "Johnson2023"],
  musculoskeletal: ["NAMS2022"],
  genitourinary: ["Portman2014"],
  cardiovascular: ["Hodis2022"],
  menstrual: ["STRAW10"],
}

const colorBadge: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  amber: 'bg-amber-100 text-amber-800 border-amber-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  rose: 'bg-rose-100 text-rose-800 border-rose-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  pink: 'bg-pink-100 text-pink-800 border-pink-200',
  teal: 'bg-teal-100 text-teal-800 border-teal-200',
}

const colorBorder: Record<string, string> = {
  orange: 'border-orange-200',
  blue: 'border-blue-200',
  indigo: 'border-indigo-200',
  purple: 'border-purple-200',
  amber: 'border-amber-200',
  green: 'border-green-200',
  rose: 'border-rose-200',
  red: 'border-red-200',
  pink: 'border-pink-200',
  teal: 'border-teal-200',
}

export default function SymptomsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Symptoms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Understanding Your Symptoms
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Each symptom explained in plain English — what is actually happening in your body,
          why it feels the way it does, and what to ask your doctor.
        </p>
      </div>

      {/* Dismissal callout */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <span className="text-3xl shrink-0">🔎</span>
          <div>
            <h2 className="font-semibold text-stone-900 mb-2">
              Many of these symptoms are routinely missed or dismissed
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-3">
              Brain fog, anxiety, joint pain, and sleep disruption in the mid-40s are frequently
              attributed to stress, depression, or normal ageing — and the hormonal cause is missed.
              On average, women wait <strong>over 3 years</strong> before perimenopause is correctly
              identified. Mood symptoms, cognitive changes, and joint pain often appear{" "}
              <strong>before</strong> hot flashes — but are the least likely to trigger a hormone
              workup.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>A single normal hormone test does not rule out perimenopause.</strong> In early
              perimenopause, estrogen fluctuates dramatically — a reading on the wrong day can appear
              completely normal. Staging is based on cycle pattern changes, not a single blood test.
              See the{" "}
              <Link href="/labs" className="text-amber-700 hover:underline font-medium">
                lab guide
              </Link>{" "}
              and{" "}
              <Link href="/timeline" className="text-amber-700 hover:underline font-medium">
                timeline
              </Link>{" "}
              for more.
            </p>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-stone-200">
        {symptoms.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-xs border px-3 py-1.5 rounded-full font-medium transition-colors hover:opacity-80 ${colorBadge[s.color]}`}
          >
            {s.emoji} {s.name}
          </a>
        ))}
      </div>

      {/* Symptom cards */}
      <div className="space-y-14">
        {symptoms.map((symptom) => (
          <div
            key={symptom.id}
            id={symptom.id}
            className={`bg-white border-2 rounded-2xl overflow-hidden scroll-mt-20 ${colorBorder[symptom.color]}`}
          >
            {/* Card header */}
            <div className={`px-6 py-5 border-b ${colorBadge[symptom.color]} border-inherit`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl">{symptom.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-stone-900">{symptom.name}</h2>
                  <p className="text-sm font-medium mt-0.5 opacity-80">{symptom.tagline}</p>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-2">
                    What is this?
                  </h3>
                  <p className="text-stone-700 leading-relaxed">{symptom.plainExplanation}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-2">
                    What is actually happening?
                  </h3>
                  <p className="text-stone-700 leading-relaxed">{symptom.whatIsHappening}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-2">
                    When it typically starts
                  </h3>
                  <p className="text-stone-700 leading-relaxed">{symptom.whenItTypicallyStarts}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    Common symptoms
                  </h3>
                  <ul className="space-y-2">
                    {symptom.commonSymptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="text-stone-400 mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
                    <span>🧪</span> Tests to ask about
                  </h3>
                  <ul className="space-y-1.5">
                    {symptom.keyTests.map((t, i) => (
                      <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                        <span className="text-stone-400 mt-0.5">›</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-stone-200">
                    <Link
                      href="/labs"
                      className="text-xs text-amber-700 hover:underline font-medium"
                    >
                      See full lab guide →
                    </Link>
                  </div>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2">
                    <span>💊</span> What can help?
                  </h3>
                  <Link
                    href={`/what-helps#${symptom.id}`}
                    className="text-xs text-amber-700 hover:underline font-medium"
                  >
                    See treatments for {symptom.name} →
                  </Link>
                </div>

                {symptomSources[symptom.id] && (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2">
                      <span>📄</span> Key sources
                    </h3>
                    <ul className="space-y-1.5">
                      {symptomSources[symptom.id].map((sid) => {
                        const src = sources.find((s) => s.id === sid)
                        if (!src) return null
                        return (
                          <li key={sid}>
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-amber-700 hover:underline flex items-start gap-1"
                            >
                              <span className="shrink-0">↗</span>
                              <span>
                                {src.authors
                                  ? `${src.authors} (${src.year})`
                                  : `${src.title} (${src.year})`}
                              </span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-12 flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <Link href="/timeline" className="text-amber-700 hover:underline text-sm font-medium">
          ← When do these appear? See the timeline
        </Link>
        <Link href="/what-helps" className="text-amber-700 hover:underline text-sm font-medium">
          What can help? See treatments →
        </Link>
      </div>
    </div>
  )
}
