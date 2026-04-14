import { hormones, colorMap, groupLabels, type HormoneGroup } from "@/data/hormones"
import Link from "next/link"

// Group hormones preserving order within each group
const groups = Object.keys(groupLabels) as HormoneGroup[]

export default function HormonesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Hormones</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          What Are Hormones — and What Do They Do?
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Hormones are chemical messengers made in one part of the body that travel in
          the bloodstream to affect cells and organs everywhere. In perimenopause,
          multiple hormonal systems shift simultaneously — which is why the effects
          are so far-reaching and often unexpected.
        </p>
      </div>

      {/* What is a hormone */}
      <section className="bg-white border border-stone-200 rounded-2xl p-7 mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-5">First: what actually is a hormone?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-stone-600 leading-relaxed text-sm">
          <div className="space-y-3">
            <p>
              Think of hormones as <strong className="text-stone-800">slow, body-wide text messages</strong>.
              Unlike nerves — which fire instantly and locally — hormones travel through the bloodstream
              and take minutes to hours to produce effects. But a single hormone can reach every cell in
              the body simultaneously.
            </p>
            <p>
              Each hormone has a specific shape that fits into matching receptors on target cells — like
              a key fitting a lock. When a hormone binds to its receptor, it changes what that cell does:
              switching genes on or off, speeding up or slowing down activity, releasing other chemicals.
            </p>
            <p>
              The same hormone can do very different things in different tissues. Estrogen, for example,
              affects bone density, brain chemistry, artery flexibility, vaginal tissue, and gut function
              all at once — via different receptor subtypes in each location.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <h3 className="font-semibold text-stone-800 mb-2">The feedback loop</h3>
              <p className="text-sm">
                Hormones form feedback loops. When estrogen is high, it signals the brain to lower
                FSH. When estrogen drops, FSH rises to try to stimulate more. In perimenopause,
                this loop becomes unreliable as the ovaries respond unpredictably — which is why
                both symptoms and test results become erratic.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <h3 className="font-semibold text-stone-800 mb-2">Why &ldquo;normal&rdquo; levels are complicated</h3>
              <p className="text-sm">
                Levels fluctuate through the day, across the menstrual cycle, and across life stages.
                A single blood test captures one moment in time. In early perimenopause, estrogen
                can be high one day and low the next — making a single &ldquo;normal&rdquo; result unreliable
                and a frequent basis for incorrect dismissal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link to map */}
      <section className="mb-8">
        <Link
          href="/hormones/map"
          className="flex items-center gap-4 bg-gradient-to-r from-rose-50 to-violet-50 border border-rose-200 rounded-2xl p-5 hover:shadow-sm transition-all group"
        >
          <div className="text-4xl">🗺️</div>
          <div className="flex-1">
            <div className="font-bold text-stone-900 group-hover:text-rose-800 transition-colors">See how all hormones connect →</div>
            <div className="text-sm text-stone-500 mt-0.5">A visual map of the HPO axis, HPA stress axis, and metabolic web — and how they all interact in perimenopause.</div>
          </div>
        </Link>
      </section>

      {/* Group overview grid */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-5">The hormone systems at a glance</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {groups.map((g) => {
            const gl = groupLabels[g]
            const count = hormones.filter(h => h.group === g).length
            return (
              <a
                key={g}
                href={`#group-${g}`}
                className="bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-300 hover:shadow-sm transition-all group"
              >
                <div className="text-2xl mb-2">{gl.emoji}</div>
                <div className="font-semibold text-stone-800 text-sm mb-1 group-hover:text-stone-900">
                  {gl.label}
                </div>
                <div className="text-xs text-stone-500 leading-relaxed mb-2">{gl.description}</div>
                <div className="text-xs text-amber-700 font-medium">{count} hormones →</div>
              </a>
            )
          })}
        </div>
      </section>

      {/* Hormone groups */}
      {groups.map((g) => {
        const gl = groupLabels[g]
        const groupHormones = hormones.filter(h => h.group === g)
        return (
          <section key={g} id={`group-${g}`} className="mb-16 scroll-mt-20">
            {/* Group header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-stone-200">
              <span className="text-3xl">{gl.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">{gl.label}</h2>
                <p className="text-stone-500 text-sm">{gl.description}</p>
              </div>
            </div>

            {/* Hormone cards */}
            <div className="space-y-8">
              {groupHormones.map((hormone) => {
                const c = colorMap[hormone.color]
                return (
                  <div
                    key={hormone.id}
                    id={hormone.id}
                    className={`bg-white border-2 rounded-2xl overflow-hidden scroll-mt-20 ${c.border}`}
                  >
                    {/* Card header */}
                    <div className={`px-6 py-5 border-b ${hormone.headerColor} ${c.border}`}>
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{hormone.emoji}</span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-stone-900">{hormone.name}</h3>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${c.badge}`}>
                              {hormone.nickname}
                            </span>
                          </div>
                          <p className="text-sm text-stone-600">
                            <span className="font-medium">Made by:</span> {hormone.madeBy}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6 space-y-6">
                      {/* Plain description */}
                      <div>
                        <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                          What is it?
                        </h4>
                        <p className="text-stone-700 leading-relaxed">{hormone.plainDescription}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* What it does */}
                        <div>
                          <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">
                            What it does in your body
                          </h4>
                          <ul className="space-y-2">
                            {hormone.whatItDoes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${c.dot}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What happens when it changes */}
                        <div>
                          <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">
                            When it shifts — what you feel
                          </h4>
                          <ul className="space-y-2">
                            {hormone.whatHappensWhenItChanges.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                                <span className="text-stone-300 mt-0.5 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* In perimenopause */}
                      <div className={`rounded-xl p-5 border ${hormone.headerColor} ${c.border}`}>
                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-2 text-stone-500">
                          In perimenopause specifically
                        </h4>
                        <p className="text-sm text-stone-700 leading-relaxed">{hormone.perimeno}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* How they interact */}
      <section className="bg-stone-900 text-white rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-bold mb-2">These hormones don&apos;t work in isolation</h2>
        <p className="text-stone-400 text-sm mb-6">
          They form an interconnected web — which is why perimenopausal symptoms feel so
          systemic, and why a single hormone test rarely tells the whole story.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: "Estrogen → Progesterone → Sleep",
              body: "Estrogen declines erratically. Progesterone drops first (fewer ovulations). Progesterone's brain metabolite allopregnanolone is what promotes deep sleep. Lost sleep means lost growth hormone. Poor sleep amplifies cortisol. Every other symptom worsens.",
            },
            {
              title: "Estrogen ↔ Insulin",
              body: "Estrogen directly improves insulin sensitivity. As it declines, insulin resistance emerges — even without dietary changes. This drives visceral fat accumulation, rising blood sugar, and appetite dysregulation via leptin and ghrelin.",
            },
            {
              title: "Estrogen ↔ Cortisol",
              body: "Estrogen moderates the HPA stress axis. Without it, cortisol overshoots after stress and takes longer to return to baseline. Previously manageable stress feels overwhelming — this is biological, not a personality change.",
            },
            {
              title: "Estrogen ↔ Thyroid",
              body: "Estrogen raises thyroid binding globulin, altering free T3/T4 availability. Hashimoto's thyroiditis peaks at this life stage. The two conditions share virtually every symptom — and frequently coexist.",
            },
            {
              title: "DHEA → Estrogen + Testosterone",
              body: "DHEA is the reservoir from which local tissues make their own estrogen and testosterone. As DHEA declines through adrenopause (separate from menopause), the backup supply shrinks — relevant especially for vaginal tissue, skin, brain, and bone.",
            },
            {
              title: "Sleep → Growth Hormone → Repair",
              body: "Growth hormone is released during deep slow-wave sleep — which perimenopause directly disrupts. Less GH means slower muscle repair, accelerated fat gain, and thinner skin. What looks like 'ageing' is largely a sleep-GH cascade triggered by hormonal disruption.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-stone-800 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-2 text-sm">{card.title}</h3>
              <p className="text-stone-300 text-xs leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jump to related pages */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          { href: "/symptoms",   emoji: "🩺", title: "How these show up as symptoms",    color: "bg-amber-50 border-amber-200 hover:bg-amber-100" },
          { href: "/labs",       emoji: "🧪", title: "How to test your hormone levels",  color: "bg-blue-50 border-blue-200 hover:bg-blue-100" },
          { href: "/what-helps", emoji: "💊", title: "What can rebalance them",          color: "bg-violet-50 border-violet-200 hover:bg-violet-100" },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`border rounded-xl p-5 transition-colors group ${card.color}`}
          >
            <div className="text-2xl mb-2">{card.emoji}</div>
            <div className="text-sm font-semibold text-stone-800 group-hover:text-stone-900">
              {card.title} →
            </div>
          </Link>
        ))}
      </section>

    </div>
  )
}
