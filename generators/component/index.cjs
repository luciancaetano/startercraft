const fs = require("node:fs");
const path = require("node:path");

const featuresDir = path.resolve(process.cwd(), "src/app/features");
const features = fs.readdirSync(featuresDir).filter((f) => f !== ".gitkeep");

const componentTypePathsMap = {
  element: "elements",
  layout: "layouts",
  page: "pages",
};

/**
 * @param {string} name
 * @param {string} type
 * @returns {string}
 */
function applySuffix(name = "", type = "") {
  const normalizedType = type.toLowerCase().trim();

  if (normalizedType.endsWith("layout")) return `${name}-layout`;
  if (normalizedType.endsWith("page")) return `${name}-page`;

  return name;
}

/**
 * @param {string} feature
 * @param {string} componentType
 * @returns {string}
 */
function resolveBasePath(feature, componentType) {
  const componentDir = componentTypePathsMap[componentType];

  if (!feature || feature === "APP") {
    return `src/app/components/${componentDir}`;
  }

  return `src/app/features/{{feature}}/components/${componentDir}`;
}

/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Component Generator",

  prompts: [
    {
      type: "list",
      name: "componentType",
      message: "Select Component Type",
      choices: Object.keys(componentTypePathsMap),
    },
    {
      type: "input",
      name: "name",
      message: "Component name",
      validate: (value) =>
        value.trim() ? true : "Component name is required",
      filter: (value, answers) =>
        applySuffix(value, answers.componentType),
    },
    {
      type: "list",
      name: "feature",
      message: "Select Feature",
      choices: ["APP", ...features],
      when: () => features.length > 0,
    },
  ],

  actions: (data) => {
    const { componentType, feature } = data;
    const basePath = resolveBasePath(feature, componentType);

    const isPage = componentType === "page";
    const needsStyles = ["element", "layout", "page"].includes(componentType);

    const actions = [
      {
        type: "add",
        path: `${basePath}/{{kebabCase name}}/index.ts`,
        templateFile: `generators/component/${isPage ? "Page" : "Component"}.index.ts.hbs`,
      },
      {
        type: "add",
        path: `${basePath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: `generators/component/${isPage ? "Page" : "Component"}.tsx.hbs`,
      },
      {
        type: "add",
        path: `${basePath}/{{kebabCase name}}/{{kebabCase name}}.types.ts`,
        templateFile: `generators/component/${isPage ? "Page" : "Component"}.types.ts.hbs`,
      },
      {
        type: "add",
        path: `${basePath}/{{kebabCase name}}/{{kebabCase name}}.view-model.ts`,
        templateFile: "generators/component/Component.view-model.ts.hbs",
      },
      {
        type: "add",
        path: `${basePath}/{{kebabCase name}}/{{kebabCase name}}.spec.tsx`,
        templateFile: `generators/component/${isPage ? "Page" : "Component"}.spec.tsx.hbs`,
      },
    ];

    if (needsStyles) {
      actions.push({
        type: "add",
        path: `${basePath}/{{kebabCase name}}/{{kebabCase name}}.module.scss`,
        templateFile: `generators/component/${isPage ? "Page" : "Component"}.module.scss.hbs`,
      });
    }

    return actions;
  },
};
