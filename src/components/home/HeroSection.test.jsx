import '../../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from './HeroSection.jsx';

const wrap = (ui) => <MemoryRouter>{ui}</MemoryRouter>;

describe('HeroSection', () => {
  it('renders the headline as an h1', () => {
    render(wrap(<HeroSection />));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'History is a Story of Decisions.'
    );
  });

  it('has a CTA link to /dossiers', () => {
    render(wrap(<HeroSection />));
    const cta = screen.getByRole('link', { name: /open the archives/i });
    expect(cta).toHaveAttribute('href', '/dossiers');
  });

  it('renders the hero image with non-empty alt text', () => {
    const { container } = render(wrap(<HeroSection />));
    const img = container.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('alt')).toBeTruthy();
  });
});
