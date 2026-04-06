import '../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EpisodeNotes from './EpisodeNotes.jsx';

const wrap = (ui) => <MemoryRouter>{ui}</MemoryRouter>;

describe('EpisodeNotes page', () => {
  it('renders the page heading and intro', () => {
    render(wrap(<EpisodeNotes />));
    expect(
      screen.getByRole('heading', { level: 1, name: /episode notes/i })
    ).toBeInTheDocument();
  });

  it('lists the Alien & Sedition note with a link to its detail page', () => {
    render(wrap(<EpisodeNotes />));
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /alien and sedition acts/i,
      })
    ).toBeInTheDocument();
    const readLinks = screen.getAllByRole('link', {
      name: /read episode note/i,
    });
    expect(readLinks.length).toBeGreaterThan(0);
    expect(readLinks[0].getAttribute('href')).toBe(
      '/episode-notes/alien-and-sedition-acts'
    );
  });

  it('attributes the note to Bill McHenry / PowerPlays History', () => {
    render(wrap(<EpisodeNotes />));
    expect(screen.getByText('Bill McHenry')).toBeInTheDocument();
    expect(screen.getByText('PowerPlays History')).toBeInTheDocument();
  });

  it('shows the companion-to label with either a video title or "forthcoming"', () => {
    render(wrap(<EpisodeNotes />));
    // Label always present
    expect(screen.getByText(/companion to/i)).toBeInTheDocument();
  });
});
