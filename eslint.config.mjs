import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import _import from 'eslint-plugin-import';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from "globals";
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['node_modules/*', 'postcss.config.cjs', 'eslint.config.mjs', 'dist/*', 'public/*', 'plopfile.cjs', 'generators/*', '.github/*', '.docs/*'],
  },
  ...compat.extends('eslint:recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        process: true,
      },
      ecmaVersion: 8,
      sourceType: 'module',
    },
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:import/warnings',
      'plugin:import/errors',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:testing-library/react',
      'plugin:jsx-a11y/recommended',
      'plugin:jest-dom/recommended',
    ),
  ).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.cjs', '**/*.tsx'],
  })),
  {
    files: ['**/*.ts', '**/*.cjs', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs'],
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      import: fixupPluginRules(_import),
      'testing-library': fixupPluginRules(testingLibrary),
      'jest-dom': fixupPluginRules(jestDom),
      'no-relative-import-paths': noRelativeImportPaths,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        vi: true,
      },
      parser: tsParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      // ======================
      // Regras ESLint custom
      // ======================
      'eol-last': ['error', 'always'],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'src' },
      ],
      'jsx-a11y/label-has-associated-control': 'off',
      'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'never',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'space-before-function-paren': ['error', 'never'],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'array-bracket-spacing': ['error', 'always'],
      'no-multi-spaces': 'error',
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'space-before-blocks': 'error',
      'no-trailing-spaces': 'error',
      indent: ['error', 2],
      'id-length': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-explicit-any': 'error',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      semi: ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-double'],
      'comma-dangle': ['error', 'always-multiline'],
      'testing-library/no-node-access': 'off',
      'testing-library/no-container': 'off',
      'testing-library/prefer-screen-queries': 'off',
      'no-empty-pattern': 'off',
      'no-restricted-imports': ['error', { patterns: ['@/features/*/*'] }],
      'linebreak-style': 'off',
      'react/prop-types': 'off',
      'import/order': [
        'error',
        {
          groups: [],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-var-requires': 'off',

      // ======================
      // Prettier integration
      // ======================
      'prettier/prettier': 'error',
    },
  },
  // ======================
  // eslint-config-prettier para desativar regras conflitantes
  ...fixupConfigRules(eslintConfigPrettier).map((config) => ({
    ...config,
    files: ['**/*.{js,ts,jsx,tsx,cjs,mjs}'],
  })),
];
