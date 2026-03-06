# Code Generation with Plop

This project includes a code generation tool powered by [Plop.js](https://plopjs.com/) and [`@startercraft/cli`](https://www.npmjs.com/package/@startercraft/cli), which simplifies the creation of components, features, and providers. This tool ensures consistency and speeds up development by scaffolding files with predefined templates.

## How to Use
**Note:** The templates for each generator are located in the `generators` folder by default. You can modify these templates locally to fit your needs, but do not change the file or folder names to ensure the generators work correctly.

You can generate code in two ways:

**Interactive mode:**
```bash
npm run generate
```
You will be guided by prompts to choose the type and name of the code to be generated.

**Direct mode:**
```bash
npm run generate <type> <name>
```
For example, to create a component called `MyButton` of type `element`:
```bash
npm run generate element MyButton
```
This will automatically generate the code without interactive prompts.

## Available Generators

### Component Generator

Generates a new component with the following structure:

```bash
src/app/components/[type]/[name]/
│── [name].tsx            # Component view
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces
│── [name].view-model.ts  # View-model / logic
│── index.ts              # Public exports
```

* **[type]** → `element` or `layout`
* **[name]** → The component name

> **Note:** Pages use a separate template that does not generate a `view-model.ts` file by default. If your page needs a view-model, add it manually following the same naming convention (`[name].view-model.ts`).

Example of direct usage:
```bash
npm run generate element MyButton
```

### Feature Generator

Generates a new feature with the following structure:

```bash
src/app/features/[name]/
│── [name].routes.tsx      # Feature route definitions
```

> Features are lightweight by default. Add `components/`, `hooks/`, `types/`, `utils/`, and `config/` subdirectories as needed.

### Provider Generator

Generates a new provider with the following structure:

```bash
src/app/components/providers/[name]/
│── [name].tsx            # Provider component
│── [name].spec.tsx       # Unit test
│── [name].types.ts       # Types & interfaces
│── [name].context.tsx    # Context file
│── [name].model.ts       # Model file
│── index.ts              # Public exports
```

## Adding a New Generator

The project uses `@startercraft/cli` for generator definitions (see `plopfile.cjs`). To customize templates, edit the `.hbs` files in the `generators/` folder.

## Notes

- The templates for each generator are located in their respective folders under `generators/`.
- The `npm run generate` script is pre-configured to invoke Plop.js.
