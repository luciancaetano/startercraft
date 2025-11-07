<div align="center">
  <img src="./src/assets/images/startercraft.png" alt="Startercraft Logo" width="200" />
</div>

# ⚡️ Fast and Scalable React Project

[![License](https://img.shields.io/github/license/luciancaetano/startercraft?color=blue)](./LICENCE.md)
[![Contributors](https://img.shields.io/github/contributors/luciancaetano/startercraft)](https://github.com/luciancaetano/startercraft/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/luciancaetano/startercraft?logo=git)](https://github.com/luciancaetano/startercraft/commits/main)

An **opinionated boilerplate** designed to accelerate the development of modern, scalable React applications with TypeScript.  
This template is especially suited for projects that require high scalability and complexity, promoting a clean architecture, modularity, and conventions that make maintenance easier, improve code quality, and enhance overall codebase understanding across the team.

## 🚀 Create a New Project

To quickly start a new project using this template, run the following command:

```bash
npx create-startercraft my-awesome-scalable-project
```

Replace `my-awesome-scalable-project` with your desired project name. This command will set up a new project with all the configurations and best practices included in this template.

---

## 📖 Index

* [📦 Store](./docs/store.md)
* [📂 Component Organization](./docs/component-organization.md)
* [⚙️ Code Generation](./docs/code-generation.md)
* [🧩 What is a Feature?](./docs/feature-definition.md)
* [⚖️ License](./LICENCE.md)
* [🚀 Features](#-features)
* [📋 Prerequisites](#-prerequisites)
* [📦 Installation](#-installation)
* [🛠️ Scripts](#%EF%B8%8F-scripts)
* [🧭 Path Aliases](#-path-aliases)
* [⚙️ Code Generation](#%EF%B8%8F-code-generation)
* [🧩 Why This Structure?](#-why-this-structure)
* [📚 Examples of Use](#-examples-of-use)
* [🔄 Dependency Workflows](./docs/workflows-deps.md)
* [❓ FAQ](#-faq)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)
* [🌟 Acknowledgements](#-acknowledgements)
* [🔗 Useful Links](#-useful-links)

---

## 🚀 Features

[🔝 Back to Index](#-index)

This starter ships with everything you need to build production-grade React apps:

- **Core**
  - [React](https://reactjs.org/) – UI library
  - [TypeScript](https://www.typescriptlang.org/) – static typing
  - [React Router](https://reactrouter.com/) – routing
  - [Zustand](https://github.com/pmndrs/zustand) – state management
  - [React Hook Form](https://react-hook-form.com/) – form handling
  - [i18next](https://www.i18next.com/) – internationalization

- **Styling & UI**
  - [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
  - [Headless UI](https://headlessui.dev/) – accessible UI components
  - [daisyUI](https://daisyui.com/) – Tailwind CSS component library

- **Testing & Quality**
  - [Vitest](https://vitest.dev/) – unit testing
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) – testing React components
  - [ESLint](https://eslint.org/) – linting

- **Developer Experience**
  - Code generation (components & features)
  - Path aliases for cleaner imports
  - Pre-configured validation pipeline (`type-check + lint + test`)

---

## 📋 Prerequisites

[🔝 Back to Index](#-index)

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [yarn](https://yarnpkg.com/) (preferred over npm)

---

## 📦 Installation

[🔝 Back to Index](#-index)

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
yarn install
```

---

## 🛠️ Scripts

[🔝 Back to Index](#-index)

Commonly used commands from `package.json`:

| Command              | Description                                    |
| -------------------- | ---------------------------------------------- |
| `yarn start`         | Start the development server                   |
| `yarn build`         | Compile the application for production         |
| `yarn preview`       | Preview the production build                   |
| `yarn test`          | Run all tests                                  |
| `yarn test:unit`     | Run unit tests (Vitest)                        |
| `yarn test:coverage` | Run tests with coverage report                 |
| `yarn lint`          | Run ESLint                                     |
| `yarn serve`         | Serve the production build locally             |
| `yarn generate`      | Run the code generator for components/features |
| `yarn validate`      | Type-check, lint, and run tests                |

---

## 🧭 Path Aliases

[🔝 Back to Index](#-index)

To avoid messy relative imports, this starter uses TypeScript path aliases:

| Alias           | Path                     | Description                          |
| --------------- | ------------------------ | ------------------------------------ |
| `@feature/*`    | `./src/app/features/*`   | Feature modules                      |
| `@components/*` | `./src/app/components/*` | Reusable UI components               |
| `@config/*`     | `./src/app/config/*`     | Configurations                       |
| `@hooks/*`      | `./src/app/hooks/*`      | Custom React hooks                   |
| `@lib/*`        | `./src/lib/*`            | Utility libraries                    |
| `@providers/*`  | `./src/app/providers/*`  | Context or data providers            |
| `@store/*`      | `./src/app/store/*`      | Global store                         |
| `@app/types/*`  | `./src/app/types/*`      | TypeScript types & interfaces        |
| `@utils/*`      | `./src/app/utils/*`      | Utility functions                    |
| `@assets/*`     | `./src/assets/*`         | Static assets (images, icons, fonts) |

---

## ⚙️ Code Generation

[🔝 Back to Index](#-index)

Easily scaffold new components or features with:

```bash
yarn generate
```

### 📂 Component Structure

```bash
src/components/[type]/[name]/
│── [name].tsx            # Component view
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces
│── [name].view-model.ts  # View-model / logic
│── index.ts              # Public exports
```

* **\[type]** → `element`, `provider`, `page`, or `layout`
* **\[name]** → The component name

### 📂 Feature Structure

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

### 📂 SubComponent Structure

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

---

## 🧩 Why This Structure?

[🔝 Back to Index](#-index)

* ✅ **Modularity** – clean separation of concerns
* ✅ **Scalability** – easy to extend features
* ✅ **Reusability** – atomic components & shared utils
* ✅ **Maintainability** – consistent architecture & conventions
* ✅ **DX Friendly** – generation tools, linting & validation pipeline

---

## 📚 Examples of Use

[🔝 Back to Index](#-index)

### Running the Development Server

```bash
yarn start
```

### Running Tests

```bash
yarn test
```

### Building for Production

```bash
yarn build
```

---

## ❓ FAQ

[🔝 Back to Index](#-index)

### What is the minimum Node.js version required?
Node.js version 16 or higher is required. Using the latest LTS version is recommended for better stability and support.

### Can I use npm instead of yarn?
Yes, but using `yarn` is recommended for consistency and to ensure compatibility with the predefined scripts in the project.

### How do I add a new feature or component?
Use the code generation tool by running:
```bash
yarn generate
```
Follow the prompts to scaffold the desired feature or component.

### How do I configure environment variables?
Create a `.env` file in the root directory and define your variables there. Use the `example.env` file as a reference.

### How do I update dependencies?
Run the following command to update all dependencies:
```bash
npm update
```
For major version updates, review the changelogs of the respective packages to ensure compatibility.

### How do I report a bug or request a feature?
Open an issue on the [GitHub repository](https://github.com/luciancaetano/startercraft/issues) with detailed information about the bug or feature request.

---

## 🤝 Contributing

[🔝 Back to Index](#-index)

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

[🔝 Back to Index](#-index)

This project is licensed under the [CC0](./LICENCE.md).

---

## 🌟 Acknowledgements

[🔝 Back to Index](#-index)

This starter was inspired by best practices and setups from the React community, with the goal of helping teams build robust and maintainable apps faster.

---

## 🔗 Useful Links

[🔝 Back to Index](#-index)

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [i18next Documentation](https://www.i18next.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
