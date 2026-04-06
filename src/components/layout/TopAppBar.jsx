import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher.jsx';

export function TopAppBar() {
  const { t } = useTranslation('common');

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md shadow-archive-edge transition-colors duration-300">
      <div className="flex justify-between items-center gap-4 px-6 py-4 w-full">
        <Link
          to="/"
          aria-label={t('topBar.brandAriaLabel')}
          className="font-headline text-primary font-semibold tracking-widest text-2xl uppercase hover:text-secondary transition-colors rounded px-1 -mx-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
        >
          {t('brand')}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
