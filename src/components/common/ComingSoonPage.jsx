import { useTranslation } from 'react-i18next';

/**
 * Shared placeholder page for routes that are not yet built out.
 * Reads its page title from the namespace passed in, and the body
 * copy from `common:comingSoon.*`.
 */
export function ComingSoonPage({ namespace, titleKey = 'pageTitle' }) {
  const { t } = useTranslation([namespace, 'common']);
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold mb-4">
        {t(`${namespace}:${titleKey}`)}
      </span>
      <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">
        {t('common:comingSoon.title')}
      </h1>
      <p className="text-on-surface-variant font-body text-base max-w-md">
        {t('common:comingSoon.body')}
      </p>
    </main>
  );
}
