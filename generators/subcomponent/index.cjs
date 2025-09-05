const fs = require("node:fs");
const path = require("node:path");

const appDir = path.resolve(process.cwd(), "src/app");
const featuresDir = path.join(appDir, "features");

const componentTypePathsMap = {
  element: "elements",
  layout: "layouts",
  page: "pages",
};

/**
 * List all features inside `src/app/features`
 * @returns {string[]}
 */
function listFeatures() {
  return fs.readdirSync(featuresDir).filter((f) => f !== ".gitkeep");
}

/**
 * List all components of a specific type inside a feature or APP
 * @param {string} feature
 * @param {"element" | "layout" | "page"} componentType
 * @returns {string[]}
 */
function listComponentsByType(feature, componentType) {
  const baseDir =
    feature === "APP"
      ? path.join(appDir, "components", componentTypePathsMap[componentType])
      : path.join(featuresDir, feature, "components", componentTypePathsMap[componentType]);

  return fs.existsSync(baseDir) ? fs.readdirSync(baseDir) : [];
}

/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("subcomponent", {
    description: "Generate a subcomponent inside a parent component",

    prompts: [
      {
        type: "list",
        name: "feature",
        message: "Select the feature:",
        choices: ["APP", ...listFeatures()],
      },
      {
        type: "list",
        name: "componentType",
        message: "Select the component type:",
        choices: Object.keys(componentTypePathsMap),
      },
      {
        type: "list",
        name: "parentComponent",
        message: "Select the parent component:",
        choices: (answers) =>
          listComponentsByType(answers.feature, answers.componentType),
      },
      {
        type: "input",
        name: "name",
        message: "Enter the subcomponent name:",
        validate: (value) =>
          value.trim() ? true : "Subcomponent name is required",
      },
    ],

    actions: (data) => {
      // Resolve the base path depending on whether the component belongs to APP or a feature
      const basePath =
        data.feature === "APP"
          ? path.join(
              "src/app/components",
              componentTypePathsMap[data.componentType],
              "{{parentComponent}}/components/{{name}}"
            )
          : path.join(
              "src/app/features/{{feature}}/components",
              componentTypePathsMap[data.componentType],
              "{{parentComponent}}/components/{{name}}"
            );

      // Define all files for the subcomponent
      const files = [
        { file: "{{name}}.tsx", template: "Component.tsx.hbs" },
        { file: "{{name}}.module.scss", template: "Component.module.scss.hbs" },
        { file: "{{name}}.types.ts", template: "Component.types.ts.hbs" },
        { file: "{{name}}.view-model.ts", template: "Component.view-model.ts.hbs" },
        { file: "index.ts", template: "Component.index.ts.hbs" },
      ];

      // Map files into plop actions
      return files.map(({ file, template }) => ({
        type: "add",
        path: path.join(basePath, file),
        templateFile: `generators/component/${template}`,
      }));
    },
  });
};
