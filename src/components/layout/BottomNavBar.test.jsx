import '../../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BottomNavBar } from './BottomNavBar.jsx';

const wrap = (ui, { path = '/' } = {}) => (
  <MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>
);

describe('BottomNavBar', () => {
  it('renders 3 navigation links', () => {
    render(wrap(<BottomNavBar />));
    const nav = screen.getByRole('navigation', { name: /primary navigation/i });
    expect(nav.querySelectorAll('a')).toHaveLength(3);
  });

  it('marks Archives as current when on home route', () => {
    render(wrap(<BottomNavBar />, { path: '/' }));
    const archives = screen.getByRole('link', { name: /archives/i });
    expect(archives).toHaveAttribute('aria-current', 'page');
  });

  it('marks Dossiers as current when on /dossiers', () => {
    render(wrap(<BottomNavBar />, { path: '/dossiers' }));
    const dossiers = screen.getByRole('link', { name: /dossiers/i });
    expect(dossiers).toHaveAttribute('aria-current', 'page');
  });

  it('each link has the minimum tap-target size class', () => {
    render(wrap(<BottomNavBar />));
    const links = screen
      .getByRole('navigation', { name: /primary navigation/i })
      .querySelectorAll('a');
    for (const link of links) {
      expect(link.className).toMatch(/min-h-\[44px\]/);
      expect(link.className).toMatch(/min-w-\[44px\]/);
    }
  });
});
