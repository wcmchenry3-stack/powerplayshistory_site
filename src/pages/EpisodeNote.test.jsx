import '../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import EpisodeNote from './EpisodeNote.jsx';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/episode-notes/:slug" element={<EpisodeNote />} />
        <Route path="/episode-notes" element={<div>Episode Notes List</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('EpisodeNote detail page', () => {
  it('renders the note title as an h1 at the known slug', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /alien and sedition acts/i
    );
  });

  it('renders the author byline', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    expect(screen.getByText('Bill McHenry')).toBeInTheDocument();
    expect(screen.getByText('PowerPlays History')).toBeInTheDocument();
  });

  it('renders the abstract block', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    expect(
      screen.getByRole('heading', { level: 2, name: /abstract/i })
    ).toBeInTheDocument();
  });

  it('renders section headings from the body (markdown headings demoted one level)', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /the quasi-war/i,
      })
    ).toBeInTheDocument();
  });

  it('has a back link to /episode-notes', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    const back = screen.getByRole('link', { name: /back to episode notes/i });
    expect(back).toHaveAttribute('href', '/episode-notes');
  });

  it('shows the companion-to label', () => {
    renderAt('/episode-notes/alien-and-sedition-acts');
    expect(screen.getByText(/companion to/i)).toBeInTheDocument();
  });

  it('redirects to /episode-notes when the slug is unknown', () => {
    renderAt('/episode-notes/does-not-exist');
    expect(screen.getByText('Episode Notes List')).toBeInTheDocument();
  });
});
