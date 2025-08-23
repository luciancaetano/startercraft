import { compilerOptions } from './tsconfig.paths.json';
import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

export default {
  roots: ['<rootDir>/src', '<rootDir>'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: [compilerOptions.baseUrl],
  testMatch: ['**/?(*.)+(spec).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!lodash-es)'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
} as JestConfigWithTsJest;
