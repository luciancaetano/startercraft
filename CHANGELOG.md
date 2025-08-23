# Changelog

## [22/08/2025]

### Added
- Added a new generator for subcomponents in `generators/subcomponent/index.cjs`.
  - Supports generating subcomponents within features and components.
  - Includes options for i18n support.
- Updated `plopfile.cjs` to include the new subcomponent generator.
  - Ensures `subcomponentGenerator` is a valid function before usage.

### Changed
- Refactored navigation path in `useHomePageViewModel`.
- Enhanced `ThemeShowcasePage` with a hero section and modal.
- Updated CI workflow by removing Cypress job and adding `@vitejs/plugin-react-swc`.
- Improved `HomePage` with a hero section and navigation.

### Fixed
- No fixes.

---

## [08/05/2025]

### Added
- Added DaisyUI and implemented a simple custom theme with support for dark and light themes.

### Changed
- Refactored and cleaned all code.

### Fixed
- No fixes.

---

## [20/01/2025]

### Added
- Introduced basic feature configs and Tailwind.
- Added session and tenant-related features for SaaS apps.

### Changed
- Changed license to CC0.

### Fixed
- No fixes.

---

## [18/02/2024]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- Fixed generators.

---

## [29/01/2024]

### Added
- No additions.

### Changed
- Updated lint rules.
- Removed export from pages to avoid preloading in the initial bundle.
- Refactored routes to lazy loading.

### Fixed
- Fixed all tests.

---

## [28/01/2024]

### Added
- Implemented base page.
- Added examples of usage.
- Implemented settings and updated some lint rules.

### Changed
- Moved header component inside layout components.
- Refactored code structure for improved readability and maintainability.

### Fixed
- Fixed route template.

---

## [27/01/2024]

### Added
- Added translations to protected pages.
- Implemented i18n structure.
- Added provider generator.

### Changed
- Updated alias documentation and fixed Jest testing alias path.
- Modernized code structure and generators.

### Fixed
- Fixed an issue with `withResourceBundle` HOC.

---

## [21/12/2023]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- No fixes.

---

## [26/07/2023]

### Added
- No additions.

### Changed
- Reorganized all code.

### Fixed
- No fixes.

---

## [27/05/2023]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- Fixed npm script.

---

## [05/11/2022]

### Added
- No additions.

### Changed
- Refactored components.

### Fixed
- No fixes.

---

## [04/11/2022]

### Added
- No additions.

### Changed
- Refactored base code.

### Fixed
- No fixes.

---

## [03/11/2022]

### Added
- No additions.

### Changed
- Refactored docs and architecture.
- Renamed some namings.
- Used Zustand for local state with custom hook.

### Fixed
- No fixes.

---

## [24/10/2022]

### Added
- No additions.

### Changed
- Implemented basic MVVM pattern with Zustand.
- Updated source structure and removed Redux.

### Fixed
- No fixes.

---

## [18/10/2021]

### Added
- No additions.

### Changed
- Updated project structure.

### Fixed
- No fixes.

---

## [25/06/2021]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- No fixes.

---

## [02/02/2021]

### Added
- Introduced new Redux typings.
- Added some linters and tools.

### Changed
- Replaced `react-app-rewired` with `craco`.
- Renamed `TodoActionsType`.
- Refactored Redux state types.

### Fixed
- Fixed lint errors and configured Stylelint BEM pattern.

---

## [01/02/2021]

### Added
- No additions.

### Changed
- Added author and license to `package.json`.

### Fixed
- No fixes.

---

## [28/01/2021]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- No fixes.

---

## [25/12/2020]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- No fixes.

---

## [16/10/2020]

### Added
- Added Cypress testing to GitHub workflow.

### Changed
- Upgraded dependencies.

### Fixed
- Fixed Cypress tests and builds.

---

## [21/09/2020]

### Added
- Added GitHub Actions support.

### Changed
- Upgraded dependencies.

### Fixed
- Fixed GA build YAML.

---

## [02/08/2020]

### Added
- Added features to Todo.
- Implemented basic routing elements.
- Implemented basic layout with router.
- Added device handling.
- Implemented Redux persistence.
- Implemented router middleware.

### Changed
- Updated docs.
- Updated source structure.

### Fixed
- Fixed i18next configuration.
- Fixed lint errors.

---

## [01/08/2020]

### Added
- No additions.

### Changed
- Renamed project.

### Fixed
- No fixes.

---

## [10/11/2019]

### Added
- No additions.

### Changed
- Upgraded dependencies.

### Fixed
- No fixes.

---

## [01/01/2019]

### Added
- No additions.

### Changed
- No changes.

### Fixed
- No fixes.

---

> Generated on August 22, 2025.
