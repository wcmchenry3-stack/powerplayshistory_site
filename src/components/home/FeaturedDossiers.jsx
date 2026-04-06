import { useTranslation } from 'react-i18next';
import { featuredDossiers } from '../../data/dossiers.js';
import { DossierCard } from './DossierCard.jsx';

export function FeaturedDossiers() {
  const { t } = useTranslation('home');
  return (
    <section
      aria-labelledby="featured-heading"
      className="px-6 py-12 space-y-10"
    >
      <div className="space-y-2">
        <h2
          id="featured-heading"
          className="font-headline text-3xl text-primary italic"
        >
          {t('featured.heading')}
        </h2>
        <div className="h-0.5 w-16 bg-secondary" aria-hidden="true" />
      </div>
      <div className="space-y-8">
        {featuredDossiers.map((d) => (
          <DossierCard key={d.id} dossier={d} />
        ))}
      </div>
    </section>
  );
}
