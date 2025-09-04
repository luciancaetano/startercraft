import AppProvider, { AppProviderProps } from './index';
import { render } from '@lib/tests';
import { createRoutesStub } from 'react-router';
import { vi } from 'vitest';

// Mock AppProvider to exclude internal Router for testing
vi.mock('./index', async () => {
  const OriginalAppProvider = (
    (await vi.importActual('./index')) as { default: React.FC<AppProviderProps> }
  ).default as React.FC<AppProviderProps>;
  return {
    default: function MockedAppProvider(props: AppProviderProps) {
      return <OriginalAppProvider {...props} withoutRouter />;
    },
  };
});

const AppProviderWrapper = () => <AppProvider />;

describe('AppProvider Component', () => {
  it('should render', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: AppProviderWrapper,
      },
    ]);

    const { container } = render(<Stub initialEntries={['/']} />);
    expect(container).toBeTruthy();
  });
});
