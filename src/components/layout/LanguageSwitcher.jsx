import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '../../i18n/locales.js';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const current = LOCALES.find((l) => l.code === i18n.language) ?? LOCALES[0];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
    };
  }, []);

  const select = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('languageSwitcher.ariaLabel')}
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg text-on-surface font-label text-sm hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
      >
        <span aria-hidden="true" className="text-base">
          {current.flag}
        </span>
        <span>{current.nativeLabel}</span>
        <svg
          aria-hidden="true"
          className="w-3 h-3 ms-0.5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label={t('languageSwitcher.ariaLabel')}
          className="absolute end-0 top-full mt-2 min-w-[12rem] max-w-[calc(100vw-2rem)] max-h-[60vh] overflow-y-auto bg-surface-container-lowest rounded-lg shadow-archive-float py-1 z-50"
        >
          {LOCALES.map((locale) => (
            <li
              key={locale.code}
              role="option"
              aria-selected={locale.code === i18n.language}
              tabIndex={0}
              onClick={() => select(locale.code)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  select(locale.code);
                }
              }}
              className="flex items-center gap-3 px-4 py-2 text-sm cursor-pointer select-none text-on-surface font-label hover:bg-surface-container-high focus:outline-none focus:bg-surface-container-high aria-selected:text-secondary aria-selected:font-semibold"
            >
              <span aria-hidden="true" className="text-base">
                {locale.flag}
              </span>
              <span>{locale.nativeLabel}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
