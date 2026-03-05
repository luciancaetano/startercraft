# Copilot Instructions for base-react-typescript-project

## 1. Code Generation
- Use Plop.js for generating components, features, providers, and subcomponents.
- Run `npm run generate` to scaffold new code using predefined templates.
- Generated code should follow the documented folder and file structure for each type (component, feature, subcomponent).


## 2. Domain Layer

- All domain types, shared interfaces, and business entities live in `src/app/domain/models/`.
  - File naming: `[name].model.ts`
  - Must be framework-agnostic (no React imports)
  - Exported via barrel file `models/index.ts`
- All business logic, API communication, and persistence live in `src/app/domain/services/`.
  - File naming: `[name].service.ts`
  - Export as namespace objects (e.g., `export const FooService = { ... }`)
  - Services may import from models but never from React or UI code
  - Exported via barrel file `services/index.ts`
- Use `@domain/models` for types and `@domain/services` for business logic.
- The old `@app/types/*` and `@http/*` aliases have been removed. Use `@domain/*` instead.

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

## 4. Store Organization
- All state management logic must be placed in `src/stores/`.
- Each store gets its own folder: `src/stores/[storeName]/`
  - `[storeName].store.ts`: Store logic (state, actions, selectors) using Zustand
  - `[storeName].types.ts`: TypeScript types for state and actions
  - `index.ts`: Barrel file for exports
- Always use explicit types and keep store logic encapsulated.

## 5. Best Practices
- Maintain type safety throughout the codebase.
- Keep logic and UI separated (MVVM + Domain Layer).
- Business logic belongs in `domain/services/`, not in view-models or components.
- Domain types belong in `domain/models/`, not in component `types.ts` files.
- Use barrel files (`index.ts`) for clean imports.
- Follow the documented folder structures for all new code.

---

These instructions summarize the key conventions and patterns from the project's documentation. Copilot should use these as the default guidelines for code suggestions and generation in this repository.
