# Code Generation with Plop

This project includes a code generation tool powered by [Plop.js](https://plopjs.com/), which simplifies the creation of components, features, providers, and subcomponents. This tool ensures consistency and speeds up development by scaffolding files with predefined templates.

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
src/components/[type]/[name]/
│── [name].tsx            # Component view
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces
│── [name].view-model.ts  # View-model / logic
│── index.ts              # Public exports
```

* **[type]** → `element`, `provider`, `page`, or `layout`
* **[name]** → The component name

Example of direct usage:
```bash
npm run generate element MyButton
```

### Feature Generator

Generates a new feature with the following structure:

```bash
src/features/[name]/
│── index.tsx             # Feature entry point
│── components/           # UI components
│   ├── elements/         # Basic UI (buttons, inputs, etc.)
│   ├── providers/        # Complex providers / data UI
│   ├── pages/            # Full pages / screens
│   └── layouts/          # Layout containers
│── hooks/                # Custom hooks
│── types/                # Types & interfaces
│── utils/                # Utilities
│── config/               # Configurations
```

### SubComponent Generator

Generates a new subcomponent with the following structure:

```bash
src/components/[type]/[parent-name]/components/[subcomponent-name]/
│── [name].tsx            # Subcomponent view
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces
│── [name].view-model.ts  # View-model / logic
│── index.ts              # Public exports
```

* **[subcomponent-name]** → The subcomponent name
> The same structure applies to subcomponents within feature modules.  
> For example, if a feature contains its own nested components, organize them using the same conventions as shown above for subcomponents. This ensures consistency and maintainability across both global and feature-scoped components.

### Provider Generator

Generates a new provider with the following structure:

```bash
src/components/provider/[name]/
│── [name].tsx            # Provider view
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces
│── [name].context.tsx    # Context file
│── [name].model.ts       # Model file
│── index.ts              # Public exports
```

## Adding a New Generator

To add a new generator, update the `plopfile.cjs` file. For example:

```javascript
const newGenerator = require('./generators/new-generator/index');

module.exports = function (plop) {
  plop.setGenerator('new-generator', newGenerator);
};
```

Ensure the generator is implemented as a valid function in its respective folder.

## Notes

- The templates for each generator are located in their respective folders under `generators/`.
- The `npm run generate` script is pre-configured to invoke Plop.js.

