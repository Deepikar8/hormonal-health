import { timelineStages } from '@/data/timeline'
import Link from 'next/link'

export default function TimelinePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Timeline</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          The Perimenopause Timeline
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Perimenopause is not a single event — it&apos;s a decade-long transition with distinct stages.
          Different symptoms appear at different times, and understanding the staging can help
          you make sense of where you are.
        </p>
      </div>

      {/* STRAW+10 note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 text-sm text-amber-800">
        <strong>Based on the STRAW+10 staging criteria</strong> — the international scientific
        consensus framework for classifying reproductive ageing, developed through the Stages of
        Reproductive Aging Workshop. Symptoms and timing shown are from the SWAN longitudinal
        study (26 years, multiethnic, 3,000+ women).
      </div>

      {/* Overview strip */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-12 overflow-x-auto">
        <h2 className="font-semibold text-stone-700 text-sm uppercase tracking-wide mb-5">
          At a glance
        </h2>
        <div className="flex items-start gap-0 min-w-[600px]">
          {timelineStages.map((stage, i) => (
            <div key={stage.id} className="flex-1 relative">
              <div className={`h-2 ${stage.dotColor} ${i === 0 ? 'rounded-l-full' : ''} ${i === timelineStages.length - 1 ? 'rounded-r-full' : ''}`} />
              <div className="mt-3 px-1">
                <div className="text-xs font-semibold text-stone-700 leading-tight mb-1">
                  {stage.name}
                </div>
                <div className="text-xs text-stone-400">{stage.ageRange}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stage cards */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200 hidden sm:block" />

        <div className="space-y-8">
          {timelineStages.map((stage, index) => (
            <div key={stage.id} className="relative sm:pl-16">
              {/* Dot */}
              <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-white shadow-md hidden sm:block ${stage.dotColor}`} />

              <div className={`bg-white border-2 rounded-2xl overflow-hidden ${stage.color}`}>
                {/* Stage header */}
                <div className={`px-6 py-4 border-b ${stage.color}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                        Stage {index + 1}
                      </div>
                      <h2 className="text-xl font-bold text-stone-900">{stage.name}</h2>
                      <p className="text-sm text-stone-600 mt-0.5">{stage.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-stone-700">{stage.ageRange}</div>
                      <div className="text-xs text-stone-500 mt-1 font-mono bg-white/70 px-2 py-1 rounded">
                        Lab: {stage.labClue}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage body */}
                <div className="p-6 grid md:grid-cols-2 gap-6 bg-white">
                  <div>
                    <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                      What is happening
                    </h3>
                    <p className="text-stone-700 leading-relaxed text-sm">{stage.description}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                      Symptoms at this stage
                    </h3>
                    <ul className="space-y-2">
                      {stage.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                          <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${stage.dotColor}`} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The dismissal problem */}
      <div className="mt-12 bg-rose-50 border-2 border-rose-200 rounded-2xl p-8">
        <div className="inline-flex items-center gap-2 bg-rose-100 border border-rose-300 rounded-full px-3 py-1 text-xs text-rose-800 font-semibold mb-4">
          <span>⚠️</span> Why many women are diagnosed late
        </div>
        <h2 className="text-xl font-bold text-stone-900 mb-5">
          The gap between early perimenopause and getting a diagnosis
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-stone-700 leading-relaxed">
          <div className="bg-white border border-rose-200 rounded-xl p-5">
            <div className="text-2xl mb-3">🔬</div>
            <h3 className="font-semibold text-stone-800 mb-2">Normal bloods ≠ no perimenopause</h3>
            <p>
              In early perimenopause, hormone levels fluctuate wildly — estrogen can be
              abnormally high on one test, low on the next. A single &ldquo;normal&rdquo; FSH or
              estradiol, taken on the wrong day, is not a reliable reassurance. Many women
              are dismissed on this basis alone.
            </p>
          </div>
          <div className="bg-white border border-rose-200 rounded-xl p-5">
            <div className="text-2xl mb-3">🧠</div>
            <h3 className="font-semibold text-stone-800 mb-2">Mood and brain fog come first</h3>
            <p>
              For many women, mood instability, anxiety, and cognitive symptoms precede
              hot flashes by years. These get labelled as stress, burnout, or new-onset
              anxiety disorder. Without the &ldquo;classic&rdquo; hot flash presentation, the
              hormonal cause is missed.
            </p>
          </div>
          <div className="bg-white border border-rose-200 rounded-xl p-5">
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="font-semibold text-stone-800 mb-2">The window closes while waiting</h3>
            <p>
              Bone loss, cardiovascular change, and the peak depression window all occur
              in late perimenopause. Women who spend years seeking a diagnosis miss the
              period when early intervention is most protective. Diagnosis timing has
              direct health consequences — not just quality-of-life ones.
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-rose-200 text-sm text-stone-600">
          <strong className="text-stone-800">The STRAW+10 criteria exist precisely for this reason.</strong>{" "}
          Staging is based on <em>cycle pattern changes</em>, not hormone levels alone. A woman whose
          cycles have been varying by 7+ days for two consecutive cycles meets the clinical
          definition of early perimenopause — regardless of what a single hormone test shows.{" "}
          <a
            href="https://doi.org/10.1097/gme.0b013e31824d8f40"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:underline font-medium"
          >
            Harlow et al., Menopause (2012) ↗
          </a>
        </div>
      </div>

      {/* Key insight box */}
      <div className="mt-6 bg-stone-900 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">The most important thing to understand about timing</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-300 leading-relaxed">
          <div>
            <p className="mb-3">
              <strong className="text-white">Late perimenopause is the critical window.</strong> This
              is when symptoms are usually most intense, bone loss is accelerating fastest, depression
              risk is highest, and cardiovascular changes are beginning — often simultaneously.
            </p>
            <p>
              Most women reach late perimenopause somewhere between ages 48 and 52, but there is
              wide variation. The staging criteria (STRAW+10) uses cycle changes as markers, not age.
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong className="text-white">Timing of treatment matters.</strong> Hormone therapy
              started in early-to-late perimenopause has different effects than the same therapy
              started 10 years after menopause. The &ldquo;timing hypothesis&rdquo; in cardiovascular and
              cognitive research makes this explicit.
            </p>
            <p>
              Many women are not diagnosed until late perimenopause or beyond — partly because
              symptoms like mood changes, joint pain, and brain fog are not recognised as
              perimenopausal.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-12 flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <Link href="/symptoms" className="text-amber-700 hover:underline text-sm font-medium">
          ← What do these symptoms mean?
        </Link>
        <Link href="/what-helps" className="text-amber-700 hover:underline text-sm font-medium">
          What can help? →
        </Link>
      </div>
    </div>
  )
}
