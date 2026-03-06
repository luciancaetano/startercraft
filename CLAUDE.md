# Claude Code Instructions for StarterCraft

## Project Overview

React + TypeScript starter project using MVVM pattern with a Domain Layer architecture. Built with Vite, styled with Tailwind CSS + SCSS Modules, tested with Vitest.

## Tech Stack

- **Framework**: React 19, TypeScript 5.9
- **Bundler**: Vite 7
- **Styling**: Tailwind CSS 4 + SCSS Modules (`[name].module.scss`)
- **Routing**: React Router DOM 7
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint 9 (flat config) + @stylistic
- **Code Generation**: Plop.js via `npm run generate`

## Architecture: MVVM + Domain Layer

### Layer Hierarchy (top → bottom)

```
View (.tsx)           → JSX rendering only
ViewModel (.view-model.ts) → React state orchestration (useState, useEffect, useCallback)
Services              → Business logic and orchestration
Repositories          → Data access (API, localStorage, IndexedDB)
Validators            → Pure validation rules
Mappers               → DTO ↔ Model transformations
DTOs                  → API request/response shapes
Models                → Domain types, interfaces, enums (leaf layer)
Constants             → Domain enums, config values (leaf layer)
```

### Domain Layer (`src/app/domain/`)

| Sublayer     | Path                   | Naming                 | Responsibility                                                                     |
| ------------ | ---------------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| Models       | `domain/models/`       | `[name].model.ts`      | Domain types, interfaces, enums. Framework-agnostic.                               |
| Services     | `domain/services/`     | `[name].service.ts`    | Business logic. Export as namespace objects (`export const FooService = { ... }`). |
| Repositories | `domain/repositories/` | `[name].repository.ts` | Data access. Only layer that talks to external systems.                            |
| Validators   | `domain/validators/`   | `[name].validator.ts`  | Pure validation rules. No side effects.                                            |
| Mappers      | `domain/mappers/`      | `[name].mapper.ts`     | Transform DTOs to/from domain models. Pure functions.                              |
| DTOs         | `domain/dtos/`         | `[name].dto.ts`        | API request/response contracts. Mirror the API shape.                              |
| Constants    | `domain/constants/`    | `[name].constants.ts`  | Domain enums, config values, storage keys.                                         |

Each sublayer has a barrel `index.ts`. Access via `@domain/*` alias.

### Import Rules

- **Models/Constants/DTOs** → import nothing (leaf layers)
- **Validators** → may import Models, Constants
- **Mappers** → may import Models, DTOs
- **Repositories** → may import Models, DTOs, Mappers, Constants
- **Services** → may import Models, Repositories, Validators, Constants
- **ViewModels** → may import Models, Services, Constants
- **Views** → may import ViewModels, component types

**Never** import upward in the hierarchy (e.g., services must not import from view-models).

## Component Structure

Each component lives in `src/app/components/[type]/[name]/` with these files:

- `[name].tsx` — View (JSX only)
- `[name].view-model.ts` — ViewModel (React state, delegates to domain services)
- `[name].types.ts` — UI prop types & component interfaces
- `[name].module.scss` — Scoped styles
- `[name].spec.tsx` — Unit tests
- `index.ts` — Barrel exports

Component types: `elements/`, `layouts/`, `pages/`, `providers/`.

## Path Aliases

| Alias           | Path                   |
| --------------- | ---------------------- |
| `@domain/*`     | `src/app/domain/*`     |
| `@components/*` | `src/app/components/*` |
| `@features/*`   | `src/app/features/*`   |
| `@config/*`     | `src/app/config/*`     |
| `@hooks/*`      | `src/app/hooks/*`      |
| `@utils/*`      | `src/app/utils/*`      |
| `@assets/*`     | `src/assets/*`         |

**Removed aliases**: `@app/types/*`, `@http/*`, `@api/*`, `@store/*`, `@locales/*`. Use `@domain/*` instead.

## Commands

- `npm start` — Start dev server
- `npm run build` — Production build
- `npm run test` — Run tests (Vitest)
- `npm run lint` — Lint with ESLint
- `npm run generate` — Scaffold components/features via Plop.js
- `npm run validate` — Type-check + lint + test (full pipeline)

## Testing Strategy

Component tests are split into two separate concerns:

- **ViewModel tests** (`[name].view-model.spec.ts`) — Test logic in isolation using `renderHook`. Mock domain services. Verify state transitions, service delegation, and the hook's returned API.
- **View tests** (`[name].spec.tsx`) — Test presentation by rendering the component. Verify rendering output, user interactions, and accessibility. Do NOT test business logic here.

Domain layer tests are standalone (no React):

- **Services/Validators** (`[name].service.spec.ts`) — Pure logic, highest priority.
- **Mappers** (`[name].mapper.spec.ts`) — Test both `toModel` and `toDto` directions.
- **Repositories** (`[name].repository.spec.ts`) — Mock external systems, test the contract.

Globals (`describe`, `it`, `expect`, `vi`) are available without imports (Vitest globals enabled).

## Key Conventions

- Always use barrel files (`index.ts`) for clean imports
- Business logic belongs in `domain/services/`, never in view-models or components
- Data access belongs in `domain/repositories/`, never in services directly
- Domain types belong in `domain/models/`, not in component `types.ts` files
- API shapes belong in `domain/dtos/`, mapped to models via `domain/mappers/`
- ViewModels are thin React hooks — they orchestrate state and delegate to services
- Views receive everything from the ViewModel, no logic in JSX files
- Keep all code type-safe, avoid `any`
