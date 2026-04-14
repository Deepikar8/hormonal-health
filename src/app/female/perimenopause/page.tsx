import Link from 'next/link'

// This page is the perimenopause hub — it surfaces all existing deep-dive content
const sections = [
  {
    href: '/symptoms',
    emoji: '🩺',
    title: 'Understand Your Symptoms',
    desc: 'All 10 symptom clusters — what each one is, why it happens biologically, and what tests to ask for. From hot flashes to brain fog to joint pain.',
    color: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
    tag: 'Core',
  },
  {
    href: '/timeline',
    emoji: '📅',
    title: 'The Perimenopause Timeline',
    desc: 'When different symptoms typically appear across the transition — from early perimenopause through menopause and into post-menopause.',
    color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    tag: 'Core',
  },
  {
    href: '/what-helps',
    emoji: '💊',
    title: 'What Actually Helps',
    desc: 'Evidence-rated treatments for each symptom cluster — hormonal (HRT), non-hormonal, supplements, and lifestyle. Each rated by trial quality.',
    color: 'bg-violet-50 border-violet-200 hover:bg-violet-100',
    tag: 'Core',
  },
  {
    href: '/labs',
    emoji: '🧪',
    title: 'Tests & Lab Work',
    desc: 'What to ask your doctor to test, when to test it, what normal means (and why normal is often misleading in perimenopause), and how to interpret results.',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    tag: 'Core',
  },
  {
    href: '/hormones',
    emoji: '🔬',
    title: 'What Are Hormones?',
    desc: '14 hormones explained — estrogen, progesterone, testosterone, cortisol, insulin, thyroid and more. What each does and what happens when it shifts.',
    color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    tag: 'Reference',
  },
  {
    href: '/hormones/map',
    emoji: '🗺️',
    title: 'Hormone Map',
    desc: 'How the HPO axis, HPA stress axis, and metabolic web all connect — and how perimenopause disrupts all three simultaneously.',
    color: 'bg-stone-50 border-stone-200 hover:bg-stone-100',
    tag: 'Reference',
  },
  {
    href: '/sources',
    emoji: '📚',
    title: 'Research Sources',
    desc: 'All citations — SWAN, NAMS, WHI, Endocrine Society guidelines, and primary research papers. Every claim is sourced.',
    color: 'bg-stone-50 border-stone-200 hover:bg-stone-100',
    tag: 'Sources',
  },
]

const keyFacts = [
  { stat: '47', label: 'Average age perimenopause begins', sub: 'Range: late 30s–early 50s' },
  { stat: '4–10 yrs', label: 'Duration of the transition', sub: 'Not 1–2 years as commonly thought' },
  { stat: '80%', label: 'Women with significant symptoms', sub: 'Not inevitable, but very common' },
  { stat: '3+ yrs', label: 'Average delay to diagnosis', sub: 'After seeing multiple doctors' },
  { stat: '10', label: 'Distinct symptom clusters', sub: 'Far beyond hot flashes alone' },
  { stat: '7–10 yrs', label: 'Average duration of hot flashes', sub: 'Peak to resolution' },
]

export default function PerimenopausePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/female" className="hover:text-stone-700">Female</Link>
        <span className="mx-2">›</span>
        <span>Perimenopause</span>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50 border border-amber-200 rounded-2xl p-8 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-3 py-1 text-xs text-amber-700 font-medium mb-4">
            <span>🍂</span>
            <span>Female · Ages 40–55 · Most in-depth section</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Perimenopause
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            The years before your last period — usually starting in the mid-to-late 40s, lasting 4–10 years.
            During this time, every hormone axis in the body destabilises simultaneously. It is not just a
            &ldquo;hormonal thing.&rdquo; It affects bone, heart, brain, metabolism, bladder, joints, sleep, and mood.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/symptoms" className="bg-amber-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-800 transition-colors">
              Explore symptoms →
            </Link>
            <Link href="/timeline" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
              See the timeline
            </Link>
          </div>
        </div>
      </div>

      {/* Key stats */}
      <section className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {keyFacts.map(f => (
            <div key={f.label} className="bg-white border border-stone-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-700 mb-1">{f.stat}</div>
              <div className="text-xs font-medium text-stone-700 leading-tight mb-1">{f.label}</div>
              <div className="text-[11px] text-stone-400">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is perimenopause */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What is actually happening</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                <strong className="text-stone-800">The ovarian follicle pool is depleting.</strong> From birth, a woman has a finite number of follicles. From the mid-30s, the pool shrinks faster. By the mid-40s, it is small enough that estrogen and progesterone production becomes erratic rather than cyclical.
              </p>
              <p>
                <strong className="text-stone-800">It is not a smooth decline — it is chaos first, then decline.</strong> Estrogen can spike higher than normal in early perimenopause (causing breast tenderness, heavy periods, anxiety) and crash the next month. This erratic volatility, not just low levels, is why symptoms feel so disorienting.
              </p>
              <p>
                <strong className="text-stone-800">Progesterone falls first.</strong> As ovulation becomes irregular, progesterone production in the luteal phase disappears. This is why anxiety, sleep disruption, and mood changes often arrive before the classic vasomotor symptoms.
              </p>
              <p>
                <strong className="text-stone-800">Three axes destabilise simultaneously.</strong> The HPO (reproductive), HPA (stress), and metabolic axes all interact and all shift. Declining estrogen dysregulates cortisol. Cortisol disrupts sleep. Poor sleep suppresses growth hormone. Insulin resistance rises. Each worsens the others.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <div className="font-semibold text-rose-900 mb-2 text-sm">Why it is so often dismissed</div>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">✗</span>&ldquo;You&apos;re too young&rdquo; — onset in the mid-40s is normal. Late 30s is not rare.</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">✗</span>&ldquo;Your bloods are normal&rdquo; — hormones fluctuate wildly. One normal test on the wrong day tells you nothing.</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">✗</span>&ldquo;It&apos;s just anxiety/stress&rdquo; — mood and cognitive symptoms have specific hormonal drivers.</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">✗</span>&ldquo;Everyone goes through this&rdquo; — common yes. Something to simply endure, no.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="font-semibold text-amber-900 mb-2 text-sm">The timing window matters</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bone loss, cardiovascular changes, and metabolic shifts all begin in perimenopause —
                years before menopause. Intervention during the &ldquo;window of opportunity&rdquo; (before
                60, or within 10 years of menopause) is most effective. Women dismissed for years miss this window.
              </p>
            </div>
            <Link href="/hormones/map" className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl p-4 hover:shadow-sm transition-all group">
              <span className="text-2xl">🗺️</span>
              <div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-amber-800">See the full hormone map →</div>
                <div className="text-xs text-stone-400">How HPO, HPA, and metabolic axes connect</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All sections */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Everything in the perimenopause guide</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(section => (
            <Link key={section.href} href={section.href} className={`border rounded-xl p-5 transition-colors group ${section.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{section.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-stone-900 text-sm group-hover:text-stone-700">{section.title}</span>
                    <span className="text-[10px] text-stone-400 border border-stone-200 rounded-full px-1.5 py-0.5">{section.tag}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{section.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        <strong>For education only.</strong> Nothing here is medical advice. All treatment decisions should be made with a qualified healthcare provider.
      </div>
    </div>
  )
}
