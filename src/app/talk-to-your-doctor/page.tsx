import Link from 'next/link'

const prepCards = [
  {
    number: '01',
    title: 'Track your cycles and symptoms',
    body: 'Bring at least 3 months of data: cycle length, symptom days, and severity. Apps or a simple notebook both work. Patterns matter far more than single data points.',
    tip: '"My cycles have changed from 28 to 35 days over the last 6 months" is more useful than "my periods are weird."',
  },
  {
    number: '02',
    title: 'Know what tests to ask for',
    body: 'A standard check-up rarely includes a full hormone panel. Request: FSH and estradiol timed to day 2–5 of your cycle, AMH (any day), progesterone on day 21, SHBG, free testosterone, thyroid panel, and metabolic panel.',
    tip: 'Don\'t accept "your bloods are normal" without finding out which tests were actually run — and when in your cycle.',
    link: { href: '/labs', label: 'See the full test guide' },
  },
  {
    number: '03',
    title: 'Write down your impact statement',
    body: 'Not just a symptom list — a description of how this is affecting your work, sleep, relationships, exercise, and daily functioning. Doctors respond to functional impairment, not symptom inventories.',
    tip: '"I\'ve had to cancel social plans three times this month because of fatigue" lands differently than "I\'m tired."',
  },
]

const femaleOpeners = [
  {
    text: '"I\'ve been tracking my cycles and I\'ve noticed [specific change]. I\'m [age] and I\'d like to discuss whether this could be perimenopause and what tests would be appropriate."',
  },
  {
    text: '"My sleep has been significantly disrupted for [X months] along with [mood / energy / other symptoms]. I\'d like to rule out hormonal causes before treating the symptoms individually."',
  },
  {
    text: '"I\'ve read about the STRAW+10 staging criteria. My cycle length has varied by more than 7 days in the last 3 months. Can we discuss where I might be in the perimenopause transition?"',
  },
]

const maleOpeners = [
  {
    text: '"I\'ve been experiencing [fatigue / low libido / mood changes] that don\'t respond to lifestyle changes. I\'d like to test my testosterone, SHBG, and free testosterone to rule out late-onset hypogonadism."',
  },
  {
    text: '"I\'m [age] and I\'ve noticed a significant change in my energy, motivation, and body composition over the last 2 years. Can we check my full hormone panel including LH, FSH, and estradiol alongside testosterone?"',
  },
]

const dismissalCards = [
  {
    dismissal: '"You\'re too young"',
    response:
      '"The average age of perimenopause onset is 47, but the range is 40–55. Early perimenopause in the early 40s is well-documented. Can we test AMH as an indicator of ovarian reserve?"',
    context:
      'STRAW+10 criteria define early perimenopause by cycle irregularity, not age. Age alone is not a diagnostic criterion.',
  },
  {
    dismissal: '"Your bloods are normal"',
    response:
      '"Can you tell me which tests were run and when in my cycle? FSH and estradiol fluctuate significantly in early perimenopause — a normal result on day 14 is not the same as day 2–5. Can we repeat with cycle-timed testing?"',
    context:
      'A single hormone test mid-cycle is frequently uninformative. Trends across multiple cycles matter more than any single reading.',
  },
  {
    dismissal: '"It\'s just stress / anxiety / depression"',
    response:
      '"I\'d like to treat the root cause rather than the symptom. Can we first rule out hormonal drivers before starting antidepressants? The NICE guidelines and NAMS recommend hormone testing before attributing perimenopausal mood symptoms to primary depression."',
    context:
      'Estrogen and progesterone directly regulate mood. Hormonal mood disruption is a distinct mechanism from primary depression and responds differently to treatment.',
  },
  {
    dismissal: '"HRT is dangerous"',
    response:
      '"My understanding is that the safety profile of HRT has been substantially updated since the WHI study in 2002, and current guidance from NAMS, NICE, and the BMS supports HRT for appropriate candidates. Can we discuss my specific risk profile?"',
    context:
      'The 2002 WHI study used oral synthetic hormones in women averaging 63 years old — many more than 10 years post-menopause. Modern transdermal, body-identical HRT has a substantially different risk profile.',
  },
]

const findingDoctorCards = [
  {
    icon: '🔍',
    title: 'Ask specifically for a menopause specialist',
    body: 'Not all GPs or PCPs have up-to-date training in hormonal health. You are entitled to ask for a referral to a menopause clinic, endocrinologist, or gynaecologist with a special interest in menopause.',
  },
  {
    icon: '📋',
    title: 'Trusted provider directories',
    body: 'Menopause Society (NAMS) provider finder (US), British Menopause Society (UK), Australasian Menopause Society (AUS/NZ). For male hormonal health: Endocrine Society, BSSM (British Society for Sexual Medicine).',
  },
  {
    icon: '✓',
    title: 'Signs of a good consultation',
    body: 'They ask about your symptoms in detail. They test the right things at the right time in your cycle. They discuss options rather than prescribing reflexively. They do not dismiss symptoms without investigation.',
  },
]

const patientRights = [
  'You are entitled to a second opinion — and you do not need to explain why.',
  'You can request a specialist referral in most healthcare systems.',
  'You can ask what evidence a treatment recommendation is based on.',
  'You can ask what was tested — and what was not tested.',
  'A symptom significantly affecting your quality of life warrants investigation, regardless of lab values.',
]

const femalePanelTests = [
  { name: 'FSH + Estradiol', note: 'Day 2–5 of cycle' },
  { name: 'Progesterone', note: 'Day 21 of cycle' },
  { name: 'AMH', note: 'Any day' },
  { name: 'LH', note: 'Day 2–5 of cycle' },
  { name: 'Free + Total Testosterone', note: 'AM, fasting' },
  { name: 'SHBG', note: 'AM, fasting' },
  { name: 'TSH + Free T4', note: 'AM, fasting' },
  { name: 'Ferritin', note: 'Any time' },
  { name: 'Vitamin D', note: 'Any time' },
]

const malePanelTests = [
  { name: 'Total Testosterone', note: 'AM, fasting (×2 readings)' },
  { name: 'Free Testosterone', note: 'AM, fasting' },
  { name: 'SHBG', note: 'AM, fasting' },
  { name: 'LH + FSH', note: 'AM' },
  { name: 'Estradiol (E2)', note: 'AM' },
  { name: 'Prolactin', note: 'AM' },
  { name: 'TSH + Free T4', note: 'AM, fasting' },
  { name: 'PSA', note: 'If clinically indicated' },
  { name: 'Vitamin D + Ferritin', note: 'Any time' },
]

export default function TalkToYourDoctorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <span>Talk to Your Doctor</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4 leading-tight">
          How to Talk to Your Doctor About Hormonal Health
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Most people leave hormonal health appointments without what they needed — not because
          the answers don&apos;t exist, but because they didn&apos;t know how to ask. This page
          gives you the language.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-stone-200">
        {[
          { href: '#before', label: 'Before the appointment' },
          { href: '#openers', label: 'What to say' },
          { href: '#dismissed', label: 'If you\'re dismissed' },
          { href: '#finding', label: 'Finding the right doctor' },
          { href: '#rights', label: 'Your rights' },
          { href: '#test-list', label: 'Test request list' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Section 1: Before the appointment */}
      <section id="before" className="scroll-mt-20 mb-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Before the appointment</h2>
        <p className="text-stone-600 mb-7 leading-relaxed">
          How you prepare is often the difference between leaving with what you need and leaving empty-handed.
          Most appointments are short. Arrive with data, language, and a specific ask.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {prepCards.map((card) => (
            <div
              key={card.number}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="text-3xl font-bold text-stone-200 leading-none">{card.number}</div>
              <h3 className="font-semibold text-stone-900 text-base leading-snug">{card.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
              <div className="mt-auto bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5">
                <p className="text-xs text-stone-500 italic leading-relaxed">{card.tip}</p>
              </div>
              {card.link && (
                <Link
                  href={card.link.href}
                  className="text-xs text-amber-700 hover:underline font-medium"
                >
                  {card.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Scripted openers */}
      <section id="openers" className="scroll-mt-20 mb-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">What to say — scripted openers</h2>
        <p className="text-stone-600 mb-7 leading-relaxed">
          The words you use matter. Vague language gets vague responses. These openers are specific
          enough to signal clinical literacy and direct enough to prompt a meaningful response.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Female */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                Female
              </span>
            </div>
            <div className="space-y-4">
              {femaleOpeners.map((opener, i) => (
                <div
                  key={i}
                  className="bg-white border border-rose-200 rounded-xl px-4 py-3.5"
                >
                  <p className="text-sm text-stone-700 leading-relaxed">{opener.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Male */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                Male
              </span>
            </div>
            <div className="space-y-4">
              {maleOpeners.map((opener, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-200 rounded-xl px-4 py-3.5"
                >
                  <p className="text-sm text-stone-700 leading-relaxed">{opener.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-blue-100 rounded-lg px-3 py-2.5">
              <p className="text-xs text-blue-700 leading-relaxed">
                Male hormonal decline (andropause / late-onset hypogonadism) is frequently
                under-investigated. Two separate morning testosterone readings are required to
                confirm a diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: If you're dismissed */}
      <section id="dismissed" className="scroll-mt-20 mb-14">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-7">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">If you&apos;re dismissed</h2>
          <p className="text-stone-700 leading-relaxed">
            Many people — particularly women — are told &ldquo;you&apos;re too young,&rdquo;
            &ldquo;your bloods are normal,&rdquo; or &ldquo;it&apos;s just stress.&rdquo; These
            responses are common. They are also frequently wrong. Here is how to respond — calmly,
            with evidence, and without backing down.
          </p>
        </div>

        <div className="space-y-5">
          {dismissalCards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-amber-200 rounded-xl overflow-hidden"
            >
              <div className="bg-amber-50 border-b border-amber-200 px-5 py-3.5">
                <span className="text-sm font-semibold text-amber-900">
                  You&apos;re told: {card.dismissal}
                </span>
              </div>
              <div className="px-5 py-4 grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
                    What to say
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5">
                    {card.response}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
                    Why this matters
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{card.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-amber-100 border border-amber-300 rounded-xl px-5 py-4">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>If dismissal persists:</strong> ask for a written record of what was tested
            and what was not. Request a second opinion or a referral to a specialist. A symptom
            significantly affecting your quality of life warrants investigation.
          </p>
        </div>
      </section>

      {/* Section 4: Finding the right doctor */}
      <section id="finding" className="scroll-mt-20 mb-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Finding the right doctor</h2>
        <p className="text-stone-600 mb-7 leading-relaxed">
          Not all doctors have up-to-date training in hormonal health. Menopause medicine is a
          subspecialty, and it&apos;s entirely reasonable to seek out someone with specific expertise.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {findingDoctorCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="text-2xl">{card.icon}</div>
              <h3 className="font-semibold text-stone-900 text-base leading-snug">{card.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Patient rights */}
      <section id="rights" className="scroll-mt-20 mb-14">
        <div className="bg-slate-900 text-white rounded-2xl p-7">
          <h2 className="text-2xl font-bold mb-2">Know your rights as a patient</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            You are not asking for a favour. You are navigating a healthcare system on your own
            behalf. These are your baseline entitlements.
          </p>
          <ul className="space-y-3">
            {patientRights.map((right, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-200 leading-relaxed">{right}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6: Test request list */}
      <section id="test-list" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Prepare your test request list</h2>
        <p className="text-stone-600 mb-7 leading-relaxed">
          Print this or save it to your phone. Hand it to your doctor or read from it directly.
          See the{' '}
          <Link href="/labs" className="text-amber-700 hover:underline font-medium">
            full labs guide
          </Link>{' '}
          for timing, reference ranges, and what each test means.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Female panel */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl overflow-hidden">
            <div className="bg-rose-100 border-b border-rose-200 px-5 py-3.5">
              <span className="text-sm font-bold text-rose-900">Female Hormone Panel</span>
            </div>
            <ul className="divide-y divide-rose-100">
              {femalePanelTests.map((test) => (
                <li
                  key={test.name}
                  className="flex items-center justify-between px-5 py-3 gap-3"
                >
                  <span className="text-sm font-medium text-stone-800">{test.name}</span>
                  <span className="text-xs text-stone-500 text-right shrink-0">{test.note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Male panel */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl overflow-hidden">
            <div className="bg-blue-100 border-b border-blue-200 px-5 py-3.5">
              <span className="text-sm font-bold text-blue-900">Male Hormone Panel</span>
            </div>
            <ul className="divide-y divide-blue-100">
              {malePanelTests.map((test) => (
                <li
                  key={test.name}
                  className="flex items-center justify-between px-5 py-3 gap-3"
                >
                  <span className="text-sm font-medium text-stone-800">{test.name}</span>
                  <span className="text-xs text-stone-500 text-right shrink-0">{test.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/labs"
            className="inline-block text-sm text-amber-700 hover:underline font-medium"
          >
            Full test guide with timing, ranges, and plain-English explanations →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800 mb-8">
        <strong>This is educational information, not medical advice.</strong> The scripts and
        responses on this page are intended to help you advocate for appropriate investigation —
        not to replace clinical judgement. Your doctor knows your full history; we do not.
        Use this page to have a better conversation, not to bypass one.
      </div>

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/labs" className="text-amber-700 hover:underline text-sm font-medium">
            Tests &amp; Labs →
          </Link>
          <Link href="/symptoms" className="text-amber-700 hover:underline text-sm font-medium">
            Symptoms (female) →
          </Link>
          <Link href="/male/andropause" className="text-amber-700 hover:underline text-sm font-medium">
            Andropause (male) →
          </Link>
        </div>
      </div>

    </div>
  )
}
