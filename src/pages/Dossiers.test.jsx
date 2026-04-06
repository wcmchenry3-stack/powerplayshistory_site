import '../test/i18nTestInstance.js';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const wrap = (ui) => <MemoryRouter>{ui}</MemoryRouter>;

describe('Dossiers page', () => {
  beforeEach(() => {
    vi.resetModules();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the page heading and intro', async () => {
    const Dossiers = (await import('./Dossiers.jsx')).default;
    render(wrap(<Dossiers />));
    expect(
      screen.getByRole('heading', { level: 1, name: /the dossiers archive/i })
    ).toBeInTheDocument();
  });

  it('shows the empty state when no real dossiers and no dev placeholders are provided', async () => {
    vi.doMock('../data/videoDossiers.js', () => ({
      getVideoDossiers: () => [],
    }));
    const Dossiers = (await import('./Dossiers.jsx')).default;
    render(wrap(<Dossiers />));
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /new dossiers in production/i,
      })
    ).toBeInTheDocument();
  });

  it('renders one card per dossier when dossiers are present', async () => {
    vi.doMock('../data/videoDossiers.js', () => ({
      getVideoDossiers: () => [
        {
          slug: 'sedition-1798',
          i18nKey: 'sedition',
          caseNumber: '1798-A',
          eraLabelKey: 'eras.politicalPanic1798',
          youtubeUrl: 'https://www.youtube.com/watch?v=test',
          duration: '24:12',
          formatKey: 'formats.fullLength',
          accent: 'secondary',
          isPlaceholder: true,
        },
      ],
    }));
    const Dossiers = (await import('./Dossiers.jsx')).default;
    render(wrap(<Dossiers />));
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /when free speech became a crime/i,
      })
    ).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /watch on youtube/i });
    expect(link).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=test'
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.getAttribute('rel')).toContain('noopener');
    expect(link.getAttribute('rel')).toContain('noreferrer');
  });
});
