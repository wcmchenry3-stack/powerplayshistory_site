import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '../common/Icon.jsx';

const ITEMS = [
  { to: '/', labelKey: 'bottomNav.archives', icon: 'history_edu', end: true },
  { to: '/dossiers', labelKey: 'bottomNav.dossiers', icon: 'folder_shared' },
  {
    to: '/episode-notes',
    labelKey: 'bottomNav.episodeNotes',
    icon: 'menu_book',
  },
];

export function BottomNavBar() {
  const { t } = useTranslation('common');

  return (
    <nav
      aria-label={t('bottomNav.ariaLabel')}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-stretch pt-2 pb-[env(safe-area-inset-bottom)] bg-background/85 backdrop-blur-xl shadow-archive-lift"
    >
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 min-h-[44px] min-w-[44px] px-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background ${
              isActive
                ? 'text-secondary font-bold'
                : 'text-primary/60 hover:text-secondary'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon name={item.icon} filled={isActive} />
              <span className="font-label text-[10px] font-medium tracking-wide uppercase mt-1">
                {t(item.labelKey)}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
