const fs = require('node:fs');
const path = require('node:path');

const featuresDir = path.join(process.cwd(), 'src/app/features');
const features = fs.readdirSync(featuresDir);

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Provider Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'provider name',
      validate: (value) => {
        if (!value.trim()) {
          return 'provider name is required';
        }

        return true;
      },
      filter: (value) => {
        return `${value}-provider`;
      },
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
        ? `src/app/components/providers`
        : `'src/app/features/{{feature}}/components/providers`;

    const actions = [
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/index.ts',
        templateFile: 'generators/provider/index.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'generators/provider/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: 'generators/provider/Component.types.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.model.ts',
        templateFile: 'generators/provider/Component.model.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'generators/provider/Component.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.context.tsx',
        templateFile: 'generators/provider/Component.context.tsx.hbs',
      },
    ];

    return actions;
  },
};
