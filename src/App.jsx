import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js';
import { useHtmlAttributes } from './i18n/useHtmlAttributes.js';
import { SkipLink } from './components/layout/SkipLink.jsx';
import { TopAppBar } from './components/layout/TopAppBar.jsx';
import { BottomNavBar } from './components/layout/BottomNavBar.jsx';
import Home from './pages/Home.jsx';
import Dossiers from './pages/Dossiers.jsx';
import EpisodeNotes from './pages/EpisodeNotes.jsx';
import NotFound from './pages/NotFound.jsx';

// The Episode Note detail page bundles react-markdown + remark-gfm + note body text.
// Code-split so it only loads when a visitor opens a note.
const EpisodeNote = lazy(() => import('./pages/EpisodeNote.jsx'));
const Citations = lazy(() => import('./pages/Citations.jsx'));

function AppShell() {
  useHtmlAttributes();
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-on-background font-body antialiased">
        <div
          className="fixed inset-0 grain-overlay z-[100] pointer-events-none"
          aria-hidden="true"
        />
        <SkipLink />
        <TopAppBar />
        <div className="flex-1 flex flex-col pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dossiers" element={<Dossiers />} />
            <Route path="/episode-notes" element={<EpisodeNotes />} />
            <Route path="/episode-notes/:slug" element={<EpisodeNote />} />
            <Route path="/citations/:slug" element={<Citations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={null}>
        <AppShell />
      </Suspense>
    </I18nextProvider>
  );
}
