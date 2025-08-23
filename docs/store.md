# Store Organization and Structure

To maintain consistency, scalability, and readability, our project follows a clear convention for organizing state management stores. Below is the recommended structure:

```
src/
  stores/
    [storeName]/
      [storeName].store.ts   # Main store logic: state, actions, selectors
      [storeName].types.ts   # TypeScript types for state, actions, etc.
      index.ts               # Barrel file for clean imports
```

## Folder and File Breakdown

- **`stores/`**: Central location for all application state management logic.
- **`[storeName]/`**: Each store gets its own folder, named after its domain (e.g., `counter`, `user`).
  - **`[storeName].store.ts`**: Implements the store using [zustand](https://github.com/pmndrs/zustand). Defines state, actions, and selectors. Example: `counter.store.ts`.
  - **`[storeName].types.ts`**: Contains all TypeScript interfaces and types related to the store, ensuring type safety and clarity.
  - **`index.ts`**: Exports the store and types, providing a single entry point for importing elsewhere in the app.

## Example

```
src/
  stores/
    counter/
      counter.store.ts
      counter.types.ts
      index.ts
```

## Best Practices

- **Type Safety**: Always define and use explicit types for state and actions.
- **Encapsulation**: Keep store logic self-contained within its folder.
- **Reusability**: Export only what’s necessary from `index.ts` for clean and maintainable imports.

## Why Zustand?

We use [zustand](https://github.com/pmndrs/zustand) for state management because it is:

- Lightweight and fast
- Simple API, easy to learn
- Built on React hooks
- Scalable for both small and large applications

---

By following this structure, our codebase remains organized, scalable, and easy for any developer to navigate and maintain.