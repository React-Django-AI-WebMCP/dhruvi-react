# Dhruvi React

Production-ready React frontend scaffold: Vite, TypeScript, Tailwind CSS, shadcn/ui, React Router v7, TanStack React Query, Axios.

## Stack

- **Build:** Vite
- **UI:** React 19, TypeScript (strict), Tailwind CSS, shadcn/ui (`components/common/ui`)
- **Routing:** React Router v7 (data router, `createBrowserRouter`)
- **Server state:** TanStack React Query only (no Redux)
- **HTTP:** Axios (single instance, interceptors)
- **Quality:** ESLint, Prettier, Husky, lint-staged, Conventional Commits
- **Tests:** Vitest, React Testing Library

## Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `pnpm dev`          | Start dev server              |
| `pnpm build`        | Type-check + production build |
| `pnpm preview`      | Preview production build      |
| `pnpm lint`         | Run ESLint                    |
| `pnpm lint:fix`     | ESLint with auto-fix          |
| `pnpm format`       | Format with Prettier          |
| `pnpm format:check` | Check Prettier                |
| `pnpm type-check`   | TypeScript check              |
| `pnpm test`         | Run tests (watch)             |
| `pnpm test:run`     | Run tests once                |
| `pnpm prepare`      | Install Husky hooks           |

## Project structure

See `.cursor/react/project-architecture-rules.mdc` for the full layout. Summary:

- `src/app/` — Router, providers, QueryClient
- `src/components/common/` — Shared UI; shadcn lives under `ui/`
- `src/pages/` — Route-level screens (generic names)
- `src/hooks/` — Global hooks (including React Query hooks)
- `src/services/api/` — Axios client, types, query keys, API functions
- `src/theme/` — Design tokens (no arbitrary Tailwind values)

## Environment

- `VITE_API_BASE_URL` — Base URL for the API (optional; defaults to relative).

## Branching

Suggested prefixes: `feature/*`, `fix/*`, `release/*`. Commits follow Conventional Commits (enforced via commitlint).

---

# NEED CLARIFICATION

Decisions that must be confirmed with product or backend before finalizing behavior:

- **Auth mechanism:** JWT in header, cookie, OAuth, or SSO? Where is the token stored (e.g. `localStorage` key) and how is it read in the request interceptor?
- **Token refresh:** Silent refresh with refresh token, sliding session, or redirect to login on 401? If refresh, where does the refresh endpoint and token storage live?
- **API error contract:** Exact shape of error responses (e.g. `{ message, code, errors? }`) so the response interceptor can normalize to `ApiError` and map HTTP status to user-facing messages.
- **Pagination:** Cursor-based vs offset/limit; affects query key shape and hook signatures (e.g. `useUsersQuery({ cursor, limit })`).
- **Retry semantics:** Which queries/mutations should retry, with what backoff? (React Query defaults can be overridden once decided.)
- **Feature flags:** Any provider or service to integrate (e.g. LaunchDarkly)? If yes, where does it wrap the tree?
- **Observability:** Sentry, Datadog, or other; where to initialize and how to report API/runtime errors (e.g. from ErrorBoundary, React Query `onError`, Axios interceptor).
- **Environments:** How many (e.g. dev, staging, prod) and how `VITE_*` and other env vars are injected per deployment (build-time only vs runtime config).

Do not resolve these automatically; call them out and get confirmation.
