import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const validationDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '26_HUMAN_VALIDATION');

test('professional review packet requires attributable human decisions without false approval', async () => {
  const text = await readFile(join(validationDir, 'foundation-professional-review-packet.md'), 'utf8');

  assert.match(text, /NO REVIEW RECEIVED/u);
  assert.match(text, /PROFESSIONALLY_REVIEWED/u);
  assert.match(text, /الاسم/u);
  assert.match(text, /المؤهل\/الترخيص/u);
  assert.match(text, /تضارب المصالح/u);
  assert.match(text, /نسخة\/بصمة المواد/u);
  assert.match(text, /REJECT.*REVISE_AND_RETURN.*APPROVE_SCOPE_ONLY/u);
  assert.doesNotMatch(text, /الحالة:\s*PROFESSIONALLY_REVIEWED/u);
});

test('Egyptian user protocol is non-clinical and preserves consent, withdrawal, privacy, and safety', async () => {
  const text = await readFile(join(validationDir, 'egyptian-language-user-research-protocol.md'), 'utf8');

  for (const required of ['NOT RUN', 'بالغ', 'الانسحاب', 'حذف', 'الخصوصية', 'قاعدة التوقف والإحالة']) {
    assert.match(text, new RegExp(required, 'u'));
  }
  assert.match(text, /لا إثبات أثر علاجي/u);
  assert.match(text, /لا يُجنّد قاصر/u);
});

test('help resource form defaults to hold and requires owner, scope, access, and expiry checks', async () => {
  const text = await readFile(join(validationDir, 'help-resource-owner-verification-form.md'), 'utf8');

  for (const required of ['HOLD', 'الجهة المالكة', 'نطاق الخدمة بدقة', 'اختبار الوصول', 'انتهاء الصلاحية']) {
    assert.match(text, new RegExp(required, 'u'));
  }
  assert.match(text, /`HOLD` هو الافتراضي/u);
  assert.match(text, /لا يوصف مورد بأنه للطوارئ/u);
});
