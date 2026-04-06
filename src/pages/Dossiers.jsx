import { useTranslation } from 'react-i18next';
import { getVideoDossiers } from '../data/videoDossiers.js';
import { VideoDossierCard } from '../components/dossiers/VideoDossierCard.jsx';
import { EmptyState } from '../components/common/EmptyState.jsx';

export default function Dossiers() {
  const { t } = useTranslation('dossiers');
  const dossiers = getVideoDossiers();

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 px-6 md:px-12 pt-12 pb-8 max-w-6xl mx-auto w-full scroll-mt-20"
    >
      <header className="mb-12 space-y-4">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-12 bg-secondary" />
          <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold">
            {t('pageTitle')}
          </span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl text-primary italic">
          {t('pageTitle')}
        </h1>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl italic">
          {t('pageIntro')}
        </p>
      </header>

      {dossiers.length === 0 ? (
        <EmptyState
          icon="movie"
          title={t('emptyState.title')}
          body={t('emptyState.body')}
        />
      ) : (
        <section
          aria-label={t('pageTitle')}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {dossiers.map((d) => (
            <VideoDossierCard key={d.slug} dossier={d} />
          ))}
        </section>
      )}
    </main>
  );
}
