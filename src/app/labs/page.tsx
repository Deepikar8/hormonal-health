import Link from 'next/link'

const panels = [
  {
    title: 'Core Hormone Panel',
    emoji: '🧬',
    description: 'The primary hormones that define where you are in the transition.',
    tests: [
      {
        name: 'FSH (Follicle Stimulating Hormone)',
        timing: 'Day 2–5 of cycle if still cycling',
        why: 'FSH rises as the ovaries become less responsive. Persistently elevated FSH (>10 IU/L in reproductive years, >30 at menopause) is the primary lab marker of perimenopause. A single reading is less meaningful than a pattern.',
        normal: 'Varies by lab; trend matters more than a single value',
        plain: 'Your brain sending stronger signals trying to stimulate ovaries that are becoming less responsive.',
      },
      {
        name: 'Estradiol (E2)',
        timing: 'Day 2–5 if cycling',
        why: 'Measures your main form of estrogen. In perimenopause, levels are variable — they can be abnormally high on some months and low on others. Low consistent readings confirm estrogen deficiency.',
        normal: '30–400 pg/mL in reproductive years; <30 pg/mL post-menopause',
        plain: 'The main estrogen your ovaries produce. Erratic in perimenopause — not just low.',
      },
      {
        name: 'LH (Luteinising Hormone)',
        timing: 'Day 2–5 if cycling',
        why: 'Rises alongside FSH. The FSH:LH ratio can help distinguish perimenopause from other conditions.',
        plain: 'Works with FSH to stimulate the ovaries. Rises as ovarian function declines.',
      },
      {
        name: 'Progesterone',
        timing: 'Day 21 of cycle (or 7 days after suspected ovulation)',
        why: 'Confirms whether ovulation occurred. Low progesterone in the luteal phase indicates anovulatory cycles — a hallmark of early perimenopause.',
        normal: '>5 ng/mL confirms ovulation',
        plain: 'Only produced after ovulation. Low levels mean cycles may not include egg release — common in perimenopause.',
      },
      {
        name: 'AMH (Anti-Müllerian Hormone)',
        timing: 'Any day of cycle',
        why: 'Reflects ovarian reserve — the number of eggs remaining. Declines gradually from the mid-30s. Low AMH indicates reduced reserve and approaching menopause.',
        plain: 'A measure of how many eggs remain. Falls steadily through your 40s regardless of symptoms.',
      },
      {
        name: 'Free & Total Testosterone',
        timing: 'AM, ideally fasting',
        why: 'Relevant for libido, energy, hair, skin changes, and clitoral/vaginal health. Often not tested but clinically significant.',
        plain: 'Yes, women have testosterone — and it matters for libido, energy, hair, and skin.',
      },
      {
        name: 'SHBG (Sex Hormone Binding Globulin)',
        timing: 'AM, fasting',
        why: 'A protein that binds testosterone and estrogen. High SHBG reduces free (active) hormone availability. Important for interpreting testosterone levels.',
        plain: 'A carrier protein — high levels mean less free, active hormone in circulation.',
      },
      {
        name: 'DHEA-S',
        timing: 'AM',
        why: 'An adrenal androgen that serves as a precursor to estrogen and testosterone. Declines with age. Relevant for energy, mood, libido, and skin.',
        plain: 'Made by the adrenal glands, converted to other hormones. Declines gradually from the 30s.',
      },
    ],
  },
  {
    title: 'Thyroid Panel',
    emoji: '🦋',
    description: 'Thyroid disorders are common in perimenopausal women and mimic or amplify almost every symptom.',
    tests: [
      {
        name: 'TSH (Thyroid Stimulating Hormone)',
        timing: 'AM, fasting preferred',
        why: 'The primary screening test for thyroid dysfunction. Hypothyroidism causes fatigue, weight gain, brain fog, depression, hair loss, dry skin, cold intolerance — identical to perimenopausal symptoms. Always test this.',
        normal: '0.4–4.0 mIU/L (some practitioners aim for 0.5–2.5)',
        plain: 'The most important thyroid test. Elevated = underactive thyroid = many symptoms overlap with perimenopause.',
      },
      {
        name: 'Free T4',
        timing: 'With TSH',
        why: 'The main thyroid hormone produced. Low Free T4 with high TSH confirms hypothyroidism.',
        plain: 'The main thyroid hormone. Measured alongside TSH for a complete picture.',
      },
      {
        name: 'Free T3',
        timing: 'With TSH if symptomatic',
        why: 'The active form of thyroid hormone. Some people have normal TSH/T4 but low T3 due to poor conversion (influenced by the DIO2 gene variant). Important for women with persistent symptoms despite normal TSH.',
        plain: 'The active thyroid hormone. Some people convert T4 to T3 poorly — T3 testing catches this.',
      },
      {
        name: 'TPO Antibodies',
        timing: 'If TSH is abnormal',
        why: 'Elevated anti-TPO antibodies indicate Hashimoto\'s thyroiditis (autoimmune hypothyroidism), which peaks in incidence in perimenopausal women.',
        plain: 'Tests for the autoimmune form of an underactive thyroid — common in perimenopausal women.',
      },
    ],
  },
  {
    title: 'Metabolic & Cardiovascular',
    emoji: '❤️',
    description: 'Cardiovascular risk shifts significantly during perimenopause. These tests establish your baseline.',
    tests: [
      {
        name: 'Fasting Glucose + Insulin',
        timing: 'Fasting (8+ hours)',
        why: 'Calculate HOMA-IR (insulin resistance index). Insulin resistance often develops during perimenopause even in previously metabolically healthy women.',
        normal: 'HOMA-IR <1.5 is generally normal',
        plain: 'Checks how well your body handles blood sugar. Resistance can develop during perimenopause.',
      },
      {
        name: 'HbA1c',
        timing: 'Any time',
        why: 'Reflects average blood glucose over 3 months. A better long-term marker than fasting glucose alone.',
        plain: 'A 3-month average of blood sugar. Convenient and doesn\'t require fasting.',
      },
      {
        name: 'Full Lipid Panel + ApoB',
        timing: 'Fasting',
        why: 'LDL rises and HDL falls as estrogen declines. ApoB is a more accurate cardiovascular risk marker than LDL-C alone — each ApoB particle represents one potentially atherogenic lipoprotein.',
        plain: 'Cholesterol levels change with estrogen decline. ApoB is more informative than standard LDL.',
      },
      {
        name: 'hs-CRP (high-sensitivity C-reactive protein)',
        timing: 'Any time',
        why: 'A marker of systemic inflammation, which rises as estrogen\'s anti-inflammatory effects are lost. Predicts cardiovascular risk independently of cholesterol.',
        plain: 'Measures inflammation in the body. Rises as estrogen\'s protective effects are lost.',
      },
      {
        name: 'Lipoprotein(a)',
        timing: 'One-time genetic test',
        why: 'A genetically determined lipoprotein that significantly increases cardiovascular risk. Level is fixed from birth — test once and know your baseline risk.',
        plain: 'A cholesterol-like molecule that is genetically determined. Worth knowing once.',
      },
    ],
  },
  {
    title: 'Nutrients & Inflammation',
    emoji: '🌿',
    description: 'Deficiencies in these nutrients cause symptoms identical to perimenopause — always check before attributing everything to hormones.',
    tests: [
      {
        name: '25-OH Vitamin D',
        timing: 'Any time',
        why: 'Deficiency is extremely common and causes fatigue, bone pain, muscle weakness, low mood, and immune dysfunction. Essential for calcium absorption and bone health.',
        normal: '>50 nmol/L; many practitioners aim for 75–125 nmol/L',
        plain: 'Vitamin D deficiency is very common and causes symptoms identical to perimenopause. Always check.',
      },
      {
        name: 'Ferritin (iron stores)',
        timing: 'Any time',
        why: 'Heavy perimenopausal bleeding is a common cause of iron deficiency. Low ferritin causes fatigue, hair loss, poor concentration, and cold intolerance — easily mistaken for hormonal symptoms.',
        normal: '>50 µg/L for optimal function (not just >12 which avoids clinical deficiency)',
        plain: 'Iron stores. Heavy periods are very common in perimenopause and frequently cause iron depletion.',
      },
      {
        name: 'B12',
        timing: 'Any time',
        why: 'B12 deficiency causes fatigue, cognitive symptoms, mood changes, and nerve tingling. Becomes more common with age. Vegetarians/vegans especially at risk.',
        plain: 'B12 deficiency mimics brain fog and fatigue. Common with age.',
      },
      {
        name: 'Folate',
        timing: 'Any time',
        why: 'Important for methylation pathways involved in mood, cardiovascular health, and DNA repair.',
        plain: 'Important for mood and methylation. Often tested alongside B12.',
      },
      {
        name: 'Magnesium (RBC)',
        timing: 'Any time',
        why: 'Serum magnesium is unreliable — RBC magnesium reflects intracellular stores. Deficiency causes sleep problems, muscle cramps, anxiety, and headaches.',
        plain: 'RBC magnesium (not serum) is the correct test. Deficiency affects sleep, mood, and muscle function.',
      },
    ],
  },
  {
    title: 'Bone Health',
    emoji: '🦴',
    description: 'Bone loss begins silently in perimenopause. Establish your baseline now.',
    tests: [
      {
        name: 'DEXA Scan (Bone Density)',
        timing: 'Baseline at perimenopause; every 1–2 years if at risk',
        why: 'The gold-standard test for bone density. Bone loss accelerates significantly in late perimenopause — establishing a baseline allows tracking. Many women only find out they have osteopaenia or osteoporosis after a fracture.',
        plain: 'An X-ray scan that measures bone density. Silent bone loss starts years before menopause.',
      },
      {
        name: 'CTx (C-terminal telopeptide)',
        timing: 'Fasting, AM',
        why: 'A blood marker of bone resorption (breakdown). Useful for tracking whether treatment is working.',
        plain: 'Measures the rate of bone breakdown. Useful when monitoring treatment.',
      },
      {
        name: 'P1NP (Procollagen type 1 N-terminal propeptide)',
        timing: 'Any time',
        why: 'A blood marker of bone formation. Used alongside CTx to understand the resorption/formation balance.',
        plain: 'Measures the rate of bone building. Paired with CTx to see the full picture.',
      },
    ],
  },
]

export default function LabsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-stone-500 mb-2">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Tests & Labs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Tests & Lab Work
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          What to ask your doctor to test, why each test matters, and what the results mean
          — in plain English.
        </p>
      </div>

      {/* Important note */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
        <h2 className="font-semibold text-blue-900 mb-2">
          Most standard check-ups don&apos;t include these tests
        </h2>
        <p className="text-sm text-blue-800 leading-relaxed">
          A routine annual physical typically includes a TSH, basic metabolic panel, and lipid panel
          — but not the hormone panel, AMH, ApoB, ferritin at optimal levels, or bone density scan
          that would give a complete picture of where you are. You may need to specifically request
          these tests and explain that you are investigating possible perimenopause.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-stone-200">
        {panels.map((p) => (
          <a
            key={p.title}
            href={`#${p.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full font-medium hover:bg-stone-50 transition-colors"
          >
            {p.emoji} {p.title}
          </a>
        ))}
      </div>

      {/* Panels */}
      <div className="space-y-12">
        {panels.map((panel) => (
          <div
            key={panel.title}
            id={panel.title.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-20"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{panel.emoji}</span>
              <h2 className="text-2xl font-bold text-stone-900">{panel.title}</h2>
            </div>
            <p className="text-stone-600 mb-6">{panel.description}</p>

            <div className="space-y-4">
              {panel.tests.map((test, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                  <div className="px-5 py-4 bg-stone-50 border-b border-stone-200">
                    <h3 className="font-semibold text-stone-900">{test.name}</h3>
                    {test.timing && (
                      <div className="text-xs text-stone-500 mt-1">
                        <span className="font-medium">Timing: </span>{test.timing}
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
                        In plain English
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed">{test.plain}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
                          Why it matters
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">{test.why}</p>
                      </div>
                      {'normal' in test && test.normal && (
                        <div>
                          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                            Reference ranges
                          </div>
                          <p className="text-xs text-stone-500 italic">{test.normal}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Print prompt */}
      <div className="mt-10 flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <span className="text-2xl shrink-0">🖨️</span>
        <div>
          <div className="font-semibold text-amber-900 text-sm mb-1">Take this to your appointment</div>
          <p className="text-xs text-amber-800 leading-relaxed mb-3">
            This page is designed to be used at a doctor&apos;s appointment. Print it or save it to your phone before you go — it gives you the exact test names, timing, and reference ranges to ask about.
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs bg-amber-100 border border-amber-300 text-amber-800 px-3 py-1.5 rounded-lg font-medium">
              Print: Ctrl+P (Windows) · Cmd+P (Mac)
            </span>
            <Link href="/talk-to-your-doctor" className="text-xs bg-white border border-amber-300 text-amber-800 px-3 py-1.5 rounded-lg font-medium hover:bg-amber-50 transition-colors">
              How to talk to your doctor →
            </Link>
          </div>
        </div>
      </div>

      {/* Talking to your doctor */}
      <div className="mt-8 bg-stone-900 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Talking to your doctor</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-300 leading-relaxed">
          <div>
            <h3 className="text-white font-semibold mb-2">How to ask for these tests</h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-stone-500">›</span> &ldquo;I&apos;m having symptoms that may be perimenopausal. Can we do a hormone panel including FSH, estradiol, and AMH?&rdquo;</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> &ldquo;I&apos;d like to check ApoB and Lp(a) as part of a cardiovascular baseline.&rdquo;</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> &ldquo;Can we check ferritin (not just haemoglobin) given my heavy periods?&rdquo;</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> &ldquo;I&apos;d like a DEXA scan as a bone density baseline.&rdquo;</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Things to know</h3>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-stone-500">›</span> A single hormone test is often uninformative. Repeat testing and trends matter more.</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> Normal ranges are often population averages — &ldquo;within range&rdquo; doesn&apos;t always mean optimal for you.</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> Symptoms matter as much as lab values. Treat the person, not just the number.</li>
              <li className="flex gap-2"><span className="text-stone-500">›</span> If you feel dismissed, seek a second opinion or a menopause specialist.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
        <strong>Reference ranges vary between labs.</strong> Always interpret results with your
        healthcare provider. The ranges shown are general guidance — your lab&apos;s reference ranges
        and your clinical context take priority.
      </div>

      {/* Bottom nav */}
      <div className="mt-8 flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <Link href="/what-helps" className="text-amber-700 hover:underline text-sm font-medium">
          ← What treatments are available?
        </Link>
        <Link href="/symptoms" className="text-amber-700 hover:underline text-sm font-medium">
          Back to symptoms →
        </Link>
      </div>
    </div>
  )
}
