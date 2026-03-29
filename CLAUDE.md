# powerplayshistory.com — Claude Standards

See global standards at `~/.claude/CLAUDE.md` and `~/.claude/standards/`.

## Stack

React + Vite | Tailwind CSS 4 | i18next (13 locales, `common` namespace only)

## Branching

- `main` → production (Render auto-deploy)
- `dev` → default branch (integration)
- `feature/*` → local work, PR into `dev`; `dev` → `main` to release

## Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Tests (CI): `npm run test:run`
- Tests (coverage): `npm run test:coverage`
- Lint: `npm run lint`
- i18n check: `npm run i18n:check`
- i18n translate: `OPENAI_API_KEY=<key> node scripts/translate.js --locale <code> --namespace common`
