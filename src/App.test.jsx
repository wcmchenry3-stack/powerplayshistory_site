import './test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).not.toBeNull();
  });

  it('renders the skip link as the first focusable element', () => {
    render(<App />);
    const skip = screen.getByText('Skip to main content');
    expect(skip.tagName).toBe('A');
    expect(skip).toHaveAttribute('href', '#main-content');
  });

  it('has a main landmark with id main-content', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('renders the hero headline as h1 on the home route', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'History is a Story of Decisions.'
    );
  });

  it('renders the brand wordmark in the top app bar', () => {
    render(<App />);
    const brandLinks = screen.getAllByRole('link', {
      name: /powerplays history/i,
    });
    expect(brandLinks.length).toBeGreaterThan(0);
  });

  it('renders the bottom navigation with 3 tabs', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /primary navigation/i });
    expect(nav).toBeInTheDocument();
    const links = nav.querySelectorAll('a');
    expect(links).toHaveLength(3);
    const labels = Array.from(links).map((a) => a.textContent);
    expect(labels.join(' ')).toMatch(/archives/i);
    expect(labels.join(' ')).toMatch(/dossiers/i);
    expect(labels.join(' ')).toMatch(/episode notes/i);
  });
});
