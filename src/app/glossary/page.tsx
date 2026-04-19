import Link from 'next/link'

type Category = 'hormone' | 'lab test' | 'condition' | 'axis' | 'medication' | 'concept'

interface Term {
  term: string
  category: Category
  definition: string
  context: string
}

interface LetterGroup {
  letter: string
  terms: Term[]
}

const categoryStyles: Record<Category, { bg: string; text: string; border: string }> = {
  hormone:    { bg: 'bg-rose-50',   text: 'text-rose-700',   border: 'border-rose-200' },
  'lab test': { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  condition:  { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
  axis:       { bg: 'bg-slate-100', text: 'text-slate-700',  border: 'border-slate-300' },
  medication: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  concept:    { bg: 'bg-stone-100', text: 'text-stone-600',  border: 'border-stone-300' },
}

const glossaryData: LetterGroup[] = [
  {
    letter: 'A',
    terms: [
      {
        term: 'ACTH (Adrenocorticotropic Hormone)',
        category: 'hormone',
        definition:
          'A hormone released by the pituitary gland that signals the adrenal glands to produce cortisol and other adrenal hormones. ACTH is part of the HPA (hypothalamic–pituitary–adrenal) stress axis — when the brain perceives stress, CRH triggers ACTH, which triggers cortisol. In perimenopause, declining estrogen sensitises the HPA axis, raising baseline ACTH and cortisol reactivity.',
        context: 'Hormones guide · HPA axis · Stress & adrenal section',
      },
      {
        term: 'Adrenarche',
        category: 'concept',
        definition:
          'The maturation of the adrenal glands that occurs in mid-childhood (around ages 6–8), several years before puberty proper. This causes a rise in adrenal androgens such as DHEA-S, and is responsible for the first appearance of body hair and subtle changes in body odour. Adrenarche is distinct from gonadarche (the activation of the ovaries or testes).',
        context: 'Life stages · Female development · Puberty section',
      },
      {
        term: 'Allopregnanolone',
        category: 'hormone',
        definition:
          'A neurosteroid produced in the brain and peripheral tissues from progesterone. It acts as a positive modulator of GABA-A receptors — effectively a natural calming agent — promoting relaxation, sleep, and emotional stability. In the luteal phase of a healthy cycle, rising allopregnanolone supports mood; when progesterone drops (in late perimenopause, or in PMDD), allopregnanolone levels fall and anxiety, irritability, and insomnia can result.',
        context: 'Hormones guide · Progesterone · PMDD · Sleep symptoms',
      },
      {
        term: 'AMH (Anti-Müllerian Hormone)',
        category: 'lab test',
        definition:
          'A hormone secreted by the small follicles in the ovaries that reflects the size of the remaining egg pool (ovarian reserve). AMH declines gradually from the mid-30s and approaches zero around menopause. Unlike FSH and estradiol, AMH is stable across the menstrual cycle and can be measured on any day — making it a more reliable single-point marker of where a woman is on the path toward menopause.',
        context: 'Labs & tests · Core hormone panel · Perimenopause guide',
      },
      {
        term: 'Andropause',
        category: 'condition',
        definition:
          'An informal term for the gradual age-related decline in testosterone in men, also called late-onset hypogonadism. Unlike female menopause, there is no single event — testosterone falls roughly 1–2% per year after age 30. Symptoms include reduced libido, fatigue, reduced muscle mass, mood changes, and cognitive slowing. The term is controversial medically because the decline is so gradual and variable.',
        context: 'Male hormonal health · Testosterone · Ageing section',
      },
      {
        term: 'Anovulatory cycle',
        category: 'concept',
        definition:
          'A menstrual cycle in which ovulation does not occur. The lining still builds and sheds (so there is a period), but no egg is released and no corpus luteum forms — meaning progesterone production is absent or very low in that cycle. Anovulatory cycles become increasingly common in perimenopause, explaining the characteristic progesterone deficiency, heavy irregular bleeding, and mood instability of the transition.',
        context: 'Perimenopause guide · Symptoms · Cycle changes',
      },
      {
        term: 'Aromatase',
        category: 'concept',
        definition:
          'An enzyme (CYP19A1) found in adipose tissue, the ovaries, the brain, bone, and other tissues that converts androgens (such as androstenedione and testosterone) into estrogens (primarily estrone and estradiol). After menopause, when the ovaries stop producing estrogen, aromatase in fat tissue becomes the main source of estrogen in the body — which is why higher adiposity is associated with higher post-menopausal estrogen levels, and why aromatase inhibitors are used in hormone-sensitive cancers.',
        context: 'Hormones guide · Estrogen · Post-menopause · Cancer risk section',
      },
    ],
  },
  {
    letter: 'B',
    terms: [
      {
        term: 'Bioidentical hormones',
        category: 'medication',
        definition:
          'Hormones that are chemically identical in molecular structure to the hormones produced naturally by the human body. The term is used both for FDA-regulated pharmaceutical products (such as micronised progesterone and estradiol patches, gels, and sprays) and for compounded preparations made by compounding pharmacies. Regulated bioidentical hormones have safety and efficacy data; compounded preparations are variable in dose and quality and lack regulatory oversight.',
        context: 'What helps · HRT/MHT guide · Progesterone vs progestins',
      },
      {
        term: 'Bisphosphonates',
        category: 'medication',
        definition:
          'A class of medications (e.g. alendronate, risedronate, zoledronic acid) used to prevent and treat osteoporosis by inhibiting osteoclast activity — the cells that break down bone. They are often prescribed when bone mineral density is low and HRT is not appropriate or desired. Side effects can include GI irritation and, rarely, osteonecrosis of the jaw with long-term use.',
        context: 'Bone health · Osteoporosis treatment · What helps',
      },
      {
        term: 'BMD (Bone Mineral Density)',
        category: 'lab test',
        definition:
          'A measure of the amount of calcium and other minerals packed into a specific volume of bone. It is expressed as a T-score (comparison to a young adult reference) or Z-score (comparison to age-matched peers). A T-score between −1.0 and −2.5 indicates osteopaenia; below −2.5 indicates osteoporosis. Bone loss accelerates significantly during the perimenopause transition as estrogen (which suppresses osteoclast activity) declines.',
        context: 'Labs & tests · DXA scan · Bone health section',
      },
    ],
  },
  {
    letter: 'C',
    terms: [
      {
        term: 'Corpus luteum',
        category: 'concept',
        definition:
          'The temporary glandular structure that forms in the ovary from the follicle that released the egg at ovulation. Its primary job is to produce progesterone during the second half (luteal phase) of the menstrual cycle, preparing the uterine lining for potential implantation. If conception does not occur, the corpus luteum degenerates after about 14 days and progesterone falls, triggering menstruation. In perimenopause, when ovulation is irregular, corpus luteum formation is sporadic and progesterone production is consequently deficient.',
        context: 'Hormones guide · Progesterone · Cycle phases · Perimenopause',
      },
      {
        term: 'Cortisol awakening response (CAR)',
        category: 'concept',
        definition:
          'A sharp natural spike in cortisol that occurs in the 20–30 minutes after waking. It is the largest cortisol pulse of the day and plays an important role in preparing the body and brain for the day — mobilising glucose, supporting immune function, and consolidating memory. The CAR is blunted by poor sleep, chronic stress, and HPA axis dysregulation. In perimenopause, disrupted sleep and heightened HPA sensitivity can impair this response, contributing to morning fatigue and cognitive fogginess.',
        context: 'HPA axis · Sleep symptoms · Cortisol · Brain fog',
      },
      {
        term: 'CRH (Corticotropin-releasing hormone)',
        category: 'hormone',
        definition:
          'A hormone secreted by the hypothalamus that initiates the stress response. It stimulates the pituitary to release ACTH, which then signals the adrenal glands to produce cortisol. CRH also acts directly in the brain to increase alertness and anxiety. Estrogen upregulates CRH receptors, meaning that fluctuating estrogen in perimenopause can heighten CRH-driven stress reactivity, contributing to anxiety and mood instability.',
        context: 'HPA axis · Stress hormones · Anxiety symptoms',
      },
    ],
  },
  {
    letter: 'D',
    terms: [
      {
        term: 'DHEA / DHEA-S (Dehydroepiandrosterone)',
        category: 'hormone',
        definition:
          'An androgen produced primarily by the adrenal glands (and in smaller amounts by the ovaries and brain). DHEA serves as a precursor to both estrogens and androgens and is the most abundant steroid hormone in circulation. DHEA-S is the sulfated (stored) form and is more stable in blood tests. Both decline gradually with age — a process called adrenopause — contributing to reductions in libido, energy, skin quality, and bone density.',
        context: 'Labs & tests · Hormones guide · Adrenal health · Libido section',
      },
      {
        term: 'DHT (Dihydrotestosterone)',
        category: 'hormone',
        definition:
          'The most potent androgen, formed when testosterone is converted by the enzyme 5-alpha-reductase in target tissues including the scalp, skin, and prostate. In women, elevated DHT activity relative to estrogen can contribute to androgenic alopecia (hair thinning at the crown and temples). In men, DHT is the primary driver of prostate growth and male-pattern baldness. DHT cannot be aromatised into estrogen.',
        context: 'Hair loss symptoms · Androgens · Male hormonal health',
      },
      {
        term: 'DXA scan (Dual-Energy X-ray Absorptiometry)',
        category: 'lab test',
        definition:
          'The gold-standard imaging test for measuring bone mineral density. It uses two low-dose X-ray beams to estimate the density of bone, most commonly at the lumbar spine and hip. Results are reported as T-scores (compared to peak bone mass in young adults) and Z-scores (compared to age-matched peers). Guidelines generally recommend a baseline DXA scan at menopause and periodic follow-up if density is low or bone-depleting conditions are present.',
        context: 'Labs & tests · Bone health · BMD · Osteoporosis screening',
      },
    ],
  },
  {
    letter: 'E',
    terms: [
      {
        term: 'Estradiol (E2)',
        category: 'hormone',
        definition:
          'The most potent and predominant form of estrogen in reproductive-age women, produced mainly by the ovarian follicles. Estradiol drives most of estrogen\'s beneficial effects: it supports bone density, cardiovascular health, vaginal and urethral tissue health, collagen production, cognitive function, mood stability, and temperature regulation via the hypothalamus. In perimenopause, estradiol levels fluctuate widely before declining to post-menopausal lows.',
        context: 'Labs & tests · Hormones guide · Perimenopause · Core hormone panel',
      },
      {
        term: 'Estriol (E3)',
        category: 'hormone',
        definition:
          'The weakest of the three main estrogens, produced primarily during pregnancy by the placenta and fetal liver. Outside of pregnancy, estriol is present only at very low levels. It is sometimes used in topical vaginal preparations (local estriol cream) to treat GSM — genitourinary symptoms such as vaginal dryness, atrophy, and recurrent infections — with minimal systemic absorption.',
        context: 'Hormones guide · GSM · Vaginal atrophy treatment',
      },
      {
        term: 'Estrone (E1)',
        category: 'hormone',
        definition:
          'The principal estrogen present after menopause, produced not by the ovaries but by the conversion of adrenal androgens (particularly androstenedione) via aromatase in fat, liver, muscle, and brain tissue. Estrone is considerably weaker than estradiol and cannot fully replicate its effects on bones, cardiovascular tissue, or the brain. Post-menopausal estrone levels correlate with body fat percentage because adipose tissue is the main site of aromatase activity.',
        context: 'Hormones guide · Post-menopause · Aromatase · Estrogen types',
      },
      {
        term: 'Estrobolome',
        category: 'concept',
        definition:
          'The collection of gut microbiome bacteria that metabolise estrogen. These bacteria produce an enzyme called beta-glucuronidase that deconjugates estrogen excreted by the liver, allowing it to be reabsorbed into circulation rather than eliminated. A healthy, diverse estrobolome helps maintain balanced estrogen levels; dysbiosis (disrupted gut bacteria) can result in either excess estrogen recirculation or excessively rapid elimination, contributing to hormonal imbalance.',
        context: 'Gut health · Hormones guide · Estrogen metabolism · Microbiome',
      },
    ],
  },
  {
    letter: 'F',
    terms: [
      {
        term: 'Fezolinetant',
        category: 'medication',
        definition:
          'A non-hormonal prescription medication approved (2023, FDA) for moderate-to-severe vasomotor symptoms (hot flashes) in menopause. It works by blocking NK3 receptors (neurokinin 3 receptors) in the hypothalamus — the same pathway through which KNDy neurons trigger the temperature dysregulation responsible for hot flashes. It is an option for women who cannot or choose not to use hormone therapy.',
        context: 'What helps · Vasomotor symptoms · Non-hormonal treatments',
      },
      {
        term: 'Follicular phase',
        category: 'concept',
        definition:
          'The first half of the menstrual cycle, lasting from the first day of menstruation until ovulation (roughly days 1–14 in a 28-day cycle). During this phase, FSH stimulates several ovarian follicles to grow, though usually only one becomes dominant. Rising estradiol from the growing follicles thickens the uterine lining and, at peak levels, triggers the LH surge that causes ovulation. Energy, mood, and cognitive sharpness often improve in the follicular phase as estradiol rises.',
        context: 'Hormones guide · Cycle phases · FSH · Perimenopause',
      },
      {
        term: 'FSH (Follicle-stimulating hormone)',
        category: 'hormone',
        definition:
          'A pituitary hormone that stimulates ovarian follicles to grow and produce estradiol. As the ovarian reserve depletes and follicles become less responsive to FSH, the pituitary compensates by releasing more FSH — so rising FSH levels are a marker of declining ovarian function. A persistently elevated FSH (above 10 IU/L in reproductive years, typically above 25–30 IU/L approaching menopause) is one of the main laboratory indicators of perimenopause, though a single reading is less informative than a pattern over time.',
        context: 'Labs & tests · Core hormone panel · Perimenopause · HPO axis',
      },
      {
        term: 'Free testosterone',
        category: 'lab test',
        definition:
          'The fraction of testosterone in the blood that is not bound to carrier proteins (primarily SHBG and albumin) and is therefore biologically available to exert effects on tissues. Total testosterone can be misleading if SHBG is high — as it often is in women on oral estrogen, or with thyroid disease — because high SHBG leaves very little testosterone free. Free testosterone (measured directly or calculated from total testosterone and SHBG) gives a more accurate picture of androgenic activity.',
        context: 'Labs & tests · Testosterone · SHBG · Libido · Energy',
      },
    ],
  },
  {
    letter: 'G',
    terms: [
      {
        term: 'GABA-A receptor',
        category: 'concept',
        definition:
          'A major inhibitory receptor in the brain that responds to GABA (gamma-aminobutyric acid), the nervous system\'s primary calming neurotransmitter. GABA-A receptors are also modulated by neurosteroids like allopregnanolone (a progesterone metabolite), which enhances their inhibitory effect — producing anxiolytic, sedative, and mood-stabilising effects. When progesterone (and therefore allopregnanolone) declines during perimenopause or the late luteal phase, reduced GABA-A activity contributes to anxiety, insomnia, and irritability.',
        context: 'Hormones guide · Allopregnanolone · Anxiety · Sleep symptoms · PMDD',
      },
      {
        term: 'GnRH (Gonadotropin-releasing hormone)',
        category: 'hormone',
        definition:
          'A hormone pulsed from the hypothalamus that drives the entire reproductive axis. GnRH pulses signal the pituitary to release FSH and LH, which in turn stimulate the ovaries (or testes) to produce sex hormones. The pulsatile nature of GnRH is critical — continuous GnRH signalling actually suppresses FSH/LH (the basis for GnRH agonist therapies like leuprolide). In perimenopause, GnRH pulse frequency increases as the ovaries become less responsive.',
        context: 'HPO axis · Hormones guide · Reproductive biology',
      },
      {
        term: 'GSM (Genitourinary Syndrome of Menopause)',
        category: 'condition',
        definition:
          'The preferred modern term for the constellation of genital, sexual, and urinary symptoms caused by declining estrogen in the vulva, vagina, urethra, and bladder. Symptoms include vaginal dryness, irritation, burning, pain with sex (dyspareunia), urinary urgency, frequency, and recurrent UTIs. Unlike hot flashes, GSM is progressive and does not improve without treatment. Local estrogen (cream, ring, or tablet) is highly effective and has minimal systemic absorption.',
        context: 'Symptoms · Vaginal atrophy · Urinary symptoms · What helps',
      },
    ],
  },
  {
    letter: 'H',
    terms: [
      {
        term: 'HbA1c (Glycated Haemoglobin)',
        category: 'lab test',
        definition:
          'A blood test that measures the percentage of haemoglobin coated in glucose, reflecting average blood sugar levels over the preceding 2–3 months. Unlike a fasting glucose test, it does not require fasting and gives a stable long-term view of glycaemic control. In perimenopause, insulin resistance rises and metabolic health shifts — HbA1c is one of the most useful markers for tracking these changes before they progress to pre-diabetes or type 2 diabetes.',
        context: 'Labs & tests · Metabolic health · Insulin resistance · Cardiovascular risk',
      },
      {
        term: 'HOMA-IR (Homeostatic Model Assessment of Insulin Resistance)',
        category: 'lab test',
        definition:
          'A calculated index using fasting glucose and fasting insulin that estimates how resistant cells are to insulin. A HOMA-IR above approximately 1.5–2.0 suggests insulin resistance, though lab-specific cut-offs vary. It can identify metabolic dysregulation before glucose or HbA1c become abnormal. Insulin resistance commonly develops or worsens during perimenopause, even in women who have not changed their diet or weight.',
        context: 'Labs & tests · Metabolic panel · Insulin resistance · Perimenopause',
      },
      {
        term: 'HPA axis (Hypothalamic–Pituitary–Adrenal axis)',
        category: 'axis',
        definition:
          'The central stress-response system of the body. The hypothalamus releases CRH → the pituitary releases ACTH → the adrenal glands produce cortisol. Cortisol then feeds back to suppress further CRH/ACTH release, completing the loop. Estrogen modulates HPA sensitivity, so the hormone fluctuations of perimenopause dysregulate the stress axis — increasing baseline cortisol, worsening sleep, raising cardiovascular risk, and amplifying anxiety.',
        context: 'Hormones guide · Stress · Cortisol · Anxiety · Sleep · Adrenal health',
      },
      {
        term: 'HPO axis (Hypothalamic–Pituitary–Ovarian axis)',
        category: 'axis',
        definition:
          'The hormonal feedback loop governing the female reproductive cycle. The hypothalamus pulses GnRH → the pituitary releases FSH and LH → the ovaries produce estradiol and progesterone → these feed back to modulate hypothalamic and pituitary output. The progressive loss of ovarian responsiveness in perimenopause disrupts this axis: feedback fails, FSH and LH rise, and the cycle becomes irregular before stopping entirely.',
        context: 'Hormones guide · Reproductive axis · Perimenopause · FSH · LH · GnRH',
      },
      {
        term: 'HPT axis (Hypothalamic–Pituitary–Thyroid axis)',
        category: 'axis',
        definition:
          'The hormonal cascade controlling thyroid function. The hypothalamus releases TRH → the pituitary releases TSH → the thyroid gland produces T4 (thyroxine) → T4 is converted to the active T3 in peripheral tissues → T3 and T4 feed back to suppress TRH and TSH. Estrogen affects thyroid-binding globulin (TBG) levels and thyroid receptor sensitivity, meaning hormonal changes in perimenopause can unmask or worsen thyroid dysfunction.',
        context: 'Hormones guide · Thyroid · Labs & tests · Perimenopause symptoms',
      },
      {
        term: 'HRT / MHT (Hormone Replacement Therapy / Menopausal Hormone Therapy)',
        category: 'medication',
        definition:
          'Exogenous hormones given to replace the estrogen (and usually progesterone) that decline during menopause. "MHT" is now the preferred term, emphasising that it replaces what the body has lost rather than adding something supplementary. Modern MHT uses body-identical estradiol (patch, gel, spray, or vaginal ring) and — for women with a uterus — micronised progesterone to protect the endometrium. Strong evidence supports its use for vasomotor symptoms, bone protection, cardiovascular benefit when started within 10 years of menopause, and quality of life.',
        context: 'What helps · Perimenopause guide · Bioidentical hormones · Evidence ratings',
      },
      {
        term: 'hsCRP (High-sensitivity C-reactive protein)',
        category: 'lab test',
        definition:
          'A sensitive blood marker of systemic (low-grade) inflammation. Standard CRP is used to detect acute infection; hsCRP detects the chronic, subclinical inflammation linked to cardiovascular disease, insulin resistance, and metabolic dysfunction. Estrogen has significant anti-inflammatory effects, so as estrogen declines in perimenopause, hsCRP tends to rise — independently increasing cardiovascular and metabolic risk.',
        context: 'Labs & tests · Cardiovascular risk · Inflammation · Metabolic panel',
      },
    ],
  },
  {
    letter: 'I',
    terms: [
      {
        term: 'IGF-1 (Insulin-like Growth Factor 1)',
        category: 'hormone',
        definition:
          'A hormone produced primarily in the liver in response to growth hormone (GH) signalling. IGF-1 mediates most of GH\'s anabolic effects — muscle maintenance, bone formation, cellular repair, and cognitive function. GH pulsatility declines with age and disrupted sleep further impairs it, so IGF-1 often falls during perimenopause. Low IGF-1 contributes to sarcopenia, bone loss, and cognitive changes in middle age.',
        context: 'Hormones guide · Bone health · Muscle health · Sarcopenia · Sleep',
      },
      {
        term: 'Insulin resistance',
        category: 'condition',
        definition:
          'A state in which cells in the muscles, fat, and liver do not respond efficiently to insulin — meaning more insulin is needed to move glucose out of the blood and into cells. The pancreas compensates by secreting more insulin, raising baseline insulin levels. Over time, this can progress to pre-diabetes and type 2 diabetes. Visceral adiposity, physical inactivity, disrupted sleep, and — crucially — estrogen decline in perimenopause all promote insulin resistance.',
        context: 'Metabolic health · Labs & tests · HOMA-IR · HbA1c · Perimenopause',
      },
    ],
  },
  {
    letter: 'K',
    terms: [
      {
        term: 'KNDy neurons',
        category: 'concept',
        definition:
          'Neurons in the hypothalamus that co-express three neuropeptides: Kisspeptin, Neurokinin B (NKB), and Dynorphin — giving them their acronym. KNDy neurons are central regulators of GnRH pulsatility and, critically, thermoregulation. In low-estrogen states (menopause, perimenopause), NKB activity becomes disinhibited, leading to bursts of activity in the thermoregulatory centre. This is the direct neurological mechanism underlying hot flashes and night sweats. Fezolinetant targets the NK3 receptor that NKB activates.',
        context: 'Hormones guide · Vasomotor symptoms · Hot flashes · Fezolinetant',
      },
    ],
  },
  {
    letter: 'L',
    terms: [
      {
        term: 'Leptin resistance',
        category: 'condition',
        definition:
          'A state in which the brain does not respond appropriately to leptin, the hormone produced by fat cells that signals satiety and regulates energy balance. When leptin resistance develops, the brain perceives a state of energy deficiency even in the presence of adequate or excess fat stores, driving increased appetite, reduced metabolic rate, and fat accumulation. Estrogen modulates leptin sensitivity, and declining estrogen in perimenopause is linked to leptin resistance — contributing to weight gain, particularly around the abdomen.',
        context: 'Metabolic health · Weight gain · Perimenopause symptoms · Appetite',
      },
      {
        term: 'LH (Luteinising Hormone)',
        category: 'hormone',
        definition:
          'A pituitary hormone that acts alongside FSH to drive the reproductive cycle. At mid-cycle, a surge of LH triggers ovulation — the release of the egg from the dominant follicle. LH also stimulates the formation of the corpus luteum and, in the thecal cells of the ovary, drives testosterone production (which is then converted to estradiol). Like FSH, LH rises as ovarian function declines. The FSH:LH ratio can help distinguish perimenopause from other causes of cycle disruption.',
        context: 'Labs & tests · Core hormone panel · HPO axis · Ovulation',
      },
      {
        term: 'Lipoprotein(a) — Lp(a)',
        category: 'lab test',
        definition:
          'A lipoprotein particle similar to LDL but with an additional protein (apolipoprotein(a)) attached. Lp(a) level is genetically determined — it is largely fixed from birth and unresponsive to diet or exercise. Elevated Lp(a) (above roughly 50 mg/dL or 125 nmol/L) significantly increases risk of cardiovascular disease, heart attack, and stroke, independent of standard cholesterol levels. Every woman going through perimenopause should know her Lp(a) level at least once.',
        context: 'Labs & tests · Cardiovascular risk · Lipid panel · Perimenopause',
      },
      {
        term: 'Luteal phase',
        category: 'concept',
        definition:
          'The second half of the menstrual cycle, from ovulation to the start of menstruation (approximately days 15–28 in a 28-day cycle). It is characterised by the presence of the corpus luteum, which produces progesterone and some estradiol to sustain the uterine lining. If progesterone is insufficient — as occurs when ovulation is absent or poor — the luteal phase is shortened or deficient, and symptoms such as spotting, anxiety, poor sleep, and PMS worsen. Luteal phase deficiency is one of the first clinical signs of perimenopause.',
        context: 'Cycle phases · Progesterone · PMS · PMDD · Perimenopause',
      },
    ],
  },
  {
    letter: 'M',
    terms: [
      {
        term: 'Melarche / Melatonin',
        category: 'hormone',
        definition:
          'Melatonin is a hormone secreted by the pineal gland in the brain in response to darkness, regulating circadian rhythm and sleep-wake cycles. Melatonin production declines with age and is further disrupted in perimenopause by night sweats, cortisol dysregulation, and light exposure changes. Low melatonin also affects antioxidant defences and bone metabolism — melatonin receptors are present in osteoblasts.',
        context: 'Sleep · Circadian health · Hormones guide · Bone health',
      },
      {
        term: 'Menarche',
        category: 'concept',
        definition:
          'The first menstrual period — the milestone that marks the beginning of reproductive life in females. Menarche typically occurs between ages 10 and 16 (average around 12–13 in most high-income countries), approximately 2 years after the onset of puberty (thelarche). Earlier menarche is associated with higher lifetime estrogen exposure and modestly elevated risk of certain hormone-sensitive conditions later in life.',
        context: 'Life stages · Female development · Puberty · Reproductive history',
      },
      {
        term: 'Menopause',
        category: 'condition',
        definition:
          'Defined retrospectively as 12 consecutive months without a menstrual period, not caused by pregnancy, illness, or medication. The average age of natural menopause is 51–52 in most populations. Menopause itself is a single point in time; the years leading up to it are perimenopause and the years following are post-menopause. Surgical menopause (bilateral oophorectomy) or menopause induced by cancer treatment causes an abrupt, often more severe transition.',
        context: 'Perimenopause guide · Life stages · STRAW+10 staging',
      },
    ],
  },
  {
    letter: 'N',
    terms: [
      {
        term: 'Neuroplasticity',
        category: 'concept',
        definition:
          'The brain\'s capacity to reorganise itself by forming new neural connections, strengthening existing ones, and pruning unused pathways. Estrogen significantly supports neuroplasticity — it promotes synaptogenesis, dendritic branching, and the production of BDNF (brain-derived neurotrophic factor). Declining estrogen in perimenopause temporarily reduces neuroplasticity, contributing to brain fog, word-finding difficulties, and memory lapses. Evidence suggests the brain adapts to lower estrogen over time in most women.',
        context: 'Cognitive symptoms · Brain fog · Hormones guide · Estrogen & brain',
      },
      {
        term: 'NK3 receptor (Neurokinin 3 receptor)',
        category: 'concept',
        definition:
          'A receptor in the hypothalamus activated by neurokinin B (NKB), one of the three neuropeptides produced by KNDy neurons. NK3 receptor activation in the thermoregulatory centre triggers the vasodilatory cascade experienced as a hot flash or night sweat. Estrogen normally suppresses this pathway; when estrogen declines, NK3 receptor activity increases and hot flashes result. The drug fezolinetant specifically blocks this receptor to reduce hot flash frequency and severity.',
        context: 'Vasomotor symptoms · KNDy neurons · Fezolinetant · Hormones guide',
      },
    ],
  },
  {
    letter: 'O',
    terms: [
      {
        term: 'Osteoblast',
        category: 'concept',
        definition:
          'A specialised bone cell responsible for forming new bone by synthesising and mineralising the bone matrix (primarily collagen and calcium). Osteoblasts are stimulated by estrogen, mechanical loading (weight-bearing exercise), growth hormone/IGF-1, and parathyroid hormone (in certain contexts). In perimenopause and post-menopause, osteoblast activity is outpaced by osteoclast activity, leading to net bone loss.',
        context: 'Bone health · Osteoporosis · Hormones & bone · Exercise',
      },
      {
        term: 'Osteoclast',
        category: 'concept',
        definition:
          'A large bone cell responsible for resorbing (breaking down) old or damaged bone — an essential part of healthy bone remodelling. Estrogen normally restrains osteoclast activity; when estrogen declines in perimenopause and menopause, osteoclasts become disproportionately active, tipping the bone remodelling balance toward net bone loss. Bisphosphonates and denosumab work primarily by inhibiting osteoclast activity.',
        context: 'Bone health · Osteoporosis · Estrogen & bone · Bisphosphonates',
      },
      {
        term: 'Osteopaenia',
        category: 'condition',
        definition:
          'A state of lower-than-normal bone mineral density that is not yet severe enough to meet the diagnostic threshold for osteoporosis. Defined as a T-score (on DXA scan) between −1.0 and −2.5. Osteopaenia does not necessarily require medication but does indicate elevated fracture risk relative to peers and is a signal to optimise calcium, vitamin D, weight-bearing exercise, and — if appropriate — hormone therapy. Many women develop osteopaenia silently during perimenopause.',
        context: 'Bone health · DXA scan · BMD · Perimenopause · Osteoporosis risk',
      },
      {
        term: 'Osteoporosis',
        category: 'condition',
        definition:
          'A skeletal disease characterised by severely reduced bone mineral density (T-score ≤ −2.5 on DXA) and deterioration of bone microarchitecture, markedly increasing the risk of fractures — particularly of the spine, hip, and wrist — from minimal trauma. Post-menopausal women are at highest risk because bone loss accelerates sharply in the 5–10 years after menopause as estrogen\'s bone-protective effects are lost. Hip fractures in particular are associated with significant morbidity and mortality.',
        context: 'Bone health · DXA scan · BMD · Post-menopause · HRT & bone',
      },
    ],
  },
  {
    letter: 'P',
    terms: [
      {
        term: 'Perimenopause',
        category: 'condition',
        definition:
          'The transitional period leading up to menopause, typically beginning in the mid-to-late 40s (though sometimes earlier) and lasting 4–10 years. It is characterised by irregular, erratic fluctuations in ovarian hormone production rather than a steady decline — estradiol can spike abnormally high in early perimenopause before eventually falling. The term means "around menopause" and encompasses the full transition from regular cycles to the final period, plus the 12 months that follow.',
        context: 'Perimenopause guide · Life stages · STRAW+10 staging',
      },
      {
        term: 'PMDD (Premenstrual Dysphoric Disorder)',
        category: 'condition',
        definition:
          'A severe form of PMS characterised by debilitating mood symptoms — severe depression, hopelessness, anxiety, irritability, or rage — in the late luteal phase (the week or two before menstruation), which resolve within days of the period starting. PMDD is not caused by abnormal hormone levels per se, but by an abnormal neurological sensitivity to normal hormonal fluctuations — particularly the drop in allopregnanolone (a progesterone metabolite with GABA-A activity) in the late luteal phase.',
        context: 'Mood symptoms · GABA-A receptor · Allopregnanolone · Luteal phase',
      },
      {
        term: 'PMS (Premenstrual Syndrome)',
        category: 'condition',
        definition:
          'A cluster of physical and emotional symptoms — including bloating, breast tenderness, fatigue, mood swings, irritability, and food cravings — occurring in the 1–2 weeks before menstruation and resolving with the onset of the period. PMS is extremely common and ranges from mildly inconvenient to significantly disruptive. In perimenopause, PMS symptoms often worsen as progesterone production becomes more erratic and the ratio of estrogen to progesterone shifts.',
        context: 'Symptoms · Luteal phase · Mood · Perimenopause',
      },
      {
        term: 'POI (Premature Ovarian Insufficiency)',
        category: 'condition',
        definition:
          'A loss of normal ovarian function before age 40, resulting in estrogen deficiency and elevated FSH. Previously called "premature menopause," POI is now the preferred term because ovarian function can be intermittent — pregnancies still occasionally occur. POI affects roughly 1 in 100 women and can be caused by autoimmune conditions, chromosomal variants (e.g. Turner syndrome), cancer treatments, or may be idiopathic. Women with POI face substantially elevated risks of cardiovascular disease, bone loss, cognitive decline, and mood disorders from an early age.',
        context: 'Life stages · Female health · Hormones guide · Young women',
      },
      {
        term: 'Progesterone',
        category: 'hormone',
        definition:
          'A steroid hormone produced by the corpus luteum after ovulation and by the placenta during pregnancy. In non-pregnant women, progesterone\'s primary role is preparing the uterine lining for implantation and, if pregnancy does not occur, triggering menstruation when it falls. Beyond the uterus, progesterone supports sleep (via its conversion to allopregnanolone which acts on GABA-A receptors), reduces anxiety, is neuroprotective, and counterbalances estrogen\'s proliferative effects on the endometrium.',
        context: 'Hormones guide · Core hormone panel · PMDD · Sleep · HRT',
      },
      {
        term: 'Progestins vs progesterone',
        category: 'concept',
        definition:
          'Progesterone refers specifically to the natural, bioidentical molecule (identical to what the body produces). Progestins (also called synthetic progestogens) are synthetic compounds designed to mimic progesterone\'s effects on the uterus but differ in molecular structure and consequently have different — sometimes adverse — side-effect profiles. For example, some progestins counteract estrogen\'s cardiovascular benefits and may increase breast cancer risk, while micronised (body-identical) progesterone does not share these risks to the same degree.',
        context: 'HRT/MHT · Bioidentical hormones · What helps · Breast cancer risk',
      },
    ],
  },
  {
    letter: 'S',
    terms: [
      {
        term: 'Sarcopenia',
        category: 'condition',
        definition:
          'Age-related loss of skeletal muscle mass and strength, leading to reduced physical function and increased risk of falls and fractures. Estrogen, testosterone, growth hormone/IGF-1, and insulin all support muscle protein synthesis — and the decline of all these hormones in midlife accelerates sarcopenia. Resistance (weight) training is the most effective intervention. Sarcopenia and osteoporosis frequently coexist and compound each other\'s risks.',
        context: 'Symptoms · Muscle loss · Bone health · Exercise · Perimenopause',
      },
      {
        term: 'SERM (Selective Estrogen Receptor Modulator)',
        category: 'medication',
        definition:
          'A class of compounds that bind to estrogen receptors but act as estrogen agonists in some tissues and antagonists in others, depending on tissue type. For example, tamoxifen blocks estrogen receptors in breast tissue (used in breast cancer treatment) while acting as a partial agonist in bone and the uterus. Raloxifene protects bone and reduces LDL without stimulating the endometrium. Ospemifene is a SERM approved for dyspareunia (painful sex due to GSM).',
        context: 'Medications · Bone health · GSM treatment · Breast cancer · What helps',
      },
      {
        term: 'SHBG (Sex Hormone-Binding Globulin)',
        category: 'hormone',
        definition:
          'A glycoprotein produced mainly by the liver that binds to sex hormones — particularly testosterone and estradiol — carrying them in the bloodstream and rendering them biologically inactive while bound. Only the unbound (free) fraction of hormones is available to tissues. High SHBG (raised by oral estrogens, thyroid disease, and liver conditions) lowers free testosterone and estradiol; low SHBG (caused by insulin resistance, obesity, and some androgens) raises free hormone availability.',
        context: 'Labs & tests · Testosterone · Free testosterone · Core hormone panel',
      },
      {
        term: 'STRAW+10 staging',
        category: 'concept',
        definition:
          'The Stages of Reproductive Ageing Workshop +10 framework — the international standard for classifying where a woman is in the menopause transition based on menstrual cycle characteristics and hormone levels. It describes 10 stages from peak reproductive years (stage −5) through perimenopause (stages −2 and −1) to early and late post-menopause (stages +1 and +2). This system replaced the informal "early/late perimenopause" language with reproducible, clinically useful criteria.',
        context: 'Perimenopause guide · Life stages · Research context',
      },
      {
        term: 'SWAN study (Study of Women\'s Health Across the Nation)',
        category: 'concept',
        definition:
          'A large, longitudinal US cohort study that has followed more than 3,000 women across midlife since 1996, tracking hormones, symptoms, cardiovascular risk, bone density, cognitive changes, and psychosocial factors across the menopausal transition. SWAN is the most comprehensive source of data on the natural history of perimenopause and has defined much of what is now known about symptom timing, duration, and risk factors. The study includes diverse ethnic and racial groups.',
        context: 'Research · Sources · Perimenopause guide · Evidence base',
      },
    ],
  },
  {
    letter: 'T',
    terms: [
      {
        term: 'T3 / T4 (Triiodothyronine / Thyroxine)',
        category: 'hormone',
        definition:
          'The two main thyroid hormones. T4 (thyroxine) is the predominant hormone secreted by the thyroid gland; it is relatively inactive and must be converted to T3 (triiodothyronine) in peripheral tissues to exert biological effects. T3 is the active form that regulates metabolic rate, body temperature, heart rate, brain function, and mood. Some individuals have impaired T4-to-T3 conversion (often linked to the DIO2 gene variant), resulting in normal TSH and T4 but low T3 and persistent symptoms.',
        context: 'Labs & tests · Thyroid panel · HPT axis · Perimenopause symptoms',
      },
      {
        term: 'TBG (Thyroid-binding globulin)',
        category: 'hormone',
        definition:
          'A liver-produced protein that carries thyroid hormones (T3 and T4) in the bloodstream. Like SHBG for sex hormones, TBG binds thyroid hormones and renders them inactive while bound; only free T3 and free T4 are biologically active. Estrogen stimulates TBG production — so women starting oral estrogen therapy or taking combined oral contraceptives may see TBG rise, causing total T4 to increase and potentially requiring thyroid dose adjustments in those already on levothyroxine.',
        context: 'Thyroid · HPT axis · HRT interactions · Labs & tests',
      },
      {
        term: 'Testosterone',
        category: 'hormone',
        definition:
          'An androgen produced in women by the ovaries, adrenal glands, and peripheral conversion from DHEA. Despite being thought of as a "male hormone," testosterone plays important roles in female health — supporting libido, sexual satisfaction, energy, mood, bone density, muscle mass, cognitive function, and skin integrity. Testosterone production declines gradually with age and more abruptly after surgical menopause. Testosterone therapy (topical gel or cream) has good evidence for hypoactive sexual desire disorder in women.',
        context: 'Hormones guide · Labs & tests · Libido · Energy · Female androgens',
      },
      {
        term: 'TRH (Thyrotropin-releasing hormone)',
        category: 'hormone',
        definition:
          'A tripeptide hormone secreted by the hypothalamus that triggers the pituitary to release TSH (thyroid-stimulating hormone), which in turn stimulates the thyroid to produce T4 and T3. TRH is the top of the HPT (hypothalamic–pituitary–thyroid) axis and is modulated by body temperature, stress, and circulating thyroid hormone levels. It also has direct effects in the brain, influencing mood, alertness, and nausea.',
        context: 'HPT axis · Thyroid · Hormones guide',
      },
      {
        term: 'TSH (Thyroid-Stimulating Hormone)',
        category: 'lab test',
        definition:
          'The primary screening test for thyroid function. Produced by the pituitary, TSH rises when thyroid output is insufficient (hypothyroidism) and falls when output is excessive (hyperthyroidism). It is the most sensitive indicator of thyroid status. Importantly, hypothyroidism causes fatigue, weight gain, brain fog, depression, cold intolerance, constipation, dry skin, and hair loss — symptoms nearly identical to perimenopause. TSH should always be tested when evaluating perimenopausal symptoms.',
        context: 'Labs & tests · Thyroid panel · Perimenopause symptoms · HPT axis',
      },
    ],
  },
  {
    letter: 'V',
    terms: [
      {
        term: 'VMS / Vasomotor symptoms',
        category: 'condition',
        definition:
          'The medical term encompassing hot flashes (flushes) and night sweats — the most reported symptoms of the menopausal transition. They are caused by dysfunction in the hypothalamic thermoregulatory centre triggered by KNDy neuron activity in the absence of estrogen. The affected "thermoneutral zone" narrows so that normal temperature fluctuations trigger vasodilatory responses (flushing, sweating, rapid heart rate) inappropriately. Around 80% of women experience VMS; for 30–40%, symptoms are severe. The median duration is 7–10 years.',
        context: 'Symptoms · Perimenopause guide · KNDy neurons · NK3 receptor · What helps',
      },
    ],
  },
]

function CategoryBadge({ category }: { category: Category }) {
  const style = categoryStyles[category]
  return (
    <span
      className={`inline-block text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${style.bg} ${style.text} ${style.border}`}
    >
      {category}
    </span>
  )
}

export default function GlossaryPage() {
  const presentLetters = glossaryData.map((g) => g.letter)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-stone-700">Home</Link>
        <span className="mx-2">›</span>
        <span>Glossary</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Glossary of Hormonal Health Terms
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          Plain-language definitions for every technical term used on this site. Each entry
          includes the category of term and the pages where you are likely to encounter it.
        </p>
      </div>

      {/* Category key */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(categoryStyles) as Category[]).map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>

      {/* A–Z jump nav */}
      <div className="flex flex-wrap gap-1.5 mb-10 pb-8 border-b border-stone-200">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
          const hasEntries = presentLetters.includes(letter)
          return hasEntries ? (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-800 transition-colors"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              className="w-8 h-8 flex items-center justify-center rounded-full text-sm text-stone-300 cursor-default select-none"
            >
              {letter}
            </span>
          )
        })}
      </div>

      {/* Letter sections */}
      <div className="space-y-16">
        {glossaryData.map((group) => (
          <section
            key={group.letter}
            id={`letter-${group.letter}`}
            className="scroll-mt-20"
          >
            {/* Letter divider */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-black text-stone-100 leading-none select-none">
                {group.letter}
              </span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            {/* Term cards */}
            <div className="space-y-4">
              {group.terms.map((item) => (
                <div
                  key={item.term}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden"
                >
                  <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center gap-3">
                    <h2 className="font-bold text-stone-900 text-base">{item.term}</h2>
                    <CategoryBadge category={item.category} />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-stone-700 leading-relaxed mb-3">
                      {item.definition}
                    </p>
                    <p className="text-xs text-stone-400 italic">
                      Appears in: {item.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Missing term callout */}
      <div className="mt-16 bg-stone-900 text-white rounded-2xl p-8">
        <h2 className="text-lg font-bold mb-2">Term missing?</h2>
        <p className="text-stone-300 text-sm leading-relaxed mb-4">
          This glossary covers the terms currently used across this site. If you have
          encountered a term that is not listed here, or if a definition needs correction,
          please open a GitHub issue or send an email.
        </p>
        <a
          href="https://github.com/Deepikar8/hormonal-health/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-stone-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Open a GitHub issue
        </a>
      </div>

      {/* Bottom nav */}
      <div className="mt-8 flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-stone-200">
        <Link href="/hormones" className="text-amber-700 hover:underline text-sm font-medium">
          ← Hormones guide
        </Link>
        <Link href="/sources" className="text-amber-700 hover:underline text-sm font-medium">
          Research sources →
        </Link>
      </div>

    </div>
  )
}
