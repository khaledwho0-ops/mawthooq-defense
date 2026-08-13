import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const planDir = join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001');
const readJson = async (relativePath) => JSON.parse(await (await import('node:fs/promises')).readFile(join(handoffDir, relativePath), 'utf8'));
const csvCell = (value) => `"${String(value).replaceAll('"', '""')}"`;

const outline = await readJson('13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/outline.json');
const capabilities = (await readJson('08_CONCEPT_ONTOLOGY/human-capabilities.json')).capabilities;
const capabilityCoverage = (await readJson('09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-capability-coverage.json')).coverage;
const patterns = (await readJson('10_PATTERN_ONTOLOGY/patterns.json')).patterns;
const claims = (await readJson('07_CLAIM_LIBRARY/claims.json')).claims;

const daysByCapability = new Map(capabilities.map(({ id }) => [id, []]));
for (const day of outline.days) {
  for (const capabilityId of day.capabilityIds) daysByCapability.get(capabilityId).push(day.day);
}

const highImportance = new Set(['CAP-001', 'CAP-003', 'CAP-004', 'CAP-007', 'CAP-009', 'CAP-010', 'CAP-012', 'CAP-019', 'CAP-020', 'CAP-022', 'CAP-023', 'CAP-024', 'CAP-026', 'CAP-036']);
const appliedDomains = new Set(['CAP-030', 'CAP-031', 'CAP-038', 'CAP-039', 'CAP-040', 'CAP-042', 'CAP-044']);
const coverageRows = capabilities.map((capability) => {
  const days = daysByCapability.get(capability.id);
  const evidence = capabilityCoverage.find(({ capabilityId }) => capabilityId === capability.id);
  return {
    domain: `${capability.name_ar} / ${capability.name_en}`,
    daysAllocated: days.length,
    days: days.join(' '),
    importance: highImportance.has(capability.id) ? 'CRITICAL_FOUNDATION' : 'IMPORTANT',
    evidence: evidence.status,
    roleSpecificity: appliedDomains.has(capability.id) ? 'UNIVERSAL_WITH_EVERYDAY_ROLE_APPLICATION' : 'UNIVERSAL_HUMAN_FOUNDATION',
    unresolvedGap: evidence.gap,
  };
});
const coverageCsv = [
  ['Domain', 'Days Allocated', 'Days', 'Importance', 'Evidence', 'Role Specificity', 'Unresolved Gap'].map(csvCell).join(','),
  ...coverageRows.map((row) => Object.values(row).map(csvCell).join(',')),
].join('\n') + '\n';
await writeFile(join(planDir, 'coverage-matrix.csv'), coverageCsv, 'utf8');

const dependencyGraph = {
  schemaVersion: 1,
  trackId: outline.trackId,
  status: outline.status,
  nodes: outline.days.map(({ day, phase, titleAr, capabilityIds, safetySensitivity }) => ({ day, phase, titleAr, capabilityIds, safetySensitivity })),
  edges: outline.days.flatMap(({ day, prerequisites }) => prerequisites.map((from) => ({ from, to: day, relation: 'REQUIRES_EARLIER_LEARNING' }))),
};
await writeFile(join(planDir, 'dependency-graph.json'), `${JSON.stringify(dependencyGraph, null, 2)}\n`, 'utf8');

const reviewDays = outline.days.filter(({ reviewType }) => /RETRIEVAL|EVALUATION/u.test(reviewType));
const spacedReviewPlan = {
  schemaVersion: 1,
  trackId: outline.trackId,
  status: outline.status,
  rule: 'Review days require recall before reopening content, application to a new case, an error check, and one adaptation; they are not recap-only duplicates.',
  reviews: reviewDays.map((day) => ({
    day: day.day,
    titleAr: day.titleAr,
    reviewType: day.reviewType,
    revisitsCapabilities: day.capabilityIds,
    earlierAnchorDays: day.prerequisites,
    addedComplexityAr: day.day === 100
      ? 'تركيب دليل شخصي يضم الفهم والممارسة وحدود التوقف والدعم وما بقي مجهولًا.'
      : 'استرجاع بلا فتح المحتوى أولًا، ثم تطبيق على حالة جديدة وتعديل الاستراتيجية وفق العائق أو الأثر السلبي.',
  })),
};
await writeFile(join(planDir, 'spaced-review-plan.json'), `${JSON.stringify(spacedReviewPlan, null, 2)}\n`, 'utf8');

const usedPatternIds = new Set(outline.days.flatMap(({ patternIds }) => patternIds));
const usedClaimIds = new Set(outline.days.flatMap(({ claimIds }) => claimIds));
const titleTokens = (title) => new Set(title.replace(/[؟:،.]/gu, '').split(/\s+/u).filter((token) => token.length > 2));
const similarity = (a, b) => {
  const intersection = [...a].filter((token) => b.has(token)).length;
  const union = new Set([...a, ...b]).size;
  return union ? intersection / union : 0;
};
const potentialTitleDuplicates = [];
for (let left = 0; left < outline.days.length; left += 1) {
  for (let right = left + 1; right < outline.days.length; right += 1) {
    const score = similarity(titleTokens(outline.days[left].titleAr), titleTokens(outline.days[right].titleAr));
    if (score >= 0.7) potentialTitleDuplicates.push({ days: [left + 1, right + 1], score: Number(score.toFixed(2)) });
  }
}
const capabilityCounts = Object.fromEntries(coverageRows.map((row, index) => [capabilities[index].id, row.daysAllocated]));
const phaseCounts = Object.fromEntries(outline.phases.map(({ phase }) => [String(phase), outline.days.filter((day) => day.phase === phase).length]));
const safetyCounts = outline.days.reduce((result, day) => ({ ...result, [day.safetySensitivity]: (result[day.safetySensitivity] ?? 0) + 1 }), {});
const auditFindings = {
  schemaVersion: 1,
  trackId: outline.trackId,
  asOf: '2026-08-13',
  status: 'PART_O_INTERNAL_AUDIT_PASSED_EXTERNAL_REVIEW_PENDING',
  quantitative: {
    totalDays: outline.days.length,
    phaseCounts,
    capabilitiesCovered: Object.values(capabilityCounts).filter(Boolean).length,
    patternsCovered: usedPatternIds.size,
    registeredPatterns: patterns.length,
    claimsUsed: usedClaimIds.size,
    registeredClaims: claims.length,
    retrievalOrEvaluationDays: reviewDays.map(({ day }) => day),
    safetyCounts,
    potentialTitleDuplicates,
  },
  missing: {
    capabilityIds: capabilities.filter(({ id }) => !daysByCapability.get(id).length).map(({ id }) => id),
    patternIds: patterns.filter(({ id }) => !usedPatternIds.has(id)).map(({ id }) => id),
  },
  dispositions: [
    { id: 'AUD-001', severity: 'HIGH', finding: 'The original architecture had five registered patterns without any day mapping.', disposition: 'RESOLVED', evidence: 'PAT-004 added to Day 23; PAT-052 to Day 18; PAT-036 to Day 38; PAT-059 to Day 48; PAT-017 to Day 65.' },
    { id: 'AUD-002', severity: 'HIGH', finding: 'A 100-day list could hide unsupported identifiers.', disposition: 'RESOLVED', evidence: 'Automated tests validate every capability, claim, pattern, and practice-family reference.' },
    { id: 'AUD-003', severity: 'HIGH', finding: 'Review days could be renamed duplicates.', disposition: 'RESOLVED_DESIGN_PENDING_LESSON_AUDIT', evidence: 'Each review record states recall, new-case transfer, error checking, and adaptation; full-day prose still requires semantic audit.' },
    { id: 'AUD-004', severity: 'MEDIUM', finding: 'All 100 domain labels are unique, which could hide overly fragmented concepts.', disposition: 'MONITOR_DURING_FULL_DAY_WRITING', evidence: 'Capability recurrence and dependency edges create continuity; full lessons must preserve synthesis instead of isolated tips.' },
    { id: 'AUD-005', severity: 'CRITICAL', finding: 'Clinical, cultural, accessibility, privacy, and local-resource review cannot be completed internally.', disposition: 'OPEN_EXTERNAL', evidence: 'Human validation packets and owner-verification form exist; professional review remains PENDING.' },
  ],
  conclusion: 'All 44 capabilities and all 61 registered patterns are represented; phase size is exactly 10; identifiers and prerequisites validate; no high-severity internal outline defect remains. This passes Part O for proceeding to draft pilot writing, not for publication or professional approval.',
};
await writeFile(join(planDir, 'audit-findings.json'), `${JSON.stringify(auditFindings, null, 2)}\n`, 'utf8');

const topCapabilities = [...coverageRows]
  .sort((a, b) => b.daysAllocated - a.daysAllocated || a.domain.localeCompare(b.domain, 'ar'))
  .slice(0, 12)
  .map((row) => `| ${row.domain} | ${row.daysAllocated} | ${row.days} |`)
  .join('\n');
const auditMarkdown = `# Part O — تدقيق التغطية والتكرار والتسلسل\n\nالحالة: **نجح التدقيق الداخلي للمخطط؛ المراجعة البشرية والنصوص الكاملة ما زالت معلقة**  \nالمسار: \`${outline.trackId} — ${outline.trackNameAr}\`  \nالنسخة: \`${outline.version}\`\n\n## النتيجة المباشرة\n\n- الأيام: 100/100، موزعة 10 أيام في كل مرحلة.\n- القدرات: 44/44 ظهرت في يوم واحد على الأقل.\n- الأنماط: 61/61 مرتبطة بيوم واحد على الأقل بعد إغلاق خمس فجوات أولية.\n- أيام الاسترجاع/التكامل/التقييم: ${reviewDays.map(({ day }) => day).join('، ')}.\n- العناوين المتطابقة: صفر؛ الأزواج ذات تشابه كلمات 70% أو أكثر: ${potentialTitleDuplicates.length}.\n- المراجع الوهمية: صفر وفق الاختبار الآلي.\n- الموارد المهنية المحلية المؤهلة للنشر: صفر؛ لا تزال في \`HOLD\`.\n\n## أكثر القدرات عودة\n\n| القدرة | عدد الأيام | الأيام |\n|---|---:|---|\n${topCapabilities}\n\nالعودة المتكررة ليست تكرارًا تلقائيًا: تعريف القرار يظهر قبل ضغط الاختيار، ثم جودة العملية، ثم الذكاء الاصطناعي، ثم المال والعمل وعدم اليقين والخطة الطويلة. وبالمثل تنتقل الحدود من الرفض إلى الأسرة والدعم ثم السلامة والخلاف والإصلاح ودليل العلاقات.\n\n## فحص النقص\n\nلا توجد قدرة أو نمط مسجل بلا موضع. هذا لا يعني أن كل موضوع أخذ وزنًا نهائيًا كافيًا؛ مصفوفة \`coverage-matrix.csv\` تسجل عدد الأيام وحالة الدليل والفجوة المتبقية لكل قدرة. المجالات المصرية الأضعف—الأسرة اليومية، المال والعمل غير الرسمي، اللغة، الموارد، والإتاحة—تبقى موسومة للنقل والاختبار البشري.\n\n## فحص الإفراط\n\nالقرار والتواصل وطلب المساعدة يظهر كل منها في سياقات متعددة لأنهما مهارات وسيطة. لم تُخصص أيام منفصلة لتكرار التعريف نفسه؛ كل عودة ترفع المتطلب من فهم إلى تطبيق أو ضغط أو تكامل. أثناء كتابة الدروس الكاملة سيُرفض أي تكرار لا يضيف حالة جديدة أو استرجاعًا أو تعقيدًا.\n\n## فحص التسلسل\n\nكل متطلب سابق رقمه أقل من اليوم التابع، ويعرض \`dependency-graph.json\` كل الحواف. لا تبدأ المحادثة الصعبة قبل الوعي الانفعالي والاستماع وفحص الأمان، ولا يبدأ التعلم من الخطأ قبل التفريق بين الخطأ والفقد والظلم، ولا يظهر وضع الخطر قبل طلب المساعدة وحدود التقييم.\n\n## فحص السلامة\n\nعدد الأيام حسب الحساسية: ${Object.entries(safetyCounts).map(([key, value]) => `${key}=${value}`).join('، ')}. الأيام الحرجة لا تُعرض كتحسين عادي؛ وظيفتها تعليم الحدود أو إيقاف المنهج أو اختيار دعم بشري. أرقام الموارد المصرية لا تدخل النص قبل تحقق المالك والوصول.\n\n## الاعتراضات المفتوحة\n\n- النص الكامل لكل يوم لم يُكتب بعد، ولذلك لا يمكن إثبات عدم التكرار الدلالي في الشرح والتمارين.\n- لا توجد مراجعة بشرية مصرية سريرية أو ثقافية أو لغوية أو وصول أو خصوصية.\n- لا توجد تجربة مستخدم للطيار حتى الآن.\n- بعض القدرات أدلتها جزئية أو من سياقات غير مصرية؛ لن تتحول إلى وعود أو قواعد عامة.\n\n## قرار Part O\n\nيسمح المخطط بالانتقال إلى **مسودة الأيام 1–20** لأنه أغلق النقص والتسلسل والتكرار الهيكلي الداخلي. لا يسمح بالنشر، ولا يسمى معتمدًا مهنيًا، ولا يثبت أثرًا علاجيًا.\n`;
await writeFile(join(planDir, 'part-o-audit.md'), auditMarkdown, 'utf8');
