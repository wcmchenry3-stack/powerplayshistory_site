import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';

const ACCENT_CLASS = {
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
};

export function DossierCard({ dossier }) {
  const { t } = useTranslation(['home', 'dossiers']);
  const border = ACCENT_CLASS[dossier.accent] ?? 'border-secondary';

  const badgeText =
    dossier.badge.kind === 'caseFile'
      ? t('dossiers:badges.caseFile', { number: dossier.badge.value })
      : t('dossiers:badges.perspective');

  return (
    <article
      className={`bg-surface-container-highest rounded-lg overflow-hidden flex flex-col shadow-archive-soft border-s-4 ${border}`}
    >
      <div className="h-48 relative">
        <img
          src={dossier.image}
          alt={t(`dossiers:${dossier.i18nKey}.imageAlt`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 start-4 bg-primary/90 text-on-primary px-3 py-1 text-[10px] uppercase tracking-widest font-bold font-label backdrop-blur-md rounded">
          {badgeText}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-headline text-2xl text-primary">
          {t(`dossiers:${dossier.i18nKey}.title`)}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {t(`dossiers:${dossier.i18nKey}.summary`)}
        </p>
        <Link
          to={dossier.href}
          className="inline-flex items-center gap-1 min-h-[44px] text-secondary font-label text-xs uppercase tracking-widest font-bold group pt-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface-container-highest rounded"
        >
          {t('home:featured.examineCta')}
          <Icon
            name="chevron_right"
            className="text-xs group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </article>
  );
}
