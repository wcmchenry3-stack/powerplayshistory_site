/**
 * Video dossiers registry for the /dossiers page.
 *
 * REAL_DOSSIERS lists actually-published YouTube videos. It starts empty
 * and is appended to as new episodes ship.
 *
 * In development we also render a set of placeholder cards so the grid
 * layout can be worked on with live data. In production (import.meta.env.PROD)
 * the placeholders are skipped entirely — the page renders an empty state
 * until real videos exist.
 *
 * NO PLACEHOLDER CONTENT IS EVER RENDERED IN PRODUCTION.
 */

const REAL_DOSSIERS = [];

// Dev-only placeholders. Kept in one place so they can be removed or
// promoted to REAL_DOSSIERS as real videos are published.
const DEV_PLACEHOLDERS = [
  {
    slug: 'sedition-1798',
    i18nKey: 'sedition',
    caseNumber: '1798-A',
    eraLabelKey: 'eras.politicalPanic1798',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-sedition',
    duration: '24:12',
    formatKey: 'formats.fullLength',
    accent: 'secondary',
    isPlaceholder: true,
  },
  {
    slug: 'homestead-1892',
    i18nKey: 'homestead',
    caseNumber: '1892-L',
    eraLabelKey: 'eras.laborWars1892',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-homestead',
    duration: '18:45',
    formatKey: 'formats.investigation',
    accent: 'primary',
    isPlaceholder: true,
  },
  {
    slug: 'french-connection-1776',
    i18nKey: 'frenchConnection',
    caseNumber: '1776-S',
    eraLabelKey: 'eras.shadowDiplomacy1776',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-french',
    duration: '32:00',
    formatKey: 'formats.deepDive',
    accent: 'secondary',
    isPlaceholder: true,
  },
  {
    slug: 'black-tuesday-1929',
    i18nKey: 'blackTuesday',
    caseNumber: '1929-C',
    eraLabelKey: 'eras.economicCollapse1929',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-crash',
    duration: '41:15',
    formatKey: 'formats.documentary',
    accent: 'primary',
    isPlaceholder: true,
  },
  {
    slug: 'louisiana-1803',
    i18nKey: 'louisiana',
    caseNumber: '1803-E',
    eraLabelKey: 'eras.expansion1803',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-louisiana',
    duration: '27:50',
    formatKey: 'formats.expedition',
    accent: 'secondary',
    isPlaceholder: true,
  },
  {
    slug: 'telegraph-1844',
    i18nKey: 'telegraph',
    caseNumber: '1844-I',
    eraLabelKey: 'eras.innovation1844',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-telegraph',
    duration: '15:30',
    formatKey: 'formats.shortForm',
    accent: 'primary',
    isPlaceholder: true,
  },
];

export function getVideoDossiers() {
  if (import.meta.env.DEV) {
    return [...REAL_DOSSIERS, ...DEV_PLACEHOLDERS];
  }
  return REAL_DOSSIERS;
}

/**
 * Look up a dossier by slug. In production this only returns published
 * (real) dossiers — so companion-video links render only when a real
 * video exists. In development the dev placeholders also match, so the
 * linked UI can be exercised locally.
 */
export function getDossierBySlug(slug) {
  return getVideoDossiers().find((d) => d.slug === slug) ?? null;
}
