/**
 * Term base / glossary for powerplayshistory.com.
 *
 * Used by scripts/translate.js — injected into OpenAI system prompts
 * to ensure protected terms are never modified during translation.
 */
export const glossary = {
  "Power Plays History": {
    category: "brand",
    doNotTranslate: true,
    reason: "Site name — must appear exactly as shown in all locales.",
    definition: "The name of this website.",
    notes: "Do not translate or transliterate.",
  },
  "powerplayshistory.com": {
    category: "brand",
    doNotTranslate: true,
    reason: "Domain name — never translate URLs.",
    definition: "The domain of this website.",
    notes: null,
  },
};

export const doNotTranslateTerms = Object.entries(glossary)
  .filter(([, meta]) => meta.doNotTranslate)
  .map(([term]) => term);
