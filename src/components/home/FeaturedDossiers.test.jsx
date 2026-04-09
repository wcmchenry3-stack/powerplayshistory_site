import '../../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FeaturedDossiers } from './FeaturedDossiers.jsx';
import { featuredDossiers } from '../../data/dossiers.js';

const wrap = (ui) => <MemoryRouter>{ui}</MemoryRouter>;

describe('FeaturedDossiers', () => {
  it('renders the Featured Dossiers heading', () => {
    render(wrap(<FeaturedDossiers />));
    expect(
      screen.getByRole('heading', { level: 2, name: /featured dossiers/i })
    ).toBeInTheDocument();
  });

  it('renders a card per dossier with a translated title and summary', () => {
    render(wrap(<FeaturedDossiers />));
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /democracy under fire/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /the law the founders hoped you'd forget/i,
      })
    ).toBeInTheDocument();
  });

  it('renders an Examine Dossier link for each card with the correct href', () => {
    render(wrap(<FeaturedDossiers />));
    const links = screen.getAllByRole('link', { name: /examine dossier/i });
    expect(links).toHaveLength(featuredDossiers.length);
    expect(links[0]).toHaveAttribute('href', featuredDossiers[0].href);
  });

  it('renders every dossier image with a non-empty alt attribute', () => {
    const { container } = render(wrap(<FeaturedDossiers />));
    const imgs = container.querySelectorAll('img');
    expect(imgs.length).toBe(featuredDossiers.length);
    for (const img of imgs) {
      expect(img.getAttribute('alt')).toBeTruthy();
    }
  });

  it('renders the case file badge with the number interpolated', () => {
    render(wrap(<FeaturedDossiers />));
    expect(screen.getByText(/case file #081/i)).toBeInTheDocument();
  });
});
