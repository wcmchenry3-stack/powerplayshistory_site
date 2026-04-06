import '../../test/i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopAppBar } from './TopAppBar.jsx';

const wrap = (ui) => <MemoryRouter>{ui}</MemoryRouter>;

describe('TopAppBar', () => {
  it('renders the brand wordmark as a link to home', () => {
    render(wrap(<TopAppBar />));
    const brand = screen.getByRole('link', { name: /powerplays history/i });
    expect(brand).toHaveAttribute('href', '/');
    expect(brand).toHaveTextContent('POWERPLAYS');
  });

  it('renders the language switcher', () => {
    render(wrap(<TopAppBar />));
    expect(
      screen.getByRole('button', { name: /select language/i })
    ).toBeInTheDocument();
  });
});
