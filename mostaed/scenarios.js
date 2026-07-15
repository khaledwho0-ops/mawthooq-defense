/* مستعد · Readiness Cards.
 *
 * PROVENANCE STATUS (2026-07-10) — stated honestly, because the previous header was false.
 * It claimed "every field REAL + sourced … ingested from authorities". Nothing had been ingested;
 * the cards were written from model recall and citations were appended afterward. That error put
 * wrong advice into a level-4 poisoning card (it told people to give a poisoning victim milk;
 * NHS says give nothing). See 09_METHODOLOGY/EGY_LIBRARY_RETROSPECTIVE.md.
 *
 * A step is GROUNDED only when it is {t, src} and `src` resolves in SOURCES below to a document
 * this project actually fetched and hashed (corpus/manifest.json). A bare string is UNGROUNDED and
 * renders with a ⚠ marker. `pipeline/validate-cards.mjs` exits 1 on ungrounded level>=4 steps.
 *
 * AI's only jobs here: translate the fetched English into Egyptian Arabic, and restructure. It is
 * never the origin of a fact.
 *
 * Egypt hotlines (verified): 112 unified · 122 police · 123 ambulance · 180 fire · 126 tourist police · 16328 mental-health.
 * There is NO verified national poison-control line — route to 123 and take the container.
 */

/* Every srcId here maps to a document in corpus/manifest.json with a matching sha256. */
window.SOURCES = {
"nhs:dehydration": {"url": "https://www.nhs.uk/conditions/dehydration/", "label": "NHS", "sha256": "c10c4fd56c", "retrieved": "2026-07-15", "licence": "OGL v3 · © Crown copyright", "tag": "NHS"},
  "nhs:cpr": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/", label: "NHS — CPR",
    sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:heart-attack": { url: "https://www.nhs.uk/conditions/heart-attack/", label: "NHS — Heart attack",
    sha256: "f8a7bfb168", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:anaphylaxis": { url: "https://www.nhs.uk/conditions/anaphylaxis/", label: "NHS — Anaphylaxis",
    sha256: "8cc8e0f7f6", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:poisoning": { url: "https://www.nhs.uk/conditions/poisoning/", label: "NHS — Poisoning",
    sha256: "8292bd5634", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:heat": { url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/", label: "NHS — Heat exhaustion & heatstroke",
    sha256: "ea3662537f", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:fainting": { url: "https://www.nhs.uk/symptoms/fainting/", label: "NHS — Fainting",
    sha256: "6b9d8b5071", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:child-choking": { url: "https://www.nhs.uk/baby/first-aid-and-safety/first-aid/how-to-stop-a-child-from-choking/",
    label: "NHS — How to stop a child from choking", sha256: "474415a468", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:after-accident": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/",
    label: "NHS — After an accident", sha256: "36e83fbdbf", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:epilepsy": { url: "https://www.nhs.uk/conditions/epilepsy/", label: "NHS — Epilepsy (seizures)",
    sha256: "1855df6cd1", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:burns": { url: "https://www.nhs.uk/conditions/burns-and-scalds/", label: "NHS — Burns and scalds",
    sha256: "b9a8fe816d", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:recovery-position": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/recovery-position/",
    label: "NHS — The recovery position", sha256: "a017fa3292", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:panic-disorder": { url: "https://www.nhs.uk/mental-health/conditions/panic-disorder/",
    label: "NHS — Panic disorder (what to do during a panic attack)", sha256: "df881766ec", retrieved: "2026-07-10",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:breathing-exercise": { url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/",
    label: "NHS — Calming breathing exercise for stress, anxiety and panic", sha256: "2610fab8b4", retrieved: "2026-07-10",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },

  /* MedlinePlus Encyclopedia — U.S. National Library of Medicine, PUBLIC DOMAIN.
     Attribution required: "Information from MedlinePlus.gov". No logo; no implied endorsement.
     These are the only ingested documents covering four level-5 cards NHS has no page for. */
  "mlp:choking-adult": { url: "https://medlineplus.gov/ency/article/000049.htm",
    label: "MedlinePlus — Choking: adult or child over 1 year", sha256: "319bba7b55", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:choking-infant": { url: "https://medlineplus.gov/ency/article/000048.htm",
    label: "MedlinePlus — Choking: infant under 1 year", sha256: "a7c34e47b5", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:drowning": { url: "https://medlineplus.gov/ency/article/000046.htm",
    label: "MedlinePlus — Non-fatal drowning", sha256: "de62c2aa81", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:electrical-injury": { url: "https://medlineplus.gov/ency/article/000053.htm",
    label: "MedlinePlus — Electrical injury", sha256: "0e362fd364", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:bleeding": { url: "https://medlineplus.gov/ency/article/000045.htm",
    label: "MedlinePlus — Bleeding", sha256: "5a2a6134fb", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:burns": { url: "https://medlineplus.gov/ency/article/000030.htm",
    label: "MedlinePlus — Burns", sha256: "3113ae2e76", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:heat": { url: "https://medlineplus.gov/ency/article/000056.htm",
    label: "MedlinePlus — Heat emergencies", sha256: "b04003bdbe", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:suicide": { url: "https://medlineplus.gov/suicide.html",
    label: "MedlinePlus — Suicide", sha256: "6e83a60d27", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:fainting": { url: "https://medlineplus.gov/ency/article/003092.htm",
    label: "MedlinePlus — Fainting (First aid / Home Care)", sha256: "c1da1196df", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:head-injury": { url: "https://medlineplus.gov/ency/article/000028.htm", label: "MedlinePlus — Head injury", sha256: "1c5457c4a4", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:cuts-wounds": { url: "https://medlineplus.gov/ency/article/000043.htm", label: "MedlinePlus — Cuts and puncture wounds", sha256: "91244c2b35", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:broken-bone": { url: "https://medlineplus.gov/ency/article/000001.htm", label: "MedlinePlus — Broken bone", sha256: "8ffc676de6", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:insect-bites": { url: "https://medlineplus.gov/ency/article/000033.htm", label: "MedlinePlus — Insect bites and stings", sha256: "bbaa53e3f1", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:snake-bite": { url: "https://medlineplus.gov/ency/article/000031.htm", label: "MedlinePlus — Snake bites", sha256: "72b4bce068", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:eye-injury": { url: "https://medlineplus.gov/ency/article/000054.htm", label: "MedlinePlus — Eye emergencies", sha256: "4fb150b9ce", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:shock": { url: "https://medlineplus.gov/ency/article/000039.htm", label: "MedlinePlus — Shock", sha256: "3229ac4846", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:chemical-burn": { url: "https://medlineplus.gov/ency/article/000059.htm", label: "MedlinePlus — Chemical burn or reaction", sha256: "fe2e4f64d4", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:swallowed-object": { url: "https://medlineplus.gov/ency/article/000036.htm", label: "MedlinePlus — Foreign object - swallowed", sha256: "2e83e8f3b4", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:hypothermia": { url: "https://medlineplus.gov/ency/article/000038.htm", label: "MedlinePlus — Hypothermia", sha256: "b04c164d48", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:breathing-difficulty": { url: "https://medlineplus.gov/ency/article/000007.htm", label: "MedlinePlus — Breathing difficulties - first aid", sha256: "f8fc45e36d", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:bleeding-gums": { url: "https://medlineplus.gov/ency/article/003062.htm", label: "MedlinePlus — Bleeding gums", sha256: "f43d536909", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:nosebleed": { url: "https://medlineplus.gov/ency/article/003106.htm", label: "MedlinePlus — Nosebleed", sha256: "94ef589236", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:sunburn": { url: "https://medlineplus.gov/ency/article/003227.htm", label: "MedlinePlus — Sunburn", sha256: "db61e39f51", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:allergic-reaction": { url: "https://medlineplus.gov/ency/article/000005.htm", label: "MedlinePlus — Allergic reactions", sha256: "8c31fb3437", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:sprains": { url: "https://medlineplus.gov/ency/article/000041.htm", label: "MedlinePlus — Sprains", sha256: "757721f11b", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:knocked-tooth": { url: "https://medlineplus.gov/ency/article/000058.htm", label: "MedlinePlus — Broken or knocked out tooth", sha256: "6457d31ac6", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:fever": { url: "https://medlineplus.gov/ency/article/003090.htm", label: "MedlinePlus — Fever", sha256: "bd0794a1ff", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:ear-emergency": { url: "https://medlineplus.gov/ency/article/000052.htm", label: "MedlinePlus — Ear emergencies", sha256: "f1741ccdc1", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:choking-unconscious": { url: "https://medlineplus.gov/ency/article/000051.htm", label: "MedlinePlus — Choking - unconscious adult or child over 1 year", sha256: "c2ffd45b96", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:dislocation": { url: "https://medlineplus.gov/ency/article/000014.htm", label: "MedlinePlus — Dislocation", sha256: "51749ea3de", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:amputation": { url: "https://medlineplus.gov/ency/article/000006.htm", label: "MedlinePlus — Traumatic amputation", sha256: "348099ad5b", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:nose-object": { url: "https://medlineplus.gov/ency/article/000037.htm", label: "MedlinePlus — Foreign body in the nose", sha256: "06c8927ec7", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:nose-fracture": { url: "https://medlineplus.gov/ency/article/000061.htm", label: "MedlinePlus — Nose fracture", sha256: "0688856283", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },

  /* CDC — U.S. federal, public domain. Attribution: "Content source: CDC". No logo, no endorsement.
     NOTE: cdc.gov answers 200 to a PLAIN bot user-agent and 403 to a Chrome one — the inverse of
     every other host here. Probe more than one UA before declaring a source dead. */
  "cdc:seizure-first-aid": { url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures",
    label: "CDC — First Aid for Seizures", sha256: "6f3e5abc93", retrieved: "2026-07-10",
    licence: "public domain · U.S. CDC", tag: "CDC" },
  "cdc:stroke-signs": { url: "https://www.cdc.gov/stroke/signs-symptoms",
    label: "CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)", sha256: "6caca15615", retrieved: "2026-07-10",
    licence: "public domain · U.S. CDC", tag: "CDC" },

  /* Ready.gov / FEMA — U.S. federal, public domain. Strip logos; imply no endorsement. */
  "ready:home-fires": { url: "https://www.ready.gov/home-fires",
    label: "Ready.gov (FEMA) — Home Fires", sha256: "e7c4c08241", retrieved: "2026-07-10",
    licence: "public domain · FEMA", tag: "Ready.gov" },
  "mlp:dislocation": { url: "https://medlineplus.gov/ency/article/000014.htm", label: "MedlinePlus — Dislocation", sha256: "51749ea3de", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:genital-injury": { url: "https://medlineplus.gov/ency/article/000044.htm", label: "MedlinePlus — Genital injury", sha256: "a925f806a0", retrieved: "2026-07-10", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:ear-emergencies": { url: "https://medlineplus.gov/ency/article/000052.htm", label: "MedlinePlus — Ear emergencies", sha256: "f1741ccdc1", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:frostbite": { url: "https://medlineplus.gov/ency/article/000057.htm", label: "MedlinePlus — Frostbite", sha256: "24166ddd32", retrieved: "2026-07-10", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:skull-fracture": { url: "https://medlineplus.gov/ency/article/000060.htm", label: "MedlinePlus — Skull fracture", sha256: "3ef322663e", retrieved: "2026-07-10", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:nose-fracture": { url: "https://medlineplus.gov/ency/article/000061.htm", label: "MedlinePlus — Nose fracture", sha256: "0688856283", retrieved: "2026-07-10", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:unconsciousness": { url: "https://medlineplus.gov/ency/article/000022.htm", label: "MedlinePlus — Unconsciousness - first aid", sha256: "b4adebf16c", retrieved: "2026-07-11", licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "ready:landslides-debris-flow": { url: "https://www.ready.gov/landslides-debris-flow", label: "Ready.gov — Landslides & Debris Flow", sha256: "6669b7b874", retrieved: "2026-07-11", licence: "public domain · FEMA / Ready.gov", tag: "Ready.gov" },
  "nhs:low-blood-sugar": { url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/", label: "NHS — Low blood sugar (hypoglycaemia)", sha256: "73758583ac", retrieved: "2026-07-12", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:diarrhoea-vomiting": { url: "https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/", label: "NHS — Diarrhoea and vomiting", sha256: "6edf556fb8", retrieved: "2026-07-12", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:chickenpox": { url: "https://www.nhs.uk/conditions/chickenpox/", label: "NHS — Chickenpox", sha256: "18dfb587d1", retrieved: "2026-07-12", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:asthma": { url: "https://www.nhs.uk/conditions/asthma/", label: "NHS — Asthma", sha256: "4d5e92846a", retrieved: "2026-07-12", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:febrile-seizures": {"url":"https://www.nhs.uk/conditions/febrile-seizures/","label":"NHS — Febrile seizures","sha256":"b1815869e6","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:seizure-first-aid": {"url":"https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/","label":"NHS — What to do if someone has a seizure (fit)","sha256":"9ebfe12379","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bronchiolitis": {"url":"https://www.nhs.uk/conditions/bronchiolitis/","label":"NHS — Bronchiolitis","sha256":"1872d080af","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:rsv": {"url":"https://www.nhs.uk/conditions/respiratory-syncytial-virus-rsv/","label":"NHS — Respiratory syncytial virus (RSV)","sha256":"87c0e6048f","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bronchitis": {"url":"https://www.nhs.uk/conditions/bronchitis/","label":"NHS — Bronchitis","sha256":"f0f4a7ae71","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:respiratory-tract-infection": {"url":"https://www.nhs.uk/conditions/respiratory-tract-infection/","label":"NHS — Respiratory tract infections (RTIs)","sha256":"1c6308f770","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:whooping-cough": {"url":"https://www.nhs.uk/conditions/whooping-cough/","label":"NHS — Whooping cough","sha256":"c981288b52","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:impetigo": {"url":"https://www.nhs.uk/conditions/impetigo/","label":"NHS — Impetigo","sha256":"a2ef07175a","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:ringworm": {"url":"https://www.nhs.uk/conditions/ringworm/","label":"NHS — Ringworm","sha256":"749aba4fe1","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:threadworms": {"url":"https://www.nhs.uk/conditions/threadworms/","label":"NHS — Threadworms","sha256":"2724c51d11","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:conjunctivitis": {"url":"https://www.nhs.uk/conditions/conjunctivitis/","label":"NHS — Conjunctivitis","sha256":"c2fe8ffabe","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bedbugs": {"url":"https://www.nhs.uk/conditions/bedbugs/","label":"NHS — Bedbugs","sha256":"b4430fa35b","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:fungal-nail-infection": {"url":"https://www.nhs.uk/conditions/fungal-nail-infection/","label":"NHS — Fungal nail infection","sha256":"f1e4c185e4","retrieved":"2026-07-13","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:nausea": {"url":"https://www.nhs.uk/symptoms/feeling-sick-nausea/","label":"NHS — Feeling sick (nausea)","sha256":"cb8519ecac","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:scabies": {"url":"https://www.nhs.uk/conditions/scabies/","label":"NHS — Scabies","sha256":"86d79d69fa","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:mouth-ulcers": {"url":"https://www.nhs.uk/conditions/mouth-ulcers/","label":"NHS — Mouth ulcers","sha256":"db0ab40e40","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:piles-haemorrhoids": {"url":"https://www.nhs.uk/conditions/piles-haemorrhoids/","label":"NHS — Piles (haemorrhoids)","sha256":"0e914e30f6","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:warts-verrucas": {"url":"https://www.nhs.uk/conditions/warts-and-verrucas/","label":"NHS — Warts and verrucas","sha256":"3ca95e12d0","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:boils": {"url":"https://www.nhs.uk/conditions/boils/","label":"NHS — Boils","sha256":"d285d83a16","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:food-poisoning": {"url":"https://www.nhs.uk/conditions/food-poisoning/","label":"NHS — Food poisoning","sha256":"40f16e8d8e","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:athletes-foot": {"url":"https://www.nhs.uk/conditions/athletes-foot/","label":"NHS — Athlete's foot","sha256":"bce3eaa673","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:sore-throat": {"url":"https://www.nhs.uk/symptoms/sore-throat/","label":"NHS — Sore throat","sha256":"341cec2d41","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:constipation": {"url":"https://www.nhs.uk/conditions/constipation/","label":"NHS — Constipation","sha256":"bbf90ff291","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:urinary-tract-infections-utis": {"url":"https://www.nhs.uk/conditions/urinary-tract-infections-utis/","label":"NHS — Urinary tract infections (UTIs)","sha256":"cf8f5bba41","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:dry-eyes": {"url":"https://www.nhs.uk/symptoms/dry-eyes/","label":"NHS — Dry eyes","sha256":"7fc07d6328","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:common-cold": {"url":"https://www.nhs.uk/conditions/common-cold/","label":"NHS — Common cold","sha256":"eaddce4b60","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:headaches": {"url":"https://www.nhs.uk/symptoms/headaches/","label":"NHS — Headaches","sha256":"f3994873be","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:toothache": {"url":"https://www.nhs.uk/symptoms/toothache/","label":"NHS — Toothache","sha256":"27c61fcf49","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bloating": {"url":"https://www.nhs.uk/symptoms/bloating/","label":"NHS — Bloating","sha256":"84575d5a1c","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:labyrinthitis": {"url":"https://www.nhs.uk/conditions/labyrinthitis/","label":"NHS — Labyrinthitis and vestibular neuritis","sha256":"312e677a4f","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:dental-abscess": {"url":"https://www.nhs.uk/conditions/dental-abscess/","label":"NHS — Dental abscess","sha256":"8060cc6aca","retrieved":"2026-07-14","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:vertigo": {"url":"https://www.nhs.uk/conditions/vertigo/","label":"NHS — Vertigo","sha256":"ef7c35b4b0","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:ingrown-toenail": {"url":"https://www.nhs.uk/conditions/ingrown-toenail/","label":"NHS — Ingrown toenail","sha256":"c20f4fa113","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:atopic-eczema": {"url":"https://www.nhs.uk/conditions/atopic-eczema/","label":"NHS — Atopic eczema","sha256":"f450257611","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:eye-injuries": {"url":"https://www.nhs.uk/conditions/eye-injuries/","label":"NHS — Eye injuries","sha256":"7ea15b72a4","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:broken-toe": {"url":"https://www.nhs.uk/conditions/broken-toe/","label":"NHS — Broken toe","sha256":"a089fb27c5","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:gout": {"url":"https://www.nhs.uk/conditions/gout/","label":"NHS — Gout","sha256":"735c3f010b","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:cold-sores": {"url":"https://www.nhs.uk/conditions/cold-sores/","label":"NHS — Cold sores","sha256":"0c14f3bf74","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:blisters": {"url":"https://www.nhs.uk/conditions/blisters/","label":"NHS — Blisters","sha256":"63d69dd864","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:corns-calluses": {"url":"https://www.nhs.uk/conditions/corns-and-calluses/","label":"NHS — Corns and calluses","sha256":"1f82909a84","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:broken-bruised-ribs": {"url":"https://www.nhs.uk/conditions/broken-or-bruised-ribs/","label":"NHS — Broken or bruised ribs","sha256":"9743c88e74","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:dry-mouth": {"url":"https://www.nhs.uk/symptoms/dry-mouth/","label":"NHS — Dry mouth","sha256":"94ee759c63","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bad-breath": {"url":"https://www.nhs.uk/symptoms/bad-breath/","label":"NHS — Bad breath","sha256":"546ace93a4","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:dentures": {"url":"https://www.nhs.uk/tests-and-treatments/dentures/","label":"NHS — Dentures (false teeth)","sha256":"955df5321d","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:plantar-fasciitis": {"url":"https://www.nhs.uk/conditions/plantar-fasciitis/","label":"NHS — Plantar fasciitis","sha256":"7a671075c1","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:wrist-pain": {"url":"https://www.nhs.uk/symptoms/hand-pain/wrist-pain/","label":"NHS — Wrist pain","sha256":"f07891316a","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:ankle-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/ankle-pain/","label":"NHS — Ankle pain","sha256":"a0b555dcc4","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:thumb-pain": {"url":"https://www.nhs.uk/symptoms/hand-pain/thumb-pain/","label":"NHS — Thumb pain","sha256":"75597240e5","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:finger-pain": {"url":"https://www.nhs.uk/symptoms/hand-pain/finger-pain/","label":"NHS — Finger pain","sha256":"f95742c6a8","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:shoulder-pain": {"url":"https://www.nhs.uk/symptoms/shoulder-pain/","label":"NHS — Shoulder pain","sha256":"af67bdc7e4","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:hip-pain": {"url":"https://www.nhs.uk/symptoms/hip-pain/","label":"NHS — Hip pain in adults","sha256":"6b72213200","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:joint-pain": {"url":"https://www.nhs.uk/symptoms/joint-pain/","label":"NHS — Joint pain","sha256":"e384d9dda4","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:neck-pain": {"url":"https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/","label":"NHS — Neck pain","sha256":"490ea1127b","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:sciatica": {"url":"https://www.nhs.uk/conditions/sciatica/","label":"NHS — Sciatica","sha256":"acf2734ebe","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:ball-of-foot-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/","label":"NHS — Pain in the ball of the foot","sha256":"c18ad4237f","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:heel-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/heel-pain/","label":"NHS — Heel pain","sha256":"4db4984985","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:toe-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/toe-pain/","label":"NHS — Toe pain","sha256":"3eb390718e","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:top-of-foot-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/pain-in-the-top-of-the-foot/","label":"NHS — Pain in the top of the foot","sha256":"7040f23af1","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:bottom-of-foot-pain": {"url":"https://www.nhs.uk/symptoms/foot-pain/pain-in-the-bottom-of-the-foot/","label":"NHS — Pain in the bottom of the foot","sha256":"ca96d7b34e","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:palm-of-hand-pain": {"url":"https://www.nhs.uk/symptoms/hand-pain/pain-in-the-palm-of-the-hand/","label":"NHS — Pain in the palm of the hand","sha256":"4af804cedf","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:nail-problems": {"url":"https://www.nhs.uk/symptoms/nail-problems/","label":"NHS — Nail problems","sha256":"ce18ffb3a8","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:itchy-skin": {"url":"https://www.nhs.uk/symptoms/itchy-skin/","label":"NHS — Itchy skin","sha256":"8151d819dc","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:psoriasis": {"url":"https://www.nhs.uk/conditions/psoriasis/","label":"NHS — Psoriasis","sha256":"d968845995","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:acne": {"url":"https://www.nhs.uk/conditions/acne/","label":"NHS — Acne","sha256":"7b543f4dbf","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:rosacea": {"url":"https://www.nhs.uk/conditions/rosacea/","label":"NHS — Rosacea","sha256":"e381d21eb3","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:skin-picking-disorder": {"url":"https://www.nhs.uk/mental-health/conditions/skin-picking-disorder/","label":"NHS — Skin picking disorder","sha256":"5ade247ddc","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"},
  "nhs:nappy-rash": {"url":"https://www.nhs.uk/baby/caring-for-a-newborn/nappy-rash/","label":"NHS — Nappy rash","sha256":"77186e08d5","retrieved":"2026-07-15","licence":"OGL v3 · © Crown copyright","tag":"NHS"}
};

window.SCENARIOS = [
  {
    id: "choking-adult",
    title: { ar: "شخص بيختنق (بالغ)", en: "Someone is choking (adult)" },
    level: 5, who: ["الكل", "مواطن", "آباء وأمهات"], place: ["البيت", "برّه", "مطعم"], domain: "طوارئ",
    snapshot: { ar: "ماسك زوره، مش قادر يتكلم ولا يسعل ولا يتنفس، ولونه بيزرقّ. كل ثانية بتفرق.", en: "Can't speak, cough, or breathe; turning blue. Seconds count." },
    redFlags: ["إيده على زوره", "صوت صفير عالي أو مفيش صوت خالص", "الشفايف والوش بيزرقّوا"],
    do: [
      { t: "قف وراه. لو طفل، ممكن تحتاج تركع.", src: "mlp:choking-adult" },
      { t: "لُفّ ذراع واحدة حواليه عشان تسند جسمه من فوق، وميّله لقدّام لحد ما صدره يبقى موازي للأرض تقريبًا.", src: "mlp:choking-adult" },
      { t: "بكعب إيدك التانية اضربه ضربة قوية بين لوحي الكتف، وشوف الحاجة طلعت ولا لأ. كمّل لحد ما تبقى ٥ ضربات.", src: "mlp:choking-adult" },
      { t: "لو ماطلعتش: قف وراه ولُفّ دراعاتك حوالين وسطه، واعمل قبضة وحُط ناحية الإبهام فوق سُرّته بشوية وتحت عظمة الصدر.", src: "mlp:choking-adult" },
      { t: "امسك قبضتك بإيدك التانية بقوة، واشدّ شدّة سريعة لجوّه ولفوق.", src: "mlp:choking-adult" }
    ],
    dont: [
      { t: "ماتتدخّلش لو بيسعل بقوة، أو بيقدر يتكلّم، أو بيتنفّس كويس — سيبه يكحّ، بس فضل جنبه.", src: "mlp:choking-adult" },
      { t: "ماتفتحش بقّه بالعافية عشان تمسك الحاجة وتشدّها وهو واعي — اعمل ضرب ظهر وضغطات بطن.", src: "mlp:choking-adult" },
      "ماتسيبهوش لوحده تجري تجيب حاجة."
    ],
    whenWhy: { ar: "ضرب الظهر وضغط البطن بيرفعوا ضغط الهوا في الرئة فيقذفوا الجسم برّه؛ ولو فقد الوعي، ضغطات الصدر بتحافظ على وصول الدم والأكسجين للمخ لحد الإسعاف.", en: "" },
    how: { ar: "مثال حيّ: واحد بيتعشّى وفجأة وقف ومسك زوره. تقف جنبه وخلفه، تسنده بإيد، وبكعب الإيد التانية ٥ ضربات حاسمة بين الكتفين — بتعدّها بصوت: واحد… اتنين…", en: "" },
    whoToCall: [
      { label: "الإسعاف", number: "123", say: "قول: «حالة اختناق، الشخص مش بيتنفّس»، وبعدها العنوان بالظبط." },
      { label: "الطوارئ الموحّد", number: "112", say: "لو مش متأكد بأي رقم، اتصل بـ 112 وهيوصّلك." }
    ],
    whatToBuy: [{ item: "كورس إسعافات أولية معتمد", why: "أهم بكتير من أي أداة — بيخليك تتحرك بثقة" }, { item: "بوستر خطوات الاختناق", why: "علّقه في المطبخ" }],
    tech: ["فعّل Emergency SOS في موبايلك دلوقتي (الضغط المتكرر على زر الجانب)", "املأ Medical ID عشان الإسعاف يشوف بياناتك من القفل"],
    writeDown: ["اكتب أرقام الطوارئ على التلاجة", "خزّن رقم قريب تحت اسم «ICE» (في حالة الطوارئ) في الموبايل"],
    videosCommunities: [{ label: "الصليب الأحمر الأمريكي — إسعاف الاختناق", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking" }],
    othersPOV: { ar: "الناس حواليك غالبًا هيتجمّدوا من الصدمة — التجمّد ده طبيعي. عشان كده تعيّن حد بالاسم بدل ما تقول «حد يتصل».", en: "" },
    say: { toOthers: ["«انت اللي لابس أزرق — اتصل بالإسعاف ١٢٣ دلوقتي!»", "«افتحوا مكان، سيبوني أوصل له.»"], toSelf: ["«اهدا. خطوات معروفة. ٥ ضرب، ٥ ضغطات.»", "«أنا أقدر أساعد لحد ما الإسعاف يوصل.»"] },
    bodyLanguage: { ar: "قف ثابت جنبه وخلفه، ركبك مثنية شوية، حركتك حاسمة ومش متردّدة. صوتك واطي وواضح — الهدوء بيعدي للناس.", en: "" },
    rights: { ar: "الإسعاف الطارئ حقّك؛ ومساعدتك بحُسن نيّة في حالة طارئة تصرّف مسؤول — الأولوية إنك تتحرّك.", en: "" },
    variations: ["رضيع: ٥ ضرب ظهر + ٥ ضغطات صدر (مش بطن)، ووشّه لتحت على ساعدك.", "حامل أو شخص بدين جدًا: ضغطات صدر بدل ضغطات البطن.", "لوحدك بتختنق: اضغط بطنك على ظهر كرسي متين."],
    prevention: ["قطّع أكل الأطفال قطع صغيّرة", "ماتتكلمش وانت بتاكل بسرعة", "خلّي بالك من عظم السمك والمكسرات مع الصغار"],
    drill: { ar: "اتفرّج على فيديو الاختناق مرة كل شهر وتخيّل نفسك بتعمل الخطوات — التخيّل بيثبّت رد الفعل.", en: "" },
    after: { ar: "حتى لو الجسم طلع: لو اضطريت تعمل ضغطات بطن، لازم كشف طبي (احتمال إصابة داخلية). وطمّن الشخص، هيكون مرعوب.", en: "" },
    sources: [
      { srcId: "mlp:choking-adult", label: "MedlinePlus — Choking: adult or child over 1 year",
        url: "https://medlineplus.gov/ency/article/000049.htm", grade: "A · INGESTED",
        sha256: "319bba7b55", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Adult & Child Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "severe-bleeding",
    title: { ar: "نزيف شديد", en: "Severe (life-threatening) bleeding" },
    level: 5, who: ["الكل", "مواطن"], place: ["برّه", "الشغل", "البيت", "الطريق"], domain: "طوارئ",
    snapshot: { ar: "دم بيندفع أو بيغزر بغزارة ومش بيقف — خطر على الحياة خلال دقائق.", en: "Blood spurting/flowing and not stopping — life-threatening in minutes." },
    redFlags: ["الدم بينزل بسرعة وبيبلّل الهدوم/الأرض", "الشخص شاحب، بيرتجف، أو بيفقد التركيز"],
    do: [
      { t: "نيّمه على ضهره — ده بيقلّل فرصة إنه يغمى عليه لأنه بيزوّد وصول الدم للمخ. لو تقدر، ارفع مكان النزيف.", src: "mlp:bleeding" },
      { t: "شيل أي تراب أو حاجات سايبة شايفها في الجرح.", src: "mlp:bleeding" },
      { t: "اضغط بالظبط على الجرح بشاش معقّم أو قماشة نضيفة، أو حتى قطعة هدوم لو مفيش.", src: "mlp:bleeding" },
      { t: "فضل ضاغط لحد ما الدم يقف. أول ما يقف، لُفّ الرباط على الجرح كويس بشريط لاصق.", src: "mlp:bleeding" },
      { t: "لو الدم كمّل ونشّ من القماشة، ماتشيلهاش — حُطّ واحدة تانية فوقها.", src: "mlp:bleeding" }
      // NOTE: «كلّم الإسعاف ١٢٣» was removed from `do`. MedlinePlus says "call 911"; no ingested
      // document says 123. The Egyptian number is a LOCALIZATION decision, not a claim from a source,
      // so it lives in `whoToCall` (below) where it is labelled as such — never inside a cited step.
    ],
    dont: [
      { t: "ماتشيلش حاجة مغروسة في الجسم زي سكينة أو عود — شيلها ممكن يأذي أكتر ويزوّد النزيف.", src: "mlp:bleeding" },
      { t: "ماتبصّش على الجرح كل شوية تشوف الدم وقف ولا لأ — كل ما تسيبه في حاله، كل ما تقدر توقّف النزيف.", src: "mlp:bleeding" },
      { t: "ماتنكّشش في الجرح وماتشدّش أي حاجة مغروسة فيه — ده بيزوّد النزيف والأذى.", src: "mlp:bleeding" },
      { t: "ماتشيلش الرباط لو اتشبع دم — حُطّ واحد جديد فوقه.", src: "mlp:bleeding" }
    ],
    whenWhy: { ar: "الضغط المباشر المستمر بيدّي الجسم فرصة يكوّن جلطة توقّف الدم؛ رفع القماش بيكسر الجلطة ويرجّع النزيف.", en: "" },
    how: { ar: "مثال: جرح عميق في الساعد بينزف بغزارة. تلفّ تيشيرت وتضغط بكفّك بكل تقلك على الجرح، وتفضل ضاغط طول الوقت لحد الإسعاف — مترفعش خالص.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«نزيف شديد مش بيقف»، مكان الإصابة، والعنوان." }, { label: "الموحّد", number: "112", say: "لو مش متأكد." }],
    whatToBuy: [{ item: "شنطة إسعافات فيها شاش وضمادات", why: "الضغط المباشر أهم خطوة" }, { item: "تورنيكيه (رباط ضاغط)", why: "لنزيف الأطراف الخطير — بعد تدريب" }],
    tech: ["Emergency SOS + Medical ID فيه فصيلة دمك وحساسياتك", "شارك موقعك المباشر (Live Location) مع الإسعاف/قريب"],
    writeDown: ["اكتب فصيلة دمك والأمراض المزمنة في Medical ID", "مكان أقرب مستشفى فيها طوارئ"],
    videosCommunities: [{ label: "American Red Cross — Life-Threatening Bleeding", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external" }],
    othersPOV: { ar: "المصاب هيكون خايف وممكن يرفض إنك تضغط عشان بيوجعه — طمّنه إن الوجع ده هو اللي بينقذه.", en: "" },
    say: { toOthers: ["«اضغط هنا بكل قوتك ومترفعش، أنا هكلّم الإسعاف.»"], toSelf: ["«الضغط المستمر بيوقّف الدم. أنا فاضل ثابت.»"] },
    bodyLanguage: { ar: "انزل بتقل جسمك كله على الجرح، إيدك مستقرّة، صوتك ثابت — طمأنينتك بتقلّل صدمة المصاب.", en: "" },
    rights: { ar: "التدخّل لإنقاذ حياة في خطر تصرّف مسؤول؛ الأولوية للحركة السريعة.", en: "" },
    variations: ["طفل: نفس المبدأ بضغط أخف وحسب حجمه.", "جسم غاطس في الجرح (سكينة/زجاج): ماتشيلهوش — اضغط حواليه.", "لوحدك ومصاب: اضغط بكل تقلك واطلب نجدة بصوت عالي."],
    prevention: ["قفازات وأدوات حادّة مأمّنة في الشغل والمطبخ", "اعرف مكان شنطة الإسعافات في البيت والعربية"],
    drill: { ar: "اتمرّن على لفّ ضمادة ضغط على ساعدك مرة، عشان إيدك تعرف الحركة.", en: "" },
    after: { ar: "لازم كشف طبي حتى لو الدم وقف — النزيف الداخلي مايبانش. راقب علامات الصدمة (شحوب، دوخة).", en: "" },
    // The tourniquet steps were removed: the ingested MedlinePlus bleeding article does not contain
    // them. A level-5 instruction that no fetched document supports does not stay in the card.
    sources: [
      { srcId: "mlp:bleeding", label: "MedlinePlus — Bleeding", url: "https://medlineplus.gov/ency/article/000045.htm",
        grade: "A · INGESTED", sha256: "5a2a6134fb", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Bleeding (Life-Threatening External)", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "house-fire",
    title: { ar: "حريق في البيت", en: "A fire starts at home" },
    level: 5, who: ["الكل", "أسرة", "آباء وأمهات"], place: ["البيت", "جوّه"], domain: "طوارئ",
    snapshot: { ar: "دخان أو نار بتنتشر — القرار الوحيد الصح: اخرج فورًا، ومتدخلش تاني.", en: "Smoke or flames spreading — the only right move: get out, and never go back in." },
    redFlags: ["ريحة دخان أو صفّارة إنذار الدخان", "باب سخن لما تلمسه — نار ورا الباب"],
    do: [
      { t: "انزل على الأرض وازحف واطي تحت الدخان لحد المخرج — الدخان التقيل والغازات السامّة بتتجمّع فوق ناحية السقف.", src: "ready:home-fires" },
      { t: "قبل ما تفتح أي باب، المس الأكرة والباب. لو أي حاجة فيهم سخنة، أو في دخان طالع من حوالين الباب، سيبه مقفول.", src: "ready:home-fires" },
      { t: "لو هتفتح باب، افتحه بالراحة، وكون مستعد تقفله بسرعة لو لقيت دخان تقيل أو نار.", src: "ready:home-fires" },
      { t: "لو ماقدرتش توصل لحد محتاج مساعدة: اخرج من البيت وكلّم المطافي، وقولّهم مكانه بالظبط.", src: "ready:home-fires" },
      { t: "لو ماقدرتش تخرج: اقفل الباب، وسدّ الفتحات والشقوق حواليه بقماش أو شريط لاصق عشان الدخان مايدخلش، وكلّم المطافي.", src: "ready:home-fires" },
      { t: "لو في حيوانات محبوسة جوّه، قول لرجال المطافي فورًا.", src: "ready:home-fires" }
    ],
    dont: [
      "ماترجعش تاني عشان أي حاجة — النار بتتضاعف في ثواني.",
      "ماتستخدمش الأسانسير.",
      "ماتختبيش تحت السرير أو في الدولاب."
    ],
    // Ready.gov says "call 9-1-1 or the fire department". The number is US-specific (GATE 6), so the
    // ACTION is translated and the number is dropped — Egypt's 180 lives in whoToCall, labelled.
    // The three `dont` lines are not in the source and render with a ⚠ rather than a false citation.
    whenWhy: { ar: "الدخان بيقتل أسرع من النار (اختناق)؛ عشان كده الزحف تحته والخروج السريع أهم من إطفاء أي حاجة. الباب المقفول والفوطة المبلولة بيكسبوك دقائق.", en: "" },
    how: { ar: "مثال: صحيت على ريحة دخان بالليل. ماتشغّلش النور، انزل من السرير على الأرض، ازحف للباب، المسه — لو بارد افتحه بحذر واخرج على نقطة التجمّع اللي متفقين عليها.", en: "" },
    whoToCall: [{ label: "المطافي / الحماية المدنية", number: "180", say: "«حريق»، العنوان بالظبط، والدور، وهل في حد محتجز." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كاشف دخان (Smoke detector)", why: "بينبّهك بدري — أهم أداة نجاة في البيت" }, { item: "طفّاية حريق صغيرة + بطانية حريق", why: "لحرائق صغيرة جدًا بس، والأولوية للخروج" }],
    tech: ["ركّب كاشف دخان وجرّب البطارية كل شهر", "Emergency SOS جاهز؛ خزّن ١٨٠ في المفضّلة"],
    writeDown: ["ارسم خطة هروب فيها مخرجين لكل أوضة", "حدّد نقطة تجمّع برّه واتفقوا عليها كعيلة"],
    videosCommunities: [{ label: "American Red Cross — If a Fire Starts", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html" }, { label: "NFPA — Home Fire Escape Plan", url: "https://www.nfpa.org/education-and-research/home-fire-safety/escape-planning" }],
    othersPOV: { ar: "الأطفال بيتخبّوا من الخوف بدل ما يهربوا — نادي عليهم بالاسم وطمّنهم وانت بتطلّعهم.", en: "" },
    say: { toOthers: ["«كلنا برّه دلوقتي — سيبوا كل حاجة!»", "«نتجمّع قدّام البيت عند العمود.»"], toSelf: ["«الخروج أهم من أي حاجة. أنا وعيلتي بس.»"] },
    bodyLanguage: { ar: "اتحرّك واطي وسريع، إمسك إيد اللي معاك، صوتك عالي وحازم عشان يوصل وسط الفوضى والدخان.", en: "" },
    rights: { ar: "الحماية المدنية مسؤولة عن الإنقاذ — بلّغ بدري وطلّع الناس، وسيب الإطفاء للمحترفين.", en: "" },
    variations: ["أدوار عليا: اعرف السلم مسبقًا؛ الأسانسير ممنوع.", "كبار سن/ذوي إعاقة: خطّة خروج خاصة وحد مسؤول عنهم.", "هدومك ولّعت: قف — اقعد — اتقلّب (Stop, Drop, Roll)."],
    prevention: ["ماتسيبش الطبخ على النار من غير رقابة", "شيّك على وصلات الكهربا والغاز", "ماتنمّش والسجاير ولاعة"],
    drill: { ar: "اعملوا بروفة هروب كعيلة مرة كل ٦ شهور بالليل — الأطفال يعرفوا المخرج وهم نعسانين.", en: "" },
    after: { ar: "ماترجعش لحد ما الحماية المدنية تقول البيت آمن؛ الدخان المتبقّي سام. كشف طبي لأي حد استنشق دخان.", en: "" },
    sources: [
      { srcId: "ready:home-fires", label: "Ready.gov (FEMA) — Home Fires", url: "https://www.ready.gov/home-fires",
        grade: "A · INGESTED", sha256: "e7c4c08241", retrieved: "2026-07-10", licence: "public domain (FEMA)",
        verified: "machine — every do step extracted from these bytes",
        attribution: "Content source: Ready.gov" },
      { label: "American Red Cross — If a Fire Starts", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" },
      { label: "NFPA — Escape Planning", url: "https://www.nfpa.org/education-and-research/home-fire-safety/escape-planning", grade: "C · CITE-ONLY" }
    ]
  },
  {
    id: "friend-suicidal",
    title: { ar: "صاحبك بيقول إنه عايز يموت", en: "A friend says they want to die" },
    level: 5, who: ["الكل", "أصدقاء", "أسرة"], place: ["أي مكان", "أونلاين"], domain: "الصحة النفسية",
    snapshot: { ar: "حد قريب بيلمّح أو بيقول صراحة إنه مش عايز يعيش. لحظة فارقة — وجودك بيفرق.", en: "Someone hints at or says they don't want to live. Your presence matters." },
    redFlags: ["كلام زي «ريّحت» أو «هختفي» أو «الدنيا أحسن من غيري»", "بيوزّع أغراضه، بينعزل، تغيّر مفاجئ للهدوء بعد ضيق"],
    do: [
      { t: "اسأله مباشرة: هو بيفكّر يقتل نفسه؟", src: "mlp:suicide" },
      { t: "خلّيه في أمان: اعرف لو عنده خطة، وبعّد عنه أي حاجة ممكن يستخدمها عشان يأذي نفسه.", src: "mlp:suicide" },
      { t: "كون موجود معاه. اسمعه بتركيز، واعرف هو بيفكّر في إيه وحاسس بإيه.", src: "mlp:suicide" },
      { t: "ساعده يوصل لمصادر مساعدة تقدر تسانده.", src: "mlp:suicide" },
      { t: "فضل على تواصل معاه. إن إنك تفضل قريب منه بعد الأزمة بيفرق فعلًا.", src: "mlp:suicide" }
    ],
    dont: [
      "ماتوعدش إنك تكتم السر لو حياته في خطر.",
      "ماتقولش «ده كلام فارغ» أو «فكّر في اللي عندك».",
      "ماتدخلش في جدال إنه غلط إنه حاسس كده."
    ],
    // GATE 6 — the ingested MedlinePlus page routes to the US 988 Lifeline, Lifeline Chat and the
    // US Veterans Crisis Line (988 then 1; text 838255). NONE of those reach an Egyptian in crisis.
    // The ACTION ("help them connect to resources") is translated; the US numbers are dropped.
    // Egypt's verified mental-health line — 16328, displayed on the Ministry of Health's own portal
    // (mentalhealth.mohp.gov.eg) — is carried in whoToCall below, where a localization decision belongs.
    // The three `dont` lines are not in the source; they render with a ⚠ instead of a false citation.
    whenWhy: { ar: "الكلام الصريح عن الانتحار بيفتح باب للراحة والمساعدة — الأسطورة إنه «بيحطّ الفكرة» غلط. الوجود وعدم الحكم بيقلّلوا الخطر ويكسبوا وقت للمساعدة المختصّة.", en: "" },
    how: { ar: "مثال: صاحبك بعتلك «تعبت ومش لاقي معنى». ترد: «أنا سامعك، وشكراً إنك قلتلي. تقصد إنك بتفكّر تأذي نفسك؟ أنا معاك دلوقتي.» — بهدوء، من غير فزع.", en: "" },
    whoToCall: [
      { label: "الخط الساخن للصحة النفسية (مصر)", number: "16328", say: "الأمانة العامة للصحة النفسية — دعم مجاني وسرّي ٢٤ ساعة." },
      { label: "الإسعاف (خطر حالّ على الحياة)", number: "123", say: "لو في محاولة أذى فعلية أو خطر فوري." }
    ],
    whatToBuy: [{ item: "مفيش حاجة تتشترى", why: "الأهم وجودك ووقتك والإصغاء" }],
    tech: ["احفظ ١٦٣٢٨ في موبايله وموبايلك", "شارك موقعك معاه لو محتاج تلحقه"],
    writeDown: ["اكتبوا مع بعض «خطة أمان»: مين يتصل بيه، الأماكن الآمنة، الأسباب اللي تخليه يكمّل", "أرقام الدعم في مكان واضح"],
    videosCommunities: [{ label: "988 Lifeline — Help Someone Else", url: "https://988lifeline.org/help-someone-else/" }, { label: "NHS — Help for suicidal thoughts", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/" }],
    othersPOV: { ar: "هو غالبًا حاسس إنه عبء وإن محدش هيفهمه — لما تسمع من غير حكم، ده بيكسر العزلة دي.", en: "" },
    say: { toOthers: ["«أنا معاك، ومش هسيبك. تعالى نطلب مساعدة مع بعض.»", "«اللي بتحسّه تقيل، بس مش هتفضل كده للأبد.»"], toSelf: ["«مهمّتي إني أسمع وأوصّله لمساعدة، مش إني أحلّ كل حاجة.»", "«الهدوء بتاعي بيطمّنه.»"] },
    bodyLanguage: { ar: "اقعد على نفس مستواه، جسمك مفتوح ومايل ناحيته، تواصل بالعين هادي، سيب سكتات — الصمت المطمئن مسموح.", en: "" },
    rights: { ar: "لو في خطر حالّ على الحياة، طلب المساعدة الطارئة أهم من الخصوصية. الدعم النفسي حقّ.", en: "" },
    variations: ["أونلاين: خُد الكلام بجدّية، حاول توصله بأرقام بلده، وابلّغ منصّة الدعم.", "لو هو رافض المساعدة: فضل موجود، وكرّر عرض المساعدة بلطف.", "لو انت اللي بتحسّ كده: اتصل بـ ١٦٣٢٨ دلوقتي — انت مستاهل مساعدة."],
    prevention: ["اسأل أصحابك «إزيك بجد؟» بانتظام", "اتعلّم علامات الخطر", "قلّل وصمة الكلام عن الصحة النفسية حواليك"],
    drill: { ar: "تخيّل نفسك بتسأل السؤال الصعب بهدوء — التمرين الذهني بيسهّله لو حصل بجد.", en: "" },
    after: { ar: "بعد الأزمة: ساعده يكمّل مع مختص، وفضل على تواصل. اهتمّ بنفسك انت كمان — ده تقيل عليك.", en: "" },
    sources: [
      { srcId: "mlp:suicide", label: "MedlinePlus — Suicide", url: "https://medlineplus.gov/suicide.html",
        grade: "A · INGESTED", sha256: "6e83a60d27", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — the five actions (ask · keep safe · be there · connect · stay connected) extracted from these bytes",
        note: "Its crisis numbers are US-only (988, Lifeline Chat, Veterans 838255) and were NOT carried over — see GATE 6 note above.",
        attribution: "Information from MedlinePlus.gov" },
      { label: "الأمانة العامة للصحة النفسية (مصر) — 16328", url: "https://mentalhealth.mohp.gov.eg/mental/web/en",
        grade: "A · EGYPT — hotline verified", verified: "the Ministry's own portal displays «Hot line 16328»" },
      { label: "988 Suicide & Crisis Lifeline — Help Someone Else", url: "https://988lifeline.org/help-someone-else/",
        grade: "C · CITE-ONLY", verified: "copyrighted; US-only number — model guidance, never the actionable line for Egypt" },
      { label: "NHS — Help for suicidal thoughts", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/", grade: "C · CITE-ONLY" }
    ]
  },
  {
    id: "panic-attack",
    title: { ar: "نوبة هلع (بانيك أتاك)", en: "A panic attack" },
    level: 3, who: ["الكل", "طلاب", "موظفين"], place: ["أي مكان", "الشغل", "المواصلات"], domain: "الصحة النفسية",
    snapshot: { ar: "قلب بيدق بسرعة، ضيق نفس، رعشة، وإحساس إن حاجة وحشة هتحصل. مرعب — بس مش خطر، وبيعدّي.", en: "Racing heart, tight breath, terror — frightening but not dangerous, and it passes." },
    redFlags: ["ضربات قلب سريعة فجأة", "إحساس اختناق أو دوخة", "خوف من فقدان السيطرة — بيبدأ ويوصل قمّته في دقايق"],
    do: [
      { t: "افتكر إن دي نوبة هلع — مش خطر على حياتك، وهتعدّي.", src: "nhs:panic-disorder" },
      { t: "افضل مكانك لو ينفع.", src: "nhs:panic-disorder" },
      { t: "اتنفّس بعمق لحد بطنك، شهيق من مناخيرك وزفير من بقّك، وعدّ من ١ لـ ٥ في الشهيق ومن ١ لـ ٥ في الزفير.", src: "nhs:breathing-exercise" },
      { t: "ركّز على صور إيجابية ومريحة ومسالمة.", src: "nhs:panic-disorder" },
      { t: "لو النوبات بتتكرّر أو بتأثّر على حياتك، اطلب مساعدة مختص.", src: "nhs:panic-disorder" }
    ],
    dont: ["ماتحاربش الإحساس أو تتنفّس بسرعة (فرط تنفّس بيزوّده)", "ماتهربش من المكان بشكل دائم — ده بيعلّم المخ إنه خطر", "ماتقولش لنفسك «أنا بتجنّن» — ده تفسير غلط ومخيف"],
    whenWhy: { ar: "التنفّس البطيء العميق بيساعد جسمك يهدا؛ وإنك تفتكر إن النوبة مش خطر على حياتك وهتعدّي بيكسر حلقة الخوف من الخوف.", en: "" },
    how: { ar: "مثال: في المترو حسّيت قلبك بيطير ونفسك بيضيق. تفضل مكانك وتسند على حاجة، تعدّ شهيق من ١ لـ ٥ وزفير من ١ لـ ٥، وتفتكر إنها هتعدّي وتركّز على صورة مريحة — لحد ما الموجة تعدّي.", en: "" },
    whoToCall: [{ label: "الخط الساخن للصحة النفسية (مصر)", number: "16328", say: "لو النوبات بتتكرّر أو محتاج دعم — مجاني وسرّي." }],
    whatToBuy: [{ item: "مفيش أداة ضرورية", why: "التنفّس والتهدئة ببلاش" }, { item: "بطاقة صغيّرة فيها خطوات التهدئة", why: "تقراها وقت النوبة" }],
    tech: ["تطبيقات تنفّس/تأمل تدّي إيقاع للشهيق والزفير", "سجّل لنفسك رسالة صوتية مطمئنة تسمعها وقت النوبة"],
    writeDown: ["اكتب «دي نوبة هلع وهتعدّي» في ورقة/الموبايل", "دوّن إمتى بتيجي عشان تعرف المحفّزات"],
    videosCommunities: [{ label: "NHS — Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" }, { label: "Mind — Panic attacks", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/panic-attacks/" }],
    othersPOV: { ar: "لو حد قدّامك بيتعرّض لنوبة: اهدا، قوله «أنا معاك، ده هيعدّي»، ونفّس معاه ببطء — ماتزوّدش الزحمة حواليه.", en: "" },
    say: { toOthers: ["(لو بتساعد حد) «أنا معاك، اتنفّس معايا بالراحة، ده هيعدّي.»"], toSelf: ["«دي موجة، وهتنزل. أنا آمن.»", "«جسمي بيبالغ في إنذار — مفيش خطر حقيقي.»"] },
    bodyLanguage: { ar: "نزّل كتافك، رخّي إيديك، ابعد عن الزحمة لو تقدر، ركّز على زفير طويل — الجسم المرتخي بيبعت إشارة أمان للمخ.", en: "" },
    rights: { ar: "لك حقّ تاخد لحظة تهدأ في الشغل/الدراسة؛ الصحة النفسية جزء من صحتك.", en: "" },
    variations: ["أول نوبة في حياتك ومعاها ألم صدر حقيقي/تنميل إيد: اكشف طبي لاستبعاد القلب.", "طالب وقت امتحان: خطوات التنفّس والتهدئة قبل ما تدخل.", "بتتكرّر كتير: ده «اضطراب هلع» بيتعالج — كلّم مختص."],
    prevention: ["نوم كفاية وتقليل الكافيين", "تمارين تنفّس بانتظام مش وقت النوبة بس", "تعرّف على محفّزاتك"],
    drill: { ar: "اتمرّن على تنفّس البطن (عدّ ١-٥ شهيق و١-٥ زفير) دقيقة كل يوم وانت مرتاح — عشان جسمك يعرفه وقت الشدّة.", en: "" },
    after: { ar: "بعد ما تهدأ: اشرب ميّه، خُد الأمور ببطء، وماتقسّاش على نفسك. لو بتأثّر على يومك، دوّر على دعم مختص.", en: "" },
    sources: [
      { label: "NHS — Panic disorder (what to do during a panic attack)", url: "https://www.nhs.uk/mental-health/conditions/panic-disorder/", srcId: "nhs:panic-disorder", sha256: "df881766ec", grade: "A · مرجع صحي رسمي" },
      { label: "NHS — Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/", srcId: "nhs:breathing-exercise", sha256: "2610fab8b4", grade: "A · مرجع صحي رسمي" },
      { label: "Mind — Panic attacks", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/panic-attacks/", grade: "A" }
    ]
  },
  {
    id: "collapse-cpr",
    title: { ar: "شخص وقع فاقد الوعي (إنعاش قلبي)", en: "Someone collapses / CPR" },
    level: 5, who: ["الكل", "مواطن"], place: ["أي مكان", "برّه", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "واحد وقع، مش بيرد ومش بيتنفّس طبيعي. المخ محتاج دم خلال دقايق — الضغط على الصدر بينقذ.", en: "" },
    redFlags: ["مش بيرد لما تنده أو تخبط على كتفه", "مفيش نفس، أو نفس متقطّع زي الشخير"],
    do: [
      { t: "أول حاجة: اتأكد إنك انت والمصاب مش في أي خطر. لو في خطر، أمّن المكان الأول.", src: "nhs:after-accident" },
      { t: "لو فاقد الوعي ومش بيتنفّس طبيعي: كلّم الإسعاف ١٢٣ وابدأ الإنعاش على طول.", src: "nhs:cpr" },
      { t: "سيب التليفون على السبيكر — موظّف الإسعاف هيديك تعليمات إنقاذ الحياة وانت بتضغط.", src: "nhs:cpr" },
      { t: "اركع جنبه، وحُط كعب إيدك في نص الصدر، والإيد التانية فوقها، وشبّك صوابعك.", src: "nhs:cpr" },
      { t: "خلّي كتافك فوق إيديك مباشرة، واضغط لتحت بتقل جسمك (مش بذراعك بس) من ٥ لـ ٦ سم.", src: "nhs:cpr" },
      { t: "كرّر الضغطات بمعدّل من ١٠٠ لـ ١٢٠ ضغطة في الدقيقة، لحد ما الإسعاف يوصل أو تعجز تكمّل.", src: "nhs:cpr" }
    ],
    dont: [
      { t: "ماتسيبش صدره مضغوط — بعد كل ضغطة سيبه يرجع لوضعه الطبيعي وإيدك فاضلة مكانها.", src: "nhs:cpr" },
      { t: "ماتضغطش بذراعك لوحدها — من غير تقل جسمك مش هتوصل لعمق ٥ سم.", src: "nhs:cpr" },
      { t: "ماتبطّلش ضغط عشان تجري تدوّر على حاجة — الإسعاف على السبيكر بيوجّهك وانت بتضغط.", src: "nhs:cpr" }
    ],
    whenWhy: { ar: "الضغط بيحرّك الدم للمخ والقلب لحد ما الإسعاف يوصل. لو الشخص فاقد الوعي ومش بيتنفّس طبيعي، الإنعاش يبدأ فورًا — من غير انتظار.",
      en: "Compressions keep blood moving to the brain and heart until help arrives. If someone is unconscious and not breathing normally, call the ambulance and start CPR straight away." },
    how: { ar: "مثال حيّ: راجل وقع في الشارع ومش بيتنفّس. تتأكد الشارع آمن، تركع جنبه، تكلّم ١٢٣ وتسيب السبيكر شغّال، وتبدأ ضغطات ثابتة من ٥ لـ ٦ سم بإيقاع سريع من غير ما تقف.",
      en: "A man collapses in the street and is not breathing. Check the scene is safe, kneel beside him, call 123 on speakerphone, and begin steady compressions 5–6cm deep at 100–120 a minute without stopping." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«شخص فاقد الوعي مش بيتنفّس» + العنوان بالظبط." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كورس CPR عملي معتمد", why: "إيدك تتعلّم العمق والإيقاع الصح" }, { item: "معرفة أماكن أجهزة AED القريبة", why: "المولات والنوادي بيبقى فيها" }],
    tech: ["فعّل Emergency SOS", "خلي حد يكلّم الإسعاف على السبيكر عشان إيديك تفضل على الصدر"],
    writeDown: ["أرقام الطوارئ في مكان واضح", "أماكن أقرب أجهزة AED حواليك"],
    videosCommunities: [{ label: "American Red Cross — Hands-Only CPR", url: "https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr" }],
    othersPOV: { ar: "الناس هتتفرّج وتتجمّد — عيّن كل واحد بمهمة بالاسم عشان الكل يتحرّك.", en: "" },
    say: { toOthers: ["«انت — كلّم الإسعاف ١٢٣ وحطّه على السبيكر!»", "«انت — اجري هات جهاز AED من الاستقبال!»"], toSelf: ["«اضغط بقوة وبسرعة، وماأوقفش.»"] },
    bodyLanguage: { ar: "اركع جنبه، ذراعك مفرودة عمودية على صدره، تقل جسمك كله على إيدك، وإيقاع ثابت — مش سرعة عصبية.", en: "" },
    rights: { ar: "التدخّل لإنقاذ حياة في خطر تصرّف مسؤول؛ الأولوية للضغط والاتصال السريع.", en: "" },
    variations: [
      { t: "طفل فوق سنة: ٥ نفخات إنقاذ الأول، وبعدين اضغط بكعب إيد واحدة ٥ سم (تلت عمق الصدر) — استعمل إيدين لو ماوصلتش.", src: "nhs:cpr" },
      { t: "رضيع تحت سنة: ٥ نفخات الأول، وبعدين اضغط بصباعين في نص الصدر ٤ سم (تلت عمق الصدر).", src: "nhs:cpr" },
      { t: "لو بتعمل نفس صناعي: ٣٠ ضغطة وبعدها نفختين، وكرّر لحد ما ييجي الإسعاف.", src: "nhs:cpr" },
      { t: "لو متدربتش على النفس الصناعي: ضغطات الصدر لوحدها (Hands-only) بتكفي.", src: "nhs:cpr" }
    ],
    prevention: ["اتعلّم CPR عملي", "اعرف أماكن أجهزة AED في الأماكن اللي بتروحها"],
    drill: { ar: "خُد كورس CPR عملي مرة على الأقل — التمرين على المانيكان بيثبّت العمق والإيقاع في إيدك.", en: "Take a hands-on CPR course at least once; practising on a manikin fixes the depth and rhythm in your hands." },
    after: { ar: "سلّم للإسعاف بمعلومة: الشخص وقع إمتى، وكام دقيقة عملت ضغط. حتى لو رجع يتنفّس لازم مستشفى.", en: "Hand over to the ambulance with facts: when they collapsed, how long you compressed. Even if breathing returns, they need hospital." },
    sources: [
      { srcId: "nhs:cpr", label: "NHS — CPR", url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/",
        grade: "A · INGESTED", sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — fetched, hashed, every step extracted from these bytes" },
      { srcId: "nhs:after-accident", label: "NHS — After an accident", url: "https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/",
        grade: "A · INGESTED", sha256: "36e83fbdbf", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — grounds the scene-safety step" },
      { label: "American Red Cross — Hands-Only CPR", url: "https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "drowning",
    title: { ar: "إنقاذ غريق", en: "Drowning rescue" },
    level: 5, who: ["الكل", "آباء وأمهات"], place: ["بحر", "مسبح", "ترعة"], domain: "طوارئ",
    snapshot: { ar: "حد بيغرق — والغرق بيبقى صامت وسريع. القاعدة اللي بتنقذ الاتنين: «مدّ أو ارمي، وماتنزلش».", en: "" },
    redFlags: ["راس بتطلع وتنزل وفمه عند سطح الميّه", "مفيش صوت استغاثة — الغرق الحقيقي صامت", "بيبص لفوق وبيحاول يعوم من غير تقدّم"],
    do: [
      { t: "لو تقدر توصله بدراعك أو بحاجة طويلة، اعمل كده.", src: "mlp:drowning" },
      { t: "مدّله عصاية طويلة أو فرع شجرة، أو ارميله حبل مربوط في حاجة بتعوم.", src: "mlp:drowning" },
      { t: "لو انت متدرّب على الإنقاذ، انزل فورًا — بس بشرط تكون متأكد إنك مش هتتأذى.", src: "mlp:drowning" },
      { t: "أول ما يطلع: اسعف أي إصابات خطيرة تانية، وخلّيه هادي وثابت مكانه، ودوّر على مساعدة طبية فورًا.", src: "mlp:drowning" },
      { t: "شيل عنه الهدوم المبلولة الساقعة وغطّيه بحاجة دافية لو ينفع.", src: "mlp:drowning" },
      { t: "ممكن يكحّ ويتعبه النفس أول ما يرجع يتنفّس — فضل جنبه وطمّنه لحد ما المساعدة توصل.", src: "mlp:drowning" }
      // «كلّم الإسعاف ١٢٣» is NOT here on purpose. MedlinePlus says "call 911" — a foreign number.
      // The Egyptian equivalent is a localization decision, not a claim from a source, so it lives
      // in whoToCall (below) where it is labelled as such — never inside a cited step.
    ],
    dont: [
      { t: "ماتحطّش نفسك في خطر.", src: "mlp:drowning" },
      { t: "ماتنزلش الميّه ولا تمشي على تلج إلا لو متأكد تمامًا إنه أمان.", src: "mlp:drowning" },
      { t: "ماتحاولش تنقذه سباحة بنفسك إلا لو متدرّب على الإنقاذ المائي وتقدر تعمل كده من غير ما تعرّض نفسك للخطر.", src: "mlp:drowning" },
      { t: "ماتنزلش في ميّه هايجة أو مضطربة ممكن تأذيك.", src: "mlp:drowning" }
    ],
    whenWhy: { ar: "معظم اللي بيموتوا وهم بينقذوا كانوا غير مدرّبين ونزلوا الميّه — عشان كده «ماتنزلش». والإنعاش فور الخروج بيحافظ على المخ.", en: "" },
    how: { ar: "مثال حيّ: طفل بيغرق في المسبح. تنبطح على البَر، تمدّ إيده أو فوطة يمسكها وتسحبه، وانت متكئ لورا عشان ماينزلكش — وحد بيكلّم الإسعاف.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حالة غرق»، المكان بالظبط، وهل الشخص طلع وبيتنفّس ولا لأ." }, { label: "الحماية المدنية/النجدة", number: "180", say: "لو محتاج إنقاذ نهري/بحري." }],
    whatToBuy: [{ item: "طوق/عوّامة نجاة بحبل قرب أي مسبح أو شاطئ", why: "أداة الإنقاذ الآمن الأساسية" }, { item: "حبل", why: "للرمي والسحب من بعيد" }],
    tech: ["Emergency SOS", "شارك موقعك المباشر — خصوصًا في مكان مفتوح أو شاطئ"],
    writeDown: ["مكان أدوات الإنقاذ على المسبح/الشاطئ", "أقرب نقطة إسعاف"],
    videosCommunities: [{ label: "American Red Cross — Water Safety", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html" }],
    othersPOV: { ar: "الغريق في ذعر كامل وهيتعلّق بأي حاجة بكل قوته — عشان كده تديله جسم يمسكه، مش إيدك مباشرة.", en: "" },
    say: { toOthers: ["«امسك ده! أنا هشدّك!»", "«انت — كلّم الإسعاف ١٢٣ دلوقتي!»"], toSelf: ["«مدّ أو ارمي — أنا ماأنزلش.»"] },
    bodyLanguage: { ar: "اثبت أو انبطح على البَر، اتكئ لورا وانت بتسحب عشان ماتقعش، صوتك عالي وواضح عشان توجّه الغريق.", en: "" },
    rights: { ar: "الأولوية للإنقاذ الآمن — إنقاذ يحطّك انت في خطر مش بينفع حد.", en: "" },
    variations: ["طفل: راقبه دايمًا عن قرب — الغرق بيحصل في ثواني وفي ميّه ضحلة جدًا.", "لوحدك: اعمل دقيقتين إنقاذ/إنعاش الأول ثم كلّم الإسعاف لو مفيش حد.", "بحر بأمواج/تيّار: بلّغ المنقذ فورًا، ماتنزلش وراه."],
    prevention: ["ماتسبش الأطفال لوحدهم قرب أي ميّه ولو لحظة", "تعليم السباحة", "أطواق نجاة وأسوار للمسابح"],
    drill: { ar: "كل ما تروح مكان فيه ميّه: حدّد فورًا مكان أقرب أداة عوم وأقرب حاجة تمدّها.", en: "" },
    after: { ar: "مستشفى إجباري بعد أي غرق حتى لو الشخص بيتنفّس كويس؛ راقب الكحّة وضيق النفس لعدة ساعات.", en: "" },
    // NOTE: the old card told the rescuer to "pull him to shore". No ingested document says that,
    // and MedlinePlus's own DO-NOT list forbids entering the water untrained. Removed.
    sources: [
      { srcId: "mlp:drowning", label: "MedlinePlus — Non-fatal drowning", url: "https://medlineplus.gov/ency/article/000046.htm",
        grade: "A · INGESTED", sha256: "de62c2aa81", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Water Safety (Reach or Throw, Don't Go)", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "burn",
    title: { ar: "حرق (حرارة أو سوائل مغلية)", en: "Burn / scald" },
    level: 4, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["البيت", "مطبخ"], domain: "طوارئ",
    snapshot: { ar: "جلد اتحرق من نار أو ميّه/زيت سخن. التبريد بميّه جارية بسرعة بيقلّل الضرر والألم بشكل كبير.", en: "" },
    redFlags: ["احمرار وألم وفقاقيع", "حرق كبير أو عميق", "حرق في الوش/اليد/المفصل/الأعضاء الحساسة، أو عند طفل/كبير سن = خطر أعلى"],
    do: [
      { t: "سيّب ميّه ساقعة تجري على مكان الحرق، أو انقعه في ميّه ساقعة — مش ميّه بتلج.", src: "mlp:burns" },
      { t: "هدّي الشخص وطمّنه.", src: "mlp:burns" },
      { t: "بعد ما تغسله أو تنقعه، غطّي الحرق بشاش معقّم ناشف أو قماشة نضيفة.", src: "mlp:burns" },
      { t: "احمي الحرق من أي ضغط أو احتكاك.", src: "mlp:burns" },
      { t: "لو الهدوم بتولّع: لُفّ الشخص في حاجة تخينة زي بطانية أو معطف صوف أو سجادة عشان تطفّي النار.", src: "mlp:burns" }
    ],
    dont: [
      { t: "ماتشيلش الهدوم المحروقة اللي لازقة في الجلد.", src: "mlp:burns" },
      { t: "ماتحطّش زيت ولا زبدة ولا تلج ولا أدوية ولا كريم ولا أي وصفة بيتية على حرق شديد.", src: "mlp:burns" },
      { t: "ماتتنفّسش ولا تنفخ ولا تكحّ على الحرق.", src: "mlp:burns" },
      { t: "ماتعبثش بالفقاقيع ولا بالجلد الميّت.", src: "mlp:burns" },
      { t: "ماتديش الشخص أي حاجة بالبق لو الحرق شديد.", src: "mlp:burns" }
    ],
    // The old card prescribed "cool running water for 20 minutes (not less than 15)". No ingested
    // document states that duration — it came from recall. MedlinePlus says cool water / cool bath
    // without a time. The unsupported number is removed rather than kept with a citation it lacks.
    whenWhy: { ar: "التبريد بيوقف الحرارة من إنها تكمّل تحرق طبقات الجلد، وبيقلّل الألم. التلج بيجمّد الأنسجة، والدهون بتحبس الحرارة جوّه.", en: "" },
    how: { ar: "مثال حيّ: زيت سخن اتكبّ على إيد طفل. تشيله بعيد، تحطّ إيده تحت الحنفية فاتر ٢٠ دقيقة وانت بتطمّنه، وبعدين تغطّيها بكلينج فيلم وتروح الطوارئ.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو حرق كبير/عميق، أو في الوش/الأعضاء الحساسة." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "كلينج فيلم + شنطة إسعافات", why: "تغطية نضيفة ومانعة للعدوى" }, { item: "كاشف دخان وطفّاية", why: "الوقاية من الحريق أصلًا" }],
    tech: ["Emergency SOS", "صوّر الحرق بعد التبريد عشان الدكتور يتابع تطوّره"],
    writeDown: ["أرقام الطوارئ + أقرب مستشفى فيها قسم حروق"],
    videosCommunities: [{ label: "British Red Cross — Burns", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns" }, { label: "NHS — Burns and scalds treatment", url: "https://www.nhs.uk/conditions/burns-and-scalds/treatment/" }],
    othersPOV: { ar: "الطفل هيتخض من الألم وصوت الميّه — طمّنه واشغل انتباهه وانت بتبرّد، عشان يسيبك تكمّل الـ٢٠ دقيقة.", en: "" },
    say: { toOthers: ["«خليها تحت الميّه، أنا هجيب حاجة نضيفة نغطّيها.»"], toSelf: ["«٢٠ دقيقة ميّه فاترة — من غير تلج، من غير زبدة.»"] },
    bodyLanguage: { ar: "هدوء وصوت مطمئن وثابت — الطفل بيقرأ انفعالك، فطمأنينتك بتخليه يتحمّل التبريد.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الحروق الكبيرة محتاجة رعاية متخصّصة في قسم حروق.", en: "" },
    variations: ["حرق كهربائي: اقطع مصدر الكهربا بأمان الأول، ولازم كشف طبي حتى لو باين بسيط.", "حرق كيماوي: اغسل بميّه كتير جارية لفترة أطول، واشيل الهدوم الملوّثة.", "حرق كبير جدًا: كلّم الإسعاف فورًا وبرّد وانت مستني."],
    prevention: ["لفّ مقابض الحلل ناحية جوّه", "ماتشيلش سوائل سخنة فوق راس الأطفال", "اضبط حرارة السخّان", "حاجز على البوتاجاز"],
    drill: { ar: "اعرف مكان أقرب حنفية/دُش في البيت والشغل، عشان توصل للتبريد في ثواني.", en: "" },
    after: { ar: "تابع علامات العدوى (احمرار بيزيد، صديد، سخونية، ألم متزايد)؛ الحرق العميق ممكن يحتاج متابعة ووقاية من التيتانوس.", en: "" },
    sources: [
      { srcId: "mlp:burns", label: "MedlinePlus — Burns", url: "https://medlineplus.gov/ency/article/000030.htm",
        grade: "A · INGESTED", sha256: "3113ae2e76", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "NHS — Burns and scalds: Treatment", url: "https://www.nhs.uk/conditions/burns-and-scalds/treatment/",
        grade: "B · corroborating", verified: "ingested, but its tick-lists are prevention advice, not the procedure" },
      { label: "British Red Cross — Burns", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "heart-attack",
    title: { ar: "أعراض جلطة قلبية (نوبة قلبية)", en: "Heart attack signs" },
    level: 5, who: ["الكل", "كبار السن"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "ألم أو ضغط في نص الصدر بيستمر أو بيروح ويرجع، وممكن ينتشر للدراع/الفك/الظهر مع عرق ولهفة. عند الستات ممكن يبان ضيق نفس ودوخة من غير ألم صدر واضح.", en: "" },
    redFlags: ["ضغط/عصر في الصدر أكتر من بضع دقايق", "ألم بينتشر للدراع الشمال أو الفك", "عرق بارد وغثيان وضيق نفس مفاجئ"],
    do: [
      { t: "كلّم الإسعاف ١٢٣ فورًا لو في ألم في الصدر زي الضغط أو العصر، أو بينتشر للدراع أو الرقبة أو الفك.", src: "nhs:heart-attack" },
      { t: "خليه يقعد ويرتاح، ويبطّل أي مجهود.", src: "nhs:heart-attack" },
      { t: "لو معاكم أسبرين ٣٠٠ مجم، خليه ياخده — إلا لو عنده حساسية من الأسبرين.", src: "nhs:heart-attack" },
      { t: "لو معاه دوا الذبحة الموصوف له، ساعده ياخده.", src: "nhs:heart-attack" },
      { t: "لو فقد الوعي وبطّل يتنفّس طبيعي: كلّم الإسعاف وابدأ إنعاش على طول.", src: "nhs:cpr" }
    ],
    dont: [
      { t: "ماتديش أسبرين لحد عنده حساسية من الأسبرين.", src: "nhs:heart-attack" },
      { t: "ماتستناش الألم يروح لوحده — الاتصال بيتم فورًا.", src: "nhs:heart-attack" },
      "ماتسوقش بيه العربية بدل الإسعاف — الإسعاف بيبدأ علاج في الطريق."
    ],
    // NOTE: the previous version said aspirin «١٦٢–٣٢٥ مجم» — that is the American Heart Association
    // dose, attributed to an NHS page that says 300mg. Corrected to the source actually cited.
    // The last `dont` is deliberately left as a bare string: NHS does not state it, so it renders ⚠.
    whenWhy: { ar: "كل دقيقة عضلة قلب بتموت؛ الإسعاف بيبدأ العلاج في الطريق. الأسبرين بيقلّل التجلّط في الشريان المسدود.",
      en: "Heart muscle dies every minute; the ambulance begins treatment on the way. Aspirin reduces clotting in the blocked artery." },
    how: { ar: "مثال حيّ: عمّك مسك صدره وبيعرق والألم نازل في دراعه. تقعّده يرتاح، تكلّم ١٢٣، وتديله أسبرين ٣٠٠ مجم لو مفيش حساسية، وتفضل جنبه تراقبه.",
      en: "Your uncle clutches his chest, sweating, pain spreading down his arm. Sit him down to rest, call 123, give 300mg aspirin if he has no allergy, and stay watching him." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«أعراض جلطة قلبية» + السن + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "أسبرين في شنطة الإسعافات", why: "يتمضغ وقت النوبة (لو مفيش مانع)" }, { item: "جهاز ضغط منزلي", why: "لو في تاريخ قلبي" }],
    tech: ["Medical ID فيه أدويته وأمراضه", "Emergency SOS + شارك موقعك"],
    writeDown: ["أمراضه وأدويته وحساسياته في Medical ID", "أقرب مستشفى فيها قسطرة قلب"],
    videosCommunities: [{ label: "American Red Cross — Heart Attack", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack" }],
    othersPOV: { ar: "ناس كتير بتنكر إنها جلطة وبتستحي تتصل بالإسعاف — طمّنه إن الاتصال أأمن، والإنذار الكاذب أرحم من التأخير.", en: "" },
    say: { toOthers: ["«هكلّم الإسعاف حالًا، انت اقعد وارتاح ومتتحركش.»"], toSelf: ["«بعمل الصح: اتصال، راحة، وأسبرين.»"] },
    bodyLanguage: { ar: "هدوء وثبات، خليه مطمئن وقليل الحركة، صوتك واثق مش مذعور.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الإسعاف أولوية على أي إجراء تاني.", en: "" },
    variations: ["الستات ومرضى السكر: الأعراض ممكن تبان خفيفة أو مختلفة (تعب/ضيق نفس) — خُد أي شك بجدّية.", "لوحدك وبتحسّ بالأعراض: كلّم الإسعاف، افتح باب الشقة، واقعد قريب منه."],
    prevention: ["ضغط/سكر/كوليسترول تحت السيطرة", "بطّل تدخين", "حركة ومتابعة دورية"],
    drill: { ar: "احفظ رقم الإسعاف ومكان الأسبرين، واعرف أعراض الجلطة — خصوصًا المختلفة عند الستات.", en: "" },
    after: { ar: "حتى لو الألم خفّ، لازم مستشفى وتقييم قلب؛ المتابعة والدوا بيمنعوا نوبة تانية.", en: "" },
    sources: [
      { srcId: "nhs:heart-attack", label: "NHS — Heart attack", url: "https://www.nhs.uk/conditions/heart-attack/",
        grade: "A · INGESTED", sha256: "f8a7bfb168", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — 'While you're waiting for medical help': sit down and rest, take aspirin 300mg, take angina medication" },
      { srcId: "nhs:cpr", label: "NHS — CPR", url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/",
        grade: "A · INGESTED", sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — grounds the deterioration step" },
      { label: "American Heart Association — Warning Signs", url: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack",
        grade: "C · CITE-ONLY", verified: "NOT machine-fetched", note: "AHA's aspirin dose (162–325mg) differs from NHS's 300mg; card follows the ingested NHS source" },
      { label: "American Red Cross — Heart Attack", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "stroke-fast",
    title: { ar: "أعراض سكتة دماغية (اختبار FAST)", en: "Stroke — act FAST" },
    level: 5, who: ["الكل", "كبار السن"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "نص الوش واقع، أو دراع مش قادر يرفعها، أو كلام متلخبط — دي سكتة دماغية. الوقت = مخ، وكل دقيقة بتفرق.", en: "" },
    redFlags: ["ابتسامة مايلة/نص وش واقع", "ضعف مفاجئ في دراع أو رجل (غالبًا ناحية واحدة)", "كلام متلعثم أو مش مفهوم", "دوخة/عدم اتزان أو صداع شديد مفاجئ"],
    // UPGRADED from FAST to B.E. F.A.S.T. — the ingested CDC page teaches two extra checks
    // (Balance, Eye) that the old card omitted. Content follows the source, not our memory of it.
    do: [
      { t: "B — التوازن: اسأله هو حاسس بدوخة أو إنه فاقد توازنه؟", src: "cdc:stroke-signs" },
      { t: "E — العين: اسأله عنده مشكلة في الرؤية؟", src: "cdc:stroke-signs" },
      { t: "F — الوش: قوله يبتسم. نص الوش واقع؟", src: "cdc:stroke-signs" },
      { t: "A — الدراع: قوله يرفع دراعيه الاتنين. في دراع بينزل لوحده؟", src: "cdc:stroke-signs" },
      { t: "S — الكلام: قوله يكرّر جملة بسيطة. الكلام متلعثم أو غريب؟", src: "cdc:stroke-signs" },
      { t: "T — الوقت: لو شفت أي علامة من دول، كلّم الطوارئ فورًا.", src: "cdc:stroke-signs" }
    ],
    dont: [
      "ماتستناش تشوف هيتحسّن.",
      "ماتديهوش أكل ولا شرب — ممكن يشرق.",
      "ماتسوقش بيه بنفسك — الإسعاف بيبدأ العلاج ويجهّز فريق السكتة."
    ],
    // The three `dont` lines are NOT in the CDC page and render with a ⚠. They are retained because
    // they are widely-taught, but they are marked unverified rather than given a citation they lack.
    whenWhy: { ar: "العلاج اللي بيفكّ الجلطة بيشتغل بأعلى فاعلية خلال ~٣ ساعات من أول عرض؛ عشان كده الوقت حرج، وتسجيل بداية الأعراض بيحدّد العلاج.", en: "" },
    how: { ar: "مثال حيّ: خالتك بتتكلم بصعوبة ونص بقّها مايل. تعملي الـFAST بسرعة، تكلّمي ١٢٣ وتقولي «اشتباه سكتة»، وتسجّلي إمتى بدأت.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«اشتباه سكتة دماغية» + وقت بداية الأعراض + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "مفيش — السرعة والاتصال هما الأهم", why: "التشخيص بالـFAST ببلاش" }],
    tech: ["Emergency SOS", "سجّل وقت أول عرض في الموبايل فورًا"],
    writeDown: ["أدويته (خصوصًا مسيّلات الدم) وأمراضه في Medical ID"],
    videosCommunities: [{ label: "CDC — Stroke Signs & Symptoms (FAST)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" }, { label: "Stroke Association — Symptoms", url: "https://www.stroke.org.uk/stroke/symptoms" }],
    othersPOV: { ar: "المصاب ممكن ينكر إنه تعبان أو مش قادر يوصف حالته — انت اللي تقرر بالـFAST وتتصل.", en: "" },
    say: { toOthers: ["«ابتسم لي… ارفع دراعيك… كرّر ورايا.» ثم «هكلّم الإسعاف حالًا.»"], toSelf: ["«FAST: وش، دراع، كلام، وقت — واتصل.»"] },
    bodyLanguage: { ar: "هدوء وطمأنة، خليه ثابت على جنبه، وسجّل الوقت بدقة.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الإسعاف أولوية.", en: "" },
    variations: ["BE-FAST كمان: فقدان توازن (Balance) أو مشكلة نظر (Eyes) مفاجئة.", "لو الأعراض راحت بسرعة في دقايق: برضه لازم إسعاف — ممكن تكون إنذار بجلطة أكبر."],
    prevention: ["ضغط الدم تحت السيطرة (أهم عامل)", "بطّل تدخين", "متابعة القلب والسكر"],
    drill: { ar: "احفظ FAST — أهم أداة تشخيص سريع بتنقذ مخ. كرّرها لأهلك.", en: "" },
    after: { ar: "مستشفى فورًا؛ التعافي بيعتمد على سرعة العلاج + إعادة تأهيل بعدها.", en: "" },
    sources: [
      { srcId: "cdc:stroke-signs", label: "CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)", url: "https://www.cdc.gov/stroke/signs-symptoms",
        grade: "A · INGESTED", sha256: "6caca15615", retrieved: "2026-07-10", licence: "public domain (U.S. CDC)",
        verified: "machine — the six B.E.F.A.S.T. checks extracted from these bytes",
        attribution: "Content source: CDC" },
      { label: "CDC — Stroke Signs and Symptoms (legacy path)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html", grade: "A · جهة صحية رسمية" }, { label: "Stroke Association (UK) — FAST", url: "https://www.stroke.org.uk/stroke/symptoms", grade: "A" }]
  },
  {
    id: "seizure",
    title: { ar: "نوبة صرع (تشنّج)", en: "Seizure" },
    level: 4, who: ["الكل"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "حد بيرتجف/يتشنّج فجأة وممكن يقع ويفقد الوعي. أغلب النوبات بتقف لوحدها خلال دقايق — دورك تأمّنه.", en: "" },
    redFlags: ["تصلّب وارتجاف مفاجئ", "فقدان وعي أو تحديق/شرود", "ريالة، وأحيانًا تبوّل لا إرادي"],
    do: [
      { t: "افضل مع الشخص.", src: "cdc:seizure-first-aid" },
      { t: "لو باين إنه هيقع، نزّله على الأرض بالراحة.", src: "cdc:seizure-first-aid" },
      { t: "شيل أي حاجة قريبة منه ممكن تأذيه، وفضّي المكان حواليه.", src: "cdc:seizure-first-aid" },
      { t: "لفّه بالراحة على جنبه وبقّه ناحية الأرض — ده بيخلّي مجرى الهوا مفتوح.", src: "cdc:seizure-first-aid" },
      { t: "حُط حاجة طرية ومسطّحة تحت راسه، زي جاكت.", src: "cdc:seizure-first-aid" },
      { t: "شيل نضّارته، وفكّ أي حاجة حوالين رقبته ممكن تعوّق التنفّس.", src: "cdc:seizure-first-aid" },
      { t: "احسب وقت النوبة عشان تعرف لو عدّت ٥ دقايق.", src: "cdc:seizure-first-aid" },
      { t: "شوف لو لابس إسورة طبية فيها معلومات عن حالته وأدويته.", src: "cdc:seizure-first-aid" },
      { t: "لمّا النوبة تخلص، ساعده يقعد في مكان آمن يرتاح فيه، ولمّا يبقى واعي طمّنه واحكيله اللي حصل.", src: "cdc:seizure-first-aid" }
    ],
    dont: [
      { t: "ماتمسكوش بالعافية وماتوقّفش حركته — ممكن تأذيه وتأذي نفسك.", src: "cdc:seizure-first-aid" },
      { t: "ماتحطّش أي حاجة في بقّه — ممكن تكسر سنانه أو فكّه.", src: "cdc:seizure-first-aid" },
      { t: "ماتديش نفس صناعي أثناء النوبة — الناس عادةً بترجع تتنفّس لوحدها بعدها.", src: "cdc:seizure-first-aid" },
      { t: "ماتديهوش ميّه ولا أكل لحد ما يبقى واعي تمامًا — ممكن يشرق.", src: "cdc:seizure-first-aid" }
    ],
    // The card previously said «ابدأ تحسب وقت النوبة، واهدا» — "and calm down" is filler, and the
    // extractor also over-captured 3 lines from CDC's "who should learn seizure first aid" section
    // ("coach or lead groups", "work in public settings"). Those are excluded, not translated.
    whenWhy: { ar: "التقييد بيأذيه ويأذيك؛ والحاجة في البق بتسبب كسر أسنان أو اختناق. وضع الجنب بيحمي مجرى الهوا من الريالة.", en: "" },
    how: { ar: "مثال حيّ: زميلك وقع بيتشنّج. تبعّد الكراسي، تحط شنطة تحت راسه، تحسب الوقت، ولمّا يهدأ تلفّه على جنبه وتفضل معاه.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو النوبة عدّت ٥ دقايق، أو أول نوبة في حياته، أو اتأذى، أو نوبة ورا نوبة، أو مش بيفوق." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "مفيش — بعّد الخطر بس", why: "التأمين هو العلاج الأولي" }],
    tech: ["Emergency SOS", "لو تقدر صوّر النوبة — بتساعد الدكتور في التشخيص"],
    writeDown: ["لو معروف عنده صرع: نوع النوبات وأدويته في Medical ID"],
    videosCommunities: [{ label: "CDC — First Aid for Seizures", url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html" }, { label: "NHS — What to do if someone has a seizure", url: "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/" }],
    othersPOV: { ar: "بعد النوبة بيكون مشوّش وخايف ومكسوف — طمّنه بهدوء وماتزنقوش بأسئلة كتير.", en: "" },
    say: { toOthers: ["«ابعدوا الكراسي وافتحوا مكان — مفيش خطر، النوبة هتقف.»"], toSelf: ["«أأمّنه وأحسب الوقت — مش هأمسكه.»"] },
    bodyLanguage: { ar: "هدوء، صوت واطي، ووجود مطمئن بعد ما يفوق.", en: "" },
    rights: { ar: "التأمين والاتصال عند الخطر تصرّف مسؤول.", en: "" },
    variations: ["طفل مع حمّى (تشنّج حراري): نفس التأمين + برّده وكلّم الطوارئ.", "في كرسي متحرك: ثبّت الكرسي وادعم راسه من غير ما تخرجه بالعافية."],
    prevention: ["لو معروف عنده صرع: انتظام الدوا والنوم وتجنّب المحفّزات (سهر/أضواء)"],
    drill: { ar: "احفظ Stay-Safe-Side (اهدا · أمّن · على جنبه) ومتى تتصل بالإسعاف.", en: "" },
    after: { ar: "خليه يرتاح ويفوق بالراحة؛ أول نوبة في الحياة لازم كشف عصبي.", en: "" },
    sources: [
      { srcId: "cdc:seizure-first-aid", label: "CDC — First Aid for Seizures", url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures",
        grade: "A · INGESTED", sha256: "6f3e5abc93", retrieved: "2026-07-10", licence: "public domain (U.S. CDC)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Content source: CDC" },
      { label: "NHS —Seizure first aid", url: "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/", grade: "A" }]
  },
  {
    id: "anaphylaxis",
    title: { ar: "رد فعل تحسّسي شديد (حساسية مفرطة)", en: "Anaphylaxis" },
    level: 5, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["أي مكان", "مطعم"], domain: "طوارئ",
    snapshot: { ar: "رد فعل تحسّسي بيهدّد الحياة وبيحصل بسرعة — تورّم وطفح وصعوبة تنفّس بعد أكل/دوا/لسعة. الأدرينالين بينقذ.", en: "" },
    redFlags: ["صعوبة تنفّس أو صفير", "تورّم وش/شفايف/لسان/زور", "طفح جلدي منتشر، دوخة أو إغماء بعد التعرّض لمسبب"],
    do: [
      { t: "لو معاه حاقن أدرينالين (زي EpiPen): استخدمه فورًا — التعليمات مكتوبة على جنب الحاقن نفسه.", src: "nhs:anaphylaxis" },
      { t: "استخدم الحاقن حتى لو الأعراض لسه بسيطة.", src: "nhs:anaphylaxis" },
      { t: "كلّم الإسعاف ١٢٣ وقول إنها «حساسية مفرطة / أنافيلاكسيس».", src: "nhs:anaphylaxis" },
      { t: "نيّمه وارفع رجليه. لو بيتعب في نفسه: ارفع كتافه أو قعّده بالراحة. لو حامل: على جنبها الشمال.", src: "nhs:anaphylaxis" },
      { t: "لو اتلسع من حشرة والإبرة لسه في الجلد، حاول تشيلها.", src: "nhs:anaphylaxis" },
      { t: "لو ماتحسّنش خلال ٥ دقايق ومعاك حاقن تاني: استخدمه.", src: "nhs:anaphylaxis" }
    ],
    dont: [
      { t: "ماتأخّرش الأدرينالين استنّاء الأعراض «تهدأ» — يتاخد حتى لو بسيطة.", src: "nhs:anaphylaxis" },
      // FIX (grounding-verify drift): the old «يقف أو يمشي فجأة» implied slow standing is OK.
      // NHS is absolute: "Do not stand or walk at any time, even if you feel better." — post-adrenaline
      // orthostatic collapse can be fatal. Now grounded + absolute.
      { t: "ماتخليهوش يقف أو يمشي خالص — حتى لو حسّ إنه بقى أحسن.", src: "nhs:anaphylaxis" },
      "ماتسيبهوش لوحده."
    ],
    // NOTE: the previous version said «اضغط لحد كليك وثبّت ٣ ثواني». NHS states no hold-time — it says the
    // instructions are printed on the injector, and hold-time differs by brand. Invented detail removed.
    whenWhy: { ar: "الأدرينالين بيفتح المجرى الهوائي ويرفع الضغط، والتأخير بيهدّد الحياة. عشان كده بيتاخد فورًا حتى لو الأعراض بسيطة، والإسعاف بيتكلّم على طول.",
      en: "Adrenaline opens the airway and raises blood pressure; delay is life-threatening. Use it immediately even if symptoms are mild, and call the ambulance straight away." },
    how: { ar: "مثال حيّ: صاحبك أكل مكسرات وبدأ لسانه يتورّم ويصعب عليه النفس. تجيب الحاقن وتتبع التعليمات المكتوبة عليه، تكلّم ١٢٣، وتنيّمه وترفع رجليه.",
      en: "Your friend eats nuts, his tongue swells and breathing becomes hard. Use the auto-injector following the instructions printed on it, call 123, lie him down and raise his legs." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حساسية مفرطة» + المسبب لو معروف + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "حاقن أدرينالين (بوصفة) — يفضل اتنين", why: "لأي حد عنده حساسية شديدة معروفة" }, { item: "كارت/سوار تنبيه طبي", why: "يوضّح الحساسية" }],
    tech: ["Medical ID فيه الحساسيات", "Emergency SOS"],
    writeDown: ["الحساسيات المعروفة في Medical ID وكارت في المحفظة"],
    videosCommunities: [{ label: "NHS — Anaphylaxis", url: "https://www.nhs.uk/conditions/anaphylaxis/" }, { label: "American Red Cross — Allergic Reaction/Anaphylaxis", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis" }],
    othersPOV: { ar: "ممكن يقلّل من خطورة حالته أو يتردّد يستخدم الحاقن — الأدرينالين آمن ولازم يتاخد بسرعة.", en: "" },
    say: { toOthers: ["«معاك EpiPen؟ فين؟ — هستخدمه دلوقتي.»"], toSelf: ["«أدرينالين الأول، بعدين إسعاف، وأنيّمه.»"] },
    bodyLanguage: { ar: "حركة حاسمة وسريعة مع طمأنة — التردّد بيضيّع وقت غالي.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ استخدام الحاقن في الطوارئ تصرّف منقذ.", en: "" },
    variations: ["طفل: حاقن أطفال بجرعة مناسبة.", "لسعة نحل: شيل الإبرة بالكشط جنبيًا (مش بالعصر).", "بيتكرّر: لازم متابعة مناعة/حساسية وحمل حاقن دايمًا."],
    prevention: ["تجنّب المسبب المعروف", "احمل الحاقن دايمًا وتأكد إنه مش منتهي", "بلّغ المطاعم بالحساسية"],
    drill: { ar: "اتمرّن على تعليمات الحاقن (حاقن تدريب) قبل ما تحتاجه — عشان إيدك تعرفه في اللحظة.", en: "" },
    after: { ar: "حتى بعد التحسّن لازم مستشفى — ممكن يرجع رد الفعل تاني بعد ساعات (تفاعل ثنائي الطور).", en: "" },
    sources: [
      { srcId: "nhs:anaphylaxis", label: "NHS — Anaphylaxis", url: "https://www.nhs.uk/conditions/anaphylaxis/",
        grade: "A · INGESTED", sha256: "8cc8e0f7f6", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — 'What to do if you have anaphylaxis' extracted from these bytes" },
      { label: "American Red Cross — Anaphylaxis", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "electric-shock",
    title: { ar: "صعق كهربائي", en: "Electric shock" },
    level: 4, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["البيت", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "حد اتصعق بالكهربا وممكن يكون لسه ملامس المصدر. سلامتك الأول — ماتلمسوش قبل ما تفصل الكهربا.", en: "" },
    redFlags: ["ملامس سلك/جهاز كهربائي", "تشنّج أو فقدان وعي", "حرق في مكان دخول/خروج التيار", "مش بيتنفّس"],
    do: [
      { t: "لو تقدر تعمل كده بأمان، اقفل التيار: اشلح الفيشة، أو اقفل القاطع، أو اطفي المفتاح الرئيسي.", src: "mlp:electrical-injury" },
      { t: "لو مش قادر تقفل التيار: استخدم حاجة ماتوصّلش كهربا — مقشة، كرسي، سجادة، أو دعّاسة كاوتش — عشان تبعّد الشخص عن المصدر.", src: "mlp:electrical-injury" },
      { t: "أول ما يبعد عن مصدر الكهربا، اكشف على مجرى الهوا والتنفّس والنبض.", src: "mlp:electrical-injury" },
      { t: "لو فاقد الوعي ومش حاسس بنبض، ابدأ إنعاش (CPR).", src: "mlp:electrical-injury" },
      { t: "لو عنده حرق: شيل الهدوم اللي بتطلع بسهولة، واغسل مكان الحرق بميّه ساقعة جارية.", src: "mlp:electrical-injury" },
      { t: "لو باين عليه إغماء أو شحوب أو علامات صدمة: نيّمه وراسه أوطى شوية من جسمه.", src: "mlp:electrical-injury" },
      { t: "افضل مع الشخص لحد ما المساعدة الطبية توصل.", src: "mlp:electrical-injury" }
      // MedlinePlus's step 2 is literally "Call 911". A foreign number may never reach an Egyptian
      // reader (GATE 6), and 123 is a localization decision — it lives in whoToCall, not in a cited step.
    ],
    dont: [
      { t: "ماتقربش أقل من ٦ متر من حد بيتصعق بكهربا ضغط عالي.", src: "mlp:electrical-injury" },
      { t: "ماتلمسش الشخص بإيدك العريانة وهو لسه ملامس مصدر الكهربا.", src: "mlp:electrical-injury" },
      { t: "ماتحطّش تلج ولا زبدة ولا مراهم ولا قطن ولا بلاستر على الحرق.", src: "mlp:electrical-injury" },
      { t: "ماتشيلش الجلد الميّت وماتفقّعش الفقاقيع لو اتحرق.", src: "mlp:electrical-injury" },
      { t: "بعد ما تقفل التيار، ماتحرّكش الشخص إلا لو في خطر مستمر زي حريق.", src: "mlp:electrical-injury" }
    ],
    whenWhy: { ar: "التيار بيعدّي من المصاب لأي حد يلمسه؛ العزل بيحميك. والصعق ممكن يوقّف القلب والتنفّس فيحتاج CPR.", en: "" },
    how: { ar: "مثال حيّ: طفل مسك سلك مكشوف واتشنّج. تجري تفصل القاطع الأول، وبعدين تقرب منه، تكلّم الإسعاف، وتشوف بيتنفّس ولا لأ.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«صعق كهربائي» + حالة الوعي والتنفّس." }, { label: "المطافي/الحماية المدنية", number: "180", say: "لو في حريق أو كهربا ضغط عالي." }],
    whatToBuy: [{ item: "قاطع تسريب أرضي (RCD/ELCB) في لوحة البيت", why: "بيفصل الكهربا فورًا عند التسريب" }, { item: "أغطية بريزات للأطفال", why: "وقاية" }],
    tech: ["Emergency SOS", "اعرف مكان القاطع الرئيسي واحفظه"],
    writeDown: ["مكان القاطع الرئيسي معروف لكل أهل البيت"],
    videosCommunities: [{ label: "NHS — First aid", url: "https://www.nhs.uk/tests-and-treatments/first-aid/" }, { label: "American Red Cross — Shock", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/shock" }],
    othersPOV: { ar: "الناس بتجري تلمس المصاب بحسن نية — نبّههم بصوت عالي «ماتلمسوش! افصلوا الكهربا الأول».", en: "" },
    say: { toOthers: ["«ماحدش يلمسه! افصلوا الكهربا من القاطع!»"], toSelf: ["«أفصل المصدر الأول، بعدين ألمسه.»"] },
    bodyLanguage: { ar: "قف وفكّر ثانية قبل الاندفاع — سلامتك بتنقذ الاتنين.", en: "" },
    rights: { ar: "الأولوية للتأمين ثم الاتصال؛ إنقاذ يحطّك في خطر مش بينفع.", en: "" },
    variations: ["كهربا ضغط عالي (أعمدة/محوّلات): ابعد ٦ متر على الأقل وكلّم الشركة والطوارئ — ماتحاولش تقرب.", "حرق مصاحب: برّد بميّه بعد فصل الكهربا (زي بطاقة الحرق)."],
    prevention: ["صيانة الأسلاك والوصلات", "أغطية بريزات", "ماتستخدمش أجهزة كهربا وإيدك أو الأرض مبلولة"],
    drill: { ar: "عرّف كل أهل البيت مكان القاطع الرئيسي وإزاي يفصلوه في ثواني.", en: "" },
    after: { ar: "أي صعق مؤثّر لازم كشف طبي — ممكن يأثّر على نظم القلب حتى لو باين بسيط.", en: "" },
    sources: [
      { srcId: "mlp:electrical-injury", label: "MedlinePlus — Electrical injury", url: "https://medlineplus.gov/ency/article/000053.htm",
        grade: "A · INGESTED", sha256: "0e362fd364", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "NHS — First aid (electric shock)", url: "https://www.nhs.uk/tests-and-treatments/first-aid/", grade: "C · CITE-ONLY", verified: "hub page; no procedure extracted from it" }, { label: "American Red Cross — Shock", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/shock", grade: "A" }]
  },
  {
    id: "infant-choking",
    title: { ar: "رضيع بيختنق (أقل من سنة)", en: "Infant choking (under 1)" },
    level: 5, who: ["آباء وأمهات", "مقدّم رعاية"], place: ["البيت", "أي مكان"], domain: "طوارئ",
    snapshot: { ar: "رضيع مش قادر يعيّط ولا يسعل ولا يتنفّس ولونه بيزرقّ. الرضيع بيتعالج غير الكبار: ضرب ظهر + ضغطات صدر — مفيش ضغط بطن أبدًا.", en: "" },
    redFlags: ["مفيش صوت عياط ولا سعال", "صوت صفير ضعيف أو مفيش صوت", "الشفايف والوش بيزرقّوا وبيتلبّط بإيديه"],
    do: [
      { t: "نيّمه على بطنه على ساعدك، وسند ساعدك على فخذك أو حِضنك، وامسك صدره في إيدك وفكّه بصوابعك، وخلّي راسه مايلة لتحت أوطى من مستوى جسمه.", src: "mlp:choking-infant" },
      { t: "اديله لحد ٥ ضربات سريعة وقوية بين لوحي كتفه براحة إيدك التانية.", src: "mlp:choking-infant" },
      { t: "اقلبه على ضهره، وسنده على فخذك أو حِضنك، وسند راسه.", src: "mlp:choking-infant" },
      { t: "حُط كعب إيد واحدة في نص عظمة الصدر تحت الحلمتين بشوية، واعمل لحد ٥ ضغطات صدر لتحت.", src: "mlp:choking-infant" },
      { t: "لو شايف الحاجة اللي قافلة مجرى الهوا، حاول تطلّعها بصباعك — بس بشرط تكون شايفها.", src: "mlp:choking-infant" },
      { t: "كمّل ٥ ضرب ظهر وبعدها ٥ ضغطات صدر لحد ما الحاجة تطلع أو الرضيع يغيب عن الوعي.", src: "mlp:choking-infant" }
    ],
    dont: [
      { t: "ماتعملش إسعاف اختناق لو الرضيع بيسعل بقوة، أو عياطه قوي، أو بيتنفّس كفاية.", src: "mlp:choking-infant" },
      { t: "ماتحاولش تمسك الحاجة وتشدّها وهو صاحي وواعي.", src: "mlp:choking-infant" },
      { t: "ماتعملش ضرب ظهر وضغطات صدر لو الرضيع بطّل يتنفّس لسبب تاني، زي الربو أو عدوى أو تورّم.", src: "mlp:choking-infant" }
    ],
    whenWhy: { ar: "أعضاء الرضيع رقيقة، فضغط البطن خطر عليه. ضرب الظهر وضغط الصدر بيرفعوا ضغط الهوا في الرئة بأمان فيقذفوا الجسم برّه.", en: "" },
    how: { ar: "مثال حيّ: رضيع اتشرق من قطعة أكل. تقعد، تحطّه على ساعدك ووشّه لتحت مسنود على فخذك، ٥ ضربات حاسمة بين كتفيه، وبعدين تقلبه وتعمل ٥ ضغطات بصباعين في نص صدره.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«رضيع بيختنق ومش بيتنفّس» + العنوان." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كورس إسعافات أولية للأطفال والرضّع", why: "الحركة مختلفة تمامًا عن الكبار" }, { item: "بوستر خطوات إنقاذ الرضيع", why: "علّقه في أوضته" }],
    tech: ["فعّل Emergency SOS", "خلي حد يكلّم الإسعاف على السبيكر عشان إيديك تفضل حرّة"],
    writeDown: ["أرقام الطوارئ على التلاجة", "بيانات الرضيع الطبية وحساسياته"],
    videosCommunities: [{ label: "American Red Cross — Infant Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/infant-choking" }, { label: "British Red Cross — Choking baby", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-baby" }],
    othersPOV: { ar: "الأم أو الأب هيكونوا في ذعر كامل — عيّن حد بالاسم يتصل بالإسعاف وانت بتعمل الخطوات، بدل ما الكل يتفرّج.", en: "" },
    say: { toOthers: ["«انت — كلّم الإسعاف ١٢٣ دلوقتي وحطّه على السبيكر!»"], toSelf: ["«٥ ظهر، ٥ صدر. ماأعملش ضغط بطن.»"] },
    bodyLanguage: { ar: "اقعد وثبّت ساعدك على فخذك، حركتك حاسمة ومحسوبة مش عنيفة، وصوتك واطي وواضح.", en: "" },
    rights: { ar: "الإسعاف الطارئ حقّه؛ ومساعدتك بحُسن نيّة في خطر حالّ تصرّف مسؤول.", en: "" },
    variations: ["طفل أكبر من سنة: ضرب ظهر + ضغطات بطن (زي الكبار بحجم أصغر).", "لو فقد الوعي: ابدأ إنعاش الرضّع (ضغطات صدر) فورًا.", "لوحدك: اعمل الخطوات وكلّم الإسعاف على السبيكر."],
    prevention: ["قطّع أكل الرضيع صغير جدًا", "بعّد الحاجات الصغيّرة: بطاريات، عملات، لعب صغيرة", "ماتسيبهوش ياكل وهو نايم أو بيتحرّك"],
    drill: { ar: "راجع خطوات إنقاذ الرضيع مرة كل شهر وتخيّل نفسك بتعملها — الحركة لازم تبقى في إيدك قبل اللحظة.", en: "" },
    after: { ar: "حتى لو الجسم طلع، اكشف عند دكتور أطفال — الرضيع ممكن يكون اتأذى من الضغطات أو دخل جزء للرئة.", en: "" },
    sources: [
      { srcId: "mlp:choking-infant", label: "MedlinePlus — Choking: infant under 1 year",
        url: "https://medlineplus.gov/ency/article/000048.htm", grade: "A · INGESTED",
        sha256: "a7c34e47b5", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — back blows + CHEST thrusts (never abdominal) extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Infant Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/infant-choking",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "car-accident",
    title: { ar: "حادثة عربية (مكان الحادث)", en: "Car accident scene" },
    level: 5, who: ["سائقين", "مواطن"], place: ["الطريق"], domain: "طوارئ",
    snapshot: { ar: "حادثة قدّامك أو انت طرف فيها. الترتيب اللي بينقذ: أمّن المكان ← كلّم النجدة ← اسعف. سلامتك الأول، عشان ماتبقاش ضحية تانية.", en: "" },
    redFlags: ["تسريب بنزين أو دخان", "عربيات لسه جاية بسرعة على مكان الحادث", "مصاب مش بيرد أو مش بيتنفّس، أو نزيف غزير"],
    do: [
      { t: "أول حاجة: اتأكد إنك انت والمصاب مش في أي خطر. لو في خطر، أمّن المكان الأول.", src: "nhs:after-accident" },
      { t: "لمّا يبقى آمن، اكشف على المصاب، وكلّم الإسعاف لو محتاج.", src: "nhs:after-accident" },
      { t: "لو باين إنه مش واعي: نده عليه بصوت عالي واسأله هو كويس ويقدر يفتح عينيه؟", src: "nhs:after-accident" },
      { t: "لو ردّ عليك، سيبه في وضعه لحد ما المساعدة توصل، وفضل تراقب تنفّسه ونبضه ودرجة استجابته.", src: "nhs:after-accident" },
      { t: "لو مفيش رد: سيبه في وضعه وافتح مجرى الهوا. لو ماينفعش في وضعه، نيّمه بالراحة على ضهره وبعدين افتح المجرى.", src: "nhs:after-accident" },
      { t: "عشان تفتح مجرى الهوا: حُط إيد على جبهته وميّل راسه لورا بالراحة، وارفع طرف الدقن بصباعين.", src: "nhs:after-accident" },
      { t: "اكشف على التنفّس: بُصّ على صدره طالع ونازل، واسمع عند بقّه ومناخيره، وحُسّ نَفَسه على خدّك لمدة ١٠ ثواني.", src: "nhs:after-accident" }
    ],
    dont: [
      { t: "ماتضغطش على أرضية البق — ده بيدفع اللسان لفوق ويسدّ مجرى الهوا.", src: "nhs:after-accident" },
      "ماتقفش في مسار العربيات.",
      "ماتشيلش خوذة راكب الموتوسيكل إلا لو مش بيتنفّس.",
      "ماتديش المصاب أكل ولا شرب."
    ],
    // NHS says "dial 999". A foreign number may never reach an Egyptian reader (GATE 6), so the
    // ACTION is translated and the number dropped — 123 / 122 / 180 live in whoToCall, labelled.
    // The last three `dont` lines are not in the source and render with a ⚠, not a false citation.
    whenWhy: { ar: "أكبر خطر في الحوادث إنك تتصدم انت كمان — تأمين المكان بيحمي الكل. والاتصال المبكر بيجيب فريق مجهّز بدل مجهودك لوحدك.", en: "" },
    how: { ar: "مثال حيّ: عربية اتقلبت. تركن بعيد بالفلاشر، تتأكد مفيش بنزين مسكوب، تكلّم ١٢٣ و١٢٢ وتقول «طريق كذا، الاتجاه كذا، عربية مقلوبة، مصاب واحد واعي»، وتفضل معاه من غير ما تحرّكه.", en: "" },
    whoToCall: [
      { label: "الإسعاف", number: "123", say: "«حادثة طريق» + عدد المصابين + المكان بدقّة." },
      { label: "النجدة / الشرطة", number: "122", say: "لتأمين الطريق وعمل المحضر." },
      { label: "الحماية المدنية", number: "180", say: "لو في حريق أو حد محتجز جوّه العربية." }
    ],
    whatToBuy: [{ item: "مثلث عاكس + ستر عاكسة في شنطة العربية", why: "بيمنع حادثة تانية عليك" }, { item: "شنطة إسعافات للعربية (شاش وقفازات)", why: "وقف النزيف أهم إسعاف" }],
    tech: ["Emergency SOS + شارك موقعك المباشر", "صوّر المكان بعد ما تأمّنه — للمحضر والتأمين"],
    writeDown: ["رقم بوليصة التأمين ورخصة العربية محفوظين في الموبايل", "أرقام الطوارئ في المفضّلة"],
    videosCommunities: [{ label: "American Red Cross — First Aid Steps (Check, Call, Care)", url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps" }, { label: "St John Ambulance — Traffic collision", url: "https://www.sja.org.uk/first-aid-advice/traffic-collision/" }],
    othersPOV: { ar: "المصاب ممكن يكون في صدمة، ينكر إنه اتأذى ويحاول يقوم ويمشي — طمّنه وخليه ثابت لحد الإسعاف.", en: "" },
    say: { toOthers: ["«ماتحركوش! الإسعاف جاي.»", "«انت اللي بالعربية البيضا — وقّف العربيات من ورا.»"], toSelf: ["«أمّن، اتصل، اسعف — بالترتيب ده.»"] },
    bodyLanguage: { ar: "هدوء وصوت واضح وأوامر قصيرة موجّهة بالاسم أو الوصف — الفوضى بتقلّ أول ما حد ياخد القيادة.", en: "" },
    rights: { ar: "الإبلاغ وعمل محضر حقّك؛ ومساعدة مصاب في خطر حالّ تصرّف مسؤول.", en: "" },
    variations: ["انت الطرف: افضل بالحزام جوّه العربية لو الطريق سريع، لحد ما تتأكد إن النزول آمن.", "موتوسيكل: ماتشيلش الخوذة إلا لو مش بيتنفّس.", "طريق سريع أو نفق: الخطر أعلى — بعّد الناس ورا الحاجز."],
    prevention: ["حزام الأمان دايمًا ولكل الركّاب", "ماتستخدمش الموبايل وانت بتسوق", "صيانة الفرامل والكاوتش"],
    drill: { ar: "افتح شنطة عربيتك النهاردة: المثلث والستر وشنطة الإسعافات موجودين؟", en: "" },
    after: { ar: "اعمل محضر، صوّر، وبلّغ التأمين. واكشف طبي حتى لو حاسس إنك كويس — إصابات كتير بتظهر بعد ساعات.", en: "" },
    sources: [
      { srcId: "nhs:after-accident", label: "NHS — After an incident (first aid)", url: "https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/",
        grade: "A · INGESTED", sha256: "36e83fbdbf", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright",
        verified: "machine — scene safety, ABC checks and airway-opening extracted from these bytes (they live in paragraphs, not lists)" },
      { label: "American Red Cross — First Aid Steps (Check · Call · Care)", url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" },
      { label: "St John Ambulance — How to manage a traffic accident", url: "https://www.sja.org.uk/first-aid-advice/traffic-collision/", grade: "C · CITE-ONLY" }
    ]
  },
  {
    id: "poisoning",
    title: { ar: "تسمّم — حد بلع مادة أو دوا", en: "Poisoning (swallowed)" },
    level: 4, who: ["آباء وأمهات", "أطفال", "الكل"], place: ["البيت"], domain: "طوارئ",
    snapshot: { ar: "حد (غالبًا طفل) بلع مادة كيماوية أو دوا. أخطر غلط شائع وأشهره: إنك تخليه يرجّع.", en: "" },
    redFlags: ["علبة أو زجاجة مفتوحة جنبه", "ريحة غريبة من بقّه أو حروق حوالين الشفايف", "قيء أو لعاب زايد، دوخة، أو تشنّج"],
    do: [
      { t: "كلّم الإسعاف ١٢٣ أو روح الطوارئ فورًا لو حد بلع أو لمس أو استنشق مادة ضارّة.", src: "nhs:poisoning" },
      { t: "لو فاقد الوعي ومش بيتنفّس: ابدأ إنعاش (CPR) على طول.", src: "nhs:poisoning" },
      { t: "لو فاقد الوعي بس بيتنفّس: حُطّه في وضع الإفاقة على جنبه، وفضل تراقب تنفّسه.", src: "nhs:poisoning" },
      { t: "لو صاحي: فضل تتكلّم معاه عشان تتأكد إنه ما غابش عن الوعي.", src: "nhs:poisoning" },
      { t: "دوّر على سبب التسمّم — علبة، شريط دوا، عبوة — وخُدها معاك للمستشفى.", src: "nhs:poisoning" }
    ],
    dont: [
      { t: "ماتحاولش تخليه يرجّع أبدًا — ممكن يشرق ويبطّل تنفّس.", src: "nhs:poisoning" },
      { t: "ماتديهوش أي حاجة ياكلها أو يشربها — لا ميّه ولا لبن.", src: "nhs:poisoning" },
      "ماتديش أي «ترياق شعبي»، وماتستناش الأعراض تظهر."
    ],
    whenWhy: { ar: "الترجيع ممكن يخنقه ويوقّف نفسه، وبيرجّع المادة الكاوية على المريء تاني. والأكل أو الشرب ممكن يزوّد الأذى أو يعطّل العلاج في المستشفى. المعلومة الدقيقة (المادة/الكمية/الوقت) هي اللي بتحدّد الترياق.", en: "" },
    how: { ar: "مثال حيّ: طفل بلع مبيّض. ماتخليهوش يرجّع، وماتديهوش ميّه ولا لبن، شيل العلبة معاك، وكلّم الإسعاف ١٢٣ أو روح الطوارئ فورًا.", en: "" },
    // AUTHORITY CONFLICT, surfaced rather than hidden. NHS (ingested, sha 8292bd5634) says give
    // NOTHING to eat or drink. Some US poison-centre guidance permits a sip of water/milk for a
    // conscious caustic ingestion. Where authorities disagree on a safety instruction we take the
    // conservative one and say so. The previous version of this card carried the water/milk advice
    // on the model's recollection alone; the ingested primary source overturned it.
    sourceConflict: { ar: "المصادر بتختلف حوالين رشفة ميّه أو لبن. اتّبعنا الأحوط: ماتديش حاجة بالبق، وكلّم الإسعاف.", resolvedTo: "nhs:poisoning" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حالة تسمّم» + اسم المادة والكمية ووقت البلع." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "قفل لدولاب الأدوية والمنظّفات", why: "أهم وقاية منزلية على الإطلاق" }, { item: "بلاش تنقل منظّفات في زجاجات مياه", why: "من أشهر أسباب التسمّم المنزلي" }],
    tech: ["صوّر العبوة والملصق قبل ما تتحرّك", "Emergency SOS"],
    writeDown: ["اسم المادة، الكمية التقريبية، ووقت البلع — الدكتور هيسأل عليهم", "مكان أقرب مستشفى فيها طوارئ/وحدة سموم"],
    videosCommunities: [{ label: "Poison Control — First aid: Act fast", url: "https://www.poison.org/first-aid-for-poisonings" }, { label: "American Red Cross — Poison Exposure", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/poison-exposure" }],
    othersPOV: { ar: "الطفل هيخاف ويخبّي إنه بلع حاجة عشان مايتعاقبش — طمّنه إنه مش هيتعاقب، عشان يقولك بالظبط بلع إيه.", en: "" },
    say: { toOthers: ["«بلع إيه بالظبط؟ وامتى؟ — مش هزعّق، بس لازم أعرف.»"], toSelf: ["«مارجّعوش. أجيب العبوة وأتصل.»"] },
    bodyLanguage: { ar: "هدوء وسرعة من غير صراخ — الصراخ بيخلي الطفل يخبّي المعلومة اللي بتنقذه.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك، والسؤال عن المادة مش اتّهام.", en: "" },
    variations: ["مادة على الجلد أو العين: اغسل بميّه جارية كتير فورًا.", "استنشاق غاز أو مبيد: طلّعه هوا نضيف فورًا وكلّم الإسعاف.", "بطارية زرار (قرصية): طوارئ فورية — بتحرق المريء خلال ساعات."],
    prevention: ["اقفل المنظّفات والأدوية عالي وبعيد", "ماتنقلش مواد كيماوية في زجاجات مشروبات", "ماتقولش للطفل إن الدوا «حلوى»"],
    drill: { ar: "لفّ على البيت النهاردة: المنظّفات والأدوية في متناول إيد طفل ولا لأ؟", en: "" },
    after: { ar: "تابع في المستشفى حتى لو باين كويس — أعراض بعض السموم بتتأخّر ساعات.", en: "" },
    sources: [
      { srcId: "nhs:poisoning", label: "NHS — Poisoning", url: "https://www.nhs.uk/conditions/poisoning/",
        grade: "A · INGESTED", sha256: "8292bd5634", retrieved: "2026-07-10", licence: "OGL v3",
        verified: "machine — fetched, hashed, fields extracted from these bytes" },
      { label: "Poison Control (NCPC) — First aid for poisonings", url: "https://www.poison.org/first-aid-for-poisonings",
        grade: "A · CITE-ONLY", verified: "human — not machine-fetched", note: "disagrees with NHS on water/milk; see sourceConflict" },
      { label: "American Red Cross — Poison Exposure", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/poison-exposure",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted, cite not copy" }
    ]
  },
  {
    id: "heat-stroke",
    title: { ar: "إجهاد حراري وضربة شمس", en: "Heat exhaustion & heat stroke" },
    level: 4, who: ["الكل", "كبار السن", "أطفال", "موظفين"], place: ["برّه", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "الفرق بينهم حياة أو موت: إجهاد حراري (عرق غزير، جلد بارد شاحب) بيتحسّن بالتبريد خلال نص ساعة. ضربة شمس (جلد سخن، تشوّش، إغماء) = طوارئ فورية.", en: "" },
    redFlags: ["تشوّش أو كلام مش مفهوم", "جلد سخن وأحمر (ناشف أو رطب)", "إغماء أو قيء متكرّر مع حرارة عالية جدًا"],
    do: [
      { t: "نيّمه في مكان بارد، وارفع رجليه حوالي ٣٠ سنتيمتر.", src: "mlp:heat" },
      { t: "حُط على جلده قماش مبلول ساقع (أو ميّه ساقعة على طول)، واستخدم مروحة عشان تنزّل حرارة جسمه.", src: "mlp:heat" },
      { t: "لو واعي، ادّيله مشروب يرشف منه بالراحة — زي مشروب رياضي، أو ميّه بشوية ملح.", src: "mlp:heat" },
      { t: "لو عنده تقلّصات عضلية: ادّيله المشروبات دي، ودلّك العضلة برفق بس بثبات لحد ما التقلّص يروح.", src: "mlp:heat" },
      { t: "لو ظهرت عليه علامات صدمة (شفايف وأظافر بتزرقّ، ووعي بيقلّ) أو بدأ يتشنّج: دي طوارئ.", src: "mlp:heat" }
    ],
    dont: [
      { t: "ماتديهوش أدوية الحرارة زي الأسبرين أو الباراسيتامول.", src: "mlp:heat" },
      { t: "ماتديهوش أقراص ملح.", src: "mlp:heat" },
      { t: "ماتديهوش مشروبات فيها كحول أو كافيين — بتصعّب على جسمه إنه يتحكّم في حرارته.", src: "mlp:heat" },
      { t: "ماتمسحش جلده بالكحول.", src: "mlp:heat" },
      { t: "ماتديهوش أي حاجة بالبق — ولا حتى مشروب بملح — لو بيرجّع أو فاقد الوعي.", src: "mlp:heat" }
    ],
    // Removed from `do`: «٣٠ دقيقة» threshold and the ice-on-neck/armpit/groin instruction. Neither
    // appears in the ingested MedlinePlus article; both were model recall carrying a citation.
    whenWhy: { ar: "في ضربة الشمس نظام تبريد الجسم بيقع، والحرارة بتأذي المخ والأعضاء خلال دقايق — التبريد السريع (والغمر في ميّه باردة لو ممكن) هو اللي بيقلّل الوفاة.", en: "" },
    how: { ar: "مثال حيّ: عامل في الشمس وقع وبقى مشوّش وجلده سخن. تنقله للظل، تشيل هدومه الزيادة، تصبّ عليه ميّه باردة وتحطّ تلج على رقبته وإبطه، وتكلّم ١٢٣ وتفضل تبرّد.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«اشتباه ضربة شمس — تشوّش وجلد سخن» + المكان." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "زجاجة ميّه + محلول معالجة جفاف", why: "خصوصًا في الصيف والشغل برّه" }, { item: "كاب وملابس فاتحة وواسعة", why: "وقاية أساسية" }],
    tech: ["فعّل تنبيه موجات الحر من تطبيق الطقس", "Emergency SOS"],
    writeDown: ["أوقات ذروة الحر (من ١٢ لـ ٤) — اتجنّبها", "خطة راحة وشرب كل ٢٠ دقيقة لو بتشتغل برّه"],
    videosCommunities: [{ label: "CDC — Heat-related illnesses", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html" }, { label: "NHS — Heat exhaustion and heatstroke", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }],
    othersPOV: { ar: "المصاب بيكون مشوّش ومش مدرك خطورة حالته وممكن يرفض المساعدة — قرّر انت وبرّده.", en: "" },
    say: { toOthers: ["«تعالى في الظل — هبرّدك دلوقتي.»", "«انت — هات ميّه وتلج!»"], toSelf: ["«ظل، تبريد سريع، واتصال لو مشوّش.»"] },
    bodyLanguage: { ar: "حركة سريعة وحاسمة، وجُمل قصيرة — تركيزه ضعيف ومش هيستوعب كلام كتير.", en: "" },
    rights: { ar: "الراحة والمياه والظل في الشغل وقت الحر حق أساسي.", en: "" },
    variations: ["الأطفال وكبار السن بيتأثّروا أسرع — راقبهم.", "تشنّج عضلي من الحر: راحة وتبريد وسوائل بأملاح.", "لو معاك بانيو أو حوض: الغمر في ميّه باردة أسرع طريقة تبريد."],
    prevention: ["اشرب قبل ما تعطش", "اتجنّب الشمس وقت الذروة", "استريح في الظل كل فترة"],
    drill: { ar: "قبل أي يوم حر: جهّز ميّه ومحلول جفاف، واعرف أقرب مكان مكيّف أو ظل في طريقك.", en: "" },
    after: { ar: "بعد ضربة الشمس لازم متابعة طبية — ممكن يكون في تأثير على الكلى والقلب. وماترجعش للشمس بدري.", en: "" },
    sources: [
      { srcId: "mlp:heat", label: "MedlinePlus — Heat emergencies", url: "https://medlineplus.gov/ency/article/000056.htm",
        grade: "A · INGESTED", sha256: "b04003bdbe", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "CDC — Heat-related illnesses (first aid)", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html", grade: "B · corroborating (reachable, not ingested)" },
      { label: "NHS — Heat exhaustion and heatstroke", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/", grade: "A" },
      { label: "American Red Cross — Heat Stroke", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heat-stroke", grade: "A" }
    ]
  },
  {
    id: "fainting",
    title: { ar: "إغماء (فقدان وعي قصير)", en: "Fainting" },
    level: 2, who: ["الكل"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "حد وقع فجأة وفاق بسرعة. غالبًا بسيط (نقص دم للمخ لحظيًا) — بس لازم تعرف امتى تقلق.", en: "" },
    redFlags: ["شحوب وعرق بارد وطنين قبل الوقوع", "مافاقش خلال دقيقة أو اتنين، أو اتكرّر", "معاه ألم صدر أو خفقان في القلب أو ارتباك"],
    do: [
      { t: "نيّمه على ضهره وارفع رجليه. (لو حامل — خصوصًا فوق ٢٨ أسبوع — نيّمها على جنبها بدل ضهرها.)", src: "nhs:fainting" },
      { t: "فكّ الهدوم الضيّقة حوالين رقبته.", src: "mlp:fainting" },
      { t: "راقب مجرى هواه وتنفّسه. لو فيه مشكلة في التنفّس، كلّم الإسعاف وابدأ إنعاش.", src: "mlp:fainting" },
      { t: "سيبه مستلقي ١٠ لـ ١٥ دقيقة على الأقل، ويُفضّل في مكان بارد وهادي.", src: "mlp:fainting" },
      { t: "كلّم الإسعاف لو مافاقش بسرعة (خلال دقيقتين)، أو حسّ بألم أو ضغط في صدره، أو كان الإغماء بيتكرّر.", src: "mlp:fainting" }
    ],
    dont: ["ماتقعّدهوش بسرعة — هيقع تاني", "ماترشّش ميّه على وشّه وماتصفعوش", "ماتديهوش أكل ولا شرب وهو مش صاحي تمامًا"],
    whenWhy: { ar: "رفع الرجلين بيرجّع الدم للمخ بسرعة فيفوق. والقيام السريع بيرجّع هبوط الدورة الدموية تاني.", en: "" },
    how: { ar: "مثال حيّ: زميلة وقعت في طابور. تنيّمها على ضهرها، ترفع رجليها على شنطة، تفكّ ياقتها وتبعّد الزحمة، وتفضل معاها لحد ما تفوق وتقعد بالراحة.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو مافاقش خلال دقيقتين، أو اتكرّر، أو معاه ألم صدر أو ضيق نفس." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "مفيش أداة — التمدّد ورفع الرجلين ببلاش", why: "المعرفة نفسها هي الأداة" }],
    tech: ["املأ Medical ID بأمراضه وأدويته", "Emergency SOS"],
    writeDown: ["لو بيتكرّر: دوّن إمتى بيحصل وقبله إيه (وقوف طويل، حر، جوع، منظر دم)"],
    videosCommunities: [{ label: "American Red Cross — Fainting", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/fainting" }, { label: "NHS — Fainting", url: "https://www.nhs.uk/symptoms/fainting/" }],
    othersPOV: { ar: "الناس هتتجمّع وتزحم عليه — ده بيقلّل الهوا ويحرجه لما يفوق. بعّدهم بلطف.", en: "" },
    say: { toOthers: ["«ابعدوا شوية وسيبوا هوا — هو كويس.»"], toSelf: ["«أنيّمه وأرفع رجليه، وأستنّى دقيقة.»"] },
    bodyLanguage: { ar: "اركع جنبه، صوتك هادي، وماتهزّهوش ولا تصحّيه بعنف.", en: "" },
    rights: { ar: "مساعدة شخص فقد وعيه تصرّف مسؤول، والاتصال بالإسعاف عند الشك مش مبالغة.", en: "" },
    variations: ["حامل — خصوصًا فوق ٢٨ أسبوع: نيّمها على جنبها بدل ضهرها.", "كبير سنّ أو مريض قلب: خُد الإغماء بجدّية أكبر واتصل.", "إغماء أثناء مجهود أو مع ألم صدر: طوارئ فورية."],
    prevention: ["ماتقفش طويل من غير حركة", "اشرب كفاية وماتفوّتش الأكل", "أول ما تحسّ بطنين ودوخة: اقعد أو استلقِ فورًا"],
    drill: { ar: "لو حسّيت بعلامات الإغماء: انزل الأرض بنفسك قبل ما تقع — ده بيمنع إصابة الراس.", en: "" },
    after: { ar: "لو أول مرة أو اتكرّر: اكشف لاستبعاد أسباب قلبية أو أنيميا أو هبوط ضغط.", en: "" },
    sources: [
      { label: "MedlinePlus — Fainting (First aid / Home Care)", url: "https://medlineplus.gov/ency/article/003092.htm", srcId: "mlp:fainting", sha256: "c1da1196df", grade: "A · public domain (U.S. NLM)" },
      { label: "NHS — Fainting", url: "https://www.nhs.uk/symptoms/fainting/", srcId: "nhs:fainting", sha256: "6b9d8b5071", grade: "A" },
      { label: "American Red Cross — Fainting", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/fainting", grade: "A · مرجع إسعاف رسمي" }
    ]
  },
  {
    "id": "head-injury",
    "title": {
      "ar": "إصابة في الراس",
      "en": "Head injury"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حد خبط راسه أو وقع على راسه. أغلب الخبطات بسيطة، بس الراس والرقبة حسّاسين — أمّنه، ثبّت راسه، راقبه كويس، وأي علامة خطر كلّم الإسعاف على طول.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "المصاب بطّل يتنفّس.",
        "en": "The person stops breathing.",
        "src": "mlp:head-injury"
      },
      {
        "t": "نزيف شديد في الراس أو الوش.",
        "en": "There is severe head or face bleeding.",
        "src": "mlp:head-injury"
      },
      {
        "t": "المصاب مشوّش أو تعبان أو مش واعي.",
        "en": "The person is confused, tired, or unconscious.",
        "src": "mlp:head-injury"
      },
      {
        "t": "بيترجّع أكتر من مرة.",
        "en": "Vomits more than once",
        "src": "mlp:head-injury"
      },
      {
        "t": "حدقتين العين (السواد اللي في نص العين) مش متساويين في الحجم.",
        "en": "Has pupils (the dark central part of the eye) of unequal sizes",
        "src": "mlp:head-injury"
      }
    ],
    "do": [
      {
        "t": "اطمّن على مجرى الهوا والتنفّس والدورة الدموية عند المصاب. ولو محتاج، ابدأ تنفّس صناعي وإنعاش قلبي (CPR).",
        "en": "Check the person's airway, breathing, and circulation. If necessary, begin rescue breathing and CPR.",
        "src": "mlp:head-injury"
      },
      {
        "t": "لو نفَسه ونبضه طبيعيين بس مش واعي، اعتبر إن فيه إصابة في العمود الفقري. ثبّت الراس والرقبة بإنك تحط إيديك على جنبي راسه، وخليها في خط واحد مع الظهر ومتسيبهاش تتحرك، واستنى الإسعاف.",
        "en": "If the person's breathing and heart rate are normal, but the person is unconscious, treat as if there is a spinal injury. Stabilize the head and neck by placing your hands on both sides of the person's head. Keep the head in line with the spine and prevent movement. Wait for medical help.",
        "src": "mlp:head-injury"
      },
      {
        "t": "وقّف أي نزيف بإنك تضغط بقوة بقماشة نضيفة على الجرح، إلا لو شاكك إن فيه كسر في الجمجمة. ولو الإصابة خطيرة، خلي بالك ماتحرّكش راسه. ولو الدم نشّ في القماشة، ماتشيلهاش — حط قماشة تانية فوق الأولى.",
        "en": "Stop any bleeding by firmly pressing a clean cloth on the wound, unless you suspect a skull fracture. If the injury is serious, be careful not to move the person's head. If blood soaks through the cloth, do not remove it. Place another cloth over the first one.",
        "src": "mlp:head-injury"
      },
      {
        "t": "لو شاكك إن فيه كسر في الجمجمة، ماتضغطش على مكان النزيف على طول، وماتشيلش أي حاجة واقعة جوه الجرح. غطّي الجرح بشاش معقّم.",
        "en": "If you suspect a skull fracture, do not apply direct pressure to the bleeding site, and do not remove any debris from the wound. Cover the wound with sterile gauze dressing.",
        "src": "mlp:head-injury"
      },
      {
        "t": "حط كمّادات تلج على الأماكن المتورّمة (لفّ التلج في فوطة عشان ماياخدش على الجلد على طول).",
        "en": "Apply ice packs to swollen areas (cover ice in a towel so it does not directly touch the skin).",
        "src": "mlp:head-injury"
      }
    ],
    "dont": [
      {
        "t": "ماتحرّكش المصاب إلا للضرورة القصوى.",
        "en": "Do not move the person unless absolutely necessary.",
        "src": "mlp:head-injury"
      },
      {
        "t": "ماتشيلش أي حاجة غارزة أو نافرة من الجرح.",
        "en": "Do not remove any object sticking out of a wound.",
        "src": "mlp:head-injury"
      },
      {
        "t": "ماتهزّش المصاب لو باين عليه إنه مش مركّز أو سرحان.",
        "en": "Do not shake the person if they seem dazed.",
        "src": "mlp:head-injury"
      },
      {
        "t": "ماتشيلش الخوذة لو شاكك إن الإصابة في الراس خطيرة.",
        "en": "Do not remove a helmet if you suspect a serious head injury.",
        "src": "mlp:head-injury"
      },
      {
        "t": "ماتغسلش جرح الراس لو كان عميق أو بينزف كتير.",
        "en": "Do not wash a head wound that is deep or bleeding a lot.",
        "src": "mlp:head-injury"
      },
      {
        "t": "ماتشيلش طفل وقع ولسّه عليه أي علامة إصابة في الراس.",
        "en": "Do not pick up a fallen child with any sign of head injury.",
        "src": "mlp:head-injury"
      }
    ],
    "whenWhy": {
      "ar": "الراس والرقبة ممكن يبقى فيهم إصابة داخلية مش باينة، وأي تحريك غلط للعمود الفقري ممكن يزوّد الإصابة. وعلامات زي الترجيع المتكرر أو اختلاف حجم حدقتين العين معناها إن الدماغ اتأثر — عشان كده التثبيت والمراقبة أهم من أي حاجة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: صاحبك وقع من على الدرج وخبط راسه ومش قادر يحرّك إيده. ماتحرّكهوش، ثبّت راسه ورقبته بإيديك في خط واحد مع ظهره، وقّف أي نزيف بقماشة نضيفة، وكلّم الإسعاف واستناهم جنبه.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "حصلت إصابة في الراس، والمصاب [مش واعي / بينزف بشدة / بيترجّع / بطّل يتنفّس]، وعايزين إسعاف بسرعة."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مارّدش."
      }
    ],
    "whatToBuy": [
      {
        "item": "قماش نضيف أو شاش معقّم",
        "why": "للضغط على النزيف أو تغطية الجرح"
      },
      {
        "item": "كمّادات تلج وفوطة",
        "why": "تنزّل التورّم من غير ما التلج ياخد على الجلد على طول"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بأمراضه وأدويته وحساسيته",
      "افتح مكبّر الصوت وانت بتكلّم الإسعاف عشان إيديك تفضل ثابتة على راسه"
    ],
    "writeDown": [
      "وقت الإصابة وإزاي حصلت (وقوع / خبطة / ارتفاع)",
      "علامات ظهرت زي فقدان الوعي أو الترجيع وعدد مراته",
      "أدويته وأمراضه المزمنة لو معروفة"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Head injury",
        "url": "https://medlineplus.gov/ency/article/000028.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب ممكن يكون مشوّش وخايف أو مش فاهم اللي بيحصل — اتكلّم معاه بهدوء وطمّنه وخليه ثابت من غير ما تزنقه بأسئلة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ابعدوا وسيبوا مكان، وحد يكلّم الإسعاف — ماحدش يحرّكه.»"
      ],
      "toSelf": [
        "«هثبّت راسه ورقبته وأوقّف النزيف — مش هحرّكه من غير داعي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد جنبه في مستوى نظره، صوتك واطي وهادي، وإيدك ثابتة على جنبي راسه عشان يحس بالأمان ويفضل مستقر.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تثبّته وتكلّم الإسعاف وتفضل معاه لحد ما ييجوا ده تصرّف صح ومسؤول.",
      "en": ""
    },
    "variations": [
      "طفل وقع وعليه علامة إصابة في الراس: ماتشيلوش، ثبّته في مكانه وكلّم الإسعاف.",
      "فيه خوذة (موتوسيكل/عجلة): سيبها في راسه لو شاكك إن الإصابة خطيرة.",
      "النزيف بيزيد ونشّ في القماشة: حط قماشة تانية فوقها من غير ما تشيل الأولى."
    ],
    "prevention": [
      "لبس الخوذة على الموتوسيكل والعجلة، وحزام الأمان في العربية.",
      "أمّن البيت لكبار السن والأطفال ضد الوقوع (سجاجيد، درج، إضاءة كويسة)."
    ],
    "drill": {
      "ar": "احفظ الترتيب: ماتحرّكوش · ثبّت الراس والرقبة · وقّف النزيف · كلّم الإسعاف. جرّبها ذهنيًا دلوقتي.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما الإسعاف ياخده، أي حد اتخبط في راسه محتاج مراقبة قريّبة وتقليل مجهود ونشاط الفترة اللي بعدها، وأي علامة خطر جديدة روح المستشفى على طول.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Head injury",
        "url": "https://medlineplus.gov/ency/article/000028.htm",
        "srcId": "mlp:head-injury",
        "sha256": "1c5457c4a4",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "cuts-wounds",
    "title": {
      "ar": "قطوع وجروح نافذة",
      "en": "Cuts and puncture wounds"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "جرح أو قطع أو وخزة نافذة في الجلد وبينزف. أغلب الجروح البسيطة بتتغسل وتتغطّى في البيت — بس في علامات لازم عندها تروح لدكتور فورًا.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "النزيف شديد أو مش بيقف (مثلًا بعد ١٠ دقايق ضغط).",
        "en": "The bleeding is severe or cannot be stopped (for example, after 10 minutes of pressure).",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "الجرح كبير أو عميق، حتى لو النزيف مش شديد.",
        "en": "The wound is large or deep, even if the bleeding is not severe.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "الجرح فيه علامات عدوى زي سخونية واحمرار في المكان، إحساس بألم أو نبض، حرارة، ورم، خط أحمر طالع من الجرح، أو صديد.",
        "en": "The wound shows signs of infection such as warmth and redness in the area, a painful or throbbing sensation, fever, swelling, a red streak extending from the wound, or pus-like drainage.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "الشخص اتعضّ من إنسان أو حيوان.",
        "en": "The person has been bitten by a human or animal.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "فيه حاجة أو وسخ غايص في الجرح. ماتشلّهوش بنفسك.",
        "en": "An object or debris is stuck in the wound. Do not remove it yourself.",
        "src": "mlp:cuts-wounds"
      }
    ],
    "do": [
      {
        "t": "اغسل إيدك بصابون أو مطهّر مضاد للبكتيريا عشان تمنع العدوى.",
        "en": "Wash your hands with soap or antibacterial cleanser to prevent infection.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "اضغط على الجرح بإيدك مباشرة عشان توقّف النزيف.",
        "en": "Use direct pressure to stop the bleeding.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "بعدين اغسل الجرح كويس بصابون خفيف وميّه.",
        "en": "Then, wash the cut thoroughly with mild soap and water.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "حُط مرهم مضاد للبكتيريا ورباط نضيف مش هيلزق في الجرح.",
        "en": "Apply antibacterial ointment and a clean bandage that will not stick to the wound.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "اشطف الجرح النافذ ٥ دقايق تحت ميّه جارية، وبعدين اغسله بصابون.",
        "en": "Rinse the puncture for 5 minutes under running water. Then wash with soap.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "بصّ جوّه الجرح لو فيه أي حاجة (من غير ما تنكش فيه). لو لقيت حاجة، ماتشلهاش، وروح قسم الطوارئ.",
        "en": "Look (but do not poke around) for objects inside the wound. If found, don't remove them. Go to your emergency or urgent care center.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "لو مش شايف حاجة جوّه الجرح، بس فيه جزء من الحاجة اللي جرحتك ناقص، برضه دوّر على مساعدة طبية.",
        "en": "If you can't see anything inside the wound, but a piece of the object that caused the injury is missing, also seek medical attention.",
        "src": "mlp:cuts-wounds"
      }
    ],
    "dont": [
      {
        "t": "ماتفترضش إن الجرح البسيط نضيف عشان مش شايف تراب أو وسخ جوّه — اغسله دايمًا.",
        "en": "Do not assume that a minor wound is clean because you can't see dirt or debris inside. Always wash it.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "ماتتنفّسش على جرح مفتوح.",
        "en": "Do not breathe on an open wound.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "ماتحاولش تنضّف جرح كبير، خصوصًا بعد ما النزيف يبقى تحت السيطرة.",
        "en": "Do not try to clean a major wound, especially after the bleeding is under control.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "ماتشلّش حاجة طويلة أو غايصة جوّه عميق — دوّر على مساعدة طبية.",
        "en": "Do not remove a long or deeply stuck object. Seek medical attention.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "ماتزقّش ولا تنكش الوسخ اللي في الجرح — دوّر على مساعدة طبية.",
        "en": "Do not push or pick debris from a wound. Seek medical attention.",
        "src": "mlp:cuts-wounds"
      },
      {
        "t": "ماترجّعش أي جزء من الجسم مكانه بالزق. غطّيه بقماش نضيف لحد ما المساعدة الطبية توصل.",
        "en": "Do not push body parts back in. Cover them with clean material until medical help arrives.",
        "src": "mlp:cuts-wounds"
      }
    ],
    "whenWhy": {
      "ar": "غسل الإيد والجرح بيمنع العدوى، والضغط المباشر بيوقّف النزيف. الجرح الكبير أو العميق أو اللي فيه حاجة غايصة مش شغلانة بيت — محتاج دكتور.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: اتقطعت وإيدك بتنزف. تغسل إيدك، تضغط على الجرح بإيدك لحد ما النزيف يقف، تغسله بصابون خفيف وميّه، وتحط مرهم ورباط نضيف. لو النزيف مش واقف أو الجرح عميق — روح الطوارئ.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو النزيف شديد ومش بيقف، الجرح كبير أو عميق، فيه حاجة غايصة، أو عضّة إنسان أو حيوان."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيرد."
      }
    ],
    "whatToBuy": [
      {
        "item": "شاش ورباط نضيف",
        "why": "للضغط على الجرح وتغطيته من غير ما يلزق"
      },
      {
        "item": "مرهم مضاد للبكتيريا",
        "why": "يتحط على الجرح بعد الغسيل عشان يقلّل خطر العدوى"
      },
      {
        "item": "صابون خفيف ومطهّر لليدين",
        "why": "لغسيل الإيد والجرح كويس"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بحساسية الأدوية وأي أمراض مزمنة"
    ],
    "writeDown": [
      "اكتب إزاي وامتى حصل الجرح والحاجة اللي جرحتك — بتساعد الدكتور",
      "لو رحت الطوارئ: احكي بالتفصيل إزاي حصلت الإصابة"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Cuts and puncture wounds",
        "url": "https://medlineplus.gov/ency/article/000043.htm"
      }
    ],
    "othersPOV": {
      "ar": "اللي اتجرح ممكن يكون متوتّر أو خايف من منظر الدم — طمّنه واشتغل بهدوء وسرعة من غير لخبطة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اقعد وسيب إيدك، أنا هضغط على الجرح — هيقف.»"
      ],
      "toSelf": [
        "«أغسل · أضغط · أغطّي — ولو عميق أو مش واقف، طوارئ.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حركة هادية وواثقة، ماتتفرجش على الدم بخوف، ركّز على الضغط والتغطية.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تطلب إسعاف أو تروح طوارئ لجرح خطير حقك، مش مبالغة.",
      "en": ""
    },
    "variations": [
      "جرح بسيط في الصباع: نفس الخطوات — غسل، ضغط خفيف، مرهم ورباط.",
      "جرح كبير وبينزف بغزارة: ماتحاولش تنضّفه، اضغط وروح الطوارئ.",
      "حاجة غايصة في الجرح: ماتشلّهاش، غطّي حواليها وروح الطوارئ."
    ],
    "prevention": [
      "نضّف أي جرح بسيط بسرعة عشان تمنع العدوى — متفترضش إنه نضيف",
      "خلّي في البيت شنطة إسعافات فيها شاش ورباط نضيف ومطهّر"
    ],
    "drill": {
      "ar": "احفظ: اغسل · اضغط · غطّي. ولو عميق / مش واقف / فيه حاجة غايصة → طوارئ.",
      "en": ""
    },
    "after": {
      "ar": "راقب الجرح كام يوم؛ لو ظهرت علامات عدوى (احمرار، سخونية، صديد، خط أحمر) روح لدكتور.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Cuts and puncture wounds",
        "url": "https://medlineplus.gov/ency/article/000043.htm",
        "srcId": "mlp:cuts-wounds",
        "sha256": "91244c2b35",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "broken-bone",
    "title": {
      "ar": "عضمة مكسورة (كسر)",
      "en": "Broken bone"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حد وقع أو اتخبط وفيه شكّ في كسر — ألم وورم وصعوبة حركة أو تغيّر في شكل العضو. دورك تثبّته وتأمّنه من غير ما تحرّكه لحد ما الإسعاف يوصل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "الشخص مش بيرد أو بيفقد وعيه.",
        "en": "The person is not responding or is losing consciousness.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "عضمة طالعة بارزة من الجلد.",
        "en": "There is a bone projecting through the skin.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "نزيف شديد.",
        "en": "There is severe bleeding.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "المنطقة اللي تحت المفصل المصاب شاحبة أو باردة أو عرقانة أو زرقا.",
        "en": "An area below the injured joint is pale, cold, clammy, or blue.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "شكّ في كسر في الراس أو الرقبة أو الضهر.",
        "en": "There is a suspected broken bone in the head, neck, or back.",
        "src": "mlp:broken-bone"
      }
    ],
    "do": [
      {
        "t": "اتأكد إن مجرى الهوا والتنفّس شغّالين. لو محتاج، كلّم الإسعاف وابدأ تنفّس صناعي أو إنعاش قلبي أو توقيف نزيف.",
        "en": "Check the person's airway and breathing. If necessary, call 911 or the local emergency number and begin rescue breathing, CPR, or bleeding control.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "خلّي الشخص ثابت مايتحرّكش وطمّنه.",
        "en": "Keep the person still and calm.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "افحصه كويس ودوّر على إصابات تانية.",
        "en": "Examine the person closely for other injuries.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "في أغلب الحالات، لو الإسعاف وصل بسرعة، سيبهم هُمّا اللي يكمّلوا التصرّف.",
        "en": "In most cases, if medical help responds quickly, allow the medical personnel to take further action.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "لو الجلد متقطّع، لازم يتعالج على طول عشان تمنع العدوى. كلّم الإسعاف فورًا. ماتنفُخش على الجرح وماتنكِشْش فيه. حاول تغطّي الجرح عشان يبعد عن التلوّث، بشاش معقّم لو متوفّر. وماتحاولش تظبط الكسر في مكانه إلا لو معاك تدريب طبي يخلّيك تعمل كده.",
        "en": "If the skin is broken, it should be treated right away to prevent infection. Call emergency help right away. DO NOT breathe on the wound or probe it. Try to cover the wound to avoid further contamination. Cover with sterile dressings if they are available. Don't try to line up the fracture unless you are medically trained to do so.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "لو محتاج، ثبّت العضمة المكسورة بجبيرة أو حمّالة. الجبيرة ممكن تعملها من جرنال ملفوف أو شرايح خشب. ثبّت المنطقة اللي فوق العضمة المصابة واللي تحتها كمان.",
        "en": "If needed, immobilize the broken bone with a splint or sling. Possible splints include a rolled up newspaper or strips of wood. Immobilize the area both above and below the injured bone.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "حُط كمّادات تلج عشان تقلّل الألم والورم. ورفع الطرف المصاب كمان بيساعد على تقليل الورم.",
        "en": "Apply ice packs to reduce pain and swelling. Elevating the limb can also help to reduce swelling.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "اعمل خطوات تمنع الصدمة (الشوك): نيّمه على ظهره مفرود، وارفع رجليه حوالي ٣٠ سم فوق مستوى راسه، وغطّيه بجاكت أو بطانية. بس ماتحرّكوش خالص لو فيه شكّ في إصابة في الراس أو الرقبة أو الضهر.",
        "en": "Take steps to prevent shock. Lay the person flat, elevate the feet about 12 inches (30 centimeters) above the head, and cover the person with a coat or blanket. However, DO NOT move the person if a head, neck, or back injury is suspected.",
        "src": "mlp:broken-bone"
      }
    ],
    "dont": [
      {
        "t": "ماتحرّكش الشخص إلا لو العضمة المكسورة ثابتة.",
        "en": "DO NOT move the person unless the broken bone is stable.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "ماتحرّكش حد مصاب في الورك أو الحوض أو أعلى الرجل إلا للضرورة القصوى. ولو مضطر تحرّكه، اسحبه لمكان آمن من هدومه (زي كتاف القميص أو الحزام أو رجل البنطلون).",
        "en": "DO NOT move a person with an injured hip, pelvis, or upper leg unless it is absolutely necessary. If you must move the person, pull the person to safety by their clothes (such as by the shoulders of a shirt, a belt, or pant legs).",
        "src": "mlp:broken-bone"
      },
      {
        "t": "ماتحرّكش حد يحتمل يكون عنده إصابة في العمود الفقري.",
        "en": "DO NOT move a person who has a possible spine injury.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "ماتحاولش تعدّل عضمة أو تغيّر مكانها إلا لو الدورة الدموية باين إنها اتعطّلت ومفيش حد متدرّب طبيًا قريب.",
        "en": "DO NOT attempt to straighten a bone or change its position unless blood circulation appears hampered and no medically trained personnel are nearby.",
        "src": "mlp:broken-bone"
      },
      {
        "t": "ماتجرّبش تحرّك العضمة عشان تشوف بتتحرّك ولا لأ.",
        "en": "DO NOT test a bone's ability to move.",
        "src": "mlp:broken-bone"
      }
    ],
    "whenWhy": {
      "ar": "التحريك أو محاولة تعديل الكسر ممكن يزوّد الإصابة، خصوصًا لو فيه شكّ في العمود الفقري؛ والتثبيت والتهدئة بيقلّلوا الألم والورم ويحموا الإصابة لحد وصول المساعدة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: زميلك اتخبط ودراعه اتوّرم وشكلها اتغيّر. ماتحرّكهوش ولا تجرّب تحرّك الدراع؛ ثبّتها بجبيرة من جرنال ملفوف فوق وتحت مكان الكسر، حُط كمّادة تلج، ارفعها شوية، وكلّم الإسعاف.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو فيه فقدان وعي، أو نزيف شديد، أو عضمة طالعة من الجلد، أو شكّ في إصابة الراس/الرقبة/الضهر أو الورك/الحوض، أو مش قادر تثبّت الإصابة لوحدك."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيرد."
      }
    ],
    "whatToBuy": [
      {
        "item": "جبيرة (ممكن جرنال ملفوف أو شرايح خشب) وحمّالة",
        "why": "لتثبيت العضمة المكسورة فوق وتحت مكان الإصابة"
      },
      {
        "item": "كمّادات تلج",
        "why": "تقلّل الألم والورم"
      },
      {
        "item": "شاش معقّم",
        "why": "لتغطية الجرح المفتوح ومنع التلوّث"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بأمراضك وأدويتك",
      "صوّر الإصابة بالكاميرا قبل التثبيت — بتساعد الدكتور"
    ],
    "writeDown": [
      "مكان الإصابة وإزاي حصلت ووقتها",
      "أي تغيّر في لون أو حرارة المنطقة تحت الإصابة عشان تقوله للدكتور"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Broken bone",
        "url": "https://medlineplus.gov/ency/article/000001.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب خايف ووجعان وممكن يترعب لما يشوف التورّم أو العضمة — طمّنه، خلّيه ثابت، وكلّمه بهدوء.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ماحدش يحرّكه! سيبوه مكانه لحد ما الإسعاف يوصل — أنا هثبّت الإصابة.»"
      ],
      "toSelf": [
        "«مش هحرّكه ولا هعدّل العضمة — هثبّتها، أأمّنه، وأكلّم الإسعاف.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد جنبه في مستوى نظره، صوتك واطي وثابت، وإيدك على كتفه السليم تطمّنه.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تثبّت الإصابة وتستنى المتخصص تصرّف صح ومسؤول — التحريك بالعافية مش شجاعة.",
      "en": ""
    },
    "variations": [
      "طفل صغير رافض يحمّل على دراعه أو رجله بعد وقعة، أو مش عايز يحرّكها، أو شكلها باين متغيّر: اعتبرها كسر ودوّر على مساعدة طبية.",
      "كسر مفتوح والعضمة طالعة من الجلد: ماتنفُخش على الجرح، غطّيه بشاش معقّم، وكلّم الإسعاف فورًا.",
      "شكّ في إصابة الضهر أو الرقبة: ماتحرّكهوش خالص واستنى الإسعاف."
    ],
    "prevention": [
      "خلّي الأرضيات فاضية ومتنضّفة والسجاجيد متثبّتة عشان تقلّل الوقعات",
      "لبس واقي (خوذة/دعامات) في الرياضة والعجل والموتوسيكل",
      "إضاءة كويسة على السلالم ومسكة إيد للكبار"
    ],
    "drill": {
      "ar": "احفظ: ماتحرّكش · ثبّت فوق وتحت · تلج ورفع · كلّم الإسعاف.",
      "en": ""
    },
    "after": {
      "ar": "بعد التثبيت وتأمينه، وصّله لمستشفى للكشف والأشعة؛ حتى الكسور اللي مش طارئة محتاجة كشف طبي في وقته.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Broken bone",
        "url": "https://medlineplus.gov/ency/article/000001.htm",
        "srcId": "mlp:broken-bone",
        "sha256": "8ffc676de6",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "insect-bites",
    "title": {
      "ar": "قرص ولسع الحشرات",
      "en": "Insect bites and stings"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "برّه",
      "الحدائق والزراعة",
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حد اتقرص أو اتلسع من حشرة (نحلة/دبّور/نملة). أغلب اللسعات بسيطة وبتعدّي بتبريد بسيط، لكن أحيانًا بتسبّب تفاعل تحسّسي خطير بيقفل مجرى الهوا — لازم تراقب وتتصرّف بسرعة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "صعوبة في التنفّس، أو صفير في الصدر، أو قصر نفس.",
        "en": "Trouble breathing, wheezing, shortness of breath",
        "src": "mlp:insect-bites"
      },
      {
        "t": "تورّم في أي مكان في الوش أو جوّه البقّ.",
        "en": "Swelling anywhere on the face or in the mouth",
        "src": "mlp:insect-bites"
      },
      {
        "t": "ضيق في الزور أو صعوبة في البلع.",
        "en": "Throat tightness or difficulty swallowing",
        "src": "mlp:insect-bites"
      },
      {
        "t": "إحساس بضعف/هبوط.",
        "en": "Feeling weak",
        "src": "mlp:insect-bites"
      },
      {
        "t": "لون الجلد بيزرقّ.",
        "en": "Turning blue",
        "src": "mlp:insect-bites"
      }
    ],
    "do": [
      {
        "t": "طمّن المصاب وحاول تخلّيه هادي.",
        "en": "Reassure the person. Try to keep them calm.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "شيل الخواتم وأي حاجة ضاغطة قريّبة، لأن المكان المصاب ممكن يورم.",
        "en": "Remove nearby rings and constricting items because the affected area may swell.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "لو معاه حقنة إبينفرين أو شنطة إسعاف طوارئ، استخدمها — في ناس عندهم حساسية شديدة من لسع الحشرات وبيشيلوها معاهم.",
        "en": "Use the person's EpiPen or other emergency kit, if they have one. (Some people who have serious insect reactions carry it with them.)",
        "src": "mlp:insect-bites"
      },
      {
        "t": "لو لزم، عالجه من علامات الصدمة (الهبوط)، وافضل معاه لحد ما توصل المساعدة الطبية.",
        "en": "If appropriate, treat the person for signs of shock. Remain with the person until medical help arrives.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "حُط تلج ملفوف في فوطة على مكان اللسعة ١٠ دقايق، وبعدين شيله ١٠ دقايق، وكرّر العملية دي.",
        "en": "Place ice (wrapped in a washcloth) on the site of the sting for 10 minutes and then off for 10 minutes. Repeat this process.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "لو محتاج، خُد مضاد هيستامين أو دهّن كريم بيقلّل الهرش.",
        "en": "If necessary, take an antihistamine or apply creams that reduce itching.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "في الأيام اللي بعدها، راقب علامات العدوى (زي زيادة الاحمرار أو الورم أو الألم).",
        "en": "Over the next several days, watch for signs of infection (such as increasing redness, swelling, or pain).",
        "src": "mlp:insect-bites"
      }
    ],
    "dont": [
      {
        "t": "ماتربطش رباط ضاغط (تورنيكيه) حوالين المكان.",
        "en": "Do not apply a tourniquet.",
        "src": "mlp:insect-bites"
      },
      {
        "t": "ماتديهوش منبّهات ولا أسبرين ولا أي مسكّن ألم تاني إلا لو الدكتور بتاعك وصفه.",
        "en": "Do not give the person stimulants, aspirin, or other pain medicine unless prescribed by your health care provider.",
        "src": "mlp:insect-bites"
      }
    ],
    "whenWhy": {
      "ar": "بتشيل الخواتم قبل ما المكان يورم عشان ماتزنقش الإيد؛ والتلج بيقلّل الورم والألم؛ وأخطر حاجة هي التفاعل التحسّسي اللي بيضيّق مجرى الهوا — فده اللي بتراقبه بالأساس.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: صاحبك اتلسع في إيده من دبّور. تشيل الخاتم بسرعة، تحط تلج ملفوف في فوطة ١٠ دقايق وبعدين تشيله ١٠ دقايق، وتفضل تراقبه — لو بدأ يلهت أو وشّه ورم، تكلّم الإسعاف على طول.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "حد اتلسع وظهرت عليه صعوبة تنفّس، أو ورم في الوش أو البقّ، أو ضيق في الزور، أو ضعف، أو الجلد بيزرقّ — محتاجين إسعاف فورًا."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مردّش."
      }
    ],
    "whatToBuy": [
      {
        "item": "تلج وفوطة نضيفة",
        "why": "كمّادة باردة على مكان اللسعة بتقلّل الورم والألم"
      },
      {
        "item": "مضاد هيستامين وكريم مضاد للهرش",
        "why": "بيهدّي التفاعل البسيط والهرش"
      },
      {
        "item": "حقنة إبينفرين طوارئ (لو عندك حساسية شديدة معروفة)",
        "why": "لعلاج التفاعل التحسّسي الخطير من غير تأخير"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بنوع الحساسية وأدويتك"
    ],
    "writeDown": [
      "لو عندك حساسية معروفة من لسع الحشرات: اكتبها في Medical ID مع أدويتك",
      "وقت اللسعة والأعراض اللي ظهرت — بتساعد الدكتور"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Insect bites and stings",
        "url": "https://medlineplus.gov/ency/article/000033.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب ممكن يخاف أو يتكسف من ردة فعله — طمّنه بهدوء وخلّيه يعرف إنه لازم يقولّك على طول لو حسّ بضيق نفس أو دوخة أو نمنمة في الزور.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اتلسع وبيورم — هاتوا تلج وفوطة، ولو نفسه ضاق نكلّم الإسعاف فورًا.»"
      ],
      "toSelf": [
        "«أشيل الخواتم وأبرّد المكان وأراقب نفسه — لو اتغيّر، أتصل بالإسعاف.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد جنبه بهدوء، راقب تنفّسه ولون وشّه، وطمّنه بنبرة واثقة من غير ما تخوّفه.",
      "en": ""
    },
    "rights": {
      "ar": "من حقه إنك تطمّنه وتتصرّف بسرعة لو التفاعل بقى خطير — التأخير في الحساسية الشديدة خطر على حياته.",
      "en": ""
    },
    "variations": [
      "عنده حساسية معروفة ومعاه شنطة طوارئ أو حقنة إبينفرين: استخدمها على طول وكلّم الإسعاف.",
      "ظهرت عليه علامات هبوط/صدمة: افضل معاه وراقبه لحد ما توصل المساعدة الطبية."
    ],
    "prevention": [
      "لو عندك تفاعل تحسّسي شديد في الجسم كله سابق: خلّي معاك شنطة الطوارئ فين ما تروح.",
      "راقب مكان اللسعة كام يوم بعدها عشان تلاحظ علامات العدوى بدري."
    ],
    "drill": {
      "ar": "احفظ: شيل الخواتم · برّد بالتلج · راقب النفس — ولو ضاق النفس أو الوش ورم، إسعاف فورًا.",
      "en": ""
    },
    "after": {
      "ar": "راقب المكان كام يوم؛ لو الاحمرار أو الورم أو الألم بيزيد يبقى في عدوى محتاجة دكتور. ولو حصل تفاعل تحسّسي شديد في الجسم كله، المفروض تتحوّل لدكتور حساسية وتاخد شنطة طوارئ تشيلها معاك.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Insect bites and stings",
        "url": "https://medlineplus.gov/ency/article/000033.htm",
        "srcId": "mlp:insect-bites",
        "sha256": "bbaa53e3f1",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "eye-injury",
    "title": {
      "ar": "طوارئ العين",
      "en": "Eye emergencies"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حاجة دخلت عين الشخص، أو اترشّت عليها مادة كيميائية، أو اتخبطت. حسب نوع الإصابة ممكن تغسلها بالميّه، أو تسيب الجسم مكانه وتغطّيها — والأهم إنك توصّله لمساعدة طبية بسرعة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "باين إن فيه خدش أو قطع أو حاجة دخلت (اخترقت) كرة العين.",
        "en": "There appears to be a scratch, cut, or something has gone into (penetrated) the eyeball.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "أي مادة كيميائية دخلت العين.",
        "en": "Any chemical gets into the eye.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "أي تغيّر في النظر (زي عدم وضوح الرؤية أو ازدواج الرؤية).",
        "en": "There is any change in vision (such as blurred or double vision).",
        "src": "mlp:eye-injury"
      },
      {
        "t": "غثيان أو صداع مع ألم العين (ده ممكن يكون علامة على المياه الزرقا أو جلطة).",
        "en": "Nausea or headache occur with the eye pain (this may be a symptom of glaucoma or stroke).",
        "src": "mlp:eye-injury"
      },
      {
        "t": "فيه نزيف مش متحكّم فيه.",
        "en": "There is uncontrollable bleeding.",
        "src": "mlp:eye-injury"
      }
    ],
    "do": [
      {
        "t": "افحص العين في مكان إضاءته كويسة، ومتكبسش على العين.",
        "en": "Examine the eye in a well-lighted area. Do not press on the eye.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "عشان تلاقي الجسم، خلّي الشخص يبصّ فوق وتحت، وبعدين يمين وشمال.",
        "en": "To find the object, have the person look up and down, then from side to side.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "لو الجسم على سطح العين، اغسلها بالراحة بميّه نضيفة. لو متوفّر، استخدم قطّارة أو قزازة قطرة زي الدموع الصناعية من فوق الركن الخارجي للعين، ومتلمسش العين نفسها بسنّ القطّارة أو القزازة.",
        "en": "If the object is on the surface of the eye, try gently rinsing the eye with clean water. If available, use an eye dropper or a bottle of eye drops, such as artificial tears, positioned above the outer corner of the eye. Do not touch the eye itself with the dropper or bottle tip.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "سيب الجسم مكانه، ومتحاولش تشيله، ومتلمسهوش ومتحطّش عليه أي ضغط.",
        "en": "Leave the object in place. Do not try to remove the object. Do not touch it or apply any pressure to it.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "اربط العينين الاتنين برباط مرخي؛ تغطية العينين بتساعد على منع حركة العين. لو الجسم كبير، حط كوباية ورق نضيفة أو حاجة زيها على العين المصابة وثبّتها بشريط لاصق. ده بيمنع الضغط على الجسم اللي ممكن يأذي العين أكتر.",
        "en": "Loosely bandage both eyes. Covering both eyes helps prevent eye movement. If the object is large, place a clean paper cup or something similar over the injured eye and tape it in place. This prevents the object from being pressed on, which can injure the eye further.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "اغسلها فورًا بخيط ميّه بارد رفيع من الحنفية. لفّ راس الشخص بحيث تبقى العين المصابة لتحت وعلى الجنب. وانت ماسك جفن العين مفتوح، سيب ميّة الحنفية تغسل العين لمدة ١٥ دقيقة.",
        "en": "Flush with a gentle stream of cool tap water right away. Turn the person's head so the injured eye is down and to the side. Holding the eyelid open, allow running water from the faucet to flush the eye for 15 minutes.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "فضّل تغسل العين بميّه نضيفة أو محلول ملحي لمدة ١٥ دقيقة على الأقل.",
        "en": "Keep flushing the eye with clean water or saline solution for at least 15 minutes.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "دوّر على مساعدة طبية على طول. متأخّرش.",
        "en": "Get medical help right away. Do not delay.",
        "src": "mlp:eye-injury"
      }
    ],
    "dont": [
      {
        "t": "متكبسش ولا تفرك العين المصابة.",
        "en": "Do not press or rub an injured eye.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "متشيلش العدسات اللاصقة إلا لو في تورّم سريع بيحصل، أو في إصابة كيميائية والعدسات ماطلعتش مع غسيل الميّه، أو مش قادر توصل لمساعدة طبية بسرعة.",
        "en": "Do not remove contact lenses unless rapid swelling is occurring, there is a chemical injury and the contacts did not come out with the water flush, or you cannot get prompt medical help.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "متحاولش تشيل جسم غريب أو أي حاجة باينة إنها مغروزة (مثبّتة) في أي جزء من العين. دوّر على مساعدة طبية على طول.",
        "en": "Do not attempt to remove a foreign body or any object that appears to be embedded (stuck) in any part of the eye. Get medical help right away.",
        "src": "mlp:eye-injury"
      },
      {
        "t": "متستخدمش عيدان القطن ولا الملقاط ولا أي حاجة تانية على الجزء الملوّن من العين. عيدان القطن تتستخدم بس على جوّه أو برّه الجفن أو على بياض العين.",
        "en": "Do not use cotton swabs, tweezers, or anything else on the colored part of the eye. Cotton swabs should only be used on the inside or outside of the eyelid or on the white of the eye.",
        "src": "mlp:eye-injury"
      }
    ],
    "whenWhy": {
      "ar": "الكبس أو الفرك أو محاولة نزع جسم مغروز ممكن يأذي العين أكتر. المواد الكيميائية بتأذي بسرعة، فالغسيل الفوري بيقلّل الضرر. وتغطية العينين الاتنين بتقلّل حركة العين لحد ما توصل للدكتور.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: صاحبك اترشّ منظّف في عينه. توديه على الحنفية على طول، تلفّ راسه والعين المصابة لتحت وعلى الجنب، وتفضل تغسل بالميّه ١٥ دقيقة وانت ماسك جفنه مفتوح، وبعدها تودّيه المستشفى.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو حاجة اخترقت العين، أو مادة كيميائية دخلتها، أو نزيف مش متحكّم فيه، أو تغيّر في النظر."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "ميّه نضيفة أو محلول ملحي",
        "why": "لغسيل العين من الأجسام الصغيرة أو المواد الكيميائية"
      },
      {
        "item": "كوباية ورق نضيفة وشريط لاصق",
        "why": "لتغطية العين المصابة من غير ضغط لو الجسم كبير"
      },
      {
        "item": "قطّارة أو قطرة دموع صناعية",
        "why": "لغسيل جسم صغير من على سطح العين"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID",
      "استخدم نور فلاش الموبايل عشان تفحص العين في إضاءة كويسة"
    ],
    "writeDown": [
      "نوع الإصابة ووقتها: جسم غريب ولا مادة كيميائية ولا خبطة",
      "لو مادة كيميائية: اسمها من على العبوة عشان تقوله للدكتور",
      "لو بيلبس عدسات لاصقة"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Eye emergencies",
        "url": "https://medlineplus.gov/ency/article/000054.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص المصاب بيكون خايف وبيتألم، وغريزته إنه يفرك عينه — طمّنه وامنعه بهدوء إنه يفركها.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«متفركش عينك — هنغسلها بالميّه ونروح للدكتور.»"
      ],
      "toSelf": [
        "«مش هحاول أشيل حاجة مغروزة — هغطّي وأوصّله بسرعة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك بهدوء وثقة، امسك إيده بعيد عن عينه بلطف، وطمّنه بصوت واطي.",
      "en": ""
    },
    "rights": {
      "ar": "غسيل العين فورًا والوصول لمساعدة طبية حقّه، ومسؤوليتك تأمّنه من غير ما تأذيه أكتر.",
      "en": ""
    },
    "variations": [
      "مادة كيميائية في عين واحدة أو الاتنين: اغسل فورًا ١٥ دقيقة، ولو المادة على أجزاء تانية من الجسم خلّيه ياخد دُش.",
      "جسم مغروز أو كبير: سيبه مكانه، غطّي العينين، ومتضغطش عليه.",
      "رمش أو جسم صغير على السطح: اغسل بالراحة بميّه نضيفة."
    ],
    "prevention": [
      "لبس نضّارة واقية وقت الشغل اللي فيه رذاذ أو شظايا",
      "خزّن المنظّفات والمواد الكيميائية بعيد وبطريقة آمنة"
    ],
    "drill": {
      "ar": "احفظ: مادة كيميائية = اغسل فورًا ١٥ دقيقة. جسم مغروز = سيبه وغطّي. أي إصابة خطيرة = مستشفى على طول.",
      "en": ""
    },
    "after": {
      "ar": "لو فضل إحساس بخدش أو انزعاج بسيط بعد شيل رمش أو جسم صغير، المفروض يروح في يوم أو يومين؛ لو الانزعاج أو عدم وضوح الرؤية استمر، دوّر على مساعدة طبية.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Eye emergencies",
        "url": "https://medlineplus.gov/ency/article/000054.htm",
        "srcId": "mlp:eye-injury",
        "sha256": "4fb150b9ce",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "shock",
    "title": {
      "ar": "صدمة (هبوط حاد في الدورة الدموية)",
      "en": "Shock"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "الصدمة حالة طارئة وخطيرة لازم تتصرّف فيها بسرعة. أهم حاجة: اطلب إسعاف على طول، أمّن تنفّسه، دفّيه، ونيّمه في وضع الصدمة لحد ما المساعدة توصل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "اتصل بالإسعاف في أي وقت تظهر فيه أعراض صدمة على الشخص، وافضل معاه واتبع خطوات الإسعاف لحد ما تيجي المساعدة الطبية.",
        "en": "Call 911 or the local emergency number any time a person has symptoms of shock. Stay with the person and follow the first aid steps until medical help arrives.",
        "src": "mlp:shock"
      }
    ],
    "do": [
      {
        "t": "اتصل بالإسعاف على طول عشان تجيب مساعدة طبية فورية.",
        "en": "Call 911 or the local emergency number for immediate medical help.",
        "src": "mlp:shock"
      },
      {
        "t": "اكشف على مجرى هوا الشخص وتنفّسه والدورة الدموية. ولو لزم الأمر، ابدأ تنفّس صناعي وإنعاش قلبي رئوي (CPR).",
        "en": "Check the person's airway, breathing, and circulation. If necessary, begin rescue breathing and CPR.",
        "src": "mlp:shock"
      },
      {
        "t": "حتى لو الشخص بيتنفّس لوحده، فضّل تتابع معدّل تنفّسه كل ٥ دقايق على الأقل لحد ما تيجي المساعدة.",
        "en": "Even if the person is able to breathe on their own, continue to check rate of breathing at least every 5 minutes until help arrives.",
        "src": "mlp:shock"
      },
      {
        "t": "لو الشخص واعي ومفيش عنده إصابة في الراس أو الرجل أو الرقبة أو العمود الفقري، حطّه في وضع الصدمة: نيّمه على ضهره وارفع رجليه حوالي ٣٠ سم. ماترفعش راسه. ولو رفع رجليه هيوجّعه أو يضرّه، سيبه نايم على مسطّح.",
        "en": "If the person is conscious and does not have an injury to the head, leg, neck, or spine, place the person in the shock position. Lay the person on their back and elevate their legs about 12 inches (30 centimeters). Do not elevate their head. If raising the legs will cause pain or potential harm, leave the person lying flat.",
        "src": "mlp:shock"
      },
      {
        "t": "قدّم الإسعافات المناسبة لأي جروح أو إصابات أو أمراض.",
        "en": "Give appropriate first aid for any wounds, injuries, or illnesses.",
        "src": "mlp:shock"
      },
      {
        "t": "دفّي الشخص وخلّيه مرتاح، وفكّ أي هدوم ضيّقة.",
        "en": "Keep the person warm and comfortable. Loosen tight clothing.",
        "src": "mlp:shock"
      },
      {
        "t": "لو مش شاكّ في إصابة بالعمود الفقري، لُفّ الشخص أو راسه على جنب عشان تمنع الشرقة.",
        "en": "Turn the person or their head to one side to prevent choking if you do not suspect an injury to the spine.",
        "src": "mlp:shock"
      },
      {
        "t": "لو فيه شكّ في إصابة بالعمود الفقري، لفّه بطريقة «اللفّة الواحدة» بدل كده: خلّي راسه ورقبته وضهره على خط واحد، ولفّ الجسم والراس كوحدة واحدة.",
        "en": "If a spinal injury is suspected, \"log roll\" the person instead. To do this, keep the person's head, neck, and back in line, and roll the body and head as a unit.",
        "src": "mlp:shock"
      }
    ],
    "dont": [
      {
        "t": "ماتديش الشخص أي حاجة بقّه، لا أكل ولا شرب.",
        "en": "Do not give the person anything by mouth, including anything to eat or drink.",
        "src": "mlp:shock"
      },
      {
        "t": "ماتحرّكش الشخص لو عنده إصابة معروفة أو مشكوك فيها في العمود الفقري.",
        "en": "Do not move the person with a known or suspected spinal injury.",
        "src": "mlp:shock"
      },
      {
        "t": "ماتستنّاش أعراض الصدمة الخفيفة تبقى أوحش قبل ما تطلب المساعدة الطبية الطارئة.",
        "en": "Do not wait for milder shock symptoms to worsen before calling for emergency medical help.",
        "src": "mlp:shock"
      }
    ],
    "whenWhy": {
      "ar": "في الصدمة كل ثانية بتفرق: طلب الإسعاف بدري بيكسب وقت، ووضع الصدمة برفع الرجلين بيساعد الدم يوصل للجسم، والتدفية وفكّ الهدوم الضيقة بيريّحوا الشخص. أي حاجة في البق ممكن تشرّقه، ولو فيه شكّ في العمود الفقري التحريك خطر.",
      "en": ""
    },
    "how": {
      "ar": "مثال: حد اتعرض لحادثة وظهرت عليه أعراض صدمة وهو واعي ومفيش إصابة في ظهره أو رقبته — تطلب إسعاف، تنيّمه على ضهره وترفع رجليه حوالي ٣٠ سم، تفكّ الهدوم الضيقة وتدفّيه، وتفضل تتابع تنفّسه كل ٥ دقايق لحد ما الإسعاف يوصل.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "فيه حد ظهرت عليه أعراض صدمة ومحتاج إسعاف فورًا — قولّهم المكان بالظبط وحالة تنفّسه."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيردّ."
      }
    ],
    "whatToBuy": [
      {
        "item": "بطانية أو أي حاجة تدفّي بيها",
        "why": "تحافظ على دفا الشخص لحد ما الإسعاف ييجي"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بمعلوماتك الطبية",
      "شغّل مكبّر الصوت وانت بتكلّم الإسعاف عشان إيديك تفضل حرّة"
    ],
    "writeDown": [
      "وقت بداية الأعراض واللي حصل قبلها (حادثة/نزيف/مرض)",
      "الأدوية والحساسية لو معروفة"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Shock",
        "url": "https://medlineplus.gov/ency/article/000039.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص في الصدمة ممكن يكون خايف ومش قادر يتكلم كويس — قرّبله، طمّنه بصوت هادي، وخلّيه حاسس إنك موجود معاه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اتصلوا بالإسعاف حالًا، وساعدوني أنيّمه وأرفع رجليه.»"
      ],
      "toSelf": [
        "«هطلب إسعاف بسرعة، أأمّن تنفّسه وأدفّيه لحد ما ييجي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك بثقة وهدوء، اقعد قريب من مستواه، وخليك مطمّن من غير هلع.",
      "en": ""
    },
    "rights": {
      "ar": "طلب الإسعاف والتدخّل لإنقاذ حد في خطر تصرّف مسؤول ومن حقك.",
      "en": ""
    },
    "variations": [
      "فيه شكّ في إصابة العمود الفقري: ماتحرّكهوش، ولو لازم تقلبه استخدم «اللفّة الواحدة» والجسم متماسك.",
      "الشخص فاقد الوعي: أمّن مجرى الهوا وابدأ إنعاش لو محتاج، ولُفّه على جنبه لو مفيش شكّ في العمود الفقري."
    ],
    "prevention": [
      "قدّم إسعاف بدري لأي جرح أو إصابة أو مرض قبل ما الحالة تتطوّر لصدمة.",
      "ماتستنّاش الأعراض الخفيفة تبقى أوحش — اطلب مساعدة طبية بدري."
    ],
    "drill": {
      "ar": "احفظ: نادِ الإسعاف · أمّن التنفّس · نيّمه وارفع رجليه · دفّيه · تابعه كل ٥ دقايق.",
      "en": ""
    },
    "after": {
      "ar": "فضّل مع الشخص لحد ما الإسعاف ياخده، وبلّغ المسعفين بكل اللي شفته وعملته.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Shock",
        "url": "https://medlineplus.gov/ency/article/000039.htm",
        "srcId": "mlp:shock",
        "sha256": "3229ac4846",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "chemical-burn",
    "title": {
      "ar": "حرق كيماوي",
      "en": "Chemical burn or reaction"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت",
      "الشغل",
      "المعمل"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حد اتعرّض لمادة كيماوية بتحرق الجلد أو العين. دورك: تأمّن نفسك الأول، تبعّد مصدر الكيماوي، وتغسل المكان بميّه جارية باردة زي ما الخطوات بتقول.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "صعوبة في التنفّس",
        "en": "Call for medical help right away if the person is having difficulty breathing, having seizures, or unconscious.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "تشنّجات",
        "en": "Call for medical help right away if the person is having difficulty breathing, having seizures, or unconscious.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "فقدان الوعي",
        "en": "Call for medical help right away if the person is having difficulty breathing, having seizures, or unconscious.",
        "src": "mlp:chemical-burn"
      }
    ],
    "do": [
      {
        "t": "اتأكد إن كل اللي بينقذوا لابسين وقاية مناسبة — ممكن تشمل واقي للعين ووقاية للجلد.",
        "en": "Make sure that all rescuers have appropriate safety gear, this may include eye protection and skin protection.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "طلّع المصاب من مكان التعرّض، أو اتأكد إن سبب الحرق اتشال. حاول ماتلمسش المادة بنفسك. لو الكيماوي ناشف، انفض الزيادة بره من غير ما يطير في عينيك أو عين المصاب. اخلع أي هدوم أو مجوهرات.",
        "en": "Remove the victim from the area of exposure, or make sure the cause of the burn or exposure has been removed. Try not to come in contact with it yourself. If the chemical is dry, brush off any excess. Avoid brushing it into your eyes or the victim's eyes. Remove any clothing and jewelry.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "اغسل الكيماويات من على سطح الجلد بميّه باردة جارية لمدة ١٥ دقيقة أو أكتر — إلا لو التعرّض كان للجير الناشف (أكسيد الكالسيوم، اللي بيتسمّى كمان «الجير الحي») أو لمعادن زي الصوديوم والبوتاسيوم والمغنيسيوم والفوسفور والليثيوم.",
        "en": "Flush the chemicals off the skin surface using cool running water for 15 minutes or more unless the chemical exposure is to dry lime (calcium oxide, also called 'quick lime') or to elemental metals such as sodium, potassium, magnesium, phosphorous, and lithium.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "عالج الشخص من الصدمة (الهبوط) لو باين عليه إغماء أو شحوب، أو لو تنفّسه سطحي وسريع.",
        "en": "Treat the person for shock if they appear faint, pale, or if there is shallow, rapid breathing.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "حُط كمّادات باردة مبلولة عشان تخفّف الألم.",
        "en": "Apply cool, wet compresses to relieve pain.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "لفّ المكان المحروق بشاش معقّم وناشف (لو متوفّر) أو قماشة نضيفة، واحمي المكان من الضغط والاحتكاك.",
        "en": "Wrap the burned area with a dry sterile dressing (if possible) or clean cloth. Protect the burned area from pressure and friction.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "الحروق الكيماوية البسيطة غالبًا بتطيب من غير علاج إضافي. لكن لو فيه حرق من الدرجة التانية أو التالتة، أو رد فعل في الجسم كله، دوّر على مساعدة طبية فورًا. في الحالات الشديدة، ماتسبش الشخص لوحده وراقبه كويس لأي رد فعل بيأثّر على الجسم كله.",
        "en": "Minor chemical burns will most often heal without further treatment. However, if there is a second or third-degree burn or if there is an overall body reaction, get medical help right away. In severe cases, don't leave the person alone and watch carefully for reactions affecting the entire body.",
        "src": "mlp:chemical-burn"
      }
    ],
    "dont": [
      {
        "t": "ماتحطّش أي وصفة بيتية زي مرهم أو دهان على الحرق الكيماوي.",
        "en": "Do not apply any household remedy such as ointment or salve to a chemical burn.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "ماتخليش الكيماوي يتلوّثك إنت وانت بتسعف.",
        "en": "Do not become contaminated by the chemical as you give first aid.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "ماتفقعش أي فقاعة (بثرة) وماتشيلش الجلد الميت من الحرق.",
        "en": "Do not disturb a blister or remove dead skin from a chemical burn.",
        "src": "mlp:chemical-burn"
      },
      {
        "t": "ماتحاولش تعادل أي مادة كيماوية من غير ما تستشير مركز السموم أو دكتور.",
        "en": "Do not try to neutralize any chemical without consulting the poison control center or a health care provider.",
        "src": "mlp:chemical-burn"
      }
    ],
    "whenWhy": {
      "ar": "الكيماوي بيفضل بيأكل في الجلد طول ما هو موجود، عشان كده الغسل بالميّه بيوقف الأذى. بس فيه مواد زي الجير الناشف والمعادن النشطة الميّه بتزوّد مصيبتها — دي بتتشال ناشفة الأول.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: اتكب منظّف قوي على إيد زميلك. تلبس جوانتي ووقاية للعين، تخلع الخاتم والغِوارة، تنفض أي بودرة ناشفة بره، وبعدين تحط الإيد تحت ميّه جارية باردة ١٥ دقيقة أو أكتر، وتغطّيها بقماشة نضيفة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو فيه صعوبة تنفّس أو تشنّجات أو فقدان وعي، أو حرق درجة تانية/تالتة أو رد فعل في الجسم كله. واسألهم كمان إزاي تتصرّف مع نوع الكيماوي ده قبل ما تعادله بأي حاجة."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو مقدرتش توصل للإسعاف."
      }
    ],
    "whatToBuy": [
      {
        "item": "ميّه جارية باردة",
        "why": "لغسل الكيماوي من على سطح الجلد"
      },
      {
        "item": "شاش معقّم ناشف أو قماشة نضيفة",
        "why": "لتغطية الحرق وحمايته من الضغط والاحتكاك"
      },
      {
        "item": "جوانتي ووقاية للعين",
        "why": "تحميك إنت من إن الكيماوي يوصلّك وانت بتسعف"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID"
    ],
    "writeDown": [
      "اسم المادة الكيماوية اللي سببت الحرق ووقت التعرّض — بيساعد الدكتور"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Chemical burn or reaction",
        "url": "https://medlineplus.gov/ency/article/000059.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب بيكون متوجّع وخايف. متلومهوش وماتزعّقش — طمّنه وانت بتغسل المكان، واشرحله إنك بتشيل الكيماوي عنه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ابعدوا عن المكان، وجيبوا ميّه جارية بسرعة.»"
      ],
      "toSelf": [
        "«أأمّن نفسي الأول، أشيل الكيماوي، وأغسل بالميّه.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حركة هادية وواثقة، تلبس وقايتك من غير هلع، وتفضل جنب المصاب.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تحمي نفسك أثناء الإنقاذ وتطلب إسعاف عند الخطر تصرّف مسؤول ومن حقّك.",
      "en": ""
    },
    "variations": [
      "لو الكيماوي ناشف (بودرة): انفضه بره الأول قبل الميّه.",
      "جير حي أو معادن نشطة (صوديوم/بوتاسيوم…): ماتغسلش بالميّه — دي بتزوّد الحرق.",
      "حرق درجة تانية أو تالتة أو رد فعل عام: مساعدة طبية فورًا وماتسيبوش لوحده."
    ],
    "prevention": [
      "خزّن المواد الكيماوية بعيد عن الأطفال وفي عبوّاتها الأصلية.",
      "البس جوانتي ووقاية للعين وانت بتستعمل منظّفات أو مواد قوية.",
      "ماتخلطش المنظّفات مع بعض (زي الكلور والنشادر)."
    ],
    "drill": {
      "ar": "احفظ: أمّن نفسك · شيل الكيماوي · اغسل بالميّه · غطّي واطلب مساعدة.",
      "en": ""
    },
    "after": {
      "ar": "بعد الإسعاف الأولي، حتى الحروق البسيطة راقبها؛ ولو الحرق عميق أو فيه رد فعل عام روح المستشفى على طول.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Chemical burn or reaction",
        "url": "https://medlineplus.gov/ency/article/000059.htm",
        "srcId": "mlp:chemical-burn",
        "sha256": "fe2e4f64d4",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "hypothermia",
    "title": {
      "ar": "انخفاض حرارة الجسم (هبوط الحرارة)",
      "en": "Hypothermia"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "برد شديد / شتا",
      "مية باردة"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "جسم الشخص برد أوي من التعرّض للبرد لحد ما حرارته نزلت — ممكن يتلخبط أو يتصعّب عليه التفكير. دورك تدفّيه بالراحة وتطلب إسعاف بسرعة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "أي شك إن حد عنده انخفاض حرارة = اتصل بالإسعاف على طول، واعمل الإسعافات وانت مستنّي المساعدة توصل.",
        "en": "Call 911 or the local emergency number anytime you suspect someone has hypothermia. Give first aid while waiting for emergency help.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "تشويش أو صعوبة في التفكير — علامة خطر لازم إسعاف فورًا.",
        "en": "If the person has any symptoms of hypothermia that are present, especially confusion or problems thinking, call 911 or the local emergency number right away.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "فقدان الوعي أو تنفّس أقل من ٦ أنفاس في الدقيقة.",
        "en": "If the person is unconscious, check airway, breathing, and circulation. If necessary, begin rescue breathing or CPR. If the victim is breathing fewer than 6 breaths per minute, begin rescue breathing.",
        "src": "mlp:hypothermia"
      }
    ],
    "do": [
      {
        "t": "لو ظهرت على الشخص أي أعراض انخفاض في الحرارة، خصوصًا التشويش أو صعوبة التفكير، اتصل بالإسعاف على طول.",
        "en": "If the person has any symptoms of hypothermia that are present, especially confusion or problems thinking, call 911 or the local emergency number right away.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "لو الشخص فاقد الوعي، اتأكد من مجرى الهوا والتنفّس والدورة الدموية. ولو لزم الأمر، ابدأ تنفّس صناعي أو إنعاش قلبي رئوي. ولو بيتنفّس أقل من ٦ أنفاس في الدقيقة، ابدأ التنفّس الصناعي.",
        "en": "If the person is unconscious, check airway, breathing, and circulation. If necessary, begin rescue breathing or CPR. If the victim is breathing fewer than 6 breaths per minute, begin rescue breathing.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "الشخص اللي حرارته نزلت بشدة لازم يتبعّد عن الجو البارد بأقل مجهود ممكن، عشان الدفا ميتحوّلش من جوّة جسمه لعضلاته. أما اللي حرارته نزلت بسيط جدًا، فالمجهود العضلي بيتعتبر آمن.",
        "en": "Victims of severe hypothermia should be removed from the cold environment with as little exertion as possible. This helps to avoid warmth from being shunted from the person's core to the muscles. In a very mildly hypothermic person, muscular exercise is thought to be safe, however.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "كل ما أمكن، اشيل أي هدوم مبلولة أو ضيّقة وبدّلها بهدوم ناشفة وواسعة. وغطّي الشخص ببطاطين دافية لو متوفّرة.",
        "en": "Whenever possible, remove any wet or tight clothes and replace them with dry, loose clothing. Cover the person with warm blankets if available.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "دفّي الشخص. ولو لزم، استخدم دفا جسمك انت عشان تساعد في التدفئة. حُط كمّادات دافية على الرقبة وجدار الصدر والفخذ. ولو الشخص واعي ويقدر يبلع بسهولة، اديله سوايل دافية ومحلّاة ومن غير كحول عشان تساعد في التدفئة.",
        "en": "Warm the person. If necessary, use your own body heat to aid the warming. Apply warm compresses to the neck, chest wall, and groin. If the person is alert and can easily swallow, give warm, sweetened, nonalcoholic fluids to aid the warming.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "افضل مع الشخص لحد ما المساعدة الطبية توصل.",
        "en": "Stay with the person until medical help arrives.",
        "src": "mlp:hypothermia"
      }
    ],
    "dont": [
      {
        "t": "ماتفترضش إن حد لقيته ملقّي من غير حركة في البرد يبقى ميّت خلاص.",
        "en": "Do not assume that someone found lying motionless in the cold is already dead.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "ماتستخدمش حرارة مباشرة (زي المية السخنة، أو وسادة تدفئة، أو لمبة حرارة) عشان تدفّي الشخص.",
        "en": "Do not use direct heat (such as hot water, a heating pad, or a heat lamp) to warm the person.",
        "src": "mlp:hypothermia"
      },
      {
        "t": "ماتديش الشخص كحول.",
        "en": "Do not give the person alcohol.",
        "src": "mlp:hypothermia"
      }
    ],
    "whenWhy": {
      "ar": "المجهود الزيادة أو التسخين المباشر ممكن يأذي الشخص؛ عشان كده بنحرّكه بأقل مجهود وندفّيه بالراحة، ومنستخدمش سخّان مباشر على جسمه.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: لقيت حد قاعد في البرد متلخبط وهدومه مبلولة. تدخّله مكان دافي، تشيل الهدوم المبلولة وتبدّلها بناشفة، تلفّه ببطانية دافية، وتفضل معاه لحد ما الإسعاف يوصل.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "أي شك في انخفاض الحرارة، أو تشويش/صعوبة تفكير، أو فقدان وعي، أو تنفّس بطيء أوي."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "بطاطين دافية وهدوم ناشفة وواسعة",
        "why": "تشيل البلل وتدفّي الشخص بالراحة"
      },
      {
        "item": "كمّادات دافية",
        "why": "تتحط على الرقبة والصدر والفخذ للتدفئة"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID"
    ],
    "writeDown": [
      "قدّ إيه فضل معرّض للبرد، والأعراض اللي لاحظتها، ووقت بدايتها"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Hypothermia",
        "url": "https://medlineplus.gov/ency/article/000038.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يكون مش مدرك إنه في خطر بسبب التشويش — متسيبهوش لوحده، طمّنه وانت بتدفّيه بالراحة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا بطاطين وهدوم ناشفة، وابعدوه عن البرد بالراحة.»"
      ],
      "toSelf": [
        "«أدفّيه بالراحة ومستخدمش سخّان مباشر — وأفضل معاه.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حركة بطيئة وهادية وانت بتحرّكه، ولمسة دافية تطمّنه من غير مجهود زيادة عليه.",
      "en": ""
    },
    "rights": {
      "ar": "طلب الإسعاف وعمل الإسعافات وانت مستنّي المساعدة تصرّف مسؤول.",
      "en": ""
    },
    "variations": [
      "غرق في مية باردة: طلّعه بالراحة، شيل الهدوم المبلولة ودفّيه.",
      "لو فاقد الوعي: اتأكد من التنفّس وابدأ الإنعاش لو لزم، واطلب إسعاف."
    ],
    "prevention": [
      "في البرد الشديد: هدوم دافية وناشفة وطبقات، وابعد عن البلل",
      "متفضلش وقت طويل في مية باردة أو برد قارس"
    ],
    "drill": {
      "ar": "احفظ: بعّده عن البرد · شيل البلل · دفّيه بالراحة · اطلب إسعاف.",
      "en": ""
    },
    "after": {
      "ar": "فضل معاه لحد ما المساعدة توصل، وكمّل تدفئة بالراحة من غير حرارة مباشرة.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Hypothermia",
        "url": "https://medlineplus.gov/ency/article/000038.htm",
        "srcId": "mlp:hypothermia",
        "sha256": "b04c164d48",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "breathing-difficulty",
    "title": {
      "ar": "صعوبة في التنفّس",
      "en": "Breathing difficulties - first aid"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "حد بيلاقي صعوبة في التنفّس، بيلهث أو مش قادر ياخد نفسه. دورك تأمّنه، تفكّ عنه الضيّق، تساعده على دواه لو معاه، وتجيب إسعاف بسرعة من غير ما تستنّى.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "اتصل بالطوارئ لو ظهرت عليك أو على حد تاني أي أعراض صعوبة في التنفّس.",
        "en": "Call 911 or your local emergency number if you or someone else has any of the symptoms of difficult breathing, in the Symptoms section above.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "بيطلع دم مع الكحّة.",
        "en": "Are coughing up blood",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "كلّم الدكتور لو طفلك بيكحّ وبيطلّع صوت زي نبح الكلب أو صفير.",
        "en": "Also contact your provider if your child has a cough and is making a barking sound or wheezing.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "بتلاحظ إن النَّفَس بقى صعب وانت بتعمل حاجات عادية كنت بتعملها من غير تعب، زي طلوع السلّم.",
        "en": "Notice it is hard to breathe when doing things that you normally do without breathing difficulty, for example, climbing stairs",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "عندك برد أو عدوى تانية في الجهاز التنفّسي وبتلاقي صعوبة في التنفّس.",
        "en": "Have a cold or other respiratory infection and are having difficulty breathing",
        "src": "mlp:breathing-difficulty"
      }
    ],
    "do": [
      {
        "t": "اتأكد إن مجرى الهوا مفتوح، وإنه بيتنفّس، وإن نبضه شغّال. ولو محتاج، ابدأ إنعاش قلبي رئوي (CPR).",
        "en": "Check the person's airway, breathing, and pulse. If necessary, begin CPR.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "فكّ أي هدوم ضيّقة عليه.",
        "en": "Loosen any tight clothing.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "ساعده ياخد أي دوا موصوف له (زي بخّاخة الربو، أو النيتروجليسرين، أو أكسجين البيت).",
        "en": "Help the person use any prescribed medicine (such as an asthma inhaler, nitroglycerin, or home oxygen).",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "فضل راقب تنفّسه ونبضه لحد ما المساعدة الطبية توصل. وماتفتكرش إنه بقى أحسن لو بطّلت تسمع أصوات التنفّس الغريبة زي الصفير.",
        "en": "Continue to monitor the person's breathing and pulse until medical help arrives. Do not assume that the person's condition is improving if you can no longer hear abnormal breath sounds, such as wheezing.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "لو فيه جروح مفتوحة في الرقبة أو الصدر، لازم تتقفل على طول، خصوصًا لو طالع منها فقاقيع هوا. اربطها بضمّادة حالًا.",
        "en": "If there are open wounds in the neck or chest, they must be closed immediately, especially if air bubbles appear in the wound. Bandage such wounds at once.",
        "src": "mlp:breathing-difficulty"
      }
    ],
    "dont": [
      {
        "t": "ماتديهوش أكل ولا شرب.",
        "en": "Do not give the person food or drink.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "ماتحركوش لو فيه إصابة في الراس أو الرقبة أو الصدر أو مجرى الهوا، إلا لو مفيش منّه بُد. ولو لازم تحرّكه، احمي رقبته وثبّتها.",
        "en": "Do not move the person if there has been a head, neck, chest or airway injury, unless it is absolutely necessary. Protect and stabilize the neck if the person must be moved.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "ماتحطّش مخدّة تحت راسه — ده ممكن يقفل مجرى الهوا.",
        "en": "Do not place a pillow under the person's head. This can close the airway.",
        "src": "mlp:breathing-difficulty"
      },
      {
        "t": "ماتستنّاش تشوف هيتحسّن ولا لأ قبل ما تجيب مساعدة طبية — دوّر على المساعدة على طول.",
        "en": "Do not wait to see if the person's condition improves before getting medical help. Get help immediately.",
        "src": "mlp:breathing-difficulty"
      }
    ],
    "whenWhy": {
      "ar": "المخدّة تحت الراس ممكن تقفل مجرى الهوا؛ والأكل والشرب ممكن يشرقه؛ وتحريكه وهو متصاب في الرقبة خطر. واختفا الصفير مش معناه إنه اتحسّن — ساعتها فضل راقبه.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: قريبك فجأة بيلهث ومش قادر ياخد نفسه. تفكّ الياقة والحزام، تساعده يستخدم بخّاخة الربو بتاعته، تفضل تراقب تنفّسه، وتتصل بالإسعاف من غير ما تستنّى.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "قوله فيه حد بيلاقي صعوبة شديدة في التنفّس، وقوله مكانك بالظبط."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مردّش."
      }
    ],
    "whatToBuy": [
      {
        "item": "بخّاخة الربو (لو الشخص معروف عنده ربو ومتوصّفة له)",
        "why": "بتساعده ياخد دواه في النوبة زي ما بيقول المصدر"
      },
      {
        "item": "ضمّادات نضيفة",
        "why": "لو فيه جرح مفتوح في الصدر أو الرقبة تقفله بيها بسرعة"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بأدويتك وحالتك المرضية"
    ],
    "writeDown": [
      "لو معروف عنده مشكلة في التنفّس أو القلب: اكتب أدويته في Medical ID عشان اللي يساعده يعرف"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Breathing difficulties - first aid",
        "url": "https://medlineplus.gov/ency/article/000007.htm"
      }
    ],
    "othersPOV": {
      "ar": "اللي بيتخنق بيكون خايف ومتوتّر جدًا، والتوتر بيصعّب النفس أكتر. اقعد جنبه، طمّنه بصوت هادي، وساعده ياخد دواه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«فيه حد مش قادر يتنفّس — اتصلوا بالإسعاف حالًا وجيبوا دواه.»"
      ],
      "toSelf": [
        "«أفكّ عنه الضيّق وأساعده على بخّاخته، ومش هستنّى — هتصل على طول.»"
      ]
    },
    "bodyLanguage": {
      "ar": "قرّب منه بهدوء، اتكلم واطي وببطء، وساعده يقعد في وضع مريح ليه — الهدوء بيخفّف التوتر اللي بيصعّب النفس.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تتصل بالإسعاف وتساعده على دواه ده تصرّف صح ومسؤول.",
      "en": ""
    },
    "variations": [
      "نوبة ربو معروفة: ساعده على بخّاخته وخليه قاعد.",
      "جرح مفتوح في الصدر: اقفله بسرعة، خصوصًا لو طالع منه فقاقيع هوا.",
      "مفيش تنفّس ولا نبض: ابدأ إنعاش (CPR) واتصل بالإسعاف."
    ],
    "prevention": [
      "لو معروف عندك ربو: خلّي البخّاخة معاك دايمًا والتزم بعلاجك.",
      "ابعد عن الحاجات اللي بتهيّج نفسك (دخان/غبار).",
      "لو عندك مشكلة في القلب أو الرئة: تابع مع دكتورك وخلّي أدويتك في متناول إيدك."
    ],
    "drill": {
      "ar": "احفظ: فكّ الضيّق · ساعده على دواه · راقب النفس والنبض · اتصل بالإسعاف من غير ما تستنّى.",
      "en": ""
    },
    "after": {
      "ar": "حتى لو حسّ إنه بقى أحسن، اختفا الصفير مش دليل تحسّن — فضل راقبه لحد ما الإسعاف يوصل. ولو كان بيكحّ دم أو صعوبة النفس مكمّلة، لازم كشف طبي.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Breathing difficulties - first aid",
        "url": "https://medlineplus.gov/ency/article/000007.htm",
        "srcId": "mlp:breathing-difficulty",
        "sha256": "f8fc45e36d",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "bleeding-gums",
    "title": {
      "ar": "نزيف اللثة",
      "en": "Bleeding gums"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لثتك بتنزف وانت بتفرش سنانك أو من غير ما تلمسها. الضغط المباشر بشاش متلّج بيوقّف النزيف وقتها، والعناية المنتظمة بالفم والكشف عند دكتور الأسنان بيحموها — بس لو النزيف شديد أو مستمر لازم تكشف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "النزيف شديد أو مستمر لفترة طويلة (مزمن).",
        "en": "The bleeding is severe or long-term (chronic)",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "لثتك فضلت تنزف حتى بعد العلاج.",
        "en": "Your gums continue to bleed even after treatment",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "عندك أعراض تانية مش معروف سببها مع النزيف.",
        "en": "You have other unexplained symptoms with the bleeding",
        "src": "mlp:bleeding-gums"
      }
    ],
    "do": [
      {
        "t": "وقّف نزيف اللثة بإنك تضغط على اللثة على طول بشاش مبلول بميّه فيها تلج.",
        "en": "Control gum bleeding by applying pressure directly on the gums with a gauze pad soaked in ice water.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "اعمل فحص لثة عند دكتور الأسنان.",
        "en": "Have a periodontal exam.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "اتبع تعليمات دكتور الأسنان في طريقة تفريش سنانك واستخدام الخيط عشان ماتجرحش لثتك.",
        "en": "Follow your dentist's instructions on how to brush and floss so you can avoid hurting your gums.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "ابعد عن الأسبرين إلا لو الدكتور بتاعك هو اللي نصحك تاخده.",
        "en": "Avoid aspirin unless your health care provider has recommended that you take it.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "لو في دوا آثاره الجانبية هي اللي بتسبّب نزيف اللثة، اطلب من الدكتور يكتبلك دوا تاني. وماتغيّرش أدويتك أبدًا من غير ما تكلّم الدكتور الأول.",
        "en": "If side effects of a medicine are causing the bleeding gums, ask your provider to prescribe a different medicine. Never change your medicines without first talking to your provider.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "لو اتشخّصت بنقص فيتامينات، خُد مكمّلات الفيتامينات.",
        "en": "If you have been diagnosed with a vitamin deficiency, take vitamin supplements.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "روح لدكتور الأسنان لو الطقم أو أي تركيبة في سنانك مش مظبوطة أو بتعمل أماكن ملتهبة في لثتك.",
        "en": "See your dentist if your dentures or other dental appliances do not fit well or are causing sore spots on your gums.",
        "src": "mlp:bleeding-gums"
      },
      {
        "t": "استخدم جهاز شطف الفم على أوطى درجة عشان تدلّك لثتك.",
        "en": "Use an oral irrigation device on the low setting to massage your gums.",
        "src": "mlp:bleeding-gums"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش التبغ (الدخان)، لأنه بيزوّد نزيف اللثة. وكمان استخدام التبغ ممكن يخبّي مشاكل تانية بتسبّب نزيف اللثة.",
        "en": "Do not use tobacco, since it makes bleeding gums worse. Tobacco use can also mask other problems that cause bleeding of the gums.",
        "src": "mlp:bleeding-gums"
      }
    ],
    "whenWhy": {
      "ar": "الضغط المباشر بشاش متلّج بيوقّف النزيف وقتها، والكشف عند دكتور اللثة بيلاقي السبب. التبغ بيزوّد النزيف وبيخبّي مشاكل تانية، وبعض الأدوية ممكن تكون هي السبب — فماتغيّرش دوا لوحدك.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بتفرش سنانك ولقيت دم في الحوض. تاخد شاش وتبلّه في ميّه فيها تلج، وتضغط بيه على اللثة لحد ما ينوقف، وبعدها تحجز كشف عند دكتور الأسنان.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو النزيف شديد ومش بيقف بالضغط، أو معاه أعراض تانية مقلقة."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "شاش طبي",
        "why": "تضغط بيه مباشرة على اللثة عشان توقّف النزيف"
      },
      {
        "item": "ميّه فيها تلج",
        "why": "تبلّ فيها الشاش — البرودة بتساعد على وقف النزيف"
      },
      {
        "item": "فرشاية وخيط أسنان",
        "why": "العناية المنتظمة بالفم بتقلّل نزيف اللثة"
      }
    ],
    "tech": [
      "املأ Medical ID بأدويتك، خصوصًا لو بتاخد أسبرين أو مسيّل للدم",
      "Emergency SOS"
    ],
    "writeDown": [
      "أدويتك الحالية — خصوصًا الأسبرين أو أي مسيّل للدم",
      "من إمتى بدأ النزيف، وهل بيحصل مع التفريش ولا لوحده"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Bleeding gums",
        "url": "https://medlineplus.gov/ency/article/003062.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يتخض من الدم ويفتكر حاجة خطيرة — طمّنه بهدوء، ورّيه إزاي يضغط بالشاش، ووجّهه إنه يكشف عند دكتور الأسنان.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اضغط بالشاش المتلّج على اللثة لحد ما ينوقف، وهنحجزلك كشف عند دكتور الأسنان.»"
      ],
      "toSelf": [
        "«أضغط بالراحة وأوقّف النزيف، وأكشف بدري.»"
      ]
    },
    "bodyLanguage": {
      "ar": "هدوء وطمأنة؛ ورّيه إزاي يمسك الشاش ويضغط بلطف من غير شد.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تسأل الدكتور يغيّرلك الدوا لو هو اللي بيسبّب النزيف، وماتغيّرش أي دوا لوحدك.",
      "en": ""
    },
    "variations": [
      "بتاخد أسبرين أو مسيّل للدم: ماتوقّفوش لوحدك، اسأل الدكتور الأول.",
      "بتلبس طقم أسنان: اتأكد إنه مظبوط ومش بيعمل أماكن ملتهبة في لثتك."
    ],
    "prevention": [
      "اتبع طريقة التفريش واستخدام الخيط اللي دكتورك وصّاك بيها عشان ماتجرحش لثتك.",
      "ابعد عن التبغ (الدخان).",
      "اعمل فحص لثة عند دكتور الأسنان."
    ],
    "drill": {
      "ar": "احفظ: شاش متلّج + ضغط مباشر = يوقّف النزيف؛ وبعدها كشف أسنان.",
      "en": ""
    },
    "after": {
      "ar": "لو النزيف فضل مستمر بعد العلاج، أو بقى شديد، أو معاه أعراض تانية مش معروف سببها — ارجع للدكتور واكشف.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Bleeding gums",
        "url": "https://medlineplus.gov/ency/article/003062.htm",
        "srcId": "mlp:bleeding-gums",
        "sha256": "f43d536909",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "sunburn",
    "title": {
      "ar": "حروق الشمس",
      "en": "Sunburn"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البحر",
      "المصيف",
      "برّه في الشمس"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "حرق من الشمس. دورك تبرّد الجلد بالطريقة المذكورة، وتستخدم الخطوات المناسبة، وتطلب مساعدة طبية لو ظهرت علامة خطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "كلّم دكتور فورًا لو عندك سخونية مع حرق الشمس، أو ظهرت علامات صدمة أو إجهاد حراري أو جفاف أو أي رد فعل خطير.",
        "en": "Contact your health care provider right away if you have a fever with sunburn. Also contact your provider if there are signs of shock, heat exhaustion, dehydration, or other serious reactions. These signs include:",
        "src": "mlp:sunburn"
      },
      {
        "t": "إحساس بإغماء أو دوخة.",
        "en": "Feeling faint or dizzy",
        "src": "mlp:sunburn"
      },
      {
        "t": "نبض سريع أو نَفَس سريع.",
        "en": "Rapid pulse or rapid breathing",
        "src": "mlp:sunburn"
      },
      {
        "t": "عطش شديد، أو مفيش تبوّل، أو عنين غايرة.",
        "en": "Extreme thirst, no urine output, or sunken eyes",
        "src": "mlp:sunburn"
      },
      {
        "t": "فقاقيع شديدة ومؤلمة.",
        "en": "Severe, painful blisters",
        "src": "mlp:sunburn"
      }
    ],
    "do": [
      {
        "t": "خُد دُش أو حمّام مايته باردة برودة خفيفة، أو حُط فوط نضيفة مبلولة بميّه باردة برودة خفيفة على مكان الحرق.",
        "en": "Take a cool shower or bath or place clean wet, cool wash cloths on the burn.",
        "src": "mlp:sunburn"
      },
      {
        "t": "لو فيه فقاقيع، رباط جاف ممكن يساعد يمنع العدوى.",
        "en": "If there are blisters, dry bandages may help prevent infection.",
        "src": "mlp:sunburn"
      },
      {
        "t": "لو الجلد لسه معمولش فقاقيع، تقدر تدهن كريم مرطّب عشان يريّحك. بلاش زبدة أو أي منتجات زيتية أو دهنية — دي ممكن تسدّ المسام وتحبس الحرارة والعرق، وده ممكن يسبّب عدوى. وبلاش تفتح أو تقشّر أطراف الفقاقيع.",
        "en": "If your skin is not blistering, moisturizing cream may be applied to relieve discomfort. Do not use butter, petroleum jelly (Vaseline), or other oil-based products. These can block pores so that heat and sweat cannot escape, which can lead to infection. Do not pick at or peel away the top part of the blisters.",
        "src": "mlp:sunburn"
      },
      {
        "t": "المسكّنات اللي بتتصرف من غير روشتة (زي الإيبوبروفين أو الباراسيتامول) بتخفّف ألم حرق الشمس. وماتديش أسبرين للأطفال.",
        "en": "Over-the-counter medicines, such as ibuprofen or acetaminophen, help to relieve pain from sunburn. Do not give aspirin to children.",
        "src": "mlp:sunburn"
      },
      {
        "t": "كريمات الكورتيزون ممكن تساعد في تقليل الالتهاب.",
        "en": "Cortisone creams may help reduce inflammation.",
        "src": "mlp:sunburn"
      },
      {
        "t": "البس هدوم قطن واسعة.",
        "en": "Loose cotton clothing should be worn.",
        "src": "mlp:sunburn"
      },
      {
        "t": "اشرب ميّه كتير.",
        "en": "Drink lots of water.",
        "src": "mlp:sunburn"
      }
    ],
    "dont": [
      {
        "t": "بلاش تستعمل منتجات فيها بنزوكايين أو ليدوكايين (مخدّر موضعي) — ممكن تسبّب حساسية لبعض الناس وتخلّي الحرق أوحش.",
        "en": "Do not use products that contain benzocaine or lidocaine. These can cause allergies in some people and make the burn worse.",
        "src": "mlp:sunburn"
      },
      {
        "t": "ماتستعملش زبدة أو هلام بترولي أو أي منتجات زيتية، وماتفتحش أو تقشّر الجزء العلوي من الفقاقيع.",
        "en": "If your skin is not blistering, moisturizing cream may be applied to relieve discomfort. Do not use butter, petroleum jelly (Vaseline), or other oil-based products. These can block pores so that heat and sweat cannot escape, which can lead to infection. Do not pick at or peel away the top part of the blisters.",
        "src": "mlp:sunburn"
      },
      {
        "t": "ماتديش أسبرين للأطفال.",
        "en": "Over-the-counter medicines, such as ibuprofen or acetaminophen, help to relieve pain from sunburn. Do not give aspirin to children.",
        "src": "mlp:sunburn"
      }
    ],
    "whenWhy": {
      "ar": "لو مفيش فقاقيع، الكريم المرطّب ممكن يريّحك. ولو فيه فقاقيع، الشاش الجاف النضيف ممكن يساعد يمنع العدوى. بلاش المنتجات الزيتية، وبلاش تفتح أو تقشّر الفقاقيع.",
      "en": ""
    },
    "how": {
      "ar": "مثال: عندك حرق من الشمس. خُد دُش بميّه باردة برودة خفيفة، وحُط فوطة نضيفة مبلولة بنفس الطريقة على الحرق، واشرب ميّه كتير، والبس هدوم قطن واسعة. لو مفيش فقاقيع استخدم كريم مرطّب، ولو ظهرت علامة خطر كلّم الطبيب فورًا.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو ظهرت علامات صدمة أو إجهاد حراري أو جفاف شديد — دوخة، نبض سريع، نَفَس سريع، أو مفيش تبوّل."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيرد."
      }
    ],
    "whatToBuy": [
      {
        "item": "فوط نضيفة",
        "why": "تبلّها بميّه باردة برودة خفيفة وتحطّها على الحرق"
      },
      {
        "item": "كريم مرطّب من غير منتجات زيتية",
        "why": "للاستخدام لو مفيش فقاقيع"
      },
      {
        "item": "شاش أو رباط جاف نضيف",
        "why": "ممكن يساعد يمنع العدوى لو فيه فقاقيع"
      },
      {
        "item": "مسكّن ألم من الصيدلية",
        "why": "لتخفيف ألم الحرق — من غير أسبرين للأطفال"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بأي حساسية عندك من الأدوية"
    ],
    "writeDown": [
      "لو عندك حساسية من مخدّر موضعي زي البنزوكايين أو الليدوكايين — سجّلها",
      "وقت بداية الحرق والأعراض اللي ظهرت"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Sunburn",
        "url": "https://medlineplus.gov/ency/article/003227.htm"
      }
    ],
    "othersPOV": {
      "ar": "اللي قدامك ممكن يكون مستهون بالحرق أو محرج إنه قعد في الشمس كتير — متلومهوش. ساعده يبرّد ويشرب ميّه وراقب معاه علامات الخطر.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«تعالى نبرّدها بميّه باردة برودة خفيفة ونشرب ميّه — وماتفتحش أو تقشّر الفقاقيع.»"
      ],
      "toSelf": [
        "«أبرّد وأرطّب وأراقب علامات الجفاف — لو ظهرت أكلّم دكتور.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتعامل بلطف ومن غير ضغط على مكان الحرق، واتكلم بصوت هادي.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تطلب مساعدة طبية لو ظهرت علامات خطر ده حقّك — مفيش داعي تستحمل لوحدك.",
      "en": ""
    },
    "variations": [
      "طفل: ماتديهوش أسبرين.",
      "لو فيه فقاقيع: استخدم شاش جاف نضيف، وماتفتحهاش أو تقشّرها.",
      "لو ظهرت سخونية مع الحرق أو علامة خطر مذكورة: كلّم الطبيب فورًا."
    ],
    "prevention": [],
    "drill": {
      "ar": "احفظ: برّد · رطّب · اشرب · راقب. ولو سخونية أو دوخة أو جفاف — دكتور فورًا.",
      "en": ""
    },
    "after": {
      "ar": "بعد تنفيذ الخطوات، لو ظهرت سخونية مع الحرق أو أي علامة خطر مذكورة، كلّم الطبيب فورًا.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Sunburn",
        "url": "https://medlineplus.gov/ency/article/003227.htm",
        "srcId": "mlp:sunburn",
        "sha256": "db61e39f51",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "allergic-reaction",
    "title": {
      "ar": "رد فعل تحسّسي (حساسية)",
      "en": "Allergic reactions"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "تفاعل تحسّسي. دورك تراقب الشخص، تطلب مساعدة طبية، وتتصل بالطوارئ فورًا لو التفاعل شديد أو عنده تاريخ من التفاعلات الشديدة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "اتصل بالطوارئ فورًا لطلب مساعدة طبية لو:",
        "en": "Contact 911 or the local emergency number for medical assistance right away if:",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "الشخص عنده تفاعل تحسّسي شديد — ماتستناش لحد ما الحالة تسوء.",
        "en": "The person is having a severe allergic reaction. Do not wait to see if the reaction is getting worse.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "عنده تاريخ من تفاعلات تحسّسية شديدة (بصّ لو لابس إسورة/كارت طبي).",
        "en": "The person has a history of severe allergic reactions (check for a medical ID tag).",
        "src": "mlp:allergic-reaction"
      }
    ],
    "do": [
      {
        "t": "لو ظهر طفح جلدي بيحكّ، حُط كمادات باردة وكريم هيدروكورتيزون من الصيدلية (من غير روشتة).",
        "en": "If the person develops an itchy rash, apply cool compresses and an over-the-counter hydrocortisone cream.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "راقبه كويس لو في علامات إن حالته بتسوء.",
        "en": "Watch the person for signs of increasing distress.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "دوّر على مساعدة طبية. لو التفاعل خفيف، الدكتور ممكن ينصح بأدوية من الصيدلية زي مضادات الهيستامين.",
        "en": "Get medical help. For a mild reaction, your health care provider may recommend over-the-counter medicines, such as antihistamines.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "اتصل بالطوارئ (الإسعاف).",
        "en": "Call 911 or the local emergency number.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "هدّي الشخص وطمّنه.",
        "en": "Calm and reassure the person.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "لو التفاعل من قرصة نحلة، اكشط الإبرة من على الجلد بحاجة صلبة (زي الضفر أو كارت بلاستيك). ماتستخدمش ملقاط — الضغط على الإبرة بيطلّع سم أكتر.",
        "en": "If the allergic reaction is from a bee sting, scrape the stinger off the skin with something firm (such as a fingernail or plastic credit card). Do not use tweezers -- squeezing the stinger will release more venom.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "لو مع الشخص دوا طوارئ للحساسية حقن أو بخّاخ أنف (إبينفرين/أدرينالين)، اديهوله أول ما التفاعل يبدأ. ماتستناش لحد ما الحالة تسوء. وابعد عن الأدوية اللي بالبق لو عنده صعوبة في التنفّس.",
        "en": "If the person has injectable or intranasal emergency allergy medicine (Epinephrine), administer it at the beginning of a reaction. Do not wait to see if the reaction gets worse. Avoid oral medicine if the person is having difficulty breathing.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "اعمل خطوات تمنع الصدمة (الشوك): نيّمه على ضهره، ارفع رجليه حوالي ٣٠ سم (١٢ بوصة)، وغطّيه بجاكت أو بطانية. ماتحطّهوش في الوضع ده لو فيه شك في إصابة في الراس أو الرقبة أو الضهر أو الرجل، أو لو الوضع مضايقه، أو لو بيترجّع.",
        "en": "Take steps to prevent shock. Have the person lie flat, raise the person's feet about 12 inches (in) or 30 centimeters (cm), and cover them with a coat or blanket. Do not place the person in this position if a head, neck, back, or leg injury is suspected, if it causes discomfort, or if the person is vomiting.",
        "src": "mlp:allergic-reaction"
      }
    ],
    "dont": [
      {
        "t": "ماتفترضش إن حقن الحساسية اللي الشخص أخدها قبل كده هتحميه حماية كاملة.",
        "en": "Do not assume that any allergy shots the person has already received will provide complete protection.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "ماتحطّش مخدّة تحت راسه لو عنده صعوبة في التنفّس — ده ممكن يسدّ مجرى الهوا.",
        "en": "Do not place a pillow under the person's head if he or she is having trouble breathing. This can block the airways.",
        "src": "mlp:allergic-reaction"
      },
      {
        "t": "ماتديهوش أي حاجة بالبق لو عنده صعوبة في التنفّس.",
        "en": "Do not give the person anything by mouth if the person is having trouble breathing.",
        "src": "mlp:allergic-reaction"
      }
    ],
    "whenWhy": {
      "ar": "لو عنده صعوبة في التنفّس، ماتحطّش مخدّة تحت راسه وماتديهوش دوا عن طريق البق. ولو هتنيّمه وترفع رجليه، التزم بالاستثناءات المذكورة في الخطوة.",
      "en": ""
    },
    "how": {
      "ar": "مثال: شخص عنده تفاعل تحسّسي شديد. اتصل بالطوارئ فورًا، هدّيه وراقبه، ولو معاه دوا طوارئ للحساسية اديهوله في بداية التفاعل. لو هتنيّمه وترفع رجليه، ماتعملش الوضع ده عند وجود أي استثناء مذكور في الخطوة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو التفاعل شديد، أو في صعوبة تنفّس أو تورّم، أو معروف عنده حساسية شديدة — ماتستناش."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مردّش."
      }
    ],
    "whatToBuy": [
      {
        "item": "مضاد هيستامين من الصيدلية",
        "why": "للأعراض الخفيفة زي الطفح والهرش"
      },
      {
        "item": "كريم هيدروكورتيزون موضعي",
        "why": "يهدّي الطفح والهرش على الجلد"
      },
      {
        "item": "كمادات باردة",
        "why": "تخفّف الحكّة والطفح"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID وخليه يوضّح أنواع الحساسية"
    ],
    "writeDown": [
      "أنواع الحساسية المعروفة والأدوية اللي بتاخدها",
      "وقت بداية التفاعل والأعراض اللي ظهرت"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Allergic reactions",
        "url": "https://medlineplus.gov/ency/article/000005.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يكون خايف وحاسس إن نفسه بيضيق ومرعوب — ده بيزوّد التوتّر. وجودك الهادي وطمأنتك بتفرق.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«حدّ يتصل بالإسعاف حالًا، وأنا هفضل معاه.»",
        "«لو معاه دوا طوارئ للحساسية، هاتوه بسرعة.»"
      ],
      "toSelf": [
        "«أهدّيه، أراقب نفسه، وأتحرّك بسرعة لو زاد.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد جنبه، صوتك واطي وواثق، وطمّنه إنك معاه وإنك بتتصرّف.",
      "en": ""
    },
    "rights": {
      "ar": "طلب الإسعاف، واستخدام دوا الطوارئ الموجود مع الشخص بالطريقة المذكورة، تصرّف مسؤول.",
      "en": ""
    },
    "variations": [
      "قرصة نحلة: اكشط الإبرة بحاجة صلبة من غير ملقاط قبل أي حاجة.",
      "معروف عنده حساسية شديدة ومعاه قلم أدرينالين: اديهوله بدري وماتستناش.",
      "تفاعل خفيف (طفح وهرش بس): كمادات باردة وكريم هيدروكورتيزون ومضاد هيستامين."
    ],
    "prevention": [],
    "drill": {
      "ar": "احفظ: اتصل بالطوارئ · هدّي وراقب · استخدم دوا الطوارئ الموجود مع الشخص في بداية التفاعل · التزم باستثناءات وضع الاستلقاء.",
      "en": ""
    },
    "after": {
      "ar": "افضل مع الشخص وراقبه، واتبع خطوات الطوارئ والمساعدة الطبية المذكورة في البطاقة.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Allergic reactions",
        "url": "https://medlineplus.gov/ency/article/000005.htm",
        "srcId": "mlp:allergic-reaction",
        "sha256": "8c31fb3437",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "sprains",
    "title": {
      "ar": "الملخ (لَوَيان مفصل)",
      "en": "Sprains"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "إصابة في مفصل. دورك تستخدم الخطوات المذكورة من تلج ورباط ورفع وراحة، وتنتبه لعلامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "حاسس إن فيه عضمة مكسورة.",
        "en": "You think you have a broken bone.",
        "src": "mlp:sprains"
      },
      {
        "t": "المفصل باين طالع من مكانه.",
        "en": "The joint appears out of position.",
        "src": "mlp:sprains"
      },
      {
        "t": "إصابة خطيرة أو ألم شديد.",
        "en": "You have a serious injury or severe pain.",
        "src": "mlp:sprains"
      },
      {
        "t": "سمعت صوت طقّة وحصلت فورًا مشاكل في استخدام المفصل.",
        "en": "You hear a popping sound and have immediate problems using the joint.",
        "src": "mlp:sprains"
      },
      {
        "t": "علامات عدوى: جلد أحمر وسخن وموجع، أو حرارة فوق ٣٨ درجة مئوية.",
        "en": "You have symptoms of infection, including red, warm, painful skin or a fever over 100°F (38°C).",
        "src": "mlp:sprains"
      }
    ],
    "do": [
      {
        "t": "حُط تلج على طول عشان تقلّل الورم. لفّ التلج في قماشة، وما تحطّش التلج مباشرة على الجلد.",
        "en": "Apply ice right away to reduce swelling. Wrap the ice in cloth. Do not place ice directly on the skin.",
        "src": "mlp:sprains"
      },
      {
        "t": "لفّ رباط حوالين المكان المصاب عشان تقلّل حركته. لفّه محكم بس مش مخنوق، واستعمل جبيرة لو محتاج.",
        "en": "Wrap a bandage around the affected area to limit movement. Wrap firmly, but not tightly. Use a splint if needed.",
        "src": "mlp:sprains"
      },
      {
        "t": "خلّي المفصل الوارم مرفوع فوق مستوى قلبك، حتى وانت نايم.",
        "en": "Keep the swollen joint raised above your heart, even while sleeping.",
        "src": "mlp:sprains"
      },
      {
        "t": "ريّح المفصل المصاب كام يوم.",
        "en": "Rest the affected joint for several days.",
        "src": "mlp:sprains"
      },
      {
        "t": "بلاش تحمّل على المفصل عشان ده ممكن يزوّد الإصابة. حمّالة للدراع، أو عكاكيز أو دعامة للرجل، بتحمي الإصابة.",
        "en": "Avoid putting stress on the joint because it can make the injury worse. A sling for the arm, or crutches or a brace for the leg can protect the injury.",
        "src": "mlp:sprains"
      }
    ],
    "dont": [
      {
        "t": "ماتحطّش التلج على الجلد مباشرة — لفّه في قماشة الأول.",
        "en": "Apply ice right away to reduce swelling. Wrap the ice in cloth. Do not place ice directly on the skin.",
        "src": "mlp:sprains"
      },
      {
        "t": "ماتحطّش وزن أو إجهاد على المفصل المصاب — ده ممكن يزوّد الإصابة.",
        "en": "Avoid putting stress on the joint because it can make the injury worse. A sling for the arm, or crutches or a brace for the leg can protect the injury.",
        "src": "mlp:sprains"
      }
    ],
    "whenWhy": {
      "ar": "التلج يقلّل الورم، وتجنّب الضغط على المفصل لأن الضغط ممكن يزوّد الإصابة. استخدم الرباط والرفع والراحة بالطريقة المذكورة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: لويت كاحلك وانت نازل السلم. تقعد، ترفع رجلك فوق مستوى القلب، تلفّ تلج في فوطة وتحطه على الكاحل، تلفّ رباط محكم مش مخنوق، وتريّحها كام يوم من غير ما تحمّل عليها.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو تشكّ في كسر، أو المفصل طالع من مكانه، أو إصابة خطيرة أو ألم شديد."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "تلج",
        "why": "تقلّل الورم — لفّها في قماشة وما تحطّهاش على الجلد مباشرة"
      },
      {
        "item": "رباط ضاغط",
        "why": "يحدّ حركة المفصل — محكم مش مخنوق"
      },
      {
        "item": "جبيرة أو دعامة أو حمّالة",
        "why": "تثبّت وتحمي الطرف المصاب"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID"
    ],
    "writeDown": [
      "اكتب امتى حصلت الإصابة وازاي، وامتى بدأ الورم — بيساعد الدكتور"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Sprains",
        "url": "https://medlineplus.gov/ency/article/000041.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص المصاب بيكون وجعان ومتوتر وخايف يحرّك المفصل — طمّنه وساعده يقعد ويرفع الطرف المصاب.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اقعد وارفع رجلك، هجيبلك تلج ورباط — بلاش تحمّل عليها.»"
      ],
      "toSelf": [
        "«أثبّت المفصل وأرفعه وأبرّده — ولو فيه علامة خطر أروح المستشفى.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حركة هادية وثابتة، تدعم الطرف المصاب وانت بترفعه من غير ما تشدّه بالعافية.",
      "en": ""
    },
    "rights": {
      "ar": "طلب المساعدة أو الكشف لو فيه شك في كسر حقّك — متكسفش تروح المستشفى.",
      "en": ""
    },
    "variations": [
      "في الرجل: العكاكيز أو الدعامة ممكن تحمي الإصابة.",
      "في الدراع: الحمّالة ممكن تحمي الإصابة."
    ],
    "prevention": [],
    "drill": {
      "ar": "احفظ الأربعة: راحة · تلج · رباط · رفع (فوق القلب).",
      "en": ""
    },
    "after": {
      "ar": "ريّح المفصل المصاب كام يوم، وتجنّب الضغط عليه، وانتبه لعلامات الخطر المذكورة.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Sprains",
        "url": "https://medlineplus.gov/ency/article/000041.htm",
        "srcId": "mlp:sprains",
        "sha256": "757721f11b",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "fever",
    "title": {
      "ar": "سخونية (حُمّى)",
      "en": "Fever"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "شخص عنده سخونية. دورك تنفّذ خطوات التبريد والدوا المذكورة، وتنتبه لعلامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عنده ٣ شهور أو أقل وحرارته الشرجية ٣٨°م (١٠٠٫٤°ف) أو أعلى",
        "en": "Is 3 months or younger and has a rectal temperature of 100.4°F (38°C) or higher",
        "src": "mlp:fever"
      },
      {
        "t": "مش بيصحى بسهولة أو مش بيصحى خالص",
        "en": "Cannot be awakened easily or at all",
        "src": "mlp:fever"
      },
      {
        "t": "بيلاقي صعوبة في التنفّس، حتى بعد ما تفضّي مناخيره",
        "en": "Has difficulty breathing, even after the nose is cleared",
        "src": "mlp:fever"
      },
      {
        "t": "رقبته متيبّسة",
        "en": "Has a stiff neck",
        "src": "mlp:fever"
      },
      {
        "t": "بتيجيله تشنّجات (نوبة)",
        "en": "Has a seizure",
        "src": "mlp:fever"
      }
    ],
    "do": [
      {
        "t": "شيل الهدوم أو البطاطين الزيادة. الأوضة تكون مريحة، لا حرّ أوي ولا برد. جرّب طبقة واحدة من هدوم خفيفة، وبطانية واحدة خفيفة للنوم. ولو الأوضة حرّ أو مكتومة، المروحة ممكن تساعد.",
        "en": "Remove excess clothing or blankets. The room should be comfortable, not too hot or cool. Try one layer of lightweight clothing, and one lightweight blanket for sleep. If the room is hot or stuffy, a fan may help.",
        "src": "mlp:fever"
      },
      {
        "t": "حمام أو مسح بميّه فاترة ممكن يساعد إنك تبرّد اللي عنده سخونية. ده بيبقى مفيد بعد ما تديله الدوا — من غير كده الحرارة ممكن ترجع تطلع تاني بسرعة.",
        "en": "A lukewarm bath or sponge bath may help cool someone with a fever. This is effective after medicine is given -- otherwise the temperature might bounce right back up.",
        "src": "mlp:fever"
      },
      {
        "t": "الباراسيتامول والإيبوبروفين بيساعدوا في تنزيل السخونية عند الأطفال والكبار. وساعات الدكتور بينصح إنك تستخدم النوعين مع بعض.",
        "en": "Acetaminophen (Tylenol) and ibuprofen (Advil, Motrin) help reduce fever in children and adults. Sometimes health care providers advise you to use both types of medicine.",
        "src": "mlp:fever"
      },
      {
        "t": "خُد الباراسيتامول كل ٤ لـ ٦ ساعات. بيشتغل عن طريق إنه بيوطّي مُنظّم الحرارة في المخ.",
        "en": "Take acetaminophen every 4 to 6 hours. It works by turning down the brain's thermostat.",
        "src": "mlp:fever"
      },
      {
        "t": "خُد الإيبوبروفين كل ٦ لـ ٨ ساعات. وماتستخدمش الإيبوبروفين مع الأطفال ٦ شهور أو أقل.",
        "en": "Take ibuprofen every 6 to 8 hours. Do not use ibuprofen in children 6 months or younger.",
        "src": "mlp:fever"
      },
      {
        "t": "الأسبرين فعّال جدًا في علاج السخونية عند الكبار. وماتديش الأسبرين لطفل إلا لو دكتور الطفل قالك.",
        "en": "Aspirin is very effective for treating fever in adults. Do not give aspirin to a child unless your child's provider tells you to.",
        "src": "mlp:fever"
      },
      {
        "t": "اعرف وزنك أو وزن طفلك. وبعدين بُصّ على التعليمات اللي على العلبة عشان تلاقي الجرعة الصح.",
        "en": "Know how much you or your child weighs. Then check the instructions on the package to find the correct dose.",
        "src": "mlp:fever"
      }
    ],
    "dont": [
      {
        "t": "ماتلفّش حد عنده رعشة برد بالهدوم والبطاطين.",
        "en": "Do not bundle up someone who has chills.",
        "src": "mlp:fever"
      },
      {
        "t": "ماتستخدمش حمامات ميّه ساقعة، ولا تلج، ولا مسح بالكحول. دول بيبرّدوا الجلد بس غالبًا بيخلّوا الوضع أوحش لأنهم بيسبّبوا رعشة، والرعشة بترفع حرارة الجسم من جوّه.",
        "en": "Do not use cold baths, ice, or alcohol rubs. These cool the skin, but often make the situation worse by causing shivering, which raises the core body temperature.",
        "src": "mlp:fever"
      }
    ],
    "whenWhy": {
      "ar": "شيل الهدوم أو البطاطين الزيادة وخلي الأوضة مريحة. بعد الدوا، الحمام أو المسح بميّه فاترة ممكن يساعد؛ بلاش ميّه ساقعة أو تلج أو كحول لأنها ممكن تسبّب رعشة ترفع حرارة الجسم من جوّه.",
      "en": ""
    },
    "how": {
      "ar": "مثال: شخص عنده سخونية. شيل الهدوم أو البطاطين الزيادة، راجع وزنه وتعليمات العلبة للجرعة، وبعد الدوا استخدم ميّه فاترة لو محتاج. لو ظهرت علامة خطر مذكورة، اطلب المساعدة الطبية المناسبة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو ظهرت علامة خطر: تشنّج، مش بيصحى، صعوبة تنفّس، شفايف زرقا، أو رقبة متيبّسة."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيرد."
      }
    ],
    "whatToBuy": [
      {
        "item": "خافض حرارة: باراسيتامول أو إيبوبروفين",
        "why": "بينزّلوا السخونية للأطفال والكبار — اقرا الجرعة على العلبة حسب الوزن"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID بالأمراض المزمنة والأدوية والحساسية"
    ],
    "writeDown": [
      "قراءات الحرارة ومواعيدها",
      "أنواع الدوا وجرعاتها ومواعيدها",
      "الوزن عشان تظبط الجرعة"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Fever",
        "url": "https://medlineplus.gov/ency/article/003090.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يكون متضايق أو قلقان. اتكلم معاه بهدوء، وساعده ينفّذ الخطوات من غير هدوم أو بطاطين زيادة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«شيلوا عنه اللحاف الزيادة وهاتوا ميّه فاترة نمسحه بيها بعد الدوا.»",
        "«لو مش بيصحى، أو عنده صعوبة في التنفّس حتى بعد ما تفضّي مناخيره، اطلبوا المساعدة الطبية فورًا.»"
      ],
      "toSelf": [
        "«أنفّذ الخطوات وأراقب علامات الخطر المذكورة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد جنبه بهدوء، واتكلم بصوت مطمئن وانت بتساعده ينفّذ الخطوات.",
      "en": ""
    },
    "rights": {
      "ar": "إنك تطمّن على اللي عيّان وتتصل بالدكتور أو الطوارئ عند الخطر ده حقك وواجبك، مش مبالغة.",
      "en": ""
    },
    "variations": [
      "رضيع ٣ شهور أو أقل: حرارة شرجية ٣٨°م أو أعلى علامة خطر.",
      "طفل ٦ شهور أو أقل: ماتستخدمش إيبوبروفين."
    ],
    "prevention": [],
    "drill": {
      "ar": "احفظ: شيل الزيادة · دوا حسب الوزن · مسح فاتر بعد الدوا · راقب علامات الخطر — وابعد عن التلج والكحول.",
      "en": ""
    },
    "after": {
      "ar": "انتبه لعلامات الخطر المذكورة، واتبع تعليمات الدوا والجرعة الموجودة على العلبة.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Fever",
        "url": "https://medlineplus.gov/ency/article/003090.htm",
        "srcId": "mlp:fever",
        "sha256": "bd0794a1ff",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "nosebleed",
    "title": {
      "ar": "نزيف المناخير (الرُّعاف)",
      "en": "Nosebleed"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "نزيف من المناخير بيحصل فجأة، وغالبًا بيقف لوحده بالضغط الصح. دورك تقعّد الشخص ومايله لقدّام، تضغط صح، وتراقب علامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو النزيف ماوقفش بعد ٢٠ دقيقة.",
        "en": "Bleeding does not stop after 20 minutes.",
        "src": "mlp:nosebleed"
      },
      {
        "t": "لو المناخير ممكن تكون اتكسرت (مثلاً باينة مايلة بعد ضربة على المناخير أو إصابة تانية).",
        "en": "Your nose may be broken (for example, it looks crooked after a hit to the nose or other injury).",
        "src": "mlp:nosebleed"
      },
      {
        "t": "لو بتاخد أدوية بتمنع تجلّط الدم (مسيّلات الدم).",
        "en": "You are taking medicines to prevent your blood from clotting (blood thinners).",
        "src": "mlp:nosebleed"
      },
      {
        "t": "لو النزيف من مناخيرك أو مناخير ابنك بيتكرر كتير.",
        "en": "You or your child has frequent nosebleeds",
        "src": "mlp:nosebleed"
      },
      {
        "t": "لو النزيف حصل بعد عملية جيوب أنفية أو أي عملية تانية.",
        "en": "Nosebleeds occur after sinus or other surgery",
        "src": "mlp:nosebleed"
      }
    ],
    "do": [
      {
        "t": "اقعد واضغط بالراحة على الجزء الطري من مناخيرك بين صباعك الكبير والسبّابة (بحيث تقفل فتحتين المناخير) لمدة ١٠ دقايق كاملة.",
        "en": "Sit down and gently squeeze the soft portion of the nose between your thumb and finger (so that the nostrils are closed) for a full 10 minutes.",
        "src": "mlp:nosebleed"
      },
      {
        "t": "مِيل لقدّام عشان ماتبلعش الدم، واتنفّس من بقّك.",
        "en": "Lean forward to avoid swallowing the blood and breathe through your mouth.",
        "src": "mlp:nosebleed"
      },
      {
        "t": "استنى ١٠ دقايق على الأقل قبل ما تشوف النزيف وقف ولا لأ. وسيب وقت كفاية عشان النزيف يقف.",
        "en": "Wait at least 10 minutes before checking if the bleeding has stopped. Be sure to allow enough time for the bleeding to stop.",
        "src": "mlp:nosebleed"
      },
      {
        "t": "خلّي جو البيت مايل للبرودة (مش حرّ) واستخدم جهاز ترطيب (بخّار) عشان يزوّد رطوبة الهوا جوّه.",
        "en": "Keep the home cool and use a vaporizer to add moisture to the inside air.",
        "src": "mlp:nosebleed"
      },
      {
        "t": "استخدم بخاخ محلول ملحي للأنف وجل ذائب في الميّه عشان تمنع جفاف بطانة المناخير في الشتا.",
        "en": "Use nasal saline spray and water-soluble jelly (such as Ayr gel) to prevent nasal linings from drying out in the winter.",
        "src": "mlp:nosebleed"
      }
    ],
    "dont": [
      "ماتبصّش لفوق ولا تسيب راسك مايلة لورا — فضل مايل لقدّام عشان ماتبلعش الدم."
    ],
    "whenWhy": {
      "ar": "الضغط المستمر على الجزء الطري من المناخير بيدّي الدم فرصة يقف؛ والميل لقدّام بيمنع الدم إنه ينزل في الزور وتبلعه. عشان كده الوقت الكامل والوضعية الصح أهم حاجة.",
      "en": ""
    },
    "how": {
      "ar": "مثال: ابنك جاله نزيف مناخير وهو بيلعب. تقعّده ومايله لقدّام شوية، وتضغط على الجزء الطري من مناخيره ١٠ دقايق كاملة، وتستنى قبل ما تبص تشوف وقف ولا لأ — من غير ما تبطّل بدري.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو النزيف ماوقفش بعد ٢٠ دقيقة، أو المناخير ممكن تكون اتكسرت، أو بتاخد مسيّلات دم والنزيف مستمر."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو الإسعاف مش بيرد."
      }
    ],
    "whatToBuy": [
      {
        "item": "بخاخ محلول ملحي للأنف",
        "why": "بيرطّب بطانة المناخير ويقلّل جفافها"
      },
      {
        "item": "جل ذائب في الميّه للأنف",
        "why": "بيحمي المناخير من الجفاف في الجو الناشف"
      },
      {
        "item": "جهاز ترطيب/بخّار للبيت",
        "why": "بيزوّد رطوبة الهوا جوّه"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID لو بتاخد مسيّلات دم"
    ],
    "writeDown": [
      "لو بتاخد مسيّلات دم أو النزيف بيتكرر معاك، اكتب ده في Medical ID عشان الطبيب"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Nosebleed",
        "url": "https://medlineplus.gov/ency/article/003106.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص اللي بينزف ممكن يخاف من منظر الدم ويتوتر — طمّنه، خلّيه قاعد ومايل لقدّام، وافضل معاه لحد ما يقف.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اقعد ومِيل لقدّام، هنضغط على مناخيرك ١٠ دقايق كاملة وهيقف.»"
      ],
      "toSelf": [
        "«أضغط صح وأحسب الوقت — مش هبطّل بدري.»"
      ]
    },
    "bodyLanguage": {
      "ar": "هدوء، إيد ثابتة على المناخير، وصوت مطمئن عشان الشخص مايتوترش أكتر.",
      "en": ""
    },
    "rights": {
      "ar": "طلب مساعدة طبية لو النزيف ماوقفش أو في علامة خطر تصرّف صح ومسؤول.",
      "en": ""
    },
    "variations": [
      "طفل: قعّده في حضنك ومايله لقدّام واضغط على مناخيره برفق.",
      "شخص بياخد مسيّلات دم: راقب أكتر، ولو النزيف ماوقفش كلّم الطبيب أو الإسعاف."
    ],
    "prevention": [
      "خلّي جو البيت مايل للبرودة ورطّب الهوا بجهاز بخّار.",
      "استخدم بخاخ محلول ملحي وجل ذائب في الميّه عشان تمنع جفاف المناخير في الشتا."
    ],
    "drill": {
      "ar": "احفظ: اقعد · مِيل لقدّام · اضغط على الجزء الطري ١٠ دقايق · استنى قبل ما تشوف.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما النزيف يقف، ريّح شوية وخليك هادي؛ ولو رجع تاني اقعد واضغط من الأول زي المرة الأولانية.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Nosebleed",
        "url": "https://medlineplus.gov/ency/article/003106.htm",
        "srcId": "mlp:nosebleed",
        "sha256": "94ef589236",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "knocked-tooth",
    "title": {
      "ar": "سنة مكسورة أو وقعت",
      "en": "Broken or knocked out tooth"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "سنة اتكسرت أو وقعت من مكانها بالكامل. لو السنة كاملة وقعت، دورك تمسكها صح، تحفظها رطبة، وتوصل دكتور الأسنان بسرعة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "اتصل بدكتور الأسنان فورًا أول ما سنة تتكسر أو تقع، وخُد السنة معاك لو لقيتها.",
        "en": "Contact your dentist right away when a tooth is broken or knocked out. If you can find the tooth, bring it with you to the dentist. Follow the steps in the First Aid section above.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "لو مش قادر تقفل سنانك العلوية والسفلية على بعض، يبقى فكّك ممكن يكون مكسور — ده محتاج مساعدة طبية فورًا عند دكتور أسنان أو في المستشفى.",
        "en": "If you cannot close your upper and lower teeth together, your jaw may be broken. This requires medical help right away at a dentist's office or hospital.",
        "src": "mlp:knocked-tooth"
      }
    ],
    "do": [
      {
        "t": "حاول ترجّع السنة مكانها في بقّك زي ما وقعت، بحيث تبقى في مستوى باقي السنان. عُضّ بالراحة على شاش أو كيس شاي مبلول عشان تثبّتها، وخلّي بالك ماتبلعش السنة.",
        "en": "Try to place the tooth back in your mouth where it fell out, so it is level with other teeth. Bite down gently on a gauze or a wet tea bag to help keep it in place. Be careful not to swallow the tooth.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "لو مش قادر تعمل الخطوة اللي فوق، حُط السنة في علبة وغطّيها بشوية لبن بقري أو لعاب.",
        "en": "If you cannot do the above step, place the tooth in a container and cover it with a small amount of cow's milk or saliva.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "تقدر كمان تمسك السنة بين شفتك السفلانية واللثة، أو تحت لسانك.",
        "en": "You can also hold the tooth between your lower lip and gum or under your tongue.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "في جهاز لحفظ السنة ممكن يكون متوفّر عند دكتور الأسنان، وفيه علبة للنقل ومحلول سائل. فكّر تشتري واحد لشنطة إسعافات البيت.",
        "en": "A tooth-saving storage device (Save-a-Tooth, EMT Tooth Saver) may be available at your dentist's office. This type of kit contains a travel case and fluid solution. Consider buying one for your home first aid kit.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "حُط كمادة باردة على برّه على بقّك ولثتك عشان تخفّف الألم.",
        "en": "Apply a cold compress on the outside of your mouth and gums to ease pain.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "اضغط ضغط مباشر بشاش عشان توقّف النزيف.",
        "en": "Apply direct pressure using gauze to control bleeding.",
        "src": "mlp:knocked-tooth"
      }
    ],
    "dont": [
      {
        "t": "ماتمسكش جذور السنة. امسك بس من الجزء اللي بتعُضّ بيه — التاج (الجزء العلوي) من السنة.",
        "en": "Do not handle the roots of the tooth. Handle only the chewing edge -- the crown (top) portion of the tooth.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "ماتحُكّش ولا تمسح جذر السنة عشان تشيل التراب.",
        "en": "Do not scrape or wipe the root of the tooth to remove dirt.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "ماتفرّشش ولا تنضّف السنة بالكحول أو الماء الأكسجيني.",
        "en": "Do not brush or clean the tooth with alcohol or peroxide.",
        "src": "mlp:knocked-tooth"
      },
      {
        "t": "ماتسبش السنة تنشف.",
        "en": "Do not let the tooth dry out.",
        "src": "mlp:knocked-tooth"
      }
    ],
    "whenWhy": {
      "ar": "بنمسك السنة من التاج (الجزء اللي بتعُضّ بيه) بس، ومنمسحش الجذر ومنسيبش السنة تنشف — عشان نحافظ عليها لحد الدكتور. الكمادة الباردة بتخفّف الألم والضغط بالشاش بيوقف النزيف.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: ابنك وقع وسنته وقعت. تمسكها من التاج مش من الجذر، وتحاول ترجّعها مكانها ويعُضّ بالراحة على شاش. لو مقدرتش، تحطها في كوباية فيها لبن بقري وتجروا على دكتور الأسنان بسرعة والسنة معاكم.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو فكّك ممكن يكون مكسور ومش قادر تقفل سنانك على بعض، أو في نزيف مش بيقف — عايز أوصل المستشفى."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "شاش طبي",
        "why": "لتثبيت السنة وقت العض وللضغط على النزيف"
      },
      {
        "item": "لبن بقري",
        "why": "وسط مؤقت يحفظ السنة رطبة لحد الدكتور"
      },
      {
        "item": "كمادة باردة",
        "why": "تخفيف الألم على برّه البق واللثة"
      },
      {
        "item": "جهاز حفظ السنة (اختياري)",
        "why": "علبة نقل ومحلول لحفظ السنة في شنطة إسعافات البيت"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID",
      "استخدم الخريطة تلاقي أقرب عيادة أسنان أو مستشفى"
    ],
    "writeDown": [
      "وقت وقوع أو كسر السنة",
      "إزاي حفظت السنة (في البق / لبن / لعاب) عشان تقول للدكتور"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Broken or knocked out tooth",
        "url": "https://medlineplus.gov/ency/article/000058.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب بيكون متألم وخايف على شكل سنانه ونازف شوية. طمّنه وساعده يمسك السنة صح ويحفظها ويوصل الدكتور بسرعة، وسيبك هادي.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«امسك السنة من التاج بس، وحطها في لبن لو مش هنرجّعها، ويلا على دكتور الأسنان.»"
      ],
      "toSelf": [
        "«من التاج مش من الجذر، وماسيبهاش تنشف.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك بثقة وهدوء، اتكلم بصوت مطمئن، وساعده يمسك الكمادة الباردة على وشّه.",
      "en": ""
    },
    "rights": {
      "ar": "طلب دكتور أسنان فورًا حقّك، والتحرّك السريع تصرّف مسؤول.",
      "en": ""
    },
    "variations": [
      "لو مش هتقدر ترجّع السنة مكانها: خزّنها في لبن بقري أو في لعابك لحد ما توصل الدكتور.",
      "لو فكّك موجعك ومش قادر تقفل سنانك على بعض: ده ممكن يكون كسر في الفك — روح المستشفى فورًا."
    ],
    "prevention": [
      "خلّي في البيت شنطة إسعافات فيها شاش، وفكّر في جهاز لحفظ السنة.",
      "لبس واقي أسنان أثناء الرياضة أو ركوب العجل بيقلّل إصابات السنان."
    ],
    "drill": {
      "ar": "احفظ: امسك من التاج · ماتسيبهاش تنشف (بق / لبن / لعاب) · دكتور أسنان فورًا.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما توصل الدكتور، اتبع تعليماته للمتابعة، وراقب أي ألم أو تورّم في الفك.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Broken or knocked out tooth",
        "url": "https://medlineplus.gov/ency/article/000058.htm",
        "srcId": "mlp:knocked-tooth",
        "sha256": "6457d31ac6",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "dislocation",
    "title": {
      "ar": "خلع في المفصل",
      "en": "Dislocation"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "إصابات",
    "snapshot": {
      "ar": "لو مفصل شكله اتغيّر أو شاكك إنه اتخلع، ماتحاولش ترجّعه مكانه. ثبّته زي ما لقيته واتصل بالإسعاف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عضمة طالعة من الجلد.",
        "en": "A bone projecting through the skin",
        "src": "mlp:dislocation"
      },
      {
        "t": "خلع أو كسر معروف أو مشتبه فيه.",
        "en": "A known or suspected dislocation or broken bone",
        "src": "mlp:dislocation"
      },
      {
        "t": "المنطقة تحت المفصل المصاب باهتة أو باردة أو معرّقة ولزجة أو مزرقة.",
        "en": "An area below the injured joint that is pale, cold, clammy, or blue",
        "src": "mlp:dislocation"
      },
      {
        "t": "نزيف شديد.",
        "en": "Severe bleeding",
        "src": "mlp:dislocation"
      },
      {
        "t": "علامات عدوى زي سخونة أو احمرار مكان الإصابة، صديد، أو حرارة في الجسم.",
        "en": "Signs of infection, such as warmth or redness at the injured site, pus, or a fever",
        "src": "mlp:dislocation"
      }
    ],
    "do": [
      {
        "t": "اتصل بالطوارئ قبل ما تبدأ تساعد حد ممكن يكون عنده خلع، خصوصًا لو الحادث اللي سبّب الإصابة ممكن يهدد حياته.",
        "en": "Call 911 or the local emergency number before you begin treating someone who may have a dislocation, especially if the accident that caused the injury may be life threatening.",
        "src": "mlp:dislocation"
      },
      {
        "t": "لو الإصابة خطيرة، اتأكد من مجرى الهوا والتنفس والدورة الدموية. ولو محتاج، ابدأ إنعاش قلبي رئوي أو سيطر على النزيف.",
        "en": "If the person has a serious injury, check their airway, breathing, and circulation. If necessary, begin CPR, or bleeding control.",
        "src": "mlp:dislocation"
      },
      {
        "t": "لو الجلد مفتوح، امنع العدوى: ماتنفخش على الجرح. اشطف المكان بالراحة بميّه نضيفة عشان تشيل التراب اللي شايفه، بس ماتفركش ولا تنكش فيه. غطّيه بشاش معقم قبل ما تثبّت المفصل، وماتحاولش ترجع العضمة مكانها إلا لو إنت متخصص عظام.",
        "en": "If the skin is broken, take steps to prevent infection. Do not blow on the wound. Rinse the area gently with clean water to remove any dirt you can see, but do not scrub or probe. Cover the area with sterile dressings before immobilizing the injured joint. Do not attempt to put the bone back in place unless you are a bone specialist.",
        "src": "mlp:dislocation"
      },
      {
        "t": "ثبّت المفصل المصاب بجبيرة أو حمّالة في نفس الوضع اللي لقيته عليه. ماتحرّكش المفصل، وثبّت كمان المنطقة اللي فوق الإصابة واللي تحتها.",
        "en": "Apply a splint or sling to the injured joint in the position in which you found it. Do not move the joint. Also immobilize the area above and below the injured area.",
        "src": "mlp:dislocation"
      },
      {
        "t": "افحص الدورة الدموية حوالين الإصابة بإنك تضغط جامد على الجلد في المكان المصاب. المفروض يبيضّ وبعد ما تبطل ضغط يرجع لونه خلال ثانيتين تقريبًا. ماتعملش الخطوة دي لو الجلد مفتوح عشان تقلل خطر العدوى.",
        "en": "Check blood circulation around the injury by pressing firmly on the skin in the affected area. It should turn white, then regain color within a couple of seconds after you stop pressing on it. To reduce the risk for developing infection, do not do this step if the skin is broken.",
        "src": "mlp:dislocation"
      },
      {
        "t": "حط كمادات تلج عشان تخفف الوجع والتورم، بس ماتحطش التلج على الجلد مباشرة؛ لفّه في قماشة نضيفة.",
        "en": "Apply ice packs to ease pain and swelling, but do not put ice directly on the skin. Wrap the ice in a clean cloth.",
        "src": "mlp:dislocation"
      }
    ],
    "dont": [
      {
        "t": "ماتحرّكش الشخص لو شاكك إن راسه أو ضهره أو رجله اتصابت. خليه هادي وثابت.",
        "en": "Do not move the person if you think that their head, back, or leg has been injured. Keep the person calm and still.",
        "src": "mlp:dislocation"
      },
      {
        "t": "ماتحرّكش الشخص إلا بعد ما الإصابة تتثبّت بالكامل.",
        "en": "Do not move the person unless the injury has been completely immobilized.",
        "src": "mlp:dislocation"
      },
      {
        "t": "ماتحاولش تفرد عضمة أو مفصل شكله متغيّر، ولا تحاول تغيّر وضعه.",
        "en": "Do not attempt to straighten a misshapen bone or joint or try to change its position.",
        "src": "mlp:dislocation"
      },
      {
        "t": "ماتختبرش العضمة أو المفصل اللي شكله متغيّر عشان تشوف فقد وظيفته ولا لأ.",
        "en": "Do not test a misshapen bone or joint for loss of function.",
        "src": "mlp:dislocation"
      },
      {
        "t": "ماتديش الشخص أي حاجة عن طريق البق.",
        "en": "Do not give the person anything by mouth.",
        "src": "mlp:dislocation"
      }
    ],
    "whenWhy": {
      "ar": "تغيير وضع المفصل أو محاولة فرده مش مطلوبين منك. دورك تثبّت الإصابة في وضعها، تراقب الدورة الدموية، وتطلب الطوارئ.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: لقيت مفصل دراع حد شكله متغيّر. ماتعدّلوش؛ ثبّته في نفس الوضع، حط تلج ملفوف في قماشة، واتصل بالإسعاف.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "قول إن فيه خلع أو كسر مشتبه فيه، ووصف مكان الإصابة وأي نزيف أو تغيّر لون تحت المفصل."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج طوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "شاش معقم",
        "why": "لتغطية الجلد المفتوح قبل تثبيت المفصل"
      },
      {
        "item": "كمادة تلج وقماشة نضيفة",
        "why": "لتخفيف الوجع والتورم من غير ما التلج يلمس الجلد مباشرة"
      }
    ],
    "tech": [
      "Emergency SOS",
      "املأ Medical ID"
    ],
    "writeDown": [
      "مكان الإصابة، شكلها، وأي نزيف أو تغيّر لون تحت المفصل"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Dislocation",
        "url": "https://medlineplus.gov/ency/article/000014.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب ممكن يبقى موجوع وخايف من شكل المفصل. كلّمه بصوت واطي، وقوله إنك مش هتحرّك الإصابة وإنك طلبت مساعدة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا قماشة نضيفة واتصلوا بالإسعاف — محدش يحرّك المفصل.»"
      ],
      "toSelf": [
        "«أثبّت الوضع زي ما هو، ومش هحاول أعدّل المفصل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك بالراحة حوالين الإصابة، وخلي إيدك بعيدة عن محاولة شدّ المفصل أو تغيير وضعه.",
      "en": ""
    },
    "rights": {
      "ar": "من حق المصاب يتعامل معاه حد من غير ما يجرّب يحرك المفصل أو يرجّع العضمة مكانها.",
      "en": ""
    },
    "variations": [
      "لو الجلد مفتوح: اشطفه بالراحة، غطّيه بشاش معقم، وبعدها ثبّت المفصل.",
      "لو شاكك في إصابة راس أو ضهر أو رجل: ماتحرّكش الشخص وخليه ثابت."
    ],
    "prevention": [
      "ماتختبرش حركة المفصل اللي شكله متغيّر.",
      "ماتحطش التلج مباشرة على الجلد؛ لفّه في قماشة نضيفة."
    ],
    "drill": {
      "ar": "احفظها: ماتعدّليش · ثبّت زي ما لقيت · تلج ملفوف · اتصل بالإسعاف.",
      "en": ""
    },
    "after": {
      "ar": "فضّل سايب المفصل ثابت في نفس الوضع، وراقب لون وحرارة المنطقة اللي تحته لحد ما المساعدة توصل.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Dislocation",
        "url": "https://medlineplus.gov/ency/article/000014.htm",
        "srcId": "mlp:dislocation",
        "sha256": "51749ea3de",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "genital-injury",
    "title": {
      "ar": "إصابة في الأعضاء التناسلية",
      "en": "Genital injury"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "إصابات",
    "snapshot": {
      "ar": "لو حصلت إصابة في الأعضاء التناسلية، غطّي المكان وحافظ على خصوصية المصاب، وسيطر على النزيف بضغط مباشر بقطعة قماش نضيفة أو غيار معقّم.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "تورّم أو كدمات كتير",
        "en": "A lot of swelling or bruising",
        "src": "mlp:genital-injury"
      },
      {
        "t": "دم في البول",
        "en": "Blood in the urine",
        "src": "mlp:genital-injury"
      },
      {
        "t": "صعوبة في التبوّل",
        "en": "Difficulty urinating",
        "src": "mlp:genital-injury"
      },
      {
        "t": "وجع أو نزيف أو تورّم",
        "en": "Pain, bleeding, or swelling",
        "src": "mlp:genital-injury"
      },
      {
        "t": "فيه قلق إن يكون حصل اعتداء جنسي",
        "en": "A concern about sexual abuse",
        "src": "mlp:genital-injury"
      }
    ],
    "do": [
      {
        "t": "هَدّي المصاب، وراعي خصوصيته، وغطّي المكان المصاب وإنت بتعمل الإسعافات الأولية.",
        "en": "Keep the person calm. Be sensitive to privacy. Cover the injured area while giving first aid.",
        "src": "mlp:genital-injury"
      },
      {
        "t": "سيطر على النزيف بضغط مباشر، وحط قطعة قماش نضيفة أو غيار معقّم على أي جرح مفتوح. لو فيه نزيف شديد من المهبل، حط شاش معقّم أو قماش نضيف على المكان، إلا لو شاكك إن فيه جسم غريب.",
        "en": "Control bleeding by using direct pressure. Place a clean cloth or sterile dressing on any open wounds. If the vagina is bleeding severely, put sterile gauze or clean cloths on the area, unless a foreign body is suspected.",
        "src": "mlp:genital-injury"
      },
      {
        "t": "حط كمّادات باردة عشان تساعد تقلّل التورّم.",
        "en": "Apply cold compresses to help reduce swelling.",
        "src": "mlp:genital-injury"
      },
      {
        "t": "لو الخصيتين اتصابوا، اسندهم بحمّالة معمولة من فوط، وحطهم على قماشة مبطّنة زي الحفاضة.",
        "en": "If the testicles have been injured, support them with a sling made from towels. Place them on a padded cloth, such as a diaper.",
        "src": "mlp:genital-injury"
      },
      {
        "t": "لو فيه جسم عالق في فتحة في الجسم أو في جرح، سيبه مكانه واطلب مساعدة طبية؛ إخراجه ممكن يسبّب ضرر أكتر.",
        "en": "If there is an object stuck in a body opening or wound, leave it alone and seek medical attention. Taking it out may cause more damage.",
        "src": "mlp:genital-injury"
      }
    ],
    "dont": [
      {
        "t": "ماتحاولش تشيل جسم عالق بنفسك؛ اطلب مساعدة طبية فورًا.",
        "en": "DO NOT try to remove an object by yourself. Seek medical help right away.",
        "src": "mlp:genital-injury"
      },
      {
        "t": "ماتقولش توقّعاتك عن الإصابة حصلت إزاي. لو شاكك إنها نتيجة اعتداء أو إساءة، ماتخليش المصاب يغيّر هدومه أو ياخد حمّام، واطلب مساعدة طبية فورًا.",
        "en": "Never volunteer your thoughts on how you think the injury happened. If you think the injury was the result of assault or abuse, DO NOT let the person change clothes or take a bath or shower. Seek medical help right away.",
        "src": "mlp:genital-injury"
      }
    ],
    "whenWhy": {
      "ar": "الضغط المباشر بيساعد تسيطر على النزيف، والكمّادات الباردة بتساعد تقلّل التورّم. الجسم العالق يتساب مكانه لأن إخراجه ممكن يعمل ضرر أكتر.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: لقيت مصاب عنده نزيف. تستر المكان، تحط قماش نضيف على الجرح وتضغط مباشرة. لو فيه جسم عالق، ماتلمسوش واطلب مساعدة طبية.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "فيه إصابة في الأعضاء التناسلية وعايز مساعدة طبية فورًا."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج توصل للطوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "شاش معقّم أو قماش نضيف",
        "why": "للضغط المباشر وتغطية الجرح المفتوح"
      },
      {
        "item": "كمّادة باردة",
        "why": "للمساعدة في تقليل التورّم"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "اكتب اللي حصل والعلامات اللي ظهرت عشان تبلغ الفريق الطبي بوضوح"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Genital injury",
        "url": "https://medlineplus.gov/ency/article/000044.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب ممكن يكون محتاج خصوصية وحساسية في التعامل؛ غطّي المكان وما تقولش توقّعاتك عن سبب الإصابة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا قماش نضيف، وسيبوا للمصاب خصوصيته.»"
      ],
      "toSelf": [
        "«هغطّي المكان، أسيطر على النزيف، ومش هشيل أي جسم عالق.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خليك حساس لخصوصيته، وغطّي المكان وإنت بتساعده.",
      "en": ""
    },
    "rights": {
      "ar": "من حق المصاب تتصان خصوصيته، ومن غير ما حد يفرض توقّعاته عن الإصابة حصلت إزاي.",
      "en": ""
    },
    "variations": [
      "لو الإصابة في الخصيتين: اسندهم بفوط فوق قماشة مبطّنة.",
      "لو فيه جسم عالق: سيبه مكانه واطلب مساعدة طبية.",
      "لو فيه شك في اعتداء أو إساءة: ماتخليش المصاب يغيّر هدومه أو يستحمّى."
    ],
    "prevention": [
      "ماتحاولش تخرج جسم عالق بنفسك؛ ده ممكن يسبّب ضرر أكتر.",
      "راعي الخصوصية وغطّي المكان المصاب وإنت بتساعد."
    ],
    "drill": {
      "ar": "افتكرها: خصوصية وتغطية، ضغط مباشر لو فيه نزيف، والجسم العالق يتساب مكانه.",
      "en": ""
    },
    "after": {
      "ar": "اطلب مساعدة طبية فورًا لو ظهرت علامات الخطر، أو لو الإصابة مرتبطة باحتمال اعتداء أو إساءة.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Genital injury",
        "url": "https://medlineplus.gov/ency/article/000044.htm",
        "srcId": "mlp:genital-injury",
        "sha256": "a925f806a0",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "ear-emergencies",
    "title": {
      "ar": "طوارئ الأذن",
      "en": "Ear emergencies"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "لو جسم أو حشرة دخلت الأذن، أو الأذن اتجرحت، اتعامل برفق ومن غير ما تدخل أدوات أو سوائل جواها. الوجع، الدوخة، ضعف السمع، أو نزول دم أو إفرازات محتاجين كشف طبي.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "وجع في الأذن.",
        "en": "Pain in the ear",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "دوخة أو إحساس إن الدنيا بتلف.",
        "en": "Dizziness (vertigo)",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "ضعف في السمع.",
        "en": "Hearing loss",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "نزول إفرازات أو دم من الأذن.",
        "en": "Drainage or blood from the ear",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "خبطة حصلت قريب في الأذن أو الرأس.",
        "en": "Recent blow to your ear or head",
        "src": "mlp:ear-emergencies"
      }
    ],
    "do": [
      {
        "t": "لو الجسم طالع لبرا وسهل تشيله، شيله بإيدك أو بملقاط بالراحة. وبعدها اطلب مساعدة طبية عشان تتأكد إن الجسم كله اتشال.",
        "en": "If the object is sticking out and is easy to remove, gently remove it by hand or with tweezers. Then, get medical help to make sure the entire object has been removed.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "جرّب تخلي الجاذبية تطلّع الجسم: ميّل الراس ناحية الأذن المصابة. ماتخبطش راس الشخص؛ هزّها بالراحة ناحية الأرض عشان تحاول تزحزح الجسم.",
        "en": "Try using gravity to get the object out by tilting the head to the affected side. DO NOT strike the person's head. Shake it gently in the direction of the ground to try to dislodge the object.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "لو الجسم ماطلعش، اطلب مساعدة طبية.",
        "en": "If the object does not come out, get medical help.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "لو فيه حشرة، لفّ راس الشخص بحيث الأذن المصابة تبقى لفوق، واستنى تشوف الحشرة هتطير أو تزحف لبرا ولا لأ.",
        "en": "Turn the person's head so that the affected side is up and wait to see if the insect flies or crawls out.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "حتى لو باين إن الحشرة خرجت، اطلب رعاية طبية؛ أجزاء صغيرة منها ممكن تهيّج جلد قناة الأذن الحساس.",
        "en": "Even if an insect appears to come out, get medical attention. Small insect parts can irritate the sensitive skin of the ear canal.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "غطّي الإصابة بضمادة معقمة واخدة شكل الأذن، وثبّتها بلاصق من غير ما تشدّها.",
        "en": "Cover the injury with a sterile dressing shaped to the contour of the ear, and tape it loosely in place.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "لو جزء من الأذن اتقطع، احتفظ بالجزء واطلب مساعدة طبية فورًا.",
        "en": "If part of the ear has been cut off, keep the part. Get medical help right away.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "حط الجزء في قماشة نضيفة وخليه على تلج.",
        "en": "Place the part in a clean cloth and keep it on ice.",
        "src": "mlp:ear-emergencies"
      }
    ],
    "dont": [
      {
        "t": "ماتحطّش أي سائل في الأذن.",
        "en": "Do not put any liquid into the ear.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "ماتسدّش أي إفرازات نازلة من الأذن.",
        "en": "DO NOT block any drainage coming from the ear.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "ماتحاولش تنظّف أو تغسل جوه قناة الأذن.",
        "en": "DO NOT try to clean or wash the inside of the ear canal.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "ماتحاولش تطلّع الجسم بإنك تدخل عود قطن أو دبوس أو أي أداة؛ ده ممكن يزقّه أعمق ويأذي الأذن الوسطى.",
        "en": "DO NOT attempt to remove the object by probing with a cotton swab, a pin, or any other tool. To do so will risk pushing the object farther into the ear and damaging the middle ear.",
        "src": "mlp:ear-emergencies"
      },
      {
        "t": "ماتدخلش ملقاط جوه قناة الأذن.",
        "en": "DO NOT reach inside the ear canal with tweezers.",
        "src": "mlp:ear-emergencies"
      }
    ],
    "whenWhy": {
      "ar": "إدخال أدوات ممكن يزق الجسم أعمق ويأذي الأذن الوسطى، وغسل جوه قناة الأذن أو سد الإفرازات تصرّف غلط. خليك في الخطوات البسيطة واطلب مساعدة طبية لو الجسم ماخرجش أو فيه علامات إصابة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: حاجة دخلت أذن صاحبك. لو مش طالعة وسهلة، ماتدخلش ملقاط ولا عود قطن. ميّل راسه ناحية الأذن المصابة وهزّها بالراحة ناحية الأرض؛ لو الحاجة ماخرجتش، اطلب مساعدة طبية.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "في إصابة طارئة في الأذن، أو جزء من الأذن اتقطع، ومحتاجين مساعدة طبية فورًا."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج توصل للطوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "ضمادة معقمة",
        "why": "لتغطية إصابة الأذن برفق"
      },
      {
        "item": "قماشة نضيفة وتلج",
        "why": "لحفظ الجزء المقطوع من الأذن أثناء طلب المساعدة الطبية"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "اكتب اللي دخل الأذن، اللي حصل، والأعراض الظاهرة عشان تقولهم لمقدم الرعاية."
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Ear emergencies",
        "url": "https://medlineplus.gov/ency/article/000052.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يبقى متوتر من الوجع أو ضعف السمع؛ كلمه بصوت واضح، وخليك جنبه من غير ما تزود خوفه أو تلمس الأذن بعنف.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا ضمادة معقمة، ومحدش يدخل أي أداة أو سائل في الأذن.»"
      ],
      "toSelf": [
        "«هتعامل برفق، ومش هدخل حاجة جوه قناة الأذن.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرك بالراحة، خلي صوتك واطي وواضح، وماتشدّش الأذن ولا تضغط عليها.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك توقف أي محاولة عشوائية لإدخال أدوات أو سوائل في الأذن، وتطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "جسم ظاهر وسهل يتشال: شيله بالراحة، وبعدها اطلب مساعدة طبية.",
      "حشرة في الأذن: خلي الناحية المصابة لفوق واستنى تشوفها هتخرج ولا لأ.",
      "جزء من الأذن اتقطع: احتفظ بيه في قماشة نضيفة وعلى تلج، واطلب مساعدة فورًا."
    ],
    "prevention": [
      "ماتدخلش عود قطن أو دبوس أو أي أداة عشان تطلّع جسم من الأذن.",
      "ماتحطّش سوائل جوه الأذن."
    ],
    "drill": {
      "ar": "اتدرّب على القرار: جسم ظاهر وسهل يتشال — شيله برفق؛ جسم مش ظاهر أو ماخرجش — ماتدخلش أدوات واطلب مساعدة طبية؛ إصابة — غطّيها بضمادة معقمة من غير شد.",
      "en": ""
    },
    "after": {
      "ar": "بعد خروج جسم ظاهر، خلّي مقدم رعاية يتأكد إن كله اتشال. وحتى لو الحشرة باين إنها خرجت، اطلب رعاية طبية.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Ear emergencies",
        "url": "https://medlineplus.gov/ency/article/000052.htm",
        "srcId": "mlp:ear-emergencies",
        "sha256": "f1741ccdc1",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "frostbite",
    "title": {
      "ar": "قضمة الصقيع",
      "en": "Frostbite"
    },
    "level": 3,
    "who": [
      "أي حد اتعرّض لبرد شديد"
    ],
    "place": [
      "مكان بارد"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "ابعد عن البرد وروح مكان أدفى واحمِ الجزء المصاب.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "قضمة الصقيع كانت شديدة.",
        "en": "You had severe frostbite",
        "src": "mlp:frostbite"
      },
      {
        "t": "الإحساس واللون الطبيعيين مارجعوش بسرعة بعد العلاج في البيت لقضمة صقيع بسيطة.",
        "en": "Normal feeling and color do not return promptly after home treatment for mild frostbite",
        "src": "mlp:frostbite"
      },
      {
        "t": "ظهرت أعراض جديدة بعد قضمة صقيع حصلت قريب، زي سخونية، تعب عام، تغيّر لون الجلد، أو إفرازات من الجزء المصاب.",
        "en": "Frostbite has occurred recently and new symptoms develop, such as fever, general ill-feeling, skin discoloration, or drainage from the affected body part",
        "src": "mlp:frostbite"
      }
    ],
    "do": [
      {
        "t": "احمِ الشخص من البرد وانقله لمكان أدفى. شيل الحُلي الضيقة والهدوم المبلولة. دوّر على علامات انخفاض حرارة الجسم وتعامل معاها الأول.",
        "en": "Shelter the person from the cold and move them to a warmer place. Remove any tight jewelry and wet clothes. Look for signs of hypothermia and treat that condition first.",
        "src": "mlp:frostbite"
      },
      {
        "t": "لو المساعدة الطبية هتيجي بسرعة، لفّ الأماكن المصابة بضمادات معقمة، وافصل الصوابع المصابة بخامة ضمادات، وانقل الشخص للطوارئ.",
        "en": "If you can get medical help quickly, it is best to wrap the damaged areas in sterile dressings. Separate affected fingers and toes with bandage material. Transport the person to an emergency department for further care.",
        "src": "mlp:frostbite"
      },
      {
        "t": "حط ضمادات جافة ومعقمة على الأماكن المصابة، وبين صوابع الإيد أو الرجل المصابة عشان تفضل مفصولة.",
        "en": "Apply dry, sterile dressings to the frostbitten areas. Put dressings between frostbitten fingers or toes to keep them separated.",
        "src": "mlp:frostbite"
      },
      {
        "t": "حرّك الأماكن اللي دابت من التجمّد أقل ما يمكن.",
        "en": "Move thawed areas as little as possible.",
        "src": "mlp:frostbite"
      },
      {
        "t": "لو الإصابة شديدة، ادّي الشخص مشروبات دافية لتعويض السوائل اللي فقدها.",
        "en": "If the frostbite is severe, give the person warm drinks to replace lost fluids.",
        "src": "mlp:frostbite"
      }
    ],
    "dont": [
      {
        "t": "ماتدفّيش المكان المصاب لو مش هتقدر تخليه دافي؛ إعادة التجمّد ممكن تزود تلف الأنسجة.",
        "en": "Do not thaw out a frostbitten area if it cannot be kept thawed. Refreezing may make tissue damage even worse.",
        "src": "mlp:frostbite"
      },
      {
        "t": "ماتستخدمش حرارة جافة مباشرة زي دفاية أو نار أو وسادة تدفئة أو سيشوار؛ ممكن تحرق الأنسجة المصابة.",
        "en": "Do not use direct dry heat (such as a radiator, campfire, heating pad, or hair dryer) to thaw the frostbitten areas. Direct heat can burn the tissues that are already damaged.",
        "src": "mlp:frostbite"
      }
    ],
    "whenWhy": {
      "ar": "إعادة التجمّد تزود الضرر، والحرارة المباشرة ممكن تحرق النسيج المصاب.",
      "en": ""
    },
    "how": {
      "ar": "انقل الشخص لمكان أدفى، شيل المبلول والضيق، وغطّي الإصابة بضمادات معقمة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "قضمة صقيع شديدة أو أعراض جديدة."
      }
    ],
    "whatToBuy": [
      {
        "item": "ضمادات جافة معقمة",
        "why": "لتغطية الإصابة وفصل الصوابع"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "وقت التعرّض والأعراض اللي ظهرت"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Frostbite",
        "url": "https://medlineplus.gov/ency/article/000057.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص محتاجك تبعده عن البرد وتتعامل مع الجزء المصاب برفق.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا ضمادات معقمة واتصلوا بالإسعاف.»"
      ],
      "toSelf": [
        "«أبعده عن البرد وأحمي الجزء المصاب.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بصوت هادي واتعامل برفق.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب إسعاف لما الإصابة شديدة.",
      "en": ""
    },
    "variations": [
      "لو الصوابع مصابة: افصلها بضمادات."
    ],
    "prevention": [
      "امنع إعادة تجمّد الجزء بعد ما يدفى."
    ],
    "drill": {
      "ar": "درّب نفسك: مكان أدفى، شيل المبلول والضيق، ضمادات، إسعاف.",
      "en": ""
    },
    "after": {
      "ar": "لو اللون والإحساس مارجعوش بسرعة أو ظهرت أعراض جديدة، اطلب رعاية طبية.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Frostbite",
        "url": "https://medlineplus.gov/ency/article/000057.htm",
        "srcId": "mlp:frostbite",
        "sha256": "24166ddd32",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "skull-fracture",
    "title": {
      "ar": "كسر في الجمجمة",
      "en": "Skull fracture"
    },
    "level": 5,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "إصابة في الراس ممكن يبقى معاها كسر في الجمجمة. لو النفس أو الدورة الدموية فيهم مشكلة، أو الشخص فاقد الوعي، اطلب مساعدة طبية فورًا.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "فيه مشكلة في النفس أو الدورة الدموية.",
        "en": "There are problems with breathing or circulation.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "فيه سائل شفاف نازل من المناخير أو الودان.",
        "en": "There is drainage of clear fluid from the nose or ears.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "الشخص فاقد الوعي، أو بيتشنّج، أو عنده إصابات متعددة، أو باين عليه أي ضيق، أو مش قادر يفكّر بوضوح.",
        "en": "The person is unconscious, is experiencing convulsions, has multiple injuries, appears to be in any distress, or cannot think clearly.",
        "src": "mlp:skull-fracture"
      }
    ],
    "do": [
      {
        "t": "افحص مجرى الهوا والنفس والدورة الدموية. لو ضروري، ابدأ تنفّس إنقاذي وإنعاش قلبي رئوي.",
        "en": "Check the airways, breathing, and circulation. If necessary, begin rescue breathing and CPR.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "لو لازم تحرّكه، ثبّت راسه ورقبته. حُط إيديك على الناحيتين من راسه وتحت كتافه، وماتخلّيش راسه تنحني لقدّام أو لورا، ولا تلف أو تدور.",
        "en": "If the person must be moved, take care to stabilize the head and neck. Place your hands on both sides of the head and under the shoulders. Do not allow the head to bend forward or backward, or to twist or turn.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "لو فيه نزيف، اضغط بقوة بقماشة نضيفة على مساحة واسعة عشان تقلّل فقدان الدم، بس ماتضغطش مباشرة على مكان شاكك إنه كسر في الجمجمة.",
        "en": "If there is bleeding, apply firm pressure with a clean cloth over a broad area to control blood loss, but do not apply pressure directly onto a suspected skull fracture.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "لو الدم شرّب القماشة، ماتشيلهاش. حُط قماش أكتر فوقها وكمّل ضغط.",
        "en": "If blood soaks through, do not remove the original cloth. Instead, apply more cloths on top, and continue to apply pressure.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "لو بيرجّع، ثبّت راسه ورقبته ولفّه بالراحة على جنبه عشان مايشرقش في الترجيع.",
        "en": "If the person is vomiting, stabilize the head and neck, and carefully turn the victim to the side to prevent choking on vomit.",
        "src": "mlp:skull-fracture"
      }
    ],
    "dont": [
      {
        "t": "ماتحرّكوش إلا لو ضروري جدًا؛ إصابات الراس ممكن يبقى معاها إصابات في العمود الفقري.",
        "en": "Do not move the person unless absolutely necessary. Head injuries may be associated with spinal injuries.",
        "src": "mlp:skull-fracture"
      },
      {
        "t": "ماتشيلش أي جسم بارز.",
        "en": "Do not remove protruding objects.",
        "src": "mlp:skull-fracture"
      }
    ],
    "whenWhy": {
      "ar": "ماتحرّكوش إلا للضرورة، لأن إصابة الراس ممكن تبقى مرتبطة بإصابة في العمود الفقري. ولو بيرجّع، تثبيت الراس والرقبة ولفّه على جنبه بيمنع الشرقة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: حد خبط راسه وبيتنفّس. ماتحرّكوش، ثبّت راسه ورقبته، ولو فيه نزيف استخدم قماشة نضيفة على مساحة واسعة من غير ضغط مباشر على مكان الكسر المشتبه فيه.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "إصابة في الراس واحتمال كسر في الجمجمة؛ اشرح حالة النفس والوعي وأي نزيف."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل."
      }
    ],
    "whatToBuy": [
      {
        "item": "قماش نضيف",
        "why": "للضغط على مساحة واسعة لو فيه نزيف، بعيد عن مكان كسر الجمجمة المشتبه فيه"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "اكتب اللي شايفه في النفس والوعي والنزيف عشان تقوله للإسعاف"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Skull fracture",
        "url": "https://medlineplus.gov/ency/article/000060.htm"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن مايكونش مقتنع إنه محتاج مساعدة؛ خليك مباشر وماتسيبوش لوحده لحد ما المساعدة الطبية توصل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«كلموا الإسعاف، ومحدّش يحرّكه إلا لو ضروري.»"
      ],
      "toSelf": [
        "«هأفحص النفس والدورة الدموية، وأثبّت الراس والرقبة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقرب بحذر، ثبّت راسه ورقبته لو لازم يتحرّك، وراقبه عن قرب لحد ما المساعدة توصل.",
      "en": ""
    },
    "rights": {
      "ar": "طلب الإسعاف ومنع الحركة غير الضرورية تصرّف مسؤول.",
      "en": ""
    },
    "variations": [
      "لو بيرجّع: ثبّت الراس والرقبة ولفّه بالراحة على جنبه.",
      "لو الدم شرّب القماشة: سيبها مكانها وحُط قماش أكتر فوقها وكمّل ضغط."
    ],
    "prevention": [
      "بعد إصابة الراس، ماتخلّيش الشخص يكمّل أي نشاط بدني."
    ],
    "drill": {
      "ar": "اتدرّب على الترتيب: افحص مجرى الهوا والنفس والدورة الدموية، اتصل بالإسعاف، وماتحرّكش الشخص إلا للضرورة.",
      "en": ""
    },
    "after": {
      "ar": "راقبه عن قرب، ماتسيبوش لوحده، وماتديهوش دوا قبل ما تتكلم مع مقدم رعاية صحية.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Skull fracture",
        "url": "https://medlineplus.gov/ency/article/000060.htm",
        "srcId": "mlp:skull-fracture",
        "sha256": "3ef322663e",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "nose-fracture",
    "title": {
      "ar": "كسر في الأنف",
      "en": "Nose fracture"
    },
    "level": 3,
    "who": [
      "الكبار والأطفال"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "إصابات",
    "snapshot": {
      "ar": "لو أنفك اتخبط وبقى بينزف أو شكله اتغيّر، اقعد وميل لقدّام واتنفّس من بقك، واتعامل معاه من غير ضغط زيادة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "النزيف مش بيقف",
        "en": "Bleeding does not stop",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "سائل شفاف مستمر ينزل من الأنف",
        "en": "Clear fluid keeps draining from the nose",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "شاكك إن فيه تجمّع دم في الحاجز الأنفي",
        "en": "You suspect a blood clot in the septum",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "شاكك في إصابة في الرقبة أو الرأس",
        "en": "You suspect a neck or head injury",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "الشخص عنده صعوبة في التنفّس",
        "en": "The person is having difficulty breathing",
        "src": "mlp:nose-fracture"
      }
    ],
    "do": [
      {
        "t": "حاول تهدّى.",
        "en": "Try to stay calm.",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "اتنفّس من بقك، واقعد وميل لقدّام عشان الدم ماينزلش في آخر زورك.",
        "en": "Breathe through your mouth and lean forward in a sitting position to keep blood from going down the back of your throat.",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "اقفل فتحتي الأنف بالضغط عليهم، وفضّل ضاغط عشان توقف النزيف.",
        "en": "Squeeze the nostrils closed and hold pressure to stop the bleeding.",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "حُط كمّادات باردة على أنفك عشان تقلّل الورم، ولو تقدر امسك الكمّادة من غير ما تضغط جامد على الأنف.",
        "en": "Apply cold compresses to your nose to reduce swelling. If possible, hold the compress so that there isn't too much pressure on the nose.",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "عشان تخفّف الوجع، جرّب باراسيتامول.",
        "en": "To help relieve pain, try acetaminophen (Tylenol).",
        "src": "mlp:nose-fracture"
      }
    ],
    "dont": [
      {
        "t": "ماتحاولش تعدّل الأنف المكسور.",
        "en": "Do not try to straighten a broken nose.",
        "src": "mlp:nose-fracture"
      },
      {
        "t": "ماتحرّكش الشخص لو فيه سبب يخليك تشك في إصابة في الرأس أو الرقبة.",
        "en": "Do not move the person if there is reason to suspect a head or neck injury.",
        "src": "mlp:nose-fracture"
      }
    ],
    "whenWhy": {
      "ar": "الميل لقدّام بيمنع الدم من إنه ينزل في آخر زورك، والكمّادة الباردة بتقلّل الورم. لو النزيف مش بيقف أو فيه علامة خطر، اطلب مساعدة طبية فورًا.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بعد خبطة في الأنف، اقعد وميل لقدّام واتنفّس من بقك، اضغط على فتحتي الأنف، وحُط كمّادة باردة من غير ضغط زيادة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "فيه إصابة في الأنف، واذكر لو النزيف مش بيقف، أو فيه صعوبة تنفّس، أو شك في إصابة في الرأس أو الرقبة."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج مساعدة طبية فورًا."
      }
    ],
    "whatToBuy": [
      {
        "item": "كمّادة باردة عامة",
        "why": "عشان تقلّل الورم من غير ضغط زيادة على الأنف"
      }
    ],
    "tech": [
      "Emergency SOS",
      "استخدم الاتصال السريع بالطوارئ لو ظهرت علامة خطر"
    ],
    "writeDown": [
      "اكتب إيه اللي حصل، وإيه علامات الخطر اللي ظهرت، وإيه اللي عملته"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Nose fracture",
        "url": "https://medlineplus.gov/ency/article/000061.htm"
      }
    ],
    "othersPOV": {
      "ar": "المصاب ممكن يكون متوتر من النزيف أو شكل أنفه؛ كلمه بصوت واطي وساعده يقعد ويميل لقدّام من غير ما تحاول تعدّل أنفه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا كمّادة باردة، وماتضغطوش جامد على أنفه.»"
      ],
      "toSelf": [
        "«هقعد وأميل لقدّام، وهضغط على فتحتي الأنف من غير ما أحاول أعدّلها.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي حركتك هادية وواضحة، وساعده يقعد ويميل لقدّام من غير ما تحرّكه لو شاكك في إصابة في الرأس أو الرقبة.",
      "en": ""
    },
    "rights": {
      "ar": "من حق المصاب ياخد مساعدة طبية فورًا لو ظهرت علامة خطر، ومن حقه إن محدّش يحاول يعدّل أنفه.",
      "en": ""
    },
    "variations": [
      "لو النزيف مش بيقف: اطلب مساعدة طبية فورًا.",
      "لو شاكك في إصابة في الرأس أو الرقبة: ماتحرّكش الشخص.",
      "لو فيه صعوبة تنفّس: اطلب مساعدة طبية فورًا."
    ],
    "prevention": [
      "بعد إصابة الأنف، ماتحاولش تعدّل الأنف المكسور.",
      "استخدم الكمّادة الباردة من غير ضغط زيادة على الأنف."
    ],
    "drill": {
      "ar": "افتكرها: اقعد وميل لقدّام، اتنفّس من بقك، اضغط على فتحتي الأنف، وحُط كمّادة باردة من غير ضغط زيادة.",
      "en": ""
    },
    "after": {
      "ar": "تابع النزيف والتنفس، ولو النزيف ماوقفش أو ظهر سائل شفاف أو شكّيت في إصابة في الرأس أو الرقبة، اطلب مساعدة طبية فورًا.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Nose fracture",
        "url": "https://medlineplus.gov/ency/article/000061.htm",
        "srcId": "mlp:nose-fracture",
        "sha256": "0688856283",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "unconsciousness",
    "title": {
      "ar": "فقدان الوعي — إسعافات أولية",
      "en": "Unconsciousness - first aid"
    },
    "level": 5,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "قدامك شخص فاقد الوعي ومش بيرد. دورك تتابع تنفّسه ونبضه، تأمّن مجرى الهوا، وتطلب المساعدة الطبية.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "مش بيرجع لوعيه بسرعة، خلال دقيقة.",
        "en": "Does not return to consciousness quickly (within a minute)",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "وقع أو اتصاب، خصوصًا لو بينزف.",
        "en": "Has fallen down or been injured, especially if they are bleeding",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "مش بيتنفّس.",
        "en": "Is not breathing",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "حاسس بألم أو ضغط أو عدم راحة في الصدر، أو ضربات قلبه قوية أو مش منتظمة.",
        "en": "Feels chest pain, pressure, or discomfort, or has a pounding or irregular heartbeat",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "مش قادر يتكلم، أو عنده مشكلة في النظر، أو مش قادر يحرّك دراعاته ورجليه.",
        "en": "Cannot speak, has vision problems, or cannot move their arms and legs",
        "src": "mlp:unconsciousness"
      }
    ],
    "do": [
      {
        "t": "راجع مجرى الهوا والتنفس والنبض بشكل متكرر. لو محتاج، ابدأ الإنعاش القلبي الرئوي.",
        "en": "Check the person's airway, breathing, and pulse frequently. If necessary, begin CPR.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "لو بيتنفّس ونايم على ضهره، وإنت مش شاكك في إصابة في العمود الفقري، لفّه بحذر ناحيتك على جنبه. اثني الرجل اللي فوق بحيث الفخذ والركبة يبقوا بزاوية قائمة. ميّل راسه لورا بالراحة عشان مجرى الهوا يفضل مفتوح. لو التنفس أو النبض وقف في أي وقت، رجّعه على ضهره وابدأ الإنعاش القلبي الرئوي.",
        "en": "If the person is breathing and lying on their back, and you do not think there is a spinal injury, carefully roll the person toward you onto their side. Bend the top leg so both hip and knee are at right angles. Gently tilt their head back to keep the airway open. If breathing or pulse stops at any time, roll the person onto their back and begin CPR.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "لو شاكك في إصابة في العمود الفقري، سيبه مكان ما لقيته طول ما التنفس مستمر. لو رجّع، لف جسمه كله مرة واحدة على جنبه. اسند رقبته وضهره عشان الراس والجسم يفضلوا في نفس الوضع وإنت بتلفّه.",
        "en": "If you think there is a spinal injury, leave the person where you found them (as long as breathing continues). If the person vomits, roll the entire body at one time to their side. Support their neck and back to keep the head and body in the same position while you roll.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "دفّيه لحد ما المساعدة الطبية توصل.",
        "en": "Keep the person warm until medical help arrives.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "لو شايفه بيُغمى عليه، حاول تمنعه من الوقوع. مدّده على الأرض وارفع رجليه حوالي ١٢ بوصة، يعني ٣٠ سنتيمتر.",
        "en": "If you see a person fainting, try to prevent a fall. Lay the person flat on the floor and raise their feet about 12 inches (30 centimeters).",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "لو غالبًا الإغماء سببه انخفاض سكر الدم، ادّيه حاجة مسكّرة ياكلها أو يشربها بس بعد ما يفوق.",
        "en": "If fainting is likely due to low blood sugar, give the person something sweet to eat or drink only when they become conscious.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "لو شايف حاجة سايبة سادة مجرى الهوا، حاول تشيلها. لو الحاجة محشورة في زوره، ماتحاولش تمسكها؛ ده ممكن يزقّها لجوه مجرى الهوا أكتر.",
        "en": "If you see something blocking the airway and it is loose, try to remove it. If the object is lodged in the person's throat, do not try to grasp it. This can push the object farther into the airway.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "كمّل الإنعاش القلبي الرئوي، وفضّل راجع إذا الحاجة اتحركت من مكانها، لحد ما المساعدة الطبية توصل.",
        "en": "Continue CPR and keep checking to see if the object is dislodged until medical help arrives.",
        "src": "mlp:unconsciousness"
      }
    ],
    "dont": [
      {
        "t": "ماتديش الشخص الفاقد الوعي أي أكل أو شرب.",
        "en": "Do not give an unconscious person any food or drink.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "ماتسيبوش لوحده.",
        "en": "Do not leave the person alone.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "ماتحطّش مخدة تحت راس الشخص الفاقد الوعي.",
        "en": "Do not place a pillow under the head of an unconscious person.",
        "src": "mlp:unconsciousness"
      },
      {
        "t": "ماتضربوش على وشه وماترشش مية على وشه عشان تحاول تفوّقه.",
        "en": "Do not slap an unconscious person's face or splash water on their face to try to revive them.",
        "src": "mlp:unconsciousness"
      }
    ],
    "whenWhy": {
      "ar": "متابعة مجرى الهوا والتنفس والنبض بتحدد إذا كان محتاج إنعاش. ولو شاكك في إصابة في العمود الفقري، ماتحرّكوش طول ما التنفس مستمر.",
      "en": ""
    },
    "how": {
      "ar": "ابدأ بمجرى الهوا والتنفس والنبض. لو بيتنفّس ومفيش شك في إصابة بالعمود الفقري، لفّه على جنبه بحذر وخلي مجرى الهوا مفتوح. لو التنفس أو النبض وقف، رجّعه على ضهره وابدأ الإنعاش.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "شخص فاقد الوعي، واذكر إذا كان بيتنفّس أو مصاب أو بينزف."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج طوارئ موحّدة."
      }
    ],
    "whatToBuy": [
      {
        "item": "⚠️VERIFY",
        "why": "المصدر مافيهوش قائمة مشتريات موثّقة للحالة دي"
      }
    ],
    "tech": [
      "⚠️VERIFY"
    ],
    "writeDown": [
      "اكتب اللي شوفته: هل كان بيتنفّس، وهل وقع أو اتصاب أو نزف"
    ],
    "videosCommunities": [
      {
        "label": "MedlinePlus — Unconsciousness - first aid",
        "url": "https://medlineplus.gov/ency/article/000022.htm"
      }
    ],
    "othersPOV": {
      "ar": "لما الشخص يفوق، اتكلم معاه بهدوء وفضل جنبه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«اتصلوا بالإسعاف، وأنا هتابع مجرى الهوا والتنفس والنبض.»"
      ],
      "toSelf": [
        "«هتابع تنفّسه ونبضه، ومش هسيبه لوحده.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرك بحذر، خصوصًا لو شاكك في إصابة في العمود الفقري، وخلي حد يتصل بالمساعدة الطبية.",
      "en": ""
    },
    "rights": {
      "ar": "طلب الإسعاف ومتابعة التنفس والنبض تصرّف مسؤول.",
      "en": ""
    },
    "variations": [
      "لو بيُغمى عليه: امنع الوقوع، مدّده، وارفع رجليه حوالي ١٢ بوصة، يعني ٣٠ سنتيمتر.",
      "لو شاكك في إصابة في العمود الفقري: سيبه مكانه طول ما التنفس مستمر.",
      "لو رجّع مع الاشتباه في إصابة بالعمود الفقري: لف جسمه كله مرة واحدة على جنبه مع سند الرقبة والضهر."
    ],
    "prevention": [
      "لو شايف حد بيُغمى عليه، حاول تمنعه من الوقوع."
    ],
    "drill": {
      "ar": "درّب نفسك على الترتيب: مجرى الهوا، التنفس، النبض، وبعدها اتصرف حسب اللي لقيته.",
      "en": ""
    },
    "after": {
      "ar": "فضل معاه، وكمّل متابعة مجرى الهوا والتنفس والنبض لحد ما المساعدة الطبية توصل.",
      "en": ""
    },
    "sources": [
      {
        "label": "MedlinePlus — Unconsciousness - first aid",
        "url": "https://medlineplus.gov/ency/article/000022.htm",
        "srcId": "mlp:unconsciousness",
        "sha256": "b4adebf16c",
        "grade": "A · public domain (U.S. NLM)"
      }
    ]
  },
  {
    "id": "landslide",
    "title": {
      "ar": "انهيار أرضي وتدفّق طيني",
      "en": "Landslides & Debris Flow"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "المناطق الجبلية والمنحدرات"
    ],
    "domain": "كوارث",
    "snapshot": {
      "ar": "لو فيه عاصفة وخطر انهيار أرضي، خليك صاحي ومنتبه للتحذيرات، وابعد عن مجرى الطين والمناطق الواطية.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "صوت ميّه أو طين مندفع، أو أصوات مش معتادة.",
        "en": "Listen and watch for rushing water, mud or unusual sounds.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "صوت شجر بيتكسر أو صخور كبيرة بتخبط في بعض، أو دوي واطي بيعلى كل ما الانهيار يقرب.",
        "en": "Unusual sounds such as trees cracking or boulders knocking together, might indicate moving debris. A faint rumbling sound that increases in volume is noticeable as the landslide nears.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "شقوق جديدة بتظهر في المحارة أو البلاط أو الطوب أو الأساسات.",
        "en": "New cracks appear in plaster, tile, brick or foundations.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "الأرض بتنتفخ عند أسفل منحدر.",
        "en": "Bulging ground appears at the base of a slope.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "سور أو حائط ساند أو عمود مرافق أو شجرة بيميل أو بيتحرك.",
        "en": "Fences, retaining walls, utility poles, or trees tilt or move.",
        "src": "ready:landslides-debris-flow"
      }
    ],
    "do": [
      {
        "t": "اسمع محطات الأخبار المحلية على راديو شغّال بالبطارية عشان التحذيرات.",
        "en": "Listen to local news stations on a battery-powered radio for warnings.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "اتبع دايمًا تعليمات المسؤولين المحليين عن الطوارئ؛ عندهم أحدث توصيات حسب الخطر في منطقتك.",
        "en": "Always follow the instructions from local emergency managers. They provide the latest recommendations based on the threat in your community.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "خليك منتبه وصاحي وقت العاصفة اللي ممكن تسبب انهيار أرضي؛ وفيات كتير من الانهيارات بتحصل والناس نايمة.",
        "en": "Stay alert and awake during a storm that could cause a landslide. Many deaths from landslides occur while people are sleeping.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "لو اتحصرت في مسار انهيار أرضي، اطلع لفوق بأسرع ما تقدر.",
        "en": "If you do get stuck in the path of a landslide move uphill as quickly as possible.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "لو قريب من مجرى ميّه أو قناة، انتبه لأي زيادة أو نقص مفاجئ في سريان الميّه أو لو لونها اتغيّر من صافي لعكر؛ دي ممكن تكون علامات إن انهيار أرضي جاي.",
        "en": "If you are near a stream or channel, be alert for any sudden increase or decrease in water flow or water that changes from clear to muddy. These can be signs that a landslide is coming.",
        "src": "ready:landslides-debris-flow"
      }
    ],
    "dont": [
      {
        "t": "ماتعدّيش أبدًا طريق عليه ميّه أو طين جاري، وماتعدّيش أبدًا كوبري لو شايف تدفّق بيقرب.",
        "en": "Be aware that by the time you are sure a debris flow is coming, it will be too late to get away safely. Never cross a road with water or mud flowing. Never cross a bridge if you see a flow approaching because it can grow faster and larger too quickly for you to escape.",
        "src": "ready:landslides-debris-flow"
      },
      {
        "t": "ابعد عن وديان الأنهار والمناطق الواطية وقت الخطر.",
        "en": "Avoid river valleys and low-lying areas during times of danger.",
        "src": "ready:landslides-debris-flow"
      }
    ],
    "whenWhy": {
      "ar": "التدفّق ممكن يكبر ويسرع قبل ما تلحق تبعد بأمان؛ عشان كده التحذير المبكر والبعد عن مساره مهمين.",
      "en": ""
    },
    "how": {
      "ar": "وقت العاصفة تابع التحذيرات، راقب تغيّر الميّه والأصوات، ولو لقيت نفسك في مسار الانهيار اطلع لفوق بسرعة.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بلّغ عن انهيار أرضي أو تدفّق طيني وخطره على الناس والمكان."
      },
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "لو فيه مصابين أو حد محاصر."
      }
    ],
    "whatToBuy": [
      {
        "item": "راديو شغّال بالبطارية",
        "why": "لمتابعة التحذيرات المحلية"
      }
    ],
    "tech": [
      "⚠️VERIFY"
    ],
    "writeDown": [
      "⚠️VERIFY"
    ],
    "videosCommunities": [
      {
        "label": "Ready.gov — Landslides & Debris Flow",
        "url": "https://www.ready.gov/landslides-debris-flow"
      }
    ],
    "othersPOV": {
      "ar": "اللي حواليك ممكن يترددوا أو يفتكروا إنهم لسه يقدروا يعدّوا؛ قول بوضوح إن محدش يقرب من طريق عليه ميّه أو طين جاري.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ابعدوا عن الطريق والمجرى، واطلعوا ناحية أرض أعلى.»"
      ],
      "toSelf": [
        "«أتابع التحذير، أراقب الميّه والصوت، وأطلع لفوق لو بقيت في المسار.»"
      ]
    },
    "bodyLanguage": {
      "ar": "إشارة واضحة بإيدك ناحية البعد عن المجرى والاتجاه لأرض أعلى.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تبعد عن مسار خطر وترفض تعدّي طريق أو كوبري عليه تدفّق.",
      "en": ""
    },
    "variations": [
      "وقت العاصفة: خليك منتبه وصاحي وتابع التحذيرات.",
      "قرب مجرى ميّه: راقب أي زيادة أو نقص مفاجئ أو تحوّل الميّه من صافية لعكرة."
    ],
    "prevention": [
      "جهّز راديو بطارية لمتابعة التحذيرات المحلية.",
      "اعرف طريق يبعدك عن الوديان والمناطق الواطية."
    ],
    "drill": {
      "ar": "اتدرّب تقول بسرعة: تحذير، مجرى، أرض أعلى — تابع التحذير، ابعد عن التدفّق، واتجه لفوق.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما تبعد عن الخطر، فضّل متابع التحذيرات المحلية وتعليمات المسؤولين.",
      "en": ""
    },
    "sources": [
      {
        "label": "Ready.gov — Landslides & Debris Flow",
        "url": "https://www.ready.gov/landslides-debris-flow",
        "srcId": "ready:landslides-debris-flow",
        "sha256": "6669b7b874",
        "grade": "A · public domain (FEMA / Ready.gov)"
      }
    ]
  },
  {
    "id": "low-blood-sugar",
    "title": {
      "ar": "هبوط سكر الدم",
      "en": "Low blood sugar (hypoglycaemia)"
    },
    "level": 4,
    "who": [
      "مريض السكر",
      "اللي معاه"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "لو ظهرت علامات هبوط السكر، اتصرف بسرعة بالسكر المناسب وراجع القياس. لو الشخص فقد الوعي، خليه على جنبه وما تسيبوش.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "تغيّر في النظر، زي زغللة العين.",
        "en": "changes in your vision such as blurred vision",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "حاسس بتلخبط ومش مركز.",
        "en": "feeling confused",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "حصله تشنّج أو نوبة.",
        "en": "have a seizure or fit",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "فقد الوعي.",
        "en": "become unconscious",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "خفقان في القلب.",
        "en": "heart palpitations",
        "src": "nhs:low-blood-sugar"
      }
    ],
    "do": [
      {
        "t": "كُل أو اشرب حاجة ترفع السكر بسرعة، زي كوباية صغيرة عصير فاكهة أو مشروب غازي بسكر، أو ٥ أقراص جلوكوز أو ديكستروز، أو ٤ حبات جيلي كبيرة، أو أنبوبين جل جلوكوز.",
        "en": "Eat or drink something that will raise your blood sugar quickly, such as a small glass of fruit juice or sugary fizzy drink, 5 glucose or dextrose tablets, 4 large jelly babies, or 2 tubes of glucose gel.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "قيس سكر الدم بعد ١٠ لـ ١٥ دقيقة.",
        "en": "Check your blood sugar after 10 to 15 minutes.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "لو سكر الدم لسه أقل من ٤ مليمول/لتر، خد مشروب أو سناك بسكر تاني، وقيس تاني بعد ١٠ دقايق.",
        "en": "If your blood sugar is still below 4mmol/L, have another sugary drink or snack, and check again after 10 minutes.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "لما الأعراض تتحسن وسكر الدم يبقى أعلى من ٤ مليمول/لتر، كُل حاجة تحافظ عليه مدة أطول، زي بسكويت أو ساندوتش، أو وجبتك الجاية لو ميعادها جه.",
        "en": "Once your symptoms have improved and your blood sugar is above 4mmol/L, eat something that will keep your blood sugar up for longer, such as some biscuits, a sandwich, or your next meal if it's due.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "حطّه في وضع الإفاقة على جنبه.",
        "en": "Put them into the recovery position.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "ادّيله حقنة جلوكاجون فورًا لو موجودة وإنت عارف تستخدمها.",
        "en": "Give them a glucagon injection straight away, if one is available and you know how to use it.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "لو بدأ يفوق خلال ١٠ دقايق من حقنة الجلوكاجون ويقدر يبلع بأمان، ادّيله أكل أو شرب يرفع سكر الدم.",
        "en": "If they start to recover within 10 minutes of having a glucagon injection and can swallow safely, give them some food or drink that will raise their blood sugar.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "افضل معاه لحد ما يفوق تمامًا.",
        "en": "Stay with them until they're fully recovered.",
        "src": "nhs:low-blood-sugar"
      }
    ],
    "dont": [
      {
        "t": "ما تدّيلوش أكل ولا شرب، لأنه مش هيقدر يبلع بأمان.",
        "en": "Do not give them any food or drink as they will not be able to swallow safely.",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "ما تفوّتش الوجبات وما تأخرهاش.",
        "en": "do not skip or delay meals",
        "src": "nhs:low-blood-sugar"
      },
      {
        "t": "ما تشربش كحول من غير أكل.",
        "en": "do not drink alcohol without eating",
        "src": "nhs:low-blood-sugar"
      }
    ],
    "whenWhy": {
      "ar": "السكر السريع بيرفع سكر الدم، والقياس المتكرر بيبيّن إذا كنت محتاج تكرر السكر. لو الشخص مش واعي، البلع مش آمن.",
      "en": ""
    },
    "how": {
      "ar": "لو إنت واعي وظهرت الأعراض: خد حاجة بسكر سريع، استنى المدة المذكورة، وقيس. لو حد فقد الوعي: حطه في وضع الإفاقة، وما تدّيلوش حاجة في بقه، وخليك معاه.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "الشخص عنده هبوط سكر وفقد الوعي أو حصله تشنج."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل لو محتاج طوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "أقراص أو جل جلوكوز",
        "why": "مصدر سكر سريع وقت الهبوط"
      },
      {
        "item": "عصير فاكهة أو مشروب غازي بسكر",
        "why": "بديل يرفع السكر بسرعة"
      }
    ],
    "tech": [
      "فعّل Emergency SOS في الموبايل",
      "اكتب حالة السكر في Medical ID"
    ],
    "writeDown": [
      "اكتب وقت ظهور الأعراض ونتايج قياس السكر والحاجة اللي اتاخدت"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Low blood sugar (hypoglycaemia)",
        "url": "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/"
      }
    ],
    "othersPOV": {
      "ar": "الشخص ممكن يبقى متلخبط ومحتاج كلام قصير وواضح ومساعدة مباشرة في تنفيذ الخطوات.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا جهاز قياس السكر وحاجة بسكر سريع، وخلي حد يفضل معاه.»"
      ],
      "toSelf": [
        "«هاخد السكر السريع، وأقيس في المعاد المذكور.»"
      ]
    },
    "bodyLanguage": {
      "ar": "قرّب منه من غير زحمة، اتكلم بجمل قصيرة، وخليك موجود لحد ما يفوق تمامًا.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة فورية لو الشخص فقد الوعي أو حصله تشنج.",
      "en": ""
    },
    "variations": [
      "لو الشخص واعي ويقدر يبلع: استخدم مصدر سكر سريع وراجع القياس.",
      "لو الشخص فاقد الوعي: وضع الإفاقة، مفيش أكل أو شرب، وافضل معاه.",
      "لو الجلوكاجون موجود وإنت عارف تستخدمه: ادّيه فورًا."
    ],
    "prevention": [
      "ما تفوّتش الوجبات وما تأخرهاش.",
      "ما تشربش كحول من غير أكل."
    ],
    "drill": {
      "ar": "درّب نفسك على التسلسل: سكر سريع، انتظار، قياس؛ ولو فقد الوعي: على جنبه، مفيش حاجة في بقه، وخليك معاه.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما الأعراض تتحسن والقياس يعدّي ٤ مليمول/لتر، كُل حاجة تحافظ على السكر مدة أطول، وسجّل اللي حصل.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Low blood sugar (hypoglycaemia)",
        "url": "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
        "srcId": "nhs:low-blood-sugar",
        "sha256": "73758583ac",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "diarrhoea-vomiting",
    "title": {
      "ar": "الإسهال والترجيع",
      "en": "Diarrhoea and vomiting"
    },
    "level": 3,
    "who": [
      "الكبار",
      "الأطفال والرضّع"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "مع الإسهال أو الترجيع، خليك في البيت وارتاح واشرب سوائل كتير برشفات صغيرة لو نفسك مقلوبة. راقب علامات الخطر كويس.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "إنت أو طفلك بتستمروا في الترجيع ومش قادرين تحتفظوا بأي سوائل.",
        "en": "you or your child keep being sick and cannot keep fluid down",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "إنت أو طفلك عندكم إسهال فيه دم أو نزيف من فتحة الشرج.",
        "en": "you or your child have bloody diarrhoea or bleeding from the bottom",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "ترجيع دم، أو ترجيع شكله زي تفل القهوة.",
        "en": "vomit blood or have vomit that looks like ground coffee",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "الجلد أو الشفايف أو اللسان لونهم أزرق أو رمادي أو شاحب أو مبقّع؛ في البشرة البنية أو السودة ممكن يبان أوضح في كفوف الإيد أو باطن الرجل.",
        "en": "have blue, grey, pale or blotchy skin, lips or tongue - on brown or black skin this may be easier to see on the palms of the hands or soles of the feet",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "صعوبة شديدة في التنفس، أو نفس سريع وقصير كتير.",
        "en": "are having severe difficulty breathing, or taking lots of quick, short breaths",
        "src": "nhs:diarrhoea-vomiting"
      }
    ],
    "do": [
      {
        "t": "خليك في البيت وخد قسط كبير من الراحة.",
        "en": "stay at home and get plenty of rest",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "اشرب سوائل كتير، زي الميه أو مشروب فاكهة مخفف؛ خد رشفات صغيرة لو حاسس إنك هترجع.",
        "en": "drink lots of fluids, such as water or squash – take small sips if you feel sick",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "كمّلي رضاعة طفلك طبيعي أو بالببرونة؛ لو بيرجع، جرّبي رضعات صغيرة أكتر من المعتاد.",
        "en": "carry on breast or bottle feeding your baby – if they're being sick, try giving small feeds more often than usual",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "ادّي الرضّع اللي بياخدوا لبن صناعي أو أكل صلب رشفات ميه صغيرة بين الرضعات.",
        "en": "give babies on formula or solid foods small sips of water between feeds",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "كُل لما تحس إنك قادر؛ ممكن يفيد إنك تبعد عن الأكل الدسم أو الحراق.",
        "en": "eat when you feel able to – it may help to avoid foods that are fatty or spicy",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "خد باراسيتامول لو حاسس بوجع أو عدم ارتياح؛ راجع النشرة قبل ما تديه لطفلك.",
        "en": "take paracetamol if you're in discomfort – check the leaflet before giving it to your child",
        "src": "nhs:diarrhoea-vomiting"
      }
    ],
    "dont": [
      {
        "t": "ما تشربش عصير فاكهة ولا مشروبات غازية؛ ممكن يزوّدوا الإسهال.",
        "en": "do not have fruit juice or fizzy drinks – they can make diarrhoea worse",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "ما تخفّفش لبن الأطفال الصناعي؛ استخدم التركيز المعتاد.",
        "en": "do not make baby formula weaker – use it at its usual strength",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "ما تديش طفل أقل من ١٢ سنة دوا يوقف الإسهال.",
        "en": "do not give children under 12 medicine to stop diarrhoea",
        "src": "nhs:diarrhoea-vomiting"
      },
      {
        "t": "ما تديش أسبرين لطفل أقل من ١٦ سنة.",
        "en": "do not give aspirin to children under 16",
        "src": "nhs:diarrhoea-vomiting"
      }
    ],
    "whenWhy": {
      "ar": "السوائل والرضعات الصغيرة بتسهّل الشرب لو في إحساس بالترجيع. العصير والمشروبات الغازية ممكن يزوّدوا الإسهال.",
      "en": ""
    },
    "how": {
      "ar": "ابدأ براحة وسوائل كتير. لو حاسس إنك هترجع، خلّيها رشفات صغيرة. كُل لما تقدر وابعد عن الدسم والحراق، وراجع علامات الخطر.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "في صعوبة شديدة في التنفس، أو لون أزرق أو رمادي أو شاحب أو مبقّع، أو ترجيع دم."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل للطوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "ميه وسوائل مناسبة",
        "why": "عشان تقدر تشرب سوائل كتير برشفات صغيرة"
      },
      {
        "item": "باراسيتامول عام",
        "why": "لو في وجع أو عدم ارتياح، مع مراجعة النشرة قبل إعطائه لطفل"
      }
    ],
    "tech": [
      "فعّل Emergency SOS في الموبايل",
      "حط أرقام الطوارئ المصرية في جهات الاتصال"
    ],
    "writeDown": [
      "اكتب وقت بداية الإسهال أو الترجيع، وقدرتك على الاحتفاظ بالسوائل، وأي علامة خطر ظهرت"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Diarrhoea and vomiting",
        "url": "https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/"
      }
    ],
    "othersPOV": {
      "ar": "اللي تعبان ممكن يبقى مرهق ونفسه مقفولة؛ ساعده يوصل للسوائل والراحة من غير ضغط عليه في الأكل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا ميه، وخلوه ياخد رشفات صغيرة لو نفسه مقلوبة.»"
      ],
      "toSelf": [
        "«هرتاح، وأشرب سوائل كتير، وأتابع علامات الخطر.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بصوت واطي، قرّب السوائل منه، وسيب له مساحة يرتاح.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة طارئة فورًا لو ظهرت علامة خطر شديدة.",
      "en": ""
    },
    "variations": [
      "للرضيع: كمّلي الرضاعة، ولو بيرجع جرّبي رضعات أصغر وأكتر.",
      "لرضيع على لبن صناعي أو أكل صلب: رشفات ميه صغيرة بين الرضعات.",
      "لو النفس صعب جدًا أو اللون اتغيّر: اتصل بالطوارئ."
    ],
    "prevention": [
      "ما تشربش عصير فاكهة أو مشروبات غازية وقت الإسهال.",
      "ما تخفّفش تركيز لبن الأطفال الصناعي.",
      "راجع النشرة قبل ما تدي باراسيتامول لطفل."
    ],
    "drill": {
      "ar": "احفظ التسلسل: راحة، سوائل كتير، رشفات صغيرة لو في غثيان، ومراجعة علامات الخطر.",
      "en": ""
    },
    "after": {
      "ar": "كمّل السوائل والراحة، وكُل لما تحس إنك قادر مع تجنّب الأكل الدسم أو الحراق.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Diarrhoea and vomiting",
        "url": "https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/",
        "srcId": "nhs:diarrhoea-vomiting",
        "sha256": "6edf556fb8",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "chickenpox",
    "title": {
      "ar": "الجديري المائي",
      "en": "Chickenpox"
    },
    "level": 3,
    "who": [
      "الأطفال والكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "الجديري المائي بيعمل حبوب وحكّة. خفّف الضيق، امنع الهرش، وراقب أي علامة إن الحالة بتسوء.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "الأعراض بتسوء، زي جلد أحمر أو سخن أو بيوجع حوالين الحبوب — والاحمرار ممكن يبقى أصعب في الملاحظة على البشرة البنية أو السودة.",
        "en": "the symptoms get worse, such as red, hot or painful skin around the blisters (redness may be harder to see on brown or black skin)",
        "src": "nhs:chickenpox"
      },
      {
        "t": "طفلك عنده جديري مائي وعليه علامات جفاف، زي إن الحفاضات المبلولة بقت أقل.",
        "en": "your child has chickenpox and is showing signs of dehydration, such as fewer wet nappies",
        "src": "nhs:chickenpox"
      },
      {
        "t": "كنت قريب من حد عنده جديري مائي ومناعتك ضعيفة أو إنتِ حامل.",
        "en": "you've been near someone with chickenpox and you have a weakened immune system or you're pregnant",
        "src": "nhs:chickenpox"
      },
      {
        "t": "شاكك إن مولودك الجديد عنده جديري مائي أو كان قريب من حد عنده جديري مائي.",
        "en": "you think your newborn baby has chickenpox or has been near someone with chickenpox",
        "src": "nhs:chickenpox"
      },
      {
        "t": "عندك جديري مائي ونَفَسك أضيق من المعتاد.",
        "en": "you have chickenpox and you're more short of breath than usual",
        "src": "nhs:chickenpox"
      }
    ],
    "do": [
      {
        "t": "اشرب سوائل كتير — وجرّب مصاصات تلج لو طفلك مش بيشرب.",
        "en": "drink plenty of fluids (try ice lollies if your child is not drinking)",
        "src": "nhs:chickenpox"
      },
      {
        "t": "خد باراسيتامول عشان يساعد مع الوجع والضيق.",
        "en": "take paracetamol to help with any pain and discomfort",
        "src": "nhs:chickenpox"
      },
      {
        "t": "قصّ ضوافر طفلك وحطّ له شرابات في إيديه بالليل عشان مايهرشش.",
        "en": "cut your child's fingernails and put socks on their hands at night to stop them scratching",
        "src": "nhs:chickenpox"
      },
      {
        "t": "استخدم كريمات أو جل مبرّد من الصيدلية.",
        "en": "use cooling creams or gels from a pharmacy",
        "src": "nhs:chickenpox"
      },
      {
        "t": "اسأل الصيدلي عن استخدام دوا مضاد للحساسية يساعد مع الحكّة.",
        "en": "speak to a pharmacist about using antihistamine medicine to help itching",
        "src": "nhs:chickenpox"
      },
      {
        "t": "استحمّى بمية باردة ونشّف الجلد بالطبطبة — ماتحكّوش.",
        "en": "bathe in cool water and pat the skin dry (do not rub)",
        "src": "nhs:chickenpox"
      },
      {
        "t": "البس هدوم واسعة.",
        "en": "dress in loose clothes",
        "src": "nhs:chickenpox"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش إيبوبروفين إلا لو دكتور قالك، لأنه ممكن يسبب عدوى جلدية خطيرة.",
        "en": "do not use ibuprofen unless you're told to by a doctor, as it may cause serious skin infections",
        "src": "nhs:chickenpox"
      },
      {
        "t": "ماتديش أسبرين لطفل أقل من ١٦ سنة.",
        "en": "do not give aspirin to children under 16 years",
        "src": "nhs:chickenpox"
      },
      {
        "t": "ماتهرشش الحبوب، لأن الهرش ممكن يسيب ندبات.",
        "en": "do not scratch the spots, as scratching can cause scarring",
        "src": "nhs:chickenpox"
      }
    ],
    "whenWhy": {
      "ar": "السوائل بتساعدك تتعامل مع الجفاف، وتقليل الهرش بيقلّل فرصة الندبات. لو الحالة بتسوء أو النفس أضيق من المعتاد، اطلب مساعدة بسرعة.",
      "en": ""
    },
    "how": {
      "ar": "خلّي التعامل بسيط: سوائل، تبريد لطيف، هدوم واسعة، وضوافر قصيرة. راقب الجلد والتنفس وحالة الطفل.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "عنده جديري مائي ونَفَسه أضيق من المعتاد."
      }
    ],
    "whatToBuy": [
      {
        "item": "كريم أو جل مبرّد من الصيدلية",
        "why": "يساعد مع الحكّة والضيق"
      }
    ],
    "tech": [
      "فعّل Emergency SOS على الموبايل"
    ],
    "writeDown": [
      "اكتب الأعراض اللي بتسوء والأدوية اللي اتاخدت"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Chickenpox",
        "url": "https://www.nhs.uk/conditions/chickenpox/"
      }
    ],
    "othersPOV": {
      "ar": "اعترف إن اللي حاسس بيه متعب، وكلمه بلطف ومن غير لوم.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا مية وخلّوا الهدوم واسعة، وإحنا هنراقب لو الأعراض بتسوء.»"
      ],
      "toSelf": [
        "«هخفّف الحكّة، أمنع الهرش، وأراقب علامات الخطر.»"
      ]
    },
    "bodyLanguage": {
      "ar": "صوت هادي، حركة لطيفة، ومن غير فرك للجلد.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تسأل الصيدلي أو الدكتور قبل استخدام دوا، وتطلب مساعدة لو الحالة بتسوء.",
      "en": ""
    },
    "variations": [
      "لو المصاب طفل: قصّ ضوافره وحطّ شرابات في إيديه بالليل.",
      "لو البشرة بنية أو سودة: خُد بالك إن الاحمرار ممكن يبقى أصعب في الملاحظة."
    ],
    "prevention": [
      "ماتهرشش الحبوب عشان الهرش ممكن يسيب ندبات."
    ],
    "drill": {
      "ar": "افتكرها: سوائل، تبريد، منع الهرش، ومراقبة علامات الخطر.",
      "en": ""
    },
    "after": {
      "ar": "كمّل متابعة الجلد، الشرب، والتنفس. لو أي عرض بيسوء، اطلب مساعدة طبية.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Chickenpox",
        "url": "https://www.nhs.uk/conditions/chickenpox/",
        "srcId": "nhs:chickenpox",
        "sha256": "18dfb587d1",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "asthma-attack",
    "title": {
      "ar": "نوبة ربو",
      "en": "Asthma"
    },
    "level": 4,
    "who": [
      "مريض الربو",
      "اللي معاه"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "لو النفس ضاق أو الصدر اتقبض، استخدم بخاخ الربو المناسب بالطريقة والحد الأقصى المذكورين، وخلي البخاخ معاك دايمًا.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "حالِك بيزيد سوء في أي وقت.",
        "en": "start to feel worse at any time",
        "src": "nhs:asthma"
      },
      {
        "t": "ما اتحسّنتش بعد ما خدت أقصى جرعة ببخاخ تخفيف الربو.",
        "en": "do not feel better after taking the maximum dose using an asthma reliever inhaler",
        "src": "nhs:asthma"
      },
      {
        "t": "معاكش بخاخ ربو.",
        "en": "do not have an asthma inhaler",
        "src": "nhs:asthma"
      },
      {
        "t": "ضيق في النفس.",
        "en": "shortness of breath",
        "src": "nhs:asthma"
      },
      {
        "t": "حاسس إن صدرك مقبوض.",
        "en": "your chest feeling tight",
        "src": "nhs:asthma"
      }
    ],
    "do": [
      {
        "t": "لو معاك بخاخ تخفيف أزرق، خد بخّة كل ٣٠ لـ ٦٠ ثانية لحد ما تتحسن، بحد أقصى ١٠ بخّات. رجّ البخاخ بين كل بخّة والتانية، واستخدم السبيسر معاه لو موجود.",
        "en": "If you have a blue reliever inhaler, take 1 puff every 30 to 60 seconds until you feel better, up to a maximum of 10 puffs. Shake the inhaler between each puff and use a spacer with the inhaler if you have one.",
        "src": "nhs:asthma"
      },
      {
        "t": "لو معاك بخاخ AIR أو MART، اللي بيتستخدم للوقاية وعلاج الأعراض، خد بخّة كل ١ لـ ٣ دقايق لحد ما تتحسن، بحد أقصى ٦ بخّات.",
        "en": "If you have an AIR or MART inhaler (used for both preventing and treating symptoms), take 1 puff every 1 to 3 minutes until you feel better, up to a maximum of 6 puffs.",
        "src": "nhs:asthma"
      },
      {
        "t": "خلي بخاخك معاك دايمًا.",
        "en": "always have your inhaler with you",
        "src": "nhs:asthma"
      },
      {
        "t": "استخدم بخاخاتك زي ما فريق الرعاية موصّيك.",
        "en": "use your inhalers as recommended by your care team",
        "src": "nhs:asthma"
      },
      {
        "t": "حاول تبعد عن الحاجات اللي بتحفّز أعراض الربو عندك، زي تلوث الهوا أو الدخان أو حبوب اللقاح أو الحيوانات.",
        "en": "try to avoid things that trigger your asthma symptoms, such as air pollution, smoke, pollen or animals",
        "src": "nhs:asthma"
      }
    ],
    "dont": [
      {
        "t": "ما تدخنش؛ خد مساعدة عشان تبطّل لو محتاج.",
        "en": "do not smoke – get help to quit smoking if you need it",
        "src": "nhs:asthma"
      },
      {
        "t": "ما تاخدش أدوية لحالات تانية من غير ما تراجع صيدلي أو دكتور؛ بعض الأدوية زي الأسبرين والإيبوبروفين وحاصرات بيتا ممكن تحفّز أعراض الربو عند بعض الناس.",
        "en": "do not take medicines for other conditions without checking with a pharmacist or doctor – some medicines such as aspirin, ibuprofen and beta blockers can trigger asthma symptoms in some people",
        "src": "nhs:asthma"
      }
    ],
    "whenWhy": {
      "ar": "نوع البخاخ بيفرّق في الوقت بين البخّات والحد الأقصى. اتبع تعليمات النوع اللي معاك، وراجع علامات الخطر من غير تأخير.",
      "en": ""
    },
    "how": {
      "ar": "حدّد نوع بخاخك الأول: الأزرق له تسلسل، وAIR أو MART له تسلسل تاني. استخدمه بالضبط زي الخطوة المناسبة، ولو حالك ساء أو ما اتحسّنتش بعد الحد الأقصى اطلب الطوارئ.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "عندي نوبة ربو، وحالي بيزيد سوء أو ما اتحسّنتش بعد أقصى جرعة، أو معيش بخاخ."
      },
      {
        "label": "الطوارئ الموحّدة",
        "number": "112",
        "say": "بديل للطوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "سبيسر عام للبخاخ",
        "why": "يتستخدم مع البخاخ لو موجود"
      }
    ],
    "tech": [
      "فعّل Emergency SOS في الموبايل",
      "اكتب نوع بخاخ الربو في Medical ID"
    ],
    "writeDown": [
      "اكتب نوع البخاخ، وقت البخّات، وعددها، وهل حصل تحسّن"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Asthma",
        "url": "https://www.nhs.uk/conditions/asthma/"
      }
    ],
    "othersPOV": {
      "ar": "اللي نفسه ضيق محتاج كلام قليل وواضح. ساعده يلاقي بخاخه ويتبع تسلسل النوع اللي معاه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتوا بخاخه، وشوفوا نوعه، وخلي حد يتصل بالإسعاف لو حاله بيسوء.»"
      ],
      "toSelf": [
        "«هحدّد نوع البخاخ وأتبع وقته وحده الأقصى.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقرب من غير زحمة، اتكلم بجمل قصيرة، وساعده يوصل لبخاخه بسرعة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب إسعاف فورًا لو حالك بيسوء، أو ما اتحسّنتش بعد الحد الأقصى، أو معاكش بخاخ.",
      "en": ""
    },
    "variations": [
      "بخاخ تخفيف أزرق: بخّة كل ٣٠ لـ ٦٠ ثانية، بحد أقصى ١٠ بخّات.",
      "بخاخ AIR أو MART: بخّة كل ١ لـ ٣ دقايق، بحد أقصى ٦ بخّات.",
      "لو معاك سبيسر مع البخاخ الأزرق: استخدمه."
    ],
    "prevention": [
      "خلي بخاخك معاك دايمًا.",
      "استخدم بخاخاتك زي ما فريق الرعاية موصّيك.",
      "حاول تبعد عن محفّزات أعراضك زي تلوث الهوا والدخان وحبوب اللقاح والحيوانات.",
      "ما تدخنش، وخد مساعدة عشان تبطّل لو محتاج."
    ],
    "drill": {
      "ar": "احفظ نوع بخاخك وتسلسله: الأزرق ٣٠ لـ ٦٠ ثانية وحده ١٠؛ وAIR أو MART من ١ لـ ٣ دقايق وحده ٦.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما تتحسن، كمّل استخدام بخاخاتك زي توصية فريق الرعاية، وخلي بخاخك معاك.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Asthma",
        "url": "https://www.nhs.uk/conditions/asthma/",
        "srcId": "nhs:asthma",
        "sha256": "4d5e92846a",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "febrile-seizure",
    "title": {
      "ar": "تشنّج حراري عند طفل",
      "en": "Febrile seizure"
    },
    "level": 4,
    "who": [
      "الأهل ومقدّمي الرعاية"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "طوارئ",
    "snapshot": {
      "ar": "طفلك عنده حمّى وبدأ يتشنّج. أمّن راسه والمكان حواليه، واحسب بداية النوبة ونهايتها.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "دي أول مرة تحصل له نوبة تشنّج.",
        "en": "has a seizure for the first time",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "نوبة التشنّج مستمرة أكتر من ٥ دقايق.",
        "en": "has a seizure that lasts more than 5 minutes",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "عنده صعوبة في التنفّس.",
        "en": "is having difficulty breathing",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "عنده تيبّس ونفضان في ناحية واحدة بس من جسمه.",
        "en": "has stiffness and twitching on only 1 side of their body",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "حصله أكتر من نوبة تشنّج واحدة خلال ٢٤ ساعة.",
        "en": "has more than 1 seizure within 24 hours",
        "src": "nhs:febrile-seizures"
      }
    ],
    "do": [
      {
        "t": "بُص على الساعة وقت ما النوبة تبدأ ووقت ما تخلص.",
        "en": "check the time the seizure starts and ends",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "احمي راسه بإيديك أو بحاجة طرية.",
        "en": "protect their head with your hands or something soft",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "شيل أي حاجات خطرة قريبة منه.",
        "en": "remove any dangerous objects that are nearby",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "بعد ما النوبة تخلص، حُط طفلك في وضع الإفاقة واتأكد إن مفيش حاجة في بقّه أو زوره ممكن تأثر على تنفّسه.",
        "en": "after the seizure ends, put your child in the recovery position and make sure there is nothing in their mouth or throat that might affect their breathing",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "فكّ أي لبس ضيّق حوالين رقبته، زي الياقة أو الكرافتة، عشان يساعده يتنفّس.",
        "en": "loosen any tight clothing around their neck, such as a collar or tie, to aid breathing",
        "src": "nhs:seizure-first-aid"
      }
    ],
    "dont": [
      {
        "t": "ماتنقلش طفلك من مكانه وماتحاولش تثبّته بالعافية.",
        "en": "do not move your child or try to hold them in place",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "ماتحطّش أي حاجة في بقّ طفلك.",
        "en": "do not put anything in your child's mouth",
        "src": "nhs:febrile-seizures"
      },
      {
        "t": "ماتحاولش تقلّل حرارة طفلك بإنك تقلّع له هدومه أو تمسح جسمه بميّه ساقعة.",
        "en": "do not try to lower your child's temperature by undressing them or sponging them with cold water",
        "src": "nhs:febrile-seizures"
      }
    ],
    "whenWhy": {
      "ar": "احسب وقت البداية والنهاية، واحمي راسه وشيل الخطر من حواليه. ماتثبّتوش وماتحطّش حاجة في بقّه.",
      "en": ""
    },
    "how": {
      "ar": "أول ما النوبة تبدأ: بص على الساعة، أمّن راسه، وشيل الحاجات الخطرة. بعد ما تخلص: حُطه في وضع الإفاقة واتأكد إن بقّه وزوره فاضيين.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "قول إن طفل عنده نوبة تشنّج، وهل دي أول مرة، ووقت بدايتها، وهل عنده صعوبة في التنفّس."
      }
    ],
    "whatToBuy": [
      {
        "item": "مفيش أداة خاصة مطلوبة",
        "why": "إيديك أو حاجة طرية تكفي لحماية راسه"
      }
    ],
    "tech": [
      "استخدم مؤقّت الموبايل لتسجيل بداية النوبة ونهايتها",
      "فعّل خاصية Emergency SOS على الموبايل"
    ],
    "writeDown": [
      "وقت بداية النوبة ونهايتها",
      "اللي حصل أثناء النوبة، وهل التنفّس كان صعب"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Febrile seizures",
        "url": "https://www.nhs.uk/conditions/febrile-seizures/"
      },
      {
        "label": "NHS — What to do if someone has a seizure (fit)",
        "url": "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/"
      }
    ],
    "othersPOV": {
      "ar": "خلّي اللي حواليك يبعدوا الحاجات الخطرة ويفضّوا مساحة حوالين الطفل، من غير ما حد يحاول يثبّته.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«شيلوا الحاجات الخطرة من حواليه، ومحدّش يثبّته أو يحط حاجة في بقّه.»"
      ],
      "toSelf": [
        "«أحسب الوقت، أحمي راسه، وأفضّي المكان حواليه.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك بهدوء وبإيد خفيفة وإنت بتحمي راسه وبتفضّي المكان حواليه.",
      "en": ""
    },
    "rights": {
      "ar": "من حق الطفل إن المكان حواليه يتأمّن، ومن غير تثبيت بالعافية أو حاجة تتحط في بقّه.",
      "en": ""
    },
    "variations": [
      "لو التشنّج في ناحية واحدة بس من جسمه، دي علامة خطر.",
      "لو دي أول نوبة تشنّج، دي علامة خطر."
    ],
    "prevention": [
      "خلّي خطوات التأمين وتسجيل الوقت معروفة لكل اللي بيرعوا الطفل."
    ],
    "drill": {
      "ar": "درّب نفسك على الترتيب: وقت البداية، حماية الراس، إبعاد الخطر، وبعد النهاية وضع الإفاقة وفحص البق والزور.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما النوبة تخلص، حُطه في وضع الإفاقة واتأكد إن مفيش حاجة في بقّه أو زوره مأثرة على تنفّسه، وسجّل وقت النهاية.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Febrile seizures",
        "url": "https://www.nhs.uk/conditions/febrile-seizures/",
        "srcId": "nhs:febrile-seizures",
        "sha256": "b1815869e6",
        "grade": "A · OGL v3 (NHS)"
      },
      {
        "label": "NHS — What to do if someone has a seizure (fit)",
        "url": "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/",
        "srcId": "nhs:seizure-first-aid",
        "sha256": "9ebfe12379",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bronchiolitis",
    "title": {
      "ar": "التهاب الشُّعَيبات الهوائية",
      "en": "Bronchiolitis"
    },
    "level": 4,
    "who": [
      "الأهل ومقدّمي الرعاية"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "طفلك محتاج متابعة قريبة، سوائل، ومساعدة يتنفّس براحة. لو فيه صعوبة أو وقفات في التنفّس، لونه بقى أزرق أو رمادي، أو جسمه مرخي ومش بيفوق، اتصل بالإسعاف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "طفلك عنده صعوبة في التنفّس — ممكن تسمع صوت أنين، أو تلاقي بطنه بتدخل لجوه تحت ضلوعه، أو نفسه سريع.",
        "en": "your child is having difficulty breathing – you may notice grunting noises, their tummy sucking under their ribs or they may be breathing quickly",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "فيه وقفات وهو بيتنفّس.",
        "en": "there are pauses when your child breathes",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "جلد طفلك أو لسانه أو شفايفه لونهم أزرق أو رمادي — لو بشرته بنية أو سودا، اللون ممكن يبان أوضح في كفوف إيديه، وباطن رجليه، وشفايفه، ولثته، وجوّه جفونه.",
        "en": "your child's skin, tongue or lips are blue or grey – on brown or black skin, this may be easier to see on the palms of the hands, soles of the feet, lips, gums and inside the eyelids",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "جسم طفلك مرخي ومش بيفوق أو مش قادر يفضل صاحي.",
        "en": "your child is floppy and will not wake up or stay awake",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "حفاض طفلك ناشف من ١٢ ساعة أو أكتر، أو باين عليه علامات جفاف تانية.",
        "en": "your child has had a dry nappy for 12 hours or more, or shows other signs of dehydration",
        "src": "nhs:bronchiolitis"
      }
    ],
    "do": [
      {
        "t": "لو طفلك متضايق أو مش مرتاح، ادّي باراسيتامول الأطفال للرضّع والأطفال الأكبر من شهرين، أو إيبوبروفين للرضّع والأطفال الأكبر من ٣ شهور — ماتديش الدوايين في نفس الوقت.",
        "en": "give children's paracetamol to babies and children over 2 months old or ibuprofen to babies and children over 3 months old if they're distressed or uncomfortable – do not give these medicines at the same time",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "خلي طفلك قاعد أو مرفوع على قد ما تقدر وهو صاحي — ده هيساعده يتنفّس أسهل.",
        "en": "keep your child upright as much as possible when they're awake – this will help them breathe more easily",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "اطمّن على طفلك بانتظام، حتى بالليل.",
        "en": "check on your child regularly, including during the night",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "شجّع طفلك يشرب سوائل كتير — للرضّع جرّب رضعات أصغر مرات أكتر، وللأطفال الأكبر ادّي ميّه زيادة أو عصير فاكهة مخفّف.",
        "en": "encourage your child to drink lots of fluids – try smaller feeds more often in babies, and give older children extra water or diluted fruit juice",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "لو مناخيرك أو مناخير طفلك مسدودة، جرّب نقط محلول ملحي للأنف من الصيدلية.",
        "en": "try using saline nose drops from a pharmacy if you or your child's nose is blocked",
        "src": "nhs:rsv"
      }
    ],
    "dont": [
      {
        "t": "ماتدخنش حوالي طفلك.",
        "en": "do not smoke around your child",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "ماتحاولش تنزّل حرارة طفلك بإنك تمسحه بميّه باردة أو تقلّع له هدومه كلها.",
        "en": "do not try to lower your child's temperature by sponging them with cool water or taking off all their clothes",
        "src": "nhs:bronchiolitis"
      },
      {
        "t": "ماتديش أسبرين لطفل أصغر من ١٦ سنة.",
        "en": "do not give aspirin to a child under 16",
        "src": "nhs:bronchiolitis"
      }
    ],
    "whenWhy": {
      "ar": "القعدة المرفوعة بتساعده يتنفّس أسهل، والسوائل والرضعات الصغيرة المتكررة بتساعده يشرب. المتابعة المنتظمة مهمة عشان تلاحظ أي علامة خطر.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: طفلك صاحي ومش مرتاح. ترفعه، تعرض عليه رضعات أصغر مرات أكتر، وتطمن عليه بانتظام حتى بالليل. لو مناخيره مسدودة، تستخدم نقط محلول ملحي.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "طفلي عنده علامة خطر في التنفّس أو الوعي، وهقولك اللي ظاهر عليه."
      },
      {
        "label": "الموحّد",
        "number": "112",
        "say": "بديل لو محتاج طوارئ."
      }
    ],
    "whatToBuy": [
      {
        "item": "نقط محلول ملحي للأنف",
        "why": "لو الأنف مسدود"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "العلامات اللي ظهرت، وإمتى بدأت، والشرب والرضعات والحفاضات"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Bronchiolitis",
        "url": "https://www.nhs.uk/conditions/bronchiolitis/"
      },
      {
        "label": "NHS — Respiratory syncytial virus (RSV)",
        "url": "https://www.nhs.uk/conditions/respiratory-syncytial-virus-rsv/"
      }
    ],
    "othersPOV": {
      "ar": "طفلك ممكن يبقى متضايق أو مش مرتاح — قرّب منه، ارفعه وهو صاحي، واطمّن عليه بانتظام.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«خلّوا بالكم من تنفّسه، وحد يطمن عليه بانتظام.»"
      ],
      "toSelf": [
        "«هارفعه وهو صاحي، أقدّم له سوائل، وأراقب علامات الخطر.»"
      ]
    },
    "bodyLanguage": {
      "ar": "قرّب منه بصوت واطي وحركة خفيفة، وخليه مرفوع وهو صاحي.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك توصف اللي شايفه بدقة وتطلب مساعدة من غير ما حد يقلل من قلقك.",
      "en": ""
    },
    "variations": [
      "للرضيع: رضعات أصغر مرات أكتر.",
      "للطفل الأكبر: ميّه زيادة أو عصير فاكهة مخفّف."
    ],
    "prevention": [
      "ماتدخنش حوالي طفلك."
    ],
    "drill": {
      "ar": "افتكرها: ارفعه وهو صاحي، قدّم سوائل، واطمّن عليه بانتظام.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تطمّن عليه بانتظام، حتى بالليل. لو فيه صعوبة أو وقفات في التنفّس، لونه بقى أزرق أو رمادي، أو جسمه مرخي ومش بيفوق، اتصل بالإسعاف.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Bronchiolitis",
        "url": "https://www.nhs.uk/conditions/bronchiolitis/",
        "srcId": "nhs:bronchiolitis",
        "sha256": "1872d080af",
        "grade": "A · OGL v3 (NHS)"
      },
      {
        "label": "NHS — Respiratory syncytial virus (RSV)",
        "url": "https://www.nhs.uk/conditions/respiratory-syncytial-virus-rsv/",
        "srcId": "nhs:rsv",
        "sha256": "87c0e6048f",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bronchitis",
    "title": {
      "ar": "التهاب الشُعب الهوائية",
      "en": "Bronchitis"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت",
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك التهاب في الشُعب الهوائية، ريّح جسمك واشرب سوائل، وقلّل مخالطة الناس لو حرارتك عالية أو مش قادر تعمل نشاطك العادي.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو كحّيت دم أو بلغم فيه دم.",
        "en": "you cough up blood or blood-stained mucus",
        "src": "nhs:bronchitis"
      },
      {
        "t": "لو عندك ألم في الصدر بييجي ويروح، أو بيظهر مع النفس أو الكحة.",
        "en": "you have chest pain that comes and goes, or when breathing or coughing",
        "src": "nhs:bronchitis"
      },
      {
        "t": "لو حاسس إن نفسك قصير.",
        "en": "you're feeling short of breath",
        "src": "nhs:bronchitis"
      },
      {
        "t": "لو بتعاني عشان تتنفس — بتشرق أو بتنهج ومش قادر تتكلم.",
        "en": "you are struggling to breathe – you are choking, gasping and unable to speak",
        "src": "nhs:bronchitis"
      },
      {
        "t": "لو جلدك أو شفايفك أو لسانك لونهم شاحب أو أزرق أو مبقّع — ولو بشرتك بنية أو سودا، ممكن ده يبان أسهل في الشفايف أو اللسان أو اللثة، تحت الضوافر أو حوالين العينين.",
        "en": "you have pale, blue or blotchy skin, lips or tongue – on brown or black skin, this may be easier to see on the lips, tongue or gums, under the nails or around the eyes",
        "src": "nhs:bronchitis"
      }
    ],
    "do": [
      {
        "t": "خد وقت كفاية للراحة — وحاول تفضل في البيت وتبعد عن مخالطة الناس لو حرارتك عالية أو مش حاسس إنك قادر تعمل نشاطك العادي.",
        "en": "get plenty of rest – try to stay at home and avoid contact with other people if you have a high temperature or do not feel well enough to do your normal activities",
        "src": "nhs:bronchitis"
      },
      {
        "t": "اشرب سوائل كتير.",
        "en": "drink plenty of fluids",
        "src": "nhs:bronchitis"
      },
      {
        "t": "خد مسكنات زي الباراسيتامول أو الإيبوبروفين عشان تساعد مع الألم وتنزّل الحرارة العالية.",
        "en": "take painkillers like paracetamol or ibuprofen to help with pain and bring down a high temperature",
        "src": "nhs:bronchitis"
      },
      {
        "t": "جرّب تضيف عسل لمشروب دافي عشان يهدّي زورك، بس ماتديش عسل لرضيع أصغر من سنة.",
        "en": "try adding honey to a warm drink to help soothe your throat (do not give honey to babies under 1)",
        "src": "nhs:bronchitis"
      },
      {
        "t": "غطّي بقّك ومناخيرك بمنديل وإنت بتكح أو تعطس — وارمي المنديل المستعمل في الزبالة بأسرع ما تقدر.",
        "en": "cover your mouth and nose with a tissue when you cough or sneeze – put used tissues in the bin as quickly as possible",
        "src": "nhs:bronchitis"
      },
      {
        "t": "اغسل إيديك بانتظام بالميّه والصابون.",
        "en": "wash your hands regularly with water and soap",
        "src": "nhs:bronchitis"
      }
    ],
    "dont": [
      {
        "t": "ماتدخّنش.",
        "en": "do not smoke",
        "src": "nhs:bronchitis"
      },
      {
        "t": "ماتخلّيش الأطفال يستنشقوا بخار من طبق ميّه سخنة، عشان فيه خطر إنهم يتلسعوا.",
        "en": "do not let children breathe in steam from a bowl of hot water as there's a risk of scalding",
        "src": "nhs:respiratory-tract-infection"
      }
    ],
    "whenWhy": {
      "ar": "المسكنات ممكن تساعد مع الألم والحرارة العالية، والعسل في مشروب دافي ممكن يهدّي الزور. بخار طبق الميّه السخنة خطر على الأطفال لأنه ممكن يلسعهم.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: حرارتك عالية ومش قادر تعمل نشاطك العادي. تفضل في البيت، ترتاح، تشرب سوائل، وتبعد عن مخالطة الناس. وإنت بتكح تستخدم منديل وترميه بسرعة، وبعدها تغسل إيدك.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "الشخص بيعاني عشان يتنفس، بيشرق أو بينهج ومش قادر يتكلم."
      }
    ],
    "whatToBuy": [
      {
        "item": "مناديل وصابون",
        "why": "لتغطية الكحة والعطس وغسل الإيدين"
      }
    ],
    "tech": [
      "Emergency SOS"
    ],
    "writeDown": [
      "اكتب الأعراض اللي ظاهرة وأي أدوية اتاخدت"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Bronchitis",
        "url": "https://www.nhs.uk/conditions/bronchitis/"
      },
      {
        "label": "NHS — Respiratory tract infections (RTIs)",
        "url": "https://www.nhs.uk/conditions/respiratory-tract-infection/"
      }
    ],
    "othersPOV": {
      "ar": "لو الشخص مش حاسس إنه قادر يعمل نشاطه العادي، ساعده ياخد مساحة للراحة من غير ضغط.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«حرارتي عالية ومحتاج أفضل في البيت وأرتاح بعيد عن المخالطة.»"
      ],
      "toSelf": [
        "«هرتاح، أشرب سوائل، وأراقب علامات الخطر.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بصوت واطي، وسيب للشخص مساحة يرتاح فيها.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تبعد عن الدخان وتطلب مساحة للراحة.",
      "en": ""
    },
    "variations": [
      "لو حرارتك عالية أو مش قادر تعمل نشاطك العادي: خليك في البيت وابعد عن المخالطة.",
      "لو طفل: ابعد عنه بخار طبق الميّه السخنة."
    ],
    "prevention": [
      "غطّي الكحة والعطس بمنديل، وارميه بسرعة، واغسل إيدك بالميّه والصابون."
    ],
    "drill": {
      "ar": "حدّد مكان المناديل والصابون، وافتكر: غطّي الكحة، ارمي المنديل، واغسل إيدك.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما ترتاح، كمّل شرب سوائل وراقب علامات الخطر المذكورة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Bronchitis",
        "url": "https://www.nhs.uk/conditions/bronchitis/",
        "srcId": "nhs:bronchitis",
        "sha256": "f0f4a7ae71",
        "grade": "A · OGL v3 (NHS)"
      },
      {
        "label": "NHS — Respiratory tract infections (RTIs)",
        "url": "https://www.nhs.uk/conditions/respiratory-tract-infection/",
        "srcId": "nhs:respiratory-tract-infection",
        "sha256": "1c6308f770",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "whooping-cough",
    "title": {
      "ar": "السعال الديكي",
      "en": "Whooping cough"
    },
    "level": 4,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو إنت أو طفلك عندكم كحة شديدة وبتسوء، خليك مركز في التنفّس وأي تغيّر مفاجئ في لون الشفايف أو اللسان أو الوش أو الجلد.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "البيبي عمره أقل من ٦ شهور وعنده أعراض السعال الديكي.",
        "en": "your baby is under 6 months old and has symptoms of whooping cough",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "إنت أو طفلك عندكم كحة شديدة جدًا وبتسوء.",
        "en": "you or your child have a very bad cough that is getting worse",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "شفايفك أو لسانك أو وشّك أو جلدك، أو بتوع طفلك، اتحوّلوا فجأة لأزرق أو رمادي (على البشرة السودة أو البنية ممكن يكون أوضح في كفوف الإيدين أو باطن القدمين).",
        "en": "your or your child's lips, tongue, face or skin suddenly turn blue or grey (on black or brown skin this may be easier to see on the palms of the hands or the soles of the feet)",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "إنت أو طفلك مش قادرين تتنفّسوا كويس (النَفَس سطحي).",
        "en": "you or your child are finding it hard to breathe properly (shallow breathing)",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "طفلك عنده تشنّجات (نوبات).",
        "en": "your child is having seizures (fits)",
        "src": "nhs:whooping-cough"
      }
    ],
    "do": [
      {
        "t": "خد قسط كبير من الراحة.",
        "en": "get plenty of rest",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "اشرب سوائل كتير.",
        "en": "drink lots of fluids",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "لو إنت مش مرتاح، خد باراسيتامول أو إيبوبروفين. ولو طفلك مش مرتاح، ادّيله باراسيتامول أو إيبوبروفين. ولو مش متأكد إن الدوا مناسب ليك أو لطفلك، راجع النشرة.",
        "en": "take paracetamol or ibuprofen if you or your child are uncomfortable – check the leaflet if you're not sure it's suitable for you or your child",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "غطّي بقّك لما تكح أو تعطس.",
        "en": "cover your mouth when you cough or sneeze",
        "src": "nhs:respiratory-tract-infection"
      },
      {
        "t": "اغسل إيديك بانتظام.",
        "en": "wash your hands regularly",
        "src": "nhs:respiratory-tract-infection"
      }
    ],
    "dont": [
      {
        "t": "ماتديش أسبرين للأطفال اللي سنهم أقل من ١٦ سنة.",
        "en": "do not give aspirin to children under the age of 16 years",
        "src": "nhs:whooping-cough"
      },
      {
        "t": "ماتخلّيش الأطفال يستنشقوا بخار من طبق ميّه سخنة، عشان فيه خطر حروق من السخونية.",
        "en": "do not let children breathe in steam from a bowl of hot water as there's a risk of scalding",
        "src": "nhs:respiratory-tract-infection"
      }
    ],
    "whenWhy": {
      "ar": "لو الدوا مش واضح إنه مناسب ليك أو لطفلك، راجع النشرة. والأسبرين للأطفال تحت السن المذكور ممنوع، وبخار طبق الميّه السخنة فيه خطر حروق.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: إنت أو طفلك مش مرتاحين. ترتاحوا وتشربوا سوائل، تراجع النشرة قبل الدوا لو مش متأكد، وتغطّوا البق مع الكحة أو العطس وتغسلوا الإيدين بانتظام.",
      "en": ""
    },
    "whoToCall": [
      {
        "label": "الإسعاف",
        "number": "123",
        "say": "في صعوبة تنفّس أو تغيّر مفاجئ للون لأزرق أو رمادي أو تشنّجات عند طفل."
      }
    ],
    "whatToBuy": [
      {
        "item": "مفيش أداة خاصة مطلوبة",
        "why": "الخطوات المذكورة مش محتاجة أداة خاصة"
      }
    ],
    "tech": [
      "ميزة طوارئ الموبايل"
    ],
    "writeDown": [
      "سن الطفل، الأعراض، وإمتى بدأت"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Whooping cough",
        "url": "https://www.nhs.uk/conditions/whooping-cough/"
      },
      {
        "label": "NHS — Respiratory tract infections (RTIs)",
        "url": "https://www.nhs.uk/conditions/respiratory-tract-infection/"
      }
    ],
    "othersPOV": {
      "ar": "لو اللي تعبان طفل، كلّمه ببساطة وخلي اللي بيرعاه عارف الخطوات الخاصة بالأطفال.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«غطّوا بقّكم مع الكحة أو العطس، واغسلوا إيديكم بانتظام.»"
      ],
      "toSelf": [
        "«هرتاح، أشرب سوائل، وأراجع النشرة لو مش متأكد إن الدوا مناسب.»"
      ]
    },
    "bodyLanguage": {
      "ar": "صوت واطي وكلام مباشر، خصوصًا مع الطفل.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تفهم النشرة وتتأكد إن الدوا مناسب ليك أو لطفلك.",
      "en": ""
    },
    "variations": [
      "للأطفال: حافظ على شرط السن مع الأسبرين، وماتستخدمش طبق ميّه سخنة للبخار."
    ],
    "prevention": [
      "للنظافة: غطّي بقّك وقت الكحة أو العطس، واغسل إيديك بانتظام."
    ],
    "drill": {
      "ar": "افتكرها: راحة وسوائل؛ والنظافة هي تغطية البق وغسيل الإيدين.",
      "en": ""
    },
    "after": {
      "ar": "كمّل راحة وسوائل، وخلي بالك لو الكحة الشديدة بتسوء.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Whooping cough",
        "url": "https://www.nhs.uk/conditions/whooping-cough/",
        "srcId": "nhs:whooping-cough",
        "sha256": "c981288b52",
        "grade": "A · OGL v3 (NHS)"
      },
      {
        "label": "NHS — Respiratory tract infections (RTIs)",
        "url": "https://www.nhs.uk/conditions/respiratory-tract-infection/",
        "srcId": "nhs:respiratory-tract-infection",
        "sha256": "1c6308f770",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "impetigo",
    "title": {
      "ar": "القوباء",
      "en": "Impetigo"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك قوباء، اغسل الأماكن المصابة كويس ونشّفها، وماتشاركش فوط الوش أو الفوط أو الملايات أو أكياس المخدات.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو طفلك عمره ١١ شهر أو أقل.",
        "en": "your child is aged 11 months or younger",
        "src": "nhs:impetigo"
      },
      {
        "t": "لو بترضّعي وقُرح القوباء موجودة على صدرك.",
        "en": "you're breastfeeding and the impetigo sores are on your breasts",
        "src": "nhs:impetigo"
      },
      {
        "t": "لو مناعتك ضعيفة، مثلاً بسبب العلاج الكيماوي.",
        "en": "have a weakened immune system, for example, from chemotherapy",
        "src": "nhs:impetigo"
      },
      {
        "t": "لو أخدت علاج بس الأعراض اتغيّرت أو بقت أسوأ.",
        "en": "have had treatment but the symptoms have changed or become worse",
        "src": "nhs:impetigo"
      },
      {
        "t": "لو جالك قوباء خلال السنة اللي فاتت ورجعت تاني.",
        "en": "have had impetigo in the past year and it has come back",
        "src": "nhs:impetigo"
      }
    ],
    "do": [
      {
        "t": "ابعد عن الشغل أو المدرسة أو الحضانة لحد ما تبقى مش مُعدي.",
        "en": "stay away from work, school or nursery until no longer contagious",
        "src": "nhs:impetigo"
      },
      {
        "t": "اغسل الأماكن المصابة بالميّه والصابون ونشّفها كويس.",
        "en": "wash affected areas with soap and water and dry them thoroughly",
        "src": "nhs:impetigo"
      },
      {
        "t": "اغسل إيديك كتير، خصوصًا قبل وبعد ما تستخدم كريم المضاد الحيوي.",
        "en": "wash your hands frequently, particularly before and after using antibiotic cream",
        "src": "nhs:impetigo"
      },
      {
        "t": "اغسل فوط الوش والفوط والملايات وأكياس المخدات على حرارة عالية.",
        "en": "wash flannels, towels, sheets and pillowcases at a high temperature",
        "src": "nhs:impetigo"
      },
      {
        "t": "لو أطفالك عندهم قوباء، اغسل لعبهم بمنظّف وميّه دافية.",
        "en": "wash toys with detergent and warm water if your children have impetigo",
        "src": "nhs:impetigo"
      }
    ],
    "dont": [
      {
        "t": "ماتلمسش أو تحكّ القُرح أو الفقاقيع أو الأماكن اللي عليها قشرة — ده كمان بيساعد يمنع الندبات.",
        "en": "do not touch or scratch sores, blisters or crusty patches – this also helps stop scarring",
        "src": "nhs:impetigo"
      },
      {
        "t": "ماتختلطش عن قرب بالأطفال أو بالناس اللي عندهم سكر أو مناعتهم ضعيفة، زي اللي بياخدوا علاج كيماوي.",
        "en": "do not have close contact with children or people with diabetes or a weakened immune system (if they're having chemotherapy, for example)",
        "src": "nhs:impetigo"
      },
      {
        "t": "ماتشاركش فوط الوش أو الفوط أو الملايات أو أكياس المخدات مع حد.",
        "en": "do not share flannels, towels, sheets or pillowcases",
        "src": "nhs:impetigo"
      },
      {
        "t": "ماتحضّرش أكل لناس تانية لو عندك قوباء.",
        "en": "do not prepare food for other people if you have impetigo",
        "src": "nhs:impetigo"
      },
      {
        "t": "ماتروحش الجيم وماتلعبش رياضات فيها احتكاك زي الكورة.",
        "en": "do not go to the gym or play contact sports like football",
        "src": "nhs:impetigo"
      }
    ],
    "whenWhy": {
      "ar": "ماتحكّش القُرح أو الفقاقيع أو القشور، وخلّي الفوط والملايات وأكياس المخدات من غير مشاركة.",
      "en": ""
    },
    "how": {
      "ar": "اغسل المكان المصاب بالميّه والصابون ونشّفه كويس، وبعدها اغسل إيديك. واجمع الفوط والملايات وأكياس المخدات عشان تتغسل على حرارة عالية.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "صابون ومنظّف غسيل",
        "why": "لغسل الأماكن المصابة والحاجات المذكورة"
      }
    ],
    "tech": [
      "استخدم ملاحظات الموبايل لتسجيل تغيّر الأعراض"
    ],
    "writeDown": [
      "إمتى بدأت الأعراض، وهل اتغيّرت أو بقت أسوأ بعد العلاج"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Impetigo",
        "url": "https://www.nhs.uk/conditions/impetigo/"
      }
    ],
    "othersPOV": {
      "ar": "قول للي حواليك إنك هتتجنب الاختلاط القريب بالأطفال أو الناس اللي عندهم سكر أو مناعتهم ضعيفة، وماتشاركش فوط الوش أو الفوط أو الملايات أو أكياس المخدات.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«من فضلكم ماتستخدموش فوطِي أو ملاياتي أو أكياس مخداتي.»"
      ],
      "toSelf": [
        "«هاغسل المكان وأنشّفه، وبعدها هاغسل إيدي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بشكل مباشر، وخلي فوط الوش والفوط والملايات وأكياس المخدات منفصلة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساحة من الاختلاط القريب بالأطفال أو الناس اللي عندهم سكر أو مناعتهم ضعيفة، وتخلي فوط الوش والفوط والملايات وأكياس المخدات منفصلة.",
      "en": ""
    },
    "variations": [
      "لو بترضّعي والقُرح على صدرك، اذكري ده وإنت بتطلبي مساعدة.",
      "لو مناعتك ضعيفة، اذكر السبب لو معروف، زي العلاج الكيماوي."
    ],
    "prevention": [
      "اغسل إيديك كتير، وماتشاركش الفوط أو الملايات أو أكياس المخدات.",
      "لو أطفالك عندهم قوباء، اغسل لعبهم بمنظّف وميّه دافية."
    ],
    "drill": {
      "ar": "افتكرها: اغسل المكان ونشّفه، اغسل إيديك، وافصل الفوط والملايات وأكياس المخدات.",
      "en": ""
    },
    "after": {
      "ar": "لو أخدت علاج والأعراض اتغيّرت أو بقت أسوأ، أو القوباء رجعت خلال سنة، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Impetigo",
        "url": "https://www.nhs.uk/conditions/impetigo/",
        "srcId": "nhs:impetigo",
        "sha256": "a2ef07175a",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "ringworm",
    "title": {
      "ar": "السعفة (تينيا)",
      "en": "Ringworm"
    },
    "level": 2,
    "who": [
      "أي حد"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك سعفة، ابدأ العلاج بأسرع وقت، وخلي جلدك نضيف، واغسل إيدك بعد ما تلمس حيوان أو تراب.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو السعفة ما اتحسنتش بعد استخدام دوا مضاد للفطريات رشحه الصيدلي.",
        "en": "ringworm has not improved after using antifungal medicine recommended by a pharmacist",
        "src": "nhs:ringworm"
      },
      {
        "t": "لو السعفة في فروة راسك — غالبًا هتحتاج أقراص وشامبو مضادين للفطريات بوصفة.",
        "en": "you have ringworm on your scalp – you'll usually need prescription antifungal tablets and shampoo",
        "src": "nhs:ringworm"
      },
      {
        "t": "لو مناعتك ضعيفة، زي بسبب العلاج الكيماوي أو الستيرويدات أو السكر.",
        "en": "you have a weakened immune system – for example, from chemotherapy, steroids or diabetes",
        "src": "nhs:ringworm"
      }
    ],
    "do": [
      {
        "t": "ابدأ العلاج بأسرع وقت ممكن.",
        "en": "start treatment as soon as possible",
        "src": "nhs:ringworm"
      },
      {
        "t": "اغسل الفوط وملايات السرير بانتظام.",
        "en": "wash towels and bedsheets regularly",
        "src": "nhs:ringworm"
      },
      {
        "t": "خلي جلدك نضيف، واغسل إيدك بعد ما تلمس حيوانات أو تراب.",
        "en": "keep your skin clean and wash your hands after touching animals or soil",
        "src": "nhs:ringworm"
      },
      {
        "t": "اكشف على جلدك بانتظام لو خالطت شخص أو حيوان عنده العدوى.",
        "en": "regularly check your skin if you have been in contact with an infected person or animal",
        "src": "nhs:ringworm"
      },
      {
        "t": "ودّي حيوانك للبيطري لو ممكن يكون عنده سعفة — زي لو عنده مناطق وقع منها الفرو.",
        "en": "take your pet to the vet if they might have ringworm – for example, if they have patches of missing fur",
        "src": "nhs:ringworm"
      }
    ],
    "dont": [
      {
        "t": "ماتشاركش الفوط أو الأمشاط أو ملايات السرير مع حد عنده سعفة.",
        "en": "do not share towels, combs or bedsheets with someone who has ringworm",
        "src": "nhs:ringworm"
      },
      {
        "t": "ماتهرشش طفح السعفة، عشان ده ممكن ينشره لأماكن تانية في جسمك.",
        "en": "do not scratch a ringworm rash because this could spread it to other parts of your body",
        "src": "nhs:ringworm"
      }
    ],
    "whenWhy": {
      "ar": "خلّي جلدك نضيف، واغسل إيدك بعد ما تلمس حيوان أو تراب، وماتهرش الطفح عشان الهرش ممكن ينقله لأماكن تانية في جسمك.",
      "en": ""
    },
    "how": {
      "ar": "اغسل الفوط وملايات السرير بانتظام، وماتشاركش الفوط أو الأمشاط أو ملايات السرير مع حد عنده سعفة، واغسل إيدك بعد ما تلمس حيوان أو تراب.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "دوا مضاد للفطريات يرشحه الصيدلي",
        "why": "لعلاج السعفة"
      }
    ],
    "tech": [
      "مفيش أداة تقنية لازمة"
    ],
    "writeDown": [
      "سجّل لو السعفة ما اتحسنتش بعد العلاج"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Ringworm",
        "url": "https://www.nhs.uk/conditions/ringworm/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده سعفة، ماتشاركوش الفوط أو الأمشاط أو ملايات السرير.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«لو حد عنده سعفة، ماتشاركوش الفوط أو الأمشاط أو ملايات السرير.»"
      ],
      "toSelf": [
        "«هبدأ العلاج بدري، وهحافظ على النظافة ومش ههرش الطفح.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلي الفوط والأمشاط وملايات السرير منفصلة عن حاجات الشخص اللي عنده سعفة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تسأل الصيدلي عن العلاج المضاد للفطريات المناسب.",
      "en": ""
    },
    "variations": [
      "لو السعفة في فروة الراس، غالبًا بتحتاج أقراص وشامبو مضادين للفطريات بوصفة.",
      "لو مناعتك ضعيفة بسبب العلاج الكيماوي أو الستيرويدات أو السكر، ماتتجاهلش الحالة."
    ],
    "prevention": [
      "اغسل الفوط والملايات بانتظام، وماتشاركش الفوط أو الأمشاط أو الملايات مع حد عنده سعفة.",
      "اغسل إيدك بعد لمس الحيوانات أو التراب، واكشف على جلدك لو خالطت شخص أو حيوان عنده العدوى."
    ],
    "drill": {
      "ar": "راجع بسرعة: علاج بدري، جلد نضيف، غسل الإيد بعد لمس حيوان أو تراب، ومن غير هرش أو مشاركة فوط أو أمشاط أو ملايات سرير مع حد عنده سعفة.",
      "en": ""
    },
    "after": {
      "ar": "لو السعفة ما اتحسنتش بعد الدوا المضاد للفطريات اللي رشحه الصيدلي، ماتتجاهلش ده.",
      "en": ""
    },
    "sources": [
      {
        "srcId": "nhs:ringworm",
        "label": "NHS — Ringworm",
        "url": "https://www.nhs.uk/conditions/ringworm/",
        "grade": "A · OGL v3 (NHS)",
        "sha256": "749aba4fe1"
      }
    ]
  },
  {
    "id": "threadworms",
    "title": {
      "ar": "الديدان الدبوسية",
      "en": "Threadworms"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "فيه هرش شديد حوالين فتحة الشرج أو المهبل، خصوصًا بالليل. دورك تركّز على غسيل الإيدين وتنضيف الأظافر والأسطح من غير ما تنفض الهدوم أو الملايات.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "هرش شديد حوالين فتحة الشرج أو المهبل، خصوصًا بالليل.",
        "en": "extreme itching around the anus or vagina, particularly at night",
        "src": "nhs:threadworms"
      },
      {
        "t": "الوزن بيقلّ.",
        "en": "weight loss",
        "src": "nhs:threadworms"
      },
      {
        "t": "الجلد حوالين فتحة الشرج متهيج.",
        "en": "irritated skin around the anus",
        "src": "nhs:threadworms"
      }
    ],
    "do": [
      {
        "t": "اغسل إيدك وافرك تحت ضوافرك، خصوصًا قبل الأكل، وبعد الحمّام أو تغيير الحفاض.",
        "en": "wash hands and scrub under fingernails – particularly before eating, after using the toilet or changing nappies",
        "src": "nhs:threadworms"
      },
      {
        "t": "شجّع الأطفال يغسلوا إيديهم بانتظام.",
        "en": "encourage children to wash hands regularly",
        "src": "nhs:threadworms"
      },
      {
        "t": "اشطف فرش السنان قبل ما تستخدمها.",
        "en": "rinse toothbrushes before using them",
        "src": "nhs:threadworms"
      },
      {
        "t": "قص ضوافرك وخليها قصيرة.",
        "en": "keep fingernails short",
        "src": "nhs:threadworms"
      },
      {
        "t": "طهّر أسطح المطبخ والحمّام بميّه سخنة.",
        "en": "disinfect kitchen and bathroom surfaces, using hot water",
        "src": "nhs:threadworms"
      },
      {
        "t": "اكنس بالمكنسة، وامسح التراب بفوطة مبلولة.",
        "en": "vacuum and dust with a damp cloth",
        "src": "nhs:threadworms"
      }
    ],
    "dont": [
      {
        "t": "ماتنفضش الهدوم أو الملايات، عشان البيض ماينزلش على أسطح تانية.",
        "en": "do not shake clothing or bedding, to prevent eggs landing on other surfaces",
        "src": "nhs:threadworms"
      },
      {
        "t": "ماتشاركش الفوط أو فوط الوش.",
        "en": "do not share towels or flannels",
        "src": "nhs:threadworms"
      },
      {
        "t": "ماتقضمش ضوافرك، وماتمصّش إبهامك أو صوابعك.",
        "en": "do not bite nails or suck thumbs and fingers",
        "src": "nhs:threadworms"
      }
    ],
    "whenWhy": {
      "ar": "ماتنفضش الهدوم أو الملايات عشان البيض ماينزلش على أسطح تانية. اغسل إيدك وافرك تحت ضوافرك في الأوقات المذكورة، وشجّع الأطفال يغسلوا إيديهم بانتظام.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: قبل الأكل اغسل إيدك وافرك تحت ضوافرك، واعمل نفس الخطوة بعد الحمّام. وقبل ما تستخدم فرشة السنان، اشطفها. وطهّر أسطح المطبخ والحمّام بميّه سخنة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فوطة للتنضيف",
        "why": "عشان تمسح التراب بفوطة مبلولة"
      }
    ],
    "tech": [
      "منبّه بسيط يفكّرك بغسيل الإيدين"
    ],
    "writeDown": [
      "اكتب إمتى الهرش بيزيد، وهل الوزن بيقل أو الجلد متهيج"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Threadworms",
        "url": "https://www.nhs.uk/conditions/threadworms/"
      }
    ],
    "othersPOV": {
      "ar": "فكّر الأطفال بغسيل إيديهم من غير زعيق أو إحراج، وورّيهم الخطوة بإيدك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«يلا نغسل إيدينا ونفرك تحت ضوافرنا قبل الأكل.»"
      ],
      "toSelf": [
        "«هغسل إيدي، أقص ضوافري، وأنضّف الأسطح من غير ما أنفض الملايات.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ورّي الطفل غسيل الإيدين بهدوء، وخلي كلامك مباشر ومن غير لوم.",
      "en": ""
    },
    "rights": {
      "ar": "اتعامل مع الموضوع من غير كسوف أو لوم؛ المطلوب خطوات نظافة واضحة للكل.",
      "en": ""
    },
    "variations": [
      "مع الأطفال: شجّعهم يغسلوا إيديهم بانتظام، وورّيهم إزاي يفركوا تحت ضوافرهم."
    ],
    "prevention": [
      "اغسل إيدك وافرك تحت ضوافرك، قصّها قصيرة، ونضّف أسطح المطبخ والحمّام بميّه سخنة."
    ],
    "drill": {
      "ar": "راجع الأربع خطوات: إيدين، ضوافر، أسطح، وملايات من غير نفض.",
      "en": ""
    },
    "after": {
      "ar": "راجع الخطوات: اشطف فرش السنان قبل استخدامها، وطهّر الأسطح بميّه سخنة، وامسح التراب بفوطة مبلولة.",
      "en": ""
    },
    "sources": [
      {
        "srcId": "nhs:threadworms",
        "label": "NHS — Threadworms",
        "url": "https://www.nhs.uk/conditions/threadworms/",
        "grade": "A · INGESTED",
        "sha256": "2724c51d11",
        "retrieved": "2026-07-13",
        "licence": "OGL v3 — © Crown copyright",
        "attribution": "Contains public sector information licensed under the Open Government Licence v3.0 (NHS)"
      }
    ]
  },
  {
    "id": "conjunctivitis",
    "title": {
      "ar": "التهاب ملتحمة العين",
      "en": "Conjunctivitis"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عينك ملتهبة، نضّف جفونك ورموشك بالراحة، واغسل إيديك بانتظام، وماتحكّش عينك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عندك وجع في عينك.",
        "en": "pain in your eyes",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "عينك حسّاسة للنور.",
        "en": "sensitivity to light",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "نظرك اتغيّر، زي إنك تشوف خطوط مموّجة أو ومضات.",
        "en": "changes in your vision, like wavy lines or flashing",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "عينك حمرا جدًا، سواء عين واحدة أو العينين.",
        "en": "very red eyes (1 eye or both eyes)",
        "src": "nhs:conjunctivitis"
      }
    ],
    "do": [
      {
        "t": "اغسل جفونك بميّه نضيفة. اغلي الميّه وسيبها تبرد، وبعدها امسح رموشك بالراحة بقطعة قطن نضيفة عشان تشيل القشور، واستخدم قطعة واحدة لكل عين.",
        "en": "Wash your eyelids with clean water. Boil the water and let it cool down, then gently wipe your eyelashes with a clean cotton wool pad to clean off crusts (1 piece for each eye).",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "حط فوطة باردة على عينيك كام دقيقة عشان تبردهم.",
        "en": "Hold a cold flannel on your eyes for a few minutes to cool them down.",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "اغسل إيديك بانتظام بميّه دافية وصابون.",
        "en": "wash your hands regularly with warm soapy water",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "اغسل أكياس المخدات وفوط الوش بميّه سخنة ومنظّف.",
        "en": "wash your pillow cases and face cloths in hot water and detergent",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "غطّي بقّك ومناخيرك وإنت بتعطس، وارمي المناديل المستعملة في الزبالة.",
        "en": "cover your mouth and nose when sneezing and put used tissues in the bin",
        "src": "nhs:conjunctivitis"
      }
    ],
    "dont": [
      {
        "t": "ماتشاركش الفوط أو المخدات مع حد.",
        "en": "do not share towels and pillows",
        "src": "nhs:conjunctivitis"
      },
      {
        "t": "ماتحكّش عينيك.",
        "en": "do not rub your eyes",
        "src": "nhs:conjunctivitis"
      }
    ],
    "whenWhy": {
      "ar": "نضّف كل عين بقطعة قطن لوحدها، وماتشاركش الفوط أو المخدات، وماتحكّش عينيك.",
      "en": ""
    },
    "how": {
      "ar": "اغلي الميّه وسيبها تبرد، وبعدها نضّف جفونك ورموشك بالراحة بقطعة قطن نضيفة لكل عين. وفي الآخر اغسل إيديك بميّه دافية وصابون.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "قطن نضيف وصابون ومنظّف",
        "why": "لتنضيف الرموش وغسل الإيدين وأكياس المخدات وفوط الوش"
      }
    ],
    "tech": [
      "استخدم ملاحظات الموبايل لتسجيل أي تغيّر في النظر"
    ],
    "writeDown": [
      "العلامات اللي ظهرت، وهل فيه وجع أو حساسية للنور أو تغيّر في النظر"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Conjunctivitis",
        "url": "https://www.nhs.uk/conditions/conjunctivitis/"
      }
    ],
    "othersPOV": {
      "ar": "خلّي اللي حواليك عارفين إن الفوط والمخدات ماتتشاركش، وإن المناديل المستعملة تترمي في الزبالة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«من فضلكم ماتستخدموش فوطتي أو مخدتي.»"
      ],
      "toSelf": [
        "«هأنضّف كل عين بقطعة لوحدها، ومش هاحكّ عيني.»"
      ]
    },
    "bodyLanguage": {
      "ar": "نضّف رموشك بحركة خفيفة ومن غير ما تحكّ عينك.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تخلي فوطك ومخدتك منفصلين من غير إحراج.",
      "en": ""
    },
    "variations": [
      "لو عين واحدة أو العينين حمر جدًا، سجّل العلامة دي.",
      "لو نظرك اتغيّر وظهر خطوط مموّجة أو ومضات، سجّل اللي شوفته."
    ],
    "prevention": [
      "اغسل إيديك بانتظام بميّه دافية وصابون، وماتشاركش الفوط أو المخدات.",
      "غطّي بقّك ومناخيرك وقت العطس، وارمي المناديل المستعملة في الزبالة."
    ],
    "drill": {
      "ar": "افتكرها: ميّه مغلية ومبرّدة، قطعة قطن لكل عين، وغسيل إيدين بانتظام.",
      "en": ""
    },
    "after": {
      "ar": "خلي بالك من وجع العين، والحساسية للنور، وأي تغيّر في النظر، أو احمرار شديد في عين واحدة أو العينين.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Conjunctivitis",
        "url": "https://www.nhs.uk/conditions/conjunctivitis/",
        "srcId": "nhs:conjunctivitis",
        "sha256": "c2fe8ffabe",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bedbugs",
    "title": {
      "ar": "بقّ الفراش",
      "en": "Bedbugs"
    },
    "level": 2,
    "who": [
      "أي حد"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو شاكك في بقّ الفراش، خفّف الحكة، خلي المكان المصاب نضيف، وراجع الملايات والهدوم والعفش بعناية.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "بصّ على الجلد اللي كان مكشوف وإنت نايم، زي الوش والرقبة والدراعين، لو فيه قرصات.",
        "en": "bites – often on skin exposed while sleeping, like the face, neck and arms",
        "src": "nhs:bedbugs"
      },
      {
        "t": "خد بالك لو فيه نقط دم على الملايات، من القرصات أو من دهس بقّة فراش.",
        "en": "spots of blood on your bedding – from the bites or from squashing a bedbug",
        "src": "nhs:bedbugs"
      },
      {
        "t": "خد بالك لو فيه نقط بنية صغيرة على الملايات أو العفش؛ دي فضلات بقّ الفراش.",
        "en": "small brown spots on bedding or furniture (bedbug poo)",
        "src": "nhs:bedbugs"
      },
      {
        "t": "لو قرصات بقّ الفراش لسه مؤلمة جدًا أو وارمة أو بتحك بعد ما جرّبت علاجات من الصيدلي.",
        "en": "bedbug bites are still very painful, swollen or itchy after trying treatments from a pharmacist",
        "src": "nhs:bedbugs"
      },
      {
        "t": "لو الوجع أو الورم حوالين القرصات بيزيد وينتشر.",
        "en": "the pain or swelling around the bites is spreading",
        "src": "nhs:bedbugs"
      }
    ],
    "do": [
      {
        "t": "حط حاجة باردة، زي فوطة نضيفة ومبلولة، على المكان المصاب عشان تساعد مع الحكة وأي ورم.",
        "en": "putting something cool, like a clean, damp cloth, on the affected area to help with the itching and any swelling",
        "src": "nhs:bedbugs"
      },
      {
        "t": "خلي المكان المصاب نضيف.",
        "en": "keeping the affected area clean",
        "src": "nhs:bedbugs"
      },
      {
        "t": "اغسل الملايات والهدوم المصابة غسلة سخنة على ٦٠ درجة مئوية، ونشّفها في النشّافة على حرارة عالية لمدة ٣٠ دقيقة على الأقل.",
        "en": "wash affected bedding and clothing on a hot wash (60C) and tumble dry on a hot setting for at least 30 minutes",
        "src": "nhs:bedbugs"
      },
      {
        "t": "حط الحاجات اللي ماينفعش تتغسل في كيس بلاستيك، ودخّلها الفريزر لمدة من ٢ لـ٣ أسابيع.",
        "en": "put items that cannot be washed in a plastic bag and into the freezer for 2 to 3 weeks",
        "src": "nhs:bedbugs"
      },
      {
        "t": "نضّف واستخدم المكنسة بانتظام؛ بقّ الفراش موجود في الأماكن النضيفة والوسخة، والتنضيف المنتظم بيساعدك تلاحظه بدري.",
        "en": "clean and vacuum regularly – bedbugs are found in both clean and dirty places, but regular cleaning will help you spot them early",
        "src": "nhs:bedbugs"
      }
    ],
    "dont": [
      {
        "t": "ماتهرشش القرصات عشان تتجنب العدوى.",
        "en": "not scratching the bites to avoid getting an infection",
        "src": "nhs:bedbugs"
      },
      {
        "t": "ماتسيبش كراكيب حوالين سريرك.",
        "en": "do not keep clutter around your bed",
        "src": "nhs:bedbugs"
      },
      {
        "t": "ماتدخلش عفش مستعمل البيت من غير ما تفحصه كويس الأول.",
        "en": "do not bring secondhand furniture indoors without carefully checking it first",
        "src": "nhs:bedbugs"
      },
      {
        "t": "ماتدخلش شنط سفر أو هدوم البيت من غير ما تفحصها كويس لو جاي من مكان عارف إن كان فيه بقّ فراش.",
        "en": "do not take luggage or clothing indoors without checking it carefully if you have come from somewhere where you know there were bedbugs",
        "src": "nhs:bedbugs"
      }
    ],
    "whenWhy": {
      "ar": "التنضيف والفحص بيساعدوك تلاحظ بقّ الفراش بدري، وعدم الهرش بيساعدك تتجنب العدوى.",
      "en": ""
    },
    "how": {
      "ar": "اغسل اللي ينفع على ٦٠ درجة مئوية، ونشّفه في النشّافة على حرارة عالية لمدة ٣٠ دقيقة على الأقل، ونضّف بالمكنسة بانتظام.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فوطة نضيفة",
        "why": "تبلّها وتحطها باردة على المكان المصاب للمساعدة مع الحكة والورم"
      },
      {
        "item": "أكياس بلاستيك",
        "why": "للحاجات اللي ماينفعش تتغسل قبل وضعها في الفريزر"
      }
    ],
    "tech": [
      "استخدم مؤقّت ٣٠ دقيقة لو بتنشف الملايات والهدوم المصابة في النشّافة على حرارة عالية"
    ],
    "writeDown": [
      "دوّن فين لاحظت القرصات أو نقط الدم أو النقط البنية الصغيرة"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Bedbugs",
        "url": "https://www.nhs.uk/conditions/bedbugs/"
      }
    ],
    "othersPOV": {
      "ar": "بقّ الفراش ممكن يبقى في أماكن نضيفة أو وسخة، فخلّي كلامك عملي ومن غير لوم.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«نفحص العفش المستعمل قبل ما ندخله البيت، ونفحص الشنط والهدوم لو جايين من مكان كان فيه بقّ فراش.»"
      ],
      "toSelf": [
        "«مش ههرش القرصات، وهخلّي المكان نضيف وأفحصه كويس.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتصرف بهدوء وبطريقة عملية، وافحص الحاجات بعناية ومن غير لوم.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تتعامل مع المشكلة من غير إحراج أو لوم.",
      "en": ""
    },
    "variations": [
      "لو الحاجة ينفع تتغسل، اغسلها على ٦٠ درجة مئوية ونشّفها في النشّافة على حرارة عالية لمدة ٣٠ دقيقة على الأقل.",
      "لو الحاجة ماينفعش تتغسل، حطها في كيس بلاستيك وفي الفريزر من ٢ لـ٣ أسابيع."
    ],
    "prevention": [
      "ماتسيبش كراكيب حوالين السرير، ونضّف واستخدم المكنسة بانتظام.",
      "افحص العفش المستعمل والشنط والهدوم بعناية قبل ما تدخلها البيت."
    ],
    "drill": {
      "ar": "راجع بسرعة: ماتهرشش، افحص، اغسل أو جمّد حسب الحاجة، ونضّف بالمكنسة بانتظام.",
      "en": ""
    },
    "after": {
      "ar": "لو القرصات لسه مؤلمة جدًا أو وارمة أو بتحك بعد علاجات الصيدلي، أو الوجع والورم بينتشروا، ماتتجاهلش ده.",
      "en": ""
    },
    "sources": [
      {
        "srcId": "nhs:bedbugs",
        "label": "NHS — Bedbugs",
        "url": "https://www.nhs.uk/conditions/bedbugs/",
        "grade": "A · OGL v3 (NHS)",
        "sha256": "b4430fa35b"
      }
    ]
  },
  {
    "id": "fungal-nail-infection",
    "title": {
      "ar": "فطريات الضوافر",
      "en": "Fungal nail infection"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك فطريات في الضوافر، ركّز على نضافة وجفاف رجليك، وقصّر ضوافرك، وماتشاركش الفوط أو قصّافة الضوافر أو المقص، وماتلبسش جزم ناس تانية.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "العدوى شديدة والعلاج مانفعش.",
        "en": "the infection is severe and treatment has not worked",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "العدوى انتشرت لضوافر تانية.",
        "en": "the infection has spread to other nails",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "عندك سكر — مشاكل القدم ممكن تبقى أخطر لو عندك سكر.",
        "en": "you have diabetes – foot problems can be more serious if you have diabetes",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "مناعتك ضعيفة — زي لو عملت زراعة عضو أو بتاخد علاج كيماوي.",
        "en": "you have a weakened immune system – for example, you have had an organ transplant or are having chemotherapy",
        "src": "nhs:fungal-nail-infection"
      }
    ],
    "do": [
      {
        "t": "عالج فطريات القدم بأسرع وقت عشان ماتنتقلش للضوافر.",
        "en": "treat athlete's foot as soon as possible to avoid it spreading to nails",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "قصّر ضوافرك.",
        "en": "keep your nails short",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "خلّي رجليك نضيفة وناشفة.",
        "en": "keep your feet clean and dry",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "البس شرابات نضيفة كل يوم.",
        "en": "wear clean socks every day",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "البس شبشب في الدش بتاع الجيم أو حمّام السباحة.",
        "en": "wear flip-flops in showers at the gym or pool",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "البس جزمة مقاسك، من غير كعب عالي أو مقدمة ضيقة.",
        "en": "wear shoes that fit well and do not have high heels or narrow toes",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "ارمي الجزم القديمة.",
        "en": "throw out old shoes",
        "src": "nhs:fungal-nail-infection"
      }
    ],
    "dont": [
      {
        "t": "ماتلبسش جزمة تخلّي رجليك سخنة وبتعرق.",
        "en": "do not wear shoes that make your feet hot and sweaty",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "ماتشاركش الفوط مع حد.",
        "en": "do not share towels",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "ماتلبسش جزم حد تاني.",
        "en": "do not wear other people's shoes",
        "src": "nhs:fungal-nail-infection"
      },
      {
        "t": "ماتشاركش قصّافة الضوافر أو المقص مع حد.",
        "en": "do not share nail clippers or scissors",
        "src": "nhs:fungal-nail-infection"
      }
    ],
    "whenWhy": {
      "ar": "عالج فطريات القدم بأسرع وقت عشان ماتنتقلش للضوافر. خلّي رجليك نضيفة وناشفة، وماتشاركش الفوط أو قصّافة الضوافر أو المقص، وماتلبسش جزم ناس تانية.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: تقصّر ضوافرك، تنشّف رجليك كويس، تلبس شراب نضيف، وتختار جزمة مقاسك ومقدمتها مش ضيقة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "شرابات نضيفة",
        "why": "عشان تلبس شراب نضيف كل يوم"
      },
      {
        "item": "شبشب للدش",
        "why": "عشان تلبسه في دش الجيم أو حمّام السباحة"
      }
    ],
    "tech": [
      "منبّه يومي يفكّرك تغيّر الشراب"
    ],
    "writeDown": [
      "سجّل لو العدوى انتشرت لضوافر تانية أو العلاج مانفعش"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Fungal nail infection",
        "url": "https://www.nhs.uk/conditions/fungal-nail-infection/"
      }
    ],
    "othersPOV": {
      "ar": "لو فيه حد معاك، وضّح له إن الفوط وقصّافة الضوافر والمقص ماتتشاركش، وإنك ماتلبسش جزم ناس تانية.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ماتشاركش الفوط أو قصّافة الضوافر أو المقص، وماتلبسش جزم ناس تانية.»"
      ],
      "toSelf": [
        "«هخلّي رجلي نضيفة وناشفة، وألبس شراب نضيف وجزمة مقاسي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اختار الجزمة على مهلك، واتأكد إنها مقاسك ومقدمتها مش ضيقة.",
      "en": ""
    },
    "rights": {
      "ar": "خلي فوطك وقصّافة ضوافرك ومقصّك ليك، وماتلبسش جزم ناس تانية، من غير إحراج.",
      "en": ""
    },
    "variations": [
      "لو عندك سكر: خليك منتبه لأن مشاكل القدم ممكن تبقى أخطر.",
      "لو مناعتك ضعيفة: زي بعد زراعة عضو أو مع العلاج الكيماوي، ماتتجاهلش العلامة دي."
    ],
    "prevention": [
      "خلّي رجليك نضيفة وناشفة، والبس شراب نضيف كل يوم، وماتشاركش الفوط أو قصّافة الضوافر أو المقص، وماتلبسش جزم ناس تانية."
    ],
    "drill": {
      "ar": "راجع: ضوافر قصيرة، رجل نضيفة وناشفة، شراب نضيف، جزمة مقاسك، ومن غير مشاركة فوط أو قصّافة ضوافر أو مقص، ومن غير لبس جزم ناس تانية.",
      "en": ""
    },
    "after": {
      "ar": "خلّي رجليك نضيفة وناشفة، والبس شراب نضيف وجزمة مقاسك، وراقب لو العدوى انتشرت لضوافر تانية.",
      "en": ""
    },
    "sources": [
      {
        "srcId": "nhs:fungal-nail-infection",
        "label": "NHS — Fungal nail infection",
        "url": "https://www.nhs.uk/conditions/fungal-nail-infection/",
        "grade": "A · INGESTED",
        "sha256": "f1e4c185e4",
        "retrieved": "2026-07-13",
        "licence": "OGL v3 — © Crown copyright",
        "attribution": "Contains public sector information licensed under the Open Government Licence v3.0 (NHS)"
      }
    ]
  },
  {
    "id": "nausea",
    "title": {
      "ar": "الغثيان",
      "en": "Feeling sick (nausea)"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو حاسس بالغثيان، جرّب هوا نضيف ورشفات منتظمة من مشروب بارد، وخلي أكلك وجبات أصغر على مرات أكتر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "حاسس بالغثيان ومابقيتش أحسن بعد كام يوم.",
        "en": "are feeling sick and do not feel better in a few days",
        "src": "nhs:nausea"
      },
      {
        "t": "الغثيان بيرجعلك كتير.",
        "en": "often feel sick (it keeps coming back)",
        "src": "nhs:nausea"
      },
      {
        "t": "وجع في الصدر حاسس بيه ضاغط أو تقيل.",
        "en": "chest pain that feels tight or heavy",
        "src": "nhs:nausea"
      },
      {
        "t": "وجع بيمتد لدراعاتك أو ضهرك أو رقبتك أو فكك.",
        "en": "pain that spreads to your arms, back, neck or jaw",
        "src": "nhs:nausea"
      },
      {
        "t": "ضيق نفس.",
        "en": "shortness of breath",
        "src": "nhs:nausea"
      }
    ],
    "do": [
      {
        "t": "خد كفايتك من الهوا النضيف.",
        "en": "get plenty of fresh air",
        "src": "nhs:nausea"
      },
      {
        "t": "اشغل نفسك بحاجة، زي إنك تسمع مزيكا أو تتفرج على فيلم.",
        "en": "distract yourself – for example, listen to music or watch a film",
        "src": "nhs:nausea"
      },
      {
        "t": "خد رشفات منتظمة من مشروب بارد.",
        "en": "take regular sips of a cold drink",
        "src": "nhs:nausea"
      },
      {
        "t": "اشرب شاي زنجبيل أو نعناع.",
        "en": "drink ginger or peppermint tea",
        "src": "nhs:nausea"
      },
      {
        "t": "كُل أكل فيه زنجبيل، زي بسكويت الزنجبيل.",
        "en": "eat foods containing ginger – such as ginger biscuits",
        "src": "nhs:nausea"
      },
      {
        "t": "كُل وجبات أصغر على مرات أكتر.",
        "en": "eat smaller, more frequent meals",
        "src": "nhs:nausea"
      }
    ],
    "dont": [
      {
        "t": "ماتاكلش ولا تطبخ أكل ريحته قوية.",
        "en": "do not eat or cook strong-smelling food",
        "src": "nhs:nausea"
      },
      {
        "t": "ماتاكلش أكل سخن أو مقلي أو مليان دهون.",
        "en": "do not eat hot, fried or greasy food",
        "src": "nhs:nausea"
      },
      {
        "t": "ماتاكلش بسرعة.",
        "en": "do not eat too quickly",
        "src": "nhs:nausea"
      },
      {
        "t": "ماتشربش كمية كبيرة مع الوجبات.",
        "en": "do not have a large drink with meals",
        "src": "nhs:nausea"
      },
      {
        "t": "ماتتمدّدش بعد الأكل بوقت قصير.",
        "en": "do not lie down soon after eating",
        "src": "nhs:nausea"
      },
      {
        "t": "ماتلبسش هدوم ضيقة حوالين وسطك أو بطنك.",
        "en": "do not wear clothes that are tight around your waist or tummy",
        "src": "nhs:nausea"
      }
    ],
    "whenWhy": {
      "ar": "الهوا النضيف، والرشفات المنتظمة، والوجبات الأصغر ممكن يبقوا أسهل عليك. وابعد عن الريحة القوية والأكل السخن أو المقلي أو الدسم.",
      "en": ""
    },
    "how": {
      "ar": "افتح مكان فيه هوا نضيف، وخد رشفات من مشروب بارد. لما تاكل، خلّي الوجبات أصغر وماتاكلش بسرعة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "شاي زنجبيل أو نعناع",
        "why": "عشان تشربه وقت الغثيان"
      },
      {
        "item": "بسكويت زنجبيل",
        "why": "مثال لأكل فيه زنجبيل"
      }
    ],
    "tech": [
      "شغّل مزيكا أو فيلم يشغلك شوية"
    ],
    "writeDown": [
      "سجّل لو الغثيان مابيتحسّنش بعد كام يوم أو لو بيرجع كتير"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Feeling sick (nausea)",
        "url": "https://www.nhs.uk/symptoms/feeling-sick-nausea/"
      }
    ],
    "othersPOV": {
      "ar": "اللي حاسس بالغثيان ممكن مايبقاش مستحمل ريحة الأكل؛ ساعده يلاقي هوا نضيف وماتضغطش عليه ياكل بسرعة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ممكن تفتحوا شباك وتبعدوا الأكل اللي ريحته قوية؟»"
      ],
      "toSelf": [
        "«هاخد رشفات منتظمة، وآكل وجبات أصغر بالراحة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "بصوت هادي، اطلب هوا نضيف ومشروب بارد تاخد منه رشفات منتظمة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة لو الغثيان مابيتحسّنش أو بيرجع كتير، وتتصرف بسرعة لو معاه علامة خطر.",
      "en": ""
    },
    "variations": [
      "لو ريحة الأكل مضايقاك: ابعد عن الأكل قوي الريحة وماتطبخوش.",
      "لو الأكل تقيل عليك: خلّي الوجبات أصغر وعلى مرات أكتر.",
      "لو مع الغثيان وجع صدر ضاغط أو تقيل، أو ضيق نفس: دي علامة خطر."
    ],
    "prevention": [
      "كُل ببطء، وماتتمدّدش بعد الأكل بوقت قصير.",
      "ماتلبسش هدوم ضيقة حوالين وسطك أو بطنك.",
      "ابعد عن الأكل السخن أو المقلي أو الدسم وقت الغثيان."
    ],
    "drill": {
      "ar": "افتكرها ببساطة: هوا نضيف، رشفات باردة، وجبات أصغر، ومتابعة علامات الخطر.",
      "en": ""
    },
    "after": {
      "ar": "تابع هل الغثيان اتحسّن خلال كام يوم، ولا بقى بيرجع كتير، وراجع علامات الخطر.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Feeling sick (nausea)",
        "url": "https://www.nhs.uk/symptoms/feeling-sick-nausea/",
        "srcId": "nhs:nausea",
        "sha256": "cb8519ecac",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "scabies",
    "title": {
      "ar": "الجرب",
      "en": "Scabies"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "الجرب محتاج إن كل اللي في البيت يتعالجوا في نفس الوقت، حتى لو معندهمش أعراض. امشوا على العلاج مع بعض، وماتعملوش علاقة جنسية ولا تلامسوا جسم حد لحد ما الكورس يخلص، وماتشاركوش ملايات أو هدوم أو فوط.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "طفلك أقل من سنتين وعنده أعراض جرب، أو حد تاني في البيت عنده جرب.",
        "en": "your child is under 2 years old and has symptoms of scabies or someone else in your household has scabies",
        "src": "nhs:scabies"
      },
      {
        "t": "عندك جرب وشاكك إن جلدك اتصاب بعدوى، أو عندك حالة جلدية تانية زي الإكزيما.",
        "en": "you have scabies and think your skin may be infected or you have another skin condition, such as eczema",
        "src": "nhs:scabies"
      },
      {
        "t": "عندك طفح بقشور ناشفة على كوعك أو ركبتك أو إيدك أو رجلك.",
        "en": "you have a crusted, flaky rash on your elbows, knees, hands or feet",
        "src": "nhs:scabies"
      },
      {
        "t": "استعملت علاج من الصيدلية ولسه جلدك بيهرش من ٢ لـ٤ أسابيع بعد ما العلاج خلص.",
        "en": "you've used pharmacy treatment for scabies and your skin is still itching 2 to 4 weeks after treatment has finished",
        "src": "nhs:scabies"
      }
    ],
    "do": [
      {
        "t": "لو بترضّعي أو حامل، قولي للصيدلي.",
        "en": "Let the pharmacist know if you're breastfeeding or pregnant.",
        "src": "nhs:scabies"
      },
      {
        "t": "كرّر العلاج بعد ٧ أيام.",
        "en": "You'll need to repeat the treatment 7 days later.",
        "src": "nhs:scabies"
      },
      {
        "t": "خلّي كل اللي في البيت يتعالجوا في نفس الوقت، حتى لو معندهمش أعراض.",
        "en": "Everyone in your home needs to be treated at the same time, even if they do not have symptoms.",
        "src": "nhs:scabies"
      },
      {
        "t": "أي حد كان بينك وبينه علاقة جنسية خلال آخر ٨ أسابيع لازم يتعالج هو كمان.",
        "en": "Anyone you've had sexual contact with in the past 8 weeks should also be treated.",
        "src": "nhs:scabies"
      },
      {
        "t": "في أول يوم علاج، اغسل كل الملايات والهدوم اللي في البيت على ٦٠ درجة مئوية أو أعلى، ولو ينفع نشّفها في مجفف سخن.",
        "en": "wash all bedding and clothing in the house at 60C or higher, and if possible in a hot dryer, on the first day of treatment",
        "src": "nhs:scabies"
      },
      {
        "t": "حُطّ الهدوم اللي ماينفعش تتغسل في كيس مقفول لمدة ٣ أيام على الأقل لحد ما العث يموت.",
        "en": "put clothing that cannot be washed in a sealed bag for at least 3 days until the mites die",
        "src": "nhs:scabies"
      },
      {
        "t": "ابعد عن القرب والملامسة مع الناس في أول ٢٤ ساعة.",
        "en": "It’s important to avoid close contact with other people for the first 24 hours.",
        "src": "nhs:scabies"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش علاج من الصيدلية لطفل أقل من سنتين؛ لازم يكشف عند دكتور.",
        "en": "But do not use pharmacy treatments on children under 2 years old, they will need to see a GP.",
        "src": "nhs:scabies"
      },
      {
        "t": "ماتعملش علاقة جنسية ولا تلامس جسم حد لحد ما تكمّل كورس العلاج كله.",
        "en": "do not have sex or close physical contact until you have completed the full course of treatment",
        "src": "nhs:scabies"
      },
      {
        "t": "ماتشاركش ملايات أو هدوم أو فوط مع حد عنده جرب.",
        "en": "do not share bedding, clothing or towels with someone with scabies",
        "src": "nhs:scabies"
      }
    ],
    "whenWhy": {
      "ar": "العلاج بيبدأ لكل اللي في البيت في نفس الوقت. ماتعملوش علاقة جنسية ولا تلامسوا جسم حد لحد ما كورس العلاج يخلص، وماتشاركوش ملايات أو هدوم أو فوط.",
      "en": ""
    },
    "how": {
      "ar": "ابدأ من أول يوم: العلاج لكل البيت مع بعض، واغسل الملايات والهدوم على ٦٠ درجة مئوية أو أعلى، وحُطّ اللي ماينفعش يتغسل في كيس مقفول ٣ أيام على الأقل.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "علاج الجرب من الصيدلية",
        "why": "لو حامل أو بترضّعي، لازم تقولي للصيدلي"
      }
    ],
    "tech": [
      "حُطّ منبّه على الموبايل عشان تفتكر تكرّر العلاج بعد ٧ أيام"
    ],
    "writeDown": [
      "مين في البيت بدأ العلاج معاك، ومين كان بينك وبينه علاقة جنسية خلال آخر ٨ أسابيع"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Scabies",
        "url": "https://www.nhs.uk/conditions/scabies/"
      }
    ],
    "othersPOV": {
      "ar": "ممكن حد في البيت مايبقاش عنده أعراض، ومع كده لازم يتعالج في نفس وقت الباقيين.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«كلنا هنبدأ العلاج في نفس الوقت، حتى اللي معندوش أعراض.»"
      ],
      "toSelf": [
        "«هكمّل الكورس وأكرّر العلاج في ميعاده.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلي كلامك واضح ومباشر: العلاج في نفس الوقت، ومن غير مشاركة ملايات أو هدوم أو فوط.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تقولي للصيدلي لو حامل أو بترضّعي قبل ما تستخدمي العلاج.",
      "en": ""
    },
    "variations": [
      "لو طفل أقل من سنتين: ماتستخدمش له علاج من الصيدلية وخليه يكشف عند دكتور.",
      "لو الهدوم ماينفعش تتغسل: حطّها في كيس مقفول لحد ما المدة المطلوبة تعدّي."
    ],
    "prevention": [
      "ماتشاركش ملايات أو هدوم أو فوط مع حد عنده جرب.",
      "ماتعملش علاقة جنسية ولا تلامس جسم حد لحد ما تكمّل كورس العلاج كله."
    ],
    "drill": {
      "ar": "رتّب البداية: علاج لكل البيت مع بعض، وغسيل الملايات والهدوم على ٦٠ درجة مئوية أو أعلى، وكيس مقفول ٣ أيام على الأقل للحاجات اللي ماينفعش تتغسل.",
      "en": ""
    },
    "after": {
      "ar": "لو استعملت علاج الصيدلية ولسه جلدك بيهرش من ٢ لـ٤ أسابيع بعد ما العلاج خلص، روح لدكتور.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Scabies",
        "url": "https://www.nhs.uk/conditions/scabies/",
        "srcId": "nhs:scabies",
        "sha256": "86d79d69fa",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "mouth-ulcers",
    "title": {
      "ar": "قرح الفم",
      "en": "Mouth ulcers"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "خلّي الأكل طري والمشروبات باردة، ونضّف سنانك بفرشة ناعمة. ابعد عن الحار والمالح والحامض والخشن، وراقب القرحة وأي تغيّر معاها.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو القرحة مكمّلة أكتر من ٣ أسابيع.",
        "en": "lasts longer than 3 weeks",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "لو القرحة مختلفة عن القرح اللي جت لك قبل كده؛ زي إنها أكبر من المعتاد أو قريبة من آخر الزور.",
        "en": "is different to other mouth ulcers you've had before, for example if it's bigger than usual or near the back of your throat",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "لو القرحة بتنـزف، أو وجعها واحمرارها بيزيدوا؛ ده ممكن يكون علامة عدوى.",
        "en": "bleeds or becomes more painful and red – this may be a sign of an infection",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "لو عندك قرح في مكان تاني في جسمك، زي الجلد أو الأعضاء التناسلية.",
        "en": "ulcers anywhere else on your body, such as your skin or genitals",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "لو مفاصلك بتوجعك أو حمرا أو وارمة.",
        "en": "painful, red or swollen joints",
        "src": "nhs:mouth-ulcers"
      }
    ],
    "do": [
      {
        "t": "استخدم فرشة أسنان شعيراتها ناعمة.",
        "en": "use a soft-bristled toothbrush",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "اشرب المشروبات الباردة بشفّاطة.",
        "en": "drink cool drinks through a straw",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "كُل أكل طري.",
        "en": "eat softer foods",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "اعمل كشف أسنان بانتظام.",
        "en": "get regular dental check-ups",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "كُل أكل صحي ومتوازن.",
        "en": "eat a healthy, balanced diet",
        "src": "nhs:mouth-ulcers"
      }
    ],
    "dont": [
      {
        "t": "ما تاكلش أكل حرّاق قوي أو مالح أو حامض.",
        "en": "do not eat very spicy, salty or acidic food",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "ما تاكلش أكل خشن ومقرمش، زي التوست أو الشيبسي.",
        "en": "do not eat rough, crunchy food, such as toast or crisps",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "ما تشربش مشروبات سخنة قوي أو حامضة، زي عصير الفاكهة.",
        "en": "do not drink very hot or acidic drinks, such as fruit juice",
        "src": "nhs:mouth-ulcers"
      },
      {
        "t": "ما تستخدمش معجون أسنان فيه كبريتات لوريل الصوديوم.",
        "en": "do not use toothpaste containing sodium lauryl sulphate",
        "src": "nhs:mouth-ulcers"
      }
    ],
    "whenWhy": {
      "ar": "طول المدة مهم: لو القرحة عدّت المدة المذكورة في العلامات الحمرا، ما تتجاهلهاش. اختلاف شكل القرحة أو مكانها عن اللي اتعودت عليه مهم تلاحظه. زيادة الوجع والاحمرار أو النزيف ممكن تكون علامة عدوى.",
      "en": ""
    },
    "how": {
      "ar": "اختار أكل طري بدل الأكل الخشن والمقرمش. خلّي مشروبك بارد واشربه بشفّاطة. نضّف سنانك بفرشة شعيراتها ناعمة. راجع مكوّنات معجون الأسنان وابعد عن اللي فيه كبريتات لوريل الصوديوم.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرشة أسنان شعيراتها ناعمة",
        "why": "عشان تنظّف سنانك بفرشة ناعمة."
      },
      {
        "item": "شفّاطة",
        "why": "عشان تشرب المشروبات الباردة بيها."
      }
    ],
    "tech": [
      "اكتب في ملاحظات موبايلك إمتى القرحة بدأت، وهل هي مختلفة عن القرح اللي جت لك قبل كده، زي إنها أكبر من المعتاد أو قريبة من آخر الزور.",
      "سجّل لو ظهر نزيف، قرح في مكان تاني، أو وجع واحمرار وورم في المفاصل."
    ],
    "writeDown": [
      "إمتى القرحة بدأت.",
      "هل هي أكبر من المعتاد أو قريبة من آخر الزور.",
      "هل بتنـزف أو وجعها واحمرارها بيزيدوا.",
      "هل فيه قرح في مكان تاني أو مفاصل بتوجعك أو حمرا أو وارمة."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Mouth ulcers",
        "url": "https://www.nhs.uk/conditions/mouth-ulcers/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد حد، جهّز له أكل طري ومشروب بارد بدل الحار أو الحامض. ساعده يلاحظ لو القرحة مختلفة أو بتنزف أو وجعها واحمرارها بيزيدوا.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«القرحة دي مختلفة عن القرح اللي جت لي قبل كده؛ أكبر من المعتاد أو قريبة من آخر الزور.»",
        "«عندي كمان الأعراض دي في الجلد أو الأعضاء التناسلية أو المفاصل.»"
      ],
      "toSelf": [
        "«هراقب المدة والشكل والمكان والنزيف والوجع والاحمرار.»"
      ]
    },
    "bodyLanguage": {
      "ar": "وأنت بتنضّف سنانك، استخدم الفرشة الناعمة بهدوء. لو بتشرح لحد، ورّيه مكان القرحة من غير ما تزود الوجع.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك توصف إمتى القرحة بدأت وإيه المختلف فيها بوضوح. من حقك تقول لو فيه نزيف أو أعراض في مكان تاني من جسمك.",
      "en": ""
    },
    "variations": [
      "القرحة ممكن تبقى مختلفة عن اللي جت لك قبل كده في الحجم أو المكان.",
      "ممكن يبقى معاها قرح في الجلد أو الأعضاء التناسلية، أو مفاصل موجوعة أو حمرا أو وارمة."
    ],
    "prevention": [
      "استخدم فرشة أسنان ناعمة واعمل كشف أسنان بانتظام.",
      "كُل أكل صحي ومتوازن، وابعد عن الأكل الحار قوي والمالح والحامض والخشن.",
      "ابعد عن معجون الأسنان اللي فيه كبريتات لوريل الصوديوم."
    ],
    "drill": {
      "ar": "طري وبارد: أكل طري، مشروب بارد بشفّاطة، وفرشة ناعمة. راقب المختلف: المدة والحجم والمكان والنزيف والوجع والاحمرار. افتكر الجسم كله: جلد وأعضاء تناسلية ومفاصل.",
      "en": ""
    },
    "after": {
      "ar": "كمّل قارن القرحة دي بالقرح اللي جت لك قبل كده: هل هي مختلفة، أكبر من المعتاد، أو قريبة من آخر الزور. دوّن لو ظهر نزيف أو زاد الوجع والاحمرار. ما تتجاهلش قرح في مكان تاني أو مفاصل موجوعة أو حمرا أو وارمة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Mouth ulcers",
        "url": "https://www.nhs.uk/conditions/mouth-ulcers/",
        "srcId": "nhs:mouth-ulcers",
        "sha256": "db0ab40e40",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "piles-haemorrhoids",
    "title": {
      "ar": "البواسير",
      "en": "Piles (haemorrhoids)"
    },
    "level": 3,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك بواسير فيها وجع أو هرش، فيه خطوات بسيطة تقدر تعملها في البيت. تابع الأعراض، ولو بتسوء أو مش بتتحسن اكشف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو أعراض البواسير بتسوء، أو جربت علاج في البيت ومفيش تحسّن.",
        "en": "you have symptoms of piles and they're getting worse or there's no improvement after trying treatments at home",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لو البواسير بترجعلك كل شوية.",
        "en": "you keep getting piles",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لو لاحظت تغيير حوالين فتحة الشرج مش طبيعي بالنسبالك.",
        "en": "you notice a change around your anus that is not normal for you",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لو حرارتك عالية قوي، أو حاسس بسخونية أو برد أو رعشة وتعبان عمومًا.",
        "en": "your temperature is very high, or you feel hot, cold or shivery and generally unwell",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لو فيه صديد نازل من البواسير.",
        "en": "pus is leaking from your piles",
        "src": "nhs:piles-haemorrhoids"
      }
    ],
    "do": [
      {
        "t": "لو تقدر، رجّع الباسور لجوه بالراحة.",
        "en": "gently push a pile back inside if you can",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لو البواسير وجعاك، خد باراسيتامول.",
        "en": "take paracetamol if piles hurt",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "لفّ كمادة تلج في فوطة وحطّها عشان تخفف عدم الراحة.",
        "en": "use an ice pack wrapped in a towel to ease discomfort",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "اشرب سوائل كتير وكل ألياف كتير عشان البراز يفضل طري.",
        "en": "drink lots of fluid and eat plenty of fibre to keep your poo soft",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "خد حمّام دافي عشان تخفف الهرش والوجع.",
        "en": "take a warm bath to ease itching and pain",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "خلّي منطقة المؤخرة نضيفة وناشفة — نشّف بالطبطبة، مش بالفرك.",
        "en": "keep your bottom clean and dry – pat (rather than rub) it dry",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "قلّل الكحول والكافيين زي الشاي والقهوة والكولا عشان تتجنب الإمساك.",
        "en": "cut down on alcohol and caffeine (like tea, coffee and cola) to avoid constipation",
        "src": "nhs:piles-haemorrhoids"
      }
    ],
    "dont": [
      {
        "t": "ماتتجاهلش إحساس إنك محتاج تعمل حمّام.",
        "en": "do not ignore the urge to poo",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "ماتزقّش جامد وإنت بتعمل حمّام.",
        "en": "do not push too hard when pooing",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "ماتاخدش مسكّن فيه كودايين، لأنه ممكن يعمل إمساك.",
        "en": "do not take painkillers that contain codeine, as they can cause constipation",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "ماتاخدش إيبوبروفين لو البواسير بتنـزف.",
        "en": "do not take ibuprofen if your piles are bleeding",
        "src": "nhs:piles-haemorrhoids"
      },
      {
        "t": "ماتقعدش على التواليت وقت أطول من اللي محتاجه.",
        "en": "do not spend more time than you need to on the toilet",
        "src": "nhs:piles-haemorrhoids"
      }
    ],
    "whenWhy": {
      "ar": "السوائل والألياف بيساعدوا يخلّوا البراز طري. ماتزقّش جامد، وماتقعدش على التواليت أكتر من اللازم.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: البواسير وجعاك. خد حمّام دافي، وبعده نشّف بالطبطبة، وكل ألياف واشرب سوائل. لو فيه نزيف، ماتاخدش إيبوبروفين.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كمادة تلج",
        "why": "تلفّها في فوطة عشان تخفف المضايقة"
      }
    ],
    "tech": [
      "اعمل منبّه على موبايلك يفكّرك تشرب سوائل"
    ],
    "writeDown": [
      "سجّل لو الأعراض بتسوء أو بتتكرر، وأي تغيير مش طبيعي حوالين فتحة الشرج"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Piles (haemorrhoids)",
        "url": "https://www.nhs.uk/conditions/piles-haemorrhoids/"
      }
    ],
    "othersPOV": {
      "ar": "الموضوع شخصي وممكن يكسّف. اسمع من غير هزار، وسيب للشخص خصوصيته وهو بيشرح اللي مضايقه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«خد راحتك، قولّي الأعراض بتسوء ولا ثابتة.»"
      ],
      "toSelf": [
        "«هخفف الوجع، وأتابع أي تغيير أو علامة محتاجة كشف.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بصوت واطي، وماتحرجش الشخص بأسئلة قدام حد.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تتكلم عن الأعراض دي بخصوصية ومن غير إحراج.",
      "en": ""
    },
    "variations": [
      "لو فيه نزيف: ماتاخدش إيبوبروفين.",
      "لو فيه صديد أو حرارة عالية قوي: اكشف."
    ],
    "prevention": [
      "اشرب سوائل كتير وكل ألياف كتير عشان البراز يفضل طري.",
      "قلّل الكحول والكافيين، وماتزقّش جامد وإنت بتعمل حمّام."
    ],
    "drill": {
      "ar": "رتّبها في دماغك: سوائل وألياف، حمّام دافي، تنشيف بالطبطبة، ومتابعة أي علامة مش طبيعية.",
      "en": ""
    },
    "after": {
      "ar": "تابع الأعراض بعد اللي عملته في البيت. لو بتسوء، مش بتتحسن، أو بترجعلك كل شوية، اكشف.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Piles (haemorrhoids)",
        "url": "https://www.nhs.uk/conditions/piles-haemorrhoids/",
        "srcId": "nhs:piles-haemorrhoids",
        "sha256": "0e914e30f6",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "warts-verrucas",
    "title": {
      "ar": "الثآليل وعين السمكة",
      "en": "Warts and verrucas"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك ثؤلول أو عين سمكة، اغسل إيدك بعد ما تلمسها، وغطّيها ببلاستر وإنت بتعوم، وماتهرشهاش.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو فيه حاجة طالعة في جلدك ومقلقاك.",
        "en": "you're worried about a growth on your skin",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "لو عندك ثؤلول أو عين سمكة بيرجعوا تاني.",
        "en": "you have a wart or verruca that keeps coming back",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "لو عندك ثؤلول أو عين سمكة كبار قوي أو بيوجعوا.",
        "en": "you have a very large or painful wart or verruca",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "لو عندك ثؤلول بينزف أو شكله اتغيّر.",
        "en": "you have a wart that bleeds or changes in how it looks",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "لو عندك ثؤلول في وشك أو أعضائك التناسلية.",
        "en": "you have a wart on your face or genitals",
        "src": "nhs:warts-verrucas"
      }
    ],
    "do": [
      {
        "t": "ممكن تشتري من الصيدلية كريمات أو لاصقات أو بخاخات لعلاج الثآليل وعين السمكة.",
        "en": "You can buy creams, plasters and sprays from pharmacies to treat warts and verrucas.",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "اغسل إيدك بعد ما تلمس ثؤلول أو عين سمكة.",
        "en": "wash your hands after touching a wart or verruca",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "لو عندك عين سمكة، غيّر شرابك كل يوم.",
        "en": "change your socks daily if you have a verruca",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "غطّي الثؤلول أو عين السمكة ببلاستر وإنت بتعوم.",
        "en": "cover warts and verrucas with a plaster when swimming",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "خد بالك وإنت بتحلق عشان ماتجرحش الثؤلول.",
        "en": "take care not to cut a wart when shaving",
        "src": "nhs:warts-verrucas"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش العلاجات دي على وشك.",
        "en": "You should not use these treatments on your face.",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "ماتشاركش فوط، فوط وش، شرابات أو جزم لو عندك ثؤلول أو عين سمكة.",
        "en": "do not share towels, flannels, socks or shoes if you have a wart or verruca",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "ماتعضّش ضوافرك أو تمصّ صوابع عليها ثآليل.",
        "en": "do not bite your nails or suck fingers with warts on",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "ماتمشيش حافي في الأماكن العامة لو عندك عين سمكة.",
        "en": "do not walk barefoot in public places if you have a verruca",
        "src": "nhs:warts-verrucas"
      },
      {
        "t": "ماتهرشّش الثؤلول وماتنقّرش فيه.",
        "en": "do not scratch or pick a wart",
        "src": "nhs:warts-verrucas"
      }
    ],
    "whenWhy": {
      "ar": "بعد ما تلمس الثؤلول أو عين السمكة اغسل إيدك، وماتشاركش الفوط أو الشرابات أو الجزم، وغطّيها ببلاستر وإنت بتعوم.",
      "en": ""
    },
    "how": {
      "ar": "ممكن تشتري العلاج من الصيدلية، واغسل إيدك بعد اللمس، ولو عندك عين سمكة غيّر شرابك كل يوم.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ممكن تشتري كريمات أو لاصقات أو بخاخات من الصيدلية",
        "why": "لعلاج الثآليل وعين السمكة"
      },
      {
        "item": "بلاستر",
        "why": "لتغطية الثؤلول أو عين السمكة وقت العوم"
      }
    ],
    "tech": [
      "حط تذكير يومي عشان تغيّر شرابك لو عندك عين سمكة"
    ],
    "writeDown": [
      "دوّن لو الثؤلول أو عين السمكة بيرجعوا، أو كبروا قوي، أو بقوا بيوجعوا",
      "دوّن لو الثؤلول نزف أو شكله اتغيّر"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Warts and verrucas",
        "url": "https://www.nhs.uk/conditions/warts-and-verrucas/"
      }
    ],
    "othersPOV": {
      "ar": "خلّي فوطك وشراباتك وجزمك ليك، وماتطلبش من حد يشاركهم معاك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ماتستخدموش فوطتي أو شرابي أو جزمتي، وأنا هاغطيها ببلاستر وقت العوم.»"
      ],
      "toSelf": [
        "«هاغسل إيدي بعد ما ألمسها، ومش هاهرشّها.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي إيدك بعيدة عن المكان بدل الهرش أو التنقير، وخد بالك وإنت بتحلق عشان ماتجرحوش.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تخلي فوطك وشراباتك وجزمك منفصلين من غير إحراج.",
      "en": ""
    },
    "variations": [
      "لو الثؤلول في وشك، ماتستخدمش العلاجات دي عليه.",
      "لو عندك عين سمكة، غيّر شرابك كل يوم وماتمشيش حافي في الأماكن العامة."
    ],
    "prevention": [
      "اغسل إيدك بعد ما تلمس ثؤلول أو عين سمكة، وماتشاركش الفوط أو الشرابات أو الجزم.",
      "غطّي الثؤلول أو عين السمكة ببلاستر وقت العوم، وماتمشيش حافي في الأماكن العامة لو عندك عين سمكة."
    ],
    "drill": {
      "ar": "افتكرها: اغسل إيدك، غطّيها وقت العوم، وماتهرشّهاش أو تنقّر فيها.",
      "en": ""
    },
    "after": {
      "ar": "خد بالك لو بترجع، أو كبيرة قوي أو بتوجع، أو بتنـزف أو شكلها بيتغيّر، أو موجودة في وشك أو أعضائك التناسلية.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Warts and verrucas",
        "url": "https://www.nhs.uk/conditions/warts-and-verrucas/",
        "srcId": "nhs:warts-verrucas",
        "sha256": "3ca95e12d0",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "boils",
    "title": {
      "ar": "الدمامل",
      "en": "Boils"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت",
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "عندك دُمّل موجع. غطّي المكان من غير ما تعصره، وراقب علامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عندك مجموعة دمامل مع بعض.",
        "en": "you have a group of boils (carbuncle)",
        "src": "nhs:boils"
      },
      {
        "t": "الدمل في وشك.",
        "en": "it is on your face",
        "src": "nhs:boils"
      },
      {
        "t": "الجلد حوالين الدمل سخن وموجع ووارم.",
        "en": "the skin around your boil feels hot, painful and swollen",
        "src": "nhs:boils"
      },
      {
        "t": "حاسس بسخونية أو برد أو رعشة.",
        "en": "you feel hot, cold or shivery",
        "src": "nhs:boils"
      },
      {
        "t": "مناعتك ضعيفة — ممكن يكون بسبب علاج زي الستيرويدات أو حالة زي السكر.",
        "en": "you have a weakened immune system – this could be from taking treatments such as steroids, or having a condition like diabetes",
        "src": "nhs:boils"
      }
    ],
    "do": [
      {
        "t": "بلّل فوطة نضيفة بمية دافية وحطّها على الدمل لمدة ١٠ دقايق ٤ مرات في اليوم.",
        "en": "soak a clean cloth in warm water and hold it against the boil for 10 minutes 4 times a day",
        "src": "nhs:boils"
      },
      {
        "t": "لو خرج صديد، نضّف المنطقة حوالين الدمل بصابون مضاد للبكتيريا.",
        "en": "clean the area around the boil with antibacterial soap if pus comes out",
        "src": "nhs:boils"
      },
      {
        "t": "غطّي المكان بغيار أو شاش لحد ما المكان يلمّ.",
        "en": "cover the area with a dressing or gauze until it heals",
        "src": "nhs:boils"
      },
      {
        "t": "استحمّ كل يوم واغسل إيديك بانتظام.",
        "en": "bathe or shower every day and wash your hands regularly",
        "src": "nhs:boils"
      },
      {
        "t": "خد باراسيتامول أو إيبوبروفين عشان تخفّف الوجع.",
        "en": "take paracetamol or ibuprofen to ease the pain",
        "src": "nhs:boils"
      },
      {
        "t": "اغسل الفوط والملايات مرة على الأقل كل أسبوع على حرارة عالية.",
        "en": "wash your towels and bedding at least once a week at high temperature",
        "src": "nhs:boils"
      },
      {
        "t": "حاول تخس لو وزنك زايد جدًا وعندك دمامل بين طيات جلدك.",
        "en": "try to lose weight if you are very overweight and have boils between folds of your skin",
        "src": "nhs:boils"
      }
    ],
    "dont": [
      {
        "t": "ماتنقّرش الدمل، وماتعصروش، وماتخرموش.",
        "en": "do not pick, squeeze or pierce a boil",
        "src": "nhs:boils"
      },
      {
        "t": "ماتشاركش فوطتك مع حد لحد ما الدمل يروح.",
        "en": "do not share your towel with other people until the boil has gone",
        "src": "nhs:boils"
      },
      {
        "t": "ماتروحش حمام سباحة ولا جيم لحد ما الدمل يروح — ممكن تنقل العدوى لغيرك.",
        "en": "do not go to a swimming pool or gym until the boil has gone –⁠ you could pass the infection on to others",
        "src": "nhs:boils"
      }
    ],
    "whenWhy": {
      "ar": "اعمل الخطوات دي من غير عصر أو خرم، وراقب علامات الخطر.",
      "en": ""
    },
    "how": {
      "ar": "بلّل فوطة نضيفة بمية دافية وحطّها على الدمل. ولو نزل صديد، نضّف حواليه بصابون مضاد للبكتيريا، وغطّيه بشاش.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فوطة نضيفة",
        "why": "للكمادة الدافية"
      },
      {
        "item": "غيار أو شاش",
        "why": "لتغطية المكان"
      }
    ],
    "tech": [
      "اعمل تذكير للكمادات وغسيل الإيدين."
    ],
    "writeDown": [
      "اكتب لو ظهر أي تغيّر من علامات الخطر عشان تفتكره."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Boils",
        "url": "https://www.nhs.uk/conditions/boils/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد حد عنده دمل، وفّر له فوطة نضيفة وشاش وماتشاركش فوطته.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«من فضلك ماتستخدمش الفوطة دي لحد ما الدمل يروح.»"
      ],
      "toSelf": [
        "«مش هاعصره ولا هخرمه؛ ولو نزل صديد، هنضّف حواليه بصابون مضاد للبكتيريا.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتعامل مع المكان بإيدين نضيفة ومن غير عصر أو ضغط.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب إن محدش يشاركك الفوطة لحد ما الدمل يروح.",
      "en": ""
    },
    "variations": [
      "لو عندك مجموعة دمامل مع بعض: دي علامة خطر.",
      "لو الدمل في وشك: دي علامة خطر.",
      "لو الدمامل بين طيات جلدك ووزنك زايد جدًا: حاول تخس."
    ],
    "prevention": [
      "ماتشاركش فوطتك مع حد لحد ما الدمل يروح.",
      "استحمّ كل يوم واغسل إيديك بانتظام.",
      "اغسل الفوط والملايات مرة على الأقل كل أسبوع على حرارة عالية."
    ],
    "drill": {
      "ar": "جهّز فوطة نضيفة وغيار أو شاش، وافتكر: ماتعصرش الدمل وماتخرموش.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تغطية المكان لحد ما المكان يلمّ، وماتشاركش الفوطة لحد ما الدمل يروح.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Boils",
        "url": "https://www.nhs.uk/conditions/boils/",
        "srcId": "nhs:boils",
        "sha256": "d285d83a16",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "food-poisoning",
    "title": {
      "ar": "تسمّم غذائي",
      "en": "Food poisoning"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو إنت أو طفلك عندكم تسمّم غذائي، ركّز على الراحة والسوايل برشفات صغيرة، وخد بالك من علامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو إنت قلقان على طفل عمره أقل من ١٢ شهر.",
        "en": "you're worried about a baby under 12 months",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "لو إنت أو طفلك، وعمره ٥ سنين أو أكتر، لسه عندكم علامات جفاف بعد استخدام أكياس محلول معالجة الجفاف.",
        "en": "you or your child (aged 5 years or over) still have signs of dehydration after using oral rehydration sachets",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "لو إنت أو طفلك بترجّعوا باستمرار ومش قادرين تحتفظوا بأي سوايل.",
        "en": "you or your child keep being sick and cannot keep fluid down",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "لو إنت أو طفلك عندكم إسهال فيه دم أو نزيف من فتحة الشرج.",
        "en": "you or your child have bloody diarrhoea or bleeding from the bottom",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "لو إنت أو طفلك عندكم إسهال أكتر من ٧ أيام أو ترجيع أكتر من يومين.",
        "en": "you or your child have diarrhoea for more than 7 days or vomiting for more than 2 days",
        "src": "nhs:food-poisoning"
      }
    ],
    "do": [
      {
        "t": "اقعد في البيت وخد قسط كبير من الراحة.",
        "en": "stay at home and get plenty of rest",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "اشرب سوايل كتير، زي الميّه، ولو حاسس إنك هترجّع خد رشفات صغيرة.",
        "en": "drink lots of fluids, such as water or squash – take small sips if you feel sick",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "كمّل رضاعة طفلك طبيعي أو بالببرونة، ولو بيرجّع جرّب تدّيله رضعات صغيرة أكتر من المعتاد.",
        "en": "carry on breast or bottle feeding your baby – if they're being sick, try giving small feeds more often than usual",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "لو طفلك بياخد لبن صناعي أو أكل صلب، ادّيله رشفات ميّه صغيرة بين الرضعات.",
        "en": "give babies on formula or solid foods small sips of water between feeds",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "كُل لما تحس إنك قادر، وممكن يفيدك تبعد عن الأكل الدسم أو الحار.",
        "en": "eat when you feel able to – it may help to avoid foods that are fatty or spicy",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "خد باراسيتامول لو حاسس بعدم ارتياح، واقرأ النشرة قبل ما تديه لطفلك.",
        "en": "take paracetamol if you're in discomfort – check the leaflet before giving it to your child",
        "src": "nhs:food-poisoning"
      }
    ],
    "dont": [
      {
        "t": "ماتشربش عصير فاكهة ولا مشروبات غازية، عشان ممكن يزوّدوا الإسهال.",
        "en": "do not have fruit juice or fizzy drinks – they can make diarrhoea worse",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "ماتخفّفش اللبن الصناعي بتاع طفلك؛ حضّره بتركيزه المعتاد.",
        "en": "do not make baby formula weaker – use it at its usual strength",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "ماتديش طفل عمره أقل من ١٢ سنة دوا يوقّف الإسهال.",
        "en": "do not give children under 12 medicine to stop diarrhoea",
        "src": "nhs:food-poisoning"
      },
      {
        "t": "ماتديش أسبرين لطفل عمره أقل من ١٦ سنة.",
        "en": "do not give aspirin to children under 16",
        "src": "nhs:food-poisoning"
      }
    ],
    "whenWhy": {
      "ar": "السوايل مهمة، ولو حاسس إنك هترجّع خدها برشفات صغيرة. عصير الفاكهة والمشروبات الغازية ممكن يزوّدوا الإسهال.",
      "en": ""
    },
    "how": {
      "ar": "خليك في البيت وارتاح، واشرب سوايل. لو حاسس إنك هترجّع، خُد رشفات صغيرة، وكُل لما تقدر وابعد عن الأكل الدسم أو الحار.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "باراسيتامول",
        "why": "لو حاسس بعدم ارتياح، واقرأ النشرة قبل ما تديه لطفلك"
      }
    ],
    "tech": [
      "حُط منبّه يفكّرك تاخد رشفات صغيرة لو حاسس إنك هترجّع"
    ],
    "writeDown": [
      "دوّن لو الإسهال استمر أكتر من ٧ أيام أو الترجيع استمر أكتر من يومين"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Food poisoning",
        "url": "https://www.nhs.uk/conditions/food-poisoning/"
      }
    ],
    "othersPOV": {
      "ar": "لو طفلك تعبان، كمّل رضاعته، ولو بيرجّع ادّيله رضعات صغيرة أكتر من المعتاد.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«محتاج أرتاح وأشرب سوايل برشفات صغيرة.»"
      ],
      "toSelf": [
        "«هرتاح، وهشرب رشفات صغيرة لو حاسس إني هرجّع.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خد وقتك في الراحة واشرب رشفات صغيرة لو حاسس إنك هترجّع.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك ترتاح في البيت وتهتم بسوايلك.",
      "en": ""
    },
    "variations": [
      "للرضيع: كمّل الرضاعة، ولو بيرجّع جرّب رضعات صغيرة أكتر من المعتاد.",
      "للطفل اللي بياخد لبن صناعي أو أكل صلب: ادّيله رشفات ميّه صغيرة بين الرضعات."
    ],
    "prevention": [
      "وقت التعب، ابعد عن عصير الفاكهة والمشروبات الغازية عشان ممكن يزوّدوا الإسهال"
    ],
    "drill": {
      "ar": "افتكر: راحة، سوايل، ورشفات صغيرة لو حاسس إنك هترجّع.",
      "en": ""
    },
    "after": {
      "ar": "كُل لما تحس إنك قادر، وممكن يفيدك تبعد عن الأكل الدسم أو الحار.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Food poisoning",
        "url": "https://www.nhs.uk/conditions/food-poisoning/",
        "srcId": "nhs:food-poisoning",
        "sha256": "40f16e8d8e",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "athletes-foot",
    "title": {
      "ar": "قدم الرياضي",
      "en": "Athlete's foot"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك قدم الرياضي، خليك محافظ على رجليك نضيفة وناشفة، وامشي على تعليمات العلاج.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو علاجات الصيدلية مانفعتش معاك.",
        "en": "treatments from a pharmacy do not work",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "لو رجلك أو ساقك سخنة وبتوجعك وحمرا — والاحمرار ممكن يبقى أقل وضوحًا على البشرة البنية أو السودة — ده ممكن يكون التهاب أخطر.",
        "en": "your foot or leg is hot, painful and red (the redness may be less noticeable on brown or black skin) – this could be a more serious infection",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "لو العدوى انتشرت لأجزاء تانية من جسمك، زي إيديك.",
        "en": "the infection spreads to other parts of your body such as your hands",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "لو عندك سكر — مشاكل القدم ممكن تبقى أخطر لو عندك سكر.",
        "en": "you have diabetes – foot problems can be more serious if you have diabetes",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "لو مناعتك ضعيفة — مثلًا لو عملت زرع عضو أو بتاخد علاج كيماوي.",
        "en": "you have a weakened immune system – for example, you have had an organ transplant or are having chemotherapy",
        "src": "nhs:athletes-foot"
      }
    ],
    "do": [
      {
        "t": "بص دايمًا على تعليمات العبوة، أو اسأل الصيدلي.",
        "en": "Always check the packet or ask a pharmacist.",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "تقدر تكمّل تستخدم بعض علاجات الصيدلية عشان قدم الرياضي ماترجعش.",
        "en": "You can keep using some pharmacy treatments to stop athlete's foot coming back.",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "مهم كمان تخلّي رجليك نضيفة وناشفة.",
        "en": "It's also important to keep your feet clean and dry.",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "نشّف رجليك بعد ما تغسلهم، خصوصًا بين صوابعك — طبطب عليهم بالتنشيف بدل ما تفركهم.",
        "en": "dry your feet after washing them, particularly between your toes – dab them dry rather than rubbing them",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "خلّي ليك فوطة لوحدها لرجليك، واغسلها بانتظام.",
        "en": "use a separate towel for your feet and wash it regularly",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "البس شرابات نضيفة كل يوم — القطن أحسن.",
        "en": "wear clean socks every day – cotton socks are best",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "كمّل على النصايح دي بعد ما تخلص العلاج عشان تساعد تمنع رجوع قدم الرياضي.",
        "en": "Keep following this advice after finishing treatment to help stop athlete's foot coming back.",
        "src": "nhs:athletes-foot"
      }
    ],
    "dont": [
      {
        "t": "ما تحكّش الجلد المصاب — ده ممكن ينقلها لأجزاء تانية من جسمك.",
        "en": "do not scratch affected skin – this can spread it to other parts of your body",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "ماتمشيش حافي — البس شبشب في أماكن زي أوض تغيير الهدوم والدُشّات.",
        "en": "do not walk around barefoot – wear flip-flops in places like changing rooms and showers",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "ماتشاركش الفوط أو الشرابات أو الجزم مع حد تاني.",
        "en": "do not share towels, socks or shoes with other people",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "ماتلبسش نفس الجزمة أكتر من يومين لتلات أيام ورا بعض.",
        "en": "do not wear the same pair of shoes for more than 2 to 3 days in a row",
        "src": "nhs:athletes-foot"
      },
      {
        "t": "ماتلبسش جزمة بتخلّي رجليك تسخن وتعرق.",
        "en": "do not wear shoes that make your feet hot and sweaty",
        "src": "nhs:athletes-foot"
      }
    ],
    "whenWhy": {
      "ar": "الحكّ ممكن ينقل قدم الرياضي لأجزاء تانية من جسمك؛ وماتشاركش الفوط أو الشرابات أو الجزم مع حد تاني.",
      "en": ""
    },
    "how": {
      "ar": "بعد ما تغسل رجليك، طبطب عليهم بالتنشيف وركّز بين صوابعك. استخدم فوطة لوحدها، والبس شرابات نضيفة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "بعض علاجات الصيدلية",
        "why": "عشان تساعد تمنع رجوع قدم الرياضي"
      }
    ],
    "tech": [
      "اعمل تذكير يومي عشان تلبس شرابات نضيفة."
    ],
    "writeDown": [
      "علّم فوطة رجليك عشان تفضل مخصّصة ليها."
    ],
    "videosCommunities": [
      {
        "label": "Athlete's foot",
        "url": "https://www.nhs.uk/conditions/athletes-foot/"
      }
    ],
    "othersPOV": {
      "ar": "ماتشاركش فوطك أو شراباتك أو جزمك مع غيرك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«دي فوطتي لرجلي، خلي كل واحد يستخدم فوطته.»"
      ],
      "toSelf": [
        "«هنشّف رجلي كويس، خصوصًا بين صوابعي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خليك عملي واهتم إن رجليك تفضل نضيفة وناشفة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تسأل الصيدلي وتراجع تعليمات العبوة.",
      "en": ""
    },
    "variations": [
      "لو الاحمرار أقل وضوحًا على بشرتك، ركّز كمان لو رجلك أو ساقك سخنة وبتوجعك.",
      "لو عندك سكر أو مناعتك ضعيفة، مشاكل القدم ممكن تبقى أخطر."
    ],
    "prevention": [
      "خلّي رجليك نضيفة وناشفة، والبس شرابات قطن نضيفة كل يوم.",
      "كمّل على النصايح دي بعد العلاج عشان تساعد تمنع رجوع قدم الرياضي."
    ],
    "drill": {
      "ar": "افتكر: نشّف بين صوابعك، استخدم فوطة لوحدك، والبس شرابات نضيفة.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما تخلص العلاج، كمّل على نفس النصايح عشان تساعد تمنع رجوع قدم الرياضي.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Athlete's foot",
        "url": "https://www.nhs.uk/conditions/athletes-foot/",
        "srcId": "nhs:athletes-foot",
        "sha256": "bce3eaa673",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "sore-throat",
    "title": {
      "ar": "التهاب الحلق",
      "en": "Sore throat"
    },
    "level": 2,
    "who": [
      "إنت أو طفلك"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو حلقك بيوجعك، اشرب ميّه كتير وكُل أكل بارد أو طري، وممكن تغرغر بميّه دافية ومالحة لو مش طفل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو التهاب حلقك، أو التهاب حلق طفلك، ماتحسّنش بعد أسبوع.",
        "en": "you or your child's sore throat does not improve after a week",
        "src": "nhs:sore-throat"
      },
      {
        "t": "لو التهاب الحلق بيتكرر معاك كتير.",
        "en": "you often get a sore throat",
        "src": "nhs:sore-throat"
      },
      {
        "t": "لو عندك التهاب حلق ومعاه حاجة زي كتلة في بقك أو رقبتك، أو قرحة في بقك مستمرة أكتر من ٣ أسابيع.",
        "en": "you have a sore throat and symptoms like a lump in your mouth or neck, or a mouth ulcer that lasts for more than 3 weeks",
        "src": "nhs:sore-throat"
      },
      {
        "t": "لو حرارتك عالية جدًا، أو حاسس إنك سخن أو بردان أو بترتعش.",
        "en": "you have a very high temperature, or you feel hot, cold or shivery",
        "src": "nhs:sore-throat"
      }
    ],
    "do": [
      {
        "t": "غرغر بميّه دافية ومالحة، بس ماتخلّيش الأطفال يجرّبوا ده.",
        "en": "gargle with warm, salty water (children should not try this)",
        "src": "nhs:sore-throat"
      },
      {
        "t": "اشرب ميّه كتير.",
        "en": "drink plenty of water",
        "src": "nhs:sore-throat"
      },
      {
        "t": "كُل أكل بارد أو طري.",
        "en": "eat cool or soft foods",
        "src": "nhs:sore-throat"
      },
      {
        "t": "ابعد عن التدخين وعن الأماكن اللي فيها دخان.",
        "en": "avoid smoking or smoky places",
        "src": "nhs:sore-throat"
      },
      {
        "t": "مصّ مكعبات تلج، أو مصاصات تلج، أو حلوى ناشفة.",
        "en": "suck ice cubes, ice lollies or hard sweets",
        "src": "nhs:sore-throat"
      },
      {
        "t": "دوّب نص معلقة صغيرة ملح في كوباية ميّه دافية؛ الميّه الدافية بتساعد الملح يدوب.",
        "en": "Dissolve half a teaspoon of salt in a glass of warm water (warm water helps salt dissolve).",
        "src": "nhs:sore-throat"
      }
    ],
    "dont": [
      {
        "t": "ماتديش طفل صغير أي حاجة صغيرة وناشفة يمصّها.",
        "en": "do not give young children anything small and hard to suck",
        "src": "nhs:sore-throat"
      },
      {
        "t": "ماتبلعش الميّه المالحة.",
        "en": "do not swallow it",
        "src": "nhs:sore-throat"
      }
    ],
    "whenWhy": {
      "ar": "الميّه الدافية بتساعد الملح يدوب.",
      "en": ""
    },
    "how": {
      "ar": "دوّب نص معلقة صغيرة ملح في كوباية ميّه دافية، غرغر بيها، وماتبلعهاش.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ملح",
        "why": "عشان تدوّب نص معلقة صغيرة منه في كوباية ميّه دافية للغرغرة."
      }
    ],
    "tech": [
      "فعّل تذكير على موبايلك عشان تشرب ميّه كتير."
    ],
    "writeDown": [
      "سجّل إمتى التهاب الحلق بيتكرر معاك."
    ],
    "videosCommunities": [
      {
        "label": "Sore throat",
        "url": "https://www.nhs.uk/symptoms/sore-throat/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد طفل صغير، ماتدّيلوش حاجة صغيرة وناشفة يمصّها، وماتخلّيهوش يغرغر.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«لو سمحتوا، خلّوا المكان من غير تدخين ولا دخان.»"
      ],
      "toSelf": [
        "«هشرب ميّه كتير، وهبعد عن التدخين والدخان.»"
      ]
    },
    "bodyLanguage": {
      "ar": "وإنت بتغرغر، خليك مركز وماتبلعش الميّه المالحة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تبعد عن التدخين وعن الأماكن اللي فيها دخان.",
      "en": ""
    },
    "variations": [
      "لو طفل صغير: ماتدّيلوش أي حاجة صغيرة وناشفة يمصّها."
    ],
    "prevention": [
      "ابعد عن التدخين وعن الأماكن اللي فيها دخان."
    ],
    "drill": {
      "ar": "دوّب نص معلقة صغيرة ملح في كوباية ميّه دافية، وافتكر ماتبلعهاش.",
      "en": ""
    },
    "after": {
      "ar": "لو التهاب حلقك، أو التهاب حلق طفلك، ماتحسّنش بعد أسبوع.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Sore throat",
        "url": "https://www.nhs.uk/symptoms/sore-throat/",
        "srcId": "nhs:sore-throat",
        "sha256": "341cec2d41",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "constipation",
    "title": {
      "ar": "الإمساك",
      "en": "Constipation"
    },
    "level": 2,
    "who": [
      "إنت أو حد عنده إمساك"
    ],
    "place": [
      "في البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك إمساك، تغييرات بسيطة في أكلك وشربك وروتين الحمّام وحركتك ممكن تساعدك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو عندك إمساك ومابيتحسّنش مع العلاج.",
        "en": "are constipated and it's not getting better with treatment",
        "src": "nhs:constipation"
      },
      {
        "t": "لو الإمساك بيتكرر معاك.",
        "en": "are regularly constipated",
        "src": "nhs:constipation"
      },
      {
        "t": "لو فيه دم في البراز.",
        "en": "have blood in your poo",
        "src": "nhs:constipation"
      },
      {
        "t": "لو وزنك قل من غير ما تحاول.",
        "en": "have lost weight without trying",
        "src": "nhs:constipation"
      },
      {
        "t": "لو لاحظت تغيير مفاجئ في طريقة عمل الحمّام أو عادات الإخراج.",
        "en": "notice sudden changes in the how you poo (your bowel habits)",
        "src": "nhs:constipation"
      }
    ],
    "do": [
      {
        "t": "كُل أكل صحي ومتوازن، وضيف فاكهة فيها سوربيتول زي التفاح والمشمش والعنب والزبيب وتوت العليق والفراولة.",
        "en": "eat a healthy balanced diet and include fruits that contain sorbitol such as apples, apricots, grapes (and raisins), raspberries and strawberries",
        "src": "nhs:constipation"
      },
      {
        "t": "اشرب ميّه وسوايل كتير، وابعد عن الكحول.",
        "en": "drink plenty of water and other fluids and avoid alcohol",
        "src": "nhs:constipation"
      },
      {
        "t": "زوّد الألياف في أكلك بالتدريج.",
        "en": "gradually increase the fibre in your diet",
        "src": "nhs:constipation"
      },
      {
        "t": "ضيف شوية ردة قمح أو شوفان أو بذور كتان لأكلك.",
        "en": "add some wheat bran, oats or linseed to your diet",
        "src": "nhs:constipation"
      },
      {
        "t": "ثبّت وقت ومكان للحمّام، وادّي نفسك وقت كفاية.",
        "en": "Keep to a regular time and place and give yourself plenty of time to use the toilet.",
        "src": "nhs:constipation"
      },
      {
        "t": "عشان تعمل حمّام أسهل، جرّب تسند رجليك على كرسي واطي، ولو تقدر خلّي ركبك أعلى من مستوى فخادك.",
        "en": "To make it easier to poo, try resting your feet on a low stool while going to the toilet. If possible, raise your knees above your hips.",
        "src": "nhs:constipation"
      },
      {
        "t": "امشي أو اجري كل يوم عشان تساعد نفسك تعمل حمّام بانتظام أكتر.",
        "en": "A daily walk or run can help you poo more regularly.",
        "src": "nhs:constipation"
      }
    ],
    "dont": [
      {
        "t": "ماتأجّلش لما تحس إنك محتاج تعمل حمّام.",
        "en": "Do not delay if you feel the urge to poo.",
        "src": "nhs:constipation"
      },
      {
        "t": "ماتحاولش تشيل البراز بنفسك — دي حاجة يعملها مختص رعاية صحية.",
        "en": "a healthcare professional removing some of the poo – this is not something you should do yourself",
        "src": "nhs:constipation"
      }
    ],
    "whenWhy": {
      "ar": "زوّد الألياف بالتدريج، وخلي وقت ومكان الحمّام ثابتين، وادّي نفسك وقت كفاية.",
      "en": ""
    },
    "how": {
      "ar": "وقت الحمّام، اسند رجليك على كرسي واطي، ولو تقدر خلّي ركبك أعلى من مستوى فخادك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ردة قمح أو شوفان أو بذور كتان",
        "why": "تضيف شوية منهم لأكلك"
      },
      {
        "item": "كرسي واطي",
        "why": "تسند رجليك عليه وقت الحمّام"
      }
    ],
    "tech": [
      "استخدم منبّه يساعدك تثبّت وقت الحمّام"
    ],
    "writeDown": [
      "اكتب الوقت والمكان اللي هتثبّتهم للحمّام"
    ],
    "videosCommunities": [
      {
        "label": "Constipation",
        "url": "https://www.nhs.uk/conditions/constipation/"
      }
    ],
    "othersPOV": {
      "ar": "ماتستعجلش حد عنده إمساك؛ سيبه ياخد وقت كفاية في الحمّام.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«سيبولي وقت كفاية في الحمّام، وماتستعجلونيش.»"
      ],
      "toSelf": [
        "«هزوّد الألياف بالتدريج، ومش هأجّل لما أحس إني محتاج الحمّام.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اسند رجليك على كرسي واطي، ولو تقدر خلّي ركبك أعلى من فخادك.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تدي نفسك وقت كفاية، وماتأجّلش لما تحس إنك محتاج الحمّام.",
      "en": ""
    },
    "variations": [
      "لو المشي أنسب لك، امشي كل يوم؛ ولو الجري أنسب، اجري كل يوم.",
      "اختار ردة قمح أو شوفان أو بذور كتان عشان تضيف شوية لأكلك."
    ],
    "prevention": [
      "ثبّت وقت ومكان للحمّام، وامشي أو اجري كل يوم."
    ],
    "drill": {
      "ar": "افتكر روتينك: ألياف بالتدريج، سوائل، وقت ثابت للحمّام، وحركة كل يوم.",
      "en": ""
    },
    "after": {
      "ar": "لو الإمساك مابيتحسّنش مع العلاج أو بيتكرر معاك، ماتتجاهلش ده.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Constipation",
        "url": "https://www.nhs.uk/conditions/constipation/",
        "srcId": "nhs:constipation",
        "sha256": "bbf90ff291",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "urinary-tract-infection",
    "title": {
      "ar": "التهاب المسالك البولية",
      "en": "Urinary tract infection"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك التهاب في المسالك البولية، خليك واخد بالك من تغيّر الحرارة أو الرعشة، الوجع تحت البطن أو في الضهر تحت الضلوع، أو الدم في البول.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "حرارتك عالية جدًا أو واطية جدًا، أو حاسس بسخونة أو برد، أو بتترعش.",
        "en": "you have a very high or low temperature, feel hot or cold, or are shivering",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "أعراضك بتسوء بسرعة، أو ماتحسّنتش خلال ٤٨ ساعة (٢ يوم) من بداية العلاج أو من وقت ما بدأت تعالجها بنفسك.",
        "en": "your symptoms get worse quickly, or do not improve within 48 hours (2 days) of starting treatment or treating it yourself",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "التهاب المسالك البولية بيتكرر عندك: ٢ خلال ٦ شهور، أو ٣ خلال ١٢ شهر.",
        "en": "you keep getting UTIs (2 within 6 months, or 3 within 12 months)",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "عندك وجع تحت البطن أو في الضهر، تحت الضلوع على طول.",
        "en": "you have pain in the lower tummy or in the back, just under the ribs",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "في دم في بولك؛ ممكن لونه يبقى وردي فاقع، أو أحمر، أو بني غامق.",
        "en": "you have blood in your pee – your pee may look bright pink, red or dark brown",
        "src": "nhs:urinary-tract-infections-utis"
      }
    ],
    "do": [
      {
        "t": "لما تدخل الحمّام، امسح من قدّام لورا.",
        "en": "wipe from front to back when you go to the toilet",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "خلّي منطقة الأعضاء التناسلية نضيفة وناشفة.",
        "en": "keep the genital area clean and dry",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "اشرب سوائل كتير، وخصوصًا الميّه، عشان تتبول بانتظام خلال اليوم وماتحسّش بالعطش.",
        "en": "drink plenty of fluids, particularly water, so that you regularly pee during the day and do not feel thirsty",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "اغسلي الجلد حوالين المهبل بالميّه قبل العلاقة الجنسية وبعدها.",
        "en": "wash the skin around the vagina with water before and after sex",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "اتبول في أسرع وقت ممكن بعد العلاقة الجنسية.",
        "en": "pee as soon as possible after sex",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "غيّر الحفاض أو فوطة السلس بسرعة لو اتّسخوا.",
        "en": "promptly change nappies or incontinence pads if they are soiled",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "البس ملابس داخلية قطن.",
        "en": "wear cotton underwear",
        "src": "nhs:urinary-tract-infections-utis"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش صابون معطّر حوالين منطقة الأعضاء التناسلية.",
        "en": "do not use scented soap around the genital area",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "ماتحبسش البول لو حاسس إنك محتاج تدخل الحمّام.",
        "en": "do not hold your pee in if you feel the urge to go",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "ماتستعجلش وإنت بتتبول؛ حاول تفضّي المثانة بالكامل.",
        "en": "do not rush when going for a pee – try to fully empty your bladder",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "ماتلبسش ملابس داخلية ضيّقة.",
        "en": "do not wear tight underwear",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "ماتشربش مشروبات كحولية كتير، لأنها ممكن تهيّج المثانة.",
        "en": "do not drink lots of alcoholic drinks, as they may irritate your bladder",
        "src": "nhs:urinary-tract-infections-utis"
      },
      {
        "t": "ماتاكلش أكل مسكّر كتير وماتشربش مشروبات مسكّرة كتير، لأنها ممكن تشجّع نمو البكتيريا.",
        "en": "do not have lots of sugary food or drinks, as they may encourage bacteria to grow",
        "src": "nhs:urinary-tract-infections-utis"
      }
    ],
    "whenWhy": {
      "ar": "المشروبات الكحولية الكتير ممكن تهيّج المثانة، والأكل أو المشروبات المسكّرة الكتير ممكن تشجّع نمو البكتيريا.",
      "en": ""
    },
    "how": {
      "ar": "خلال يومك، اشرب سوائل كتير وخصوصًا الميّه عشان تتبول بانتظام وماتحسّش بالعطش، ولما تحس إنك محتاج تدخل الحمّام ماتحبسش البول وخد وقتك عشان تفضّي المثانة بالكامل.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ملابس داخلية قطن",
        "why": "البس ملابس داخلية قطن"
      }
    ],
    "tech": [
      "اعمل تذكير تشرب ميّه وتدخل الحمّام بانتظام خلال اليوم"
    ],
    "writeDown": [
      "هل الأعراض ساءت بسرعة أو ماتحسّنتش خلال ٤٨ ساعة (٢ يوم) من بداية العلاج أو العلاج بنفسك",
      "عدد مرات التهاب المسالك البولية: ٢ خلال ٦ شهور أو ٣ خلال ١٢ شهر"
    ],
    "videosCommunities": [
      {
        "label": "Urinary tract infections (UTIs)",
        "url": "https://www.nhs.uk/conditions/urinary-tract-infections-utis/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد حد، فكّره يشرب سوائل كتير وخصوصًا الميّه، ومايحبسش البول لو محتاج يدخل الحمّام.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«أعراضي بتسوء بسرعة.»",
        "«الأعراض ماتحسّنتش خلال ٤٨ ساعة من بداية العلاج.»"
      ],
      "toSelf": [
        "«هشرب سوائل كتير وخصوصًا الميّه، ومش هحبس البول.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خد وقتك وإنت بتتبول عشان تحاول تفضّي المثانة بالكامل.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تاخد وقتك وإنت بتتبول عشان تفضّي المثانة بالكامل، وماتحبسش البول لما تحس إنك محتاج تدخل الحمّام.",
      "en": ""
    },
    "variations": [
      "لو حرارتك عالية جدًا أو واطية جدًا، أو حاسس بسخونة أو برد، أو بتترعش.",
      "لو في دم في بولك ولونه وردي فاقع، أو أحمر، أو بني غامق."
    ],
    "prevention": [
      "خلّي منطقة الأعضاء التناسلية نضيفة وناشفة، وماتستخدمش صابون معطّر حواليها.",
      "البس ملابس داخلية قطن وماتلبسش ملابس داخلية ضيّقة."
    ],
    "drill": {
      "ar": "افتكر: اشرب سوائل كتير وخصوصًا الميّه، اتبول بانتظام خلال اليوم، وماتحبسش البول لما تحس إنك محتاج تدخل الحمّام.",
      "en": ""
    },
    "after": {
      "ar": "لو الأعراض بتسوء بسرعة، أو ماتحسّنتش خلال ٤٨ ساعة (٢ يوم) من بداية العلاج أو العلاج بنفسك، دي علامة خطر.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Urinary tract infections (UTIs)",
        "url": "https://www.nhs.uk/conditions/urinary-tract-infections-utis/",
        "srcId": "nhs:urinary-tract-infections-utis",
        "sha256": "cf8f5bba41",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "dry-eyes",
    "title": {
      "ar": "جفاف العين",
      "en": "Dry eyes"
    },
    "level": 3,
    "who": [
      "لو عندك جفاف في العين"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عينك ناشفة، فيه خطوات بسيطة تقدر تعملها في البيت. ولو عينك بتوجعك وحمرا أو نظرك اتغيّر، خد رأي طبي.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو لسه عندك جفاف في العين بعد ما جرّبت العلاج في البيت كام أسبوع.",
        "en": "you still have dry eyes after trying home treatments for a few weeks",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "لو عينك بتوجعك وحمرا.",
        "en": "your eye is painful and red",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "لو حصل أي تغيير في نظرك، زي خطوط مموّجة أو وميض أو فقدان النظر.",
        "en": "you have any changes to your sight, like wavy lines, flashing or loss of vision",
        "src": "nhs:dry-eyes"
      }
    ],
    "do": [
      {
        "t": "نضّف جفونك كل يوم.",
        "en": "clean your eyelids every day",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "خد فواصل تريّح فيها عينيك وإنت بتتفرج على التلفزيون أو بتستخدم شاشة الكمبيوتر.",
        "en": "take breaks to rest your eyes when watching TV or using a computer screen",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "خلّي شاشة الكمبيوتر أوطى من مستوى عينك بحاجة بسيطة.",
        "en": "make sure your computer screen is just below eye level",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "استخدم جهاز ترطيب عشان الهوا ماينشفش.",
        "en": "use a humidifier to stop the air getting dry",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "لو بتلبس عدسات لاصقة، شيلها والبس نضارة عشان تريّح عينيك.",
        "en": "if you wear contact lenses, take them out and wear glasses to rest your eyes",
        "src": "nhs:dry-eyes"
      }
    ],
    "dont": [
      {
        "t": "ماتدخنش وماتشربش كحول كتير.",
        "en": "do not smoke or drink too much alcohol",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "ماتقعدش وقت طويل في أماكن فيها دخان، أو ناشفة، أو فيها تراب.",
        "en": "do not spend too long in smoky, dry or dusty places",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "ماتقعدش وقت طويل في أوض فيها تكييف أو تدفئة.",
        "en": "do not spend too long in air conditioned or heated rooms",
        "src": "nhs:dry-eyes"
      },
      {
        "t": "ماتوقفش دوا موصوف لك قبل ما تاخد رأي طبي الأول، حتى لو فاكر إنه سبب الأعراض.",
        "en": "do not stop taking a prescribed medicine without getting medical advice first – even if you think it's causing your symptoms",
        "src": "nhs:dry-eyes"
      }
    ],
    "whenWhy": {
      "ar": "خد رأي طبي لو الجفاف لسه موجود بعد علاج البيت بكام أسبوع، أو لو عينك بتوجعك وحمرا، أو لو نظرك اتغيّر.",
      "en": ""
    },
    "how": {
      "ar": "مثال بسيط: وإنت على الكمبيوتر، خلّي الشاشة أوطى من مستوى عينك بحاجة بسيطة، وخد فواصل تريّح فيها عينيك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جهاز ترطيب",
        "why": "عشان الهوا ماينشفش"
      }
    ],
    "tech": [
      "خلّي شاشة الكمبيوتر أوطى من مستوى عينك بحاجة بسيطة",
      "خد فواصل تريّح فيها عينيك وإنت بتستخدم الشاشة"
    ],
    "writeDown": [
      "اكتب لو الجفاف لسه موجود بعد علاج البيت بكام أسبوع، ولو في ألم واحمرار أو أي تغيير في النظر."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Dry eyes",
        "url": "https://www.nhs.uk/symptoms/dry-eyes/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد لابس عدسات لاصقة وعينه ناشفة، ساعده يشيلها ويلبس نضارة عشان يريّح عينه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«خلّيني أخد فاصل أريّح فيه عيني.»"
      ],
      "toSelf": [
        "«هريّح عيني من الشاشة، ولو لابس عدسات هشيلها وألبس نضارة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ريّح عينيك من الشاشة، وخليها في مستوى أعلى من شاشة الكمبيوتر بحاجة بسيطة.",
      "en": ""
    },
    "rights": {
      "ar": "ماتوقفش دوا موصوف لك من نفسك؛ خد رأي طبي الأول، حتى لو فاكر إنه سبب الأعراض.",
      "en": ""
    },
    "variations": [
      "لو بتلبس عدسات لاصقة: شيلها والبس نضارة عشان تريّح عينيك."
    ],
    "prevention": [
      "ماتقعدش وقت طويل في أماكن فيها دخان أو تراب أو الهوا فيها ناشف.",
      "ماتقعدش وقت طويل في أوض فيها تكييف أو تدفئة."
    ],
    "drill": {
      "ar": "ظبّط مكان شاشة الكمبيوتر بحيث تبقى أوطى من مستوى عينك بحاجة بسيطة، وافتكر تاخد فواصل تريّح فيها عينيك.",
      "en": ""
    },
    "after": {
      "ar": "لو لسه عندك جفاف في العين بعد علاج البيت بكام أسبوع، خد رأي طبي.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Dry eyes",
        "url": "https://www.nhs.uk/symptoms/dry-eyes/",
        "srcId": "nhs:dry-eyes",
        "sha256": "7fc07d6328",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "common-cold",
    "title": {
      "ar": "نزلة برد",
      "en": "Common cold"
    },
    "level": 2,
    "who": [
      "الكبار والأطفال"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك نزلة برد، ريّح جسمك واشرب سوايل كتير وكُل أكل صحي. وفي شوية خطوات بسيطة ممكن تريّح الزور والأنف المسدودة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "حرارتك عالية بقالها أكتر من ٣ أيام.",
        "en": "you have a high temperature for more than 3 days",
        "src": "nhs:common-cold"
      },
      {
        "t": "أعراض نزلة البرد بتسوء.",
        "en": "your cold symptoms get worse",
        "src": "nhs:common-cold"
      },
      {
        "t": "حاسس بضيق نفس أو عندك وجع في صدرك.",
        "en": "you feel short of breath or have chest pain",
        "src": "nhs:common-cold"
      },
      {
        "t": "أعراض نزلة البرد ماتحسّنتش بعد ١٠ أيام.",
        "en": "your cold symptoms do not get better after 10 days",
        "src": "nhs:common-cold"
      },
      {
        "t": "عندك أعراض نزلة برد ومناعتك ضعيفة، زي لو بتاخد علاج كيماوي.",
        "en": "you get cold symptoms and you have a weakened immune system (for example, because you're having chemotherapy)",
        "src": "nhs:common-cold"
      }
    ],
    "do": [
      {
        "t": "خُد قسط كبير من الراحة.",
        "en": "get plenty of rest",
        "src": "nhs:common-cold"
      },
      {
        "t": "اشرب سوايل كتير، زي الميّه، عشان تتفادى الجفاف.",
        "en": "drink lots of fluid, such as water, to avoid dehydration",
        "src": "nhs:common-cold"
      },
      {
        "t": "كُل أكل صحي؛ ولو طفلك صغير، عادي شهيته تقل كام يوم.",
        "en": "eat healthy food (it's common for small children to lose their appetite for a few days)",
        "src": "nhs:common-cold"
      },
      {
        "t": "غرغر بميّه وملح عشان تهدّي وجع الزور؛ الخطوة دي مش مناسبة للأطفال.",
        "en": "gargle salt water to soothe a sore throat (not suitable for children)",
        "src": "nhs:common-cold"
      },
      {
        "t": "اشرب ليمون بعسل سخن عشان تهدّي وجع الزور.",
        "en": "drink a hot lemon and honey drink to soothe a sore throat",
        "src": "nhs:common-cold"
      },
      {
        "t": "اقعد في الحمّام والدُش السخن شغّال، واستنشق البخار عشان يخفّ انسداد مناخيرك.",
        "en": "breathe in steam to ease a blocked nose – try sitting in the bathroom with a hot shower running",
        "src": "nhs:common-cold"
      }
    ],
    "dont": [
      {
        "t": "ماتخلّيش الأطفال يستنشقوا بخار من طبق ميّه سخنة، عشان ممكن يتلسعوا.",
        "en": "do not let children breathe in steam from a bowl of hot water because of the risk of scalding",
        "src": "nhs:common-cold"
      },
      {
        "t": "ماتديش أسبرين لطفل سنّه أقل من ١٦ سنة.",
        "en": "do not give aspirin to children under the age of 16",
        "src": "nhs:common-cold"
      },
      {
        "t": "ماتدخّنش، عشان التدخين ممكن يزوّد أعراضك.",
        "en": "do not smoke as it can make your symptoms worse",
        "src": "nhs:common-cold"
      },
      {
        "t": "ماتشاركش الفوط أو حاجات البيت، زي الكوبايات أو لعب الأطفال، مع حد عنده نزلة برد.",
        "en": "not sharing towels or household items (like cups or children's toys) with someone who has a cold",
        "src": "nhs:common-cold"
      },
      {
        "t": "ماتلمسش عينيك أو مناخيرك لو ممكن تكون لمست الفيروس.",
        "en": "not touching your eyes or nose in case you've come into contact with the virus",
        "src": "nhs:common-cold"
      }
    ],
    "whenWhy": {
      "ar": "السوايل بتساعدك تتفادى الجفاف، والميّه بالملح أو الليمون بالعسل ممكن يهدّوا وجع الزور. البخار ممكن يخفّ انسداد مناخيرك، والتدخين ممكن يزوّد الأعراض.",
      "en": ""
    },
    "how": {
      "ar": "مثال بسيط: ريّح جسمك، خلي الميّه جنبك، وكُل أكل صحي. لو زورك بيوجعك جرّب ليمون بعسل سخن، ولو مناخيرك مسدودة اقعد في الحمّام والدُش السخن شغّال.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ميّه",
        "why": "عشان تشرب سوايل وتتجنب الجفاف"
      },
      {
        "item": "ملح",
        "why": "للغرغرة بميّه وملح وتهدئة وجع الزور، ومش مناسب للأطفال"
      }
    ],
    "tech": [
      "اكتب على موبايلك إمتى بدأت الأعراض",
      "سجّل بقالك كام يوم حرارتك عالية"
    ],
    "writeDown": [
      "إمتى بدأت أعراض نزلة البرد وهل بتسوء",
      "هل حرارتك العالية عدّت ٣ أيام",
      "هل الأعراض اتحسّنت بعد ١٠ أيام"
    ],
    "videosCommunities": [
      {
        "label": "Common cold",
        "url": "https://www.nhs.uk/conditions/common-cold/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده نزلة برد، ساعده يرتاح ويشرب سوايل، وماتشاركوش الفوط أو الكوبايات أو حاجات البيت.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«أنا محتاج أرتاح وأشرب سوايل، ومن فضلك ماتستخدمش الفوطة أو الكوباية بتاعتي.»"
      ],
      "toSelf": [
        "«هرتاح، هشرب ميّه، وهتابع لو الأعراض بتسوء.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلّم بهدوء وبشكل مباشر، وخلي حاجاتك الشخصية منفصلة عن حاجات اللي حواليك.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب وقت للراحة وتقول للي حواليك إنك مش هتشارك الفوط أو الكوبايات أو حاجات البيت.",
      "en": ""
    },
    "variations": [
      "لو طفلك صغير: شهيته ممكن تقل كام يوم، والغرغرة بميّه وملح مش مناسبة للأطفال.",
      "لو الطفل أقل من ١٦ سنة: ماتديهوش أسبرين.",
      "لو مناعتك ضعيفة، زي لو بتاخد علاج كيماوي، انتبه لأعراض نزلة البرد."
    ],
    "prevention": [
      "ماتشاركش الفوط أو حاجات البيت، زي الكوبايات أو لعب الأطفال، مع حد عنده نزلة برد.",
      "ماتلمسش عينيك أو مناخيرك لو ممكن تكون لمست الفيروس."
    ],
    "drill": {
      "ar": "احفظها ببساطة: راحة، سوايل، أكل صحي، ومتابعة لو الأعراض بتسوء أو بتطوّل.",
      "en": ""
    },
    "after": {
      "ar": "تابع أعراضك: لو بتسوء، أو ماتحسّنتش بعد ١٠ أيام، أو حرارتك عالية لأكتر من ٣ أيام، ماتتجاهلش العلامة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Common cold",
        "url": "https://www.nhs.uk/conditions/common-cold/",
        "srcId": "nhs:common-cold",
        "sha256": "eaddce4b60",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "headaches",
    "title": {
      "ar": "الصداع",
      "en": "Headaches"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "عندك صداع؟ اشرب ميّه، ريّح نفسك، وخفّف التوتر وإجهاد عينك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "جرّبت تتعامل مع الصداع بنفسك ومش بيتحسن أو بيزيد.",
        "en": "you've tried treating a headache yourself and it's not getting better or is getting worse",
        "src": "nhs:headaches"
      },
      {
        "t": "إنت أو طفل عنده صداع ومعاه مشكلة في النظر أو العين.",
        "en": "you or a child has a headache and vision or eye problems",
        "src": "nhs:headaches"
      },
      {
        "t": "عندك تنميل أو ضعف في جسمك أو وشّك.",
        "en": "has numbness or weakness in the body or face",
        "src": "nhs:headaches"
      },
      {
        "t": "الصداع بدأ فجأة ووجعه شديد جدًا.",
        "en": "it started suddenly and is extremely painful",
        "src": "nhs:headaches"
      },
      {
        "t": "حاسس بنعاس أو تشوّش.",
        "en": "are drowsy or confused",
        "src": "nhs:headaches"
      }
    ],
    "do": [
      {
        "t": "اشرب ميّه كتير.",
        "en": "drink plenty of water",
        "src": "nhs:headaches"
      },
      {
        "t": "لو عندك برد أو إنفلونزا كمان، خد كفايتك من الراحة.",
        "en": "get plenty of rest if you also have a cold or the flu",
        "src": "nhs:headaches"
      },
      {
        "t": "حاول تسترخي، عشان التوتر ممكن يزوّد الصداع.",
        "en": "try to relax – stress can make headaches worse",
        "src": "nhs:headaches"
      },
      {
        "t": "خد باراسيتامول أو إيبوبروفين.",
        "en": "take paracetamol or ibuprofen",
        "src": "nhs:headaches"
      },
      {
        "t": "لو حرارتك عالية كمان، أو مش قادر تعمل نشاطك العادي، حاول تفضل في البيت وتبعد عن الناس.",
        "en": "try to stay at home and avoid contact with other people if you also have a high temperature or you do not feel well enough to do your normal activities",
        "src": "nhs:headaches"
      }
    ],
    "dont": [
      {
        "t": "ماتفوّتش الوجبات، حتى لو مش نفسك تاكل حاجة.",
        "en": "do not skip meals (even if you might not feel like eating anything)",
        "src": "nhs:headaches"
      },
      {
        "t": "ماتنمش أكتر من عادتك، عشان ده ممكن يزوّد الصداع.",
        "en": "do not sleep more than you usually would – it can make the headache worse",
        "src": "nhs:headaches"
      },
      {
        "t": "ماتجهدش عينك وقت طويل، زي إنك تفضل باصص لشاشة.",
        "en": "do not strain your eyes for a long time – for example, by looking at a screen",
        "src": "nhs:headaches"
      },
      {
        "t": "ماتشربش كحول.",
        "en": "do not drink alcohol",
        "src": "nhs:headaches"
      }
    ],
    "whenWhy": {
      "ar": "التوتر، والنوم أكتر من عادتك، وإجهاد عينك وقت طويل ممكن يزوّدوا الصداع.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: عندك صداع. تشرب ميّه، تحاول تسترخي، وتبعد عن الشاشة بدل ما تجهد عينك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "باراسيتامول أو إيبوبروفين",
        "why": "للصداع"
      }
    ],
    "tech": [
      "قلّل وقتك قدّام الشاشة عشان ماتجهدش عينك وقت طويل"
    ],
    "writeDown": [
      "اكتب هل الصداع بيتحسن ولا بيزيد"
    ],
    "videosCommunities": [
      {
        "label": "Headaches",
        "url": "https://www.nhs.uk/symptoms/headaches/"
      }
    ],
    "othersPOV": {
      "ar": "لو طفل عنده صداع ومشكلة في النظر أو العين، ماتتجاهلش العلامة دي.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«عندي صداع بدأ فجأة ووجعه شديد جدًا.»"
      ],
      "toSelf": [
        "«هشرب ميّه، أريح عيني، وأشوف الصداع بيتحسن ولا بيزيد.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم ببساطة ووضّح إذا كنت نعسان أو مشوّش.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك توضّح إن الصداع مش بيتحسن أو إنه بيزيد.",
      "en": ""
    },
    "variations": [
      "لو مع الصداع حرارة عالية أو مش قادر تعمل نشاطك العادي: حاول تفضل في البيت وتبعد عن الناس.",
      "لو إنت أو طفل عنده صداع ومشكلة في النظر أو العين: دي علامة مهمة."
    ],
    "prevention": [
      "ماتفوّتش الوجبات، وماتجهدش عينك وقت طويل، وماتشربش كحول."
    ],
    "drill": {
      "ar": "افتكرها ببساطة: ميّه، راحة، واسترخاء؛ وراقب هل الصداع بيتحسن ولا بيزيد.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما تجرّب تتعامل مع الصداع، لاحظ هل بيتحسن ولا بيزيد.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Headaches",
        "url": "https://www.nhs.uk/symptoms/headaches/",
        "srcId": "nhs:headaches",
        "sha256": "f3994873be",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "toothache",
    "title": {
      "ar": "وجع السنان",
      "en": "Toothache"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "سنّك وجعاك ومحتاج تهدّي الوجع مؤقتًا وتنتبه للعلامات اللي محتاجة مساعدة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "وجع السنان مكمل معاك أكتر من ٢ يوم.",
        "en": "that lasts more than 2 days",
        "src": "nhs:toothache"
      },
      {
        "t": "الوجع مش بيروح لما تاخد مسكن.",
        "en": "that does not go away when you take painkillers",
        "src": "nhs:toothache"
      },
      {
        "t": "عندك حرارة عالية، أو وجع وإنت بتعض، أو لثتك حمرا، أو طعم وحش في بقك.",
        "en": "with a high temperature, pain when you bite, red gums, or a bad taste in your mouth",
        "src": "nhs:toothache"
      },
      {
        "t": "خدّك أو فكّك وارم.",
        "en": "and your cheek or jaw is swollen",
        "src": "nhs:toothache"
      },
      {
        "t": "ورم في بقك أو رقبتك مصعّب عليك النفس أو البلع أو الكلام.",
        "en": "swelling in your mouth or neck is making it difficult for you to breathe, swallow or speak",
        "src": "nhs:toothache"
      }
    ],
    "do": [
      {
        "t": "خد مسكن زي إيبوبروفين أو باراسيتامول، واسأل الصيدلي يساعدك؛ ولو سنك أقل من ١٦ سنة ماتاخدش أسبرين.",
        "en": "take painkillers, like ibuprofen or paracetamol (children under 16 should not take aspirin) – a pharmacist can advise you",
        "src": "nhs:toothache"
      },
      {
        "t": "استخدم جل مسكن للفم من الصيدلية أو السوبرماركت.",
        "en": "use a pain-relieving gel for your mouth – this can be bought from pharmacies or supermarkets",
        "src": "nhs:toothache"
      },
      {
        "t": "جرّب تتمضمض بميّه وملح؛ لو إنت طفل ماتعملش الخطوة دي.",
        "en": "try rinsing your mouth with salt water (children should not try this)",
        "src": "nhs:toothache"
      },
      {
        "t": "كُل أكل طري زي الزبادي أو البيض المخفوق، وحاول ماتمضغش بالسن اللي وجعاك.",
        "en": "eat soft foods, like yoghurt or scrambled eggs, and try to avoid chewing with the sore tooth",
        "src": "nhs:toothache"
      },
      {
        "t": "استخدم فرشة سنان ناعمة، وابعد عن خيط السنان حوالين السن اللي وجعاك.",
        "en": "use a soft toothbrush and avoid flossing around the sore tooth",
        "src": "nhs:toothache"
      }
    ],
    "dont": [
      {
        "t": "ماتاكلش أكل مسكّر، أو سخن قوي، أو ساقع قوي.",
        "en": "do not eat foods that are sweet, very hot or very cold",
        "src": "nhs:toothache"
      },
      {
        "t": "ماتدخنش؛ التدخين ممكن يزوّد بعض مشاكل السنان.",
        "en": "do not smoke – it can make some dental problems worse",
        "src": "nhs:toothache"
      }
    ],
    "whenWhy": {
      "ar": "الأكل الطري والمضغ بعيد عن السن الواجعة بيساعدوك تتعامل مع الوجع، والتدخين ممكن يزوّد بعض مشاكل السنان.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: سنّك وجعاك، فتختار أكل طري، تمضغ بالناحية التانية، تستخدم فرشة ناعمة، وتتابع مدة الوجع والعلامات اللي معاه.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جل مسكن للفم وفرشة سنان ناعمة",
        "why": "الجل لتسكين الوجع، والفرشة الناعمة لتنضيف سنانك بعيد عن الخيط حوالين السن الواجعة"
      }
    ],
    "tech": [
      "خد مسكن زي إيبوبروفين أو باراسيتامول، واسأل الصيدلي يساعدك؛ ولو سنك أقل من ١٦ سنة ماتاخدش أسبرين."
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل عدى ٢ يوم، وإيه العلامات اللي معاه"
    ],
    "videosCommunities": [
      {
        "label": "Toothache",
        "url": "https://www.nhs.uk/symptoms/toothache/"
      }
    ],
    "othersPOV": {
      "ar": "قول للي حواليك إن سنّك وجعاك ومحتاج أكل طري وماتمضغش بالسن الواجعة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«سنّي وجعاني؛ هآكل حاجة طرية ومش همضغ بالناحية دي.»"
      ],
      "toSelf": [
        "«ههدّي الوجع وأتابع مدته والعلامات اللي معاه.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بوضوح عن مكان الوجع والعلامات اللي حاسس بيها.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة لما الوجع يطوّل أو تظهر علامة من علامات الخطر.",
      "en": ""
    },
    "variations": [
      "لو سنك أقل من ١٦ سنة: ماتاخدش أسبرين.",
      "لو إنت طفل: ماتجرّبش المضمضة بميّه وملح."
    ],
    "prevention": [
      "ماتاكلش أكل مسكّر، أو سخن قوي، أو ساقع قوي.",
      "ماتدخنش؛ التدخين ممكن يزوّد بعض مشاكل السنان."
    ],
    "drill": {
      "ar": "افتكرها: مسكن مناسب، أكل طري، فرشة ناعمة، وماتمضغش بالسن الواجعة.",
      "en": ""
    },
    "after": {
      "ar": "تابع مدة الوجع؛ لو عدى ٢ يوم أو مش بيروح مع المسكن، ماتتجاهلش العلامة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Toothache",
        "url": "https://www.nhs.uk/symptoms/toothache/",
        "srcId": "nhs:toothache",
        "sha256": "27c61fcf49",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bloating",
    "title": {
      "ar": "انتفاخ البطن",
      "en": "Bloating"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت",
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "حاسس إن بطنك منفوخة؟ جرّب حركة منتظمة، ميّه، ووجبات أصغر، وراقب علامات الخطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عندك انتفاخ ووزنك بيقل من غير ما تقصد.",
        "en": "you have bloating and unintentional weight loss",
        "src": "nhs:bloating"
      },
      {
        "t": "عندك انتفاخ وفيه دم في البراز.",
        "en": "you have bloating and also have blood in your poo",
        "src": "nhs:bloating"
      },
      {
        "t": "مش قادر تتبوّل، أو تعمل حمّام، أو تطلّع ريح.",
        "en": "you cannot pee, poo or fart",
        "src": "nhs:bloating"
      },
      {
        "t": "عندك وجع بطن شديد بدأ فجأة جدًا.",
        "en": "you have a stomach ache that is severe and came on very suddenly",
        "src": "nhs:bloating"
      },
      {
        "t": "بترجّع دم، أو الترجيع شكله زي البن المطحون.",
        "en": "you're vomiting blood or your vomit looks like ground coffee",
        "src": "nhs:bloating"
      }
    ],
    "do": [
      {
        "t": "اتحرّك بانتظام عشان تساعد هضمك وتقلّل الانتفاخ؛ والحركة ممكن تساعدك وإنت حاسس بيه.",
        "en": "exercise regularly to improve your digestion and help prevent bloating – exercise can also help when you're feeling bloated",
        "src": "nhs:bloating"
      },
      {
        "t": "امضغ وبقّك مقفول عشان ماتبلعش هوا.",
        "en": "chew with your mouth closed to avoid swallowing air",
        "src": "nhs:bloating"
      },
      {
        "t": "اشرب ميّه كتير.",
        "en": "drink plenty of water",
        "src": "nhs:bloating"
      },
      {
        "t": "لو عندك إمساك، كُل أكل فيه ألياف قابلة للذوبان، زي الشوفان أو بذور الكتان.",
        "en": "eat foods high in soluble fibre if constipated, such as oats or linseed",
        "src": "nhs:bloating"
      },
      {
        "t": "كُل وجبات أصغر على مرات أكتر بدل الوجبات الكبيرة.",
        "en": "eat smaller, more frequent meals instead of large meals",
        "src": "nhs:bloating"
      },
      {
        "t": "دلّك بطنك من اليمين للشمال عشان تساعد الريح المحبوسة تطلع.",
        "en": "massage your stomach from right to left to release trapped wind",
        "src": "nhs:bloating"
      }
    ],
    "dont": [
      {
        "t": "ماتكترش من المشروبات الغازية أو الكحول، ولا الكافيين في القهوة والشاي.",
        "en": "do not drink lots of fizzy drinks, alcohol or caffeine in coffee and tea",
        "src": "nhs:bloating"
      },
      {
        "t": "ماتكترش من الأكل المعروف إنه بيعمل غازات، زي الكرنب أو الفول أو العدس.",
        "en": "do not eat lots of foods that are known to cause gas, like cabbage, beans or lentils",
        "src": "nhs:bloating"
      },
      {
        "t": "ماتاكلش وجبات كبيرة بالليل قبل النوم، وماتقعدش مكوّر ضهرك وإنت بتاكل.",
        "en": "do not eat large meals late at night before bed or slouch when eating",
        "src": "nhs:bloating"
      },
      {
        "t": "ماتكترش من الأكل المصنّع أو المسكّر أو الحار أو الدسم.",
        "en": "do not eat lots of processed, sugary, spicy or fatty foods",
        "src": "nhs:bloating"
      },
      {
        "t": "لو عندك عدم تحمّل لأكل معيّن، ماتاكلوش.",
        "en": "do not eat food you are intolerant to, if you have a food intolerance",
        "src": "nhs:bloating"
      }
    ],
    "whenWhy": {
      "ar": "الوجبات الأصغر، الحركة المنتظمة، الميّه، والمضغ وبقّك مقفول خطوات بسيطة تساعدك مع الانتفاخ. ولو عندك إمساك، ركّز على الألياف القابلة للذوبان.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بطنك منفوخة بعد الأكل. في الوجبة الجاية صغّر الكمية، امضغ وبقّك مقفول، اشرب ميّه، واتحرّك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "شوفان أو بذور كتان",
        "why": "اختيار فيه ألياف قابلة للذوبان لو عندك إمساك"
      }
    ],
    "tech": [
      "اكتب في ملاحظات موبايلك الأكل اللي إنت عارف إنك مش بتستحمله",
      "اعمل تذكير بسيط بالميّه والحركة"
    ],
    "writeDown": [
      "إمتى بتحس بالانتفاخ",
      "الأكل اللي إنت عارف إنك مش بتستحمله",
      "لو ظهر فقدان وزن من غير قصد أو دم في البراز"
    ],
    "videosCommunities": [
      {
        "label": "Bloating",
        "url": "https://www.nhs.uk/symptoms/bloating/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد قال لك إن بطنه منفوخة، اسمعه وساعده يصغّر الوجبة ويختار ميّه وحركة من غير لوم.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هآكل كمية أصغر، وهشرب ميّه، وهتحرّك شوية.»"
      ],
      "toSelf": [
        "«هامضغ وبقّي مقفول، ومش هكتر من الوجبة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد وظهرك معتدل وإنت بتاكل، وخلي حركتك منتظمة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك ترفض أكل إنت عارف إنك مش بتستحمله، وتختار وجبة أصغر.",
      "en": ""
    },
    "variations": [
      "لو عندك إمساك: اختار أكل فيه ألياف قابلة للذوبان، زي الشوفان أو بذور الكتان.",
      "لو عندك عدم تحمّل لأكل معيّن: ماتاكلوش."
    ],
    "prevention": [
      "اتحرّك بانتظام، وكُل وجبات أصغر على مرات أكتر، وامضغ وبقّك مقفول."
    ],
    "drill": {
      "ar": "افتكرها ببساطة: وجبة أصغر · ميّه · مضغ وبقّك مقفول · حركة.",
      "en": ""
    },
    "after": {
      "ar": "بعد ما تجرّب الخطوات، دوّن إمتى حسّيت بالانتفاخ وإيه اللي عملته.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Bloating",
        "url": "https://www.nhs.uk/symptoms/bloating/",
        "srcId": "nhs:bloating",
        "sha256": "84575d5a1c",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "labyrinthitis",
    "title": {
      "ar": "التهاب تيه الأذن",
      "en": "Labyrinthitis"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو حاسس بدوخة شديدة، اثبت في أوضة ضلمة وقلّل النور والدوشة. ولو بترجّع، اشرب ميّه بكميات صغيرة وعلى فترات قريبة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو أعراض التهاب تيه الأذن أو التهاب عصب الاتزان ماتحسّنتش بعد كام يوم، أو بتسوء.",
        "en": "you have symptoms of labyrinthitis or vestibular neuritis that do not get better after a few days or are getting worse",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "لو اتشخّصت بالتهاب تيه الأذن أو التهاب عصب الاتزان، والأعراض ماتحسّنتش خلال أسبوع من بداية العلاج.",
        "en": "you've been diagnosed with labyrinthitis or vestibular neuritis and your symptoms have not improved within a week of starting treatment",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "لو فقدت السمع فجأة في ودن واحدة.",
        "en": "you have sudden hearing loss in 1 ear",
        "src": "nhs:labyrinthitis"
      }
    ],
    "do": [
      {
        "t": "لو الدوخة شديدة، اتمدّد من غير حركة في أوضة ضلمة.",
        "en": "lie still in a dark room if you feel very dizzy",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "لو بترجّع، اشرب ميّه كتير بس بكميات صغيرة وعلى فترات قريبة.",
        "en": "drink plenty of water if you're being sick – it's best to drink little and often",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "حاول تبعد عن الدوشة والنور القوي.",
        "en": "try to avoid noise and bright lights",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "حاول تنام كفاية، لأن التعب ممكن يزوّد الأعراض.",
        "en": "try to get enough sleep – tiredness can make symptoms worse",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "ابدأ تتمشّى برّه في أقرب وقت تقدر عليه؛ وممكن يساعدك يكون معاك حد يسنّدك لحد ما تثق في حركتك.",
        "en": "start to go for walks outside as soon as possible – it may help to have someone with you to steady you until you become confident",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "وإنت برّه، ثبّت نظرك على حاجة ثابتة بدل ما تفضل تبص حواليك طول الوقت.",
        "en": "when you're out and about, keep your eyes focused on a fixed object, rather than looking around all the time",
        "src": "nhs:labyrinthitis"
      }
    ],
    "dont": [
      {
        "t": "ماتسوقش، وماتركبش عجلة، وماتستخدمش عِدد أو ماكينات وإنت حاسس بدوخة.",
        "en": "do not drive, cycle or use tools or machinery if you feel dizzy",
        "src": "nhs:labyrinthitis"
      },
      {
        "t": "ماتشربش كحول، لأنه ممكن يزوّد الأعراض.",
        "en": "do not drink alcohol – it can make symptoms worse",
        "src": "nhs:labyrinthitis"
      }
    ],
    "whenWhy": {
      "ar": "الثبات في أوضة ضلمة وتقليل الدوشة والنور بيساعدك وقت الدوخة الشديدة. والنوم مهم لأن التعب ممكن يزوّد الأعراض.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: حسّيت بدوخة شديدة. تتمدّد من غير حركة في أوضة ضلمة، تقلّل الدوشة والنور، ولو بترجّع تشرب ميّه شوية شوية.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ميّه",
        "why": "لو بترجّع، اشرب منها كميات صغيرة وعلى فترات قريبة"
      }
    ],
    "tech": [
      "قلّل سطوع الشاشة لو نورها قوي",
      "ثبّت نظرك على حاجة ثابتة وإنت برّه"
    ],
    "writeDown": [
      "هل الأعراض بتتحسّن بعد كام يوم ولا بتسوء",
      "لو بدأت علاج: هل الأعراض اتحسّنت خلال أسبوع"
    ],
    "videosCommunities": [
      {
        "label": "Labyrinthitis and vestibular neuritis",
        "url": "https://www.nhs.uk/conditions/labyrinthitis/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده دوخة وبدأ يمشي برّه، ممكن يساعده إنك تمشي معاه وتسنّده لحد ما يبقى واثق في حركته.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«امشِ معايا واسندني لحد ما أبقى واثق في حركتي.»"
      ],
      "toSelf": [
        "«هاثبت، أقلّل النور والدوشة، وأثبّت نظري على حاجة واحدة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك على قد ثقتك في حركتك؛ وممكن يساعدك يكون معاك حد يسنّدك في المشي برّه لحد ما تبقى واثق.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب من حد يمشي معاك؛ وجوده ممكن يساعدك لحد ما تبقى واثق في حركتك.",
      "en": ""
    },
    "variations": [
      "لو الدوخة شديدة: اتمدّد من غير حركة في أوضة ضلمة.",
      "لو بترجّع: اشرب ميّه شوية شوية وعلى فترات قريبة.",
      "لو هتتمشّى برّه: ممكن يساعدك يكون معاك حد يسنّدك لحد ما تثق في حركتك."
    ],
    "prevention": [
      "نام كفاية، لأن التعب ممكن يزوّد الأعراض.",
      "ابعد عن الكحول، لأنه ممكن يزوّد الأعراض."
    ],
    "drill": {
      "ar": "افتكرها: اثبت في الضلمة، قلّل النور والدوشة، ولو بترجّع اشرب ميّه شوية شوية.",
      "en": ""
    },
    "after": {
      "ar": "ابدأ تتمشّى برّه في أقرب وقت تقدر عليه؛ وممكن يساعدك يكون معاك حد يسنّدك لحد ما تثق في حركتك. وإنت برّه ثبّت نظرك على حاجة ثابتة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Labyrinthitis and vestibular neuritis",
        "url": "https://www.nhs.uk/conditions/labyrinthitis/",
        "srcId": "nhs:labyrinthitis",
        "sha256": "312e677a4f",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "dental-abscess",
    "title": {
      "ar": "خُراج الأسنان",
      "en": "Dental abscess"
    },
    "level": 3,
    "who": [
      "أي حد فاكر إن عنده خُراج في سنانه"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو فاكر إن عندك خُراج في سنانك، أو عندك تورّم كبير في بقّك أو صعب تفتح بقّك، خُد العلامات دي بجد.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو إنت فاكر إن عندك خُراج في سنانك.",
        "en": "you think you have a dental abscess",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "لو إنت مش عارف تتنفّس أو تتكلم أو تبلع بسهولة.",
        "en": "are finding it hard to breathe, speak or swallow",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "لو عينك ورمت أو وجعتك، أو فجأة بقيت شايف بصعوبة.",
        "en": "have a swollen or painful eye, or suddenly start having problems with your eyesight",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "لو عندك تورّم كبير في بقّك.",
        "en": "have a lot of swelling in your mouth",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "لو إنت مش عارف تفتح بقّك بسهولة.",
        "en": "are finding it hard to open your mouth",
        "src": "nhs:dental-abscess"
      }
    ],
    "do": [
      {
        "t": "خُد مسكّن زي إيبوبروفين أو باراسيتامول، وخلي بالك: لو سنّك أقل من ١٦ سنة ماتاخدش أسبرين.",
        "en": "take painkillers, such as ibuprofen or paracetamol (children under 16 should not take aspirin)",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "كُل أكل طري زي الشوربة أو البيض المخفوق أو البطاطس المهروسة أو الزبادي.",
        "en": "eat soft foods like soup, scrambled eggs, mashed potatoes and yoghurt",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "نضّف سنانك بفرشة ناعمة.",
        "en": "use a soft toothbrush to clean your teeth",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "ابعد عن الأكل أو الشرب السخن قوي أو الساقع قوي.",
        "en": "avoid having food or drink that is very hot or cold",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "اغسل سنانك بمعجون فيه فلورايد مرتين على الأقل كل يوم؛ ابصق بعد الغسيل وماتشطفش بقّك.",
        "en": "brush your teeth with fluoride toothpaste at least twice a day – spit after brushing, do not rinse",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "نضّف بين سنانك كل يوم بخيط الأسنان أو فرش بين الأسنان.",
        "en": "clean between your teeth every day using floss or interdental brushes",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "غيّر فرشة سنانك كل ٢ لـ٣ شهور.",
        "en": "replace your toothbrush every 2 to 3 months",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "اعمل كشف أسنان بانتظام عشان المشاكل تتلاحظ بدري.",
        "en": "have regular dental check-ups so problems can be spotted early",
        "src": "nhs:dental-abscess"
      }
    ],
    "dont": [
      {
        "t": "ماتاخدش أكتر من الجرعة الموصى بيها لأي مسكّن؛ الجرعة الأعلى مش هتخليه يشتغل أحسن وممكن تبقى خطيرة جدًا.",
        "en": "do not take more than the recommended dose of any painkiller – taking a higher dose will not make them work better, but it can be very dangerous",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "ماتستخدمش غسول الفم بعد ما تغسل سنانك على طول.",
        "en": "do not use mouthwash straight after brushing your teeth",
        "src": "nhs:dental-abscess"
      },
      {
        "t": "ماتدخنش.",
        "en": "do not smoke",
        "src": "nhs:dental-abscess"
      }
    ],
    "whenWhy": {
      "ar": "الجرعة الأعلى من أي مسكّن مش هتخليه يشتغل أحسن، وممكن تبقى خطيرة جدًا. وبعد غسيل سنانك، ابصق وماتشطفش بقّك أو تستخدم غسول الفم على طول.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: سنانك مضايقاك وإنت فاكر إن عندك خُراج. تختار أكل طري، تبعد عن السخن قوي والساقع قوي، وتنضّف سنانك بفرشة ناعمة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرشة سنان ناعمة",
        "why": "عشان تنضّف سنانك بفرشة ناعمة"
      },
      {
        "item": "معجون أسنان فيه فلورايد",
        "why": "عشان تغسل سنانك بيه مرتين على الأقل كل يوم"
      },
      {
        "item": "خيط أسنان أو فرش بين الأسنان",
        "why": "عشان تنضّف بين سنانك كل يوم"
      }
    ],
    "tech": [
      "اعمل تذكير تغيّر فرشة سنانك كل ٢ لـ٣ شهور"
    ],
    "writeDown": [
      "اسم المسكّن والجرعة الموصى بيها",
      "هل التنفّس أو الكلام أو البلع أو فتح البق بقوا صعبين"
    ],
    "videosCommunities": [
      {
        "label": "Dental abscess",
        "url": "https://www.nhs.uk/conditions/dental-abscess/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد حد، قرّب له أكل طري وخليه بعيد عن الأكل والشرب السخن قوي أو الساقع قوي.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«محتاج أكل طري، ومن غير حاجة سخنة قوي أو ساقعة قوي.»"
      ],
      "toSelf": [
        "«هاخد الجرعة الموصى بيها بس، وهنضّف سناني بفرشة ناعمة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتكلم بشكل مباشر، ووضّح لو التنفّس أو الكلام أو البلع أو فتح بقّك بقوا صعبين.",
      "en": ""
    },
    "rights": {
      "ar": "قول بوضوح إنك فاكر إن عندك خُراج في سنانك، واذكر أي تورّم أو صعوبة عندك.",
      "en": ""
    },
    "variations": [
      "لو سنّك أقل من ١٦ سنة: ماتاخدش أسبرين.",
      "لو عينك ورمت أو وجعتك، أو نظرك اتغيّر فجأة: ماتتجاهلش العلامة دي."
    ],
    "prevention": [
      "اغسل سنانك بمعجون فيه فلورايد مرتين على الأقل كل يوم؛ ابصق وماتشطفش بقّك.",
      "نضّف بين سنانك كل يوم بخيط الأسنان أو فرش بين الأسنان.",
      "غيّر فرشة سنانك كل ٢ لـ٣ شهور.",
      "اعمل كشف أسنان بانتظام عشان المشاكل تتلاحظ بدري.",
      "ماتدخنش."
    ],
    "drill": {
      "ar": "افتكرها كده: أكل طري، فرشة ناعمة، وبُعد عن السخن قوي والساقع قوي.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تنظيف سنانك بمعجون فيه فلورايد مرتين على الأقل كل يوم، ونضّف بينها كل يوم، واعمل كشف أسنان بانتظام.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Dental abscess",
        "url": "https://www.nhs.uk/conditions/dental-abscess/",
        "srcId": "nhs:dental-abscess",
        "sha256": "8060cc6aca",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "vertigo",
    "title": {
      "ar": "دوخة دوران",
      "en": "Vertigo"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو حاسس إن الدنيا بتلف، اقعد فورًا وحرّك راسك بالراحة. ولو هتقوم من السرير، قوم ببطء واقعد شوية على طرفه قبل ما تقف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الدوخة معاها صداع شديد.",
        "en": "have a severe headache",
        "src": "nhs:vertigo"
      },
      {
        "t": "لو بترجّع أو حاسس بغثيان شديد.",
        "en": "are being sick or feel very sick",
        "src": "nhs:vertigo"
      },
      {
        "t": "لو شايف صورتين أو نظرك راح.",
        "en": "double vision or loss of vision",
        "src": "nhs:vertigo"
      },
      {
        "t": "لو الكلام بقى صعب.",
        "en": "trouble speaking",
        "src": "nhs:vertigo"
      },
      {
        "t": "لو دراعك أو رجلك فيهم ضعف أو تنميل أو وخز.",
        "en": "leg or arm weakness, numbness or tingling",
        "src": "nhs:vertigo"
      }
    ],
    "do": [
      {
        "t": "اتمدّد من غير حركة في أوضة هادية وضلمة عشان تقلّل إحساس اللف.",
        "en": "lie still in a quiet, dark room to reduce the spinning feeling",
        "src": "nhs:vertigo"
      },
      {
        "t": "حرّك راسك بالراحة وببطء وإنت بتعمل حاجاتك اليومية.",
        "en": "move your head carefully and slowly during daily activities",
        "src": "nhs:vertigo"
      },
      {
        "t": "اقعد فورًا أول ما تحس بالدوخة.",
        "en": "sit down straight away when you feel dizzy",
        "src": "nhs:vertigo"
      },
      {
        "t": "ولّع النور لو قمت بالليل.",
        "en": "turn on the lights if you get up at night",
        "src": "nhs:vertigo"
      },
      {
        "t": "استخدم عصاية لو إنت معرّض تقع.",
        "en": "use a walking stick if you're at risk of falling",
        "src": "nhs:vertigo"
      },
      {
        "t": "نام وراسك مرفوعة شوية على ٢ مخدة أو أكتر.",
        "en": "sleep with your head slightly raised on 2 or more pillows",
        "src": "nhs:vertigo"
      },
      {
        "t": "قوم من السرير بالراحة، واقعد شوية على طرفه قبل ما تقف.",
        "en": "get out of bed slowly and sit on the edge of the bed for a while before standing up",
        "src": "nhs:vertigo"
      }
    ],
    "dont": [
      {
        "t": "ماتوطّيش عشان تجيب حاجة من الأرض؛ انزل قرفصة بدل كده.",
        "en": "do not bend over to pick things up – squat to lower yourself instead",
        "src": "nhs:vertigo"
      },
      {
        "t": "ماتمدّش رقبتك، زي وإنت بتحاول توصل لرف عالي.",
        "en": "do not stretch your neck – for example, while reaching up to a high shelf",
        "src": "nhs:vertigo"
      }
    ],
    "whenWhy": {
      "ar": "وقت إحساس اللف، الثبات في أوضة هادية وضلمة ممكن يقلّله. والقعدة فورًا والحركة البطيئة هما الخطوات اللي تعملهم وقت الدوخة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: حسّيت إن الدنيا بتلف وإنت واقف. اقعد فورًا، حرّك راسك ببطء، ولما تقوم اتحرّك بالراحة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "عصاية للمشي لو محتاجها",
        "why": "استخدمها لو إنت معرّض تقع"
      }
    ],
    "tech": [
      "ولّع نور المكان قبل ما تتحرّك بالليل"
    ],
    "writeDown": [
      "هل الدوخة معاها صداع شديد أو تغيّر في النظر أو الكلام أو حركة دراعك ورجلك"
    ],
    "videosCommunities": [
      {
        "label": "Vertigo",
        "url": "https://www.nhs.uk/conditions/vertigo/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد حاسس إن الدنيا بتلف، ساعده يقعد فورًا وخليه يحرّك راسه بالراحة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ساعدني أقعد، وخلي النور مولّع.»"
      ],
      "toSelf": [
        "«هقعد فورًا، وأحرّك راسي بالراحة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حرّك راسك ببطء، ولما تقوم من السرير اقعد شوية على طرفه قبل ما تقف.",
      "en": ""
    },
    "rights": {
      "ar": "لو إنت معرّض تقع، استخدم عصاية.",
      "en": ""
    },
    "variations": [
      "لو الدوخة بدأت وإنت واقف: اقعد فورًا.",
      "لو قمت بالليل: ولّع النور قبل ما تتحرّك.",
      "لو هتقوم من السرير: اقعد شوية على طرفه الأول."
    ],
    "prevention": [
      "استخدم عصاية لو إنت معرّض تقع.",
      "ماتوطّيش تجيب حاجة؛ انزل قرفصة بدل كده."
    ],
    "drill": {
      "ar": "افتكرها: اقعد فورًا، حرّك راسك ببطء، وقوم بالراحة.",
      "en": ""
    },
    "after": {
      "ar": "نام وراسك مرفوعة شوية على ٢ مخدة أو أكتر، وقوم من السرير بالراحة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Vertigo",
        "url": "https://www.nhs.uk/conditions/vertigo/",
        "srcId": "nhs:vertigo",
        "sha256": "ef7c35b4b0",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "ingrown-toenail",
    "title": {
      "ar": "ضفر داخل في الجلد",
      "en": "Ingrown toenail"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو ضفر رجلك داخل في الجلد، انقع رجلك في ميّه دافية بملح، وبعدها خلّيها ناشفة باقي اليوم والبس جزمة واسعة ومريحة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو العلاج في البيت مش بيساعد.",
        "en": "treating your ingrown toenail at home is not helping",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "لو صباعك بيوجعك ووارم وبيطلع منه صديد.",
        "en": "your toe is painful and swollen with pus coming out of it",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "لو حرارتك عالية جدًا، أو حاسس بسخونية أو برد أو رعشة.",
        "en": "you have a very high temperature, or you feel hot, cold or shivery",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "لو عندك سكر وضفر داخل في الجلد؛ مشاكل الرجل ممكن تبقى أخطر مع السكر.",
        "en": "you have diabetes and an ingrown toenail – foot problems can be more serious if you have diabetes",
        "src": "nhs:ingrown-toenail"
      }
    ],
    "do": [
      {
        "t": "انقع رجلك في ميّه دافية بملح عشان تطرّي الجلد حوالين الصباع وتقلّل فرصة العدوى.",
        "en": "soak your foot in warm, salty water to help soften the skin around your toe and reduce the chances of infection",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "خلّي رجلك ناشفة باقي اليوم.",
        "en": "keep your foot dry for the rest of the day",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "البس جزمة واسعة ومريحة أو صندل.",
        "en": "wear wide, comfortable shoes or sandals",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "خد باراسيتامول أو إيبوبروفين عشان تخفّف الوجع.",
        "en": "take paracetamol or ibuprofen to ease the pain",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "قص الضفر بالعرض على خط مستقيم، مش من الجوانب.",
        "en": "cut straight across the nail, not the edges",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "خلّي رجلك نضيفة ونشّفها كويس.",
        "en": "keep your feet clean and dry them thoroughly",
        "src": "nhs:ingrown-toenail"
      }
    ],
    "dont": [
      {
        "t": "ماتقصّش ضفر الصباع المصاب؛ سيبه يطول ويطلع.",
        "en": "do not cut your toenail – leave it to grow out",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "ماتنقّرش في صباعك أو ضفرك.",
        "en": "do not pick at your toe or toenail",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "ماتلبسش جزمة ضيقة ومقدّمتها مدببة.",
        "en": "do not wear tight, pointy shoes",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "ماتقصّش ضوافر رجلك قصيرة زيادة.",
        "en": "do not cut your toenails too short",
        "src": "nhs:ingrown-toenail"
      },
      {
        "t": "ماتلبسش جزمة ضيقة زيادة أو مقاسها مش مظبوط.",
        "en": "do not wear shoes that are too tight or do not fit properly",
        "src": "nhs:ingrown-toenail"
      }
    ],
    "whenWhy": {
      "ar": "الميّه الدافية بملح بتساعد تطرّي الجلد حوالين الصباع وتقلّل فرصة العدوى. وبعدها خلّي رجلك ناشفة باقي اليوم.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: الضفر داخل في الجلد. انقع رجلك، نشّفها كويس، والبس جزمة واسعة بدل الجزمة الضيقة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جزمة واسعة ومريحة أو صندل",
        "why": "عشان ماتضغطش على الصباع"
      }
    ],
    "tech": [
      "اختار جزمة واسعة ومريحة أو صندل، وابعد عن الجزمة الضيقة"
    ],
    "writeDown": [
      "هل العلاج في البيت بيساعد، وهل فيه وجع أو ورم أو صديد أو حرارة عالية"
    ],
    "videosCommunities": [
      {
        "label": "Ingrown toenail",
        "url": "https://www.nhs.uk/conditions/ingrown-toenail/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده ضفر داخل في الجلد، ساعده يختار جزمة واسعة وماينقّرش في الصباع أو الضفر.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي جزمة واسعة ومريحة بدل الجزمة الضيقة.»"
      ],
      "toSelf": [
        "«هسيب الضفر يطول، ومش هنقّر فيه.»"
      ]
    },
    "bodyLanguage": {
      "ar": "سيب الصباع من غير نقر أو ضغط، والبس حاجة واسعة ومريحة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة لو العلاج في البيت مش بيساعد أو لو الصباع وارم وبيطلع صديد.",
      "en": ""
    },
    "variations": [
      "لو هتنقع رجلك: استخدم ميّه دافية بملح، وبعدها نشّفها كويس.",
      "لو هتلبس: اختار جزمة واسعة ومريحة أو صندل.",
      "لو عندك سكر: ماتتجاهلش ضفر داخل في الجلد."
    ],
    "prevention": [
      "قص الضفر بالعرض على خط مستقيم، مش من الجوانب.",
      "خلّي رجلك نضيفة ونشّفها كويس.",
      "ماتقصّش ضوافر رجلك قصيرة زيادة."
    ],
    "drill": {
      "ar": "افتكرها: انقع، نشّف، والبس واسع؛ ماتقصّش الضفر المصاب وماتنقّرش فيه.",
      "en": ""
    },
    "after": {
      "ar": "خلّي رجلك ناشفة باقي اليوم، وسيب الضفر المصاب يطول ويطلع.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Ingrown toenail",
        "url": "https://www.nhs.uk/conditions/ingrown-toenail/",
        "srcId": "nhs:ingrown-toenail",
        "sha256": "c20f4fa113",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "atopic-eczema",
    "title": {
      "ar": "الإكزيما التأتبية",
      "en": "Atopic eczema"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك إكزيما تأتبية، ابعد عن الحاجات اللي بتزوّدها، وحط مرطّب طبي على جلدك على الأقل ٢ مرة في اليوم حتى لو اتحسّنت.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو العلاج مش بيساعد الإكزيما التأتبية.",
        "en": "treatments are not helping your atopic eczema",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "لو فيها فقاقيع أو قشرة أو بتنزل سائل أو فيها نقط مليانة صديد.",
        "en": "it's blistered, crusty, leaking fluid or has spots filled with pus",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "لو بتوجع أو وارمة أو دافية.",
        "en": "it's painful, swollen or feels warm",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "لو ساءت فجأة أو مساحتها كبرت.",
        "en": "it suddenly gets worse or gets bigger",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "لو حرارتك عالية أو حاسس إنك تعبان عمومًا.",
        "en": "you have a high temperature or feel generally unwell",
        "src": "nhs:atopic-eczema"
      }
    ],
    "do": [
      {
        "t": "ابعد عن الحاجات اللي بتزوّد الإكزيما، زي الصابون أو مسحوق الغسيل أو بعض الأقمشة أو الحيوانات الأليفة.",
        "en": "avoid things that make your eczema worse such as soap, washing detergent, some fabrics or pets",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "حط مرطّب طبي على جلدك كل ما تقدر، على الأقل ٢ مرة في اليوم؛ وكمّل ترطيب حتى لو الإكزيما اتحسّنت.",
        "en": "apply moisturising treatments (emollients) to your skin as often as possible (at least 2 times a day) – continue to moisturise even if your eczema improves",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "اغسل بمرطّب طبي بدل الصابون.",
        "en": "wash with an emollient instead of soap",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "خلّيك في جو بارد؛ الحر ممكن يزوّد حكة الإكزيما.",
        "en": "keep cool – being hot can make your eczema more itchy",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "خلّي الضوافر قصيرة، وللرضّع استخدم جوانتي مانع للخربشة عشان تقلّل ضرر الحك على الجلد.",
        "en": "keep nails short and put anti-scratch mittens on babies to help prevent damage to the skin from scratching",
        "src": "nhs:atopic-eczema"
      }
    ],
    "dont": [
      {
        "t": "ماتحكّش الإكزيما، لأن ده ممكن يزوّدها؛ لو بتحك، افرك المكان المصاب بصباعك بالراحة بدل الخربشة.",
        "en": "do not scratch your eczema, as it can make it worse – if your eczema is itchy, try gently rubbing the affected area with your finger instead",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "ماتشاركش المرطّب الطبي بتاعك مع حد تاني.",
        "en": "do not share your emollients with anyone else",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "ماتحطّش صوابعك جوّه علبة المرطّب؛ استخدم معلقة أو عبوة بمضخة بدل كده.",
        "en": "do not put your fingers into an emollient pot – use a spoon or pump dispenser instead",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "ماتستخدمش الكريم المائي، لأنه ممكن يهيّج الجلد ويزوّد الإكزيما.",
        "en": "do not use aqueous cream as it can irritate the skin and make eczema worse",
        "src": "nhs:atopic-eczema"
      },
      {
        "t": "ماتغيّرش أكلك إلا لو دكتور قالك؛ وده يشمل لو بترضّعي طفل عنده إكزيما.",
        "en": "do not change your diet unless you are told to by a doctor (this includes if you are breastfeeding a baby with eczema)",
        "src": "nhs:atopic-eczema"
      }
    ],
    "whenWhy": {
      "ar": "الحر ممكن يزوّد الحكة، والحك ممكن يزوّد الإكزيما. خلّيك في جو بارد وافرك المكان بالراحة بدل الخربشة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: الإكزيما بتحك. ماتخربش؛ افرك المكان بصباعك بالراحة، وحط المرطّب الطبي وكمّل عليه حتى لو الجلد اتحسّن.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "مرطّب طبي",
        "why": "استخدمه بدل الصابون وحطه على الجلد على الأقل ٢ مرة في اليوم"
      },
      {
        "item": "عبوة مرطّب بمضخة أو معلقة",
        "why": "عشان ماتحطّش صوابعك جوّه العلبة"
      }
    ],
    "tech": [
      "خلّي عبوة المرطّب بمضخة بدل ما تحط صوابعك جوّه العلبة"
    ],
    "writeDown": [
      "الحاجات اللي بتزوّد الإكزيما، وهل العلاج بيساعد ولا لأ"
    ],
    "videosCommunities": [
      {
        "label": "Atopic eczema",
        "url": "https://www.nhs.uk/conditions/atopic-eczema/"
      }
    ],
    "othersPOV": {
      "ar": "لو طفل عنده إكزيما، خلّي ضوافره قصيرة واستخدم له جوانتي مانع للخربشة عشان تقلّل ضرر الحك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ماتشاركش المرطّب بتاعي، وهاتلي العبوة بالمضخة.»"
      ],
      "toSelf": [
        "«مش هخربش؛ هافرك المكان بالراحة وأكمّل ترطيب.»"
      ]
    },
    "bodyLanguage": {
      "ar": "افرك المكان المصاب بصباعك بالراحة بدل الخربشة، وخلي الضوافر قصيرة.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة لو العلاج مش بيساعد أو الإكزيما ساءت فجأة.",
      "en": ""
    },
    "variations": [
      "لو الحر مزوّد الحكة: خلّيك في جو بارد.",
      "لو الإكزيما بتحك: افرك المكان بالراحة بدل الخربشة.",
      "للرضّع: خلّي الضوافر قصيرة واستخدم جوانتي مانع للخربشة."
    ],
    "prevention": [
      "ابعد عن الحاجات اللي بتزوّد الإكزيما.",
      "كمّل ترطيب حتى لو الإكزيما اتحسّنت.",
      "خلّي الضوافر قصيرة."
    ],
    "drill": {
      "ar": "افتكرها: ابعد عن المهيّجات، استخدم المرطّب، وماتخربش.",
      "en": ""
    },
    "after": {
      "ar": "كمّل ترطيب حتى لو الإكزيما اتحسّنت، وماتغيّرش أكلك إلا لو دكتور قالك.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Atopic eczema",
        "url": "https://www.nhs.uk/conditions/atopic-eczema/",
        "srcId": "nhs:atopic-eczema",
        "sha256": "f450257611",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "eye-injuries",
    "title": {
      "ar": "إصابة في العين",
      "en": "Eye injuries"
    },
    "level": 3,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو حاجة دخلت عينك، اغسلها بميّه نضيفة. ولو مادة تجميل أو منتج منزلي دخل العين، اتبع التعليمات المكتوبة على العبوة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو مادة كيميائية قوية زي منظّف الفرن أو المبيّض دخلت عينك؛ فضّل اغسلها بميّه وإنت مستني المساعدة الطبية، وخد العبوة معاك لأن معلوماتها ممكن تساعد في العلاج.",
        "en": "a strong chemical, such as oven cleaner or bleach, is in your eye – keep rinsing your eye with water while waiting for medical help, and take the container with you as the information on it may help with treatment",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "لو جسم حاد خرم عينك.",
        "en": "a sharp object has pierced your eye",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "لو حاجة خبطت عينك بسرعة عالية، زي وإنت بتستخدم عِدد كهربا أو بتقص النجيلة.",
        "en": "something has hit your eye at high speed – for example, while using power tools or mowing the lawn",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "لو حصل أي تغيّر في نظرك بعد إصابة العين.",
        "en": "there are any changes to your sight after an eye injury",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "لو عندك وجع شديد في عينك.",
        "en": "you have severe pain in your eye",
        "src": "nhs:eye-injuries"
      }
    ],
    "do": [
      {
        "t": "اغسل عينك بميّه نضيفة لو فيها حاجة.",
        "en": "wash your eye with clean water if there's something in it",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "لو مادة تجميل أو منتج منزلي دخل عينك، اتبع التعليمات المكتوبة على العبوة.",
        "en": "follow the advice on the packaging if any cosmetics or household products get in your eyes",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "خد مسكّن زي باراسيتامول أو إيبوبروفين عشان تخفّف الوجع أو الضيق.",
        "en": "take painkillers like paracetamol or ibuprofen to help ease any pain or discomfort",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "استخدم ميّه نضيفة ومش سخنة؛ ممكن من الحنفية أو الدش، أو ميّه معبأة لو إنت مش في البيت.",
        "en": "use clean water (not hot) – this can be from a tap or shower, or bottled water if you're not at home",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "خلّي عينك مفتوحة.",
        "en": "hold your eye open",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "نزّل ميّه كتير على عينك لمدة ٢٠ دقيقة على الأقل.",
        "en": "run lots of water over your eyeball for at least 20 minutes",
        "src": "nhs:eye-injuries"
      }
    ],
    "dont": [
      {
        "t": "ماتحاولش تشيل أي جسم خرم عينك.",
        "en": "do not try to remove any object that's pierced your eye",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "ماتلمسش عينك وماتفركهاش لحد ما تخف.",
        "en": "do not touch or rub your eye until it's better",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "ماتحطّش مكياج حوالين عينك لحد ما تخف.",
        "en": "do not wear make-up around your eye until it's better",
        "src": "nhs:eye-injuries"
      },
      {
        "t": "ماتلبسش عدسات لاصقة لحد ما عينك تخف.",
        "en": "do not wear contact lenses until your eye is better",
        "src": "nhs:eye-injuries"
      }
    ],
    "whenWhy": {
      "ar": "لو مادة كيميائية قوية دخلت عينك، فضّل تغسلها بميّه وإنت مستني المساعدة الطبية، وخد العبوة معاك لأن معلوماتها ممكن تساعد في العلاج.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: منتج منزلي دخل عينك. اتبع تعليمات العبوة، استخدم ميّه نضيفة ومش سخنة، افتح عينك ونزّل عليها ميّه كتير لمدة ٢٠ دقيقة على الأقل.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "ميّه معبأة لو إنت مش في البيت",
        "why": "استخدمها لغسل العين لو مفيش حنفية أو دش"
      }
    ],
    "tech": [
      "اقرأ التعليمات المكتوبة على عبوة مادة التجميل أو المنتج المنزلي"
    ],
    "writeDown": [
      "إيه اللي دخل العين، وهل حصل تغيّر في النظر أو وجع شديد"
    ],
    "videosCommunities": [
      {
        "label": "Eye injuries",
        "url": "https://www.nhs.uk/conditions/eye-injuries/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد محتاج يغسل عينه، ساعده يخليها مفتوحة وينزّل عليها ميّه نضيفة ومش سخنة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ساعدني أخلي عيني مفتوحة وأنزّل عليها ميّه.»"
      ],
      "toSelf": [
        "«مش هافرك عيني، وهاغسلها بميّه نضيفة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي عينك مفتوحة وإنت بتنزل عليها ميّه كتير، وماتلمسهاش وماتفركهاش.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة طبية لو مادة كيميائية قوية دخلت عينك أو نظرك اتغيّر أو الوجع شديد.",
      "en": ""
    },
    "variations": [
      "لو إنت في البيت: استخدم ميّه نضيفة ومش سخنة من الحنفية أو الدش.",
      "لو إنت برّه: ممكن تستخدم ميّه معبأة.",
      "لو مادة كيميائية قوية: فضّل تغسل العين وخد العبوة معاك."
    ],
    "prevention": [
      "ماتلمسش عينك وماتفركهاش لحد ما تخف.",
      "ماتلبسش عدسات لاصقة وماتحطّش مكياج حوالين العين لحد ما تخف."
    ],
    "drill": {
      "ar": "افتكرها: افتح عينك، استخدم ميّه نضيفة ومش سخنة، واغسل لمدة ٢٠ دقيقة على الأقل.",
      "en": ""
    },
    "after": {
      "ar": "ماتلبسش عدسات لاصقة وماتحطّش مكياج حوالين العين لحد ما تخف.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Eye injuries",
        "url": "https://www.nhs.uk/conditions/eye-injuries/",
        "srcId": "nhs:eye-injuries",
        "sha256": "7ea15b72a4",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "broken-toe",
    "title": {
      "ar": "صباع رجل مكسور",
      "en": "Broken toe"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو صباع رجلك مكسور، ريّح رجلك وارفعها وهي وارمة، وحط تلج ملفوف في فوطة لمدة لحد ٢٠ دقيقة كل كام ساعة في أول كام يوم.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو عندك قطع أو جرح وحش بعد إصابة الصباع.",
        "en": "you have a bad cut or wound after injuring your toe",
        "src": "nhs:broken-toe"
      },
      {
        "t": "لو وجع الصباع شديد.",
        "en": "you have severe toe pain",
        "src": "nhs:broken-toe"
      },
      {
        "t": "لو فاكر إن صباع رجلك الكبير اتكسر.",
        "en": "you think you have broken your big toe",
        "src": "nhs:broken-toe"
      },
      {
        "t": "لو الصباع مائل بزاوية غريبة.",
        "en": "your toe is pointing out at an odd angle",
        "src": "nhs:broken-toe"
      },
      {
        "t": "لو العضم طالع برّه الصباع.",
        "en": "the bone is sticking out of your toe",
        "src": "nhs:broken-toe"
      }
    ],
    "do": [
      {
        "t": "خد إيبوبروفين أو باراسيتامول للوجع والورم.",
        "en": "take ibuprofen or paracetamol for the pain and swelling",
        "src": "nhs:broken-toe"
      },
      {
        "t": "ريّح رجلك وارفعها وهي وارمة.",
        "en": "rest your foot and keep it raised while it's swollen",
        "src": "nhs:broken-toe"
      },
      {
        "t": "حط كيس تلج أو كيس بسلة مجمّدة ملفوف في فوطة على الصباع لمدة لحد ٢٠ دقيقة كل كام ساعة في أول كام يوم بعد الإصابة.",
        "en": "hold an ice pack (or a bag of frozen peas) wrapped in a towel on your toe for up to 20 minutes every few hours for the first few days after you injured your toe",
        "src": "nhs:broken-toe"
      },
      {
        "t": "البس جزمة مسطحة وواسعة ومريحة ونعلها ناشف.",
        "en": "wear wide, comfortable flat shoes with stiff soles",
        "src": "nhs:broken-toe"
      },
      {
        "t": "اربط الصباع المكسور لمدة من ٢ لـ٣ أسابيع؛ حط حتة قطن أو شاش صغيرة بين الصباع الواجع واللي جنبه، وبعدها اربطهم سوا بلاستر عشان تسند الصباع الواجع.",
        "en": "strap up your broken toe for 2 to 3 weeks – put a small piece of cotton wool or gauze between your sore toe and the toe next to it, then tape them together to support the sore toe",
        "src": "nhs:broken-toe"
      }
    ],
    "dont": [
      {
        "t": "ماتربطش الصباع لو مائل بزاوية غريبة أو لو صباع رجلك الكبير اتصاب؛ خد نصيحة طبية.",
        "en": "do not strap up your toe if it's pointing out at an odd angle or you have hurt your big toe – get medical advice",
        "src": "nhs:broken-toe"
      },
      {
        "t": "ماتحطّش التلج على جلدك على طول.",
        "en": "do not put ice directly on your skin",
        "src": "nhs:broken-toe"
      },
      {
        "t": "ماتمشيش وماتقفش وقت طويل في أول كام يوم بعد إصابة الصباع؛ ممكن يساعدك تمشي بسند أو عكازين لكام أسبوع.",
        "en": "do not walk or stand for long periods for the few first days after you injured your toe – it may help to walk with a support or crutches for a few weeks",
        "src": "nhs:broken-toe"
      },
      {
        "t": "ماتلبسش جزمة ضيقة ومقدّمتها مدببة.",
        "en": "do not wear tight, pointy shoes",
        "src": "nhs:broken-toe"
      },
      {
        "t": "ماتلعبش رياضة زي الكورة أو الرجبي أو الهوكي لمدة ٦ أسابيع أو لحد ما الوجع يخف.",
        "en": "do not play any sports like football, rugby or hockey for 6 weeks or until the pain eases",
        "src": "nhs:broken-toe"
      }
    ],
    "whenWhy": {
      "ar": "ريّح رجلك وارفعها وهي وارمة. ولو هتستخدم تلج، لفّه في فوطة وماتحطّوش على الجلد على طول.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: صباع رجلك اتصاب ووارم. ريّح رجلك وارفعها، وحط تلج ملفوف في فوطة لمدة لحد ٢٠ دقيقة كل كام ساعة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "قطن أو شاش صغير وبلاستر",
        "why": "لربط الصباع الواجع بالصباع اللي جنبه لو الصباع مش مائل وصباعك الكبير مش مصاب"
      },
      {
        "item": "جزمة مسطحة وواسعة ومريحة",
        "why": "اختار نعل ناشف"
      }
    ],
    "tech": [
      "احسب لحد ٢٠ دقيقة بس لكل مرة بتحط فيها التلج الملفوف"
    ],
    "writeDown": [
      "وقت الإصابة، وهل الصباع الكبير مصاب أو الصباع مائل أو فيه جرح أو عضم ظاهر"
    ],
    "videosCommunities": [
      {
        "label": "Broken toe",
        "url": "https://www.nhs.uk/conditions/broken-toe/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد صباعه مكسور، ساعده يريح رجله ويرفعها، وماتربطش الصباع لو مائل أو الصباع الكبير مصاب.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ساعدني أرفع رجلي، وهات فوطة ألفّ فيها التلج.»"
      ],
      "toSelf": [
        "«مش هاحط التلج على جلدي، ومش هاربط صباع مائل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ريّح رجلك وارفعها وهي وارمة، وماتمشيش أو تقف وقت طويل في أول كام يوم.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب نصيحة طبية لو الصباع مائل أو صباع رجلك الكبير اتصاب.",
      "en": ""
    },
    "variations": [
      "لو الصباع مائل أو الصباع الكبير مصاب: ماتربطوش وخد نصيحة طبية.",
      "لو هتحط تلج: لفّه في فوطة وماتعدّيش ٢٠ دقيقة.",
      "لو هتلبس: اختار جزمة مسطحة وواسعة ومريحة ونعلها ناشف."
    ],
    "prevention": [
      "ماتحطّش التلج على الجلد على طول.",
      "ماتلبسش جزمة ضيقة ومقدّمتها مدببة."
    ],
    "drill": {
      "ar": "افتكرها: ريّح وارفع، لفّ التلج، وماتربطش صباع مائل أو صباع كبير مصاب.",
      "en": ""
    },
    "after": {
      "ar": "ماتلعبش رياضة لمدة ٦ أسابيع أو لحد ما الوجع يخف، والبس جزمة مسطحة وواسعة ومريحة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Broken toe",
        "url": "https://www.nhs.uk/conditions/broken-toe/",
        "srcId": "nhs:broken-toe",
        "sha256": "a089fb27c5",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "gout",
    "title": {
      "ar": "نوبة نقرس",
      "en": "Gout"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك نوبة نقرس، خد أي دوا موصوف لك في أسرع وقت، وريّح وارفع الطرف المصاب، وبرّد المفصل بتلج ملفوف في فوطة لمدة لحد ٢٠ دقيقة كل مرة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الوجع بيزيد.",
        "en": "the pain is getting worse",
        "src": "nhs:gout"
      },
      {
        "t": "لو حرارتك عالية جدًا، أو حاسس بسخونية أو برد أو رعشة.",
        "en": "you also have a very high temperature (or you feel hot, cold or shivery)",
        "src": "nhs:gout"
      },
      {
        "t": "لو حاسس بغثيان أو مش قادر تاكل.",
        "en": "you also feel sick or cannot eat",
        "src": "nhs:gout"
      }
    ],
    "do": [
      {
        "t": "خد أي دوا موصوف لك في أسرع وقت؛ المفروض يبدأ يشتغل خلال ٢ يوم.",
        "en": "take any medicine you've been prescribed as soon as possible – it should start to work within 2 days",
        "src": "nhs:gout"
      },
      {
        "t": "ريّح وارفع الطرف المصاب.",
        "en": "rest and raise the limb",
        "src": "nhs:gout"
      },
      {
        "t": "خلّي المفصل بارد؛ حط كيس تلج أو كيس بسلة مجمّدة ملفوف في فوطة لمدة لحد ٢٠ دقيقة كل مرة.",
        "en": "keep the joint cool – apply an ice pack, or a bag of frozen peas, wrapped in a towel for up to 20 minutes at a time",
        "src": "nhs:gout"
      },
      {
        "t": "اشرب ميّه كتير، إلا لو دكتور قالك ماتعملش كده.",
        "en": "drink lots of water (unless a GP tells you not to)",
        "src": "nhs:gout"
      },
      {
        "t": "حاول تبعد غطا السرير عن المفصل المصاب بالليل.",
        "en": "try to keep bedclothes off the affected joint at night",
        "src": "nhs:gout"
      }
    ],
    "dont": [
      {
        "t": "ماتضغطش على المفصل، لأن ده ممكن يخلّي الوجع أسوأ.",
        "en": "do not put pressure on the joint – this can make the pain feel worse",
        "src": "nhs:gout"
      },
      {
        "t": "ماتكترش من المشروبات والحاجات المسكّرة.",
        "en": "do not have lots of sugary drinks and snacks",
        "src": "nhs:gout"
      }
    ],
    "whenWhy": {
      "ar": "خد الدوا الموصوف لك في أسرع وقت؛ المفروض يبدأ يشتغل خلال ٢ يوم. وماتضغطش على المفصل لأن الضغط ممكن يزوّد إحساس الوجع.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: نوبة النقرس بدأت. خد الدوا الموصوف، ريّح وارفع الطرف، وحط تلج ملفوف في فوطة لمدة لحد ٢٠ دقيقة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كيس تلج أو بسلة مجمّدة وفوطة",
        "why": "لتبريد المفصل لمدة لحد ٢٠ دقيقة كل مرة"
      }
    ],
    "tech": [
      "احسب لحد ٢٠ دقيقة بس لكل مرة بتحط فيها التلج الملفوف"
    ],
    "writeDown": [
      "هل الوجع بيزيد، وهل فيه حرارة عالية أو غثيان أو عدم قدرة على الأكل"
    ],
    "videosCommunities": [
      {
        "label": "Gout",
        "url": "https://www.nhs.uk/conditions/gout/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده نوبة نقرس، ساعده يريح ويرفع الطرف المصاب، وابعد غطا السرير عن المفصل بالليل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ساعدني أرفع الطرف المصاب وابعد الغطا عن المفصل.»"
      ],
      "toSelf": [
        "«هاخد الدوا الموصوف، ومش هاضغط على المفصل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ريّح وارفع الطرف المصاب، وماتضغطش على المفصل.",
      "en": ""
    },
    "rights": {
      "ar": "من حقك تطلب مساعدة لو الوجع بيزيد أو عندك حرارة عالية أو مش قادر تاكل.",
      "en": ""
    },
    "variations": [
      "لو هتبرّد المفصل: لفّ التلج في فوطة وماتعدّيش ٢٠ دقيقة في المرة.",
      "لو هتشرب ميّه: اشرب كتير إلا لو دكتور قالك ماتعملش كده.",
      "بالليل: حاول تبعد غطا السرير عن المفصل المصاب."
    ],
    "prevention": [
      "ماتضغطش على المفصل.",
      "ماتكترش من المشروبات والحاجات المسكّرة."
    ],
    "drill": {
      "ar": "افتكرها: الدوا الموصوف بسرعة، ريّح وارفع، وبرّد المفصل من غير ضغط.",
      "en": ""
    },
    "after": {
      "ar": "المفروض الدوا الموصوف يبدأ يشتغل خلال ٢ يوم؛ لو الوجع بيزيد، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Gout",
        "url": "https://www.nhs.uk/conditions/gout/",
        "srcId": "nhs:gout",
        "sha256": "735c3f010b",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "cold-sores",
    "title": {
      "ar": "قرح البرد",
      "en": "Cold sores"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك قرحة برد، ابعد عن الحاجات اللي بتطلّعها، واشرب سوائل كتير، واغسل إيدك بصابون وميّه كل مرة تلمسها.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو قرحة البرد مابدأتش تخف خلال ١٠ أيام.",
        "en": "a cold sore has not started to heal within 10 days",
        "src": "nhs:cold-sores"
      },
      {
        "t": "لو قلقان منها أو فاكر إنها حاجة تانية.",
        "en": "you're worried about a cold sore or think it's something else",
        "src": "nhs:cold-sores"
      },
      {
        "t": "لو قرحة البرد كبيرة جدًا أو بتوجعك.",
        "en": "the cold sore is very large or painful",
        "src": "nhs:cold-sores"
      },
      {
        "t": "لو إنت أو طفلك عندكم لثة وارمة وبتوجع مع قرح جوّه البق.",
        "en": "you or your child also have swollen, painful gums and sores in the mouth (gingivostomatitis)",
        "src": "nhs:cold-sores"
      },
      {
        "t": "لو مناعتك ضعيفة، زي بسبب العلاج الكيماوي أو السكر.",
        "en": "you have a weakened immune system – for example, because of chemotherapy or diabetes",
        "src": "nhs:cold-sores"
      }
    ],
    "do": [
      {
        "t": "ابعد عن أي حاجة بتطلّعلك قرح البرد، زي جلسات التسمير الصناعي.",
        "en": "avoid anything that triggers your cold sores, such as sunbeds",
        "src": "nhs:cold-sores"
      },
      {
        "t": "لو إنت برّه في الشمس، استخدم مرطّب شفايف واقي من الشمس بمعامل حماية ١٥ أو أعلى.",
        "en": "use sunblock lip balm (SPF 15 or above) if you're outside in the sun",
        "src": "nhs:cold-sores"
      },
      {
        "t": "خد باراسيتامول أو إيبوبروفين عشان تخفّف الوجع والورم؛ الباراسيتامول السائل متاح للأطفال، وماتديش أسبرين لطفل أقل من ١٦ سنة.",
        "en": "take paracetamol or ibuprofen to ease pain and swelling (liquid paracetamol is available for children) – do not give aspirin to children under 16",
        "src": "nhs:cold-sores"
      },
      {
        "t": "اشرب سوائل كتير عشان تتجنب الجفاف.",
        "en": "drink plenty of fluids to avoid dehydration",
        "src": "nhs:cold-sores"
      },
      {
        "t": "اغسل إيدك بصابون وميّه كل مرة تلمس قرحة البرد.",
        "en": "wash your hands with soap and water whenever you touch your cold sore",
        "src": "nhs:cold-sores"
      }
    ],
    "dont": [
      {
        "t": "ماتبوسش حد وإنت عندك قرحة برد.",
        "en": "do not kiss anyone while you have a cold sore",
        "src": "nhs:cold-sores"
      },
      {
        "t": "ماتمارسش جنس فموي لحد ما قرحة البرد تخف تمامًا، عشان ممكن تنقل لشريكك هربس تناسلي.",
        "en": "do not have oral sex until your cold sore completely heals as you could give your partner genital herpes",
        "src": "nhs:cold-sores"
      },
      {
        "t": "ماتلمسش قرحة البرد غير وإنت بتحط كريم مضاد للفيروسات؛ ولو لمستها اغسل إيدك قبل وبعد.",
        "en": "do not touch your cold sore (apart from applying antiviral cream) – and if you do wash your hands before and after",
        "src": "nhs:cold-sores"
      },
      {
        "t": "ماتفركش الكريم جوّه قرحة البرد؛ حطّه بالطبطبة بدل كده.",
        "en": "do not rub cream into the cold sore – dab it on instead",
        "src": "nhs:cold-sores"
      },
      {
        "t": "ماتاكلش أكل حامض أو مالح لو بيخلّي قرحة البرد أسوأ.",
        "en": "do not eat acidic or salty food if it makes your cold sore feel worse",
        "src": "nhs:cold-sores"
      }
    ],
    "whenWhy": {
      "ar": "قرحة البرد ممكن تنتقل لحد تاني؛ ماتلمسهاش غير وإنت بتحط الكريم، واغسل إيدك قبل وبعد.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: هتحط كريم على قرحة البرد. اغسل إيدك، حط الكريم بالطبطبة من غير فرك، واغسل إيدك تاني.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "مرطّب شفايف واقي من الشمس بمعامل حماية ١٥ أو أعلى",
        "why": "استخدمه لو إنت برّه في الشمس"
      }
    ],
    "tech": [
      "لو بتحط كريم مضاد للفيروسات، حطّه بالطبطبة وماتفركوش"
    ],
    "writeDown": [
      "هل القرحة بدأت تخف خلال ١٠ أيام، وهل كبيرة أو مؤلمة"
    ],
    "videosCommunities": [
      {
        "label": "Cold sores",
        "url": "https://www.nhs.uk/conditions/cold-sores/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده قرحة برد، ماتطلبش منه يبوس حد، وفكّره يغسل إيده كل مرة يلمسها.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«عندي قرحة برد، فمش هابوس حد لحد ما تخف.»"
      ],
      "toSelf": [
        "«هاغسل إيدي قبل وبعد، وهحط الكريم بالطبطبة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ماتلمسش القرحة غير وإنت بتحط الكريم، وماتفركش الكريم فيها.",
      "en": ""
    },
    "rights": {
      "ar": "لو القرحة كبيرة جدًا أو مؤلمة أو مابدأتش تخف خلال ١٠ أيام، اطلب مساعدة.",
      "en": ""
    },
    "variations": [
      "لو هتخرج في الشمس: استخدم مرطّب شفايف بمعامل حماية ١٥ أو أعلى.",
      "لو لمست القرحة: اغسل إيدك قبل وبعد.",
      "لو الأكل الحامض أو المالح بيزوّدها: ماتاكلوش."
    ],
    "prevention": [
      "اغسل إيدك كل مرة تلمس القرحة.",
      "ماتبوسش حد وماتمارسش جنس فموي لحد ما تخف تمامًا."
    ],
    "drill": {
      "ar": "افتكرها: اغسل إيدك، ماتلمسش، والطبطبة بدل الفرك.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تتجنب البوس والجنس الفموي لحد ما قرحة البرد تخف تمامًا.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Cold sores",
        "url": "https://www.nhs.uk/conditions/cold-sores/",
        "srcId": "nhs:cold-sores",
        "sha256": "0c14f3bf74",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "blisters",
    "title": {
      "ar": "فقاقيع الجلد",
      "en": "Blisters"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك فقاعة في الجلد، خلّيها نضيفة على قد ما تقدر، واغسل الجلد بالراحة ونشّفه بالطبطبة، وبعدها غطّيها ببلاستر طري أو غيار مبطّن.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الفقاعة بتوجع جدًا أو بتتكرر.",
        "en": "a blister is very painful or keeps coming back",
        "src": "nhs:blisters"
      },
      {
        "t": "لو الجلد شكله ملتهب؛ دافي والفقاعة مليانة صديد أخضر أو أصفر.",
        "en": "the skin looks infected – it's hot and the blister is filled with green or yellow pus",
        "src": "nhs:blisters"
      },
      {
        "t": "لو الفقاعة في مكان مش معتاد، زي الجفن أو البق أو الأعضاء التناسلية.",
        "en": "a blister is in an unusual place – such as your eyelids, mouth or genitals",
        "src": "nhs:blisters"
      },
      {
        "t": "لو ظهر كذا فقاعة من غير سبب.",
        "en": "several blisters have appeared for no reason",
        "src": "nhs:blisters"
      },
      {
        "t": "لو الفقاعة سببها حرق أو سلق أو حرق شمس أو حساسية.",
        "en": "a blister was caused by a burn or scald, sunburn, or an allergic reaction",
        "src": "nhs:blisters"
      }
    ],
    "do": [
      {
        "t": "خلّي الفقاعة نضيفة على قد ما تقدر؛ اغسل الجلد بالراحة ونشّفه بالطبطبة.",
        "en": "keep the blister as clean as possible – gently wash the skin and pat it dry",
        "src": "nhs:blisters"
      },
      {
        "t": "غطّي الفقاعة ببلاستر طري أو غيار مبطّن.",
        "en": "cover blisters with a soft plaster or padded dressing",
        "src": "nhs:blisters"
      },
      {
        "t": "اغسل إيدك قبل ما تلمس فقاعة مفتوحة.",
        "en": "wash your hands before touching a burst blister",
        "src": "nhs:blisters"
      },
      {
        "t": "سيب السائل ينزل من الفقاعة المفتوحة قبل ما تغطّيها ببلاستر أو غيار.",
        "en": "allow the fluid in a burst blister to drain before covering it with a plaster or dressing",
        "src": "nhs:blisters"
      },
      {
        "t": "البس جزمة مريحة ومقاسها مظبوط.",
        "en": "wear comfortable, well-fitting shoes",
        "src": "nhs:blisters"
      }
    ],
    "dont": [
      {
        "t": "ماتفتحش الفقاعة بنفسك.",
        "en": "do not burst a blister yourself",
        "src": "nhs:blisters"
      },
      {
        "t": "ماتقشّرش الجلد اللي فوق الفقاعة المفتوحة.",
        "en": "do not peel the skin off a burst blister",
        "src": "nhs:blisters"
      },
      {
        "t": "ماتنقّرش في أطراف الجلد اللي باقي.",
        "en": "do not pick at the edges of the remaining skin",
        "src": "nhs:blisters"
      },
      {
        "t": "ماتلبسش الجزمة وماتستخدمش المعدّة اللي سببت الفقاعة لحد ما تخف.",
        "en": "do not wear the shoes or use the equipment that caused your blister until it heals",
        "src": "nhs:blisters"
      }
    ],
    "whenWhy": {
      "ar": "خلّي الفقاعة نضيفة وغطّيها، وماتفتحهاش أو تقشّر الجلد بنفسك.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: الفقاعة فتحت. اغسل إيدك، سيب السائل ينزل، وبعدها غطّيها ببلاستر طري أو غيار مبطّن.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "بلاستر طري أو غيار مبطّن",
        "why": "لتغطية الفقاعة"
      }
    ],
    "tech": [
      "اختار جزمة مريحة ومقاسها مظبوط"
    ],
    "writeDown": [
      "هل الفقاعة بتتكرر، وهل فيها صديد أخضر أو أصفر أو ظهرت من غير سبب"
    ],
    "videosCommunities": [
      {
        "label": "Blisters",
        "url": "https://www.nhs.uk/conditions/blisters/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده فقاعة مفتوحة، فكّره يغسل إيده قبل ما يلمسها ومايقشّرش الجلد.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي بلاستر طري، وماتفتحش الفقاعة.»"
      ],
      "toSelf": [
        "«هاغسل إيدي، أسيب السائل ينزل، وبعدها أغطّيها.»"
      ]
    },
    "bodyLanguage": {
      "ar": "المس الفقاعة بالراحة بعد ما تغسل إيدك، وماتنقّرش في الجلد.",
      "en": ""
    },
    "rights": {
      "ar": "لو الفقاعة بتوجع جدًا أو بتتكرر أو شكلها ملتهب، اطلب مساعدة.",
      "en": ""
    },
    "variations": [
      "لو الفقاعة مقفولة: خلّيها نضيفة وغطّيها.",
      "لو الفقاعة فتحت: اغسل إيدك وسيب السائل ينزل قبل التغطية.",
      "لو الجزمة هي السبب: ماتلبسهاش لحد ما الفقاعة تخف."
    ],
    "prevention": [
      "البس جزمة مريحة ومقاسها مظبوط.",
      "ماتستخدمش الجزمة أو المعدّة اللي سببت الفقاعة لحد ما تخف."
    ],
    "drill": {
      "ar": "افتكرها: نضّف، سيبها، وغطّي؛ ماتفتحش وماتقشّرش.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تغطية الفقاعة، وماترجعش للجزمة أو المعدّة اللي سببتها لحد ما تخف.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Blisters",
        "url": "https://www.nhs.uk/conditions/blisters/",
        "srcId": "nhs:blisters",
        "sha256": "63d69dd864",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "corns-calluses",
    "title": {
      "ar": "مسامير وكالو الجلد",
      "en": "Corns and calluses"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك مسمار أو كالو، انقعه في ميّه دافية عشان يطرى، والبس شراب مبطّن وجزمة واسعة ومريحة بكعب واطي ونعل طري.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو عندك سكر.",
        "en": "you have diabetes",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "لو عندك مرض في القلب أو مشكلة في الدورة الدموية.",
        "en": "you have heart disease or problems with your circulation",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "لو بينزف أو بيطلع منه صديد أو إفرازات.",
        "en": "it bleeds, or has any pus or discharge",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "لو ماتحسّنش بعد علاجه في البيت لمدة ٣ أسابيع.",
        "en": "it has not improved after treating it at home for 3 weeks",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "لو الوجع شديد أو مانعك تعمل نشاطك العادي.",
        "en": "the pain is severe or stopping you doing your normal activities",
        "src": "nhs:corns-calluses"
      }
    ],
    "do": [
      {
        "t": "البس شراب تخين ومبطّن.",
        "en": "wear thick, cushioned socks",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "البس جزمة واسعة ومريحة بكعب واطي ونعل طري وماتحتكّش بجلدك.",
        "en": "wear wide, comfortable shoes with a low heel and soft sole that do not rub",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "استخدم فرش طري أو وسادة للكعب جوّه الجزمة.",
        "en": "use soft insoles or heel pads in your shoes",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "انقع المسمار أو الكالو في ميّه دافية عشان يطرى.",
        "en": "soak corns and calluses in warm water to soften them",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "استخدم حجر خفاف أو مبرد رجل بانتظام عشان تشيل الجلد الناشف.",
        "en": "regularly use a pumice stone or foot file to remove hard skin",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "استخدم مرطّب عشان تساعد الجلد يفضل طري.",
        "en": "moisturise to help keep skin soft",
        "src": "nhs:corns-calluses"
      }
    ],
    "dont": [
      {
        "t": "ماتحاولش تقطع المسمار أو الكالو بنفسك.",
        "en": "do not try to cut off corns or calluses yourself",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "ماتمشيش مسافات طويلة وماتقفش وقت طويل.",
        "en": "do not walk long distances or stand for long periods",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومقدّمتها مدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:corns-calluses"
      },
      {
        "t": "ماتمشيش حافي.",
        "en": "do not go barefoot",
        "src": "nhs:corns-calluses"
      }
    ],
    "whenWhy": {
      "ar": "الميّه الدافية بتطرّي المسمار والكالو، والمرطّب بيساعد الجلد يفضل طري.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: عندك كالو ناشف. انقعه في ميّه دافية، استخدم حجر خفاف أو مبرد رجل، وبعدها حط مرطّب.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "شراب تخين ومبطّن",
        "why": "البسه مع جزمة واسعة ومريحة"
      },
      {
        "item": "فرش طري أو وسادة للكعب",
        "why": "حطّها جوّه الجزمة"
      },
      {
        "item": "حجر خفاف أو مبرد رجل ومرطّب",
        "why": "لإزالة الجلد الناشف ومساعدة الجلد يفضل طري"
      }
    ],
    "tech": [
      "اختار جزمة واسعة بكعب واطي ونعل طري وماتحتكّش بجلدك"
    ],
    "writeDown": [
      "هل اتحسّن بعد ٣ أسابيع، وهل فيه نزيف أو صديد أو إفرازات"
    ],
    "videosCommunities": [
      {
        "label": "Corns and calluses",
        "url": "https://www.nhs.uk/conditions/corns-and-calluses/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده مسمار أو كالو، ماتشجّعوش يقطعه بنفسه؛ ساعده يختار جزمة واسعة ومريحة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي جزمة واسعة وشراب مبطّن، وماتقطعش الكالو.»"
      ],
      "toSelf": [
        "«هأنقعه وأرطّبه، ومش هاقطعه بنفسي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "قلّل المشي لمسافات طويلة والوقوف وقت طويل، وماتمشيش حافي.",
      "en": ""
    },
    "rights": {
      "ar": "لو عندك سكر أو مشكلة في القلب أو الدورة الدموية، ماتعالجش المسمار أو الكالو بنفسك واطلب مساعدة.",
      "en": ""
    },
    "variations": [
      "لو الجلد ناشف: انقعه في ميّه دافية واستخدم مرطّب.",
      "لو الجزمة بتحتكّ: اختار جزمة واسعة ونعلها طري.",
      "لو عندك سكر أو مشكلة في الدورة الدموية: ماتحاولش تعالجه بنفسك."
    ],
    "prevention": [
      "البس شراب مبطّن وجزمة واسعة ومريحة.",
      "ماتمشيش حافي وماتلبسش كعب عالي أو جزمة ضيقة."
    ],
    "drill": {
      "ar": "افتكرها: انقع، ابرد بالراحة، ورطّب؛ ماتقطعش بنفسك.",
      "en": ""
    },
    "after": {
      "ar": "تابع هل اتحسّن خلال ٣ أسابيع، وكمّل على الجزمة الواسعة والشراب المبطّن.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Corns and calluses",
        "url": "https://www.nhs.uk/conditions/corns-and-calluses/",
        "srcId": "nhs:corns-calluses",
        "sha256": "1f82909a84",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "broken-bruised-ribs",
    "title": {
      "ar": "ضلع مكسور أو متخبط",
      "en": "Broken or bruised ribs"
    },
    "level": 3,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو ضلعك مكسور أو متخبط، ريّح وخد وقت من الشغل لو محتاج، وحط تلج أو بسلة مجمّدة ملفوفة في فوطة على الضلع في أول كام يوم.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الوجع ماتحسّنش خلال كام أسبوع.",
        "en": "your pain has not improved within a few weeks",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "لو بتكح مخاط أصفر أو أخضر.",
        "en": "you're coughing up yellow or green mucus",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "لو حرارتك عالية جدًا، أو حاسس بسخونية أو برد أو رعشة.",
        "en": "you have a very high temperature, or feel hot, cold or shivery",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "لو ضيق النفس بيزيد.",
        "en": "you have shortness of breath that's getting worse",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "لو بتكح دم.",
        "en": "you're coughing up blood",
        "src": "nhs:broken-bruised-ribs"
      }
    ],
    "do": [
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers, such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "حط كيس تلج أو كيس بسلة مجمّدة ملفوف في فوطة على الضلع المصاب بانتظام في أول كام يوم عشان تقلّل الورم.",
        "en": "hold an ice pack (or a bag of frozen peas) wrapped in a tea towel to the affected ribs regularly in the first few days to bring down swelling",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "ريّح وخد وقت من الشغل لو محتاج.",
        "en": "rest and take time off work if you need to",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "اتنفّس طبيعي واكح لما تحتاج؛ ده بيساعد يطلع المخاط من الرئة ويمنع عدوى الصدر.",
        "en": "breathe normally and cough when you need to – this helps clear mucus from your lungs to prevent chest infections",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "اسند مخدة على صدرك لو محتاج تكح.",
        "en": "hold a pillow against your chest if you need to cough",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "اتمشّى وحرّك كتافك من وقت للتاني عشان تساعد نفسك تتنفّس وتطلع المخاط من الرئة.",
        "en": "walk around and sometimes move your shoulders to help you breathe and clear mucus from your lungs",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "خد نفس بطيء وعميق بانتظام عشان تساعد تنضّف رئتك.",
        "en": "regularly take slow, deep breaths to help clear your lungs",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "حاول تنام ورأسك وجسمك مرفوعين أكتر في أول كام ليلة.",
        "en": "try to sleep more upright for the first few nights",
        "src": "nhs:broken-bruised-ribs"
      }
    ],
    "dont": [
      {
        "t": "ماتفضلش متمدّد أو ثابت وقت طويل.",
        "en": "do not lie down or stay still for a long time",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "ماتجهدش نفسك وماتشيلش حاجات تقيلة.",
        "en": "do not strain yourself or lift heavy objects",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "ماتلعبش رياضة وماتعملش تمرين بيزوّد الوجع.",
        "en": "do not play any sports or do any exercise that makes your pain worse",
        "src": "nhs:broken-bruised-ribs"
      },
      {
        "t": "ماتدخنش.",
        "en": "do not smoke",
        "src": "nhs:broken-bruised-ribs"
      }
    ],
    "whenWhy": {
      "ar": "التنفّس الطبيعي والكحة وقت ما تحتاج بيساعدوا يطلعوا المخاط من الرئة ويمنعوا عدوى الصدر.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: محتاج تكح والضلع بيوجعك. اسند مخدة على صدرك، واتنفّس طبيعي واكح لما تحتاج.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كيس تلج أو بسلة مجمّدة وفوطة",
        "why": "حطّهم على الضلع المصاب في أول كام يوم عشان تقلّل الورم"
      },
      {
        "item": "مخدة",
        "why": "اسندها على صدرك لو محتاج تكح"
      }
    ],
    "tech": [
      "افتكر تاخد نفس بطيء وعميق بانتظام"
    ],
    "writeDown": [
      "هل الوجع اتحسّن خلال كام أسبوع، وهل فيه مخاط أصفر أو أخضر أو ضيق نفس بيزيد أو كحة بدم"
    ],
    "videosCommunities": [
      {
        "label": "Broken or bruised ribs",
        "url": "https://www.nhs.uk/conditions/broken-or-bruised-ribs/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد ضلعه مكسور أو متخبط، ساعده يسند مخدة على صدره وقت الكحة ومايشيلش حاجات تقيلة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي مخدة أسندها على صدري وأنا بكح.»"
      ],
      "toSelf": [
        "«هاتنفّس طبيعي، أتحرّك، ومش هافضل ثابت وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتمشّى وحرّك كتافك من وقت للتاني، وحاول تنام مرفوع أكتر في أول كام ليلة.",
      "en": ""
    },
    "rights": {
      "ar": "لو محتاج، خد وقت من الشغل عشان ترتاح.",
      "en": ""
    },
    "variations": [
      "لو محتاج تكح: اسند مخدة على صدرك.",
      "لو هتنام: حاول تنام مرفوع أكتر في أول كام ليلة.",
      "لو الحركة أو الرياضة بتزوّد الوجع: ماتعملهاش."
    ],
    "prevention": [
      "ماتدخنش.",
      "ماتفضلش ثابت وقت طويل، وخد نفس بطيء وعميق بانتظام."
    ],
    "drill": {
      "ar": "افتكرها: نفس طبيعي، كحة وقت اللزوم، مخدة على الصدر، وحركة من وقت للتاني.",
      "en": ""
    },
    "after": {
      "ar": "كمّل تمشي وتحرك كتافك وتاخد نفس بطيء وعميق، وتابع لو الوجع ماتحسّنش خلال كام أسبوع.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Broken or bruised ribs",
        "url": "https://www.nhs.uk/conditions/broken-or-bruised-ribs/",
        "srcId": "nhs:broken-bruised-ribs",
        "sha256": "9743c88e74",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "dry-mouth",
    "title": {
      "ar": "جفاف البق",
      "en": "Dry mouth"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو بقك ناشف، اشرب ميّه ساقعة كتير على رشفات منتظمة طول اليوم، وحط ميّه جنب السرير بالليل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو جفاف البق مصعّب عليك الكلام أو الأكل.",
        "en": "it makes it difficult when talking or eating",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "لو بقك لسه ناشف بعد ما جرّبت علاج البيت أو الصيدلية لكام أسبوع.",
        "en": "your mouth is still dry after trying home or pharmacy treatments for a few weeks",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "لو مش قادر تاكل بانتظام.",
        "en": "you're struggling to eat regularly",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "لو بقك بيوجعك أو أحمر أو وارم أو بينزف.",
        "en": "your mouth is painful, red, swollen or bleeding",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "لو عندك بقع بيضا بتوجع جوّه بقك.",
        "en": "you have sore white patches in your mouth",
        "src": "nhs:dry-mouth"
      }
    ],
    "do": [
      {
        "t": "اشرب ميّه ساقعة كتير؛ خد رشفات منتظمة طول اليوم، وحط ميّه جنب السرير بالليل.",
        "en": "drink plenty of cold water – take regular sips during the day and keep some water by your bed at night",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "مص مكعبات تلج أو آيس لولي.",
        "en": "suck on ice cubes or ice lollies",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "اشرب مشروبات ساقعة من غير سكر على رشفات.",
        "en": "sip on cold unsweetened drinks",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "امضغ لبان من غير سكر أو مص حلوى من غير سكر.",
        "en": "chew sugar-free gum or suck on sugar-free sweets",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "استخدم مرطّب شفايف لو شفايفك ناشفة كمان.",
        "en": "use lip balm if your lips are also dry",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "اغسل سنانك مرتين في اليوم واستخدم غسول بق من غير كحول؛ جفاف البق بيزوّد احتمال تسوس الأسنان.",
        "en": "brush your teeth twice a day and use alcohol-free mouthwash – you're more likely to get tooth decay if you have a dry mouth",
        "src": "nhs:dry-mouth"
      }
    ],
    "dont": [
      {
        "t": "ماتكترش من الكحول أو الكافيين زي الشاي والقهوة أو المشروبات الغازية.",
        "en": "do not drink lots of alcohol, caffeine (such as tea and coffee) or fizzy drinks",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "ماتاكلش أكل حامض زي الليمون، أو حراق، أو مالح، أو مسكّر.",
        "en": "do not eat foods that are acidic (like lemons), spicy, salty or sugary",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "ماتدخنش.",
        "en": "do not smoke",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "ماتنامش وإنت لابس طقم الأسنان.",
        "en": "do not sleep with dentures in",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "ماتستخدمش بديل لعاب صناعي حامضي لو عندك سنانك الطبيعية.",
        "en": "do not use acidic artificial saliva products if you have your own teeth",
        "src": "nhs:dry-mouth"
      },
      {
        "t": "ماتوقفش دوا موصوف لك من غير ما تاخد نصيحة طبية الأول، حتى لو فاكر إنه مسبب الأعراض.",
        "en": "do not stop taking a prescribed medicine without getting medical advice first – even if you think it might be causing your symptoms",
        "src": "nhs:dry-mouth"
      }
    ],
    "whenWhy": {
      "ar": "اشرب رشفات منتظمة طول اليوم، واستخدم مشروبات وحلوى من غير سكر. وماتوقفش دوا موصوف من نفسك.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بقك ناشف طول اليوم. خد رشفات ميّه ساقعة بانتظام، وامضغ لبان من غير سكر، وحط ميّه جنب السرير بالليل.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "لبان أو حلوى من غير سكر",
        "why": "امضغ اللبان أو مص الحلوى"
      },
      {
        "item": "مرطّب شفايف",
        "why": "استخدمه لو شفايفك ناشفة"
      },
      {
        "item": "غسول بق من غير كحول",
        "why": "استخدمه مع غسيل السنان مرتين في اليوم"
      }
    ],
    "tech": [
      "حط ميّه جنب السرير بالليل عشان تاخد رشفات"
    ],
    "writeDown": [
      "هل الجفاف مصعّب الكلام أو الأكل، وهل مستمر بعد علاج البيت أو الصيدلية لكام أسبوع"
    ],
    "videosCommunities": [
      {
        "label": "Dry mouth",
        "url": "https://www.nhs.uk/symptoms/dry-mouth/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد بقّه ناشف، ساعده يوفّر ميّه ساقعة ومشروبات من غير سكر، وماتطلبش منه يوقف دوا موصوف من نفسه.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي ميّه ساقعة ولبان من غير سكر.»"
      ],
      "toSelf": [
        "«هاخد رشفات بانتظام، ومش هوقف الدوا من نفسي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خد رشفات صغيرة ومنتظمة، وخلّي الميّه جنبك بالليل.",
      "en": ""
    },
    "rights": {
      "ar": "لو الجفاف مصعّب الكلام أو الأكل أو لسه مستمر بعد كام أسبوع، اطلب مساعدة.",
      "en": ""
    },
    "variations": [
      "بالنهار: خد رشفات ميّه ساقعة بانتظام.",
      "بالليل: حط ميّه جنب السرير.",
      "لو شفايفك ناشفة: استخدم مرطّب شفايف."
    ],
    "prevention": [
      "اغسل سنانك مرتين في اليوم واستخدم غسول من غير كحول.",
      "ماتدخنش وماتكترش من الكحول أو الكافيين أو المشروبات الغازية."
    ],
    "drill": {
      "ar": "افتكرها: رشفات ميّه، من غير سكر، ومن غير كحول في غسول البق.",
      "en": ""
    },
    "after": {
      "ar": "لو بقك لسه ناشف بعد علاج البيت أو الصيدلية لكام أسبوع، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Dry mouth",
        "url": "https://www.nhs.uk/symptoms/dry-mouth/",
        "srcId": "nhs:dry-mouth",
        "sha256": "94ee759c63",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bad-breath",
    "title": {
      "ar": "ريحة بق وحشة",
      "en": "Bad breath"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو ريحة بقك وحشة، اغسل سنانك ولثتك بالراحة مرتين في اليوم على الأقل لمدة ٢ دقيقة، ونضّف لسانك مرة في اليوم.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو ريحة البق مابتروحش بعد ما عالجتها بنفسك لكام أسبوع.",
        "en": "bad breath that does not go away after treating it yourself for a few weeks",
        "src": "nhs:bad-breath"
      },
      {
        "t": "لو اللثة بتوجعك أو بتنـزف أو وارمة.",
        "en": "painful, bleeding or swollen gums",
        "src": "nhs:bad-breath"
      },
      {
        "t": "لو عندك وجع سنان أو سنان دائمة بتتحرك.",
        "en": "toothache or wobbly adult teeth",
        "src": "nhs:bad-breath"
      },
      {
        "t": "لو عندك مشاكل في طقم الأسنان.",
        "en": "problems with your dentures",
        "src": "nhs:bad-breath"
      }
    ],
    "do": [
      {
        "t": "اغسل سنانك ولثتك بالراحة مرتين في اليوم على الأقل لمدة ٢ دقيقة.",
        "en": "gently brush your teeth and gums at least twice a day for 2 minutes",
        "src": "nhs:bad-breath"
      },
      {
        "t": "استخدم معجون سنان فيه فلورايد.",
        "en": "use a fluoride toothpaste",
        "src": "nhs:bad-breath"
      },
      {
        "t": "نضّف لسانك بالراحة مرة في اليوم باستخدام مكشطة أو منظّف لسان.",
        "en": "gently clean your tongue once a day using a tongue scraper or cleaner",
        "src": "nhs:bad-breath"
      },
      {
        "t": "نضّف بين سنانك بفرشة بينية أو خيط سنان مرة في اليوم على الأقل.",
        "en": "clean between your teeth with interdental brushes or floss at least once a day",
        "src": "nhs:bad-breath"
      },
      {
        "t": "اعمل كشف سنان بانتظام.",
        "en": "get regular dental check-ups",
        "src": "nhs:bad-breath"
      },
      {
        "t": "خلّي طقم الأسنان نضيف وشيله بالليل.",
        "en": "keep dentures (false teeth) clean and remove them at night",
        "src": "nhs:bad-breath"
      },
      {
        "t": "استخدم حلوى نعناع أو لبان من غير سكر بعد الأكل أو الشرب اللي ريحته قوية.",
        "en": "use sugar-free mints or chewing gum after having strong-smelling food and drinks",
        "src": "nhs:bad-breath"
      },
      {
        "t": "جرّب غسول بق أو معجون سنان مضاد للبكتيريا.",
        "en": "try using an antibacterial mouthwash or toothpaste",
        "src": "nhs:bad-breath"
      }
    ],
    "dont": [
      {
        "t": "ماتدخنش.",
        "en": "do not smoke",
        "src": "nhs:bad-breath"
      },
      {
        "t": "ماتشربش كحول كتير.",
        "en": "do not drink too much alcohol",
        "src": "nhs:bad-breath"
      },
      {
        "t": "ماتشطفش بقك بميّه بعد غسيل السنان على طول.",
        "en": "do not rinse your mouth with water straight after brushing your teeth",
        "src": "nhs:bad-breath"
      },
      {
        "t": "ماتكترش من الأكل والمشروبات المسكّرة.",
        "en": "do not have lots of sugary foods and drinks",
        "src": "nhs:bad-breath"
      },
      {
        "t": "ماتغسلش بقوة لدرجة إن لثتك أو لسانك ينزف.",
        "en": "do not brush so hard your gums or tongue bleed",
        "src": "nhs:bad-breath"
      }
    ],
    "whenWhy": {
      "ar": "نضافة السنان واللثة واللسان وبين السنان هي الخطوات الأساسية؛ اغسل بالراحة وماتشطفش بميّه بعد الغسيل على طول.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بتغسل سنانك. اغسل سنانك ولثتك بالراحة لمدة ٢ دقيقة، نضّف لسانك وبين سنانك، وماتشطفش بميّه على طول.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "معجون سنان فيه فلورايد",
        "why": "استخدمه لغسيل السنان"
      },
      {
        "item": "مكشطة أو منظّف لسان",
        "why": "نضّف لسانك مرة في اليوم"
      },
      {
        "item": "فرشة بينية أو خيط سنان",
        "why": "نضّف بين سنانك مرة في اليوم على الأقل"
      }
    ],
    "tech": [
      "احسب ٢ دقيقة وإنت بتغسل سنانك ولثتك"
    ],
    "writeDown": [
      "هل الريحة مابتروحش بعد كام أسبوع، وهل فيه وجع أو نزيف أو ورم في اللثة"
    ],
    "videosCommunities": [
      {
        "label": "Bad breath",
        "url": "https://www.nhs.uk/symptoms/bad-breath/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده ريحة بق وحشة، شجّعه يغسل بالراحة وينضّف لسانه وبين سنانه من غير إحراج.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«هاتلي خيط سنان ومنظّف لسان.»"
      ],
      "toSelf": [
        "«هاغسل بالراحة ٢ دقيقة، وأنضّف لساني وبين سناني.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اغسل سنانك ولثتك ولسانك بالراحة، وماتضغطش لدرجة النزيف.",
      "en": ""
    },
    "rights": {
      "ar": "لو الريحة مابتروحش بعد كام أسبوع أو اللثة بتوجع أو بتنـزف أو وارمة، اطلب مساعدة.",
      "en": ""
    },
    "variations": [
      "لو أكلت أو شربت حاجة ريحتها قوية: استخدم نعناع أو لبان من غير سكر.",
      "لو عندك طقم أسنان: خلّيه نضيف وشيله بالليل.",
      "لو هتغسل سنانك: اغسل بالراحة وماتشطفش بميّه على طول."
    ],
    "prevention": [
      "نضّف سنانك ولثتك ولسانك وبين سنانك بانتظام.",
      "ماتدخنش وماتكترش من الكحول أو السكر."
    ],
    "drill": {
      "ar": "افتكرها: سنان، لثة، لسان، وبين السنان؛ بالراحة ومن غير شطف فوري.",
      "en": ""
    },
    "after": {
      "ar": "اعمل كشف سنان بانتظام، وخلّي طقم الأسنان نضيف وشيله بالليل.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Bad breath",
        "url": "https://www.nhs.uk/symptoms/bad-breath/",
        "srcId": "nhs:bad-breath",
        "sha256": "546ace93a4",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "dentures",
    "title": {
      "ar": "طقم السنان",
      "en": "Dentures"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "طقم السنان محتاج يتنضّف كل صبح وبالليل، ويتشال كل ليلة ويتحفظ بالطريقة المناسبة.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الطقم بيعمل تكة وإنت بتتكلم.",
        "en": "your dentures click when you're talking",
        "src": "nhs:dentures"
      },
      {
        "t": "لو الطقم بيتزحلق أو حاسس إنه مبقاش راكب مظبوط.",
        "en": "your dentures slip, or you feel they no longer fit properly",
        "src": "nhs:dentures"
      },
      {
        "t": "لو الطقم بيوجعك.",
        "en": "your dentures are causing pain",
        "src": "nhs:dentures"
      },
      {
        "t": "لو الطقم متآكل أو بايظ؛ ولو اتكسر، خد القطع المكسورة معاك لدكتور السنان عشان يشوف ينفع يصلّحها ولا لأ.",
        "en": "your dentures are worn or damaged – if your dentures break, bring any broken parts to the dentist so they can check if they’re able to repair them",
        "src": "nhs:dentures"
      },
      {
        "t": "لو لثتك حمرا جدًا أو بتنـزف، أو نفسك ريحته وحشة؛ دي ممكن تبقى علامات مشكلة في اللثة أو عدوى فطرية أو تسوس.",
        "en": "you have very red or bleeding gums, or bad breath, which can be signs of gum disease, a fungal infection or tooth decay",
        "src": "nhs:dentures"
      }
    ],
    "do": [
      {
        "t": "فرّش لثتك ولسانك وأي سنان لسه عندك بمعجون فيه فلورايد كل صبح وبالليل.",
        "en": "brush your gums, tongue and any remaining teeth with fluoride toothpaste every morning and evening",
        "src": "nhs:dentures"
      },
      {
        "t": "شيل طقم السنان وفرّشه بصابون خفيف أو سائل مواعين كل صبح وبالليل.",
        "en": "remove your dentures and brush them with soft soap or washing up liquid every morning and evening",
        "src": "nhs:dentures"
      },
      {
        "t": "نضّف الطقم فوق حوض مليان ميّه أو فوق حاجة طرية زي فوطة؛ عشان ممكن يتكسر لو وقع منك.",
        "en": "clean dentures over a sink filled with water, or something soft such as a towel – they can break if you drop them",
        "src": "nhs:dentures"
      },
      {
        "t": "اشطف الطقم بميّه ساقعة بعد الأكل عشان تشيل بواقي الأكل السايبة.",
        "en": "rinse your dentures in cold water after meals to remove loose bits of food",
        "src": "nhs:dentures"
      },
      {
        "t": "شيل الطقم كل ليلة، وخليه في ميّه، أو كيس بلاستيك فيه قطن مبلول، أو محلول تنظيف بالليل، أو علبة الطقم.",
        "en": "remove your dentures every night – keep them in water, a polythene bag with damp cotton wool, an overnight denture-cleaning solution or a denture bath",
        "src": "nhs:dentures"
      }
    ],
    "dont": [
      {
        "t": "ماتلبسش الطقم وإنت نايم إلا لو دكتور السنان قالك؛ الأكل المحبوس بيزوّد احتمال عدوى اللثة وتسوس السنان، وكمان ممكن تشرق بالطقم وإنت نايم.",
        "en": "do not wear your dentures overnight unless your dentist recommends it – trapped food increases the risk of gum infections and tooth decay, plus there’s a risk you could choke on them if you leave them in while sleeping",
        "src": "nhs:dentures"
      },
      {
        "t": "ماتنضّفش الطقم بمعجون سنان؛ ممكن يبوّظه.",
        "en": "do not clean your dentures with toothpaste – it could damage them",
        "src": "nhs:dentures"
      }
    ],
    "whenWhy": {
      "ar": "التنضيف المنتظم والشطف بعد الأكل بيشيلوا البواقي، وشيل الطقم بالليل بالطريقة المناسبة بيحافظ عليه.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: خلصت أكل. اشطف الطقم بميّه ساقعة، وبالليل شيله ونضّفه فوق حوض مليان ميّه أو فوطة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "صابون خفيف أو سائل مواعين",
        "why": "فرّش بيه الطقم الصبح وبالليل"
      },
      {
        "item": "علبة طقم أو محلول تنظيف بالليل",
        "why": "احفظ الطقم فيها بعد ما تشيله"
      }
    ],
    "tech": [
      "حط تذكير للتنضيف الصبح وبالليل"
    ],
    "writeDown": [
      "هل الطقم بيتزحلق أو بيوجعك أو بيعمل تكة وإنت بتتكلم"
    ],
    "videosCommunities": [
      {
        "label": "Dentures (false teeth)",
        "url": "https://www.nhs.uk/tests-and-treatments/dentures/"
      }
    ],
    "othersPOV": {
      "ar": "لو بتساعد حد في طقم السنان، وفّر له مكان طري ينضّفه فوقه وماتطلبش منه يستخدم معجون السنان على الطقم.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«الطقم بقى بيتزحلق وبيوجعني؛ محتاج أشوف دكتور السنان.»"
      ],
      "toSelf": [
        "«هنضّفه الصبح وبالليل، وهشيله قبل النوم.»"
      ]
    },
    "bodyLanguage": {
      "ar": "امسك الطقم فوق حوض مليان ميّه أو فوطة عشان مايتكسرش لو وقع.",
      "en": ""
    },
    "rights": {
      "ar": "لو الطقم مبقاش راكب مظبوط أو بيوجعك أو اتكسر، اطلب من دكتور السنان يراجعه.",
      "en": ""
    },
    "variations": [
      "بعد الأكل: اشطف الطقم بميّه ساقعة.",
      "وقت التنضيف: اشتغل فوق حوض مليان ميّه أو فوطة.",
      "بالليل: شيل الطقم واحفظه بالطريقة المناسبة."
    ],
    "prevention": [
      "فرّش لثتك ولسانك وأي سنان باقية كل صبح وبالليل.",
      "ماتستخدمش معجون السنان لتنضيف الطقم."
    ],
    "drill": {
      "ar": "افتكرها: فرّش، اشطف، شيل بالليل، واحفظ الطقم.",
      "en": ""
    },
    "after": {
      "ar": "لو الطقم بيتزحلق أو بيوجعك أو متآكل أو بايظ، خليه يتراجع عند دكتور السنان.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Dentures (false teeth)",
        "url": "https://www.nhs.uk/tests-and-treatments/dentures/",
        "srcId": "nhs:dentures",
        "sha256": "955df5321d",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "plantar-fasciitis",
    "title": {
      "ar": "وجع باطن الكعب",
      "en": "Plantar fasciitis"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو باطن رجلك أو كعبك بيوجعك، ريّح وارفع رجلك، والبس جزمة بكعب مبطّن ودعم كويس لقوس القدم.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع باطن رجلك شديد أو موقفك عن نشاطك العادي.",
        "en": "you have pain in the bottom of your foot that is severe or stopping you doing normal activities",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "لو وجع رجلك بيزيد أو بيرجع تاني.",
        "en": "your foot pain is getting worse or keeps coming back",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "لو الوجع ماتحسّنش بعد ما عالجته بنفسك لمدة ٢ أسبوع.",
        "en": "your foot pain has not improved after treating it yourself for 2 weeks",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "لو عندك تنميل أو فقدان إحساس في رجلك.",
        "en": "you have any tingling or loss of feeling in your foot",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "لو عندك سكر ووجع في رجلك؛ مشاكل الرجل ممكن تبقى أخطر مع السكر.",
        "en": "you have diabetes and foot pain – foot problems can be more serious if you have diabetes",
        "src": "nhs:plantar-fasciitis"
      }
    ],
    "do": [
      {
        "t": "ريّح وارفع رجلك على كرسي صغير لما تقدر.",
        "en": "rest and raise your foot on a stool when you can",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة ملفوف في فوطة على مكان الوجع لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas) in a towel on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "البس جزمة بكعب مبطّن ودعم كويس لقوس القدم.",
        "en": "wear shoes with cushioned heels and good arch support",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "استخدم فرش أو وسادة كعب جوّه الجزمة.",
        "en": "use insoles or heel pads in your shoes",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "اعمل تمارين خفيفة بانتظام لشد باطن رجلك وكعبك.",
        "en": "try regular gentle exercises to stretch the sole of your foot and your heel",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "جرّب تمرين مايحطش ضغط على رجلك، زي السباحة.",
        "en": "try exercises that do not put pressure on your feet, such as swimming",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "take painkillers like paracetamol or ibuprofen gel, or ibuprofen tablets if you need them",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you're overweight",
        "src": "nhs:plantar-fasciitis"
      }
    ],
    "dont": [
      {
        "t": "ماتمشيش وماتقفش وقت طويل.",
        "en": "do not walk or stand for long periods",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:plantar-fasciitis"
      },
      {
        "t": "ماتلبسش شبشب فليب فلوب أو شبشب مفتوح من ورا.",
        "en": "do not wear flip-flops or backless slippers",
        "src": "nhs:plantar-fasciitis"
      }
    ],
    "whenWhy": {
      "ar": "الراحة ورفع الرجل والتلج الملفوف والحذاء الداعم بيخففوا الحمل على مكان الوجع، والتمارين الخفيفة بتشد باطن الرجل والكعب.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: رجلك وجعتك بعد الوقوف. اقعد وارفعها، وحط التلج الملفوف، وبعدها البس جزمة مبطّنة وداعمة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جزمة بكعب مبطّن ودعم لقوس القدم",
        "why": "البسها بدل الكعب العالي أو الجزمة الضيقة"
      },
      {
        "item": "فرش أو وسادة كعب",
        "why": "حطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "حط التلج ملفوف على مكان الوجع"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الشد الخفيفة"
    ],
    "writeDown": [
      "هل الوجع بيزيد أو بيرجع، وهل وقف نشاطك العادي أو استمر ٢ أسبوع"
    ],
    "videosCommunities": [
      {
        "label": "Plantar fasciitis",
        "url": "https://www.nhs.uk/conditions/plantar-fasciitis/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد باطن رجله بيوجعه، ساعده يقعد ويرفع رجله وماتخليهوش يقف أو يمشي وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«محتاج أقعد وأرفع رجلي شوية بدل الوقوف.»"
      ],
      "toSelf": [
        "«هاريّح رجلي، ألبس حاجة داعمة، ومش هقف وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك على كرسي صغير لما تقدر، وخلي تمارينك خفيفة ومن غير ضغط على القدم.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو موقف نشاطك أو ماتحسّنش خلال ٢ أسبوع، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع رجلك على كرسي صغير.",
      "وقت التمرين: اختار حاجة من غير ضغط على القدم زي السباحة.",
      "وقت اللبس: اختار جزمة مبطّنة وداعمة."
    ],
    "prevention": [
      "البس جزمة داعمة واستخدم فرش أو وسادة كعب.",
      "ماتمشيش أو تقف وقت طويل وماتلبسش كعب عالي."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، جزمة داعمة، وتمرين خفيف.",
      "en": ""
    },
    "after": {
      "ar": "تابع الوجع؛ لو بيزيد أو بيرجع أو ماتحسّنش بعد ٢ أسبوع، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Plantar fasciitis",
        "url": "https://www.nhs.uk/conditions/plantar-fasciitis/",
        "srcId": "nhs:plantar-fasciitis",
        "sha256": "7a671075c1",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "wrist-pain",
    "title": {
      "ar": "وجع الرسغ",
      "en": "Wrist pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو رسغك بيوجعك، ريّحه لما تقدر، وحرك إيدك ورسغك بتمارين خفيفة لو الوجع والتيبّس بسيطين.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو رسغك بيوجعك ومعاه حرارة عالية وإنت حاسس إنك تعبان.",
        "en": "you have wrist pain and also feel unwell with a high temperature",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "لو رسغك بيوجعك وساخن ووارم ومتيبّس.",
        "en": "your wrist is painful, warm, swollen and stiff",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "لو وجع الرسغ شديد.",
        "en": "you have severe wrist pain",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "لو مش قادر تحرّك رسغك أو تمسك حاجات.",
        "en": "you are not able to move your wrist or hold things",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "لو شكل أو لون رسغك اتغيّر.",
        "en": "your wrist has changed shape or colour",
        "src": "nhs:wrist-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح رسغك لما تقدر.",
        "en": "rest your wrist when you can",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على رسغك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or a bag of frozen peas) in a towel and place it on your wrist for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "حرّك إيدك ورسغك بتمارين خفيفة عشان تخفف الوجع البسيط والتيبّس.",
        "en": "keep your hands and wrists moving with gentle exercises to help ease mild pain and stiffness",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "شيل أي خواتم أو إكسسوارات لو إيدك باينة وارمة.",
        "en": "take off any jewellery if your hand looks swollen",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "وقف أو قلّل النشاط اللي بيسبب الوجع، زي الكتابة أو استخدام أدوات بتهتز في الشغل أو العزف.",
        "en": "stop or cut down activities that are causing the pain – for example, typing, using vibrating tools for work, or playing an instrument",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "البس جبيرة تدعم الرسغ وتخفف الوجع، خصوصًا بالليل؛ هتلاقيها في أغلب الصيدليات والسوبرماركت.",
        "en": "wear a splint to support your wrist and ease pain, especially at night – you can get these at most pharmacies and supermarkets",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "فكّر تستخدم أدوات تسهّل المهمة اللي بتوجعك، زي فتح البرطمان أو تقطيع الخضار.",
        "en": "think about using gadgets or tools to make difficult or painful tasks easier – for example, to open jars or chop vegetables",
        "src": "nhs:wrist-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش كمادات سخنة وماتاخدش حمام سخن في أول ٢ لـ٣ أيام بعد الإصابة.",
        "en": "do not use heat packs or have hot baths for the first 2 to 3 days after an injury",
        "src": "nhs:wrist-pain"
      },
      {
        "t": "ماتشيلش حاجات تقيلة وماتمسكش حاجة بقوة زيادة.",
        "en": "do not lift heavy objects or grip anything too tightly",
        "src": "nhs:wrist-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والتلج الملفوف وتقليل النشاط اللي بيوجعك بيساعدوا الرسغ، والحركة الخفيفة بتخفف الوجع البسيط والتيبّس.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: رسغك وجعك من الكتابة. وقف شوية، شيل الخاتم لو إيدك وارمة، وحط تلج ملفوف على الرسغ.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جبيرة رسغ",
        "why": "تدعم الرسغ وتخفف الوجع، خصوصًا بالليل"
      },
      {
        "item": "كيس تلج أو بسلة مجمّدة وفوطة",
        "why": "حطهم على الرسغ بالطريقة المكتوبة"
      }
    ],
    "tech": [
      "قلّل وقت النشاط اللي بيسبب الوجع"
    ],
    "writeDown": [
      "هل الرسغ ساخن أو وارم أو متيبّس، وهل تقدر تحركه وتمسك حاجات"
    ],
    "videosCommunities": [
      {
        "label": "Wrist pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/wrist-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد رسغه بيوجعه، ساعده يقلّل النشاط اللي بيسبب الوجع ومايشتغلش بمسك قوي أو حمل تقيل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«رسغي وارم؛ هاشيل الخاتم وأريّحه.»"
      ],
      "toSelf": [
        "«هاريّح رسغي وأحرّكه بالراحة، ومش هشيل تقيل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي حركة إيدك ورسغك خفيفة، وماتمسكش الأدوات بقوة زيادة.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو الرسغ سخن ووارم أو شكله اتغيّر، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "لو إيدك وارمة: شيل أي خواتم أو إكسسوارات.",
      "لو الكتابة أو أداة الشغل بتوجعك: وقف أو قلّل النشاط.",
      "بالليل: استخدم جبيرة تدعم الرسغ."
    ],
    "prevention": [
      "قلّل النشاط اللي بيسبب الوجع واستخدم أدوات تسهّل المهام الصعبة.",
      "ماتشيلش تقيل وماتمسكش بقوة زيادة."
    ],
    "drill": {
      "ar": "افتكرها: ريّح، تلج ملفوف، حركة خفيفة، ومن غير حمل تقيل.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تحرّك الرسغ أو تمسك حاجات، أو شكله أو لونه اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Wrist pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/wrist-pain/",
        "srcId": "nhs:wrist-pain",
        "sha256": "f07891316a",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "ankle-pain",
    "title": {
      "ar": "وجع الكاحل",
      "en": "Ankle pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو كاحلك بيوجعك، ريّحه وارفعه لما تقدر، والبس جزمة واسعة ومريحة بكعب واطي ونعل طري.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو عندك تنميل أو فقدان إحساس في رجلك.",
        "en": "you have any tingling or loss of feeling in your foot",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "لو وجع الكاحل شديد.",
        "en": "you have severe ankle pain",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "لو شكل كاحلك أو رجلك اتغيّر أو بقى بزاوية غريبة.",
        "en": "your ankle or foot has changed shape or is at an odd angle",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "لو سمعت صوت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of injury",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "لو مش قادر تمشي.",
        "en": "you are not able to walk",
        "src": "nhs:ankle-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح وارفع كاحلك لما تقدر.",
        "en": "rest and raise your ankle when you can",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة ملفوف في فوطة على كاحلك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas) wrapped in a towel on your ankle for up to 20 minutes, every 2 to 3 hours",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "البس جزمة واسعة ومريحة بكعب واطي ونعل طري.",
        "en": "wear wide comfortable shoes with a low heel and soft sole",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "استخدم فرش طري أو وسادة كعب جوّه الجزمة.",
        "en": "use soft insoles or heel pads in your shoes",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "لف رباط حوالين كاحلك عشان يدعمه.",
        "en": "wrap a bandage around your ankle to support it",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "اعمل تمارين شد خفيفة بانتظام.",
        "en": "try regular gentle stretching exercises",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:ankle-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتمشيش وماتقفش وقت طويل.",
        "en": "do not walk or stand for long periods",
        "src": "nhs:ankle-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:ankle-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة ورفع الكاحل والتلج الملفوف والدعم بالرباط أو الحذاء المريح بيساعدوا تقلّل الحمل على الكاحل.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: كاحلك وجعك بعد المشي. اقعد وارفعه، وحط التلج الملفوف، والبس جزمة واسعة ومريحة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "رباط للكاحل",
        "why": "لفه حوالين الكاحل عشان يدعمه"
      },
      {
        "item": "فرش طري أو وسادة كعب",
        "why": "حطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "حط التلج ملفوف على الكاحل"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الشد الخفيفة"
    ],
    "writeDown": [
      "هل تقدر تمشي، وهل سمعت طقة أو اتغيّر شكل الكاحل وقت الإصابة"
    ],
    "videosCommunities": [
      {
        "label": "Ankle pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/ankle-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد كاحله بيوجعه، وفّر له كرسي يرفع عليه رجله وماتطلبش منه يقف أو يمشي وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمشي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح كاحلي وأرفعه، ومش هقف وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع الكاحل وإنت قاعد، وخلي تمارين الشد خفيفة.",
      "en": ""
    },
    "rights": {
      "ar": "لو مش قادر تمشي أو شكل الكاحل اتغيّر أو الوجع شديد، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع الكاحل.",
      "وقت اللبس: اختار جزمة واسعة بكعب واطي ونعل طري.",
      "وقت الحركة: ماتقفش أو تمشي وقت طويل."
    ],
    "prevention": [
      "البس جزمة واسعة ومريحة واستخدم فرش طري لو محتاج.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، رباط داعم، وجزمة مريحة.",
      "en": ""
    },
    "after": {
      "ar": "لو عندك فقدان إحساس، أو مش قادر تمشي، أو شكل الكاحل اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Ankle pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/ankle-pain/",
        "srcId": "nhs:ankle-pain",
        "sha256": "a0b555dcc4",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "thumb-pain",
    "title": {
      "ar": "وجع الإبهام",
      "en": "Thumb pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو إبهامك بيوجعك، ريّحه لما تقدر، ووقف أو قلّل النشاط اللي بيسبب الوجع.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الوجع شديد.",
        "en": "have severe pain",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "لو سمعت صوت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "heard a snap, grinding or popping noise at the time of the injury",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "لو مش قادر تحرّك إبهامك أو تمسك حاجات.",
        "en": "are not able to move your thumb or hold things",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "لو شكل أو لون إبهامك اتغيّر.",
        "en": "have a thumb that's changed shape or colour",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "لو فقدت الإحساس في جزء من إيدك أو فيها كلها.",
        "en": "have lost the feeling in part or all of your hand",
        "src": "nhs:thumb-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح إبهامك لما تقدر.",
        "en": "rest your thumb when you can",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على إبهامك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or a bag of frozen peas) in a towel and place it on your thumb for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج؛ إيبوبروفين مش مناسب لكل الناس، زي كبار السن اللي احتمال قرحة المعدة ومشاكل الكلى عندهم أعلى.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed) – ibuprofen is not suitable for everyone, such as older people who have a higher chance of getting stomach ulcers and kidney problems",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "شيل أي خواتم أو إكسسوارات لو إبهامك باين وارم.",
        "en": "take off any jewellery if your thumb looks swollen",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "وقف أو قلّل النشاط اللي بيسبب الوجع، زي الكتابة أو استخدام أدوات بتهتز في الشغل أو العزف.",
        "en": "stop or cut down activities that are causing the pain – for example, typing, using vibrating tools for work, or playing an instrument",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "البس جبيرة تدعم إبهامك وتخفف الوجع، خصوصًا بالليل؛ هتلاقيها في أغلب الصيدليات والسوبرماركت.",
        "en": "wear a splint to support your thumb and ease pain, especially at night – you can get these at most pharmacies and supermarkets",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "فكّر تستخدم أدوات تسهّل المهمة اللي بتوجعك، زي فتح البرطمان أو تقطيع الخضار.",
        "en": "consider using gadgets or tools to make difficult or painful tasks easier – for example, to open jars or chop vegetables",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "حرّك إبهامك بتمارين خفيفة.",
        "en": "keep your thumb moving with gentle exercises",
        "src": "nhs:thumb-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش كمادات سخنة وماتاخدش حمام سخن لكام يوم بعد الإصابة أو لو إبهامك وارم؛ ده ممكن يزوّدها.",
        "en": "do not use heat packs or have hot baths for a few days after an injury or if your thumb is swollen – this can make it worse",
        "src": "nhs:thumb-pain"
      },
      {
        "t": "ماتشيلش حاجات تقيلة وماتمسكش حاجة بقوة زيادة.",
        "en": "do not lift heavy objects or grip anything too tightly",
        "src": "nhs:thumb-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والتلج الملفوف وتقليل النشاط اللي بيوجعك بيساعدوا الإبهام، والحركة الخفيفة بتمنعه يفضل ثابت.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: إبهامك وجعك من فتح البرطمانات. وقف النشاط، شيل الخاتم لو وارم، وحط تلج ملفوف.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "جبيرة إبهام",
        "why": "تدعم الإبهام وتخفف الوجع، خصوصًا بالليل"
      },
      {
        "item": "كيس تلج أو بسلة مجمّدة وفوطة",
        "why": "حطهم على الإبهام بالطريقة المكتوبة"
      }
    ],
    "tech": [
      "قلّل وقت النشاط اللي بيسبب الوجع"
    ],
    "writeDown": [
      "هل تقدر تحرك الإبهام وتمسك حاجات، وهل شكله أو لونه اتغيّر"
    ],
    "videosCommunities": [
      {
        "label": "Thumb pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/thumb-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد إبهامه بيوجعه، ساعده يستخدم أداة تسهّل المهمة ومايحتاجش يمسك بقوة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أحرّك إبهامي أو أمسك حاجات؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح إبهامي وأحرّكه بالراحة، ومش همسك بقوة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي حركة الإبهام خفيفة، وماتمسكش الأدوات بقوة زيادة.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو شكل الإبهام اتغيّر أو فقدت الإحساس، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "لو الإبهام وارم: شيل أي خواتم أو إكسسوارات.",
      "لو نشاط معين بيوجعك: وقفه أو قلّله.",
      "بالليل: استخدم جبيرة تدعم الإبهام."
    ],
    "prevention": [
      "استخدم أدوات تسهّل المهام اللي بتوجعك.",
      "ماتشيلش تقيل وماتمسكش بقوة زيادة."
    ],
    "drill": {
      "ar": "افتكرها: ريّح، تلج ملفوف، حركة خفيفة، ومن غير مسك قوي.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تحرّك الإبهام أو تمسك حاجات، أو شكله أو لونه اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Thumb pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/thumb-pain/",
        "srcId": "nhs:thumb-pain",
        "sha256": "75597240e5",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "finger-pain",
    "title": {
      "ar": "وجع الصباع",
      "en": "Finger pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو صباعك بيوجعك، ريّحه لما تقدر، وشيل أي خاتم أو إكسسوار من الصباع اللي بيوجعك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الوجع شديد.",
        "en": "the pain is severe",
        "src": "nhs:finger-pain"
      },
      {
        "t": "لو سمعت صوت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of the injury",
        "src": "nhs:finger-pain"
      },
      {
        "t": "لو مش قادر تحرّك صباعك أو تمسك حاجات.",
        "en": "you're not able to move your finger or hold things",
        "src": "nhs:finger-pain"
      },
      {
        "t": "لو شكل أو لون صباعك اتغيّر.",
        "en": "your finger has changed shape or colour",
        "src": "nhs:finger-pain"
      },
      {
        "t": "لو فقدت الإحساس في جزء من إيدك أو فيها كلها بعد الإصابة.",
        "en": "you've lost the feeling of part or all of your hand after an injury",
        "src": "nhs:finger-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح صباعك لما تقدر.",
        "en": "rest your finger when you can",
        "src": "nhs:finger-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على صباعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or a bag of frozen peas) in a towel and place it on your finger for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:finger-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:finger-pain"
      },
      {
        "t": "وقف أو قلّل النشاط اللي بيسبب الوجع، زي الكتابة أو استخدام أدوات بتهتز في الشغل أو العزف.",
        "en": "stop or cut down activities that are causing the pain – for example, typing, using vibrating tools for work, or playing an instrument",
        "src": "nhs:finger-pain"
      },
      {
        "t": "شيل أي خاتم أو إكسسوار من الصباع اللي بيوجعك.",
        "en": "remove any jewellery on the painful finger",
        "src": "nhs:finger-pain"
      },
      {
        "t": "اربط الصباع اللي بيوجعك في الصباع اللي جنبه؛ حط بينهم حتة قطن صغيرة أو شاش، واستخدم شريط عشان تربطهم بالراحة.",
        "en": "strap the painful finger to another finger next to it – put a small piece of cotton wool or gauze between the 2 fingers and use tape to loosely strap them together",
        "src": "nhs:finger-pain"
      },
      {
        "t": "فكّر تستخدم أدوات تسهّل المهمة اللي بتوجعك، زي فتح البرطمان أو تقطيع الخضار.",
        "en": "think about using gadgets or tools to make difficult or painful tasks easier – for example, to open jars or chop vegetables",
        "src": "nhs:finger-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش كمادات سخنة وماتاخدش حمام سخن في أول ٢ لـ٣ أيام بعد الإصابة.",
        "en": "do not use heat packs or have hot baths for the first 2 to 3 days after an injury",
        "src": "nhs:finger-pain"
      },
      {
        "t": "ماتشيلش حاجات تقيلة وماتمسكش حاجة بقوة زيادة.",
        "en": "do not lift heavy objects or grip anything too tightly",
        "src": "nhs:finger-pain"
      },
      {
        "t": "ماتبطّلش تستخدم صباعك خالص؛ بعد كام يوم، اعمل تمارين خفيفة للإيد والصوابع عشان تخفف أي تيبّس.",
        "en": "do not stop using your finger completely – after a few days, do gentle hands and finger exercises to help ease any stiffness",
        "src": "nhs:finger-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والتلج الملفوف وتقليل النشاط اللي بيوجعك بيساعدوا الصباع، وبعد كام يوم الحركة الخفيفة بتخفف التيبّس.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: صباعك وجعك ووارم. شيل الخاتم، ريّحه، وحط تلج ملفوف عليه.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "قطن أو شاش وشريط",
        "why": "اربط الصباع اللي بيوجعك في الصباع اللي جنبه بالراحة"
      },
      {
        "item": "كيس تلج أو بسلة مجمّدة وفوطة",
        "why": "حطهم على الصباع بالطريقة المكتوبة"
      }
    ],
    "tech": [
      "قلّل وقت النشاط اللي بيسبب الوجع"
    ],
    "writeDown": [
      "هل تقدر تحرك الصباع وتمسك حاجات، وهل شكله أو لونه اتغيّر"
    ],
    "videosCommunities": [
      {
        "label": "Finger pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/finger-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد صباعه بيوجعه، ساعده يشيل الخاتم ويقلّل النشاط اللي بيوجعه، وماتطلبش منه يمسك بقوة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ساعدني أشيل الخاتم وأريّح صباعي.»"
      ],
      "toSelf": [
        "«هاريّح صباعي، وبعد كام يوم هاحرّكه بالراحة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اربط الصباع بالراحة في اللي جنبه، وماتمسكش الأدوات بقوة زيادة.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو شكل الصباع اتغيّر أو فقدت الإحساس، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "لو الصباع وارم: شيل الخاتم أو الإكسسوار.",
      "لو نشاط معين بيوجعك: وقفه أو قلّله.",
      "بعد كام يوم: اعمل تمارين خفيفة للإيد والصوابع."
    ],
    "prevention": [
      "استخدم أدوات تسهّل المهام اللي بتوجعك.",
      "ماتشيلش تقيل وماتمسكش بقوة زيادة."
    ],
    "drill": {
      "ar": "افتكرها: شيل الخاتم، ريّح، تلج ملفوف، وحركة خفيفة بعد كام يوم.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تحرّك الصباع أو تمسك حاجات، أو شكله أو لونه اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Finger pain",
        "url": "https://www.nhs.uk/symptoms/hand-pain/finger-pain/",
        "srcId": "nhs:finger-pain",
        "sha256": "f95742c6a8",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "shoulder-pain",
    "title": {
      "ar": "وجع الكتف",
      "en": "Shoulder pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو كتفك بيوجعك، فضّل تحرّكه بالراحة واسند دراعك على مخدة. ماتوقفش استخدامه خالص وماتعملش حاجة بتزوّد الوجع.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع كتفك جه فجأة أو شديد جدًا.",
        "en": "you have sudden or very bad shoulder pain",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "لو مش قادر تحرّك دراعك.",
        "en": "you cannot move your arm",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "لو شكل دراعك أو كتفك اتغيّر أو ورم جامد.",
        "en": "your arm or shoulder has changed shape or is badly swollen",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "لو التنميل والوخز مش بيروح.",
        "en": "you have pins and needles that do not go away",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "لو مافيش إحساس في دراعك أو كتفك.",
        "en": "there's no feeling in your arm or shoulder",
        "src": "nhs:shoulder-pain"
      }
    ],
    "do": [
      {
        "t": "خليك نشيط وحرّك كتفك بالراحة.",
        "en": "stay active and gently move your shoulder",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "جرّب تمارين للكتف لمدة ٦ لـ٨ أسابيع عشان الوجع مايرجعش.",
        "en": "try shoulder exercises for 6 to 8 weeks to stop pain returning",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "قف مستقيم وخلي كتافك لتحت وورا بالراحة.",
        "en": "stand up straight with your shoulders down and gently back",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "اقعد وحط مخدة ورا أسفل ضهرك.",
        "en": "sit with a cushion behind your lower back",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "اسند دراعك على مخدة في حجرك.",
        "en": "rest your arm on a cushion in your lap",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "استخدم مسكّن عشان تقدر تفضل بتتحرك—جرّب باراسيتامول أو إيبوبروفين، وكمادات دافية أو ساقعة.",
        "en": "use pain relief so you can keep moving – try painkillers like paracetamol and ibuprofen, and heat or cold packs",
        "src": "nhs:shoulder-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتوقفش استخدام كتفك خالص—ده ممكن يعطّل تحسّنه.",
        "en": "do not completely stop using your shoulder – this can stop it getting better",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "ماتعملش حاجات بتحس إنها بتزوّد الوجع.",
        "en": "do not do things that seem to make it worse",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "ماتخترعش تمارين شديدة من نفسك وماتستخدمش معدات جيم تقيلة.",
        "en": "do not make up your own strenuous exercises or use heavy gym equipment",
        "src": "nhs:shoulder-pain"
      },
      {
        "t": "ماتقعدش مكوّر—ماتلفّش كتافك لقدّام وماتزقّش رقبتك لقدّام.",
        "en": "do not slouch when sitting – do not roll your shoulders or bring your neck forward",
        "src": "nhs:shoulder-pain"
      }
    ],
    "whenWhy": {
      "ar": "الحركة الهادية، القعدة المستقيمة، وإسناد الدراع هم الخطوات اللي المصدر بيقترحها مع تجنّب أي حاجة بتزوّد الوجع.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: كتفك وجعك وإنت قاعد. عدّل قعدتك، حط مخدة ورا أسفل ضهرك، واسند دراعك على مخدة في حجرك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "مخدة",
        "why": "اسند عليها دراعك أو حطها ورا أسفل ضهرك"
      },
      {
        "item": "كمادة دافية أو ساقعة",
        "why": "استخدمها ضمن طرق تخفيف الوجع المذكورة في المصدر"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الكتف"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل تقدر تحرّك دراعك ولا لأ"
    ],
    "videosCommunities": [
      {
        "label": "Shoulder pain",
        "url": "https://www.nhs.uk/symptoms/shoulder-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد كتفه بيوجعه، وفّر له مخدة يسند عليها دراعه وماتطلبش منه يعمل حركة بتزوّد الوجع.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أحرّك دراعي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هحرّك كتفي بالراحة ومش هعمل حاجة بتزوّد الوجع.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد مستقيم، رجّع كتافك بالراحة، واسند دراعك بدل ما تسيبه معلّق.",
      "en": ""
    },
    "rights": {
      "ar": "لو مش قادر تحرّك دراعك أو الإحساس راح منه، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت القعدة: مخدة ورا أسفل ضهرك.",
      "وقت الراحة: اسند دراعك على مخدة.",
      "وقت الحركة: حرّك كتفك بالراحة."
    ],
    "prevention": [
      "اعمل تمارين الكتف اللي اخترتها بانتظام.",
      "ماتخترعش تمارين شديدة من نفسك."
    ],
    "drill": {
      "ar": "افتكرها: حركة هادية، قعدة مستقيمة، ودراع مسنود.",
      "en": ""
    },
    "after": {
      "ar": "لو الوجع جه فجأة أو بقى شديد، أو شكل الكتف اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Shoulder pain",
        "url": "https://www.nhs.uk/symptoms/shoulder-pain/",
        "srcId": "nhs:shoulder-pain",
        "sha256": "af67bdc7e4",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "hip-pain",
    "title": {
      "ar": "وجع مفصل الفخذ",
      "en": "Hip pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو مفصل فخذك بيوجعك، خفّف الحمل عليه من غير ما توقف حركة خالص. استخدم تلج ملفوف والبس جزمة مريحة بنعل طري.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع مفصل الفخذ شديد وبدأ فجأة من غير وقعة أو إصابة.",
        "en": "you have severe hip pain that started suddenly but you've not had a fall or injured your hip",
        "src": "nhs:hip-pain"
      },
      {
        "t": "لو مفصل فخذك وارم وسخن.",
        "en": "your hip is swollen and feels hot",
        "src": "nhs:hip-pain"
      },
      {
        "t": "لو عندك وجع شديد في مفصل الفخذ بعد وقعة أو إصابة.",
        "en": "you have severe hip pain after a fall or injury",
        "src": "nhs:hip-pain"
      },
      {
        "t": "لو مش قادر تمشي أو تحط وزنك على رجلك.",
        "en": "you're unable to walk or put weight on your leg",
        "src": "nhs:hip-pain"
      },
      {
        "t": "لو عندك تنميل أو فقدان إحساس في مفصل الفخذ أو الرجل بعد إصابة.",
        "en": "you have any tingling or loss of feeling in your hip or leg after an injury",
        "src": "nhs:hip-pain"
      }
    ],
    "do": [
      {
        "t": "حاول ماتحمّلش زيادة على مفصل فخذك—الأفضل تفضل تتحرك لو تقدر، بس من غير ما تزودها.",
        "en": "try to avoid putting too much strain on your hip – it's best to keep moving if you can, but try not to overdo things",
        "src": "nhs:hip-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على المكان اللي بيوجعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas) in a towel on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:hip-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:hip-pain"
      },
      {
        "t": "البس جزمة مريحة بتمتص الصدمات ونعلها طري.",
        "en": "wear comfortable, shock-absorbing shoes with a soft sole",
        "src": "nhs:hip-pain"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you're overweight",
        "src": "nhs:hip-pain"
      },
      {
        "t": "جرّب تمارين شد خفيفة لمفصل الفخذ.",
        "en": "try gentle hip stretching exercises",
        "src": "nhs:hip-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتشيلش أي حاجة تقيلة.",
        "en": "do not carry anything heavy",
        "src": "nhs:hip-pain"
      },
      {
        "t": "ماتقعدش على كراسي واطية—ده ممكن يزود الضغط على مفصل الفخذ.",
        "en": "do not sit in low chairs – this can put extra pressure on your hips",
        "src": "nhs:hip-pain"
      }
    ],
    "whenWhy": {
      "ar": "المصدر بيجمع بين حركة على قدّك، تقليل الحمل، تلج ملفوف، وجزمة مريحة بدل التوقف الكامل أو الضغط الزيادة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: مفصل فخذك وجعك بعد يوم طويل. اقعد على كرسي مش واطي، حط التلج الملفوف، وماتشيلش حاجة تقيلة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كيس تلج وفوطة",
        "why": "حط التلج ملفوف على المكان اللي بيوجعك"
      },
      {
        "item": "جزمة بنعل طري",
        "why": "اختار جزمة مريحة بتمتص الصدمات"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الشد الخفيفة"
    ],
    "writeDown": [
      "هل الوجع بدأ بعد وقعة، وهل تقدر تمشي وتحط وزنك على رجلك"
    ],
    "videosCommunities": [
      {
        "label": "Hip pain in adults",
        "url": "https://www.nhs.uk/symptoms/hip-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد مفصل فخده بيوجعه، وفّر له كرسي مش واطي وماتطلبش منه يشيل حاجة تقيلة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أحط وزني على رجلي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هتحرّك على قدّي ومش هشيل حاجة تقيلة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتحرّك على قدّك، واقعد على كرسي مش واطي، وخلي خطواتك من غير تحميل زيادة.",
      "en": ""
    },
    "rights": {
      "ar": "لو مش قادر تمشي أو تحط وزنك على رجلك، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الحركة: ماتزودش الحمل.",
      "وقت القعدة: اختار كرسي مش واطي.",
      "وقت اللبس: اختار جزمة مريحة بنعل طري."
    ],
    "prevention": [
      "ماتشيلش حاجة تقيلة.",
      "خلي تمارين الشد خفيفة."
    ],
    "drill": {
      "ar": "افتكرها: حركة على قدّك، تلج ملفوف، كرسي مش واطي، وجزمة مريحة.",
      "en": ""
    },
    "after": {
      "ar": "لو الوجع شديد بعد وقعة، أو مش قادر تمشي، أو الإحساس اتغيّر، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Hip pain in adults",
        "url": "https://www.nhs.uk/symptoms/hip-pain/",
        "srcId": "nhs:hip-pain",
        "sha256": "6b72213200",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "joint-pain",
    "title": {
      "ar": "وجع المفاصل",
      "en": "Joint pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو مفصل عندك بيوجعك، ريّحه على قد ما تقدر من غير ما توقف تحريكه خالص، وحط عليه تلج ملفوف.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو المفصل بيوجعك والجلد حواليه وارم وسخن.",
        "en": "you have joint pain and the skin around it is swollen and feels hot",
        "src": "nhs:joint-pain"
      },
      {
        "t": "لو المفصل بيوجعك وإنت تعبان عمومًا، أو حرارتك عالية، أو حاسس بسخونية أو برد ورعشة.",
        "en": "you have joint pain and feel generally unwell, have a high temperature or feel hot, cold or shivery",
        "src": "nhs:joint-pain"
      },
      {
        "t": "لو وجع المفصل شديد جدًا بعد وقعة أو إصابة.",
        "en": "you have very bad joint pain after a fall or injury",
        "src": "nhs:joint-pain"
      },
      {
        "t": "لو مش قادر تمشي أو تحط وزنك على المفصل.",
        "en": "you're unable to walk or put weight on a joint",
        "src": "nhs:joint-pain"
      },
      {
        "t": "لو المفصل اتحرّك من مكانه.",
        "en": "your joint has moved out of place",
        "src": "nhs:joint-pain"
      }
    ],
    "do": [
      {
        "t": "حاول تريّح المفصل اللي بيوجعك لو تقدر.",
        "en": "try to rest the affected joint if you can",
        "src": "nhs:joint-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة ملفوفة في فوطة على المكان اللي بيوجعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas) wrapped in a towel on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:joint-pain"
      },
      {
        "t": "اسأل صيدلي أو دكتور عن المسكّن المناسب لوجع المفصل.",
        "en": "speak to a pharmacist or GP about which painkiller to take for your joint pain",
        "src": "nhs:joint-pain"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you're overweight",
        "src": "nhs:joint-pain"
      },
      {
        "t": "كُل أكل صحي ومتوازن واعمل رياضة بانتظام.",
        "en": "eat a healthy, balanced diet and exercise regularly",
        "src": "nhs:joint-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتوقفش تحريك المفصل اللي بيوجعك خالص.",
        "en": "do not completely stop moving the affected joint",
        "src": "nhs:joint-pain"
      },
      {
        "t": "ماتدخنش.",
        "en": "do not smoke",
        "src": "nhs:joint-pain"
      }
    ],
    "whenWhy": {
      "ar": "المصدر بيقترح راحة على قدّك مع استمرار حركة المفصل، وتلج ملفوف، وسؤال صيدلي أو دكتور عن المسكّن.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: ركبتك أو رسغك بيوجعك. ريّح المفصل، حط التلج الملفوف، وفضل حرّكه من غير ما توقفه خالص.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كيس تلج وفوطة",
        "why": "حط التلج ملفوف على المفصل اللي بيوجعك"
      }
    ],
    "tech": [
      "حط تذكير للحركة المنتظمة"
    ],
    "writeDown": [
      "أي مفصل بيوجعك، وهل هو وارم أو سخن أو اتحرّك من مكانه"
    ],
    "videosCommunities": [
      {
        "label": "Joint pain",
        "url": "https://www.nhs.uk/symptoms/joint-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد مفصله بيوجعه، ساعده يريّحه من غير ما تطلب منه يوقف تحريكه خالص.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«المفصل سخن ووارم؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح المفصل بس مش هوقف تحريكه خالص.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ريّح المفصل في وضع مريح، وخلي حركته على قدّك.",
      "en": ""
    },
    "rights": {
      "ar": "لو المفصل اتحرّك من مكانه أو مش قادر تحط وزنك عليه، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ريّح المفصل.",
      "وقت الحركة: ماتوقفهاش خالص.",
      "وقت المسكّن: اسأل صيدلي أو دكتور."
    ],
    "prevention": [
      "كُل أكل صحي ومتوازن واعمل رياضة بانتظام.",
      "ماتدخنش."
    ],
    "drill": {
      "ar": "افتكرها: راحة على قدّك، حركة مستمرة، وتلج ملفوف.",
      "en": ""
    },
    "after": {
      "ar": "لو المفصل سخن ووارم، أو وجعه شديد بعد إصابة، أو اتحرّك من مكانه، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Joint pain",
        "url": "https://www.nhs.uk/symptoms/joint-pain/",
        "srcId": "nhs:joint-pain",
        "sha256": "e384d9dda4",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "neck-pain",
    "title": {
      "ar": "وجع الرقبة",
      "en": "Neck pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو رقبتك وجعاك أو ناشفة، استخدم مخدة واطية ومتماسكة وحرّك رقبتك. ماتلبسش رقبة طبية إلا لو الدكتور قالك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع أو تيبّس الرقبة ماراحش بعد كام أسبوع.",
        "en": "neck pain or stiffness does not go away after a few weeks",
        "src": "nhs:neck-pain"
      },
      {
        "t": "لو باراسيتامول أو إيبوبروفين مانفعش.",
        "en": "painkillers like paracetamol or ibuprofen have not worked",
        "src": "nhs:neck-pain"
      },
      {
        "t": "لو عندك أعراض تانية زي وخز أو تنميل أو دراع بارد—ده ممكن يكون أخطر.",
        "en": "you have other symptoms, like pins and needles or a cold arm – this could be something more serious",
        "src": "nhs:neck-pain"
      }
    ],
    "do": [
      {
        "t": "خد باراسيتامول أو إيبوبروفين، أو استخدم جل إيبوبروفين على رقبتك.",
        "en": "take paracetamol or ibuprofen – or use ibuprofen gel on your neck",
        "src": "nhs:neck-pain"
      },
      {
        "t": "استخدم مخدة واطية ومتماسكة.",
        "en": "use a low, firm pillow",
        "src": "nhs:neck-pain"
      },
      {
        "t": "حط كمادات دافية أو ساقعة على رقبتك.",
        "en": "put heat or cold packs on your neck",
        "src": "nhs:neck-pain"
      },
      {
        "t": "جرّب تمارين مرونة للرقبة.",
        "en": "try neck flexibility exercises",
        "src": "nhs:neck-pain"
      },
      {
        "t": "وإنت نايم، خلّي راسك على نفس ارتفاع باقي جسمك.",
        "en": "when sleeping, make sure your head is the same height as the rest of your body",
        "src": "nhs:neck-pain"
      },
      {
        "t": "استخدم مرتبة متماسكة.",
        "en": "have a firm mattress",
        "src": "nhs:neck-pain"
      },
      {
        "t": "اقعد مستقيم—رجّع كتافك بالراحة ورجّع رقبتك لورا.",
        "en": "sit upright – roll your shoulders back gently and bring your neck back",
        "src": "nhs:neck-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتلبسش رقبة طبية—الأفضل تفضل تحرّك رقبتك، إلا لو الدكتور قالك غير كده.",
        "en": "do not wear a neck collar – it's better to keep your neck moving (unless a doctor tells you not to)",
        "src": "nhs:neck-pain"
      },
      {
        "t": "ماتعملش حاجة ممكن تبقى خطرة عشان مش قادر تحرّك رقبتك—زي السواقة أو ركوب العجلة.",
        "en": "do not do anything that could be dangerous because you cannot move your neck – for example, driving or cycling",
        "src": "nhs:neck-pain"
      },
      {
        "t": "ماتثبتش رقبتك في نفس الوضع وقت طويل—زي القعدة على المكتب.",
        "en": "do not keep your neck in the same position for a long time – for example, when sitting at a desk",
        "src": "nhs:neck-pain"
      },
      {
        "t": "ماتنامش على بطنك.",
        "en": "do not sleep on your front",
        "src": "nhs:neck-pain"
      },
      {
        "t": "ماتلوّيش رقبتك وإنت في السرير.",
        "en": "do not twist your neck when you're in bed",
        "src": "nhs:neck-pain"
      }
    ],
    "whenWhy": {
      "ar": "المصدر بيركّز على حركة الرقبة، وضع قعدة ونوم أحسن، وكمادات، مع تجنّب التثبيت الطويل أو حركة خطرة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: رقبتك نشفت بعد القعدة. اقعد مستقيم، رجّع كتافك ورقبتك بالراحة، وماتسوقش لو مش قادر تحرّكها.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "مخدة واطية ومتماسكة",
        "why": "استخدمها وقت النوم"
      },
      {
        "item": "كمادة دافية أو ساقعة",
        "why": "حطها على رقبتك"
      }
    ],
    "tech": [
      "حط تذكير تغيّر وضع رقبتك وقت القعدة"
    ],
    "writeDown": [
      "الوجع بقاله قد إيه، وهل فيه وخز أو تنميل أو دراع بارد"
    ],
    "videosCommunities": [
      {
        "label": "Neck pain",
        "url": "https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد مش قادر يحرّك رقبته، ماتطلبش منه يسوق أو يركب عجلة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أحرّك رقبتي كويس؛ مش هاسوق.»"
      ],
      "toSelf": [
        "«هغيّر وضعي ومش هثبت رقبتي وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد مستقيم، رجّع كتافك بالراحة، وخلي رقبتك راجعة بدل ما تبقى مزقوقة لقدّام.",
      "en": ""
    },
    "rights": {
      "ar": "لو مع الوجع فيه وخز أو تنميل أو دراع بارد، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت النوم: مخدة واطية ومتماسكة.",
      "وقت المكتب: غيّر وضع رقبتك.",
      "وقت الحركة المحدودة: ماتسوقش وماتركبش عجلة."
    ],
    "prevention": [
      "اقعد مستقيم وماتثبتش رقبتك في نفس الوضع.",
      "ماتنامش على بطنك وماتلوّيش رقبتك في السرير."
    ],
    "drill": {
      "ar": "افتكرها: حركة، قعدة مستقيمة، مخدة واطية، ومفيش سواقة لو الحركة محدودة.",
      "en": ""
    },
    "after": {
      "ar": "لو الوجع مستمر أو المسكّن مانفعش أو فيه وخز وتنميل، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Neck pain",
        "url": "https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/",
        "srcId": "nhs:neck-pain",
        "sha256": "490ea1127b",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "sciatica",
    "title": {
      "ar": "وجع عِرق النسا",
      "en": "Sciatica"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك وجع عِرق النسا، كمّل نشاطك العادي على قد ما تقدر وابدأ حركة خفيفة. ماتقعدش أو تتمدّد وقت طويل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو عِرق النسا في الناحيتين.",
        "en": "have sciatica on both sides",
        "src": "nhs:sciatica"
      },
      {
        "t": "لو عندك ضعف أو تنميل شديد في الرجلين أو بيزيد.",
        "en": "have weakness or numbness in both legs that's severe or getting worse",
        "src": "nhs:sciatica"
      },
      {
        "t": "لو عندك تنميل حوالين أو تحت الأعضاء التناسلية، أو حوالين فتحة الشرج.",
        "en": "have numbness around or under your genitals, or around your bottom (anus)",
        "src": "nhs:sciatica"
      },
      {
        "t": "لو صعب تبدأ التبوّل، أو مش قادر تتبوّل، أو مش قادر تتحكّم في البول وده مش طبيعي بالنسبالك.",
        "en": "find it hard to start peeing, cannot pee or cannot control when you pee – and this is not normal for you",
        "src": "nhs:sciatica"
      },
      {
        "t": "لو مش بتحس إنك محتاج تدخل الحمام للبراز، أو مش قادر تتحكّم فيه وده مش طبيعي بالنسبالك.",
        "en": "do not notice when you need to poo or cannot control when you poo – and this is not normal for you",
        "src": "nhs:sciatica"
      }
    ],
    "do": [
      {
        "t": "كمّل نشاطك العادي على قد ما تقدر.",
        "en": "carry on with your normal activities as much as possible",
        "src": "nhs:sciatica"
      },
      {
        "t": "جرّب تمارين منتظمة لعِرق النسا.",
        "en": "try regular exercises for sciatica",
        "src": "nhs:sciatica"
      },
      {
        "t": "ابدأ تمرين خفيف أول ما تقدر—أي حاجة تخليك تتحرك ممكن تساعد.",
        "en": "start gentle exercise as soon as you can – anything that gets you moving can help",
        "src": "nhs:sciatica"
      },
      {
        "t": "حط كمادات دافية على الأماكن اللي بتوجعك—ممكن تشتريها من الصيدلية.",
        "en": "hold heat packs to the painful areas – you can buy these from pharmacies",
        "src": "nhs:sciatica"
      },
      {
        "t": "استخدم طريقة آمنة وإنت بترفع حاجات تقيلة.",
        "en": "use a safe technique when lifting heavy objects",
        "src": "nhs:sciatica"
      },
      {
        "t": "خلي قعدتك ووقفتك بوضع كويس.",
        "en": "make sure you have a good posture when sitting and standing",
        "src": "nhs:sciatica"
      },
      {
        "t": "اقعد صح وإنت بتستخدم الكمبيوتر.",
        "en": "sit correctly when using a computer",
        "src": "nhs:sciatica"
      },
      {
        "t": "اخس لو وزنك زايد.",
        "en": "lose weight if you're overweight",
        "src": "nhs:sciatica"
      }
    ],
    "dont": [
      {
        "t": "ماتقعدش أو تتمدّد وقت طويل—حتى لو الحركة بتوجع، هي مش مؤذية وممكن تساعدك تتحسّن أسرع.",
        "en": "do not sit or lie down for long periods – even if moving hurts, it's not harmful and can help you get better faster",
        "src": "nhs:sciatica"
      },
      {
        "t": "ماتدخنش—التدخين ممكن يزوّد احتمال إن عِرق النسا يجيلك.",
        "en": "do not smoke – smoking can increase your risk of getting sciatica",
        "src": "nhs:sciatica"
      }
    ],
    "whenWhy": {
      "ar": "المصدر بيشجّعك تفضل متحرك على قد ما تقدر، وتبدأ تمرين خفيف، بدل القعدة أو التمدّد وقت طويل.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: الوجع نازل في رجلك وإنت على المكتب. عدّل قعدتك، اتحرك حركة خفيفة، وماتفضلش قاعد وقت طويل.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كمادة دافية",
        "why": "حطها على المكان اللي بيوجعك"
      }
    ],
    "tech": [
      "حط تذكير تقوم وتتحرك بدل القعدة الطويلة"
    ],
    "writeDown": [
      "هل الوجع في ناحية ولا الناحيتين، وهل فيه ضعف أو تنميل في الرجلين"
    ],
    "videosCommunities": [
      {
        "label": "Sciatica",
        "url": "https://www.nhs.uk/conditions/sciatica/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد عنده عِرق النسا، ماتطلبش منه يفضل قاعد؛ ساعده يتحرك على قد ما يقدر.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«عندي ضعف أو تنميل بيزيد في الرجلين؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هتحرك على قدّي ومش هافضل قاعد أو متمدّد وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اقعد وواقف بوضع مستقيم، وغيّر وضعك بدل الثبات وقت طويل.",
      "en": ""
    },
    "rights": {
      "ar": "لو التنميل حوالين الأعضاء التناسلية أو التحكم في البول أو البراز اتغيّر، اطلب مساعدة طبية فورًا.",
      "en": ""
    },
    "variations": [
      "وقت المكتب: اقعد صح وغيّر وضعك.",
      "وقت الوجع: حط كمادة دافية.",
      "وقت الرفع: استخدم طريقة آمنة."
    ],
    "prevention": [
      "اعمل تمارين بانتظام وخلي قعدتك ووقفتك كويسة.",
      "ماتدخنش."
    ],
    "drill": {
      "ar": "افتكرها: حركة على قدّك، قعدة صح، وماتثبتش وقت طويل.",
      "en": ""
    },
    "after": {
      "ar": "لو الأعراض في الناحيتين أو فيها ضعف شديد أو تغيير في التحكم في البول أو البراز، اطلب مساعدة فورًا.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Sciatica",
        "url": "https://www.nhs.uk/conditions/sciatica/",
        "srcId": "nhs:sciatica",
        "sha256": "acf2734ebe",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "ball-of-foot-pain",
    "title": {
      "ar": "وجع مشط الرجل",
      "en": "Pain in the ball of the foot"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو مشط رجلك بيوجعك، ريّح رجلك وارفعها والبس جزمة واسعة بكعب واطي ونعل طري. ماتقفش أو تمشي وقت طويل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع مشط رجلك شديد.",
        "en": "you have severe pain in the ball of your foot",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "لو مش قادر تمشي.",
        "en": "you are not able to walk",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "لو شكل رجلك اتغيّر.",
        "en": "your foot has changed shape",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "لو سمعت صوت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of injury",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "لو رجلك سخنة ووارمة وبتوجعك.",
        "en": "your foot is hot, swollen and painful",
        "src": "nhs:ball-of-foot-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح رجلك وارفعها لما تقدر.",
        "en": "rest and raise your foot when you can",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على المكان اللي بيوجعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas in a towel) on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "البس جزمة فيها مساحة كفاية لرجلك، بكعب واطي ونعل طري.",
        "en": "wear shoes with plenty of room for your feet, which have a low heel and soft sole",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "استخدم فرش طري أو وسادات جوّه الجزمة.",
        "en": "use soft insoles or pads in your shoes",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you're overweight",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "اعمل تمارين شد خفيفة ومنتظمة للرجل والكاحل.",
        "en": "try regular, gentle foot and ankle-stretching exercises",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "استخدم مسكّن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:ball-of-foot-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتعملش رياضة أو نشاط إنت شايف إنه بيسبب الوجع.",
        "en": "do not do any sports or other activity that you think is causing the pain",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "ماتمشيش أو تقف وقت طويل.",
        "en": "do not walk or stand for long periods",
        "src": "nhs:ball-of-foot-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:ball-of-foot-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والرفع والتلج الملفوف والجزمة الواسعة خطوات المصدر لتقليل الحمل على مشط الرجل.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: مشط رجلك وجعك بعد الوقوف. اقعد وارفع رجلك، حط التلج الملفوف، وبدّل الجزمة الضيقة بواحدة واسعة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرش طري أو وسادات للجزمة",
        "why": "حطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "حط التلج ملفوف على المكان اللي بيوجعك"
      }
    ],
    "tech": [
      "حط تذكير لتمارين شد الرجل والكاحل"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل سمعت طقة أو اتغيّر شكل الرجل"
    ],
    "videosCommunities": [
      {
        "label": "Pain in the ball of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد مشط رجله بيوجعه، وفّر له مكان يرفع رجله وماتطلبش منه يقف أو يمشي وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمشي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح رجلي وأرفعها، ومش هاقف وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك وإنت قاعد، وخلي تمارين الشد خفيفة.",
      "en": ""
    },
    "rights": {
      "ar": "لو مش قادر تمشي أو شكل رجلك اتغيّر أو الوجع شديد، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع رجلك.",
      "وقت اللبس: اختار جزمة واسعة بنعل طري.",
      "وقت الحركة: ماتقفش أو تمشي وقت طويل."
    ],
    "prevention": [
      "البس جزمة واسعة واستخدم فرش طري لو محتاج.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، وجزمة واسعة بنعل طري.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تمشي، أو شكل رجلك اتغيّر، أو رجلك سخنة ووارمة، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Pain in the ball of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-ball-of-the-foot/",
        "srcId": "nhs:ball-of-foot-pain",
        "sha256": "c18ad4237f",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "heel-pain",
    "title": {
      "ar": "وجع الكعب",
      "en": "Heel pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو كعبك بيوجعك، ريّحه وارفعه والبس جزمة واسعة بكعب واطي ونعل طري. ماتمشيش أو تقف وقت طويل، خصوصًا وإنت حافي.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو كعبك بيوجعك جامد بعد إصابة.",
        "en": "have severe heel pain after an injury",
        "src": "nhs:heel-pain"
      },
      {
        "t": "لو شكل كاحلك أو رجلك اتغيّر أو بقى بزاوية غريبة.",
        "en": "have an ankle or foot that has changed shape or is at an odd angle",
        "src": "nhs:heel-pain"
      },
      {
        "t": "لو سمعت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "heard a snap, grinding or popping noise at the time of injury",
        "src": "nhs:heel-pain"
      },
      {
        "t": "لو مش قادر تمشي.",
        "en": "are not able to walk",
        "src": "nhs:heel-pain"
      },
      {
        "t": "لو في ورم وكدمات في سمانة رجلك وكاحلك.",
        "en": "have swelling and bruising in your calf and ankle",
        "src": "nhs:heel-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح كعبك وارفعه لما تقدر.",
        "en": "rest and raise your heel when you can",
        "src": "nhs:heel-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على كعبك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas) in a towel on your heel for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:heel-pain"
      },
      {
        "t": "البس جزمة واسعة ومريحة بكعب واطي ونعل طري.",
        "en": "wear wide comfortable shoes with a low heel and soft sole",
        "src": "nhs:heel-pain"
      },
      {
        "t": "استخدم فرش طري أو وسادات للكعب جوّه الجزمة.",
        "en": "use soft insoles or heel pads in your shoes",
        "src": "nhs:heel-pain"
      },
      {
        "t": "لف رباط حوالين كعبك وكاحلك عشان يسندهم.",
        "en": "wrap a bandage around your heel and ankle to support it",
        "src": "nhs:heel-pain"
      },
      {
        "t": "جرّب تمارين شد خفيفة ومنتظمة.",
        "en": "try regular gentle stretching exercises",
        "src": "nhs:heel-pain"
      },
      {
        "t": "استخدم مسكن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:heel-pain"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you are overweight",
        "src": "nhs:heel-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتمشيش أو تقف وقت طويل، خصوصًا وإنت حافي.",
        "en": "do not walk or stand for long periods, especially barefoot",
        "src": "nhs:heel-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:heel-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والرفع والتلج الملفوف والجزمة الواسعة خطوات المصدر لتخفيف وجع الكعب.",
      "en": ""
    },
    "how": {
      "ar": "اقعد وارفع رجلك، حط التلج الملفوف، وبدّل الجزمة الضيقة بواحدة واسعة ومريحة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرش طري أو وسادة للكعب",
        "why": "تحطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "تحط التلج ملفوف على الكعب"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الشد الخفيفة"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل حصلت إصابة أو سمعت صوت وقتها"
    ],
    "videosCommunities": [
      {
        "label": "Heel pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/heel-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد كعبه بيوجعه، وفّر له مكان يرفع رجله وماتطلبش منه يمشي أو يقف وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمشي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح كعبي وأرفعه، ومش هاقف وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك وإنت قاعد، وخلي تمارين الشد خفيفة.",
      "en": ""
    },
    "rights": {
      "ar": "لو مش قادر تمشي أو شكل رجلك اتغيّر أو الوجع شديد بعد إصابة، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع كعبك.",
      "وقت اللبس: اختار جزمة واسعة بنعل طري.",
      "وقت الحركة: ماتقفش أو تمشي وقت طويل."
    ],
    "prevention": [
      "البس جزمة واسعة ومريحة.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، وجزمة واسعة.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تمشي أو شكل رجلك اتغيّر أو في ورم وكدمات في السمانة والكاحل، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Heel pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/heel-pain/",
        "srcId": "nhs:heel-pain",
        "sha256": "4db4984985",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "toe-pain",
    "title": {
      "ar": "وجع صوابع الرجل",
      "en": "Toe pain"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو صباع رجلك بيوجعك، ريّح رجلك وارفعها والبس جزمة واسعة ومريحة. ماتقفش أو تمشي وقت طويل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو صباع رجلك الكبير اتصاب جامد.",
        "en": "you have badly hurt your big toe",
        "src": "nhs:toe-pain"
      },
      {
        "t": "لو صباع رجلك باصص بزاوية غريبة.",
        "en": "your toe is pointing at an odd angle",
        "src": "nhs:toe-pain"
      },
      {
        "t": "لو سمعت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of injury",
        "src": "nhs:toe-pain"
      },
      {
        "t": "لو صعب تحرك صوابع رجلك أو مش قادر تمشي.",
        "en": "you have difficulty moving your toes or you cannot walk",
        "src": "nhs:toe-pain"
      },
      {
        "t": "لو صباع رجلك بيوجعك وإنت حاسس بسخونية أو برد أو رعشة.",
        "en": "you have toe pain and feel hot, cold or shivery",
        "src": "nhs:toe-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح رجلك وارفعها لما تقدر.",
        "en": "rest and raise your foot when you can",
        "src": "nhs:toe-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة ملفوفة في فوطة على صباع رجلك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات—وده مش مناسب لو عندك تورمات البرد أو رينود.",
        "en": "put an ice pack (or bag of frozen peas) wrapped in a towel on your toe for up to 20 minutes every 2 to 3 hours – this is not suitable if you have chilblains or Raynaud's",
        "src": "nhs:toe-pain"
      },
      {
        "t": "البس جزمة واسعة ومريحة بكعب واطي ونعل طري.",
        "en": "wear wide comfortable shoes with a low heel and soft sole",
        "src": "nhs:toe-pain"
      },
      {
        "t": "استخدم مسكن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:toe-pain"
      },
      {
        "t": "اربط الصباع المكسور جنب اللي بعده: حط حتة صغيرة قطن أو شاش بينهم وثبتهم بشريط بخفة—ماتعملش ده لصباع الرجل الكبير أو لو الكسر شديد.",
        "en": "buddy strap a broken toe – put a small piece of cotton wool or gauze between your sore toe and the next toe, and use tape to loosely strap it up (do not do this for a big toe or a badly broken toe)",
        "src": "nhs:toe-pain"
      },
      {
        "t": "جرّب تمارين شد خفيفة ومنتظمة.",
        "en": "try regular gentle stretching exercises",
        "src": "nhs:toe-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتمشيش أو تقف وقت طويل.",
        "en": "do not walk or stand for long periods",
        "src": "nhs:toe-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:toe-pain"
      },
      {
        "t": "ماتحطش تلج على صباع رجلك لو عندك تورمات البرد أو رينود.",
        "en": "do not put an ice pack on your toe if you have chilblains or Raynaud's",
        "src": "nhs:toe-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والرفع والتلج الملفوف والجزمة الواسعة خطوات المصدر لتخفيف وجع صوابع الرجل.",
      "en": ""
    },
    "how": {
      "ar": "اقعد وارفع رجلك، حط التلج الملفوف لو مناسب ليك، والبس جزمة واسعة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "قطن أو شاش وشريط",
        "why": "لربط الصباع المكسور جنب اللي بعده لو الشروط مناسبة"
      },
      {
        "item": "جزمة واسعة بنعل طري",
        "why": "عشان ماتضغطش على الصوابع"
      }
    ],
    "tech": [
      "حط تذكير لتمارين الشد الخفيفة"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل الصباع اتغيّر شكله أو سمعت صوت وقت الإصابة"
    ],
    "videosCommunities": [
      {
        "label": "Toe pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/toe-pain/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد صباع رجله بيوجعه، ساعده يرفع رجله وماتطلبش منه يمشي.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمشي أو أحرك صوابعي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح رجلي وأرفعها، وهالبس جزمة واسعة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك وإنت قاعد وماتحمّلش عليها لو مش قادر تمشي.",
      "en": ""
    },
    "rights": {
      "ar": "لو الصباع بزاوية غريبة أو مش قادر تمشي أو تحرك صوابعك، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع رجلك.",
      "وقت اللبس: اختار جزمة واسعة.",
      "لو عندك رينود أو تورمات البرد: ماتحطش تلج على الصباع."
    ],
    "prevention": [
      "البس جزمة واسعة ومريحة.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، جزمة واسعة، وماتمشيش وقت طويل.",
      "en": ""
    },
    "after": {
      "ar": "لو الصباع اتصاب جامد أو بقى بزاوية غريبة أو مش قادر تمشي، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Toe pain",
        "url": "https://www.nhs.uk/symptoms/foot-pain/toe-pain/",
        "srcId": "nhs:toe-pain",
        "sha256": "3eb390718e",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "top-of-foot-pain",
    "title": {
      "ar": "وجع وشّ الرجل",
      "en": "Pain in the top of the foot"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو وشّ رجلك بيوجعك، ريّح رجلك وارفعها والبس جزمة فيها مساحة وبنعل طري. وقف النشاط اللي شايف إنه بيسبب الوجع.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع وشّ رجلك شديد.",
        "en": "you have severe pain in the top of your foot",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "لو مش قادر تمشي.",
        "en": "you're not able to walk",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "لو شكل رجلك اتغيّر أو بقت بزاوية غريبة.",
        "en": "your foot has changed shape or is at an odd angle",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "لو رجلك سخنة ووارمة.",
        "en": "your foot is also hot and swollen",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "لو حرارتك عالية جدًا أو حاسس بسخونية شديدة أو برد ورعشة.",
        "en": "you have a very high temperature or you feel very hot, or cold and shivery",
        "src": "nhs:top-of-foot-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح رجلك وارفعها لما تقدر.",
        "en": "rest and raise your foot when you can",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على المكان اللي بيوجعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas in a towel) on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "البس جزمة فيها مساحة كفاية لرجلك، بكعب واطي ونعل طري.",
        "en": "wear shoes with plenty of room for your feet, which have a low heel and soft sole",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "استخدم فرش طري أو وسادات جوّه الجزمة.",
        "en": "use soft insoles or pads you put in your shoes",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "حاول تخس لو وزنك زايد.",
        "en": "try to lose weight if you're overweight",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "جرّب تمارين شد خفيفة ومنتظمة للقدم والكاحل.",
        "en": "try regular gentle stretching exercises of your foot and ankle",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "استخدم مسكن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:top-of-foot-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتعملش رياضة أو نشاط إنت شايف إنه بيسبب الوجع.",
        "en": "do not do any sports or other activity that you think is causing the pain",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "ماتمشيش أو تقف وقت طويل.",
        "en": "do not walk or stand for a long time",
        "src": "nhs:top-of-foot-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة أو مدببة.",
        "en": "do not wear high heels or tight or pointy shoes",
        "src": "nhs:top-of-foot-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والرفع والتلج الملفوف والجزمة الواسعة خطوات المصدر لتخفيف وجع وشّ الرجل.",
      "en": ""
    },
    "how": {
      "ar": "اقعد وارفع رجلك، حط التلج الملفوف، ووقف النشاط اللي بيسبب الوجع.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرش طري أو وسادات للجزمة",
        "why": "تحطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "تحط التلج ملفوف على المكان اللي بيوجعك"
      }
    ],
    "tech": [
      "حط تذكير لتمارين شد القدم والكاحل"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل شكل الرجل اتغيّر أو بقت سخنة ووارمة"
    ],
    "videosCommunities": [
      {
        "label": "Pain in the top of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-top-of-the-foot/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد وشّ رجله بيوجعه، وفّر له مكان يرفع رجله وماتطلبش منه يقف أو يمشي وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«رجلي سخنة ووارمة ومحتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح رجلي وأرفعها، وهوقف النشاط اللي بيسبب الوجع.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك وإنت قاعد وخلي تمارين الشد خفيفة.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو مش قادر تمشي أو رجلك سخنة ووارمة، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع رجلك.",
      "وقت اللبس: اختار جزمة واسعة بنعل طري.",
      "وقت النشاط: وقف اللي بيسبب الوجع."
    ],
    "prevention": [
      "البس جزمة فيها مساحة كفاية.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، ووقف النشاط الموجع.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تمشي أو شكل رجلك اتغيّر أو بقت سخنة ووارمة، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Pain in the top of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-top-of-the-foot/",
        "srcId": "nhs:top-of-foot-pain",
        "sha256": "7040f23af1",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "bottom-of-foot-pain",
    "title": {
      "ar": "وجع باطن الرجل",
      "en": "Pain in the bottom of the foot"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو باطن رجلك بيوجعك، ريّح رجلك وارفعها والبس جزمة واسعة بنعل طري. ماتمشيش أو تقف وقت طويل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع باطن رجلك شديد.",
        "en": "you have severe pain in the bottom of your foot",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "لو مش قادر تمشي.",
        "en": "you're not able to walk",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "لو شكل رجلك اتغيّر أو بقت بزاوية غريبة.",
        "en": "your foot has changed shape or is at an odd angle",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "لو سمعت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of injury",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "لو حاسس إنك هاتغمى عليك أو دايخ أو تعبان من الوجع.",
        "en": "you feel faint, dizzy or sick from the pain",
        "src": "nhs:bottom-of-foot-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح رجلك وارفعها لما تقدر.",
        "en": "rest and raise your foot when you can",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على المكان اللي بيوجعك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or bag of frozen peas in a towel) on the painful area for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "البس جزمة فيها مساحة كفاية لرجلك، بكعب واطي ونعل طري.",
        "en": "wear shoes with plenty of room for your feet that have a low heel and soft sole",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "استخدم فرش طري أو وسادات جوّه الجزمة.",
        "en": "use soft insoles or pads you put in your shoes",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "حاول تخس لو محتاج.",
        "en": "try to lose weight if you need to",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "جرّب تمارين شد خفيفة ومنتظمة للقدم والكاحل.",
        "en": "try regular gentle stretching exercises for your foot and ankle",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "استخدم مسكن زي باراسيتامول أو جل إيبوبروفين، أو أقراص إيبوبروفين لو محتاج.",
        "en": "use painkillers such as paracetamol or ibuprofen gel (or ibuprofen tablets if needed)",
        "src": "nhs:bottom-of-foot-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتعملش رياضة أو نشاط إنت شايف إنه بيسبب الوجع.",
        "en": "do not do any sports or other activity that you think is causing the pain",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "ماتمشيش أو تقف وقت طويل.",
        "en": "do not walk or stand for long periods",
        "src": "nhs:bottom-of-foot-pain"
      },
      {
        "t": "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة.",
        "en": "do not wear high heels or tight pointy shoes",
        "src": "nhs:bottom-of-foot-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والرفع والتلج الملفوف والجزمة الواسعة خطوات المصدر لتخفيف وجع باطن الرجل.",
      "en": ""
    },
    "how": {
      "ar": "اقعد وارفع رجلك، حط التلج الملفوف، والبس جزمة واسعة بنعل طري.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرش طري أو وسادات للجزمة",
        "why": "تحطها جوّه الجزمة"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "تحط التلج ملفوف على المكان اللي بيوجعك"
      }
    ],
    "tech": [
      "حط تذكير لتمارين شد القدم والكاحل"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل حصلت إصابة أو اتغيّر شكل الرجل"
    ],
    "videosCommunities": [
      {
        "label": "Pain in the bottom of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-bottom-of-the-foot/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد باطن رجله بيوجعه، ساعده يرفع رجله وماتطلبش منه يمشي أو يقف وقت طويل.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمشي؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح رجلي وأرفعها، ومش هامشي وقت طويل.»"
      ]
    },
    "bodyLanguage": {
      "ar": "ارفع رجلك وإنت قاعد وخلي تمارين الشد خفيفة.",
      "en": ""
    },
    "rights": {
      "ar": "لو الوجع شديد أو مش قادر تمشي أو شكل رجلك اتغيّر، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت الراحة: ارفع رجلك.",
      "وقت اللبس: اختار جزمة واسعة بنعل طري.",
      "وقت النشاط: وقف اللي بيسبب الوجع."
    ],
    "prevention": [
      "البس جزمة واسعة بنعل طري.",
      "ماتلبسش كعب عالي أو جزمة ضيقة ومدببة."
    ],
    "drill": {
      "ar": "افتكرها: راحة ورفع، تلج ملفوف، وجزمة واسعة.",
      "en": ""
    },
    "after": {
      "ar": "لو مش قادر تمشي أو شكل رجلك اتغيّر أو حاسس إنك هاتغمى عليك من الوجع، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Pain in the bottom of the foot",
        "url": "https://www.nhs.uk/symptoms/foot-pain/pain-in-the-bottom-of-the-foot/",
        "srcId": "nhs:bottom-of-foot-pain",
        "sha256": "ca96d7b34e",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "palm-of-hand-pain",
    "title": {
      "ar": "وجع كف الإيد",
      "en": "Pain in the palm of the hand"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو كف إيدك بيوجعك، ريّح إيدك وقلل النشاط اللي بيسبب الوجع. ماتشيلش حاجة تقيلة وماتمسكش حاجة جامد.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو وجع إيدك شديد.",
        "en": "you have severe pain in your hand",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "لو كف إيدك بيوجعك وإنت تعبان عمومًا أو حاسس بسخونية أو برد أو رعشة.",
        "en": "you have pain in the palm of your hand and also feel generally unwell, or hot, cold or shivery",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "لو سمعت طقة أو طحن أو فرقعة وقت الإصابة.",
        "en": "you heard a snap, grinding or popping noise at the time of the injury",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "لو مش قادر تحرك إبهامك أو تمسك حاجات.",
        "en": "you're not able to move your thumb or hold things",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "لو فقدت الإحساس في جزء من إيدك أو كلها.",
        "en": "you've lost the feeling in part or all of your hand",
        "src": "nhs:palm-of-hand-pain"
      }
    ],
    "do": [
      {
        "t": "ريّح إيدك لما تقدر.",
        "en": "rest your hand when you can",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "حط كيس تلج أو بسلة مجمّدة في فوطة على كف إيدك لمدة لحد ٢٠ دقيقة كل ٢ لـ٣ ساعات.",
        "en": "put an ice pack (or a bag of frozen peas) in a towel and place it on your palm for up to 20 minutes every 2 to 3 hours",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "خد باراسيتامول عشان يخفف الوجع.",
        "en": "take paracetamol to ease the pain",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "شيل أي خاتم أو إكسسوار لو إيدك وارمة.",
        "en": "remove any jewellery if your hand is swollen",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "وقف أو قلل النشاط اللي بيسبب الوجع—زي الكتابة أو الطباعة أو شغل البيت أو التصليحات.",
        "en": "stop or cut down activities that are causing the pain – for example, writing, typing, DIY or housework",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "لف رباط حوالين إيدك عشان يسندها.",
        "en": "wrap a bandage around your hand to support it",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "البس جبيرة تسند كف إيدك وتخفف الوجع، خصوصًا بالليل—هتلاقيها في صيدليات وسوبرماركت كتير.",
        "en": "wear a splint to support your palm and ease pain, especially at night – you can get these at most pharmacies and supermarkets",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "حرّك إيدك ورسغك بتمارين خفيفة عشان تخفف الوجع والتيبّس.",
        "en": "keep your hands and wrists moving with gentle exercises to help ease pain and stiffness",
        "src": "nhs:palm-of-hand-pain"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش كمادات سخنة أو تاخد حمام سخن في أول ٢ لـ٣ أيام بعد الإصابة.",
        "en": "do not use heat packs or have hot baths for the first 2 to 3 days after an injury",
        "src": "nhs:palm-of-hand-pain"
      },
      {
        "t": "ماتشيلش حاجات تقيلة وماتمسكش أي حاجة جامد.",
        "en": "do not lift heavy objects or grip anything too tightly",
        "src": "nhs:palm-of-hand-pain"
      }
    ],
    "whenWhy": {
      "ar": "الراحة والتلج الملفوف وتقليل النشاط الموجع خطوات المصدر لتخفيف وجع كف الإيد.",
      "en": ""
    },
    "how": {
      "ar": "شيل الخواتم لو إيدك وارمة، ريّحها، وحط التلج الملفوف على الكف.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "رباط أو جبيرة للإيد",
        "why": "عشان تسند كف الإيد"
      },
      {
        "item": "كيس تلج وفوطة",
        "why": "تحط التلج ملفوف على الكف"
      }
    ],
    "tech": [
      "حط تذكير عشان تقلل النشاط اللي بيسبب الوجع"
    ],
    "writeDown": [
      "إمتى الوجع بدأ، وهل فقدت الإحساس أو بقيت مش قادر تمسك حاجات"
    ],
    "videosCommunities": [
      {
        "label": "Pain in the palm of the hand",
        "url": "https://www.nhs.uk/symptoms/hand-pain/pain-in-the-palm-of-the-hand/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد كف إيده بيوجعه، ساعده في الشيل وماتطلبش منه يمسك حاجة جامد.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أمسك حاجات؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هاريّح إيدي وأقلل النشاط اللي بيوجعها.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اسند إيدك وخلي حركتها خفيفة من غير مسك جامد.",
      "en": ""
    },
    "rights": {
      "ar": "لو فقدت الإحساس أو مش قادر تحرك إبهامك أو تمسك حاجات، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "لو إيدك وارمة: شيل الخواتم.",
      "وقت الشغل: قلل النشاط اللي بيسبب الوجع.",
      "وقت الراحة: اسند إيدك."
    ],
    "prevention": [
      "ماتشيلش حاجات تقيلة.",
      "ماتمسكش أي حاجة جامد."
    ],
    "drill": {
      "ar": "افتكرها: شيل الخواتم، ريّح إيدك، وتلج ملفوف.",
      "en": ""
    },
    "after": {
      "ar": "لو وجع إيدك شديد أو فقدت الإحساس أو مش قادر تمسك حاجات، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Pain in the palm of the hand",
        "url": "https://www.nhs.uk/symptoms/hand-pain/pain-in-the-palm-of-the-hand/",
        "srcId": "nhs:palm-of-hand-pain",
        "sha256": "4af804cedf",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "nail-problems",
    "title": {
      "ar": "مشاكل الضوافر",
      "en": "Nail problems"
    },
    "level": 2,
    "who": [
      "الكبار"
    ],
    "place": [
      "البيت",
      "الشغل"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "اهتم بضوافرك بفرشة ناعمة وقصّها بانتظام. ماتنضفش تحتها بحاجة حادة وماتقضمهاش أو تشد الجلد حواليها.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو ضافرك اتغيّر شكله أو لونه أو وقع وإنت مش عارف السبب.",
        "en": "a nail has changed shape, changed colour or fallen off and you do not know why",
        "src": "nhs:nail-problems"
      },
      {
        "t": "لو الجلد حوالين ضوافرك بقى بيوجع أو أحمر أو وارم وسخن—ده ممكن يكون علامة على عدوى أو ضافر غارز.",
        "en": "the skin around your nails has become sore, red, swollen and warm (paronychia), which can be a sign of an infection or ingrown toenail",
        "src": "nhs:nail-problems"
      },
      {
        "t": "لو ضوافرك صلبة قوي ومش قادر تقصها أو مش قادر توصل لها.",
        "en": "your nails are too tough to cut or you cannot reach them",
        "src": "nhs:nail-problems"
      }
    ],
    "do": [
      {
        "t": "البس جوانتي مطاط لو إيدك بتفضل في الميه كتير أو بتستخدم منظفات بانتظام.",
        "en": "wear rubber gloves if your hands are often in water or you regularly use cleaning products",
        "src": "nhs:nail-problems"
      },
      {
        "t": "نضّف ضوافرك بفرشة ضوافر ناعمة.",
        "en": "clean your nails with a soft nailbrush",
        "src": "nhs:nail-problems"
      },
      {
        "t": "حط كريم إيدين على ضوافرك وأطراف صوابعك بانتظام.",
        "en": "apply hand cream to your nails and fingertips regularly",
        "src": "nhs:nail-problems"
      },
      {
        "t": "قص ضوافرك بانتظام—ممكن يساعد إنك تقصها بعد الدش أو الحمام.",
        "en": "trim your nails regularly (it may help to cut them after a shower or bath)",
        "src": "nhs:nail-problems"
      },
      {
        "t": "قص الجزء السايب من الضافر المصاب لحد المكان اللي لسه ماسك، عشان مايتنيش أو يعلق في حاجة.",
        "en": "cut injured, loose nails back to where they are still attached, so they do not bend or catch on objects",
        "src": "nhs:nail-problems"
      }
    ],
    "dont": [
      {
        "t": "ماتقصش ضوافرك من الجوانب؛ قصها مستقيمة من فوق عشان تساعد تتجنب الضافر الغارز.",
        "en": "do not cut your nails down the edges, and only trim straight across the top to help avoid an ingrown toenail",
        "src": "nhs:nail-problems"
      },
      {
        "t": "ماتنضفش تحت ضوافرك بحاجة حادة.",
        "en": "do not clean under your nails with sharp objects",
        "src": "nhs:nail-problems"
      },
      {
        "t": "ماتلبسش جزمة بتقرص صوابع رجلك، خصوصًا وإنت بتتمرن.",
        "en": "do not wear shoes that pinch your toes, especially when exercising",
        "src": "nhs:nail-problems"
      },
      {
        "t": "ماتقضمش أو تشد ضوافرك أو الجلد اللي حواليها.",
        "en": "do not bite or pick your nails or the skin around them",
        "src": "nhs:nail-problems"
      },
      {
        "t": "ماتتجاهلش العدوى الفطرية في جلدك، زي فطريات القدم.",
        "en": "do not ignore fungal infections on your skin, such as athlete's foot",
        "src": "nhs:nail-problems"
      }
    ],
    "whenWhy": {
      "ar": "التنضيف بفرشة ناعمة والقص المنتظم وحماية الإيد من الميه والمنظفات هي خطوات المصدر للعناية بالضوافر.",
      "en": ""
    },
    "how": {
      "ar": "استخدم فرشة ناعمة، قص الضوافر مستقيمة من فوق، وحط كريم على الضوافر وأطراف الصوابع.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "فرشة ضوافر ناعمة",
        "why": "لتنضيف الضوافر"
      },
      {
        "item": "جوانتي مطاط",
        "why": "لو إيدك بتفضل في الميه أو المنظفات"
      }
    ],
    "tech": [
      "حط تذكير للعناية المنتظمة بالضوافر"
    ],
    "writeDown": [
      "إيه اللي اتغيّر في شكل أو لون الضافر، وإمتى بدأ"
    ],
    "videosCommunities": [
      {
        "label": "Nail problems",
        "url": "https://www.nhs.uk/symptoms/nail-problems/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد مش قادر يوصل لضوافره أو يقصها، ساعده يطلب مساعدة مناسبة بدل استخدام حاجة حادة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«مش قادر أقص ضوافري أو أوصل لها؛ محتاج مساعدة.»"
      ],
      "toSelf": [
        "«هانضف ضوافري بفرشة ناعمة ومش هستخدم حاجة حادة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "امسك أدوات العناية بهدوء وماتشدش الجلد حوالين الضوافر.",
      "en": ""
    },
    "rights": {
      "ar": "لو الضافر اتغيّر من غير سبب معروف أو الجلد حواليه بقى أحمر ووارم وسخن، اطلب مساعدة طبية.",
      "en": ""
    },
    "variations": [
      "وقت التنضيف: استخدم فرشة ناعمة.",
      "وقت القص: قص مستقيم من فوق.",
      "مع الميه والمنظفات: البس جوانتي مطاط."
    ],
    "prevention": [
      "ماتنضفش تحت الضوافر بحاجة حادة.",
      "ماتلبسش جزمة بتقرص صوابع رجلك."
    ],
    "drill": {
      "ar": "افتكرها: فرشة ناعمة، قص مستقيم، وجوانتي مع المنظفات.",
      "en": ""
    },
    "after": {
      "ar": "لو شكل أو لون الضافر اتغيّر من غير سبب أو الجلد حواليه بقى أحمر ووارم وسخن، اطلب مساعدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Nail problems",
        "url": "https://www.nhs.uk/symptoms/nail-problems/",
        "srcId": "nhs:nail-problems",
        "sha256": "ce18ffb3a8",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "itchy-skin",
    "title": {
      "ar": "حكة الجلد",
      "en": "Itchy skin"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو جلدك بيحكّك، جرّب التربيت بدل الحك، وبرّده، واستخدم مرطّب من غير عطر.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "الحكة مأثّرة على حياتك اليومية.",
        "en": "is affecting your daily life",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "الحكة مش بتتحسّن بالعناية في البيت أو بتفضل ترجع.",
        "en": "does not get better with self care or keeps coming back",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "سببها طفح جديد، أو كتلة، أو تورّم مقلّقك.",
        "en": "is caused by a new rash, lump or swelling that you're worried about",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "الحكة في جسمك كله.",
        "en": "is all over your body",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "الحكة شديدة.",
        "en": "is severe",
        "src": "nhs:itchy-skin"
      }
    ],
    "do": [
      {
        "t": "طبطّب على جلدك أو ربّت عليه بخفة بدل ما تحكّه.",
        "en": "pat or tap your skin instead of scratching it",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "حُط حاجة باردة على جلدك، زي فوطة مبلولة.",
        "en": "hold something cool on your skin, like a damp towel",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "استحمّى بميّه باردة أو فاترة.",
        "en": "have cool or lukewarm baths or showers",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "استخدم مرطّب أو مُليّن للجلد من غير عطر بانتظام.",
        "en": "use an unperfumed moisturiser or emollient regularly",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "خلّي ضوافرك نضيفة وقصيرة وناعمة.",
        "en": "keep your nails clean, short and smooth",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "البس هدوم واسعة من القطن أو الحرير.",
        "en": "wear loose cotton or silk clothing",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "استخدم سائل أو مسحوق غسيل مخصّص للبشرة الحساسة.",
        "en": "use a laundry liquid or powder that's for sensitive skin",
        "src": "nhs:itchy-skin"
      }
    ],
    "dont": [
      {
        "t": "ماتلبسش هدوم ضيقة، ولا هدوم من الصوف أو الأقمشة الصناعية.",
        "en": "do not wear tight clothes, or clothes made from wool or synthetic fabrics",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "ماتطوّلش في البانيو أو تحت الدش.",
        "en": "do not spend a long time in the bath or shower",
        "src": "nhs:itchy-skin"
      },
      {
        "t": "ماتستخدمش صابون أو مزيل عرق أو مرطّب معطّر.",
        "en": "do not use perfumed soaps, deodorants or moisturisers",
        "src": "nhs:itchy-skin"
      }
    ],
    "whenWhy": {
      "ar": "بدل الحك، طبطّب على جلدك أو برّده. اختار مرطّب من غير عطر، واستخدم سائل أو مسحوق غسيل مخصّص للبشرة الحساسة.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: جلدك بدأ يحكّك. بدل ما تحكّه، تطبطّب عليه، وتحط فوطة مبلولة باردة، وبعدها تستخدم مرطّب من غير عطر.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "مرطّب أو مُليّن للجلد من غير عطر",
        "why": "لاستخدامه بانتظام"
      },
      {
        "item": "سائل أو مسحوق غسيل للبشرة الحساسة",
        "why": "لغسيل هدومك"
      }
    ],
    "tech": [
      "اعمل تذكير بسيط على موبايلك لخطوة العناية اللي اخترتها."
    ],
    "writeDown": [
      "هل الحكة مأثّرة على يومك، وهل بتتحسّن بالعناية في البيت ولا بترجع"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Itchy skin",
        "url": "https://www.nhs.uk/symptoms/itchy-skin/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد قدامك جلده بيحكّه، ساعده يلاقي حاجة باردة أو مرطّب من غير عطر بدل ما يفضل يحك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«ممكن تجيبلي فوطة مبلولة باردة؟»"
      ],
      "toSelf": [
        "«هطبطّب بدل ما أحك، وهستخدم حاجة باردة.»"
      ]
    },
    "bodyLanguage": {
      "ar": "إيد خفيفة في التربيت على الجلد بدل الحك.",
      "en": ""
    },
    "rights": {
      "ar": "خلي بالك لو الحكة مأثّرة على حياتك اليومية أو شديدة.",
      "en": ""
    },
    "variations": [
      "لو الحكة في جسمك كله.",
      "لو سبب الحكة طفح جديد، أو كتلة، أو تورّم مقلّقك."
    ],
    "prevention": [
      "خلّي ضوافرك نضيفة وقصيرة وناعمة.",
      "البس هدوم واسعة من القطن أو الحرير.",
      "استخدم منتجات غسيل للبشرة الحساسة، وابعد عن المنتجات المعطّرة."
    ],
    "drill": {
      "ar": "جهّز فوطة مبلولة باردة، وافتكر: طبطّب بدل ما تحك.",
      "en": ""
    },
    "after": {
      "ar": "لاحظ لو العناية في البيت ماحسّنتش الحكة، أو لو فضلت ترجع، أو بقت شديدة.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Itchy skin",
        "url": "https://www.nhs.uk/symptoms/itchy-skin/",
        "srcId": "nhs:itchy-skin",
        "sha256": "8151d819dc",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "psoriasis",
    "title": {
      "ar": "الصدفية",
      "en": "Psoriasis"
    },
    "level": 2,
    "who": [
      "اللي عنده صدفية"
    ],
    "place": [
      "البيت والحياة اليومية"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو عندك صدفية، لاحظ الحاجات اللي بتزوّد أعراضك وحاول تتجنبها. وخلي بالك لو العلاج مش نافع، عامل آثار جانبية، أو ظهرت تغيّرات مقلقة في الجلد أو المفاصل.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عندك صدفية والعلاج مش نافع أو عامل لك آثار جانبية.",
        "en": "you have psoriasis and your treatment is not working or is giving you side effects",
        "src": "nhs:psoriasis"
      },
      {
        "t": "عندك صدفية، ومعاها ألم وتيبّس وتورّم في المفاصل بيرجعوا تاني.",
        "en": "you have psoriasis and also have pain, stiffness and swelling in your joints that keeps coming back",
        "src": "nhs:psoriasis"
      },
      {
        "t": "جلدك احمرّ بسرعة وظهرت حبوب بيضا مليانة صديد وبتتجمع مع بعض — الاحمرار ممكن يكون أصعب في الملاحظة على البشرة البنية أو السودا.",
        "en": "your skin quickly turns red and you develop white, pus-filled bumps that join together – redness may be harder to see on brown or black skin",
        "src": "nhs:psoriasis"
      },
      {
        "t": "بقع الصدفية على قدميك بقت لونها أصفر مائل للبني ومليانة صديد.",
        "en": "have psoriasis patches on your feet that turn yellow-brown and are filled with pus",
        "src": "nhs:psoriasis"
      },
      {
        "t": "ظهر على أطراف صوابع إيديك ورجليك حبوب حمرا ومتقشرة ومليانة صديد — الاحمرار ممكن يكون أصعب في الملاحظة على البشرة البنية أو السودا.",
        "en": "your fingers and toes have red, scaly pus-filled bumps on the tips – redness may be harder to see on brown or black skin",
        "src": "nhs:psoriasis"
      }
    ],
    "do": [
      {
        "t": "حاول تتجنب الحاجات اللي بتزوّد أعراضك، يعني محفزاتك.",
        "en": "try to avoid the things that make your symptoms worse (triggers)",
        "src": "nhs:psoriasis"
      },
      {
        "t": "خلي أكلك صحي ومتوازن.",
        "en": "have a healthy, balanced diet",
        "src": "nhs:psoriasis"
      },
      {
        "t": "اتحرك واعمل رياضة بانتظام.",
        "en": "get regular exercise",
        "src": "nhs:psoriasis"
      },
      {
        "t": "حاول تقلل التوتر على قد ما تقدر.",
        "en": "try to reduce stress if you can",
        "src": "nhs:psoriasis"
      },
      {
        "t": "حاول ماتشربش كحول بزيادة.",
        "en": "try not to drink too much alcohol",
        "src": "nhs:psoriasis"
      },
      {
        "t": "لو بتدخن، حاول تبطّل.",
        "en": "try to stop smoking, if you smoke",
        "src": "nhs:psoriasis"
      }
    ],
    "dont": [
      {
        "t": "ماتشاركش علاجاتك المرطّبة مع أي حد تاني.",
        "en": "do not share your moisturising treatments (emollients) with anyone else",
        "src": "nhs:psoriasis"
      },
      {
        "t": "ماتدخلش صوابعك في علبة العلاج المرطّب — استخدم معلقة أو سباتولا أو عبوة بمضخة بدل كده.",
        "en": "do not put your fingers into a pot of emollient – use a spoon, spatula or pump dispenser instead",
        "src": "nhs:psoriasis"
      },
      {
        "t": "لو بتستخدم علاج مرطّب، ماتدخنش وماتقربش من نار مكشوفة — الهدوم والملايات اللي لمسها العلاج المرطّب بتولع أسهل.",
        "en": "do not smoke or go near naked flames if you use an emollient – clothing and bedding that's been in contact with an emollient burns more easily",
        "src": "nhs:psoriasis"
      }
    ],
    "whenWhy": {
      "ar": "تجنّب محفزاتك بيساعدك ماتزوّدش الأعراض. ومع العلاج المرطّب، ابعد عن التدخين والنار المكشوفة لأن الهدوم والملايات اللي لمسها بتولع أسهل.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: لاحظت إن حاجة معيّنة زوّدت أعراضك، فتسجّلها وتتجنبها. ولما تستخدم العلاج المرطّب من علبة، تاخده بمعلقة أو سباتولا بدل صوابعك.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "معلقة أو سباتولا أو عبوة علاج مرطّب بمضخة",
        "why": "عشان ماتدخلش صوابعك في علبة العلاج المرطّب"
      }
    ],
    "tech": [
      "منبّه للحركة والرياضة المنتظمة",
      "ملاحظة على الموبايل بالحاجات اللي بتزوّد أعراضك"
    ],
    "writeDown": [
      "الحاجات اللي بتزوّد أعراضك",
      "هل العلاج مش نافع أو عامل آثار جانبية",
      "أي ألم أو تيبّس أو تورّم في المفاصل بيرجع تاني"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Psoriasis",
        "url": "https://www.nhs.uk/conditions/psoriasis/"
      }
    ],
    "othersPOV": {
      "ar": "علاجك المرطّب ليك إنت؛ ماتشاركوش مع حد تاني. ولو حد بيساعدك، وضّح له يستخدم معلقة أو سباتولا أو المضخة بدل ما يدخل صوابعه في العلبة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«العلاج المرطّب ده استخدام شخصي، وماتدخلش صوابعك في العلبة.»"
      ],
      "toSelf": [
        "«هلاحظ محفزاتي وأتجنبها، وهقلل التوتر على قد ما أقدر.»"
      ]
    },
    "bodyLanguage": {
      "ar": "لاحظ الحاجات اللي بتزوّد أعراضك، وحاول تتجنبها.",
      "en": ""
    },
    "rights": {
      "ar": "علاجك المرطّب استخدام شخصي؛ ماتشاركوش مع أي حد تاني.",
      "en": ""
    },
    "variations": [
      "على البشرة البنية أو السودا: الاحمرار ممكن يكون أصعب في الملاحظة.",
      "في القدمين: لاحظ لو بقع الصدفية بقت صفرا مائلة للبني ومليانة صديد.",
      "في أطراف صوابع الإيدين والرجلين: لاحظ الحبوب الحمرا المتقشرة والمليانة صديد."
    ],
    "prevention": [
      "تجنب الحاجات اللي بتزوّد أعراضك.",
      "حافظ على أكل صحي ومتوازن ورياضة منتظمة.",
      "قلل التوتر، وحاول ماتشربش كحول بزيادة وتبطّل التدخين لو بتدخن."
    ],
    "drill": {
      "ar": "اتدرّب على روتين بسيط: لاحظ محفزاتك وسجّلها، واستخدم معلقة أو سباتولا أو المضخة مع العلاج المرطّب.",
      "en": ""
    },
    "after": {
      "ar": "لاحظ لو العلاج مش نافع أو عامل لك آثار جانبية، أو لو ألم وتيبّس وتورّم المفاصل بيرجعوا.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Psoriasis",
        "url": "https://www.nhs.uk/conditions/psoriasis/",
        "srcId": "nhs:psoriasis",
        "sha256": "d968845995",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "acne",
    "title": {
      "ar": "حبّ الشباب",
      "en": "Acne"
    },
    "level": 2,
    "who": [
      "اللي عنده حبّ الشباب"
    ],
    "place": [
      "في البيت"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "اغسل المنطقة بلطف بمياه فاترة، وماتغسلهاش أكتر من مرتين في اليوم، وابعد عن العصر والمنتجات الزيتية. لو الحالة متوسطة أو شديدة، أو مضايقاك جدًا، اكشف عند دكتور.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "لو الخطوات دي ما سيطرتش على حبّ الشباب، أو لو هو مضايقك جدًا، اكشف عند دكتور.",
        "en": "If these do not control your acne, or it's making you feel very unhappy, see a GP.",
        "src": "nhs:acne"
      },
      {
        "t": "اكشف عند دكتور لو حبّ الشباب متوسط أو شديد، أو لو ظهرت عُقَد أو أكياس؛ لأنها محتاجة علاج مناسب لتجنّب الندبات.",
        "en": "You should see a GP if you have moderate or severe acne or you develop nodules or cysts, as they need to be treated properly to avoid scarring.",
        "src": "nhs:acne"
      },
      {
        "t": "لو حبّ الشباب شديد أو ظاهر على صدرك وظهرك، ممكن يحتاج مضادات حيوية أو كريمات أقوى مش بتتصرف غير بروشتة.",
        "en": "If your acne is severe or appears on your chest and back, it may need to be treated with antibiotics or stronger creams that are only available on prescription.",
        "src": "nhs:acne"
      }
    ],
    "do": [
      {
        "t": "اغسل المنطقة المصابة بصابون خفيف أو غسول ومياه فاترة. المياه السخنة جدًا أو الباردة ممكن تزوّد حبّ الشباب.",
        "en": "Wash the affected area with a mild soap or cleanser and lukewarm water. Very hot or cold water can make acne worse.",
        "src": "nhs:acne"
      },
      {
        "t": "شيل المكياج بالكامل قبل ما تنام.",
        "en": "Completely remove make-up before going to bed.",
        "src": "nhs:acne"
      },
      {
        "t": "لو جفاف البشرة مشكلة، استخدم مرطّب مائي من غير عطر.",
        "en": "If dry skin is a problem, use a fragrance-free water-based emollient.",
        "src": "nhs:acne"
      },
      {
        "t": "الرياضة المنتظمة مش بتحسّن حبّ الشباب، لكنها ممكن تحسّن مزاجك وثقتك بنفسك. استحمّ في أسرع وقت ممكن بعد ما تخلّص تمرين، لأن العرق ممكن يهيّج حبّ الشباب.",
        "en": "Regular exercise cannot improve your acne, but it can boost your mood and improve your self-esteem. Shower as soon as possible once you finish exercising as sweat can irritate your acne.",
        "src": "nhs:acne"
      },
      {
        "t": "اغسل شعرك بانتظام، وحاول ما تسيبوش ينزل على وشّك.",
        "en": "Wash your hair regularly and try to avoid letting your hair fall across your face.",
        "src": "nhs:acne"
      }
    ],
    "dont": [
      {
        "t": "ماتغسلش مناطق الجلد المصابة أكتر من مرتين في اليوم. الغسيل المتكرر ممكن يهيّج الجلد ويزوّد الأعراض.",
        "en": "Do not wash affected areas of skin more than twice a day. Frequent washing can irritate the skin and make symptoms worse.",
        "src": "nhs:acne"
      },
      {
        "t": "ماتحاولش «تنضّف» الرؤوس السودا من جوّه، وماتعصرش الحبوب. ده ممكن يزوّدها ويسبّب ندبات دائمة.",
        "en": "Do not try to \"clean out\" blackheads or squeeze spots. This can make them worse and cause permanent scarring.",
        "src": "nhs:acne"
      },
      {
        "t": "ابعد عن المكياج ومنتجات العناية بالبشرة والوقاية من الشمس اللي أساسها زيتي، واللي ساعات بيتكتب عليها إنها مسببة لانسداد المسام. استخدم منتجات مائية غير مسببة لانسداد المسام؛ لأنها أقل احتمالًا إنها تسد مسام بشرتك.",
        "en": "Avoid make-up, skincare and suncare products that are oil-based (sometimes labelled “comedogenic”). Use water-based non-comedogenic products, as they’re less likely to block the pores in your skin.",
        "src": "nhs:acne"
      }
    ],
    "whenWhy": {
      "ar": "الغسيل المتكرر ممكن يهيّج الجلد ويزوّد الأعراض، وعصر الحبوب ممكن يزوّدها ويسبّب ندبات دائمة. المياه السخنة جدًا أو الباردة ممكن تزوّد حبّ الشباب كمان.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: بعد التمرين، استحمّ في أسرع وقت ممكن، واغسل المنطقة بمياه فاترة وغسول خفيف. لو بشرتك جافة، استخدم مرطّب مائي من غير عطر.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "صابون خفيف أو غسول",
        "why": "لغسل المنطقة المصابة بمياه فاترة"
      },
      {
        "item": "مرطّب مائي من غير عطر",
        "why": "لو جفاف البشرة مشكلة"
      },
      {
        "item": "منتجات مائية غير مسببة لانسداد المسام",
        "why": "أقل احتمالًا إنها تسد مسام بشرتك"
      }
    ],
    "tech": [
      "اعمل تذكير بسيط على موبايلك لخطوة العناية اللي اخترتها."
    ],
    "writeDown": [
      "اكتب إيه اللي جرّبته للحبوب، وهل اتحكم فيها ولا لأ."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Acne",
        "url": "https://www.nhs.uk/conditions/acne/"
      }
    ],
    "othersPOV": {
      "ar": "لو حبّ الشباب مضايقك جدًا، اكشف عند دكتور.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«حبّ الشباب مضايقني جدًا، فهكشف عند دكتور.»"
      ],
      "toSelf": [
        "«هغسل بلطف، ومش هعصر الحبوب.»"
      ]
    },
    "bodyLanguage": {
      "ar": "اتعامل مع المنطقة المصابة بلطف، وماتحاولش تعصر الحبوب.",
      "en": ""
    },
    "rights": {
      "ar": "لو حبّ الشباب مضايقك جدًا، اكشف عند دكتور.",
      "en": ""
    },
    "variations": [
      "لو جفاف البشرة مشكلة: استخدم مرطّب مائي من غير عطر.",
      "لو حبّ الشباب شديد أو ظاهر على الصدر والظهر: ممكن يحتاج مضادات حيوية أو كريمات أقوى مش بتتصرف غير بروشتة."
    ],
    "prevention": [
      "اغسل المنطقة بصابون خفيف أو غسول ومياه فاترة.",
      "شيل المكياج بالكامل قبل النوم، وابعد عن المنتجات الزيتية.",
      "اغسل شعرك بانتظام وحاول ما تسيبوش ينزل على وشّك."
    ],
    "drill": {
      "ar": "افتكر روتينك: غسيل لطيف بمياه فاترة، من غير عصر، ومنتجات مائية غير مسببة لانسداد المسام.",
      "en": ""
    },
    "after": {
      "ar": "لو الخطوات دي ما سيطرتش على حبّ الشباب، أو لو هو مضايقك جدًا، اكشف عند دكتور.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Acne",
        "url": "https://www.nhs.uk/conditions/acne/",
        "srcId": "nhs:acne",
        "sha256": "7b543f4dbf",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "rosacea",
    "title": {
      "ar": "الوردية (روزيشيا)",
      "en": "Rosacea"
    },
    "level": 2,
    "who": [
      "اللي عندهم روزيشيا"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "احمي بشرتك كل يوم، وحاول تتجنب الحر والشمس والجو الرطب، وغطّي وشك في البرد. خلي بالك من ألم العين أو زغللة النظر أو الحساسية للضوء أو احمرار العين أو الإحساس برملة فيها.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "عينك بتوجعك.",
        "en": "your eye is painful",
        "src": "nhs:rosacea"
      },
      {
        "t": "رؤيتك مشوّشة.",
        "en": "your vision is blurred",
        "src": "nhs:rosacea"
      },
      {
        "t": "عندك حساسية للضوء.",
        "en": "you're sensitive to light",
        "src": "nhs:rosacea"
      },
      {
        "t": "عينك حمرا.",
        "en": "you have a red eye",
        "src": "nhs:rosacea"
      },
      {
        "t": "حاسس كأن فيه رملة في عينك.",
        "en": "your eye feels gritty",
        "src": "nhs:rosacea"
      }
    ],
    "do": [
      {
        "t": "حط واقي شمس بعامل حماية عالي، ٣٠ على الأقل، كل يوم.",
        "en": "wear a high SPF sunscreen of at least SPF 30 every day",
        "src": "nhs:rosacea"
      },
      {
        "t": "حاول تتجنب الحر والشمس والجو الرطب لو تقدر.",
        "en": "try to avoid heat, sunlight or humid conditions if possible",
        "src": "nhs:rosacea"
      },
      {
        "t": "حاول تغطي وشك في الجو البارد.",
        "en": "try to cover your face in cold weather",
        "src": "nhs:rosacea"
      },
      {
        "t": "استخدم منتجات عناية لطيفة ومناسبة للبشرة الحساسة.",
        "en": "use gentle skincare products for sensitive skin",
        "src": "nhs:rosacea"
      },
      {
        "t": "لو عندك التهاب في الجفون، نضّف جفونك مرة واحدة على الأقل كل يوم.",
        "en": "clean your eyelids at least once a day if you have blepharitis",
        "src": "nhs:rosacea"
      },
      {
        "t": "خد خطوات تساعدك تتحكم في التوتر.",
        "en": "take steps to manage stress",
        "src": "nhs:rosacea"
      }
    ],
    "dont": [
      {
        "t": "ماتشربش كحول.",
        "en": "do not drink alcohol",
        "src": "nhs:rosacea"
      },
      {
        "t": "ماتشربش مشروبات سخنة.",
        "en": "do not have hot drinks",
        "src": "nhs:rosacea"
      },
      {
        "t": "ماتاكلش أكل حرّاق.",
        "en": "do not eat spicy food",
        "src": "nhs:rosacea"
      },
      {
        "t": "ماتكترش من التمارين الهوائية زي الجري.",
        "en": "do not do too much aerobic exercise, like running",
        "src": "nhs:rosacea"
      }
    ],
    "whenWhy": {
      "ar": "حاول تبعد عن الحر والشمس والرطوبة، وفي الجو البارد غطّي وشك. استخدم عناية لطيفة للبشرة الحساسة.",
      "en": ""
    },
    "how": {
      "ar": "قبل ما تنزل، حط واقي شمس بعامل حماية ٣٠ على الأقل. لو الجو بارد غطّي وشك، واستخدم منتجات لطيفة للبشرة الحساسة.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "واقي شمس بعامل حماية عالي، ٣٠ على الأقل",
        "why": "للاستخدام كل يوم"
      },
      {
        "item": "منتجات عناية لطيفة للبشرة الحساسة",
        "why": "للعناية اليومية بالبشرة"
      }
    ],
    "tech": [
      "اعمل تذكير بسيط على موبايلك لخطوة العناية اللي اخترتها."
    ],
    "writeDown": [
      "اكتب إيه اللي بيزود الأعراض: الحر، الشمس، الرطوبة، الكحول، المشروبات السخنة، الأكل الحراق، أو الرياضة الهوائية الكتير."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Rosacea",
        "url": "https://www.nhs.uk/conditions/rosacea/"
      }
    ],
    "othersPOV": {
      "ar": "لو حد قدامك عنده روزيشيا، ساعده يبعد عن الحر والشمس والرطوبة، ويستخدم عناية لطيفة للبشرة الحساسة.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«عينك وجعاك أو نظرك مشوش؟»"
      ],
      "toSelf": [
        "«واقي شمس بعامل حماية ٣٠ على الأقل كل يوم، ومنتجات لطيفة لبشرتي.»"
      ]
    },
    "bodyLanguage": {
      "ar": "حط منتجات العناية على وشك بلطف، وغطّي وشك في البرد.",
      "en": ""
    },
    "rights": {
      "ar": "خلي بالك لو عينك وجعاك، أو نظرك مشوش، أو الضوء بيوجعك.",
      "en": ""
    },
    "variations": [
      "لو عندك التهاب في الجفون: نضّف جفونك مرة واحدة على الأقل كل يوم."
    ],
    "prevention": [
      "حاول تتجنب الحر والشمس والجو الرطب لو تقدر.",
      "في الجو البارد، حاول تغطي وشك.",
      "ماتشربش كحول أو مشروبات سخنة، وماتاكلش أكل حار.",
      "ماتكترش من التمارين الهوائية زي الجري، وخد خطوات تساعدك تتحكم في التوتر."
    ],
    "drill": {
      "ar": "جهّز روتينك اليومي: واقي شمس بعامل حماية ٣٠ على الأقل، ومنتجات لطيفة للبشرة الحساسة.",
      "en": ""
    },
    "after": {
      "ar": "خلي بالك لو ظهر ألم أو احمرار أو إحساس برملة في العين، أو رؤيتك بقت مشوّشة، أو بقيت حساس للضوء.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Rosacea",
        "url": "https://www.nhs.uk/conditions/rosacea/",
        "srcId": "nhs:rosacea",
        "sha256": "e381d21eb3",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "skin-picking-disorder",
    "title": {
      "ar": "اضطراب نقر الجلد",
      "en": "Skin picking disorder"
    },
    "level": 2,
    "who": [
      "الكل"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "خلي بالك لو مش قادر توقف نقر جلدك، أو النقر مسبب جروح مبتلمش خلال كام يوم، أو مسببلك ضيق نفسي ومأثر على يومك.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "مش قادر توقف نقر جلدك.",
        "en": "you cannot stop picking your skin",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "النقر بيسبب ضرر شديد لجلدك، زي جروح مبتلمش خلال كام يوم.",
        "en": "you're causing serious damage to your skin by picking it, like cuts that do not heal within a few days",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "نقر جلدك مسببلك ضيق نفسي أو مأثر على حياتك اليومية.",
        "en": "picking your skin is causing you emotional distress or affecting your daily life",
        "src": "nhs:skin-picking-disorder"
      }
    ],
    "do": [
      {
        "t": "خلّي إيديك مشغولة — جرّب تعصر كرة طرية أو تلبس جوانتي.",
        "en": "keep your hands busy – try squeezing a soft ball or putting on gloves",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "حدّد إمتى وفين بتنقر جلدك غالبًا، وحاول تتجنب الحاجات اللي بتحفّزك.",
        "en": "identify when and where you most commonly pick your skin and try to avoid these triggers",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "كل مرة تحس إنك عايز تنقر جلدك، حاول تقاوم لمدة أطول شوية عن المرة اللي قبلها.",
        "en": "try to resist for longer and longer each time you feel the urge to pick",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "لما تحس إنك عايز تنقر جلدك، اعتني بجلدك بدل كده — مثلًا حط مرطب.",
        "en": "care for your skin when you get the urge to pick it – for example, by applying moisturiser",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "قول لناس بتثق فيهم — يقدروا يساعدوك تلاحظ لما تبدأ تنقر جلدك.",
        "en": "tell other people – they can help you recognise when you're picking",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "خلّي جلدك نضيف عشان تتجنب العدوى.",
        "en": "keep your skin clean to avoid infection",
        "src": "nhs:skin-picking-disorder"
      }
    ],
    "dont": [
      {
        "t": "ماتسيبش ضوافرك تطول — قصّها وخليها قصيرة.",
        "en": "do not let your nails grow long – keep them trimmed",
        "src": "nhs:skin-picking-disorder"
      },
      {
        "t": "ماتسيبش حاجات زي الملاقط والدبابيس في مكان سهل توصل له.",
        "en": "do not keep things like tweezers and pins where you can easily get at them",
        "src": "nhs:skin-picking-disorder"
      }
    ],
    "whenWhy": {
      "ar": "لاحظ إمتى وفين النقر بيحصل، وابعد الأدوات السهلة من قدامك، وخلي إيديك مشغولة. ولو النقر مسبب ضرر شديد أو ضيق نفسي أو مأثر على يومك، اطلب مساعدة.",
      "en": ""
    },
    "how": {
      "ar": "مثال: أول ما تلاحظ إنك بدأت تنقر جلدك، امسك كرة طرية، وابعد الملقاط أو الدبابيس، وحط مرطب بدل النقر.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "كرة طرية أو جوانتي",
        "why": "عشان تخلّي إيديك مشغولة"
      },
      {
        "item": "مرطّب",
        "why": "تعتني بجلدك لما تحس إنك عايز تنقره"
      }
    ],
    "tech": [
      "سجّل في ملاحظة على موبايلك إمتى وفين بتنقر جلدك غالبًا"
    ],
    "writeDown": [
      "الأوقات والأماكن اللي بتنقر فيها جلدك غالبًا",
      "الحاجات اللي بتحفّزك"
    ],
    "videosCommunities": [
      {
        "label": "NHS — Skin picking disorder",
        "url": "https://www.nhs.uk/mental-health/conditions/skin-picking-disorder/"
      }
    ],
    "othersPOV": {
      "ar": "قول لحد بتثق فيه؛ يقدر يساعدك تلاحظ لما تبدأ تنقر جلدك.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«لو لقيتني بنقر جلدي، ساعدني آخد بالي.»"
      ],
      "toSelf": [
        "«هخلّي إيدي مشغولة وأقاوم شوية أطول.»"
      ]
    },
    "bodyLanguage": {
      "ar": "خلّي إيديك مشغولة بكرة طرية، أو البس جوانتي.",
      "en": ""
    },
    "rights": {
      "ar": "خلي بالك لو نقر جلدك مسببلك ضيق نفسي أو مأثر على يومك.",
      "en": ""
    },
    "variations": [
      "لو النقر بيحصل غالبًا في وقت أو مكان معين: حاول تتجنب المحفّزات اللي لاحظتها.",
      "لو بتحس برغبة في النقر: جرّب المرطب أو كرة طرية بدل النقر."
    ],
    "prevention": [
      "قصّ ضوافرك وخليها قصيرة",
      "ابعد الملاقط والدبابيس عن الأماكن السهلة",
      "خلّي جلدك نضيف عشان تتجنب العدوى"
    ],
    "drill": {
      "ar": "لاحظ المحفّز، خلّي إيدك مشغولة، وحاول تقاوم مدة أطول كل مرة.",
      "en": ""
    },
    "after": {
      "ar": "اعتني بجلدك وحط مرطب، وخليه نضيف عشان تتجنب العدوى.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Skin picking disorder",
        "url": "https://www.nhs.uk/mental-health/conditions/skin-picking-disorder/",
        "srcId": "nhs:skin-picking-disorder",
        "sha256": "5ade247ddc",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  },
  {
    "id": "nappy-rash",
    "title": {
      "ar": "تسلّخات الحفاض",
      "en": "Nappy rash"
    },
    "level": 2,
    "who": [
      "آباء وأمهات",
      "مقدّم رعاية"
    ],
    "place": [
      "أي مكان"
    ],
    "domain": "صحة",
    "snapshot": {
      "ar": "لو طفلك عنده تسلّخات الحفاض، خلّي جلده نضيف وناشف وغيّر الحفاض المبلول أو المتّسخ بأسرع ما يمكن.",
      "en": ""
    },
    "redFlags": [
      {
        "t": "تسلّخات الحفاض مش بتروح، أو بتسوء، أو بتنتشر في أماكن تانية.",
        "en": "your baby's nappy rash does not go away, gets worse or spreads to other areas",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "طفلك حرارته عالية.",
        "en": "your baby has a high temperature",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "طفلك باين عليه إنه متضايق جدًا.",
        "en": "your baby seems very uncomfortable",
        "src": "nhs:nappy-rash"
      }
    ],
    "do": [
      {
        "t": "غيّر الحفاض المبلول أو المتّسخ بأسرع ما يمكن.",
        "en": "change wet or dirty nappies as soon as possible",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "خلّي الجلد نضيف وناشف، ونشّفه بالطبطبة أو الفرك الخفيف.",
        "en": "keep the skin clean and dry – pat or rub the skin gently to dry it",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "سيب طفلك من غير حفاض لمّا ينفع.",
        "en": "leave nappies off when possible",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "استخدم حفاضات امتصاصها عالي.",
        "en": "use extra absorbent nappies",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "اتأكد إن مقاس حفاض طفلك مظبوط.",
        "en": "make sure your baby's nappies fit properly",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "نضّف جلد طفلك بميّه أو بمناديل أطفال من غير عطر ومن غير كحول.",
        "en": "clean your baby's skin with water or fragrance-free and alcohol-free baby wipes",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "حمّم طفلك كل يوم، بس مش أكتر من مرتين في اليوم لأن الغسيل الكتير ممكن ينشّف الجلد.",
        "en": "bath your baby daily (but not more than twice a day, as washing too much can make the skin dry out)",
        "src": "nhs:nappy-rash"
      }
    ],
    "dont": [
      {
        "t": "ماتستخدمش صابون ولا لوشن أطفال ولا فقاقيع استحمام، عشان ممكن يهيّجوا الجلد.",
        "en": "do not use soaps, baby lotion or bubble bath as they can irritate the skin",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "ماتحطّش بودرة التلك ولا مطهّرات على تسلّخات الحفاض.",
        "en": "do not use talcum powder or antiseptics on nappy rash",
        "src": "nhs:nappy-rash"
      },
      {
        "t": "ماتلبّسش طفلك الحفاض بشدّة، عشان ممكن يهيّج الجلد.",
        "en": "do not put nappies on too tightly as it can irritate the skin",
        "src": "nhs:nappy-rash"
      }
    ],
    "whenWhy": {
      "ar": "الصابون واللوشن وفقاقيع الاستحمام والحفاض المشدود ممكن يهيّجوا الجلد، والغسيل الكتير ممكن ينشّفه.",
      "en": ""
    },
    "how": {
      "ar": "مثال حيّ: الحفاض اتّسخ. تغيّره بسرعة، تنضّف الجلد بميّه أو مناديل من غير عطر وكحول، وتنشّفه بالراحة قبل الحفاض الجديد.",
      "en": ""
    },
    "whoToCall": [],
    "whatToBuy": [
      {
        "item": "حفاضات امتصاصها عالي",
        "why": "تستخدمها ضمن العناية بتسلّخات الحفاض"
      },
      {
        "item": "مناديل أطفال من غير عطر ومن غير كحول",
        "why": "لتنضيف جلد طفلك"
      }
    ],
    "tech": [
      "اعمل تذكير بسيط على موبايلك لخطوة العناية اللي اخترتها."
    ],
    "writeDown": [
      "اكتب الطفح بدأ إمتى، وهل بيزيد أو بينتشر، وهل فيه حرارة عالية أو انزعاج شديد."
    ],
    "videosCommunities": [
      {
        "label": "NHS — Nappy rash",
        "url": "https://www.nhs.uk/baby/caring-for-a-newborn/nappy-rash/"
      }
    ],
    "othersPOV": {
      "ar": "خلي بالك لو طفلك باين عليه إنه متضايق جدًا.",
      "en": ""
    },
    "say": {
      "toOthers": [
        "«غيّروا الحفاض بسرعة، ونضّفوا الجلد ونشّفوه بالراحة.»"
      ],
      "toSelf": [
        "«نضيف وناشف، والحفاض مقاسه مظبوط.»"
      ]
    },
    "bodyLanguage": {
      "ar": "المس جلد طفلك بالراحة وانت بتنضّفه وتنشّفه.",
      "en": ""
    },
    "rights": {
      "ar": "العناية هنا لطيفة: جلد نضيف وناشف، وحفاض مش مشدود.",
      "en": ""
    },
    "variations": [
      "لو التسلّخات بتسوء أو بتنتشر في أماكن تانية.",
      "خلي بالك لو حرارة طفلك عالية أو باين عليه إنه متضايق جدًا."
    ],
    "prevention": [
      "غيّر الحفاض المبلول أو المتّسخ بأسرع ما يمكن.",
      "خلّي الجلد نضيف وناشف، واتأكد إن مقاس الحفاض مظبوط.",
      "سيب طفلك من غير حفاض لمّا ينفع."
    ],
    "drill": {
      "ar": "افتكرها: غيّر بسرعة، نضّف، نشّف بالراحة، واتأكد إن الحفاض مش مشدود.",
      "en": ""
    },
    "after": {
      "ar": "خلي بالك لو التسلّخات مش بتروح، أو بتسوء، أو بتنتشر في أماكن تانية.",
      "en": ""
    },
    "sources": [
      {
        "label": "NHS — Nappy rash",
        "url": "https://www.nhs.uk/baby/caring-for-a-newborn/nappy-rash/",
        "srcId": "nhs:nappy-rash",
        "sha256": "77186e08d5",
        "grade": "A · OGL v3 (NHS)"
      }
    ]
  }
,
{
 "id": "dehydration",
 "title": {
  "ar": "جفاف",
  "en": "Dehydration"
 },
 "level": 3,
 "who": [
  "الكل",
  "آباء وأمهات",
  "كبار السن"
 ],
 "place": [
  "البيت",
  "برّه"
 ],
 "domain": "صحة",
 "snapshot": {
  "ar": "حد عطشان وبقه ناشف وبوله أصفر غامق وحاسس بدوخة وتعب، عشان جسمه فقد سوائل أكتر مما أخد.",
  "en": "Someone is thirsty with a dry mouth, dark yellow pee, dizziness and tiredness because the body has lost more fluid than it took in."
 },
 "redFlags": [
  "تعب أو نُعاس غير طبيعي (أو الطفل تايه/نعسان) — ممكن تكون علامة جفاف خطير محتاج علاج عاجل",
  "دوخة وإنت بتقوم تقف ومش بتروح",
  "بول أصفر غامق أو تبوّل أقل من المعتاد (أو البيبي حفاضاته المبلولة قلّت)",
  "نَفَس سريع أو ضربات قلب سريعة",
  "الطفل أو البيبي بيعيّط من غير دموع أو بدموع قليلة",
  "اليافوخ (النقطة الطرية في راس البيبي) غاطس لجوه",
  "جلد أو شفايف أو لسان أزرق/رمادي/شاحب/مبقّع، أو جلد بارد لمّا تلمسه — دي علامات صدمة (shock)",
  "صعوبة في التنفّس، أو تشوّش، أو نُعاس شديد وصعب تصحّي الشخص — اطلب الإسعاف فورًا"
 ],
 "do": [
  {
   "t": "اشرب سوائل لو ظهرت عليك أعراض الجفاف.",
   "src": "nhs:dehydration"
  },
  {
   "t": "لو حاسس بغثيان أو رجّعت، ابدأ برشفات صغيرة وبعدين اشرب أكتر بالتدريج.",
   "src": "nhs:dehydration"
  },
  {
   "t": "الصيدلي ممكن يوصّي بمحاليل معالجة الجفاف عن طريق الفم — بودرة بتحلّها في مية وتشربها — عشان تعوّض السكر والأملاح والمعادن اللي جسمك فقدها.",
   "src": "nhs:dehydration"
  },
  {
   "t": "كمّل رضاعة طبيعية لبيبيك أو استمر في اللبن الصناعي — حاول تديله كميات صغيرة على مرّات أكتر من المعتاد.",
   "src": "nhs:dehydration"
  },
  {
   "t": "ادّي البيبي رشفات صغيرة مية زيادة لو بياخد لبن صناعي أو أكل صلب (لو البيبي أقل من 6 شهور، اغلي المية الأول وسيبها تبرد قبل ما تديهاله).",
   "src": "nhs:dehydration"
  },
  {
   "t": "اشرب سوائل بانتظام عشان تقلّل خطر الجفاف — المية أو عصير سكوّاش خالي من السكر ومخفّف اختيارات كويسة — بكمية تخلّي لون البول فاتح.",
   "src": "nhs:dehydration"
  }
 ],
 "dont": [
  {
   "t": "ابعد عن المشروبات اللي فيها كافيين والكحول، الاتنين بيزوّدوا الجفاف.",
   "src": "nhs:dehydration"
  },
  {
   "t": "متخففش اللبن الصناعي (متزودش عليه مية زيادة).",
   "src": "nhs:dehydration"
  },
  {
   "t": "متديش الأطفال الصغيرين عصير فاكهة أو مشروبات غازية — ممكن تزوّد الإسهال أو الترجيع.",
   "src": "nhs:dehydration"
  }
 ],
 "whenWhy": {
  "ar": "start with small sips and then gradually drink more",
  "en": ""
 },
 "whoToCall": [
  {
   "label": "الإسعاف",
   "number": "123",
   "say": "قول نوع الحالة والعنوان بالظبط."
  },
  {
   "label": "الطوارئ الموحّد",
   "number": "112",
   "say": "لو مش متأكد بأي رقم، اتصل بـ 112."
  }
 ]
}
];
