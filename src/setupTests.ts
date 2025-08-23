/* eslint-disable testing-library/no-manual-cleanup */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import i18n from '@lib/i18n/configure';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
vi.mock('@lib/i18n', () => ({
  withResourceBundle: (component: any) => component,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: i18n,
  }),
}));
