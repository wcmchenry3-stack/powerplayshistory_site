import { useTranslation } from 'react-i18next';

/**
 * Skip-to-main-content link — first focusable element in the DOM.
 * Visually hidden until focused via keyboard.
 */
export function SkipLink() {
  const { t } = useTranslation('common');
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-secondary focus:text-on-primary focus:rounded-lg focus:ring-2 focus:ring-on-primary focus:outline-none focus:font-label focus:text-sm focus:uppercase focus:tracking-widest"
    >
      {t('skipLink')}
    </a>
  );
}
