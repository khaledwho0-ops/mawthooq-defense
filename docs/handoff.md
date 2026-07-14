# Handoff Report

## 1. Observation
- In `c:\Users\pc\Desktop\EGY\New folder (20)\egyptian-awareness-library\src\lib\debunking\workers\api-swarm.ts`, functions like `fetchOpenAlex`, `fetchEuropePMC`, `fetchQuran`, and `fetchGoogleFactCheck` were returning hardcoded `credibilityScore`s and `abstract`s instead of extracting them from the API responses. Also, `withTimeout` does not use an `AbortController`, meaning underlying requests continue running after the timeout.
- In `c:\Users\pc\Desktop\EGY\New folder (20)\egyptian-awareness-library\src\lib\debunking\classifier.ts`, `classifyEgyptianContext` lacks a `try/catch` block and falls over if the `OPENAI_API_KEY` is not present, crashing the caller instead of returning a valid vector.
- The `EgyptianContextVectorSchema` (in `egy-data.ts`) contains options like `"State Stability & Economic Rumors"`. There is no exact `"Unverified State Rumor"`, but `"State Stability & Economic Rumors"` serves as a perfect valid fallback.

## 2. Logic Chain
- To genuinely evaluate credibility in `api-swarm.ts`, we must extract the actual `abstract` from API responses (e.g. `abstract_inverted_index` for OpenAlex, `abstractText` for EuropePMC, `text` for Quran).
- We must pass these extracted abstracts along with the original claim to an LLM `generateObject` call (or a heuristic fallback) to dynamically compute the `credibilityScore`.
- To prevent socket leaks, `withTimeout` should accept a callback that takes an `AbortSignal`, create an `AbortController`, and trigger `controller.abort()` upon timeout. All `fetch` calls must accept and use this `signal`.
- For `classifier.ts`, wrapping the LLM call in a `try...catch` and returning a valid fallback (e.g. `"State Stability & Economic Rumors"`) ensures stability if the API key is absent or the model call fails.

## 3. Caveats
- I am constrained by the Read-only Explorer identity and cannot edit the target files directly. Therefore, I provide the proposed solutions below in this report.
- Extracting OpenAlex's `abstract_inverted_index` requires rebuilding the string, which is handled in the proposed snippet.
- The `generateObject` call for evaluating the abstract in the API swarm may introduce some latency; thus, the 8000ms timeout might need to be increased by the implementer in the future if LLM calls take too long, though I left it at 8000ms as it fulfills the requirement.

## 4. Conclusion
The codebase needs structural changes in `api-swarm.ts` to support dynamic LLM scoring and AbortControllers, and `classifier.ts` needs a `try/catch` wrapper. I have provided the proposed implementations for both files below.

## 5. Verification Method
- **Implementation**: An Implementer agent should copy the proposed code below into their respective target files.
- **Verification**: Run `npm run test` or manually execute `classifyEgyptianContext` without an API key to verify it returns the fallback without crashing. Execute `executeApiSwarm` with a false claim like "Earth is flat" and verify it returns low credibility scores rather than 94-100. Check edge function metrics to confirm no open socket leaks on timeouts.

---

### Proposed Code for `classifier.ts`

```typescript
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { EgyptianContextVectorSchema, EgyptianContextVector } from './egy-data';

export async function classifyEgyptianContext(claim: string): Promise<EgyptianContextVector> {
  try {
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: z.object({
        vector: EgyptianContextVectorSchema
      }),
      prompt: `Classify the following claim into the most appropriate Egyptian context vector.
Claim: "${claim}"`,
    });

    return object.vector;
  } catch (error) {
    console.warn("[Classifier] LLM classification failed or missing API key, falling back to default.", error);
    return "State Stability & Economic Rumors";
  }
}
```

### Proposed Code for `api-swarm.ts`

```typescript
import { z } from "zod";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

const WorkerResponseSchema = z.object({
  title: z.string(),
  abstract: z.string().max(500),
  credibilityScore: z.number().min(0).max(100),
  citationUrl: z.string().url().optional(),
});
export type WorkerResponse = z.infer<typeof WorkerResponseSchema>;

export async function withTimeout<T>(
  fetcher: (signal: AbortSignal) => Promise<T>,
  ms = 8000
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(new Error("Worker timed out")), ms);

  try {
    return await fetcher(controller.signal);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function evaluateCredibility(claim: string, abstract: string): Promise<number> {
  if (!process.env.OPENAI_API_KEY) {
    // Naive heuristic fallback if LLM is unavailable
    const claimWords = claim.toLowerCase().split(' ');
    const abstractLower = abstract.toLowerCase();
    const matchCount = claimWords.filter(w => abstractLower.includes(w)).length;
    return Math.min(Math.round((matchCount / Math.max(claimWords.length, 1)) * 100), 100);
  }

  try {
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: z.object({ credibilityScore: z.number().min(0).max(100) }),
      prompt: \`Analyze the abstract and determine how strongly it supports the claim. 
Claim: "\${claim}"
Abstract: "\${abstract}"
Return a credibilityScore from 0 to 100 (0 means debunked/no support, 100 means full scientific support).\`
    });
    return object.credibilityScore;
  } catch (error) {
    return 50; // default middle score
  }
}

// Migrated/Stubbed Fetchers

async function fetchOpenAlex(query: string, signal: AbortSignal): Promise<WorkerResponse | null> {
  const res = await fetch(\`https://api.openalex.org/works?search=\${encodeURIComponent(query)}&per-page=3\`, { signal });
  if (!res.ok) throw new Error("OpenAlex API Error");
  
  const data = await res.json();
  if (data.results && data.results.length > 0) {
    let abstractText = "OpenAlex citation found.";
    if (data.results[0].abstract_inverted_index) {
       const index = data.results[0].abstract_inverted_index;
       const words: string[] = [];
       for (const [word, positions] of Object.entries(index)) {
         for (const pos of (positions as number[])) {
           words[pos] = word;
         }
       }
       abstractText = words.join(" ").trim();
    }
    const safeAbstract = abstractText.substring(0, 500) || "Matched scientific literature.";
    const score = await evaluateCredibility(query, safeAbstract);
    return WorkerResponseSchema.parse({
      title: \`OpenAlex: \${data.results[0].title || "Scientific Graph Match"}\`,
      abstract: safeAbstract,
      credibilityScore: score,
      citationUrl: data.results[0].id,
    });
  }
  return null;
}

async function fetchEuropePMC(query: string, signal: AbortSignal): Promise<WorkerResponse | null> {
  const res = await fetch(\`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=\${encodeURIComponent(query)}&format=json&resultType=lite\`, { signal });
  if (!res.ok) throw new Error("EuropePMC API Error");

  const data = await res.json();
  if (data.resultList && data.resultList.result && data.resultList.result.length > 0) {
    const abstract = (data.resultList.result[0].abstractText || "EuropePMC verification hit.").substring(0, 500);
    const score = await evaluateCredibility(query, abstract);
    return WorkerResponseSchema.parse({
      title: \`EuropePMC: \${data.resultList.result[0].title}\`,
      abstract: abstract,
      credibilityScore: score,
      citationUrl: \`https://europepmc.org/article/MED/\${data.resultList.result[0].pmid}\`,
    });
  }
  return null;
}

async function fetchQuran(query: string, signal: AbortSignal): Promise<WorkerResponse | null> {
  const res = await fetch(\`https://api.alquran.cloud/v1/search/\${encodeURIComponent(query)}/all/ar\`, { signal });
  if (!res.ok) throw new Error("AlQuran API Error");

  const data = await res.json();
  if (data.data && data.data.count > 0) {
    const abstract = data.data.matches[0].text.substring(0, 500);
    const score = await evaluateCredibility(query, abstract);
    return WorkerResponseSchema.parse({
      title: "AlQuran.cloud Verification",
      abstract: abstract,
      credibilityScore: score,
      citationUrl: "https://alquran.cloud",
    });
  }
  return null;
}

async function fetchGoogleFactCheck(query: string, signal: AbortSignal): Promise<WorkerResponse | null> {
  const apiKey = process.env.GOOGLE_FACTCHECK_API_KEY;
  if (!apiKey) return null;

  const res = await fetch(\`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=\${encodeURIComponent(query)}&key=\${apiKey}\`, { signal });
  if (!res.ok) throw new Error("Google FactCheck API Error");

  const data = await res.json();
  if (data.claims && data.claims.length > 0) {
    const review = data.claims[0].claimReview[0];
    const abstract = \`Rating: \${review.textualRating}.\`.substring(0, 500);
    const score = await evaluateCredibility(query, abstract);
    return WorkerResponseSchema.parse({
      title: \`Google FactCheck: \${review.publisher.name}\`,
      abstract: abstract,
      credibilityScore: score,
      citationUrl: review.url,
    });
  }
  return null;
}

export async function executeApiSwarm(query: string): Promise<WorkerResponse[]> {
  const fetchers = [
    (signal: AbortSignal) => fetchOpenAlex(query, signal),
    (signal: AbortSignal) => fetchEuropePMC(query, signal),
    (signal: AbortSignal) => fetchQuran(query, signal),
    (signal: AbortSignal) => fetchGoogleFactCheck(query, signal)
  ];

  const results = await Promise.allSettled(
    fetchers.map(f => withTimeout(f, 8000))
  );

  const successfulResults: WorkerResponse[] = [];
  
  for (const result of results) {
    if (result.status === "fulfilled" && result.value !== null) {
      successfulResults.push(result.value);
    } else if (result.status === "rejected") {
      console.warn("[Api-Swarm] A fetcher failed or timed out:", result.reason);
    }
  }

  return successfulResults;
}
```
