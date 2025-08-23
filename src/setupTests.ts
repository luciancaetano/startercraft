/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import i18n from '@lib/i18n/configure';

// general cleanup
afterEach(async () => {});

jest.mock('@lib/i18n', () => ({
  withResourceBundle: (component: any) => component,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: i18n,
  }),
}));
