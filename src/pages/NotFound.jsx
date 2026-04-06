import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('common');
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">
        {t('notFound.title')}
      </h1>
      <p className="text-on-surface-variant font-body text-base max-w-md mb-8">
        {t('notFound.body')}
      </p>
      <Link
        to="/"
        className="inline-flex items-center min-h-[44px] bg-primary text-on-primary px-8 py-4 font-label text-sm uppercase tracking-widest rounded-lg shadow-archive-float hover:bg-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
      >
        {t('notFound.backHome')}
      </Link>
    </main>
  );
}
