# Copilot Instructions for base-react-typescript-project

## 1. Code Generation

- Use Plop.js for generating components, features, providers, and subcomponents.
- Run `npm run generate` to scaffold new code using predefined templates.
- Generated code should follow the documented folder and file structure for each type (component, feature, subcomponent).

## 2. Domain Layer

All domain code lives in `src/app/domain/` and is accessible via `@domain/*`.

- **Models** (`domain/models/[name].model.ts`) - Domain types, interfaces, enums. Framework-agnostic, no React.
- **Services** (`domain/services/[name].service.ts`) - Business logic and orchestration. Export as namespace objects. May import models, repositories, validators, constants.
- **Repositories** (`domain/repositories/[name].repository.ts`) - Data access (API calls, localStorage, IndexedDB). The only layer that talks to external systems. Returns domain models via mappers.
- **Validators** (`domain/validators/[name].validator.ts`) - Pure validation rules. No side effects.
- **Mappers** (`domain/mappers/[name].mapper.ts`) - Transform DTOs to/from domain models. Pure functions.
- **DTOs** (`domain/dtos/[name].dto.ts`) - API request/response type contracts. Mirror the API shape exactly. Never used directly in UI.
- **Constants** (`domain/constants/[name].constants.ts`) - Domain enums, config values, storage keys.

Each sublayer has a barrel `index.ts`. The old `@app/types/*` and `@http/*` aliases have been removed.

## 3. Component Organization and MVVM Pattern

- Each component must be self-contained in its own folder under `src/components/[type]/[name]/`.
- For components scoped to a parent, place them in a `components` folder inside the parent component's directory, following the same structure.

### MVVM Responsibilities

- **ViewModel (`[name].view-model.ts`)**: Orchestrates React state and lifecycle. Must delegate business logic to domain services. Should not contain direct API calls, localStorage access, or DOM manipulation.
- **View (`[name].tsx`)**: Only presentation logic and JSX markup should be placed in the View file. The View should consume the ViewModel, receiving state and handlers as props or via hooks, and should not contain business logic or state management.

### Required files for each component:

- `[name].tsx`: Component view (JSX and UI markup only)
- `[name].spec.tsx`: Unit tests
- `[name].module.scss`: Scoped styles
- `[name].types.ts`: UI prop types & component interfaces
- `[name].view-model.ts`: React state orchestration, delegates to domain services
- `index.ts`: Public exports

## 5. Testing Strategy

Component tests are split into two separate concerns that mirror the MVVM pattern:

- **ViewModel tests** (`[name].view-model.spec.ts`) — Test the hook logic in isolation using `renderHook` from Testing Library. Mock domain services with `vi.mock`. Verify state transitions, service delegation, and the returned API shape.
- **View tests** (`[name].spec.tsx`) — Test the presentation layer by rendering the component. Verify rendering output, user interactions, and accessibility. Do NOT test business logic here — that belongs in ViewModel or Service tests.

Domain layer tests are standalone and do not depend on React:

- **Services** (`[name].service.spec.ts`) and **Validators** (`[name].validator.spec.ts`) — Pure logic, highest test priority.
- **Mappers** (`[name].mapper.spec.ts`) — Test both `toModel` and `toDto` directions.
- **Repositories** (`[name].repository.spec.ts`) — Mock external systems (fetch, localStorage), test the contract.

Vitest globals (`describe`, `it`, `expect`, `vi`) are available without imports.

## 6. Best Practices

- Maintain type safety throughout the codebase.
- Keep logic and UI separated (MVVM + Domain Layer).
- Business logic belongs in `domain/services/`, not in view-models or components.
- Data access belongs in `domain/repositories/`, not in services or view-models.
- Domain types belong in `domain/models/`, not in component `types.ts` files.
- API shapes belong in `domain/dtos/`, mapped to models via `domain/mappers/`.
- Use barrel files (`index.ts`) for clean imports.
- Follow the documented folder structures for all new code.

---

These instructions summarize the key conventions and patterns from the project's documentation. Copilot should use these as the default guidelines for code suggestions and generation in this repository.
