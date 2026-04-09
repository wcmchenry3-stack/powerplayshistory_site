import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';

const ACCENT_CLASS = {
  secondary: 'border-secondary',
  primary: 'border-primary',
  tertiary: 'border-tertiary',
};

const ERA_CLASS = {
  secondary: 'text-secondary',
  primary: 'text-primary',
  tertiary: 'text-tertiary',
};

/**
 * Video dossier card. Opens the linked YouTube video in a new tab.
 * Accessible name comes from the heading + summary + "opens on YouTube in a new tab" hint.
 */
export function VideoDossierCard({ dossier }) {
  const { t } = useTranslation('dossiers');
  const border = ACCENT_CLASS[dossier.accent] ?? 'border-secondary';
  const eraColor = ERA_CLASS[dossier.accent] ?? 'text-secondary';

  const title = t(`${dossier.i18nKey}.title`);
  const summary = t(`${dossier.i18nKey}.summary`);
  const imageAlt = t(`${dossier.i18nKey}.imageAlt`);
  const era = t(dossier.eraLabelKey);
  const format = t(dossier.formatKey);
  const newTabHint = t('openInNewTab');

  return (
    <article
      className={`group relative flex flex-col h-full bg-surface-container-highest p-1 border-s-4 ${border} shadow-archive-soft hover:-translate-y-1 hover:shadow-archive-float transition-all duration-300`}
    >
      <div className="relative overflow-hidden aspect-video bg-primary">
        {dossier.thumbnail ? (
          <img
            src={dossier.thumbnail}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-tertiary"
            />
            <span className="sr-only">{imageAlt}</span>
          </>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"
        />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <Icon
            name="play_circle"
            filled
            className="text-secondary-container"
          />
          <span className="font-label text-[10px] text-on-primary tracking-widest uppercase">
            {dossier.duration} · {format}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4 gap-4">
          <span
            className={`font-label text-[10px] uppercase tracking-widest font-bold ${eraColor}`}
          >
            {era}
          </span>
          <span className="text-[10px] font-label text-outline uppercase tracking-tighter shrink-0">
            {t('caseNumber', { value: dossier.caseNumber })}
          </span>
        </div>
        <h3 className="text-2xl font-headline font-semibold text-primary mb-3 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          {summary}
        </p>
        <div className="mt-auto pt-6 flex flex-col gap-3">
          <a
            href={dossier.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t('watchOnYoutube')}: ${title} (${newTabHint})`}
            className="font-label text-xs uppercase tracking-widest font-bold text-secondary inline-flex items-center gap-2 min-h-[44px] hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
          >
            {t('watchOnYoutube')}
            <Icon name="arrow_forward" className="text-sm" />
          </a>
          {dossier.episodeNotesSlug && (
            <Link
              to={`/episode-notes/${dossier.episodeNotesSlug}`}
              className="font-label text-xs uppercase tracking-widest font-bold text-primary inline-flex items-center gap-2 min-h-[44px] hover:gap-3 hover:text-secondary transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
            >
              {t('episodeNotes')}
              <Icon name="menu_book" className="text-sm" />
            </Link>
          )}
          {dossier.citationsSlug && (
            <Link
              to={`/citations/${dossier.citationsSlug}`}
              className="font-label text-xs uppercase tracking-widest font-bold text-primary inline-flex items-center gap-2 min-h-[44px] hover:gap-3 hover:text-secondary transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
            >
              {t('videoCitations')}
              <Icon name="format_quote" className="text-sm" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
