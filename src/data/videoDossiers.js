/**
 * Video dossiers registry for the /dossiers page.
 * Append new entries as episodes are published.
 */

const DOSSIERS = [
  {
    slug: 'sedition-1798',
    i18nKey: 'sedition',
    caseNumber: '1798-A',
    eraLabelKey: 'eras.politicalPanic1798',
    youtubeUrl: 'https://www.youtube.com/watch?v=placeholder-sedition',
    duration: '24:12',
    formatKey: 'formats.fullLength',
    accent: 'secondary',
    thumbnail: '/images/dossier-sedition-thumb.png',
    episodeNotesSlug: 'alien-and-sedition-acts',
    citationsSlug: 'alien-and-sedition-acts',
  },
];

export function getVideoDossiers() {
  return DOSSIERS;
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
