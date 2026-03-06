# Testing Guide

This document describes the testing strategy, tools, conventions, and patterns used in this project.

---

## Tools and Setup

| Tool | Purpose |
|------|---------|
| [Vitest](https://vitest.dev/) | Test runner and assertion library |
| [Testing Library](https://testing-library.com/) | DOM queries and component rendering |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | Custom DOM matchers (`toBeInTheDocument`, `toHaveClass`, etc.) |
| [@testing-library/user-event](https://testing-library.com/docs/user-event/intro/) | Realistic user interaction simulation |
| [MSW](https://mswjs.io/) | API mocking at the network level |
| [Istanbul](https://istanbul.js.org/) | Code coverage provider |

### Configuration

- **Vitest config**: `vitest.config.ts` — jsdom environment, globals enabled, path aliases via `vite-tsconfig-paths`
- **Setup file**: `src/setupTests.ts` — loads jest-dom matchers
- **Globals**: `describe`, `it`, `expect`, `vi` are available globally (no imports needed)

### Scripts

| Command | Description |
|---------|-------------|
| `npm run test` | Run all tests with coverage |
| `npm run validate` | Type-check + lint + test (full pipeline) |

---

## What to Test Per Layer

Each layer in the architecture has different testing concerns. Test the **behavior** of each layer, not its implementation details.

| Layer | What to test | What NOT to test |
|-------|-------------|-----------------|
| **Services** | Business rules, orchestration logic, edge cases | Internal function calls between private helpers |
| **Repositories** | Data transformation, storage key usage, API call shape | Actual network requests (mock the transport) |
| **Validators** | Valid/invalid inputs, edge cases, error messages | Internal regex implementation |
| **Mappers** | DTO-to-Model and Model-to-DTO transformations | Intermediate variables |
| **ViewModels** | State transitions, service delegation, returned API | React internals (fiber, reconciler) |
| **Views** | Rendering output, user interactions, accessibility | CSS values, DOM structure details |

### Priority

1. **Services and Validators** — highest value, pure logic, easiest to test
2. **Mappers** — pure transformations, fast and deterministic
3. **Repositories** — test the contract, mock external systems
4. **ViewModels** — test the hook API via `renderHook`
5. **Views** — test user-facing behavior, not implementation

---

## File Naming and Location

Test files live next to the code they test, using the `.spec.tsx` (or `.spec.ts`) extension.

Component tests are **split into two separate files** that mirror the MVVM pattern:

```
src/app/components/elements/my-button/
  my-button.tsx
  my-button.view-model.ts
  my-button.spec.tsx              <-- tests the View (rendering, interactions, a11y)
  my-button.view-model.spec.ts   <-- tests the ViewModel (state, service delegation)
  ...
```

Domain layer tests are standalone (no React dependency):

```
src/app/domain/services/
  auth.service.ts
  auth.service.spec.ts      <-- tests the Service in isolation
```

This separation ensures that:
- **View tests** focus on what the user sees and interacts with — no business logic
- **ViewModel tests** focus on state management and service delegation — no JSX rendering
- **Domain tests** are pure logic with no framework dependency

---

## Testing Domain Layer

### Testing a Service

Services contain business logic and are the highest-value tests. They are plain functions — no React, no DOM.

```ts
// color-mode.service.spec.ts
import { ColorModeService } from './color-mode.service';

describe('ColorModeService', () => {
  describe('toggle', () => {
    it('returns light when current is dark', () => {
      expect(ColorModeService.toggle('dark')).toBe('light');
    });

    it('returns dark when current is light', () => {
      expect(ColorModeService.toggle('light')).toBe('dark');
    });
  });

  describe('resolvePreference', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('returns saved preference when available', () => {
      localStorage.setItem('app-color-mode', 'dark');

      const result = ColorModeService.resolvePreference();

      expect(result).toEqual({ mode: 'dark', source: 'user' });
    });

    it('falls back to system preference when nothing is saved', () => {
      const result = ColorModeService.resolvePreference();

      expect(result.source).toBe('system');
    });
  });

  describe('applyToDocument', () => {
    it('adds dark class to body', () => {
      ColorModeService.applyToDocument('dark');

      expect(document.body.classList.contains('dark')).toBe(true);
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });

    it('removes dark class for light mode', () => {
      document.body.classList.add('dark');

      ColorModeService.applyToDocument('light');

      expect(document.body.classList.contains('dark')).toBe(false);
    });
  });
});
```

### Testing a Validator

Validators are pure functions — test inputs and outputs exhaustively.

```ts
// user.validator.spec.ts
import { UserValidator } from './user.validator';

describe('UserValidator', () => {
  describe('isValidEmail', () => {
    it.each([
      ['user@example.com', true],
      ['a@b.co', true],
      ['invalid', false],
      ['@no-local.com', false],
      ['no-domain@', false],
      ['', false],
    ])('validates "%s" as %s', (email, expected) => {
      expect(UserValidator.isValidEmail(email)).toBe(expected);
    });
  });

  describe('validateProfile', () => {
    it('returns no errors for valid profile', () => {
      expect(UserValidator.validateProfile({ name: 'John', email: 'john@test.com' })).toEqual([]);
    });

    it('returns error when name is missing', () => {
      const errors = UserValidator.validateProfile({ email: 'john@test.com' });

      expect(errors).toContain('Name is required');
    });
  });
});
```

### Testing a Mapper

Mappers are pure transformations. Test both directions.

```ts
// user.mapper.spec.ts
import { UserMapper } from './user.mapper';

describe('UserMapper', () => {
  const dto = { id: 1, full_name: 'John Doe', email_address: 'john@test.com' };
  const model = { id: 1, name: 'John Doe', email: 'john@test.com' };

  it('maps DTO to model', () => {
    expect(UserMapper.toModel(dto)).toEqual(model);
  });

  it('maps model to DTO', () => {
    expect(UserMapper.toDto(model)).toEqual(dto);
  });
});
```

### Testing a Repository

Repositories access external systems. Mock the transport layer, test the contract.

```ts
// user.repository.spec.ts
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  describe('with localStorage', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('saves and retrieves a value', () => {
      UserRepository.saveToken('abc-123');

      expect(UserRepository.getToken()).toBe('abc-123');
    });

    it('returns null when no value is stored', () => {
      expect(UserRepository.getToken()).toBeNull();
    });
  });

  describe('with API calls', () => {
    it('fetches user by id', async () => {
      // Use MSW or vi.fn() to mock fetch
      const mockUser = { id: 1, full_name: 'John', email_address: 'john@test.com' };
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUser),
      } as Response);

      const result = await UserRepository.getById(1);

      expect(result).toEqual({ id: 1, name: 'John', email: 'john@test.com' });
    });
  });
});
```

---

## Testing Components

Component testing follows the MVVM split: **ViewModel** (logic) and **View** (presentation) are tested separately. This ensures clear boundaries — business logic is never tested through the DOM, and presentation tests don't depend on service implementations.

### Testing a View

Views are tested through user-visible behavior. Use Testing Library queries that reflect how users interact with the component. **Do not test business logic here** — that belongs in ViewModel or Service tests.

```tsx
// blink-button.spec.tsx
import BlinkButton from './index';
import { render } from '@testing-library/react';

describe('BlinkButton', () => {
  it('renders children', () => {
    const { getByText } = render(<BlinkButton>Click Me</BlinkButton>);

    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<BlinkButton onClick={handleClick}>Click</BlinkButton>);

    getByText('Click').click();

    expect(handleClick).toHaveBeenCalled();
  });

  it('applies testingID as data-testid', () => {
    const { getByTestId } = render(<BlinkButton testingID="my-btn">Click</BlinkButton>);

    expect(getByTestId('my-btn')).toBeInTheDocument();
  });
});
```

### Testing a ViewModel

ViewModels are tested **separately from the View** using `renderHook` from Testing Library. Mock domain services to isolate the hook's logic. This is where you verify state transitions, service delegation, and the hook's returned API.

```tsx
// dark-mode-switch.view-model.spec.ts
import { renderHook, act } from '@testing-library/react';
import { useDarkModeSwitchViewModel } from './dark-mode-switch.view-model';
import { ColorModeService } from '@domain/services';

vi.mock('@domain/services', () => ({
  ColorModeService: {
    resolvePreference: vi.fn(() => ({ mode: 'light', source: 'system' })),
    toggle: vi.fn((current) => (current === 'dark' ? 'light' : 'dark')),
    savePreference: vi.fn(),
    applyToDocument: vi.fn(),
  },
}));

describe('useDarkModeSwitchViewModel', () => {
  it('initializes with resolved preference', () => {
    const { result } = renderHook(() => useDarkModeSwitchViewModel());

    expect(result.current.colorMode).toBe('light');
  });

  it('toggles color mode and saves preference', () => {
    const { result } = renderHook(() => useDarkModeSwitchViewModel());

    act(() => {
      result.current.switchColorMode();
    });

    expect(result.current.colorMode).toBe('dark');
    expect(ColorModeService.savePreference).toHaveBeenCalledWith('dark');
  });
});
```

---

## Mocking Patterns

### Module Mocking with `vi.mock`

```ts
// Mock an entire module
vi.mock('@domain/services', () => ({
  AuthService: {
    login: vi.fn(),
    logout: vi.fn(),
  },
}));
```

### Spy on Specific Functions

```ts
// Spy without replacing the implementation
vi.spyOn(ColorModeService, 'toggle');

// Spy and replace the implementation
vi.spyOn(ColorModeService, 'toggle').mockReturnValue('dark');
```

### Mocking API Calls with MSW

For integration-style tests that exercise the full stack (repository + mapper + service), use [MSW](https://mswjs.io/):

```ts
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const server = setupServer(
  http.get('/api/users/1', () => {
    return HttpResponse.json({ id: 1, full_name: 'John', email_address: 'john@test.com' });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

---

## Testing Utilities

### `ITestableProps`

All components accept a `testingID` prop (from `domain/models/testing.model.ts`) that maps to `data-testid`. Use this to query elements in tests:

```tsx
<MyComponent testingID="my-component" />

// In the test:
const { getByTestId } = render(<MyComponent testingID="my-component" />);
expect(getByTestId('my-component')).toBeInTheDocument();
```

### `it.each` for Data-Driven Tests

Use parameterized tests for validators and mappers:

```ts
it.each([
  [0, false],
  [1, true],
  [100, true],
  [-1, false],
])('isPositive(%d) returns %s', (input, expected) => {
  expect(NumberValidator.isPositive(input)).toBe(expected);
});
```

---

## Query Priority

Follow Testing Library's [query priority](https://testing-library.com/docs/queries/about/#priority) to write tests that resemble how users interact with your app:

1. **`getByRole`** — accessible roles (button, heading, textbox)
2. **`getByLabelText`** — form elements
3. **`getByPlaceholderText`** — input placeholders
4. **`getByText`** — visible text content
5. **`getByTestId`** — last resort, use `testingID` prop

Avoid `container.querySelector` when possible — it tests implementation, not behavior.

---

## Coverage

Coverage is collected automatically via Istanbul when running `npm run test`. Reports are saved to `./coverage/`.

The coverage configuration excludes:
- `node_modules/`, `dist/`, `.cache/`
- `src/index.tsx`, `src/app/index.tsx` (entry points)

### What to Cover

Focus coverage on domain logic (services, validators, mappers, repositories). Don't chase 100% coverage on views — focus on meaningful user interactions instead.

---

## Checklist for Writing Tests

- [ ] Test file uses `.spec.tsx` (or `.spec.ts` for non-JSX) extension
- [ ] Test file lives next to the source file
- [ ] Tests describe **behavior**, not implementation
- [ ] Component View and ViewModel are tested in **separate files**
- [ ] View tests only cover rendering, interactions, and accessibility
- [ ] ViewModel tests use `renderHook` and mock domain services
- [ ] Uses Testing Library queries over `querySelector`
- [ ] Mocks are scoped and cleaned up (`beforeEach`, `afterEach`)
- [ ] Domain logic tests don't depend on React
- [ ] No hardcoded magic strings — use constants where appropriate
- [ ] No `import { describe, it, expect } from 'vitest'` — globals are enabled
