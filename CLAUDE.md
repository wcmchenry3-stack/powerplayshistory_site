# powerplayshistory.com — Claude Standards

See global standards at `~/.claude/CLAUDE.md` and `~/.claude/standards/`.

## Stack

React + Vite | Tailwind CSS 4 | react-router-dom | i18next (13 locales; namespaces: `common`, `home`, `dossiers`, `episodeNotes`; flat dotted keys, `keySeparator: false`)

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
- i18n translate: `node scripts/translate.js --locale <code> --namespace <common|home|dossiers|episodeNotes>` (requires OpenAI key exported in env)

## Available Agents

These project subagents live in `.claude/agents/` and are invoked via the `Agent` tool (not Skill). Always prefer them over a general-purpose agent for their domain.

| Agent | `subagent_type` | When to use |
|---|---|---|
| lint-review | `lint-review` | Auto-fix lint issues after a lint-gate hook failure |
| plan-issues | `plan-issues` | Break a feature/bug/initiative into scoped GitHub issues — investigates code first, drafts for confirmation, then calls `gh issue create` |
| policy-compliance | `policy-compliance` | Check and fix policy violations after a policy-gate hook failure |
