# Domain Layer Architecture

This document describes the domain layer introduced to enforce clean separation of concerns between business logic and React presentation code.

---

## Problem Statement

Previously, all business logic lived inside React hooks (view-model files). This created several issues:

- **Untestable logic** - Business rules could not be tested without rendering React components or mocking React internals.
- **Coupled persistence** - Direct calls to `localStorage`, `document.body`, and `window.matchMedia` were embedded in view-models.
- **No reusability** - Logic trapped in hooks could not be shared across non-React contexts (CLI tools, server-side rendering, other frameworks).
- **Blurred boundaries** - The "Model" layer in the MVVM pattern only contained UI prop types, not actual domain entities.

---

## Domain Layer Structure

```
src/app/domain/
  index.ts              # Re-exports everything from models and services
  models/
    index.ts            # Barrel export for all models
    [name].model.ts     # Domain entities, value types, and shared interfaces
  services/
    index.ts            # Barrel export for all services
    [name].service.ts   # Business logic, API communication, persistence
```

All application-level TypeScript types (previously in `src/app/types/`) now live in `domain/models/`. All HTTP/API logic (previously in `src/app/http/`) now lives in `domain/services/`.

### Models (`domain/models/`)

Models define the core data types, domain entities, and shared interfaces. They are:

- **Framework-agnostic** - No React, no hooks, no JSX
- **Pure TypeScript** - Only types, interfaces, and enums
- **The source of truth** - All layers reference these types
- **Includes shared contracts** - Cross-cutting interfaces like `ITestableProps` live here

Example:
```ts
// color-mode.model.ts
export type ColorMode = 'dark' | 'light';

export interface ColorModePreference {
  mode: ColorMode;
  source: 'system' | 'user';
}
```

### Services (`domain/services/`)

Services encapsulate business rules, side effects, and external communication. They are:

- **Stateless functions** - Exported as object namespaces for discoverability
- **Testable without React** - Plain functions that can be unit tested directly
- **The single owner of business logic** - All persistence, API calls, and data transformations live here
- **Includes API/HTTP logic** - All API communication that previously lived in `src/app/http/` belongs here

Example:
```ts
// color-mode.service.ts
import type { ColorMode } from '../models';

export const ColorModeService = {
  resolvePreference(): ColorModePreference { ... },
  savePreference(mode: ColorMode): void { ... },
  applyToDocument(mode: ColorMode): void { ... },
  toggle(current: ColorMode): ColorMode { ... },
};
```

---

## How View-Models Consume Services

View-models (hooks) become thin orchestration layers:

**Before (business logic in hook):**
```ts
function useDarkModeSwitchViewModel() {
  const [colorMode, setColorMode] = useState(getPreferredColorScheme());
  // ... localStorage reads, DOM manipulation, toggle logic inline
}
```

**After (hook delegates to service):**
```ts
import { ColorModeService } from '@domain/services';

function useDarkModeSwitchViewModel() {
  const [colorMode, setColorMode] = useState(
    () => ColorModeService.resolvePreference().mode
  );

  const switchColorMode = useCallback(() => {
    setColorMode((current) => {
      const next = ColorModeService.toggle(current);
      ColorModeService.savePreference(next);
      return next;
    });
  }, []);

  useEffect(() => {
    ColorModeService.applyToDocument(colorMode);
  }, [colorMode]);

  return { colorMode, switchColorMode };
}
```

The hook now only manages React state and lifecycle. All business decisions are delegated to the service.

---

## Responsibility Boundaries

| Layer | Responsibility | May Import |
|-------|---------------|------------|
| **Models** | Domain types, interfaces, enums | Nothing (leaf layer) |
| **Services** | Business logic, persistence, API calls | Models |
| **View-Models** | React state orchestration, lifecycle | Models, Services |
| **Views** | JSX rendering, styling | View-Models, component types |

---

## Path Alias

The domain layer is accessible via the `@domain/*` alias:

```ts
import { ColorModeService } from '@domain/services';
import type { ColorMode } from '@domain/models';
```

---

## Guidelines for Adding New Domain Features

### 1. Define the model first

Create `src/app/domain/models/[name].model.ts` with your domain types. Export them from `models/index.ts`.

### 2. Create the service

Create `src/app/domain/services/[name].service.ts`. Implement business rules as pure functions. Export as a namespace object from `services/index.ts`.

### 3. Refactor the view-model

Replace inline logic in your view-model hook with calls to the new service. The hook should only:
- Call `useState` / `useReducer` for React state
- Call `useEffect` for side-effect scheduling
- Call `useCallback` / `useMemo` for performance
- Delegate all decisions to the service

### 4. Update barrel exports

Add new exports to `domain/models/index.ts`, `domain/services/index.ts`, and `domain/index.ts`.

---

## Migration Strategy

For existing hooks that contain business logic:

1. **Identify extractable logic** - Look for: data transformations, validation rules, API calls, localStorage access, DOM manipulation, conditional business decisions.
2. **Create the model** - Extract domain types from `[name].types.ts` into `domain/models/`. Keep UI prop types in the component's `types.ts`.
3. **Create the service** - Move business functions into `domain/services/[name].service.ts`.
4. **Update the view-model** - Import the service and replace inline logic with service calls.
5. **Verify** - Run existing tests. The component's behavior should be identical.

Migrate incrementally, one component at a time. There is no need for a big-bang rewrite.
