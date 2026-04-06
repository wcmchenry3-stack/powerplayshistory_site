import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';
import { getDossierBySlug } from '../../data/videoDossiers.js';

/**
 * One entry in the Episode Notes list. The whole entry is an accessible
 * link to the note; a visible "Read Episode Note" affordance sits at the bottom.
 * If a companion video dossier is published, its title links out to YouTube.
 * Otherwise, "Video dossier forthcoming" is displayed.
 */
export function EpisodeNoteListItem({ note }) {
  const { t, i18n } = useTranslation(['episodeNotes', 'dossiers']);

  const title = t(`${note.i18nKey}.title`);
  const subtitle = t(`${note.i18nKey}.subtitle`);
  const summary = t(`${note.i18nKey}.summary`);

  const publishedFormatted = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(note.publishedDate));

  const companion = note.companionVideoSlug
    ? getDossierBySlug(note.companionVideoSlug)
    : null;
  const companionTitle = companion
    ? t(`dossiers:${companion.i18nKey}.title`)
    : null;

  return (
    <article className="relative bg-surface-container-highest p-8 md:p-10 border-s-4 border-secondary shadow-archive-soft hover:-translate-y-1 hover:shadow-archive-float transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <span aria-hidden="true" className="h-px w-10 bg-secondary" />
        <span className="text-secondary font-label text-[10px] uppercase tracking-[0.2em] font-bold">
          {t('volumeIssue', { volume: note.volume, issue: note.issue })}
        </span>
      </div>
      <h2 className="font-headline text-3xl md:text-4xl text-primary leading-tight tracking-tight mb-3">
        <Link
          to={`/episode-notes/${note.slug}`}
          className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
        >
          {title}
        </Link>
      </h2>
      <p className="font-headline italic text-xl text-primary/80 mb-6">
        {subtitle}
      </p>
      <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-3xl mb-6">
        {summary}
      </p>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-2 text-xs font-label uppercase tracking-widest">
        <span className="text-on-surface-variant">{t('companionTo')}:</span>
        {companion ? (
          <a
            href={companion.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded normal-case tracking-normal"
          >
            {companionTitle}
          </a>
        ) : (
          <span className="text-outline italic normal-case tracking-normal">
            {t('videoForthcoming')}
          </span>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center text-primary font-headline font-bold italic"
          >
            {note.author.initials}
          </span>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wide">
              {note.author.name}
            </p>
            <p className="text-on-surface-variant text-xs font-medium">
              {note.author.affiliation}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <span className="text-xs text-on-surface-variant font-label uppercase tracking-widest">
            {t('published')}: {publishedFormatted}
          </span>
          <Link
            to={`/episode-notes/${note.slug}`}
            aria-label={`${t('readEpisodeNote')}: ${title}`}
            className="font-label text-xs uppercase tracking-widest font-bold text-secondary inline-flex items-center gap-2 min-h-[44px] hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
          >
            {t('readEpisodeNote')}
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </div>
    </article>
  );
}
