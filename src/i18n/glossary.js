/**
 * Term base / glossary for powerplayshistory.com.
 *
 * Used by scripts/translate.js — injected into OpenAI system prompts
 * to ensure protected terms are never modified during translation.
 */
export const glossary = {
  'PowerPlays History': {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Full site name — must appear exactly as shown in all locales.',
    definition: 'The full name of this website.',
    notes:
      '"PowerPlays" is one word (no space between Power and Plays), followed by "History".',
  },
  PowerPlays: {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Brand shortform — one word, no space between "Power" and "Plays".',
    definition: 'Shortform of the site name.',
    notes:
      'Do not translate, transliterate, or insert a space between "Power" and "Plays".',
  },
  POWERPLAYS: {
    category: 'brand',
    doNotTranslate: true,
    reason:
      'Brand wordmark displayed in uppercase — must appear exactly as shown.',
    definition: 'The uppercase wordmark of this website.',
    notes:
      'Do not translate or transliterate. Render in uppercase wherever the brand wordmark appears.',
  },
  'powerplayshistory.com': {
    category: 'brand',
    doNotTranslate: true,
    reason: 'Domain name — never translate URLs.',
    definition: 'The domain of this website.',
    notes: null,
  },
};

export const doNotTranslateTerms = Object.entries(glossary)
  .filter(([, meta]) => meta.doNotTranslate)
  .map(([term]) => term);
