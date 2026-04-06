/**
 * Featured dossiers shown on the home page.
 * i18nKey references keys under the "dossiers" namespace (e.g. `${i18nKey}.title`).
 */
export const featuredDossiers = [
  {
    id: 'lincoln-emancipation',
    i18nKey: 'lincoln',
    badge: { kind: 'caseFile', value: '081' },
    image: '/images/dossier-lincoln.svg',
    accent: 'secondary',
    href: '/dossiers',
  },
  {
    id: 'sedition-1798',
    i18nKey: 'sedition',
    badge: { kind: 'caseFile', value: '017' },
    image: '/images/dossier-sedition.svg',
    accent: 'tertiary',
    href: '/dossiers',
  },
];
