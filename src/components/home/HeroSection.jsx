import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';

export function HeroSection() {
  const { t } = useTranslation('home');
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[60vh] md:min-h-[618px] flex flex-col justify-end px-6 pt-12 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-parchment.svg"
          alt={t('hero.imageAlt')}
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative z-10 space-y-6">
        <span className="inline-block text-secondary font-label text-xs uppercase tracking-widest font-semibold border-s-2 border-secondary ps-3">
          {t('hero.eyebrow')}
        </span>
        <h1
          id="hero-heading"
          className="font-headline text-5xl md:text-6xl text-primary leading-[1.1] tracking-tight"
        >
          {t('hero.headline')}
        </h1>
        <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-sm">
          {t('hero.body')}
        </p>
        <div className="pt-4">
          <Link
            to="/dossiers"
            className="inline-flex items-center gap-2 min-h-[44px] bg-primary text-on-primary px-8 py-4 font-label text-sm uppercase tracking-widest rounded-lg shadow-archive-float hover:bg-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
          >
            {t('hero.cta')}
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
