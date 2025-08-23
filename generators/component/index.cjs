const fs = require('node:fs');
const path = require('node:path');

const featuresDir = path.join(process.cwd(), 'src/app/features');
const features = fs.readdirSync(featuresDir);

function applySuffix(name = '', type = '') {
  if (type.toLowerCase().trim().endsWith('layout')) {
    return name + '-layout';
  }

  if (type.toLowerCase().trim().endsWith('page')) {
    return name + '-page';
  }

  return name;
}

const componentTypePathsMap = {
  element: 'elements',
  layout: 'layouts',
  page: 'pages',
};

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'Select Component Type',
      choices: ['element', 'layout', 'page'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
      validate: (value) => {
        if (!value.trim()) {
          return 'component name is required';
        }

        return true;
      },
      filter: (value, answers) => {
        return applySuffix(value, answers.componentType);
      },
    },
    {
      type: 'confirm',
      name: 'wantI18n',
      message: 'Do you want i18n?',
      default: true,
    },
    {
      type: 'list',
      name: 'feature',
      message: 'Select Feature',
      choices: ['APP', ...features].filter((f) => f !== '.gitkeep'),
      when: () => features.length > 0,
    },
  ],
  actions: (result) => {
    const basePath =
      !result.feature || result.feature === 'APP'
        ? `src/app/components/${componentTypePathsMap[result.componentType]}`
        : `src/app/features/{{feature}}/components/${componentTypePathsMap[result.componentType]}`;

    const useStyles =
      result.componentType === 'element' ||
      result.componentType === 'layout' ||
      result.componentType === 'page';

    const wantI18n = result.wantI18n;

    const isPage = result.componentType === 'page';

    const actions = [
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/index.ts',
        templateFile: !isPage
          ? 'generators/component/Component.index.ts.hbs'
          : 'generators/component/Page.index.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: isPage
          ? 'generators/component/Page.tsx.hbs'
          : 'generators/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: !isPage
          ? 'generators/component/Component.types.ts.hbs'
          : 'generators/component/Page.types.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.view-model.ts',
        templateFile: 'generators/component/Component.view-model.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: !isPage
          ? 'generators/component/Component.spec.tsx.hbs'
          : 'generators/component/Page.spec.tsx.hbs',
      },
    ];

    if (isPage) {
      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.routes.tsx',
        templateFile: 'generators/component/Component.routes.tsx.hbs',
      });
    }

    if (useStyles) {
      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.module.scss',
        templateFile: !isPage
          ? 'generators/component/Component.module.scss.hbs'
          : 'generators/component/Page.module.scss.hbs',
      });
    }

    if (wantI18n) {
      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/translations/index.ts',
        templateFile: 'generators/component/translations/index.ts.hbs',
      });

      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/translations/en/index.ts',
        templateFile: 'generators/component/translations/en/index.ts.hbs',
      });

      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/translations/pt-BR/index.ts',
        templateFile: 'generators/component/translations/pt-BR/index.ts.hbs',
      });
    }

    return actions;
  },
};
