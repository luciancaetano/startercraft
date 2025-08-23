/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from '@lib/i18n/configure';
import '@testing-library/jest-dom/vitest';

vi.mock('@lib/i18n', () => ({
  withResourceBundle: (component: any) => component,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: i18n,
  }),
}));
