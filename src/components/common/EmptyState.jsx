import { Icon } from './Icon.jsx';

/**
 * Generic empty-state block used for "coming soon" states on pages
 * where real content has not yet been published.
 */
export function EmptyState({ icon = 'hourglass_empty', title, body }) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-6 text-center">
      <div
        aria-hidden="true"
        className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 text-secondary"
      >
        <Icon name={icon} className="text-3xl" />
      </div>
      <h2 className="font-headline text-3xl text-primary mb-3">{title}</h2>
      <p className="text-on-surface-variant font-body text-base max-w-md">
        {body}
      </p>
    </div>
  );
}
