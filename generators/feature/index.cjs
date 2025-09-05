/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Feature Structure Generator",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "Feature name",
      validate: (value) =>
        value.trim() ? true : "Feature name is required",
      filter: (value) => `${value.trim()}-feature`,
    },
  ],

  actions: () => {
    const basePath = "src/app/features/{{kebabCase name}}";

    // Define the folder structure for a new feature
    const folders = [
      "components/elements",
      "components/layouts",
      "components/providers",
      "components/pages",
      "config",
      "types",
      "hooks",
      "utils",
    ];

    // Actions to create .gitkeep files in each folder
    const folderActions = folders.map((folder) => ({
      type: "add",
      path: `${basePath}/${folder}/.gitkeep`,
      templateFile: "generators/feature/.gitkeep.hbs",
    }));

    // Add the default routes file
    const routeAction = {
      type: "add",
      path: `${basePath}/routes/index.tsx`,
      templateFile: "generators/feature/feature.routes.tsx.hbs",
    };

    return [...folderActions, routeAction];
  },
};
