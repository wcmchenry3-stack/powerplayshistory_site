import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getEssayBySlug } from '../data/essays.js';
import { getDossierBySlug } from '../data/videoDossiers.js';
import { EssayBody } from '../components/essay/EssayBody.jsx';

function formatDate(iso, locale) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}

export default function EpisodeNote() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation(['episodeNotes', 'dossiers']);
  const note = getEssayBySlug(slug);

  if (!note) {
    return <Navigate to="/episode-notes" replace />;
  }

  const title = t(`${note.i18nKey}.title`);
  const subtitle = t(`${note.i18nKey}.subtitle`);
  const abstract = t(`${note.i18nKey}.abstract`);

  const companion = note.companionVideoSlug
    ? getDossierBySlug(note.companionVideoSlug)
    : null;
  const companionTitle = companion
    ? t(`dossiers:${companion.i18nKey}.title`)
    : null;

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 px-6 md:px-12 lg:px-16 pt-12 pb-8 max-w-4xl mx-auto w-full scroll-mt-20"
    >
      <nav className="mb-10" aria-label={t('backToEpisodeNotes')}>
        <Link
          to="/episode-notes"
          className="font-label text-xs uppercase tracking-widest font-bold text-secondary inline-flex items-center min-h-[44px] hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded"
        >
          {t('backToEpisodeNotes')}
        </Link>
      </nav>

      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span aria-hidden="true" className="h-px w-12 bg-secondary" />
          <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold">
            {t('volumeIssue', { volume: note.volume, issue: note.issue })}
          </span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary mb-8 tracking-tight">
          {title}
        </h1>
        <p className="font-headline italic text-2xl md:text-3xl text-primary/80 mb-6">
          {subtitle}
        </p>
        <div className="mb-10 flex flex-wrap items-baseline gap-x-2 text-xs font-label uppercase tracking-widest">
          <span className="text-on-surface-variant">{t('companionTo')}:</span>
          {companion ? (
            <a
              href={companion.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background rounded normal-case tracking-normal"
            >
              {companionTitle}
            </a>
          ) : (
            <span className="text-outline italic normal-case tracking-normal">
              {t('videoForthcoming')}
            </span>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-y border-outline-variant/15">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="w-12 h-12 bg-surface-dim rounded-full flex items-center justify-center text-primary font-headline font-bold italic text-lg"
            >
              {note.author.initials}
            </div>
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-wide">
                {note.author.name}
              </p>
              <p className="text-on-surface-variant text-xs font-medium">
                {note.author.affiliation}
              </p>
            </div>
          </div>
          <div className="flex flex-col text-xs text-on-surface-variant font-label uppercase tracking-widest md:ms-auto md:text-end">
            <span>
              {t('published')}: {formatDate(note.publishedDate, i18n.language)}
            </span>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="abstract-heading"
        className="mb-16 relative p-8 bg-surface-container-highest rounded-lg shadow-archive-soft border-s-4 border-secondary"
      >
        <h2
          id="abstract-heading"
          className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 font-label"
        >
          {t('abstract')}
        </h2>
        <p className="font-headline italic text-lg leading-relaxed text-tertiary/90">
          {abstract}
        </p>
      </section>

      <article aria-label={t('noteSection')}>
        <EssayBody markdown={note.markdown} />
      </article>
    </main>
  );
}
