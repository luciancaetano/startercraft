const fs = require('node:fs');
const path = require('node:path');

const appDir = path.join(process.cwd(), 'src/app');
const featuresDir = path.join(appDir, 'features');

const componentTypePathsMap = {
  element: 'elements',
  layout: 'layouts',
  page: 'pages',
};

function listFeatures() {
  return fs.readdirSync(featuresDir).filter((f) => f !== '.gitkeep');
}

function listComponents(feature) {
  const componentsDir = feature === 'APP'
    ? path.join(appDir, 'components')
    : path.join(featuresDir, feature, 'components');
  if (fs.existsSync(componentsDir)) {
    return fs.readdirSync(componentsDir);
  }
  return [];
}

function listComponentsByType(feature, componentType) {
  const baseDir = feature === 'APP'
    ? path.join(appDir, 'components', componentTypePathsMap[componentType])
    : path.join(featuresDir, feature, 'components', componentTypePathsMap[componentType]);

  if (fs.existsSync(baseDir)) {
    return fs.readdirSync(baseDir);
  }
  return [];
}

/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('subcomponent', {
    description: 'Generate a subcomponent within a feature and component',
    prompts: [
      {
        type: 'list',
        name: 'feature',
        message: 'Select the feature:',
        choices: ["APP", ...listFeatures()],
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Select the component type:',
        choices: ['element', 'layout', 'page'],
      },
      {
        type: 'list',
        name: 'parentComponent',
        message: 'Select the parent component:',
        choices: (answers) => listComponentsByType(answers.feature, answers.componentType),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the subcomponent:',
      },
      {
        type: 'confirm',
        name: 'i18n',
        message: 'Will this subcomponent support i18n?',
        default: false,
      },
    ],
    actions: (data) => {
      const basePath = data.feature === 'APP'
        ? path.join('src/app/components', componentTypePathsMap[data.componentType], '{{parentComponent}}/components/{{name}}')
        : path.join('src/app/features/{{feature}}/components', componentTypePathsMap[data.componentType], '{{parentComponent}}/components/{{name}}');

      const actions = [
        {
          type: 'add',
          path: path.join(basePath, '{{name}}.tsx'),
          templateFile: 'generators/component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: path.join(basePath, '{{name}}.module.scss'),
          templateFile: 'generators/component/Component.module.scss.hbs',
        },
        {
          type: 'add',
          path: path.join(basePath, '{{name}}.types.ts'),
          templateFile: 'generators/component/Component.types.ts.hbs',
        },
        {
          type: 'add',
          path: path.join(basePath, '{{name}}.view-model.ts'),
          templateFile: 'generators/component/Component.view-model.ts.hbs',
        },
        {
          type: 'add',
          path: path.join(basePath, 'index.ts'),
          templateFile: 'generators/component/Component.index.ts.hbs',
        },
      ];

      if (data.i18n) {
        actions.push(
          {
            type: 'add',
            path: path.join(basePath, 'translations/index.ts'),
            templateFile: 'generators/component/translations/index.ts.hbs',
          },
          {
            type: 'add',
            path: path.join(basePath, 'translations/en/index.ts'),
            templateFile: 'generators/component/translations/en/index.ts.hbs',
          },
          {
            type: 'add',
            path: path.join(basePath, 'translations/pt-BR/index.ts'),
            templateFile: 'generators/component/translations/pt-BR/index.ts.hbs',
          }
        );
      }

      return actions;
    },
  });
};
