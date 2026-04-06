/* eslint-disable security/detect-non-literal-fs-filename */
import './i18nTestInstance.js';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import Home from '../pages/Home.jsx';
import { TopAppBar } from '../components/layout/TopAppBar.jsx';
import { BottomNavBar } from '../components/layout/BottomNavBar.jsx';

function renderHome() {
  return render(
    <MemoryRouter>
      <TopAppBar />
      <Home />
      <BottomNavBar />
    </MemoryRouter>
  );
}

function getSourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getSourceFiles(fullPath));
    } else if (
      (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) &&
      !fullPath.includes('.test.')
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

// OWASP A04 — Insecure Design: tab-napping via target="_blank" without rel
describe('Security: external links (OWASP A04)', () => {
  it('Home — all target="_blank" anchors have rel="noopener noreferrer"', () => {
    const { container } = renderHome();
    const links = container.querySelectorAll('a[target="_blank"]');
    for (const link of links) {
      const rel = (link.getAttribute('rel') ?? '').split(/\s+/);
      expect(rel, `"${link.textContent.trim()}" is missing noopener`).toContain(
        'noopener'
      );
      expect(
        rel,
        `"${link.textContent.trim()}" is missing noreferrer`
      ).toContain('noreferrer');
    }
  });
});

// OWASP A05 — Security Misconfiguration: missing alt degrades to filename exposure
describe('Security: images (OWASP A05)', () => {
  it('all images have an alt attribute', () => {
    const { container } = renderHome();
    const images = container.querySelectorAll('img');
    expect(
      images.length,
      'expected at least one image on Home page'
    ).toBeGreaterThan(0);
    for (const img of images) {
      expect(
        img.hasAttribute('alt'),
        `img src="${img.getAttribute('src')}" is missing the alt attribute`
      ).toBe(true);
    }
  });
});

// OWASP A03 — Injection: javascript: hrefs allow XSS via URL
describe('Security: no javascript: protocol hrefs (OWASP A03)', () => {
  it('Home — no anchors use javascript: protocol', () => {
    const { container } = renderHome();
    const jsLinks = container.querySelectorAll('a[href^="javascript:"]');
    expect(jsLinks.length).toBe(0);
  });
});

// OWASP A03 — Injection: static source scan for dangerous DOM patterns
describe('Security: source code audit (OWASP A03)', () => {
  const srcDir = join(process.cwd(), 'src');

  it('no dangerouslySetInnerHTML in source files', () => {
    const files = getSourceFiles(srcDir);
    const violations = files.filter((f) =>
      readFileSync(f, 'utf-8').includes('dangerouslySetInnerHTML')
    );
    expect(
      violations,
      `dangerouslySetInnerHTML found in:\n${violations.join('\n')}`
    ).toHaveLength(0);
  });

  it('no eval() calls in source files', () => {
    const files = getSourceFiles(srcDir);
    const violations = files.filter((f) =>
      /\beval\s*\(/.test(readFileSync(f, 'utf-8'))
    );
    expect(
      violations,
      `eval() found in:\n${violations.join('\n')}`
    ).toHaveLength(0);
  });
});
