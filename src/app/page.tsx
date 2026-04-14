import Link from 'next/link'
import { femaleStages, maleStages } from '@/data/life-stages'

const tracks = [
  {
    sex: 'Female',
    emoji: '🌸',
    color: 'bg-rose-50 border-rose-200',
    accent: 'text-rose-800',
    button: 'bg-rose-700 hover:bg-rose-800 text-white',
    outline: 'border-rose-300 text-rose-800 hover:bg-rose-50',
    href: '/female',
    deepDive: '/female/perimenopause',
    deepDiveLabel: 'Perimenopause deep dive',
    headline: 'From puberty to post-menopause',
    description:
      'Monthly hormone cycles, the perimenopause transition, and what changes at every life stage. Includes the most comprehensive guide to perimenopause available in plain language.',
    stages: femaleStages.map(s => ({ name: s.name, ageRange: s.ageRange, emoji: s.emoji })),
    highlight: {
      label: 'Most in-depth coverage',
      text: 'Perimenopause affects every system in the body and is routinely misdiagnosed. This guide goes deep.',
    },
  },
  {
    sex: 'Male',
    emoji: '⚡',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-800',
    button: 'bg-blue-700 hover:bg-blue-800 text-white',
    outline: 'border-blue-300 text-blue-800 hover:bg-blue-50',
    href: '/male',
    deepDive: '/male/andropause',
    deepDiveLabel: 'Andropause deep dive',
    headline: 'From puberty to andropause and beyond',
    description:
      "Testosterone peaks and gradual decline, late-onset hypogonadism, and what's actually happening hormonally for men at every age. Symptoms that are real, not inevitable.",
    stages: maleStages.map(s => ({ name: s.name, ageRange: s.ageRange, emoji: s.emoji })),
    highlight: {
      label: 'Often missed',
      text: "Male hormonal decline is slow and subtle — which is why it's routinely attributed to stress or ageing rather than investigated.",
    },
  },
]

const sharedHormones = [
  { name: 'Cortisol', emoji: '⚠️', note: 'Stress & sleep — dysregulates in both sexes as sex hormones decline' },
  { name: 'Insulin', emoji: '🔑', note: 'Both estrogen (female) and testosterone (male) protect insulin sensitivity' },
  { name: 'Thyroid', emoji: '🦋', note: 'Sets metabolic rate — shares symptoms with sex hormone decline in both sexes' },
  { name: 'Growth Hormone', emoji: '🔧', note: 'Muscle, bone, repair — suppressed by sleep disruption in both sexes' },
  { name: 'Estrogen', emoji: '🏛️', note: 'Present in both — protects bone, heart, and brain in men as well as women' },
  { name: 'Testosterone', emoji: '⚡', note: 'Present in both — drives libido, energy, and muscle in both sexes' },
]

const whyMatters = [
  {
    icon: '🔬',
    title: 'Hormones affect every system',
    body: 'Not just reproduction. Bone density, brain function, cardiovascular health, metabolism, mood, sleep, immune function — all regulated by hormones that shift across a lifetime.',
  },
  {
    icon: '⏱️',
    title: 'Timing matters',
    body: 'The window for protective intervention — in bone health, cardiovascular risk, metabolic function — is narrow. Catching hormonal shifts early enables action before consequences compound.',
  },
  {
    icon: '🤝',
    title: 'Both sexes are affected',
    body: 'Female hormonal transitions are better understood but still routinely dismissed. Male hormonal decline is almost never discussed. Both deserve clear, evidence-based information.',
  },
  {
    icon: '📖',
    title: 'Plain language matters',
    body: 'Medical literature exists but is largely inaccessible. This guide translates what the research actually shows — without jargon, without oversimplification.',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-blue-50/30 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 text-sm text-stone-600 mb-6">
              <span>🧬</span>
              <span>Evidence-based · Both sexes · All life stages · Plain language</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6">
              What is happening<br />
              <span className="text-amber-700">in your hormones?</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Hormones regulate everything — mood, energy, bone density, metabolism, cognition, sleep,
              and cardiovascular health. They change dramatically across a lifetime, in both men and women.
              This guide explains what is actually happening, when to expect it, and what the evidence says.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/life-stages" className="bg-amber-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-amber-800 transition-colors">
                See all life stages
              </Link>
              <Link href="/hormones/map" className="bg-white border border-stone-300 text-stone-700 px-6 py-3 rounded-xl font-medium hover:bg-stone-50 transition-colors">
                How hormones connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two tracks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Choose your track</h2>
          <p className="text-stone-500">Both tracks share the same hormonal foundations — but the timing, patterns, and priorities differ.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.sex} className={`border rounded-2xl p-6 ${track.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{track.emoji}</span>
                <div>
                  <h3 className={`text-xl font-bold ${track.accent}`}>{track.sex}</h3>
                  <p className="text-sm text-stone-500">{track.headline}</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">{track.description}</p>

              {/* Stage pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {track.stages.map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-1 bg-white border border-stone-200 rounded-full px-2.5 py-1 text-xs text-stone-600">
                    <span>{s.emoji}</span>
                    <span>{s.name}</span>
                    <span className="text-stone-400">{s.ageRange}</span>
                  </span>
                ))}
              </div>

              {/* Highlight callout */}
              <div className="bg-white/70 rounded-xl p-3 mb-5 text-xs text-stone-600 border border-stone-200">
                <span className={`font-semibold ${track.accent}`}>{track.highlight.label}: </span>
                {track.highlight.text}
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href={track.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${track.button}`}>
                  {track.sex} overview →
                </Link>
                <Link href={track.deepDive} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors bg-white ${track.outline}`}>
                  {track.deepDiveLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Life stages strip */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Hormonal health across a lifetime</h2>
              <p className="text-stone-500 text-sm mt-1">Different stages, different priorities — but the same interconnected systems.</p>
            </div>
            <Link href="/life-stages" className="text-sm text-amber-700 hover:underline font-medium shrink-0 ml-4">
              Full comparison →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { emoji: '🌱', label: 'Childhood', sub: 'Growth & development', color: 'bg-green-50 border-green-200' },
              { emoji: '🌸', label: 'Puberty', sub: 'Hormones switch on', color: 'bg-pink-50 border-pink-200' },
              { emoji: '🌺', label: 'Prime years', sub: 'Cycles & peak function', color: 'bg-rose-50 border-rose-200' },
              { emoji: '🍂', label: 'Transition', sub: 'Perimenopause / Andropause', color: 'bg-amber-50 border-amber-200' },
              { emoji: '🌾', label: 'Later life', sub: 'New baseline', color: 'bg-stone-50 border-stone-300' },
            ].map((stage) => (
              <Link key={stage.label} href="/life-stages" className={`border rounded-xl p-4 text-center hover:shadow-sm transition-all ${stage.color}`}>
                <div className="text-2xl mb-2">{stage.emoji}</div>
                <div className="text-xs font-semibold text-stone-800">{stage.label}</div>
                <div className="text-[11px] text-stone-500 mt-0.5">{stage.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shared hormones */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Hormones don&apos;t respect sex lines</h2>
          <p className="text-stone-500 max-w-2xl">
            Estrogen matters in men. Testosterone matters in women. Cortisol, insulin, thyroid, and growth hormone
            affect everyone the same way. The difference is in levels, ratios, and how they shift across the lifespan.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sharedHormones.map((h) => (
            <Link key={h.name} href="/hormones" className="bg-white border border-stone-200 rounded-xl p-4 hover:shadow-sm hover:border-stone-300 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{h.emoji}</span>
                <div>
                  <div className="font-semibold text-stone-900 text-sm mb-1">{h.name}</div>
                  <p className="text-xs text-stone-500 leading-relaxed">{h.note}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/hormones/map" className="text-sm text-amber-700 hover:underline font-medium">
            See how all hormones connect and interact →
          </Link>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-2">Why hormonal literacy matters</h2>
          <p className="text-stone-400 mb-8 max-w-xl">Most people know very little about their hormones until something goes wrong. That&apos;s too late.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyMatters.map((item) => (
              <div key={item.title} className="bg-stone-800 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-semibold text-white mb-2 text-sm">{item.title}</div>
                <p className="text-stone-400 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-8">Where do you want to go?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/female/perimenopause', emoji: '🍂', title: 'Perimenopause guide', desc: 'The most comprehensive section — symptoms, timeline, treatments, labs', color: 'bg-amber-50 border-amber-200 hover:bg-amber-100' },
            { href: '/male/andropause', emoji: '📉', title: 'Andropause guide', desc: 'Testosterone decline, symptoms, labs, and what actually helps', color: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
            { href: '/hormones', emoji: '🔬', title: 'Hormone reference', desc: '14 hormones explained — what each does and what happens when it shifts', color: 'bg-rose-50 border-rose-200 hover:bg-rose-100' },
            { href: '/life-stages', emoji: '📅', title: 'Life stages timeline', desc: 'Side-by-side comparison of hormonal changes across all life stages', color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100' },
          ].map((card) => (
            <Link key={card.href} href={card.href} className={`border rounded-xl p-5 transition-colors group ${card.color}`}>
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-semibold text-stone-900 mb-1.5 text-sm group-hover:text-stone-700">{card.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
          <strong>This site is for education only.</strong> Nothing here is medical advice.
          All treatment decisions should be made with a qualified healthcare provider who knows your personal history.
        </div>
      </section>
    </div>
  )
}
