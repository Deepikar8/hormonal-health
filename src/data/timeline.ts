export interface TimelineStage {
  id: string
  name: string
  subtitle: string
  ageRange: string
  labClue: string
  description: string
  symptoms: string[]
  color: string
  dotColor: string
}

export const timelineStages: TimelineStage[] = [
  {
    id: 'late-reproductive',
    name: 'Late Reproductive Years',
    subtitle: 'Everything feels normal but changes are beginning',
    ageRange: 'Mid-30s to early 40s',
    labClue: 'AMH starts to fall; FSH still normal',
    description:
      'Your cycles are still regular, but ovarian reserve is quietly declining. Most women feel completely normal. AMH (a marker of egg reserve) begins to drop, and FSH may start to creep up on early-cycle tests.',
    symptoms: ['Cycles may shorten slightly', 'PMS may intensify', 'Fertility begins to decline'],
    color: 'bg-emerald-50 border-emerald-200',
    dotColor: 'bg-emerald-400',
  },
  {
    id: 'early-peri',
    name: 'Early Perimenopause',
    subtitle: 'Cycles become unpredictable',
    ageRange: 'Early–mid 40s (average 47)',
    labClue: 'FSH rising; estradiol variable (can be high or low)',
    description:
      'The first clinical sign: cycles begin to vary by 7 or more days compared to your usual pattern. You may notice your cycle shortening (25 days instead of 28) or lengthening. Hormones are fluctuating, not simply declining — estrogen can surge higher than normal before eventually dropping, which is why symptoms feel erratic.',
    symptoms: [
      'Irregular cycle length',
      'Heavier or lighter periods',
      'Sleep disruption begins',
      'Mood changes or increased anxiety',
      'Cognitive complaints begin (brain fog, word-finding)',
      'Hot flashes may begin (earlier in some women)',
    ],
    color: 'bg-yellow-50 border-yellow-200',
    dotColor: 'bg-yellow-400',
  },
  {
    id: 'late-peri',
    name: 'Late Perimenopause',
    subtitle: 'The most symptomatic phase for most women',
    ageRange: 'Mid–late 40s to early 50s',
    labClue: 'FSH significantly elevated; estradiol low and erratic; AMH very low',
    description:
      'Cycles now skip entirely — 60+ day gaps signal you\'ve entered late perimenopause. This is when most women experience the most intense symptoms. Estrogen is no longer reliably produced, and the cascade of effects becomes more pronounced. Bone loss is accelerating. Depression risk is at its highest. Hot flashes typically peak here.',
    symptoms: [
      'Hot flashes and night sweats (peak intensity)',
      'Periods skipping — gaps of 60 days or more',
      'Sleep significantly disrupted',
      'Mood and anxiety at their most unstable',
      'Bone loss accelerating (often silently)',
      'Cardiovascular changes beginning',
      'Vaginal dryness may begin',
      'Cognitive symptoms present for many women',
    ],
    color: 'bg-orange-50 border-orange-200',
    dotColor: 'bg-orange-400',
  },
  {
    id: 'menopause',
    name: 'Menopause',
    subtitle: 'A single point in time, not a phase',
    ageRange: 'Average age 51 (range 45–55); premature ovarian insufficiency (POI) defined as menopause before age 40 affects ~1% of women',
    labClue: 'FSH typically >30 IU/L; estradiol typically <30 pg/mL (thresholds are approximate — lab ranges vary)',
    description:
      'Menopause is defined retrospectively — it\'s the point 12 months after your final period. You only know you\'ve reached it by looking back. It\'s not a phase; it\'s a marker. The symptoms you\'ve been experiencing don\'t suddenly stop here.',
    symptoms: ['Defined as 12 consecutive months without a period', 'All perimenopausal symptoms may still be present'],
    color: 'bg-red-50 border-red-200',
    dotColor: 'bg-red-400',
  },
  {
    id: 'early-post',
    name: 'Early Postmenopause',
    subtitle: 'Stabilisation — but some symptoms worsen',
    ageRange: 'Years 1–6 after final period',
    labClue: 'FSH persistently elevated; estradiol consistently low',
    description:
      'For many women, hot flashes and mood gradually improve. But other symptoms — particularly vaginal dryness, bladder changes, and cardiovascular risk — continue to worsen without treatment. Bone loss, while slowing from its peak, remains elevated. This window is critical for establishing long-term bone and cardiovascular health.',
    symptoms: [
      'Vasomotor symptoms gradually improving for many',
      'GSM (vaginal/bladder symptoms) worsening without treatment',
      'Cardiovascular risk increasing',
      'Bone density continuing to decline (more slowly)',
      'Cognitive symptoms often improving',
      'Metabolic changes (insulin resistance, visceral fat) progressing',
    ],
    color: 'bg-blue-50 border-blue-200',
    dotColor: 'bg-blue-400',
  },
  {
    id: 'late-post',
    name: 'Late Postmenopause',
    subtitle: 'A new hormonal baseline',
    ageRange: '6+ years after final period',
    labClue: 'Stable low estrogen; FSH remains elevated',
    description:
      'The body has adjusted to lower estrogen levels. Most acute symptoms (hot flashes, mood instability) have resolved for the majority of women. The focus shifts to long-term health: bone density maintenance, cardiovascular health, cognitive health, and managing GSM. The benefit of intervening early (during perimenopause) is clearest here.',
    symptoms: [
      'Hot flashes resolved for most women (25% still symptomatic)',
      'GSM the dominant ongoing complaint without treatment',
      'Long-term bone, cardiovascular, and metabolic health the priority',
    ],
    color: 'bg-violet-50 border-violet-200',
    dotColor: 'bg-violet-400',
  },
]
