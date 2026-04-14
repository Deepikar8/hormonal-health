import { treatmentData, evidenceLabels, type EvidenceTier } from '@/data/interventions'
import Link from 'next/link'

const typeLabel: Record<string, { label: string; color: string }> = {
  hormonal: { label: 'Hormonal', color: 'bg-rose-100 text-rose-800' },
  'non-hormonal': { label: 'Non-hormonal', color: 'bg-blue-100 text-blue-800' },
  lifestyle: { label: 'Lifestyle', color: 'bg-green-100 text-green-800' },
  supplement: { label: 'Supplement', color: 'bg-amber-100 text-amber-800' },
}

export default function WhatHelpsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>What Helps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          What Actually Helps
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Evidence-rated treatments for each symptom cluster — hormonal, non-hormonal, and
          lifestyle. Each intervention is rated by the strength of the clinical trial evidence.
        </p>
      </div>

      {/* Evidence legend */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 mb-10">
        <h2 className="text-sm font-semibold text-stone-700 mb-4">Evidence rating key</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.entries(evidenceLabels) as [EvidenceTier, typeof evidenceLabels[EvidenceTier]][]).map(([, v]) => (
            <div key={v.label} className="text-center">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1 ${v.color}`}>
                {v.label}
              </div>
              <div className="text-xs text-stone-500">{v.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-stone-200">
        {treatmentData.map((s) => (
          <a
            key={s.symptomId}
            href={`#${s.symptomId}`}
            className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors"
          >
            {s.emoji} {s.symptomName}
          </a>
        ))}
      </div>

      {/* Important framing */}
      <div className="bg-stone-900 text-white rounded-2xl p-7 mb-12">
        <h2 className="text-xl font-bold mb-4">Before you read this</h2>
        <div className="grid md:grid-cols-2 gap-5 text-sm text-stone-300 leading-relaxed">
          <div>
            <p className="mb-3">
              <strong className="text-white">Hormone therapy is not one thing.</strong> The risks
              that many women have heard about came from a single 2002 study (the WHI) that used
              oral synthetic hormones in women averaging 63 years old — many of whom were more than
              10 years post-menopause. Modern hormone therapy, used in appropriate candidates,
              looks very different.
            </p>
            <p>
              <strong className="text-white">Type, route, dose, and timing all matter.</strong>
              {' '}Transdermal estrogen (patch, gel) has a different risk profile than oral estrogen.
              Bioidentical progesterone behaves differently from synthetic progestins.
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong className="text-white">You have more options than you may know.</strong>
              {' '}FDA-approved non-hormonal options for hot flashes now include fezolinetant (2023).
              SSRIs, gabapentin, and CBT all have Level I evidence. Not every treatment requires
              hormones.
            </p>
            <p>
              <strong className="text-white">Discuss your specific situation with a doctor.</strong>
              {' '}Evidence ratings are population-level. Your personal history, risk factors, and
              preferences matter enormously.
            </p>
          </div>
        </div>
      </div>

      {/* Treatment sections */}
      <div className="space-y-14">
        {treatmentData.map((section) => (
          <div key={section.symptomId} id={section.symptomId} className="scroll-mt-20">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-3xl">{section.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">{section.symptomName}</h2>
                <p className="text-stone-600 text-sm mt-1">{section.summary}</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {section.interventions.map((intervention, i) => {
                const evidence = evidenceLabels[intervention.evidenceTier]
                const type = typeLabel[intervention.type]
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h3 className="font-semibold text-stone-900">{intervention.name}</h3>
                      <div className="flex gap-2 shrink-0">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${type.color}`}>
                          {type.label}
                        </span>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${evidence.color}`}>
                          {evidence.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-3">
                      {intervention.plainDescription}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div>
                        <div className="text-xs font-semibold text-stone-500 mb-1.5">Best for</div>
                        <div className="flex flex-wrap gap-1.5">
                          {intervention.bestFor.map((tag, j) => (
                            <span
                              key={j}
                              className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {intervention.caveats && (
                        <div className="w-full">
                          <div className="text-xs font-semibold text-stone-500 mb-1">Important caveats</div>
                          <p className="text-xs text-stone-500 italic leading-relaxed">
                            {intervention.caveats}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-3">
              <Link
                href={`/symptoms#${section.symptomId}`}
                className="text-xs text-amber-700 hover:underline font-medium"
              >
                ← Back to {section.symptomName} explanation
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
        <strong>This is educational information, not a prescription.</strong> Evidence ratings
        reflect population-level trial data. Whether a given treatment is right for you depends
        on your personal health history, risk factors, and preferences. Always discuss with a
        qualified clinician before starting or stopping any treatment.
      </div>

      {/* Bottom nav */}
      <div className="mt-8 flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <Link href="/symptoms" className="text-amber-700 hover:underline text-sm font-medium">
          ← Understand the symptoms
        </Link>
        <Link href="/labs" className="text-amber-700 hover:underline text-sm font-medium">
          What tests to ask for →
        </Link>
      </div>
    </div>
  )
}
