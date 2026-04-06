import alienSeditionMd from '../content/essays/alien-and-sedition-acts.md?raw';

/**
 * Episode Note registry for the /episode-notes section.
 * Each note's title/subtitle/abstract lives under its i18nKey in the
 * `episodeNotes` namespace so it can be translated. The body markdown
 * itself stays in the source language for now.
 *
 * `companionVideoSlug` points to an entry in videoDossiers.js. When the
 * matching video has been published, the note links out to it; otherwise
 * the UI shows "Video dossier forthcoming".
 */
export const essays = [
  {
    slug: 'alien-and-sedition-acts',
    i18nKey: 'alienSedition',
    companionVideoSlug: 'sedition-1798',
    volume: 'I',
    issue: 'I',
    author: {
      name: 'Bill McHenry',
      affiliation: 'PowerPlays History',
      initials: 'B',
    },
    publishedDate: '2026-04-05',
    markdown: alienSeditionMd,
  },
];

export function getEssayBySlug(slug) {
  return essays.find((e) => e.slug === slug) ?? null;
}
