# ⚡️ Fast and Scalable React + TypeScript Starter

[![License](https://img.shields.io/github/license/luciancaetano/base-react-typescript-project?color=blue)](./LICENCE.md)
[![Contributors](https://img.shields.io/github/contributors/luciancaetano/base-react-typescript-project)](https://github.com/luciancaetano/base-react-typescript-project/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/luciancaetano/base-react-typescript-project?logo=git)](https://github.com/luciancaetano/base-react-typescript-project/commits/main)

An **opinionated boilerplate** designed to accelerate the development of modern, scalable React applications with TypeScript.  
This template is especially suited for projects that require high scalability and complexity, promoting a clean architecture, modularity, and conventions that make maintenance easier, improve code quality, and enhance overall codebase understanding across the team.

---

## 🚀 Features

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
  - [Jest](https://jestjs.io/) – unit testing
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) – testing React components
  - [Cypress](https://www.cypress.io/) – end-to-end testing
  - [ESLint](https://eslint.org/) – linting
  - [Husky](https://typicode.github.io/husky/#/) – Git hooks

- **Developer Experience**
  - Code generation (components & features)
  - Path aliases for cleaner imports
  - Pre-configured validation pipeline (`type-check + lint + test`)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm run](https://npm runpkg.com/) (preferred over npm)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm run install
```

---

## 🛠️ Scripts

Commonly used commands from `package.json`:

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run start`    | Start the development server                   |
| `npm run build`    | Compile the application for production         |
| `npm run lint`     | Run ESLint                                     |
| `npm run test`     | Run unit tests (Jest)                          |
| `npm run validate` | Type-check, lint and run tests                 |
| `npm run cy:run`   | Run Cypress end-to-end tests                   |
| `npm run generate` | Run the code generator for components/features |

---

## 📖 Documentation

* [🚀 Getting Started](./docs/getting-started.md)
* [📦 Store](./docs/store.md)
* [📂 Component Organization](./docs/component-organization.md)
* [⚙️ Code Generation](./docs/code-generation.md)
* [⚖️ License](./LICENCE.md)

---

## 🧭 Path Aliases

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

Easily scaffold new components or features with:

```bash
npm run generate
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

* ✅ **Modularity** – clean separation of concerns
* ✅ **Scalability** – easy to extend features
* ✅ **Reusability** – atomic components & shared utils
* ✅ **Maintainability** – consistent architecture & conventions
* ✅ **DX Friendly** – generation tools, linting & validation pipeline

---

## 📚 Examples of Use

### Running the Development Server

```bash
npm run start
```

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

---

## ❓ FAQ

### What is the minimum Node.js version required?
Node.js version 16 or higher is required.

### Can I use npm instead of npm run?
Yes, but npm run is recommended for consistency.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [CC0](./LICENCE.md).

---

## 🌟 Acknowledgements

This starter was inspired by best practices and setups from the React community, with the goal of helping teams build robust and maintainable apps faster.

---

## 🔗 Useful Links

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Cypress Documentation](https://docs.cypress.io/)
