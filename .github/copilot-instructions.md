# Copilot Instructions for base-react-typescript-project

## 1. Code Generation
- Use Plop.js for generating components, features, providers, and subcomponents.
- Run `npm run generate` to scaffold new code using predefined templates.
- Generated code should follow the documented folder and file structure for each type (component, feature, subcomponent).


## 2. Component Organization and MVVM Pattern

- Each component must be self-contained in its own folder under `src/components/[type]/[name]/`.
- For components scoped to a parent, place them in a `components` folder inside the parent component's directory, following the same structure.

### MVVM Responsibilities

- **ViewModel (`[name].view-model.ts`)**: All business logic, state management (including all `useState` hooks), callbacks, and event handlers must be implemented in the ViewModel file. This file should not contain any JSX or direct rendering logic.
- **View (`[name].tsx`)**: Only presentation logic and JSX markup should be placed in the View file. The View should consume the ViewModel, receiving state and handlers as props or via hooks, and should not contain business logic or state management.

### Required files for each component:
  - `[name].tsx`: Component view (JSX and UI markup only)
  - `[name].spec.tsx`: Unit tests
  - `[name].module.scss`: Scoped styles
  - `[name].types.ts`: Types & interfaces (Model)
  - `[name].view-model.ts`: Business logic, state, callbacks, and handlers (ViewModel)
  - `index.ts`: Public exports

## 3. Store Organization
- All state management logic must be placed in `src/stores/`.
- Each store gets its own folder: `src/stores/[storeName]/`
  - `[storeName].store.ts`: Store logic (state, actions, selectors) using Zustand
  - `[storeName].types.ts`: TypeScript types for state and actions
  - `index.ts`: Barrel file for exports
- Always use explicit types and keep store logic encapsulated.

## 4. Best Practices
- Maintain type safety throughout the codebase.
- Keep logic and UI separated (MVVM).
- Use barrel files (`index.ts`) for clean imports.
- Follow the documented folder structures for all new code.

---

These instructions summarize the key conventions and patterns from the project's documentation. Copilot should use these as the default guidelines for code suggestions and generation in this repository.
