import Link from 'next/link'

// Visual checkbox row — static, not interactive
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 py-2.5 border-b border-stone-100 last:border-0">
      <span className="mt-0.5 shrink-0 w-5 h-5 rounded border-2 border-stone-300 bg-white flex items-center justify-center">
        <span className="sr-only">unchecked</span>
      </span>
      <span className="text-sm text-stone-700 leading-snug">{text}</span>
    </li>
  )
}

// Section heading with optional pill tag
function SectionHeading({
  number,
  title,
  tag,
}: {
  number: string
  title: string
  tag?: string
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 text-white text-sm font-bold flex items-center justify-center">
        {number}
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{title}</h2>
      {tag && (
        <span className="hidden sm:inline-block text-xs border border-amber-200 text-amber-700 rounded-full px-2.5 py-0.5 font-medium bg-amber-50">
          {tag}
        </span>
      )}
    </div>
  )
}

// Script card for Section 4
function ScriptCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-stone-700 leading-relaxed italic relative">
      <span className="absolute -top-2.5 left-4 bg-white border border-stone-200 rounded-full px-2 py-0.5 text-[10px] text-stone-500 not-italic font-medium tracking-wide">
        SUGGESTED SCRIPT
      </span>
      {children}
    </div>
  )
}

export default function AmIInPerimenopausePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/female" className="hover:text-stone-700">Female</Link>
        <span className="mx-2">›</span>
        <Link href="/female/perimenopause" className="hover:text-stone-700">Perimenopause</Link>
        <span className="mx-2">›</span>
        <span className="text-stone-800 font-medium">Am I in Perimenopause?</span>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50 border border-amber-200 rounded-2xl p-8 mb-10">
        <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-3 py-1 text-xs text-amber-700 font-medium mb-4">
          <span>🍂</span>
          <span>Self-assessment guide · Not a diagnostic tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Am I in Perimenopause?
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-4">
          Perimenopause has no single test and no definitive moment. There is no blood result that confirms it
          and no scan that shows it. It is diagnosed by <strong className="text-stone-800">pattern</strong> —
          a combination of age, cycle changes, and symptom clusters evaluated over time.
        </p>
        <p className="text-sm text-stone-500 leading-relaxed max-w-2xl">
          Many women are told they are &ldquo;too young&rdquo; or that their labs are &ldquo;normal.&rdquo; Both can be true
          and perimenopause can still be the explanation. This guide helps you understand what to look for
          and what to bring to your doctor.
        </p>
      </div>

      {/* Honest framing callout */}
      <div className="flex gap-4 bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-12">
        <span className="text-2xl shrink-0">⚠️</span>
        <div className="text-sm text-stone-700 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-stone-900">This is a structured guide, not a diagnostic tool.</strong> Nothing
            here replaces clinical assessment. The purpose is to help you articulate your experience clearly to
            a healthcare provider — and to understand why &ldquo;normal&rdquo; results do not always rule out
            perimenopause.
          </p>
          <p>
            On average, women wait over three years before perimenopause is correctly identified — often having seen multiple
            doctors in the interim. The most common reasons are mood and sleep symptoms being treated as anxiety or
            depression without a hormonal workup, and hormone tests taken at the wrong point in the cycle.
          </p>
        </div>
      </div>

      {/* ─── SECTION 1: Three signals ─── */}
      <section className="mb-14">
        <SectionHeading number="1" title="The three signals to look for" />

        <div className="grid sm:grid-cols-3 gap-4">
          {/* Signal 1: Cycle changes */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📅</span>
              <h3 className="font-semibold text-stone-900 text-sm">Cycle changes</h3>
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-wide font-medium mb-2">Often the earliest sign</p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              Cycles shortening (25 days instead of 28), lengthening, becoming heavier or more irregular — these
              often appear before any other symptom. A persistent change in cycle length of 7 or more days is
              the first clinical marker of early perimenopause.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Skipping cycles entirely — gaps of 60 days or more — signals late perimenopause. Not every woman
              notices cycle changes first; some present with mood or sleep symptoms years before their cycle shifts.
            </p>
          </div>

          {/* Signal 2: Symptom clusters */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌊</span>
              <h3 className="font-semibold text-stone-900 text-sm">Symptom clusters</h3>
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-wide font-medium mb-2">Not just hot flashes</p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              Hot flashes are the most talked-about symptom, but they are often not the first. Sleep disruption,
              mood changes, anxiety, brain fog, joint pain, and changes in libido commonly begin in early
              perimenopause — before any vasomotor symptoms appear.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Women in early perimenopause frequently present to GPs and psychiatrists with mood and sleep complaints
              and receive anxiety or depression diagnoses — without a hormonal workup. The absence of hot flashes
              does not exclude perimenopause.
            </p>
          </div>

          {/* Signal 3: Age and context */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🗓️</span>
              <h3 className="font-semibold text-stone-900 text-sm">Age and context</h3>
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-wide font-medium mb-2">Range is wide</p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              The average onset is 47, but the range is broad — early 40s to early 50s. Family history of early
              menopause is meaningful: your mother&rsquo;s timing is a relevant data point.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-500">
              <li className="flex gap-2">
                <span className="text-amber-600 shrink-0 font-bold">›</span>
                <span><strong className="text-stone-700">Surgical menopause</strong> (removal of both ovaries) causes immediate perimenopause regardless of age</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 shrink-0 font-bold">›</span>
                <span><strong className="text-stone-700">Premature ovarian insufficiency (POI)</strong> — before age 40 — affects approximately 1% of women and requires urgent evaluation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 shrink-0 font-bold">›</span>
                <span><strong className="text-stone-700">Chemotherapy or pelvic radiation</strong> can trigger early perimenopause</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Structured checklist ─── */}
      <section className="mb-14">
        <SectionHeading number="2" title="A structured checklist" tag="Mark what applies in the last 12 months" />

        <p className="text-sm text-stone-500 mb-6 leading-relaxed">
          These are not scored — there is no threshold that confirms or rules out perimenopause.
          The purpose is to help you articulate which symptoms are present and how long they have been happening.
          Bring this list to your doctor.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">

          {/* Sub-checklist 1: Cycle changes */}
          <div className="bg-white border border-amber-200 rounded-2xl overflow-hidden">
            <div className="bg-amber-50 border-b border-amber-200 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-xl">📅</span>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Cycle changes</div>
                <div className="text-xs text-stone-500">Tick any that apply in the last 12 months</div>
              </div>
            </div>
            <ul className="px-5 py-1">
              <CheckItem text="My cycles have become shorter (less than 25 days)" />
              <CheckItem text="My cycles have become longer (more than 35 days)" />
              <CheckItem text="I've had at least one cycle where I skipped a period entirely" />
              <CheckItem text="My periods have become heavier or lighter than my usual" />
              <CheckItem text="My PMS has worsened noticeably" />
            </ul>
          </div>

          {/* Sub-checklist 2: Sleep & energy */}
          <div className="bg-white border border-indigo-200 rounded-2xl overflow-hidden">
            <div className="bg-indigo-50 border-b border-indigo-200 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-xl">🌙</span>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Sleep &amp; energy</div>
                <div className="text-xs text-stone-500">Tick any that apply</div>
              </div>
            </div>
            <ul className="px-5 py-1">
              <CheckItem text="I wake between 2–4am and struggle to fall back asleep" />
              <CheckItem text="I feel exhausted even after a full night's sleep" />
              <CheckItem text="I have night sweats that disrupt my sleep" />
              <CheckItem text="My energy is noticeably lower than it was 2–3 years ago" />
            </ul>
          </div>

          {/* Sub-checklist 3: Mood & cognition */}
          <div className="bg-white border border-blue-200 rounded-2xl overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-200 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-xl">🌊</span>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Mood &amp; cognition</div>
                <div className="text-xs text-stone-500">Tick any that apply</div>
              </div>
            </div>
            <ul className="px-5 py-1">
              <CheckItem text="I have anxiety that feels different from my usual stress response" />
              <CheckItem text="I have irritability or rage that feels disproportionate to the situation" />
              <CheckItem text="I struggle to find words mid-sentence more than I used to" />
              <CheckItem text="I feel mentally slower or less sharp than I used to" />
            </ul>
          </div>

          {/* Sub-checklist 4: Body changes */}
          <div className="bg-white border border-rose-200 rounded-2xl overflow-hidden">
            <div className="bg-rose-50 border-b border-rose-200 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-xl">🌡️</span>
              <div>
                <div className="font-semibold text-stone-900 text-sm">Body changes</div>
                <div className="text-xs text-stone-500">Tick any that apply</div>
              </div>
            </div>
            <ul className="px-5 py-1">
              <CheckItem text="I have hot flashes or sudden waves of heat" />
              <CheckItem text="I have new joint stiffness or pain with no clear cause" />
              <CheckItem text="I have vaginal dryness or discomfort during sex" />
              <CheckItem text="I have noticed weight gain particularly around my abdomen" />
            </ul>
          </div>

        </div>

        {/* What your answers might mean */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h3 className="font-semibold text-stone-900 mb-4 text-sm uppercase tracking-wide">
            What your answers might mean
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="shrink-0 w-2 h-2 mt-1.5 rounded-full bg-amber-500"></span>
              <p className="text-sm text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Cycle changes plus 3 or more symptoms from other categories</strong> is a strong
                pattern worth discussing with a doctor and requesting a timed hormone panel.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-2 h-2 mt-1.5 rounded-full bg-amber-500"></span>
              <p className="text-sm text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Mood, sleep, and cognitive symptoms alone</strong> — especially in the early 40s — are frequently
                the first presentation of early perimenopause. This stage is consistently underrecognised. Discuss with
                a doctor even without hot flashes or cycle changes.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-2 h-2 mt-1.5 rounded-full bg-rose-500"></span>
              <p className="text-sm text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Hot flashes alone are not sufficient</strong> to confirm or exclude perimenopause — and
                many women in early perimenopause do not have hot flashes at all. Vasomotor symptoms are a late
                marker, not a requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Labs ─── */}
      <section className="mb-14">
        <SectionHeading number="3" title="What the labs can (and can't) tell you" />

        {/* Key message banner */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-6">
          <p className="text-sm text-stone-800 font-medium leading-relaxed">
            A single &ldquo;normal&rdquo; FSH result does not rule out perimenopause. This is the most common reason women
            are dismissed — and it reflects a fundamental misunderstanding of how hormones fluctuate during the transition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">

          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-stone-800 text-sm flex items-center gap-2">
              <span className="text-base">📉</span>
              FSH (follicle-stimulating hormone)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              FSH fluctuates dramatically in perimenopause — it can be normal on day 10 and elevated on day 3
              of the same cycle. It must be tested on <strong>days 2–5 of the cycle</strong> to be meaningful.
              A normal result on the wrong day is uninformative.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-stone-800 text-sm flex items-center gap-2">
              <span className="text-base">📈</span>
              Estradiol
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Estradiol can be <strong>higher than normal in early perimenopause</strong> — causing breast
              tenderness, heavy periods, and anxiety — before eventually declining. A single high or normal
              reading does not mean perimenopause is not happening. Test on days 2–5 for comparability.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-stone-800 text-sm flex items-center gap-2">
              <span className="text-base">🌡️</span>
              AMH (anti-Müllerian hormone)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              AMH reflects ovarian reserve and falls <strong>earliest of all markers</strong> — often years
              before FSH rises or symptoms appear. It can be tested on any day of the cycle. A low AMH in
              the early 40s is a meaningful early indicator even when everything else appears normal.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-stone-800 text-sm flex items-center gap-2">
              <span className="text-base">🔄</span>
              Progesterone
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Progesterone is produced only after ovulation (in the luteal phase). As cycles become anovulatory,
              progesterone falls. This is often <strong>the first hormonal change in early perimenopause</strong>
              — driving anxiety and sleep disruption before estrogen changes are measurable. Test on day 21 (or
              7 days before expected period). A result below 5 nmol/L suggests the cycle was anovulatory.
            </p>
          </div>

        </div>

        {/* The right tests to ask for */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
          <h3 className="font-semibold text-stone-900 mb-1 text-sm">The most useful hormone panel</h3>
          <p className="text-xs text-stone-500 mb-4">
            A &ldquo;normal panel&rdquo; taken at the wrong time in the cycle — or without the right markers — is
            effectively meaningless. Request these specifically:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
            {[
              { test: 'FSH', timing: 'Day 2–5 of cycle' },
              { test: 'Estradiol (E2)', timing: 'Day 2–5 of cycle' },
              { test: 'AMH', timing: 'Any day' },
              { test: 'Progesterone', timing: 'Day 21 (or 7 days before expected period)' },
              { test: 'SHBG', timing: 'Any day' },
              { test: 'Free + total testosterone', timing: 'Any day (morning)' },
            ].map(({ test, timing }) => (
              <div key={test} className="flex items-start gap-2 text-sm">
                <span className="text-amber-600 font-bold shrink-0 mt-0.5">›</span>
                <span>
                  <strong className="text-stone-800">{test}</strong>
                  <span className="text-stone-500 text-xs ml-1">— {timing}</span>
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/labs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline"
          >
            See the full lab guide, including how to interpret results →
          </Link>
        </div>
      </section>

      {/* ─── SECTION 4: What to say to your doctor ─── */}
      <section className="mb-14">
        <SectionHeading number="4" title="What to say to your doctor" />

        <p className="text-sm text-stone-500 mb-6 leading-relaxed">
          Many women struggle to have their symptoms taken seriously. These scripts are specific and evidence-based —
          they signal that you understand the relevant clinical picture, which makes a productive conversation more likely.
        </p>

        <div className="space-y-4 mb-8">

          <ScriptCard>
            &ldquo;I&rsquo;ve been tracking my cycles and I&rsquo;ve noticed they&rsquo;ve changed significantly in the last
            [X months] — [shorter / longer / skipping]. I&rsquo;d like to discuss whether this could be perimenopause and
            what tests are appropriate.&rdquo;
          </ScriptCard>

          <ScriptCard>
            &ldquo;My symptoms have changed significantly in the last [X months] — specifically [sleep disruption /
            anxiety / brain fog / mood changes]. I&rsquo;d like a full hormone panel including FSH on day 2–5, estradiol
            on day 2–5, AMH, progesterone on day 21, and SHBG. I understand these need to be timed correctly to be
            meaningful.&rdquo;
          </ScriptCard>

          <ScriptCard>
            &ldquo;I&rsquo;ve been told my bloods are normal, but my symptoms are significantly affecting my quality of life.
            I&rsquo;d like to discuss what else should be tested, whether the tests were timed correctly to my cycle, and
            whether a referral to a menopause specialist is appropriate.&rdquo;
          </ScriptCard>

        </div>

        {/* If dismissed */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
          <h3 className="font-semibold text-stone-900 mb-3 text-sm flex items-center gap-2">
            <span>🔎</span>
            If you are dismissed or not taken seriously
          </h3>
          <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
            <p>
              Being told you are &ldquo;too young&rdquo; or that your results are &ldquo;normal&rdquo; does not mean you are wrong.
              Both can be true and perimenopause can still be the explanation. You have options:
            </p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">›</span>
                <span>
                  <strong>Request a second opinion</strong> — specifically from a doctor with a special interest in
                  menopause or women&rsquo;s hormonal health.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">›</span>
                <span>
                  <strong>Ask for a referral to a menopause specialist</strong> — in the UK, ask for a BMS-registered
                  specialist; in the US, look for NAMS-certified practitioners.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">›</span>
                <span>
                  <strong>Bring written documentation</strong> — a cycle tracking record and a written symptom list
                  covering duration, frequency, and impact is harder to dismiss than a verbal description.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-500 font-bold shrink-0">›</span>
                <span>
                  <strong>Reference clinical guidelines</strong> — the NICE guideline on menopause (NG23 in the UK)
                  explicitly states perimenopause is a clinical diagnosis that does not require confirmatory blood tests.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: What comes next ─── */}
      <section className="mb-12">
        <SectionHeading number="5" title="What comes next" />

        <div className="grid sm:grid-cols-3 gap-4">

          <Link
            href="/symptoms"
            className="group bg-amber-50 border border-amber-200 rounded-2xl p-5 hover:bg-amber-100 transition-colors"
          >
            <span className="text-3xl block mb-3">🩺</span>
            <h3 className="font-semibold text-stone-900 text-sm mb-1.5 group-hover:text-amber-800">
              Understand your symptoms
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed mb-3">
              All 10 symptom clusters — what each one is, why it happens biologically, and what tests to ask for.
              From hot flashes to brain fog to joint pain.
            </p>
            <span className="text-xs font-medium text-amber-700 group-hover:underline">
              Go to symptoms guide →
            </span>
          </Link>

          <Link
            href="/timeline"
            className="group bg-emerald-50 border border-emerald-200 rounded-2xl p-5 hover:bg-emerald-100 transition-colors"
          >
            <span className="text-3xl block mb-3">📅</span>
            <h3 className="font-semibold text-stone-900 text-sm mb-1.5 group-hover:text-emerald-800">
              See where you are in the transition
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed mb-3">
              From late reproductive years through early perimenopause, late perimenopause, menopause, and beyond —
              what typically happens at each stage.
            </p>
            <span className="text-xs font-medium text-emerald-700 group-hover:underline">
              See the timeline →
            </span>
          </Link>

          <Link
            href="/what-helps"
            className="group bg-violet-50 border border-violet-200 rounded-2xl p-5 hover:bg-violet-100 transition-colors"
          >
            <span className="text-3xl block mb-3">💊</span>
            <h3 className="font-semibold text-stone-900 text-sm mb-1.5 group-hover:text-violet-800">
              See what the evidence supports
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed mb-3">
              Evidence-rated treatments for each symptom cluster — hormonal, non-hormonal, supplements, and
              lifestyle. Each rated by trial quality.
            </p>
            <span className="text-xs font-medium text-violet-700 group-hover:underline">
              Go to treatments →
            </span>
          </Link>

        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-relaxed">
        <strong>This is not a diagnostic tool.</strong> Perimenopause is diagnosed clinically by a doctor, based on
        a full assessment of symptoms, cycle history, age, and — where appropriate — timed laboratory investigations.
        Nothing on this page constitutes medical advice. All treatment and diagnostic decisions should be made with a
        qualified healthcare provider. If you are under 45 and experiencing these symptoms, please seek a clinical
        assessment promptly.
      </div>

    </div>
  )
}
