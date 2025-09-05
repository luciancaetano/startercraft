const fs = require("node:fs");
const path = require("node:path");

const featuresDir = path.resolve(process.cwd(), "src/app/features");
const features = fs.readdirSync(featuresDir).filter((f) => f !== ".gitkeep");

/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Provider Generator",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "Provider name",
      validate: (value) =>
        value.trim() ? true : "Provider name is required",
      filter: (value) => `${value.trim()}-provider`,
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
    // Resolve base path depending on whether the provider belongs to APP or a feature
    const basePath =
      !data.feature || data.feature === "APP"
        ? "src/app/components/providers"
        : "src/app/features/{{feature}}/components/providers";

    // Files that will be generated for each provider
    const files = [
      { file: "index.ts", template: "index.ts.hbs" },
      { file: "{{kebabCase name}}.tsx", template: "Component.tsx.hbs" },
      { file: "{{kebabCase name}}.types.ts", template: "Component.types.ts.hbs" },
      { file: "{{kebabCase name}}.model.ts", template: "Component.model.ts.hbs" },
      { file: "{{kebabCase name}}.spec.tsx", template: "Component.spec.tsx.hbs" },
      { file: "{{kebabCase name}}.context.tsx", template: "Component.context.tsx.hbs" },
    ];

    // Map each file into a plop action
    return files.map(({ file, template }) => ({
      type: "add",
      path: `${basePath}/{{kebabCase name}}/${file}`,
      templateFile: `generators/provider/${template}`,
    }));
  },
};
