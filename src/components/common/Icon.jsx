/**
 * Thin wrapper around Material Symbols Outlined.
 * Pass `name` (the symbol name) and optional `filled` to set the FILL axis.
 * Always aria-hidden — icons are decorative; accessible names come from surrounding text.
 */
export function Icon({ name, filled = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      data-fill={filled ? 'true' : 'false'}
      className={`material-symbols-outlined ${className}`}
    >
      {name}
    </span>
  );
}
