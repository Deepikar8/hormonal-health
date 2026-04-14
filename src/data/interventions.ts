export type EvidenceTier = 'strong' | 'moderate' | 'limited' | 'emerging'

export interface Intervention {
  name: string
  type: 'hormonal' | 'non-hormonal' | 'lifestyle' | 'supplement'
  evidenceTier: EvidenceTier
  plainDescription: string
  bestFor: string[]
  caveats?: string
}

export interface SymptomTreatments {
  symptomId: string
  symptomName: string
  emoji: string
  summary: string
  interventions: Intervention[]
}

export const treatmentData: SymptomTreatments[] = [
  {
    symptomId: 'vasomotor',
    symptomName: 'Hot Flashes & Night Sweats',
    emoji: '🌡️',
    summary: 'The best-studied symptom — multiple effective options exist, hormonal and non-hormonal.',
    interventions: [
      {
        name: 'Hormone Therapy (HRT / MHT)',
        type: 'hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Replacing the estrogen your body has stopped making. The most effective treatment for hot flashes, reducing frequency by 75–90%. Available as patches, gels, sprays, or pills.',
        bestFor: ['Hot flashes', 'Night sweats', 'Also helps sleep, mood, and bone loss'],
        caveats:
          'Best started within 10 years of menopause or before age 60. Not appropriate for some women (discuss history of certain cancers or clots with your doctor).',
      },
      {
        name: 'Fezolinetant (Veoza)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'FDA-approved in 2023. Blocks the specific brain receptor (NK3) that triggers hot flashes without affecting estrogen. A non-hormonal option with strong clinical trial evidence.',
        bestFor: ['Hot flashes', 'Night sweats'],
        caveats: 'Newer drug; not yet available everywhere. Liver monitoring recommended.',
      },
      {
        name: 'SSRIs / SNRIs (low dose)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Paroxetine (Brisdelle) is the only FDA-approved non-hormonal option for hot flashes. Other SSRIs and SNRIs (venlafaxine, escitalopram) are effective off-label. Reduces hot flash frequency by ~50%.',
        bestFor: ['Hot flashes', 'Night sweats', 'Also helps mood and anxiety'],
        caveats: 'Takes 2–4 weeks to work. Some sexual side effects. Discontinuation syndrome.',
      },
      {
        name: 'Gabapentin',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Originally an epilepsy medication, gabapentin reduces hot flash frequency significantly, particularly at night. Especially useful if sleep disruption is prominent.',
        bestFor: ['Hot flashes', 'Night sweats', 'Sleep (sedating effect)'],
        caveats: 'Sedation, dizziness. Usually taken at night. Dose-dependent.',
      },
      {
        name: 'Cognitive Behavioural Therapy (CBT)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'CBT adapted for menopause teaches women to change their response to hot flashes — reducing their perceived severity and interference with daily life. Strong trial evidence, particularly for quality of life.',
        bestFor: ['Hot flashes (severity/distress)', 'Sleep', 'Anxiety'],
      },
      {
        name: 'Paced Breathing',
        type: 'lifestyle',
        evidenceTier: 'moderate',
        plainDescription:
          'Slow, diaphragmatic breathing (6 breaths per minute) during a hot flash can reduce its intensity. Easy to learn, zero side effects.',
        bestFor: ['Hot flash management in the moment'],
      },
    ],
  },
  {
    symptomId: 'mood',
    symptomName: 'Mood & Anxiety',
    emoji: '🌊',
    summary: 'Treatment depends on whether the mood issues are hormone-driven or independent depression.',
    interventions: [
      {
        name: 'Hormone Therapy (HRT)',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'Estrogen has antidepressant-like effects specifically during perimenopause. Multiple trials show it reduces perimenopausal depression and mood instability. Importantly, this window effect means HRT works better for mood in perimenopause than postmenopause.',
        bestFor: ['Mood swings', 'Irritability', 'Perimenopausal depression'],
        caveats: 'Not a substitute for antidepressants in established major depression.',
      },
      {
        name: 'Micronized Progesterone (Utrogestan)',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'Bioidentical progesterone that the body converts to allopregnanolone — the same calming brain chemical that declines in perimenopause. Taken at night, it reduces anxiety and improves sleep.',
        bestFor: ['Anxiety', 'Mood instability', 'Sleep'],
        caveats:
          'Synthetic progestins (like medroxyprogesterone) do NOT have this calming effect. The source matters.',
      },
      {
        name: 'SSRIs / SNRIs',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Standard antidepressants are effective for perimenopausal depression and anxiety, particularly when mood symptoms are severe or when HRT is not appropriate.',
        bestFor: ['Depression', 'Anxiety', 'Panic attacks'],
        caveats: 'Some SSRIs interact with tamoxifen.',
      },
      {
        name: 'CBT / Psychotherapy',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'CBT and mindfulness-based approaches have strong evidence for perimenopausal depression and anxiety, either alone or combined with medication.',
        bestFor: ['Depression', 'Anxiety', 'Psychological wellbeing'],
      },
    ],
  },
  {
    symptomId: 'sleep',
    symptomName: 'Sleep Disruption',
    emoji: '🌙',
    summary: 'Address underlying triggers first (night sweats, anxiety); then target sleep directly.',
    interventions: [
      {
        name: 'CBT for Insomnia (CBT-I)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'The gold-standard first-line treatment for insomnia — restructures unhelpful sleep behaviours and beliefs. More effective long-term than sleeping pills. Available via therapists, books, or apps.',
        bestFor: ['Insomnia', 'Difficulty falling asleep', 'Early waking'],
      },
      {
        name: 'Micronized Progesterone',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'Taken orally at night, progesterone converts to a GABA-A receptor modulator (similar to a mild sedative). Improves sleep quality and duration.',
        bestFor: ['Sleep', 'Anxiety', 'Mood'],
        caveats: 'Bioidentical form only (not synthetic progestins).',
      },
      {
        name: 'Hormone Therapy (HRT)',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'Improves sleep mainly by reducing night sweats that cause waking. Direct sleep effects beyond this are modest.',
        bestFor: ['Sleep disruption caused by night sweats'],
      },
      {
        name: 'Sleep Hygiene + Exercise',
        type: 'lifestyle',
        evidenceTier: 'moderate',
        plainDescription:
          'Consistent sleep/wake times, cool bedroom, limiting screens before bed. Aerobic exercise improves sleep quality in perimenopausal women.',
        bestFor: ['General sleep quality'],
      },
    ],
  },
  {
    symptomId: 'genitourinary',
    symptomName: 'Vaginal & Bladder Changes (GSM)',
    emoji: '🌸',
    summary: 'Highly treatable. Vaginal estrogen is safe, effective, and can be used long-term.',
    interventions: [
      {
        name: 'Vaginal Estrogen (cream, ring, or tablet)',
        type: 'hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Applied locally to the vaginal tissue, estrogen restores thickness, lubrication, and normal pH. Systemic absorption is minimal — this is considered safe even for many women who cannot take systemic HRT. The most effective treatment for GSM.',
        bestFor: ['Vaginal dryness', 'Painful sex', 'Urinary urgency', 'Recurrent UTIs'],
        caveats:
          'Needs to be used consistently (not just when symptomatic). Takes 4–12 weeks for full effect.',
      },
      {
        name: 'Intravaginal DHEA (Prasterone / Intrarosa)',
        type: 'hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'A precursor hormone applied vaginally that the tissue converts locally to both estrogen and testosterone. FDA-approved for painful sex due to menopause.',
        bestFor: ['Vaginal dryness', 'Painful sex', 'Libido'],
      },
      {
        name: 'Ospemifene (Osphena)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'An oral tablet (SERM) that acts like estrogen in vaginal tissue without being an estrogen. Good option for women who prefer oral treatment or cannot use vaginal products.',
        bestFor: ['Vaginal dryness', 'Painful sex'],
        caveats: 'Mild hot flash side effect in some. Oral tablet daily.',
      },
      {
        name: 'Moisturisers & Lubricants',
        type: 'non-hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'Non-hormonal vaginal moisturisers (used regularly) and lubricants (used during sex) help manage symptoms but don\'t restore tissue health. Best used alongside other treatments.',
        bestFor: ['Vaginal dryness', 'Painful sex (short-term relief)'],
      },
    ],
  },
  {
    symptomId: 'musculoskeletal',
    symptomName: 'Joint & Muscle Pain + Bone Loss',
    emoji: '🦴',
    summary: 'Bone loss has strong treatment evidence; joint pain less so.',
    interventions: [
      {
        name: 'Hormone Therapy (HRT)',
        type: 'hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Estrogen directly prevents bone loss and has anti-inflammatory effects that reduce joint pain. Starting HRT during perimenopause can prevent the most significant period of bone loss.',
        bestFor: ['Bone loss prevention', 'Joint pain', 'Musculoskeletal symptoms broadly'],
      },
      {
        name: 'Bisphosphonates (e.g. Alendronate)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Medications that slow bone breakdown. Used when bone density is already low or HRT is not appropriate. Weekly or monthly tablets, or annual infusions.',
        bestFor: ['Osteoporosis', 'Osteopaenia (borderline low bone density)'],
        caveats: 'Long-term use has some risks (rare jaw and thigh bone issues at 10+ years).',
      },
      {
        name: 'Vitamin D3 + Calcium',
        type: 'supplement',
        evidenceTier: 'moderate',
        plainDescription:
          'Vitamin D is essential for calcium absorption and bone health. Deficiency (extremely common) accelerates bone loss. D3 form is preferred. Get levels tested first.',
        bestFor: ['Bone density', 'Muscle function', 'Immune health'],
      },
      {
        name: 'Resistance Training',
        type: 'lifestyle',
        evidenceTier: 'strong',
        plainDescription:
          'Weight-bearing and resistance exercise is the only non-pharmacological approach with strong evidence for building and maintaining bone. Also reduces joint pain and improves muscle mass.',
        bestFor: ['Bone density', 'Joint pain', 'Metabolic health', 'Mood'],
      },
    ],
  },
  {
    symptomId: 'cognitive',
    symptomName: 'Brain Fog & Memory',
    emoji: '🧠',
    summary: 'The most evidence-poor symptom — but thyroid, nutrient deficiency, and sleep are treatable.',
    interventions: [
      {
        name: 'Rule Out Thyroid + Nutrient Deficiencies First',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Hypothyroidism and deficiencies in B12, folate, ferritin, and vitamin D all cause identical cognitive symptoms and are easily missed on standard panels. Always check these before attributing brain fog to hormones.',
        bestFor: ['Brain fog', 'Memory', 'Mental fatigue'],
      },
      {
        name: 'Treat Sleep (CBT-I)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'Poor sleep is one of the biggest drivers of cognitive symptoms. Treating sleep independently often significantly improves cognitive complaints.',
        bestFor: ['Brain fog', 'Concentration', 'Mental fatigue'],
      },
      {
        name: 'Hormone Therapy (early use)',
        type: 'hormonal',
        evidenceTier: 'limited',
        plainDescription:
          'Observational data (SWAN, Cache County studies) suggest that estrogen started during perimenopause may preserve cognitive function. There are no large RCTs specifically on this. The "timing hypothesis" applies here too.',
        bestFor: ['Cognitive health (preventive)'],
        caveats:
          'Evidence is observational and timing-dependent. Starting HRT after age 65 does not show cognitive benefit.',
      },
    ],
  },
  {
    symptomId: 'cardiovascular',
    symptomName: 'Heart & Cardiovascular Risk',
    emoji: '❤️',
    summary: 'The most important long-term risk — lifestyle, statins, and early HRT all have evidence.',
    interventions: [
      {
        name: 'Lifestyle: Exercise + Diet',
        type: 'lifestyle',
        evidenceTier: 'strong',
        plainDescription:
          'Aerobic exercise, resistance training, Mediterranean-style diet, and not smoking all reduce cardiovascular risk. The transition is a critical window to establish these habits.',
        bestFor: ['Cardiovascular risk', 'Metabolic health', 'Blood pressure', 'Cholesterol'],
      },
      {
        name: 'Hormone Therapy (started early)',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'The "timing hypothesis": HRT started in perimenopause or within 10 years of menopause (before age 60) appears cardioprotective — reducing coronary heart disease risk by ~50% in observational data. HRT started late (>10 years postmenopause) does not show this benefit.',
        bestFor: ['Cardiovascular risk reduction (if started early)'],
        caveats:
          'HRT is not currently recommended solely for cardiovascular prevention. Benefit is greatest as part of overall symptom management started early.',
      },
      {
        name: 'Statins (if lipids warrant)',
        type: 'non-hormonal',
        evidenceTier: 'strong',
        plainDescription:
          'If LDL or ApoB is elevated, statin therapy has clear cardiovascular benefit regardless of menopausal status.',
        bestFor: ['High LDL/ApoB', 'Cardiovascular risk reduction'],
      },
    ],
  },
  {
    symptomId: 'metabolic',
    symptomName: 'Weight & Metabolism',
    emoji: '⚖️',
    summary: 'Lifestyle remains the foundation; HRT may help with fat distribution.',
    interventions: [
      {
        name: 'Exercise (particularly resistance training)',
        type: 'lifestyle',
        evidenceTier: 'strong',
        plainDescription:
          'Resistance training preserves muscle mass that declines with estrogen loss. Muscle burns more energy at rest, directly countering the metabolic slowdown. Both aerobic and strength work improve insulin sensitivity.',
        bestFor: ['Visceral fat', 'Insulin sensitivity', 'Weight management', 'Bone density'],
      },
      {
        name: 'Hormone Therapy',
        type: 'hormonal',
        evidenceTier: 'moderate',
        plainDescription:
          'HRT can attenuate the shift to visceral fat distribution and improve insulin sensitivity. It does not cause weight loss, but may prevent the weight gain pattern specific to menopause.',
        bestFor: ['Visceral fat distribution', 'Insulin sensitivity'],
      },
      {
        name: 'Dietary protein + fibre',
        type: 'lifestyle',
        evidenceTier: 'moderate',
        plainDescription:
          'Higher protein intake preserves muscle. Dietary fibre supports gut microbiome health and estrogen recirculation (via the estrobolome). Mediterranean-style diet has the best evidence overall.',
        bestFor: ['Metabolic health', 'Blood sugar stability', 'Gut microbiome'],
      },
    ],
  },
]

export const evidenceLabels: Record<EvidenceTier, { label: string; color: string; description: string }> = {
  strong: {
    label: '★★★ Strong',
    color: 'bg-green-100 text-green-800',
    description: 'Multiple randomised controlled trials',
  },
  moderate: {
    label: '★★ Moderate',
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Good trials but more limited in scope',
  },
  limited: {
    label: '★ Limited',
    color: 'bg-orange-100 text-orange-800',
    description: 'Mainly observational or small studies',
  },
  emerging: {
    label: '◎ Emerging',
    color: 'bg-blue-100 text-blue-800',
    description: 'Early-stage or mechanistic evidence only',
  },
}
