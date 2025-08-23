import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const commonExcludes = [
  'node_modules/**',
  'dist/**',
  '.idea/**',
  '.git/**',
  '.cache/**',
  'src/lib/**',
  'src/i18n/**',
  'src/index.tsx',
  'src/app/index.tsx',
];

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    // Incluir **apenas** testes dentro de src
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: commonExcludes,
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      enabled: true,
      // Cobertura só do código dentro de src, ignorando libs, i18n e outros
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: commonExcludes,
    },
    maxWorkers: 16,
    minWorkers: 8,
  },
  plugins: [tsconfigPaths()],
});
