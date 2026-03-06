# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.1]

### Tests

- Added **unit tests for 90%+ coverage** across components and domain services:
  - `ColorModeService` — full coverage with `matchMedia` handling and localStorage persistence
  - `NavigationService` — `window.open` delegation tests
  - `DarkModeSwitch` — view and view-model tests
  - `BlinkButton` — view-model tests
  - `HomePage` — view-model tests with `NavigationService` mocking
  - `NotFoundPage` — view and view-model tests
  - `ErrorFallback` — rendering and reset callback tests

### Fixed

- **ESLint config** — added `vitest/globals` to language options and adjusted `@stylistic` rules (`jsx-pascal-case` ignore pattern)
- **Generators** — updated component, page, and provider templates to align with current MVVM conventions (simplified types, consistent prop interfaces, added `Page.view-model.ts.hbs`)
- **Vite config** — fixed `vite.config.ts` and `vitest.config.ts` test configuration (`globals`, `css.modules`, `setupFiles`)

### Changed

- **Documentation** — updated `CLAUDE.md`, `copilot-instructions.md`, `README.md`, `docs/testing-guide.md`, `docs/code-generation.md`, `docs/domain-layer.md`, `docs/workflows-deps.md`, and `docs/feature-definition.md` with testing strategy sections and minor corrections
- **Package scripts** — added `test:ui` script for Vitest UI
- **ColorModeService** — minor refactor (`getColorMode` consistency)
- **ErrorFallback** — simplified button `onClick` handler
- **Component types** — simplified `IBlinkButtonProps` and `IPageProps` interfaces
- **`src/index.tsx`** — minor cleanup of `reportWebVitals` implementation

---

## [1.4.0]

### Removed

- **i18n (Internationalization)** — removed entirely
  - Dependencies: `i18next`, `react-i18next`, `i18next-browser-languagedetector`
  - Configuration: `src/app/config/i18n.config.ts`, `src/i18next.d.ts`
  - Translations: `src/locales/` (`en/`, `es/`, `pt-BR/`)
  - `@locales/*` alias removed from `tsconfig.paths.json` and `vite.config.ts`
  - `NotFoundPage` now uses static text instead of translation keys
  - `src/setupTests.ts` cleaned up (i18n mock removed)
  - `src/index.tsx` cleaned up (i18n config import and type reference removed)

- **Store layer** — removed `src/app/store/.gitkeep` and `@store/*` alias
- **Mock files** — removed `__mocks__/` directory (`cssTransform.js`, `fileMock.js`, `react-router-dom.ts`, `svgTransform.js`)
- **Legacy configs** — removed `jest.config.ts` and PostCSS plugin reference in `postcss.config.cjs`
- **Unused dependencies** — `dayjs`, `lodash`, `@types/lodash`, `history`, `@types/dompurify`, `@types/jsonwebtoken`, `@types/marked`, `@mswjs/data`, `@stylistic/eslint-plugin-ts`, `autoprefixer`, `cross-env`, `identity-obj-proxy`, `is-ci`, `is-ci-cli`, `react-test-renderer`, `serve`, `ts-jest`, `tsconfig-paths-webpack-plugin`, `vite-plugin-string`, `type-fest`
- **Legacy scripts** — removed `test:staged`, `serve`; removed `resolutions` and inline `eslintConfig` from `package.json`
- **Documentation** — removed `docs/store.md`

### Changed

- **Dependencies reorganized** — moved build/dev tools (`typescript`, `vite`, `vite-tsconfig-paths`, `@types/*`, `@testing-library/*`, `@stylistic/eslint-plugin`, `@tailwindcss/typography`) from `dependencies` to `devDependencies`
- **Package scripts** — replaced `yarn` references with `npm run` in `validate` and `lint-staged` scripts
- **lint-staged** — simplified to only run `eslint --fix` (removed `test:staged` step)
- **Web Vitals** — added inline `reportWebVitals` in `src/index.tsx` (CLS, FID, LCP, FCP, TTFB), active only in dev mode
- **Copilot instructions** — removed store organization section; minor formatting fixes

### Documentation

- Added `docs/testing-guide.md` — comprehensive testing guide with Vitest + Testing Library patterns
- Updated `docs/code-generation.md`, `docs/component-organization.md`, `docs/domain-layer.md`
- Updated `CLAUDE.md` — removed `@store/*`, `@locales/*` from alias table; updated conventions
- Updated `README.md` — refreshed to reflect current project state

---

## [1.3.0]

### Architecture

- Introduced **Domain Layer** (`src/app/domain/`) with 7 sublayers:
  - `models/` — `ColorMode`, `ColorModePreference`, `ITestableProps` (migrated from `src/app/types/testing.ts`)
  - `services/` — `ColorModeService` (system preference detection, localStorage persistence, DOM theme application, toggle logic) and `NavigationService` (external URL handling)
  - `repositories/` — placeholder for data access abstraction
  - `validators/` — placeholder for pure validation rules
  - `mappers/` — placeholder for DTO ↔ Model transformations
  - `dtos/` — placeholder for API request/response contracts
  - `constants/` — placeholder for domain enums and config values
- Added `@domain/*` path alias in `tsconfig.paths.json`, replacing removed `@http/*`, `@app/types/*`, and `@api/*` aliases
- ViewModels refactored to thin orchestration hooks — `dark-mode-switch.view-model.ts` now delegates to `ColorModeService`, `home-page.view-model.ts` delegates to `NavigationService`

### Project Cleanup

- Removed `src/lib/` entirely:
  - `src/lib/i18n/` (custom translation hooks, `withResourceBundle` HOC, namespace context) — replaced by direct `react-i18next` usage
  - `src/lib/router/` (custom router wrapper, `AuthenticatedRoute`) — replaced by `react-router-dom` directly
  - `src/lib/tests/` (custom render utility) — replaced by `@testing-library/react` directly
- Removed `src/app/http/` (auth API client, `auth.ts`, `auth.spec.ts`)
- Removed `src/app/utils/apiClient.ts` and `token.ts` (HTTP client and JWT token utilities with their tests)
- Removed `src/app/hooks/use-api-error.ts` and `use-uuid.ts` (with tests)
- Removed `src/app/types/` (`api.ts`, `auth.ts`, `config.ts` — types consolidated into domain models)
- Removed `src/app/config/app.config.ts`
- Removed `src/app/routes/index.tsx` — replaced by `src/app/config/routes.config.tsx`
- Removed `src/i18n/index.ts` — replaced by `src/app/config/i18n.config.ts`

### Components

- Removed `auth-provider` component entirely (context, model, types, tests)
- Removed `user-dropdown` component entirely (view, types, view-model, styles, translations, tests)
- Removed `theme-showcase-page` entirely (853-line component with styles, routes, types, view-model)
- Removed `loader.view-model.ts` and `main-layout.view-model.ts` (unnecessary view-models for simple components)
- Removed `home-page.routes.tsx` (route config moved to centralized `routes.config.tsx`)
- Removed `app-provider.spec.tsx`
- Removed per-component translation folders from `home-page`, `not-found-page` — translations centralized in `src/locales/`
- Simplified all component type files — `ITestableProps` now imported from `@domain/models` instead of `@app/types/testing`
- Simplified `blink-button`, `loader`, `page`, `dark-mode-switch`, `main-layout`, `home-page`, `not-found-page`, `error-fallback` views (cleaner JSX, reduced complexity)
- Tests updated to use `@testing-library/react` render directly instead of custom `@lib/tests` wrapper

### Internationalization

- Created `src/locales/` with centralized per-language barrel files (`en/`, `es/`, `pt-BR/`)
- Added `src/i18next.d.ts` for type-safe translation keys
- i18n configuration moved from `src/lib/i18n/configure.ts` to `src/app/config/i18n.config.ts` (simplified, removed custom wrapper layers)

### Generators

- Removed Plop generator scripts (`generators/component/index.cjs`, `generators/feature/index.cjs`, `generators/provider/index.cjs`, `generators/subcomponent/index.cjs`) — replaced by `@startercraft/cli`
- Removed `Component.routes.tsx.hbs`, `Component.view-model.ts.hbs` templates
- Removed per-component translation templates (`translations/en/index.ts.hbs`, `translations/index.ts.hbs`, `translations/pt-BR/index.ts.hbs`)
- Updated remaining generator templates to import from `@domain/models` instead of `@app/types/testing`
- Updated `plopfile.cjs` to use `@startercraft/cli` generators

### CI/CD & Tooling

- Added `release.yml` workflow (semantic-release automation)
- Added `deps-report.yml` workflow (dependency update reports)
- Added `pr-ncu-comment.yml` workflow (PR comments for outdated deps)
- Updated `ci.yml` (simplified steps, removed unnecessary format/type checks, fixed test command to `npm run test`)
- Added `.editorconfig` (consistent indentation, line endings, trailing newline rules)
- Added `get-version.cjs` (version extraction script for CI)
- Added `__mocks__/react-router-dom.ts` (router mock for tests)
- Updated `jest.config.ts` / `vitest.config.ts` (path alias adjustments, coverage config)
- Updated `postcss.config.cjs` (added Tailwind CSS plugin)
- Removed `tailwind.config.js` (migrated to Tailwind CSS v4 native config)
- Updated `vite.config.ts` and `vite-env.d.ts` (Vite 7 adjustments)

### Dependencies

Major version bumps:

- React `18.x` → `19.2.4`
- Vite `5.x` → `7.3.1`
- TypeScript `5.3` → `5.9.3`
- Tailwind CSS `3.x` → `4.2.1` (new engine, config-less setup)
- React Router DOM `6.x` → `7.13.1`
- react-i18next `14.x` → `16.5.5`
- ESLint `8.x` → `9.x` (flat config)
- type-fest `4.x` → `5.4.4`

Added:

- `@startercraft/cli` (code generation)
- `@tailwindcss/postcss`, `@tailwindcss/vite` (Tailwind v4 integration)

Removed:

- `jsonwebtoken`, `@types/jsonwebtoken` (JWT handling removed)
- `@mswjs/http-middleware` (API mocking removed)
- Multiple internal `src/lib` dependencies

### Documentation

- Added `docs/domain-layer.md` with Mermaid architecture diagrams (architecture overview, dependency flow, runtime sequence diagram)
- Added `docs/feature-definition.md`
- Added `docs/workflows-deps.md`
- Added `.github/copilot-instructions.md` (Copilot AI coding guidelines)
- Added `CLAUDE.md` (Claude Code AI coding guidelines)
- Updated `README.md` (path alias table, documentation links)
- Updated `docs/code-generation.md`

### Store

- Removed `counter` store example (`counter.store.ts`, `counter.types.ts`, tests)
- `src/app/store/` now contains only `.gitkeep` as placeholder

---

## [1.2.1] - 2025-08-23

_Previous release. See git history for details._

