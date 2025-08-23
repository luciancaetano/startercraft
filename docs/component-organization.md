# 📂 Component Organization and MVVM Pattern

This document provides a detailed explanation of the component organization in this project and how it is inspired by the MVVM (Model-View-ViewModel) architectural pattern.

---

## 🏗️ Component Organization

The project follows a modular and scalable structure for organizing components. Each component is self-contained and resides in its own folder, ensuring a clean separation of concerns and reusability.

### 📂 Component Folder Structure

Each component is organized as follows:

```bash
src/components/[type]/[name]/
│── [name].tsx            # Component view (View)
│── [name].spec.tsx       # Unit test
│── [name].module.scss    # Styles (scoped)
│── [name].types.ts       # Types & interfaces (Model)
│── [name].view-model.ts  # View-model / logic (ViewModel)
│── index.ts              # Public exports
```

### 📂 Explanation of Files

1. **`[name].tsx`**: This file contains the UI logic and markup for the component. It is responsible for rendering the component's view and interacting with the ViewModel.

2. **`[name].spec.tsx`**: Unit tests for the component to ensure its functionality and behavior are as expected.

3. **`[name].module.scss`**: Scoped styles for the component, ensuring that styles do not leak into other parts of the application.

4. **`[name].types.ts`**: Defines the TypeScript types and interfaces used by the component. This acts as the "Model" in the MVVM pattern, representing the data structure.

5. **`[name].view-model.ts`**: Contains the business logic and state management for the component. This acts as the "ViewModel" in the MVVM pattern, bridging the Model and the View.

6. **`index.ts`**: Exports the component and its related files for easy imports.

---

## 📂 Scoped Components

In cases where a component is exclusively scoped to a parent component and is not intended to be reused elsewhere, it should be placed inside a `components` folder within the parent component's directory. This ensures that the component's scope and purpose are clearly defined and keeps the project structure clean.

### 📂 Updated Scoped Component Structure

For components that are exclusively scoped to a parent component, the structure should follow this pattern:

```bash
src/components/[type]/[name]/components/[name]/
│── [name].tsx            # Scoped child component view
│── [name].spec.tsx       # Scoped child component unit test
│── [name].module.scss    # Scoped child component styles
│── [name].types.ts       # Scoped child component types
│── [name].view-model.ts  # Scoped child component logic
│── index.ts              # Scoped child component exports
```

This ensures that scoped components are clearly nested within their parent component's directory, while maintaining the same structure as other components in the project.

### 📖 Explanation

1. **`components/` Folder**:
   - This folder is used to group child components that are tightly coupled to the parent component.
   - These child components are not intended for use outside the parent component's context.

2. **Child Component Files**:
   - Follow the same MVVM structure as other components (`tsx`, `view-model.ts`, `types.ts`).
   - Scoped child components inherit the modularity and maintainability benefits of the MVVM pattern.

### 🌟 Benefits

- **Encapsulation**: Keeps related components together, making the parent component self-contained.
- **Clarity**: Clearly indicates that the child components are specific to the parent component.
- **Maintainability**: Simplifies navigation and reduces the risk of unintended reuse of scoped components.

---

## 🧩 MVVM Pattern

The MVVM (Model-View-ViewModel) pattern is a design pattern that separates the development of the graphical user interface (the View) from the business logic or back-end logic (the Model) by introducing an intermediate component: the ViewModel.

### 🛠️ How MVVM is Applied

1. **Model**:
   - Represented by the `types.ts` file.
   - Defines the data structure and interfaces used by the component.

2. **View**:
   - Represented by the `tsx` file.
   - Handles the UI logic and rendering.
   - Binds to the ViewModel to display data and handle user interactions.

3. **ViewModel**:
   - Represented by the `view-model.ts` file.
   - Contains the business logic and state management.
   - Acts as a mediator between the Model and the View.
   - Exposes data and commands to the View in a format that is easy to consume.

### 🔄 Interaction Flow

1. The **View** binds to the **ViewModel** to display data and handle user interactions.
2. The **ViewModel** interacts with the **Model** to fetch or update data.
3. Changes in the **Model** are propagated to the **ViewModel**, which updates the **View**.

---

## 🌟 Benefits of This Approach

- **Separation of Concerns**: Each layer (Model, View, ViewModel) has a distinct responsibility, making the codebase easier to understand and maintain.
- **Reusability**: Components and logic can be reused across different parts of the application.
- **Testability**: The ViewModel can be tested independently of the View, ensuring robust business logic.
- **Scalability**: The modular structure allows the application to grow without becoming unmanageable.

---

## 📖 Example

Here is an example of a simple component following the MVVM pattern:

### File: `Button.tsx` (View)
```tsx
import React from 'react';
import { useButtonViewModel } from './Button.view-model';
import './Button.module.scss';

const Button: React.FC = () => {
  const { label, onClick } = useButtonViewModel();

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
```

### File: `Button.view-model.ts` (ViewModel)
```ts
import { useState } from 'react';

export const useButtonViewModel = () => {
  const [label, setLabel] = useState('Click Me');

  const onClick = () => {
    setLabel('Clicked!');
  };

  return { label, onClick };
};
```

### File: `Button.types.ts` (Model)
```ts
export interface ButtonProps {
  label: string;
  onClick: () => void;
}
```

---

By following this structure and pattern, the project ensures a clean, maintainable, and scalable codebase.
