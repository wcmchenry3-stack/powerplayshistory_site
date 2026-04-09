import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCitationsBySlug } from '../data/citations.js';
import { getDossierBySlug } from '../data/videoDossiers.js';
import { Icon } from '../components/common/Icon.jsx';

export default function Citations() {
  const { slug } = useParams();
  const { t } = useTranslation(['dossiers']);
  const entry = getCitationsBySlug(slug);

  if (!entry) {
    return <Navigate to="/dossiers" replace />;
  }

  const companion = entry.companionVideoSlug
    ? getDossierBySlug(entry.companionVideoSlug)
    : null;
  const episodeTitle = companion
    ? t(`${companion.i18nKey}.title`)
    : t(`${entry.i18nKey}.title`);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 px-6 md:px-12 lg:px-16 pt-12 pb-8 max-w-4xl mx-auto w-full scroll-mt-20"
    >
      <nav className="mb-10" aria-label={t('backToDossiers')}>
        <Link
          to="/dossiers"
          className="font-label text-xs uppercase tracking-widest font-bold text-secondary inline-flex items-center min-h-[44px] hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded"
        >
          {t('backToDossiers')}
        </Link>
      </nav>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span aria-hidden="true" className="h-px w-12 bg-secondary" />
          <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold">
            {t('videoCitations')}
          </span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary mb-8 tracking-tight">
          {episodeTitle}
        </h1>
        <p className="font-headline italic text-lg md:text-xl text-primary/80 mb-6">
          {t('citationsIntro')}
        </p>

        {companion && (
          <div className="flex flex-wrap gap-4 text-xs font-label uppercase tracking-widest">
            <a
              href={companion.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold inline-flex items-center gap-2 min-h-[44px] hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded"
            >
              {t('watchOnYoutube')}
              <Icon name="play_circle" className="text-sm" />
            </a>
            {companion.episodeNotesSlug && (
              <Link
                to={`/episode-notes/${companion.episodeNotesSlug}`}
                className="text-primary font-bold inline-flex items-center gap-2 min-h-[44px] hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded"
              >
                {t('episodeNotes')}
                <Icon name="menu_book" className="text-sm" />
              </Link>
            )}
          </div>
        )}
      </header>

      <div className="space-y-12">
        {entry.sections.map((section) => (
          <section
            key={section.heading}
            aria-labelledby={`section-${section.heading.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/15">
              <Icon name={section.icon} className="text-secondary text-xl" />
              <h2
                id={`section-${section.heading.replace(/\s+/g, '-').toLowerCase()}`}
                className="font-headline text-2xl text-primary font-semibold tracking-tight"
              >
                {section.heading}
              </h2>
            </div>
            <ol className="space-y-6 list-none">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="relative ps-6 before:absolute before:start-0 before:top-[0.6em] before:w-2 before:h-px before:bg-secondary"
                >
                  <p className="font-label text-xs uppercase tracking-widest font-bold text-secondary mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-on-surface leading-relaxed font-body">
                    {item.citation}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary/70 hover:text-secondary transition-colors break-all mt-1 inline-block focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      {item.url}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-outline-variant/15">
        <p className="text-xs text-on-surface-variant font-label italic">
          {t('citationsFormat')}
        </p>
      </footer>
    </main>
  );
}
