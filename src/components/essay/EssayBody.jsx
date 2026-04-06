import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Strips the very first H1 from the essay markdown — the title is
 * rendered separately in the essay header, and we don't want two H1s.
 */
function stripLeadingH1(md) {
  const lines = md.split('\n');
  let i = 0;
  // Skip leading blank lines. `i` is a numeric, loop-bounded index.
  /* eslint-disable security/detect-object-injection */
  while (i < lines.length && lines[i].trim() === '') i++;
  if (i < lines.length && /^#\s+/.test(lines[i])) {
    lines.splice(i, 1);
  }
  /* eslint-enable security/detect-object-injection */
  return lines.join('\n').replace(/^\n+/, '');
}

/**
 * Every markdown heading is demoted by one level (h1→h2, h2→h3, …) so the
 * page keeps a single true h1 (the essay title in the header).
 */
const components = {
  h1: ({ children, ...props }) => (
    <h2
      {...props}
      className="font-headline text-3xl md:text-4xl text-primary mt-16 mb-6 tracking-tight"
    >
      {children}
    </h2>
  ),
  h2: ({ children, ...props }) => (
    <h3
      {...props}
      className="font-headline text-2xl md:text-3xl text-primary mt-12 mb-4 tracking-tight"
    >
      {children}
    </h3>
  ),
  h3: ({ children, ...props }) => (
    <h4
      {...props}
      className="font-headline text-xl text-primary mt-10 mb-3 tracking-tight"
    >
      {children}
    </h4>
  ),
  h4: ({ children, ...props }) => (
    <h5
      {...props}
      className="font-label text-sm uppercase tracking-widest text-primary mt-8 mb-2"
    >
      {children}
    </h5>
  ),
  p: ({ children, ...props }) => (
    <p
      {...props}
      className="font-body text-on-surface leading-loose mb-6 text-base md:text-[1.0625rem] break-words"
    >
      {children}
    </p>
  ),
  em: ({ children, ...props }) => (
    <em {...props} className="italic font-headline">
      {children}
    </em>
  ),
  strong: ({ children, ...props }) => (
    <strong {...props} className="font-semibold text-primary">
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="my-8 ps-6 border-s-2 border-secondary font-headline italic text-xl text-tertiary leading-relaxed"
    >
      {children}
    </blockquote>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="list-disc ps-6 mb-6 space-y-2 font-body text-on-surface"
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="list-decimal ps-6 mb-6 space-y-2 font-body text-on-surface"
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="leading-loose">
      {children}
    </li>
  ),
  hr: ({ ...props }) => (
    <hr
      {...props}
      aria-hidden="true"
      className="my-12 border-0 h-px bg-outline-variant/15"
    />
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    const isFootnote =
      href?.startsWith('#') || props['data-footnote-ref'] !== undefined;
    if (isExternal) {
      return (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline underline-offset-2 hover:text-primary transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <a
        {...props}
        href={href}
        className={
          isFootnote
            ? 'text-secondary no-underline hover:underline font-label text-[0.75em] align-super'
            : 'text-secondary underline underline-offset-2 hover:text-primary transition-colors'
        }
      >
        {children}
      </a>
    );
  },
  sup: ({ children, ...props }) => (
    <sup {...props} className="text-secondary font-label text-[0.7em] mx-0.5">
      {children}
    </sup>
  ),
  section: ({ children, 'data-footnotes': isFootnotes, ...props }) => {
    if (isFootnotes !== undefined) {
      return (
        <section
          {...props}
          data-footnotes
          className="mt-20 pt-10 border-t border-outline-variant/15 font-body text-sm text-on-surface-variant [&>ol]:list-decimal [&>ol]:ps-6 [&>ol]:space-y-3 [&>h2]:font-label [&>h2]:text-xs [&>h2]:uppercase [&>h2]:tracking-widest [&>h2]:text-primary [&>h2]:mb-4 [&_li]:leading-relaxed [&_p]:inline [&_p]:m-0 [&_a]:break-all"
        >
          {children}
        </section>
      );
    }
    return <section {...props}>{children}</section>;
  },
};

export function EssayBody({ markdown }) {
  const body = stripLeadingH1(markdown);
  return (
    <div className="prose-none overflow-x-hidden break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
