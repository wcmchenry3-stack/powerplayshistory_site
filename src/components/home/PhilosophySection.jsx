import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';

export function PhilosophySection() {
  const { t } = useTranslation('home');
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="bg-primary-container text-on-primary py-20 px-6 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-0 end-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -me-32 -mt-32"
      />
      <div className="relative z-10 space-y-8">
        <h2
          id="philosophy-heading"
          className="font-headline text-4xl leading-tight italic"
        >
          {t('philosophy.heading')}
        </h2>
        <p className="font-body text-on-primary-container text-lg leading-relaxed">
          {t('philosophy.body')}
        </p>
        <div className="space-y-6 pt-4">
          <div className="flex gap-4 items-start">
            <Icon name="history_edu" className="text-secondary" />
            <div>
              <h3 className="font-headline text-xl text-on-primary">
                {t('philosophy.integrity.heading')}
              </h3>
              <p className="text-on-primary-container text-sm">
                {t('philosophy.integrity.body')}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Icon name="theater_comedy" className="text-secondary" />
            <div>
              <h3 className="font-headline text-xl text-on-primary">
                {t('philosophy.immersion.heading')}
              </h3>
              <p className="text-on-primary-container text-sm">
                {t('philosophy.immersion.body')}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Icon name="history" className="text-secondary" />
            <div>
              <h3 className="font-headline text-xl text-on-primary">
                {t('philosophy.uncertainty.heading')}
              </h3>
              <p className="text-on-primary-container text-sm">
                {t('philosophy.uncertainty.body')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
