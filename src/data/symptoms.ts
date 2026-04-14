export type EvidenceTier = 'strong' | 'moderate' | 'limited'

export interface Symptom {
  id: string
  name: string
  emoji: string
  tagline: string
  plainExplanation: string
  whatIsHappening: string
  commonSymptoms: string[]
  whenItTypicallyStarts: string
  keyTests: string[]
  color: string
}

export const symptoms: Symptom[] = [
  {
    id: "vasomotor",
    name: "Hot Flashes & Night Sweats",
    emoji: "🌡️",
    tagline: "Your body's thermostat is glitching",
    plainExplanation:
      "Hot flashes are sudden waves of heat — usually starting in the chest, rising to the face — that can last 1–5 minutes. Night sweats are hot flashes that happen while you sleep, often waking you up drenched. They're the most talked-about symptom of perimenopause.",
    whatIsHappening:
      "Deep in your brain, a group of nerve cells called KNDy neurons act like a thermostat. Estrogen keeps this thermostat well-calibrated. As estrogen levels become erratic, the thermostat's comfort zone narrows dramatically — even a tiny rise in body temperature triggers a full heat-dissipation response (sweating, flushing, a racing heart). Your body isn't overheating; it just thinks it is.",
    commonSymptoms: [
      "Sudden wave of heat spreading from chest to face",
      "Sweating, flushing, reddening of skin",
      "Rapid heartbeat during the flash",
      "Chills or shivering as the flash passes",
      "Night sweats soaking sheets or nightclothes",
    ],
    whenItTypicallyStarts:
      "Usually in late perimenopause, though 1 in 4 women experience them up to 11 years before their last period. On average they last 7–10 years. Around 25% of women have persistent symptoms long after menopause.",
    keyTests: ["Serum estradiol (E2)", "FSH", "Symptom diary (frequency + severity)"],
    color: "orange",
  },
  {
    id: "mood",
    name: "Mood & Anxiety",
    emoji: "🌊",
    tagline: "Hormonal tides affecting your emotional weather",
    plainExplanation:
      "Irritability that comes out of nowhere. Anxiety that feels different from your usual stress. Crying for no obvious reason. Rage that surprises even you. These aren't character flaws or going crazy — they're neurological responses to shifting hormones.",
    whatIsHappening:
      "Estrogen and progesterone both have direct effects on brain chemistry. Estrogen influences serotonin (your mood stabiliser) and norepinephrine (your stress responder). Progesterone breaks down into a substance called allopregnanolone, which calms the nervous system the same way anti-anxiety medications do. As both hormones fluctuate and decline, the brain's emotional regulation system loses its usual buffers. The risk of a first episode of depression is 2–4× higher during perimenopause than at any other time in a woman's adult life.",
    commonSymptoms: [
      "Irritability or rage that feels out of proportion",
      "Anxiety, sometimes with no identifiable cause",
      "Low mood or new onset depression",
      "Mood swings that come and go rapidly",
      "Panic attacks",
      "Feeling overwhelmed more easily than before",
    ],
    whenItTypicallyStarts:
      "Can begin in early perimenopause but peaks in late perimenopause. Women with a history of PMS, PMDD, or postpartum depression are at higher risk.",
    keyTests: [
      "Estradiol + progesterone (luteal phase)",
      "TSH + Free T4 (thyroid mimics mood symptoms)",
      "Cortisol (AM)",
      "PHQ-9 depression screen",
      "GAD-7 anxiety screen",
    ],
    color: "blue",
  },
  {
    id: "sleep",
    name: "Sleep Disruption",
    emoji: "🌙",
    tagline: "Why sleep feels broken even when you're exhausted",
    plainExplanation:
      "Difficulty falling asleep. Waking at 3am with a racing mind. Feeling exhausted even after 8 hours in bed. Sleep problems in perimenopause are real, common, and have specific biological causes — not just stress.",
    whatIsHappening:
      "Multiple systems overlap here. Night sweats wake you from deep sleep. Progesterone's calming metabolite (allopregnanolone) is lower, making it harder to stay asleep. Cortisol rhythms shift, making early-morning waking more likely. And estrogen itself helps regulate melatonin, the hormone that sets your sleep-wake cycle. Sleep apnoea also increases in perimenopause — a frequently missed diagnosis.",
    commonSymptoms: [
      "Trouble falling asleep",
      "Waking multiple times through the night",
      "Waking very early and unable to fall back asleep",
      "Sleep that feels light or unrestorative",
      "Daytime fatigue and difficulty concentrating",
    ],
    whenItTypicallyStarts:
      "Gradually worsens through the transition. Research shows sleep difficulties increase in a nearly linear fashion from early perimenopause through postmenopause.",
    keyTests: [
      "Estradiol + progesterone",
      "TSH (thyroid disrupts sleep in both directions)",
      "Pittsburgh Sleep Quality Index (PSQI)",
      "Consider sleep study if snoring or gasping reported",
    ],
    color: "indigo",
  },
  {
    id: "cognitive",
    name: "Brain Fog & Memory",
    emoji: "🧠",
    tagline: "The words that vanish mid-sentence",
    plainExplanation:
      "Can't find the word you want. Walk into a room and forget why. Read the same paragraph three times. Feel mentally slower than you used to. This is extremely common in perimenopause and has a real biological basis — but is one of the most poorly understood and under-researched symptoms.",
    whatIsHappening:
      "Estrogen supports the brain in multiple ways: it promotes growth of new connections (neuroplasticity), supports memory circuits in the hippocampus, and helps maintain the cholinergic system that underlies attention and memory. When estrogen fluctuates sharply, these systems are temporarily disrupted. The good news from SWAN and other studies: for most women, cognitive symptoms are transient — they peak during the transition and improve on the other side.",
    commonSymptoms: [
      "Difficulty finding words mid-conversation",
      "Short-term memory lapses (what did I come in here for?)",
      "Difficulty concentrating or staying on task",
      "Mental fatigue — thinking feels effortful",
      "Feeling not as sharp compared to your previous baseline",
    ],
    whenItTypicallyStarts:
      "31% of women report forgetfulness in the reproductive stage; this rises to ~44% in early perimenopause. Most women see improvement after menopause.",
    keyTests: [
      "Estradiol",
      "TSH + Free T3/T4 (hypothyroidism is the most treatable cause of brain fog)",
      "Ferritin, B12, folate (deficiency causes identical symptoms)",
      "MoCA cognitive screen if concerned",
    ],
    color: "purple",
  },
  {
    id: "musculoskeletal",
    name: "Joint & Muscle Pain",
    emoji: "🦴",
    tagline: "The aches nobody warns you about",
    plainExplanation:
      "New joint stiffness in the morning. Aching hips or knees that appeared from nowhere. A frozen shoulder that won't budge. These musculoskeletal symptoms are among the least recognised as perimenopausal — many women are told they just have arthritis when hormones are the primary driver.",
    whatIsHappening:
      "Estrogen receptors are present in joint tissue (synovium), cartilage, tendons, and bone. Estrogen has anti-inflammatory effects — it suppresses inflammatory signalling molecules like IL-6 and TNF-α. As estrogen declines, this anti-inflammatory protection is lost, and joints and soft tissue become more reactive and slower to recover. Bone loss also begins accelerating significantly in late perimenopause.",
    commonSymptoms: [
      "Joint pain or stiffness, especially in the morning",
      "New aches in hips, knees, wrists, or fingers",
      "Frozen shoulder (adhesive capsulitis)",
      "Tendon problems (plantar fasciitis, tennis elbow) appearing without obvious cause",
      "General muscle aches",
    ],
    whenItTypicallyStarts:
      "Can begin in early perimenopause. Bone loss accelerates most sharply in the year before the final period and the first 2 years after.",
    keyTests: [
      "Estradiol",
      "CRP, ESR (inflammation markers)",
      "25-OH Vitamin D",
      "DEXA scan (bone density baseline)",
      "Rheumatoid factor / Anti-CCP (rule out autoimmune)",
    ],
    color: "amber",
  },
  {
    id: "metabolic",
    name: "Weight & Metabolism",
    emoji: "⚖️",
    tagline: "Why your body composition is changing despite doing nothing differently",
    plainExplanation:
      "Gaining weight around the middle even though your diet hasn't changed. Finding it harder to lose weight than before. Blood sugar feeling less stable. These aren't failures of willpower — they're predictable metabolic shifts driven by hormonal change.",
    whatIsHappening:
      "Estrogen promotes insulin sensitivity and encourages fat storage in the hips and thighs (subcutaneous fat) rather than the abdomen (visceral fat). As estrogen declines, the body shifts toward visceral adiposity — fat stored around the organs, which is metabolically more active and health-relevant than hip fat. Cortisol rhythms also shift, further promoting abdominal fat storage. These changes happen even without changes in diet or exercise.",
    commonSymptoms: [
      "Belly fat that appears or increases",
      "Difficulty losing weight despite same diet and exercise habits",
      "Blood sugar instability — energy crashes, increased sugar cravings",
      "Feeling hungrier than usual",
      "Elevated cholesterol appearing on routine labs",
    ],
    whenItTypicallyStarts:
      "Gradual shift through perimenopause, accelerating post-menopause.",
    keyTests: [
      "Fasting glucose + insulin (HOMA-IR)",
      "HbA1c",
      "Full lipid panel + ApoB",
      "Waist circumference",
      "Thyroid panel",
    ],
    color: "green",
  },
  {
    id: "genitourinary",
    name: "Vaginal & Bladder Changes",
    emoji: "🌸",
    tagline: "Symptoms that only get worse without treatment — and are very treatable",
    plainExplanation:
      "Vaginal dryness, painful sex, needing to urinate urgently, recurring urinary tract infections. Collectively called Genitourinary Syndrome of Menopause (GSM). This is the one symptom cluster that does not improve on its own — it worsens progressively without treatment. It's also one of the most effectively treated.",
    whatIsHappening:
      "The vaginal lining, urethra, and bladder all depend on estrogen to stay thick, lubricated, and healthy. As estrogen declines, these tissues thin and lose moisture. The vaginal pH shifts (becomes less acidic), making infection more likely. This is entirely local — vaginal estrogen treats it with minimal systemic absorption, meaning it's generally safe even for women who can't take systemic HRT.",
    commonSymptoms: [
      "Vaginal dryness or itching",
      "Pain or discomfort during sex",
      "Urinary urgency or frequency",
      "Recurrent urinary tract infections",
      "Reduced libido (partially from discomfort)",
    ],
    whenItTypicallyStarts:
      "Usually begins post-menopause but can start in late perimenopause. Unlike other symptoms, it does not resolve on its own and worsens over time.",
    keyTests: [
      "Estradiol",
      "Free and total testosterone",
      "SHBG",
      "Vaginal pH (>5.0 suggests atrophy)",
      "Urinalysis",
    ],
    color: "rose",
  },
  {
    id: "cardiovascular",
    name: "Heart & Circulation",
    emoji: "❤️",
    tagline: "The silent shift happening in your arteries",
    plainExplanation:
      "Palpitations that aren't during hot flashes. Blood pressure creeping up. Cholesterol numbers shifting for the worse. These are the most medically significant changes of the menopause transition — and the most important to address proactively.",
    whatIsHappening:
      "Estrogen protects blood vessels in multiple ways: it relaxes artery walls (via nitric oxide), keeps LDL cholesterol lower, raises HDL, and reduces inflammation in vessel walls. As estrogen declines, all of these protections diminish simultaneously. This is why a woman's cardiovascular risk — which is lower than a man's throughout reproductive life — converges with and eventually surpasses men's after menopause.",
    commonSymptoms: [
      "Palpitations (not linked to hot flashes)",
      "Blood pressure increasing",
      "Cholesterol numbers worsening",
      "Exercise feeling harder than it used to",
      "New shortness of breath on exertion",
    ],
    whenItTypicallyStarts:
      "Subclinical changes begin in late perimenopause. Measurable cardiovascular risk rises substantially in the 5–10 years post-menopause.",
    keyTests: [
      "Full lipid panel + ApoB",
      "hs-CRP",
      "Lipoprotein(a) — one-time genetic test",
      "Blood pressure monitoring",
      "TSH (thyroid disease affects heart rate, BP, and cholesterol)",
      "ECG if palpitations",
      "Coronary artery calcium score if risk factors present",
    ],
    color: "red",
  },
  {
    id: "menstrual",
    name: "Changing Periods",
    emoji: "📅",
    tagline: "Often the first sign something is shifting",
    plainExplanation:
      "Cycles that suddenly vary in length. Periods that are heavier, lighter, shorter, or longer than usual. Months where a period simply doesn't come. Changing periods are typically the first clinical sign of perimenopause and are used by doctors to stage where you are in the transition.",
    whatIsHappening:
      "As the ovarian reserve diminishes, ovulation becomes less reliable. Cycles without ovulation mean no progesterone surge in the second half — leading to an unstimulated uterine lining that can build up and then shed heavily (menorrhagia) or remain unpredictably absent. FSH, the hormone that stimulates the ovaries, starts rising as the brain tries harder to recruit follicles.",
    commonSymptoms: [
      "Cycles shorter than 21 days or longer than 35 days",
      "Skipped periods",
      "Heavier or lighter flow than usual",
      "Flooding with clots",
      "Spotting between periods",
    ],
    whenItTypicallyStarts:
      "The first sign of early perimenopause is a persistent change in cycle length of 7+ days. When cycles start skipping (60+ days apart), you've entered late perimenopause.",
    keyTests: [
      "FSH + estradiol (day 2-5)",
      "AMH (ovarian reserve)",
      "Progesterone (day 21)",
      "Pelvic ultrasound if heavy bleeding (rule out fibroids/polyps)",
      "CBC + ferritin (check for iron deficiency)",
      "TSH",
    ],
    color: "pink",
  },
  {
    id: "skin-hair",
    name: "Skin, Hair & Eyes",
    emoji: "✨",
    tagline: "Collagen, follicles, and the visible changes",
    plainExplanation:
      "Skin that feels drier or thinner. Hair that seems to shed more or grow more slowly. Acne returning in your 40s. Dry, gritty eyes. These changes are real, have hormonal drivers, and are often dismissed or attributed to ageing when hormones are the primary cause.",
    whatIsHappening:
      "Estrogen stimulates collagen production — skin loses about 30% of its collagen in the first 5 years after menopause. Estrogen also supports hair follicle cycling. As estrogen declines faster than androgens, a relative androgen excess can occur — driving the same changes seen in PCOS (acne, hair thinning on the scalp, sometimes increased facial hair). Dry eyes are linked to both estrogen and androgen decline affecting the meibomian glands.",
    commonSymptoms: [
      "Dry, thinner skin",
      "Hair shedding more than usual or growing more slowly",
      "New acne in your 40s",
      "Dry, irritated, or gritty eyes",
      "Gum sensitivity or recession",
      "Brittle nails",
    ],
    whenItTypicallyStarts:
      "Gradual from late perimenopause; accelerates in the first 5 years after menopause.",
    keyTests: [
      "Free and total testosterone",
      "DHEA-S",
      "Ferritin (hair loss)",
      "TSH + Free T4 (thyroid is the primary non-hormonal cause of hair loss)",
      "Zinc, biotin",
    ],
    color: "teal",
  },
]

export const colorMap: Record<string, string> = {
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  green: "bg-green-50 border-green-200 text-green-700",
  rose: "bg-rose-50 border-rose-200 text-rose-700",
  red: "bg-red-50 border-red-200 text-red-700",
  pink: "bg-pink-50 border-pink-200 text-pink-700",
  teal: "bg-teal-50 border-teal-200 text-teal-700",
}
