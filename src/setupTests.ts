/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from '@config/i18n.config';
import '@testing-library/jest-dom/vitest';

vi.mock('@lib/i18n', () => ({
  withResourceBundle: (component: any) => component,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: i18n,
  }),
}));
